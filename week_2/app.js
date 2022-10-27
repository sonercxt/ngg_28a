const homePage = document.getElementById("home");
const aboutMe = document.getElementById("about-me");
const mySkill = document.getElementById("my-skill");
const contact = document.getElementById("contact");

const aboutMeButton = document.getElementById("about-me-button");
const mySkillButton = document.getElementById("skill-button");
const contactButton = document.getElementById("contact-button");

homePage.className = "visible";
aboutMe.className = "non-visible";
mySkill.className = "non-visible";
contact.className = "non-visible";

// aboutMeButton.style.color = "#1cfdaf";
aboutMeButton.style.cursor = "default";
mySkillButton.style.cursor = "pointer";
contactButton.style.cursor = "pointer";

const handleClickHome = () => {
  homePage.className = "visible";
  aboutMe.className = "non-visible";
  mySkill.className = "non-visible";
  contact.className = "non-visible";

  aboutMeButton.style.color = "#ffffff";
  mySkillButton.style.color = "#ffffff";
  contactButton.style.color = "#ffffff";

  aboutMeButton.style.cursor = "pointer";
  mySkillButton.style.cursor = "pointer";
  contactButton.style.cursor = "pointer";
};

const handleClickAbout = () => {
  aboutMe.className = "visible";
  mySkill.className = "non-visible";
  contact.className = "non-visible";
  homePage.className = "non-visible";

  aboutMeButton.style.color = "#1cfdaf";
  mySkillButton.style.color = "#ffffff";
  contactButton.style.color = "#ffffff";

  aboutMeButton.style.cursor = "default";
  mySkillButton.style.cursor = "pointer";
  contactButton.style.cursor = "pointer";
};

const handleClickSkill = () => {
  aboutMe.className = "non-visible";
  mySkill.className = "visible";
  contact.className = "non-visible";
  homePage.className = "non-visible";

  aboutMeButton.style.color = "#ffffff";
  mySkillButton.style.color = "#1cfdaf";
  contactButton.style.color = "#ffffff";

  aboutMeButton.style.cursor = "pointer";
  mySkillButton.style.cursor = "default";
  contactButton.style.cursor = "pointer";
};

const handleClickContact = () => {
  aboutMe.className = "non-visible";
  mySkill.className = "non-visible";
  contact.className = "visible";
  homePage.className = "non-visible";

  aboutMeButton.style.color = "#ffffff";
  mySkillButton.style.color = "#ffffff";
  contactButton.style.color = "#1cfdaf";

  aboutMeButton.style.cursor = "pointer";
  mySkillButton.style.cursor = "pointer";
  contactButton.style.cursor = "default";
};

// canvas

const canvas = document.getElementById("cw");
const context = canvas.getContext("2d");
context.globalAlpha = 0.5;

const cursor = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

let particlesArray = [];

generateParticles(101);
setSize();
anim();

addEventListener("mousemove", (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
});

addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    cursor.x = e.touches[0].clientX;
    cursor.y = e.touches[0].clientY;
  },
  { passive: false }
);

addEventListener("resize", () => setSize());

function generateParticles(amount) {
  for (let i = 0; i < amount; i++) {
    particlesArray[i] = new Particle(innerWidth / 2, innerHeight / 2, 4, generateColor(), 0.02);
  }
}

function generateColor() {
  let hexSet = "0123456789ABCDEF";
  let finalHexString = "#";
  for (let i = 0; i < 6; i++) {
    finalHexString += hexSet[Math.ceil(Math.random() * 15)];
  }
  return finalHexString;
}

function setSize() {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
}

function Particle(x, y, particleTrailWidth, strokeColor, rotateSpeed) {
  this.x = x;
  this.y = y;
  this.particleTrailWidth = particleTrailWidth;
  this.strokeColor = strokeColor;
  this.theta = Math.random() * Math.PI * 2;
  this.rotateSpeed = rotateSpeed;
  this.t = Math.random() * 150;

  this.rotate = () => {
    const ls = {
      x: this.x,
      y: this.y,
    };
    this.theta += this.rotateSpeed;
    this.x = cursor.x + Math.cos(this.theta) * this.t;
    this.y = cursor.y + Math.sin(this.theta) * this.t;
    context.beginPath();
    context.lineWidth = this.particleTrailWidth;
    context.strokeStyle = this.strokeColor;
    context.moveTo(ls.x, ls.y);
    context.lineTo(this.x, this.y);
    context.stroke();
  };
}

function anim() {
  requestAnimationFrame(anim);

  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach((particle) => particle.rotate());
}

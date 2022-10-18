const aboutMe = document.getElementById("about-me");
const quiz = document.getElementById("quiz");
const contact = document.getElementById("contact");

const aboutMeButton = document.getElementById("about-me-button");
const quizButton = document.getElementById("quiz-button");
const contactButton = document.getElementById("contact-button");

aboutMe.className = "visible";
quiz.className = "non-visible";
contact.className = "non-visible";

aboutMeButton.style.backgroundColor = "#001530";
aboutMeButton.style.cursor = "default";
quizButton.style.cursor = "pointer";
contactButton.style.cursor = "pointer";

const handleClickAbout = () => {
  aboutMe.className = "visible";
  quiz.className = "non-visible";
  contact.className = "non-visible";

  aboutMeButton.style.backgroundColor = "#001530";
  quizButton.style.backgroundColor = "#6c6cff";
  contactButton.style.backgroundColor = "#6c6cff";

  aboutMeButton.style.cursor = "default";
  quizButton.style.cursor = "pointer";
  contactButton.style.cursor = "pointer";
};

const handleClickQuiz = () => {
  aboutMe.className = "non-visible";
  quiz.className = "visible";
  contact.className = "non-visible";

  aboutMeButton.style.backgroundColor = "#6c6cff";
  quizButton.style.backgroundColor = "#001530";
  contactButton.style.backgroundColor = "#6c6cff";

  aboutMeButton.style.cursor = "pointer";
  quizButton.style.cursor = "default";
  contactButton.style.cursor = "pointer";
};

const handleClickContact = () => {
  aboutMe.className = "non-visible";
  quiz.className = "non-visible";
  contact.className = "visible";

  aboutMeButton.style.backgroundColor = "#6c6cff";
  quizButton.style.backgroundColor = "#6c6cff";
  contactButton.style.backgroundColor = "#001530";

  aboutMeButton.style.cursor = "pointer";
  quizButton.style.cursor = "pointer";
  contactButton.style.cursor = "default";
};

// Questions & Answers 

const questions = [
    {
      question: "What does HTML stand for?",
      choices: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "What does CSS stand for?",
      choices: ["Counter Strike: Source", "Computer Style Sheets", "Cascading Style Sheets"],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "What is the purpose of JavaScript?",
      choices: ["To style web pages", "To create dynamic and interactive websites", "To define the structure of a webpage"],
      correctAnswer: "To create dynamic and interactive websites"
    },
    {
      question: "Which of the following is not a valid CSS selector? ",
      choices: ["#id", ".class", "//comment"],
      correctAnswer: "//comment"
    },
    {
      question: "What is the correct way to comment in JavaScript?",
      choices: ["/* This is a comment */", "// This is a comment", "# This is a comment", "' This is a comment"],
      correctAnswer: "// This is a comment"
    },
    {
      question: "What is the purpose of the 'alt' attribute in an HTML image tag?",
      choices: ["To add a border around the image", "To specify the image source", "To provide alternative text for screen readers", "To set the image width and height"],
      correctAnswer: "To provide alternative text for screen readers"
    },
    {
      question: "What is the latest version of HTML as of 2023?",
      choices: ["HTML4", "HTML5", "XHTML", "HTML2022"],
      correctAnswer: "HTML5"
    },
    {
      question: "Which of the following is not a JavaScript data type?",
      choices: ["String", "Number", "Boolean", "Float"],
      correctAnswer: "Float"
    },
  ];
  
 
  // The `questions` array contains a series of objects, each representing a multiple-choice question.
// Each question object has the following properties:
// - `question`: a string containing the question text
//   - `choices`: an array of strings, each representing a possible answer
//  
// - `correctAnswer`: a string representing the correct answer to the question
//
// The `questions` array can be used to create a quiz or survey, where the user is presented with each question
// and must select the correct answer from the available choices. The `correctAnswer` property can be used to
// check the user's answer and provide feedback.
//
// Note that the `choices` array should always contain at least one element, and the `correctAnswer` property
// should always be set to one of the values in the `choices` array.
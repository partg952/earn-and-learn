const section1 = [
  {
    question: "Please Tell Us Your Name",
    type: "text",
    answer: "",
  },
  {
    question: "How Old Are You?",
    type: "Single Choice",
    options: ["18 and below", "19-25", "26 to 35", "36 to 45", "46 and older"],
    other: false,
    answer: "",
  },
  {
    question: "Which one do you identify with?",
    type: "Single Choice",
    options: ["Female", "Male"],
    other: true,
    answer: "",
  },
  {
    question: "Are you a student?",
    type: "Single Choice",
    options: ["Yes", "No"],
    other: false,
    answer: "",
  },
  {
    question:
      "If no, what is the highest level of education that you have achieved?",
    type: "Single Choice",
    options: ["Higher Secondary", "Degree", "Diploma"],
    other: true,
    answer: "",
  },
  {
    question: "What is the language you are most comfortable with?",
    type: "Multiple Choice",
    other:false,
    options: ["English", "Hindi"],
    answer: "",
  },
  {
    question: "Are you currently employed?",
    type: "Single Choice",
    options: ["Yes", "No"],
    other: true,
    answer: "",
  },
];

const section2 = [
  {
    question: "What are the exams that you are preparing for?",
    type: "Multiple Choice",
    options: ["Bank PO", "SSB", "JEE Mains", "JEE Advanced", "UCEED", "NEET"],
    other:false,
    answer: "",
  },
  {
    question:
    "On a scale of 5, how much do you think is the efficiency of your current method of preparation?",
    type: "Scale",
    options: [1, 2, 3, 4, 5],
    firstLabel: "I feel I need to explore other methods of preparation",
    lastLabel: "I feel confident in my method of preparation",
    other: false,
    answer: "",
  },
  {
    question: "How do you practice",
    type: "Single Choice",
    options: [
      "Offline",
      "Online mock test websites that simulate real tests",
    ],
    other: true,
    answer: "",
  },
];

const section3 = [
  {
    question: "Do you go for any coaching?",
    type: "Single Choice",
    options: ["Yes", "No"],
    other: false,
    answer: "",
  },
  {
    question:
      "Please share the amount of fees you paid for the coaching institution if you are comfortable to do so",
    type: "text",
    other: false,
    answer: "",
  },
  {
    question:
      "Do you continue analysing your answers and recognising your weakness after checking your score?",
    type: "Single Choice",
    options: ["Yes", "No", "Sometimes"],
    other: true,
    answer: "",
  },
  {
    question:
      "On a scale from 1 - 5, how helpful is this offline mode of practicing mock tests for preparing for your exam?",
    type: "Scale",
    options: [1, 2, 3, 4, 5],
    firstLabel: "Not helpful at all",
    lastLabel: "Extremely helpful",
    other: false,
    answer: "",
  },
  {
    question:
      "What are a few of the tools that help in accessing such mock tests",
    type: "text",
    other: false,
    answer: "",
  },
];

const section4 = [
  {
    question:
      "Which of the following websites do you prefer in order to take mock tests? ",
    type: "Multiple Choice",
    options: [
      "MyPat",
      "Toppr",
      "Extra Marks",
      "Eklavya",
      "Testbook",
      "EntrancePrime",
    ],
    other: false,
    answer: "",
  },
  {
    question:
    "Do you follow the suggestions/analysis given to you by these websites to improve your studies?",
    type: "Single Choice",
    options: ["Yes", "No"],
    other: true,
    answer: "",
  },
  {
    question: "What are the features that you prefer in these websites?",
    type: "Multiple Choice",
    options: [
      "They should provide all solutions at the end",
      "They should provide results immediately",
      "They should provide detailed analytics of your performance immediately at the end of your exam",
      "They should provide proper guidance for improving performance",
    ],
    other: false,
    answer: "",
  },
];

const section5 = [
  {
    question: "Which device do you use to study?",
    type: "Single Choice",
    options: ["Laptop", "Smartphone", "None"],
    other: true,
    answer: "",
  },
  {
    question:
      "On a scale of 1-5, during a mock test, what is the possibility of you getting distracted by your surroundings?",
    type: "Scale",
    options: [1, 2, 3, 4, 5],
    other: true,
    answer: "",
  },
  {
    question:
      "Do you think treating yourself with something good beneficial after exams?",
    type: "Single Choice",
    options: ["Yes", "No", "Maybe"],
    other: true,
    answer: "",
  },
  {
    question:
      "If you get some money for your good performance in an exam, how would you feel?",
    type: "Single Choice",
    options: ["Excited", "It doesn't matter to me", "Guilty"],
    other: true,
    answer: "",
  },
  {
    question:
      "How much do you believe you can pay for giving short contests that will reward you with cash money if you win along with a detailed analytics of your performance? ",
    type: "Single Choice",
    options: ["Rs 20", "Rs 50", "Rs 100", "I do not wish to pay"],
    other: true,
    answer: "",
  },
];

const section6 = [
  {
    question:
      "Are there any online websites which you use for performance analytics?",
    type: "Single Choice",
    options: ["Yes", "No"],
    other: false,
    answer: "",
  },
  {
    question: "What are the analytics that they provide?",
    type: "Multiple Choice",
    options: [
      "How many answers you got right",
      "Solutions for every uestion",
      "Average time that you spent on the exam",
      "Your percentage amongst others who have taken the same mock test",
    ],
    other: false,
    answer: "",
  },
  {
    question: "Please provide the URL of the website",
    type: "text",
    answer: "",
    other: false,
  },
  {
    question: "What features you wish these website had?",
    type: "text",
    answer: "",
    other: false,
  },
  {
    question: "What makes you trust the above website for analysis?",
    type:"text",
    answer:"",
    other:false
  },
  
  
];

const section7 = [
  {
    question: "Did you like the walk-through of our app?",
    type: "Single Choice",
    options: ["Yes", "No"],
    answer: "",
    other: false,
  },
  {
    question: "Which part of the app you like the most?",
    type: "text",
    answer: "",
    other: false,
  },
  {
    question: "Was the experience of the Exam Playground feature satisfactory?",
    type: "Single Choice",
    options: ["Yes", "No"],
    answer: "",
    other: false,
  },
  {
    question: "Name the features you want us to change",
    type: "text",
    answer: "",
    other: false,
  },
  {
    question: "What part of the app did you like the most?",
    type: "Multiple Choice",
    answer: "",
    options: [
      "The visual aesthetics of the app",
      "The feature of earning money by performing well",
      "The feature of detailed analytics ad personalised comments after a contest",
    ],
    other: false,
  },
  {
    question:
      "Do you have any suggestions as to how we can improve the application to provide the best possible experience for you?",
    type: "text",
    answer: "",
    other: false,
  },
  {
    question:
      "Please provide your contact details if you wish to be contacted for a short interview",
      type:"text",
      answer:"",
      other:false
  },
];

export { section1, section2, section3, section4, section5,section6,section7 };

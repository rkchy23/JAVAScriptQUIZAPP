const quesJSON = [
  {
    correctAnswer: "NaN",
    options: [1, 0, "null", "NaN"],
    question: "What will be the output of the following code? \n console.log(Infinity/infinity)",
  },
  {
    correctAnswer: "Hello",
    options: [
      "0",
      "Hello",
      "true",
      "false",
    ],
    question: "What do you think the output of this code will be?  \n console.log(0||'Hello'||'Infinity')",
  },
  {
    correctAnswer: "A.(4 > 2 && 'hello' != 'Hello')",
    options: [
      "A.(4 > 2 && 'hello' != 'Hello')",
      "B. (false || null)",
      "C. (undefined === null)",
      "D. ('0' === 0)",
    ],
    question: "Which of the following expressions evaluate to truthy value in JavaScript?",
  },
  {
    correctAnswer: 2,
    options: [2, "'2'", "true", "false"],
    question: "What is the result of the following expression in JavaScript? \n console.log(true+true)",
  },
  {
    correctAnswer: "Automatically conversion of variable to another data type",
    options: [
      "Automatically conversion of variable to another data type",
      "Converting the data type by specifying the data type.",
      "Conversion of data type using typeof operator.",
      "Changing values of variables at runtime.",
    ],
    question: "What is type coercion in JavaScript?",
  },
  {
    correctAnswer: "let num = parseInt('42px');",
    options: [
      "let num = parseInt('42px');",
      "console.log(undefined.toString());",
      "let str = toNumber('5');",
      "console.log(string(100));",
    ],
    question: "Which of the following statements will not throw an error?",
  },
 
];
console.log(quesJSON[1]);

// const questionObj =
//     {
//       correctAnswer: 'Three ',
//       options: ['Two', 'Three ', 'Four', 'Five'],
//       question:
//         "How many pieces of bun are in a Mcdonald's Big Mac?",
//     };

//Accessing all the elements:
let questionEl = document.getElementById("question");
let optionEl = document.getElementById("options");
let scoreEl = document.getElementById("score");
let nextEl = document.getElementById("next");

// Variables
let score = 0;
let currentQuestion = 0;
let totalMarks = quesJSON.length;
//Manipulating the DOM:
//Setting question text content
showQuestion();

function showQuestion() {
  // Destructuring the object
  let { correctAnswer, options, question } = quesJSON[currentQuestion];
  questionEl.innerText = question;
  let shuffledOptions = shuffleOptions(options);
  shuffledOptions.forEach((opt) => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    optionEl.appendChild(btn);

    btn.addEventListener("click", function () {
      if (opt == correctAnswer) {
        score++;
      } else {
        score -= 0.25;
      }
      scoreEl.innerHTML = `Score ${score} / ${totalMarks}`;
      nextQuestion();
    });
  });
}
function nextQuestion() {
  currentQuestion++;
  optionEl.innerHTML = "";
  if (currentQuestion >= quesJSON.length) {
    questionEl.innerHTML = "Quiz Completed";
    nextEl.remove();
  } else {
    showQuestion();
  }
}
nextEl.addEventListener("click", () => {
  scoreEl.innerHTML = `Score ${score} / ${totalMarks}`;
  nextQuestion();
});
// questionEl.innerText=question;

// let shuffledOptions=shuffleOptions(options);
//Populating the Options div with the buttons.
// shuffledOptions.forEach((opt)=>{
//   let btn=document.createElement('button');
//   btn.innerText=opt;
//   optionEl.appendChild(btn);

//   btn.addEventListener('click',function (){
//     if(opt==correctAnswer){
//       score++;
//     }
//     else{
//       score-=0.25;
//     }
//     scoreEl.innerHTML=`Score ${score}`;
//
//     optionEl.innerHTML="";

//   })

// })

//Shuffling the Options
function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * i);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

// console.log(shuffleOptions([1, 2, 3, 4, 5]));

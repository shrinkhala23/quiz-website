const questions = [
    {
        question: "Which is the Largest Animal in the World.",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale ", correct: true},
            { text: "Girraf", correct: false},
            { text: "Elephant", correct: false}
        ]
    },

    {
        question: "Which is the Largest River in India.",
        answers: [
            { text: "Yamuna", correct: false},
            { text: "Ganga ", correct: true},
            { text: "Godavari", correct: false},
            { text: "Chambal", correct: false}
        ]
    },

    {
        question: "Who is known as Father of Nation.",
        answers: [
            { text: "pt. jawaharlal nehru", correct: false},
            { text: "dr. BR Ambedkar", correct: false},
            { text: "Mahatma Gandhi", correct: true},
            { text: "Lal Bahadur Shahtri ", correct: false}
        ]
    },
    {
        question: "Which is the Largest Continent.",
        answers: [
            { text: "Asia ", correct: true},
            { text: "Africa", correct: false},
            { text: "Australia", correct: false},
            { text: "None ", correct: false}
        ]
    },

    {
        question: "which is the Largest Desert in the World.",
        answers: [
            { text: "Thar ", correct: false},
            { text: "Antartica Polar Desert", correct: true},
            { text: "Sahara", correct: false},
            { text: "None ", correct: false}
        ]
    },
]
 const questionElement = document.getElementById("question");
 const answerbutton = document.getElementById("answer-button");
 const nextbutton = document.getElementById("next-button");

 let currentquestionIndex= 0;
 let score = 0;
 function startquiz(){
    currentquestionIndex = 0;
    score =0;
    nextbutton.innerHTML = "Next";
    showquestion();

 }

 function showquestion(){
    resetState();
    let currentquestion = questions[currentquestionIndex];
    let questionNo = currentquestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentquestion.question;


    currentquestion.answers.forEach(answer => {
          const button = document.createElement("button");
          button.innerHTML = answer.text;
          button.classList.add("btn");
          answerbutton.appendChild(button);
          if(answer.correct){
            button.dataset.correct = answer.correct;
          }
          button.addEventListener("click", selectanswer);
    });

 }

  function resetState(){
    nextbutton.style.display = "none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
  }
 function selectanswer(e){
    const selectbtn = e.target;
    const iscorrect = selectbtn.dataset.correct === "true";
    if(iscorrect){
     selectbtn.classList.add("correct");
     score++;

} else{
    selectbtn.classList.add("incorrect");
}
Array.from(answerbutton.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

});
nextbutton.style.display= "block"
}

function showscore(){
    resetState();
    questionElement.innerHTML = ` you scored ${score} out od ${questions.length}!`;
    nextbutton.innerHTML = "Play again";
    nextbutton.style.display = "block";
}


function handleNextButton(){
    currentquestionIndex++;
    if(currentquestionIndex< questions.length){
        showquestion();
    }else{
        showscore();
    }
}


nextbutton.addEventListener("click", ()=>{
    if(currentquestionIndex < questions.length){
        handleNextButton();
    }else{
    startquiz();
    }
})
 startquiz();
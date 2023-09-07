let categoryQuestions;
let wrong = 0;
let correct = 0;
let unattempted = 0;
let questionIndex=0;
let selectedAns = -1;
var timeLeft = 300;

const categoryChoice = localStorage.getItem("category");
document.getElementById("category").innerText = categoryChoice;
document.getElementById("score").innerText = correct;
document.getElementById("timer").innerText = timeLeft;

console.log(categoryChoice);

if(categoryChoice === "Pipes and Cistern"){
    categoryQuestions =  [
        new Question("A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is:",
        [
            "6 hours",
            "10 hours",
            "15 hours",
            "30 hours"
        ],
        "15 hours",
        ),
    
        new Question(
            "Two pipes A and B can fill a cistern in 37 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",
            ["5 min",
            "9 min",
            "10 min",
            "15 min"],
            "9 min"
        ),
        new Question(
            "Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
            [
                "60 gallons",
            "100 gallons",
            "120 gallons",
            "180 gallons"
            ],
            "120 gallons"
        ),
        new Question(
            "Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately",
            [
                "1 hour",
                "2 hours",
                "6 hours",
                "8 hours"
            ],
            "6 hours"
        ),
        new Question(
            "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank",
            [
                "12 min",
                "15 min",
                "25 min",
                "50 min"
            ],
            "12 min"
        ),
        new Question(
            "Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank",
            [
                "10 min. 20 sec.",
                "11 min. 45 sec.",
                "12 min. 30 sec.",
                "14 min. 40 sec."
            ],
            "14 min. 40 sec."
        ),
        new Question(
            "One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in:",
            [
                "81 min.",
                "108 min.",
                "144 min.",
                "192 min.",
            ],
            "144 min."
        ),
        new Question(
            "A large tanker can be filled by two pipes A and B in 60 minutes and 40 minutes respectively. How many minutes will it take to fill the tanker from empty state if B is used for half the time and A and B fill it together for the other half?",
            [
                "15 min",
                "20 min",
                "27.5 min",
                "30 min"
            ],
            "30 min"
        ),
        new Question(
            "A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?",
            [
                "3 hrs 15 min",
                "3 hrs 45 min",
                "4 hrs",
                "4 hrs 15 min"
            ],
            "3 hrs 45 min"
        ),
        new Question(
            "Three pipes A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is:",
            [
                "10",
                "12",
                "14",
                "16"
            ],
            "14"
        )
    ]
}
else if(categoryChoice === "Probability"){
    categoryQuestions = [
        new Question(
            "Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?",
            [
                "1/2",
                "2/5",
                "8/15",
                "9/20"
            ],
            "9/20"
        ),

        new Question(
            "A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?",
            [
                "10/21",
                "11/21",
                "2/7",
                "5/7"
            ],
            "10/21"
        ),
        new Question(
            "In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?",
            [
                "1/3",
                "3/4",
                "7/19",
                "8/21"
            ],
            "1/3"
        ),
        new Question(
            "What is the probability of getting a sum 9 from two throws of a dice?",
            [
                "1/6",
                "1/8",
                "1/9",
                "1/12"
            ],
            "1/9"
        ),
        new Question(
            "Three unbiased coins are tossed. What is the probability of getting at most two heads?",
            [
                "3/4",
                "1/4",
                "3/8",
                "7/8"
            ],
            "7/8"
        ),
        new Question(
            "Two dice are thrown simultaneously. What is the probability of getting two numbers whose product is even?",
            [
                "1/2",
                "3/4",
                "3/8",
                "5/16"
            ],
            "3/4"
        ),
        new Question(
            "Three unbiased coins are tossed. What is the probability of getting at most two heads?",
            [
                "3/4",
                "1/4",
                "3/8",
                "7/8"
            ],
            "7/8"
        ),
        new Question(
            "What is the probability of getting a sum 9 from two throws of a dice?",
            [
                "1/6",
                "1/8",
                "1/9",
                "1/12"
            ],
            "1/9"
        ),
        new Question(
            "In a class, there are 15 boys and 10 girls. Three students are selected at random. The probability that 1 girl and 2 boys are selected, is:",
            [
                "21/46",
                "25/117",
                "1/50",
                "3/25"
            ],
            "21/46"
        ),
        new Question(
            "What is the probability of getting a sum 9 from two throws of a dice?",
            [
                "1/6",
                "1/8",
                "1/9",
                "1/12"
            ],
            "1/9"
        ),
    ]
}
else if(categoryChoice === "Problem On Ages"){
    categoryQuestions = [
        new Question(
            "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
            [
                "4 years",
                "8 years",
                "10 years",
                "None of these"
            ],
            "4 years"
        ),
        new Question(
            "A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?",
            [
                "10/21",
                "11/21",
                "2/7",
                "5/7"
            ],
            "10/21"
        ),
        new Question(
            "In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?",
            [
                "1/3",
                "3/4",
                "7/19",
                "8/21"
            ],
            "1/3"
        ),
        new Question(
            "What is the probability of getting a sum 9 from two throws of a dice?",
            [
                "1/6",
                "1/8",
                "1/9",
                "1/12"
            ],
            "1/9"
        ),
        new Question(
            "Three unbiased coins are tossed. What is the probability of getting at most two heads?",
            [
                "3/4",
                "1/4",
                "3/8",
                "7/8"
            ],
            "7/8"
        ),
        new Question(
            "Two dice are thrown simultaneously. What is the probability of getting two numbers whose product is even?",
            [
                "1/2",
                "3/4",
                "3/8",
                "5/16"
            ],
            "3/4"
        ),
        
    ]    
}
else if(categoryChoice === "Profit and Loss"){
    categoryQuestions = [
        new Question(
            "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit",
            [
                "30%",
                "70%",
                "100%",
                "250%"
            ],
            "70%"
        ),
        new Question(
            "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
            [
                "3",
                "4",
                "5",
                "6"
            ],
            "5"
        ),
        new Question(
            "In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?",
            [
                "1/3",
                "3/4",
                "7/19",
                "8/21"
            ],
            "1/3"
        ),
        new Question(
            "What is the probability of getting a sum 9 from two throws of a dice?",
            [
                "1/6",
                "1/8",
                "1/9",
                "1/12"
            ],
            "1/9"
        ),
        new Question(
            "Three unbiased coins are tossed. What is the probability of getting at most two heads?",
            [
                "3/4",
                "1/4",
                "3/8",
                "7/8"
            ],
            "7/8"
        ),
        new Question(
            "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is",
            [
                "15",
                "16",
                "18",
                "25"
            ],
            "16"
        ),
        
    ]
}

document.getElementById("questionNo").innerText = questionIndex+1;
document.getElementById("totalQuestion").innerText = categoryQuestions.length;



const timer = setInterval(countDown, 1000);



function countDown(){
    if(timeLeft == -1){
        clearInterval(timer);
        finishQuiz();        
    }else{
        document.getElementById("timer").innerText = timeLeft;
        timeLeft--;
    }
}


function loadQuestion(){
    const question = document.getElementById("question");
    const option = document.getElementById("option");
    document.getElementById("questionNo").innerText = questionIndex+1;

    question.textContent = categoryQuestions[questionIndex].getQuestion();
    option.innerHTML= ""

    for (let i = 0; i < categoryQuestions[questionIndex].getOptions().length; i++) {
        const choiceBtn = document.createElement("button");
        choiceBtn.value = i;
        choiceBtn.id = i;
        choiceBtn.name = "answer";
        choiceBtn.className="choiceBtn"
        choiceBtn.innerText = categoryQuestions[questionIndex].getOptions()[i];
        choiceBtn.addEventListener("click", function(){
            selectedAns = choiceBtn.value;
            if(categoryQuestions[questionIndex].matchAnswer(categoryQuestions[questionIndex].getOptions()[selectedAns])){
                choiceBtn.style.backgroundColor = "blue";
            }else{
                choiceBtn.style.backgroundColor = "red";
            }
            const allOptions = document.getElementsByName("answer");
            for(let i =0; i<allOptions.length; i++){
                allOptions[i].setAttribute('disabled', true)
            }
        })
     
         option.appendChild(choiceBtn);
    }

}

loadQuestion();

function handleAnswer(){
    if(selectedAns === -1){
        unattempted++;
    }else{
        if(categoryQuestions[questionIndex].matchAnswer(categoryQuestions[questionIndex].getOptions()[selectedAns])){
         correct++;   
        }else{
            wrong++;
        }
    }
    document.getElementById("score").innerText = correct;
    handleNextQuestion();
}


function handleNextQuestion(){
    if (questionIndex < categoryQuestions.length - 1) {
        questionIndex++;
        loadQuestion();
    } else {
       finishQuiz();
    }
}



function finishQuiz(){
    document.getElementById("nextBtn").remove()
    const btn = document.getElementById("btn");

    const resultBtn = document.createElement("button");
    resultBtn.innerText = "See Your Result";
    resultBtn.className = "button"
    resultBtn.addEventListener("click", function(){
        localStorage.setItem("score", correct);
        localStorage.setItem("wrong", wrong);
        localStorage.setItem("attempted", correct + wrong);
        localStorage.setItem("timeTaken", 300 - timeLeft);
        localStorage.setItem("totalQues", categoryQuestions.length);
        window.location.href="result.html"
    });
    btn.appendChild(resultBtn);
}



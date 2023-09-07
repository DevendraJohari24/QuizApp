document.getElementById("username").innerText = localStorage.getItem("username");

document.getElementById("total").innerText = localStorage.getItem("totalQues");

document.getElementById("timeTaken").innerText = localStorage.getItem("timeTaken");

document.getElementById("score").innerText =  localStorage.getItem("score");

document.getElementById("correct").innerText =  localStorage.getItem("score");

document.getElementById("wrong").innerText = localStorage.getItem("wrong");

document.getElementById("attempted").innerText = localStorage.getItem("attempted");

document.getElementById("percentage").innerText =  ((localStorage.getItem("score") / localStorage.getItem("totalQues"))*100).toFixed(2);


function handleStartAgain(){
    window.location.href = "quiz.html";
}

function handleHomeBtn(){
    localStorage.clear();
    window.location.href = "index.html";
}
localStorage.setItem("username", "User");


const categories = [
    "Pipes and Cistern",
    "Probability",
    "Problem On Ages",
    "Profit and Loss"
]

function loadCategories(){
    const categoryDiv = document.getElementById("category");
    categoryDiv.innerHTML = "";

    for(let i=0; i<categories.length; i++){
        const categoryBtn = document.createElement("button");
        categoryBtn.innerText = categories[i];
        categoryBtn.id = categories[i];
        categoryBtn.className = "category__btn";
        categoryBtn.addEventListener("click",
        
        function(){
            localStorage.setItem("category", categoryBtn.innerText);
            window.location.href="quiz.html";
        } 
        )
        categoryDiv.appendChild(categoryBtn);
    }
}

loadCategories();

function handleSubmitName(){
    const username = document.getElementById("username").value;
    document.getElementById("user").innerText = username;
    localStorage.setItem("username", username);
}

function handleCategoryButton(){
    
}


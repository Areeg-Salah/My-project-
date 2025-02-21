let expression = "";

function addToExpression(value) {
    expression += value;
    document.getElementById("mathExpression").textContent = "Expression: " + expression;
}

function clearExpression() {
    expression = "";
    document.getElementById("mathExpression").textContent = "Expression: ";
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value;
    let correctAnswer = eval(expression);

    document.getElementById("result").textContent = userAnswer == correctAnswer ? "Great job!" : "Try again.";
}

function changeTheme() {
    let theme = document.getElementById("theme").value;
    let themeStylesheet = document.getElementById("themeStylesheet");

    switch (theme) {
        case "space":
            themeStylesheet.href = "space.css";
            break;
        case "ocean":
            themeStylesheet.href = "ocean.css";
            break;
        case "spider":
            themeStylesheet.href = "spider.css";
            break;
        default:
            themeStylesheet.href = "styles-default.css";
            break;
    }
}
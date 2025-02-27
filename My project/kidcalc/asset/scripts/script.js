let expression = "";
let correctAnswers = 0; // Counter for correct answers

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
    let userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    let resultBox = document.getElementById("result");

    try {
        if (expression.includes(">") || expression.includes("<")) {
            // Handle comparisons like 5 > 3
            let isTrue = eval(expression);
            if ((isTrue && userAnswer === "yes") || (!isTrue && userAnswer === "no")) {
                resultBox.textContent = "Great job!";
                correctAnswers++;
            } else {
                resultBox.textContent = "Try again!";
            }
        } else if (expression.includes("=")) {
            // Handle equations with "yes" or "no" answer
            let equationParts = expression.split("=");
            if (equationParts.length === 2) {
                let leftSide = eval(equationParts[0].trim()); // Solve left-hand side
                let rightSide = eval(equationParts[1].trim()); // Solve right-hand side

                if ((leftSide === rightSide && userAnswer === "yes") || (leftSide !== rightSide && userAnswer === "no")) {
                    resultBox.textContent = "Great job!";
                    correctAnswers++;
                } else {
                    resultBox.textContent = "Try again!";
                }
            } else {
                resultBox.textContent = "Invalid equation!";
            }
        } else {
            // Standard math equation
            let correctAnswer = eval(expression);
            if (userAnswer === correctAnswer.toString()) {
                resultBox.textContent = "Great job!";
                correctAnswers++;
            } else {
                resultBox.textContent = "Try again!";
            }
        }

        // Update score counter
        document.getElementById("score").textContent = `Correct Answers: ${correctAnswers}`;
    } catch (error) {
        resultBox.textContent = "Invalid input!";
    }
}
function changeTheme() {
    let theme = document.getElementById("theme").value;
    let themeStylesheet = document.getElementById("themeStylesheet");

    switch (theme) {
        case "space":
            themeStylesheet.href = "asset/css/space.css";
            break;
        case "ocean":
            themeStylesheet.href = "asset/css/ocean.css";
            break;
        case "spider":
            themeStylesheet.href = "asset/css/spider.css";
            break;
        default:
            themeStylesheet.href = "asset/css/style-default.css";
            break;
    }
}

document.getElementById("startBtn").addEventListener("click", function () {

    let score = 0;

    // Question 1 (Number)
    let sleep = parseInt(prompt("How many hours do you sleep per day?"));

    if (sleep >= 4) {
        score += 1;
    }

    // Question 2 (String -> Boolean)
    let music = prompt("Do you enjoy music? (yes / no)").toLowerCase();

    if (music === "yes") {
        score += 1;
    }

    // Question 3 (String -> Boolean)
    let tired = prompt("Do you get tired? (yes / no)").toLowerCase();

    if (tired === "yes") {
        score += 1;
    }

    // Question 4 (Simple Math Logic)
    let math = parseInt(prompt("What is 5 + 3 ?"));

    if (math === 8) {
        score += 1;
    }

    // Final decision
    if (score >= 3) {
        alert("You are definitely human! 😄\nScore: " + score);
    } 
    else if (score >= 1) {
        alert("Half human, half robot! 🤖\nScore: " + score);
    } 
    else {
        alert("Robot detected! 🤖⚠️\nScore: " + score);
    }

});

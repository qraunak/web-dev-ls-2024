function checkAnswer() {
    const correctAnswer = "Novak Djokovic";
    const options = document.getElementsByName('option');
    let selectedOption;
    
    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }

    const resultElement = document.getElementById('result');
    if (selectedOption === correctAnswer) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrect. The correct answer is Novak Djokovic.";
        resultElement.style.color = "red";
    }
}

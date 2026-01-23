const form = document.querySelector("form");

//This line is moved inside the event listener here it will give empty value
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#Height").value);
    const weight = parseInt(document.querySelector("#Weight").value);
    const result = document.querySelector("#results");

    if(height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Provide a valid height! ${height}`;
    } else if(weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Provide a valid weight! ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the result
        results.innerHTML  = `<span>${bmi}</span>`;
        if(bmi < 18.6) {
            results.innerHTML += `<span><br>You are underweight</span>`;
        } else if(bmi >= 18.6 && bmi < 24.9) {
            results.innerHTML += `<span><br>You are healthy</span>`;
        } else if(bmi >= 25 && bmi < 29.9) {
            results.innerHTML += `<span><br>You are overweight</span>`;
        } else {
            results.innerHTML += `<span><br>You are obese</span>`;
        }
    }
})
function Submit() {

    let name = document.getElementById("name").value;

    let age = document.getElementById("age").value;

    let isMarried = document.getElementById("isMarried").value;

    let natija = document.getElementById("result");

    let successMessage = document.getElementById("successMessage");

    natija.innerHTML = "<p>Name: " + name + "</p>" +
                          "<p>Age: " + age + "</p>" +
                          "<p>isMarried: " + isMarried + "</p>";
    successMessage.innerHTML = "Succesful send!😊";
}

function Cancel() {

    let name = document.getElementById("name").value;

    let age = document.getElementById("age").value;

    let isMarried = document.getElementById("isMarried").value;

    let natijaNo = document.getElementById("result");

    let successMessage = document.getElementById("successMessage");

    successMessage.style.color = "red"

    natijaNo.innerHTML = "<p>Name: " + name + "</p>" +
                          "<p>Age: " + age + "</p>" +
                          "<p>isMarried: " + isMarried + "</p>";
    successMessage.innerHTML = "Unsuccesful send!  Try again 😥";
}
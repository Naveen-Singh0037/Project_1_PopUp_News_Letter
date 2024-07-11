function toggleNewsLetter(){
    const newsLetter = document.getElementById("newsLetter");

    newsLetter.classList.toggle("active");
}

// JavaScript Function:

// When the "Subscribe Us" button or the close button (the "x") is clicked, the toggleNewsLetter() function is called.
// toggleNewsLetter() gets the #newsLetter element using document.getElementById('newsLetter').
// The classList.toggle('active') method toggles the active class on the #newsLetter element. If the active class is not present, it is added; if it is present, it is removed.
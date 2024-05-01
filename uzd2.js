// Sukurti atsiliepimų WEB aplikaciją. Vartotojas įveda formoje savo vardą, el. paštą, atsiliepimą ir paspaudžia saugoti. 
// Atsiliepimas atvaizduojamas gride po forma. Svarbu semantika, estetika, ir responsive.

document.querySelector("button").addEventListener("click", ()=>{
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let response = document.getElementById("response").value;

    let card1 = document.getElementById("cardName");
    let text1 = document.createTextNode(name);
    card1.appendChild(text1);

    let card2 = document.getElementById("cardEmail");
    let text2 = document.createTextNode(email);
    card2.appendChild(text2);

    let card3 = document.getElementById("cardResponse");
    let text3 = document.createTextNode(response);
    card3.appendChild(text3);
})
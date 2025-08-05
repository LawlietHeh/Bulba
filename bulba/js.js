
let ageInput = document.getElementById('spoko')
let wiekDoPicia = 18
let wynik = document.getElementById('wynik')
let obrazek = document.getElementById('obrazek')
let who = document.getElementById('who')
let samochod = document.getElementById('samochod')

samochod.addEventListener("change",function(){
    let wiek = ageInput.value
    who.style.display ="none"

    if (samochod.checked) {
        wynik.textContent = "Nie można pić";
        wynik.style.color = "red";
        obrazek.src = "https://media.tenor.com/tJAu5RK6J04AAAAe/sadgesaur.png";
        obrazek.style.display = "block";
    }else{
        if (wiek >= wiekDoPicia) {
            wynik.textContent = "Możesz pić";
            wynik.style.color = "green";
            obrazek.src = "https://static0.gamerantimages.com/wordpress/wp-content/uploads/pokemon-lets-go-how-to-get-bulbasaur.jpg";
            obrazek.style.display = "block";
        } else {
            wynik.textContent = "Nie można pić";
            wynik.style.color = "red";
            obrazek.src = "https://media.tenor.com/tJAu5RK6J04AAAAe/sadgesaur.png";
            obrazek.style.display = "block";
        }}
}
)

ageInput.addEventListener("input",function(){
    let wiek = ageInput.value
    who.style.display = "none"


    if (samochod.checked) {
        wynik.textContent = "Nie można pić"
        wynik.style.color = "red"
        obrazek.src = "https://media.tenor.com/tJAu5RK6J04AAAAe/sadgesaur.png"
        obrazek.style.display = "block"
        return;
    }

    if( wiek >= wiekDoPicia){
        wynik.textContent = "Możesz pić"
        wynik.style.color = "green"
        obrazek.src = "https://static0.gamerantimages.com/wordpress/wp-content/uploads/pokemon-lets-go-how-to-get-bulbasaur.jpg"
        obrazek.style.display = "block"
    }else{
        wynik.textContent = "Nie można pić"
        wynik.style.color = "red"
        obrazek.src = "https://media.tenor.com/tJAu5RK6J04AAAAe/sadgesaur.png"
        obrazek.style.display = "block"

    }
})

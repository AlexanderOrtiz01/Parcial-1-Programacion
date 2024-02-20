//variables
let card1 = document.getElementById("btn1")
let card2 = document.getElementById("btn2")
let card3 = document.getElementById("btn3")



card1.addEventListener('click', function() {
let h1Creado = document.createElement("h1")
let ref = document.getElementById("card1")


h1Creado.innerHTML = "Un dato curioso sobre Minecraft es que el juego fue creado por Markus 'Notch' Persson y fue lanzado oficialmente el 18 de noviembre de 2011"
h1Creado.style.fontSize = "20px"
ref.appendChild(h1Creado)
});

card2.addEventListener('click', function() {
    let padre = document.getElementById("divpadre")
    let imagen = document.createElement("img")

    let ref = document.getElementById("div2")
    imagen.src = "mine.webp"
    imagen.style.height = "20%"
    imagen.style.width = "20%"
    padre.insertBefore(imagen, ref)
    });

    card3.addEventListener('click', function() {
        let boton = document.createElement("button")
        let ref = document.getElementById("card3")
        boton.innerHTML = "Creado"
        ref.append(boton)

        
        });



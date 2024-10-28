const max2 = (number1, number2) => {
    if (number1 >= number2) {
        return number1;
    } else {
        return number2;
    }
}

document.body.innerHTML += `<p>Větší číslo je ${max2(5,2)}</p>`
document.body.innerHTML += `<p>Větší číslo je ${max2(1,7)}</p>`
document.body.innerHTML += `<p>Větší číslo je ${max2(10,7)}</p>`
document.body.innerHTML += `<p>Větší číslo je ${max2(10,15)}</p>`


//zkraceny zapis fce s ternarnim operatorem
const max = (cislo1, cislo2) => cislo1 > cislo2 ? cislo1 : cislo2

console.log(max(800, 510))
document.body.innerHTML += `Větší číslo je ${max(800,510)}`
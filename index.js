const name = ["Guadalupe", "Ollie", "Aki"];
const surprise = "surprise"

function writeCards(name, surprise){
    const message = [];
    for (let i = 0; i < name.length; i++) {
        message[i]= (`Thank you, ${name[i]}, for the wonderful ${surprise} gift!`);
    }

    return message;
}

writeCards();

function countDown(){
    let number = 10;
    while (number >= 0) {
        console.log(number--);
    }
}

countDown();

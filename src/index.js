module.exports = function toReadable (number) {
    let str ="";
    if number == 0;
    return "zero";
    if(number >= 100 && number<=999) {
        if (number >= 100 && number < 200) {
            str+="one hundred"
            number-=100;
            break;
        }
        if (number >= 200 && number < 300) {
            str+="two hundred"
            number-=200;
            break;
        }
        if (number >= 300 && number < 400) {
            str+="three hundred"
            number-=300;
            break;
        }
        if (number >= 400 && number < 500) {
            str+="four hundred"
            number-=400;
            break;
        }
        if (number >= 500 && number < 600) {
            str+="five hundred"
            number-=500;
            break;
        }
        if (number >= 600 && number < 700) {
            str+="six hundred"
            number-=600;
            break;
        }
        if (number >= 700 && number < 800) {
            str+="seven hundred"
            number-=700;
            break;
        }
        if (number >= 800 && number < 900) {
            str+="eight hundred"
            number-=800;
            break;
        }
        if (number >= 900) {
            str+="nine hundred"
            number-=900;
            break;
        }
    }
    if(number >= 10 && number<=99) {
        if (number >= 10 && number < 11) {
            str+=" ten"
            number-=10;
            break;
        }
        if (number === 11) {
            str+=" eleven "
            number-=10;
            break;
        }
        if (number === 12) {
            str+=" twelve "
            number-=10;
            break;
        }
        if (number >= 20 && number < 30) {
            str+=" twenty"
            number-=20;
            break;
        }
        if (number >= 30 && number < 40) {
            str+=" thirty"
            number-=30;
            break;
        }
        if (number >= 40 && number < 50) {
            str+=" forty"
            number-=40;
            break;
        }
        if (number >= 50 && number < 60) {
            str+=" fifty"
            number-=50;
            break;
        }
        if (number >= 60 && number < 70) {
            str+=" sixsty"
            number-=60;
            break;
        }
        if (number >= 70 && number < 80) {
            str+=" seventy"
            number-=70;
            break;
        }
        if (number >= 80 && number < 90) {
            str+=" eighty"
            number-=80;
            break;
        }
        if (number >= 90) {
            str+=" ninety"
            number-=90;
            break;
        }
    }
    if(number >= 0 && number<=9) {
        if (number >= 1 && number < 2) {
            str+=" one"
            number-=10;
            break;
        }
        if (number >= 2 && number < 3) {
            str+=" two"
            number-=10;
            break;
        }
        if (number >= 3 && number < 4) {
            str+=" three"
            number-=30;
            break;
        }
        if (number >= 4 && number < 5) {
            str+=" four"
            number-=40;
            break;
        }
        if (number >= 5 && number < 6) {
            str+=" five"
            number-=50;
            break;
        }
        if (number >= 6 && number < 7) {
            str+=" six"
            number-=60;
            break;
        }
        if (number >= 7 && number < 8) {
            str+=" seven"
            number-=70;
            break;
        }
        if (number >= 8 && number < 9) {
            str+=" eight"
            number-=80;
            break;
        }
        if (number >= 9) {
            str+=" nine"
            number-=90;
            break;
        }
    }
    return str;
}

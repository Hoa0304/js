//if
var sum = 1 + 2 + 3 + 4 ;
if(sum == 10){
    console.log('Correct Summation');
}

var weather = 'sunny';
if(weather === 'sunny'){
    console.log('We should go to the beach!');
}

var isWeekend = true;
if(isWeekend == true ){
    console.log('Watch movies');
}

//if else 

var isFirstDayOfWeek = true;
if(isFirstDayOfWeek== true){
    console.log('Hangover !');
} else {
    console.log ('Go to work');
}

//if else if/ else
var score = 86;
if(score >= 90) {
    console.log ( 'Excellent');
    } else if (score >= 80) {
    console. log ('Good');
    } else if(score >= 70) {
    console.log ('Average');
    } else{
    console.log ( 'Need more improvements');
}


var os = 2;
switch (os) {
case 1:
console.log ('Windows');
break;
case 2:
console.log ( 'Mac OS X');
break;
case 3:
console.log( 'Linux');
break;
default:
console.log ( 'Unknown Operating system');
}



//ternary

/*
Câu trúc
condition ? T : F
T: phân code thuc thi khi condition = true
F: phân code thuc thi khi condition = false
*/
var movieRating = 8;
movieRating > 7 ?
console.log ("It's okay to watch")
: console.log ("Pick another movie");

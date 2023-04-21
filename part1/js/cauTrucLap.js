/**
 * for (init; condition; statement) {
code
}
init: câu lênh thuc thi truc khi buóc vão khöi lênh läp.
condition: diêu kiên ki@m tra vong läp tiëp tuc thuc hiên hay
dûng.
statement: câu lênh thuc thi sau möi vông läp.
code: khöi lênh thuc hiên trong vöng läp.
 */


var sum = 0;
for(var i = 1 ; i<= 10 ; i++){
    sum += i;
}

console.log("Sum: " + sum);




//-----------------------------//
var i=1;
var s=0;
while(i<=10){
    s+=i;
    i+=1;
}

console.log("Sum: "+s);

//-----------------------------------------------
tong =0;
do{
    tong =+ i;
    i += 1;
}while(i<=10);
console.log("Sum: "+tong);
//------------Thoát khỏi khối vòng lặp------------------
for(var i = 1 ; i<= 10 ; i++){
    if(i>5)
    break;
    sum += i;
}

console.log("Sum: " + sum);
// Sum: 15


//----------------Bỏ qua xử lý ở vòng lặp hiện tại--------------------

while(i<=10){
    if(i == 5){
        i+=1;
        continue;
    }
    s+=1;
    i+=1;
}

console.log("Sum: "+s); // 50


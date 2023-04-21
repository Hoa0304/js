function hello(name){
    console.log('Hello '+name);
}
hello('Dat');
hello('Man');

//------------giá trị trả về---------
function add(a,b){
    return a+b;
}

var result = add(10,19);
console.log('Result: '+ result);//20

//--------------Khai báo hàm như một biến--------------------
var bye = function ( name ){
    return 'Bye '  + name;
};
console.log(bye('Hoa'));// Bye Hoa
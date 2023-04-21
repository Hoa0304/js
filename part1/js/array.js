var numbers = [0, 1, 2, 31];
    var names = ['Leonardo', 'Tom', 'Brad'];
    var answers = [true, false, true, true, true];

var actor = ['Brad',2016,true,1.87];

var collection = [
    'Fight Club',
    false,
    [0.9,'A good rating movie']
];

console.log(actor[0]); // Brad
console.log(actor[1]); //2016
console.log(actor[4]); //undefined


/*
Kích thước mảng
*/
console.log(collection.length);


//     Thay đổi giá trị phần tử 
actor[0] = 'Dat';


//  Thêm phần tử vào cuối 
//c1
actor.push('Hoa');
//c2
actor[actor.length]= 'Man';

// xoa phan tu cuoi cung

var last = actor.pop();

console.log(last);

// them phan tu vao dau 

actor.unshift('Mat');

// xoa phan tu dau tien
var first = actor.shift('Mat');

console.log(first);
// xoa phan tu bang vi tri
delete actor[3];

//sap xep mang 
actor.sort();


// noi mang
var collectionA = actor.concat(numbers);

console.log(collecionA);

//chuyển mảng thành chuỗi

console.log(names.toString());

console.log(names.join(' - '));

// vòng lặp mảng 

for(var i =0; i< names.length;i++){
    console.log(names[i]);
}
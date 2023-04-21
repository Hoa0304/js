//underfined : biến chưa dc định nghĩa chưa dc khởi tạo giá trị
var name = 'Dat';
console.log(name);

name = 'Dat'+ '' + "Di Caprio";
console.log(name);

name = true ;
console.log("name = "+ name);

var isActor = true;
var isHandsome = true;

var shouldILikeHim = isActor && isHandsome;

console.log('Should I Like Him?-Answer : ' + shouldILikeHim);
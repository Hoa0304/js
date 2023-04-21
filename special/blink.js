/*Đối với chuỗi bao quanh bởi nháy đơn, bạn có thể sử dụng nháy kép bên trong chuỗi 
mà không cần phải sử dụng ký hiệu escape (\), và ngược lại. Ví dụ:
*/
console.log('This is a string with "double quotes" inside.');
console.log("This is a string with 'single quotes' inside.");
/*Đối với chuỗi bao quanh bởi nháy kép, bạn có thể sử dụng biến hoặc biểu thức JavaScript 
bằng cách sử dụng cú pháp ${expression} để tạo chuỗi kết hợp (template string). Ví dụ:*/
const name = 'Alice';
console.log(`Hello, ${name}!`);
/*Đôi khi, việc sử dụng nháy đơn hoặc nháy kép có thể ảnh hưởng đến cách bạn xử lý các ký tự 
đặc biệt trong chuỗi, ví dụ như dấu nháy đơn hoặc dấu nháy kép. Để giải quyết vấn đề này, bạn 
có thể sử dụng ký hiệu escape (\) để báo cho JavaScript biết rằng một ký tự đặc biệt sẽ được sử dụng trong chuỗi. 
Ví dụ: */


console.log('She said, "I\'m coming home now."');
console.log("He said, \"I'll be there in a minute.\"");

/*Tóm lại, nháy đơn và nháy kép đều được sử dụng để bao quanh chuỗi trong JavaScript. Nháy đơn thường được sử dụng 
khi bạn muốn sử dụng nháy kép bên trong chuỗi, và ngược lại. Nháy kép cũng cho phép bạn sử dụng biến và biểu thức 
JavaScript trong chuỗi bằng cách sử dụng template strings.*/
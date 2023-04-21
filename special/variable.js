var x = 5;
let y = 10;
const z = 15;

x = 7;
y = 12;
// z = 20; // Lỗi do không thể gán lại giá trị cho biến const

if (true) {
  var a = 20;
  let b = 30;
  const c = 40;
}

console.log(a); // 20
// console.log(b); // Lỗi do biến b chỉ có phạm vi trong khối lệnh if
// console.log(c); // Lỗi do biến c chỉ có phạm vi trong khối lệnh if

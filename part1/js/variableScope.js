//------------Phạm vi của biến ------------------
var name  = 'Hoa';
function getName(){
    console.log('getName: '+ name);
}

getName();
console.log('name: '+name);
//--------------
function getname(){
    var name = 'Man';
    console.log('getName: '+ name);
}

getname(); // Man
console.log('name: '+name); //Hoa

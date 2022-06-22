function callFunction(fun){
    fun();
}

//normal fun statement
function sayHi() {
    console.log('hi');
}

sayHi();

//function expression
var sayBye = function(){
    console.log('bye');
};

//sayBye();

callFunction(sayBye);
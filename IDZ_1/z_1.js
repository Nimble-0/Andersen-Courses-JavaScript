// Задание 1 ---------------------------------------------------------------
/*Напишите функцию, которая принимает 2 параметра - 2 числа и возвращает true,
 если первое число больше второго, и false, если это не так. */
console.log("Задание 1");
var a, b;

function f1 (a, b){
if (a > b){
    console.log('True');
    return true;
}
else{
    console.log('False');
    return false;
}
}

f1(2, 5);


// Задание 2 ---------------------------------------------------------------
/*Напишите функцию, которая принимает 1 параметр - строку и возвращает новую 
строку вида, “Вы ввели * полученная строка *”.*/
console.log("\nЗадание 2");
var str, newStr;

function f2 (str){
newStr = "Вы ввели: " + str;
console.log(newStr);
}

f2("то что ввели");


// Задание 3 ---------------------------------------------------------------
/*Напишите функцию, которая принимает 1 параметр любого типа и проверяет,
 является ли полученное значение null или undefined. */
console.log("\nЗадание 3");
var some, t1 = null, t2 = undefined;

function f3(some){
    if(some === null){
        console.log("Полученное значение является NULL");
    }
    if(some === undefined){
        console.log("Полученное значение является undefined"); 
    }
    if(some !== null && some !== undefined){
        console.log("Полученное значение не является ни NULL, ни undefined"); 
    }
}

f3(t1);
f3(t2);
f3(34);
f3("");


// Задание 4 ---------------------------------------------------------------
/*Напишите функцию, которая принимает 1 параметр - объект и добавляет этому
 объекту поле checked со значением true. */
console.log("\nЗадание 4");

var newObj = {};
var myObj = {"element" : "value"};
console.log(myObj);

function f4(newObj){
newObj.checked = true;
console.log(newObj);
console.log(newObj.checked);
}

f4(myObj);


// Задание 5 ---------------------------------------------------------------
/*Напишите функцию, которая принимает 1 параметр - число и выводит в консоль
 все числа от нуля до введенного числа (в обе стороны). */
console.log("\nЗадание 5");
var num;

function f5(num){
if (num < 0){
    for (num; num<0; num++){
        console.log(num); 
    }
}
if (num > 0){
    for (num; num>0; num--){
        console.log(num); 
    }
}
}

f5(6);
f5(-4);
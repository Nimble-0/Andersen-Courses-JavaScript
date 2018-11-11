//Модуль включает следующие функции:

//1. Проверка на undefined.
function checkUnd(some){
    var some;    
    if (some === undefined){
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

//2. Проверка на null.
 function checkNull(some){
    var some;
    if (some === null){
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

//3. Проверка на NaN.
 function checkNaN(some){
    var some;
    if (some === NaN){
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

//4. Проверка, что объект пустой (нет своих свойств).
 function checkEmptyObj(obj){
    for(var i in obj) {
        if(obj.hasOwnProperty(i));
            console.log("Не пустой");
            return false;
    }
    console.log("Пустой");
    return true;
    
}
/*
var myObj = {value: 2};
var EmpObj = {};
checkEmptyObj(EmpObj);
checkEmptyObj(myObj);*/

//5. Функция преобразования значений всех свойств объекта (аналог map из массива, только для объекта, возвращает новый объект)
function mapForObj(obj, str) {
    var newObj = {};
    for(var key in obj) { 
       newObj[key] = obj[key];
       newObj[key] = newObj[key] + str;
    }
    console.log(newObj);
    return newObj;
}
/*
var myObj = {value: 2, string: "Строчка"};
mapForObj(myObj, " - изменено");
console.log(myObj);*/

//6. Функция которая возвращает случайное целое число из переданного в функцию диапазона.
function rand(min, max){
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    console.log(rand);
    return rand
}

//rand(1, 100);

//7. Функция глубокого сравнения двух объектов.
function deepEquals(obj1, obj2){
    if(Object.keys(obj1).length===Object.keys(obj2).length){

        for(var key in obj1) {
            if(obj1[key]===obj2[key]){
            //    console.log("Свойства объектов: '"+ key + ": " + obj1[key] + "' и '"+ key + ": " + obj2[key] + "' сходятся.");
            }
            else{
            //    console.log("Свойства объектов: '"+ key + ": " + obj1[key] + "' и '"+ key + ": " + obj2[key] + "' не сходятся.");
                console.log("Объекты не равны");
                return false;
            }
        }
        console.log("Объекты равны")
        return true;
    }
    else {
        console.log("Объекты не равны");
        return false;
    }

 }
/* 
var myObj1 = {value: 0, value1: 1, value2: 2, value3: 3, value4: 4, str: "stroka"};
var myObj2 = {value: 0, value1: 1, value2: 2, value3: 3, value4: 4, str: "stroka"};
var empObj = {};
deepEquals(myObj1, myObj2);*/

//8. Функция удаления всех свойств из объекта, для которых предикат (вызываемая для каждого поля функция) возвращает false (функция возвращает новый объект).
function deleteProp(obj, prop){
    var newObj = {};
    for(var key in obj) { 
        if(obj[key]===prop){
        newObj[key] = obj[key];
        }
        else {
            delete obj[key];
        }
     }
     console.log(newObj);
     return newObj;
}
/*
var myObj1 = {value: 0, value1: 1, value2: 2, value3: 3, value4: 4, str: "stroka"};
deleteProp(myObj1, "stroka");*/

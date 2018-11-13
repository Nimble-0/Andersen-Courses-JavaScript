//Модуль включает следующие функции:
var Module = function() {
    return {
        //1. Проверка на undefined.
        checkUnd: function(some){   
            return (some === undefined);
        },

        //2. Проверка на null.
        checkNull: function(some){
            return (some === null);
        },

        //3. Проверка на NaN.
        checkNaN: function(some){
            return Number.isNaN(some);
        },

        //4. Проверка, что объект пустой (нет своих свойств).
        checkEmptyObj: function(obj4){
            for(var i in obj4) {
                if(obj4.hasOwnProperty(i));
                    console.log("Не пустой");
                    return false;
            }
            console.log("Пустой");
            return true;
            
        },

        //5. Функция преобразования значений всех свойств объекта (аналог map из массива, только для объекта, возвращает новый объект)
        mapForObj: function(obj5, str) {
            var newObj5 = {};
            for(var key in obj5) { 
            newObj5[key] = obj5[key];
            newObj5[key] = newObj5[key] + str;
            }
            console.log(newObj5);
            return newObj5;
        },

        //6. Функция которая возвращает случайное целое число из переданного в функцию диапазона.
        rand: function(min, max){
            var rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            console.log(rand);
            return rand
        },

        //7. Функция глубокого сравнения двух объектов.
        deepEquals: function(obj1, obj2){
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

        },

        //8. Функция удаления всех свойств из объекта, для которых предикат (вызываемая для каждого поля функция) возвращает false (функция возвращает новый объект).
        deleteProp: function(obj8, prop){
            var newObj8 = {};
            for(var key in obj8) { 
                if(newObj8[key]===prop){
                newObj8[key] = obj8[key];
                }/*
                else {
                    delete obj8[key];
                }*/
            }
            console.log(newObj8);
            return newObj8;
        }   
    }
}();

//1.
console.log(Module.checkUnd(undefined));
//2.
console.log(Module.checkNull(null));
//3.
console.log(Module.checkNaN(NaN));
//4.
var myObj4 = {value: 2};
var EmpObj4 = {};
Module.checkEmptyObj(EmpObj4);
Module.checkEmptyObj(myObj4);
//5.
var myObj5 = {value: 2, string: "Строчка"};
Module.mapForObj(myObj5, " - изменено");
console.log(myObj5);
//6.
Module.rand(1, 100);
//7.
var myObj1 = {value: 0, value1: 1, value2: 2, value3: 3, value4: 4, str: "stroka"};
var myObj2 = {value: 0, value1: 1, value2: 2, value3: 3, value4: 4, str: "stroka"};
var EmpObj7 = {};
Module.deepEquals(myObj1, myObj2);
Module.deepEquals(myObj1, EmpObj7);
//8
var myObj8 = {value: 0, value1: 1, value2: 2, value3: 3, value4: 4, str: "stroka"};
Module.deleteProp(myObj8, "stroka");
console.log(myObj8);
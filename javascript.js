console.log("Hello world!");

/* ****************************************
 * Обьявление переменные
***************************************** */

// Переменные в старом формате ES5

var lessonTopic = "Учим JavaScript";

console.log(lessonTopic);

// Переменные ES6

// Переменные let
let userName = "Джон";       // Используя ключевое слово let, можно объявить переменные без присвоения ей начального значения.           
console.log(userName);

userName = "Билл";

// Переменные const
const birthYear = 1990;      // При помощи const нельзя объявлять переменные без значения
console.log(birthYear);

/* ****************************************
 * Типы данных
***************************************** */

// Строки 

// Есть несколько способов создать строку:

//    одинарными кавычками ';
//    двойными кавычками ";
//    шаблонной строкой через обратный апостроф `.

const userName2 = "Джон";
console.log(userName2);

const lessonTopic2 = "Изучаем основы JavaScript";
console.log(lessonTopic2);


// Число

// Тип данных «число» (number) содержит числа с плавающей точкой в диапазоне от -(253 − 1) до 253 − 1, а также специальные значения Infinity, -Infinity и NaN.

// Для этого типа данных определены стандартные арифметические операции сложения +, вычитания -, умножения *, деления /, взятия остатка от целочисленного деления %, сравнения >, <, >=, <=, ==, ===, !=, !==.

const birthYear2 = 1990;
console.log(birthYear2);

// Логические true или false

const isMarried = true; // false
console.log(isMarried);


/* ****************************************
 * Сложение переменные
***************************************** */

let x = 10;
let y = 5;

let result = x + y; // 15
console.log(result)

/* ****************************************
 * Сложение строки, Конкатенация
***************************************** */

let greeting = "Привет,";
let userName3 = "Петр!";

let result2 = greeting + userName3;
console.log(result2);

let x2 = "300"
let y2 = "50"
console.log(x2 + y2)

let userName4 = "Петр";
let greeting2 = "Привет," + userName4 + '! Как дела?';
console.log(greeting2)


/* ****************************************
 * Шаблонные строки
***************************************** */

let userName5 = "Петр";
let greeting3 = `Привет ${userName5}! Как дела?`;
console.log(greeting3)


/* ****************************************
 * Условия
***************************************** */
//   if (/* условия */) {
        /* код который будем выполнен, если условие верно */
//  }else{
         /* код который будем выполнен, если условие Не верно */
//  } 


let x3 = 10;
let y3 = 5;

if (x3 < y3) {
    console.log('X > Y')
}else {
    console.log('X не больше Пяти')
};

let x4 = 5;
let y4 = 5;

if (x4 > y4) {
    console.log('X > Y')
}else if (x4 === y4){
    console.log("X равно Y")
}else {
    console.log("X меньше Y")
};


/* ****************************************
 * SWITCH CASE
***************************************** */

const mark = 4;

switch (mark) {
    case 1:
        console.log("Вы плохо подготовились, вам Кол!")
        break;
    case 2:
        console.log("Неудовлеворительно!")
        break;
    case 3:
        console.log("Можно было и лучше")
        break;
    case 4:
        console.log("Хорошо, постарался!")
        break;
    case 5:
        console.log("Молодец! Отлично!")
        break;
    default:
        console.log("Токой оценки не существует!")                
};


/* ****************************************
 * Массивы
***************************************** */
// Массив — это структура, в которой можно хранить коллекции элементов — чисел, строк, других массивов и так далее. Элементы нумеруются и хранятся в том порядке, в котором их поместили в массив. Элементов может быть сколько угодно, они могут быть какими угодно.

// Массивы очень похожи на нумерованные списки.

// Как пишется Скопировать ссылку "Как пишется"
// Создадим массив с помощью квадратных скобок [].

const fruit1 = "Яблоко";
const fruit2 = "Груша";
const fruit3 = "Слива";
const fruit4 = "Апельсин";

const fruits = ['Яблоко', 'Груша','Слива','Апельсин'];
console.log(fruits);

const arrayExample = ['Яблоко',50, true, 'Груша',false, 200];
console.log(arrayExample);

/* ****************************************
 * Цикл for
***************************************** */
// Цикл — это повторяющаяся последовательность действий.

// Цикл состоит из условия и тела цикла.

// Перед запуском цикла проверяется условие. Если условие истинное, то выполняется блок кода, который называется телом цикла. Затем этот шаг повторяется. Так будет продолжаться, пока условие не станет ложным.

// Каждое выполнение тела цикла называется итерацией.

// JavaScript предоставляет несколько способов создания цикла. Самые распространённые из них — while и for (инициализация; условие; завершающая операция) {}.

console.log("start");

for (let i = 0; i < 10; i++) {
    console.log('i =' + i)
};

console.log("finish");

/* ****************************************
 * Обход массивов с помощью цикла for
***************************************** */

const fruits1 = ['Яблоко', 'Груша','Слива',];
console.log(fruits.length);

// console.log(fruits1[0])
// console.log(fruits1[1])
// console.log(fruits1[2])

for (let i = 0; i < fruits.length; i++){
    console.log(fruits1[i])
};

/* ****************************************
 * Обход массивов с помощью метода .forEach()
***************************************** */

const fruits2 = ['Яблоко', 'Груша','Слива',];

fruits2.forEach(function(item, i){
    console.log(`Элемент с индексом ${item} имеет индекс ${i}`)
});


/* ****************************************
 * Функции
***************************************** */

let greeting4 = `Привет Алексей! Как дела?`;
console.log(greeting4);

let greeting5 = `Привет Юрий! Как дела?`;
console.log(greeting5);

let greeting6 = `Привет Перт! Как дела?`;
console.log(greeting6);

function greeting7(name){
    console.log(`Привет ${name}! Как дела?`)
} 


greeting7('Алексей!');
greeting7('Юрий');
greeting7('Перт');

function calculateSum (x, y){
    let result = x + y
    return result
}
calculateSum(5, 10);

/* ****************************************
 * Функции function Declartion
***************************************** */

calculateSum(5, 10);

function calculateSum (x, y){

}


/* ****************************************
 * Функции function Expression
***************************************** */

let calculateSum2 = function (x, y){
        let result2 = x + y
        console.log(result2)
        return result2
}
calculateSum2(5, 10);


/* ****************************************
 * Объекты
***************************************** */

const petrName = 'Petr';
const petrAge = 20;
const pertSpeciality = 'wb-designer';
const petrCity = 'Moscow';

function sayHi(name, city, age, spec){
    console.log(`Привет, меня зовут ${name}, мне ${age}, я ${spec}, из города ${city}`)
}

sayHi(petrName, petrAge, pertSpeciality, petrCity)


const petr= {
    name: 'Petr',
    age: 28,
    speciality: 'html coder',
    city: 'Moscow',
    sayHi: function (){
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age}, я ${this.spec}, из города ${this.city}`)
    }
}



petr.sayHi()


/* ****************************************
 * Функция Конструстар - создание собъекта
***************************************** */

function Person (name, age, spec, city){
    this.name = name;
    this.age = age;
    this.spec = spec;
    this.city = city
    this.sayHi = function (){
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age}, я ${this.spec}, из города ${this.city}`)
    }
}

const pert = new Person('Перт', 30, 'веб-дизайнер', 'Самара')
console.log(pert)

const mary = new Person('Мария', 25, 'блогер', 'Масква')
console.log(mary)

mary.sayHi()



/* ****************************************
 * Классы ES6
***************************************** */

class Person1 {
    constructor(name, age, spec, city){
        this.name = name;
        this.age = age;
        this.spec = spec;
        this.city = city
    }
    sayHi = function (){
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age}, я ${this.spec}, из города ${this.city}`)
    }
}

const pert2 = new Person('Мария', 25, 'блогер', 'Масква')

console.log(pert2)

function hello() {
    console.log('hola')
    alert('alerta virus')
    console.log('Es una funcion')
}

// call
// hello()


function variables() {
    
    // variables
    var b = 'freddy';
    console.log(b);

    var someNumber = 21
    console.log(someNumber)

    var age = prompt('What is your name')
    document.getElementById('title').innerHTML = 'Es un title'
    // document.getElementById('text').innerHTML = age

    var number = 12
    /*
        Increment number by 1 = number++
        Decrement number by 1 = number--
    */

    // number = number + 1
    number++
    number--
    console.log(number)

    // Remainder div
    console.log(number % 4)

    number += 20
    console.log(number)
}


function saludo(nombre) {
    // body...
    // String concatenation
    var result = 'Hello ' + nombre
    console.log(result)
}

// call
// var name = prompt('Tu nombre?')
// saludo(name)

function sumNumbers(number1, number2) {
    var result = number1 + number2
    console.log(result)
}

// call
// sumNumbers(12, 10)


function loops() {

    // While loops
    let num = 0

    while (num < 20) {
        num += 1
        console.log(num)
    }

    // new line
    console.log('\n\n')

    // For loop
    for (let num = 0; num <= 10; num += 1) {
         console.log(num)
    }
}

// call
// loops()


// Data type:

// number
let age = 29
// String
let name = 'Joe'
// Object
let user = {
    first: 'Joe',
    last: 'Jhon'
}
// Boolean true or false
let true_false = false
// Array
let fruit_a = ['apple', 'banana']
// Undefined
let nombre_un
// Null
let nothing = null


function string_metodos() {

    /* String methods:
            apple length, a1 p2 p3 l4 e5, total = 5 letters 
            index apple, a0, p1, p2, l3, e4
            \n new line
    */

    let fruit = 'apple'
    let fruit_2 = 'apple, orange, pear'
    let moreFruits = 'Orange\nPear'

    console.log(fruit.length)
    console.log(moreFruits)

    console.log(fruit.indexOf('pl'))
    console.log(fruit.slice(2, 5))
    console.log(fruit.replace('app', 'tab'))

    console.log(fruit.toUpperCase())

    // view specific index character
    console.log(fruit.charAt(4))
    console.log(fruit[0])

    /*
        covert string to Array
        by character = ''
    */
    console.log(fruit.split(''))

    /*
        1:
            'apple, orange, pear'
            by comma = split(', ')
        2:
            'apple,orange,pear'
            by comma = split(',')
    */
    console.log(fruit_2.split(', '))
}

// call
// string_metodos()


function areglos() {
    
    // Arrays

    let my_fruits = ['apple', 'orange', 'pear']
    let my_fruits_2 = new Array('apple', 'orange', 'pear')

    console.log(my_fruits)

    my_fruits[2] = 'nueva fruta'
    console.log(my_fruits)

    // i = index
    for (let i = 0; i < my_fruits.length; i += 1) {
        console.log(my_fruits[i])
    }

    for (let my_fruit in my_fruits) {
        console.log(my_fruits[my_fruit])
    }

    // Array methods:

    // covert to string
    console.log('Convert string:', my_fruits_2.toString())

    // view with method join
    console.log(my_fruits_2.join(' -- '))

    // delete last element in array
    console.log(my_fruits.pop())
    console.log(my_fruits)

    // add new element in last of index in an array
    console.log(my_fruits.push('Lemon'))
    console.log(my_fruits)

    // fuera de indice indefinido
    console.log(my_fruits[3])

    // Add new element in the final element
    // my_fruits[3] = 'Juan'
    my_fruits[my_fruits.length] = 'Juan'
    console.log(my_fruits)

    // remove first element
    my_fruits.shift()
    console.log(my_fruits)

    // add new element in the first index
    my_fruits.unshift('Primer element')
    console.log(my_fruits)

    // Unir dos Arrays my_fruits and vegetables.
    let vegetables = ['tomato', 'broccoli', 'asparagus']
    let allProducts = my_fruits.concat(vegetables)

    console.log(allProducts)
}

// call
// areglos()

function my_fun() {
    // body...
    let my_name = 'freddy juan felipe'

    console.log(my_name.length)
    console.log(my_name.charAt(7))
    console.log(my_name.slice(6, 12))

    let new_name = my_name.slice(6, 12)
    console.log(new_name)

    console.log(my_name.split(' '))
}


function areglos_dos() {
    let vegetables = ['tomato', 'broccoli', 'asparagus', 'banana', 'oranges', 'milk']
    let numbers = [1, 5, 9, 3, 8, 2, 4, 7, 6]

    // Revertir el order de los elementos:
    console.log(vegetables.reverse())
    // Ordenar en orden ==> (A - Z):
    console.log(vegetables.sort())

    // ==> PARA ORDENAR NUMEROS: <==

    // --> REVERTIR EL ORDEN FUNCIOINA EN NUMEROS:
    // console.log(numbers.reverse())

    // --> ORDENAR EN FORMA, ASCENDER NO ES --> RECOMENDADO:
    // console.log(numbers.sort())

    // --> ORDENAR EN FORMA, ASCENDER A --> B === (A - B):
    console.log(numbers.sort((a, b) => a - b))

    // --> ORDENAR EN FORMA, DESCENDER B --> A === (B - A):
    console.log(numbers.sort(function(a, b) {
        // console.log(`${a} A - ${b} B = ${b - a}`)
        return b - a
    }))
}

// call
// areglos_dos()


// ADD ELEMENTS WITH FOR 
function add_elements() {
    // body...
    let my_dot = new Array();

    for (let number = 0; number <= 10; number += 1) {
        my_dot.push(number);
    };

    console.log(my_dot);
}

// add_elements()


// OBJECTS
function try_objects() {
    // body...
    let my_object = {
        first: 'Freddy',
        last: 'Diaz',
        age: 60,
        info: function() { 
            return `Name: ${this.first} Last: ${this.last}` 
        },
    }

    console.log(my_object.first);
    console.log(my_object["last"]);
    my_object.last = 'Castane';
    console.log(my_object.info());
    console.log(my_object["last"]);
    my_object.age += 12
    console.log(my_object.age) 
}

// try_objects()


// (IF ELSE) CONTROL FLOW
function try_if() {
    // body... && ==> AND, || ==> OR.
    let age_get = prompt('Your age please?')
    if ( (age_get >= 18) && (age_get <= 35) ) {
        status = 'Oh is successfully'
        console.log(status)
    } else {
        status = 'Oh an error ocurred in pocess!'
        console.log(status)
    }
}

// try_if()


// SWITCH STAMENTS
function try_switch(argument) {
    // body...
    let index = parseInt(prompt('Type a index 0 - 2:'));
    let fruits = ['orange', 'banana', 'apple'];

    switch (index) {
        case 0:
            console.log(fruits[index]);
            break;
        case 1:
            console.log(fruits[index]);
            break;
        case 2:
            console.log(fruits[index]);
            break;
        default:
            console.log('Fuera de rango!');
            break;
    }
}

// call
// try_switch()

// Challenge 1: Your age in days.

function age_in_days() {
    // body...
    let date_age = prompt('Tu fecha de nacimiento...');
    let age_days = (2024 - date_age) * 365;

    let create_h1 = document.createElement('h1');
    let text_res = document.createTextNode("Tu edad en dias es " + age_days);

    create_h1.setAttribute('id', 'age_days_h1');
    create_h1.appendChild(text_res);

    document.getElementById('flex-box-result').appendChild(create_h1);
    console.log(age_days);
};

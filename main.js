console.log("Hello world");
//output using var,let,const:
//var
var a = 100
a = 200
console.log(a)
    //let
let b = 100
b = 300
console.log(b)
    //const
const c = 100
console.log(c)
    //using num
console.log(num)
var num = 000 // can be redeclared
console.log(num)
var num = 5050
console.log(num)
    // Primitive datatypes
console.log("\nPrimitive datatypes :-")
var num = 10
console.log("Int" + num)
var decimal = 10.1
console.log("Float " + decimal)
var text = "MONICA"
console.log("String " + text)
var boolean = true
console.log("Boolean Type " + boolean)
var noValue
console.log("Undefined " + noValue)
var nullValue = null
console.log("Null " + nullValue)
    // Object
console.log("\nObject :-")
about = {
    name: "MONICA",
    height: "152 cm",
    weight: 40,
    favcolor: "black"
}
console.log(about)
newAbout = about
newAbout.favcolor = "pink"
console.log(newAbout)
    //aithematic operators
console.log("\tArithmetic Operator")
a = 5050
console.log(10 + 20)
console.log(5 - 2)
console.log(100 * 200)
console.log(1 / 2)
console.log(10 % 2)
console.log(35 ** 2)
console.log(a++)
console.log(a--)
console.log(++a)
console.log(--a)
    // Comparison Operator
console.log("\tComparison Operator")
var num1 = 96
var num2 = 69
console.log(num1 == num2)
console.log(num1 != num2)
console.log(num1 === num2)
console.log(num1 !== num2)
console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 >= num2)
console.log(num1 <= num2)
    // Assignment Operator
console.log("\tAssignment operator")
a = 30
console.log(a)
a += 1
console.log(a)
a -= 5
console.log(a)
a *= 20
console.log(a)
a /= 2
console.log(a)
a %= 2
console.log(a)
a **= 2
console.log(a)
    // Conditional Operator
console.log("\tConditional Operator")
var greater = (a > b) ? a : b
console.log(greater)
    // Logical Operator
console.log("\tLogical Operator")
console.log(10 && 20)
console.log(20 || 10)
console.log(!10)
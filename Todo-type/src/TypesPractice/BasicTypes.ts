// String
let message:string = "hello";
message="hi"
// message =3 ; error

// number
let Age:number =12;
Age=43
// Age="hello" error

//Boolean ------------------
let isAdmin :Boolean =false
isAdmin=true
// isAdmin=3 error

// Any  (not recommanded) ------------
let data :any ="hello"
data=3;
data=true
data= {name:"surya"}

// Array ---------------
let classes :number[]=[1,2,3,4]
classes=[2.4]
//classes=["surya","naveen"] error

let names :string[]=["surya","naveen"]
names=["reavnth"]
//names=[1,3] error

let array :any[]=["surya",12]

//Tuples ---------

// fixed array
let person :[name:string,age:number]= ["surya",12]
//person=[21,"surya"] error
person=["naveen",31]

//fixed type
let persons :[name:string,age:number][]=[["surya",12],["naveen",31]]


//union ---------
let student :string|number
student="surya"
student="12"
// student={"surya",12} error

// ENUM -------
const RED='RED'
const BLUE='BLUE'

enum color {RED,BLUE,GREEN}
console.log(color.RED) // o/p =0

enum color {YELLOW='YELLOW'}
console.log(color.YELLOW) // o/p =YELLOW

//object --------
let cars:{name:string,price:number} ={
    name:'toyoto',
    price:1000
}

type bike ={
    name:string,
    price:number
}

let bikes:bike ={
    name:'toyoto',
    price:1000
}

// bikes.name=2 error


// type Assertion ----------
let username:unknown="surya"
let user_n:string=<string>username // (OR) let user:string= username as string
let userid :number =<number>username


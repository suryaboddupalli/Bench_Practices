//   Functions

function sum(a:number,b:number):number{
    return a+b;
}
sum(4,5)

//optional
function sub(a:number,b:number,c?:number):number{
    return a+b;
}
sub(4,5)
sub(3,4,5)

// function multi(a?:number,b:number,c:number):number{
//     return c+b
// }
// error

//never
function error():never{
    throw new Error("error")
}

// interfaces -------------------

interface mobileinterface{
    name:string,
    price:number,
    model:string|number
}


let mobile:mobileinterface ={
    name:"oppo",
    price:100,
    model:"a"
}

//function interface 

interface suminterface {
(a:number,b:number):number
}

let add:suminterface =(a:number,b:number)=>a+b


// unknown vs any ------------------
let user :unknown="surya"
let user1:string=<string>user

let user2:any=20
let user3=<number>user2
let user4=<string>user2

// classes ----------------
class human{
   private name:string;
    protected age:number;
    public address:object
    constructor(name:string,age:number,address:object){
        this.name=name;
        this.age=age;
        this.address=address;
    }
}

let newHuman =new human("surya",13,{street:"--",locality:"---",city:"--"})

class humans extends human{
    job:string
    constructor(name:string,age:number,address:object,job:string){
        super(name,age,address)
        this.job=job

    }
}

// Generics---------------

function createArray<Type>(items:Type[]):Type[]{
    return new Array().concat(items)
}

let numberArray = createArray<number>([1,2,3])
let stringArray = createArray<String>(["surya","naveen"])
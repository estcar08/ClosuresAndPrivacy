/*
What is a closure? 
Is a function that allow to save references of lexical environement, 
in others words We can access from internal function to variables of a externarl 
function
Give me an example of closure:
*/
function startSum(){
	let sum = 0;
	return function(x){
  		console.log(sum +=  2 + x);
  	}
}

const sumFunc = startSum();
sumFunc(2);


/* 
What is ()() in code? 
It allow to execute the parent and child functions in one call. 
Example:
*/
function showName(){
	let msg = "Hello";
	return function(name){
  		console.log(`${msg} ${name}!`);
  	}
}

showName()("Carlos");


/* 
Move the variable after the closure (the function inside the function) and explain what happens.
It does not affect because it only creates the closure function 
and the variable is created too so when we call the parent function the
variable is now already defined
Example:
*/
function moveVariable(){
	function makeSum(x){
  		console.log(sum +=  2 + x);
  	}
	var sum = 0;
	return makeSum;
}

const mov = moveVariable();
mov(4);

/* 
Change var for let and explain why the logic is not affected.
It does not affect because it only creates the closure function 
and them the variable is create and it does not matter what the type is. 
Example:
*/
function moveVariableAndType(){
	function makeSum(x){
  		console.log(sum +=  2 + x);
  	}
	let sum = 0;
	return makeSum;
}

const mov2 = moveVariableAndType();
mov2(5);

/* 
Scope chain, an example of it, how many closures can we nest. 
Yes, We can chain diferentes functions inside to other function. 
Example:
*/
function scopeChaingFunction(){
	let sum = 0;
	function makeSum(x){
		sum += 2 + x
		let operation = "SUM";
  		function printResult(){
			console.log(`${operation}: ${sum}`);
		}
		return printResult;
  	}
	return makeSum;
}

scopeChaingFunction()(10)();

/* 
They are conflicts between the closure and the global scope? 
No, there a not, it does not affect because all inside a closures are encapsulated and hide to
the global context. 
Example:
*/
function startSubstration(){
	let subs = 0;
	return function(a,b){
		subs = a - b
  		console.log(subs);
  	}
}
let subs = "";
const subsFunc = startSubstration();
subsFunc(20,25);
/* 
Advantages of closures. 
We can hide and encapsulate the information inside a closure.
also it allow to use the patter of Factory Method. 
Example:
*/
function counterFactory(){
	let total = 0;
	return function(n){
		total = total + n;
  		console.log(`counter by ${n}: ${total}`);
  	}
}
var counterBy1 = counterFactory();
var counterBy4 = counterFactory();

counterBy1(1);
counterBy1(1);
counterBy4(4);
counterBy4(4);

/* 
What is data hiding and encapsulation? 
Data hidding allow to proctect all the data inside a function. 
Encapsulation is a procces of wrapping the data members into a single
unit, in this case a function. 
Example:
*/

/* 
Give me an example of privacy with closures. 
Example:
*/
function dataPrivacity(){
	let result = 0;
	let operation = "MULTI"
	return function(a,b){
		result = a * b
  		console.log(`${operation}: ${result}`);
  	}
}

dataPrivacity()(10,3);

/* 
What happens if you create two counters with the same closure? 
It creates two lexical environments that each have their own definitions and
memory storage. 
*/

/* 
How can we add more functions as a decrement counter? Give an example of it. 
We can use the Contructor Function.
Example:
*/

function Counter(){
	let count = 0;
	this.increment=() =>{
		count++;
		console.log(count);
	}
	this.decrement=() =>{
		count--;
		console.log(count);	
	}
}

const ctor = new Counter();
ctor.increment();
ctor.increment();
ctor.increment();

ctor.decrement();

/* 
What are the disadvantages of closures? 
The main disadvantage is excessive memory consumption.
*/
var Stack = function(){
	this.count = 0;
  this.storage = {};
  
  //Adds a value on to the end of the stack
  this.push = function(value){
  	this.storage[this.count] = value;
    this.count++;
  }
  //Remove and return value at the end of the stack
  this.pop = function(){
  	if(this.count === 0){
    	return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  this.size = function(){
  	return this.count;
  }
  //Returns the value at the end of the statck
  this.peek = function(){
  	return this.storage[this.count-1];
  }
}


var myStack = new Stack();
myStack.push("Hello");
myStack.push("world");
myStack.push("bye");
alert(myStack.peek());
myStack.pop();
alert(myStack.peek());
alert(myStack.size());
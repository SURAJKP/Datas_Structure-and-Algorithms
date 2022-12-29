class MyArray {
    constructor() {
        this.length= 0;
        this.data= {};
    }
    get() {
        return this.length;
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        delete this.data[this.length-1];
        this.length--;
        return this.length;
    }
    shift() {
        delete this.data[0];
        this.length--;
        for(let i=0; i < this.length-1; i++) {
            this.data[i] = this.data[i + 1];
        }
        return this.length;
    }
}

const newArray = new MyArray();
newArray.get();
newArray.push('Hi');
newArray.push('Hello');
newArray.shift();
console.log(newArray);
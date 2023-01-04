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
        for(let i=0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length-1];
        this.length--;
        return this.length;
    }
}

const newArray = new MyArray();
newArray.get();
newArray.push('A');
newArray.push('B');
newArray.push('C');
newArray.push('D');
newArray.push('E');
newArray.push('F');
newArray.push('G');
newArray.push('H');
newArray.shift();
console.log(newArray);
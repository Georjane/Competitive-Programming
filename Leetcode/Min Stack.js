var MinStack = function() {
        this.arr = [];
        this.sorted = [];
};

MinStack.prototype.push = function(val) {
    this.arr.push(val);
    if(this.sorted.length === 0){
        this.sorted.push(val);
    }else{
        this.sorted.push(Math.min(val,this.sorted[this.sorted.length-1]));
    }

    return this.arr;
};

MinStack.prototype.pop = function() {
    this.arr.pop();
    this.sorted.pop();
    return this.arr;
};

MinStack.prototype.top = function() {
    return this.arr[this.arr.length -1]
};

MinStack.prototype.getMin = function() {
    return this.sorted[this.sorted.length - 1];
};

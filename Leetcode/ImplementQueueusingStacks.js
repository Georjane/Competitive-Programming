var MyQueue = function() {
   this.arr = []; 
};

MyQueue.prototype.push = function(x) {
    
    return this.arr.push(x);
};

MyQueue.prototype.pop = function() {
    

    return this.arr.shift();
};

MyQueue.prototype.peek = function() {
    return this.arr[0]
};

MyQueue.prototype.empty = function() {
    if(this.arr.length === 0){
        return true;
    }else{
        return false;
    }
};

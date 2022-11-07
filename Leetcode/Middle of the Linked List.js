var middleNode = function(head) {
    let i = head;
    let j = head;
    while(j != null && j.next != null){
        i = i.next;
        j = j.next.next;
    }
    return i;
};

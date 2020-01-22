function LinkedList(list) {
    this.head = list || null;
}

function Node(data) {
    this.node = data;
    this.next = null;
}

LinkedList.prototype.insert = function(data) {
    let node = new Node(data);
    if(this.head == null){
        this.head = node;
    } else {
        let current = this.head;
        while(true){
            if (current.next == null) {
                current.next = node;
                break;
            }
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.insert(500);
list.insert(100);
list.insert(400);
list.insert(300);
list.insert(200);

LinkedList.prototype.mergeSort = function(list) { 
  
    if (list.next === null) 
        return list; 

    let count = 0; 
    let countList = list 
    let leftPart = list; 
    let leftPointer = list; 
    let rightPart = null; 
    let rightPointer = null; 

    while (countList.next !== null) { 
        count++; 
        countList = countList.next; 
    } 

    let mid = Math.floor(count / 2) 
    let count2 = 0; 

    while (count2 < mid) { 
        count2++; 
        leftPointer = leftPointer.next; 
    } 

    rightPart = new LinkedList(leftPointer.next); 
    leftPointer.next = null; 

    return this._mergeSort(this.mergeSort(leftPart), 
                           this.mergeSort(rightPart.head)) 
} 

LinkedList.prototype._mergeSort = function(left, right) { 

    let result = new LinkedList() 

    let resultPointer = result.head; 
    let pointerLeft = left; 
    let pointerRight = right; 

    while (pointerLeft && pointerRight) { 
        let tempNode = null; 

        if (pointerLeft.node > pointerRight.node) { 
            tempNode = pointerRight.node 
            pointerRight = pointerRight.next; 
        } 
        else { 
            tempNode = pointerLeft.node 
            pointerLeft = pointerLeft.next; 
        } 

        if (result.head == null) { 
            result.head = new Node(tempNode) 
            resultPointer = result.head 
        } 
        else { 
            resultPointer.next = new Node(tempNode) 
            resultPointer = resultPointer.next 
        } 
    } 

    resultPointer.next = pointerLeft; 
    while (resultPointer.next) 
        resultPointer = resultPointer.next 

        resultPointer.next = pointerRight 

     return result.head; 
} 

list.head = LinkedList.prototype.mergeSort(list.head) 
console.log(list);

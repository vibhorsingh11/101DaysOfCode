function LinkedList() {
    this.head = null;
    // this.tail = null;
}
function Node(value, next) {
    this.value = value;
    this.next = next;
    // this.prev = prev;
}

LinkedList.prototype.addToTail = function(value) {
    const newNode = new Node(value);
    if(this.head == null) {
        this.head = newNode;
    } else {
        let nextNode = this.head;
        while(true) {
            if(nextNode.next == null) {
                nextNode.next = newNode;
                break;
            }
            nextNode = nextNode.next;
        }
    }
};

const list = new LinkedList();
list.addToTail(100);
list.addToTail(200);
list.addToTail(300);
list.addToTail(400);
list.addToTail(500);
// console.log(list);

function ReverseList(list) {
    let next = null;
    let prev = null;
    if (list.head == null){
        return;
    } else {
        let current = list.head;        
        while(current != null){
            next = current.next
            current.next = prev;
            prev = current;
            current = next;
        }
    }
    return prev;
}

let prev = ReverseList(list);
console.log(prev);
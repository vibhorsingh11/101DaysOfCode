function LinkedList() {
    this.head = null;
}

function Node(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.addToTail = function(value) {
    let node = new Node(value);
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
list.addToTail(100);
list.addToTail(200);
list.addToTail(300);
list.addToTail(400);
list.addToTail(500);

function MiddleInsert(list, value) {
    let node = new Node(value);
    if (list.head == null)
        return;
    else {
        let length = 0;
        let current = list.head;
        while(current != null) {
            length++;
            current = current.next;
        }
        let mid = (length%2 == 0) ? (length /2) : ((length + 1)/2);
        current = list.head;
        while(mid-- > 0){
            current = current.next;
        }
        node.next = current.next;
        current.next = node;
    }
    console.log(list);
}

MiddleInsert(list, 250);
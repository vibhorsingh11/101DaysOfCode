function LinkedList (list) {
    this.head = list || null;
}

function Node (data) {
    this.node = data;
    this.next = null;
}

LinkedList.prototype.Insert = function (data) {
    let node = new Node(data);
    if (this.head == null) {
        return this.head = node;
    }
    let current = this.head;
    while (true) {
        if (current.next == null) {
            current.next = node;
            break;
        }
        current = current.next;
    }
}

const list = new LinkedList();
list.Insert(1);
list.Insert(4);
list.Insert(3);
list.Insert(2);
list.Insert(5);
list.Insert(2);

LinkedList.prototype.Partition = function(head, x) {
    let currentNode = new Node(0);
    let prevNode = new Node(0);
    if(head == null) {
        return;
    } 
    let current = currentNode;
    let prev = prevNode;
    while (head != null) {
        if (head.node < x) {
            current.next = head;
            current = current.next;
            // console.log(current);
        } else {            
            prev.next = head;
            prev = prev.next;
            // console.log(prev);
        }        
        head = head.next;
    }
    prev.next = null;
    current.next = prevNode.next;
    return currentNode.next;
}

let res = LinkedList.prototype.Partition(list.head, 3);
console.log(res);
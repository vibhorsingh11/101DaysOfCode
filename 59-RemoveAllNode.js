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
list.Insert(2);
list.Insert(3);
list.Insert(4);
list.Insert(3);
list.Insert(2);
list.Insert(1);

LinkedList.prototype.RemoveNodes = function(head, x) {
    let newNode = new Node();
    if(head == null) {
        return;
    } else {
        let current = head;
        let prev = newNode;
        while(current != null) {
            if(current.node == x) {
                prev = current.next
                current = null //current.next;
            } else {
                prev = current;
                current = current.next;
            }            
        }
        return prev;
    }
}

const result = LinkedList.prototype.RemoveNodes(list.head, 1);
console.log(result);
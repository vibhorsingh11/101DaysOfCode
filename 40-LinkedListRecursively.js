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
list.Insert(500);
list.Insert(100);
list.Insert(400);
list.Insert(300);
list.Insert(200);

LinkedList.prototype.Reverse = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    let newNode = LinkedList.prototype.Reverse(head.next);
    head.next.next = head;
    head.next = null;
    return newNode;
}

let res = LinkedList.prototype.Reverse(list.head);
console.log(res);

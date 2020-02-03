function LinkedList(list) {
    this.head = list || null;
}

function Node(data) {
    this.node = data;
    this.next = null;
}

LinkedList.prototype.insert = function (data) {
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
list.insert(500);
list.insert(100);
list.insert(400);
list.insert(300);
list.insert(200);

const list2 = new LinkedList();
list.insert(500);
list.insert(100);
list.insert(400);
list.insert(300);
list.insert(200);

LinkedList.prototype.mergeList = function (list, list2) {
    let current = list.head;
    while (current.next != null) {
        if (current.next == null) {
            current.next = list2.head;
            break;
        }
        current = current.next;
    }
    return list.head;
}

console.log(LinkedList.prototype.mergeList(list, list2));
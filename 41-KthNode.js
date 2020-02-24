function LinkedList (list) {
    this.head = list || null
}

function Node (data) {
    this.node = data;
    this.next = null;
}

LinkedList.prototype.insert = function(data) {
    let node = new Node(data);
    if (this.head == null) {
        return this.head = node;
    } else {
        let current = this.head;
        while (true) {
            if (current.next == null) {
                current.next = node;
                break;
            }
            current = current.next;
        }
    }
}

let list = new LinkedList();
list.insert(500);
list.insert(100);
list.insert(400);
list.insert(300);
list.insert(200);

LinkedList.prototype.KthNode = function (head, count) {
    let slow = head;
    let fast = head;    
    let counter = 1;
    while (fast.next != null) {
        counter++;
        fast = fast.next;
        if (count < counter) {
            slow = slow.next;            
        }        
    }
    slow.next = null;
    return slow;
}

let res = LinkedList.prototype.KthNode(list.head, 3);
console.log(res);
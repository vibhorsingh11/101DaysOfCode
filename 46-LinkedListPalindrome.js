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

function Stack() {
    this.items = [];
}

Stack.prototype.push = function(item) {
    this.items.push(item);
}

Stack.prototype.pop = function() {
    return this.items.pop();
}

LinkedList.prototype.Palindrome = function(head) {
    if(head == null) {
        return;
    } else {
        let stack = new Stack();
        let current = head
        let isPalin;
        while(current != null) {
            stack.push(current.node);
            current = current.next;
        }
        while(head != null) {
            let val = stack.pop();
            if(head.node == val){
                isPalin = true;
            } else {
                isPalin = false;
                break;
            }
            head = head.next;
        }
        return isPalin;
    }
}

let res = LinkedList.prototype.Palindrome(list.head);
console.log(res);

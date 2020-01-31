function LinkedList(list) {
    this.head = list || null;
}

function Node(data) {
    this.node = data
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

LinkedList.prototype.removeNode = function(list, position) {
    let current = list;
    let index = 0;
    let pre = null;
    while(true){
        if(position == 0){
            return list.next;
        }
        if(index == position){
            let temp = current;
            pre.next = current.next;
            temp = null;
            break;
        }
        pre = current;
        current = current.next;
        index++;
    }    
    return list;
}

list.head = LinkedList.prototype.removeNode(list, 2);
console.log(list);
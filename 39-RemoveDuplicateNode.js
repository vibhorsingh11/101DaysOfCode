function LinkedList(list) {
    this.head = list || null;
}

function Node(data) {
    this.node = data;
    this.next = null;
}

LinkedList.prototype.insert= function (data) {
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

let list = new LinkedList();
list.insert(500);
list.insert(100);
list.insert(500);
list.insert(400);
list.insert(300);
list.insert(200);
list.insert(400);

LinkedList.prototype.RemoveDuplicate = function (list) {
    let current = list.head.next;
    let prev = list.head;
    let remove = null;
    while (prev != null && prev.next != null) {
        current = prev;
        while (current.next != null) {
            if(current.next.node === prev.node){   
                remove = current.next;              
                current.next = current.next.next;                              
            } else {
                current = current.next;                
            }            
        }
        prev = prev.next;                
        
    }
    return list;
}

let res = LinkedList.prototype.RemoveDuplicate(list);
console.log(res);

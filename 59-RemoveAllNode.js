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
    let temp = new Node();
    if(head == null) {
        return;
    } else {
        temp = head;
        let prev = null;
        while (temp != null && temp.node == x)  
        {  
            head = temp.next; 
            temp = head;          
        }  
      
        while (temp != null)  
        {
            while (temp != null && temp.node != x)  
            {  
                prev = temp;  
                temp = temp.next;  
            } 
            if (temp == null) return; 
            prev.next = temp.next;
            temp = prev.next;  
        } 
        return head;
    }
}

const result = LinkedList.prototype.RemoveNodes(list.head, 1);
console.log(result);
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

// Below line can be used to make list circular
// list.head.next.next.next.next.next = list.head; 


function findMid(list){
	var slowptr =list.head;
	var fastptr =list.head;
	while(fastptr!=null && fastptr.next!=null){
		 fastptr = fastptr.next.next;
         slowptr = slowptr.next;
         if(fastptr === slowptr) {
            console.log('Circular Loop');
            slowptr.next = null;
            return slowptr;
         } else if (fastptr == null || fastptr.next == null) {
             console.log('Not Circular');
             slowptr.next = null;
             return slowptr;
         }
    }
    slowptr.next = null;
	return slowptr;
}

const res = findMid(list);
console.log(res);
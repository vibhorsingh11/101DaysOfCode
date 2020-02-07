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


function findMid(list){
	var slowptr =list.head;
	var fastptr =list.head;
	while(fastptr!=null && fastptr.next!=null){
		 fastptr = fastptr.next.next;
		 slowptr = slowptr.next;
    }
    slowptr.next = null;
	return slowptr;
}

const res = findMid(list);
console.log(res);
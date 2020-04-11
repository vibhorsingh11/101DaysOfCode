function Node (data) {
    this.data = data; 
    this.left = null; 
    this.right = null;
}

function BST () {
    this.root = null;
}

BST.prototype.insert = function (data) {
    let node = new Node(data);    
    if (this.root === null){
        this.root = node;
    } else {
        InsertNode(this.root, node);
    }
}

function InsertNode(root, node) {
    if (root.data > node.data) {
        if (root.left === null){
            root.left = node;
        } else {
            InsertNode(root.left, node);
        }            
    } else {
        if (root.right === null){
            root.right = node;
        } else {
            InsertNode(root.right, node);
        }  
    }
}

let list = new BST();
list.insert(1);
list.insert(2);
list.insert(5);
list.insert(3);
list.insert(6);
list.insert(4);

function Queue() {
    this.items = [];    
}

Queue.prototype.enqueue = function(key,value) {
    let item = {};
    item[key] = value;
    this.items.push(item);
}

Queue.prototype.dequeue = function() {
    return this.items.shift();
}

Queue.prototype.isEmpty = function() {
    return this.items.length == 0;
}

BST.prototype.TopView = function (root) {
    let queue = new Queue();
    let map = new Map();
    queue.enqueue(0,root);
    while(!queue.isEmpty()) {
        let current = queue.dequeue();
        let tempKey = Object.keys(current)[0];
        if(!map.has(tempKey)) {
            map.set(tempKey, current[tempKey]);
        }
        if(current[tempKey].left != null) {
            queue.enqueue(Number(tempKey) - 1, current[tempKey].left);
        }
        if(current[tempKey].right != null) {
            queue.enqueue(Number(tempKey) + 1, current[tempKey].right);
        }
    }
    for (let topView of map.values()) {
        console.log(topView.data);
    }
}

BST.prototype.TopView(list.root);
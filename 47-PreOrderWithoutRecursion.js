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
list.insert(500);
list.insert(100);
list.insert(600);
list.insert(300);
list.insert(200);

function Stack() {
    this.items = [];
}

Stack.prototype.push = function(item) {
    this.items.push(item);
}

Stack.prototype.pop = function() {
    return this.items.pop();
}

Stack.prototype.isEmpty = function() {
    return this.items.length == 0;
}

BST.prototype.Preorder = function(root) {
    let stack = new Stack();
    stack.push(root);
    
    while(!stack.isEmpty()) {
        let current = stack.pop();
        console.log(current.data);
        if(current.right != null){
            stack.push(current.right);
        } 
        if(current.left != null) {
            stack.push(current.left);
        }
    }
}

BST.prototype.Preorder(list.root);


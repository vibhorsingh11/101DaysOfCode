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

BST.prototype.PrintLeaf = function(root) {
    if(root == null) {
        return;
    } else {
        if(root.left == null && root.right == null){
            console.log(root.data);
        } else {
            BST.prototype.PrintLeaf(root.left);
            BST.prototype.PrintLeaf(root.right);
        }
    }
}

BST.prototype.PrintLeaf(list.root);

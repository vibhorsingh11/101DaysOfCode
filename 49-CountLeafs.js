function Node (data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function Tree () {
    this.root = null;
}

Tree.prototype.Insert = function(data) {
    let node = new Node(data);
    if (this.root == null) {
        this.root = node;
    } else {
        InsertNode(this.root,node);
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

let list = new Tree();
list.Insert(500);
list.Insert(100);
list.Insert(600);
list.Insert(300);
list.Insert(200);

let count = 0;

Tree.prototype.CountLeaf = function(root) {
    if(root == null) {
        return;
    } else {
        if(root.left == null && root.right == null){
            count++;
            console.log(root.data);
        } else {
            Tree.prototype.CountLeaf(root.left);
            Tree.prototype.CountLeaf(root.right);
        }
    }
    return count;
}

const res = Tree.prototype.CountLeaf(list.root);
console.log(res);
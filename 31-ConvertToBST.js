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

function TreeNode (data) {
    this.root = null;
    this.node = data;    
    this.left = null;
    this.right = null;
}

TreeNode.prototype.BST = function (root, list) {
    if(this.root == null){
        this.root = new Node(list.head);        
    } 
    if(this.root.data > list.head.data){
        this.root.left = TreeNode.prototype.BST(this.root.left, list.next);
    } else {
        this.root.right = TreeNode.prototype.BST(this.root.right, list.next);
    }        
    return root;
}

console.log(TreeNode.prototype.BST(this.root, list));

function BinarySearchTree() {
   
    function Node(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    this.root = null;

   
    this.addNode = function(value) {
        let node = new Node(value);

        if (!this.root) {
            this.root = node;
        } else {
            insertNode(this.root, node);
        }
    };

   
    function insertNode(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                insertNode(currentNode.left, newNode);
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                insertNode(currentNode.right, newNode);
            }
        }
    }

   
    this.inorder = function(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }

    this.preorder = function(node) {
    if(node !== null)
    {
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }
}
    this.postorder = function(node) {
        if(node !== null){
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.value)
        }
    }
}

let tree = new BinarySearchTree();
tree.addNode(3);
tree.addNode(5);
tree.addNode(14);
tree.addNode(11);
tree.addNode(25);
tree.addNode(2);

tree.inorder(tree.root);
tree.postorder(tree.root);
tree.preorder(tree.root);

//二叉搜索树
function BST() {
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  let root = null;
  // 递归实现
  this.insertByRecurse = function(key) {
    let node = new Node(key);
    if (root === null) {
      root = node;
    } else {
      insertNode(root, node);
    }
  };
  // 循环实现
  this.insertByLoop = function(key) {
    let newNode = new Node(key);
    if (root === null) {
      root = newNode;
      return;
    }
    let node = root;
    while (node !== null) {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
          break;
        } else {
          node = node.left;
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
          break;
        } else {
          node = node.right;
        }
      }
    }
  };
  this.search = function(key) {
    if (root === null) {
      return null;
    }
    let node = root;
    while (node !== null) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else {
        return node;
      }
    }
  };
  // 二叉树移除一个节点
  this.remove = function(key) {
    if (root === null) {
      return null;
    }
    root = removeNode(root, key);
  };
  this.preOrder = function() {
      preOrderNode(root)
  }
  this.inOrder = function() {
      inOrderNode(root)
  }
  this.postOrder = function() {
      postOrderNode(root)
  }
  this.getRoot = function() {
    return root;
  };
  this.getSmallest = function() {
      if(root === null) {
          return null;
      }
      getSmallestNode(root)
  }
}
function insertNode(node, newNode) {
  if (newNode.key < node.key) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
}
function removeNode(node, key) {
  if (node === null) {
    return null;
  }
  if (key < node.key) {
    node.left = removeNode(node.left, key);
    return node;
  } else if (key > node.key) {
    node.right = removeNode(node.right, key);
    return node;
  } else {
    if (node.left === null && node.right === null) {
      return null;
    } else if (node.left === null) {
      return node.right;
    } else if (node.right === null) {
      return node.left;
      // 两个子节点都不为空
    } else {
        let tempNode = getSmallestNode(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right,tempNode.data);
        return node;
    }
  }
}
function getSmallestNode(node) {
    while(node.left) {
        node = node.left;
    }
    return node;
}
// 先序遍历
function preOrderNode(node)  {
  if(node !== null) {
    console.log(node.key)
    preOrderNode(node.left)
    preOrderNode(node.right)
  }
}
// 中序遍历
function inOrderNode(node)  {
  if(node !== null) {
    inOrderNode(node.left)
    console.log(node.key)
    inOrderNode(node.right)
  }
}
// 后序遍历
function postOrderNode(node)  {
  if(node !== null) {
    postOrderNode(node.left)
    postOrderNode(node.right)
    console.log(node.key)
  }
}
let bst = new BST();
// bst.insertByLoop(100);
// bst.insertByLoop(20);
// bst.insertByLoop(40);
// bst.insertByLoop(10);
bst.insertByRecurse(100);
bst.insertByRecurse(20);
bst.insertByRecurse(40);
bst.insertByRecurse(10);
bst.insertByRecurse(50);
bst.insertByRecurse(55);
// bst.remove(100);
// console.log(bst.search(20));
// console.log(bst.getRoot());
bst.inOrder();

// 链表可以实现快速的插入和删除，时间复杂度是O(1), 但是查找的时间复杂度是O(n)，因为要遍历整个链表
function LinkedList () {
  let head = null;
  let length = 0;
  // 往链表尾部追加节点
  this.append = function (data) {
    let node = new Node (data);
    if (head === null) {
      head = node;
    } else {
      let current = head;
      // 循环的终止条件，遍历找到尾节点x.next === null, 将尾节点x的next指向node
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      length++;
    }
  };
  // 插入
  this.insertAt = function (pos, data) {
    if (pos > -1 && pos < length) {
      let node = new Node (data);
      let current = head;
      let index = 0;
      let previous;
      if (pos === 0) {
        node.next = current;
        head = node;
      } else {
        while (index < pos) {
          previous = current;
          current = current.next;
          index++;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };
  this.removeAt = function (pos) {
    if (pos > -1 && pos < length) {
      let current = head;
      let index = 0;
      let previous;
      if (pos === 0) {
        head = current.next;
      } else {
        while (index < pos) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
      }
      length--;
      return true;
    } else {
      return false;
    }
  };
  this.remove = function (data) {
    let index = this.indexOf (data);
    this.removeAt (index);
  };
  /**
   * 查找数据在链表中的索引
   */
  this.indexOf = function (data) {
    let current = head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  };
  this.getHead = function () {
    return head;
  };
  this.toString = function () {
    let current = head;
    let str = '';
    while (current) {
      str += current.data + ',';
      current = current.next;
    }
    return str.slice (0, -1);
  };
}
// 节点数据
function Node (data) {
  this.data = data;
  this.next = null;
}
function isLoop (head) {}
// 查找链表的倒数第n个节点
function findNthFromEnd (head, n) {
  // if(n <0 || n > length) {
  // 	return false;
  // }
  let p1 = head;
  let p2 = head;
  let index = 0;
  while (p1) {
    if (index < n) {
      p1 = p1.next;
      index++;
    } else {
      p1 = p1.next;
      p2 = p2.next;
    }
  }
  return p2;
}
// 单链表反转。迭代法和递归法
// 迭代法
function reverse (head) {
  let prev = null; //前指针节点
  let curr = head; //当前指针节点
  while (curr !== null) {
    let next = curr.next; // 临时节点，暂存当前节点的下一节点，用于后移
    curr.next = prev; //将当前节点指向它前面的节点
    prev = curr; // 前指针后移动
    curr = next; // 当前指针后移
  }
  return prev;
}
// 测试
let linkedList = new LinkedList ();
linkedList.append (100);
linkedList.append (10);
linkedList.append (30);
linkedList.append (50);
// linkedList.append (1);
// linkedList.append (0);
// linkedList.insertAt (0, 5);
// linkedList.insertAt (3, 3);
// linkedList.removeAt (2);
console.log (linkedList.toString ());
// console.log (linkedList.indexOf (10));
// console.log (linkedList.indexOf (200));
console.log (reverse(linkedList.getHead()));
// console.log (linkedList.toString());
// console.log (linkedList.getHead ());

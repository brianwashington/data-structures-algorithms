function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.prependNode = function(value) {
  const node = new Node(value);

  if (!this.head) {
    this.head = node;
    this.tail = this.head;
  } else {
    node.next = this.head;
    this.head = node;
  }
};

LinkedList.prototype.appendNode = function(value) {
  const node = new Node(value);

  if (!this.tail) {
    this.tail = node;
    this.head = this.tail;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeHead = function() {
  if (this.head) {
    let node = this.head.next;
    this.head.next = null;
    this.head = node;
  } else {
    throw new Error('List is empty');
  }
};

LinkedList.prototype.removeTail = function() {
  if (!this.tail) {
    throw new Error('List is empty');
    return;
  }

  if (this.head === this.tail) {
    this.removeHead();
    this.tail = null;
  } else if (this.tail) {
    let node = this.head;

    while (node.next && node.next !== this.tail) {
      node = node.next;
    }

    node.next = null;
    this.tail = node;
  }
};

LinkedList.prototype.deleteNode = function(value) {
  if (!this.head) {
    throw Error('List is empty!');
    return;
  }

  let node = this.head;

  if (node.value === value) {
    this.removeHead();
  } else {
    while (node.next && node.next.value !== value) {
      node = node.next;
    }

    if (node.next.next) {
      node.next = node.next.next;
    } else {
      this.removeTail();
    }
  }
};

LinkedList.prototype.reverse = function() {
  if (!this.head) {
    throw new Error('List is empty!');
    return;
  }
  let self = this;
  function helper(node) {
    if (node.next === null) {
      self.tail = self.head;
      return node;
    }
    const current = node;
    const prev = helper(node.next);
    current.next.next = current;
    current.next = null;
    return prev;
  }
  this.head = helper(this.head);
};

LinkedList.prototype.stringify = function() {
  let node = this.head;

  if (!node) {
    console.log('List is empty!');
    return;
  }

  let str = '';
  while (node) {
    str += `${node.value}${node.next ? ' -> ' : ' -> null'}`;
    node = node.next;
  }
  return str;
};

const linkedList = new LinkedList();

linkedList.appendNode(1);
linkedList.appendNode(2);
linkedList.appendNode(3);
linkedList.appendNode(4);
linkedList.appendNode(5);

linkedList.stringify();

module.exports = LinkedList;

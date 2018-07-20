const LinkedList = require('./LinkedList');

test('stringify prints nodes in order', () => {
  const linkedList = new LinkedList();

  linkedList.appendNode(1);
  linkedList.appendNode(2);
  linkedList.appendNode(3);
  linkedList.appendNode(4);
  linkedList.appendNode(5);

  expect(linkedList.stringify()).toBe('1 -> 2 -> 3 -> 4 -> 5 -> null');
});

test('reverse linked list', () => {
  const linkedList = new LinkedList();

  linkedList.appendNode(1);
  linkedList.appendNode(2);
  linkedList.appendNode(3);
  linkedList.appendNode(4);
  linkedList.appendNode(5);

  linkedList.reverse();

  expect(linkedList.stringify()).toBe('5 -> 4 -> 3 -> 2 -> 1 -> null');
});

test('reverse empty list throws exception', () => {
  expect(() => {
    new LinkedList().reverse();
    //linkedList.reverse();
  }).toThrow();
});

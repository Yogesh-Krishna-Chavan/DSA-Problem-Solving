/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;

  let map = new Map();

  // First pass: Create copies of all nodes and store them in the map
  let curr = head;
  while (curr) {
    map.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  // Second pass: Assign next and random pointers
  curr = head;
  while (curr) {
    let copy = map.get(curr);
    copy.next = map.get(curr.next) || null;
    copy.random = map.get(curr.random) || null;
    curr = curr.next;
  }

  return map.get(head);
};

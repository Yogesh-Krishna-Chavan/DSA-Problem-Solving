/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let first = dummy;
  let second = dummy;

  // Move first pointer `n + 1` steps ahead
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  // Move both pointers until first reaches the end
  while (first) {
    first = first.next;
    second = second.next;
  }

  // Remove the Nth node from the end
  second.next = second.next.next;

  return dummy.next;
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert linked list to array (for testing)
function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

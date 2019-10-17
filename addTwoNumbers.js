/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let num1 = '';
    let num2 = '';

    let traverseList = (list, str) => {
        let node = list;
        while (node.next) {
            str = node.val + str;
            node = node.next;
        }
        return str;
    }

    traverseList(l1, num1);
    traverseList(l2, num2);

    return parseInt(num1) + parseInt(num2);
};
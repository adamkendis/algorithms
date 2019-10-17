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
    let traverseList = (list) => {
        let node = list;
        let result = '';
        while (node) {
            result = node.val + result;
            node = node.next;
        }
        return result;
    }

    let num1 = traverseList(l1);
    let num2 = traverseList(l2);

    let sum = (BigInt(num1) + BigInt(num2)).toString();
    let resultHead = new ListNode();
    let curNode = resultHead;

    for (let i = sum.length-1; i >= 0; i--) {
        curNode.val = sum[i];
        if (i === 0) {
            return resultHead;
        }
        curNode.next = new ListNode();
        curNode = curNode.next;
    }
};
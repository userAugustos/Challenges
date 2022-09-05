/*
 * Challenge of leetCode problem: add-two-numbers 
 * 
 * */

const addTwoNumbers = function (l1, l2) {
	let sum = 0;
	let current = new ListNode(0)
	let result = current;

	while (l1 || l2) {
		if (l1) {
			sum += l1.val
			l1 = l1.next
		}

		if (l2) {
			sum += l2.val
			l2 = l2.next
		}

		current.next = new ListNode(sum % 10)
		current = current.next;

		sum = sum > 9 ? 1 : 0;
	}

	if (sum) {
		current.next = new ListNode(sum)
	}

	return result.next
};

addTwoNumbers([2, 4, 3], [5, 6, 4]) // expect: [7,0,8]
addTwoNumbers([0],[0])// expect: [0]
addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9])// expect: [8,9,9,9,0,0,0,1]
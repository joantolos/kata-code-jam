package com.joantolos.add.two.numbers;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;

public class AddTwoNumbersTest {

    AddTwoNumbers addTwoNumbers = new AddTwoNumbers();

    @Test
    public void shouldComplyWithExampleOne() {
        ListNode l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
        ListNode l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
        ListNode expected = new ListNode(7, new ListNode(0, new ListNode(8)));

        Assert.assertEquals(expected, addTwoNumbers.run(l1, l2));
    }

    @Test
    public void shouldComplyWithExampleTwo() {
        ListNode l1 = new ListNode(0);
        ListNode l2 = new ListNode(0);
        ListNode expected = new ListNode(0);

        Assert.assertEquals(expected, addTwoNumbers.run(l1, l2));
    }

    @Test
    public void shouldComplyWithExampleThree() {
        ListNode l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
        ListNode l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
        ListNode expected = new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))));

        Assert.assertEquals(expected, addTwoNumbers.run(l1, l2));
    }
}

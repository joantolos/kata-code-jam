package com.joantolos.kata.code.jam.two.sum;

import org.junit.Assert;
import org.junit.Test;

public class TwoSumTest {

    TwoSum twoSum = new TwoSum();
    int[] exampleOneNumbers = {2, 7, 11, 15};
    int exampleOneTarget = 9;
    int[] exampleTwoNumbers = {3, 2, 4};
    int exampleTwoTarget = 6;
    int[] exampleThreeNumbers = {3, 3};
    int exampleThreeTarget = 6;

    @Test
    public void shouldComplyWithExampleOne() {
        Assert.assertArrayEquals(new int[]{0, 1}, twoSum.exponentialAlgorithmBad(exampleOneNumbers, exampleOneTarget));
    }

    @Test
    public void shouldComplyWithExampleTwo() {
        Assert.assertArrayEquals(new int[]{1, 2}, twoSum.exponentialAlgorithmBad(exampleTwoNumbers, exampleTwoTarget));
    }

    @Test
    public void shouldComplyWithExampleThree() {
        Assert.assertArrayEquals(new int[]{0, 1}, twoSum.exponentialAlgorithm(exampleThreeNumbers, exampleThreeTarget));
    }

    @Test
    public void logarithmAlgorithmShouldRespondAsExponentialAlgorithmForExampleOne() {
        Assert.assertArrayEquals(twoSum.exponentialAlgorithm(exampleOneNumbers, exampleOneTarget), twoSum.linealAlgorithm(exampleOneNumbers, exampleOneTarget));
    }

    @Test
    public void logarithmAlgorithmShouldRespondAsExponentialAlgorithmForExampleTwo() {
        Assert.assertArrayEquals(twoSum.exponentialAlgorithm(exampleTwoNumbers, exampleTwoTarget), twoSum.linealAlgorithm(exampleTwoNumbers, exampleTwoTarget));
    }

    @Test
    public void logarithmAlgorithmShouldRespondAsExponentialAlgorithmForExampleThree() {
        Assert.assertArrayEquals(twoSum.exponentialAlgorithm(exampleThreeNumbers, exampleThreeTarget), twoSum.linealAlgorithm(exampleThreeNumbers, exampleThreeTarget));
    }

}

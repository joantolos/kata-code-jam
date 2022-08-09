package com.joantolos.three.sum;

import org.junit.Assert;
import org.junit.Test;

import java.util.List;

public class ThreeSumTest {

    private final ThreeSum threeSum = new ThreeSum();

    @Test
    public void shouldComplyWithExampleOne() {
        List<List<Integer>> triplets = threeSum.threeSumTwoPointerTrick(new int[]{-1,0,1,2,-1,-4});

        Assert.assertTrue(
                triplets.contains(List.of(-1,-1,2)) &&
                        triplets.contains(List.of(-1,0,1))
        );
    }

    @Test
    public void shouldComplyWithExampleTwo() {
        List<List<Integer>> triplets = threeSum.threeSumTwoPointerTrick(new int[]{0,1,1});

        Assert.assertEquals(0, triplets.size());
    }

    @Test
    public void shouldComplyWithExampleThree() {
        List<List<Integer>> triplets = threeSum.threeSumTwoPointerTrick(new int[]{0,0,0});

        Assert.assertTrue(triplets.contains(List.of(0,0,0)));
    }

    @Test
    public void shouldComplyWithExampleFour() {
        List<List<Integer>> triplets = threeSum.threeSumTwoPointerTrick(new int[]{3,0,-2,-1,1,2});

        Assert.assertTrue(
                triplets.contains(List.of(-2,-1,3)) &&
                        triplets.contains(List.of(-2,0,2)) &&
                        triplets.contains(List.of(-1,0,1))
        );
    }
}

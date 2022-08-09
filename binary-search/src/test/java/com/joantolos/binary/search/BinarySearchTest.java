package com.joantolos.binary.search;

import org.junit.Assert;
import org.junit.Test;

import java.util.Arrays;

public class BinarySearchTest {
    private final BinarySearch binarySearch = new BinarySearch();

    @Test
    public void shouldComplyWithExampleOne() {
        Assert.assertEquals(4, binarySearch.search(new int[]{-1,0,3,5,9,12}, 9));
    }

    @Test
    public void shouldComplyWithExampleTwo() {
        Assert.assertEquals(-1, binarySearch.search(new int[]{-1,0,3,5,9,12}, 2));
    }

    @Test
    public void shouldWorkAsJavaImplementation() {
        int[] nums = {-1, 0, 3, 5, 9, 12};
        int target = 9;
        Assert.assertEquals(Arrays.binarySearch(nums, target), binarySearch.search(nums, target));
    }
}

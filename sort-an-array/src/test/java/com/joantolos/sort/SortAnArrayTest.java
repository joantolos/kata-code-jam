package com.joantolos.sort;

import org.junit.Assert;
import org.junit.Test;

public class SortAnArrayTest {

    private final SortAnArray sortAnArray = new SortAnArray();

    @Test
    public void shouldSwapTwoElementsOnAnArrayByElement() {
        Assert.assertArrayEquals(new int[]{5,3,2,1}, sortAnArray.swapByElement(new int[]{5,2,3,1}, 3, 2));
        Assert.assertArrayEquals(new int[]{5,3,2,1}, sortAnArray.swapByElement(new int[]{5,2,3,1}, 2, 3));
        Assert.assertArrayEquals(new int[]{5,2,9,1,6,7,3}, sortAnArray.swapByElement(new int[]{5,2,3,1,6,7,9}, 9, 3));
    }

    @Test
    public void shouldSwapTwoElementsOnAnArrayByIndex() {
        Assert.assertArrayEquals(new int[]{5,3,2,1}, sortAnArray.swapByIndex(new int[]{5,2,3,1}, 2, 1));
        Assert.assertArrayEquals(new int[]{5,3,2,1}, sortAnArray.swapByIndex(new int[]{5,2,3,1}, 1, 2));
        Assert.assertArrayEquals(new int[]{5,2,9,1,6,7,3}, sortAnArray.swapByIndex(new int[]{5,2,3,1,6,7,9}, 6, 2));
    }

    @Test
    public void shouldSortWithSelectionSort() {
        Assert.assertArrayEquals(new int[]{1,2,3,5}, sortAnArray.selectionSort(new int[]{5,2,3,1}));
        Assert.assertArrayEquals(new int[]{0,0,0}, sortAnArray.selectionSort(new int[]{0,0,0}));
    }

    @Test
    public void shouldSortWithInsertionSort() {
        Assert.assertArrayEquals(new int[]{1,2,3,5}, sortAnArray.insertionSort(new int[]{5,2,3,1}));
        Assert.assertArrayEquals(new int[]{0,0,0}, sortAnArray.insertionSort(new int[]{0,0,0}));
    }

    @Test
    public void shouldSortWithShellSort() {
        Assert.assertArrayEquals(new int[]{1,2,3,5}, sortAnArray.shellSort(new int[]{5,2,3,1}));
        Assert.assertArrayEquals(new int[]{0,0,0}, sortAnArray.shellSort(new int[]{0,0,0}));
    }

    @Test
    public void shouldCheckIfArrayIsSorted() {
        Assert.assertTrue(sortAnArray.isSorted(new int[]{1,2,3,4,5}));
        Assert.assertFalse(sortAnArray.isSorted(new int[]{2,1,3,4,5}));
    }
}

package com.joantolos.binary.search;

public class BinarySearch {

    public int search(int[] nums, int target) {
        int bottomIndex = 0;
        int topIndex = nums.length - 1;

        while(bottomIndex <= topIndex) {
            int middleIndex = bottomIndex + (topIndex - bottomIndex) / 2;

            if (target < nums[middleIndex]) {
                topIndex = middleIndex -1 ;
            } else if (target > nums[middleIndex]) {
                bottomIndex = middleIndex +1;
            } else {
                return middleIndex;
            }
        }

        return -1;
    }
}

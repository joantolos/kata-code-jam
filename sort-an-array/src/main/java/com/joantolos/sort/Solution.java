package com.joantolos.sort;

public class Solution {

    public int[] solution(int[] nums) {
        int h = 1;
        while (h < nums.length/3) {
            h = 3 * h + 1;
        }

        while (h >= 1) {
            for (int i = h; i < nums.length; i++) {
                for (int j = i; j >= h && nums[j] < nums[j-h]; j -= h) {
                    int oldP = nums[j];
                    nums[j] = nums[j - h];
                    nums[j - h] = oldP;
                }
            }
            h = h/3;
        }
        return nums;
    }

}

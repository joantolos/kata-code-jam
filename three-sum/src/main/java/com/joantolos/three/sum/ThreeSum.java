package com.joantolos.three.sum;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ThreeSum {

   public List<List<Integer>> threeSumCubic(int[] nums) {
        List<List<Integer>> triplets = new ArrayList<>();

        for(int i = 0; i < nums.length; i++) {
            for(int j = i + 1; j < nums.length; j++) {
                for(int k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] == 0){
                        List<Integer> triplet = new ArrayList<>(List.of(nums[i], nums[j], nums[k]));
                        Collections.sort(triplet);
                        if (!triplets.contains(triplet)) {
                            triplets.add(triplet);
                        }
                    }
                }
            }
        }
        return triplets;
    }

    public List<List<Integer>> threeSumQuadratic(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> triplets = new ArrayList<>();

        for(int i = 0; i < nums.length; i++) {
            for(int j = i + 1; j < nums.length; j++) {
                int k = Arrays.binarySearch(nums, (nums[i] + nums[j]) * -1);
                if (k >= 0 && k != i && k != j){
                    List<Integer> triplet = new ArrayList<>(List.of(nums[i], nums[j], nums[k]));
                    Collections.sort(triplet);
                    if (!triplets.contains(triplet)) {
                        triplets.add(triplet);
                    }
                }
            }
        }
        return triplets;
    }

    public List<List<Integer>> threeSumTwoPointerTrick(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> triplets = new ArrayList<>();

        for (int i = 0; i < nums.length-2; i++) {
            if (i == 0 || nums[i] != nums[i - 1]) {
                int bottomIndex = i+1, topIndex = nums.length-1, sum = -nums[i];
                while (bottomIndex < topIndex) {
                    if (nums[bottomIndex] + nums[topIndex] == sum) {
                        triplets.add(Arrays.asList(nums[i], nums[bottomIndex], nums[topIndex]));
                        while (bottomIndex < topIndex && nums[bottomIndex] == nums[bottomIndex+1]) {
                            bottomIndex++;
                        }
                        while (bottomIndex < topIndex && nums[topIndex] == nums[topIndex-1]) {
                            topIndex--;
                        }
                        bottomIndex++;
                        topIndex--;
                    } else if (nums[bottomIndex] + nums[topIndex] < sum) {
                        bottomIndex++;
                    } else {
                        topIndex--;
                    }
                }
            }
        }
        return triplets;
    }

}
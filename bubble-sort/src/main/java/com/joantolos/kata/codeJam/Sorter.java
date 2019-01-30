package com.joantolos.kata.codeJam;

public class Sorter {

    public Integer[] bubble(Integer[] target) {
        for (int outer = 0; outer < target.length; outer++) {
            for (int inner = 0; inner < target.length - outer- 1; inner++) {
                if (target[inner] > target[inner + 1]) {
                    int temp = target[inner];
                    target[inner] = target[inner + 1];
                    target[inner + 1] = temp;
                }
            }
        }
        return target;
    }

}

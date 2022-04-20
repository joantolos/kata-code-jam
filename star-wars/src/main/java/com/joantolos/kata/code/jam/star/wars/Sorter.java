package com.joantolos.kata.code.jam.star.wars;

import java.util.Arrays;

public class Sorter {

    public String[] sort(String[] target, Integer[] order) {
        return Arrays.stream(order).map(position -> target[position - 1]).toArray(String[]::new);
    }
}

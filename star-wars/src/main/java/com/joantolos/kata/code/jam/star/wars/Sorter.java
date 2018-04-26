package com.joantolos.kata.code.jam.star.wars;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Sorter {

    public String[] sort(String[] target, Integer[] order) {
        List<String> orderedTarget = new ArrayList<>();
        Arrays.stream(order).forEach(position -> orderedTarget.add(target[position - 1]));
        return orderedTarget.toArray(new String[target.length]);
    }
}

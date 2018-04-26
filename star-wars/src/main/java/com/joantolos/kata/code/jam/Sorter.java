package com.joantolos.kata.code.jam;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Sorter {

    public String[] sort(String[] target, Integer[] order) {
        List<String> orderedTarget = new ArrayList<>();
        Arrays.stream(order).forEach(o -> orderedTarget.add(target[o - 1]));
        return orderedTarget.toArray(new String[target.length]);
    }
}

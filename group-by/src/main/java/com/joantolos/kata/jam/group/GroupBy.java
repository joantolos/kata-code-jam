package com.joantolos.kata.jam.group;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class GroupBy {

    public Map<Integer, List<String>> scores(Map<String, Integer> scores) {
        return scores.keySet()
                .stream()
                .collect(Collectors.groupingBy(scores::get));
    }
}

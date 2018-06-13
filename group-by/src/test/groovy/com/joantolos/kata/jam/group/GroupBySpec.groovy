package com.joantolos.kata.jam.group

import spock.lang.Shared
import spock.lang.Specification

class GroupBySpec extends Specification {

    @Shared GroupBy groupBy
    def setupSpec() {
        groupBy = new GroupBy()
    }

    def 'Should group by scores'() {

        Map<String, Integer> scores = new HashMap<>()

        scores.put("Jack", 12)
        scores.put("Jill", 15)
        scores.put("Tom", 11)
        scores.put("Darla", 15)
        scores.put("Nick", 15)
        scores.put("Nancy", 11)

        expect:
        groupBy.scores(scores).get(11).containsAll(["Tom", "Nancy"])
        groupBy.scores(scores).get(12).containsAll(["Jack"])
        groupBy.scores(scores).get(15).containsAll(["Jill", "Darla", "Nick"])
    }
}

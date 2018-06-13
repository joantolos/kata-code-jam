package com.joantolos.kata.jam.group

import spock.lang.Shared
import spock.lang.Specification

class GroupBySpec extends Specification {

    @Shared Map<String, Integer> scores
    @Shared GroupBy groupBy

    def setupSpec() {
        groupBy = new GroupBy()
        scores = new HashMap<>()

        scores.put("Jack", 12)
        scores.put("Jill", 15)
        scores.put("Tom", 11)
        scores.put("Darla", 15)
        scores.put("Nick", 15)
        scores.put("Nancy", 11)
    }

    def 'Tom and Nancy must have 11 score'() {
        expect:
        groupBy.scores(scores).get(11).containsAll(["Tom", "Nancy"])
    }

    def 'Jack must have 12 score'() {
        expect:
        groupBy.scores(scores).get(12).containsAll(["Jack"])
    }

    def 'Jill, Darla and Nick must have 15 score'() {
        expect:
        groupBy.scores(scores).get(15).containsAll(["Jill", "Darla", "Nick"])
    }
}

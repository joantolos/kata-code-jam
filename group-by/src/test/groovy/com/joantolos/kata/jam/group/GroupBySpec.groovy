package com.joantolos.kata.jam.group

import spock.lang.Shared
import spock.lang.Specification

class GroupBySpec extends Specification {

    @Shared scores = [:]
    @Shared GroupBy groupBy

    def setupSpec() {
        groupBy = new GroupBy()

        scores['Jack'] = 12
        scores['Jill'] = 15
        scores['Tom'] = 11
        scores['Darla'] = 15
        scores['Nick'] = 15
        scores['Nancy'] = 11
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

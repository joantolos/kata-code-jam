package com.joantolos.kata.code.jam.bubble

import spock.lang.Shared
import spock.lang.Specification

class SortSpec extends Specification {

    @Shared Sorter sorter
    def setupSpec() {
        sorter = new Sorter()
    }

    def 'Should sort the integer list'() {

        expect:
        Integer[] target = [5, 7, 10, 11, 12, 3, 9, 101]
        [3, 5, 7, 9, 10, 11, 12, 101] == sorter.bubble(target)
    }
}

package com.joantolos.kata.code.jam.bubble

import com.joantolos.kata.codeJam.SorterProvider
import spock.lang.Shared
import spock.lang.Specification

class SortSpec extends Specification {

    @Shared SorterProvider sorter
    def setupSpec() {
        sorter = new SorterProvider()
    }

    def 'Should sort the integer list'() {

        expect:
        Integer[] target = [5, 7, 10, 11, 12, 3, 9, 101]
        [3, 5, 7, 9, 10, 11, 12, 101] == sorter.bubble(target)
    }
}

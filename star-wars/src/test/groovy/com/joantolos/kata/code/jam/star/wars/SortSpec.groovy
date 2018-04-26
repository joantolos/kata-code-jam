package com.joantolos.kata.code.jam.star.wars

import com.joantolos.kata.code.jam.star.wars.Sorter
import spock.lang.Shared
import spock.lang.Specification

class SortSpec extends Specification {

    @Shared Sorter sorter
    def setupSpec() {
        sorter = new Sorter()
    }

    def 'Should sort one array by another one defining the order'() {

        given: "The list of Star Wars movies ordered by release date"
        String[] starWars = [
                'A New Hope (1977)',
                'The Empire Strikes Back (1980)',
                'Return of the Jedi (1983)',
                'The Phantom Menace (1999)',
                'Attack of the Clones (2002)',
                'Revenge of the Sith (2005)',
                'The Force Awakens (2015)',
                'Rogue One: A Star Wars Story (2016)',
                'The Last Jedi (2017)',
                'Solo: A Star Wars Story (2018)'
        ]

        when: "sorting by the proper order array"
        Integer[] order = [4, 5, 6, 10, 8, 1 ,2 ,3 ,7, 9]
        String[] starWarsChronologically = sorter.sort(starWars, order);

        then: 'it should match the expected result'
        String[] expectedStarWarsChronologically = [
                'The Phantom Menace (1999)',
                'Attack of the Clones (2002)',
                'Revenge of the Sith (2005)',
                'Solo: A Star Wars Story (2018)',
                'Rogue One: A Star Wars Story (2016)',
                'A New Hope (1977)',
                'The Empire Strikes Back (1980)',
                'Return of the Jedi (1983)',
                'The Force Awakens (2015)',
                'The Last Jedi (2017)'
        ]
        assert expectedStarWarsChronologically == starWarsChronologically
    }
}

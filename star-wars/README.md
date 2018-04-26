# Star Wars Movies Order

## A little context

The Star Wars movies can be classified as trilogies (which includes the original trilogy, the prequel trilogy and the sequel trilogy) and the anthology films ([source wikipedia][1]).

##### Trilogies:

###### Original trilogy:

* A New Hope (1977)
* The Empire Strikes Back (1980)
* Return of the Jedi (1983)

###### Prequel trilogy:

* The Phantom Menace (1999)
* Attack of the Clones (2002)
* Revenge of the Sith (2005)

###### Sequel trilogy:
* The Force Awakens (2015)
* The Last Jedi (2017)

##### Anthology films:

* Rogue One: A Star Wars Story (2016)
* Solo: A Star Wars Story (2018)

For the purpose of the exercise, we are going to consider the given array, with the movies arranged by chronological order (notice the release year at the end of the name):

    [
        A New Hope (1977), 
        The Empire Strikes Back (1980), 
        Return of the Jedi (1983), 
        The Phantom Menace (1999),
        Attack of the Clones (2002),
        Revenge of the Sith (2005),
        The Force Awakens (2015),
        Rogue One: A Star Wars Story (2016),
        The Last Jedi (2017),
        Solo: A Star Wars Story (2018)
    ]

Then we have and auxiliary array which defines the chronological order, according with the plot of the movies.

    [4, 5, 6, 10, 8, 1 ,2 ,3 ,7, 9]

This indicates the correct order if we want to see the movies chronologically. If we apply the order on the second array to the first one, the expected result is the following (according to [this site][2]):

    [
        The Phantom Menace (1999),
        Attack of the Clones (2002),
        Revenge of the Sith (2005),
        Solo: A Star Wars Story (2018),
        Rogue One: A Star Wars Story (2016),
        A New Hope (1977), 
        The Empire Strikes Back (1980), 
        Return of the Jedi (1983), 
        The Force Awakens (2015),
        The Last Jedi (2017)
    ]

Disclaimer: I know there are TV-Shows in the middle and animation motion pictures, my apologies to the Star Wars fans, this is only a coding exercise.

## The Goal

Take the original array:

    [
        A New Hope (1977), 
        The Empire Strikes Back (1980), 
        Return of the Jedi (1983), 
        The Phantom Menace (1999),
        Attack of the Clones (2002),
        Revenge of the Sith (2005),
        The Force Awakens (2015),
        Rogue One: A Star Wars Story (2016),
        The Last Jedi (2017),
        Solo: A Star Wars Story (2018)
    ]
    
Use the order array: 

    [4, 5, 6, 10, 8, 1 ,2 ,3 ,7, 9]
    
And obtain the expected chronological order:

    [
        The Phantom Menace (1999),
        Attack of the Clones (2002),
        Revenge of the Sith (2005),
        Solo: A Star Wars Story (2018),
        Rogue One: A Star Wars Story (2016),
        A New Hope (1977), 
        The Empire Strikes Back (1980), 
        Return of the Jedi (1983), 
        The Force Awakens (2015),
        The Last Jedi (2017)
    ]
    
Write the code in order to make it generic. Implement the feature of ordering one array according to another one, the Star Wars is just an instance of that feature.

[1]: https://en.wikipedia.org/wiki/Star_Wars
[2]: http://www.digitalspy.com/movies/star-wars/feature/a825727/star-wars-timeline-chronology-phantom-menace-to-last-jedi/
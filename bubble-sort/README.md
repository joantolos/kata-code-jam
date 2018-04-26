# Bubble Sort Algorithm

## Little context

Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort.[2] Bubble sort can be practical if the input is in mostly sorted order with some out-of-order elements nearly in position.

![Bubble Sort Illustration Two](bubbleSortTwo.gif)

A bubble sort, a sorting algorithm that continuously steps through a list, swapping items until they appear in the correct order. The list was plotted in a Cartesian coordinate system, with each point (x, y) indicating that the value y is stored at index x. Then the list would be sorted by bubble sort according to every pixel's value. Note that the largest end gets sorted first, with smaller elements taking longer to move to their correct positions.

![Bubble Sort Illustration One](bubbleSortOne.gif)

An example of bubble sort. Starting from the beginning of the list, compare every adjacent pair, swap their position if they are not in the right order (the latter one is smaller than the former one). After each iteration, one less element (the last one) is needed to be compared until there are no more elements left to be compared.

[ Source wikipedia ][1]

[1]: https://en.wikipedia.org/wiki/Bubble_sort

## The exercise

Implement a function that receives a number array and returns the array sorted ascendant. Like:

    [5, 7, 10, 11, 12, 3, 9, 101]

Should return:

    [3, 5, 7, 9, 10, 11, 12, 101]
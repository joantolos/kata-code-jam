# String composer

We have a JSON with information about an specific quote from a book, but the information is not always complete:

    "input":[
       {
          "description":"There is some good in this world, and it’s worth fighting for.",
          "author":"J.R.R. Tolkien",
          "book":"The Two Towers.",
          "vol":"1",
          "issue":"1",
          "page":"137"
       },
       {
          "description":"Get busy living, or get busy dying.",
          "author":"Stephen King",
          "book":"Different Seasons.",
          "page":"94"
       },
       {
          "description":"Who, being loved, is poor?",
          "author":"Oscar Wilde",
          "book":"A Woman of No Importance.",
          "vol":"2",
          "page":"30"
       },
       {
          "description":"Every human life is worth the same, and worth saving.",
          "author":"J.K. Rowling",
          "book":"Harry Potter and the Deathly Hallows.",
          "vol":"7",
          "issue":"2",
          "page":"83"
       }
    ]
    
Sometimes we don't know the exact issue, volume or page. Either way, we want to transform that data structure into single lines to print on a html file, like this:

    "output":[
       "There is some good in this world, and it’s worth fighting for. – J.R.R. Tolkien, The Two Towers. VOLUME: 1 | ISSUE: 1 | PAGE: 137",
       "Get busy living, or get busy dying. – Stephen King, Different Seasons. PAGE: 94",
       "Who, being loved, is poor? – Oscar Wilde, A Woman of No Importance. VOLUME: 2 | PAGE: 30",
       "Every human life is worth the same, and worth saving. – J.K. Rowling, Harry Potter and the Deathly Hallows. VOLUME: 7 | ISSUE: 2 | PAGE: 83"
    ]    

Notice the pipes, the commas, the slash and the fact that some prefixes (PAGE, VOLUME and ISSUE) only appear when it's available. With that transformation we can directly paint the list on a website:

<h2 style="color: #2e6c80;">Quotes:</h2>
<ul>
<li>There is some good in this world, and it&rsquo;s worth fighting for. &ndash; J.R.R. Tolkien, The Two Towers. VOLUME: 1 | ISSUE: 1 | PAGE: 137</li>
<li>Get busy living, or get busy dying. &ndash; Stephen King, Different Seasons. PAGE: 94</li>
<li>Who, being loved, is poor? &ndash; Oscar Wilde, A Woman of No Importance. VOLUME: 2 | PAGE: 30</li>
<li>Every human life is worth the same, and worth saving. &ndash; J.K. Rowling, Harry Potter and the Deathly Hallows. VOLUME: 7 | ISSUE: 2 | PAGE: 83</li>
</ul>
<p>&nbsp;</p>

Iterating the result list, we can build the proper html:

    <h2 style="color: #2e6c80;">Quotes:</h2>
    <ul>
    <li>There is some good in this world, and it&rsquo;s worth fighting for. &ndash; J.R.R. Tolkien, The Two Towers. VOLUME: 1 | ISSUE: 1 | PAGE: 137</li>
    <li>Get busy living, or get busy dying. &ndash; Stephen King, Different Seasons. PAGE: 94</li>
    <li>Who, being loved, is poor? &ndash; Oscar Wilde, A Woman of No Importance. VOLUME: 2 | PAGE: 30</li>
    <li>Every human life is worth the same, and worth saving. &ndash; J.K. Rowling, Harry Potter and the Deathly Hallows. VOLUME: 7 | ISSUE: 2 | PAGE: 83</li>
    </ul>
    <p>&nbsp;</p>
    
Write a function on Javascript that given the first array, it returns the second one.    

## Running tests

Install the dependencies:

    yarn install

Run the tests:

    yarn test
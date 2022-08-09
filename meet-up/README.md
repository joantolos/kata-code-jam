# Meet Up Parser

We have a JSON with information about several meet ups and technical conferences, but the information is not always complete:

    {
      "input": [
        {
          "edition": "4th",
          "name": "JBCN Conference",
          "startDate": "2018-06-11",
          "endDate": "2018-06-13",
          "location": [
            {
              "city": "Barcelona",
              "country": "Spain"
            }
          ]
        },
        {
          "edition": "3rd",
          "name": "DevTernity",
          "startDate": "2018-11-30",
          "endDate": "2018-12-01",
          "location": [
            {
              "city": "Riga",
              "country": "Latvia"
            }
          ]
        },
    
        {
          "edition": "1st",
          "name": "I T.A.K.E Unconference",
          "startDate": "2016-05-19",
          "endDate": "2016-05-20",
          "location": [
            {
              "city": "Bucharest",
              "country": "Romania"
            },
            {
              "city": "Maramures",
              "country": "Romania"
            }
          ]
        },
        {
          "edition": "2nd",
          "name": "Product Owner Rule Book",
          "startDate": "2016-04-11",
          "endDate": "2016-04-13",
          "location": [
            {
              "city": "Paris",
              "country": "France"
            },
            {
              "city": "Madrid",
              "country": "Spain"
            }
          ]
        },
        {
          "name": "Upfront Summit",
          "startDate": "2018-02-01",
          "location": [
            {
              "city": "Los Angeles",
              "state": "California",
              "country": "United States"
            }
          ]
        },
        {
          "name": "IBM Think",
          "startDate": "2018-03-19",
          "location": [
            {
              "state": "Nevada",
              "country": "United States"
            }
          ]
        }
      ]
    }

Sometimes we don't know all the data. Either way, we want to transform that data structure into single lines to print on a html file, like this:

    {
      "meetUps": [
        "4th JBCN Conference · 2018-06-11 / 2018-06-13 · Barcelona, Spain",
        "3rd DevTernity · 2018-11-30 / 2018-12-01 · Riga, Latvia",
        "1st I T.A.K.E Unconference · 2016-05-19 / 2016-05-20 · Bucharest | Maramures, Romania",
        "2nd Product Owner Rule Book · 2016-04-11 / 2016-04-13 · Paris, France | Madrid, Spain",
        "Upfront Summit · 2018-02-01 · Los Angeles, California. United States",
        "IBM Think · 2018-03-19 · Nevada, United States"
      ]
    }

Notice the slashes, the points, etc. If the meet up is only one day, there is no end date. Take into account, that some events can happen at the same time on several locations.

With that transformation we can directly paint the list on a website:

<h2 style="color: #2e6c80;">Meet Ups:</h2>
<ul>
<li>4th JBCN Conference · 2018-06-11 / 2018-06-13 · Barcelona, Spain</li>
<li>3rd DevTernity · 2018-11-30 / 2018-12-01 · Riga, Latvia</li>
<li>1st I T.A.K.E Unconference · 2016-05-19 / 2016-05-20 · Bucharest | Maramures, Romania</li>
<li>2nd Product Owner Rule Book · 2016-04-11 / 2016-04-13 · Paris, France | Madrid, Spain</li>
<li>Upfront Summit · 2018-02-01 · Los Angeles, California. United States</li>
<li>IBM Think · 2018-03-19 · Nevada, United States</li>
</ul>

Iterating the result list, we can build the proper html:

    <h2 style="color: #2e6c80;">Meet Ups:</h2>
    <ul>
    <li>4th JBCN Conference · 2018-06-11 / 2018-06-13 · Barcelona, Spain</li>
    <li>3rd DevTernity · 2018-11-30 / 2018-12-01 · Riga, Latvia</li>
    <li>1st I T.A.K.E Unconference · 2016-05-19 / 2016-05-20 · Bucharest | Maramures, Romania</li>
    <li>2nd Product Owner Rule Book · 2016-04-11 / 2016-04-13 · Paris, France | Madrid, Spain</li>
    <li>Upfront Summit · 2018-02-01 · Los Angeles, California. United States</li>
    <li>IBM Think · 2018-03-19 · Nevada, United States</li>
    </ul>

Write a function on whatever language you prefer that given the first array, it returns the second one.

## How to:

Install the dependencies:

    yarn install

Run the tests:

    yarn test
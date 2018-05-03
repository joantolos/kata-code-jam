# Barcelona Grand Prix Results

The 14th May 2017, the Grand Prix race was celebrated at Barcelona. This is the data of the contented ordered by grid position (the retired are not included):

    {
      "race":[
        {
          "driver":"Lewis Hamilton",
          "grid":"1",
          "final":"1"
        },
        {
          "driver":"Sebastian Vettel",
          "grid":"2",
          "final":"2"
        },
        {
          "driver":"Daniel Ricciardo",
          "grid":"6",
          "final":"3"
        },
        {
          "driver":"Fernando Alonso",
          "grid":"7",
          "final":"12"
        },
        {
          "driver":"Sergio Pérez",
          "grid":"8",
          "final":"4"
        },
        {
          "driver":"Felipe Massa",
          "grid":"9",
          "final":"13"
        },
        {
          "driver":"Esteban Ocon",
          "grid":"10",
          "final":"5"
        },
        {
          "driver":"Kevin Magnussen",
          "grid":"11",
          "final":"14"
        },
        {
          "driver":"Carlos Sainz",
          "grid":"12",
          "final":"7"
        },
        {
          "driver":"Nico Hülkenberg",
          "grid":"13",
          "final":"6"
        },
        {
          "driver":"Romain Grosjean",
          "grid":"14",
          "final":"10"
        },
        {
          "driver":"Pascal Wehrlein",
          "grid":"15",
          "final":"8"
        },
        {
          "driver":"Marcus Ericsson",
          "grid":"16",
          "final":"11"
        },
        {
          "driver":"Jolyon Palmer",
          "grid":"17",
          "final":"15"
        },
        {
          "driver":"Lance Stroll",
          "grid":"18",
          "final":"16"
        },
        {
          "driver":"Daniil Kvyat",
          "grid":"19",
          "final":"9"
        }
      ]
    }
    
Write a function that returns a single string with the name of the winners in final position order, like this:

    Lewis Hamilton, Sebastian Vettel, Daniel Ricciardo, Sergio Pérez, Esteban Ocon, Nico Hülkenberg, Carlos Sainz, Pascal Wehrlein, Daniil Kvyat, Romain Grosjean, Marcus Ericsson, Fernando Alonso, Felipe Massa, Kevin Magnussen, Jolyon Palmer, Lance Stroll    

## Running tests

Install the dependencies:

    yarn install

Run the tests:

    yarn test
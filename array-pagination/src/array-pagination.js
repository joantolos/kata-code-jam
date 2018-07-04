const pageSize = 5;

const changePage = (page) => {
  return theFIFACocaColaWorldRanking.slice(page - 1, pageSize);
};

module.exports = {
  changePage
};

const theFIFACocaColaWorldRanking = [
  {
    team: 'Germany',
    totalPoints: 1558,
    previousPoints: 1544,
    position: 0
  },
  {
    team: 'Brazil',
    totalPoints: 1431,
    previousPoints: 1384,
    position: 0
  },
  {
    team: 'Belgium',
    totalPoints: 1298,
    previousPoints: 1346,
    position: 0
  },
  {
    team: 'Portugal',
    totalPoints: 1274,
    previousPoints: 1306,
    position: 0
  },
  {
    team: 'Argentina',
    totalPoints: 1241,
    previousPoints: 1254,
    position: 0
  },
  {
    team: 'Switzerland',
    totalPoints: 1199,
    previousPoints: 1179,
    position: 0
  },
  {
    team: 'France',
    totalPoints: 1198,
    previousPoints: 1166,
    position: 0
  },
  {
    team: 'Poland',
    totalPoints: 1183,
    previousPoints: 1128,
    position: 2
  },
  {
    team: 'Chile',
    totalPoints: 1135,
    previousPoints: 1146,
    position: 0
  },
  {
    team: 'Spain',
    totalPoints: 1126,
    previousPoints: 1162,
    position: 2
  },
  {
    team: 'Peru',
    totalPoints: 1125,
    previousPoints: 1106,
    position: 0
  },
  {
    team: 'Denmark',
    totalPoints: 1051,
    previousPoints: 1054,
    position: 0
  },
  {
    team: 'England',
    totalPoints: 1051,
    previousPoints: 1040,
    position: 1
  },
  {
    team: 'Uruguay',
    totalPoints: 1018,
    previousPoints: 976,
    position: 3
  },
  {
    team: 'Mexico',
    totalPoints: 989,
    previousPoints: 1008,
    position: 0
  },
  {
    team: 'Colombia',
    totalPoints: 986,
    previousPoints: 989,
    position: 0
  },
  {
    team: 'Netherlands',
    totalPoints: 981,
    previousPoints: 969,
    position: 2
  },
  {
    team: 'Wales',
    totalPoints: 953,
    previousPoints: 931,
    position: 3
  },
  {
    team: 'Italy',
    totalPoints: 951,
    previousPoints: 947,
    position: 1
  },
  {
    team: 'Croatia',
    totalPoints: 945,
    previousPoints: 975,
    position: 2
  },
  {
    team: 'Tunisia',
    totalPoints: 910,
    previousPoints: 1012,
    position: 7
  },
  {
    team: 'Iceland',
    totalPoints: 908,
    previousPoints: 930,
    position: 0
  },
  {
    team: 'Costa Rica',
    totalPoints: 884,
    previousPoints: 858,
    position: 2
  },
  {
    team: 'Sweden',
    totalPoints: 880,
    previousPoints: 889,
    position: 1
  },
  {
    team: 'USA',
    totalPoints: 873,
    previousPoints: 880,
    position: 1
  },
  {
    team: 'Austria',
    totalPoints: 845,
    previousPoints: 841,
    position: 0
  },
  {
    team: 'Senegal',
    totalPoints: 838,
    previousPoints: 825,
    position: 1
  },
  {
    team: 'Slovakia',
    totalPoints: 804,
    previousPoints: 786,
    position: 1
  },
  {
    team: 'Northern Ireland',
    totalPoints: 803,
    previousPoints: 837,
    position: 2
  },
  {
    team: 'Romania',
    totalPoints: 782,
    previousPoints: 737,
    position: 2
  },
  {
    team: 'Republic of Ireland',
    totalPoints: 777,
    previousPoints: 776,
    position: 0
  },
  {
    team: 'Paraguay',
    totalPoints: 773,
    previousPoints: 737,
    position: 0
  },
  {
    team: 'Venezuela',
    totalPoints: 755,
    previousPoints: 709,
    position: 6
  },
  {
    team: 'Serbia',
    totalPoints: 751,
    previousPoints: 732,
    position: 1
  },
  {
    team: 'Ukraine',
    totalPoints: 733,
    previousPoints: 777,
    position: 5
  },
  {
    team: 'Australia',
    totalPoints: 718,
    previousPoints: 700,
    position: 4
  },
  {
    team: 'IR Iran',
    totalPoints: 708,
    previousPoints: 727,
    position: 1
  },
  {
    team: 'Turkey',
    totalPoints: 706,
    previousPoints: 714,
    position: 1
  },
  {
    team: 'Congo DR',
    totalPoints: 706,
    previousPoints: 711,
    position: 0
  },
  {
    team: 'Bosnia and Herzegovina',
    totalPoints: 693,
    previousPoints: 688,
    position: 1
  },
  {
    team: 'Morocco',
    totalPoints: 686,
    previousPoints: 681,
    position: 1
  },
  {
    team: 'Scotland',
    totalPoints: 660,
    previousPoints: 735,
    position: 8
  },
  {
    team: 'Montenegro',
    totalPoints: 652,
    previousPoints: 671,
    position: 0
  },
  {
    team: 'Greece',
    totalPoints: 650,
    previousPoints: 657,
    position: 0
  },
  {
    team: 'Egypt',
    totalPoints: 649,
    previousPoints: 636,
    position: 1
  },
  {
    team: 'Czech Republic',
    totalPoints: 641,
    previousPoints: 647,
    position: 1
  },
  {
    team: 'Ghana',
    totalPoints: 624,
    previousPoints: 603,
    position: 3
  },
  {
    team: 'Nigeria',
    totalPoints: 618,
    previousPoints: 635,
    position: 1
  },
  {
    team: 'Bulgaria',
    totalPoints: 614,
    previousPoints: 583,
    position: 4
  },
  {
    team: 'Cameroon',
    totalPoints: 614,
    previousPoints: 603,
    position: 1
  }
];
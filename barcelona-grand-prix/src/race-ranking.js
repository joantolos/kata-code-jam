const rank = (race) => {
  race.sort(compare);
  return race.map(function(contender) {
    return contender.driver;
  }).join(', ');
};

function compare(contender, nextContender) {
  if (parseInt(contender.final, 10) < parseInt(nextContender.final, 10)) {
    return -1;
  }
  if (parseInt(contender.final, 10) > parseInt(nextContender.final, 10)) {
    return 1;
  }
  return 0;
}

exports.rank = rank;

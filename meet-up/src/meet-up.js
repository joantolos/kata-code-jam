function parse(input) {
  return input.input.map(meetUp => (
      (meetUp.edition || '') + ' ' + meetUp.name + ' · ' +
      meetUp.startDate + (meetUp.endDate ? ' / ' + meetUp.endDate : '') + ' · ' +
      meetUp.location.map(location =>
        (meetUp.location.length > 1 ? ' | ' : ', ') + (location.city ? location.city + ', ' : '') + (location.state ? location.state + (location.city ? '. ' : ', ') : '') + location.country
      )
    )
    .replace(/ , /g, ' ')
    .replace(/ {2}\| /g, ' ')
    .replace(/, \| /g, ' | ')
    .trim()
  );
}

module.exports = { parse };

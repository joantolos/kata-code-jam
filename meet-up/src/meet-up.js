function parse(input) {
  return input.input.map(meetUp => (
      (meetUp.edition || '') + ' ' + meetUp.name + ' · ' +
      meetUp.startDate + (meetUp.endDate ? ' / ' + meetUp.endDate : '') + ' · ' +
      meetUp.location.map(location => {
        const parsedLocation = (meetUp.location.length > 1 ? ' | ' : ', ') + (location.city ? location.city + ', ' : '') + (location.state ? location.state + (location.city ? '. ' : ', ') : '') + location.country;
        return meetUp.location.filter(loc => loc !== location).find(loc => loc.country === parsedLocation.split(', ')[1]) ?
          (parsedLocation.split(', ')[0].replace(/ \| /g, '') === meetUp.location[meetUp.location.length - 1].city) ? parsedLocation : parsedLocation.split(', ')[0] :
          parsedLocation;
      })
    )
    .replace(/ , /g, ' ')
    .replace(/ {2}\| /g, ' ')
    .replace(/, \| /g, ' | ')
    .trim()
  );
}

module.exports = { parse };

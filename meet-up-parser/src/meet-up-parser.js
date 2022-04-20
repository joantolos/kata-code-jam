const createMeetUps = (input) => {
  return { meetUps: input.input.map(parseMeetUp) };
};

const parseMeetUp = (rawMeetUp) => {
  return parseEdition(rawMeetUp) +
    rawMeetUp.name +
    parseDates(rawMeetUp) +
    parseMeetUpLocation(rawMeetUp.location.map((location) => {
      return parseCityState(location) + location.country;
    }));
};

function parseEdition(rawMeetUp) {
  return rawMeetUp.edition ? rawMeetUp.edition + ' ' : '';
}

function parseDates(rawMeetUp) {
  return ' · ' +
    (rawMeetUp.startDate ? rawMeetUp.startDate : '') +
    (rawMeetUp.endDate ? ' / ' + rawMeetUp.endDate : '');
}

function parseMeetUpLocation(location) {
  if (location.length > 1) {
    if (location[0].split(', ')[1] === location[1].split(', ')[1]) {
      return (location[0] + location[1].replace(' · ', ' | ')).replace(', ' + location[0].split(', ')[1], '');
    } else {
      return location[0] + location[1].replace(' · ', ' | ');
    }
  } else {
    return location;
  }
}

function parseCityState(location) {
  return ' · ' +
    (location.city ? location.city + cityStateSeparator(location, 'city') : '') +
    (location.state ? location.state + cityStateSeparator(location, 'state') : '');
}

function cityStateSeparator(location, type) {
  if(location.city && location.state && type === 'city') return ', ';
  else if(location.city && location.state && type === 'state') return '. ';
  else if(!location.city && location.state && type === 'city') return '';
  else if(!location.city && location.state && type === 'state') return ', ';
  else return ', ';
}

exports.build = createMeetUps;

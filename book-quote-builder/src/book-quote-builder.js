const createQuotes = (input) => {
  return { quotes: input.input.map(parseQuote) };
};

const parseQuote = (rawQuote) => {
  return rawQuote.description + ' - ' +
    rawQuote.author + ', ' +
    rawQuote.book + ' ' +
    parseQuoteLocation(rawQuote.vol, rawQuote.issue, rawQuote.page);
};

const parseQuoteLocation = (vol, issue, page) => {
  return [
    vol ? 'VOLUME: ' + vol : null,
    issue ? 'ISSUE: ' + issue : null,
    page ? 'PAGE: ' + page : null
  ].filter(Boolean).join(' | ');
};

exports.build = createQuotes;
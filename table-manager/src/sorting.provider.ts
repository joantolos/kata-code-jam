export class Sorting {

  constructor() {
  }

  sort(records, order) {
    const orders = order.split(',');
    const ordersKey = orders.map(key => key.split(':')[0]);
    const ordersDirection = orders.map(key => key.split(':')[1]);
    let extraOrderKey;

    ordersKey.forEach(key => {
      if (key.includes('.')) {
        extraOrderKey = key.replace('.', '');
        ordersKey.push(extraOrderKey);
        ordersDirection.push(ordersDirection[ordersKey.findIndex((orderKey) => orderKey === key)]);
        records.forEach(record => record[extraOrderKey] = record[key.split('.')[0]].map(parents => parents[key.split('.')[1]]).join().replace(/,/g, ''));
      }
    });
    const sortedRecords = records.sort((record, nextRecord) => this.compare(record, nextRecord, ordersKey, ordersDirection));
    if (extraOrderKey) {
      sortedRecords.forEach(record => delete record[extraOrderKey]);
    }
    return sortedRecords;
  }

  private compare(record, nextRecord, ordersKey, ordersDirection, index: number = 0) {
    const currentKey = ordersKey[index];
    const currentDirection = ordersDirection[index];

    if (currentKey) {
      let minorCriteria;
      let majorCriteria;

      if (currentDirection === 'asc') {
        minorCriteria = -1;
        majorCriteria = 1;
      } else {
        minorCriteria = 1;
        majorCriteria = -1;
      }

      if (String(record[currentKey]).toLowerCase() < String(nextRecord[currentKey]).toLowerCase()) {
        return minorCriteria;
      } else if (String(record[currentKey]).toLowerCase() > String(nextRecord[currentKey]).toLowerCase()) {
        return majorCriteria;
      } else if (String(record[currentKey]).toLowerCase() === String(nextRecord[currentKey]).toLowerCase()) {
        return this.compare(record, nextRecord, ordersKey, ordersDirection, index + 1);
      }
    }
    return 0;
  }
}

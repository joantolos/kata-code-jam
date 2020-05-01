export class Sorter {

  applyOrder(records, orders) {
    const ordersKey = orders.split(',').map(key => key.split(':')[0]);
    const ordersDirection = orders.split(',').map(key => key.split(':')[1]);
    return records.sort((record, nextRecord) => this.compare(record, nextRecord, ordersKey, ordersDirection));
  }

  private compare(record, nextRecord, ordersKey, ordersDirection, index: number = 0) {
    const currentKey = ordersKey[index];
    const currentDirection = ordersDirection[index];
    let minorCriteria;
    let majorCriteria;

    if (currentDirection === 'asc') {
      minorCriteria = -1;
      majorCriteria = 1;
    } else {
      minorCriteria = 1;
      majorCriteria = -1;
    }

    if (record[currentKey] < nextRecord[currentKey]) {
      return minorCriteria;
    } else if (record[currentKey] > nextRecord[currentKey]) {
      return majorCriteria;
    } else {
      return this.compare(record, nextRecord, ordersKey, ordersDirection, index + 1);
    }
  }
}
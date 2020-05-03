export class Sorting {

  private readonly defaultOrder: [];

  constructor(defaultOrder?) {
    this.defaultOrder = defaultOrder ? defaultOrder : ['name:asc', 'quantity:desc', 'color:asc'];
  }

  sort(records, order) {
    const orders = order ? order.split(',') : this.defaultOrder;
    const ordersKey = orders.map(key => key.split(':')[0]);
    const ordersDirection = orders.map(key => key.split(':')[1]);
    return records.sort((record, nextRecord) => this.compare(record, nextRecord, ordersKey, ordersDirection));
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
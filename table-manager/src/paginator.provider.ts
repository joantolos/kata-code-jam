export class Paginator {

  constructor() {
  }

  paginate(records, hits, offset) {
    if (this.isPaginationAllowed(hits, offset)) {
      return records.slice(offset, hits + offset);
    }
    return records;
  }

  private isPaginationAllowed(hits, offset) {
    return hits > 0 && offset >= 0;
  }
}
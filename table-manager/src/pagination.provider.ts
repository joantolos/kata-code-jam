export class Pagination {

  constructor() {
  }

  paginate(records, hits, offset) {
    if (this.isPaginationAllowed(hits, offset)) {
      return records.slice(offset, ((hits * 1) + (offset * 1)));
    }
    return records;
  }

  private isPaginationAllowed(hits, offset) {
    return hits > 0 && offset >= 0;
  }
}
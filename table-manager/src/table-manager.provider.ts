import {Sorting} from './sorting.provider';
import {Pagination} from './pagination.provider';

export class TableManager {

  private sorting: Sorting;
  private pagination: Pagination;

  constructor() {
    this.sorting = new Sorting();
    this.pagination = new Pagination();
  }

  arrange(records: any[], hits: number, offset: number, sortBy: string) {
    return this.pagination.paginate(this.sorting.sort(records, sortBy), hits, offset);
  }

}
import {Sorter} from './sorter.provider';
import {Paginator} from './paginator.provider';

export class TableManager {

  private sorter: Sorter;
  private paginator: Paginator;

  constructor() {
    this.sorter = new Sorter();
    this.paginator = new Paginator();
  }

  arrange(records: any[], hits: number, offset: number, sortBy: string) {
    return this.paginator.paginate(this.sorter.applyOrder(records, sortBy), hits, offset);
  }

}
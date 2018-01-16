
import { Component, OnInit } from '@angular/core';
import { TablesService } from '../../../../shared/services/tables.service';

@Component({
  selector: 'app-smart-tables',
  templateUrl: './smart-tables.component.html',
  styleUrls: ['./smart-tables.component.scss'],
  providers: [TablesService]

})
export class SmartTablesComponent implements OnInit {
  pageInfo = {
    pageSize: 1,
    pageNumber: 1,
    total: 1
  };

  table_data: Array<any>;

  constructor(private _tablesService: TablesService) { }

  ngOnInit() {
    this.table_data = this._tablesService.DEFAULT_DATA;
  }

  loadData() { }

  pageChanged(pN: number): void {
    this.pageInfo.pageNumber = pN;
  }
}

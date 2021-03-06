import { Component, OnInit } from '@angular/core';
import {GridDataResult, PageChangeEvent} from '@progress/kendo-angular-grid';
import {TodoserviceService} from '../todoservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;
  private data: Object[];

  private items: any = [] ;

  constructor(private _dataService: TodoserviceService) {

  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  private loadItems(): void {
    this.gridView = {
      data: this.items.slice(this.skip, this.skip + this.pageSize),
      total: this.items.length
    };
  }

  ngOnInit(): void {
    this._dataService.getAll().subscribe((applicationsData) => {
      this.items = applicationsData['todos'];
      this.loadItems();
    });
  }

}

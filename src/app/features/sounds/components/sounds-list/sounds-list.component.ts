import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';

import { TSoundElement } from '@core';
import { SoundsService } from '@features/sounds/services';

enum TableColumns {
  id = 'id',
  description = 'description',
  name = 'name'
};

@Component({
  selector: 'app-sounds-page',
  templateUrl: './sounds-list.component.html',
  styleUrls: ['./sounds-list.component.less']
})
export class SoundsListComponent implements OnInit {

  protected tableColumnsEnum = TableColumns;
  protected displayedColumns: string[] = [
    TableColumns.id,
    TableColumns.description,
    TableColumns.name
  ];
  protected dataSource: TSoundElement[] = [];
  protected selectedRow: TSoundElement | null = null;
  protected isLoading: boolean = true;
  protected error: string | null = null;

  constructor (private _soundsService: SoundsService) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  protected onClickRow(row: TSoundElement) {
    this.selectedRow = this.selectedRow?.id === row.id ? null : row;
  }

  protected loadData(): void {
    this.isLoading = true;
    this.error = null;

    this._soundsService.getSoundsList().pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: (data) => this.dataSource = data,
      error: (error) => {
        this.error = error.message;
      }
    });
  }
}

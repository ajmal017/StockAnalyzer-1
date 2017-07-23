import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter, Input, Output } from '@angular/core';

import { IndexType } from '../indextype';

@Component({
  selector: 'app-indexdetail',
  templateUrl: './indexdetail.component.html',
  styleUrls: ['./indexdetail.component.css']
})
export class IndexdetailComponent implements OnInit, OnChanges {
  @Input('display') display: boolean = false;
  @Input('index') index: IndexType;
  @Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>();
  private title: string;
	private totalMarketCap: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.index && changes.index.currentValue) {
      this.title = changes.index.currentValue.name;
			this.setTotalMarketCap();
    }
  }
	
	setTotalMarketCap() {
		for(let stock of this.index.realStocks) {
			if (stock.levermann && stock.levermann.marketCapitalization)
			  this.totalMarketCap += stock.levermann.marketCapitalization;
		}
	}

  getIndexName() {
    if (this.index)
      return this.index.name;
    else
      return '';
  }

  closeDisplay() {
    this.display = false;
    this.close.emit(false);
  }

}

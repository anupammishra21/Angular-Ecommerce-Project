import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  enterSearchValue:string=""

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  searchTextChanged:EventEmitter<string>=new EventEmitter<string>()

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enterSearchValue)
  }

}

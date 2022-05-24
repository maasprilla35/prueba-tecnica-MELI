import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-result-list',
  templateUrl: './item-result-list.component.html',
  styleUrls: ['./item-result-list.component.scss']
})
export class ItemResultListComponent implements OnInit {

  @Input() thumbnail!: String;
  @Input() title!: String;
  @Input() price!: any;
  @Input() state_name!: any;


  constructor() { }

  ngOnInit(): void {
  }

}

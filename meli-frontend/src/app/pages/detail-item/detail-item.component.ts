import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {

  description!: String;
  secure_thumbnail!: String;
  title!: String;
  price!: any;
  condition!: String;
  sold_quantity!: String;
  query!: String;

  constructor(
    private _generalService: GeneralService,
    private route: ActivatedRoute
  ) {

    let id = this.route.snapshot.paramMap.get('id');

    this._generalService.getDetail(id)
      .subscribe((data: any) => {
        if (data.code == 0) {
          this.description = data.data.item.description;
          this.secure_thumbnail = data.data.item.picture;
          this.title = data.data.item.title;
          this.price = data.data.item.price.amount;
          this.condition = data.data.item.condition;
          this.sold_quantity = data.data.item.sold_quantity;
        }
      }, err => {
        console.log(err);
      })
  }

  ngOnInit(): void {
  }

}

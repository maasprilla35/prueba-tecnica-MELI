import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: any = [];
  search!: String;

  constructor(
    private route: ActivatedRoute,
    private _generalService: GeneralService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let search = params['search'];
      this.search = search;
      this._generalService.search(search)
        .subscribe((data: any) => {
          if (data.code == 0) {
            this.items = data.data.items;
          }
        }, err => {
          console.log(err);
        })
    });
  }

  goDetail(id: String) {
    this.router.navigate(['/items/' + id]);
  }

}

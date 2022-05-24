import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  searchBar: FormControl = new FormControl();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let search = params['search'];
      if (search != '' && search != null) {
        this.searchBar.setValue(search);
      }
    });
  }

  search() {
    if (this.searchBar.value != '' && this.searchBar.value != null) {
      this.searchBar.setValue(this.searchBar.value);
      this.router.navigate(['/items'], { queryParams: { search: this.searchBar.value } })
    } else {
      this.goHome();
    }

  }

  goHome() {
    this.router.navigate(['/']);
  }

}

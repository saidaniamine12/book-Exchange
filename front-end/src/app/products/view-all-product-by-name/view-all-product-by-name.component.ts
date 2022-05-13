import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-product-by-name',
  templateUrl: './view-all-product-by-name.component.html',
  styleUrls: ['./view-all-product-by-name.component.css']
})
export class ViewAllProductByNameComponent implements OnInit {
  searchCategory = '';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data:any) => {
      this.searchCategory = data.name;
    });
  }

}

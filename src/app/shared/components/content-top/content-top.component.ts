import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.scss'],
  providers: [GlobalService]
})

export class ContentTopComponent implements OnInit {

  breadcrumbItem = ['form', 'inputs', 'btn'];

  constructor(public _globalService: GlobalService) {
  }

  ngOnInit() {
  }


}

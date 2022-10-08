import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeadersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headers = [{"name":"HOME", "link":"home"},
          {"name":"ABOUT", "link":"about"},
          {"name":"ELEVATORS", "link":"elevators"},
          {"name":"MODERNISATION", "link":"modernisation"},
          {"name":"SERVICES", "link":"services"},
          {"name":"CONTACT US", "link":"contactus"}];
  

}

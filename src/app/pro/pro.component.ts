import { Component } from '@angular/core';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent {

  data="Code with Gulab";
  disable=false;

  get(box:any){
    console.log(typeof box);
  }

}

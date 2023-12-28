import { Component,Input} from '@angular/core';

import { Invioce } from '../invoice.model';

@Component({
  selector: 'app-a4-page',
  templateUrl: './a4-page.component.html',
  styleUrls: ['./a4-page.component.css']
})
export class A4PageComponent {
  @Input() invoiceList?: Invioce[]| any;
  
}

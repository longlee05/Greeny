import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./premium.component.scss']
})
export class PremiumComponent implements OnInit {
  selected = 'option1';
  constructor() {
   }


  ngOnInit(): void {
  }
}

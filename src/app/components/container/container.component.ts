import { Component, OnInit, OnChanges, Output, HostBinding } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @Output() theme: string;
  @HostBinding('class') newTheme = this.theme;
  constructor() { }

  ngOnInit() {
  }

  onChange(theme: string){
    this.theme = theme;
  }

}

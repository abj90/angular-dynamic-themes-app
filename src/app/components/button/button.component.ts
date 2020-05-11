import { Component, OnInit, Input, OnChanges, HostBinding } from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges {
  @Input () theme;
  @HostBinding('class') themeValue = this.theme;

  constructor() { }

  ngOnChanges(){
    this.themeValue = this.theme
  }

}

import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  theme: string;
  buttonTheme: string;

  constructor( private themeService: ThemeService) { }

  ngOnInit( ) {
  }

  onChangeTheme(theme: string){
    this.theme = theme;
    if(this.theme === 'light'){
      this.themeService.setLightTheme();
    }else{
      this.themeService.setDarkTheme()
    }
  }

  onChangeButtonTheme(theme: string){
    this.buttonTheme = theme;
  }

}

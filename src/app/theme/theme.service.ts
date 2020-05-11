import { Injectable } from '@angular/core';
import { Theme, light, dark  } from './theme';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private active: Theme = light;
  private availableThemes: Theme[] = [light, dark];

  constructor() { }

  getAvailableTheme() : Theme[]{
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active
  }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setDarkTheme(){
    this.setActiveTheme(dark);
  }

  setLightTheme(){
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: Theme){
    this.active = theme;

    Object.keys(this.active.properties).forEach(property =>{
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });

  }
}

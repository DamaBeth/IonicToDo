import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mi día', url: '/folder/Mi día', icon: 'sunny' },
    { title: 'Importante', url: '/folder/Importante', icon: 'star' },
    { title: 'Planeado', url: '/folder/Planeado', icon: 'calendar' },
    { title: 'Tareas', url: '/folder/Tareas', icon: 'home' }
  ];
  public appPagesDivider = [
    { title: 'Clases virtuales', url: '/folder/Clases Virtuales', icon: 'menu' },
    { title: 'Eliminados', url: '/folder/Eliminados', icon: 'trash' }
  ];
  constructor() {}
}

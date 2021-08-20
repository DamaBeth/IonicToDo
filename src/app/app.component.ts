import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mi día', url: '/card/Mi día', icon: 'sunny' },
    { title: 'Importante', url: '/card/Importante', icon: 'star' },
    { title: 'Planeado', url: '/card/Planeado', icon: 'calendar' },
    { title: 'Tareas', url: '/card/Tareas', icon: 'home' }
  ];
  public appPagesDivider = [
    { title: 'Clases virtuales', url: '/card/Clases Virtuales', icon: 'menu' },
    { title: 'Eliminados', url: '/card/Eliminados', icon: 'trash' }
  ];
  constructor() {}
}

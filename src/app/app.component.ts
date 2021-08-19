import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mi día', url: '/folder/Mi día', icon: 'mail' },
    { title: 'Importante', url: '/folder/Importante', icon: 'paper-plane' },
    { title: 'Planeado', url: '/folder/Planeado', icon: 'heart' },
    { title: 'Tareas', url: '/folder/Tareas', icon: 'archive' },
    { title: 'Clases virtuales', url: '/folder/Clases Virtuales', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

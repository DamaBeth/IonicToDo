import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public folderPages = [
    { title: 'Mi día', url: '/folder/Mi día', icon: 'sunny' },
    { title: 'Importante', url: '/folder/Importante', icon: 'star' },
    { title: 'Planeado', url: '/folder/Planeado', icon: 'calendar' },
    { title: 'Tareas', url: '/folder/Tareas', icon: 'home' }
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

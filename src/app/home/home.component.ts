import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';

@Component({
  moduleId: 'module.id',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  public gallery: any;

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.getImageList();
  }

  public getImageList() {
    this.galleryService.getImageList()
      .subscribe(results => {
        this.gallery = results;
      });
  }
}



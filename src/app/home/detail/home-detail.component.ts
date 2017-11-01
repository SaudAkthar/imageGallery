import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from './../../services/gallery.service';

@Component({
  templateUrl: 'home-detail.component.html'
})

export class HomeDetailComponent implements OnInit {
  public gallery: any;
  public image: any;
  public id: number;

  constructor(private galleryService: GalleryService, private routes: ActivatedRoute) {
    this.id = this.routes.snapshot.params['id'];
   }

  ngOnInit() {
    this.galleryService.getImageList()
    .subscribe(results => {
      this.image =  results.find(x => x['id'] === Number(this.id));
    });
  }
}

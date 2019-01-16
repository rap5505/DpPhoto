import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges {


  // tslint:disable-next-line:no-inferrable-types
  @Input() fliterBy?: string = 'all';
  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
   }

  ngOnInit() {
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

}

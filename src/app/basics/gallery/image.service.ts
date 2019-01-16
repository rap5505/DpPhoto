import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages = [];

  getImages() {
    return (this.visibleImages = Images.slice(0));
  }

  getImage(id: number) {
    return Images.slice(0).find(image => image.id === id);
  }
}


const Images = [
  {
    id: 1,
    category: 'building',
    caption: 'Amazing building',
    url: '../../../assets/img/building1.png'
  },
  {
    id: 1,
    category: 'building',
    caption: 'Amazing building',
    url: '../../../assets/img/building2.png'
  },
  {
    id: 1,
    category: 'building',
    caption: 'Amazing building',
    url: '../../../assets/img/building3.png'
  },
  {
    id: 1,
    category: 'light',
    caption: 'Amazing light',
    url: '../../../assets/img/light1.png'
  },
  {
    id: 1,
    category: 'light',
    caption: 'Amazing light',
    url: '../../../assets/img/light2.png'
  },
  {
    id: 2,
    category: 'light',
    caption: 'Amazing light',
    url: '../../../assets/img/light3.png'
  },
  {
    id: 3,
    category: 'people',
    caption: 'Amazing poitrait',
    url: '../../../assets/img/people.png'
  },
  {
    id: 4,
    category: 'people',
    caption: 'Amazing poitrait',
    url: '../../../assets/img/people1.png'
  },
  {
    id: 5,
    category: 'people',
    caption: 'Amazing poitrait',
    url: '../../../assets/img/people2.png'
  },
  {
    id: 6,
    category: 'people',
    caption: 'Amazing poitrait',
    url: '../../../assets/img/people3.png'
  },
  {
    id: 7,
    category: 'people',
    caption: 'Amazing poitrait',
    url: '../../../assets/img/people4.png'
  },
  {
    id: 8,
    category: 'people',
    caption: 'Amazing poitrait',
    url: '../../../assets/img/people5.png'
  },
  {
    id: 9,
    category: 'people',
    caption: 'Amazing poitrait',
    url: '../../../assets/img/people6.png'
  },
  {
    id: 10,
    category: 'people',
    caption: 'Amazing poitrait',
    url: '../../../assets/img/people7.png'
  },
  {
    id: 11,
    category: 'people',
    caption: 'Amazing poitrait',
    url: '../../../assets/img/people8.png'
  },
  {
    id: 12,
    category: 'water',
    caption: 'Amazing water',
    url: '../../../assets/img/water1.png'
  },
  {
    id: 13,
    category: 'water',
    caption: 'Amazing water',
    url: '../../../assets/img/water2.png'
  },
  {
    id: 14,
    category: 'water',
    caption: 'Amazing water',
    url: '../../../assets/img/water3.png'
  }
];

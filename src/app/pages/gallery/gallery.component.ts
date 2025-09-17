import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  pics = [
    {
      img: 'assets/gallery/pic1.jpg',
    },
    {
      img: 'assets/gallery/pic2.jpg',
    },
    {
      img: 'assets/gallery/pic3.jpg',
    },
    {
      img: 'assets/gallery/pic4.jpg',
    },
    {
      img: 'assets/gallery/pic5.jpg',
    },
    {
      img: 'assets/gallery/pic6.jpg',
    },
    {
      img: 'assets/gallery/pic7.jpg',
    },
    {
      img: 'assets/gallery/pic8.jpg',
    },
    {
      img: 'assets/gallery/pic9.jpg',
    },
    {
      img: 'assets/gallery/pic10.jpg',
    },
    {
      img: 'assets/gallery/pic11.jpg',
    },
    {
      img: 'assets/gallery/pic12.jpg',
    },
    {
      img: 'assets/gallery/pic13.jpg',
    },
    {
      img: 'assets/gallery/pic14.jpg',
    },
    {
      img: 'assets/gallery/pic15.jpg',
    },
    {
      img: 'assets/gallery/pic16.jpg',
    },
    {
      img: 'assets/home/v1.jpg',
    },
    {
      img: 'assets/home/v2.jpg',
    },
  ];
}

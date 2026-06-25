import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Accordion } from './accordion/accordion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Accordion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('25thJune');

  name: string = 'John Doe';
  count: number = 0;

  //Carousel data
  carouselItems = [
    { image: 'https://wallpapercave.com/wp/wp13277813.jpg', caption: 'Slide 1' },
    { image: 'https://wallpapercave.com/wp/wp14575106.jpg', caption: 'Slide 2' },
    { image: 'https://wallpapercave.com/wp/wp11904281.png', caption: 'Slide 3' },
    { image: 'https://wallpapercave.com/wp/wp13277818.jpg', caption: 'Slide 4' },
    { image: 'https://wallpapercave.com/wp/wp10777124.jpg', caption: 'Slide 5' }
  ];

  currentSlideIndex: number = 0;
  
  incrementSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.carouselItems.length;
  }

  decrementSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  // incrementValue():void {
  //   this.count++;
  // }

  // decrementValue():void {
  //   this.count--;
  //   if(this.count < 0) {
  //     this.count = 0;
  //   }
  // }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('nav') nav!: ElementRef;
  @ViewChild('swapOff') swapOff!: ElementRef;
  @ViewChild('swapOn') swapOn!: ElementRef;

  isMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateIconState();
  }

  private updateIconState(): void {
    if (this.swapOff && this.swapOn) {
      this.swapOff.nativeElement.classList.toggle('hidden', this.isMenuOpen);
      this.swapOn.nativeElement.classList.toggle('hidden', !this.isMenuOpen);
      this.swapOff.nativeElement.classList.toggle('show', !this.isMenuOpen);
    }
  }
}

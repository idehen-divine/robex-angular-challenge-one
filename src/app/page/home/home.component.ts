import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavComponent } from '../../components/homepage/nav/nav.component';
import { HeroComponent } from '../../components/homepage/hero/hero.component';
import { ServiceComponent } from '../../components/homepage/service/service.component';
import { DesignComponent } from '../../components/homepage/design/design.component';
import { GalleryComponent } from '../../components/homepage/gallery/gallery.component';
import { FooterComponent } from '../../components/homepage/footer/footer.component';
import { TestimonialComponent } from '../../components/homepage/testimonial/testimonial.component';

@Component({
  selector: 'app-home',
  imports: [NavComponent, HeroComponent, ServiceComponent, DesignComponent, TestimonialComponent, GalleryComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}

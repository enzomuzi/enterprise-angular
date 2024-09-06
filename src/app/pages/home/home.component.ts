import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import {} from '@angular/common/http';
import { CarouselComponent } from '../../components/carousel/carousel.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, CommonModule, RouterModule, AppComponent, NzCarouselModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

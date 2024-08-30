import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, CommonModule, RouterModule, HttpClientModule, AppComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { CommonModule } from '@angular/common';
import {} from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}

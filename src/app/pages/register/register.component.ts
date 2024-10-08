import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormRegisterComponent } from '../../components/form-register/form-register.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormRegisterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}

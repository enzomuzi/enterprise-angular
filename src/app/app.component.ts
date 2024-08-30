import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderMenuComponent } from "./components/header-menu/header-menu.component";
import { FeedbackComponent } from "./components/feedback/feedback.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderMenuComponent, FeedbackComponent, FooterComponent, HomeComponent, SignupComponent, AboutusComponent]
})
export class AppComponent {
  title = 'ProjetoPessoal';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderMenuComponent } from "./components/header-menu/header-menu.component";
import { ContentPageComponent } from "./components/content-page/content-page.component";
import { FeedbackComponent } from "./components/feedback/feedback.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderMenuComponent, ContentPageComponent, FeedbackComponent, FooterComponent]
})
export class AppComponent {
  title = 'ProjetoPessoal';
}

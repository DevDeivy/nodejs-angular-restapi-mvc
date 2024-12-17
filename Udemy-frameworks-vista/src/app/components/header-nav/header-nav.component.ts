import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SliderComponent } from "../utilies/slider/slider.component";
import { SidebarComponent } from "../utilies/sidebar/sidebar.component";

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SliderComponent, SidebarComponent],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent {

}

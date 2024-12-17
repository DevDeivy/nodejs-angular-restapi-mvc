import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public valueInput?: string;


  constructor(private router: Router, private route: ActivatedRoute) {}

  goSearch(){
    this.router.navigate(['/search/' + this.valueInput]); 
  }
}

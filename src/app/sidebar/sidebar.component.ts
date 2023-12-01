import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    constructor(
    private router: Router,
  ) {
  }

  @Input() moduleName: string = "";

  signOut(): void {
    sessionStorage.clear();

    console.log('Session data berhasil dihapus');

    this.router.navigate(['/login']);
  };

}

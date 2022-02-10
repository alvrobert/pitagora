import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pitagora';
  message: any = {};
  logedin = false;
  loading = true;

  constructor(private swUpdate: SwUpdate,
              private cookieService: CookieService) {
    this.loading = false;
  }

  getLoginCookie(): boolean {
    return this.cookieService.check('user');
  }
  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((v) => {
        if (confirm('Actualización disponible, deseas obtenerla?')) {
          window.location.reload();
        }
      });
    }
  }
}

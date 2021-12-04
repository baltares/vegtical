import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddGardenComponent } from '@modules/home/components/add-garden/add-garden.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showLogin: boolean = true;

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  loginWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }
  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
  hideLogin(): void {
    this.showLogin = false;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddGardenComponent);
  }

  getToday(): string {
    let todayDate = new Date();
    const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre',];
    return ('Hoy, ' + todayDate.getDate() + ' de ' + months[todayDate.getMonth()]);
  }
}

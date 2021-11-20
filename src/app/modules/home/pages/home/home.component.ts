import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddGardenComponent } from '@modules/home/components/add-garden/add-garden.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showLogin: boolean = true;
  userName: string;
  userLogged: boolean;

  constructor(public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
    public dialog: MatDialog) { }

  ngOnInit(): void {}

  loginWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }
  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

  openDialog(): void {
    this.setDialogData();
    const dialogRef = this.dialog.open(AddGardenComponent, {
      data: {userName: this.userName, userLogged: this.userLogged}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
  hideLogin(): void {
    this.showLogin = false;
  }
  setDialogData(): void {
    this.auth.user$.subscribe( result => {
      this.userName = result.name;
    })
    this.auth.isAuthenticated$.subscribe( result => {
      this.userLogged = result.valueOf();
    });
  }

}

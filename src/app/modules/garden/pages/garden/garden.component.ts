import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { GardenData2Model } from '@core/models/garden-data2.model';
import { FirestoreService } from '@core/services/firestore.service';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '@modules/garden/components/dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.scss'],
})
export class GardenComponent implements OnInit {
  pageTitle: string;
  garden2: GardenData2Model;
  userGardens2: GardenData2Model[];
  userName: string;

  constructor(
    private route: ActivatedRoute,
    private routeBack: Router,
    private firestore: FirestoreService,
    private auth: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.pageTitle = params['name'];
    });
    if (this.auth.user$)
      this.auth.user$.subscribe((profile) => {
        if (profile != null) this.userName = profile.sub;
        this.loadUserGardens();
      });
    this.navBarShadow();
  }

  navBarShadow() {
    document
      .getElementById('header-toolbar')
      .setAttribute('style', 'box-shadow:none');
  }

  loadUserGardens(): void {
    this.firestore
      .getAllUserGardens(this.userName)
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.userGardens2 = data;
        this.garden2 = this.userGardens2.find(
          (garden) => garden.name === this.pageTitle
        );
      });
  }

  exitGarden() {
    this.routeBack.navigateByUrl('/home');
  }

  deleteGarden() {
    const dialogRef = this.dialog.open(DialogDeleteComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.firestore
          .delete(this.garden2.name)
          .then(() => {
            alert('Huerto borrado con éxito');
          })
          .catch((err) => {
            console.log(err);
            alert('Ha habido un error y no se ha podido borrar el huerto');
          });
        this.routeBack.navigateByUrl('/home');
      } else return;
    });
  }

  saveGarden() {
    console.log(this.garden2);
    this.firestore
      .update(this.garden2.name, { plantList: this.garden2.plantList })
      .then(() => {
        alert('Huerto guardado con éxito');
      })
      .catch((err) => {
        console.log(err);
        alert('Ha habido un error y no se ha podido guardar el huerto');
      });
  }
}

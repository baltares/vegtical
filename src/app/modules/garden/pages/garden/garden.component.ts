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
  tooltipSun: string;
  tooltipWater: string;

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
    this.setTooltips();
  }

  navBarShadow() {
    document
      .getElementById('header-toolbar')
      .setAttribute('style', 'box-shadow:none');
  }
  setTooltips() {
    this.tooltipSun =
    'Intenta colocar las plantas que necesitan más sol en la parte superior del huerto y las plantas que toleran sombra en la parte inferior';
    this.tooltipWater =
    'Intenta colocar las plantas que necesitan más riego en la parte inferior del huerto y las plantas que necesitan menos en la parte superior';
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public item = {};

  constructor(
    private route: ActivatedRoute,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( parametros => {
      this.firestoreService.getProject(parametros.id).subscribe( snapshot => {
        this.item = snapshot.payload.data();
      } );
    } );
  }

  public setImage(image) {
    return `url("${image}")`;
  }

}

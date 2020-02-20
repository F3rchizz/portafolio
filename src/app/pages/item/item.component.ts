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

  public item = null;

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

  public setImage(item) {
    let img: string = item.banner ? item.banner : item.image;
    return `url("${img}")`;
  }

}

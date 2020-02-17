import { Component, OnInit } from '@angular/core';

// Services
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {

  public projects = [];

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.firestoreService.getProjects().subscribe((snapshot) => {
      this.projects = [];
      snapshot.forEach((pjData: any) => {
        console.log(pjData);
        this.projects.push({
          id: pjData.payload.doc.id,
          ...pjData.payload.doc.data()
        });
        console.log(this.projects);
      });
    })
  }

  public setImage(image) {
    return `url("${image}")`;
  }

}

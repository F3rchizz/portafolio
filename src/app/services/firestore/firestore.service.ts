import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

	constructor(
		private firestore: AngularFirestore
	) { }

	public getProject(documentId: string) {
		return this.firestore.collection('projects').doc(documentId).snapshotChanges();
	}

	//Obtiene todos los gatos
	public getProjects() {
		return this.firestore.collection('projects').snapshotChanges();
	}

}

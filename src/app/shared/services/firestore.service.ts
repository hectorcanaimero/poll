import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Centro, Psuv } from './../interfaces/centro.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( private fs: AngularFirestore ) { }

  update      = (collection: any, documentId: string, data: any) => this.fs.collection(collection).doc(documentId).set(data);
  delete      = (collection: any, documentId: string) => this.fs.collection(collection).doc(documentId).delete();
  select      = (collection: any) => this.fs.collection(collection).snapshotChanges();
  selectId    = (collection: any, documentId: string) => this.fs.collection(collection).doc(documentId).snapshotChanges();
  selectWhere = (collection: any, field: any) => this.fs.collection(collection, field).snapshotChanges();
  selectCentro = (id: string) => this.fs.collection('centro').doc(id).collection('psuv').get();
  insertCentro = (centro: any, psuv: any) => {
    this.fs.collection('centro').add(centro).then((index) => {
      this.fs.collection('centro').doc(index.id).collection('psuv').add(psuv);
    }); 
  }
  updateCentro = (id: string, centro: any, idPsuv: string, psuv: any) => {
    this.fs.collection('centro').doc(id).set(centro).then(
      () => {
        this.fs.collection('centro').doc(id).collection('psuv').doc(idPsuv).set(psuv);
      });
  }

  pollCentro = (id: string) => this.fs.collection('centro').doc(id).collection('poll').snapshotChanges();

}

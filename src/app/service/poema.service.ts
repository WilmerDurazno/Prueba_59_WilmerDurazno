import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoemaService {

  constructor(private afs: AngularFirestore) { }

  getPoema(): Observable<any []> {
    return this.afs.collection('poemas',
    ref => ref.where('activo','==', true)).valueChanges();
  }
}

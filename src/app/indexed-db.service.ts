import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase } from 'idb';

@Injectable({
  providedIn: 'root',
})
export class IndexedDbService {
  private db!: IDBPDatabase;

  constructor() {
    this.initDB();
  }

  private async initDB() {
    this.db = await openDB('formularioEfotos', 1, {
      upgrade(db) {
        db.createObjectStore('dados', { keyPath: 'id' });
        db.createObjectStore('fotos', { keyPath: 'id' });
      },
    });
  }

  async saveFormData(data: any) {
    const tx = this.db.transaction('dados', 'readwrite');
    const store = tx.objectStore('dados');
    await store.put(data);
  }

  async loadFormData() {
    const tx = this.db.transaction('dados', 'readonly');
    const store = tx.objectStore('dados');
    return store.getAll();
  }

  async savePhoto(photoData: Blob, photoInfo: { name: string, date: string, latitude: string, longitude: string }) {
    const tx = this.db.transaction('fotos', 'readwrite');
    const store = tx.objectStore('fotos');
    const id = new Date().getTime().toString(); // Use um ID único para cada foto
    const photoObject = { id, photoData, ...photoInfo };
    await store.put(photoObject);
  }
  

// indexed-db.service.ts


async loadAllPhotosWithInfo() {

}


}

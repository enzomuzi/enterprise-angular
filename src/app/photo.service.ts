import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  getImages(): Promise<any[]> {
    return new Promise((resolve) => {
      resolve([
        { itemImageSrc: 'https://images.unsplash.com/photo-1462206092226-f46025ffe607?q=80&w=1474&auto=format&fit=crop'},
        { itemImageSrc: 'https://images.unsplash.com/photo-1599747645972-73c841de6e9e?q=80&w=1470&auto=format&fit=crop'},
        { itemImageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop'},
        { itemImageSrc: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop' }
      ]);
    });
  }
}

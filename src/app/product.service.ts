import { Injectable } from '@angular/core';
import { Product } from './entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products: Product[];
  
  constructor() {
    this.products = [
      { id: 1, name: 'Apple MacBook Pro 13 with Retina display Mid', price: 1399, photo: 'https://saleszone.imagecms.net/wp-content/uploads/2017/12/fdde6e8efefb11d1f52ed08740292af3.jpg' },
      { id: 2, name: 'GTX Fat 03', price: 340, photo: 'https://saleszone.imagecms.net/wp-content/uploads/2017/12/f6dd2b43c8bacaab632d4e20ca22ba69.jpg' },
      { id: 3, name: 'Apple iPhone 8 64GB', price: 680, photo: 'https://saleszone.imagecms.net/wp-content/uploads/2017/12/9a68b9cfba42bb0535c1c35f70fe5570.jpg' },
      { id: 4, name: 'DELL INSPIRON 7567', price: 989, photo: 'https://saleszone.imagecms.net/wp-content/uploads/2017/12/9c4e2b51d40c47c34595b752215af118.jpg' },
      { id: 5, name: 'Lenovo IdeaPad 320', price: 455, photo: 'https://saleszone.imagecms.net/wp-content/uploads/2017/12/0e586becca1a6bb7e2b6955dbc355585.jpg' },
      { id: 6, name: '64GB Xiaomi Mi A1', price: 345, photo: 'https://saleszone.imagecms.net/wp-content/uploads/2017/12/e1b7d57579378e097d789cf1421cef08.jpg' },
      { id: 7, name: 'Acer Extensa EX2540', price: 759, photo: 'https://saleszone.imagecms.net/wp-content/uploads/2017/12/982d68f69862df57055798e6cf986dab.jpg' },
      { id: 8, name: 'Apple iPhone X 64GB', price: 1000, photo: 'https://saleszone.imagecms.net/wp-content/uploads/2017/12/d778e3168abf77a33b88d4bb8457300e-600x600.jpg' },
      { id: 9, name: 'Samsung Galaxy S8', price: 700, photo: 'https://saleszone.imagecms.net/wp-content/uploads/2017/12/6487b22eb400bf5154139a8643bf1eb3.jpg' },
      { id: 10, name: 'Apple AirPods', price: 150, photo: 'https://saleszone.imagecms.net/wp-content/uploads/2017/12/a6d218461c5bcf8a19f6faa937c0696f-600x600.jpg' }
    ];
  }
  
  findAll(): Product[] {
    return this.products;
  }
  
  find(id): Product {
    return this.products[this.getSelectedIndex(id)];
  }
  
  private getSelectedIndex(id) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }
}

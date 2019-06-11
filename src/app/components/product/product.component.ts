import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product.entity';
import { ProductService } from 'src/app/product.service';

@Component({
	templateUrl: 'index.component.html',
	styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

	private products: Product[];

	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {
		this.products = this.productService.findAll();
	}


}
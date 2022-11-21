import { Cart } from './../shared/models/Cart';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart()

  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart)

  constructor() { }
}

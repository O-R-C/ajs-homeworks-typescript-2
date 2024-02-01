import Buyable from '../Interfaces/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  totalCost(): number {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }
}


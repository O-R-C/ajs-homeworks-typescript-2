import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add() should add item to cart', () => {
  const cart = new Cart();
  cart.add(
    new Movie(
      1111,
      'The Avengers',
      999,
      2012,
      'USA',
      'Avengers assemble!',
      ['фантастика', 'боевик', 'фэнтези', 'приключения'],
      137
    )
  );

  expect(cart.items.length).toBe(1);
});


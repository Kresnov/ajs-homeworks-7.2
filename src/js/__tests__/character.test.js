import Character from '../character.js';

test('Успех', () => {
  const character = new Character('Alex', 50);
  const expected = {
    name: 'Alex',
    level: 2,
    health: 100,
    attack: 60,
    defence: 60,
  };

  character.levelUp();

  expect(character).toEqual(expected);
});

test('Умер', () => {
  const сharacter = new Character('Alex', 0);
  const received = () => сharacter.levelUp();

  expect(received).toThrow();
});

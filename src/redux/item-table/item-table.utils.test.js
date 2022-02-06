import { progressItems } from './item-table.utils';

const SULFURAS_TEST_ITEM = { name: 'Sulfuras', sellIn: 10, value: 80 };
const REGULAR_TEST_ITEM = { name: 'Boots of Swiftness', sellIn: 15, value: 25 };
const CONJURED_TEST_ITEM = { name: 'Conjured Armor', sellIn: 50, value: 40 };
const BRIE_TEST_ITEM = { name: 'Aged Brie', sellIn: 50, value: 10 };
const BACK_STAGE_TEST_ITEM = {
  name: 'Backstage passes',
  sellIn: 20,
  value: 10,
};

test('should not make any changes to sulfuras', () => {
  expect(progressItems([SULFURAS_TEST_ITEM])[0]).toEqual(SULFURAS_TEST_ITEM);
});

test('should reduce value correctly', () => {
  expect(progressItems([REGULAR_TEST_ITEM])[0]).toEqual({
    name: 'Boots of Swiftness',
    sellIn: 14,
    value: 24,
  });

  REGULAR_TEST_ITEM.sellIn = 0;
  expect(progressItems([REGULAR_TEST_ITEM])[0]).toEqual({
    name: 'Boots of Swiftness',
    sellIn: -1,
    value: 22,
  });
});

test('should reduce conjured value by twice as much', () => {
  expect(progressItems([CONJURED_TEST_ITEM])[0]).toEqual({
    name: 'Conjured Armor',
    sellIn: 49,
    value: 38,
  });

  CONJURED_TEST_ITEM.sellIn = 0;
  expect(progressItems([CONJURED_TEST_ITEM])[0]).toEqual({
    name: 'Conjured Armor',
    sellIn: -1,
    value: 34,
  });
});

test('should increase value of brie', () => {
  expect(progressItems([BRIE_TEST_ITEM])[0]).toEqual({
    name: 'Aged Brie',
    sellIn: 49,
    value: 11,
  });
});

test('should correctly update backstage passes', () => {
  expect(progressItems([BACK_STAGE_TEST_ITEM])[0]).toEqual({
    name: 'Backstage passes',
    sellIn: 19,
    value: 11,
  });

  BACK_STAGE_TEST_ITEM.sellIn = 10;
  expect(progressItems([BACK_STAGE_TEST_ITEM])[0]).toEqual({
    name: 'Backstage passes',
    sellIn: 9,
    value: 13,
  });

  BACK_STAGE_TEST_ITEM.sellIn = 5;
  expect(progressItems([BACK_STAGE_TEST_ITEM])[0]).toEqual({
    name: 'Backstage passes',
    sellIn: 4,
    value: 16,
  });

  BACK_STAGE_TEST_ITEM.sellIn = 0;
  expect(progressItems([BACK_STAGE_TEST_ITEM])[0]).toEqual({
    name: 'Backstage passes',
    sellIn: -1,
    value: 0,
  });
});

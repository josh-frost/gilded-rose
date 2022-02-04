const SpecialItems = {
  BRIE: 'aged brie',
  SULFURAS: 'sulfuras',
  BACKSTAGE: 'backstage passes',
};

export const progressItems = (items) => {
  for (let item of items) {
    if (item.sellIn < 0) {
      item.sellIn = 0;
    }

    if (item.name.toLowerCase().includes(SpecialItems.SULFURAS)) {
      continue;
    } else if (item.name.toLowerCase().includes(SpecialItems.BRIE)) {
      updateBrie(item);
    } else if (item.name.toLowerCase().includes(SpecialItems.BACKSTAGE)) {
      updateBackstagePasses(item);
    } else {
      updateRegularItem(item);
    }
  }
};

const updateBrie = (item) => {};

const updateBackstagePasses = (item) => {};

const updateRegularItem = (item) => {};

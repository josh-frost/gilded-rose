const SpecialItems = {
  BRIE: 'aged brie',
  SULFURAS: 'sulfuras',
  BACKSTAGE: 'backstage passes',
};

export const progressItems = (items) => {
  for (let item of items) {
    if (item.name.toLowerCase().includes(SpecialItems.SULFURAS)) {
      continue;
    } else if (item.name.toLowerCase().includes(SpecialItems.BRIE)) {
      updateBrie(item);
    } else if (item.name.toLowerCase().includes(SpecialItems.BACKSTAGE)) {
      updateBackstagePasses(item);
    } else {
      updateRegularItem(item);
    }

    // Value is never less than zero
    if (item.value < 0) {
      item.value = 0;
    }
  }

  return items;
};

const updateBrie = (item) => {};

const updateBackstagePasses = (item) => {};

const updateRegularItem = (item) => {
  if (item.sellIn > 0) {
    item.sellIn--;
    item.value--;
  } else {
    item.value = item.value - 2;
  }
};

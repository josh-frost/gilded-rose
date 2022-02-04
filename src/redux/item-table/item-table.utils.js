const SpecialItems = {
  BRIE: 'aged brie',
  SULFURAS: 'sulfuras',
  BACKSTAGE: 'backstage passes',
};

export const progressItems = (items) => {
  for (let item of items) {
    if (item.sell_in < 0) {
      item.sell_in = 0;
    }

    if (item.name.toLowerCase().includes(SpecialItems.SULFURAS)) {
    } else if (item.name.toLowerCase().includes(SpecialItems.BRIE)) {
      handleBrie(item);
    } else if (item.name.toLowerCase().includes(SpecialItems.BACKSTAGE)) {
      handleBackstagePasses(item);
    } else {
      if (item.sell_in > 0) {
        item.sell_in--;
        item.value--;
      }
    }
  }
};

const handleBrie = (item) => {};

const handleBackstagePasses = (item) => {};

const updateRegularItem = (item) => {};

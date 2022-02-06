const SpecialItems = {
  BRIE: 'aged brie',
  CONJURED: 'conjured',
  SULFURAS: 'sulfuras',
  BACKSTAGE: 'backstage passes',
};

export const progressItems = (items) => {
  for (let item of items) {
    if (item.name.toLowerCase().includes(SpecialItems.SULFURAS)) {
      item.value = 80;
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

    // Value can never exceed 50
    if (item.value > 50) {
      item.value = 50;
    }

    item.sellIn--;
  }

  return items;
};

const updateBrie = (item) => {
  item.value++;
};

const updateBackstagePasses = (item) => {
  if (item.sellIn <= 0) {
    item.value = 0;
  } else {
    item.value++;
    if (item.sellIn <= 10) item.value++;
    if (item.sellIn <= 5) item.value++;
  }
};

const updateRegularItem = (item) => {
  const degradationValue = item.name
    .toLowerCase()
    .includes(SpecialItems.CONJURED)
    ? 2
    : 1;

  item.value =
    item.sellIn > 0
      ? item.value - 1 * degradationValue
      : (item.value = item.value - 2 * degradationValue);
};

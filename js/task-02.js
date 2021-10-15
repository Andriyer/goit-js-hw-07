const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const list = document.querySelector('ul')
  const addIngredient = arg => arg.map(element => {
      const itemList = document.createElement('li')
      itemList.textContent = element
    return itemList
  });

  list.append(...addIngredient(ingredients))
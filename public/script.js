function addItem() {
    const itemList = document.getElementById('item-list');
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
  }
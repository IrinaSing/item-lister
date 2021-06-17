const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem)
//filter event
filter.addEventListener('keyup', filterItems)


function addItem(e) {
  e.preventDefault();

  // get input value
  const newItem = document.getElementById('item').value;

  // create new li element
  const li = document.createElement('li');
  // add class
  li.className = 'list-group-item';
  // add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // create delete button element
  const deleteBtn = document.createElement('button');

  // add classes to delete btn
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  //append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  //append button to li
  li.appendChild(deleteBtn);

  //append li to list
  itemList.appendChild(li);
}

function removeItem(e) {
  if(e.target.classList.contains('delete')) {
    if(confirm('Are you sure?')){
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


function filterItems(e) {
  // convert text to lowercase
  const text = e.target.value.toLowerCase();
  // get lis (html collection, not array)
  const items = itemList.getElementsByTagName('li');
  // convert to array
  Array.from(items).forEach(function(item) {
    const itemName = item.firstChild.textContent;
    if(itemName.toLocaleLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
const itemList = document.getElementById('items');

export const removeItem = (e) => {
    if(e.target.classList.contains('delete')) {
      if(confirm('Are you sure?')){
        const li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
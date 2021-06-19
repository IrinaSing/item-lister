<!--

  you will write dev strategies in this module basically the same as in Incremental Developments
  the only difference is that there are now more types of tasks, for example:
    `type: css`
    `type: html`
    `type: logic`
    `type: handlers`
    `type: procedures`
    `type: listeners`
    `type: init`
    `type: data`
    ...

  a single user story may require a little bit of code in each of these folders
  it will take some time and practice to get used to this

-->

# Add words into the list

## List

### HTML

- [x] <_h2_> "Items" title for the list;
- [x] <_div_> card to store the list in;
- [x] <_ul_> the list;
- [x] <_li_> to see added items as this element.

## Input form

### HTML

- [x] <_h2_> "Add items" title for the form;
- [x] <_form_> with <_input type="text"_> and <_input type="submit"_> inside;

### Listener

- [x] add-item.js file in listeners folder;
- [x] event to listen - "submit", element to attach - addForm, function to handle - addItem.

### Handler

- [x] add-item.js file in handlers folder;
- [x] function addItem creates element <_li_> with textNode and delete button inside;
- [x] inserts element to list <_ul_>;

# Delete words from the list

### HTML

- [x] inside each <_li_> create <_button_> to delete items.

### Listener

- [x] remove-item.js file in listeners folder;
- [x] event to listen - "click", element to attach - itemList, function to handle - removeItem.

### Handler

- [x] remove-item.js file in handlers folder;
- [x] function with name removeItem;
- [x] if-else statement that requires to _confirm_ deletion.
- [x] if confirmed - function removes child from the itemList.

# Filter

### HTML

- [x] <_div_> to keep input form inside;
- [x] <_input type="text"_>

### Listener

- [x] filter-items.js file in listeners folder;
- [x] event to listen - "keyup", element to attach - filter (input form), function to handle - filterItems.

### Handler

- [x] filter-items.js file in handlers folder;
- [x] function named filterItems;
- [x] the function converts input in search field to lowercase;
- [x] converts text content of lis to lowercase;
- [x] checks each <_li_> for content of the input.
- [x] displays result (if found) or not.

# Check marks

### HTML

- [ ] <_input type="checkbox" id="done" /_>

### Listener

- [ ] check-items.js file in listeners folder;
- [ ] event to listen - "change", element to attach - input form with class "done", function to handle - checkItems.

### Handler

- [ ] check-items.js file in handlers folder;
- [ ] takes DOM element and switch .checked property between false and true.

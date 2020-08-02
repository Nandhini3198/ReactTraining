document.addEventListener("DOMContentLoaded", () => {
    
    let addButton = document.querySelector("#add");
    

addButton.addEventListener("click",function(){
  
    console.log("yes");
    let  newItem = document.getElementById("item").value;
    
    if(newItem) { 
     
      addItemTodo(newItem);
     
      document.getElementById("item").value = "";
    }
  });
  function addItemTodo(text){
  
  let list = document.getElementById("todo");
  
  let item = document.createElement('li');
  
  item.innerText = text;

  let buttons = document.createElement('div');
  buttons.classList.add("buttons");

  // create the two buttons

  let remove = document.createElement('button');
  remove.classList.add('remove');
  // add the SVG icon to the button
  
  // add event listener for remove
  // this function will be definedd later
  remove.addEventListener("click",removeItem);
  remove.className="button"
 // remove.setAttribute('content', 'test content');
  
remove.textContent = 'Remove';


  let complete = document.createElement('button');
  complete.classList.add('complete');
  // add the SVG icon to the button
  
  // add event listener for complete
  // this function will be defined later
  complete.addEventListener("click",completeItem);
  complete.className="button1"
  // remove.setAttribute('content', 'test content');
   
 complete.textContent = 'Completed';
 
  // append the buttons to the div
  buttons.appendChild(remove);
  buttons.appendChild(complete);

  // append the whole div to the li
  item.appendChild(buttons);
  list.insertBefore(item,list.childNodes[0]);
}
function removeItem(){
    // grab the `li` by targeting the parent of the parent of the button (button -> div -> li)
    let item = this.parentNode.parentNode;
    // grab the `ul` (li -> ul)
    let parent  = item.parentNode;
    // remove `li` from `ul`
    parent.removeChild(item);
  }
  function completeItem(){
    // grab the `li` by targeting the parent of the parent of the button (button -> div -> li)
    let item = this.parentNode.parentNode;
    // grab the `ul` (li -> ul)
    let parent = item.parentNode;
    // grab the parent id
    let id = parent.id;
  
    // check if the item should go in the completed or if it should be re-added to todo by using a ternary operator
    let target = (id === "todo") ? document.getElementById("completed") : document.getElementById("todo");
    // remove the item to its current `ul`
    parent.removeChild(item);
    // add the item to the new `ul`
    target.insertBefore(item,target.childNodes[0]);
  } 
  });
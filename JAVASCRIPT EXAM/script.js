var groceryEl = document.getElementById("groceryForm"); 
var listEl = document.getElementById("list");
var editEl=document.querySelector(".edit-icon")
var deleteEl=document.querySelector(".delete-icon")
var angelEl=document.getElementById("angel")
var hopeEl=document.querySelector("#hope")

groceryEl.addEventListener("submit", function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();
 
   const groceryInput = groceryEl.elements.grocery;
addGrocery(groceryInput.value); 
groceryInput.value = "";

 
}); 
function display(){
angelEl.textContent="Item Added to the list"
angelEl.style.backgroundColor="green"
angelEl.style.color="black"
editEl.style.display="flex"
deleteEl.style.display="flex"
hopeEl.style.display="none"

}


const addGrocery = (grocery) => {
    const newGroceryEL = document.createElement("li");
    const bTag = document.createElement("b");
    bTag.append(grocery); 

    newGroceryEL.append(bTag);
    listEl.append(newGroceryEL);
};

listEl.addEventListener("click", function (e) {
    if (e.target.nodeName === "LI") {
      e.target.remove();
    }
    
  
  });
  function remove(){
    angelEl.textContent="Item Removed"
    angelEl.style.backgroundColor="red"
    angelEl.style.color="black"
e.target.remove()
    }
    
    function clear(){
        hopeEl.textContent="Empty List"
        hopeEl.style.backgroundColor="red"
        hopeEl.style.color="black"
        hopeEl.style.display="flex"
        }
       
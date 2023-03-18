// Variables

const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const filter = document.getElementById("filter");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");

// Functions

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;
  if (newItem === "") {
    alert("Please add an item");
    return;
  } else {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(newItem));

    const button = createButton("remove-item btn-link text-red");
    li.appendChild(button);

    itemList.appendChild(li);

    checkUI();

    itemInput.value = "";
  }
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure you want to delete this?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
  checkUI();
}

function clearItems(e) {
  const items = document.querySelectorAll("li");
  items.forEach(function (item) {
    return item.remove();
  });
  checkUI();
}

function checkUI() {
  const items = document.querySelectorAll("li");
  console.log(items.length);
  if (items.length === 0) {
    clearBtn.style.display = "none";
    filter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    filter.style.display = "block";
  }
}

// Event Listeners

itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);

checkUI();

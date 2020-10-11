// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  //create elements
  const headerDiv = document.createElement("div");
  const dateSpan = document.createElement("span");
  const titleH1 = document.createElement("h1");
  const tempSpan = document.createElement("span");

  //assign classes
  headerDiv.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  //add content
  dateSpan.textContent = "MARCH 28, 2020";
  titleH1.textContent = "Lambda Times";
  tempSpan.textContent = "98°";

  //append
  const parentNode = document.querySelector(".header-container");
  parentNode.appendChild(headerDiv);
  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(titleH1);
  headerDiv.appendChild(tempSpan);

  return parentNode;
}

Header();

// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const articleUrl = "https://lambda-times-api.herokuapp.com/articles";

axios
  .get(articleUrl)
  .then(({ data }) => {
    console.log(data);
    Object.values(data.articles).forEach((art) => articleCard(art));
  })
  .catch((err) => console.log(err));

const cardContainer = document.querySelector(".cards-container");

function articleCard(obj) {
  obj.forEach((article) => {
    //create elements
    const mainDiv = document.createElement("div");
    const headDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const imgDiv = document.createElement("div");
    const authorImg = document.createElement("img");
    const authorName = document.createElement("span");
    //add classes
    mainDiv.classList.add("card");
    headDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");
    //adding content
    headDiv.textContent = article.headline;
    authorImg.setAttribute("src", article.authorPhoto);
    authorName.textContent = article.authorName;
    //append elements
    cardContainer.appendChild(mainDiv);
    mainDiv.appendChild(headDiv);
    mainDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    imgDiv.appendChild(authorImg);
    authorDiv.appendChild(authorName);
    //event listener
    mainDiv.addEventListener("click", () => {
      console.log(article.headline);
    });

    return cardContainer;
  });
}

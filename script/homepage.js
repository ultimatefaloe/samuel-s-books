

const booksHome = [
    {
        category: "Inspirational",
        image: "./images/inspirational.jpg",
        title: "Inspirational Books",
        description: "One book can change your mindset. <br> One mindset can change your life. <br> Discover your next read now!",
        price: 35000
    },
    {
        category: "Educational",
        image: "./images/Educational.jpg",
        title: "Educational Books",
        description: "Turn pages into power.<br> Master any subject, anywhere.<br>Success is just a book away",
        price: 35000
    },
    {
        category: "Adventure",
        image: "./images/adventure.jpg",
        title: "Adventure Books",
        description: "From mountains to mysteries…<br>From quests to courage…<br>Your adventure begins here..",
        price: 35000
    }
]

booksHome.forEach((booksHome, index) => {
    const bookTempHome = `
    <div id="${index}" class="entire_books">
        <div class="image">
            <img src="${booksHome.image}" alt="${booksHome.category}" width="100%">
        </div>
        <p id="floatText">${booksHome.category}</p>
        <h2>${booksHome.title}</h2>
        <p id="bd">${booksHome.description}</p>
        <div id="price_btn">
            <div class="price">₦${booksHome.price}</div>
            <button class="btn">Add To Cart</button>
        </div>
        <br>    
    </div> 
  `;
    const bookIdHome = document.getElementById('booksHome');
    bookIdHome.innerHTML += bookTempHome;
});
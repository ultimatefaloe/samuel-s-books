const books = [
    {
        category: "Inspirational",
        image: "../images/inspirational.jpg",
        title: "Inspirational Books",
        description: "One book can change your mindset. <br> One mindset can change your life. <br> Discover your next read now!",
        price: 35000
    },
    {
        category: "Educational",
        image: "../images/Educational.jpg",
        title: "Educational Books",
        description: "Turn pages into power.<br> Master any subject, anywhere.<br>Success is just a book away",
        price: 35000
    },
    {
        category: "Adventure",
        image: "../images/adventure.jpg",
        title: "Adventure Books",
        description: "From mountains to mysteries…<br>From quests to courage…<br>Your adventure begins here..",
        price: 35000
    },
    {
        category: "Romance",
        image: "../images/Romance.jpg",
        title: "Romance Books",
        description: "Fall in love again… <br>One chapter at a time.<br>Your next great love story is waiting.",
        price: 35000
    },
    {
        category: "Motivational",
        image: "../images/motivational.jpeg",
        title: "Motivational Books",
        description: "Fuel your hustle. <br>Spark your mindset.<br>A motivational book can change your game.",
        price: 35000
    },
    {
        category: "Spiritual",
        image: "../images/spiritual.jpg",
        title: "Spiritual Books",
        description: "Calm your mind. <br>Strengthen your spirit<br>Let wisdom guide your journey.",
        price: 35000
    },
    {
        category: "Leadership",
        image: "../images/leadership.jpeg",
        title: "Leadership Books",
        description: "Strong minds <br>Bold decisions.<br>Leadership begins on the page.",
        price: 35000
    },
    {
        category: "How-to books",
        image: "../images/howto.jpeg",
        title: "How-to books Books",
        description: "Why guess… <br>when you can know how?<br>Your “how” starts here.",
        price: 35000
    },
    {
        category: "Songbooks",
        image: "../images/songbooks.jpg",
        title: "Songbooks Books",
        description: "Learn the songs you love. <br>Share the music you feel.<br>Songbooks make it simple.",
        price: 35000
    }
]



books.forEach((books, index) => {
    const bookTemp = `
    <div id="${index}" class="entire_books">
        <div class="image">
            <img src="${books.image}" alt="${books.category}" width="100%">
        </div>
        <p id="floatText">${books.category}</p>
        <h2>${books.title}</h2>
        <p id="bd">${books.description}</p>
        <div id="price_btn">
            <div class="price">₦${books.price}</div>
            <button class="btn">Add To Cart</button>
        </div>
        <br>
    </div> 
  `;
    const bookId = document.getElementById('books');
    bookId.innerHTML += bookTemp;
});
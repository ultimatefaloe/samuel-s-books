const books = [
    {
        category: "Inspirational",
        image: "./inspirational.jpg",
        title: "Inspirational Books",
        description: "One book can change your mindset. <br> One mindset can change your life. <br> Discover your next read now!",
        price: 35000
    },
    {
        category: "Educational",
        image: "./Educational.jpg",
        title: "Educational Books",
        description: "Turn pages into power.<br> Master any subject, anywhere.<br>Success is just a book away",
        price: 35000
    },
    {
        category: "Adventure",
        image: "./adventure.jpg",
        title: "Adventure Books",
        description: "From mountains to mysteries…<br>From quests to courage…<br>Your adventure begins here..",
        price: 35000
    },
    {
        category: "Romance",
        image: "./Romance.jpg",
        title: "Romance Books",
        description: "Fall in love again… <br>One chapter at a time.<br>Your next great love story is waiting.",
        price: 35000
    },
    {
        category: "Motivational",
        image: "./motivational.jpeg",
        title: "Motivational Books",
        description: "Fuel your hustle. <br>Spark your mindset.<br>A motivational book can change your game.",
        price: 35000
    },
    {
        category: "Spiritual",
        image: "./spiritual.jpg",
        title: "Spiritual Books",
        description: "Calm your mind. <br>Strengthen your spirit<br>Let wisdom guide your journey.",
        price: 35000
    },
    {
        category: "Leadership",
        image: "./leadership.jpeg",
        title: "Leadership Books",
        description: "Strong minds <br>Bold decisions.<br>Leadership begins on the page.",
        price: 35000
    },
    {
        category: "How-to books",
        image: "./howto.jpeg",
        title: "How-to books Books",
        description: "Why guess… <br>when you can know how?<br>Your “how” starts here.",
        price: 35000
    },
    {
        category: "Songbooks",
        image: "./songbooks.jpg",
        title: "Songbooks Books",
        description: "Learn the songs you love. <br>Share the music you feel.<br>Songbooks make it simple.",
        price: 35000
    }
]

const header = document.getElementById('header');
let isMobile = true


// Run once on page load
function handleScreenChange(e) {
  if (e.matches) {
    // Screen is <= 768px
     header.innerHTML = `
    <nav>
        <div class="flex">
            <div class="left_nav">
                <h1>📖 Samuel's book</h1>
            </div>
            <div class="icon" id="openMenu">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>   
    </nav>
    <div class="menubar" id="menuBar">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="index-product.html">Products</a></li>
            <li id="cart"><a href="#">🛒</a></li>
            <li id="profile"><a href="index-profile.html">👤</a></li>
            <li id="sign_in"><a href="index-signin.html">Sign in</a></li>
        </ul>
    </div>
    `
    let isOpen = true 
    const openMenu = document.getElementById('openMenu');
    const menubar = document.getElementById('menuBar');

    openMenu.addEventListener('click', ()=> {
        isOpen = isOpen ? false : true;
        menubar.style.right = isOpen ? "-200px" : "0px"
    })

  } else {
    // Screen is > 768px
      header.innerHTML = `
        <nav>
            <div class="left_nav">
                <h1>📖 Samuel's book</h1>
            </div>
            <div class="right_nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index-product.html">Products</a></li>
                    <li id="cart"><a href="#">🛒</a></li>
                    <li id="profile"><a href="index-profile.html">👤</a></li>
                    <li id="sign_in"><a href="index-signin.html">Sign in</a></li>
                </ul>
            </div>
            <div class="menu">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </nav>
    `
  }
}



// Create the media query
const mediaQuery = window.matchMedia("(max-width: 768px)");

// Call handler immediately so UI updates on load
handleScreenChange(mediaQuery);

// Add listener so it updates whenever screen size changes
mediaQuery.addEventListener("change", handleScreenChange);




// if(mediaQuery){
//     header.innerHTML = `
//         <nav>
//             <div class="left_nav">
//                 <h1>📖 Samuel's book</h1>
//             </div>
//             <div class="right_nav">
//                 <ul>
//                     <li><a href="index.html">Home</a></li>
//                     <li><a href="index-product.html">Products</a></li>
//                     <li id="cart"><a href="#">🛒</a></li>
//                     <li id="profile"><a href="index-profile.html">👤</a></li>
//                     <li id="sign_in"><a href="index-signin.html">Sign in</a></li>
//                 </ul>
//             </div>
//             <div class="menu">
//                 <div class="line"></div>
//                 <div class="line"></div>
//                 <div class="line"></div>
//             </div>
//         </nav>
//     `
// } else {
//     header.innerHTML = `
//     <nav>
//         <div class="flex">
//             <div class="left_nav">
//                 <h1>📖 Samuel's book</h1>
//             </div>
//             <div class="icon" id="openMenu">
//                 <div class="line"></div>
//                 <div class="line"></div>
//                 <div class="line"></div>
//             </div>
//         </div>   
//     </nav>
//     <div class="menubar" id="menuBar">
//         <ul>
//             <li><a href="index.html">Home</a></li>
//             <li><a href="index-product.html">Products</a></li>
//             <li id="cart"><a href="#">🛒</a></li>
//             <li id="profile"><a href="index-profile.html">👤</a></li>
//             <li id="sign_in"><a href="index-signin.html">Sign in</a></li>
//         </ul>
//     </div>
//     `
// }


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
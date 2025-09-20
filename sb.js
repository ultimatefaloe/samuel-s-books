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
                <h1><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><g fill="#3f7863"><path d="M208 32v160H72a24 24 0 0 0-24 24V56a24 24 0 0 1 24-24Z" opacity="0.2"/><path d="M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m-8 160H72a31.8 31.8 0 0 0-16 4.29V56a16 16 0 0 1 16-16h128Z"/></g></svg> Samuel's book</h1>
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
            <li id="cart"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><circle cx="7.5" cy="18.5" r="1.5" fill="#374151"/><circle cx="16.5" cy="18.5" r="1.5" fill="#374151"/><path stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 5h2l.6 3m0 0L7 15h10l2-7z"/></g></svg></a></li>
            <li id="profile"><a href="index-profile.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path stroke="#374151" d="M21 12a8.96 8.96 0 0 1-1.526 5.016A8.99 8.99 0 0 1 12 21a8.99 8.99 0 0 1-7.474-3.984A9 9 0 1 1 21 12Z" stroke-width="1"/><path fill="#374151" d="M13.5 9a1.5 1.5 0 0 1-1.5 1.5v1A2.5 2.5 0 0 0 14.5 9zM12 10.5A1.5 1.5 0 0 1 10.5 9h-1a2.5 2.5 0 0 0 2.5 2.5zM10.5 9A1.5 1.5 0 0 1 12 7.5v-1A2.5 2.5 0 0 0 9.5 9zM12 7.5A1.5 1.5 0 0 1 13.5 9h1A2.5 2.5 0 0 0 12 6.5zM5.166 17.856l-.48-.142l-.077.261l.177.207zm13.668 0l.38.326l.177-.207l-.078-.261zM9 15.5h6v-1H9zm0-1a4.5 4.5 0 0 0-4.313 3.214l.958.285A3.5 3.5 0 0 1 9 15.5zm3 6a8.48 8.48 0 0 1-6.455-2.97l-.759.652A9.48 9.48 0 0 0 12 21.5zm3-5a3.5 3.5 0 0 1 3.355 2.5l.958-.286A4.5 4.5 0 0 0 15 14.5zm3.455 2.03A8.48 8.48 0 0 1 12 20.5v1a9.48 9.48 0 0 0 7.214-3.318z"/></g></svg></a></li>
            <li id="sign_in"><a href="index-signin.html">Sign in</a></li>#3f7863
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
                <h1><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><g fill="#3f7863"><path d="M208 32v160H72a24 24 0 0 0-24 24V56a24 24 0 0 1 24-24Z" opacity="0.2"/><path d="M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m-8 160H72a31.8 31.8 0 0 0-16 4.29V56a16 16 0 0 1 16-16h128Z"/></g></svg> Samuel's book</h1>
            </div>
            <div class="right_nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index-product.html">Products</a></li>
                    <li id="cart"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><circle cx="7.5" cy="18.5" r="1.5" fill="#374151"/><circle cx="16.5" cy="18.5" r="1.5" fill="#374151"/><path stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 5h2l.6 3m0 0L7 15h10l2-7z"/></g></svg></a></li>
                    <li id="profile"><a href="index-profile.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path stroke="#374151" d="M21 12a8.96 8.96 0 0 1-1.526 5.016A8.99 8.99 0 0 1 12 21a8.99 8.99 0 0 1-7.474-3.984A9 9 0 1 1 21 12Z" stroke-width="1"/><path fill="#374151" d="M13.5 9a1.5 1.5 0 0 1-1.5 1.5v1A2.5 2.5 0 0 0 14.5 9zM12 10.5A1.5 1.5 0 0 1 10.5 9h-1a2.5 2.5 0 0 0 2.5 2.5zM10.5 9A1.5 1.5 0 0 1 12 7.5v-1A2.5 2.5 0 0 0 9.5 9zM12 7.5A1.5 1.5 0 0 1 13.5 9h1A2.5 2.5 0 0 0 12 6.5zM5.166 17.856l-.48-.142l-.077.261l.177.207zm13.668 0l.38.326l.177-.207l-.078-.261zM9 15.5h6v-1H9zm0-1a4.5 4.5 0 0 0-4.313 3.214l.958.285A3.5 3.5 0 0 1 9 15.5zm3 6a8.48 8.48 0 0 1-6.455-2.97l-.759.652A9.48 9.48 0 0 0 12 21.5zm3-5a3.5 3.5 0 0 1 3.355 2.5l.958-.286A4.5 4.5 0 0 0 15 14.5zm3.455 2.03A8.48 8.48 0 0 1 12 20.5v1a9.48 9.48 0 0 0 7.214-3.318z"/></g></svg></a></li>
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



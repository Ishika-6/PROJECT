var swiper = new Swiper('.swiper', {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
    speed: 500,
    loop: false,
    rotate: true,
    mousewheel: {
    invert: false,
  },
  keyboard:{
    enabled:true,
    onlyInViewport: true,
  }
});

const genreContent = document.querySelector('.genre-content');
        let scrollValue=0;

        function scrollGenres() {
            genreContent.scrollLeft += 5; 
        
            
            requestAnimationFrame(scrollGenres);
            
            
        }

        // scrollGenres();
// // Get the button element
// const button = document.getElementsByClassName('btn')[0];

// // Get the books container element
// const booksContainer = document.getElementsByClassName('books')[0];

// // Add event listener to the button
// button.addEventListener('click', () => {
//     // Toggle the visibility of the books container
//     booksContainer.classList.toggle('visible');
// });

// Its that every differene corresponding button changes the base initial div to have different images and names and links according to the genre of the button

const buttons = document.querySelectorAll('.genre');

const booksContainer = document.querySelector('.books');

const bookDetails = {
    scifi: [
        { name: 'The Martian', image: 'images/genres/scifi/themartian.jpg'},
        { name: 'The Hitchhiker\'s Guide to the Galaxy', image: 'images/genres/scifi/hitchhikers.jpg'},
        { name: 'The War of the Worlds', image: 'images/genres/scifi/waroftheworlds.jpg'},
        { name: 'The Time Machine', image: 'images/genres/scifi/timemachine.jpg'},
        { name: 'Dune', image: 'images/genres/scifi/dune.jpg'},
        { name: 'Neuromancer', image: 'images/genres/scifi/neuromancer.jpg'},
        { name: 'Ender\'s Game', image: 'images/genres/scifi/endersgame.jpg'},
        { name: 'Snow Crash', image: 'images/genres/scifi/snowcrash.jpg'},
    ],
    thriller: [
        { name: 'Gone Girl', image: 'images/genres/thriller/gonegirl.jpg'},
        { name: 'The Girl with the Dragon Tattoo', image: 'images/genres/thriller/girlwiththedragontattoo.jpg'},
        { name: 'The Da Vinci Code', image: 'images/genres/thriller/davincicode.jpg'},
        { name: 'The Silence of the Lambs', image: 'images/genres/thriller/silenceofthelambs.jpg'},
        { name: 'The Girl on the Train', image: 'images/genres/thriller/girlonthetrain.jpg'},
        { name: 'Inferno', image: 'images/genres/thriller/inferno.jpg'},
        { name: 'The Bourne Identity', image: 'images/genres/thriller/bourneidentity.jpg'},
        { name: 'Before I Go to Sleep', image: 'images/genres/thriller/beforeigosleep.jpg'},
    ],
    horror: [
        { name: 'IT', image: 'images/genres/horror/it.jpg'},
        { name: 'The Shining', image: 'images/genres/horror/theshining.jpg'},
        { name: 'Dracula', image: 'images/genres/horror/dracula.jpg'},
        { name: 'Frankenstein', image: 'images/genres/horror/frankenstein.jpg'},
        { name: 'The Exorcist', image: 'images/genres/horror/exorcist.jpg'},
        { name: 'Pet Sematary', image: 'images/genres/horror/petsematary.jpg'},
        { name: 'Psycho', image: 'images/genres/horror/psycho.jpg'},
        { name: 'The Conjuring', image: 'images/genres/horror/conjuring.jpeg'},
    ],
    romance: [
        { name: 'Pride and Prejudice', image: 'images/genres/romance/prideandprejudice.jpg'},
        { name: 'Romeo and Juliet', image: 'images/genres/romance/romeoandjuliet.jpg'},
        { name: 'The Notebook', image: 'images/genres/romance/thenotebook.jpg'},
        { name: 'Sense and Sensibility', image: 'images/genres/romance/senseandsensibility.jpg'},
        { name: 'Twilight', image: 'images/genres/romance/twilight.jpg'},
        { name: 'Outlander', image: 'images/genres/romance/outlander.jpg'},
        { name: 'Me Before You', image: 'images/genres/romance/mebeforeyou.jpg'},
        { name: 'The Fault in Our Stars', image: 'images/genres/romance/faultinourstars.jpg'},
    ],
    psychology: [
        { name: 'Thinking, Fast and Slow', image: 'images/genres/psy/thinkingfastandslow.jpg'},
        { name: 'The Power of Habit', image: 'images/genres/psy/powerofhabit.jpg'},
        { name: 'Blink', image: 'images/genres/psy/blink.jpg'},
        { name: 'Influence: The Psychology of Persuasion', image: 'images/genres/psy/influence.jpg'},
        { name: 'Predictably Irrational', image: 'images/genres/psy/predictablyirrational.jpg'},
        { name: 'Nudge', image: 'images/genres/psy/nudge.jpg'},
        { name: 'Emotional Intelligence', image: 'images/genres/psy/emotionalintelligence.jpg'},
        { name: 'Quiet: The Power of Introverts', image: 'images/genres/psy/quiet.jpg'},
    ],
    fiction: [
        { name: 'To Kill a Mockingbird', image: 'images/genres/fiction/tokillamockingbird.jpg'},
        { name: '1984', image: 'images/genres/fiction/1984.jpg'},
        { name: 'The Great Gatsby', image: 'images/genres/fiction/greatgatsby.jpg'},
        { name: 'The Catcher in the Rye', image: 'images/genres/fiction/catcherintherye.jpg'},
        { name: 'Brave New World', image: 'images/genres/fiction/bravenewworld.jpg'},
        { name: 'The Alchemist', image: 'images/genres/fiction/alchemist.jpg'},
        { name: 'The Lord of the Rings', image: 'images/genres/fiction/lotr.jpg'},
        { name: 'One Hundred Years of Solitude', image: 'images/genres/fiction/onehundredyearsofsolitude.jpg'},
    ],
    poetry: [
        { name: 'The Waste Land', image: 'images/genres/poetry/thewasteland.jpg'},
        { name: 'Leaves of Grass', image: 'images/genres/poetry/leavesofgrass.jpg'},
        { name: 'The Raven', image: 'images/genres/poetry/theraven.jpg'},
        { name: 'Beowulf', image: 'images/genres/poetry/beowulf.jpg'},
        { name: 'Milk and Honey', image: 'images/genres/poetry/milkandhoney.jpg'},
        { name: 'The Sun and Her Flowers', image: 'images/genres/poetry/sunandherflowers.jpg'},
        { name: 'Ariel', image: 'images/genres/poetry/ariel.jpg'},
        { name: 'The Love Song of J. Alfred Prufrock', image: 'images/genres/poetry/prufrock.jpg'},
    ],
    selfhelp: [
        { name: 'The 7 Habits of Highly Effective People', image: 'images/genres/selfhelp/7habits.jpg'},
        { name: 'How to Win Friends and Influence People', image: 'images/genres/selfhelp/howtowinfriends.jpg'},
        { name: 'Atomic Habits', image: 'images/genres/selfhelp/atomichabits.jpg'},
        { name: 'The Subtle Art of Not Giving a F*ck', image: 'images/genres/selfhelp/subtleart.jpg'},
        { name: 'You Are a Badass', image: 'images/genres/selfhelp/youareabadass.jpg'},
        { name: 'Mindset: The New Psychology of Success', image: 'images/genres/selfhelp/mindset.jpg'},
        { name: 'The Four Agreements', image: 'images/genres/selfhelp/fouragreements.jpg'},
        { name: 'The Power of Now', image: 'images/genres/selfhelp/powerofnow.jpg'},
    ],
    comics: [
        { name: 'Maus', image: 'images/genres/comics/maus.jpg'},
        { name: 'Persepolis', image: 'images/genres/comics/persepolis.jpg'},
        { name: 'Watchmen', image: 'images/genres/comics/watchmen.jpg'},
        { name: 'Batman: The Dark Knight Returns', image: 'images/genres/comics/darkknightreturns.jpg'},
        { name: 'Spider-Man: The Night Gwen Stacy Died', image: 'images/genres/comics/spiderman.jpg'},
        { name: 'X-Men: Dark Phoenix Saga', image: 'images/genres/comics/darkphoenix.jpg'},
        { name: 'Astro City', image: 'images/genres/comics/astrocity.jpg'},
        { name: 'Sandman', image: 'images/genres/comics/sandman.jpg'},
    ],
    mangas: [
        { name: 'Naruto', image: 'images/genres/manga/naruto.jpg'},
        { name: 'One Piece', image: 'images/genres/manga/onepiece.jpg'},
        { name: 'Attack on Titan', image: 'images/genres/manga/attackontitan.jpg'},
        { name: 'Death Note', image: 'images/genres/manga/deathnote.jpg'},
        { name: 'My Hero Academia', image: 'images/genres/manga/myheroacademia.jpg'},
        { name: 'Demon Slayer', image: 'images/genres/manga/demonslayer.jpg'},
        { name: 'Fullmetal Alchemist', image: 'images/genres/manga/fullmetalalchemist.jpg'},
        { name: 'Tokyo Ghoul', image: 'images/genres/manga/tokyoghoul.jpg'},
    ],
};


function updateBooks(genre){
    const books = bookDetails[genre] || [];
    
    books.forEach((book, index) => {
        const bookElement = booksContainer.children[index];

        const bookName = bookElement.querySelector('.booktext');
        const bookImage = bookElement.querySelector('img');

        bookName.textContent = book.name;
        bookImage.src = book.image;
    });
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Extract the genre from the button's class name
        const genre = button.classList.contains('genre-scifi') ? 'scifi' :
                      button.classList.contains('genre-thriller') ? 'thriller' :
                      button.classList.contains('genre-horror') ? 'horror' :
                      button.classList.contains('genre-romance') ? 'romance' :
                      button.classList.contains('genre-psychology') ? 'psychology' :
                      button.classList.contains('genre-fiction') ? 'fiction' :
                      button.classList.contains('genre-poetry') ? 'poetry' :
                      button.classList.contains('genre-selfhelp') ? 'selfhelp' :
                      button.classList.contains('genre-comics') ? 'comics' :
                      button.classList.contains('genre-mangas') ? 'mangas' : '';

        // Update the books based on the selected genre
        updateBooks(genre);
        
        // Toggle the visibility of booksContainer if needed
        booksContainer.classList.add('visible');

        // Add the fade-in class to trigger the animation
        booksContainer.classList.add('fade-in');
        
        // Remove the fade-in class after the animation duration (500ms)
        setTimeout(() => {
            booksContainer.classList.remove('fade-in');
        }, 500);
    });
});

let arr = Array.from(document.querySelectorAll('.section-4-container'));

let counter = -100;
let isAnimating = false; 

let iv1 = setInterval(moveIt, 3000);

function moveIt() {
    if (isAnimating) {
        return;
    }

    isAnimating = true;
    
    arr.forEach((cont) => {
        cont.style.transition = 'transform ' + 1.5 + 's ease-in-out';
        cont.style.transform = 'translateX(' + counter + '%)';
    });

    counter -= 100;

    if (counter < -600) {
        arr.forEach((cont) => {
            cont.style.transition = 'transform 0s';
            cont.style.transform = 'translateX(' + 0 + '%)';
        });

        counter = 0;
    }

    isAnimating = false;
}

let nextButton = document.querySelector('.nextButton');

nextButton.addEventListener('click', () => {
    clearInterval(iv1);
    moveIt();
    iv1 = setInterval(moveIt, 3000);
});



// Book animation

/*--------------------
Vars
--------------------*/
let progress = 50
let startX = 0
let active = 0
let isDown = false

/*--------------------
Contants
--------------------*/
const speedWheel = 0.02
const speedDrag = -0.1

/*--------------------
Get Z
--------------------*/
const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

/*--------------------
Items
--------------------*/
const $items = document.querySelectorAll('.carousel-item')
const $cursors = document.querySelectorAll('.cursor')

const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index]
  item.style.setProperty('--zIndex', zIndex)
  item.style.setProperty('--active', (index-active)/$items.length)
}

/*--------------------
Animate
--------------------*/
const animate = () => {
  progress = Math.max(0, Math.min(progress, 100))
  active = Math.floor(progress/100*($items.length-1))
  
  $items.forEach((item, index) => displayItems(item, index, active))
}
animate()

/*--------------------
Click on Items
--------------------*/
$items.forEach((item, i) => {
  item.addEventListener('click', () => {
    progress = (i/$items.length) * 100 + 10
    animate()
  })
})

/*--------------------
Handlers
--------------------*/
const handleWheel = e => {
  const wheelProgress = e.deltaY * speedWheel
  progress = progress + wheelProgress
  animate()
}

const handleMouseMove = (e) => {
  if (e.type === 'mousemove') {
    $cursors.forEach(($cursor) => {
      $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
  }
  if (!isDown) return
  const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
  const mouseProgress = (x - startX) * speedDrag
  progress = progress + mouseProgress
  startX = x
  animate()
}

const handleMouseDown = e => {
  isDown = true
  startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
}

const handleMouseUp = () => {
  isDown = false
}

/*--------------------
Listeners
--------------------*/
// document.addEventListener('mousewheel', handleWheel)
document.addEventListener('mousedown', handleMouseDown)
document.addEventListener('mousemove', handleMouseMove)
document.addEventListener('mouseup', handleMouseUp)
document.addEventListener('touchstart', handleMouseDown)
document.addEventListener('touchmove', handleMouseMove)
document.addEventListener('touchend', handleMouseUp)
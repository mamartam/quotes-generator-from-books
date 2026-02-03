const literaryQuotes = [
  {
    author: "George Orwell",
    book: "1984",
    quote: "In a time of deceit telling the truth is a revolutionary act.",
  },
  {
    author: "Virginia Woolf",
    book: "A Room of One's Own",
    quote:
      "No need to hurry. No need to sparkle. No need to be anybody but oneself.",
  },
  {
    author: "Ernest Hemingway",
    book: "A Farewell to Arms",
    quote:
      "The world breaks every one and afterward many are strong at the broken places.",
  },
  {
    author: "Jane Austen",
    book: "Pride and Prejudice",
    quote: "Angry people are not always wise.",
  },
  {
    author: "Oscar Wilde",
    book: "The Picture of Dorian Gray",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Maya Angelou",
    book: "I Know Why the Caged Bird Sings",
    quote: "There is no greater agony than bearing an untold story inside you.",
  },
  {
    author: "Mark Twain",
    book: "Personal Reflections",
    quote: "The secret of getting ahead is getting started.",
  },
  {
    author: "Agatha Christie",
    book: "Death on the Nile",
    quote:
      "The impossible could not have happened, therefore the impossible must be possible in spite of appearances.",
  },
  {
    author: "Victor Hugo",
    book: "Les Misérables",
    quote: "To love or have loved, that is enough. Ask nothing further.",
  },
  {
    author: "Mary Shelley",
    book: "Frankenstein",
    quote: "Beware; for I am fearless, and therefore powerful.",
  },
  {
    author: "F. Scott Fitzgerald",
    book: "The Great Gatsby",
    quote: "Reserving judgments is a matter of infinite hope.",
  },
  {
    author: "Harper Lee",
    book: "To Kill a Mockingbird",
    quote:
      "The one thing that doesn't abide by majority rule is a person's conscience.",
  },
  {
    author: "Charles Dickens",
    book: "A Tale of Two Cities",
    quote: "It was the best of times, it was the worst of times.",
  },
  {
    author: "Sylvia Plath",
    book: "The Bell Jar",
    quote:
      "I took a deep breath and listened to the old brag of my heart. I am, I am, I am.",
  },
  {
    author: "Franz Kafka",
    book: "The Metamorphosis",
    quote:
      "Believing in progress does not mean believing that any progress has yet been made.",
  },
  {
    author: "Emily Brontë",
    book: "Wuthering Heights",
    quote: "Whatever our souls are made of, his and mine are the same.",
  },
  {
    author: "Albert Camus",
    book: "The Myth of Sisyphus",
    quote:
      "In the midst of winter, I found there was, within me, an invincible summer.",
  },
  {
    author: "Toni Morrison",
    book: "Beloved",
    quote:
      "Freeing yourself was one thing, claiming ownership of that freed self was another.",
  },
  {
    author: "Gabriel García Márquez",
    book: "One Hundred Years of Solitude",
    quote:
      "It is not true that people stop pursuing dreams because they grow old.",
  },
  {
    author: "J.K. Rowling",
    book: "Harry Potter and the Sorcerer's Stone",
    quote: "It does not do to dwell on dreams and forget to live.",
  },
  {
    author: "Herman Melville",
    book: "Moby-Dick",
    quote:
      "I know not all that may be coming, but be it what it will, I'll go to it laughing.",
  },
  {
    author: "George Eliot",
    book: "Middlemarch",
    quote: "It is never too late to be what you might have been.",
  },
  {
    author: "James Joyce",
    book: "Ulysses",
    quote: "Mistakes are the portals of discovery.",
  },
  {
    author: "Margaret Atwood",
    book: "The Handmaid's Tale",
    quote: "Don't let the bastards grind you down.",
  },
  {
    author: "Paulo Coelho",
    book: "The Alchemist",
    quote:
      "It's the possibility of having a dream come true that makes life interesting.",
  },
  {
    author: "Emily Dickinson",
    book: "The Poems of Emily Dickinson",
    quote: "Hope is the thing with feathers that perches in the soul.",
  },
  {
    author: "Jack London",
    book: "The Call of the Wild",
    quote: "The proper function of man is to live, not to exist.",
  },
  {
    author: "Charlotte Brontë",
    book: "Jane Eyre",
    quote:
      "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
  },
  {
    author: "Ray Bradbury",
    book: "Fahrenheit 451",
    quote:
      "Stuff your eyes with wonder, live as if you'd drop dead in ten seconds.",
  },
  {
    author: "Zadie Smith",
    book: "White Teeth",
    quote:
      "Stop worrying about your identity and concern yourself with the people you care about.",
  },
  {
    author: "John Steinbeck",
    book: "East of Eden",
    quote: "And now that you don't have to be perfect, you can be good.",
  },
  {
    author: "Chimamanda Ngozi Adichie",
    book: "Half of a Yellow Sun",
    quote: "You must never behave as if your life belongs to a man.",
  },
  {
    author: "William Shakespeare",
    book: "Hamlet",
    quote: "We know what we are, but know not what we may be.",
  },
  {
    author: "Louisa May Alcott",
    book: "Little Women",
    quote: "I am not afraid of storms, for I am learning how to sail my ship.",
  },
  {
    author: "J.R.R. Tolkien",
    book: "The Fellowship of the Ring",
    quote:
      "All that is gold does not glitter, not all those who wander are lost.",
  },
  {
    author: "Ursula K. Le Guin",
    book: "The Left Hand of Darkness",
    quote:
      "The only thing that makes life possible is permanent, intolerable uncertainty.",
  },
  {
    author: "Kurt Vonnegut",
    book: "Slaughterhouse-Five",
    quote: "So it goes.",
  },
  {
    author: "Isabel Allende",
    book: "The House of the Spirits",
    quote: "There is no death, daughter. People die only when we forget them.",
  },
  {
    author: "Douglas Adams",
    book: "The Hitchhiker's Guide to the Galaxy",
    quote:
      "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
  },
  {
    author: "Alice Walker",
    book: "The Color Purple",
    quote:
      "I think it pisses God off if you walk by the color purple in a field somewhere and don't notice it.",
  },
  {
    author: "Antoine de Saint-Exupéry",
    book: "The Little Prince",
    quote:
      "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
  },
  {
    author: "Zora Neale Hurston",
    book: "Their Eyes Were Watching God",
    quote: "There are years that ask questions and years that answer.",
  },
  {
    author: "Ralph Waldo Emerson",
    book: "Self-Reliance",
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  },
  {
    author: "Doris Lessing",
    book: "The Golden Notebook",
    quote:
      "Whatever you're meant to do, do it now. The conditions are always impossible.",
  },
  {
    author: "Marcel Proust",
    book: "In Search of Lost Time",
    quote:
      "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
  },
  {
    author: "Clarice Lispector",
    book: "The Hour of the Star",
    quote:
      "Who has not asked himself at some time or other: am I a monster or is this what it means to be a person?",
  },
  {
    author: "Haruki Murakami",
    book: "Kafka on the Shore",
    quote:
      "Memories warm you up from the inside. But they also tear you apart.",
  },
  {
    author: "Joan Didion",
    book: "The Year of Magical Thinking",
    quote:
      "Life changes fast. Life changes in the instant. You sit down to dinner and life as you know it ends.",
  },
  {
    author: "Edgar Allan Poe",
    book: "Eleonora",
    quote:
      "Those who dream by day are cognizant of many things which escape those who dream only by night.",
  },
  {
    author: "Simone de Beauvoir",
    book: "The Second Sex",
    quote: "One is not born, but rather becomes, a woman.",
  },
];

const generateNewQuoteBtn = document.querySelector(".generate-new-quote-btn");
const quoteInfo = document.querySelector(".quote-info");
const quote = document.querySelector(".quote");
const aboutAuthor = document.querySelector(".about-author");
let amountOfItems = literaryQuotes.length;
let previousIndex = undefined;
generateNewQuoteBtn.addEventListener("click", () => {
  let index = generatingRandomNumber(amountOfItems);
  console.log(index);
  if (previousIndex === undefined) {
    displayingDataInHTML(literaryQuotes, index);
    previousIndex = index;
  } else {
    if (index !== previousIndex) {
      displayingDataInHTML(literaryQuotes, index);
      previousIndex = index;
    } else if (index === previousIndex) {
      do {
        index = generatingRandomNumber(amountOfItems);
      } while (index === previousIndex);
      displayingDataInHTML(literaryQuotes, index);
      previousIndex = index;
    }
  }
});

function displayingDataInHTML(array, index) {
  quote.textContent = `"${array[index].quote}"`;
  aboutAuthor.innerHTML = `${array[index].author} <br />
          <span class="from-info">from "${array[index].book}"</span>`;
}

function generatingRandomNumber(length) {
  return Math.floor(Math.random() * length);
}

// quoteInfo.style.opacity = 0;

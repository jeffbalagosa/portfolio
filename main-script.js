const tagLineArr = [
  '"A problem well stated is a problem half solved." - Charles F. Kettering',
  '"You can’t solve a problem on the same level it was created." - Albert Einstein',
  "'Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.' - Jim Rohn",
  '"Every problem is a gift—without problems we would not grow." - Tony Robbins',
  '"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela',
  '"It’s not that I’m so smart, it’s just that I stay with problems longer." - Albert Einstein',
  '"A problem is a chance for you to do your best." - Duke Ellington',
  "'You can't find solutions by focusing on the problems.' - Zig Ziglar",
  '"The only way to do great work is to love what you do." - Steve Jobs',
  '"The best way to find a solution is to think outside the box." - Stephen Covey',
  '"The fixed mindset is the belief that your basic qualities are fixed traits. The growth mindset is the belief that you can develop through effort." - Carol S. Dweck',
  "'Believe you can and you're halfway there. - Theodore Roosevelt'",
  '"Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill',
  '"The only way to do great work is to love what you do." - Steve Jobs',
  '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
  '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
  '"If you want to live a happy life, tie it to a goal, not to people or things." - Albert Einstein',
  '"Life is 10% what happens to us and 90% how we react to it." - Charles R. Swindoll',
  '"Successful people are not gifted; they just work hard, then succeed on purpose." - G.K. Nielson',
  '"You miss 100% of the shots you don’t take." - Wayne Gretzky',
  '"Discipline is the bridge between goals and accomplishment." - Jim Rohn',
  '"Success is not possible without discipline." - Ray Dalio',
  '"The price of discipline is always less than the pain of regret." - Nathan W. Morris',
  '"He who lives without discipline dies without honor." - Icelandic Proverb',
  '"The only discipline that lasts is self-discipline." - Bum Phillips',
  '"Discipline is just choosing between what you want now and what you want most." - Unknown',
  '"Discipline is the foundation of a successful life." - Brian Tracy',
  '"Discipline is the soul of an army." - Napoleon Bonaparte',
  '"Discipline is the mother of success." - Napolean Hill',
  '"Discipline is the backbone of character." - John Wooden',
];

const headerContainer = document.getElementById("header-container");
const headerTagLine = document.getElementById("header-tagline");

function tagLineRandomizer() {
  let tagLine = chance.pickone(tagLineArr);
  console.log(tagLine);
  headerTagLine.innerHTML = tagLine;
}

headerContainer.onclick = tagLineRandomizer;

setInterval(tagLineRandomizer, 5000);

// scroll animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((e) => observer.observe(e));

// stagger the animation for each card
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  // Set the transition-delay (in milliseconds)
  card.style.transitionDelay = `${index * 200}ms`;
});

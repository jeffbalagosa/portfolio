const tagLineArr = [
  "Is A Brazilian Jiu Jitsu Blackbelt (Est. 2020)",
  "Is a Practicing Stoic",
  "Has Trained With UFC Champions",
  "Loves His Dog, Wife, And 2 Kids  ...sometimes in that order.",
  "Spends Too Much Time On Video Games",
  "Is Passionate About Technology And Engineering",
  "Is A Martial Arts Instructor",
  "Drinks Too Much Caffiene",
  "Spent Most Of His Adult Life Working In Tech",
  "Always Needs More Sleep",
  "Meditates Daily",
  "Believes Discipline Is True Freedom",
  "Is Always Learning",
  "Is Reads 1 to 2 Books A Month",
  "Is Among The Most Consistent People You'll Meet",
  "Loves Problem Solving",
  "Loves Taking On Fun Challenges",
  "Develops A Lot Of His Own Automations",
  "Loves Logic And Procedural Puzzles",
  "Loves Discovering New Ways To Automate His Life",
  "Has Peer Reviewed Other People's Code",
  "Approaches Coding As A Discipline, Similar To martial Arts",
];

const headerContainer = document.getElementById("header-container");
const headerTagLine = document.getElementById("header-tagline");

function tagLineRandomizer() {
  let tagLine = chance.pickone(tagLineArr);
  console.log(tagLine);
  headerTagLine.innerHTML = tagLine;
}

function setProgressBar(id, percentage) {
  document.getElementById(id).style.width = percentage + "%";
}

headerContainer.onclick = tagLineRandomizer;

setInterval(tagLineRandomizer, 5000);

setProgressBar("javascript", 80);
setProgressBar("python", 70);
setProgressBar("react", 45);

const tagLineArr = [
  "Is A Brazilian Jiu Jitsu Blackbelt (Est. 2020)",
  "Is a practicing stoic.",
  "Has Trained With UFC Champions",
  "Loves His Wife And 2 Kids",
  "Spends Too Much Time On Video Games",
  "Is Passionate About Technology And Engineering",
  "Is A Martial Arts Instructor",
  "Is A Disciple Of Stoic Philosophy",
  "Drinks Too Much Caffiene",
  "Spent Most Of His Adult Life Working In Tech",
  "Always Needs More Sleep",
  "Meditates Daily",
  "Believes Discipline Is True Freedom",
];

const headerContainer = document.getElementById("header-container");
const headerTagLine = document.getElementById("header-tagline");
console.log(chance.pickone(tagLineArr));

headerContainer.onclick = function () {
  let tagLine = chance.pickone(tagLineArr);
  console.log(tagLine);
  headerTagLine.innerHTML = tagLine;
};

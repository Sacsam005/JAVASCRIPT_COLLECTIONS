// array of objects which contains information about the candidates
const data = [
  {
    name: "sam doe",
    age: 23,
    city: "Dallas",
    language: "Python",
    framework: "django",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
  },
  {
    name: "john doe",
    age: 43,
    city: "Austin",
    language: "C-sharp",
    framework: "C-sharp",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    name: "Meave doe",
    age: 33,
    city: "Irving",
    language: "C++",
    framework: "VS code",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Ran doe",
    age: 43,
    city: "Houston",
    language: "Javascript",
    framework: "ReactJS",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
  },
];

// CV iterator

function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const candidates = cvIterator(data);

nextCV();
// button listener for next button
// array of objects which contains information about the candidates
const data = [
  {
    name: "sam doe",
    age: 23,
    city: "Dallas",
    language: "Python",
    framework: "django",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
  },
  {
    name: "john doe",
    age: 43,
    city: "Austin",
    language: "C-sharp",
    framework: "C-sharp",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    name: "Meave doe",
    age: 33,
    city: "Irving",
    language: "C++",
    framework: "VS code",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Ran doe",
    age: 43,
    city: "Houston",
    language: "Javascript",
    framework: "ReactJS",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
  },
];

// CV iterator

function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++] }
        : { done: true };
    },
  };
}

const candidates = cvIterator(data);

nextCV();
// button listener for next button

const next = document.getElementById("next");

next.addEventListener("click", nextCV);

function nextCV() {
  const currentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  if (currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}' style="box-shadow:5px 5px 5px black">`;

    profile.innerHTML = `<ul class="list-group">
  <li class="list-group-item">Name: ${currentCandidate.name}</li>
  <li class="list-group-item">Age: ${currentCandidate.age} years old</li>
  <li class="list-group-item">City: Lives in ${currentCandidate.city}</li>
  <li class="list-group-item">Language: Proficiency in ${currentCandidate.language}</li>
  <li class="list-group-item">Framework: Preferred framework is ${currentCandidate.framework}</li>
</ul>`;
  } else {
    alert("End of candidate applications");
    window.location.reload();
  }
}

const next = document.getElementById("next");

next.addEventListener("click", nextCV);

function nextCV() {
  const currentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  if (currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;

    profile.innerHTML = `<ul class="list-group">
  <li class="list-group-item">Name: ${currentCandidate.name}</li>
  <li class="list-group-item">Age: ${currentCandidate.age} years old</li>
  <li class="list-group-item">City: Lives in ${currentCandidate.city}</li>
  <li class="list-group-item">Language: Proficiency in ${currentCandidate.language}</li>
  <li class="list-group-item">Framework: Preferred framework is ${currentCandidate.framework}</li>
</ul>`;
  } else {
    alert("End of candidate applications");
    window.location.reload();
  }
}

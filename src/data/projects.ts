import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'carcar',
    title: 'Project Beta (aka CarCar)',
    image: '/img/CarCarLogo.png',
    description: [
      "This is a full-stack application I co-created with another engineer. It's a Car Sales and Service management platform.",
      'The API back-end was developed with the Django Python framework, and the front-end was developed with React. The front end is a single-page application with React Router managing the routes for the different components.',
      'We used a domain-driven design approach to the architecture of the application. The aggregate root is the value object providing foreign keys to the Sales and Service microservices. I was tasked with building the Service microservice from the ground up. It was a fun project to work on, and I learned a lot about REST and React in the process.',
      'You can find more details in the README of the Github repo if you want to know more.',
    ],
    githubUrl: 'https://github.com/jeffbalagosa/CarDealershipPlatform',
  },
  {
    id: 'pick-or-shuffle',
    title: 'Pick or Shuffle',
    image: '/img/pick-or-shuffle.png',
    description: [
      '"Where should I eat lunch today?"',
      '"Who\'s responsible for dinner tonight?"',
      '"How should we order the presentations for today\'s conference?"',
      'Making these types of decisions could be as simple as pasting a list into this app and clicking Pick or Shuffle.',
      'Save yourself the decision fatigue. Give it a try!',
      '(Check out the README on Github for more info.)',
    ],
    liveUrl: '/pick-or-shuffle/index.html',
    githubUrl: 'https://github.com/jeffbalagosa/pick-or-shuffle.git',
  },
  {
    id: 'arithmetic-generator',
    title: 'Arithmetic Generator',
    image: '/img/arithmetic-generator.png',
    description: [
      "This app came out of wanting to build something to help support my daughter's new love for math. It came out better than I hoped, so I wanted to showcase it here. The app generates random addition and subtraction problems.",
      'I gamiefied it by placing a streak counter on the app. The more in a row you got correct, the higher the number grows. It goes back to zero when you submit a wrong answer. She enjoys playing it!',
      '(Check out the README on Github for more info.)',
    ],
    liveUrl: '/arithmetic-generator/index.html',
    githubUrl: 'https://github.com/jeffbalagosa/arithmetic-generator.git',
  },
  {
    id: 'wheel-of-success',
    title: 'Wheel of Success Game',
    image: '/img/wheel-of-success.png',
    description: [
      "Similar to the Wheel of Fortune TV game show, here's a game where you have to guess the phrase. I created this game as a graded project when I studied the Front End Web Developer course provided by Treahouse Tech Degree.",
      "There were three possible grades I could've recieved for this project: Needs Improvement, Meets Expectations, and Exceeds Expectations. All of the project I've completed for that program met their criteria for Exceeds Expectations, including this one.",
      '(Check out the README on Github for more info.)',
    ],
    liveUrl: '/wheel-of-success/index.html',
    githubUrl: 'https://github.com/jeffbalagosa/Unit-6-Project.git',
  },
  {
    id: 'lightbox',
    title: 'Lightbox Photo Viewer',
    image: '/img/light-box-project.png',
    description: [
      "Here's another project I've submitted while I was doing Treehouse's Tech degree. Again, it was scored as exceeds expectations.",
      "There's not really much usage your average person can get from it. But it does demonstrate my ability to incorporate other peoples' code into my own projects. (Plug-ins and jQuery, in this case.) It also shows that I am familiar with using CSS preprocessors like SASS.",
      '(Check out the README on Github for more info.)',
    ],
    liveUrl: '/lightbox/index.html',
    githubUrl: 'https://github.com/jeffbalagosa/Unit-5-Project.git',
  },
  {
    id: 'password-suggestion-tool',
    title: 'Password Suggestion Tool',
    image: '/img/pwd-generator.png',
    description: [
      'I took some inspiration from a web comic (https://xkcd.com/936/) about creating passwords that are easy to remember but hard to guess.',
      'This generator was the result of that. Clicking Get Passwords! generates a list of passwords perfect for your home wifi, email accounts, or whatever you want!',
      '(Check out the README on Github for more info.)',
    ],
    liveUrl: '/pw-gen/index.html',
    githubUrl: 'https://github.com/jeffbalagosa/passwordGeneratorProject.git',
  },
]

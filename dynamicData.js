const speakerData = {
  name:
  [
    'Aaron Montoya',
    'Francesca Rodriguez',
    'Miguel Murgeytio',
    'Juan Egusquiza',
    'Daniel Shiffman',
    'Sergio Mora-Diaz',
  ],
  title:
  [
    'MPS Interactive Telecommunication Program',
    'MPS Interactive Telecommunication Program',
    'Master in Multimedia Creation and Serious Games',
    'Digital Artist, Adobe Resident',
    'NYU Full Time Faculty',
    'Visual Artist',
  ],
  description:
  [
    'Artist and educator in multimedia arts. Currently explores sound electronics.',
    'Is a Peruvian artist, designer and educator whose work lies at the intersection of storytelling and technology.',
    'He has created visual experiences for renowned musical artists such as: Richie Hawtin (UK), among others.',
    'His work is based on the exploration of digital tools for the creation of static and moving images.',
    'Daniel Shiffman is a computer programmer, member of the Board of Directors of the Processing Foundation',
    'His work explores digital technologies and light as mediators between physical spaces, nature and the human body.',
  ],
  picLink:
  [
    'assets/aaron.jpg',
    'assets/francesca.jpg',
    'assets/miguel.jpg',
    'assets/jose.jpg',
    'assets/daniel.jpg',
    'assets/sergio.jpg',
  ],
};
const guests = document.getElementById('guests');
let clicked;
let indexGuest = 2;
const moreButton = document.getElementById('moreButton');
const isButton = window.getComputedStyle(moreButton, null).getPropertyValue('display');
if (isButton === 'none') {
  indexGuest = speakerData.title.length;
  moreButton.classList.add('displayNone');
}
function showGuests(start) {
  for (let i = start; i < indexGuest; i += 1) {
    const article = document.createElement('article');
    article.className = 'speaker dFlex';
    const image = document.createElement('img');
    image.className = 'hAuto w25';
    image.src = speakerData.picLink[i];
    const div = document.createElement('div');
    div.className = 'speakerInfo hAuto';
    const nameH3 = document.createElement('h3');
    nameH3.className = 'textDark fw700 fs16 mBottom10';
    nameH3.innerText = speakerData.name[i];
    const nameH4 = document.createElement('h4');
    nameH4.className = 'orangeColor fs12 fw400 italic';
    nameH4.innerText = speakerData.title[i];
    const divBar = document.createElement('div');
    divBar.className = 'barSpeakerInfo lightColor mBottom10';
    const pInfo = document.createElement('p');
    pInfo.className = 'textDark fs12 fw400';
    pInfo.innerText = speakerData.description[i];

    div.append(nameH3, nameH4, divBar, pInfo);
    article.append(image, div);
    guests.appendChild(article);
  }
}
function showHid() {
  indexGuest = speakerData.title.length;
  showGuests(2);
  moreButton.classList.add('displayNone');
  clicked = true;
}
showGuests(0);
moreButton.addEventListener('click', showHid);

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    indexGuest = speakerData.title.length;
    if (clicked === false) {
      showGuests(2);
      clicked = true;
    }
  }
});

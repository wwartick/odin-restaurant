
export function createHomePage() {

const contentDiv = document.querySelector('#content');
contentDiv.textContent='';

const homeH1 = document.createElement('h1');
const homeImg = document.createElement('img');
const homeP = document.createElement('p');

homeH1.textContent = 'Welcome to the Krusty Krab';
homeImg.src = '../src/patrick.jpg';
homeP.textContent='Krusty Krab? No...this is PATRICK!';
contentDiv.appendChild(homeH1);
contentDiv.appendChild(homeImg);
contentDiv.appendChild(homeP);


}


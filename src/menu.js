export function createMenuPage() {
    
    const contentDiv = document.querySelector('#content');
    contentDiv.textContent='';
    
    const menuH1 = document.createElement('h1');
    const menuImg = document.createElement('img');
    const menuP = document.createElement('p');
    
    menuH1.textContent = 'Going to be really lazy about styling';
    menuImg.src = '../src/patrick.jpg';
    menuP.textContent='im doing front-end practice from other sites. find out more on the about page!';
    contentDiv.appendChild(menuH1);
    contentDiv.appendChild(menuImg);
    contentDiv.appendChild(menuP);
    
    }
export function createAboutPage() {
    
    const contentDiv = document.querySelector('#content');
    contentDiv.textContent='';
    
    const aboutH1 = document.createElement('h1');
    const aboutImg = document.createElement('img');
    const aboutP = document.createElement('p');
    
    aboutH1.textContent = 'A lot of my styling is being done on icodethis and front end helper';
    aboutImg.src = '../src/patrick.jpg';
    aboutP.textContent='I think the front end helper projects will be pushed to git? idk it is my first day doing it tbh';
    contentDiv.appendChild(aboutH1);
    contentDiv.appendChild(aboutImg);
    contentDiv.appendChild(aboutP);
    
    }
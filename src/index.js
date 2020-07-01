import navUI from './navUI.js';
import staticPages from './linkContent.js';

function restaurant() {
  // get the container
  const container = document.getElementById('content');
  container.classList.add('wrapper-overall');
  const opacity = document.createElement('div');
  opacity.classList.add('opacity');

  const contentWrapper = document.createElement('div');
  contentWrapper.setAttribute('class', 'content-wrapper');

  // navigation bar
  opacity.appendChild(navUI());

  // content
  contentWrapper.appendChild(staticPages.home());
  contentWrapper.appendChild(staticPages.about());
  contentWrapper.appendChild(staticPages.menu());

  // footer

  // appending all the children to the container
  opacity.appendChild(contentWrapper);
  container.appendChild(opacity);
}

restaurant();

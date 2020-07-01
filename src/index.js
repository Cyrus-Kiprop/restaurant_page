// eslint-disable-next-line import/extensions
import navUI from './navUI.js';
// eslint-disable-next-line import/extensions
import staticPages from './linkContent.js';
// eslint-disable-next-line import/extensions
import footer from './footer.js';

function restaurant() {
  const container = document.getElementById('content');
  container.classList.add('wrapper-overall');
  const opacity = document.createElement('div');
  opacity.classList.add('opacity');

  const contentWrapper = document.createElement('div');
  contentWrapper.setAttribute('class', 'content-wrapper');

  opacity.appendChild(navUI());

  contentWrapper.appendChild(staticPages.home());
  contentWrapper.appendChild(staticPages.about());
  contentWrapper.appendChild(staticPages.menu());

  opacity.appendChild(contentWrapper);
  opacity.appendChild(footer());
  container.appendChild(opacity);
}

restaurant();

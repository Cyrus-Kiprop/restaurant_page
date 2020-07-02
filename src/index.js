import navUI from './navUI';
import staticPages from './linkContent';
import footer from './footer';

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

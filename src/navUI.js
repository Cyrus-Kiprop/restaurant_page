import navItems from './navItems.js';

const utils = (function navPageUtils() {
  const createElem = (element, classList) => {
    const elementCreated = document.createElement(element);
    elementCreated.setAttribute('class', classList);
    return elementCreated;
  };

  const navWrapper = () => {
    return createElem('div', 'navbar navbar-dark');
  };

  const logo = () => {
    const logo = createElem('a', 'nav-logo logo');
    logo.setAttribute('src', '#');

    const img = createElem('img', 'nav-logo logo');
    img.setAttribute('src', '../dist/assets/images/restaurant-logo.png');
    logo.appendChild(img);
    return logo;
  };

  return {
    navWrapper,
    logo,
  };
})();

const handleClick = ({ target }) => {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach((item) => {
    item.classList.remove('active');
  });
  target.classList.add('active');

  //  get the content
  const tabContent = document.getElementsByClassName('tab-wrapper');
  Array.from(tabContent).forEach((content) => {
    content.classList.remove('_none');
    content.classList.add('_none');
    const arrContent = Array.from(tabContent);
    if (arrContent.indexOf(content) === Array.from(navItems).indexOf(target)) {
      content.classList.remove('_none');
      content.classList.add('tab-wrapper');
    }
  });
};

function navUI() {
  const navBar = utils.navWrapper();
  navBar.classList.add('nav-container');

  // log
  const logo = utils.logo();
  navBar.appendChild(logo);

  // navitems
  const items = navItems();
  items.forEach((item) => {
    item.addEventListener('click', handleClick);
    navBar.appendChild(item);
  });

  return navBar;
}

export default navUI;

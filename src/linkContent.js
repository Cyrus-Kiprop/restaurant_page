import utils from './util.js';

const content = {
  about:
    '<p>Lorem ipsum doldlfjdslkjdkfjklsdfjlkdsfjor sit amet, consectetur adipiscing elit. Maecenas consequat id velit quis vestibulum. Nam id orci eu urna mollis porttitor. Nunc nisi ante, gravida at velit eu, aliquet sodales dui. Sed laoreet condimentum nisi a egestas</p>',
  home:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat id velit quis vestibulum. Nam idfldjfslfjlksdfjklsfjlskdjfld orci eu urna mollis porttitor. Nunc nisi ante, gravida at velit eu, aliquet sodales dui. Sed laoreet condimentum nisi a egestas</p>',
  menu:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat id velit quis vestibulum. Nam id orci eu urna mollis porttitor. Nunc nisi ante, gravida at velit eu, aliquet sodales dui. Sed laoreet condimentum nisi a egestas</p>',
};

function home() {
  const pageWrapper = new utils.Element('div', 'tab-wrapper').createElem();
  const homeElement = new utils.Element('p').createElem();
  homeElement.innerText = content.home;
  pageWrapper.setAttribute('id', 'home');
  pageWrapper.appendChild(homeElement);
  return pageWrapper;
}

function about() {
  const pageWrapper = new utils.Element(
    'div',
    'tab-wrapper _none'
  ).createElem();
  const aboutElement = new utils.Element('p').createElem();
  aboutElement.innerText = content.about;
  pageWrapper.setAttribute('id', 'about');
  pageWrapper.appendChild(aboutElement);
  return pageWrapper;
}

function menu() {
  const pageWrapper = new utils.Element(
    'div',
    ' _none tab-wrapper'
  ).createElem();
  const menuElement = new utils.Element('p').createElem();
  menuElement.innerText = content.menu;
  pageWrapper.setAttribute('id', 'menu');
  pageWrapper.appendChild(menuElement);
  return pageWrapper;
}

const staticPages = {
  home,
  about,
  menu,
};

export default staticPages;

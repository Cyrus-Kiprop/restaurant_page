// eslint-disable-next-line import/extensions
import utils from './util.js';

const content = {
  about:
    'Welcome to the Tremont Template. To get started, watch these short videos on Squarespace basics and read the template guide. This Text Block is perfect for generating visitor interest by going into more detail about yourself, your project, or company. You can talk about how your idea started, how long you’ve been working on it and why it’s important. The more specific you are, the more visitors can engage with what you do.You can also use this space to answer any questions your visitors may have about you or your work. To get them interested in clicking the Button Block below, you can talk about your creative process, what sets your idea apart, and how happy you are to share it. Learn more about blocks here. Also, be sure to edit the button’s URL so it links to a page on your site.',
  home:
    'The History of Kitchens and Cooks gives further intimation on Mr Boulanger usual menu, stating confidently that "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables". Numerous commentators have also referred to the supposed restaurant owner\'s eccentric habit of touting for custom outside his establishment, dressed in aristocratic fashion and brandishing a sword',

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

const menus = [
  {
    descCont: 'Sed quia non numquam eius modi tempora',
    name: 'Toro pie',
    priceCont: '$23',
  },
  {
    descCont: 'Fingerlings Potatoes, Ossetra Cavier',
    name: 'Chocolate Brownie',
    priceCont: '$23',
  },
  {
    descCont: 'Sed quia non numquam eius modi tempora',
    name: 'Bana Cream',
    priceCont: '$67',
  },
  {
    descCont: 'Sed quia non numquam eius modi tempora',
    name: 'Wild Berry',
    priceCont: '$211',
  },
];

function menu() {
  const pageWrapper = new utils.Element(
    'div',
    ' _none tab-wrapper'
  ).createElem();

  const menuWrapper = new utils.Element('div', 'menu-wrapper').createElem();

  menus.forEach((menu) => {
    const menuItem = new utils.Element('div', 'menu-item').createElem();

    const { name, priceCont, descCont } = menu;
    const dots = new utils.Element('span', 'dots').createElem();
    dots.innerHTML = '.....................';
    const price = new utils.Element('span', 'price').createElem();
    price.innerHTML = priceCont;
    const delicacyName = new utils.Element('span', 'delicacy').createElem();
    delicacyName.innerHTML = name;
    const desc = new utils.Element('div', 'desc').createElem();
    desc.innerHTML = descCont;

    const div = new utils.Element('div', 'first-section').createElem();

    div.appendChild(delicacyName);
    div.appendChild(dots);
    div.appendChild(price);
    menuItem.appendChild(div);
    menuItem.appendChild(desc);

    menuWrapper.appendChild(menuItem);
  });

  pageWrapper.setAttribute('id', 'menu');
  pageWrapper.appendChild(menuWrapper);
  return pageWrapper;
}

const staticPages = {
  home,
  about,
  menu,
};

export default staticPages;

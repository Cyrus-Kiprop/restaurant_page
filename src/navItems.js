import utils from './util';

export default function navItems() {
  const items = [];
  ['home', 'about', 'menu'].forEach((item) => {
    const navLink = new utils.Element('a', 'nav-item');
    const link = navLink.createElem();
    link.innerText = item;
    items.push(link);
  });

  return items;
}

import utils from './util.js';

const FooterUtils = (function FooterUtils() {
  const ourTwitter = () => {
    const twitter = new utils.Element('div', 'footer-item').createElem();
    // twitter content

    const h1 = new utils.Element('h1', 'twitter-header').createElem();
    const hText = document.createTextNode('our twitter');
    h1.appendChild(hText);

    const p = new utils.Element('p', 'twitter-content').createElem();
    const pText = document.createTextNode(
      'About 3o day ago, I was looking at check out our Restabook, and I decided to build one. Restaurant Cafe / Restaurant / Pub Temp'
    );
    p.appendChild(pText);

    const anchor = new utils.Element('a', 'twitter-handle').createElem();
    anchor.setAttribute('href', 'https://twitter.com/kipropJS');
    const spText = document.createTextNode('@kipropJS');
    anchor.appendChild(spText);

    twitter.appendChild(h1);
    twitter.appendChild(p);
    twitter.appendChild(anchor);

    return twitter;
  };

  const copyRight = () => {
    const wrapper = new utils.Element('div', 'copy-right').createElem();
    const copy = new utils.Element('span', 'date').createElem();
    copy.innerHTML = '@Cyrus 2020';
    const reserved = new utils.Element('span', '').createElem();
    reserved.innerHTML = 'All rights reserved.';

    wrapper.appendChild(copy);
    wrapper.appendChild(reserved);
    return wrapper;
  };

  const footerLinks = function footerLinks() {
    const wrapper = new utils.Element('div', 'footer-links').createElem();
    const facebook = new utils.Element('a', 'links').createElem();
    facebook.appendChild(new utils.Element('i', 'fab fa-github').createElem());
    const twitter = new utils.Element('a', 'links').createElem();
    const tumblr = new utils.Element('a', 'links').createElem();
    const github = new utils.Element('a', 'links').createElem();

    wrapper.appendChild(facebook);
    wrapper.appendChild(twitter);
    wrapper.appendChild(tumblr);
    wrapper.appendChild(github);

    return wrapper;
  };
  const footerItems = function footerItems() {
    const wrapper = new utils.Element('div', 'footer-item').createElem();
    wrapper.appendChild(copyRight());
    return wrapper;
  };

  return {
    footerItems,
    footerLinks,
  };
})();

function Footer() {
  const footerWrapper = new utils.Element('div', 'footer-wrapper').createElem();

  footerWrapper.appendChild(FooterUtils.footerItems());
  footerWrapper.appendChild(FooterUtils.footerLinks());

  return footerWrapper;
}

export default Footer;

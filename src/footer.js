import utils from './util';

const FooterUtils = (function FooterUtils() {
  const copyRight = () => {
    const wrapper = new utils.Element('div', 'copy-right').createElem();
    const copy = new utils.Element('span', 'date').createElem();
    copy.innerHTML = '@Cyrus 2020';
    const reserved = new utils.Element('span', 'reserved').createElem();
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

  const top = () => {
    const span = new utils.Element('span', 'top').createElem();
    span.innerHTML = 'Back To Top';
    return span;
  };

  const footerItems = function footerItems() {
    const wrapper = new utils.Element('div', 'footer-item').createElem();
    wrapper.appendChild(copyRight());
    return wrapper;
  };

  return {
    footerItems,
    footerLinks,
    top,
  };
})();

function Footer() {
  const footerWrapper = new utils.Element('div', 'footer-wrapper').createElem();

  footerWrapper.appendChild(FooterUtils.footerItems());
  footerWrapper.appendChild(FooterUtils.footerLinks());
  footerWrapper.appendChild(FooterUtils.top());

  return footerWrapper;
}

export default Footer;

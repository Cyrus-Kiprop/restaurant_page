function Element(element, classList = '') {
  this.element = element;
  this.classList = classList;
}

Element.prototype.createElem = function createElem() {
  const createdElement = document.createElement(this.element);
  createdElement.setAttribute('class', this.classList);
  return createdElement;
};

Element.prototype.addText = function addText(textContent) {
  const text = document.createTextNode(textContent);
  return this.appendchild(text);
};

const utils = {
  Element,
};

export default utils;

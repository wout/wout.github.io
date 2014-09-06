function SVG(width, height) {
    SVG_NAMESPACE_URI = 'http://www.w3.org/2000/svg';
    this.root = document.createElementNS(SVG_NAMESPACE_URI, 'svg');
    this.root.setAttributeNS(SVG_NAMESPACE_URI, 'width', width);
    this.root.setAttributeNS(SVG_NAMESPACE_URI, 'height', height);
}

SVG.prototype.rect = function (width, height) {
    var rect = document.createElementNS(SVG_NAMESPACE_URI, 'rect');
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    this.root.appendChild(rect);
};

function Shape() {

}

Shape.prototype.fill = function () {

}

var svg = new SVG(300, 320);
var r = svg.rect(200, 300);

document.body.appendChild(svg.root);
console.log(svg);
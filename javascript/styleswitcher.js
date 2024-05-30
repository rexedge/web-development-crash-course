const styleLinkElement = document.getElementById('style-link')
const currentStyles = styleLinkElement.getAttribute('href')

const allStyles = [
     { name: 'default', href: 'styles.css' },
     { name: 'digital', href: 'digital-style.css' },
]

function switchStylesNull() {
     styleLinkElement.setAttribute('href', '');
}
function switchStylesDefault() {
     styleLinkElement.setAttribute('href', allStyles[0].href);
}
function switchStylesDigital() {
     styleLinkElement.setAttribute('href', allStyles[1].href);
}



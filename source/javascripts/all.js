function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function removeChars(text) {
  return text.toString()
    .toLowerCase()
    .replace(/[_-]/g, ' ');
}

function humanize(text) {
  var cleanText = removeChars(text);
  var capArray = cleanText.split(' ').map(function(word) {
    return capitalize(word);
  }) 
  return capArray.join(' ');
}
function getSubDomain() {
  return window.location.host.split('.')[0];
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.onload = function () {
  var subdomain = getSubDomain();
  var formattedText = humanize(subdomain);
  var p = document.querySelector('#userContent');
  p.innerHTML = formattedText + ' enjoys Pizza!';
}

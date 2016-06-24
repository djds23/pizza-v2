function humanize(text) {
  var cleanText =  text.toString()
    .toLowerCase()
    .replace(/[_-]/g, ' ');
  var firstLetter = cleanText[0].toUpperCase();
  return firstLetter + cleanText.slice(1);
    //.replace(/(?:^|\s)\S/g, function(firstLetter) {
    //  return firstLetter.toUpperCase();
    // });
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

function renderHTML(array, jsnode) {
  var string = '';
  for( var i = 0; i < array.length; i++) {
    array[i].id = i;
    string += array[i].toHTML();
  }
  jsnode.html(string);
  return string;
}

function renderHTMLfavorite(array, jsnode) {
  var string = '';
  for( var i = 0; i < array.length; i++) {
    if(array[i].favorites) {
      string += array[i].toHTML();
    }  
  }
  jsnode.html(string);
  return string;
}

function Contact(options) {
  this.name =        options.name;
  this.twitter =     options.twitter;
  this.email =       options.email;
  this.phone =       options.phone;
  this.address =     options.address;
  this.favorites =   false;
  this.id =          0;
}
Contact.prototype.toHTML = function() {
  var htmlString = '<tr>';
  htmlString += '<td class="table__data table__data--color">';
  htmlString += '<span class="margin-right user-image"></span>'+this.name+'</td>';
  htmlString += '<td class="table__data">';
  htmlString += '<span class="margin-right icon-twitter icon-twitter--color icon-twitter--size"></span>';
  htmlString += this.twitter+'</td>';
  htmlString += '<td class="table__data">';
  htmlString += '<span class="margin-right icon-email icon-email--color icon-email--size"></span>';
  htmlString += this.email+'</td>';
  htmlString += '<td class="table__data">';
  htmlString += '<span class="margin-right icon-phone icon-phone--color icon-phone--size"></span>';
  htmlString += this.phone+'</td>';
  htmlString += '<td class="table__data">';
  htmlString += '<a data-index="'+this.id+'" href="#" class="js-favorite-btn"><span class="margin-right icon-star icon-star--size';
  if(this.favorites) {
    htmlString += ' icon-star--favorite"></span></a></td>';
  }else{
    htmlString += ' icon-star--color"></span></a></td>';
  }
  htmlString += '</tr>';
  return htmlString;
}



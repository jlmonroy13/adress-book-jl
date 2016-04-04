function createContact(event, contacts) {
  var $modal =            $('.js-modal'),
      $name =             $modal.find('.js-name'),
      $twitter =          $modal.find('.js-twitter'),
      $email =            $modal.find('.js-email'),
      $phone =            $modal.find('.js-phone'),
      $address =          $modal.find('.js-address'),

      nameValue =             $name.val(),
      twitterValue =          $twitter.val(),
      emailValue =            $email.val(),
      phoneValue =            $phone.val(),
      addressValue =          $address.val(),
      contact =               {};
      
  if(nameValue !='' && twitterValue !='' && emailValue  !='' && phoneValue !='' && addressValue!=''){
    event.preventDefault();
    location.href ='#';
    contact = {
      name: nameValue,
      twitter: twitterValue,
      email: emailValue,
      phone: phoneValue,
      address: addressValue,
    }
    $name.val("");
    $twitter.val("");
    $email.val("");
    $phone.val("");
    $address.val("");

    //Creating string contact to render to html
    (function stringContact(contact) {
      htmlString=   '<tr class="js-row">';
      htmlString += '<td class="table__data table__data--color">';
      htmlString += '<span class="margin-right user-image"></span>'+contact.name+'</td>';
      htmlString += '<td class="table__data">';
      htmlString += '<span class="margin-right icon-twitter icon-twitter--color icon-twitter--size"></span>';
      htmlString += contact.twitter+'</td>';
      htmlString += '<td class="table__data">';
      htmlString += '<span class="margin-right icon-email icon-email--color icon-email--size"></span>';
      htmlString += contact.email+'</td>';
      htmlString += '<td class="table__data">';
      htmlString += '<span class="margin-right icon-phone icon-phone--color icon-phone--size"></span>';
      htmlString += contact.phone+'</td>';
      htmlString += '<td class="table__data">';
      htmlString += '<a href="#" class="js-favorite-btn"><span class="margin-right icon-star icon-star--size';
      htmlString += ' icon-star--color"></span></a></td>';
      htmlString += '</tr>';
      contact.$node = $(htmlString);
    })(contact);

    //ADD TO FAVORITE FUNCTION 
    (function favoriteContact() {
      var $favoriteButton = contact.$node.find('.js-favorite-btn');
      var index;
      $favoriteButton.click(function() {
        var $starIcon = $(this).find('.icon-star');
        if($starIcon.hasClass('icon-star--color')) {
          $starIcon.removeClass('icon-star--color');
          $starIcon.addClass('icon-star--favorite');
          $('.js-favoriteslist').append(contact.$node);
        }else {
          $starIcon.removeClass('icon-star--favorite');
          $starIcon.addClass('icon-star--color');
          $('.js-contactslist').append(contact.$node);
        }
        index = contacts.indexOf(contact);
        console.log(contacts);
      });
    })();

    //ADD CONTACT TO "TODOS LIST"
    $('.js-contactslist').append(contact.$node);

    //ADD CONTACTS TO ARRAY
    contacts.unshift(contact);
    console.log(contacts);
  }
}










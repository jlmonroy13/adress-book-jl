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
      //Handlebars
      var template = Handlebars.compile($('#contact-template').html());
    (function stringContact(contact) {
      contact.$node = $(template(contact));
    })(contact);

    //Clone contact and add it to the object
    (function cloneContact(contact) {
      contact.$clone = contact.$node.clone(true);
      contact.$clone.find('.icon-star').removeClass('icon-star--color').addClass('icon-star--favorite');
      contact.$clone.addClass('js-row-favorite');
    })(contact);

    //ADD TO FAVORITE FUNCTION 
    (function favoriteContact() {
      var $favoriteButtonAll = contact.$node.find('.js-favorite-btn');
      var $favoriteButton = contact.$clone.find('.js-favorite-btn');
      //When you click favorite button in all contacts list
      $favoriteButtonAll.click(function() {
        var $starIconfavorite = contact.$clone.find('.icon-star');
        var $starIcon = $(this).find('.icon-star');
        if($starIcon.hasClass('icon-star--color')) {
          $starIcon.removeClass('icon-star--color').addClass('icon-star--favorite');
          contact.$clone.appendTo('.js-favoriteslist');
        }else {
          $starIcon.removeClass('icon-star--favorite').addClass('icon-star--color');
          contact.$clone.remove();
        }
        //When you click favorite button in favorite contacts list
        $favoriteButton.click(function() {
          contact.$node.find('.icon-star').removeClass('icon-star--favorite').addClass('icon-star--color');
          $(this).parents('.js-row').remove();
        });
      });
    })();

    //ADD CONTACT TO "ALL CONTACTS LIST"
    $('.js-contactslist').append(contact.$node);

    //ADD CONTACTS TO ARRAY
    contacts.unshift(contact);
    console.log(contacts);
  }
}










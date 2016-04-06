function createContact(contact) {

  //Creating string contact to render to html
    //Handlebars
    var template = Handlebars.compile($('#contact-template').html());
  (function stringContact() {
    contact.$node = $(template(contact));
  })();

  //Clone contact and add it to the object
  (function cloneContact() {
    contact.$clone = contact.$node.clone(true);
    contact.$clone.find('.icon-star').removeClass('icon-star--color').addClass('icon-star--favorite');
    contact.$clone.addClass('js-row-favorite');
  })();

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
}










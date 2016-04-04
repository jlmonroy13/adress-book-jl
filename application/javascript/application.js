$(function(){
  var modal = '#modal',
    addModalBtn = '.js-add-contact-btn',
    contactCollection = [],
    $contactlist = $('.js-contactslist'),
    $favoritelist = $('.js-favoriteslist');

  $(addModalBtn).on('click', addModalBtnHandler);

  function addModalBtnHandler(e){
    var newContact = addNewContact(modal);
    newContact.init({
      saveContactHandler: function(contact){
        contactCollection = contactCollection.concat([contact]);
        console.log(contactCollection);
        renderHTML(contactCollection, $contactlist);
      }
    });
  }
  // FAVORITE BUTTON
  $('.table').on('click', '.js-favorite-btn', function(){
    var index = $(this).data('index');
    if(contactCollection[index].favorites) {
      contactCollection[index].favorites = false;
    }else {
      contactCollection[index].favorites = true;
    }
    addFavorite(contactCollection, $favoritelist, $contactlist);
  });
});
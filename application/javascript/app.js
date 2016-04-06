$(function() {
  var $buttonForm =       $('.js-form-btn'),
  $modal =                $('.js-modal'),
  $name =                 $modal.find('.js-name'),
  $twitter =              $modal.find('.js-twitter'),
  $email =                $modal.find('.js-email'),
  $phone =                $modal.find('.js-phone'),
  $address =              $modal.find('.js-address'),
  contact =               {},
  contacts =               [];

  $buttonForm.click(function newContact(event) {
    var nameValue =             $name.val(),
    twitterValue =          $twitter.val(),
    emailValue =            $email.val(),
    phoneValue =            $phone.val(),
    addressValue =          $address.val(),
    fieldValue;
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

      contacts.unshift(contact);
      console.log(contacts);
      fieldValue = JSON.stringify(contacts);
      localStorage.setItem('contact', fieldValue);

      createContact(contact);
    }  
  });

  (function load() {
    var storedValue = localStorage.getItem('contact');
    var object = JSON.parse(storedValue);
    console.log(object);
    $.each(object, function(i, contact) {
      console.log(contact);
      createContact(contact);
    })
  })();
});
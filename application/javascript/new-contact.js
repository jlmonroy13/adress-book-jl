var addNewContact = function(modal){
  var $modal = $(modal);
  var newContact = {};
  var saveContactHandler = function(){};
  var $name =             $modal.find('.js-name');
  var $twitter =          $modal.find('.js-twitter');
  var $email =            $modal.find('.js-email');
  var $phone =            $modal.find('.js-phone');
  var $address =          $modal.find('.js-address');
  var $buttonForm =       $modal.find('.js-form-btn');

  function init(options){
    saveContactHandler = options.saveContactHandler || function(){};
    addEvents();
  }

  function addEvents(){
    $buttonForm.on('click', saveContact);
  }

  function saveContact(){  
    var nameValue = $name.val(),
        twitterValue = $twitter.val(),
        emailValue = $email.val() ,
        phoneValue = $phone.val(),
        addressValue = $address.val(),
        values = {};
    if(nameValue !='' && twitterValue !='' && emailValue  !='' && phoneValue !='' && addressValue!=''){
      location.href ='#';
      values = {
        name: nameValue,
        twitter: twitterValue,
        email: emailValue,
        phone: phoneValue,
        address: addressValue,
      }
      newContact = new Contact(values);
      saveContactHandler(newContact);
      $name.val("");
      $twitter.val("");
      $email.val("");
      $phone.val("");
      $address.val("");
    }
  }
  return {
    init: init
  }
};
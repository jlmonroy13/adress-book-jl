$(function() {
  var $buttonForm =       $('.js-form-btn'),
  contacts=               [];
  $buttonForm.click(function newContact(event) {
    createContact(event, contacts);
  });
});
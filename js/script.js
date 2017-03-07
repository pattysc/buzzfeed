$("a[href^='#']").on('click', function(event) {
  event.preventDefault()  //click blink
  var hash = this.hash  //hash = #aboutMe
  console.log($(this.hash).offset().top);
  $('html body').animate({
      scrollTop: $(this.hash).offset().top
  }, 750, function () {
      window.location.hash = hash;
  });
});

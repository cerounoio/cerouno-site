$('.teachers .slider__avatar').click(function(){
  var currentSlider = $(this),
      image = currentSlider.data('avatar'),
      name = currentSlider.data('name'),
      info = currentSlider.data('info'),
      quoteStrong = currentSlider.data('quote-strong'),
      github = currentSlider.data('github'),
      twitter = currentSlider.data('twitter'),
      quote = currentSlider.data('quote');


  $('.teachers .slider__quote').text(quote);
  $('.teachers .slider__name').text(name);
  $('.teachers .slider__subtitle').text(info);
  $('.teachers .slider__quote-strong').text(quoteStrong);
  $('.teachers .slider__icons .github').attr('src', github);
  $('.teachers .slider__icons .twitter').attr('src', twitter);
  $('.teachers .slider__image').attr('style', 'background-image: url(assets/' + image + ');')
})

$('.team .slider__avatar').click(function(){
  var currentSlider = $(this),
      image = currentSlider.data('avatar'),
      quoteStrong = currentSlider.data('quote-strong'),
      github = currentSlider.data('github'),
      twitter = currentSlider.data('twitter'),
      quote = currentSlider.data('quote');


  $('.team .slider__quote').text(quote);
  $('.team .slider__quote-strong').text(quoteStrong);
  $('.team .slider__icons .github').attr('src', github);
  $('.team .slider__icons .twitter').attr('src', twitter);
  $('.team .slider__image').attr('style', 'background-image: url(assets/' + image + ');')
})

$('.program-mentors .teachers .slider__avatar').click(function(){
  var currentSlider = $(this),
      image = currentSlider.data('avatar'),
      name = currentSlider.data('name'),
      info = currentSlider.data('info'),
      bio = currentSlider.data('bio'),
      github = currentSlider.data('github'),
      twitter = currentSlider.data('twitter'),
      quote = currentSlider.data('quote');


  $('.teachers .slider__quote').text(quote);
  $('.teachers .slider__name').text(name);
  $('.teachers .slider__subtitle').text(info);
  $('.teachers .slider__bio').text(bio);
  $('.teachers .slider__icons .github').attr('src', github);
  $('.teachers .slider__icons .twitter').attr('src', twitter);
  $('.teachers .slider__image').attr('style', 'background-image: url(assets/' + image + ');')
})
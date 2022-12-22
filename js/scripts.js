

$('.food__btn').click(function(){

  $(this).next( ".instructions" ).slideToggle('slow');
});




$('.close').click(function(){

  $(this).parent().slideToggle('slow');
});



$('.blend').click(function(){

  $(this).parent().slideToggle('slow');
});

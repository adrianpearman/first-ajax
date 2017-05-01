$(document).ready(function () {

  /* Your code goes here */
  $('button#step2').on('click', function(){
    console.log("hello");
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com',
      method: 'GET',
      // data: '',
      dataType: 'text'
    });
    console.log("fuck");
  });

  $('button#step3').on('click', function(){
    console.log('hmmmmm');
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      // data: ,
      dataType: 'text'
    }).done(function(responseData){
      $('section').append(responseData);
    });
  });

  $('button#step4').on('click', function(){
    console.log('hmmmmm');
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      // data: ,
      dataType: 'text'
    }).fail(function(responseData){
      $('section#step3456').append('Error: I\'ll try harder next time.');
    });
  });

  $('button#step5').on('click', function(){
    console.log('hmmmmm');
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      // data: ,
      dataType: 'text'
    }).always(function(responseData){
      console.log("Hey the request finished!");
    });
  });

  $('button#step61').on('click', function(){
    console.log('hmmmmm');
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      // data: ,
      dataType: 'text'
    }).done(function(responseData){
      $('section#step3456').append(responseData);
    }).fail(function(){
      $('section#step3456').append('Error: I\'ll try harder next time.');
    }).always(function(){
      console.log("Hey the request finished!");
    });
  });

  $('button#step62').on('click', function(){
    console.log('hmmmmm');
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      // data: ,
      dataType: 'text'
    }).done(function(responseData){
      $('section#step3456').append(responseData);
    }).fail(function(){
      $('section#step3456').append('Error: I\'ll try harder next time.');
    }).always(function(){
      console.log("Hey the request finished!");
    });
  });

  $('button#step7').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      // data: ,
      dataType: 'text',
    }).done(function(responseData){
      $('section#step7').append(responseData);
    });
  });

  $('button#step8').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone: 'Europe/Sofia'},
      dataType: 'text'
    }).done(function(responseData){
      $('section#step8').append(responseData)
    });
  });
});

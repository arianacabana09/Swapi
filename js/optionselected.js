'use strict';

function selected(e){
  showMember($('#select').find(":selected").val())
}

function showMember(people){
  $.getJSON('https://swapi.co/api/people/'+people, function(response){
    var member = $('<div></div>');
    var nameMember = $('<p></p>');

    nameMember.text("Hi, my name is"+ response.name);
    member.append(nameMember);
    $('#root').append(member);
    console.log(member);
  });
}

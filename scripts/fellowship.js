console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';

function makeMiddleEarth() {
  // your answers here
  // create a section tag with an id of `middle-earth'
  // append `middle-earth` to your document `body`
  $('body').append(section);
  $('section').prop('id', 'middle-earth');
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   for(i = 0; i < lands.length; i++) {
     $('section').append('<article>' + '<h1 id=City' + i + '>'+ lands[i] + '</h1>' + '</article>');
   }
}

makeMiddleEarth();

function makeHobbits(){
  // your answers here
  // display an `unordered list` of hobbits in the shire
   // (which is the first article tag on the page)
  // give each hobbit a class of `hobbit`
  $('article').first().append('<ul id=hobbitList>' + '</ul>');
  for(i = 0; i < hobbits.length; i++) {
    $('ul').append('<li>' + hobbits[i] + '</li>');
    $('li').prop('class', 'hobbit');
  }
}

makeHobbits();

function keepItSecretKeepItSafe(){
  // your answers here
  // create a div with an id of `'the-ring'`
  var div = $('<div>' + '</div>').prop('id', 'the-ring');
  $(div).text("The Ring");
  // give the div a class of `'magic-imbued-jewelry'`
  $('div').prop('class', 'magic-imbued-jewelry');
  // add the ring as a child of `Frodo`
  $('.hobbit').first().append(div);
}

keepItSecretKeepItSafe();

function makeBuddies(){
  // your answers here
  // create an `aside` tag
  var aside = $('<aside>' + '</aside>');
  aside.prop('id', 'buddies');
  // insert your aside as a child element of `rivendell`
  $('article:nth-child(2)').append(aside);
  // attach an `unordered list` of the `'buddies'` in the aside
  var ul = $('<ul>' + '</ul>').prop('id', 'buddyList');
  (aside).append(ul);
  for(i = 0; i < buddies.length; i++) {
    $(ul).append('<li id= ' + i + '>' + buddies[i] + '</li>');
  }
}

makeBuddies();

function beautifulStranger(){
  // your answers here
  // change the `'Strider'` text to `'Aragorn'`
  $('#3').text("Aragorn");
}

beautifulStranger();

function leaveTheShire(){
  // your answers here
  // assemble the `hobbits` and move them to `rivendell`
  $('.hobbit').appendTo('#City1');
}

leaveTheShire();

function forgeTheFellowship() {
  // your answers here
  // create a new div called `'the-fellowship'` within `rivendell`
  var theFellowship = $('<div>' + 'The Fellowship' + '</div>');
  $('article:nth-child(2)').append(theFellowship)
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they // have joined your party
  fellowshipMembers = $('li');
  for(i = 0; i < fellowshipMembers.length; i++) {
    $(theFellowship).append(fellowshipMembers[i]);
    alert(fellowshipMembers[i].textContent + ' has joined The Fellowship!');
  }
}

forgeTheFellowship();

function theBalrog(){
  // your answers here
  // change the `'Gandalf'` text to `'Gandalf the White'`
  // apply the following style to the element, make the // background 'white', add a grey border
  $('#0').text("Gandalf the White");
  $('#0').css("background-color", "white").css("border", "3px solid grey");
}

theBalrog();

function hornOfGondor() {
  // your answers here
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
  alert('The Horn of Gondor has been blown. Boromir has been killed by the Uruk-hai!');
  var boromir = $("li:contains('Boromir')");
  $(boromir).remove();
}

hornOfGondor();

function itsDangerousToGoAlone() {
  // your answers here
  // take `Frodo` and `Sam` out of the fellowship and move them to `Mordor`
  // add a div with an id of `'mount-doom'` to `Mordor`
  var frodo = $("li:contains('Frodo')");
  var sam = $("li:contains('Sam')");
  $("article:contains('Mordor')").append('<div id=mount-doom>' + '</div');
  $('#City2').append(frodo);
  $('#City2').append(sam);


}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  $("article:contains('Mordor')").append('<div id=gollum class=gollum>' + 'Gollum' + '</div');
  var theRing = $('#the-ring').detach();
  $(theRing).appendTo('#gollum');
  $('#gollum').appendTo('#mount-doom');
}

weWantsIt();

function thereAndBackAgain(){
   // your answers here
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $('#gollum').remove();
   $('.hobbit').appendTo('#hobbitList');
}

thereAndBackAgain();

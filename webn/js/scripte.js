var userArrary = [
  
  {
    name: 'Yan Hong',
    age: 26,
    school: 'SFU',
    skills: ['HTML', 'CSS', 'JavaScript'],
    isPublic: true
  },
  
  {
    name: 'Neo Wang',
    age: 26,
    school: 'UBC',
    skills: ['Python', 'CSS', 'JavaScript'],
    isPublic: true
  },
  
  {
    name: 'Ben Sun',
    age: 30,
    school: 'SFU',
    skills: ['Logo Design', 'VI', 'UIUX', 'Branding'],
    isPublic: false
  },
  
];



// var findUser = function(user, query) {
//      // user.isPremium = user.skills.length > 3;
//      // user.age ++;
//      var cquery = query.toUpperCase();
//      console.log(cquery);
//      var tmp=user.skills;
//      console.log(tmp[0][0]);



//       if (tmp.indexOf(cquery) !== -1) {
//         return user;
//       }


  
//   return false;
       
// }



var findUser = function(user, query) {

  return !query || new RegExp(query,"i").test(user.skills) ? user : false;
       
}



console.log("here")

$('#search-btn').click(function() {

  var query = $('#search').val();
console.log(query)
console.log(query.length)


if (query.length==0){

  $('#user-container').html('');  //clear clean screen

for (var i = 0; i < userArrary.length; i++) {

  

    var currentUser = $('<div>').addClass('user');

    var appendEle = function(tag, attr) {
      $(tag).text(userArrary[i][attr]).appendTo(currentUser);
    }

    appendEle('<h1>', 'name');
    appendEle('<h2>', 'age');
    appendEle('<h2>', 'school');

    var pObj = $('<p>').appendTo(currentUser);

    for (var j = 0; j < userArrary[i].skills.length; j++ ) {
      $('<span>').text(userArrary[i].skills[j]).appendTo(pObj);
    }

    $('#user-container').append(currentUser);

  

}








}


else {


  $('#user-container').html('');



for (var i = 0; i < userArrary.length; i++) {

  if (findUser(userArrary[i], query)) {

    var currentUser = $('<div>').addClass('user');

    var appendEle = function(tag, attr) {
      $(tag).text(userArrary[i][attr]).appendTo(currentUser);
    }

    appendEle('<h1>', 'name');
    appendEle('<h2>', 'age');
    appendEle('<h2>', 'school');

    var pObj = $('<p>').appendTo(currentUser);

    for (var j = 0; j < userArrary[i].skills.length; j++ ) {
      $('<span>').text(userArrary[i].skills[j]).appendTo(pObj);
    }

    $('#user-container').append(currentUser);

  }

}


}   //   else




}  );
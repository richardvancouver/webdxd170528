var userArray = [
  
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



var findCSSuser=function(user){
  
  
    user.isPremium = user.skills.length>3;
  
    user.age++;
    
    if(user.skills.indexOf('CSS')!==-1){
      return user ;

    } 
  
    return false;
}

var findUser=function(user, query){
  
  

    
    if(user.skills.indexOf(query)!==-1){
      return user ;

    } 
  
    return false;
}




console.log(userArray)

for (var i=0; i<userArray.length;i++){

  //if (findCSSuser(userArrayp[i])) {
    //insert data

//     <div class="user">
  
//   <h1>Yan Hong</h1>
//   <h2>26</h2>
//   <h2>SFU</h2>

//   <p>

//   <span>HTML</span>
//   <span>CSS</span>
//   <span>Javascript</span>
//   </p> 

// </div>

  //  console.log(findCSSuser(userArray[i]) );


  //}

  var currentUser=$('<div>').addClass('user');
  console.log("hha");

  // $('<h1>').text(userArray[i].name).appendTo(currentUser);
  // $('<h2>').text(userArray[i].age).appendTo(currentUser);
  // $('<h2>').text(userArray[i].school).appendTo(currentUser);
  // $('<p>').text(userArray[i].skills).appendTo(currentUser);


  // $('#user-container').append(currentUser);





var appendEle = function (tag, attr) {

	$(tag). text(userArray[i][attr]).appendTo(currentUser);
}


appendEle('<h1>','name');
appendEle('<h2>', 'age');
appendEle('<h2>','school');

 var pObj=$('<p>').appendTo(currentUser);
for(var j=0; j<userArray[i].skills.length; j++){
//$('<span>').text(userArray[i].skills[j]).appendTo($('<p>').appendTo(currentUser));

 $('<span>').text(userArray[i].skills[j]).appendTo(pObj);



}


$('#user-container').append(currentUser);

$('#search-btn').click(function(){

console.log($('search').val());


});

}

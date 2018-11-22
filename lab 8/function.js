      //
     //
    //fans js
   //
  //

  let comments = [];
loadComments();

document.getElementById('comment-add').onclick = function(){
      
    let commentBody = document.getElementById('comment-body');

    let comment = {
        
        body : commentBody.value,
        time : Math.floor(Date.now() / 1000)
    }
    if (commentBody.value =='') { alert("Заповніть поле коментаря");} 
    else if (commentBody.value == 0 ) { alert("Коментар не може містити пробіли");} else { 
 
    commentBody.value = '';

    comments.push(comment);
    saveComments();
    showComments();
  
  function isOnline() {
    return window.navigator.onLine;
}

if(!isOnline()){
      var commit = {
        text: document.getElementById('comment-body').value
      }
      comments.push(comment);

      localStorage.setItem("comments",JSON.stringify(comments));

      console.log(comments);
    }
    if(isOnline()){
      console.log("Додається на сервер");
      $('#con').prepend(
      feedback(document.getElementById('comment-body').value, date.toLocaleDateString()
      );
    }
  
  document.getElementById('comment-body').value = '';
}
function addElementToLocalStorage(){
  const date = new Date();
  if(isOnline()){
    for(var i = 0; i < JSON.parse(localStorage.getItem("comments")).length ;i++){
      $('#con').prepend(
          feedback(JSON.parse(localStorage.getItem("comments"))[i].text,
            date.toLocaleDateString())
        );
    }
  }
}

 function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments(){
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments (){
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function(item){
    
		out += `<hr>`;			
        out += `<p>${item.body}</p><br>`;
        out += `<div class="row"><div class="container"><div class="col-xs-6 text-left">${timeConverter(item.time)}</div>`;
        out += `<div class="col-xs-6 text-right" >Runner</div></div></div><br>`;
        out += `<hr>`;
   });
    commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }



      //
     //
    //admin js
   //
  //

 window.onload = function(){ 
function isOnline() {
    return window.navigator.onLine;
}

console.log(isOnline());

var list_news = [];

const text = document.getElementById('text');
const caption = document.getElementById('caption') 
const photo = document.getElementById('formForFile')

const onSubmitPress = function(e){
  e.preventDefault();

  if (text.value.length == 0 && caption.value.length == 0) {
    alert("Невалідна новина") 
    return;
  }
  if(!isOnline()){
    var news = {
      name:caption.value,
      text:text.value,
      photo:photo.files[0].name
    }
    console.log(photo.files[0].name);
     
    list_news.push(news);

    localStorage.setItem("list_news",JSON.stringify(list_news));

    console.log(list_news);
  }else{
    console.log("Додається на сервер");
  }

  alert('Вашу новину успішно збережено!');
  
  text.value=" "; 
  caption.value=" ";
}

function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#example_picture').attr('src', e.target.result);                                                                                
      }                                                            
    

    reader.readAsDataURL(input.files[0]);
  }
}

$("#formForFile").change(function() {
  readURL(this);
});

const addButton = document.getElementById('sub');
addButton.onclick = onSubmitPress;
}

function isOnline() {
    return window.navigator.onLine;
}

const feedback = (name, text,photo) => ` 
    <div class="col-lg-3">
    <img src=${photo} style="height:25%;width: 100%;">
    <h3>${name}</h3>
    <p>${text}</p>
  </div>
`

function addElementNews(){
  if(isOnline()){
    console.log("Виконано");
    for(var i = 0; i < JSON.parse(localStorage.getItem("list_news")).length ;i++){
      $('#news').prepend(
          feedback(JSON.parse(localStorage.getItem("list_news"))[i].name,
            JSON.parse(localStorage.getItem("list_news"))[i].text,
            JSON.parse(localStorage.getItem("list_news"))[i].photo)
        );
    }
  }
}
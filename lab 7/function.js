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


  //admin js
  const getById = id => document.getElementById(id);

const input_form = getById('addPicture');
const newsForm = getById('newsForm')
const text = getById('text');
const caption = getById('caption') 


const fileInput = getById('formForFile')

function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.readAsDataURL(input.files[0]);
  }
}

$("#formForFile").change(function() {
  readURL(this);
});

const addButton = getById('submit-btn');
addButton.onclick = onSubmitPress;

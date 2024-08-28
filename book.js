
var animal_space=document.getElementById("Book")
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=()=>{
       if(xhr.readyState == 4 && xhr.status == 200){
        animal_space.innerHTML = xhr.responseText;
       }
    }
    xhr.open('GET',"https://ansonthomas22.github.io./Lab7_javascript/book.json",true);
    xhr.send();
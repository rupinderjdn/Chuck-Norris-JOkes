document.querySelector('.get-jokes').addEventListener("click",loadJokes);

function loadJokes(e){
    e.preventDefault();
 
    const number = document.querySelector('input[type="number"]').value;
   
    const xhr =new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

    xhr.onload = function(){
        if(this.status === 200){
            const response  = JSON.parse(this.responseText);
            console.log(response.value[0].joke);
            let output='';
            if(response.type==='success'){
                (response.value).forEach(element => {
                    output+=`<li><h6>${element.joke}</h6></li>`
                });
            }
            else{
                output+='<h4>Something went Wrong</h4>'
            }
            document.querySelector("#joke-list").innerHTML=output;
        }
    }
    if(number>=1)xhr.send();
    
}
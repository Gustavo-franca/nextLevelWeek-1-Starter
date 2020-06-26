
 var selectedItems = [];
 const items = document.querySelectorAll('.items li');
 const inputItems =document.querySelector('input[name=items]');
 for(const item of items){
     item.addEventListener('click',handleSelectItem);
 }
 

 function handleSelectItem(event){
     const item = event.target;
    item.classList.toggle('selected');
    if(selectedItems.includes(item.dataset.id)){
        selectedItems = selectedItems.filter(selectedItem => selectedItem != item.dataset.id);
    }else{
        selectedItems.push(item.dataset.id);

    }
    inputItems.value = selectedItems.join(',');
 }

 /* const form = document.querySelector('form');
form.addEventListener('submit',handleSubmitForm);
 function handleSubmitForm(event){

    // event.preventDefault();  
    // var data = {};
    // var data = new FormData();
    // data.append('user', 'person');
    // data.append('pwd', 'password');
    // data.append('organization', 'place');
    // data.append('requiredkey', 'key');

    // var textData = JSON.stringify(data);
    
    // xhr = new XMLHttpRequest();

    // xhr.open('POST','/save-point',true);
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhr.send(data);
    // console.log(data);

    // xhr.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         if(xhr.responseText == true){
    //          //   document.body.innerHTML = "Parabéns você foi logado Com sucesso!";
    //          console.log("logado");
    //         }else{
    //            // document.body.innerHTML += "Senha ou nome de Usuário incorretos!"
    //            console.log("Tente outra vez!");
    //         }
    //     }
    // }

 }

 */
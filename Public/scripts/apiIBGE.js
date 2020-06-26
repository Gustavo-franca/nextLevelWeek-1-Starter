 
 function populateUFs(){
    const ufSelect = document.querySelector('select[name=uf]');
   

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states =>{
        ufSelect.innerHTML = `<option value ="">Selecione uma Estado</option>`;
        for(state of states){
            ufSelect.innerHTML += `<option value ="${state.id}">${state.nome}</option>`
        }
        
    })
 }
 
 function getCities(event){
    const citySelect = document.querySelector('select[name=city]');
    const stateInput = document.querySelector('[name=state]');

    const ufid = event.target.value;

    const indexOfSelectedState = event.target.selectedIndex;

    stateInput.value = event.target.options[indexOfSelectedState].text

    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufid}/municipios` 

    fetch(url)
    .then(res => res.json())
    .then(cities =>{
        citySelect.innerHTML = `<option value ="">Selecione uma Cidade</option>`;
        for(city of cities){
            citySelect.innerHTML += `<option value ="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false;
        
    })
    
    
 }
 populateUFs();
 

 document.querySelector('select[name=uf]')
 .addEventListener('change',getCities);
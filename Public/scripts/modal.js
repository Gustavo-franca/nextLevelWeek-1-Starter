document.querySelector('.link-modal-open').addEventListener('click',handleclickModal);
document.querySelector('.link-modal-close').addEventListener('click',handleclickModal);
function handleclickModal(event){
        event.preventDefault();
        document.querySelector('#modal').classList.toggle('hidden');
}
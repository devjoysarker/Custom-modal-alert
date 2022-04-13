
//  Get Elements

const apply     = document.querySelector('#apply');
const modal     = document.querySelector('.haq-modal');
const modalc    = document.querySelector('.haq-modal .close');
const offfbu    = document.querySelector('#close');
const haq_alert = document.querySelector('.haq-alert')
const h_close   = document.querySelector('.haq-alert .close');
const keep      = document.querySelector('#keep');
const discrad   = document.querySelector('#discard');
apply.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('active');
});
modalc.addEventListener('click', function() {
  haq_alert.style.display = 'flex';
});
h_close.addEventListener('click', function(){
    haq_alert.style.display = 'none';
});
modal.addEventListener('click', function (e) {

    if (e.target == this) {
        modal.classList.remove('active');
    }
});
keep.addEventListener('click', function(){
    haq_alert.style.display = 'none';
});
discrad.addEventListener('click', function(){
    haq_alert.style.display = 'none';
    modal.classList.remove('active');
})
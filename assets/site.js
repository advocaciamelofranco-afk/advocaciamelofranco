(function(){
  var btn=document.querySelector('.menu-btn'),menu=document.getElementById('menu');
  if(btn)btn.addEventListener('click',function(){var o=menu.classList.toggle('aberto');btn.setAttribute('aria-expanded',o);});
  function conv(){
    try{gtag('event','conversion',{send_to:'AW-715325398/EM_1CND57eIcENb_i9UC'});}catch(e){}
    try{gtag('event','clique_whatsapp');}catch(e){}
    try{fbq('track','Contact');}catch(e){}
  }
  document.querySelectorAll('.js-wa').forEach(function(a){a.addEventListener('click',conv);});
  var f=document.querySelector('.js-form');
  if(f)f.addEventListener('submit',function(ev){
    ev.preventDefault();
    var d=new FormData(f),nome=(d.get('nome')||'').trim(),msg=(d.get('msg')||'').trim();
    var erro=f.querySelector('.form-erro');
    if(!nome||!msg){erro.hidden=false;return;}
    erro.hidden=true;
    var t='Olá! Vim pelo site.\nNome: '+nome;
    if(d.get('cidade'))t+='\nCidade/UF: '+d.get('cidade');
    if(d.get('area'))t+='\nAssunto: '+d.get('area');
    t+='\nCaso: '+msg;
    conv();
    try{fbq('track','Lead');}catch(e){}
    window.open('https://wa.me/5508005510109?text='+encodeURIComponent(t),'_blank','noopener');
  });
})();

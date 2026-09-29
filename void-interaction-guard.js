(()=>{
  const bind=()=>{
    const button=document.querySelector('.void-further-button');
    if(!button||button.dataset.cleanupGuard)return;
    button.dataset.cleanupGuard='1';
    let shield=document.querySelector('.void-input-shield');
    if(!shield){shield=document.createElement('div');shield.className='void-input-shield';Object.assign(shield.style,{display:'none',position:'fixed',inset:'0',zIndex:'2147483644',background:'transparent',touchAction:'none',WebkitTapHighlightColor:'transparent'});document.body.appendChild(shield)}
    const swallow=e=>{e.preventDefault();e.stopPropagation();};
    ['pointerdown','pointerup','pointermove','touchstart','touchend','touchmove','mousedown','mouseup','click'].forEach(type=>shield.addEventListener(type,swallow,{passive:false}));
    ['pointerdown','touchstart','mousedown'].forEach(type=>button.addEventListener(type,e=>{e.stopPropagation()},{capture:true,passive:false}));
    const sync=()=>{const active=getComputedStyle(button).display!=='none';shield.style.display=active?'block':'none'};
    new MutationObserver(sync).observe(button,{attributes:true,attributeFilter:['style','class']});
    sync();
  };
  window.HouseVoidInteractionGuard={bind};
})();
(()=>{
  const bind=()=>{
    const button=document.querySelector('.void-further-button');
    if(!button||button.dataset.cleanupGuard)return;
    button.dataset.cleanupGuard='1';
    const own=event=>{event.stopPropagation();};
    ['pointerdown','touchstart','mousedown'].forEach(type=>button.addEventListener(type,own,{capture:true,passive:type==='touchstart'?false:true}));
  };
  window.HouseVoidInteractionGuard={bind};
})();

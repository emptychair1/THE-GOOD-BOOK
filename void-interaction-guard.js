(()=>{
  const bind=()=>{
    const button=document.querySelector('.void-further-button'),book=window.HouseBook;
    if(!button||!book||button.dataset.pageFlipLock)return;
    button.dataset.pageFlipLock='1';button.setAttribute('data-house-interactive','true');
    let locked=false;
    const sync=()=>{
      const visible=getComputedStyle(button).display!=='none';
      if(visible&&!locked){book.lockNavigation?.();locked=true}
      else if(!visible&&locked){book.unlockNavigation?.();locked=false}
      requestAnimationFrame(sync);
    };
    const own=event=>{event.preventDefault();event.stopImmediatePropagation();event.stopPropagation()};
    ['pointerdown','touchstart','mousedown'].forEach(type=>button.addEventListener(type,own,{capture:true,passive:false}));
    button.addEventListener('pointerup',event=>{event.stopPropagation()},{capture:true,passive:false});
    addEventListener('house:page',()=>{if(locked&&getComputedStyle(button).display==='none'){book.unlockNavigation?.();locked=false}});
    requestAnimationFrame(sync);
  };
  window.HouseVoidInteractionGuard={bind};
})();

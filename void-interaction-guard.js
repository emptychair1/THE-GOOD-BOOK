(()=>{
  const bind=()=>{
    const button=document.querySelector('.void-further-button'),actTitle=document.querySelector('.void-act-title'),book=window.HouseBook;
    if(!button||!book||button.dataset.pageFlipLock)return;
    button.dataset.pageFlipLock='1';button.setAttribute('data-house-interactive','true');
    let locked=false,transitionOwnsLock=false,actReadySince=0;
    const lock=()=>{if(!locked){book.lockNavigation?.();locked=true}button.style.pointerEvents='auto'};
    const unlock=()=>{if(locked){book.unlockNavigation?.();locked=false}transitionOwnsLock=false;actReadySince=0};
    const sync=timestamp=>{
      const visible=getComputedStyle(button).display!=='none';
      if(visible){lock();transitionOwnsLock=true;actReadySince=0}
      if(transitionOwnsLock&&!visible&&actTitle?.classList.contains('show')){
        if(!actReadySince)actReadySince=timestamp;
        if(timestamp-actReadySince>=180)unlock();
      }
      requestAnimationFrame(sync);
    };
    requestAnimationFrame(sync);
  };
  window.HouseVoidInteractionGuard={bind};
})();

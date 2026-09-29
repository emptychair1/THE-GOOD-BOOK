(()=>{
  const bind=()=>{
    const button=document.querySelector('.void-further-button'),book=window.HouseBook;
    if(!button||!book||button.dataset.pageFlipLock)return;
    button.dataset.pageFlipLock='1';button.setAttribute('data-house-interactive','true');
    let locked=false,transitionOwnsLock=false;
    const lock=()=>{if(!locked){book.lockNavigation?.();locked=true}button.style.pointerEvents='auto'};
    const unlock=()=>{if(locked){book.unlockNavigation?.();locked=false}transitionOwnsLock=false};
    const sync=()=>{
      const visible=getComputedStyle(button).display!=='none';
      if(visible){lock();transitionOwnsLock=true}
      requestAnimationFrame(sync);
    };
    addEventListener('house:void-act-ready',()=>{if(transitionOwnsLock)unlock()});
    requestAnimationFrame(sync);
  };
  window.HouseVoidInteractionGuard={bind};
})();

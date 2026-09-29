(()=>{
  const bind=()=>{
    const button=document.querySelector('.void-further-button'),book=window.HouseBook;
    if(!button||!book||button.dataset.pageFlipLock)return;
    button.dataset.pageFlipLock='1';button.setAttribute('data-house-interactive','true');
    let locked=false;
    const sync=()=>{
      const visible=getComputedStyle(button).display!=='none';
      if(visible&&!locked){book.lockNavigation?.();button.style.pointerEvents='auto';locked=true}
      else if(!visible&&locked){book.unlockNavigation?.();locked=false}
      requestAnimationFrame(sync);
    };
    requestAnimationFrame(sync);
  };
  window.HouseVoidInteractionGuard={bind};
})();

(()=>{
 const first=document.querySelector('[data-artifact="VESPA_LEAVING_HOME"]');
 if(!first)return;
 let node=first;
 while(node && !(node!==first && node.classList?.contains('act-three-title-page'))){
   const next=node.nextElementSibling;
   node.remove();
   node=next;
 }
})();

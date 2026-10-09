const mockups = { a: 'images/multiple-products-v1.png', b: 'images/single-product-v1.png' };
for (const [id, path] of Object.entries(mockups)) document.querySelector('#' + id + ' img').src = path;
function show(){const hash=location.hash.slice(1);const id=['a','b'].includes(hash)?hash:'finished';document.querySelectorAll('[data-view]').forEach(f=>f.hidden=f.id!==id);document.querySelectorAll('nav a').forEach(a=>{if(a.hash==='#'+id)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});}
const frame=document.querySelector('#email-preview');
function fitHeight(){try{frame.style.height=Math.ceil(frame.contentDocument.body.getBoundingClientRect().height+32)+'px';}catch(e){}}
frame.addEventListener('load',()=>{fitHeight();new ResizeObserver(fitHeight).observe(frame.contentDocument.body);});
document.querySelectorAll('[data-size]').forEach(button=>button.addEventListener('click',()=>{frame.style.width=button.dataset.size+'px';frame.title='Finished ALA VIP email — '+button.textContent.toLowerCase()+' preview';document.querySelectorAll('[data-size]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));requestAnimationFrame(fitHeight);}));
addEventListener('hashchange',show);show();

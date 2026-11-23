const dishes = [
  {name:'Cacık', category:'starter', price:'$9', image:'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=700&q=85', short:'Cool yogurt, cucumber, mint, and olive oil.', story:'A village-table classic made fresh every morning with thick yogurt, crisp cucumber, dried mint, and the finest olive oil.'},
  {name:'Haydari', category:'starter', price:'$10', image:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85', short:'Strained yogurt with herbs, walnuts, and garlic.', story:'Thick strained yogurt is folded gently with aromatic herbs and walnuts, creating a rich meze to share with warm bread.'},
  {name:'Çoban Salata', category:'starter', price:'$12', image:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=85', short:'Tomato, cucumber, peppers, onion, parsley, and pomegranate vinaigrette.', story:'The name means “shepherd’s salad.” Each ingredient is cut small and served crisp, bright, and freshly dressed.'},
  {name:'Lahmacun', category:'main', price:'$18', image:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=85', short:'Thin flatbread topped with spiced minced meat, tomato, and herbs.', story:'The dough is rolled paper-thin and topped with seasoned meat before spending only moments in a fiercely hot oven.'},
  {name:'İskender Kebab', category:'main', price:'$30', image:'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=700&q=85', short:'Thinly sliced doner over pide bread with tomato sauce and butter.', story:'Tender slices of seasoned meat rest over warm pide bread, crowned with tomato sauce and sizzling clarified butter.'},
  {name:'Mantı', category:'main', price:'$24', image:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=85', short:'Hand-folded dumplings with garlic yogurt and spiced butter.', story:'Tiny parcels are folded by hand, boiled until tender, then finished with cool garlic yogurt and hot butter scented with paprika.'},
  {name:'Künefe', category:'dessert', price:'$16', image:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85', short:'Crisp kadayıf pastry, melted cheese, pistachio, and light syrup.', story:'Fine strands of pastry are baked around soft cheese until crisp and golden, then finished with pistachio and fragrant syrup.'},
  {name:'Antep Baklava', category:'dessert', price:'$17', image:'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=700&q=85', short:'Fine phyllo layers filled with Gaziantep pistachios.', story:'Layer upon delicate layer is hand-stacked with vibrant pistachios, baked to a deep gold, and gently sweetened.'},
  {name:'Fırın Sütlaç', category:'dessert', price:'$13', image:'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=85', short:'Slow-baked rice pudding with a deeply caramelized top.', story:'Our rice pudding is baked slowly until the custard sets and the top takes on a rich, bittersweet caramel crust.'}
];

const grid=document.getElementById('menuGrid');
const dialog=document.getElementById('dishDialog');
const dialogContent=document.getElementById('dialogContent');

function render(category='all') {
  grid.innerHTML=dishes.filter(d=>category==='all'||d.category===category).map(d=>`
    <article class="dish-card" tabindex="0" data-index="${dishes.indexOf(d)}">
      <img class="dish-image" src="${d.image}" alt="${d.name}" loading="lazy" />
      <div class="dish-body">
        <div class="dish-meta"><span class="category">${d.category}</span><span class="price">${d.price}</span></div>
        <h3>${d.name}</h3>
        <p>${d.short}</p>
      </div>
    </article>`).join('');
  document.querySelectorAll('.dish-card').forEach(card=>{
    const open=()=>{const d=dishes[Number(card.dataset.index)]; dialogContent.innerHTML=`<div class="dialog-layout"><img src="${d.image}" alt="${d.name}"><div class="dialog-copy"><span class="category">${d.category}</span><h3>${d.name}</h3><p>${d.story}</p><strong>${d.price}</strong></div></div>`; dialog.showModal();};
    card.addEventListener('click',open); card.addEventListener('keydown',e=>{if(e.key==='Enter')open();});
  });
}

document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  document.querySelector('.filter.active').classList.remove('active'); button.classList.add('active'); render(button.dataset.category);
}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
render();

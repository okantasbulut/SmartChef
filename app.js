const dishes = [
  {name:'Cacık', category:'starter', price:'$9', image:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85', short:'Cool yogurt, cucumber, mint, and olive oil.', story:'A village-table classic made fresh every morning with thick yogurt, crisp cucumber, dried mint, and the finest olive oil.'},
  {name:'Haydari', category:'starter', price:'$10', image:'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=700&q=85', short:'Strained yogurt with herbs, walnuts, and garlic.', story:'Thick strained yogurt is folded gently with aromatic herbs and walnuts, creating a rich meze to share with warm bread.'},
  {name:'Çoban Salata', category:'starter', price:'$12', image:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85', short:'Tomato, cucumber, peppers, onion, parsley, and pomegranate vinaigrette.', story:'The name means “shepherd’s salad.” Each ingredient is cut small and served crisp, bright, and freshly dressed.'},
  {name:'Ezme', category:'starter', price:'$11', image:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=85', short:'Finely chopped tomato, pepper, onion, herbs, and pomegranate molasses.', story:'This lively, finely chopped salad is seasoned with pomegranate molasses, olive oil, and just enough chili.'},
  {name:'Sigara Böreği', category:'starter', price:'$13', image:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85', short:'Crispy pastry rolls filled with cheese and parsley.', story:'Thin pastry is rolled around a tangy cheese filling, crisped until golden, and served while still warm.'},
  {name:'Humus', category:'starter', price:'$12', image:'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=700&q=85', short:'Silky chickpeas, tahini, lemon, and olive oil.', story:'Chickpeas are blended until velvety with tahini and lemon, then finished with olive oil and paprika.'},
  {name:'Kısır', category:'starter', price:'$11', image:'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=700&q=85', short:'Fine bulgur with tomato, parsley, mint, and pomegranate molasses.', story:'A bright, fragrant bulgur salad folded with fresh herbs, tomato paste, lemon, and pomegranate molasses.'},
  {name:'Lahmacun', category:'main', price:'$18', image:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=85', short:'Thin flatbread topped with spiced minced meat, tomato, and herbs.', story:'The dough is rolled paper-thin and topped with seasoned meat before spending only moments in a fiercely hot oven.'},
  {name:'İskender Kebab', category:'main', price:'$30', image:'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=700&q=85', short:'Thinly sliced doner over pide bread with tomato sauce and butter.', story:'Tender slices of seasoned meat rest over warm pide bread, crowned with tomato sauce and sizzling clarified butter.'},
  {name:'Mantı', category:'main', price:'$24', image:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=85', short:'Hand-folded dumplings with garlic yogurt and spiced butter.', story:'Tiny parcels are folded by hand, boiled until tender, then finished with cool garlic yogurt and hot butter scented with paprika.'},
  {name:'Adana Kebab', category:'main', price:'$29', image:'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=85', short:'Charcoal-grilled hand-minced lamb, sumac onion, and lavash.', story:'Spiced lamb is pressed onto the skewer, grilled over glowing charcoal, and served with sumac onions and warm lavash.'},
  {name:'Urfa Kebab', category:'main', price:'$29', image:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=85', short:'Mild spiced lamb kebab with peppers and flatbread.', story:'A gently spiced Urfa-style kebab is charred over coals and served with blistered peppers and soft flatbread.'},
  {name:'Hünkar Beğendi', category:'main', price:'$32', image:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85', short:'Tender lamb over silky smoked eggplant purée.', story:'Slow-cooked lamb is ladled over smoked eggplant blended with cheese and butter, a dish said to have delighted Ottoman palates.'},
  {name:'İmam Bayıldı', category:'main', price:'$22', image:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85', short:'Whole eggplant filled with onion, tomato, garlic, and olive oil.', story:'Eggplant is baked slowly with sweet onions, tomatoes, garlic, and generous olive oil until meltingly tender.'},
  {name:'Karışık Izgara', category:'main', price:'$38', image:'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=85', short:'A generous selection of Turkish kebabs, grilled vegetables, and lavash.', story:'Our charcoal grill brings together tender kebabs, köfte, seasonal vegetables, and warm bread for a generous shared meal.'},
  {name:'Pide', category:'main', price:'$20', image:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=85', short:'Boat-shaped bread with cheese, egg, minced meat, or sucuk.', story:'Soft pide dough is shaped by hand and baked until golden with a choice of traditional Turkish toppings.'},
  {name:'Künefe', category:'dessert', price:'$16', image:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85', short:'Crisp kadayıf pastry, melted cheese, pistachio, and light syrup.', story:'Fine strands of pastry are baked around soft cheese until crisp and golden, then finished with pistachio and fragrant syrup.'},
  {name:'Antep Baklava', category:'dessert', price:'$17', image:'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=700&q=85', short:'Fine phyllo layers filled with Gaziantep pistachios.', story:'Layer upon delicate layer is hand-stacked with vibrant pistachios, baked to a deep gold, and gently sweetened.'},
  {name:'Fırın Sütlaç', category:'dessert', price:'$13', image:'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=85', short:'Slow-baked rice pudding with a deeply caramelized top.', story:'Our rice pudding is baked slowly until the custard sets and the top takes on a rich, bittersweet caramel crust.'},
  {name:'Kazandibi', category:'dessert', price:'$14', image:'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=85', short:'Caramelized milk pudding with a delicate vanilla finish.', story:'The bottom of this creamy pudding is caramelized during cooking, then turned out to reveal its distinctive golden surface.'},
  {name:'Ayva Tatlısı', category:'dessert', price:'$15', image:'https://images.unsplash.com/photo-1505253210343-1c3e7b5d3c8c?auto=format&fit=crop&w=700&q=85', short:'Poached quince with kaymak and pistachio.', story:'Quince is gently poached until ruby pink and served with thick cream and chopped pistachio.'},
  {name:'Lokma', category:'dessert', price:'$12', image:'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=85', short:'Warm golden dough bites soaked in honey syrup.', story:'Small balls of dough are fried crisp and airy, dipped in fragrant syrup, and finished with cinnamon or pistachio.'}
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

const dishes = [
  {name:'Olive Oil Artichokes', category:'starter', price:'$18', image:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=82', short:'Artichokes, spring onions, and lemon—a warm reminder of the family table.', story:'Our finest artichokes are gathered in the morning. They are cooked slowly with olive oil, fresh spring onions, and lemon, like a brief and gentle springtime story.'},
  {name:'Tomato & Burrata', category:'starter', price:'$21', image:'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=700&q=82', short:'Sun-ripened tomatoes meet silky burrata and fragrant basil.', story:'We pair tomatoes gathered from the market that morning with fresh burrata, delicate olive oil, and just a few leaves of basil.'},
  {name:'Smoked Eggplant', category:'starter', price:'$16', image:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=82', short:'Charred eggplant with cool yogurt and bright pomegranate.', story:'Eggplants rest over the fire until their skins are beautifully charred. Their smoky interior meets cool yogurt and the sweet-tart sparkle of pomegranate.'},
  {name:'Garden Vegetable Flatbread', category:'main', price:'$26', image:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=82', short:'Thin dough, market vegetables, and cheese from a small local maker.', story:'Our dough rises slowly, much like bread waiting for the sun. Each day, we finish it with changing seasonal vegetables and cheese from a small local producer.'},
  {name:'Herbed Meatballs', category:'main', price:'$32', image:'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=700&q=82', short:'Our family recipe with regional herbs, charred tomato, and bulgur.', story:'The secret is never to hurry. We shape each meatball by hand, then serve it with roasted tomato, warm bulgur, and herbs from the garden.'},
  {name:'Seasonal Vegetable Risotto', category:'main', price:'$28', image:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=82', short:'Silky rice, fresh vegetables, and aged cheese in comforting harmony.', story:'We stir patiently, spoonful by spoonful. First comes the rice's softness; then the depth of the season's vegetables and aged cheese.'},
  {name:'Olive Oil Citrus Cake', category:'dessert', price:'$14', image:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=82', short:'Orange zest, almonds, and a delicate touch of sea salt.', story:'As simple and welcoming as a cake at home, this one brings together orange zest, ground almonds, and the clean warmth of olive oil.'},
  {name:'Warm Rice Pudding', category:'dessert', price:'$13', image:'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=82', short:'Slow-cooked rice, fragrant cinnamon, and the comfort of memory.', story:'Milk, rice, and time—nothing more. Fresh from the oven, it is finished with cinnamon and brings back the quiet warmth of a familiar table.'},
  {name:'Walnut & Honey Pastry', category:'dessert', price:'$17', image:'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=700&q=82', short:'Delicate layers, toasted walnuts, and a light rose-kissed syrup.', story:'The pastry is folded into impossibly thin layers, filled with walnuts, and left to settle in a fragrant rose syrup.'}
];

const grid=document.getElementById('menuGrid');
const dialog=document.getElementById('dishDialog');
const dialogContent=document.getElementById('dialogContent');

function render(category='all') {
  grid.innerHTML=dishes.filter(d=>category==='all'||d.category===category).map(d=>`
    <article class="dish-card" tabindex="0" data-index="${dishes.indexOf(d)}">
      <img class="dish-image" src="${d.image}" alt="${d.name}" />
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

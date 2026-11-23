const dishes = [
  {name:'Zeytinyağlı Enginar', category:'başlangıç', price:'₺185', image:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=82', short:'Enginar, taze soğan ve limonla; anne sofralarının sıcak hatırlatışı.', story:'Bahçemizin en nazik enginarları sabah toplanır. Tencerede zeytinyağı, taze soğan ve limonla ağır ağır, kısa bir bahar hikâyesi gibi pişirilir.'},
  {name:'Domates & Burrata', category:'başlangıç', price:'₺210', image:'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=700&q=82', short:'Günlük domates, ipek gibi burrata ve fesleğenin sade buluşması.', story:'Tezgâhtan sabah aldığımız domatesler; burratanın tazesine, yağın en güzeline ve birkaç yaprak fesleğene eşlik eder.'},
  {name:'Közde Patlıcan', category:'başlangıç', price:'₺165', image:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=82', short:'Odun ateşinde pişmiş patlıcan; yoğurt ve narla yumuşak bir başlangıç.', story:'Patlıcanlar ateşe oturur, kabukları kararana kadar bekler. İçindeki duman, yoğurdun serinliği ve narın tatlı ekşiliğiyle buluşur.'},
  {name:'Fırın Sebze Pide', category:'ana', price:'₺260', image:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=82', short:'İnce hamur, mevsim sebzeleri ve bölgeden taze peynir.', story:'Hamurumuz güneşi bekleyen ekmek gibi yavaş mayalanır. Üzerine her gün değişen mevsim sebzeleri ve küçük üreticiden peynir konulur.'},
  {name:'Misket Köfte', category:'ana', price:'₺320', image:'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=700&q=82', short:'Aile tarifimiz; yöresel baharat, köz domates ve bulgur pilavı.', story:'Bu tarifin püf noktası acele etmemektir. Köfteler elle şekillenir, közlenmiş domatesin sıcaklığıyla ve bahçeden gelen otlarla sofraya gelir.'},
  {name:'Mevsim Sebze Risotto', category:'ana', price:'ₚ275', image:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=82', short:'İpeksi pirinç, günlük sebze ve taze keşkeğin rahatlatıcı uyumu.', story:'Kaşık kaşık sabırla hazırlanır. İlk tadımda pirincin yumuşaklığı; ikinci tadımda mevsimin sebzesi ve keşkekin derinliği hissedilir.'},
  {name:'Zeytinli Kek', category:'tatlı', price:'₺145', image:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=82', short:'Portakal kabuğu, badem ve hafif tuzun dengeli tatlısı.', story:'Evdeki kekler kadar samimi; portakal kabuğu, öğütülmüş badem ve zeytinyağının yalın notalarından oluşur.'},
  {name:'Sıcak Sütlaç', category:'tatlı', price:'₺130', image:'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=82', short:'Tarçın kokulu, yavaş pişmiş; bir fincan çay eşliğinde hatıra.', story:'Süt, pirinç ve zaman... Başka bir şey değil. Fırından çıkar çıkmaz tarçınla susmayan o eski tat hatırlatır.'},
  {name:'Cevizli Baklava', category:'tatlı', price:'₺175', image:'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=700&q=82', short:'İnce katlar, ceviz ve gül kokulu hafif şerbet.', story:'Hamur katları mümkün olan en ince hâle gelir; cevizle tamamlanır ve gül kokulu şerbetin içinde kendine gelmeye bırakılır.'}
];

const grid=document.getElementById('menuGrid');
const dialog=document.getElementById('dishDialog');
const dialogContent=document.getElementById('dialogContent');

function render(category='all') {
  grid.innerHTML=dishes.filter(d=>category==='all'||d.category===category).map((d,i)=>`
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

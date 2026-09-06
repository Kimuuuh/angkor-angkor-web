(function () {
  const viewHome = document.getElementById('view-home');
  const viewCategory = document.getElementById('view-category');
  const dishList = document.getElementById('dish-list');
  const catTitle = document.getElementById('cat-title');
  const backBtn = document.getElementById('back-btn');

  // Remplit les compteurs de plats sur les cartes catégories
  document.querySelectorAll('.cat-card').forEach(card => {
    const key = card.dataset.cat;
    const data = MENU[key];
    if (!data) return;
    const count = data.groups.reduce((n, g) => n + g.items.length, 0);
    card.querySelector('.cat-count').textContent = count + (count > 1 ? ' plats' : ' plat');
    card.addEventListener('click', () => openCategory(key));
  });

  function renderVariants(variants) {
    return `<ul class="variants">` +
      variants.map(([label, price]) =>
        `<li><span class="v-label">${label}</span><span class="v-dots"></span><span class="v-price">${price}</span></li>`
      ).join('') +
      `</ul>`;
  }

  function renderItem(item) {
    const hasImg = !!item.img;
    return `
      <article class="dish ${hasImg ? 'has-img' : ''}">
        ${hasImg ? `<img class="dish-img" src="${item.img}" alt="${item.name}" loading="lazy">` : ''}
        <div class="dish-body">
          <div class="dish-head">
            <h3 class="dish-name">${item.name}</h3>
            ${item.price ? `<span class="dish-price">${item.price}</span>` : ''}
          </div>
          ${item.desc ? `<p class="dish-desc">${item.desc}</p>` : ''}
          ${item.variants ? renderVariants(item.variants) : ''}
        </div>
      </article>`;
  }

  function openCategory(key) {
    const data = MENU[key];
    if (!data) return;

    catTitle.textContent = data.label + (data.note ? '' : '');
    let html = '';
    if (data.note) {
      html += `<p class="cat-note">${data.note}</p>`;
    }
    data.groups.forEach(group => {
      if (group.title) html += `<h2 class="group-title">${group.title}</h2>`;
      html += `<div class="dish-grid">` + group.items.map(renderItem).join('') + `</div>`;
    });
    dishList.innerHTML = html;

    viewHome.hidden = true;
    viewCategory.hidden = false;
    window.scrollTo(0, 0);
    history.pushState({ cat: key }, '', '#' + key);
  }

  function goHome() {
    viewCategory.hidden = true;
    viewHome.hidden = false;
    window.scrollTo(0, 0);
    history.pushState({}, '', location.pathname);
  }

  backBtn.addEventListener('click', goHome);

  window.addEventListener('popstate', (e) => {
    const cat = e.state && e.state.cat;
    if (cat && MENU[cat]) {
      openCategory(cat);
    } else {
      viewCategory.hidden = true;
      viewHome.hidden = false;
    }
  });

  // Ouvre directement une catégorie si l'URL contient un #hash au chargement
  const initialHash = location.hash.replace('#', '');
  if (initialHash && MENU[initialHash]) {
    openCategory(initialHash);
  }
})();

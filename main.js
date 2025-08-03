document.addEventListener('DOMContentLoaded', () => {
  const fileList = document.getElementById('file-list');
  const searchInput = document.getElementById('search-input');
  const categorySelect = document.getElementById('category-select');

  function renderFiles(filterText = '', filterCategory = 'all') {
    fileList.innerHTML = '';
    const filtered = window.files.filter(file => {
      const matchesText = file.title.includes(filterText) || file.description.includes(filterText);
      const matchesCategory = filterCategory === 'all' || file.category === filterCategory;
      return matchesText && matchesCategory;
    });

    if (filtered.length === 0) {
      fileList.innerHTML = '<p style="color:white; text-align:center; grid-column:1/-1;">هیچ موردی یافت نشد.</p>';
      return;
    }

    filtered.forEach(file => {
      const card = document.createElement('div');
      card.classList.add('file-card');
      card.innerHTML = `
        <img class="thumb" src="${file.image}" alt="${file.title}" />
        <h3>${file.title}</h3>
        <p>${file.description.substring(0, 70)}...</p>
        <p>${file.features}...</p>
        <p>${file.feature1}...</p>
        <span>حجم: ${file.size}</span>
        <a href="detail.html?id=${file.id}" class="btn-main">جزئیات بیشتر</a>
      `;
      fileList.appendChild(card);
    });
  }

  searchInput.addEventListener('input', () => {
    renderFiles(searchInput.value.trim(), categorySelect.value);
  });

  categorySelect.addEventListener('change', () => {
    renderFiles(searchInput.value.trim(), categorySelect.value);
  });

  // بارگذاری اولیه همه فایل‌ها
  renderFiles();
});

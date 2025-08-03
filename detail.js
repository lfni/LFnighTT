// detail.js
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const container = document.getElementById("file-detail");

  const file = files.find(f => f.id === id);

  if (!file) {
    container.innerHTML = "<p>فایلی با این شناسه یافت نشد.</p>";
    return;
  }

  container.innerHTML = `
    <img src="${file.image}" alt="${file.title}" class="thumb-large" />
    <h2>${file.title}</h2>
    <p>${file.description}</p>
    <ul>
      <li>حجم فایل: ${file.size}</li>
      <li>شناسه: ${file.id}</li>
    </ul>
    <a href="${file.download}" download class="btn-main">⬇️ دانلود فایل</a>
  `;
});

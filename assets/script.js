// Renders the topic grid on the homepage from TOPICS (topics-data.js) and wires up search.

function renderTopics() {
  const grid = document.getElementById("topic-grid-root");
  if (!grid) return;

  const categories = [...new Set(TOPICS.map(t => t.category))];

  grid.innerHTML = categories.map(category => {
    const items = TOPICS.filter(t => t.category === category);
    return `
      <section class="category-block" data-category="${category}">
        <h2 class="category-title">${category}</h2>
        <div class="topic-grid">
          ${items.map(topicCardHtml).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function topicCardHtml(topic) {
  const badge = topic.status === "ready"
    ? '<span class="status-badge ready">Ready</span>'
    : '<span class="status-badge pending">Coming soon</span>';

  return `
    <a class="topic-card" href="${topic.file}" data-title="${topic.title.toLowerCase()}" data-category="${topic.category.toLowerCase()}">
      <h3>${topic.title}</h3>
      <p>${topic.blurb}</p>
      ${badge}
    </a>
  `;
}

function wireSearch() {
  const input = document.getElementById("topic-search");
  if (!input) return;

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    const cards = document.querySelectorAll(".topic-card");
    const blocks = document.querySelectorAll(".category-block");
    let anyVisible = false;

    cards.forEach(card => {
      const match = card.dataset.title.includes(q) || card.dataset.category.includes(q);
      card.style.display = match ? "" : "none";
      if (match) anyVisible = true;
    });

    blocks.forEach(block => {
      const visibleCards = block.querySelectorAll('.topic-card:not([style*="display: none"])');
      block.style.display = visibleCards.length ? "" : "none";
    });

    const noResults = document.getElementById("no-results");
    if (noResults) noResults.style.display = anyVisible ? "none" : "block";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTopics();
  wireSearch();
});

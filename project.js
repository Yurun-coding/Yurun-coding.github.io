const projectId = document.body.dataset.project;
const project = window.PROJECTS?.[projectId];
const root = document.querySelector('[data-project-root]');

const videoType = source => source.toLowerCase().endsWith('.webm') ? 'video/webm' : source.toLowerCase().endsWith('.mov') ? 'video/quicktime' : 'video/mp4';

const renderMedia = (item, className = '') => {
  if (item.type === 'video') {
    return `<figure class="media-figure media-video ${className}">
      <video controls playsinline preload="auto"${item.muted ? ' muted' : ''}${item.poster ? ` poster="${item.poster}"` : ''}>
        <source src="${item.src}" type="${videoType(item.src)}">
        Your browser cannot play this video. <a href="${item.src}">Open the video file</a>.
      </video>
      <figcaption>${item.caption}</figcaption>
    </figure>`;
  }
  return `<figure class="media-figure ${className}">
    ${item.rotate ? '<div class="rotated-media">' : ''}<img src="${item.src}" alt="${item.alt || item.caption}" loading="lazy" data-gallery-image${item.rotate ? ' class="rotate-clockwise"' : ''}>${item.rotate ? '</div>' : ''}
    <figcaption>${item.caption}</figcaption>
  </figure>`;
};

const renderMediaGrid = (items, className = '') => `
  <div class="editorial-media-grid ${className}">
    ${items.map(item => renderMedia(item)).join('')}
  </div>`;

const renderFeature = (section, index) => {
  const paragraphs = (section.paragraphs || []).map(copy => `<p>${copy}</p>`).join('');
  const equation = section.equation ? `<div class="equation" aria-label="${section.equation}">${section.equation}</div>` : '';
  const media = section.media?.length ? renderMediaGrid(section.media, 'feature-media') : '';
  const items = section.items?.length ? `<div class="feature-items">${section.items.map(item => `
    <article class="feature-item">
      <div class="feature-item-copy"><h3>${item.title}</h3><p>${item.copy}</p></div>
      ${renderMediaGrid(item.media || [], 'feature-item-media')}
    </article>`).join('')}</div>` : '';
  return `<section class="project-section project-feature-section">
    <div class="shell project-content-grid">
      <div class="reveal"><span class="project-section-label">${String(index).padStart(2, '0')} · Investigation</span><h2>${section.title}</h2></div>
      <div class="project-narrative reveal">${paragraphs}${equation}${media}${items}</div>
    </div>
  </section>`;
};

if (!project || !root) {
  if (root) root.innerHTML = '<section class="project-overview"><div class="shell"><h1>Project not found</h1><p><a href="../index.html">Return to the portfolio</a></p></div></section>';
} else {
  document.title = `${project.title} — Yurun Huang`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', project.deck);

  const details = project.details.map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`).join('');
  const steps = project.steps?.length ? `<div class="steps">${project.steps.map(([title, copy]) => `<article class="step"><div><h3>${title}</h3><p>${copy}</p></div></article>`).join('')}</div>` : '';
  const paragraphs = project.approachParagraphs.map(copy => `<p>${copy}</p>`).join('');
  const results = (project.results || []).map(([value, title, copy]) => `<article class="result-item"><strong>${value}</strong><h3>${title}</h3><p>${copy}</p></article>`).join('');
  const heroClass = project.heroFit ? ` is-${project.heroFit}` : '';
  const overviewMedia = project.overviewMedia?.length ? `<section class="project-overview-media"><div class="shell reveal">${renderMediaGrid(project.overviewMedia, `media-count-${project.overviewMedia.length}`)}</div></section>` : '';
  const approachMedia = project.approachMedia ? `<div class="approach-comparison">
    <h3>${project.approachMedia.heading}</h3>
    <p>${project.approachMedia.intro}</p>
    ${renderMediaGrid(project.approachMedia.items, 'comparison-grid')}
  </div>` : '';
  let sectionNumber = 2;
  const features = (project.featureSections || []).map(section => renderFeature(section, sectionNumber++)).join('');
  const resultsSection = results || project.resultsParagraphs?.length ? `<section class="project-section project-results-section">
    <div class="shell project-content-grid">
      <div class="reveal"><span class="project-section-label">${String(sectionNumber++).padStart(2, '0')} · Results</span><h2>${project.resultsHeading}</h2></div>
      <div class="project-narrative reveal">${results ? `<div class="result-list">${results}</div>` : ''}${(project.resultsParagraphs || []).map(copy => `<p>${copy}</p>`).join('')}${project.note ? `<p class="project-note"><strong>Context.</strong> ${project.note}</p>` : ''}</div>
    </div>
  </section>` : '';
  const conclusionSection = project.conclusion ? `<section class="project-section project-conclusion">
    <div class="shell project-content-grid">
      <div class="reveal"><span class="project-section-label">${String(sectionNumber++).padStart(2, '0')} · Conclusion</span><h2>${project.conclusion.title}</h2></div>
      <div class="project-narrative reveal">${project.conclusion.paragraphs.map(copy => `<p>${copy}</p>`).join('')}</div>
    </div>
  </section>` : '';
  const posterSection = project.poster ? `<section class="project-section project-poster-section">
    <div class="shell">
      <p class="eyebrow reveal">${String(sectionNumber++).padStart(2, '0')} · Research poster</p>
      <figure class="poster-figure reveal">
        <img src="${project.poster.src}" alt="${project.poster.alt}" loading="lazy" data-gallery-image>
        <figcaption>${project.poster.caption}</figcaption>
      </figure>
    </div>
  </section>` : '';

  root.innerHTML = `
    <section class="project-hero">
      <div class="shell project-hero-header">
        <div class="reveal">
          <p class="project-breadcrumb"><a href="../index.html#work">Projects</a> / ${project.category}</p>
          <h1>${project.title}</h1>
        </div>
        <p class="project-deck reveal">${project.deck}</p>
      </div>
      <div class="project-hero-image${heroClass}"><img src="${project.hero}" alt="${project.heroAlt}"></div>
    </section>

    <section class="project-overview">
      <div class="shell project-overview-grid">
        <div class="reveal"><p class="eyebrow">Overview</p><p class="lead">${project.overview}</p>${project.codeLink ? `<p><a href="${project.codeLink}" target="_blank" rel="noopener noreferrer">View project code on GitHub</a></p>` : ''}</div>
        <dl class="project-details reveal">${details}</dl>
      </div>
    </section>

    ${overviewMedia}

    <section class="project-section project-section-alt">
      <div class="shell project-content-grid">
        <div class="reveal"><span class="project-section-label">01 · Approach</span>${project.approachTitle ? `<h2>${project.approachTitle}</h2>` : ''}</div>
        <div class="project-narrative reveal">${paragraphs}${steps}${approachMedia}</div>
      </div>
    </section>

    ${features}
    ${resultsSection}
    ${conclusionSection}
    ${posterSection}

    <section class="project-next">
      <div class="shell"><a href="${project.next[0]}"><div><span>Next case study</span><h2>${project.next[1]}</h2></div><b aria-hidden="true">Next</b></a></div>
    </section>`;
}

const menuButton = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('is-open', !open);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
document.querySelectorAll('[data-year]').forEach(item => item.textContent = new Date().getFullYear());

const lightbox = document.querySelector('[data-lightbox]');
const lightboxImage = lightbox?.querySelector('img');
const closeLightbox = () => lightbox?.classList.remove('is-open');

document.querySelectorAll('[data-gallery-image]').forEach(image => image.addEventListener('click', () => {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxImage.classList.toggle('rotate-clockwise', image.classList.contains('rotate-clockwise'));
  lightbox.classList.add('is-open');
  lightbox.querySelector('button')?.focus();
}));
lightbox?.querySelector('button')?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeLightbox(); });

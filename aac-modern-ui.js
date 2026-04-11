(() => {
  const sectionSelectors = [
    '.step-block',
    '.section-block',
    '.field',
    '.fg',
    '.atividades-wrap',
    '.upload-zone',
    '.finbox',
    '.docprev'
  ];

  const closestSection = (el) => {
    if (!el || !el.closest) return null;
    return el.closest(sectionSelectors.join(','));
  };

  const setActiveSection = (el) => {
    document.querySelectorAll('.aac-active-block').forEach((node) => {
      if (node !== el) node.classList.remove('aac-active-block');
    });
    if (el) el.classList.add('aac-active-block');
  };

  document.addEventListener('focusin', (event) => {
    setActiveSection(closestSection(event.target));
  });

  document.addEventListener('click', (event) => {
    const block = closestSection(event.target);
    if (block) setActiveSection(block);
  });

  document.querySelectorAll('textarea').forEach((textarea) => {
    const resize = () => {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.max(textarea.scrollHeight, 110)}px`;
    };
    ['input', 'change'].forEach((evt) => textarea.addEventListener(evt, resize));
    resize();
  });

  const preview = document.querySelector('.preview-content, #prompt-preview, .docprev');
  const actionBar = document.querySelector('.preview-header, .ohdr');
  if (preview && actionBar && !actionBar.querySelector('.aac-preview-note')) {
    const note = document.createElement('span');
    note.className = 'aac-preview-note';
    note.textContent = 'Atualização em tempo real';
    note.style.fontSize = '11px';
    note.style.fontWeight = '700';
    note.style.color = 'var(--aac-accent)';
    note.style.letterSpacing = '.08em';
    note.style.textTransform = 'uppercase';
    actionBar.appendChild(note);
  }
})();

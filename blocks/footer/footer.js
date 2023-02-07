import {
  readBlockConfig,
  decorateIcons
} from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`);
  const html = await resp.text();
  const footer = document.createElement('div');
  footer.innerHTML = html;
  await decorateIcons(footer);
  block.append(footer);

  [...block.children].forEach((row, i) => {
    const classes = ['navigation', 'content'];
    classes.forEach((classTxt, index) => {
      const section = row.children[index];
      if (section) section.classList.add(`footer-${classTxt}`);
    });
  });
}

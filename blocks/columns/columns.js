export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);
  
  [...block.children].forEach((row, i) => {
    const section = row.children[i];
    if (section) {
      section.classList.add(`col-content-${i}`);
    }
  });

}

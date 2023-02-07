export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);
  
  [...block.children].forEach((row, i) => {
    if (row) {
      row.classList.add(`col-content-${i}`);
    }
  });

}

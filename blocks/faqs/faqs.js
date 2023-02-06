export default function decorate(block) {
  [...block.children].forEach((row, i) => {
    const classes = ['question', 'answer'];
    if (row) {
      row.classList.add(`faqs-${classes[i]}`);
    }
  });
}

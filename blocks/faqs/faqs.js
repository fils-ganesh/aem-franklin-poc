export default function decorate(block) {
  [...block.children].forEach((row, i) => {
    const classes = ['question', 'answer'];
    classes.forEach((c, j) => {
      const section = row[j];
      if (section) section.classList.add(`faq-${c}`);
    });
  });
}

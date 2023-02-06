export default function decorate(block) {
  [...block.children].forEach((row, i) => {
    console.log(row);
    const classes = ['question', 'answer'];
    classes.forEach((c, j) => {
      const section = row;
      if (section) section.classList.add(`faqs-${c}`);
    });
  });
}

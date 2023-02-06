export default function decorate(block) {
  [...block.children].forEach((row, i) => {
    console.log(...block.children);
    const classes = ['question', 'answer'];
    classes.forEach((c, j) => {
      const section = row[j];
      console.log(section);
      if (section) section.classList.add(`faqs-${c}`);
    });
  });
}

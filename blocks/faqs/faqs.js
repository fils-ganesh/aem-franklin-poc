export default function decorate(block) {
  [...block.children].forEach((row, i) => {
    console.log(row);
    const classes = ['question', 'answer'];
    classes.forEach((class, index) => {
      const section = row[index];
      if (section) section.classList.add(`faqs-${class}`);
    });
  });
}

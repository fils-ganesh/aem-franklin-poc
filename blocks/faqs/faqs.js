export default function decorate(block) {
  [...block.children].forEach((row, i) => {
    const classes = ['question', 'answer'];
    classes.forEach((c, j) => {
      const section = ...block.children;
      console.log(section);
      if (section) section.classList.add(`faqs-${c}`);
    });
  });
}

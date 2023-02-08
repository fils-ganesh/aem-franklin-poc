export default function decorate(block) {
  [...block.children].forEach((row, i) => {
    const classes = ['left', 'right'];
    classes.forEach((classTxt, index) => {
      const section = row.children[index];
      if (section) section.classList.add(`banner-${classTxt}`);
    });
  });
}

export default function decorate(block) {
  [...block.children].forEach((row, i) => {
    row.classList.add('row');
    const classes = ['left', 'right'];
    classes.forEach((classTxt, index) => {
      const section = row.children[index];
      if (section) section.classList.add(`col-${classTxt}`);
      if (index == 1) {
        if (section) {
          let childEle = section.querySelector('.button');
          let getHref = childEle.getAttribute('href');
          if(getHref.indexOf('http') > -1) {
            childEle.setAttribute('target', '_blank');
          }
        }
      }
    });
  });
}

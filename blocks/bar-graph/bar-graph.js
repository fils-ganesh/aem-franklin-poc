export default function decorate(block) {
  var totalLength = block.children.length;
  [...block.children].forEach((row, i) => {
    if (i == (totalLength - 1)) {
      row.classList.add('indication');
    } else {
      row.classList.add('row');
    }
    const classes = ['label', 'bar-wrap'];
    classes.forEach((classTxt, index) => {
      const section = row.children[index];
      if (!row.classList.contains('indication')) {
        if (section) section.classList.add(`${classTxt}`);
        if (index == 1) {
          let getHTML = section.innerHTML;
          let newHTML = "<div class='bar'>" + getHTML + "</div>";
          section.innerHTML = newHTML;
        }
      }
    });

    const grapthIndicator = ['label', 'graph-indication'];
    grapthIndicator.forEach((classTxt, index) => {
      const section = row.children[index];
      if (row.classList.contains('indication')) {
        if (section) section.classList.add(`${classTxt}`);
      }
    });
  });

  document.addEventListener('scroll', function() {
    if (isElementVisible('.bar-graph-container')) {
      generateBarGraph('.bar-graph');
    }
  }, {
    passive: true
  });
}

function generateBarGraph(wrapper) {
  document.querySelectorAll(wrapper + ' .bar').forEach(function(element) {
    let percent = parseInt(element.innerText) * 2.45;
    element.style.width = percent + '%';
    element.classList.add('in');
  });
}

function isElementVisible(el) {
  var position = document.querySelector(el).getBoundingClientRect();

  // checking for partial visibility
  if (position.top < window.innerHeight && position.bottom >= 0) {
    return true;
  }
}

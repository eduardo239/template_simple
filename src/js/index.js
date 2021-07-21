const btnBackToTop = document.getElementById('btnBackToTop');

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

btnBackToTop.addEventListener('click', topFunction);

"use strict";

var btnBackToTop = document.getElementById('btnBackToTop');

var topFunction = function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

btnBackToTop.addEventListener('click', topFunction);
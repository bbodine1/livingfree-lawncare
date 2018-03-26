import smoothscroll from 'smoothscroll-polyfill';

(() => {
  smoothscroll.polyfill();
  
  let quoteSection = document.querySelector('#contact');

  // Scroll to Quote Section
  document.getElementById('get-quote').onclick = () => {
    quoteSection.scrollIntoView({
      behavior: 'smooth'
    })
  }

})();
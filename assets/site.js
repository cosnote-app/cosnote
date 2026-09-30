// スクロールに伴う軽い fade-in だけ（landing-page-spec §3）。JS が無ければ最初から表示する
(function(){
  var els=document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js');
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.05});
  els.forEach(function(e){io.observe(e)});
  // 画面内にあるものは即座に表示
  setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<window.innerHeight)e.classList.add('in')})},50);
})();

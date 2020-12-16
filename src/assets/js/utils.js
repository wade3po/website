export function throttle(fn, wait) {
  let timer = null;
  return function () {
    if(timer){return};
    timer = setTimeout(() => {
      fn();
      timer = null;
    }, wait);
  }
}

export function debounce(fn, wait) {
  let timer = null;
  return function () {
    if(timer){
      clearTimeout(timer);
    };
    timer = setTimeout(() => {
      fn();
      timer = null;
    }, wait);
  }
}

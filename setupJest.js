import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

window.scrollTo = (x, y) => {
  document.documentElement.scrollTop = y;
}
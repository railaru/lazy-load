import './styles/index.scss';

import lazyLoad from './js/layzLoad';

if (document.querySelectorAll('.lazy')) {
  lazyLoad();
}
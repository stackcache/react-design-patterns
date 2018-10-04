/**
 *
 * Asynchronously loads the component for ChainOfResponsibility
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

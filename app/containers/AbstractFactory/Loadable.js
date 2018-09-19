/**
 *
 * Asynchronously loads the component for AbstractFactory
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

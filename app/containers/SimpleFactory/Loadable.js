/**
 *
 * Asynchronously loads the component for SimpleFactory
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

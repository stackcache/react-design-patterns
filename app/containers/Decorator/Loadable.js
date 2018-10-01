/**
 *
 * Asynchronously loads the component for Decorator
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

/**
 *
 * Asynchronously loads the component for Visitor
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

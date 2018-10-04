/**
 *
 * Asynchronously loads the component for JobPost
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

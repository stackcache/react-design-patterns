/**
 *
 * Asynchronously loads the component for ChatRoom
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

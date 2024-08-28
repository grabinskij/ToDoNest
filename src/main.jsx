import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css'
import Router from './Router.jsx';



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router />
  </Provider>
)

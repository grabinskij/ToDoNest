import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css'
import Router from './Router';



const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
      <Provider store={store}>
        <Router />
      </Provider>
  );
} else {
  console.error("Root element not found");
}

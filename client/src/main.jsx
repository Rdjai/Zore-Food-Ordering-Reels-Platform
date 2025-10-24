import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { SmoothCursor } from "./components/ui/smooth-cursor";
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <SmoothCursor /> */}
      <App />
    </Provider>
  </StrictMode>,
)

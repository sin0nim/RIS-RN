import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Elem from './Elem.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	<Elem />
  </StrictMode>,
)

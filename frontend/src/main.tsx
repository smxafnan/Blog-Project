import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {MantineProvider} from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css'; 
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider defaultColorScheme='dark' >
        <App/>
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)

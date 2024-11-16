import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='lg:px-[18.22%] px-[10%]'>
    <RouterProvider router={router} />
    </div>
  </StrictMode>,
)

import { redirect } from 'next/navigation';
import {ReactNode} from 'react'

const layout = async ({children}: {children: ReactNode }) => {
  const isUserAuthenticated = true;
  
  if(isUserAuthenticated) redirect('/')
  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default layout
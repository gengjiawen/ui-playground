import { ReactNode } from 'react';
import { DemoPage } from './Demo'

export const routes = [
  {
    path: '/',
    element: (
      <Home>
        <DemoPage />
      </Home>
    ),
    name: 'Home',
  },
  { path: '/contact', element: <Contact />, name: 'Contact' },
  { path: '/about', element: <About />, name: 'About' },
]

function Home({ children }: {children: ReactNode}) {
    return (
      <div>
        <h2>home</h2>
        {children}
      </div>
    );
  }
  

function About() {
  return <h2>About</h2>
}

function Contact() {
  return <h2>Contact</h2>
}

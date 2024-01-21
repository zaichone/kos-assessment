import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import {AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { createTheme,ThemeProvider} from '@mui/material/styles'
import SSRProvider from 'react-bootstrap/SSRProvider';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Login Page for KOS Design',
  description: 'Generated by create next app',
}

const myFont = localFont({
  src: '../font/NeueMachina-Regular.otf',
  display: 'swap',
})

export default function RootLayout(props: { children: any }){

  const { children } = props;
  return (
    <html lang="en">
      <body className={myFont.className}>
      
     {children}
      
        </body>
    </html>
  )
}

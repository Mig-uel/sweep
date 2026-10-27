import type { Metadata } from 'next'
import { Questrial } from 'next/font/google'
import './globals.css'

const questrial = Questrial({
  weight: ['400'],
  fallback: ['system-ui', 'arial'],
  preload: true,
  variable: '--font-questrial',
})

export const metadata: Metadata = {
  title: 'S.W.E.E.P.',
  description:
    'S.W.E.E.P. is a web application for the Camera Investigation Unit (CIU) of DSNY. It is designed to help the CIU manage and track their investigations, as well as provide a platform for collaboration and communication between team members.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${questrial.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  )
}

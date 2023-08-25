import '@/styles/styles.scss'

export const metadata = {
  title: 'UICraft Auth',
  description: 'A generic authentication UI prototype + form validation states.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

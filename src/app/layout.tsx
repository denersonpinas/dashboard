import './global.css'
import variables from './variables.module.scss'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="pt-br">
        <body>{children}</body>
      </html>
    )
  }
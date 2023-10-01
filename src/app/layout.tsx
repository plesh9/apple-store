import { StoreProvider } from '@/store/features/provider'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import './styles/globals.scss'

export const metadata = {
  title: 'Apple Strore',
  description: 'store of your dream',
}

export default function LocaleLayout({ children }: { children: React.ReactNode },) {

  return (
    <html lang='en' >
      <body>
        <StoreProvider>
          <div className='wrapper'>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  )
}

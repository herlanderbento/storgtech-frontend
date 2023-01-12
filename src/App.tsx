import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import Header from './components/Header'
import NavProvider from './contexts/NavContext'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Home } from './sections/Home'
import { AboutUS } from './sections/AboutUs'
import { Services } from './sections/Services'
import { Projects } from './sections/Projects'
import { ClientesAndCollaborators } from './sections/ClientsAndCollaborators'

import Contacts from './sections/Contacts'
import { Blog } from './sections/Blog'
import { FAQ } from './sections/FAQ'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NavProvider>
        <Header />
        <Home />
        <AboutUS />
        <Services />
        <Projects />
        <ClientesAndCollaborators />
        <Blog />
        <FAQ />
        <Contacts />
      </NavProvider>
    </ThemeProvider>
  )
}

export default App

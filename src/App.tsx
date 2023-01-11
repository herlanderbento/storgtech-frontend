import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import Header from './components/Header'
import NavProvider from './contexts/NavContext'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Home } from './sections/home'
import { AboutUS } from './sections/about-us'
import { Services } from './sections/services'
import { Projects } from './sections/projects'
import { ClientesAndCollaborators } from './sections/clients-and-collaborators'

import News from './sections/News'
import Team from './sections/Team'
import Contacts from './sections/Contacts'

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
        <Team />
        <News />
        <Contacts />
      </NavProvider>
    </ThemeProvider>
  )
}

export default App

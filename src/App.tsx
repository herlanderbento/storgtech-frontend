import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import Header from './components/Header'
import NavProvider from './contexts/NavContext'
import Home from './sections/home'
import News from './sections/News'
import Projects from './sections/projects'
import Services from './sections/services'
import Team from './sections/Team'
import Contacts from './sections/Contacts'
import AboutUS from './sections/about-us'

import 'bootstrap/dist/css/bootstrap.min.css'
import { ClientesAndCollaborators } from './sections/clients-and-collaborators'

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

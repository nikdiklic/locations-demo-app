import './App.css'
import Main from './components/Main'
import store from './store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App

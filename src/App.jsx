import Header from './components/Header/Header'
import CardList from './components/CardList/CardList'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <main className="app">
        <CardList />
      </main>
    </>
  )
}
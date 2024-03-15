import React, { useState } from 'react'
import { NavBar } from './components/NavBar'
import { NewsBoard } from './components/NewsBoard'
import { NewsItem } from './components/NewsItem'

const App = () => {

  const [category, setcategory] = useState("science")


  return (
    <div>
      <NewsItem />
      <NavBar setcategory={setcategory} />
      <NewsBoard category={category} />
    </div>
  )
}

export default App
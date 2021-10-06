import React, { useContext } from 'react';
import Article from '../components/Article';
import Context from '../context/Context';
import logoNews from '../assets/images/logo-news.png'

import './styles/home.css'

export default function Home() {
  const { news } = useContext(Context);

  return (
    <div>
      <header className="header__section">
        <img src={ logoNews } alt="Logo" />
      </header>
      <main className="home__content-section">
        { news[0] ? news.map((article, index) => <Article article={article} key={index}/>) : <div class="loader" /> }
      </main>
      <footer>
        <span>©, Tech News Minutes. Todos os direitos reservados.</span>
      </footer>
    </div>
  )
}

import React from 'react';
import './styles/article.css';
import shareLinkedin from '../assets/images/linkedin-share-button.png'

export default function Article({ article }) {
  const { title, image: { url: image }, description, datePublished, provider: { name: source } , url } = article;

  const generateArticleHashlink = () => {
    const hash = title.replace(/[^a-zA-Z ]/g, "").split(' ').join('-');
    console.log(hash)
    return hash;
  }

  const generateArticleDescription = () => {
    if(description.length > 275) {
      return `${description.substr(1, 270)}...`;
    }
    return description;
  }

  return (
    <main className="article__container" id={ generateArticleHashlink() }>
      <section className="article__section-image">
        <img src={image} alt={title} />
      </section>
      <section className="article__section-content">
        <h3>{ title }</h3>
        <p>{ generateArticleDescription() }</p>
        <section className="article__section-footer">
          <span>{ datePublished.split('T')[0] }</span>
          <span>{ source.charAt(0).toUpperCase() + source.substr(1)}</span>
          
          
          <a href={ url }>{'Ver notícia completa >'}</a>
        </section>
      </section>
      <meta property='og:image' content={`${image}`}/>
      <a className="article__section-social" href={ `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${description}&source=${source}` }>
        <img src={ shareLinkedin } alt="Share linkedin" />
      </a>

    </main>
  )
}

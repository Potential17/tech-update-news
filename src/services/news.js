const token = "d0d9cb86f3fc2554e1b3f67da8cec14f";

const fetchNews = async () => {
  const request = await fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=technology&pageNumber=1&pageSize=50&autoCorrect=true&withThumbnails=true&fromPublishedDate=null&toPublishedDate=null", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "45bb04e569msha4ea24744f733a1p1f193cjsn37dc4c8b8992",
      "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
    }
  })
  const response = await request.json();
  const { value } = response;

  console.log(value)

  let articles = value.reduce(function(accumulator, article) {
    if (article.image) {
      accumulator.push(article)
    }
    return accumulator
  }, []);

  return articles;
}

export default fetchNews;

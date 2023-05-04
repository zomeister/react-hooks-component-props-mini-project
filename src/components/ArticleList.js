import Article from './Article'

export default function ArticleList ({ articles }) {

    return (
        <main>
            { articles.map(article => { return (
                
                <Article key={article.id} title={article.title} date={article.date} preview={article.preview}/>)}
        
        )}
        </main>
    )
}
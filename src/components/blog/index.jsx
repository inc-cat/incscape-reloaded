import './blog.css';
import BlogData from './blogPosts.json';

function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-panel">
        <div className="blog-post">
          {BlogData.map(function (blogEntry) {
            return (
              <div className="blog">
                <h2>{blogEntry.title}</h2>
                {blogEntry.text.map(function (line) {
                  return <p>{line}</p>;
                })}
                {blogEntry.images.map(function (image) {
                  return (
                    <>
                      {' '}
                      <img src={image} className="blog-pics" /> <p></p>
                    </>
                  );
                })}
                {blogEntry.timestamp}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;

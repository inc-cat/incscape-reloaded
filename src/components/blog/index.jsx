import { useSearchParams } from 'react-router-dom';
import './blog.css';
import BlogData from './blogPosts.json';
import { useRef } from 'react';

function Blog() {
  let blogCount = BlogData.length;
  let [searchParams, setSearchParams] = useSearchParams();
  const searchTextRef = useRef();
  const keywordQuery = function (event) {
    event.preventDefault();
    let params = {
      name: searchTextRef.current.value,
    };
    setSearchParams(params);
  };

  return (
    <div>
      <h1>{searchParams.get('name')}</h1>
      <div className="blog-container">
        <div className="blog-panel">
          <div className="blog-post">
            {BlogData.map(function (blogEntry) {
              return (
                <div className="blog">
                  <h2>{blogEntry.title}</h2>
                  <div className="image-container">
                    {blogEntry.images.map(function (image) {
                      return (
                        <>
                          <img src={image} className="blog-pics" alt="" />
                        </>
                      );
                    })}
                  </div>
                  <div className="blog-text">
                    {blogEntry.text.map(function (line) {
                      return <p>{line}</p>;
                    })}
                    <div className="time-stamp">
                      #{blogCount}: {blogEntry.timestamp}
                      {blogCount--}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <form onSubmit={keywordQuery}>
          <label>
            <input type="text" name="name" ref={searchTextRef} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Blog;

import { useSearchParams } from 'react-router-dom';
import './blog.css';
import BlogData from './blogPosts.json';
import { useRef } from 'react';

function BlogEntry({ blogEntry }) {
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
          #{blogEntry.entryNumber}: {blogEntry.timestamp}
        </div>
      </div>
    </div>
  );
}

function Blog() {
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
            {BlogData.filter(function (blogEntry) {
              if (!searchParams.get('name')) {
                return true;
              }
              const textField = String(blogEntry.text).toLowerCase();
              const titleField = String(blogEntry.title).toLowerCase();
              return (
                textField.includes(searchParams.get('name').toLowerCase()) ||
                titleField.includes(searchParams.get('name').toLowerCase())
              );
            }).map(function (blogEntry) {
              return <BlogEntry blogEntry={blogEntry} />;
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

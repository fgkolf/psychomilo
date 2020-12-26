import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/Layout';
import BlogPostPreview from '../components/blog-post-preview';

const BlogIndex = ({ data }) => {
  const [filters, setFilters] = useState([]);
  const [ascending, setAscending] = useState(false);

  const toggleFilter = (tag) => {
    if (filters.includes(tag)) {
      setFilters(filters.filter((f) => f !== tag));
      return;
    }

    setFilters([...filters, tag]);
  };

  const filterPosts = ({ tags }) => {
    if (!filters.length) return true;
    if (!tags) return false;

    return filters.some((f) => tags.includes(f));
  };

  const posts = data.allContentfulBlogPost.edges;
  const distinctTags = data.allContentfulBlogPost.distinct;

  const nodes = ascending ? posts.map((post) => post.node).reverse() : posts.map((post) => post.node);

  return (
    <Layout>
      <div>
        <ul className="filters">
          <button type="button" onClick={() => setAscending((prev) => !prev)} className="recent-order">
            Πρόσφατα &nbsp;
            <FontAwesomeIcon className={ascending ? 'ascending' : ''} icon={faAngleUp} />
          </button>
          {distinctTags.map((tag) => (
            <li key={tag}>
              <button type="button" className={filters.includes(tag) ? 'active' : ''} onClick={() => toggleFilter(tag)}>
                {tag}
              </button>
            </li>
          ))}
        </ul>
        <ul className="blog-post-list">
          {nodes.filter(filterPosts).map((node) => (
            <BlogPostPreview key={node.slug} blogPost={node} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "DD MMMM YYYY")
          tags
          heroImage {
            fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyContentfulFluid
            }
          }
          childContentfulBlogPostBodyTextNode {
            body
          }
        }
      }
      distinct(field: tags)
    }
  }
`;

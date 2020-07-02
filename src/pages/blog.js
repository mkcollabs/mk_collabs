import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/secLayout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import './css/blog.css'

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout title={siteTitle}>
      <SEO title="Blog" />
      <section id="blog">
            <div className="main-container">
                <div className="blog-container">
                    <div className="blog-content">
                        <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, iusto.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="blog-articles" className="py-1">
          <div className="grid-articles-container">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                    <article key={node.fields.slug} className="article">
                      <h3 style={{marginBottom: rhythm(1 / 4),}} className="title">
                        <Link  to={node.fields.slug}>
                          {title}
                        </Link>
                      </h3>
                      <small>{node.frontmatter.date}</small>
                      <div className="bar"></div>
                      <section>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                          }}
                        />
                      </section>
                  </article>  
              )})}
            </div>
      </section>  
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

import React from "react"



import Layout from "../components/secLayout"
import SEO from "../components/seo"


import './css/thanks.css'

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="thanks" />
      <section id="thanks">
            <div className="main-container">
                <div className="thanks-container">
                    <div className="thanks-content">
                        <p className="my-2">Thank you for getting in touch!</p>
                        <p>We appreciate you contacting us. We will get back in touch with you soon!</p>
                        <p>Have a great day!</p>
                    </div>
                </div>
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

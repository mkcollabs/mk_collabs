import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/secLayout"
import SEO from "../components/seo"


import './css/style.css'
import './css/page-2.css'

const Process = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="6d process" />
        <section id="process">
            <div className="main-container">
                <div className="process-container">
                    <div className="process-content">
                        <h1>Our <span className="text-primary">6-D</span> Process</h1>
                        <h3>Our collaboration methodology</h3>
                        <p>Here's our proven six step process for designing winning campaigns</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="process-card">
            <div className="grid-card-container">
                <div className="card">
                    <h3 className="title">Discover</h3>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                </div>
                <div className="card">
                    <h3 className="title">Define</h3>
                    <div className="bar"></div>
                    <p>Our Development process will start with allocation of dedicated account manager. Your dedicated account manager will start with in depth understanding of your brand through interactive sessions with your team along with primary & secondary research.</p>
                </div>
                <div className="card">
                    <h3 className="title">Design</h3>
                    <div className="bar"></div>
                    <p>In-line with your brand insight, our creative team will unleash their creativity to conceptualise your business marketing strategy to propose to you the best fit marketing plan for your business model. </p>
                </div>
                <div className="card">
                    <h3 className="title">Develop</h3>
                    <div className="bar"></div>
                    <p>Add and update website tags — including conversion tracking, site analytics, remarketing, and more—with full integration to data analysis and tracking tools,  leading to have same data be passed to various tools. </p>
                </div>
                <div className="card">
                    <h3 className="title">Deploy</h3>
                    <div className="bar"></div>
                    <p>Campaign launch, Compliance Check, UI Assessment, Daily Tracking, Continuous optimization based on real-time data insights, Quality assurance</p>
                </div>
                <div className="card">
                    <h3 className="title">Deliver</h3>
                    <div className="bar"></div>
                    <p>Enhancing campaign’ performance to increase Conversion rate, CTR and market impression share while decreasing the Cost/Conv and achieve the highest ROI possible aligned the main business goals.</p>
                </div>
            </div>
        </section>
    </Layout>

  )
}

export default Process

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

import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Partners from "../components/carousel"

import jump from 'jump.js'
import AOS from 'aos';

import 'aos/dist/aos.css';

import './css/style.css'

AOS.init();

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="All posts" />
      <header id="showcase">
        <div className="main-container">
            <div className="showcase-container">
                <div className="showcase-content" 
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        data-aos-duration="1000">
                    <h1>Your Digital <span className="text-primary">Outreach</span></h1>
                    <h2 className='py-1'>A digital agency focused on web</h2>
                    <p>We enable businesses to fast forward their growth by delivering expert and innovative digital marketing services</p>
                    <a href="#contact" className="btn btn-primary" onClick = {() => jump('#contact', {duration: 2000})}>Free Consultation</a>
                </div>
            </div>
        </div>
    </header>
    {/* Who Section */}
    <section id="who" className="bg-light py-2">
      <div className="main-container">
        <h1 className="my-2">WHO WE ARE</h1>
        <div className="who-container py-2">
          <div className="card" 
                  data-aos="slide-right"
                  data-aos-offset="200"
                  data-aos-delay="10"
                  data-aos-duration="1000">
            <img className="who-img" src={require("../../content/assets/img/logos/Who-logo.png")} alt="who-img"/>
            <p className="card-text">Every customer is unique. That’s why we customize every one of our plans to fit your needs exactly. Whether it’s a small strategy or a comprehensive effort, we’ll sit down with you, listen to your requests, and prepare a customized plan to meet your online objectives.</p>
          </div>
          <div className="card"
                  data-aos="fade-in"
                  data-aos-offset="200"
                  data-aos-delay="300"
                  data-aos-duration="1000">
            <p className="card-text">Independant marketing senior professionals, Ex-Googlers & <span className="text-highlight bold">Certified advertisers</span></p>
          </div>
          <div className="card bg-primary"
                  data-aos="fade-in"
                  data-aos-offset="200"
                  data-aos-delay="300"
                  data-aos-duration="1000">
            <p className="card-text">We always strive to be a business partner adding value and knowledge to organizations in the field of <span className="text-dark bold">Digital Marketing</span></p>
          </div>
          <div className="card"
                  data-aos="fade-in"
                  data-aos-offset="200"
                  data-aos-delay="300"
                  data-aos-duration="1000">
            <p className="card-text">We help companies enable better customer experience by learning from their data. & using best advertising practices & custom <span className="text-secondary bold">designed</span> strategies</p>
          </div>
          <div className="card"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="300"
                  data-aos-duration="1000">
              <div className="process">
                <p className="card-text py-1">Every business is the owner’s baby, our client’s businesses are our own babies and we love to help them grow!</p>
                <Link to="/page-2" className="btn btn-dark">Check Our 6-D Process</Link>
              </div>
          </div>
        </div>
      </div>
    </section>
    {/* What Section */}
    <section id="what" className="py-3">
      <div className="main-container">
        <h1 className="my-1">WHAT WE DO</h1>
        <div className="what-container py-2">
          <div className="card bg-light my-1"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="300"
                  data-aos-duration="1000">
            <img src={require('../../content/assets/img/sevices/seo.png')} alt=""/>
            <div className="who-card p-2">
              <h3>SEO</h3>
              <p className="p-1">Search engine optimization is making your website more friendly to both search engines and users. When your site is easier to find, you rank higher in search results and more people find you. </p>
            </div>
          </div>
          <div className="card bg-light my-1"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="300"
                  data-aos-duration="1000">
            <div className="who-card p-2">
              <h3>Business Development</h3>
              <p className="p-1">Equal to what we create is why we create it at all. Through research, data, and our own unique tools and methodologies, we bring clarity to the business behind platforms, products, and services.
                    We set up new digital growth strategy set for success.</p>
            </div>
            <img src={require('../../content/assets/img/sevices/BusinessDevelopment.png')} alt=""/>
          </div>
          <div className="card bg-light my-1"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="300"
                  data-aos-duration="1000">
            <img  src={require('../../content/assets/img/sevices/GoogleAdvertising.png')} alt=""/>
            <div className="who-card p-2">
              <h3>Google Advertising</h3>
              <p className="p-1">Get in front of customers when they’re searching for businesses like yours across Google's different networks. Only pay for results, like clicks to your website or calls to your business. </p>
            </div>
          </div>
          <div className="card bg-light my-1"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="300"
                  data-aos-duration="1000">
            <div className="who-card p-2">
              <h3>Social media</h3>
              <p className="p-1">Connect with your audience to build your brand, increase sales, and drive website traffic. sponsored content and paid ads on different social platforms</p>
            </div>
            <img  src={require('../../content/assets/img/sevices/SocialMedia.png')} alt=""/>
          </div>
          <div className="card bg-light my-1"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="300"
                  data-aos-duration="1000">
          <img  src={require('../../content/assets/img/sevices/MarketingConsultancy.png')} alt=""/>
            <div className="who-card p-2">
              <h3>Marketing Consultancy </h3>
              <p className="p-1">Looking to improve your marketing efforts but you do not know where to start? Hook Creatives can help with their Marketing Consulting Services!</p>
            </div>
          </div>
          <div className="card bg-light my-1"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="300"
                  data-aos-duration="1000">
            <div className="who-card p-2">
              <h3>Tracking & Analytics</h3>
              <p className="p-1">We’ll help you monitor campaign performance by using Tracking and Analytics. Collecting real data enables us to optimize your online marketing strategies towards KPIs.</p>
            </div>
            <img  src={require('../../content/assets/img/sevices/TrackingAnalytics.png')} alt=""/>
          </div>
        </div>
      </div>
    </section>
    {/* Partners Section */}
    <section id="partners">
      <div className="main-container">
        <h1>PARTNERS</h1>
        <Partners></Partners>
      </div>
    </section>  
    {/*  Contact Section */}
    <section id="contact" className="py-3">  
      <div className= "main-container">
        <h1 >CONSULTAION</h1>
        <p className="contact-text py-1">Don't hesitate leaving your info down below to schedule our first meeting together</p>
        <div className="form-container">
          <form method="post" action="#" className="contact-form">
            <div  className="form-header">
              <h3>Contact Us</h3>
              <small>or</small>
              <h3>Request A <span className="text-primary">Free</span> Consultation</h3>
            </div>
            <div className="form-control py-1">
              <label htmlFor="name">Name</label>
              <input type="text" required name="name" id="name" placeholder="Enter your name"/>
            </div>
            <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" required name="email" id="email" placeholder="Enter your email"></input>
            </div>
            <div className="form-control">
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" placeholder="Enter your Phone"></input>
            </div>
            <div className="form-control">
            <label htmlFor="company">Company Name</label>
            <input type="tel" name="company" id="company" placeholder="Optional"></input>
            </div>
            <div className="form-control">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder="..."></textarea>
            </div>
            <button class="form-btn">Send</button>
          </form>
          <div class="features">
            <div class="feature">
                <i class="fas fa-chart-pie"></i>
                <h3>Analytics</h3>
                <p>Don’t hesitate to leave your company info, so we can make a quick analysis before contacting you.</p>
            </div>
            <div class="feature">
                <i class="fas fa-phone-volume"></i>
                <h3>Call Us At</h3>
                <p>+96-627-9874-7173</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>

  )
}

export default Index

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

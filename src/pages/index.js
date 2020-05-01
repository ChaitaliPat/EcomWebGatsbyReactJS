import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/reusable/HeroSection'
import InfoBlock from '../components/reusable/InfoBlock'
import DualInfoBlock from '../components/reusable/DualInfoBlock'


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img={data.img.childImageSharp.fluid}
    title="I write code"
    subtitle="LearnCodeOnline.in"
    heroclass="hero-background" />
    <InfoBlock 
    heading="About Us"/>
    <DualInfoBlock heading="Our Team" hrefheading="Connect me"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`

export default IndexPage

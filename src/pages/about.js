import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Title from "../components/Globals/Title";

import SEO from "../components/seo";

import BackgroundSection from "../components/Globals/BackgroundSection";

import Info from "../components/Home/Info";

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-background"
    />
    <section className="py-5">
      <div className="container">
        <Title title="about us" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Regular Taste becomes a great choice for our visitors to hangout.
              Regular Taste has established on the belief that our visitors
              should feel happy with our dishes.
            </p>
            <Link to="/">
              <button className="btn text-uppercase btn-yellow">
                home page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;

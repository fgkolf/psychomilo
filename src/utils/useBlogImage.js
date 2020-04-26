import { useStaticQuery, graphql } from 'gatsby'

export const useBlogImage = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "blog.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 392) {
              ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return data.file.childImageSharp.fluid
}

export default useBlogImage

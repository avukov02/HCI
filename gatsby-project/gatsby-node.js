/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions}) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const  {
    data: {
      allMdx: { posts },
    },
  } = await graphql(`
  query BlogPages {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "//content/blog//" }
        frontmatter: { published: { eq: true } }
      }
    ) {
      posts: edges {
        post: node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
  
  `)



  // Create blog post pages.
  //const posts = result.data.allMdx.edges

  // you'll call `createPage` for each result
  posts.forEach(({ post }, index) => {
    const slug =post.frontmatter.slug
    const previous = index === 0 ? null : posts[index - 1].post
    const next = index === posts.length - 1 ? null : posts[index + 1].post
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: `/blog/${post.frontmatter.slug}`,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/posts-page-layout.js`),
      // You can use the values in this context in
      // our page layout component
      context: {
        slug,
        previous,
        next
       },
    })
  })


const postsPerPage = 3
const numPages = Math.ceil(posts.length / postsPerPage)

Array.from({ length: numPages }).forEach((_, index) => {
  createPage({
    path: index === 0 ? `/blog` : `/blog/${index + 1}`,
    component: path.resolve(`./src/templates/posts-list.js`),
    context: {
      // additional data can be passed via context;
      // this will be used in the GraphQL query as
      // an query variable
      limit: postsPerPage,
      skip: index * postsPerPage,
      numPages,
      currentPage: index + 1,
    },
  })
})
}


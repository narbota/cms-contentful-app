import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
// q: is index.js a react component?
// a: yes
// q: how does nextjs work?
// a: it's a react framework that uses server side rendering
// q: what is server side rendering?
// a: it's a way to render react components on the server
// q: what is the server?
// a: it's the computer that runs the code
// q: what is the client?
// a: it's the computer that runs the code
// q: what is the difference between the server and the client?
// a: the server is the computer that runs the code
// q: what is the difference between the server and the client?
// a: the client is the computer that runs the code
// q: what is the difference between the server and the client?
// q: what is express?
// a: it's a nodejs framework
// q: what is nodejs?
// a: it's a javascript runtime
// q: what is a javascript runtime?
// a: it's a program that runs javascript
// q: what is a javascript runtime?
//q: what is a framework?
//a: it's a library that provides a structure for your code
//q: what is a library?
//a: it's a collection of code that you can use in your code
// q: what is nextjs?

//q: why aren't images loading?
//a: because the image url is wrong
//q: how do i fix it?
//a: i don't know
// q: my contentful images are not loading
// q: useeffect to load images
// q: how do i load images in nextjs?
// a: use next/image
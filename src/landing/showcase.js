import React from "react"
import s from "./showcase.module.css"
import { Carousel } from "./carousel"

export { Showcase }

function Showcase() {
  return (
    <section className={s.showcase}>
      <Carousel>
        <BlogDemo />
        <TalkDemo />
        <MiniDocsDemo />
        <TutorialDemo />
      </Carousel>
    </section>
  )
}

function BlogDemo() {
  return (
    <a
      className={s.demo}
      href="https://code-hike-scrollycoding-preview.vercel.app/posts/lorem-ipsum-three"
    >
      <Browser>
        <img src="blog-cover.png" />
      </Browser>
      <h3>A Blog Post</h3>
    </a>
  )
}

function TalkDemo() {
  return (
    <a
      className={s.demo}
      href="https://www.youtube.com/watch?v=xEu3t-KJVVg"
    >
      <Browser>
        <img src="talk-cover.png" />
      </Browser>
      <h3>A Conference Talk</h3>
    </a>
  )
}

function TutorialDemo() {
  return (
    <a
      className={s.demo}
      href="https://pomb.us/nextjs-static-props/"
    >
      <Browser>
        <img src="tutorial-cover.png" />
      </Browser>
      <h3>A Tutorial</h3>
    </a>
  )
}

function MiniDocsDemo() {
  return (
    <a
      className={s.demo}
      href="https://swr-minidocs.codehike.org/"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={s.phone}>
        <img src="minidocs-cover.png" />
      </div>
      <h3>
        A <br />
        Landing <br /> Page
      </h3>
    </a>
  )
}

function Browser({ children }) {
  return (
    <div className={s.browser}>
      <div className={s.menuBar}>
        <div className={s.circle} />
        <div className={s.circle} />
        <div className={s.circle} />
      </div>
      {children}
    </div>
  )
}

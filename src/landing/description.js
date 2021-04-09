import React from "react";
import s from "./description.module.css";
import Tooltip from "rc-tooltip";

export function Description() {
  return (
    <>
      <p className={s.description}>
        Code Hike is an{" "}
        <Tooltip
          overlayClassName={s.overlay}
          placement="top"
          trigger={["click"]}
          overlay={<ExperimentalNote />}
        >
          <span className={s.hovereable}>experimental*</span>
        </Tooltip>{" "}
        open-source toolset for building all types of{" "}
        <strong>code walkthroughs</strong>: blog posts, tutorials, quickstarts,
        slides, videos, workshops, docs, and so on.
      </p>
      <div className={s.buttons}>
        <a className={s.github} href="https://github.com/code-hike/codehike">
          GitHub
        </a>
        <a className={s.getStarted} href="#building-blocks">
          Get Started
        </a>
      </div>
    </>
  );
}

function ExperimentalNote() {
  return (
    <div className={s.experimental}>
      <span className={s.label}>April 2021 status:</span>{" "}
      <p>
        <a href="https://www.npmjs.com/org/code-hike">
          Experimental versions on NPM
        </a>
        . Still unstable and undocumented. More codesandbox examples coming
        soon.
        Currently working on a{" "}
        <a href="https://www.npmjs.com/package/@code-hike/scrollycoding">
          new high-level package
        </a>
      </p>
    </div>
  );
}

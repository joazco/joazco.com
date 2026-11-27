import React, { useState } from "react";
import { Project } from "../../types";
import Icon from "./Icon";

// The console shows one existing project per universe, matched by its link.
const universes = [
  { label: "Games", category: "Video game / RPG", link: "darkbluedungeon" },
  { label: "Mobile", category: "Mobile / Interactive 3D", link: "v-sper" },
  { label: "Web", category: "Web / Online tools", link: "hedgietools.com" },
];

type Bloc1Props = {
  projects: Project[];
  accentClass: string;
};

const Bloc1 = ({ projects, accentClass }: Bloc1Props) => {
  const [active, setActive] = useState<number>(0);
  const slides = universes
    .map((universe) => ({
      ...universe,
      project: projects.find((project) => project.link.includes(universe.link)),
    }))
    .filter((slide) => slide.project);
  const slide = slides[active];

  return (
    <>
      <section className="joazco--block-1 wrap" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="star" aria-hidden="true">
              ✳
            </span>{" "}
            Independent developer · South of France
          </p>
          <h1 id="hero-title">
            Code.
            <br />
            <span className={accentClass}>Play.</span>
            <br />
            Character.
          </h1>
          <p className="intro">
            Websites, apps and games that move your ideas forward. Designed for people. Built
            properly.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button">
              Explore the projects <Icon name="down" />
            </a>
            <a href="#contact" className="text-link">
              Discuss your idea <Icon name="arrow" />
            </a>
          </div>
        </div>

        {slide && (
          <div className="hero-demo">
            <div className="demo-caption" aria-hidden="true">
              <span>The playground</span>
              <span>
                0{active + 1} / 0{slides.length}
              </span>
            </div>
            <div className="console">
              <div className="console-head" aria-hidden="true">
                <span>
                  <i /> JOAZCO.EXE
                </span>
                <span>− □ ×</span>
              </div>
              <div className="demo-display">
                <img src={slide.project.image} alt={`Preview of ${slide.project.title}`} />
                <div className="demo-overlay">
                  <span>{slide.category}</span>
                  <strong>{slide.project.title}</strong>
                </div>
              </div>
              <div className="demo-tabs" role="group" aria-label="Explore Joazco’s universes">
                {slides.map((item, i) => (
                  <button
                    key={item.label}
                    type="button"
                    aria-pressed={i === active}
                    onClick={() => setActive(i)}
                  >
                    <span>0{i + 1}</span> {item.label}
                  </button>
                ))}
              </div>
              <div className="console-bottom" aria-hidden="true">
                <span>One idea → one experience</span>
                <div className="bands">
                  <b />
                  <b />
                  <b />
                  <b />
                </div>
              </div>
            </div>
            <p className="demo-note">Three universes. One curiosity.</p>
          </div>
        )}

        <div className="hero-foot">
          <span>Web / Mobile / Game dev</span>
          <a href="#projects">Scroll down ↓</a>
        </div>
      </section>
      <div className="rainbow-divider" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
    </>
  );
};

export default Bloc1;

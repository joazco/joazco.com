import React from "react";
import { socials } from "./brand";
import Icon from "./Icon";

const channels = [
  {
    name: "YouTube",
    handle: "@JOAZCO",
    url: socials.youtube,
    text: "Gaming and pop culture news in short videos: trailers, announcements and leaks, explained clearly.",
  },
  {
    name: "TikTok",
    handle: "@joazco_official",
    url: socials.tiktok,
    text: "Gaming and pop culture news, trailers and leaks, from the indie dev of Dark Blue Dungeon.",
  },
  {
    name: "X",
    handle: "@Joazco",
    url: socials.x,
    text: "Trailers, leaks and announcements, plus anime, movies and TV.",
  },
];

const Universe = () => {
  return (
    <section className="joazco--universe wrap" id="universe" aria-labelledby="universe-title">
      <p className="eyebrow">03 / My universe</p>
      <h2 id="universe-title">
        Gaming &amp; pop culture
        <br />
        news.
      </h2>
      <p className="universe-intro">
        Beyond code, I cover video games and pop culture: new releases, trailers, industry news,
        series, movies and anime. All with an indie developer’s point of view.
      </p>
      <ul className="channels">
        {channels.map((channel) => (
          <li key={channel.name}>
            <a href={channel.url} target="_blank" rel="noopener noreferrer">
              <h3>{channel.name}</h3>
              <span className="handle">{channel.handle}</span>
              <p>{channel.text}</p>
              <span className="channel-cta">
                Follow on {channel.name} <Icon name="arrow" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Universe;

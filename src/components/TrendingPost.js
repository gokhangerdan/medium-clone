import { Button, Container, Grid } from "@material-ui/core";

function TrendingPost(props) {
  return (
    <div className="Trending_Post">
      <span>{props.number}</span>
      <img src={props.image} />
      <h4>{props.author}</h4>
      <h2>{props.title}</h2>
      <div>{props.date} &nbsp;· &nbsp;{props.time} min read</div>
    </div>
  );
}

export default TrendingPost;
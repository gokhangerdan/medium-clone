import { Button, Container, Grid } from "@material-ui/core";

import user from "../static/user.png"
import image from "../static/image.jpg"
import bookmark from "../static/bookmark.svg"

function DiscoverPost(props) {
    return (
      <div className="Discover_Post">
        <div className="Post_Body">
          <div className="Discover_User">
            <img src={user} />
            <span>Ella Alderson</span>
          </div>
          <h2>This Long-Awaited Technology May Finally Change the World</h2>
          <h3>Solid-state batteries are poised to emerge in the coming years</h3>
          <div>
            <span className="Post_Info">May 30 &nbsp;· &nbsp;6 min read</span>
            <span className="Post_Label_Seperator"> &nbsp;· &nbsp;</span>
            <span className="Post_Label">Science</span>
            <img  className="Post_Bookmark" src={bookmark} />
          </div>
        </div>
        <img className="Post_Image" src={image} />
      </div>
    );
  }
  
  export default DiscoverPost;
function DiscoverPost(props) {
    return (
      <div className="Discover_Post">
        <div className="Post_Body">
          <div className="Discover_User">
            <img src={props.image} />
            <span>{props.author}</span>
          </div>
          <h2>{props.title}</h2>
          <h3>{props.summary}</h3>
          <div>
            <span className="Post_Info">{props.date} &nbsp;· &nbsp;{props.time} read</span>
            <span className="Post_Label_Seperator"> &nbsp;· &nbsp;</span>
            <span className="Post_Label">{props.category}</span>
            <img  className="Post_Bookmark" src={props.bookmark} />
          </div>
        </div>
        <img className="Post_Image" src={props.postImage} />
      </div>
    );
  }
  
  export default DiscoverPost;
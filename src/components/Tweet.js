import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";

function Tweet(props) {
  const {tweet} = props;
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image}/>
      <div className="body">
        <div className="top">
          <User userData={tweet.user}/>
          <Timestamp time={tweet.timestamp}/>
        </div>
        <Message message={tweet.message}/>
        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;

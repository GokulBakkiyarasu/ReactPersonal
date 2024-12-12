import axios from "axios";

function Post({ id, comments }) {
  return (
    <div>
      <h1>Comment for Post #{id}</h1>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}

function Comment({ email, body }) {
  return (
    <div>
      <h5>{email}</h5>
      <p>{body}</p>
    </div>
  );
}

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const { data } = res;
  return { ...query, comments: data };
};

export default Post;

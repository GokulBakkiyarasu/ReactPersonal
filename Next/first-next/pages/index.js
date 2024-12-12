import axios from "axios";
import Link from "next/link";
// import { Component } from "react";

// class Index extends Component {
//   constructor(props) {
//     super(props);
//   }

//   static async getInitialProps() {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     const { data } = res;
//     return { posts: data };
//   }

//   render() {
//     const { posts } = this.props;
//     return (
//       <div>
//         <ul>
//           {posts.map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

const Index = ({ posts }) => {
  //   console.log("Running Index File!..."); this gets console logged on the server side.
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`} as={`p/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  return { posts: data };
};

export default Index;

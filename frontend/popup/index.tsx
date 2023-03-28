// popup/index.tsx
import { useState } from "react";

import { sendToBackground } from "@plasmohq/messaging";

function IndexPopup() {
  const [showTable, setShowTable] = useState(false);
  const [posts, setPosts] = useState([]);

  async function handleGetLatestPosts() {
    const resp = await sendToBackground({
      name: "api",
    });
    setPosts(resp);
    setShowTable(!showTable);
  }

  return (
    <div>
      <h2>Get Latest Posts</h2>
      <button onClick={handleGetLatestPosts}>
        {showTable ? "Hide Posts" : "Show Posts"}
      </button>

      {showTable && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Author</th>
                <th>Title</th>
                <th>Tags</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id}>
                  <td>{post.author}</td>
                  <td>{post.title}</td>
                  <td>{post.tags.join(", ")}</td>
                  <td>{new Date(post.date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <footer>Forms4TV</footer>
        </div>
      )}
    </div>
  );
}

export default IndexPopup;
// Get the "slug" from the URL
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

// Load and display the post
async function loadPost() {
  if (!slug) {
    document.getElementById("post-title").textContent = "Post not found.";
    return;
  }

  try {
    const post = await fetch(`/posts/${slug}.json`).then(res => res.json());

    document.title = post.title;
    document.getElementById("post-title").textContent = post.title;
    document.getElementById("post-date").textContent = post.date || "";

    const contentDiv = document.getElementById("post-content");
    contentDiv.innerHTML = "";

    for (const block of post.content) {
      if (block.type === "paragraph") {
        const p = document.createElement("p");
        p.textContent = block.text;
        contentDiv.appendChild(p);
      } else if (block.type === "image") {
        const img = document.createElement("img");
        img.src = `/images/${block.src}`;
        img.alt = block.alt || "";
        contentDiv.appendChild(img);
      } else if (block.type === "header") {
        const h2 = document.createElement("h2");
        h2.textContent = block.text;
        contentDiv.appendChild(h2);
      }
    }
  } catch (err) {
    document.getElementById("post-title").textContent = "Error loading post.";
    console.error(err);
  }
}

loadPost();

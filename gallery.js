const gallery = document.getElementById("Gallery");

// Grab tag from meta tag
const tag = document.querySelector('meta[name="post-tag"]').content;

async function loadPosts() {
  const files = await fetch("/posts/manifest.json").then(res => res.json());

  for (const file of files) {
    const post = await fetch(`/posts/${file}`).then(r => r.json());
    if (!post.tags.includes(tag)) continue;

    const card = document.createElement("a");
    card.href = `/Posts/post.html?slug=${post.slug}`;
    card.className = "post-card";

    const img = document.createElement("img");
    img.src = `/images/${post.thumbnail}`;
    img.alt = post.title;

    const title = document.createElement("h3");
    title.textContent = post.title;

    card.appendChild(img);
    card.appendChild(title);
    gallery.appendChild(card);
  }
}

loadPosts();

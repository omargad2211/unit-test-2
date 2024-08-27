// Fetch users and create tabs
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const tabsContainer = document.getElementById("tabs");
    users.forEach((user) => {
      const tab = document.createElement("div");
      tab.classList.add("tab");
      tab.textContent = user.name;
      tab.dataset.userId = user.id;
      tab.addEventListener("click", () => displayUserPosts(user.id, tab));
      tabsContainer.appendChild(tab);
    });
  })
  .catch((error) => console.error("Error fetching users:", error));

//  display user's posts
async function displayUserPosts(userId, clickedTab) {
  try {
    // Remove active
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => tab.classList.remove("active"));

    // Add active to the clicked
    clickedTab.classList.add("active");

    // Fetch posts for the selected user
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const posts = await response.json();

    // Display posts flsaf7a
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      const postTitle = document.createElement("div");
      postTitle.classList.add("post-title");
      postTitle.textContent = post.title;
      const postBody = document.createElement("div");
      postBody.classList.add("post-body");
      postBody.textContent = post.body;
      postElement.appendChild(postTitle);
      postElement.appendChild(postBody);
      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}


export async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
}

export async function fetchPosts(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  const posts = await response.json();
  return posts;
}



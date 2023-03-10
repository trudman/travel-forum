const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  // const comment_text = document.querySelector("#comment_text").value.trim();
  const post_text = document.querySelector("#post-text").value.trim();

  if (title && post_text) {
    const response = await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({ title, post_text }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("test");
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/posts/${id}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       document.location.replace("/profile");
//     } else {
//       alert("Failed to delete post");
//     }
//   }
// };

document.querySelector("#create").addEventListener("submit", newFormHandler);

// document.querySelector(".post-list").addEventListener("click", delButtonHandler);

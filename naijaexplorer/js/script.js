// Display submitted stories from localStorage
document.addEventListener("DOMContentLoaded", () => {
    const storyForm = document.getElementById("storyForm");
    const storyContainer = document.getElementById("story-container");

    if (storyForm) {
        storyForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const location = document.getElementById("location").value;
            const story = document.getElementById("story").value;

            const newStory = { name, location, story };
            let stories = JSON.parse(localStorage.getItem("stories")) || [];
            stories.push(newStory);
            localStorage.setItem("stories", JSON.stringify(stories));

            storyForm.reset();
            alert("Thanks for sharing your story!");
        });
    }

    if (storyContainer) {
        const stories = JSON.parse(localStorage.getItem("stories")) || [];

        if (stories.length === 0) {
      storyContainer.innerHTML = "<p>No stories yet. Be the first to share!</p>";
    } else {
      storyContainer.innerHTML = stories.map((s) => `
        <article>
          <h3>${s.name} in ${s.location}</h3>
          <p>${s.story}</p>
        </article>
      `).join("");
    }
  }
});
document.querySelector(".lstb2").addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.querySelector(".input1").value.trim();
    const email = document.querySelectorAll(".input1")[1].value.trim();
    const message = document.getElementById("smtng").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message sent! I'll get back to you soon.");
});

window.onscroll = () => {
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

document.getElementById("scrollTopBtn").addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("DOMContentLoaded", () => {
    const nightBtn = document.querySelector(".night");
    nightBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});




// Opens the project URL in a new tab when the card is clicked
function openProject(url) {
  window.open(url, '_blank');
}

// Optional: Add keyboard accessibility so that pressing Enter on the focused card opens the project
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const link = card.querySelector('a.project-btn');
      if (link) {
        window.open(link.href, '_blank');
      }
    }
  });
});

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "GO_TO_FIRST_SAVED") {
    if (!window.location.href.includes("/saved")) {
      alert("Please open Instagram Saved Posts first.");
      return;
    }
    fastScroll();
  }
});

let lastHeight = 0;
let sameHeightCount = 0;

function fastScroll() {
  lastHeight = 0;
  sameHeightCount = 0;

  // 🔑 FORCE initial scroll activation
  window.scrollTo({ top: 1, behavior: "instant" });

  const interval = setInterval(() => {
    // FLYING FAST SCROLL
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "instant"
    });

    const currentHeight = document.body.scrollHeight;

    if (currentHeight === lastHeight) {
      sameHeightCount++;
    } else {
      sameHeightCount = 0;
      lastHeight = currentHeight;
    }

    if (sameHeightCount >= 2) {
      clearInterval(interval);
      setTimeout(highlightFirstSaved, 350);
    }
  }, 220);
}


function highlightFirstSaved() {
  const posts = document.querySelectorAll("article");
  if (!posts.length) return;

  const firstPost = posts[posts.length - 1];

  firstPost.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  firstPost.style.border = "4px solid #ff3b3b";
  firstPost.style.borderRadius = "10px";
}

document.getElementById("goFirst").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs || !tabs[0] || !tabs[0].url) return;

    // Only send message if we are on Instagram
    if (!tabs[0].url.includes("instagram.com")) {
      alert("Please open Instagram Saved Posts first.");
      return;
    }

    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "GO_TO_FIRST_SAVED" },
      () => {
        // This prevents the 'receiving end does not exist' error
        if (chrome.runtime.lastError) {
          console.warn("Content script not ready yet.");
        }
      }
    );
  });
});

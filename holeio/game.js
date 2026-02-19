appendScript("https://cdn.jsdelivr.net/gh/arcade-v/unity/tunnel_rush/UnityProgress.js", function () {
appendScript("https://cdn.jsdelivr.net/gh/arcade-v/unity/tunnel_rush/unityloader49.js", function () {
    // Step 3: Instantiate Unity game after loader is ready
    var gameInstance = UnityLoader.instantiate(
      "gameContainer",
      "https://cdn.jsdelivr.net/gh/arcade-v/unity/holeio/BuildWeb.json",
      {
        onProgress: UnityProgress,
        Module: {
          onRuntimeInitialized: function () {
            UnityProgress(gameInstance, "complete");
          }
        }
      }
    );
  });
});

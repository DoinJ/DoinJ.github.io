---
layout: post
title: "Catch the Smiley Game"
date: 2024-02-07 10:00:00
description: Play a simple game where you catch the smiley faces.
tags: game interactive
categories: sample-posts
---

This is a simple game where you try to click on the smiley face as it moves around the screen. Can you catch it?

<div id="game-area">
  <button id="smiley" onclick="scorePoint()">😊</button>
</div>
<div id="scoreboard">
  <p>Score: <span id="score">0</span></p>
  <p>Time left: <span id="time-left">30</span> seconds</p>
</div>

---
layout: post
title: "Catch the Smiley Game"
date: 2024-02-07 10:00:00
description: Play a simple game where you catch the smiley faces.
tags: game interactive
categories: games
---

This is a simple game where you try to click on the smiley face as it moves around the screen. Can you catch it?

<div id="game-area">
  <button id="smiley" onclick="scorePoint()">😊</button>
</div>
<div id="scoreboard">
  <p>Score: <span id="score">0</span></p>
  <p>Time left: <span id="time-left">30</span> seconds</p>
</div>

<!-- Include the game's styles -->
{% include game-styles.html %}

<!-- Include the game's script -->
{% include game-script.html %}
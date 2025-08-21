async function getjoke() {
  const jokeDiv = document.getElementById("joke");

  try {
    jokeDiv.innerHTML = "⏳ loading...";
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    if (!response.ok) throw new error("failed to fetch joke");

    const data = await response.json();

    jokeDiv.innerHTML = `
      <p><b>🤔 ${data.setup}</b></p>
      <p>😂 ${data.punchline}</p>
    `;
  } catch (error) {
    jokeDiv.innerHTML = `<p>❌ ${error.message}</p>`;
  }
}

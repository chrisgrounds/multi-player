window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const streams = 
    urlParams
      .get("streams")
      .split(",");

  streams.forEach(stream => createIframeForStream(stream));
}

function createIframeForStream(name) {
  const iframe = document.createElement("iframe");
  iframe.src = `https://player.twitch.tv/?channel=${name}`;
  iframe.frameborder = "0";
  iframe.scrolling = true;
  iframe.allowfullscreen = true;
  iframe.mozallowfullscreen = true;
  iframe.webkitallowfullscreen = true;

  iframe.className = "iframe__container";

  const divContainer = document.createElement("div");
  divContainer.className = "video__container";
  
  document
    .getElementById("video-target")
    .appendChild(divContainer)
    .appendChild(iframe);
}

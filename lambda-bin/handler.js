const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Multiplayer</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>
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
  iframe.src = "https://player.twitch.tv/?channel=" + name;
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
</script>
</head>
  <body>
    <div id="video-target" class="autogrid"></div>
  </body>
</html>
<style>
.autogrid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(720px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(480px, 1fr));
}

.video__container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* height 9 / width 16 */
}

.iframe__container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
`

exports.handler = async function(event, context) {
  return {
    "statusCode": 200,
    "body": htmlBody,
    "headers": {
      "Content-Type": "text/html"
    }
  }
}

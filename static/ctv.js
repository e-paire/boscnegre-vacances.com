window.ctoutvert = {
  id: 14230,
  lang: "auto",
  url: "https://bookingpremium.secureholiday.net/widgets/",
}

const request = new XMLHttpRequest()
request.open(
  "GET",
  "https://bookingpremium.secureholiday.net/widgets/js/src.json"
)
request.responseType = "json"
request.json = true
request.send()
request.onload = function () {
  window.ctoutvert.src =
    request.responseType == "json"
      ? request.response
      : JSON.parse(request.response)

  const firstScript = document.getElementsByTagName("script")[0]
  const ctvScript = document.createElement("script")

  ctvScript.src = window.ctoutvert.src[0]
  firstScript.parentNode.insertBefore(ctvScript, firstScript)
}

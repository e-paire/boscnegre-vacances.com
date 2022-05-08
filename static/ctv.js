window.ctoutvert = {
  id: 14230,
  lang: "auto",
  url: "https://bookingpremium.secureholiday.net/widgets/",
}

const r = new XMLHttpRequest()
r.open("GET", "https://bookingpremium.secureholiday.net/widgets/js/src.json")
r.responseType = "json"
r.json = true
r.send()

r.onload = function () {
  window.ctoutvert.src =
    r.responseType == "json" ? r.response : JSON.parse(r.response)

  const fjs = document.getElementsByTagName("script")[0]
  const js = document.createElement("script")

  js.id = "345"
  js.setAttribute("data-type", "ctv")
  // js.async = 0
  js.src = window.ctoutvert.src[0]

  fjs.parentNode.insertBefore(js, fjs)
}

$(document).ready(() => {
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")
  $("#form").submit((event) => {
    event.preventDefault()
    const text1 = $("#text1").val()
    const text2 = $("#text2").val()
    const fcolor = $('#fontcolor').val()
    const bgcolor = $('#backgroundcolor').val()
    ctx.fillStyle = bgcolor
    ctx.fillRect(0, 0, 506, 263)
    ctx.font = "48px serif"
    ctx.fillStyle = fcolor
    ctx.textAlign = "left"
    ctx.textBaseline = "top"
    ctx.fillText(text1, 50, 55, 400)
    ctx.fillText(text2, 50, 137, 400)
    const png = canvas.toDataURL()
    document.getElementById("output").src = png
  })
})
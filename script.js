let count = 0;
function myFunction() {
  count++;
  if (count % 2 === 1) {
    document.getElementById("heart").src = "https://i.imgur.com/zKn8lCq.png";
  } else {
    document.getElementById("heart").src = "https://i.imgur.com/2QsTrfX.png";
  }
}

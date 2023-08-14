window.onload = function () {
  const resultParagraph = document.getElementById("result");
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)

  if (dayOfWeek === 4) {
    resultParagraph.textContent = "Yes, it's Thursday!";
  } else {
    resultParagraph.textContent = "No, it's not Thursday.";
  }
};
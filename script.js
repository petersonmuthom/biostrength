function openNav() {
  document.getElementById("mySidepanel").style.width = "330px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}



document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const text = button.previousElementSibling; // the <p>

    text.classList.toggle('expanded');

    button.textContent = text.classList.contains('expanded')
      ? 'Read less'
      : 'Read more';
  });
});
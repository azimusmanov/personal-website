const body = document.getElementsByTagName("body")[0];
const hyperlinks = document.getElementsByTagName("a");
window.addEventListener('scroll', function() {
  const frontpage = document.getElementById('frontpage');
  const video = document.getElementById('bg-video');
  const rect = frontpage.getBoundingClientRect();

  // If the top section is out of view, hide the video
  if (rect.bottom <= 0) {
    video.style.display = 'none';
  } else {
    video.style.display = 'block';
  }
});
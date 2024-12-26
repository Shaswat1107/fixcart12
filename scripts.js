// Basic form validation example
document.querySelector('form').addEventListener('submit', function(event) {
  var service = document.getElementById('service').value;
  var time = document.getElementById('time').value;

  if (!service || !time) {
    event.preventDefault();
    alert('Please fill out all fields.');
  }
});

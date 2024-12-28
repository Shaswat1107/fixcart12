// Basic form validation example
document.querySelector('form').addEventListener('submit', function(event) {
  var service = document.getElementById('service').value;
  var time = document.getElementById('time').value;

  if (!service || !time) {
    event.preventDefault();
    alert('Please fill out all fields.');
  }
});
// Add this to your existing scripts.js file

document.addEventListener('DOMContentLoaded', function() {
  // Show the modal when the page loads
  const modal = document.getElementById('location-modal');

  // Close the modal when the user clicks the close button
  document.querySelector('.close-button').addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Close the modal when the user clicks outside of the modal content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Handle the form submission
  document.getElementById('location-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    alert('Location submitted: ' + location);
    modal.style.display = 'none';
  });
});

function openLocationModal() {
  const modal = document.getElementById('location-modal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('location-modal');
  modal.style.display = 'none';
}

function updateLocation() {
  const dropdown = document.getElementById('location-dropdown');
  const selectedValue = dropdown.value;

  if (selectedValue === 'current') {
    useCurrentLocation();
  } else if (selectedValue === 'manual') {
    openLocationModal();
  }
}

function useCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      alert('Current Location: Latitude ' + lat + ', Longitude ' + lon);
      document.getElementById('location').value = 'Latitude: ' + lat + ', Longitude: ' + lon;
      closeModal();
    }, function(error) {
      alert('Error getting location: ' + error.message);
    });
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}
// Add this to your existing scripts.js file

document.addEventListener('DOMContentLoaded', function() {
  // Show the modal when the page loads
  const modal = document.getElementById('location-modal');

  // Close the modal when the user clicks the close button
  document.querySelector('.close-button').addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Close the modal when the user clicks outside of the modal content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Handle the form submission
  document.getElementById('location-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    alert('Location submitted: ' + location);
    modal.style.display = 'none';
    redirectToBooking();
  });
});

function openLocationModal() {
  const modal = document.getElementById('location-modal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('location-modal');
  modal.style.display = 'none';
}

function updateLocation() {
  const dropdown = document.getElementById('location-dropdown');
  const selectedValue = dropdown.value;

  if (selectedValue === 'current') {
    useCurrentLocation();
  } else if (selectedValue === 'manual') {
    openLocationModal();
  }
}

function useCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      alert('Current Location: Latitude ' + lat + ', Longitude ' + lon);
      document.getElementById('location').value = 'Latitude: ' + lat + ', Longitude: ' + lon;
      closeModal();
      redirectToBooking();
    }, function(error) {
      alert('Error getting location: ' + error.message);
    });
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}

function redirectToBooking() {
  window.location.href = '#book';
}
// Add this to your existing scripts.js file

function openZohoChat() {
  $zoho.salesiq.floatwindow.visible('show');
}

document.addEventListener('DOMContentLoaded', function() {
  // Show the modal when the page loads
  const modal = document.getElementById('location-modal');

  // Close the modal when the user clicks the close button
  document.querySelector('.close-button').addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Close the modal when the user clicks outside of the modal content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Handle the form submission
  document.getElementById('location-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    alert('Location submitted: ' + location);
    modal.style.display = 'none';
    redirectToBooking();
  });
});

function openLocationModal() {
  const modal = document.getElementById('location-modal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('location-modal');
  modal.style.display = 'none';
}

function updateLocation() {
  const dropdown = document.getElementById('location-dropdown');
  const selectedValue = dropdown.value;

  if (selectedValue === 'current') {
    useCurrentLocation();
  } else if (selectedValue === 'manual') {
    openLocationModal();
  }
}

function useCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      alert('Current Location: Latitude ' + lat + ', Longitude ' + lon);
      document.getElementById('location').value = 'Latitude: ' + lat + ', Longitude: ' + lon;
      closeModal();
      redirectToBooking();
    }, function(error) {
      alert('Error getting location: ' + error.message);
    });
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}

function redirectToBooking() {
  window.location.href = '#book';
}
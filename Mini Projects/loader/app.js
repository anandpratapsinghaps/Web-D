// Simulated authentication check (replace with actual authentication logic)
function authenticate(username, password) {
    return new Promise((resolve, reject) => {
      // Simulating authentication
      setTimeout(() => {
        if (username === 'user' && password === 'password') {
          resolve(true);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  }
  
  async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const isAuthenticated = await authenticate(username, password);
      if (isAuthenticated) {
        // Show user page and hide login page
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('user-page').style.display = 'block';
  
        // Fetch user's notes (simulated data)
        const notes = ['Note 1', 'Note 2', 'Note 3']; // Replace with actual fetched notes
  
        // Display notes in the UI
        const notesContainer = document.querySelector('.notes-container');
        notes.forEach(note => {
          const noteElement = document.createElement('div');
          noteElement.textContent = note;
          notesContainer.appendChild(noteElement);
        });
  
        // Start the slider animation
        const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Image URLs
        let currentIndex = 0;
        const sliderImg = document.getElementById('slider-img');
  
        function changeImage() {
          sliderImg.src = images[currentIndex];
          currentIndex = (currentIndex + 1) % images.length;
        }
  
        setInterval(changeImage, 2000); // Change image every 2 seconds
      }
    } catch (error) {
      // Handle authentication error (show error message, etc.)
      console.error(error.message);
    }
  }
  
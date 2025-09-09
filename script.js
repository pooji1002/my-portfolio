document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.projects-container');
  const projectImages = document.querySelectorAll('.project-image'); // This will select all project images
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const modalClose = document.querySelector('.modal-close');

  // Tab functionality
  tabButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove active class from all buttons and content
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active-tab'));

          // Add active class to the clicked button and corresponding content
          const targetTab = button.getAttribute('data-tab');
          document.getElementById(targetTab).classList.add('active-tab');
          button.classList.add('active');
      });
  });

  // Image Modal functionality
  // This loop now covers all images with class 'project-image'
  projectImages.forEach(image => {
      image.addEventListener('click', () => {
          modal.style.display = 'flex';
          modalImage.src = image.src;
          modalImage.alt = image.alt;
      });
  });

  modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.style.display = 'none';
      }
  });
});
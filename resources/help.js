document.addEventListener('DOMContentLoaded', (event) => {
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      try {
        const modal = window.parent.document.getElementById("vim-help-modal");
        if (modal) {
          modal.remove();
        }
      } catch (error) {
        console.error("Error removing help modal:", error);
        // Fallback for testing if window.parent is not accessible (e.g. direct open)
        const localModal = document.getElementById("vim-help-modal");
        if (localModal) { // This won't work as the modal is in parent DOM
            // but good to have a safeguard or think about direct testing implications
        }
      }
    }
  });
});

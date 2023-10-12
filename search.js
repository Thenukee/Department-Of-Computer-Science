document.getElementById('search-button').addEventListener('click', function () {
    const searchTerm = prompt('Enter your search term:');
    if (searchTerm !== null) {
      if (searchTerm) {
        const pageContent = document.body.innerHTML;
        const highlightedContent = pageContent.replace(
          new RegExp(searchTerm, 'gi'),
          '<span class="highlighted">$&</span>'
        );
        document.body.innerHTML = highlightedContent;
  
        // Scroll to the first occurrence of the highlighted word
        const firstHighlight = document.querySelector('.highlighted');
        if (firstHighlight) {
          firstHighlight.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  });
  
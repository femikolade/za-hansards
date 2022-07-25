---
layout: 'search'
permalink: '/search'
---
<!--<div id="search-container">
<input type="text" id="search-input" placeholder="search..."> -->
<ul id="results-container"></ul>

<!-- Script pointing to search-script.js -->
<script src="/assets/js/search.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script>
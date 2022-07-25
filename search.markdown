---
layout: 'search'
permalink: '/search'
---
<!--<div id="search-container">
<input type="text" id="search-input" placeholder="search..."> -->
<!-- <ul id="results-container"></ul> -->

<!-- Script pointing to search-script.js -->
<!-- <script src="/assets/js/search.js" type="text/javascript"></script> -->

<!-- Configuration -->
<script>
/*SimpleJekyllSearch({
  searchInput: document.getElementById('search'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
}) */

function bingSearch() {
  var q = document.getElementById("search").value;
  var url = "https://www.bing.com/search?q=" + q + " site:hansards.org.za"
  //document.getElementById("demo").innerHTML = url;
  window.open(url).focus();
}
</script>
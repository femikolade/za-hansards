function search_(engine) {
    var q = document.getElementById("search").value;
    var url = "https://www." + engine + ".com/search?q=" + q + " site:hansards.org.za"
    window.open(url).focus();
  }
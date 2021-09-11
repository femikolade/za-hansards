---
layout: senate_years
title: House of Assembly
permalink: {{ site.baseurl }}{{ post.url }}
---

<ul>
{% for item in site.data.csv.years %}
  <li>
    {% for year in item %}
    <a href="{{ year[1] }}">
      {{ year[1] }}
    </a>
    {% endfor %}
  </li>
{% endfor %}
</ul>

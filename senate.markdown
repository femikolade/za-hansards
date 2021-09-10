---
layout: senate_years
title: Senate
permalink: /senate/
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

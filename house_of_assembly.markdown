---
layout: header_footer
title: House of Assembly
permalink: /hoa/
---

<h3>Sittings {{ site.data.csv.years[0]["record_year"] }} - 1987</h3>
<!-- {{ site.data.csv.years.last["record_year"] }}</h3> -->
<ul style="list-style-type: none">
{% assign i = 0 %}
{% for item in site.data.csv.years %}
  {% for item in site.data.csv.years[i] %}
    {% if item[0] contains "record_year" %} 
      {% assign year = item[1] %}
      {% assign year_valid = year | plus: 0 %}
      {% unless year_valid > 1994 %}
    <li class="li-c">
        <a href="{{ year }}">
          <h3>{{ year }}</h3>
        </a>
          <!-- {% unless year_valid < 2000 %}
            <h3> gotcha</h3>
          {% endunless %} -->
        <ul class="ul-c">
          {% for item in site.data.csv.years[i] %}
            {% unless item[0] contains "record_year" %}
            {% assign frequency = item[1] | times:1 %}
              <li style="float: left;">
                {% if frequency > 0 %}
                  <div><a class="frequency-month-link old-manuscript" href="{{ year }}/{{ item[0] }}" alt="good">{{ item[0] }}</a></div>
                {% else %}
                  <div><span class="zero-frequency-month old-manuscript">{{ item[0] }}</span></div>
                {% endif %}
                <div class="vertical-line" style="height:{{ frequency }}px;" title="{{ frequency }}"></div>
              </li>
            {% endunless %}
          {% endfor %}
        </ul>
    </li>
    {% endunless %}
    {% endif %}
  {% endfor %}
  {% assign i = i | plus:1 %}
{% endfor %}
</ul>

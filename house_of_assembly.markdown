---
layout: header_footer
title: House of Assembly
permalink: /hoa/
---

<ul style="list-style-type: none">
{% assign i = 0 %}
{% for item in site.data.csv.years %}
  {% for item in site.data.csv.years[i] %}
    {% if item[0] contains "record_year" %}
    <li class="li-c">
      {% assign year = item[1] %}
        <a href="{{ item[1] }}">
          <h2>{{ item[1] }}</h2>
        </a>
        <ul class="ul-c">
          {% for item in site.data.csv.years[i] %}
            {% unless item[0] contains "record_year" %}
            {% assign frequency = item[1] | times:1 %}
              <li style="float: left;">
                {% if frequency > 0 %}
                  <div><a class="frequency-month-link" href="{{ year }}/{{ item[0] }}">{{ item[0] }}</a></div>
                {% else %}
                  <div><span class="zero-frequency-month">{{ item[0] }}</span></div>
                {% endif %}
                <div class="vertical-line" style="height:{{ frequency }}px;"></div>
              </li>
            {% endunless %}
          {% endfor %}
        </ul>
    </li>
    {% endif %}
  {% endfor %}
  {% assign i = i | plus:1 %}
{% endfor %}
</ul>

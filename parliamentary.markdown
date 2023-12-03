---
layout: header_footer
title: Parliamentary
permalink: /parliamentary/
---
<!-- {{ site.data.csv.years_parliament[0]["record_year"] }} -->
<h3>Sittings 2000 - {{ site.data.csv.years_parliament.last["record_year"] }}</h3>
<ul style="list-style-type: none">
{% assign i = 0 %}
{% for item in site.data.csv.years %}
  {% for item in site.data.csv.years[i] %}
    {% if item[0] contains "record_year" %} 
      {% assign year = item[1] %}
      {% assign year_valid = year | plus: 0 %}
      {% unless year_valid < 2000 %}
    <li class="li-c">
        <!-- <a href="{{ year }}">
          <h3>{{ year }}</h3>
        </a> -->
        <div>
            <span class="zero-frequency-month old-manuscript">
                {{ item[1] }} : 
                <a href="/parliamentary/{{ item[1] }}/joint-sitting">Joint Sitting</a> | 
                <a href="/parliamentary/{{ item[1] }}/national-assembly">National Assembly</a> | 
                <a href="/parliamentary/{{ item[1] }}/national-council-of-provinces">National Council of Provinces</a>
            </span>
        </div>
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

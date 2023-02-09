---
title: "CONEJOBEAT"
short: "CONEJOBEAT"
name: "CONEJOBEAT"
tags: [conejobeat, net, collective, second-life, event, dj, music, with-others, 2020, 2021, 2022, 2023, ongoing]
year: 2020–
date: 2022-11-26
cover: wafa-nezu-holy.jpg
---

<figure class="float right">
  <img src="{{ site.baseurl }}/assets/img/nezdrain.jpg" title="Check the bootleg Murakami bandana…">
  <figcaption>
    My avatar Nezu in Conejo.
  </figcaption>
</figure>

A series of virtual raves hosted by [Sofa](http://yogurt200.com), myself, and the [Conejo Committee](http://casaconejo.neocities.org) at large in [Second Life](https://secondlife.com/). I call them raves, but over time they've grown to be more like audiovisual art shows—each one with more and more artistic curation and planning than the last.

### Conejo Committee

The [Conejo Committee](http://casaconejo.neocities.org) inhabits and maintains Conejo Island, a virtual commune in Second Life founded by my close friend [Sofa](http://yogurt200.com). The island is divided into several smaller parcels of land owned by different residents, each with their own unique flavour and decorations.

* * *

## Past events

<div class="portfolio-grid">
  {% assign sorted = site.work | sort: "date" | reverse %}
  {% for item in sorted %}
    {% if item.category == "conejobeats" %}
      <a href="{{ item.url }}" class="plain">
        <div class="portfolio-item">
          <div class="portfolio-img"
              style="background-image:url('{{ site.baseurl }}/assets/cover/{{ item.cover }}')">
          </div>
          <h5 style="text-align:left">{{ item.short }}</h5>
          <!-- <p><a href="{{ item.url }}">{{ item.short }}</a></p> -->
          <div class="dogear"></div>
        </div>
      </a>
    {% endif %}
  {% endfor %}
</div>
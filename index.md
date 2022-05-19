---
layout: main
title: home
tag: wip
---

{% assign rawtags = "" %}
{% for item in site.work %}
  {% assign ttags = item.tags | join:'|' | append:'|' %}
  {% assign rawtags = rawtags | append:ttags %}
{% endfor %}
{% assign rawtags = rawtags | split:'|' | sort %}

{% assign site.tags = "" %}
{% for tag in rawtags %}
  {% if tag != "" %}
    {% if tags == "" %}
      {% assign tags = tag | split:'|' %}
    {% endif %}
    {% unless tags contains tag %}
      {% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
    {% endunless %}
  {% endif %}
{% endfor %}

<div>
  <!-- <h5>Work</h5>
  <ul>
    {% assign sorted = site.work | sort: "date" | reverse %}
    {% for item in sorted %}
      <li>
        <a href="{{ item.url }}">{{ item.title }}</a>
      </li>
    {% endfor %}
  </ul> -->
  <!-- <p>cutest fake dj & mangaka ever, first robot girl to pass the turing test (chibi world records)</p> -->
  <!-- <p><a href="{{ site.baseurl }}/about.html" class="clean">mel m.</a>, wholly or partially irresponsible for:</p> -->
  <div style="margin-bottom: 2em">
    <h1>
      <a class="clean underline" href="/about.html">mel m.</a> is irresponsible for: <br>
      {% assign sorted = site.work | sort: "date" | reverse %}
      {% for item in sorted %}
          {% if forloop.last == true %}
            & <a class="clean underline" href="{{ item.url }}">{{ item.short }}</a>.
          {% else %}
            <a class="clean underline" href="{{ item.url }}">{{ item.short }}</a>, 
          {% endif %}
      {% endfor %}
    </h1>
    <!-- <h3>*partially or wholly</h3> -->
  </div>

  <div style="margin-bottom: 2em">
    <h2>
      gallery:
      {% assign sorted = site.art | sort: "short" | reverse %}
      {% for item in sorted %}
          {% if forloop.last == true %}
            <a class="clean underline" href="{{ item.url }}">{{ item.short }}</a>.
          {% else %}
            <a class="clean underline" href="{{ item.url }}">{{ item.short }}</a>,
          {% endif %}
      {% endfor %}
    </h2>
    <!-- <h3>*partially or wholly</h3> -->
  </div>

  <div>
    <h3>
      elsewhere: <a target="_blank" class="clean" href="http://twitter.com/ncb0_">twitter</a>, <a target="_blank" class="clean" href="https://www.pixiv.net/en/users/63526507">pixiv</a>, <a target="_blank" class="clean" href="https://www.inprnt.com/profile/nezu/">inprnt</a>, <a target="_blank" class="clean" href="http://conejobeat.com">conejobeat.com</a>.
    </h3>
  </div>

  <div>
    <h3>forward complaints: <a class="clean" href="mailto:mel@nezu.world">mel@nezu.world</a>, <a class="clean" href="http://discord.com/users/272803229274996737">nezu#8000</a>.</h3>
    <!-- <ul class="links">
      <li><a class="external2" href="mailto:mel@ncb0.work">mel@ncb0.work</a> </li>
      <li><a class="external2" href="http://discord.com/users/272803229274996737">nezu#8000</a> </li>
    </ul> -->
  </div>

  <!-- <h5>Tags</h5> -->
  <div id="alltags">
    <h6>
      {% assign taglist = rawtags | uniq %}
      {% for tag in taglist %}
        <a class="tag" href="{{ site.baseurl }}/tag/{{ tag }}.html">{{tag}}</a>
      {% endfor %}
    </h6>
  </div>
</div>

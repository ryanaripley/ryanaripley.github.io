---
layout: default
title: Blog
permalink: /blog/
group: "navigation"
weight: 2
hero-gradient:
  - '#C7786C'
  - '#F79586'
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

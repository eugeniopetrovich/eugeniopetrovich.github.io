---
layout: page
permalink: /repositories/
title: repositories
description: Some of my Github repositories that might be useful to other researchers.
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

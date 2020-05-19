{% extends "./layout/layout.tpl" %}
{% block title %}
  Profile: {{ id }}
{% endblock %}
{% block content %}
  <div class="user-view view v-transition">
    id值： {{ id }}
  </div>
{% endblock %}
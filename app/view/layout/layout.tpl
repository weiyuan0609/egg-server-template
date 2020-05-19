<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link rel="stylesheet" href="/public/css/view.css" />
    <title>{% block title %}egg -wy{% endblock %}</title>
  </head>
  <body>
    <div id="wrapper">
      {% block content %}{% endblock %}
    </div>
  </body>
</html>
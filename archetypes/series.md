---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
description: "{{ replace .File.ContentBaseName "-" " " | title }} Description"
cover: "images/{{ .File.ContentBaseName }}.png"
---

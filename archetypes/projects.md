---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: "{{ .Date }}"
draft: true
slug: {{ .File.ContentBaseName }}
summary: "{{ replace .File.ContentBaseName "-" " " | title }} Summary"
featured: true
tags:
  - Project
categories:
  - projects
cover: "images/{{ .File.ContentBaseName }}.png"
link: "https://gohugo.io"
status: "completed"
---

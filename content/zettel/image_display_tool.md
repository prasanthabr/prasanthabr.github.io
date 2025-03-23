---
title: "feh: What tool do you use to view images"
date: 2025-03-22
lastmod: 2025-03-22
draft: false
zettel_tags: ["images","linux"]
summary: "Extremely perfomant image viewer" 
status: "seeding"
---

# Feh
Feh is a command line based tool that helps image display.  
This has sub-second image opening, extremely performant and light weight

# Operation

Display images in a directory

```
feh <directory>
```

Display images in a directory and its sub directories

```
feh <directory> --recursive
```

Display images with zoom

```
feh <directory> --auto-zoom
```

Display images scaled to screen

```
feh <directory> --scale-down
```

ref: https://linux.die.net/man/1/feh

---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false

# If this needs taxonomy, consider using a specific archetype:
# hugo new notes/your-note.md
# hugo new research/your-research.md
# hugo new reference/your-reference.md
# hugo new recipe/your-recipe.md
---
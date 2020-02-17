callback({
  "levelNumber": 41,
  "size": 30,
  "steps": 536,
  "successRatio": 0.7,
  "type": "insertion",
  "legal": true,
  "worky": true,
  "author": "viamodulo",
  "hash": "cba17e526bf404d73e74b9722e59e7f0",
  "path": "41-Sorting-Floor-34.714/30.536.insertion-viamodulo.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 41-Sorting-Floor - SIZE 30/34 - SPEED 536/714 --\n\n-- A solution using online insertion sort.\n-- Based on 28.537.insertion-mrflip.asm\n\n    INBOX   \n    COPYTO   [24]\n    JUMP     e\na:\n    COPYTO   23\n    BUMPUP   24\nb:\n    COPYFROM [23]\n    OUTBOX  \n    BUMPUP   23\n    SUB      24\n    JUMPN    b\n    COPYTO   24\n    INBOX   \n    COPYTO   [24]\n    JUMP     f\nc:\nd:\n    COPYFROM 21\n    COPYTO   [23]\ne:\nf:\n    INBOX   \n    JUMPZ    a\n    COPYTO   21\n    BUMPUP   24\n    COPYTO   23\n    COPYTO   22\ng:\n    BUMPDN   22\n    COPYFROM [22]\n    COPYTO   [23]\n    SUB      21\n    JUMPN    c\n    BUMPDN   23\n    JUMPZ    d\n    JUMP     g\n"
});
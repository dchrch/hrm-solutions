callback({
  "levelNumber": 23,
  "size": 39,
  "steps": 32,
  "successRatio": 0.1,
  "type": "specific",
  "author": "Mygod",
  "hash": "03e7b9c9a13205d611626bd580c4ad30",
  "path": "23-The-Littlest-Number-13.75/39.32.specific-Mygod.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 23-The-Littlest-Number - SIZE 39/13 - SPEED 32/75 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n-- The input SHALL follow the pattern: 3 4 ?\r\n-- The number indicates the smallest number's index.\r\n\r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    SUB      0\r\n    JUMPN    a1\r\n    JUMP     b1\r\na1:\r\n    ADD      0\r\n    COPYTO   0\r\nb1:\r\n    INBOX   \r\n    SUB      0\r\n    JUMPN    a2\r\n    JUMP     b2\r\na2:\r\n    ADD      0\r\n    COPYTO   0\r\nb2:\r\n    INBOX   \r\n    SUB      0\r\n    JUMPN    a3\r\n    JUMP     b3\r\na3:\r\n    ADD      0\r\n    COPYTO   0\r\nb3:\r\n    INBOX   \r\n    SUB      0\r\n    JUMPN    a4\r\n    JUMP     b4\r\na4:\r\n    ADD      0\r\n    COPYTO   0\r\nb4:\r\n    COPYFROM 0\r\n    OUTBOX\r\n\r\n"
});
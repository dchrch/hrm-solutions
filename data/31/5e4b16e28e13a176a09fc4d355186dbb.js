callback({
  "levelNumber": 31,
  "size": 209,
  "steps": 58,
  "successRatio": 1,
  "type": "unroll",
  "legal": true,
  "worky": true,
  "author": "viamodulo",
  "hash": "5e4b16e28e13a176a09fc4d355186dbb",
  "path": "31-String-Reverse-11.122/209.58.unroll-viamodulo.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 31-String-Reverse - SIZE 209/11 - SPEED 58/122 --\n\n-- This solution is floor-specific. The strings to be reverse can be up to 13 chars in length.\n-- This is the same limitation as the pointer based solutions. The solution can be shorter by \n-- reducing this maximum. It also accepts empty strings (just a zero).\n\na:\nb:\nc:\n    INBOX   \nd:\n    JUMPZ    a\n    COPYTO   0\n    INBOX   \n    JUMPZ    q\n    COPYTO   1\n    INBOX   \n    JUMPZ    p\n    COPYTO   2\n    INBOX   \n    JUMPZ    o\n    COPYTO   3\n    INBOX   \n    JUMPZ    n\n    COPYTO   4\n    INBOX   \n    JUMPZ    m\n    COPYTO   5\n    INBOX   \n    JUMPZ    l\n    COPYTO   6\n    INBOX   \n    JUMPZ    k\n    COPYTO   7\n    INBOX   \n    JUMPZ    j\n    COPYTO   8\n    INBOX   \n    JUMPZ    i\n    COPYTO   9\n    INBOX   \n    JUMPZ    h\n    COPYTO   10\n    INBOX   \n    JUMPZ    g\n    COPYTO   11\n    INBOX   \n    JUMPZ    f\n    COPYTO   12\n    INBOX   \n    JUMPZ    e\n    OUTBOX  \n    INBOX   \ne:\n    COPYFROM 12\n    OUTBOX  \nf:\n    COPYFROM 11\n    OUTBOX  \ng:\n    COPYFROM 10\n    OUTBOX  \nh:\n    COPYFROM 9\n    OUTBOX  \ni:\n    COPYFROM 8\n    OUTBOX  \nj:\n    COPYFROM 7\n    OUTBOX  \nk:\n    COPYFROM 6\n    OUTBOX  \nl:\n    COPYFROM 5\n    OUTBOX  \nm:\n    COPYFROM 4\n    OUTBOX  \nn:\n    COPYFROM 3\n    OUTBOX  \no:\n    COPYFROM 2\n    OUTBOX  \np:\n    COPYFROM 1\n    OUTBOX  \nq:\n    COPYFROM 0\n    OUTBOX  \n    INBOX   \n    JUMPZ    b\n    COPYTO   0\n    INBOX   \n    JUMPZ    ad\n    COPYTO   1\n    INBOX   \n    JUMPZ    ac\n    COPYTO   2\n    INBOX   \n    JUMPZ    ab\n    COPYTO   3\n    INBOX   \n    JUMPZ    aa\n    COPYTO   4\n    INBOX   \n    JUMPZ    z\n    COPYTO   5\n    INBOX   \n    JUMPZ    y\n    COPYTO   6\n    INBOX   \n    JUMPZ    x\n    COPYTO   7\n    INBOX   \n    JUMPZ    w\n    COPYTO   8\n    INBOX   \n    JUMPZ    v\n    COPYTO   9\n    INBOX   \n    JUMPZ    u\n    COPYTO   10\n    INBOX   \n    JUMPZ    t\n    COPYTO   11\n    INBOX   \n    JUMPZ    s\n    COPYTO   12\n    INBOX   \n    JUMPZ    r\n    OUTBOX  \n    INBOX   \nr:\n    COPYFROM 12\n    OUTBOX  \ns:\n    COPYFROM 11\n    OUTBOX  \nt:\n    COPYFROM 10\n    OUTBOX  \nu:\n    COPYFROM 9\n    OUTBOX  \nv:\n    COPYFROM 8\n    OUTBOX  \nw:\n    COPYFROM 7\n    OUTBOX  \nx:\n    COPYFROM 6\n    OUTBOX  \ny:\n    COPYFROM 5\n    OUTBOX  \nz:\n    COPYFROM 4\n    OUTBOX  \naa:\n    COPYFROM 3\n    OUTBOX  \nab:\n    COPYFROM 2\n    OUTBOX  \nac:\n    COPYFROM 1\n    OUTBOX  \nad:\n    COPYFROM 0\n    OUTBOX  \n    INBOX   \n    JUMPZ    c\n    COPYTO   0\n    INBOX   \n    JUMPZ    aq\n    COPYTO   1\n    INBOX   \n    JUMPZ    ap\n    COPYTO   2\n    INBOX   \n    JUMPZ    ao\n    COPYTO   3\n    INBOX   \n    JUMPZ    an\n    COPYTO   4\n    INBOX   \n    JUMPZ    am\n    COPYTO   5\n    INBOX   \n    JUMPZ    al\n    COPYTO   6\n    INBOX   \n    JUMPZ    ak\n    COPYTO   7\n    INBOX   \n    JUMPZ    aj\n    COPYTO   8\n    INBOX   \n    JUMPZ    ai\n    COPYTO   9\n    INBOX   \n    JUMPZ    ah\n    COPYTO   10\n    INBOX   \n    JUMPZ    ag\n    COPYTO   11\n    INBOX   \n    JUMPZ    af\n    COPYTO   12\n    INBOX   \n    JUMPZ    ae\n    OUTBOX  \n    INBOX   \nae:\n    COPYFROM 12\n    OUTBOX  \naf:\n    COPYFROM 11\n    OUTBOX  \nag:\n    COPYFROM 10\n    OUTBOX  \nah:\n    COPYFROM 9\n    OUTBOX  \nai:\n    COPYFROM 8\n    OUTBOX  \naj:\n    COPYFROM 7\n    OUTBOX  \nak:\n    COPYFROM 6\n    OUTBOX  \nal:\n    COPYFROM 5\n    OUTBOX  \nam:\n    COPYFROM 4\n    OUTBOX  \nan:\n    COPYFROM 3\n    OUTBOX  \nao:\n    COPYFROM 2\n    OUTBOX  \nap:\n    COPYFROM 1\n    OUTBOX  \naq:\n    COPYFROM 0\n    OUTBOX  \n    INBOX   \n    JUMP     d\n\n\n"
});
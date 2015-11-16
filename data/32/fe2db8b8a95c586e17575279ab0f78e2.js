callback({
  "levelNumber": 32,
  "size": 92,
  "steps": 27,
  "successRatio": 1,
  "type": "exploit",
  "author": "lezardo",
  "hash": "fe2db8b8a95c586e17575279ab0f78e2",
  "path": "32-Inventory-Report-16.393/92.26.exploit-lezardo.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 32-Inventory-Report - SIZE 92/16- SPEED 26/393 --\n\n-- Relies on the input set fully intersecting the set {A,B,C,X} and occurrences of each element on the floor being: A=4, B=5, C=2, X=3\n\n    BUMPUP   14\n    BUMPUP   14\n    COPYFROM 14\n    COPYTO   19\n    BUMPUP   19\n    ADD      19\n    COPYTO   18\n    COMMENT  0\n    INBOX   \n    SUB      4\n    JUMPN    c\n    JUMPZ    b\n    COPYFROM 19\n    OUTBOX  \n    COMMENT  3\n    INBOX   \n    SUB      4\n    JUMPN    a\n    COPYFROM 14\n    OUTBOX  \n    COMMENT  4\n    INBOX   \n    SUB      4\n    ADD      18\n    OUTBOX  \n    INBOX   \n    SUB      4\n    ADD      18\n    OUTBOX  \n    INBOX   \na:\n    ADD      18\n    OUTBOX  \n    JUMP     d\nb:\n    COPYFROM 14\n    OUTBOX  \n    COMMENT  1\n    INBOX   \n    SUB      4\n    JUMPN    g\n    COPYFROM 19\n    OUTBOX  \n    COMMENT  2\n    INBOX   \n    SUB      4\n    ADD      18\n    OUTBOX  \n    INBOX   \n    SUB      4\nc:\n    ADD      18\n    OUTBOX  \n    COMMENT  5\n    INBOX   \n    SUB      4\n    JUMPN    j\n    JUMPZ    f\n    COPYFROM 19\n    OUTBOX  \n    COMMENT  7\nd:\n    INBOX   \n    SUB      4\n    JUMPN    e\n    COPYFROM 14\n    OUTBOX  \n    INBOX   \n    SUB      4\ne:\n    ADD      18\n    OUTBOX  \n    INBOX   \nf:\n    COPYFROM 14\n    OUTBOX  \n    JUMP     h\ng:\n    ADD      18\n    OUTBOX  \nh:\n    COMMENT  8\n    INBOX   \n    SUB      4\n    JUMPN    i\n    COPYFROM 19\n    OUTBOX  \n    INBOX   \n    SUB      4\ni:\n    ADD      18\n    OUTBOX  \n    INBOX   \n    COPYFROM 19\n    OUTBOX  \n    INBOX   \nj:\n    ADD      18\n    OUTBOX  \n    COMMENT  6\n    INBOX   \n    SUB      4\n    JUMPZ    k\n    COPYFROM 19\n    OUTBOX  \n    INBOX   \nk:\n    COPYFROM 14\n    OUTBOX  \n    INBOX   \n    COPYFROM 19\n    OUTBOX  \n\n\nDEFINE COMMENT 0\neJyTYWBguKXhfn6G5paDfrpNcy1NteIKLOztV1gfFIq0YQCDblsGBmFnxTYPd6MDrR72J0FidcalU1o9\n6maB2D6xgnIMSXU5NsmyG38l/zlmnsp7GSQuWCyp4lwxPcC6mqUwo2nnkXNt//8zjIJRMAoGFQAAVe0k\nmQ;\n\nDEFINE COMMENT 1\neJwzZmBgOCeq95pV8s+xbXI/pq5WMktPV6mze6za5e6jVzjxgNHBU5amjx9tNZu8Ms+yLkfFdoUeUAtD\nuW/3RUavySuPeCS0HvG4VNXk2VZU78VSKBUhWNUXI9nQkpDaYZ+U22eeenR+Wers9TXJmTvb4s0PC0Uz\nnIoPO3r2daD7+Y/+TadBZhWuK7WwXL3B5PSSDSbxc79brplx0KG/e028WrN32c9qrR63cud53qWiq71L\nEzdzlmntYqnYcrC2yv5kduO5y8Jdojfb+67dFF/Qdo5hFIyCUUAyAAA8SFqT;\n\nDEFINE COMMENT 2\neJxzZWBg+MJ+6dpNwf4Kf9EYtZXK7ueXqew8oqRWN2uG5t7sq1q3gu7pMoDBfDv7k8m2Pw5/Mq+aXm1y\nsqTB6FFEs2GCJpPRJbk6YxbRVVaT5X1dC02ZPY867/GeHfzN91LVdt8VXTt9dk6r9zq31Nlz8srj7tPX\nCLrcWgcyr6JGTfdP1SMt5wo13e7SXKPZ+U2OOZkxIRvSteI+pX1P35wmWrsu4/OkFVlNc+/mRawVL5y/\niaVCa9f6+sydS5uXbAWZMXP+5JXhC66tDlm4ZKvowg37IufXnUia43NJd4bknd+T1J7y9bx/DVJXtsZb\nKnrbe+Mj+y75rHxgfhjsoRuX5A5fE1X0v1RqoX3Cvbhjb+4ev92XrjGMglEwggAAyeJ7wQ;\n\nDEFINE COMMENT 3\neJzTZmBgUOAvfHtMom5Wibyof4l8atQHha7SxaqJm++q670W15p83c0gt2+XSZMjUCmDg9f71x7uDKc4\n3ffOZPOQbd7vlZtQ7ivqv9Hf2+Nl0FnPGxExIU6Jf7J+pJwrX535edKLrPmbtLKMDnxKazsnEPP86Y2I\n1y+eBb9+sdF/yWOQedy93h4bpwVUxszrX3ZiKctZkJjjCjPLs4vXxEvNF6zKmfF50qrGiNtfao3eMYyC\nUTAKqA4ArTJM/Q;\n\nDEFINE COMMENT 4\neJyzZWBg6BFb89JLnPfyZ3nBqnSVFJ1EtZMS3XqFE5sNU7dtNXv9YpFtiN8j21sqQKUMuYFqT8t9p9/a\n481xwdnz3kZmzw0TDnqqde73Smjd6SPb/C5gTe+c8P5lXHHWx9zjeS+fiAu5MTFa8s6NCMk7K4NCboDM\nuF6gpmtcx1FSM+naTRD/38QUnYMT3hsLdDsX3GxP7UhuOTinueLc5eNlSx6D5BsOMJx6tHnDGxB71fcY\ntQPvJVVmPLul8uCxrPqHu1oGDDecnXgvP4+eeNE+V/iiZEPQxaPzO6883vL75t7j6+5xXFB/6HNJ/Pm5\ny3Yfui9u+MpylmEUjIJRAAcAGSxx6A;\n\nDEFINE COMMENT 5\neJyLYmBg6BSffP20WNNpbvEVO2xlNiT9luHx3C1zVrpS1l5wm1yTsJGCv2yi2qMIEe01vUI69rMn6Gw5\neFa3bUGbgXfZVrNSi2JzFlGgMQzCzgdPzXKIWCvtUDfrjr1eYrTDNf9gZ3dxb7fv3LXea5hN/V4zLQzt\nkpSKmK16LVLPWDTqoMPMiBUxWUGpHaV+8zft9yrcf9LN+hjIrGXZ55ZeLRSs8itRi+4ok1V3rrAX/F/5\nntWw/pKcZpOesXBXRD13b8BykFrOsraitQ2CVQ9beMrBemcxnFKdvXfmgzl/sgIXnZQ4vYQBDF5tUNSa\nu3VJpNgOxbYrO2avB4ltWHdWWn89h8SrDU3C97fs4HHb95715Ql7waTT7uKyZyfLx55dYzj/TKnFqhNH\nnSsOX/IR3HXN/96Z6QFBF2NC2q8+j268Xphse7Mu5/fNS1W2N593Hr5mPaPzStuCiRf7l60/lrhZbEfu\nnkWbc/cwjIJRMEgBAMggmPw;\n\nDEFINE COMMENT 6\neJwLZWBguChy606P2J8ZPWIMDhwSZ6UZpFN07qoXTvTUrzrqYnjt5i+T94lrLRnA4KQbx4UzrhFrT7rd\navjntdf2p0+KznbfBM31AYu1XwZpGUhENjmei5ke4JS4N7su6Vz5vqTZjfuSVnQ5JdrPPhE3eWVQ9JKt\nD0K3HDzuXnYo2NnoAMjMq4UMpzrKGOYcLV/SzljpXPCnKkGzoqZNbH19io5wF8einp6m09y9Cx6A1G6t\nlVy3qCVmg0TH7PUgPtu+P8d49rifX7BF8s7ZxUbvQGIFxwpN1U7dC114miFP+pze3unnI26DxH8eeqS1\n5chs1dzj05UELgnKNV6/JFd4V1Zd6lmfl/jziMBpz7XiIp9tSHrw2Cx95QPrrMbrB/MuX2DIM7/dlL/y\ngXfZ3SezG288y+wOeWE9I+RFwPJpz2+tk3qWum3lg7JDP27VnYg923Ta4nDTaYZRMAqGEAAAJaqfHA;\n\nDEFINE COMMENT 7\neJyLZ2BgOMK44tk3tlvrvrA3zf3IoRWXxX1JbjnPdKXbAizOrpJtC2xl1LYbKcy+u1FhRZeRAkeJrUyf\nTI0MgxBQK4ObQcBVNwPrYyLaVZlhWpXWk7Xna5zVnSz/x9hecIdpk3Ce5XSlV1YpOmo2ZpZpNizOajYx\nIa+szNLLzF731BnHbDhg9OeYnXHEbZBZJ93KDp1x1dp10fnPjH6XydXebooRPP4MYOAaxMCwJIRB6EL0\nmvgTcV2LWxL09oLEz7iK1rZ6XKra7nupyj+mqxQk9inN+tjdvC2TBYszY1lKIPqfN3VJJrRm6t9puxc6\np63qKEhMur2St2gai+iLmScl7s4NURBfoKgltMjZSXSht4fU/Mm+66bLhk5e+DmlewlDXufS/gqupfNb\nYuYdnPNiJu9SiynT10zveL4dHAb7bq0T23Hrzp2tmc9B/KTTXZKiFxZru14L8K65qZe47OG11Q8eQ9TO\ne7JYm/Va4cQpF7YcZBgFo2AQAAADJpW+;\n\nDEFINE COMMENT 8\neJyLZWBgmCK8YscU4XsbrWR5PD/LHxTKV+SRVlfZYRWnfq32qlbXYj/dx1uaDQv3W5ryXi4zcz+vad21\neKmNWucd+8nyQO0M6wMyd1r4Clb99IkILPVL0MwP6JNRDbHiSwrdwSMbbi94LZJH+nRspn5Lwkm3uqTC\n5LqkydUtCbl9PrFH54tGhay6FzZ7Pcgcz7IlW9nLm+bWVp0r/1m9Jv5LLY90Xj0DGJQA6aXNJyUmdd0K\ncu1f0m47yfoYSNywXq2zacKaXhBba+be40pzVnTJzw3xi59byQsS61xaavF35bnyrWtiNoD4/otTdPau\nTNBcsCVBM3jnBpOuPSzOx/de8jm+d3rAqT0xIYs2v46bsKspn22faC3L/nvNh/Zbzzi+l2OR3+7+Zfe3\nRKx9ux7i1pcnMnfaHWw6zbn32k0Qf9OXGDWWd7Lql16sMZR/4u6a+cAsPfMBR4n6w0tVIS+a5ra9lVy3\n94PSFrPPj7cwjIJRMIgAAHKDnfg;\n\nDEFINE LABEL 4\neJyTZGBgeDEzU//d9MXaDBNj1BJaJVU4y2LUXmU+13WP32ElGnXU+V3AksgtfqVp233bisp9JRu++W6Y\nYOzPMn99wOSV6cGJmy9H/Th8LJ7h1NfUo2cf5bSd8ythOavXUHVUueXzgTtta3YzjIJRMAoGLQAADKIv\nXA;\n\nDEFINE LABEL 14\neJwzYGBgqJRN0dkmt2IHkMmwhsss/YLOltRdJkYpm8zfJ4LEPNzbin76XFrx2U9py+1wwarLUXqJAjE7\nM3hjvcu44iLWHou3P1mXZH1MK2v2+gnFK7o4yyLqO8rOlYP0MkxkOXukn+VsV2/diekd9zbGtrHMT2h9\n3ZPQOr1uThtLYWjn9/SenveJBydkxppOfR79YE5m7I35G5IuLPqTxb7sUtWBFWt67Vcenc+0Qnaj59LC\n/ZcX7j0eP9f5TNbMo2erJjufYcACWJbN2fxheet2j7XJe7M2bdh3dSvnPsedx3c93nN/G8uh06unHumZ\nyXz0brfY4TdVq/ZPy+ncdSHp6tbncdjMGgWjYLgDAA6Ce0Y;\n\nDEFINE LABEL 18\neJxTYmBgeBbMI73H+6TEEY8uST5XQbloh9mqr6zeG6+yanKUsxf11w76kxUf5l7sH7Ok3SfWaNK5mD8z\nLkcdnX87/NzS14Giq4+7X1v93mLySqBRDNH5DHlhhUu2gtj6GZXWIDq2TTGiefn8Ta821J0A8TuXbkmN\nnJ/Z/WKm95IzPecuC3TH3GPAAm62F+6Xbt95RLr94KnQzsnXvXrVnv6YXPYhfVbdN/7FB3+YrGX4EbbD\n/OOzk7L3558RvalwRvAaNnNGwSgYBbgBAEp/VaQ;\n\nDEFINE LABEL 19\neJyLYGBgCBVmEAoS8ZZql2iae1Cq7gRQiOEjh3PBPX7ngh+yJ0tiNLpKQWJndesEzuqyiDYbbjG3NDVK\n2WomWvvJ/MfUbCvrL4YWt+4YWqzZnW21c1qybUBlsPPsRleP9/3/vJrm7vQRXV3uu2KHhS/Hhd/ez5+C\nzPqRcu3mvqTXuxiSvJfUJQVUWqXszTZJ25L6NsMoJTF3S+qE4nPlHWWKbSC1jJVLtn6s09p1p01v77G+\nNbv/TXy+/duUexvzp19a8WKm/eyVM3dO+zx1Te+eSVo9J3vX9N5rtZ6h2XR0vlmt5Lpd1Y+3VFe/3/uz\neucRvQalR2rNWi9i2/ReO0zUe/1iptpTqfmz74LsWLrJ+hjbPqMDVYfW7DY49njL8pMBy5efrJuVdcJo\n0seja3pZ9md2J2zJ7H61YU2v/voNE76ukVy3d6X9SZtVl66ZrFV6lLd+xbOI7Z/fMR7Y+Un7RNXnm+eq\nPp+7ZP6RYRSMgkEOAB/Gr10;\n\n"
});
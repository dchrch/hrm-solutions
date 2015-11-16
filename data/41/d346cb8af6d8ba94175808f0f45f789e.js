callback({
  "levelNumber": 41,
  "size": 33,
  "steps": 433,
  "successRatio": 0.26,
  "author": "polarathene",
  "hash": "d346cb8af6d8ba94175808f0f45f789e",
  "path": "41-Sorting-Floor-34.714/33.570-polarathene.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 41-Sorting-Floor - SIZE 33/34 - SPEED 570/714 --\n\n    INBOX   \n    COPYTO   [24]\na:\n    COMMENT  3\n    COPYFROM 24\n    COPYTO   19\n    COMMENT  4\nb:\n    BUMPUP   24\nc:\nd:\n    INBOX   \n    JUMPZ    f\n    COPYTO   [24]\n    SUB      [19]\n    JUMPN    a\n    JUMP     b\n    COMMENT  1\ne:\n    COPYTO   19\n    COPYFROM 0\n    OUTBOX  \n    JUMP     d\nf:\n    BUMPDN   24\ng:\n    COPYFROM [19]\n    OUTBOX  \n    COMMENT  0\n    COPYFROM [24]\n    COPYTO   [19]\n    BUMPDN   24\n    JUMPZ    e\n    JUMPN    c\n    COMMENT  2\n    COPYTO   19\n    COPYTO   23\n    COMMENT  5\nh:\ni:\n    BUMPDN   23\n    JUMPN    g\n    COPYFROM [19]\n    SUB      [23]\n    JUMPN    h\n    COPYFROM 23\n    COPYTO   19\n    JUMP     i\n\n\nDEFINE COMMENT 0\neJyzY2BgUOOt28jILzl9Pn96gK3Aa/eTgvu9QoU9g1aKr8tZpjJ7faOa/PI2Lf4woFIGRYuApGZztvQn\nZltqLpn396+1nDq/1EZ++Xy7zyu1HQRXsDlVLNzj2t8/3T2mqcjzVmaRZ0ASSN8z97jEn25VDT/dDs7x\ncP+88pn7zrUg8fywo1FTQt7OfBzivFU1ynmrRPyvnSBxn8wVMX8zPq+cnWmyzTLr186y7Du73+fe2S1f\n0nIQJF+9Z5V17+7ixwVbci/Xrf94CiS2a8O6HMd1/8rF12ypmbcyu5F3iUErSHzO8dNZb45PzFt4enrd\nznMsHfmX+vsZRsEoGAVgAAD4mmus;\n\nDEFINE COMMENT 1\neJzLY2BgOCmY4DCfnz+Mkf90ViyXybZjcibbgMIMR3jfV2gLXqqKEr9U9UzifQVITFvwuOVlyR1W4Sr5\n9iD+fgudkEhT0TRN/S01bVosHY1qf2ZMVp06HyR3QU0llVfje7q5VlhRmkHI5O+m8stB4rmupf57XN2L\nz7tULATxz7u8djfzUHMp9xV31Q3c4L0v7GjU7/DcBK8I0bT8sFuZ5b7FBQleWqUgtZIFNfF9eV1xKTm5\nCXEZtzJN0lILuVI66rlSbnQ9TdWY1pm1ZJ5dXsXCsMKKhQ3FS+ZFl/6ZYVb+vNOsnKfcs6wp/1GRSur7\n3K44kFn363VCzjQcjcpuvJUp3eg6BSQ2of61e0TTHY/fbaX+d3oCkqp6X2YEdM/Pbe9oyudr0ypVaH1f\nodC6pUa7d02vwcQ/M0B6fkze76W/fr8XiK07r9Rfar5KqtR8ppUgfs/NfHutWxu8tW7Nz5W4fbg6/faa\nXonbS+bdvlm38fZNhlOVt2ZeuH0z9/K8G90Xa86e2wPSc+bs+4qg01UN64897wTxO59Jl/W9ym5c+lax\nLe+DcHv0x68dDKNgFFAJAAAofLVH;\n\nDEFINE COMMENT 2\neJxbyMDAYMFzQ9yCJ8rAmONW5n7OvdnXePZm1yhplQKlGAosMvXPGkcZsBgKmt7Sc3a6pbfQR9xAJyTb\nZGasiK1K6hcnlVQDl7hEOdejUdxudzzkXK9Z9Npn6vNbbtK6ZL5YG2RGery34byYKIOZEausecPvePwO\n/xhuHpmboBVXXLA7ubggLmN+rnr2rczA3Jp4uzz+sPe5k31TckycO7Nm2zglluudiJuqAzLnTAOLqF5D\niIJDvXsxiP+taSlXaL+B0J5JN8SfTQlRmD5lkxZbP5PZ/O4dVgWtO6xAanLElsyrFz0456RgxcKX3Imb\n13Dt3xvLNfPCby7Ha9d4ztydKML76obsv1cgtWeNvZd063kvUdEWXPFLY/b61Rom235plB06rB135Zbe\nmbtnjZse8VsueHDdmu2WiO3MCyK2OsfVbMoOqdls2FdgsXPtLhO9ZbeA+kFmebg/fNPqEXC11WPDviJP\n8R3rvX7tvOmjc1zML+5Kf8DEhxzBls9dQyyf84avuz8zouxQUvTTVYej3s4E6X2a6r3kclrQFq4UrRcg\n/t+MioU7CnauXVV6Z/fV8oCrM8rO3HUpsny+IPfhm8tp0z+C1CxvOr7mW1PdxuC6sKfBdZfegsTedddt\njJrcu+HDnGurQfyWqRw7ZSd1fAKx25b1bpi59PFpo0XuzyYvtP8OEuvdfW7Pq22L9sdtTT88ddOK81wb\nFzxYsTHs6dNNvK/Wbt36nnFX1eel+7K/yB3c+n7VobCnPw+x3eI+dOVM2L4N++x2v94FMoPjfMxX1wvZ\nXxQuab1ov8pwqv3q9nNJ19fdr7z171X67Ydvcu4/fKP0WPrl3ycTH954lntZ5EXFQoZRMKAAAHqdJ0w;\n\nDEFINE COMMENT 3\neJxzYmBg+Cv92j1UWCfktsDRKFuBmvgegZcZVYLrciaKaJW6S1yqapGcXndZ0q/5s3DDhDVc92bt59w0\nF6iNwVyr1F9ePS4xSAHCP6z92r1S/3t6nfGSeSD+ag3FthP6LB0g9nXrFr/r1lciQ50KJ4L4N302eLd6\nPKjc4/q8s8GFa4azM0SPV4R1sGsI1wz/GMnpExPfzgSJ7Qv7V74mXLrsWqR0GWtCaiFITCGsxU81aqEP\nQ0yL34PEUn+QGOMuJjO73RPz3u96fPrP1g37QGIha29lhqydmKe5+n1F4gr7lpglc/tA4gePsqXfPLGl\nZue5wokXL2pMYxgFo2CEAgDe+GRV;\n\nDEFINE COMMENT 4\neJyrZGBgMFK74yEqv8H7smRE4Dah3ITbAt/TGfn/lQvzGbQK8/X3B/BLTv8sXLHwh7jtUlH5qMU1Spvm\nhqtwzQhX6e/XVXre+Vfar3mHsn1Lok5HPdA4Bl4Nlo6rWkvm/ddhWgniK1qU+j8xC5l83frtTDnXe7Oi\n3f7MAIlfMm/K77VflwNhq7l8cXJ2ArFfewc5zotJcLgdW2cH4huF3vEwCt0WvTMoeRKIH9u2wduteaGP\ndGOp/9ZahvC5VV1xgpUqqcUVe7OLK/6V/6/sqK9tSJ60vOngnOVNbQt2NXov+VgnuMKs/Pia88W9G1yK\ngraAzJHo8wxynyIbGr6APwzEV5q2LfrgtHuzQOzEFbKhb1emFr5d+XYmiP9/Rak/y9oWv7PrIwLdNvGH\nXdq8Lbp587qcuvUd9Y7rqhoc19m3uG3q7/feFrUYpP78gW3RuQdr4rkPuRevOvQZHA4fTzOt7D+zaW7/\nGcuS35eXzHtx5drqw9dMtm28Lr6j5+bs9ZW3vJecuOU65e2N+bkg9VJvauLLnkuXvXqq2PbqacOEG8+W\nzGN6uXNt5puda6M/Cq449KVi4dxvf2a8+dYwQfDrja69H052//q4plf67+4ekP7gX39mTPgtv5xhFIwC\nPAAAYm/X6A;\n\nDEFINE COMMENT 5\neJzzYGBgMNdKcLghW2dXL8rhZitQ6j+Le0WMAidb+lR2y5JvbFUNruw3un5zmU3dJjR1vo+M7VJ7Re8l\np5UqFoar3Jv1WLVw4mTVG13LVBTbyuX+la+T1ioVkP5XXi53qapP8VLVVa3UwhDD4oL7RhPzgFYxxGjE\nNPnpHpwDYm93LPXPcMxunG9nuzTVT28ZSOy8C0/5HG+tUhD7i9MGbznXDd4avhGB4cGeQSAx29geW/mS\nfHsQe13GL7e4jKNRfzNq4v9mfO2Iy/gzAyResKVNt2DLccs/Wz+Gr93aMMFk853d3zee27Nrw+td81bK\nLwepKV6+Imb1Erb0xwvn59bMCysCiRkcOBqVe3Bb9M9DRin/jhUX6J7lKWcYBaNgmAMA8+Ryww;\n\nDEFINE LABEL 19\neJyLZmBgMNcyca5RcnZ6LXPH45mEbOgesYCkKPHv6ZclJ+Y1qsU0/dKwb5mhydLBq5E8qVFNcvo7ftul\nQG0MnwwrFuoZa0w7a1zV8N30dNYfy7Oe16053E45OCZ/cXpf8dD5UhW327qcLh/r4CD/yb4OAekB34Jf\nZvCGN0xQjTq+BmRGTvKSeSZp7sV/M65E9uUlOBgWz4w1Kz/ZXVyxaW5xhd4ykJrC9MPVmQXSZSD2/tZV\n1t7t1sF8bVGL17TpLfvc773kx2Smlc+myC8HyWfOr7NzWTg/9+uCzEWTFz5d1bjo+BrHdU9XgeRKdyQ4\nMO6SX150VHAFiM+4a37upP3zcyFyO6zkDq6yBrG33d5htfF6j23JtQQHrytnPWMvb4t+ceVlxuFrqYWL\n72ypOXfPoJXrwdy+3feXzPt8R3CF1q2da10vcOwE6Y17cs3i46/PZiB23ocEh70f9ns1vH+Z4fIO4t9R\nMAoGGwAAjnSfDg;\n\nDEFINE LABEL 23\neJwTZACCmLgrJ+Ksj31OyN+0ImVZ7bqM9ICybDWXzTmPIsIKhdvfVNVcEqtluxVc9/J2bUPA1ZftQVt6\nep53Ppzg7NQyNUSBYRSMglEwZAEAYrwgmw;\n\nDEFINE LABEL 24\neJwzYWBgWGvJpWppreZiaf1nRpxl2aEnZuvuA4UZRGx3SZ5yOClR5OmqaBQaZfA7nMmMIUbNpSdWNtQ2\ntituY7Rj8u/w01muIU35H/3Dir44NeWD9L3KzNQPzPU2fDjB1mjzbHkTkNi3puOWy5sSHJ40b4tuatlS\nc7ElaMv+Vv6TILkJ62yNsjesiMneMD9XZsPU+ffX8Z/8tLbmEkhOf/09de9tf1SX7juo6Xvc1mjLqR5b\n5tPOTsdPlvoXHe2K8ziskpq8U7rMe9v0OqHrR88yUBlYXN17r/KWyo2nDz+emv207NDdVzvXVr8+OOf9\nS8W2wsddce4PZUMlbqu5UNveUTAK6AUAxKdu2w;\n\n"
});
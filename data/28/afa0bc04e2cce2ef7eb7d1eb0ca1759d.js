callback({
  "levelNumber": 28,
  "size": 32,
  "steps": 128,
  "successRatio": 0.12,
  "author": "albertferras",
  "hash": "afa0bc04e2cce2ef7eb7d1eb0ca1759d",
  "path": "28-Three-Sort-34.78/32.128-albertferras.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 28-Three-Sort - SIZE 32/34 - SPEED 128/78 --\n\na:\n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\n    INBOX   \n    COPYTO   2\n    COMMENT  0\nb:\n    COMMENT  4\n    SUB      1\n    JUMPZ    d\n    JUMPN    c\n    COMMENT  3\n    COMMENT  2\n    COPYTO   7\n    ADD      1\n    COPYTO   1\n    SUB      7\n    COPYTO   2\nc:\nd:\n    COMMENT  1\n    COPYFROM 1\n    SUB      0\n    JUMPZ    f\n    JUMPN    e\n    COMMENT  5\n    COMMENT  7\n    COPYTO   7\n    ADD      0\n    COPYTO   0\n    SUB      7\n    COPYTO   1\n    COPYFROM 2\n    JUMP     b\ne:\nf:\n    COMMENT  6\n    COPYFROM 2\n    OUTBOX  \n    COPYFROM 1\n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    JUMP     a\n\n\nDEFINE COMMENT 0\neJyLZmBgCFbcFs2krxCb7Jsdkz63IjzyYEX47vs+US8+28cDpRlmWf1fMN3cdukTM8EVesazVt81cNrI\npH9nN5N+6v6FBoeOcprqHI825z162Jpj5y1bg1XH7V5u03aQOlDrdOjoD9dpJ0BmHIx4dwhEzwhfvswr\nwmvB0egH8zISmmc8TnboWJ4sW8WRFFa0Lf5sXkqsRJ55pHnB8uB/5SD1FTWyVUlV87ZL1OWte9DwdNX+\n1uqVhzturP/XkbhZpPvObpFuqQMbOnWOK7fbnZNvOX5xc43hZctKoYsCFVmnQfq/zM+/DqJ3zPdf47bI\nf03CcsEV/1d0LJm/6sG8W6vqejauVGxrXXq0fvLCqobKOV87QGoLDh9bwbHfYJXmrt4NxduCd8zYYnlo\nxpbjF8235V/327H2dsbe0IeRB0MfgtQy5mR/Odv45fuyBSt/tG59/mfX+cB/Ky6k7v92Xnvet/M/s0Fq\nxPO+xJfnbPvMMApGwSAEADF9rTc;\n\nDEFINE COMMENT 1\neJwLZgCBDp7VnMv5CiRteW/qenFMdtFm2xQzlb2/j0XUc6mT5L5Ls4SLPj8V+v8/XRSk+ona0foHyh9r\nXsvY1JhKLqs9KejQ0cb9YN4zzsTNsVx3drdxSx2Yw7v48DYh3qOWMibbNsvPWv1J6WT3UuXMRblqHDvN\nNDfse2gsdQBk1n/vd4dAdKtHXc86z9zWL0FVDedDbGpiwt8UHIwITFsX+SjCPHKyr1OQs9NsL1a7SntW\nO5D6SY1tQWcbldc3NHUs4W1NmTarfc+Eu70i3bxTjXvjpxdOfDOTZ86bmTHLBWcor185WXTL5/r6rSB9\nKssl8v6vyKi8tSq6bs72uX3PNsstFltdtKtspSXYHfIPk3Mz7ybnXr2SUVlw+WPNigvxXZPOPZhXf375\nsosXldf/vWqybeGtedt/PTq1BaQ+bB/L2t7dRbsWr73wkmEUjIIhCAAzD5TQ;\n\nDEFINE COMMENT 2\neJwrYWBguKMQl3hF6mosi9DV2L/cX+KVuOakFnDKVq3mVGzTFHjRGyayZ0Kf4u1J0iq/pqxQ+79AXn3n\n2gbVNZsY5VP3swh5n+Tm2HrqI9O0E/ZMh45Ksbw7BDSSocaoIGOhwdH6uwYvencYzVq91Pj7xskmolue\nmIlueWHZu6HUpnrlB/u5fSGOslUTHLcsrHViWbvM+fvGdZ6Jm+f7flrKHvSvHGROU+rmiomJl6o0Y/Ub\n/aIdOooj1Sa1Rhyc8yoyb11K7J3d9vG/94Ymuu2VSwneMSP901KLzCeNwtmCKzbnrNkUlCe6BWTG+xqH\njqSqP89Y63NblzZUNXxr+ljj09Fenda7o+Vu78luwY7lyzxa/dcE1+WtA6l321Ss9H/FFZONM6/Grpxc\nWhI+0aFj6YTw2eETldfzTp195fCM0Ifpc1/fB6kt3na/9N7aS1XWK4/Wr1uW22q+7GuHyvL1U5nX+K+R\n3Qgxz+Sw3GL3Q983GhyQOgDiM97UjSi5lrr/9bW9O21v5q1jvfNpqdEDrwWCT/8vePOsY8nN59Urk54r\nr/92/92hz3emnWC86X0y6Xr5MZBeppePIu6++hJf82ZdjtEHt71GH8TvNry3eq3/NvKt9qv3rxlGwSgg\nEQAAymnhAw;\n\nDEFINE COMMENT 3\neJxTZ2Bg8IvOtz8f0ujW6V3ireCeHpDtXBGu7VCbnGyrVdphXddjZXN7Uo9d+Gx95/8LrnktX6YYfmwF\nUBsDR9Fr9+bStqD9re3VDycUTuzunjo/rt12qUh16n6QfMRCd1XFJWVz1y372rFxpUD9l/VTypo2eZYz\n7MxtFds9t+/EbsnpJ3ZvWbhgl/+aozvWbGrd+nKb7MZ52z+uqd+asPzGeoZRMApGAc0BAGiMSL8;\n\nDEFINE COMMENT 4\neJxTYWBg0Ix97e4XnR2zLpJ9wrrILQuBQgxC3hXhy4N3p2+Lr+spSGueARL74Wox83asT9TXpKhQEH9f\nqWqmSHVBRnd3ci6IX1AW1D+v6/YkEHvV5m3R81ddjTVftjLh/MLnKXZzknN9Z3iWx0+f2RQ/3bi3Y4bk\ndNHZmYuc5s9a/XvpqS1f1q/Z1Lv76SqGUTAKRgFdAQC6Lz1C;\n\nDEFINE COMMENT 5\neJwzYWBgCHFcYb7M+dz0h87nDzx0Nlj11O32JHPPVZ1vffQb2YMyKhXDPcs7o/+Vn4izqbmQYjGzKTVz\n0dSU6pWhiWs2acbu3WkSJnWg0TXiCAMI7LwaW7ZyYWHjoqP1IfP2TNCeGz67cg7L2vS5JtsmL1Tf3blC\nfTf7+vqtjzZ83zhjy/JlvbuP1uvuXViYsbc/S2rfzKZd+3nmLD/waenMI3t3vjq2YV/m2cWHmy8tPgwy\nmqc0PeBQRVccY82c1C09zC36E7rbt/S86E3q+jXFqDlxc1f1tBMMo2AUjAKSAAA2e2fP;\n\nDEFINE COMMENT 6\neJwLZWBguMC+T/EGr7vqIek09ROrJ6nEXWnR/P//gAlQikFe/WT3ZnmRbhfRCZNvC4TPZuSfOr+Lr2OJ\nH1/91s38bnvFBS0PRYlHHFkjGXEkSTZ1f41S4uZvqq5Tvqk+XeWh8e7QP+1pJ7r1vE8qmB86CjKPyV44\nSdLxVuYBj80VX4IU215F1vUohhdOPOK9c+1TN9EtbE7nD9x1aDkIUqsZ27uhOPLO7sbQiCNV/vnX3/qs\nvQ0SP1RxJKy9wrwgrtyh43Fx0a41ZXnrXlfaLu2r+7/Apclrwa/WjiXtHXnrNnRy7NzQmbo/umXaCb0G\n75N9eW57lxRw7ASZMX2KVun/Gctqd65vnpG+dur8H4vqtzLNsTykMOXKGZA896Y1m6ZsnLf9zLrU/ZVz\nLrwEiUVd3NGy+eTcvqkHtyx03q+8vm6/1IELB1ectzimcmPSucZ7ltde39e7m3SHYRSMgiEEABxin8Y;\n\nDEFINE COMMENT 7\neJwrZWBg+KVR4r1ZXtPnueRfPw7RtiAHIZ+oiSKBae4STflqsn7NInJ7JpTIpExrluCZ48f3fwEDQ+xc\noDYGS52m/KtaYUVmmjObzDTXT43Tylzko718WalOzPJK/cuL9Yx/Tckz02+cbi6Rt9Jsbp+Cufa8Fgu5\nxSpWtks32tgu3WpfNrfWac+Eh87mBSDzYsLfFHCHchd/9NdvTPY17t3os2VhoN/yZexB1SunhFSv/BFq\nu3RG+KJZxZGrOtdFLqstjmw5CNLXlKpV+jPVuNc9dfmyXUktBxcnhD7kz7BdejT7X7lmrnnBkgKXbJci\nibyLJVPK3EsF6t1LHTp2Ff2a4pDvtaArO2a5SVrMcpA5DZM4FXf0/1Hd0qOjL9jxw+lJ88oEvQa/5r66\nWauD66ad2F7v/gyk7s3MKWVrp2mVrpx8qaphkkA9W/+vKSF9Xgv6+/zXPJzwcpvn1Hnb46ebbMtesGjW\n5IV+zQ8XdLfLLmye8WNR3jqQ/j9bU6YFro69AGLPPLLL7uehD8Hch/qzlh94umrmEcnpR08E9YedE+n+\ndl6k+/GFoH73S14LMs/mrQs6/XIb40n13euPue1tOzpxz+rDL7eBzNC6xWC0/Y5slcRt8bupt96/ZhgF\no4AEAAB+bdDb;\n\nDEFINE LABEL 0\neJwTYWBguJElnOScZJRiHmlecD5EoD47+FpbXVBQ/5cgnjmPgqfObwzdslAoesvCBbFeC6QSw2fLpbBP\n4M8oLVmfWZssnrdnwpKCsrm7iv4v+FvxfwHDKBgFo2BIAQDYniOb;\n\nDEFINE LABEL 1\neJwTZGBg2JzDancyz2AVS/656dvy5/ZNLOxudy9lbkmt3dFytlGk26wtZZpZW/jsaS1yix80zFptW9O7\noaDMaeO3ohvrOYp2rmUYBaNgFAxZAAA/ZR+R;\n\nDEFINE LABEL 2\neJzjZ2BgOFXH5WVZucnfO8Mn6nZsbfKqsLN5X4I+1uwM+trRGCo5nSFGbrFJ2qzVHEXK6/UabqyX6FNe\nf226/xoGJGCRuTv9aHZ8F4jtUH8kLLjOrxnElpk4PbJhkmrm90l+zb4zapNvzXoU8WHOh+DsBdbBbot0\nIxSX1CYnLGdumb18bh/DKBgFo4DuAAB3ojb/;\n\nDEFINE LABEL 7\neJwzYGBg2OovZPnR/0iYmJ/BKiCXYZ4tW7qx28qEZF/7+OXB9vEx4XGJftGBaSC5ptTNFRdStizcl3p7\n0pX0a21zsmxqUnPvl/blaZWGFcpWyZfktq4ps5j5vExu8fOytzPbK0S6GWsyKoPrltVmNuS2TmsJn72/\nVXAFyKysCaUl3yctX2Y02fJQw6TGe1yTTLYZTZ7bd2lKdF3RtCllVjPfFLDNP5vntqi9+sDSRbMOLN2y\n8PKST0sbFxmsEp39dJXClE9LGUbBKBgFFAEA3eRXIA;\n\n"
});
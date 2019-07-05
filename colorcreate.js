const fs = require('fs')

const data = {
  colors: [
    {
      timestamp: 1129614186,
      hex: '57417f',
      id: 23378,
      tags: [
        {
          timestamp: 1129614186,
          id: 14412,
          name: 'vespertine'
        }
      ]
    },
    {
      timestamp: 1129410862,
      hex: '7a3c52',
      id: 23358,
      tags: [
        {
          timestamp: 1108110850,
          id: 2522,
          name: 'plum'
        },
        {
          timestamp: 1108110851,
          id: 2626,
          name: 'pink'
        }
      ]
    },
    {
      timestamp: 1187574149,
      hex: '83596d',
      id: 35010,
      tags: [
        {
          timestamp: 1108110851,
          id: 2576,
          name: 'victorian'
        },
        {
          timestamp: 1108110850,
          id: 2522,
          name: 'plum'
        }
      ]
    },
    {
      timestamp: 1187573456,
      hex: '3f4253',
      id: 28431,
      tags: [
        {
          timestamp: 1108110854,
          id: 2677,
          name: 'falling'
        },
        {
          timestamp: 1108110855,
          id: 2934,
          name: 'night'
        }
      ]
    },
    {
      timestamp: 1192302710,
      hex: 'acacb4',
      id: 59291,
      tags: [
        {
          timestamp: 1108110863,
          id: 3768,
          name: 'slate'
        }
      ]
    },
    {
      timestamp: 1187574653,
      hex: 'ce896f',
      id: 18420,
      tags: [
        {
          timestamp: 1111913412,
          id: 10885,
          name: 'spicebush'
        }
      ]
    },
    {
      timestamp: 1187574194,
      hex: '8b643d',
      id: 18765,
      tags: [
        {
          timestamp: 1108110874,
          id: 4485,
          name: 'baked'
        },
        {
          timestamp: 1108110850,
          id: 2537,
          name: 'gold'
        }
      ]
    },
    {
      timestamp: 1187574209,
      hex: '8e4764',
      id: 11598,
      tags: [
        {
          timestamp: 1111496103,
          id: 6513,
          name: 'very'
        },
        {
          timestamp: 1108110850,
          id: 2522,
          name: 'plum'
        }
      ]
    },
    {
      timestamp: 1187574281,
      hex: '9a846a',
      id: 38069,
      tags: [
        {
          timestamp: 1108110872,
          id: 4328,
          name: 'cumin'
        }
      ]
    },
    {
      timestamp: 1187574786,
      hex: 'dbddbd',
      id: 49888,
      tags: [
        {
          timestamp: 1187574786,
          id: 20483,
          name: 'luminesce'
        }
      ]
    },
    {
      timestamp: 1187574867,
      hex: 'e2e8e3',
      id: 51638,
      tags: [
        {
          timestamp: 1108110850,
          id: 2559,
          name: 'light'
        },
        {
          timestamp: 1108110857,
          id: 3086,
          name: 'breeze'
        }
      ]
    },
    {
      timestamp: 1187574898,
      hex: 'e4e1cd',
      id: 20820,
      tags: [
        {
          timestamp: 1108110876,
          id: 4733,
          name: 'paris'
        },
        {
          timestamp: 1108110850,
          id: 2559,
          name: 'light'
        }
      ]
    },
    {
      timestamp: 1187574132,
      hex: '7f6c5c',
      id: 34545,
      tags: [
        {
          timestamp: 1108110850,
          id: 2550,
          name: 'rustic'
        },
        {
          timestamp: 1108110857,
          id: 3165,
          name: 'taupe'
        }
      ]
    },
    {
      timestamp: 1187575187,
      hex: 'f7e0db',
      id: 13050,
      tags: [
        {
          timestamp: 1108110854,
          id: 2668,
          name: 'touch'
        },
        {
          timestamp: 1108110854,
          id: 2669,
          name: 'of'
        },
        {
          timestamp: 1108110851,
          id: 2626,
          name: 'pink'
        },
        {
          timestamp: 1108110854,
          id: 2681,
          name: 'white'
        },
        {
          timestamp: 1108110876,
          id: 4733,
          name: 'paris'
        }
      ]
    },
    {
      timestamp: 1187574544,
      hex: 'c09ba2',
      id: 44107,
      tags: [
        {
          timestamp: 1108110872,
          id: 4312,
          name: 'cosmos'
        },
        {
          timestamp: 1108110856,
          id: 2948,
          name: 'kiss'
        }
      ]
    },
    {
      timestamp: 1187574663,
      hex: 'cf8c49',
      id: 46996,
      tags: [
        {
          timestamp: 1108110868,
          id: 4039,
          name: 'ochre'
        },
        {
          timestamp: 1108110850,
          id: 2542,
          name: 'yellow'
        }
      ]
    },
    {
      timestamp: 1187574143,
      hex: '81979f',
      id: 34840,
      tags: [
        {
          timestamp: 1111913412,
          id: 10890,
          name: 'rococo'
        }
      ]
    },
    {
      timestamp: 1187574635,
      hex: 'cbc4ac',
      id: 46259,
      tags: [
        {
          timestamp: 1187574635,
          id: 20050,
          name: 'fishnet'
        }
      ]
    },
    {
      timestamp: 1109629711,
      hex: 'bcab8c',
      id: 7150,
      tags: [
        {
          timestamp: 1108110866,
          id: 3983,
          name: 'bamboo'
        },
        {
          timestamp: 1109629711,
          id: 6129,
          name: 'screen'
        }
      ]
    },
    {
      timestamp: 1562243072,
      hex: '',
      id: -1,
      tags: []
    },
    {
      timestamp: 1187574891,
      hex: 'e4bc9b',
      id: 51966,
      tags: [
        {
          timestamp: 1111913452,
          id: 12178,
          name: 'scarborough'
        }
      ]
    },
    {
      timestamp: 1187573658,
      hex: '586a80',
      id: 30455,
      tags: [
        {
          timestamp: 1108110851,
          id: 2591,
          name: 'blue'
        },
        {
          timestamp: 1109629660,
          id: 5582,
          name: 'heron'
        }
      ]
    },
    {
      timestamp: 1187574971,
      hex: 'e9eedc',
      id: 53483,
      tags: [
        {
          timestamp: 1187574971,
          id: 20942,
          name: 'whiz'
        },
        {
          timestamp: 1111913496,
          id: 12748,
          name: 'kid'
        }
      ]
    },
    {
      timestamp: 1187574701,
      hex: 'd37c54',
      id: 10797,
      tags: [
        {
          timestamp: 1108110858,
          id: 3301,
          name: 'copper'
        },
        {
          timestamp: 1108110862,
          id: 3726,
          name: 'harbor'
        }
      ]
    },
    {
      timestamp: 1187573836,
      hex: '69c1d7',
      id: 15273,
      tags: [
        {
          timestamp: 1111913380,
          id: 9777,
          name: 'waterflow'
        }
      ]
    },
    {
      timestamp: 1187574371,
      hex: 'a89387',
      id: 40190,
      tags: [
        {
          timestamp: 1108110875,
          id: 4679,
          name: 'fawn'
        },
        {
          timestamp: 1108110856,
          id: 3012,
          name: 'brown'
        }
      ]
    },
    {
      timestamp: 1187574827,
      hex: 'dfdcc1',
      id: 50842,
      tags: [
        {
          timestamp: 1108110854,
          id: 2720,
          name: 'spring'
        },
        {
          timestamp: 1109629705,
          id: 5910,
          name: 'frolic'
        }
      ]
    },
    {
      timestamp: 1187574826,
      hex: 'dfd0c1',
      id: 50791,
      tags: [
        {
          timestamp: 1108110854,
          id: 2691,
          name: 'cotton'
        },
        {
          timestamp: 1108110862,
          id: 3695,
          name: 'canton'
        }
      ]
    },
    {
      timestamp: 1187574868,
      hex: 'e2eee2',
      id: 51662,
      tags: [
        {
          timestamp: 1108110854,
          id: 2708,
          name: 'soft'
        },
        {
          timestamp: 1108110859,
          id: 3403,
          name: 'glow'
        }
      ]
    },
    {
      timestamp: 1111913359,
      hex: 'b05e53',
      id: 13019,
      tags: [
        {
          timestamp: 1108110875,
          id: 4629,
          name: 'matrix'
        }
      ]
    },
    {
      timestamp: 1187574319,
      hex: 'a04561',
      id: 16732,
      tags: [
        {
          timestamp: 1108110870,
          id: 4193,
          name: 'bright'
        },
        {
          timestamp: 1108110857,
          id: 3166,
          name: 'cherry'
        }
      ]
    },
    {
      timestamp: 1187573847,
      hex: '6c7f90',
      id: 13191,
      tags: [
        {
          timestamp: 1111913342,
          id: 8054,
          name: 'skipper'
        },
        {
          timestamp: 1109629699,
          id: 5688,
          name: 'mood'
        },
        {
          timestamp: 1108110863,
          id: 3746,
          name: 'indigo'
        }
      ]
    },
    {
      timestamp: 1187574694,
      hex: 'd2a785',
      id: 17948,
      tags: [
        {
          timestamp: 1108110871,
          id: 4277,
          name: 'cinnamon'
        },
        {
          timestamp: 1108110857,
          id: 3182,
          name: 'beige'
        },
        {
          timestamp: 1132000969,
          id: 14578,
          name: 'burned'
        },
        {
          timestamp: 1132000969,
          id: 14579,
          name: 'hamburger'
        }
      ]
    },
    {
      timestamp: 1187574149,
      hex: '83564a',
      id: 35008,
      tags: [
        {
          timestamp: 1108110856,
          id: 3012,
          name: 'brown'
        },
        {
          timestamp: 1111913323,
          id: 7060,
          name: 'seminole'
        }
      ]
    },
    {
      timestamp: 1187573618,
      hex: '554763',
      id: 30158,
      tags: [
        {
          timestamp: 1108110855,
          id: 2803,
          name: 'vintage'
        },
        {
          timestamp: 1108110856,
          id: 2989,
          name: 'grape'
        }
      ]
    },
    {
      timestamp: 1187574553,
      hex: 'c1af97',
      id: 44293,
      tags: [
        {
          timestamp: 1108110864,
          id: 3826,
          name: 'khaki'
        },
        {
          timestamp: 1108110863,
          id: 3742,
          name: 'shade'
        }
      ]
    },
    {
      timestamp: 1187574565,
      hex: 'c2e0d6',
      id: 44559,
      tags: [
        {
          timestamp: 1108110851,
          id: 2591,
          name: 'blue'
        },
        {
          timestamp: 1187574523,
          id: 19693,
          name: 'mackinac'
        },
        {
          timestamp: 1149860278,
          id: 15813,
          name: 'hotel'
        },
        {
          timestamp: 1108110862,
          id: 3716,
          name: 'grand'
        }
      ]
    },
    {
      timestamp: 1187574363,
      hex: 'a79355',
      id: 40042,
      tags: [
        {
          timestamp: 1108110851,
          id: 2622,
          name: 'tea'
        },
        {
          timestamp: 1108110855,
          id: 2896,
          name: 'the'
        },
        {
          timestamp: 1108110863,
          id: 3742,
          name: 'shade'
        }
      ]
    },
    {
      timestamp: 1562243072,
      hex: '',
      id: -1,
      tags: []
    },
    {
      timestamp: 1562243072,
      hex: '',
      id: -1,
      tags: []
    },
    {
      timestamp: 1187573452,
      hex: '3d4966',
      id: 28321,
      tags: [
        {
          timestamp: 1108110851,
          id: 2599,
          name: 'jazz'
        }
      ]
    },
    {
      timestamp: 1562243072,
      hex: '',
      id: -1,
      tags: []
    },
    {
      timestamp: 1187574795,
      hex: 'dcd7d8',
      id: 50089,
      tags: [
        {
          timestamp: 1111913365,
          id: 9178,
          name: 's'
        }
      ]
    },
    {
      timestamp: 1187574250,
      hex: '95a9b8',
      id: 9252,
      tags: [
        {
          timestamp: 1111913326,
          id: 7223,
          name: 'stockholm'
        }
      ]
    },
    {
      timestamp: 1187574633,
      hex: 'cb7f55',
      id: 46172,
      tags: [
        {
          timestamp: 1187574633,
          id: 20033,
          name: 'vecchio'
        },
        {
          timestamp: 1187574633,
          id: 20034,
          name: 'ponte'
        }
      ]
    },
    {
      timestamp: 1187574637,
      hex: 'cbd3cb',
      id: 46305,
      tags: [
        {
          timestamp: 1108110876,
          id: 4733,
          name: 'paris'
        },
        {
          timestamp: 1108110858,
          id: 3293,
          name: 'winter'
        }
      ]
    },
    {
      timestamp: 1187574309,
      hex: '9ea29f',
      id: 16419,
      tags: [
        {
          timestamp: 1111913390,
          id: 10188,
          name: 'gris'
        }
      ]
    },
    {
      timestamp: 1187574234,
      hex: '927069',
      id: 20503,
      tags: [
        {
          timestamp: 1108110859,
          id: 3394,
          name: 'cozy'
        },
        {
          timestamp: 1108110861,
          id: 3638,
          name: 'cabin'
        }
      ]
    },
    {
      timestamp: 1187573670,
      hex: '5b5f32',
      id: 8610,
      tags: [
        {
          timestamp: 1111913320,
          id: 6916,
          name: 'globe'
        },
        {
          timestamp: 1108110866,
          id: 3941,
          name: 'artichoke'
        }
      ]
    },
    {
      timestamp: 1187574632,
      hex: 'cadcda',
      id: 10238,
      tags: [
        {
          timestamp: 1111913335,
          id: 7718,
          name: 'dresden'
        },
        {
          timestamp: 1108110851,
          id: 2591,
          name: 'blue'
        }
      ]
    }
  ],
  schemes: [],
  schemes_history: {},
  success: true,
  colors_history: {
    '554763': [
      {
        d_count: 0,
        id: '2803',
        a_count: 1,
        name: 'vintage'
      },
      {
        d_count: 0,
        id: '2989',
        a_count: 1,
        name: 'grape'
      }
    ],
    '927069': [
      {
        d_count: 0,
        id: '3394',
        a_count: 1,
        name: 'cozy'
      },
      {
        d_count: 0,
        id: '3638',
        a_count: 1,
        name: 'cabin'
      }
    ],
    cbc4ac: [
      {
        d_count: 0,
        id: '20050',
        a_count: 1,
        name: 'fishnet'
      }
    ],
    c09ba2: [
      {
        d_count: 0,
        id: '4312',
        a_count: 1,
        name: 'cosmos'
      },
      {
        d_count: 0,
        id: '2948',
        a_count: 1,
        name: 'kiss'
      }
    ],
    cadcda: [
      {
        d_count: 0,
        id: '2591',
        a_count: 1,
        name: 'blue'
      },
      {
        d_count: 0,
        id: '7718',
        a_count: 1,
        name: 'dresden'
      }
    ],
    '3d4966': [
      {
        d_count: 0,
        id: '2599',
        a_count: 1,
        name: 'jazz'
      }
    ],
    e4e1cd: [
      {
        d_count: 0,
        id: '2559',
        a_count: 1,
        name: 'light'
      },
      {
        d_count: 0,
        id: '4733',
        a_count: 1,
        name: 'paris'
      }
    ],
    c2e0d6: [
      {
        d_count: 0,
        id: '2591',
        a_count: 1,
        name: 'blue'
      },
      {
        d_count: 0,
        id: '19693',
        a_count: 1,
        name: 'mackinac'
      },
      {
        d_count: 0,
        id: '15813',
        a_count: 1,
        name: 'hotel'
      },
      {
        d_count: 0,
        id: '3716',
        a_count: 1,
        name: 'grand'
      }
    ],
    acacb4: [
      {
        d_count: 0,
        id: '3768',
        a_count: 1,
        name: 'slate'
      }
    ],
    e9eedc: [
      {
        d_count: 0,
        id: '20942',
        a_count: 1,
        name: 'whiz'
      },
      {
        d_count: 0,
        id: '12748',
        a_count: 1,
        name: 'kid'
      }
    ],
    dcd7d8: [
      {
        d_count: 0,
        id: '9178',
        a_count: 1,
        name: 's'
      }
    ],
    '3f4253': [
      {
        d_count: 0,
        id: '2677',
        a_count: 1,
        name: 'falling'
      },
      {
        d_count: 0,
        id: '2934',
        a_count: 1,
        name: 'night'
      }
    ],
    '9ea29f': [
      {
        d_count: 0,
        id: '10188',
        a_count: 1,
        name: 'gris'
      }
    ],
    bcab8c: [
      {
        d_count: 0,
        id: '6129',
        a_count: 1,
        name: 'screen'
      },
      {
        d_count: 0,
        id: '3983',
        a_count: 1,
        name: 'bamboo'
      }
    ],
    '8e4764': [
      {
        d_count: 0,
        id: '6513',
        a_count: 1,
        name: 'very'
      },
      {
        d_count: 0,
        id: '2522',
        a_count: 1,
        name: 'plum'
      }
    ],
    '7f6c5c': [
      {
        d_count: 0,
        id: '2550',
        a_count: 1,
        name: 'rustic'
      },
      {
        d_count: 0,
        id: '3165',
        a_count: 1,
        name: 'taupe'
      }
    ],
    b05e53: [
      {
        d_count: 0,
        id: '4629',
        a_count: 1,
        name: 'matrix'
      }
    ],
    '81979f': [
      {
        d_count: 0,
        id: '10890',
        a_count: 1,
        name: 'rococo'
      }
    ],
    ce896f: [
      {
        d_count: 0,
        id: '10885',
        a_count: 1,
        name: 'spicebush'
      }
    ],
    '586a80': [
      {
        d_count: 0,
        id: '2591',
        a_count: 1,
        name: 'blue'
      },
      {
        d_count: 0,
        id: '5582',
        a_count: 1,
        name: 'heron'
      }
    ],
    '57417f': [
      {
        d_count: 0,
        id: '14412',
        a_count: 1,
        name: 'vespertine'
      }
    ],
    '83596d': [
      {
        d_count: 0,
        id: '2576',
        a_count: 1,
        name: 'victorian'
      },
      {
        d_count: 0,
        id: '2522',
        a_count: 1,
        name: 'plum'
      }
    ],
    c1af97: [
      {
        d_count: 0,
        id: '3826',
        a_count: 1,
        name: 'khaki'
      },
      {
        d_count: 0,
        id: '3742',
        a_count: 1,
        name: 'shade'
      }
    ],
    e2eee2: [
      {
        d_count: 0,
        id: '2708',
        a_count: 1,
        name: 'soft'
      },
      {
        d_count: 0,
        id: '3403',
        a_count: 1,
        name: 'glow'
      }
    ],
    '69c1d7': [
      {
        d_count: 0,
        id: '9777',
        a_count: 1,
        name: 'waterflow'
      }
    ],
    cbd3cb: [
      {
        d_count: 0,
        id: '4733',
        a_count: 1,
        name: 'paris'
      },
      {
        d_count: 0,
        id: '3293',
        a_count: 1,
        name: 'winter'
      }
    ],
    '83564a': [
      {
        d_count: 0,
        id: '3012',
        a_count: 1,
        name: 'brown'
      },
      {
        d_count: 0,
        id: '7060',
        a_count: 1,
        name: 'seminole'
      }
    ],
    '9a846a': [
      {
        d_count: 0,
        id: '4328',
        a_count: 1,
        name: 'cumin'
      }
    ],
    f7e0db: [
      {
        d_count: 0,
        id: '2626',
        a_count: 1,
        name: 'pink'
      },
      {
        d_count: 0,
        id: '2668',
        a_count: 1,
        name: 'touch'
      },
      {
        d_count: 0,
        id: '2669',
        a_count: 1,
        name: 'of'
      },
      {
        d_count: 0,
        id: '2681',
        a_count: 1,
        name: 'white'
      },
      {
        d_count: 0,
        id: '4733',
        a_count: 1,
        name: 'paris'
      }
    ],
    '5b5f32': [
      {
        d_count: 0,
        id: '3941',
        a_count: 1,
        name: 'artichoke'
      },
      {
        d_count: 0,
        id: '6916',
        a_count: 1,
        name: 'globe'
      }
    ],
    '95a9b8': [
      {
        d_count: 0,
        id: '7223',
        a_count: 1,
        name: 'stockholm'
      }
    ],
    e2e8e3: [
      {
        d_count: 0,
        id: '2559',
        a_count: 1,
        name: 'light'
      },
      {
        d_count: 0,
        id: '3086',
        a_count: 1,
        name: 'breeze'
      }
    ],
    cb7f55: [
      {
        d_count: 0,
        id: '20033',
        a_count: 1,
        name: 'vecchio'
      },
      {
        d_count: 0,
        id: '20034',
        a_count: 1,
        name: 'ponte'
      }
    ],
    d2a785: [
      {
        d_count: 0,
        id: '4277',
        a_count: 1,
        name: 'cinnamon'
      },
      {
        d_count: 0,
        id: '3182',
        a_count: 1,
        name: 'beige'
      },
      {
        d_count: 0,
        id: '14578',
        a_count: 1,
        name: 'burned'
      },
      {
        d_count: 0,
        id: '14579',
        a_count: 1,
        name: 'hamburger'
      }
    ],
    '7a3c52': [
      {
        d_count: 0,
        id: '2522',
        a_count: 1,
        name: 'plum'
      },
      {
        d_count: 0,
        id: '2626',
        a_count: 1,
        name: 'pink'
      }
    ],
    dfd0c1: [
      {
        d_count: 0,
        id: '2691',
        a_count: 1,
        name: 'cotton'
      },
      {
        d_count: 0,
        id: '3695',
        a_count: 1,
        name: 'canton'
      }
    ],
    a89387: [
      {
        d_count: 0,
        id: '4679',
        a_count: 1,
        name: 'fawn'
      },
      {
        d_count: 0,
        id: '3012',
        a_count: 1,
        name: 'brown'
      }
    ],
    cf8c49: [
      {
        d_count: 0,
        id: '4039',
        a_count: 1,
        name: 'ochre'
      },
      {
        d_count: 0,
        id: '2542',
        a_count: 1,
        name: 'yellow'
      }
    ],
    e4bc9b: [
      {
        d_count: 0,
        id: '12178',
        a_count: 1,
        name: 'scarborough'
      }
    ],
    '8b643d': [
      {
        d_count: 0,
        id: '2537',
        a_count: 1,
        name: 'gold'
      },
      {
        d_count: 0,
        id: '4485',
        a_count: 1,
        name: 'baked'
      }
    ],
    a79355: [
      {
        d_count: 0,
        id: '2622',
        a_count: 1,
        name: 'tea'
      },
      {
        d_count: 0,
        id: '2896',
        a_count: 1,
        name: 'the'
      },
      {
        d_count: 0,
        id: '3742',
        a_count: 1,
        name: 'shade'
      }
    ],
    '6c7f90': [
      {
        d_count: 0,
        id: '8054',
        a_count: 1,
        name: 'skipper'
      },
      {
        d_count: 0,
        id: '5688',
        a_count: 1,
        name: 'mood'
      },
      {
        d_count: 0,
        id: '3746',
        a_count: 1,
        name: 'indigo'
      }
    ],
    a04561: [
      {
        d_count: 0,
        id: '4193',
        a_count: 1,
        name: 'bright'
      },
      {
        d_count: 0,
        id: '3166',
        a_count: 1,
        name: 'cherry'
      }
    ],
    d37c54: [
      {
        d_count: 0,
        id: '3726',
        a_count: 1,
        name: 'harbor'
      },
      {
        d_count: 0,
        id: '3301',
        a_count: 1,
        name: 'copper'
      }
    ],
    dbddbd: [
      {
        d_count: 0,
        id: '20483',
        a_count: 1,
        name: 'luminesce'
      }
    ],
    dfdcc1: [
      {
        d_count: 0,
        id: '2720',
        a_count: 1,
        name: 'spring'
      },
      {
        d_count: 0,
        id: '5910',
        a_count: 1,
        name: 'frolic'
      }
    ]
  },
  matching_colors: [
    '57417f',
    '7a3c52',
    '83596d',
    '3f4253',
    'acacb4',
    'ce896f',
    '8b643d',
    '8e4764',
    '9a846a',
    'dbddbd',
    'e2e8e3',
    'e4e1cd',
    '7f6c5c',
    'f7e0db',
    'c09ba2',
    'cf8c49',
    '81979f',
    'cbc4ac',
    'bcab8c',
    '',
    'e4bc9b',
    '586a80',
    'e9eedc',
    'd37c54',
    '69c1d7',
    'a89387',
    'dfdcc1',
    'dfd0c1',
    'e2eee2',
    'b05e53',
    'a04561',
    '6c7f90',
    'd2a785',
    '83564a',
    '554763',
    'c1af97',
    'c2e0d6',
    'a79355',
    '',
    '',
    '3d4966',
    '',
    'dcd7d8',
    '95a9b8',
    'cb7f55',
    'cbd3cb',
    '9ea29f',
    '927069',
    '5b5f32',
    'cadcda'
  ],
  messages: []
}

const colorData = data.colors.map(color => color.hex)
const stream = fs.createWriteStream('./colors.json')
stream.write(JSON.stringify(colorData, null, 2), () => {
  console.log('done')
})

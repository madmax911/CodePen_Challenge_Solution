function remoteControl(word)
{
  const kb =
  [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l','' ],
    ['z','x','c','v','b','n','m','', '', '' ]
  ];

  let pos = {'x': 0, 'y': 0};   //  q

  let moveNext = (letter) =>
  {
    let target = {'x': 0, 'y': 0};
    let dist = {'x': 0, 'y': 0};

    target.x = kb.map(v => v.indexOf(letter)).filter(v => v > -1)[0];
    target.y = kb.map(v => v.indexOf(letter)).map((v, i) => v > -1 ? i : v).filter(v => v > -1)[0];

    dist.x = target.x - pos.x;
    dist.y = target.y - pos.y;

    let nextSeq =
    [
      Array(Math.abs(dist.y)).fill(dist.y < 0 ? 'up'   : 'down' ).join(', '),
      Array(Math.abs(dist.x)).fill(dist.x < 0 ? 'left' : 'right').join(', '),
      'select'
    ].filter(v => v).join(', ');

    pos = target;

    return nextSeq;
  }

  return word.split('').map(v => moveNext(v)).join(', ');
}
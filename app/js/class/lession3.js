{
  let regex = new RegExp('xyz', 'i')
  let regex2 = new RegExp(/xyz/i)
  console.log(regex.test('xyz'),regex2.test('xyz'))

  // es6
  let regex3 = new RegExp(/xyz/ig, 'i')
  console.log(regex3.flags);
  
}

{
  let s = 'bbb_bb_b'
  let a1 = /b+/g;
  let a2 = /b+/y;

  console.log('one', a1.exec(s),a2.exec(s));
  console.log('two', a1.exec(s),a2.exec(s));

  console.log(a1.sticky, a2.sticky);
    
}

{
  console.log('u修饰符',/^\uD83D/.test('\uD83D\uDC2A'));
  console.log('u修饰符',/^\uD83D/u.test('\uD83D\uDC2A')); 
}
{
  console.log(0b111111)
  console.log(0o767)
}

{
  console.log('15', Number.isFinite(15))
  console.log('NaN', Number.isFinite(NaN));
  console.log('NaN', Number.isNaN(NaN));
  console.log('0', Number.isNaN(0));
  
}

{
  console.log('25', Number.isInteger(25));
  console.log('25.0', Number.isInteger(25));
  console.log('25.1', Number.isInteger(25.1));
  console.log('25.1', Number.isInteger('25'));

}

{
  console.log(Number.isSafeInteger(10));
  console.log(Number.isSafeInteger('10'));
  
}

{
  console.log('4.1',Math.trunc(4.1));
  console.log('4.9', Math.trunc(4.9));
}

{
  console.log('-5', Math.sign(-5));
  console.log('0', Math.sign(0));
  console.log('5', Math.sign(5));
  console.log('foo', Math.sign('foo'));
  
}

{
  console.log('-1', Math.cbrt(-1));
  
}
{
  function test(x, y = 'world') {
    console.log('默认值', x, y);
    
  }

  test('hello', undefined)

  // 默认值后面不能再有没有默认值的变量
}

{
  let a = 'test'
  function test2(x, y=x) {
    console.log('作用域',x,y);
    
  }

  test2('kill')
}

{
  function test3(...arg) {
    for(let v of arg) {
      console.log('rest', v);
      
    }
  }

  test3(1,2,3)
}

{
  console.log(...[1,2,4]);
  
}

{
  let arrow = v => v*2
  let arrow2 = () => 5;
  console.log('arrow',arrow(3));
  console.log(arrow2(2));
  
}

{
  function tail(x) {
    console.log('tail', x);
    
  }

  function fx(x) {
    return tail(x)
  }

  fx(123)
}
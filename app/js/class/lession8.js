{
  let o = 1
  let k = 2
  let es5 = {
    o: o,
    k: k
  }
  let es6 = {
    o,
    k
  }
  console.log('es5', es5);
  console.log('es6', es6);

  let es5_method = {
    hello: function() {
      console.log('hello');
    }
  }

  let es6method = {
    hello() {
      console.log('hello');
      
    }
  }

  // console.log(es5_method.hello(),es6method.hello());
  
}

{
  let a = 'b'
  let es5_obj={
    a: 'c'
  }
  let es6_obj = {
    [a]: 'c'
  }
  console.log(es5_obj,es6_obj);
  
}

{
  console.log('字符串',Object.is('abc', 'abc'),'abc' === 'abc');
  console.log('数组',Object.is([],[]));
  console.log('拷贝', Object.assign({a: 'a'},{b: 'b'}));
  
}

{

}
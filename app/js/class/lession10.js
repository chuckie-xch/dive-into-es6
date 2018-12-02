{
  let set = new Set()
  set.add(5)
  set.add(6)
  set.add(5)
  console.log(set.size);
    
}

{
  let arr = [1,2,3,4,5]
  let list = new Set(arr)
  console.log(list.size);
  console.log(list.has(2));
  
}

{
  let arr = ['add','delete','clear','has']
  let list = new Set(arr)
  for(let value of list.values()) {
    console.log('value',value);
    
  }
}

{
  let weakList = new WeakSet()
  let arg = {}
  weakList.add(arg)
  // weakList.add('a') 不支持非对象
  console.log(arg);
  
}

{
  let map = new Map()
  let arr = ['123','345']

  map.set(arr,456)
  console.log(map);
  console.log('map',map.get(arr));
  
}

{
  let map = new Map([['a','123'],['b','456']])
  console.log(map);
  console.log(map.size);

  
}
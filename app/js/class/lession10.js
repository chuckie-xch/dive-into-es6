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

{
  let map = new Map()
  let array = []
  map.set('t', 1)
  array.push({t: 1})
  console.log('map-array',map,array);
  let map_exist = map.has('t')
  let array_exist = array.find(item => item.t)
  console.log('map-arrray',map_exist, array_exist);

  map.set('t',2)
  array.forEach(item => item.t ? item.t=2 : '')
  console.log('map-array-modify',map,array);
  
  map.delete('t')
  let index = array.findIndex(item => item.t)
  array.splice(index,1)
  console.log('map-array-empty',map,array);
  
  
}

{
  let set = new Set()
  let array = []
  set.add({t: 1})
  array.push({t: 1})
  console.log('set-array', set, array);

  let set_exist = set.has({t: 1})
  let array_exist = array.find(item => item.t)
  console.log('set_array_exist', set_exist, array_exist);
  set.forEach(item => item.t?item.t = 2: '')
  array.forEach(item=> item.t?item.t = 2: '')
  console.log('set-array_modify',set, array);

  // 删除
  set.forEach(item => item.t ? set.delete(item): '')
  let index = array.findIndex(item => item.t)
  array.splice(index, 1)
  console.log('set-array-empty', set, array);
  
  
}

{
  let item = {t: 1}
  let map = new Map()
  let set = new Set()
  let obj = {}
  map.set('t',1)
  set.add(item)
  obj['t'] = 1
  console.log('map-set-obj',map,set,obj);

  // 查
  console.info({
    map_exist: map.has('t'),
    set_exist: set.has(item),
    obj_exist: 't' in obj
  })

  map.delete('t')
  set.delete(item)
  delete obj['t']
  console.log('map-set-obj-empty',map,set,obj);
  
  
}
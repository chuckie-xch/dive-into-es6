import { Agent } from "https";

{
  let obj = {
    time: '2018-12-03',
    name: 'net',
    _r: 123
  }

  let monitor = new Proxy(obj,{
    get(target,key) {
      return target[key].replace('2018','2019')
    },
    set(target,key,value) {
      if(key === 'name') {
        return target[key] = value;
      } else {
        return target[key]
      }
    },
    has(target, key) {
      if(key === 'name') {
        return target[key]
      } else {
        return false
      }
    },
    ownKeys(target) {
      return Object.keys(target).filter(item => item!='time')
    }
  })

  console.log(monitor.time);
  monitor.time = '2020';
  console.log('set',monitor.time);
  monitor.name = 'zhangsan'
  console.log('set',monitor.name);

  console.log('has','name' in monitor);
  console.log('has', 'time' in monitor);
  
  console.log('ownKeys',Object.keys(monitor));
  
}

{
  let obj = {
    time: '2018-12-03',
    name: 'net',
    _r: 123
  }
  console.log('Reflect get',Reflect.get(obj,'time'));
  
}

{
  function validator(target, validator) {
    return new Proxy(target, {
      _validator:validator,
      set(target,key,value,proxy) {
        if(target.hasOwnProperty(key)) {
          let val = this._validator[key]
          if(!!val(value)) {
            return Reflect.set(target,key,value,proxy)
          } else {
            throw Error(`不能设置${key}到${value}`)
          }

        } else {
          throw Error(`${key} 不存在`)
        }
      }
    })
  }
  
  const personaValidators = {
    name(val) {
      return typeof val === 'string'
    },
    age(val) {
      return typeof val === 'number' && val > 18
    }
  }

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      return validator(this,personaValidators)
    }
  }

  const person = new Person('lilei',30)
  console.log(person);
  
  
}
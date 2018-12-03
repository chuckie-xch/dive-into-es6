{
  class Parent {
    constructor(name='zhangsanfeng') {
      this.name = name
    }
  }

  let v_parent = new Parent('v')
  console.log(v_parent);
}

{
  class Parent {
    constructor(name='zhangsanfeng') {
      this.name = name
    }
  }

  class Child extends Parent {
    constructor(name='child') {
      super(name)
    }

    get longName() {
      return 'ln' + this.name;
    }

    set longName(value) {
      this.name = value
    }
  }

  console.log('继承', new Child('张无忌'));
  let child = new Child()
  console.log(child.longName);
  child.longName = 'hello'
  console.log(child.name);
  
  
}
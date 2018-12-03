{
  // let ajax = function(callback) {
  //   setTimeout(() => {
  //     console.log('发送请求');
      
  //     callback && callback.call()
  //   }, 1000);
  // }

  // ajax(() => {
  //   console.log('timeout1');
    
  // })
}

{
  // let ajax = function() {
  //   console.log('执行2');
  //   return new Promise((resolve,reject) => {
  //     setTimeout(() => {
  //       resolve()
  //     }, 1000);
  //   })
  // }

  // ajax().then(function() {
  //   console.log('promise','timeout2');
  // })
}

{
  // let ajax = function() {
  //   console.log('执行3');
  //   return new Promise((resolve,reject) => {
  //     setTimeout(() => {
  //       resolve()
  //     }, 1000);
  //   })
  // }
  // ajax().then(function() {
  //   return new Promise((resolve,reject) => {
  //     setTimeout(() => {
  //       resolve()
  //     }, 2000);
  //   })
  // }).then(()=> {
  //   console.log('timeout3');
    
  // })
}

{
  let ajax = (num) => {
    console.log('执行4');
    return new Promise((resolve,reject) => {
      if(num>5) {
        resolve()
      } else {
        throw new Error('error')
      }
    })
  }

  ajax(6).then(()=>{
    console.log('log',6);
    
  }).catch((error)=> {
      console.log('catch',error);
      
  })
}

{
  // 所有图片加载完成后再添加到页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img')
      img.src = src
      img.onload = function() {
        resolve(img)
      }
      img.onerror = function() {
        reject(img)
      }
    })
  }

  function showImgs(imgs) {
    imgs.forEach(function(img) {
      document.body.appendChild(img)
    })
  }

  function showImgs(img) {
    let p = document.createElement('p')
    p.appendChild(img)
    document.body.appendChild(p)
  }

  // Promise.all([
  //   loadImg('https://i.loli.net/2018/12/03/5c054e2d32c23.jpeg'),
  //   loadImg('https://i.loli.net/2018/12/03/5c054e2d506b3.jpg'),
  //   loadImg('https://i.loli.net/2018/12/03/5c054e30445aa.jpg'),
  // ]).then(showImgs)

  Promise.race([
    loadImg('https://i.loli.net/2018/12/03/5c054e2d32c23.jpeg'),
    loadImg('https://i.loli.net/2018/12/03/5c054e2d506b3.jpg'),
    loadImg('https://i.loli.net/2018/12/03/5c054e30445aa.jpg'),
  ]).then(showImgs)


  
}
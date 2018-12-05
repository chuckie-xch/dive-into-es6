import $ from 'jquery'

class Interface {

  /**
   * 获取遗漏数据
   * @param {*} issue 当前期号
   */
  getOmit(issue) {
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/omit',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: res => {
          self.setOmit(res.data)
          resolve.call(self,res)
        },
        error: error => {
          reject.call(error)
        }
      })
    })
  }

  /**
   * 获取开奖号码
   * @param {*} issue 
   */
  getOpenCode(issue) {
    let self = this;
    return new Promise((resolve,reject) => {
      $.ajax({
        url: '/get/openCode',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: (res) => {
          self.setOpenCode(res.data)
          resolve.call(self,res)
        },
        error: error => {
          reject.call(error)
        }
      })
    })
  }

  /**
   * 获取当前状态
   * @param {*} issue 
   */
  getState(issue) {
    let self = this;
    return new Promise((resolve,reject) => {
      $.ajax({
        url: '/get/state',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: (res) => {
          resolve.call(self,res)
        },
        error: error => {
          reject.call(error)
        }
      })
    })
  }
}

export default Interface
const network = function(url, data, fun) {
  // let ip='http://192.168.0.110:3000/'
  let ip='http://192.168.254.104:3000/'
  if (data) {
    let method = 'post'
    fetch(ip+url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With':'XMLHttpRequest'
      },
      body: JSON.stringify(data),
    }).then((response) => {
      return response.json(response);
    }).then(res => {
      fun(res)
    }).catch(error => {
      console.log("POSTerror")
    })
  } else {
    fetch(ip+url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }).then(function(response) {
      return response.json();
    }).then(res => {
      fun(res)
    }).catch(error => {
      console.log("GETerror")
    })
  }
}
export {
  network
}

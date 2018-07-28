const network = function(url, data, fun) {
  if (data) {
    let method = 'post'
    fetch(url, {
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
    fetch(url, {
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

import axios from 'axios'
const network = function(url, data, fun) {
  let ip='http://192.168.0.106/web_api_php/public'
  if(data){
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.headers.post['X-Requested-With']='XMLHttpRequest';
    axios.post(ip+url,data,fun).then(res=>{
         fun(res.data)
    }).catch(err=>{
         fun(err)
         console.log('posterror')
    });
  }else{
    axios.get(ip+url,null,fun).then(res=>{
         fun(res.data)
         // console.log('getxxxxxxxx')
    }).catch(err=>{
         fun(err)
         console.log('geterror')
    });
  }
}
export {
  network
}

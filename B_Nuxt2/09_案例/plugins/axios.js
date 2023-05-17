export default ({ $axios, store }) => {
  $axios.onRequest(config => {
    console.log('config - request: ', config);
    
    config.headers['Authorization'] = store.state.token;
  });

  $axios.onRequest(error => {
    console.log('error - request: ', error);
  });

  $axios.onResponse(response => {
    console.log('response: ', response);
    return response.data
  })
}
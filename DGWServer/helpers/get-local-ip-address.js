// get local Ip address
const ifaces = require('os').networkInterfaces();


const getLocalIpAddress = ()=>{
  let address;

  Object.keys(ifaces).forEach(dev => {
    ifaces[dev].filter(details => {
      if (details.family === 'IPv4' && details.internal === false) {
        address = details.address;
      }
    });
  });

  return address
}

module.exports = getLocalIpAddress
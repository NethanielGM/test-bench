const fs = require('fs');
const panya_views = require('./panya_views');
const returngo_site = require('./returngo_site');
const res = []
for (const data of panya_views) {
  if (data.markerId > 0) {
    res.push(data)
  }
}
fs.writeFileSync(`${Date.now()}.json`, JSON.stringify(res));

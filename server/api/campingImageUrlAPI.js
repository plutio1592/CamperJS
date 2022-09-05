const Sequelize = require('sequelize');
const {campingImageURL} = require('../models')
const numOfRowsURL = 10;
const ServiceKey2 = 'tjd3J%2FCRFrwtqiIbdGdanWxcjxxoYDqL5zSP76T1Mk3X61F000rbIH6I6DoAUDrdC%2FFpJCuZqFEpuGVYn%2FRn3w%3D%3D';
const contentId2 = 10;

const request2 = require('request');
const options2 = {
  'method': 'GET',
  'url': `http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/imageList?ServiceKey=${ServiceKey2}&numOfRows=${numOfRowsURL}&MobileOS=ETC&MobileApp=AppTest&contentId=${contentId2}&_type=json`,
  'headers': {
  }
};

request2(options2, function (error, response, body) {
  if (error) throw new Error(error);
  //   console.log(response.body);
  let info = JSON.parse(body);
  
  // console.log(info.response.body.items.item)

  const imageURL = async () => {
  for (const i in info.response.body.items.item) {
    await campingImageURL.create({
      contentId: info.response.body.items.item[i].contentId,
      imageUrl: info.response.body.items.item[i].imageUrl
      // info['response']['body']['items']['item'][i]['createdtime']
      // info['response']['body']['items']['item'][i]['modifiedtime']
      // info['response']['body']['items']['item'][i]['serialnum']
    }
    )
  }
}
imageURL()
.then(() => console.log('✅ Create Camping Table Data Save success!'))
.catch(err => console.log(err))
}
)
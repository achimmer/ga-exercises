var str = '{"data":{"type":"gif","id":"uWHCeQ5Gs3hFC","url":"http:\/\/giphy.com\/gifs\/arrow-apple-uWHCeQ5Gs3hFC","image_original_url":"http:\/\/media0.giphy.com\/media\/uWHCeQ5Gs3hFC\/giphy.gif","image_url":"http:\/\/media0.giphy.com\/media\/uWHCeQ5Gs3hFC\/giphy.gif","image_mp4_url":"http:\/\/media0.giphy.com\/media\/uWHCeQ5Gs3hFC\/giphy.mp4","image_frames":"88","image_width":"320","image_height":"298","fixed_height_downsampled_url":"http:\/\/media0.giphy.com\/media\/uWHCeQ5Gs3hFC\/200_d.gif","fixed_height_downsampled_width":"215","fixed_height_downsampled_height":"200","fixed_width_downsampled_url":"http:\/\/media0.giphy.com\/media\/uWHCeQ5Gs3hFC\/200w_d.gif","fixed_width_downsampled_width":"200","fixed_width_downsampled_height":"186","fixed_height_small_url":"http:\/\/media0.giphy.com\/media\/uWHCeQ5Gs3hFC\/100.gif","fixed_height_small_still_url":"http:\/\/media0.giphy.com\/media\/uWHCeQ5Gs3hFC\/100_s.gif","fixed_height_small_width":"107","fixed_height_small_height":"100","fixed_width_small_url":"http:\/\/media0.giphy.com\/media\/uWHCeQ5Gs3hFC\/100w.gif","fixed_width_small_still_url":"http:\/\/media0.giphy.com\/media\/uWHCeQ5Gs3hFC\/100w_s.gif","fixed_width_small_width":"100","fixed_width_small_height":"93","username":"","caption":""},"meta":{"status":200,"msg":"OK"}}'
console.log(str);
var giphyImg = JSON.parse(str);
console.log(giphyImg);
console.log('The type is: ' + giphyImg.data.type);
console.log('The ImageURL is: ' + giphyImg.data.image_url);
console.log('The ImageURL is: ' + giphyImg.data.image_url);

var myGiphy = {
  type: giphyImg.data.type,
  image_url: giphyImg.data.image_url
};
console.log(myGiphy);
var myGiphyJSONString = JSON.stringify(myGiphy);
console.log(myGiphyJSONString);

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.index = function(req, res){
  res.render('index', { title: 'Mi9 coding challenge' });
};

module.exports.filter = function(req, res){

  var payloadResponse = {"response": []};
  var payloads = req.body.payload;

  if (!(req.is('json') === 'json')){
    sendJSONresponse(res, 400, {
      "error": "Could not decode request: JSON parsing failed"
    });
  }
  else {
    for (var i = 0; i < payloads.length; i++) {
      if (payloads[i].drm = true && payloads[i].episodeCount > 0) {
        payloadResponse.response.push({
          "image": payloads[i].image.showImage,
          "slug": payloads[i].slug,
          "title": payloads[i].title
        });
      }
    }
    sendJSONresponse(res, 200, payloadResponse);
  }
};

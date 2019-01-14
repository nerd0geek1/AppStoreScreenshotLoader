import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function(context) {
  // default is 'Sketch Mirror' appleID
  const appleID = sketch.UI.getStringFromUser('Input iOS app ID which you want to load screenshot', 
                                              '677296955');
  if (appleID == 'null') {
    return;
  }

  const url = `https://itunes.apple.com/lookup?id=${appleID}&entity=software`;
  fetch(url,{ method: 'GET' }).then(response => response.json())
                              .then(json => {
                                const appDetailJson = json['results'][0];
                              })
                              .catch(error => {
                                sketch.UI.alert('Error😵', 'Failed to load iOS app screenshots.\nPlease confirm appleID what you inputted, network and so on.');
                              });
}

function titleFromJSON(json) {
  return json['trackName'];
}

function screenshotsURLFromJSON(json) {
  return json['screenshotUrls'];
}

function screenshotsURLForiPadFromJSON(json) {
  return json['ipadScreenshotUrls'];
}

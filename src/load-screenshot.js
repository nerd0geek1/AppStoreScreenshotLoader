import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  // default is 'Sketch Mirror' appleID
  const appleID = sketch.UI.getStringFromUser('Input iOS app ID which you want to load screenshot', 
                                              '677296955');
}

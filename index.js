var car = new Object()
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key] : value})
}

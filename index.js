var car = {make : "nissan", model : "sentra", color : "silver"}
function updateObjectWithKeyAndValue(object, key, value){
  Object.assign(car, {key : value})
  return car
}

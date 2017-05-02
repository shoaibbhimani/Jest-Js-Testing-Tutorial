var addItemToList = function(list,newItem){
 return list.concat([newItem]);
}

var removeItemFromList = function(list,index){
  return list.filter(function(listItem,i){
  	return i !== index
  })
}

var updateItemFromList = function(list,index,newItem){
  // Clone Array 
  var newList = list.slice();
  //new Value add 
  newList[index] = newItem
  //new array return 
  return newList;
  
}

var addNewPropertyToObject = function(person,newItem){
 // person['name'] = newItem;
 // return Object.assign({}, person, { name:newItem })
 return {...person, name:newItem}
}

module.exports = {
	addItemToList,
	removeItemFromList,
	updateItemFromList,
	addNewPropertyToObject
}
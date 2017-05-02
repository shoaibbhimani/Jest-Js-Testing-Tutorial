import util from './util.js';
// import example from './example.js';

import deepFreeze from "deep-freeze"

describe("Array CRUD Test Cases",() => {
	test("Add Item to a List", () => {
		var jslibs = ['React', 'Mobx'];
		deepFreeze(jslibs);
		var result = util.addItemToList(jslibs, 'Redux');
		// var expected = ['React', 'Mobx', 'Jest']
		expect(result).toMatchSnapshot();
	})

	test("Remove Item from a List", () => {
		var jslibs = ['React', 'Mobx'];
		deepFreeze(jslibs);
		var result = util.removeItemFromList(jslibs, 1);
		// var expected = ['React']
		expect(result).toMatchSnapshot()
	})

	test("Update Item from a List", () => {
		var jslibs = ['React', 'Mobx'];
		deepFreeze(jslibs);
		var result = util.updateItemFromList(jslibs, 1, 'Redux');
		// var expected = ['React','Redux']
		expect(result).toMatchSnapshot()
	})
})


describe("Objects Test Cases", () => {
	test("Add property to object", () => {
		var person = { age:25  }
		deepFreeze(person);
		var result = util.addNewPropertyToObject(person, 'Shoaib');
		var expected = { name:"Shoaib", age:25 }
		expect(result).toEqual(expected)
	})
})
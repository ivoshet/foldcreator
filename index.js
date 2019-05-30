"use strict"
//to need connect mkdir package npm i mkdirp --save
var mkdirp = require('mkdirp');
var list = require('./list_folders');


//detect current name
var current_folder = __dirname;

const create_folder = (name_folder) => {
    var full_name = current_folder + name_folder;
    mkdirp(full_name, (err) => {
	if(err) console.log(err);
	else console.log('pow')
    })
}

for(var i = 0; i < list.folder_list.length; i++) {
    create_folder(list.folder_list[i]);
}


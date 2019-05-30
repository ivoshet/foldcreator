"use strict"
//to need connect mkdir package npm i mkdirp --save
var mkdirp = require('mkdirp');

//






//detect current name
var current_folder = __dirname;

const create_folder_one = (name_folder) => {
    var full_name = String(name_folder) + '/ops'
    mkdirp(full_name, (err) => {
	if(err) console.log(err);
	else console.log('pow')
    })
}

const output_name = (name) => {
    console.log(name);
}

/* output_name(current_folder);*/
create_folder_one(__dirname);


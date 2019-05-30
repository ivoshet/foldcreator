"use strict"
//to need connect mkdir package npm i mkdirp --save
var mkdirp = require('mkdirp');
var list = require('./list_folders');


//detect current name
var current_folder = __dirname;

//the counter for understandig when created project structure
var counter = 0;

const create_folder = (name_folder) => {
    var full_name = current_folder + name_folder;
    
    /* because mkdirp callback work after end loops 
       to need output status before mkdirp */
    
    console.log(`create : ${name_folder}`);

    //call mkdirp
    mkdirp(full_name, (err) => {
	if(err) console.log(err);
    })
}

//the main loop
const create_folder_structure = () => {
    for(var i = 0; i < list.folder_list.length; i ++) {
	create_folder(list.folder_list[i]);
	counter ++;
    };
}

//output that structure created
const output_success = () => {
    if(counter == list.folder_list.length){
	console.log('\n' + 'project structure created success'); 
    }
}

create_folder_structure();
output_success();


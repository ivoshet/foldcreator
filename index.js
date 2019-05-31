#!/usr/bin/env node

//to need connect mkdir package npm i mkdirp --save
var mkdirp = require('mkdirp');
var list = require('./list_folders');
var tmp_set = require('./templates_setting');
//add fs for work with files
//npm i fs-extra --save
var fs = require('fs-extra');


//detect folder with exist process
var current_folder = process.cwd();

//detect npm folder
var npm_dir = __dirname;
//templates directory setting
const templates_path = '/templates/';

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

//move templates to project core
const move_files = () => {
    for(var i = 0; i < tmp_set.templates_docs.length; i ++) {
	fs.copy(npm_dir + templates_path + tmp_set.templates_docs[i], current_folder + '/' + tmp_set.templates_docs[i], err => {
	    if(err) console.error(err)
	})
	console.log('moved : ' + tmp_set.templates_docs[i]);
	/* console.log(npm_dir + templates_path + templates_docs[i]);
	   console.log(current_folder + templates_docs[i]);*/
    }
}


create_folder_structure();
output_success();
move_files();



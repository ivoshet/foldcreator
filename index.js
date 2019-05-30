"use strict"
//to need connect mkdir package npm i mkdirp --save
var mkdirp = require('mkdirp');

//the pathes to folders
var public_folder = '/public';
var controllers_folder = '/controllers';
var helpers_folder = '/helpers';
var server_folder = '/server';
var views_folder = '/views';

//nested folder
var public_css = '/public/css';
var public_img = '/public/img';
var public_js = '/public/js';
var public_upload = '/public/upload';
var public_upload_temp = '/public/upload/temp';
var views_layouts = '/views/layouts';
var views_partials = '/views/partials';

//detect current name
var current_folder = __dirname;

const create_folder = (name_folder) => {
    var full_name = current_folder + name_folder;
    mkdirp(full_name, (err) => {
	if(err) console.log(err);
	else console.log('pow')
    })
}

/* const output_name = (name) => {
 *     console.log(name);
 * }*/

//create folders
create_folder(public_folder);
create_folder(controllers_folder);
create_folder(helpers_folder);
create_folder(server_folder);
create_folder(views_folder);

//create nested folders
create_folder(public_css);
create_folder(public_img);
create_folder(public_js);
create_folder(public_upload);
create_folder(public_upload_temp);
create_folder(views_layouts);
create_folder(views_partials);


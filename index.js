var fs = require("fs");

var Enamer = {
	getFiles: function(dirname){
		var files = fs.readdirSync(dirname, 'utf-8');
		return files;
	},
	rename: function(fileName, e, prefix){
		if(fs.existsSync(fileName)){
			var re = new RegExp(e);
			if(re.test(fileName)){
				if(prefix){
					fs.renameSync(fileName, e+"-"+fileName);
					console.log(fileName+" changed to "+e+"-"+fileName);
				}else{
				fs.renameSync(fileName, fileName);
				console.log("No change!");
				}
			
			}
		}else{
			console.log("File does not exists");
		}
	}
}

Enamer.renameAll = function(array, e){
	array.forEach(function(item){
		Enamer.rename(item, e, true);
	});
}

module.exports = Enamer;
let fs = require("fs");
let path = require("path");
let sass = require('node-sass');
//scss文件转换器，转换成css文件
module.exports = function (scss_filename, output_path) {
    sass.render({
        //file: '../../node_modules/element-ui/packages/theme-chalk/src/alert.scss',
        file: scss_filename

    }, function (err, result) {
        if (err) console.log('scss转换css失败', err);

        let filename = scss_filename.substring(scss_filename.lastIndexOf(path.sep) + 1, scss_filename.lastIndexOf('.'));
        let targetFile = path.resolve(output_path+ filename + '.css');

        if(!fs.existsSync(path.resolve(output_path))){
                fs.mkdirSync(path.resolve(output_path));
        }
        fs.writeFile(targetFile, result.css.toString(), function (err) {
            if (err) console.log('生成'+targetFile + '失败！');
            else console.log('生成'+targetFile + '成功！');
        });
    });
};

import gulp from "gulp";
import { deleteSync} from "del";

import include from "gulp-file-include";
import formatHTML from "gulp-format-html";

import less from "gulp-less";
import gulpPlumber from "gulp-plumber";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import sortMediaQueries from "postcss-sort-media-queries";
import minify from "gulp-csso";
import rename from "gulp-rename";
import terser from "gulp-terser";

import imagemin from "gulp-imagemin";
import imagemin_gifsicle from "imagemin-gifsicle";
import imagemin_mozjped from "imagemin-mozjpeg";
import imagemin_optipng from "imagemin-optipng";

import svgmin from "gulp-svgmin";
import svgstore from "ulp-svgstore";

import server from "browser-sync";

const resources = {
    html: "src/html/**/*.html",
    jsDev: "src/scripts/dev/**/*.js",
    jsVendor: "src/scripts/vendor/**/*.js",
    images: "src/assets/images/**/*.{png,jpg,jpeg,webp,gif,svg}",
    less: "src/style/**/*/less",
    svgSprite: "src/assets/svg-sprite/*.svg",
    static: [
        "src/assets/favicons/**/*.*",
        "src/assets/fonts/**/*.{woff,woff2}",
        "src/assets/icons/**/*.*",
        //"src/assets/video/**/*.{mp4,webm}",
        //"src/assets/audio/**/*.{mp3,ogg,wav,aac}",
        //"src/json/**/*.json",
        //"src/php/**/*.php"
    ]
};
import jQuery from "jquery";
import config from "./config.js";
import { escapemarkedunescape } from "./escapemarkedunescape";
import fetchajaxgettext from "./fetchajaxgettext.js";
import { guid } from "./guid";
import hljs from "./highlight.min.js";
import { ApphomeVm } from "./mark-down-reader.js";
import { 内容调整左边偏移 } from "./render.js";
import { contenthtml } from "./contenthtml.js";
import { getbaseurl, getabsolutesummary, getabsoluteindex } from "./getbaseurl";
import { isrelativepath } from "./isrelativepath";
const cachemarkdown = new Map();
("use strict");
export default (() => {
    "use strict";
    return (function ($) {
        var loading_interval;
        var loading_id = $("#loading");
        var error_id = $("#error");
        var ditto = {
            run: initialize,
            ...config,
        };
        async function initialize() {
            //Deprecated as of 10.6.0. initHighlightingOnLoad() is deprecated.  Use highlightAll() instead.

            window.addEventListener("hashchange", routerpageget);
            await init_sidebar_section();
            await routerpageget();
            hljs.highlightAll();
        }
        async function init_sidebar_section() {
            // const baseurl = getbaseurl();
            // const summaryfile = new URL(config.summary, baseurl).href;
            const summaryfile = getabsolutesummary();
            console.log(summaryfile);
            var path = summaryfile;
path=urlclearhash(path);
            try {
                const data = await fetchajaxgettext(path);
                ApphomeVm.muluhtml = escapemarkedunescape(data);
                await new Promise((r) => {
                    requestAnimationFrame(() => {
                        $(ApphomeVm.$refs.我的侧边栏).css(
                            "top",
                            $("#my导航栏").height()
                        );
                        $(
                            ApphomeVm.$refs.我的侧边栏.querySelectorAll("ul")
                        ).addClass("navbar-nav");
                        $(
                            ApphomeVm.$refs.我的侧边栏.querySelectorAll("a")
                        ).addClass(`mui-btn mui-btn-primary mui-btn-outlined`);
                        内容调整左边偏移().then(() => r());
                    });
                });
                await new Promise((r, j) => {
                    requestAnimationFrame(() => {
                        $("#my主体").css(
                            "padding-top",
                            $("#my导航栏").height()
                        );
                        var links = Array.from(
                            ApphomeVm.$refs.我的侧边栏.querySelectorAll("a")
                        );
                        var urls = links.map((a) => {
                            var ahref = a.getAttribute("href");
                            var b = new URL(location.href);

                            if (ahref.endsWith(".md")) {
                                var realmdpath = isrelativepath(ahref)
                                    ? new URL(ahref, summaryfile)
                                    : ahref;
                                b.hash = "#" + realmdpath;

                                a.href = b.href;
                                console.log(a.href);
                            }
                            return b;
                        });
                        urls.map((e) => e.hash)
                            .filter((e_1) => e_1.startsWith("#"))
                            .map((e_2) => e_2.slice(1))
                            .forEach((e_3) => {
                                console.log(e_3);
                                //不管相对路径还是绝对路径都行
var path=new URL(
                                        e_3.endsWith(".md") ? e_3 : e_3 + ".md",
                                        summaryfile
                                    ).toString();
path=urlclearhash(path);
                                fetch(path
                                    ,
                                    {
                                        credentials: "omit",
                                        
                                        method: "GET",
                                        mode: "cors",
                                    }
                                )
                                    .then((res) => {
                                        console.log(res);
                                        r();
                                    })
                                    .catch((e) => {
                                        console.error(e);
                                        j(e);
                                    });
                            });
                        ApphomeVm.showerror = false;
                    });
                });
                var currentcontenthtml = ApphomeVm.muluhtml;
                if (!cachemarkdown.get(path)) {
                    console.log([path, currentcontenthtml]);
                    cachemarkdown.set(path, currentcontenthtml);
                }
            } catch (e_4) {
                console.error(e_4);
                stop_loading();

                console.error("Opps! can't find the sidebar file to display!");
                console.warn("load failed " + path);
                ApphomeVm.errorcontent = "加载失败 " + path;
                ApphomeVm.showerror = true;
                throw e_4;
            }
        }
        function show_error(err_msg) {
            error_id.html(err_msg);
            error_id.show();
        }
        function hide_errors() {
            error_id.hide();
        }
        function show_loading() {
            loading_id.show();
            loading_interval = setInterval(function () {
                loading_id.fadeIn(1000).fadeOut(1000);
            }, 2000);
        }
        function stop_loading() {
            clearInterval(loading_interval);
            loading_id.hide();
            $("#loadingparent").hide();
        }

        async function routerpageget() {
            const baseurl = getbaseurl();

            window.scrollTo(0, 0);
            //ie浏览器中可能为"#"
            var path =
                location.hash === "" || location.hash === "#"
                    ? getabsoluteindex()
                    : location.hash.replace("#", "");
            show_loading();

            path = path.endsWith(".md") ? path : path + ".md";
            if (isrelativepath(path)) {
                path = new URL(path, baseurl).toString();
            }


path=urlclearhash(path)

            console.log(path);
            if (path !== ApphomeVm.urltext) {
                const marktext = cachemarkdown.get(path);
                console.log(cachemarkdown);
                if (marktext) {
                    ApphomeVm.urltext = path;
                    stop_loading();
                    contenthtml.set(marktext);
                    return;
                } else {
                    try {
                        const data = await fetchajaxgettext(path);
                        ApphomeVm.urltext = path;
                        $("#my主体").css(
                            "padding-top",
                            $("#my导航栏").height()
                        );
                        await compile_into_dom(data, path);
                        return await new Promise((r) => {
                            requestAnimationFrame(async () => {
                                Array.from(jQuery("code.hljs")).forEach((e) => {
                                    var codecontenguid = "clip" + guid();
                                    jQuery(e).attr("id", codecontenguid)
                                        .after(`<button class="btn btn-outline-primary clipbutton" data-clipboard-target="#${codecontenguid}">复制
                                        </button>`);
                                });
                                await 内容调整左边偏移();
                                requestAnimationFrame(() => {
                                    stop_loading();
                                });

                                //处理md文件相互引用的问题
                                var links = Array.from(
                                    ApphomeVm.$refs.markdown内容.querySelectorAll(
                                        "a"
                                    )
                                );
                                links.forEach((a) => {
                                    var ahref = a.getAttribute("href");
                                    var b = new URL(location.href);
                                    if (ahref.endsWith(".md")) {
                                        var realmdpath = isrelativepath(ahref)
                                            ? new URL(ahref, ApphomeVm.urltext)
                                            : ahref;
                                        b.hash = "#" + realmdpath;

                                        a.href = b.href;
                                        console.log(a.href);
                                        //变成按钮的形状
                                        $(a).addClass(
                                            `mui-btn mui-btn-primary mui-btn-outlined`
                                        );
                                    }
                                });
                                ApphomeVm.urltext = path;

                                var currentcontenthtml = contenthtml.get();
                                //切换页面太快导致问题缓存出错,原因在于vue把他缓存了
                                if (!cachemarkdown.get(path)) {
                                    console.log([path, currentcontenthtml]);
                                    cachemarkdown.set(path, currentcontenthtml);
                                }
                                r();
                            });
                        });
                    } catch (e_1) {
                        console.error(e_1);
                        ApphomeVm.urltext = "加载失败 " + path;

                        console.error(
                            "Opps! ... File not found!\n5秒后返回主页"
                        );
                        show_error("Opps! ... File not found!\n5秒后返回主页");
                        stop_loading();

                        console.warn("load failed " + path);
                        requestAnimationFrame(() => {
                            location.hash = "";
                        });
                        throw e_1;
                    }
                }
            }
        }

        function compile_into_dom(data, mdurl) {
            console.log(mdurl);
            return new Promise((r) => {
                hide_errors();

                data = escapemarkedunescape(data);

                //修改img的路径为相对md文件的路径
                const tmpdoc =
                    document.implementation.createHTMLDocument("title");
                //参数是必选项 ie
                tmpdoc.body.innerHTML = data;
                //判断img是否是相对路径
                Array.from(tmpdoc.body.querySelectorAll("img")).forEach((e) => {
                    // console.log(e);
                    var imgsrc = e.getAttribute("src");
                    console.log(imgsrc, e.src);
                    if (
                        // imgsrc !== e.src &&
                        //firefox浏览器不兼容
                        !imgsrc.startsWith("http://") &&
                        !imgsrc.startsWith("https://")
                    ) {
                        console.log("相对路径图片", e);
                        var imgrealurl = String(new URL(imgsrc, mdurl));
                        console.log(imgrealurl);
                        e.src = imgrealurl;
                    }
                });
                contenthtml.set(tmpdoc.body.innerHTML);
                requestAnimationFrame(() => {
                    stop_loading();

                    Array.from($("pre code")).forEach(function (block) {
                        hljs.highlightElement(block);
                        /* Deprecated as of 10.7.0. highlightBlock will be removed entirely in v12.0
 Deprecated as of 10.7.0. Please use highlightElement now. */
                    });

                    r();
                });
            });
        }

        return ditto;
    })(jQuery);
})();
function urlclearhash(path){
var tmpurl=new URL(path)
tmpurl.hash=""
path=tmpurl.href

return path

}

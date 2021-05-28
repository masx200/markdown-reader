import { ApphomeVm } from "./mark-down-reader.js";
import { menulist } from "./menulist.js";
function findindexexmenulist() {
    console.log(menulist);
    var currentpageurl = ApphomeVm.urltext;
    console.log(currentpageurl);
    var currentpageindex = menulist.findIndex((a) => a === currentpageurl);
    console.log(currentpageindex);
    return currentpageindex;
}
export function toprevpage() {
    var currentpageindex = findindexexmenulist();

    if (!(currentpageindex >= 0 && currentpageindex <= menulist.length - 1)) {
        console.error("没有在菜单列表中找到当前页面");
        return;
    }
    var pageindextogo = currentpageindex - 1;
    if (!(pageindextogo >= 0 && pageindextogo <= menulist.length - 1)) {
        console.error("已经到达菜单列表的起始处或结尾处");
        return;
    }
    location.hash = menulist[pageindextogo];
}
export function tonextpage() {
    var currentpageindex = findindexexmenulist();
    if (!(currentpageindex >= 0 && currentpageindex <= menulist.length - 1)) {
        console.error("没有在菜单列表中找到当前页面");
        return;
    }
    var pageindextogo = currentpageindex + 1;
    if (!(pageindextogo >= 0 && pageindextogo <= menulist.length - 1)) {
        console.error("已经到达菜单列表的起始处或结尾处");
        return;
    }
    location.hash = menulist[pageindextogo];
}

import $ from "jquery";
import { initloadingid } from "./mark-down-reader.js";
import { Adjustthedistance } from "./Adjustthedistance.js";
import { 内容调整左边偏移 } from "./render.js";
import { 挂载初始 } from "./挂载初始.js";
export async function mymounted() {
    await Adjustthedistance();
    $("#mybody-143af32b9b8f396b798aeb8d4ee68ed9ca3").css(
        "padding-top",
        Number(
            $("#mynavigationbar-dceff036a563faf668b4d4a50fd702d1d95").height()
        )
    );
    await 内容调整左边偏移();
    await 挂载初始();
    var initloadele = document.getElementById(initloadingid);
    initloadele && (initloadele.style.display = "none");
    await Adjustthedistance();

    //初始化完成就隐藏侧边栏，屏幕较小的宽度生效
}
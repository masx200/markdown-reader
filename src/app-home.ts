//@ts-ignore
import { defineComponent } from "@vue/composition-api";
//@ts-ignore
import { appvm } from "./appvm.ts";
//@ts-ignore
import { computed, onMounted, ref } from "./compositionvue.ts";
//@ts-ignore
import config from "./config.ts";
//@ts-ignore
import { debounce } from "./debounce.ts";
import Disableablelinks from "./Disableable-links.vue";
//@ts-ignore
import { disabledalinkhref } from "./disabledalinkhref.ts";
//@ts-ignore
import { eventtarget } from "./eventtarget.ts";
//@ts-ignore
import { getabsoluteindex } from "./getbaseurl.ts";
import NavHomebutton from "./NavHomebutton.vue";
//@ts-ignore
import { scrolltobottom } from "./scrolltobottom.ts";
//@ts-ignore
import { scrolltotop } from "./scrolltotop.ts";
import Toggledisplayofsidebar from "./Toggledisplayofsidebar.vue";
import Sidebarleft from "./Sidebarleft.vue";
export default defineComponent({
    components: {
        Toggledisplayofsidebar,
        NavHomebutton,
        Disableablelinks,
        Sidebarleft,
    },
    setup() {
        const markdowncontent_2e4c728cac441a0c48939881c2c714361a0 = ref();

        const mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3 = ref();
        const mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95 = ref();
        const contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1 = ref();
        const Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644 = ref();
        const widescreen = ref(true);
        const narrowscreen = computed(() => {
            return !widescreen.value;
        });
        onMounted(() => {
            widescreen.value = document.body.clientWidth > 550;
            window.addEventListener(
                "resize",

                debounce(() => {
                    requestAnimationFrame(() => {
                        widescreen.value = document.body.clientWidth > 550;
                    });
                })
            );
        });
        const allret = {
            widescreen,
            narrowscreen,
            contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1,
            mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95,
            mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3,
            Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644,
            markdowncontent_2e4c728cac441a0c48939881c2c714361a0,
        };
        onMounted(() => {
            (async () => {
                //@ts-ignore
                var module = await import("./mymounted.ts");

                var mymounted = module.mymounted;
                mymounted();
            })();
        });

        return allret;
    },
    mounted() {
        console.log(this);

        this.indexhref = getindexhref();

        this.mytitle = getmytitle();
        appvm.value = this;
        eventtarget.dispatchEvent(new Event("mount"));
        this.$el.id = "app";
    },
    data: () => ({
        indexhref: getindexhref(),
        contenthtml: "",
        muluhtml: "",
        nextpagelink: disabledalinkhref,
        prevpagelink: disabledalinkhref,
        mytitle: getmytitle(),
        showerror: false,
        errorcontent: "",
        showsrc: false,
        urltext: "",
        xianshicebianlan: true,
        showload: true,
    }),
    methods: {
        togglecebian() {
            //@ts-ignore
            this.xianshicebianlan = !this.xianshicebianlan;
        },
        scrolltotop,
        scrolltobottom,
    },
});
function getindexhref() {
    return String(
        Object.assign(new URL(location.href), {
            hash: getabsoluteindex(),
        })
    );
}

function getmytitle() {
    return config.maintitle;
}

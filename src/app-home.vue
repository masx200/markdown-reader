<script src="./app-home.ts"></script>
<template>
    <div>
        <header>
            <div
                ref="mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95"
                id="mynavigationbar-dceff036a563faf668b4d4a50fd702d1d95"
                class="container-fluid fixed-top"
                style="padding-right: 0; padding-left: 0"
            >
                <nav
                    class="navbar navbar-expand-sm bg-light navbar-light"
                    style="padding-right: 0; padding-left: 0"
                >
                    <div
                        v-if="narrowscreen"
                        id="nav-6fc6d0bc9128ba5f98a1e493cb2adf11550"
                        style="
                            display: flex;
                            width: 100%;
                            justify-content: space-between;
                            flex-direction: row;
                            align-items: stretch;
                        "
                    >
                        <Toggledisplayofsidebar
                            :onclick="togglecebian"
                        ></Toggledisplayofsidebar>
                        <NavHomebutton
                            :href="indexhref"
                            :title="mytitle"
                        ></NavHomebutton>
                    </div>
                    <div
                        v-if="narrowscreen"
                        id="nav-7e7dd758bdb27a9c889a4eaa0fce55cf2d7"
                        style="
                            display: flex;
                            width: 100%;
                            justify-content: space-between;
                            flex-direction: row;
                            align-items: stretch;
                        "
                    >
                        <button
                            class="
                                mui-btn mui-btn-primary mui-btn-outlined
                                mybutton-8731e6c5bb5148e49e14cca7cdfa73e8
                            "
                            type="button"
                            v-on:click="scrolltotop"
                        >
                            顶部
                        </button>
                        <button
                            class="
                                mui-btn mui-btn-primary mui-btn-outlined
                                mybutton-8731e6c5bb5148e49e14cca7cdfa73e8
                            "
                            type="button"
                            v-on:click="scrolltobottom"
                        >
                            底部
                        </button>
                        <Disableablelinks :href="prevpagelink">
                            前页
                        </Disableablelinks>
                        <Disableablelinks :href="nextpagelink">
                            后页
                        </Disableablelinks>
                    </div>
                    <div
                        v-if="widescreen"
                        id="nav-3fa9878ebc0dbb05688f058e3bcafc57386"
                        style="
                            display: flex;
                            width: 100%;
                            justify-content: space-between;
                            flex-direction: row;
                            align-items: stretch;
                        "
                    >
                        <Toggledisplayofsidebar
                            :onclick="togglecebian"
                        ></Toggledisplayofsidebar>

                        <NavHomebutton
                            :href="indexhref"
                            :title="mytitle"
                        ></NavHomebutton>
                        <button
                            class="
                                mui-btn mui-btn-primary mui-btn-outlined
                                mybutton-8731e6c5bb5148e49e14cca7cdfa73e8
                            "
                            type="button"
                            v-on:click="scrolltotop"
                        >
                            顶部
                        </button>
                        <button
                            class="
                                mui-btn mui-btn-primary mui-btn-outlined
                                mybutton-8731e6c5bb5148e49e14cca7cdfa73e8
                            "
                            type="button"
                            v-on:click="scrolltobottom"
                        >
                            底部
                        </button>
                        <Disableablelinks :href="prevpagelink">
                            前页
                        </Disableablelinks>
                        <Disableablelinks :href="nextpagelink">
                            后页
                        </Disableablelinks>
                    </div>
                    <Sidebarleft
                        ref="Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644"
                        v-if="narrowscreen"
                        :html="muluhtml"
                        v-show="xianshicebianlan"
                    ></Sidebarleft>
                </nav>
            </div>
        </header>
        <section v-show="showload">
            <div id="loadingparent-b80f303d89182a8e58b02981c0822deb975">
                <div id="loading-36bec0d286ad9ab9ca8c1d923b0095c1c06">
                    <h1
                        style="
                            font-size: 50px;
                            background-color: white;
                            border-radius: 10px;
                            border: black 3px solid;
                            padding: 5px;
                        "
                    >
                        Loading...
                    </h1>
                </div>
            </div>
        </section>
        <div
            style="
                display: flex;
                width: 100%;
                flex-direction: row;
                align-items: flex-start;
                justify-content: space-between;
                align-content: stretch;
                flex-wrap: nowrap;
            "
            ref="mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3"
            id="mybody-143af32b9b8f396b798aeb8d4ee68ed9ca3"
        >
            <Sidebarleft
                ref="Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644"
                v-if="widescreen"
                :html="muluhtml"
                v-show="xianshicebianlan"
            ></Sidebarleft>

            <main style="max-width: fit-content; width: max-content">
                <div class="container">
                    <div>
                        <div
                            ref="contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1"
                            id="contentcontainer-9ce8d13b9be97b46e89aeea8f242169cfa1"
                            style="margin-left: auto"
                        >
                            <h5
                                class
                                id="markdownurlsrc-63228f01b0737ac6a8b1c08af92dec0eb11"
                                v-text="urltext"
                                v-show="showsrc"
                            ></h5>
                            <h5
                                class
                                id="markdownerror-4c6b19f7b26c2b519b8ff480769b5565d6b"
                                v-show="showerror"
                                v-text="errorcontent"
                            ></h5>
                            <article>
                                <div
                                    id="content-aa867a1d8c5dfbf2abbff8bc2af55a88a36"
                                    ref="markdowncontent_2e4c728cac441a0c48939881c2c714361a0"
                                    v-html="contenthtml"
                                ></div>
                            </article>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

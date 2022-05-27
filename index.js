(()=>{var h={name:"PasteBoard",props:{},data(){return{image:null,file:null}},methods:{onPaste(t){t.preventDefault();let s=t.clipboardData.items;for(let i=0;i<s.length;i++){let r=s[i];if(r.type.indexOf("image")!==-1&&r.kind==="file"){let n=r.getAsFile(),a=new File([n],`pasted_image_${new Date().getTime()}.png`,{type:"image/png"});this.image=URL.createObjectURL(n),this.file=a,this.$emit("paste",a);break}}}}},u=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{ref:"board",staticClass:"paste-board",attrs:{tabindex:"0"},on:{paste:t.onPaste}}),t._v(" "),t.image?i("img",{attrs:{src:t.image,alt:""}}):t._e()])},b=[];u._withStripped=!0;var v=function(t){!t||t("data-v-dddf4d48_0",{source:`
img[data-v-dddf4d48] {
    max-width: 100%;
    max-height: 15rem;
}
.paste-board[data-v-dddf4d48] {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}
.paste-board[data-v-dddf4d48]::before {
    content: 'Click here';
    font-size: 1.5rem;
    color: #999;
    border: 2px solid #999;
    text-align: center;
    display: block;
    padding: 2rem;
    width: 100%;
    min-height: 7rem;
    background-color: #eee;
}
.paste-board[data-v-dddf4d48]:focus::before {
    content: 'Press Cmd+V / Ctrl+V to paste';
    color: #111;
}
`,map:{version:3,sources:["src/components/PasteBoard.vue"],names:[],mappings:";AA0CA;IACA,eAAA;IACA,iBAAA;AACA;AAEA;IACA,aAAA;IACA,uBAAA;IACA,mBAAA;IACA,mBAAA;AACA;AAEA;IACA,qBAAA;IACA,iBAAA;IACA,WAAA;IACA,sBAAA;IACA,kBAAA;IACA,cAAA;IACA,aAAA;IACA,WAAA;IACA,gBAAA;IACA,sBAAA;AACA;AAEA;IACA,wCAAA;IACA,WAAA;AACA",file:"PasteBoard.vue",sourcesContent:[`<template>
    <div>
        <div @paste="onPaste" class="paste-board" ref="board" tabindex="0"></div>
        <img :src="image" v-if="image" alt="">
    </div>
</template>

<script>
    export default {
        name: 'PasteBoard',
        props: {
        },
        data() {
            return {
                image: null,
                file: null,
            }
        },
        methods: {
            onPaste(event) {
                event.preventDefault();

                // loop through all items in clipboard and find image file
                const items = event.clipboardData.items;
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    if (item.type.indexOf('image') !== -1 && item.kind === 'file') {
                        const file = item.getAsFile();
                        const renamedFile = new File([file], \`pasted_image_\${new Date().getTime()}.png\`, {type: 'image/png'});
                        this.image = URL.createObjectURL(file);
                        this.file = renamedFile;

                        this.$emit('paste', renamedFile);
                        break;
                    }
                }
            }
        }
    }
<\/script>

<style scoped>
    img {
        max-width: 100%;
        max-height: 15rem;
    }

    .paste-board {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
    }

    .paste-board::before {
        content: 'Click here';
        font-size: 1.5rem;
        color: #999;
        border: 2px solid #999;
        text-align: center;
        display: block;
        padding: 2rem;
        width: 100%;
        min-height: 7rem;
        background-color: #eee;
    }

    .paste-board:focus::before {
        content: 'Press Cmd+V / Ctrl+V to paste';
        color: #111;
    }
</style>`]},media:void 0})},C="data-v-dddf4d48",x=void 0,y=!1;function I(t,s,i,r,n,a,e,d,c,m){let o=(typeof i=="function"?i.options:i)||{};o.__file="src/components/PasteBoard.vue",o.render||(o.render=t.render,o.staticRenderFns=t.staticRenderFns,o._compiled=!0,n&&(o.functional=!0)),o._scopeId=r;{let p;if(s&&(p=e?function(l){s.call(this,m(l,this.$root.$options.shadowRoot))}:function(l){s.call(this,d(l))}),p!==void 0)if(o.functional){let l=o.render;o.render=function(_,A){return p.call(A),l(_,A)}}else{let l=o.beforeCreate;o.beforeCreate=l?[].concat(l,p):[p]}}return o}function f(){let t=f.styles||(f.styles={}),s=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,n){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let a=s?n.media||"default":r,e=t[a]||(t[a]={ids:[],parts:[],element:void 0});if(!e.ids.includes(r)){let d=n.source,c=e.ids.length;if(e.ids.push(r),s&&(e.element=e.element||document.querySelector("style[data-group="+a+"]")),!e.element){let m=document.head||document.getElementsByTagName("head")[0],o=e.element=document.createElement("style");o.type="text/css",n.media&&o.setAttribute("media",n.media),s&&(o.setAttribute("data-group",a),o.setAttribute("data-next-index","0")),m.appendChild(o)}if(s&&(c=parseInt(e.element.getAttribute("data-next-index")),e.element.setAttribute("data-next-index",c+1)),e.element.styleSheet)e.parts.push(d),e.element.styleSheet.cssText=e.parts.filter(Boolean).join(`
`);else{let m=document.createTextNode(d),o=e.element.childNodes;o[c]&&e.element.removeChild(o[c]),o.length?e.element.insertBefore(m,o[c]):e.element.appendChild(m)}}}}var B=I({render:u,staticRenderFns:b},v,h,C,y,x,!1,f,void 0,void 0),g=B;function w(t){return new Promise((s,i)=>{let r=new FileReader;r.onload=()=>{let n=new Image;n.onload=()=>{let a=document.createElement("canvas"),e=a.getContext("2d");a.width=n.width,a.height=n.height,e.fillStyle="#fff",e.fillRect(0,0,n.width,n.height),e.drawImage(n,0,0);let d=a.toDataURL("image/jpeg"),c=R(d);s(c)},n.src=r.result},r.readAsDataURL(t)})}function R(t){let s=";base64,",i=t.split(s),r=i[0].split(":")[1],n=window.atob(i[1]),a=n.length,e=new Uint8Array(a);for(let d=0;d<a;++d)e[d]=n.charCodeAt(d);return new Blob([e],{type:r})}panel.plugin("rasteiner/paste",{use:[function(t){let s=t.options.components["k-files-field"].options;t.component("k-files-field",{extends:s,render(i){let r=s.render.call(this,i);return i("div",{class:"paste-files-field"},[r,i("k-dialog",{ref:"pasteDialog",props:{submitButton:!1},scopedSlots:{default:n=>i(g,{ref:"pasteBoard",on:{paste:()=>{this.$refs.pasteDialog.submitButton="Upload"}}})},on:{submit:async()=>{let n=this.$refs.pasteBoard.file;if(n){this.$refs.pasteDialog.submitButton="Converting...";let a=await w(n),e=n.name.replace(/\.png$/,".jpg");if(a instanceof Blob){let d=new File([a],e,{type:"image/jpeg"});this.drop([d])}}this.$refs.pasteDialog.close()}}})])},computed:{options(){let i=s.computed.options.call(this);return i.options.push({icon:"template",text:"Paste",click:()=>{this.$refs.pasteDialog.open()}}),i}}})}]});})();

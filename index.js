(()=>{var _={name:"PasteBoard",props:{},data(){return{image:null,file:null}},methods:{onPaste(t){t.preventDefault();let i=t.clipboardData.items;for(let e=0;e<i.length;e++){let s=i[e];if(s.type.indexOf("image")!==-1&&s.kind==="file"){let n=s.getAsFile(),o=new File([n],`pasted_image_${new Date().getTime()}.png`,{type:"image/png"});this.image=URL.createObjectURL(n),this.file=o,this.$emit("paste",o);break}}}}},f=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{ref:"board",staticClass:"paste-board",attrs:{tabindex:"0"},on:{paste:t.onPaste}}),t._v(" "),t.image?e("img",{attrs:{src:t.image,alt:""}}):t._e()])},u=[];f._withStripped=!0;var m=void 0,h="data-v-dddf4d48",g=void 0,v=!1;function x(t,i,e,s,n,o,a,r,d,y){let c=(typeof e=="function"?e.options:e)||{};return c.__file="src/components/PasteBoard.vue",c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,n&&(c.functional=!0)),c._scopeId=s,c}var w=x({render:f,staticRenderFns:u},m,_,h,v,g,!1,void 0,void 0,void 0),p=w;function R(t){return new Promise((i,e)=>{let s=new FileReader;s.onload=()=>{let n=new Image;n.onload=()=>{let o=document.createElement("canvas"),a=o.getContext("2d");o.width=n.width,o.height=n.height,a.fillStyle="#fff",a.fillRect(0,0,n.width,n.height),a.drawImage(n,0,0);let r=o.toDataURL("image/jpeg"),d=b(r);i(d)},n.src=s.result},s.readAsDataURL(t)})}function b(t){let i=";base64,",e=t.split(i),s=e[0].split(":")[1],n=window.atob(e[1]),o=n.length,a=new Uint8Array(o);for(let r=0;r<o;++r)a[r]=n.charCodeAt(r);return new Blob([a],{type:s})}panel.plugin("rasteiner/paste",{use:[function(t){let i=t.options.components["k-files-field"].options;t.component("k-files-field",{extends:i,render(e){let s=i.render.call(this,e);return e("div",{class:"paste-files-field"},[s,e("k-dialog",{ref:"pasteDialog",props:{submitButton:!1},scopedSlots:{default:n=>e(p,{ref:"pasteBoard",on:{paste:()=>{this.$refs.pasteDialog.submitButton="Upload"}}})},on:{submit:async()=>{let n=this.$refs.pasteBoard.file;if(n){this.$refs.pasteDialog.submitButton="Converting...";let o=await R(n),a=n.name.replace(/\.png$/,".jpg");if(o instanceof Blob){let r=new File([o],a,{type:"image/jpeg"});this.drop([r])}}this.$refs.pasteDialog.close()}}})])},computed:{options(){let e=i.computed.options.call(this);return e.options.push({icon:"template",text:"Paste",click:()=>{this.$refs.pasteDialog.open()}}),e}}})}]});})();

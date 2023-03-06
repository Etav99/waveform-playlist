import lamejs from "lamejs";

var WebMMuxer=(()=>{var Ut=Object.defineProperty;var It=Object.getOwnPropertyDescriptor;var te=Object.getOwnPropertyNames;var ee=Object.prototype.hasOwnProperty;var m=Math.pow;var ie=(n,e)=>{for(var i in e)Ut(n,i,{get:e[i],enumerable:!0})},se=(n,e,i,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of te(e))!ee.call(n,r)&&r!==i&&Ut(n,r,{get:()=>e[r],enumerable:!(s=It(e,r))||s.enumerable});return n};var re=n=>se(Ut({},"__esModule",{value:!0}),n);var At=(n,e,i)=>{if(!e.has(n))throw TypeError("Cannot "+i)};var t=(n,e,i)=>(At(n,e,"read from private field"),i?i.call(n):e.get(n)),o=(n,e,i)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,i)},c=(n,e,i,s)=>(At(n,e,"write to private field"),s?s.call(n,i):e.set(n,i),i);var d=(n,e,i)=>(At(n,e,"access private method"),i);var ue={};ie(ue,{default:()=>le});var N=class{constructor(e){this.value=e}},T=class{constructor(e){this.value=e}};var St=n=>n<1<<8?1:n<1<<16?2:n<1<<24?3:n<m(2,32)?4:n<m(2,40)?5:6,_t=n=>{if(n<(1<<7)-1)return 1;if(n<(1<<14)-1)return 2;if(n<(1<<21)-1)return 3;if(n<(1<<28)-1)return 4;if(n<m(2,35)-1)return 5;if(n<m(2,42)-1)return 6;throw new Error("EBML VINT size not supported "+n)};var x,u,ot,Mt,lt,Ot,J,Tt,dt,Wt,G=class{constructor(){o(this,ot);o(this,lt);o(this,J);o(this,dt);this.pos=0;o(this,x,new Uint8Array(8));o(this,u,new DataView(t(this,x).buffer));this.offsets=new WeakMap;this.dataOffsets=new WeakMap}writeEBMLVarInt(e,i=_t(e)){let s=0;switch(i){case 1:t(this,u).setUint8(s++,1<<7|e);break;case 2:t(this,u).setUint8(s++,1<<6|e>>8),t(this,u).setUint8(s++,e);break;case 3:t(this,u).setUint8(s++,1<<5|e>>16),t(this,u).setUint8(s++,e>>8),t(this,u).setUint8(s++,e);break;case 4:t(this,u).setUint8(s++,1<<4|e>>24),t(this,u).setUint8(s++,e>>16),t(this,u).setUint8(s++,e>>8),t(this,u).setUint8(s++,e);break;case 5:t(this,u).setUint8(s++,1<<3|e/m(2,32)&7),t(this,u).setUint8(s++,e>>24),t(this,u).setUint8(s++,e>>16),t(this,u).setUint8(s++,e>>8),t(this,u).setUint8(s++,e);break;case 6:t(this,u).setUint8(s++,1<<2|e/m(2,40)&3),t(this,u).setUint8(s++,e/m(2,32)|0),t(this,u).setUint8(s++,e>>24),t(this,u).setUint8(s++,e>>16),t(this,u).setUint8(s++,e>>8),t(this,u).setUint8(s++,e);break;default:throw new Error("Bad EBML VINT size "+i)}this.write(t(this,x).subarray(0,s))}writeEBML(e){var i,s;if(e instanceof Uint8Array)this.write(e);else if(Array.isArray(e))for(let r of e)this.writeEBML(r);else if(this.offsets.set(e,this.pos),d(this,J,Tt).call(this,e.id),Array.isArray(e.data)){let r=this.pos,a=(i=e.size)!=null?i:4;this.seek(this.pos+a);let l=this.pos;this.dataOffsets.set(e,l),this.writeEBML(e.data);let f=this.pos-l,v=this.pos;this.seek(r),this.writeEBMLVarInt(f,a),this.seek(v)}else if(typeof e.data=="number"){let r=(s=e.size)!=null?s:St(e.data);this.writeEBMLVarInt(r),d(this,J,Tt).call(this,e.data,r)}else typeof e.data=="string"?(this.writeEBMLVarInt(e.data.length),d(this,dt,Wt).call(this,e.data)):e.data instanceof Uint8Array?(this.writeEBMLVarInt(e.data.byteLength,e.size),this.write(e.data)):e.data instanceof N?(this.writeEBMLVarInt(4),d(this,ot,Mt).call(this,e.data.value)):e.data instanceof T&&(this.writeEBMLVarInt(8),d(this,lt,Ot).call(this,e.data.value))}};x=new WeakMap,u=new WeakMap,ot=new WeakSet,Mt=function(e){t(this,u).setFloat32(0,e,!1),this.write(t(this,x).subarray(0,4))},lt=new WeakSet,Ot=function(e){t(this,u).setFloat64(0,e,!1),this.write(t(this,x))},J=new WeakSet,Tt=function(e,i=St(e)){let s=0;switch(i){case 6:t(this,u).setUint8(s++,e/m(2,40)|0);case 5:t(this,u).setUint8(s++,e/m(2,32)|0);case 4:t(this,u).setUint8(s++,e>>24);case 3:t(this,u).setUint8(s++,e>>16);case 2:t(this,u).setUint8(s++,e>>8);case 1:t(this,u).setUint8(s++,e);break;default:throw new Error("Bad UINT size "+i)}this.write(t(this,x).subarray(0,s))},dt=new WeakSet,Wt=function(e){this.write(new Uint8Array(e.split("").map(i=>i.charCodeAt(0))))};var U,_,Q=class extends G{constructor(){super();o(this,U,new ArrayBuffer(m(2,16)));o(this,_,new Uint8Array(t(this,U)))}ensureSize(i){let s=t(this,U).byteLength;for(;s<i;)s*=2;if(s===t(this,U).byteLength)return;let r=new ArrayBuffer(s),a=new Uint8Array(r);a.set(t(this,_),0),c(this,U,r),c(this,_,a)}write(i){this.ensureSize(this.pos+i.byteLength),t(this,_).set(i,this.pos),this.pos+=i.byteLength}seek(i){this.pos=i}finalize(){return this.ensureSize(this.pos),t(this,U).slice(0,this.pos)}};U=new WeakMap,_=new WeakMap;var R=m(2,24),ae=2,B,w,j=class extends G{constructor(i){super();o(this,B,void 0);o(this,w,[]);c(this,B,i)}write(i){this.writeDataIntoChunks(i,this.pos),this.flushChunks(),this.pos+=i.byteLength}writeDataIntoChunks(i,s){let r=t(this,w).findIndex(E=>E.start<=s&&s<E.start+R);r===-1&&(r=this.createChunk(s));let a=t(this,w)[r],l=s-a.start,f=i.subarray(0,Math.min(R-l,i.byteLength));a.data.set(f,l);let v={start:l,end:l+f.byteLength};if(ne(a,v),a.written[0].start===0&&a.written[0].end===R&&(a.shouldFlush=!0),t(this,w).length>ae){for(let E=0;E<t(this,w).length-1;E++)t(this,w)[E].shouldFlush=!0;this.flushChunks()}f.byteLength<i.byteLength&&this.writeDataIntoChunks(i.subarray(f.byteLength),s+f.byteLength)}createChunk(i){let r={start:Math.floor(i/R)*R,data:new Uint8Array(R),written:[],shouldFlush:!1};return t(this,w).push(r),t(this,w).sort((a,l)=>a.start-l.start),t(this,w).indexOf(r)}flushChunks(i=!1){for(let s=0;s<t(this,w).length;s++){let r=t(this,w)[s];if(!(!r.shouldFlush&&!i)){for(let a of r.written)t(this,B).write({type:"write",data:r.data.subarray(a.start,a.end),position:r.start+a.start});t(this,w).splice(s--,1)}}}seek(i){this.pos=i}finalize(){this.flushChunks(!0)}};B=new WeakMap,w=new WeakMap;var ne=(n,e)=>{let i=0,s=n.written.length-1,r=-1;for(;i<=s;){let a=Math.floor(i+(s-i+1)/2);n.written[a].start<=e.start?(i=a+1,r=a):s=a-1}for(n.written.splice(r+1,0,e),(r===-1||n.written[r].end<e.start)&&r++;r<n.written.length-1&&n.written[r].end>=n.written[r+1].start;)n.written[r].end=Math.max(n.written[r].end,n.written[r+1].end),n.written.splice(r+1,1)},A,I,M=class extends G{constructor(i){super();o(this,A,[]);o(this,I,void 0);c(this,I,i)}write(i){t(this,A).push({data:i.slice(),start:this.pos}),this.pos+=i.byteLength}seek(i){this.pos=i}flush(i){if(t(this,A).length===0)return;let s=[],r=[...t(this,A)].sort((a,l)=>a.start-l.start);s.push({start:r[0].start,size:r[0].data.byteLength});for(let a=1;a<r.length;a++){let l=s[s.length-1],f=r[a];f.start<=l.start+l.size?l.size=Math.max(l.size,f.start+f.data.byteLength-l.start):s.push({start:f.start,size:f.data.byteLength})}for(let a of s){a.data=new Uint8Array(a.size);for(let f of t(this,A))a.start<=f.start&&f.start<a.start+a.size&&a.data.set(f.data,f.start-a.start);let l=i&&a===s[s.length-1];t(this,I).call(this,a.data,a.start,l)}t(this,A).length=0}};A=new WeakMap,I=new WeakMap;var tt=1,zt=2,he=1,oe=2,Vt=m(2,15),Dt=m(2,12),Ht="https://github.com/Vanilagy/webm-muxer",Kt=6,Yt=5,h,b,H,K,p,Y,V,D,Z,$,F,y,P,L,g,C,et,it,X,st,ft,Zt,ct,$t,bt,Lt,mt,Xt,wt,qt,pt,vt,yt,Gt,gt,Qt,q,ut,S,W,Ct,jt,kt,Jt,rt,Pt,k,z,at,Et,xt,Bt,nt,Nt,ht,Rt,Ft=class{constructor(e){o(this,ft);o(this,ct);o(this,bt);o(this,mt);o(this,wt);o(this,pt);o(this,yt);o(this,gt);o(this,q);o(this,S);o(this,Ct);o(this,kt);o(this,rt);o(this,k);o(this,at);o(this,xt);o(this,nt);o(this,ht);o(this,h,void 0);o(this,b,void 0);o(this,H,void 0);o(this,K,void 0);o(this,p,void 0);o(this,Y,void 0);o(this,V,void 0);o(this,D,void 0);o(this,Z,void 0);o(this,$,void 0);o(this,F,void 0);o(this,y,void 0);o(this,P,void 0);o(this,L,0);o(this,g,[]);o(this,C,[]);o(this,et,0);o(this,it,0);o(this,X,void 0);o(this,st,!1);if(d(this,ft,Zt).call(this,e),c(this,b,e),e.target==="buffer")c(this,h,new Q);else if(e.target instanceof FileSystemWritableFileStream)c(this,h,new j(e.target));else if(typeof e.target=="function")c(this,h,new M(e.target));else throw new Error(`Invalid target: ${e.target}`);d(this,ct,$t).call(this)}addVideoChunk(e,i,s){let r=new Uint8Array(e.byteLength);e.copyTo(r),this.addVideoChunkRaw(r,e.type,s!=null?s:e.timestamp,i)}addVideoChunkRaw(e,i,s,r){if(d(this,ht,Rt).call(this),!t(this,b).video)throw new Error("No video track declared.");r&&d(this,Ct,jt).call(this,r);let a=d(this,rt,Pt).call(this,e,i,s,tt);for(t(this,b).video.codec==="V_VP9"&&d(this,kt,Jt).call(this,a),c(this,et,a.timestamp);t(this,C).length>0&&t(this,C)[0].timestamp<=a.timestamp;){let l=t(this,C).shift();d(this,k,z).call(this,l)}!t(this,b).audio||a.timestamp<=t(this,it)?d(this,k,z).call(this,a):t(this,g).push(a),d(this,q,ut).call(this)}addAudioChunk(e,i,s){let r=new Uint8Array(e.byteLength);e.copyTo(r),this.addAudioChunkRaw(r,e.type,s!=null?s:e.timestamp,i)}addAudioChunkRaw(e,i,s,r){if(d(this,ht,Rt).call(this),!t(this,b).audio)throw new Error("No audio track declared.");let a=d(this,rt,Pt).call(this,e,i,s,zt);for(c(this,it,a.timestamp);t(this,g).length>0&&t(this,g)[0].timestamp<=a.timestamp;){let l=t(this,g).shift();d(this,k,z).call(this,l)}!t(this,b).video||a.timestamp<=t(this,et)?d(this,k,z).call(this,a):t(this,C).push(a),r!=null&&r.decoderConfig&&d(this,at,Et).call(this,t(this,$),r.decoderConfig.description),d(this,q,ut).call(this)}finalize(){for(;t(this,g).length>0;)d(this,k,z).call(this,t(this,g).shift());for(;t(this,C).length>0;)d(this,k,z).call(this,t(this,C).shift());d(this,nt,Nt).call(this),t(this,h).writeEBML(t(this,F));let e=t(this,h).pos,i=t(this,h).pos-t(this,S,W);return t(this,h).seek(t(this,h).offsets.get(t(this,H))+4),t(this,h).writeEBMLVarInt(i,Kt),t(this,V).data=new T(t(this,L)),t(this,h).seek(t(this,h).offsets.get(t(this,V))),t(this,h).writeEBML(t(this,V)),t(this,p).data[0].data[1].data=t(this,h).offsets.get(t(this,F))-t(this,S,W),t(this,p).data[1].data[1].data=t(this,h).offsets.get(t(this,K))-t(this,S,W),t(this,p).data[2].data[1].data=t(this,h).offsets.get(t(this,Y))-t(this,S,W),t(this,h).seek(t(this,h).offsets.get(t(this,p))),t(this,h).writeEBML(t(this,p)),t(this,h).seek(e),c(this,st,!0),t(this,h)instanceof Q?t(this,h).finalize():(t(this,h)instanceof j?t(this,h).finalize():t(this,h)instanceof M&&t(this,h).flush(!0),null)}};h=new WeakMap,b=new WeakMap,H=new WeakMap,K=new WeakMap,p=new WeakMap,Y=new WeakMap,V=new WeakMap,D=new WeakMap,Z=new WeakMap,$=new WeakMap,F=new WeakMap,y=new WeakMap,P=new WeakMap,L=new WeakMap,g=new WeakMap,C=new WeakMap,et=new WeakMap,it=new WeakMap,X=new WeakMap,st=new WeakMap,ft=new WeakSet,Zt=function(e){if(e.type&&e.type!=="webm"&&e.type!=="matroska")throw new Error(`Invalid type: ${e.type}`)},ct=new WeakSet,$t=function(){d(this,bt,Lt).call(this),d(this,mt,Xt).call(this),d(this,wt,qt).call(this),d(this,pt,vt).call(this),d(this,yt,Gt).call(this),d(this,gt,Qt).call(this),d(this,q,ut).call(this)},bt=new WeakSet,Lt=function(){var i;let e={id:440786851,data:[{id:17030,data:1},{id:17143,data:1},{id:17138,data:4},{id:17139,data:8},{id:17026,data:(i=t(this,b).type)!=null?i:"webm"},{id:17031,data:2},{id:17029,data:2}]};t(this,h).writeEBML(e)},mt=new WeakSet,Xt=function(){let e=new Uint8Array([28,83,187,107]),i=new Uint8Array([21,73,169,102]),s=new Uint8Array([22,84,174,107]),r={id:290298740,data:[{id:19899,data:[{id:21419,data:e},{id:21420,size:5,data:0}]},{id:19899,data:[{id:21419,data:i},{id:21420,size:5,data:0}]},{id:19899,data:[{id:21419,data:s},{id:21420,size:5,data:0}]}]};c(this,p,r)},wt=new WeakSet,qt=function(){let e={id:17545,data:new T(0)};c(this,V,e);let i={id:357149030,data:[{id:2807729,data:1e6},{id:19840,data:Ht},{id:22337,data:Ht},e]};c(this,K,i)},pt=new WeakSet,vt=function(){let e={id:374648427,data:[]};if(c(this,Y,e),t(this,b).video){c(this,Z,{id:236,size:4,data:new Uint8Array(Dt)});let i={id:21936,data:[{id:21937,data:2},{id:21946,data:2},{id:21947,data:2},{id:21945,data:0}]};c(this,D,i),e.data.push({id:174,data:[{id:215,data:tt},{id:29637,data:tt},{id:131,data:he},{id:134,data:t(this,b).video.codec},t(this,Z),t(this,b).video.frameRate?{id:2352003,data:1e9/t(this,b).video.frameRate}:null,{id:224,data:[{id:176,data:t(this,b).video.width},{id:186,data:t(this,b).video.height},i]}].filter(Boolean)})}t(this,b).audio&&(c(this,$,{id:236,size:4,data:new Uint8Array(Dt)}),e.data.push({id:174,data:[{id:215,data:zt},{id:29637,data:zt},{id:131,data:oe},{id:134,data:t(this,b).audio.codec},t(this,$),{id:225,data:[{id:181,data:new N(t(this,b).audio.sampleRate)},{id:159,data:t(this,b).audio.numberOfChannels},t(this,b).audio.bitDepth?{id:25188,data:t(this,b).audio.bitDepth}:null].filter(Boolean)}]}))},yt=new WeakSet,Gt=function(){let e={id:408125543,size:Kt,data:[t(this,p),t(this,K),t(this,Y)]};c(this,H,e),t(this,h).writeEBML(e)},gt=new WeakSet,Qt=function(){c(this,F,{id:475249515,data:[]})},q=new WeakSet,ut=function(){t(this,h)instanceof M&&t(this,h).flush(!1)},S=new WeakSet,W=function(){return t(this,h).dataOffsets.get(t(this,H))},Ct=new WeakSet,jt=function(e){if(e.decoderConfig){if(e.decoderConfig.colorSpace){let i=e.decoderConfig.colorSpace;c(this,X,i),t(this,D).data=[{id:21937,data:{rgb:1,bt709:1,bt470bg:5,smpte170m:6}[i.matrix]},{id:21946,data:{bt709:1,smpte170m:6,"iec61966-2-1":13}[i.transfer]},{id:21947,data:{bt709:1,bt470bg:5,smpte170m:6}[i.primaries]},{id:21945,data:[1,2][Number(i.fullRange)]}];let s=t(this,h).pos;t(this,h).seek(t(this,h).offsets.get(t(this,D))),t(this,h).writeEBML(t(this,D)),t(this,h).seek(s)}e.decoderConfig.description&&d(this,at,Et).call(this,t(this,Z),e.decoderConfig.description)}},kt=new WeakSet,Jt=function(e){if(e.type!=="key"||!t(this,X))return;let i=0;if(O(e.data,0,2)!==2)return;i+=2;let s=(O(e.data,i+1,i+2)<<1)+O(e.data,i+0,i+1);i+=2,s===3&&i++;let r=O(e.data,i+0,i+1);if(i++,r)return;let a=O(e.data,i+0,i+1);if(i++,a!==0)return;i+=2;let l=O(e.data,i+0,i+24);if(i+=24,l!==4817730)return;s>=2&&i++;let f={rgb:7,bt709:2,bt470bg:1,smpte170m:3}[t(this,X).matrix];de(e.data,i+0,i+3,f)},rt=new WeakSet,Pt=function(e,i,s,r){return{data:e,type:i,timestamp:s,trackNumber:r}},k=new WeakSet,z=function(e){let i=Math.floor(e.timestamp/1e3);if(e.type!=="key"&&i-t(this,P)>=Vt)throw new Error(`Current Matroska cluster exceeded its maximum allowed length of ${Vt} milliseconds. In order to produce a correct WebM file, you must pass in a video key frame at least every ${Vt} milliseconds.`);let r=(e.trackNumber===tt||!t(this,b).video)&&e.type==="key"&&i-t(this,P)>=1e3;(!t(this,y)||r)&&d(this,xt,Bt).call(this,i);let a=new Uint8Array(4),l=new DataView(a.buffer);l.setUint8(0,128|e.trackNumber),l.setUint16(1,i-t(this,P),!1),l.setUint8(3,Number(e.type==="key")<<7);let f={id:163,data:[a,e.data]};t(this,h).writeEBML(f),c(this,L,Math.max(t(this,L),i))},at=new WeakSet,Et=function(e,i){let s=t(this,h).pos;t(this,h).seek(t(this,h).offsets.get(e)),e=[{id:25506,size:4,data:new Uint8Array(i)},{id:236,size:4,data:new Uint8Array(Dt-2-4-i.byteLength)}],t(this,h).writeEBML(e),t(this,h).seek(s)},xt=new WeakSet,Bt=function(e){t(this,y)&&d(this,nt,Nt).call(this),c(this,y,{id:524531317,size:Yt,data:[{id:231,data:e}]}),t(this,h).writeEBML(t(this,y)),c(this,P,e);let i=t(this,h).offsets.get(t(this,y))-t(this,S,W);t(this,F).data.push({id:187,data:[{id:179,data:e},{id:183,data:[{id:247,data:tt},{id:241,data:i}]}]})},nt=new WeakSet,Nt=function(){let e=t(this,h).pos-t(this,h).dataOffsets.get(t(this,y)),i=t(this,h).pos;t(this,h).seek(t(this,h).offsets.get(t(this,y))+4),t(this,h).writeEBMLVarInt(e,Yt),t(this,h).seek(i)},ht=new WeakSet,Rt=function(){if(t(this,st))throw new Error("Cannot add new video or audio chunks after the file has been finalized.")};var le=Ft,O=(n,e,i)=>{let s=0;for(let r=e;r<i;r++){let a=Math.floor(r/8),l=n[a],f=7-(r&7),v=(l&1<<f)>>f;s<<=1,s|=v}return s},de=(n,e,i,s)=>{for(let r=e;r<i;r++){let a=Math.floor(r/8),l=n[a],f=7-(r&7);l&=~(1<<f),l|=(s&1<<i-r-1)>>i-r-1<<f,n[a]=l}};return re(ue);})();
WebMMuxer = WebMMuxer.default;

let recLength = 0;
let recBuffersL = [];
let recBuffersR = [];
let sampleRate;

function init(config) {
  sampleRate = config.sampleRate;
}

function record(inputBuffer) {
  recBuffersL.push(inputBuffer[0]);
  recBuffersR.push(inputBuffer[1]);
  recLength += inputBuffer[0].length;
}

function writeString(view, offset, string) {
  for (let i = 0; i < string.length; i += 1) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

function floatTo16BitPCM(output, offset, input) {
  let writeOffset = offset;
  for (let i = 0; i < input.length; i += 1, writeOffset += 2) {
    const s = Math.max(-1, Math.min(1, input[i]));
    output.setInt16(writeOffset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
}

function encodeWAV(samples, mono = false) {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);

  /* RIFF identifier */
  writeString(view, 0, "RIFF");
  /* file length */
  view.setUint32(4, 32 + samples.length * 2, true);
  /* RIFF type */
  writeString(view, 8, "WAVE");
  /* format chunk identifier */
  writeString(view, 12, "fmt ");
  /* format chunk length */
  view.setUint32(16, 16, true);
  /* sample format (raw) */
  view.setUint16(20, 1, true);
  /* channel count */
  view.setUint16(22, mono ? 1 : 2, true);
  /* sample rate */
  view.setUint32(24, sampleRate, true);
  /* byte rate (sample rate * block align) */
  view.setUint32(28, sampleRate * 4, true);
  /* block align (channel count * bytes per sample) */
  view.setUint16(32, 4, true);
  /* bits per sample */
  view.setUint16(34, 16, true);
  /* data chunk identifier */
  writeString(view, 36, "data");
  /* data chunk length */
  view.setUint32(40, samples.length * 2, true);

  floatTo16BitPCM(view, 44, samples);

  return view;
}

function mergeBuffers(recBuffers, length) {
  const result = new Float32Array(length);
  let offset = 0;

  for (let i = 0; i < recBuffers.length; i += 1) {
    result.set(recBuffers[i], offset);
    offset += recBuffers[i].length;
  }
  return result;
}

function interleave(inputL, inputR) {
  const length = inputL.length + inputR.length;
  const result = new Float32Array(length);

  let index = 0;
  let inputIndex = 0;

  while (index < length) {
    result[(index += 1)] = inputL[inputIndex];
    result[(index += 1)] = inputR[inputIndex];
    inputIndex += 1;
  }

  return result;
}

function exportWAV(type) {
  const bufferL = mergeBuffers(recBuffersL, recLength);
  const bufferR = mergeBuffers(recBuffersR, recLength);
  const interleaved = interleave(bufferL, bufferR);
  const dataview = encodeWAV(interleaved);
  const audioBlob = new Blob([dataview], { type });

  postMessage(audioBlob);
}

async function exportOpus(type) {
    // TODO: support mono
    console.log("OPUS encoding ENTER");

    const channels = 2;
    let total_encoded_size = 0;
    let muxer = null;

	muxer = new WebMMuxer({
		target: 'buffer',
		audio: {
			codec: 'A_OPUS',
			sampleRate: sampleRate,
			numberOfChannels: channels
		}
	});

    const encoder = new AudioEncoder({
        error(e) {
            console.log(e);
        },
        output(chunk, meta) {
            total_encoded_size += chunk.byteLength;
            muxer.addAudioChunk(chunk, meta);
        },
    });

    const config = {
        numberOfChannels: channels,
        sampleRate: sampleRate,
        codec: "opus",
        bitrate: 64000,
        opus: { complexity: 9}
    };

    encoder.configure(config);

    const bufferL = mergeBuffers(recBuffersL, recLength);
    const bufferR = mergeBuffers(recBuffersR, recLength);

    const bufferL3 = new ArrayBuffer(recLength * 2);
    const bufferR3 = new ArrayBuffer(recLength * 2);

    const samplesL = new DataView(bufferL3);
    const samplesR = new DataView(bufferR3);

    floatTo16BitPCM(samplesL, 0, bufferL);
    floatTo16BitPCM(samplesR, 0, bufferR);

    const Mp3L = new Int16Array(bufferL3, 0, recLength);
    const Mp3R = new Int16Array(bufferR3, 0, recLength);

    var remaining = recLength;

    const samplesPerFrame = 1024;
    let base_time = 0;

    for (let i = 0; remaining >= samplesPerFrame; i += samplesPerFrame) {
        var left = Mp3L.subarray(i, i + samplesPerFrame);
        var right = Mp3R.subarray(i, i + samplesPerFrame);
        let planar_data = new Int16Array(samplesPerFrame * channels);

        planar_data.set(left, 0);
        planar_data.set(right, samplesPerFrame);

        base_time = (i * samplesPerFrame) / sampleRate;

        let audio_data = new AudioData({
            timestamp: 1000000 * base_time,
            data: planar_data,
            numberOfChannels: channels,
            numberOfFrames: samplesPerFrame,
            sampleRate: sampleRate,
            format: "s16-planar",
        });
        encoder.encode(audio_data);

        remaining -= samplesPerFrame;
    }

    if (remaining >= 0) {
        var left = Mp3L.subarray(recLength - remaining, recLength);
        var right = Mp3R.subarray(recLength - remaining, recLength);
        let planar_data = new Int16Array(remaining * channels);

        planar_data.set(left, 0);
        planar_data.set(right, remaining);

        base_time += samplesPerFrame;

        let audio_data = new AudioData({
            timestamp: 1000000 * base_time,
            data: planar_data,
            numberOfChannels: channels,
            numberOfFrames: remaining,
            sampleRate: sampleRate,
            format: "s16-planar",
        });
        encoder.encode(audio_data);
	    remaining = 0;
    }

    await encoder.flush();
    let buffer = muxer.finalize();

    console.log("OPUS encoding done.");

    const audioBlob = new Blob([buffer], { type });
    postMessage(audioBlob);
}

async function exportAAC(type) {
    // TODO: support mono
    console.log("AAC encoding ENTER");

    const channels = 2;
    var buffer = [];
    let total_encoded_size = 0;

    const encoder = new AudioEncoder({
        error(e) {
            console.log(e);
        },
        output(chunk, meta) {
            total_encoded_size += chunk.byteLength;
            var frameData = new Uint8Array(chunk.byteLength);
            chunk.copyTo(frameData);
            buffer.push(frameData);
        },
    });

    const config = {
        numberOfChannels: channels,
        sampleRate: sampleRate,
        codec: "mp4a.40.2",
        aac: { format: 'adts' },
        bitrate: 96000
    };

    encoder.configure(config);

    const bufferL = mergeBuffers(recBuffersL, recLength);
    const bufferR = mergeBuffers(recBuffersR, recLength);

    const bufferL3 = new ArrayBuffer(recLength * 2);
    const bufferR3 = new ArrayBuffer(recLength * 2);

    const samplesL = new DataView(bufferL3);
    const samplesR = new DataView(bufferR3);

    floatTo16BitPCM(samplesL, 0, bufferL);
    floatTo16BitPCM(samplesR, 0, bufferR);

    const Mp3L = new Int16Array(bufferL3, 0, recLength);
    const Mp3R = new Int16Array(bufferR3, 0, recLength);

    var remaining = recLength;

    const samplesPerFrame = 1024;
    let base_time = 0;

    for (let i = 0; remaining >= samplesPerFrame; i += samplesPerFrame) {
        var left = Mp3L.subarray(i, i + samplesPerFrame);
        var right = Mp3R.subarray(i, i + samplesPerFrame);
        let planar_data = new Int16Array(samplesPerFrame * channels);

        planar_data.set(left, 0);
        planar_data.set(right, samplesPerFrame);

        base_time = (i * samplesPerFrame) / sampleRate;

        let audio_data = new AudioData({
            timestamp: 1000000 * base_time,
            data: planar_data,
            numberOfChannels: channels,
            numberOfFrames: samplesPerFrame,
            sampleRate: sampleRate,
            format: "s16-planar",
        });
        encoder.encode(audio_data);

        remaining -= samplesPerFrame;
    }

    if (remaining >= 0) {
        var left = Mp3L.subarray(recLength - remaining, recLength);
        var right = Mp3R.subarray(recLength - remaining, recLength);
        let planar_data = new Int16Array(remaining * channels);

        planar_data.set(left, 0);
        planar_data.set(right, remaining);

        base_time += samplesPerFrame;

        let audio_data = new AudioData({
            timestamp: 1000000 * base_time,
            data: planar_data,
            numberOfChannels: channels,
            numberOfFrames: remaining,
            sampleRate: sampleRate,
            format: "s16-planar",
        });
        encoder.encode(audio_data);
	    remaining = 0;
    }

    await encoder.flush();

    console.log("AAC encoding done.");

    const audioBlob = new Blob(buffer, { type });
    postMessage(audioBlob);

}


function exportMP3(type) {
  var buffer = [];
  const bufferL = mergeBuffers(recBuffersL, recLength);
  const bufferR = mergeBuffers(recBuffersR, recLength);

    // TODO: support mono output... but not even wave does supports it...
  const bufferL3 = new ArrayBuffer(recLength * 2);
  const bufferR3 = new ArrayBuffer(recLength * 2);

  const samplesL = new DataView(bufferL3);
  const samplesR = new DataView(bufferR3);

  floatTo16BitPCM(samplesL, 0, bufferL);
  floatTo16BitPCM(samplesR, 0, bufferR);

  const Mp3L = new Int16Array(bufferL3, 0, recLength);
  const Mp3R = new Int16Array(bufferR3, 0, recLength);

  const channels = 2;

  var mp3enc = new lamejs.Mp3Encoder(channels, sampleRate, 112);
  var remaining = recLength;

  const samplesPerFrame = 1152;

  for (let i = 0; remaining >= samplesPerFrame; i += samplesPerFrame) {
    var left = Mp3L.subarray(i, i + samplesPerFrame);
    var right = Mp3R.subarray(i, i + samplesPerFrame);
    var mp3buf = mp3enc.encodeBuffer(left, right);
    if (mp3buf.length > 0) {
        // console.log("remaining time:", Math.round(remaining / sampleRate),"s");
        buffer.push(new Int8Array(mp3buf));
    }
    remaining -= samplesPerFrame;
  }

  if (remaining >= 0) {
    var left = Mp3L.subarray(recLength - remaining, recLength);
    var right = Mp3R.subarray(recLength - remaining, recLength);

    var mp3buf = mp3enc.encodeBuffer(left, right);
    if (mp3buf.length > 0) {
        // console.log("remaining time:", Math.round(remaining / sampleRate),"s");
        buffer.push(new Int8Array(mp3buf));
    }
	remaining = 0;
  }

  var mp3buf = mp3enc.flush();
  if (mp3buf.length > 0) {
    buffer.push(new Int8Array(mp3buf));
  }

  console.log("MP3 encoding done.");

  const audioBlob = new Blob(buffer, { type });
  postMessage(audioBlob);
}

function clear() {
  recLength = 0;
  recBuffersL = [];
  recBuffersR = [];
}

/* exportOpus not supported yet... 44.1kHz not supported by Opus */
onmessage = function onmessage(e) {
  if (e.data.command) {
    switch (e.data.command) {
      case "init": {
        init(e.data.config);
        break;
      }
      case "record": {
        record(e.data.buffer);
        break;
      }
      case "exportWAV": {
        exportWAV(e.data.type);
        break;
      }
      case "exportMP3": {
        exportMP3(e.data.type);
        break;
      }
      case "exportOpus": {
        exportOpus(e.data.type);
        break;
      }
      case "exportAAC": {
        exportAAC(e.data.type);
        break;
      }
      case "clear": {
        clear();
        break;
      }
      default: {
        throw new Error("Unknown export worker command");
      }
    }
  }
};

(()=>{var Ca=Object.assign;var Ra="125";var eu=0,Pa=1,tu=2;var Ia=1,nu=2,hr=3,vn=0,et=1,Nn=2,Da=1;var dr=0,fr=1,Oa=2,Fa=3,Ba=4,iu=5,ai=100,ru=101,su=102,Na=103,za=104,ou=200,au=201,cu=202,lu=203,Ua=204,Ha=205,uu=206,hu=207,du=208,fu=209,pu=210,mu=0,gu=1,vu=2,oo=3,yu=4,xu=5,_u=6,bu=7,Zr=0,wu=1,Mu=2,pr=0,Su=1,Tu=2,Eu=3,Au=4,Lu=5,Ga=300,ao=301,co=302,Jr=303,ka=304,lo=306,uo=307,zn=1e3,lt=1001,mr=1002,nt=1003,Kr=1004;var $r=1005;var Je=1006,ho=1007;var Un=1008;var fo=1009,Cu=1010,Ru=1011,Qr=1012,Pu=1013,es=1014,yn=1015,ts=1016,Iu=1017,Du=1018,Ou=1019,gr=1020,Fu=1021,nn=1022,It=1023,Bu=1024,Nu=1025;var ci=1026,vr=1027,zu=1028,Uu=1029,Hu=1030,Gu=1031,ku=1032,Vu=1033,Va=33776,Wa=33777,ja=33778,qa=33779,Xa=35840,Ya=35841,Za=35842,Ja=35843,Wu=36196,Ka=37492,$a=37496,ju=37808,qu=37809,Xu=37810,Yu=37811,Zu=37812,Ju=37813,Ku=37814,$u=37815,Qu=37816,eh=37817,th=37818,nh=37819,ih=37820,rh=37821,sh=36492,oh=37840,ah=37841,ch=37842,lh=37843,uh=37844,hh=37845,dh=37846,fh=37847,ph=37848,mh=37849,gh=37850,vh=37851,yh=37852,xh=37853,_h=2200,bh=2201,wh=2202,li=2300,Hn=2301,po=2302,ui=2400,hi=2401,ns=2402,mo=2500,Qa=2501,Mh=0,ec=1,go=2,di=3e3,fi=3001,is=3007,tc=3002,Sh=3003,nc=3004,ic=3005,rc=3006,Th=3200,Eh=3201,xn=0,Ah=1;var vo=7680;var Lh=519,rs=35044,yr=35048;var sc="300 es";function _n(){}Object.assign(_n.prototype,{addEventListener:function(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)},hasEventListener:function(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1},removeEventListener:function(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t)}}});var it=[];for(let t=0;t<256;t++)it[t]=(t<16?"0":"")+t.toString(16);var ss=1234567,Me={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(it[t&255]+it[t>>8&255]+it[t>>16&255]+it[t>>24&255]+"-"+it[e&255]+it[e>>8&255]+"-"+it[e>>16&15|64]+it[e>>24&255]+"-"+it[n&63|128]+it[n>>8&255]+"-"+it[n>>16&255]+it[n>>24&255]+it[i&255]+it[i>>8&255]+it[i>>16&255]+it[i>>24&255]).toUpperCase()},clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},lerp:function(t,e,n){return(1-n)*t+n*e},damp:function(t,e,n,i){return Me.lerp(t,e,1-Math.exp(-n*i))},pingpong:function(t,e=1){return e-Math.abs(Me.euclideanModulo(t,e*2)-e)},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){return t!==void 0&&(ss=t%2147483647),ss=ss*16807%2147483647,(ss-1)/2147483646},degToRad:function(t){return t*Me.DEG2RAD},radToDeg:function(t){return t*Me.RAD2DEG},isPowerOfTwo:function(t){return(t&t-1)==0&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){let s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,c*h,c*d,a*l);break;case"YZY":t.set(c*d,a*u,c*h,a*l);break;case"ZXZ":t.set(c*h,c*d,a*u,a*l);break;case"XZX":t.set(a*u,c*g,c*f,a*l);break;case"YXY":t.set(c*f,a*u,c*g,a*l);break;case"ZYZ":t.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}},ne=class{constructor(e=0,n=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}},bt=class{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return new this.constructor().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],v=r[0],x=r[3],m=r[6],p=r[1],R=r[4],I=r[7],D=r[2],M=r[5],N=r[8];return s[0]=o*v+a*p+c*D,s[3]=o*x+a*R+c*M,s[6]=o*m+a*I+c*N,s[1]=l*v+u*p+h*D,s[4]=l*x+u*R+h*M,s[7]=l*m+u*I+h*N,s[2]=d*v+f*p+g*D,s[5]=d*x+f*R+g*M,s[8]=d*m+f*I+g*N,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return n*o*u-n*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,g=n*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*c)*v,e[5]=(r*s-a*n)*v,e[6]=f*v,e[7]=(i*c-l*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).copy(this).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){let n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],u=r[7];return r[0]=n*s+i*c,r[3]=n*o+i*l,r[6]=n*a+i*u,r[1]=-i*s+n*c,r[4]=-i*o+n*l,r[7]=-i*a+n*u,this}translate(e,n){let i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}},pi,mi={getDataURL:function(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{pi===void 0&&(pi=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),pi.width=t.width,pi.height=t.height;let n=pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=pi}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}},Ch=0;function Ue(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=lt,i=lt,r=Je,s=Un,o=It,a=fo,c=1,l=di){Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Me.generateUUID(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.version=0,this.onUpdate=null}Ue.DEFAULT_IMAGE=void 0;Ue.DEFAULT_MAPPING=Ga;Ue.prototype=Object.assign(Object.create(_n.prototype),{constructor:Ue,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=Me.generateUUID()),!e&&t.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(yo(i[s].image)):r.push(yo(i[s]))}else r=yo(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return e||(t.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(this.mapping!==Ga)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zn:t.x=t.x-Math.floor(t.x);break;case lt:t.x=t.x<0?0:1;break;case mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zn:t.y=t.y-Math.floor(t.y);break;case lt:t.y=t.y<0?0:1;break;case mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}});Object.defineProperty(Ue.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function yo(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?mi.getDataURL(t):t.data?{data:Array.prototype.slice.call(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ne=class{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,o=.01,a=.1,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],v=c[2],x=c[6],m=c[10];if(Math.abs(u-d)<o&&Math.abs(h-v)<o&&Math.abs(g-x)<o){if(Math.abs(u+d)<a&&Math.abs(h+v)<a&&Math.abs(g+x)<a&&Math.abs(l+f+m-3)<a)return this.set(1,0,0,0),this;n=Math.PI;let R=(l+1)/2,I=(f+1)/2,D=(m+1)/2,M=(u+d)/4,N=(h+v)/4,$=(g+x)/4;return R>I&&R>D?R<o?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(R),r=M/i,s=N/i):I>D?I<o?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(I),i=M/r,s=$/r):D<o?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=N/s,r=$/s),this.set(i,r,s,n),this}let p=Math.sqrt((x-g)*(x-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(p)<.001&&(p=1),this.x=(x-g)/p,this.y=(h-v)/p,this.z=(d-u)/p,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}},gi=class extends _n{constructor(e,n,i){super();Object.defineProperty(this,"isWebGLRenderTarget",{value:!0}),this.width=e,this.height=n,this.scissor=new Ne(0,0,e,n),this.scissorTest=!1,this.viewport=new Ne(0,0,e,n),i=i||{},this.texture=new Ue(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=n,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Je,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setSize(e,n){(this.width!==e||this.height!==n)&&(this.width=e,this.height=n,this.texture.image.width=e,this.texture.image.height=n,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};var mt=class{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=e,this._y=n,this._z=i,this._w=r}static slerp(e,n,i,r){return i.copy(e).slerp(n,r)}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(h!==v||c!==d||l!==f||u!==g){let x=1-a,m=c*d+l*f+u*g+h*v,p=m>=0?1:-1,R=1-m*m;if(R>Number.EPSILON){let D=Math.sqrt(R),M=Math.atan2(D,m*p);x=Math.sin(x*M)/D,a=Math.sin(a*M)/D}let I=a*p;if(c=c*x+d*I,l=l*x+f*I,u=u*x+g*I,h=h*x+v*I,x===1-a){let D=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=D,l*=D,u*=D,h*=D}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[n]=a*g+u*h+c*f-l*d,e[n+1]=c*g+u*d+l*h-a*f,e[n+2]=l*g+u*f+a*d-c*h,e[n+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=1e-6,r=e.dot(n)+1;return r<i?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me.clamp(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,n)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-n;return this._w=f*o+n*this._w,this._x=f*i+n*this._x,this._y=f*r+n*this._y,this._z=f*s+n*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-n)*u)/l,d=Math.sin(n*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}},L=class{constructor(e=0,n=0,i=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,n)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(oc.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(oc.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*n+o*r-a*i,u=c*i+a*n-s*r,h=c*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=l*c+d*-s+u*-a-h*-o,this.y=u*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,n)):this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xo.copy(this).projectOnVector(e),this.sub(xo)}reflect(e){return this.sub(xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Me.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}},xo=new L,oc=new mt,gt=class{constructor(e,n){Object.defineProperty(this,"isBox3",{value:!0}),this.min=e!==void 0?e:new L(Infinity,Infinity,Infinity),this.max=n!==void 0?n:new L(-Infinity,-Infinity,-Infinity)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=Infinity,i=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.length;c<l;c+=3){let u=e[c],h=e[c+1],d=e[c+2];u<n&&(n=u),h<i&&(i=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=Infinity,i=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.count;c<l;c++){let u=e.getX(c),h=e.getY(c),d=e.getZ(c);u<n&&(n=u),h<i&&(i=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=xr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new L),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new L),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let n=e.geometry;n!==void 0&&(n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox),bo.applyMatrix4(e.matrixWorld),this.union(bo));let i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),n=new L),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xr),xr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),os.subVectors(this.max,_r),vi.subVectors(e.a,_r),yi.subVectors(e.b,_r),xi.subVectors(e.c,_r),bn.subVectors(yi,vi),wn.subVectors(xi,yi),Gn.subVectors(vi,xi);let n=[0,-bn.z,bn.y,0,-wn.z,wn.y,0,-Gn.z,Gn.y,bn.z,0,-bn.x,wn.z,0,-wn.x,Gn.z,0,-Gn.x,-bn.y,bn.x,0,-wn.y,wn.x,0,-Gn.y,Gn.x,0];return!_o(n,vi,yi,xi,os)||(n=[1,0,0,0,1,0,0,0,1],!_o(n,vi,yi,xi,os))?!1:(as.crossVectors(bn,wn),n=[as.x,as.y,as.z],_o(n,vi,yi,xi,os))}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),n=new L),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return xr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(xr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};function _o(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){kn.fromArray(t,s);let a=r.x*Math.abs(kn.x)+r.y*Math.abs(kn.y)+r.z*Math.abs(kn.z),c=e.dot(kn),l=n.dot(kn),u=i.dot(kn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var rn=[new L,new L,new L,new L,new L,new L,new L,new L],xr=new L,bo=new gt,vi=new L,yi=new L,xi=new L,bn=new L,wn=new L,Gn=new L,_r=new L,os=new L,as=new L,kn=new L,Rh=new gt,Gt=class{constructor(e,n){this.center=e!==void 0?e:new L,this.radius=n!==void 0?n:-1}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):Rh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),n=new L),n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new gt),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}},sn=new L,wo=new L,cs=new L,Mn=new L,Mo=new L,ls=new L,So=new L,_i=class{constructor(e,n){this.origin=e!==void 0?e:new L,this.direction=n!==void 0?n:new L(0,0,-1)}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n===void 0&&(console.warn("THREE.Ray: .at() target is now required"),n=new L),n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),n=new L),n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=sn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(sn.copy(this.direction).multiplyScalar(n).add(this.origin),sn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){wo.copy(e).add(n).multiplyScalar(.5),cs.copy(n).sub(e).normalize(),Mn.copy(this.origin).sub(wo);let s=e.distanceTo(n)*.5,o=-this.direction.dot(cs),a=Mn.dot(this.direction),c=-Mn.dot(cs),l=Mn.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){let v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(cs).multiplyScalar(d).add(wo),f}intersectSphere(e,n){sn.subVectors(e.center,this.origin);let i=sn.dot(this.direction),r=sn.dot(sn)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,n,i,r,s){Mo.subVectors(n,e),ls.subVectors(i,e),So.crossVectors(Mo,ls);let o=this.direction.dot(So),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,e);let c=a*this.direction.dot(ls.crossVectors(Mn,ls));if(c<0)return null;let l=a*this.direction.dot(Mo.cross(Mn));if(l<0||c+l>o)return null;let u=-a*Mn.dot(So);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}},Se=class{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l,u,h,d,f,g,v,x){let m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),o=1/bi.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,v=a*h;n[0]=c*u,n[4]=-c*h,n[8]=l,n[1]=f+g*l,n[5]=d-v*l,n[9]=-a*c,n[2]=v-d*l,n[6]=g+f*l,n[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=l*u,v=l*h;n[0]=d+v*a,n[4]=g*a-f,n[8]=o*l,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=f*a-g,n[6]=v+d*a,n[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=l*u,v=l*h;n[0]=d-v*a,n[4]=-o*h,n[8]=g+f*a,n[1]=f+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,v=a*h;n[0]=c*u,n[4]=g*l-f,n[8]=d*l+v,n[1]=c*h,n[5]=v*l+d,n[9]=f*l-g,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,v=a*l;n[0]=c*u,n[4]=v-d*h,n[8]=g*h+f,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=f*h+g,n[10]=d-v*h}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,v=a*l;n[0]=c*u,n[4]=-h,n[8]=l*u,n[1]=d*h+v,n[5]=o*u,n[9]=f*h-g,n[2]=g*h-f,n[6]=a*u,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ph,e,Ih)}lookAt(e,n,i){let r=this.elements;return wt.subVectors(e,n),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),Sn.crossVectors(i,wt),Sn.lengthSq()===0&&(Math.abs(i.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),Sn.crossVectors(i,wt)),Sn.normalize(),us.crossVectors(wt,Sn),r[0]=Sn.x,r[4]=us.x,r[8]=wt.x,r[1]=Sn.y,r[5]=us.y,r[9]=wt.y,r[2]=Sn.z,r[6]=us.z,r[10]=wt.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,n)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],v=i[6],x=i[10],m=i[14],p=i[3],R=i[7],I=i[11],D=i[15],M=r[0],N=r[4],$=r[8],H=r[12],W=r[1],j=r[5],Q=r[9],X=r[13],z=r[2],G=r[6],Y=r[10],ie=r[14],ae=r[3],le=r[7],ge=r[11],fe=r[15];return s[0]=o*M+a*W+c*z+l*ae,s[4]=o*N+a*j+c*G+l*le,s[8]=o*$+a*Q+c*Y+l*ge,s[12]=o*H+a*X+c*ie+l*fe,s[1]=u*M+h*W+d*z+f*ae,s[5]=u*N+h*j+d*G+f*le,s[9]=u*$+h*Q+d*Y+f*ge,s[13]=u*H+h*X+d*ie+f*fe,s[2]=g*M+v*W+x*z+m*ae,s[6]=g*N+v*j+x*G+m*le,s[10]=g*$+v*Q+x*Y+m*ge,s[14]=g*H+v*X+x*ie+m*fe,s[3]=p*M+R*W+I*z+D*ae,s[7]=p*N+R*j+I*G+D*le,s[11]=p*$+R*Q+I*Y+D*ge,s[15]=p*H+R*X+I*ie+D*fe,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],x=e[11],m=e[15];return g*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*f-i*c*f)+v*(+n*c*f-n*l*d+s*o*d-r*o*f+r*l*u-s*c*u)+x*(+n*l*h-n*a*f-s*o*h+i*o*f+s*a*u-i*l*u)+m*(-r*a*u-n*c*h+n*a*d+r*o*h-i*o*d+i*c*u)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],x=e[14],m=e[15],p=h*x*l-v*d*l+v*c*f-a*x*f-h*c*m+a*d*m,R=g*d*l-u*x*l-g*c*f+o*x*f+u*c*m-o*d*m,I=u*v*l-g*h*l+g*a*f-o*v*f-u*a*m+o*h*m,D=g*h*c-u*v*c-g*a*d+o*v*d+u*a*x-o*h*x,M=n*p+i*R+r*I+s*D;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/M;return e[0]=p*N,e[1]=(v*d*s-h*x*s-v*r*f+i*x*f+h*r*m-i*d*m)*N,e[2]=(a*x*s-v*c*s+v*r*l-i*x*l-a*r*m+i*c*m)*N,e[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*f-i*c*f)*N,e[4]=R*N,e[5]=(u*x*s-g*d*s+g*r*f-n*x*f-u*r*m+n*d*m)*N,e[6]=(g*c*s-o*x*s-g*r*l+n*x*l+o*r*m-n*c*m)*N,e[7]=(o*d*s-u*c*s+u*r*l-n*d*l-o*r*f+n*c*f)*N,e[8]=I*N,e[9]=(g*h*s-u*v*s-g*i*f+n*v*f+u*i*m-n*h*m)*N,e[10]=(o*v*s-g*a*s+g*i*l-n*v*l-o*i*m+n*a*m)*N,e[11]=(u*a*s-o*h*s-u*i*l+n*h*l+o*i*f-n*a*f)*N,e[12]=D*N,e[13]=(u*v*r-g*h*r+g*i*d-n*v*d-u*i*x+n*h*x)*N,e[14]=(g*a*r-o*v*r-g*i*c+n*v*c+o*i*x-n*a*x)*N,e[15]=(o*h*r-u*a*r+u*i*c-n*h*c-o*i*d+n*a*d)*N,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i){return this.set(1,n,i,0,e,1,i,0,e,n,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,g=s*h,v=o*u,x=o*h,m=a*h,p=c*l,R=c*u,I=c*h,D=i.x,M=i.y,N=i.z;return r[0]=(1-(v+m))*D,r[1]=(f+I)*D,r[2]=(g-R)*D,r[3]=0,r[4]=(f-I)*M,r[5]=(1-(d+m))*M,r[6]=(x+p)*M,r[7]=0,r[8]=(g+R)*N,r[9]=(x-p)*N,r[10]=(1-(d+v))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=bi.set(r[0],r[1],r[2]).length(),o=bi.set(r[4],r[5],r[6]).length(),a=bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dt.copy(this);let l=1/s,u=1/o,h=1/a;return Dt.elements[0]*=l,Dt.elements[1]*=l,Dt.elements[2]*=l,Dt.elements[4]*=u,Dt.elements[5]*=u,Dt.elements[6]*=u,Dt.elements[8]*=h,Dt.elements[9]*=h,Dt.elements[10]*=h,n.setFromRotationMatrix(Dt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,c=2*s/(n-e),l=2*s/(i-r),u=(n+e)/(n-e),h=(i+r)/(i-r),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){let a=this.elements,c=1/(n-e),l=1/(i-r),u=1/(o-s),h=(n+e)*c,d=(i+r)*l,f=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},bi=new L,Dt=new Se,Ph=new L(0,0,0),Ih=new L(1,1,1),Sn=new L,us=new L,wt=new L,wi=class{constructor(e=0,n=0,i=0,r=wi.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n,i){let r=Me.clamp,s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],h=s[9],d=s[2],f=s[6],g=s[10];switch(n=n||this._order,n){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ac,n,i)}setFromVector3(e,n){return this.set(e.x,e.y,e.z,n||this._order)}reorder(e){return cc.setFromEuler(this),this.setFromQuaternion(cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new L(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};wi.DefaultOrder="XYZ";wi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var ac=new Se,cc=new mt,To=class{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}},Dh=0,lc=new L,Mi=new mt,on=new Se,hs=new L,br=new L,Oh=new L,Fh=new mt,uc=new L(1,0,0),hc=new L(0,1,0),dc=new L(0,0,1),Bh={type:"added"},fc={type:"removed"};function ve(){Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Me.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DefaultUp.clone();let t=new L,e=new wi,n=new mt,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Se},normalMatrix:{value:new bt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=ve.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}ve.DefaultUp=new L(0,1,0);ve.DefaultMatrixAutoUpdate=!0;ve.prototype=Object.assign(Object.create(_n.prototype),{constructor:ve,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.multiply(Mi),this},rotateOnWorldAxis:function(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.premultiply(Mi),this},rotateX:function(t){return this.rotateOnAxis(uc,t)},rotateY:function(t){return this.rotateOnAxis(hc,t)},rotateZ:function(t){return this.rotateOnAxis(dc,t)},translateOnAxis:function(t,e){return lc.copy(t).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(e)),this},translateX:function(t){return this.translateOnAxis(uc,t)},translateY:function(t){return this.translateOnAxis(hc,t)},translateZ:function(t){return this.translateOnAxis(dc,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(on.copy(this.matrixWorld).invert())},lookAt:function(t,e,n){t.isVector3?hs.copy(t):hs.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(br,hs,this.up):on.lookAt(hs,br,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),Mi.setFromRotationMatrix(on),this.quaternion.premultiply(Mi.invert()))},add:function(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fc)),this},clear:function(){for(let t=0;t<this.children.length;t++){let e=this.children[t];e.parent=null,e.dispatchEvent(fc)}return this.children.length=0,this},attach:function(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}},getWorldPosition:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new L),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new mt),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,Oh),t},getWorldScale:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new L),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Fh,t),t},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new L),this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)},traverseVisible:function(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)},traverseAncestors:function(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)},updateWorldMatrix:function(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){let u=a[c];r(t.shapes,u)}else r(t.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(t.materials,this.material[a]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];i.animations.push(r(t.animations,a))}}if(e){let o=s(t.geometries),a=s(t.materials),c=s(t.textures),l=s(t.images),u=s(t.shapes),h=s(t.skeletons),d=s(t.animations);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d)}return n.object=i,n;function s(o){let a=[];for(let c in o){let l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(t){return new this.constructor().copy(this,t)},copy:function(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}});var Eo=new L,Nh=new L,zh=new bt,kt=class{constructor(e,n){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=e!==void 0?e:new L(1,0,0),this.constant=n!==void 0?n:0}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=Eo.subVectors(i,n).cross(Nh.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}clone(){return new this.constructor().copy(this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),n=new L),n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){n===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),n=new L);let i=e.delta(Eo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):void 0;let s=-(e.start.dot(this.normal)+this.constant)/r;if(!(s<0||s>1))return n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new L),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||zh.getNormalMatrix(e),r=this.coplanarPoint(Eo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}},Ot=new L,an=new L,Ao=new L,cn=new L,Si=new L,Ti=new L,pc=new L,Lo=new L,Co=new L,Ro=new L,st=class{constructor(e,n,i){this.a=e!==void 0?e:new L,this.b=n!==void 0?n:new L,this.c=i!==void 0?i:new L}static getNormal(e,n,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new L),r.subVectors(i,n),Ot.subVectors(e,n),r.cross(Ot);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ot.subVectors(r,n),an.subVectors(i,n),Ao.subVectors(e,n);let o=Ot.dot(Ot),a=Ot.dot(an),c=Ot.dot(Ao),l=an.dot(an),u=an.dot(Ao),h=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new L),h===0)return s.set(-2,-1,-1);let d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,cn),cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getUV(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,cn),c.set(0,0),c.addScaledVector(s,cn.x),c.addScaledVector(o,cn.y),c.addScaledVector(a,cn.z),c}static isFrontFacing(e,n,i,r){return Ot.subVectors(i,n),an.subVectors(e,n),Ot.cross(an).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Ot.cross(an).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new L),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return st.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new kt),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return st.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return st.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return st.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return st.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),n=new L);let i=this.a,r=this.b,s=this.c,o,a;Si.subVectors(r,i),Ti.subVectors(s,i),Lo.subVectors(e,i);let c=Si.dot(Lo),l=Ti.dot(Lo);if(c<=0&&l<=0)return n.copy(i);Co.subVectors(e,r);let u=Si.dot(Co),h=Ti.dot(Co);if(u>=0&&h<=u)return n.copy(r);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(Si,o);Ro.subVectors(e,s);let f=Si.dot(Ro),g=Ti.dot(Ro);if(g>=0&&f<=g)return n.copy(s);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),n.copy(i).addScaledVector(Ti,a);let x=u*g-f*h;if(x<=0&&h-u>=0&&f-g>=0)return pc.subVectors(s,r),a=(h-u)/(h-u+(f-g)),n.copy(r).addScaledVector(pc,a);let m=1/(x+v+d);return o=v*m,a=d*m,n.copy(i).addScaledVector(Si,o).addScaledVector(Ti,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ft={h:0,s:0,l:0},ds={h:0,s:0,l:0};function Po(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Io(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Do(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var pe=class{constructor(e,n,i){return Object.defineProperty(this,"isColor",{value:!0}),n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,n,i){return this.r=e,this.g=n,this.b=i,this}setHSL(e,n,i){if(e=Me.euclideanModulo(e,1),n=Me.clamp(n,0,1),i=Me.clamp(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Po(s,r,e+1/3),this.g=Po(s,r,e),this.b=Po(s,r,e-1/3)}return this}setStyle(e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let n=mc[e];return n!==void 0?this.setHex(n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,n=2){return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}copyLinearToGamma(e,n=2){let i=n>0?1/n:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Io(e.r),this.g=Io(e.g),this.b=Io(e.b),this}copyLinearToSRGB(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let n=this.r,i=this.g,r=this.b,s=Math.max(n,i,r),o=Math.min(n,i,r),a,c,l=(o+s)/2;if(o===s)a=0,c=0;else{let u=s-o;switch(c=l<=.5?u/(s+o):u/(2-s-o),s){case n:a=(i-r)/u+(i<r?6:0);break;case i:a=(r-n)/u+2;break;case r:a=(n-i)/u+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,n,i){return this.getHSL(Ft),Ft.h+=e,Ft.s+=n,Ft.l+=i,this.setHSL(Ft.h,Ft.s,Ft.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ft),e.getHSL(ds);let i=Me.lerp(Ft.h,ds.h,n),r=Me.lerp(Ft.s,ds.s,n),s=Me.lerp(Ft.l,ds.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};pe.NAMES=mc;pe.prototype.r=1;pe.prototype.g=1;pe.prototype.b=1;var gc=class{constructor(e,n,i,r,s,o=0){this.a=e,this.b=n,this.c=i,this.normal=r&&r.isVector3?r:new L,this.vertexNormals=Array.isArray(r)?r:[],this.color=s&&s.isColor?s:new pe,this.vertexColors=Array.isArray(s)?s:[],this.materialIndex=o}clone(){return new this.constructor().copy(this)}copy(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let n=0,i=e.vertexNormals.length;n<i;n++)this.vertexNormals[n]=e.vertexNormals[n].clone();for(let n=0,i=e.vertexColors.length;n<i;n++)this.vertexColors[n]=e.vertexColors[n].clone();return this}},Uh=0;function be(){Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Me.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=fr,this.side=vn,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ua,this.blendDst=Ha,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}be.prototype=Object.assign(Object.create(_n.prototype),{constructor:be,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Da;continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}},toJSON:function(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==vn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(e){let r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(be.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function ot(t){be.call(this),this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t)}ot.prototype=Object.create(be.prototype);ot.prototype.constructor=ot;ot.prototype.isMeshBasicMaterial=!0;ot.prototype.copy=function(t){return be.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this};var He=new L,fs=new ne;function Ee(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=rs,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(Ee.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(Ee.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new pe),e[n++]=s.r,e[n++]=s.g,e[n++]=s.b}return this},copyVector2sArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new ne),e[n++]=s.x,e[n++]=s.y}return this},copyVector3sArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new L),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z}return this},copyVector4sArray:function(t){let e=this.array,n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Ne),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z,e[n++]=s.w}return this},applyMatrix3:function(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fs.fromBufferAttribute(this,e),fs.applyMatrix3(t),this.setXY(e,fs.x,fs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this},applyMatrix4:function(t){for(let e=0,n=this.count;e<n;e++)He.x=this.getX(e),He.y=this.getY(e),He.z=this.getZ(e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this},applyNormalMatrix:function(t){for(let e=0,n=this.count;e<n;e++)He.x=this.getX(e),He.y=this.getY(e),He.z=this.getZ(e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this},transformDirection:function(t){for(let e=0,n=this.count;e<n;e++)He.x=this.getX(e),He.y=this.getY(e),He.z=this.getZ(e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this},set:function(t,e=0){return this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function Oo(t,e,n){Ee.call(this,new Int8Array(t),e,n)}Oo.prototype=Object.create(Ee.prototype);Oo.prototype.constructor=Oo;function Fo(t,e,n){Ee.call(this,new Uint8Array(t),e,n)}Fo.prototype=Object.create(Ee.prototype);Fo.prototype.constructor=Fo;function Bo(t,e,n){Ee.call(this,new Uint8ClampedArray(t),e,n)}Bo.prototype=Object.create(Ee.prototype);Bo.prototype.constructor=Bo;function No(t,e,n){Ee.call(this,new Int16Array(t),e,n)}No.prototype=Object.create(Ee.prototype);No.prototype.constructor=No;function wr(t,e,n){Ee.call(this,new Uint16Array(t),e,n)}wr.prototype=Object.create(Ee.prototype);wr.prototype.constructor=wr;function zo(t,e,n){Ee.call(this,new Int32Array(t),e,n)}zo.prototype=Object.create(Ee.prototype);zo.prototype.constructor=zo;function Mr(t,e,n){Ee.call(this,new Uint32Array(t),e,n)}Mr.prototype=Object.create(Ee.prototype);Mr.prototype.constructor=Mr;function ps(t,e,n){Ee.call(this,new Uint16Array(t),e,n)}ps.prototype=Object.create(Ee.prototype);ps.prototype.constructor=ps;ps.prototype.isFloat16BufferAttribute=!0;function We(t,e,n){Ee.call(this,new Float32Array(t),e,n)}We.prototype=Object.create(Ee.prototype);We.prototype.constructor=We;function Uo(t,e,n){Ee.call(this,new Float64Array(t),e,n)}Uo.prototype=Object.create(Ee.prototype);Uo.prototype.constructor=Uo;function vc(t){if(t.length===0)return-Infinity;let e=t[0];for(let n=1,i=t.length;n<i;++n)t[n]>e&&(e=t[n]);return e}var Hh={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray!="undefined"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ms(t,e){return new Hh[t](e)}var Gh=0,Vt=new Se,Ho=new ve,Ei=new L,Mt=new gt,Sr=new gt,tt=new L;function ze(){Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Me.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}ze.prototype=Object.assign(Object.create(_n.prototype),{constructor:ze,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){return Array.isArray(t)?this.index=new(vc(t)>65535?Mr:wr)(t,1):this.index=t,this},getAttribute:function(t){return this.attributes[t]},setAttribute:function(t,e){return this.attributes[t]=e,this},deleteAttribute:function(t){return delete this.attributes[t],this},hasAttribute:function(t){return this.attributes[t]!==void 0},addGroup:function(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix4:function(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(t){return Vt.makeRotationX(t),this.applyMatrix4(Vt),this},rotateY:function(t){return Vt.makeRotationY(t),this.applyMatrix4(Vt),this},rotateZ:function(t){return Vt.makeRotationZ(t),this.applyMatrix4(Vt),this},translate:function(t,e,n){return Vt.makeTranslation(t,e,n),this.applyMatrix4(Vt),this},scale:function(t,e,n){return Vt.makeScale(t,e,n),this.applyMatrix4(Vt),this},lookAt:function(t){return Ho.lookAt(t),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this},setFromPoints:function(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new We(e,3)),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new gt);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-Infinity,-Infinity,-Infinity),new L(Infinity,Infinity,Infinity));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Mt.setFromBufferAttribute(r),this.morphTargetsRelative?(tt.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(tt),tt.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(tt)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new Gt);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,Infinity);return}if(t){let n=this.boundingSphere.center;if(Mt.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){let o=e[r];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(tt.addVectors(Mt.min,Sr.min),Mt.expandByPoint(tt),tt.addVectors(Mt.max,Sr.max),Mt.expandByPoint(tt)):(Mt.expandByPoint(Sr.min),Mt.expandByPoint(Sr.max))}Mt.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)tt.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(tt));if(e)for(let r=0,s=e.length;r<s;r++){let o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)tt.fromBufferAttribute(o,c),a&&(Ei.fromBufferAttribute(t,c),tt.add(Ei)),i=Math.max(i,n.distanceToSquared(tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeTangents:function(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,s=e.uv.array,o=i.length/3;e.tangent===void 0&&this.setAttribute("tangent",new Ee(new Float32Array(4*o),4));let a=e.tangent.array,c=[],l=[];for(let H=0;H<o;H++)c[H]=new L,l[H]=new L;let u=new L,h=new L,d=new L,f=new ne,g=new ne,v=new ne,x=new L,m=new L;function p(H,W,j){u.fromArray(i,H*3),h.fromArray(i,W*3),d.fromArray(i,j*3),f.fromArray(s,H*2),g.fromArray(s,W*2),v.fromArray(s,j*2),h.sub(u),d.sub(u),g.sub(f),v.sub(f);let Q=1/(g.x*v.y-v.x*g.y);!isFinite(Q)||(x.copy(h).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(Q),m.copy(d).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(Q),c[H].add(x),c[W].add(x),c[j].add(x),l[H].add(m),l[W].add(m),l[j].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:n.length}]);for(let H=0,W=R.length;H<W;++H){let j=R[H],Q=j.start,X=j.count;for(let z=Q,G=Q+X;z<G;z+=3)p(n[z+0],n[z+1],n[z+2])}let I=new L,D=new L,M=new L,N=new L;function $(H){M.fromArray(r,H*3),N.copy(M);let W=c[H];I.copy(W),I.sub(M.multiplyScalar(M.dot(W))).normalize(),D.crossVectors(N,W);let Q=D.dot(l[H])<0?-1:1;a[H*4]=I.x,a[H*4+1]=I.y,a[H*4+2]=I.z,a[H*4+3]=Q}for(let H=0,W=R.length;H<W;++H){let j=R[H],Q=j.start,X=j.count;for(let z=Q,G=Q+X;z<G;z+=3)$(n[z+0]),$(n[z+1]),$(n[z+2])}},computeVertexNormals:function(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new L,r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,u=new L;if(t)for(let h=0,d=t.count;h<d;h+=3){let f=t.getX(h+0),g=t.getX(h+1),v=t.getX(h+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),o.fromBufferAttribute(n,f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),o.add(l),a.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(t.attributes[i]===void 0)continue;let s=n[i].array,o=t.attributes[i],a=o.array,c=o.itemSize*e,l=Math.min(a.length,s.length-c);for(let u=0,h=c;u<l;u++,h++)s[h]=a[u]}return this},normalizeNormals:function(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tt.fromBufferAttribute(t,e),tt.normalize(),t.setXYZ(e,tt.x,tt.y,tt.z)},toNonIndexed:function(){function t(o,a){let c=o.array,l=o.itemSize,u=o.normalized,h=new c.constructor(a.length*l),d=0,f=0;for(let g=0,v=a.length;g<v;g++){d=a[g]*l;for(let x=0;x<l;x++)h[f++]=c[d++]}return new Ee(h,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new ze,n=this.index.array,i=this.attributes;for(let o in i){let a=i[o],c=t(a,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let a=[],c=r[o];for(let l=0,u=c.length;l<u;l++){let h=c[l],d=t(h,n);a.push(d)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){let t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let a in n){let c=n[a],l=c.toJSON(t.data);c.name!==""&&(l.name=c.name),t.data.attributes[a]=l}let i={},r=!1;for(let a in this.morphAttributes){let c=this.morphAttributes[a],l=[];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=d.toJSON(t.data);d.name!==""&&(f.name=d.name),l.push(f)}l.length>0&&(i[a]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t},clone:function(){return new ze().copy(this)},copy:function(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let l=i[c];this.setAttribute(c,l.clone(e))}let r=t.morphAttributes;for(let c in r){let l=[],u=r[c];for(let h=0,d=u.length;h<d;h++)l.push(u[h].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,l=s.length;c<l;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var yc=new Se,Ai=new _i,Go=new Gt,Tn=new L,En=new L,An=new L,ko=new L,Vo=new L,Wo=new L,gs=new L,vs=new L,ys=new L,xs=new ne,_s=new ne,bs=new ne,jo=new L,ws=new L;function Ge(t=new ze,e=new ot){ve.call(this),this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}Ge.prototype=Object.assign(Object.create(ve.prototype),{constructor:Ge,isMesh:!0,copy:function(t){return ve.prototype.copy.call(this,t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let e=t.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(r),t.ray.intersectsSphere(Go)===!1)||(yc.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(yc),n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){let o=n.index,a=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,u=n.attributes.uv,h=n.attributes.uv2,d=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let g=0,v=d.length;g<v;g++){let x=d[g],m=i[x.materialIndex],p=Math.max(x.start,f.start),R=Math.min(x.start+x.count,f.start+f.count);for(let I=p,D=R;I<D;I+=3){let M=o.getX(I),N=o.getX(I+1),$=o.getX(I+2);s=Ms(this,m,t,Ai,a,c,l,u,h,M,N,$),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let x=g,m=v;x<m;x+=3){let p=o.getX(x),R=o.getX(x+1),I=o.getX(x+2);s=Ms(this,i,t,Ai,a,c,l,u,h,p,R,I),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let g=0,v=d.length;g<v;g++){let x=d[g],m=i[x.materialIndex],p=Math.max(x.start,f.start),R=Math.min(x.start+x.count,f.start+f.count);for(let I=p,D=R;I<D;I+=3){let M=I,N=I+1,$=I+2;s=Ms(this,m,t,Ai,a,c,l,u,h,M,N,$),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let x=g,m=v;x<m;x+=3){let p=x,R=x+1,I=x+2;s=Ms(this,i,t,Ai,a,c,l,u,h,p,R,I),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}});function kh(t,e,n,i,r,s,o,a){let c;if(e.side===et?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==Nn,a),c===null)return null;ws.copy(a),ws.applyMatrix4(t.matrixWorld);let l=n.ray.origin.distanceTo(ws);return l<n.near||l>n.far?null:{distance:l,point:ws.clone(),object:t}}function Ms(t,e,n,i,r,s,o,a,c,l,u,h){Tn.fromBufferAttribute(r,l),En.fromBufferAttribute(r,u),An.fromBufferAttribute(r,h);let d=t.morphTargetInfluences;if(e.morphTargets&&s&&d){gs.set(0,0,0),vs.set(0,0,0),ys.set(0,0,0);for(let g=0,v=s.length;g<v;g++){let x=d[g],m=s[g];x!==0&&(ko.fromBufferAttribute(m,l),Vo.fromBufferAttribute(m,u),Wo.fromBufferAttribute(m,h),o?(gs.addScaledVector(ko,x),vs.addScaledVector(Vo,x),ys.addScaledVector(Wo,x)):(gs.addScaledVector(ko.sub(Tn),x),vs.addScaledVector(Vo.sub(En),x),ys.addScaledVector(Wo.sub(An),x)))}Tn.add(gs),En.add(vs),An.add(ys)}t.isSkinnedMesh&&(t.boneTransform(l,Tn),t.boneTransform(u,En),t.boneTransform(h,An));let f=kh(t,e,n,i,Tn,En,An,jo);if(f){a&&(xs.fromBufferAttribute(a,l),_s.fromBufferAttribute(a,u),bs.fromBufferAttribute(a,h),f.uv=st.getUV(jo,Tn,En,An,xs,_s,bs,new ne)),c&&(xs.fromBufferAttribute(c,l),_s.fromBufferAttribute(c,u),bs.fromBufferAttribute(c,h),f.uv2=st.getUV(jo,Tn,En,An,xs,_s,bs,new ne));let g=new gc(l,u,h);st.getNormal(Tn,En,An,g.normal),f.face=g}return f}var Li=class extends ze{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(h,2));function g(v,x,m,p,R,I,D,M,N,$,H){let W=I/N,j=D/$,Q=I/2,X=D/2,z=M/2,G=N+1,Y=$+1,ie=0,ae=0,le=new L;for(let ge=0;ge<Y;ge++){let fe=ge*j-X;for(let de=0;de<G;de++){let Te=de*W-Q;le[v]=Te*p,le[x]=fe*R,le[m]=z,l.push(le.x,le.y,le.z),le[v]=0,le[x]=0,le[m]=M>0?1:-1,u.push(le.x,le.y,le.z),h.push(de/N),h.push(1-ge/$),ie+=1}}for(let ge=0;ge<$;ge++)for(let fe=0;fe<N;fe++){let de=d+fe+G*ge,Te=d+fe+G*(ge+1),Fe=d+(fe+1)+G*(ge+1),te=d+(fe+1)+G*ge;c.push(de,Te,te),c.push(Te,Fe,te),ae+=6}a.addGroup(f,ae,H),f+=ae,d+=ie}}};function Ci(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function at(t){let e={};for(let n=0;n<t.length;n++){let i=Ci(t[n]);for(let r in i)e[r]=i[r]}return e}var Vh={clone:Ci,merge:at},Wh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function vt(t){be.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Wh,this.fragmentShader=jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}vt.prototype=Object.create(be.prototype);vt.prototype.constructor=vt;vt.prototype.isShaderMaterial=!0;vt.prototype.copy=function(t){return be.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this};vt.prototype.toJSON=function(t){let e=be.prototype.toJSON.call(this,t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e};function Ln(){ve.call(this),this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se}Ln.prototype=Object.assign(Object.create(ve.prototype),{constructor:Ln,isCamera:!0,copy:function(t,e){return ve.prototype.copy.call(this,t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new L),this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(t){ve.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(t,e){ve.prototype.updateWorldMatrix.call(this,t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function Ye(t=50,e=1,n=.1,i=2e3){Ln.call(this),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Ye.prototype=Object.assign(Object.create(Ln.prototype),{constructor:Ye,isPerspectiveCamera:!0,copy:function(t,e){return Ln.prototype.copy.call(this,t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){let e=.5*this.getFilmHeight()/t;this.fov=Me.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){let t=Math.tan(Me.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/t},getEffectiveFOV:function(){return Me.RAD2DEG*2*Math.atan(Math.tan(Me.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let t=this.near,e=t*Math.tan(Me.DEG2RAD*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*n/c,i*=s.width/a,n*=s.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){let e=ve.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});var Ri=90,Pi=1;function Ii(t,e,n){if(ve.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new Ye(Ri,Pi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);let r=new Ye(Ri,Pi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);let s=new Ye(Ri,Pi,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new L(0,1,0)),this.add(s);let o=new Ye(Ri,Pi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new L(0,-1,0)),this.add(o);let a=new Ye(Ri,Pi,t,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new L(0,0,1)),this.add(a);let c=new Ye(Ri,Pi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c),this.update=function(l,u){this.parent===null&&this.updateMatrixWorld();let h=l.xr.enabled,d=l.getRenderTarget();l.xr.enabled=!1;let f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(u,i),l.setRenderTarget(n,1),l.render(u,r),l.setRenderTarget(n,2),l.render(u,s),l.setRenderTarget(n,3),l.render(u,o),l.setRenderTarget(n,4),l.render(u,a),n.texture.generateMipmaps=f,l.setRenderTarget(n,5),l.render(u,c),l.setRenderTarget(d),l.xr.enabled=h}}Ii.prototype=Object.create(ve.prototype);Ii.prototype.constructor=Ii;function Cn(t,e,n,i,r,s,o,a,c,l){t=t!==void 0?t:[],e=e!==void 0?e:ao,o=o!==void 0?o:nn,Ue.call(this,t,e,n,i,r,s,o,a,c,l),this.flipY=!1,this._needsFlipEnvMap=!0}Cn.prototype=Object.create(Ue.prototype);Cn.prototype.constructor=Cn;Cn.prototype.isCubeTexture=!0;Object.defineProperty(Cn.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}});var xc=class extends gi{constructor(e,n,i){Number.isInteger(n)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),n=i),super(e,e,n),Object.defineProperty(this,"isWebGLCubeRenderTarget",{value:!0}),n=n||{},this.texture=new Cn(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.format=It,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Li(5,5,5),s=new vt({name:"CubemapFromEquirect",uniforms:Ci(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:et,blending:dr});s.uniforms.tEquirect.value=n;let o=new Ge(r,s),a=n.minFilter;return n.minFilter===Un&&(n.minFilter=Je),new Ii(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}};function Di(t,e,n,i,r,s,o,a,c,l,u,h){Ue.call(this,null,s,o,a,c,l,i,r,u,h),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=c!==void 0?c:nt,this.minFilter=l!==void 0?l:nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}Di.prototype=Object.create(Ue.prototype);Di.prototype.constructor=Di;Di.prototype.isDataTexture=!0;var Oi=new Gt,Ss=new L,Tr=class{constructor(e,n,i,r,s,o){this.planes=[e!==void 0?e:new kt,n!==void 0?n:new kt,i!==void 0?i:new kt,r!==void 0?r:new kt,s!==void 0?s:new kt,o!==void 0?o:new kt]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}clone(){return new this.constructor().copy(this)}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],d=i[8],f=i[9],g=i[10],v=i[11],x=i[12],m=i[13],p=i[14],R=i[15];return n[0].setComponents(a-r,h-c,v-d,R-x).normalize(),n[1].setComponents(a+r,h+c,v+d,R+x).normalize(),n[2].setComponents(a+s,h+l,v+f,R+m).normalize(),n[3].setComponents(a-s,h-l,v-f,R-m).normalize(),n[4].setComponents(a-o,h-u,v-g,R-p).normalize(),n[5].setComponents(a+o,h+u,v+g,R+p).normalize(),this}intersectsObject(e){let n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Oi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(Ss.x=r.normal.x>0?e.max.x:e.min.x,Ss.y=r.normal.y>0?e.max.y:e.min.y,Ss.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}};function _c(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function qh(t,e){let n=e.isWebGL2,i=new WeakMap;function r(l,u){let h=l.array,d=l.usage,f=t.createBuffer();t.bindBuffer(u,f),t.bufferData(u,h,d),l.onUploadCallback();let g=5126;return h instanceof Float32Array?g=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?l.isFloat16BufferAttribute?n?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:h instanceof Int16Array?g=5122:h instanceof Uint32Array?g=5125:h instanceof Int32Array?g=5124:h instanceof Int8Array?g=5120:h instanceof Uint8Array&&(g=5121),{buffer:f,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){let d=u.array,f=u.updateRange;t.bindBuffer(h,l),f.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):t.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(t.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}var Ts=class extends ze{constructor(e=1,n=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=n/c,f=[],g=[],v=[],x=[];for(let m=0;m<u;m++){let p=m*d-o;for(let R=0;R<l;R++){let I=R*h-s;g.push(I,-p,0),v.push(0,0,1),x.push(R/a),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let p=0;p<a;p++){let R=p+l*m,I=p+l*(m+1),D=p+1+l*(m+1),M=p+1+l*m;f.push(R,I,M),f.push(I,D,M)}this.setIndex(f),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(v,3)),this.setAttribute("uv",new We(x,2))}},Xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Jh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$h="vec3 transformed = vec3( position );",Qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ed=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,td=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,od=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,ad=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ud=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,hd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sd=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Td=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ld=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Cd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pd=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Id=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Dd=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fd=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Ud=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,kd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xd=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$d=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,ef=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,tf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,nf=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,rf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,sf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,of=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,af=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,lf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,uf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ff=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,vf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,xf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Af=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lf=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Cf=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Rf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Pf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,If=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Df=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Of=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ff=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,kf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,cp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,up=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,dp=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,pp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pe={alphamap_fragment:Xh,alphamap_pars_fragment:Yh,alphatest_fragment:Zh,aomap_fragment:Jh,aomap_pars_fragment:Kh,begin_vertex:$h,beginnormal_vertex:Qh,bsdfs:ed,bumpmap_pars_fragment:td,clipping_planes_fragment:nd,clipping_planes_pars_fragment:id,clipping_planes_pars_vertex:rd,clipping_planes_vertex:sd,color_fragment:od,color_pars_fragment:ad,color_pars_vertex:cd,color_vertex:ld,common:ud,cube_uv_reflection_fragment:hd,defaultnormal_vertex:dd,displacementmap_pars_vertex:fd,displacementmap_vertex:pd,emissivemap_fragment:md,emissivemap_pars_fragment:gd,encodings_fragment:vd,encodings_pars_fragment:yd,envmap_fragment:xd,envmap_common_pars_fragment:_d,envmap_pars_fragment:bd,envmap_pars_vertex:wd,envmap_physical_pars_fragment:Dd,envmap_vertex:Md,fog_vertex:Sd,fog_pars_vertex:Td,fog_fragment:Ed,fog_pars_fragment:Ad,gradientmap_pars_fragment:Ld,lightmap_fragment:Cd,lightmap_pars_fragment:Rd,lights_lambert_vertex:Pd,lights_pars_begin:Id,lights_toon_fragment:Od,lights_toon_pars_fragment:Fd,lights_phong_fragment:Bd,lights_phong_pars_fragment:Nd,lights_physical_fragment:zd,lights_physical_pars_fragment:Ud,lights_fragment_begin:Hd,lights_fragment_maps:Gd,lights_fragment_end:kd,logdepthbuf_fragment:Vd,logdepthbuf_pars_fragment:Wd,logdepthbuf_pars_vertex:jd,logdepthbuf_vertex:qd,map_fragment:Xd,map_pars_fragment:Yd,map_particle_fragment:Zd,map_particle_pars_fragment:Jd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:$d,morphnormal_vertex:Qd,morphtarget_pars_vertex:ef,morphtarget_vertex:tf,normal_fragment_begin:nf,normal_fragment_maps:rf,normalmap_pars_fragment:sf,clearcoat_normal_fragment_begin:of,clearcoat_normal_fragment_maps:af,clearcoat_pars_fragment:cf,packing:lf,premultiplied_alpha_fragment:uf,project_vertex:hf,dithering_fragment:df,dithering_pars_fragment:ff,roughnessmap_fragment:pf,roughnessmap_pars_fragment:mf,shadowmap_pars_fragment:gf,shadowmap_pars_vertex:vf,shadowmap_vertex:yf,shadowmask_pars_fragment:xf,skinbase_vertex:_f,skinning_pars_vertex:bf,skinning_vertex:wf,skinnormal_vertex:Mf,specularmap_fragment:Sf,specularmap_pars_fragment:Tf,tonemapping_fragment:Ef,tonemapping_pars_fragment:Af,transmissionmap_fragment:Lf,transmissionmap_pars_fragment:Cf,uv_pars_fragment:Rf,uv_pars_vertex:Pf,uv_vertex:If,uv2_pars_fragment:Df,uv2_pars_vertex:Of,uv2_vertex:Ff,worldpos_vertex:Bf,background_frag:Nf,background_vert:zf,cube_frag:Uf,cube_vert:Hf,depth_frag:Gf,depth_vert:kf,distanceRGBA_frag:Vf,distanceRGBA_vert:Wf,equirect_frag:jf,equirect_vert:qf,linedashed_frag:Xf,linedashed_vert:Yf,meshbasic_frag:Zf,meshbasic_vert:Jf,meshlambert_frag:Kf,meshlambert_vert:$f,meshmatcap_frag:Qf,meshmatcap_vert:ep,meshtoon_frag:tp,meshtoon_vert:np,meshphong_frag:ip,meshphong_vert:rp,meshphysical_frag:sp,meshphysical_vert:op,normal_frag:ap,normal_vert:cp,points_frag:lp,points_vert:up,shadow_frag:hp,shadow_vert:dp,sprite_frag:fp,sprite_vert:pp},ce={common:{diffuse:{value:new pe(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new bt},uv2Transform:{value:new bt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new bt}},sprite:{diffuse:{value:new pe(15658734)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new bt}}},Wt={basic:{uniforms:at([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:at([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.fog,ce.lights,{emissive:{value:new pe(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:at([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:at([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:at([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new pe(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:at([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:at([ce.points,ce.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:at([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:at([ce.common,ce.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:at([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.normal_vert,fragmentShader:Pe.normal_frag},sprite:{uniforms:at([ce.sprite,ce.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},cube:{uniforms:at([ce.envmap,{opacity:{value:1}}]),vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:at([ce.common,ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:at([ce.lights,ce.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Wt.physical={uniforms:at([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ne(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new pe(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};function mp(t,e,n,i,r){let s=new pe(0),o=0,a,c,l=null,u=0,h=null;function d(g,v,x,m){let p=v.isScene===!0?v.background:null;p&&p.isTexture&&(p=e.get(p));let R=t.xr,I=R.getSession&&R.getSession();I&&I.environmentBlendMode==="additive"&&(p=null),p===null?f(s,o):p&&p.isColor&&(f(p,1),m=!0),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),p&&(p.isCubeTexture||p.isWebGLCubeRenderTarget||p.mapping===lo)?(c===void 0&&(c=new Ge(new Li(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:Ci(Wt.cube.uniforms),vertexShader:Wt.cube.vertexShader,fragmentShader:Wt.cube.fragmentShader,side:et,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,M,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),p.isWebGLCubeRenderTarget&&(p=p.texture),c.material.uniforms.envMap.value=p,c.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(l!==p||u!==p.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,l=p,u=p.version,h=t.toneMapping),g.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new Ge(new Ts(2,2),new vt({name:"BackgroundMaterial",uniforms:Ci(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(l!==p||u!==p.version||h!==t.toneMapping)&&(a.material.needsUpdate=!0,l=p,u=p.version,h=t.toneMapping),g.unshift(a,a.geometry,a.material,0,0,null))}function f(g,v){n.buffers.color.setClear(g.r,g.g,g.b,v,r)}return{getClearColor:function(){return s},setClearColor:function(g,v=1){s.set(g),o=v,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,f(s,o)},render:d}}function gp(t,e,n,i){let r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=v(null),l=c;function u(X,z,G,Y,ie){let ae=!1;if(o){let le=g(Y,G,z);l!==le&&(l=le,d(l.object)),ae=x(Y,ie),ae&&m(Y,ie)}else{let le=z.wireframe===!0;(l.geometry!==Y.id||l.program!==G.id||l.wireframe!==le)&&(l.geometry=Y.id,l.program=G.id,l.wireframe=le,ae=!0)}X.isInstancedMesh===!0&&(ae=!0),ie!==null&&n.update(ie,34963),ae&&(N(X,z,G,Y),ie!==null&&t.bindBuffer(34963,n.get(ie).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function d(X){return i.isWebGL2?t.bindVertexArray(X):s.bindVertexArrayOES(X)}function f(X){return i.isWebGL2?t.deleteVertexArray(X):s.deleteVertexArrayOES(X)}function g(X,z,G){let Y=G.wireframe===!0,ie=a[X.id];ie===void 0&&(ie={},a[X.id]=ie);let ae=ie[z.id];ae===void 0&&(ae={},ie[z.id]=ae);let le=ae[Y];return le===void 0&&(le=v(h()),ae[Y]=le),le}function v(X){let z=[],G=[],Y=[];for(let ie=0;ie<r;ie++)z[ie]=0,G[ie]=0,Y[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:Y,object:X,attributes:{},index:null}}function x(X,z){let G=l.attributes,Y=X.attributes,ie=0;for(let ae in Y){let le=G[ae],ge=Y[ae];if(le===void 0||le.attribute!==ge||le.data!==ge.data)return!0;ie++}return l.attributesNum!==ie||l.index!==z}function m(X,z){let G={},Y=X.attributes,ie=0;for(let ae in Y){let le=Y[ae],ge={};ge.attribute=le,le.data&&(ge.data=le.data),G[ae]=ge,ie++}l.attributes=G,l.attributesNum=ie,l.index=z}function p(){let X=l.newAttributes;for(let z=0,G=X.length;z<G;z++)X[z]=0}function R(X){I(X,0)}function I(X,z){let G=l.newAttributes,Y=l.enabledAttributes,ie=l.attributeDivisors;G[X]=1,Y[X]===0&&(t.enableVertexAttribArray(X),Y[X]=1),ie[X]!==z&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,z),ie[X]=z)}function D(){let X=l.newAttributes,z=l.enabledAttributes;for(let G=0,Y=z.length;G<Y;G++)z[G]!==X[G]&&(t.disableVertexAttribArray(G),z[G]=0)}function M(X,z,G,Y,ie,ae){i.isWebGL2===!0&&(G===5124||G===5125)?t.vertexAttribIPointer(X,z,G,ie,ae):t.vertexAttribPointer(X,z,G,Y,ie,ae)}function N(X,z,G,Y){if(i.isWebGL2===!1&&(X.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();let ie=Y.attributes,ae=G.getAttributes(),le=z.defaultAttributeValues;for(let ge in ae){let fe=ae[ge];if(fe>=0){let de=ie[ge];if(de!==void 0){let Te=de.normalized,Fe=de.itemSize,te=n.get(de);if(te===void 0)continue;let w=te.buffer,b=te.type,P=te.bytesPerElement;if(de.isInterleavedBufferAttribute){let S=de.data,C=S.stride,F=de.offset;S&&S.isInstancedInterleavedBuffer?(I(fe,S.meshPerAttribute),Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=S.meshPerAttribute*S.count)):R(fe),t.bindBuffer(34962,w),M(fe,Fe,b,Te,C*P,F*P)}else de.isInstancedBufferAttribute?(I(fe,de.meshPerAttribute),Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=de.meshPerAttribute*de.count)):R(fe),t.bindBuffer(34962,w),M(fe,Fe,b,Te,0,0)}else if(ge==="instanceMatrix"){let Te=n.get(X.instanceMatrix);if(Te===void 0)continue;let Fe=Te.buffer,te=Te.type;I(fe+0,1),I(fe+1,1),I(fe+2,1),I(fe+3,1),t.bindBuffer(34962,Fe),t.vertexAttribPointer(fe+0,4,te,!1,64,0),t.vertexAttribPointer(fe+1,4,te,!1,64,16),t.vertexAttribPointer(fe+2,4,te,!1,64,32),t.vertexAttribPointer(fe+3,4,te,!1,64,48)}else if(ge==="instanceColor"){let Te=n.get(X.instanceColor);if(Te===void 0)continue;let Fe=Te.buffer,te=Te.type;I(fe,1),t.bindBuffer(34962,Fe),t.vertexAttribPointer(fe,3,te,!1,12,0)}else if(le!==void 0){let Te=le[ge];if(Te!==void 0)switch(Te.length){case 2:t.vertexAttrib2fv(fe,Te);break;case 3:t.vertexAttrib3fv(fe,Te);break;case 4:t.vertexAttrib4fv(fe,Te);break;default:t.vertexAttrib1fv(fe,Te)}}}}D()}function $(){j();for(let X in a){let z=a[X];for(let G in z){let Y=z[G];for(let ie in Y)f(Y[ie].object),delete Y[ie];delete z[G]}delete a[X]}}function H(X){if(a[X.id]===void 0)return;let z=a[X.id];for(let G in z){let Y=z[G];for(let ie in Y)f(Y[ie].object),delete Y[ie];delete z[G]}delete a[X.id]}function W(X){for(let z in a){let G=a[z];if(G[X.id]===void 0)continue;let Y=G[X.id];for(let ie in Y)f(Y[ie].object),delete Y[ie];delete G[X.id]}}function j(){Q(),l!==c&&(l=c,d(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:j,resetDefaultState:Q,dispose:$,releaseStatesOfGeometry:H,releaseStatesOfProgram:W,initAttributes:p,enableAttribute:R,disableUnusedAttributes:D}}function vp(t,e,n,i){let r=i.isWebGL2,s;function o(l){s=l}function a(l,u){t.drawArrays(s,l,u),n.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,f;if(r)d=t,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,u,h),n.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function yp(t,e,n){let i;function r(){if(i!==void 0)return i;let M=e.get("EXT_texture_filter_anisotropic");return M!==null?i=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function s(M){if(M==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&t instanceof WebGL2ComputeRenderingContext,a=n.precision!==void 0?n.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=n.logarithmicDepthBuffer===!0,u=t.getParameter(34930),h=t.getParameter(35660),d=t.getParameter(3379),f=t.getParameter(34076),g=t.getParameter(34921),v=t.getParameter(36347),x=t.getParameter(36348),m=t.getParameter(36349),p=h>0,R=o||!!e.get("OES_texture_float"),I=p&&R,D=o?t.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:m,vertexTextures:p,floatFragmentTextures:R,floatVertexTextures:I,maxSamples:D}}function xp(t){let e=this,n=null,i=0,r=!1,s=!1,o=new kt,a=new bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){let g=h.length!==0||d||i!==0||r;return r=d,n=u(h,f,0),i=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,d,f){let g=h.clippingPlanes,v=h.clipIntersection,x=h.clipShadows,m=t.get(h);if(!r||g===null||g.length===0||s&&!x)s?u(null):l();else{let p=s?0:i,R=p*4,I=m.clippingState||null;c.value=I,I=u(g,d,R,f);for(let D=0;D!==R;++D)I[D]=n[D];m.clippingState=I,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=p}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){let v=h!==null?h.length:0,x=null;if(v!==0){if(x=c.value,g!==!0||x===null){let m=f+v*4,p=d.matrixWorldInverse;a.getNormalMatrix(p),(x===null||x.length<m)&&(x=new Float32Array(m));for(let R=0,I=f;R!==v;++R,I+=4)o.copy(h[R]).applyMatrix4(p,a),o.normal.toArray(x,I),x[I+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function _p(t){let e=new WeakMap;function n(o,a){return a===Jr?o.mapping=ao:a===ka&&(o.mapping=co),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Jr||a===ka)if(e.has(o)){let c=e.get(o).texture;return n(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=t.getRenderList(),u=t.getRenderTarget(),h=new xc(c.height/2);return h.fromEquirectangularTexture(t,o),e.set(o,h),t.setRenderTarget(u),t.setRenderList(l),o.addEventListener("dispose",r),n(h.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function bp(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float")},get:function(i){let r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function wp(t,e,n,i){let r={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function c(h){let d=h.attributes;for(let g in d)e.update(d[g],34962);let f=h.morphAttributes;for(let g in f){let v=f[g];for(let x=0,m=v.length;x<m;x++)e.update(v[x],34962)}}function l(h){let d=[],f=h.index,g=h.attributes.position,v=0;if(f!==null){let p=f.array;v=f.version;for(let R=0,I=p.length;R<I;R+=3){let D=p[R+0],M=p[R+1],N=p[R+2];d.push(D,M,M,N,N,D)}}else{let p=g.array;v=g.version;for(let R=0,I=p.length/3-1;R<I;R+=3){let D=R+0,M=R+1,N=R+2;d.push(D,M,M,N,N,D)}}let x=new(vc(d)>65535?Mr:wr)(d,1);x.version=v;let m=s.get(h);m&&e.remove(m),s.set(h,x)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Mp(t,e,n,i){let r=i.isWebGL2,s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,f){t.drawElements(s,f,a,d*c),n.update(f,s,1)}function h(d,f,g){if(g===0)return;let v,x;if(r)v=t,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](s,f,a,d*c,g),n.update(f,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function Sp(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Tp(t,e){return t[0]-e[0]}function Ep(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Ap(t){let e={},n=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){let l=s.morphTargetInfluences,u=l===void 0?0:l.length,h=e[o.id];if(h===void 0){h=[];for(let x=0;x<u;x++)h[x]=[x,0];e[o.id]=h}for(let x=0;x<u;x++){let m=h[x];m[0]=x,m[1]=l[x]}h.sort(Ep);for(let x=0;x<8;x++)x<u&&h[x][1]?(i[x][0]=h[x][0],i[x][1]=h[x][1]):(i[x][0]=Number.MAX_SAFE_INTEGER,i[x][1]=0);i.sort(Tp);let d=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal,g=0;for(let x=0;x<8;x++){let m=i[x],p=m[0],R=m[1];p!==Number.MAX_SAFE_INTEGER&&R?(d&&o.getAttribute("morphTarget"+x)!==d[p]&&o.setAttribute("morphTarget"+x,d[p]),f&&o.getAttribute("morphNormal"+x)!==f[p]&&o.setAttribute("morphNormal"+x,f[p]),n[x]=R,g+=R):(d&&o.hasAttribute("morphTarget"+x)===!0&&o.deleteAttribute("morphTarget"+x),f&&o.hasAttribute("morphNormal"+x)===!0&&o.deleteAttribute("morphNormal"+x),n[x]=0)}let v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",v),c.getUniforms().setValue(t,"morphTargetInfluences",n)}return{update:r}}function Lp(t,e,n,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,h=e.get(c,u);return r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.update(c.instanceMatrix,34962),c.instanceColor!==null&&n.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:o}}function Er(t=null,e=1,n=1,i=1){Ue.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=nt,this.minFilter=nt,this.wrapR=lt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Er.prototype=Object.create(Ue.prototype);Er.prototype.constructor=Er;Er.prototype.isDataTexture2DArray=!0;function Ar(t=null,e=1,n=1,i=1){Ue.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=nt,this.minFilter=nt,this.wrapR=lt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Ar.prototype=Object.create(Ue.prototype);Ar.prototype.constructor=Ar;Ar.prototype.isDataTexture3D=!0;var bc=new Ue,Cp=new Er,Rp=new Ar,wc=new Cn,Mc=[],Sc=[],Tc=new Float32Array(16),Ec=new Float32Array(9),Ac=new Float32Array(4);function Fi(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=Mc[r];if(s===void 0&&(s=new Float32Array(r),Mc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function St(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lc(t,e){let n=Sc[e];n===void 0&&(n=new Int32Array(e),Sc[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Pp(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ip(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),St(n,e)}}function Dp(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),St(n,e)}}function Op(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),St(n,e)}}function Fp(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),St(n,e)}else{if(Ct(n,i))return;Ac.set(i),t.uniformMatrix2fv(this.addr,!1,Ac),St(n,i)}}function Bp(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),St(n,e)}else{if(Ct(n,i))return;Ec.set(i),t.uniformMatrix3fv(this.addr,!1,Ec),St(n,i)}}function Np(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),St(n,e)}else{if(Ct(n,i))return;Tc.set(i),t.uniformMatrix4fv(this.addr,!1,Tc),St(n,i)}}function zp(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(e||bc,r)}function Up(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Cp,r)}function Hp(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Rp,r)}function Gp(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(e||wc,r)}function kp(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Vp(t,e){let n=this.cache;Ct(n,e)||(t.uniform2iv(this.addr,e),St(n,e))}function Wp(t,e){let n=this.cache;Ct(n,e)||(t.uniform3iv(this.addr,e),St(n,e))}function jp(t,e){let n=this.cache;Ct(n,e)||(t.uniform4iv(this.addr,e),St(n,e))}function qp(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Xp(t){switch(t){case 5126:return Pp;case 35664:return Ip;case 35665:return Dp;case 35666:return Op;case 35674:return Fp;case 35675:return Bp;case 35676:return Np;case 5124:case 35670:return kp;case 35667:case 35671:return Vp;case 35668:case 35672:return Wp;case 35669:case 35673:return jp;case 5125:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Up}}function Yp(t,e){t.uniform1fv(this.addr,e)}function Zp(t,e){t.uniform1iv(this.addr,e)}function Jp(t,e){t.uniform2iv(this.addr,e)}function Kp(t,e){t.uniform3iv(this.addr,e)}function $p(t,e){t.uniform4iv(this.addr,e)}function Qp(t,e){let n=Fi(e,this.size,2);t.uniform2fv(this.addr,n)}function em(t,e){let n=Fi(e,this.size,3);t.uniform3fv(this.addr,n)}function tm(t,e){let n=Fi(e,this.size,4);t.uniform4fv(this.addr,n)}function nm(t,e){let n=Fi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function im(t,e){let n=Fi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function rm(t,e){let n=Fi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sm(t,e,n){let i=e.length,r=Lc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTexture2D(e[s]||bc,r[s])}function om(t,e,n){let i=e.length,r=Lc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTextureCube(e[s]||wc,r[s])}function am(t){switch(t){case 5126:return Yp;case 35664:return Qp;case 35665:return em;case 35666:return tm;case 35674:return nm;case 35675:return im;case 35676:return rm;case 5124:case 35670:return Zp;case 35667:case 35671:return Jp;case 35668:case 35672:return Kp;case 35669:case 35673:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35680:case 36300:case 36308:case 36293:return om}}function cm(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Xp(e.type)}function Cc(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=am(e.type)}Cc.prototype.updateCache=function(t){let e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),St(e,t)};function Rc(t){this.id=t,this.seq=[],this.map={}}Rc.prototype.setValue=function(t,e,n){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let o=i[r];o.setValue(t,e[o.id],n)}};var qo=/(\w+)(\])?(\[|\.)?/g;function Pc(t,e){t.seq.push(e),t.map[e.id]=e}function lm(t,e,n){let i=t.name,r=i.length;for(qo.lastIndex=0;;){let s=qo.exec(i),o=qo.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Pc(n,l===void 0?new cm(a,t,e):new Cc(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Rc(a),Pc(n,h)),n=h}}}function Rn(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);lm(r,s,this)}}Rn.prototype.setValue=function(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)};Rn.prototype.setOptional=function(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)};Rn.upload=function(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){let o=e[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}};Rn.seqWithValue=function(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let s=t[i];s.id in e&&n.push(s)}return n};function Ic(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var um=0;function hm(t){let e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function Dc(t){switch(t){case di:return["Linear","( value )"];case fi:return["sRGB","( value )"];case tc:return["RGBE","( value )"];case nc:return["RGBM","( value, 7.0 )"];case ic:return["RGBM","( value, 16.0 )"];case rc:return["RGBD","( value, 256.0 )"];case is:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Sh:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Oc(t,e,n){let i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=t.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+hm(s)}function Lr(t,e){let n=Dc(e);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function dm(t,e){let n=Dc(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function fm(t,e){let n;switch(e){case Su:n="Linear";break;case Tu:n="Reinhard";break;case Eu:n="OptimizedCineon";break;case Au:n="ACESFilmic";break;case Lu:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function pm(t){return[t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cr).join(`
`)}function mm(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function gm(t,e){let n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){let o=t.getActiveAttrib(e,r).name;n[o]=t.getAttribLocation(e,o)}return n}function Cr(t){return t!==""}function Fc(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bc(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(t){return t.replace(vm,ym)}function ym(t,e){let n=Pe[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Xo(n)}var xm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,_m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(t){return t.replace(_m,Nc).replace(xm,bm)}function bm(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Nc(t,e,n,i)}function Nc(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Uc(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wm(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ia?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===nu?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hr&&(e="SHADOWMAP_TYPE_VSM"),e}function Mm(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ao:case co:e="ENVMAP_TYPE_CUBE";break;case lo:case uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sm(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case co:case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function Tm(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Zr:e="ENVMAP_BLENDING_MULTIPLY";break;case wu:e="ENVMAP_BLENDING_MIX";break;case Mu:e="ENVMAP_BLENDING_ADD";break}return e}function Em(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,c=wm(n),l=Mm(n),u=Sm(n),h=Tm(n),d=t.gammaFactor>0?t.gammaFactor:1,f=n.isWebGL2?"":pm(n),g=mm(s),v=r.createProgram(),x,m,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=[g].filter(Cr).join(`
`),x.length>0&&(x+=`
`),m=[f,g].filter(Cr).join(`
`),m.length>0&&(m+=`
`)):(x=[Uc(n),"#define SHADER_NAME "+n.shaderName,g,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),m=[f,Uc(n),"#define SHADER_NAME "+n.shaderName,g,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pr?"#define TONE_MAPPING":"",n.toneMapping!==pr?Pe.tonemapping_pars_fragment:"",n.toneMapping!==pr?fm("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",Pe.encodings_pars_fragment,n.map?Lr("mapTexelToLinear",n.mapEncoding):"",n.matcap?Lr("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?Lr("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?Lr("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?Lr("lightMapTexelToLinear",n.lightMapEncoding):"",dm("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Cr).join(`
`)),o=Xo(o),o=Fc(o,n),o=Bc(o,n),a=Xo(a),a=Fc(a,n),a=Bc(a,n),o=zc(o),a=zc(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",n.glslVersion===sc?"":"out highp vec4 pc_fragColor;",n.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=p+x+o,I=p+m+a,D=Ic(r,35633,R),M=Ic(r,35632,I);if(r.attachShader(v,D),r.attachShader(v,M),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),t.debug.checkShaderErrors){let H=r.getProgramInfoLog(v).trim(),W=r.getShaderInfoLog(D).trim(),j=r.getShaderInfoLog(M).trim(),Q=!0,X=!0;if(r.getProgramParameter(v,35714)===!1){Q=!1;let z=Oc(r,D,"vertex"),G=Oc(r,M,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(v,35715),"gl.getProgramInfoLog",H,z,G)}else H!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",H):(W===""||j==="")&&(X=!1);X&&(this.diagnostics={runnable:Q,programLog:H,vertexShader:{log:W,prefix:x},fragmentShader:{log:j,prefix:m}})}r.deleteShader(D),r.deleteShader(M);let N;this.getUniforms=function(){return N===void 0&&(N=new Rn(r,v)),N};let $;return this.getAttributes=function(){return $===void 0&&($=gm(r,v)),$},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=n.shaderName,this.id=um++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=M,this}function Am(t,e,n,i,r,s){let o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,u=i.maxVertexUniforms,h=i.vertexTextures,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},g=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function v(M){let $=M.skeleton.bones;if(l)return 1024;{let W=Math.floor((u-20)/4),j=Math.min(W,$.length);return j<$.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+$.length+" bones. This GPU supports "+j+"."),0):j}}function x(M){let N;return M&&M.isTexture?N=M.encoding:M&&M.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),N=M.texture.encoding):N=di,N}function m(M,N,$,H,W){let j=H.fog,Q=M.isMeshStandardMaterial?H.environment:null,X=e.get(M.envMap||Q),z=f[M.type],G=W.isSkinnedMesh?v(W):0;M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let Y,ie;if(z){let ge=Wt[z];Y=ge.vertexShader,ie=ge.fragmentShader}else Y=M.vertexShader,ie=M.fragmentShader;let ae=t.getRenderTarget();return{isWebGL2:a,shaderID:z,shaderName:M.type,vertexShader:Y,fragmentShader:ie,defines:M.defines,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:h,outputEncoding:ae!==null?x(ae.texture):t.outputEncoding,map:!!M.map,mapEncoding:x(M.map),matcap:!!M.matcap,matcapEncoding:x(M.matcap),envMap:!!X,envMapMode:X&&X.mapping,envMapEncoding:x(X),envMapCubeUV:!!X&&(X.mapping===lo||X.mapping===uo),lightMap:!!M.lightMap,lightMapEncoding:x(M.lightMap),aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,emissiveMapEncoding:x(M.emissiveMap),bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Ah,tangentSpaceNormalMap:M.normalMapType===xn,clearcoatMap:!!M.clearcoatMap,clearcoatRoughnessMap:!!M.clearcoatRoughnessMap,clearcoatNormalMap:!!M.clearcoatNormalMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,alphaMap:!!M.alphaMap,gradientMap:!!M.gradientMap,sheen:!!M.sheen,transmissionMap:!!M.transmissionMap,combine:M.combine,vertexTangents:M.normalMap&&M.vertexTangents,vertexColors:M.vertexColors,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.displacementMap||!!M.transmissionMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.transmissionMap)&&!!M.displacementMap,fog:!!j,useFog:M.fog,fogExp2:j&&j.isFogExp2,flatShading:M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:c,skinning:M.skinning&&G>0,maxBones:G,useVertexTexture:l,morphTargets:M.morphTargets,morphNormals:M.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&$.length>0,shadowMapType:t.shadowMap.type,toneMapping:M.toneMapped?t.toneMapping:pr,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,alphaTest:M.alphaTest,doubleSided:M.side===Nn,flipSided:M.side===et,depthPacking:M.depthPacking!==void 0?M.depthPacking:!1,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let N=[];if(M.shaderID?N.push(M.shaderID):(N.push(M.fragmentShader),N.push(M.vertexShader)),M.defines!==void 0)for(let $ in M.defines)N.push($),N.push(M.defines[$]);if(M.isRawShaderMaterial===!1){for(let $=0;$<g.length;$++)N.push(M[g[$]]);N.push(t.outputEncoding),N.push(t.gammaFactor)}return N.push(M.customProgramCacheKey),N.join()}function R(M){let N=f[M.type],$;if(N){let H=Wt[N];$=Vh.clone(H.uniforms)}else $=M.uniforms;return $}function I(M,N){let $;for(let H=0,W=o.length;H<W;H++){let j=o[H];if(j.cacheKey===N){$=j,++$.usedTimes;break}}return $===void 0&&($=new Em(t,N,M,r),o.push($)),$}function D(M){if(--M.usedTimes==0){let N=o.indexOf(M);o[N]=o[o.length-1],o.pop(),M.destroy()}}return{getParameters:m,getProgramCacheKey:p,getUniforms:R,acquireProgram:I,releaseProgram:D,programs:o}}function Lm(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Cm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Rm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hc(t){let e=[],n=0,i=[],r=[],s={id:-1};function o(){n=0,i.length=0,r.length=0}function a(d,f,g,v,x,m){let p=e[n],R=t.get(g);return p===void 0?(p={id:d.id,object:d,geometry:f,material:g,program:R.program||s,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},e[n]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=g,p.program=R.program||s,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=x,p.group=m),n++,p}function c(d,f,g,v,x,m){let p=a(d,f,g,v,x,m);(g.transparent===!0?r:i).push(p)}function l(d,f,g,v,x,m){let p=a(d,f,g,v,x,m);(g.transparent===!0?r:i).unshift(p)}function u(d,f){i.length>1&&i.sort(d||Cm),r.length>1&&r.sort(f||Rm)}function h(){for(let d=n,f=e.length;d<f;d++){let g=e[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.program=null,g.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:u}}function Pm(t){let e=new WeakMap;function n(r,s){let o=e.get(r),a;return o===void 0?(a=new Hc(t),e.set(r,new WeakMap),e.get(r).set(s,a)):(a=o.get(s),a===void 0&&(a=new Hc(t),o.set(s,a))),a}function i(){e=new WeakMap}return{get:n,dispose:i}}function Im(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new pe};break;case"SpotLight":n={position:new L,direction:new L,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new pe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":n={color:new pe,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function Dm(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var Om=0;function Fm(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function Bm(t,e){let n=new Im,i=Dm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new L);let s=new L,o=new Se,a=new Se;function c(u){let h=0,d=0,f=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let g=0,v=0,x=0,m=0,p=0,R=0,I=0,D=0;u.sort(Fm);for(let N=0,$=u.length;N<$;N++){let H=u[N],W=H.color,j=H.intensity,Q=H.distance,X=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)h+=W.r*j,d+=W.g*j,f+=W.b*j;else if(H.isLightProbe)for(let z=0;z<9;z++)r.probe[z].addScaledVector(H.sh.coefficients[z],j);else if(H.isDirectionalLight){let z=n.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let G=H.shadow,Y=i.get(H);Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,r.directionalShadow[g]=Y,r.directionalShadowMap[g]=X,r.directionalShadowMatrix[g]=H.shadow.matrix,R++}r.directional[g]=z,g++}else if(H.isSpotLight){let z=n.get(H);if(z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(W).multiplyScalar(j),z.distance=Q,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,H.castShadow){let G=H.shadow,Y=i.get(H);Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,r.spotShadow[x]=Y,r.spotShadowMap[x]=X,r.spotShadowMatrix[x]=H.shadow.matrix,D++}r.spot[x]=z,x++}else if(H.isRectAreaLight){let z=n.get(H);z.color.copy(W).multiplyScalar(j),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),r.rectArea[m]=z,m++}else if(H.isPointLight){let z=n.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){let G=H.shadow,Y=i.get(H);Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,Y.shadowCameraNear=G.camera.near,Y.shadowCameraFar=G.camera.far,r.pointShadow[v]=Y,r.pointShadowMap[v]=X,r.pointShadowMatrix[v]=H.shadow.matrix,I++}r.point[v]=z,v++}else if(H.isHemisphereLight){let z=n.get(H);z.skyColor.copy(H.color).multiplyScalar(j),z.groundColor.copy(H.groundColor).multiplyScalar(j),r.hemi[p]=z,p++}}m>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=f;let M=r.hash;(M.directionalLength!==g||M.pointLength!==v||M.spotLength!==x||M.rectAreaLength!==m||M.hemiLength!==p||M.numDirectionalShadows!==R||M.numPointShadows!==I||M.numSpotShadows!==D)&&(r.directional.length=g,r.spot.length=x,r.rectArea.length=m,r.point.length=v,r.hemi.length=p,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=I,r.spotShadowMatrix.length=D,M.directionalLength=g,M.pointLength=v,M.spotLength=x,M.rectAreaLength=m,M.hemiLength=p,M.numDirectionalShadows=R,M.numPointShadows=I,M.numSpotShadows=D,r.version=Om++)}function l(u,h){let d=0,f=0,g=0,v=0,x=0,m=h.matrixWorldInverse;for(let p=0,R=u.length;p<R;p++){let I=u[p];if(I.isDirectionalLight){let D=r.directional[d];D.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(m),d++}else if(I.isSpotLight){let D=r.spot[g];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(m),D.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(m),g++}else if(I.isRectAreaLight){let D=r.rectArea[v];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(m),a.identity(),o.copy(I.matrixWorld),o.premultiply(m),a.extractRotation(o),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),v++}else if(I.isPointLight){let D=r.point[f];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(m),f++}else if(I.isHemisphereLight){let D=r.hemi[x];D.direction.setFromMatrixPosition(I.matrixWorld),D.direction.transformDirection(m),D.direction.normalize(),x++}}}return{setup:c,setupView:l,state:r}}function Gc(t,e){let n=new Bm(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(){n.setup(i)}function l(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Nm(t,e){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new Gc(t,e),n.set(s,[]),n.get(s).push(a)):o>=n.get(s).length?(a=new Gc(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}function Vn(t){be.call(this),this.type="MeshDepthMaterial",this.depthPacking=Th,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}Vn.prototype=Object.create(be.prototype);Vn.prototype.constructor=Vn;Vn.prototype.isMeshDepthMaterial=!0;Vn.prototype.copy=function(t){return be.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this};function Wn(t){be.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}Wn.prototype=Object.create(be.prototype);Wn.prototype.constructor=Wn;Wn.prototype.isMeshDistanceMaterial=!0;Wn.prototype.copy=function(t){return be.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this};var zm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Um=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function kc(t,e,n){let i=new Tr,r=new ne,s=new ne,o=new Ne,a=[],c=[],l={},u={0:et,1:vn,2:Nn},h=new vt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:Um,fragmentShader:zm}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let f=new ze;f.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ge(f,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia,this.render=function(D,M,N){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||D.length===0)return;let $=t.getRenderTarget(),H=t.getActiveCubeFace(),W=t.getActiveMipmapLevel(),j=t.state;j.setBlending(dr),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);for(let Q=0,X=D.length;Q<X;Q++){let z=D[Q],G=z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let Y=G.getFrameExtents();if(r.multiply(Y),s.copy(G.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/Y.x),r.x=s.x*Y.x,G.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/Y.y),r.y=s.y*Y.y,G.mapSize.y=s.y)),G.map===null&&!G.isPointLightShadow&&this.type===hr){let ae={minFilter:Je,magFilter:Je,format:It};G.map=new gi(r.x,r.y,ae),G.map.texture.name=z.name+".shadowMap",G.mapPass=new gi(r.x,r.y,ae),G.camera.updateProjectionMatrix()}if(G.map===null){let ae={minFilter:nt,magFilter:nt,format:It};G.map=new gi(r.x,r.y,ae),G.map.texture.name=z.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();let ie=G.getViewportCount();for(let ae=0;ae<ie;ae++){let le=G.getViewport(ae);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),j.viewport(o),G.updateMatrices(z,ae),i=G.getFrustum(),I(M,N,G.camera,z,this.type)}!G.isPointLightShadow&&this.type===hr&&x(G,N),G.needsUpdate=!1}v.needsUpdate=!1,t.setRenderTarget($,H,W)};function x(D,M){let N=e.update(g);h.uniforms.shadow_pass.value=D.map.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,t.setRenderTarget(D.mapPass),t.clear(),t.renderBufferDirect(M,null,N,h,g,null),d.uniforms.shadow_pass.value=D.mapPass.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,t.setRenderTarget(D.map),t.clear(),t.renderBufferDirect(M,null,N,d,g,null)}function m(D,M,N){let $=D<<0|M<<1|N<<2,H=a[$];return H===void 0&&(H=new Vn({depthPacking:Eh,morphTargets:D,skinning:M}),a[$]=H),H}function p(D,M,N){let $=D<<0|M<<1|N<<2,H=c[$];return H===void 0&&(H=new Wn({morphTargets:D,skinning:M}),c[$]=H),H}function R(D,M,N,$,H,W,j){let Q=null,X=m,z=D.customDepthMaterial;if($.isPointLight===!0&&(X=p,z=D.customDistanceMaterial),z===void 0){let G=!1;N.morphTargets===!0&&(G=M.morphAttributes&&M.morphAttributes.position&&M.morphAttributes.position.length>0);let Y=!1;D.isSkinnedMesh===!0&&(N.skinning===!0?Y=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",D));let ie=D.isInstancedMesh===!0;Q=X(G,Y,ie)}else Q=z;if(t.localClippingEnabled&&N.clipShadows===!0&&N.clippingPlanes.length!==0){let G=Q.uuid,Y=N.uuid,ie=l[G];ie===void 0&&(ie={},l[G]=ie);let ae=ie[Y];ae===void 0&&(ae=Q.clone(),ie[Y]=ae),Q=ae}return Q.visible=N.visible,Q.wireframe=N.wireframe,j===hr?Q.side=N.shadowSide!==null?N.shadowSide:N.side:Q.side=N.shadowSide!==null?N.shadowSide:u[N.side],Q.clipShadows=N.clipShadows,Q.clippingPlanes=N.clippingPlanes,Q.clipIntersection=N.clipIntersection,Q.wireframeLinewidth=N.wireframeLinewidth,Q.linewidth=N.linewidth,$.isPointLight===!0&&Q.isMeshDistanceMaterial===!0&&(Q.referencePosition.setFromMatrixPosition($.matrixWorld),Q.nearDistance=H,Q.farDistance=W),Q}function I(D,M,N,$,H){if(D.visible===!1)return;if(D.layers.test(M.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&H===hr)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);let Q=e.update(D),X=D.material;if(Array.isArray(X)){let z=Q.groups;for(let G=0,Y=z.length;G<Y;G++){let ie=z[G],ae=X[ie.materialIndex];if(ae&&ae.visible){let le=R(D,Q,ae,$,N.near,N.far,H);t.renderBufferDirect(N,null,Q,le,D,ie)}}}else if(X.visible){let z=R(D,Q,X,$,N.near,N.far,H);t.renderBufferDirect(N,null,Q,z,D,null)}}let j=D.children;for(let Q=0,X=j.length;Q<X;Q++)I(j[Q],M,N,$,H)}}function Hm(t,e,n){let i=n.isWebGL2;function r(){let O=!1,K=new Ne,se=null,oe=new Ne(0,0,0,0);return{setMask:function(re){se!==re&&!O&&(t.colorMask(re,re,re,re),se=re)},setLocked:function(re){O=re},setClear:function(re,me,ye,we,ue){ue===!0&&(re*=we,me*=we,ye*=we),K.set(re,me,ye,we),oe.equals(K)===!1&&(t.clearColor(re,me,ye,we),oe.copy(K))},reset:function(){O=!1,se=null,oe.set(-1,0,0,0)}}}function s(){let O=!1,K=null,se=null,oe=null;return{setTest:function(re){re?ge(2929):fe(2929)},setMask:function(re){K!==re&&!O&&(t.depthMask(re),K=re)},setFunc:function(re){if(se!==re){if(re)switch(re){case mu:t.depthFunc(512);break;case gu:t.depthFunc(519);break;case vu:t.depthFunc(513);break;case oo:t.depthFunc(515);break;case yu:t.depthFunc(514);break;case xu:t.depthFunc(518);break;case _u:t.depthFunc(516);break;case bu:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);se=re}},setLocked:function(re){O=re},setClear:function(re){oe!==re&&(t.clearDepth(re),oe=re)},reset:function(){O=!1,K=null,se=null,oe=null}}}function o(){let O=!1,K=null,se=null,oe=null,re=null,me=null,ye=null,we=null,ue=null;return{setTest:function(xe){O||(xe?ge(2960):fe(2960))},setMask:function(xe){K!==xe&&!O&&(t.stencilMask(xe),K=xe)},setFunc:function(xe,Le,Ke){(se!==xe||oe!==Le||re!==Ke)&&(t.stencilFunc(xe,Le,Ke),se=xe,oe=Le,re=Ke)},setOp:function(xe,Le,Ke){(me!==xe||ye!==Le||we!==Ke)&&(t.stencilOp(xe,Le,Ke),me=xe,ye=Le,we=Ke)},setLocked:function(xe){O=xe},setClear:function(xe){ue!==xe&&(t.clearStencil(xe),ue=xe)},reset:function(){O=!1,K=null,se=null,oe=null,re=null,me=null,ye=null,we=null,ue=null}}}let a=new r,c=new s,l=new o,u={},h=null,d=null,f=null,g=null,v=null,x=null,m=null,p=null,R=null,I=!1,D=null,M=null,N=null,$=null,H=null,W=t.getParameter(35661),j=!1,Q=0,X=t.getParameter(7938);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),j=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),j=Q>=2);let z=null,G={},Y=new Ne,ie=new Ne;function ae(O,K,se){let oe=new Uint8Array(4),re=t.createTexture();t.bindTexture(O,re),t.texParameteri(O,10241,9728),t.texParameteri(O,10240,9728);for(let me=0;me<se;me++)t.texImage2D(K+me,0,6408,1,1,0,6408,5121,oe);return re}let le={};le[3553]=ae(3553,3553,1),le[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ge(2929),c.setFunc(oo),b(!1),P(Pa),ge(2884),te(dr);function ge(O){u[O]!==!0&&(t.enable(O),u[O]=!0)}function fe(O){u[O]!==!1&&(t.disable(O),u[O]=!1)}function de(O){return h!==O?(t.useProgram(O),h=O,!0):!1}let Te={[ai]:32774,[ru]:32778,[su]:32779};if(i)Te[Na]=32775,Te[za]=32776;else{let O=e.get("EXT_blend_minmax");O!==null&&(Te[Na]=O.MIN_EXT,Te[za]=O.MAX_EXT)}let Fe={[ou]:0,[au]:1,[cu]:768,[Ua]:770,[pu]:776,[du]:774,[uu]:772,[lu]:769,[Ha]:771,[fu]:775,[hu]:773};function te(O,K,se,oe,re,me,ye,we){if(O===dr){d&&(fe(3042),d=!1);return}if(d||(ge(3042),d=!0),O!==iu){if(O!==f||we!==I){if((g!==ai||m!==ai)&&(t.blendEquation(32774),g=ai,m=ai),we)switch(O){case fr:t.blendFuncSeparate(1,771,1,771);break;case Oa:t.blendFunc(1,1);break;case Fa:t.blendFuncSeparate(0,0,769,771);break;case Ba:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case fr:t.blendFuncSeparate(770,771,1,771);break;case Oa:t.blendFunc(770,1);break;case Fa:t.blendFunc(0,769);break;case Ba:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,x=null,p=null,R=null,f=O,I=we}return}re=re||K,me=me||se,ye=ye||oe,(K!==g||re!==m)&&(t.blendEquationSeparate(Te[K],Te[re]),g=K,m=re),(se!==v||oe!==x||me!==p||ye!==R)&&(t.blendFuncSeparate(Fe[se],Fe[oe],Fe[me],Fe[ye]),v=se,x=oe,p=me,R=ye),f=O,I=null}function w(O,K){O.side===Nn?fe(2884):ge(2884);let se=O.side===et;K&&(se=!se),b(se),O.blending===fr&&O.transparent===!1?te(dr):te(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),a.setMask(O.colorWrite);let oe=O.stencilWrite;l.setTest(oe),oe&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),C(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits)}function b(O){D!==O&&(O?t.frontFace(2304):t.frontFace(2305),D=O)}function P(O){O!==eu?(ge(2884),O!==M&&(O===Pa?t.cullFace(1029):O===tu?t.cullFace(1028):t.cullFace(1032))):fe(2884),M=O}function S(O){O!==N&&(j&&t.lineWidth(O),N=O)}function C(O,K,se){O?(ge(32823),($!==K||H!==se)&&(t.polygonOffset(K,se),$=K,H=se)):fe(32823)}function F(O){O?ge(3089):fe(3089)}function E(O){O===void 0&&(O=33984+W-1),z!==O&&(t.activeTexture(O),z=O)}function A(O,K){z===null&&E();let se=G[z];se===void 0&&(se={type:void 0,texture:void 0},G[z]=se),(se.type!==O||se.texture!==K)&&(t.bindTexture(O,K||le[O]),se.type=O,se.texture=K)}function B(){let O=G[z];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function k(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function U(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function y(O){Y.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Y.copy(O))}function Z(O){ie.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),ie.copy(O))}function V(){u={},z=null,G={},h=null,d=null,f=null,g=null,v=null,x=null,m=null,p=null,R=null,I=!1,D=null,M=null,N=null,$=null,H=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ge,disable:fe,useProgram:de,setBlending:te,setMaterial:w,setFlipSided:b,setCullFace:P,setLineWidth:S,setPolygonOffset:C,setScissorTest:F,activeTexture:E,bindTexture:A,unbindTexture:B,compressedTexImage2D:k,texImage2D:U,texImage3D:_,scissor:y,viewport:Z,reset:V}}function Gm(t,e,n,i,r,s,o){let a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=new WeakMap,f,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(_){}function v(_,y){return g?new OffscreenCanvas(_,y):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function x(_,y,Z,V){let O=1;if((_.width>V||_.height>V)&&(O=V/Math.max(_.width,_.height)),O<1||y===!0)if(typeof HTMLImageElement!="undefined"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&_ instanceof ImageBitmap){let K=y?Me.floorPowerOfTwo:Math.floor,se=K(O*_.width),oe=K(O*_.height);f===void 0&&(f=v(se,oe));let re=Z?v(se,oe):f;return re.width=se,re.height=oe,re.getContext("2d").drawImage(_,0,0,se,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+se+"x"+oe+")."),re}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),_;return _}function m(_){return Me.isPowerOfTwo(_.width)&&Me.isPowerOfTwo(_.height)}function p(_){return a?!1:_.wrapS!==lt||_.wrapT!==lt||_.minFilter!==nt&&_.minFilter!==Je}function R(_,y){return _.generateMipmaps&&y&&_.minFilter!==nt&&_.minFilter!==Je}function I(_,y,Z,V){t.generateMipmap(_);let O=i.get(y);O.__maxMipLevel=Math.log(Math.max(Z,V))*Math.LOG2E}function D(_,y,Z){if(a===!1)return y;if(_!==null){if(t[_]!==void 0)return t[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let V=y;return y===6403&&(Z===5126&&(V=33326),Z===5131&&(V=33325),Z===5121&&(V=33321)),y===6407&&(Z===5126&&(V=34837),Z===5131&&(V=34843),Z===5121&&(V=32849)),y===6408&&(Z===5126&&(V=34836),Z===5131&&(V=34842),Z===5121&&(V=32856)),(V===33325||V===33326||V===34842||V===34836)&&e.get("EXT_color_buffer_float"),V}function M(_){return _===nt||_===Kr||_===$r?9728:9729}function N(_){let y=_.target;y.removeEventListener("dispose",N),H(y),y.isVideoTexture&&d.delete(y),o.memory.textures--}function $(_){let y=_.target;y.removeEventListener("dispose",$),W(y),o.memory.textures--}function H(_){let y=i.get(_);y.__webglInit!==void 0&&(t.deleteTexture(y.__webglTexture),i.remove(_))}function W(_){let y=i.get(_),Z=i.get(_.texture);if(!!_){if(Z.__webglTexture!==void 0&&t.deleteTexture(Z.__webglTexture),_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let V=0;V<6;V++)t.deleteFramebuffer(y.__webglFramebuffer[V]),y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[V]);else t.deleteFramebuffer(y.__webglFramebuffer),y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer&&t.deleteRenderbuffer(y.__webglColorRenderbuffer),y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer);i.remove(_.texture),i.remove(_)}}let j=0;function Q(){j=0}function X(){let _=j;return _>=c&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+c),j+=1,_}function z(_,y){let Z=i.get(_);if(_.isVideoTexture&&E(_),_.version>0&&Z.__version!==_.version){let V=_.image;if(V===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(Z,_,y);return}}n.activeTexture(33984+y),n.bindTexture(3553,Z.__webglTexture)}function G(_,y){let Z=i.get(_);if(_.version>0&&Z.__version!==_.version){de(Z,_,y);return}n.activeTexture(33984+y),n.bindTexture(35866,Z.__webglTexture)}function Y(_,y){let Z=i.get(_);if(_.version>0&&Z.__version!==_.version){de(Z,_,y);return}n.activeTexture(33984+y),n.bindTexture(32879,Z.__webglTexture)}function ie(_,y){let Z=i.get(_);if(_.version>0&&Z.__version!==_.version){Te(Z,_,y);return}n.activeTexture(33984+y),n.bindTexture(34067,Z.__webglTexture)}let ae={[zn]:10497,[lt]:33071,[mr]:33648},le={[nt]:9728,[Kr]:9984,[$r]:9986,[Je]:9729,[ho]:9985,[Un]:9987};function ge(_,y,Z){Z?(t.texParameteri(_,10242,ae[y.wrapS]),t.texParameteri(_,10243,ae[y.wrapT]),(_===32879||_===35866)&&t.texParameteri(_,32882,ae[y.wrapR]),t.texParameteri(_,10240,le[y.magFilter]),t.texParameteri(_,10241,le[y.minFilter])):(t.texParameteri(_,10242,33071),t.texParameteri(_,10243,33071),(_===32879||_===35866)&&t.texParameteri(_,32882,33071),(y.wrapS!==lt||y.wrapT!==lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(_,10240,M(y.magFilter)),t.texParameteri(_,10241,M(y.minFilter)),y.minFilter!==nt&&y.minFilter!==Je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));let V=e.get("EXT_texture_filter_anisotropic");if(V){if(y.type===yn&&e.get("OES_texture_float_linear")===null||y.type===ts&&(a||e.get("OES_texture_half_float_linear"))===null)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(t.texParameterf(_,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function fe(_,y){_.__webglInit===void 0&&(_.__webglInit=!0,y.addEventListener("dispose",N),_.__webglTexture=t.createTexture(),o.memory.textures++)}function de(_,y,Z){let V=3553;y.isDataTexture2DArray&&(V=35866),y.isDataTexture3D&&(V=32879),fe(_,y),n.activeTexture(33984+Z),n.bindTexture(V,_.__webglTexture),t.pixelStorei(37440,y.flipY),t.pixelStorei(37441,y.premultiplyAlpha),t.pixelStorei(3317,y.unpackAlignment);let O=p(y)&&m(y.image)===!1,K=x(y.image,O,!1,u),se=m(K)||a,oe=s.convert(y.format),re=s.convert(y.type),me=D(y.internalFormat,oe,re);ge(V,y,se);let ye,we=y.mipmaps;if(y.isDepthTexture)me=6402,a?y.type===yn?me=36012:y.type===es?me=33190:y.type===gr?me=35056:me=33189:y.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ci&&me===6402&&y.type!==Qr&&y.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Qr,re=s.convert(y.type)),y.format===vr&&me===6402&&(me=34041,y.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=gr,re=s.convert(y.type))),n.texImage2D(3553,0,me,K.width,K.height,0,oe,re,null);else if(y.isDataTexture)if(we.length>0&&se){for(let ue=0,xe=we.length;ue<xe;ue++)ye=we[ue],n.texImage2D(3553,ue,me,ye.width,ye.height,0,oe,re,ye.data);y.generateMipmaps=!1,_.__maxMipLevel=we.length-1}else n.texImage2D(3553,0,me,K.width,K.height,0,oe,re,K.data),_.__maxMipLevel=0;else if(y.isCompressedTexture){for(let ue=0,xe=we.length;ue<xe;ue++)ye=we[ue],y.format!==It&&y.format!==nn?oe!==null?n.compressedTexImage2D(3553,ue,me,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,ue,me,ye.width,ye.height,0,oe,re,ye.data);_.__maxMipLevel=we.length-1}else if(y.isDataTexture2DArray)n.texImage3D(35866,0,me,K.width,K.height,K.depth,0,oe,re,K.data),_.__maxMipLevel=0;else if(y.isDataTexture3D)n.texImage3D(32879,0,me,K.width,K.height,K.depth,0,oe,re,K.data),_.__maxMipLevel=0;else if(we.length>0&&se){for(let ue=0,xe=we.length;ue<xe;ue++)ye=we[ue],n.texImage2D(3553,ue,me,oe,re,ye);y.generateMipmaps=!1,_.__maxMipLevel=we.length-1}else n.texImage2D(3553,0,me,oe,re,K),_.__maxMipLevel=0;R(y,se)&&I(V,y,K.width,K.height),_.__version=y.version,y.onUpdate&&y.onUpdate(y)}function Te(_,y,Z){if(y.image.length!==6)return;fe(_,y),n.activeTexture(33984+Z),n.bindTexture(34067,_.__webglTexture),t.pixelStorei(37440,y.flipY),t.pixelStorei(37441,y.premultiplyAlpha),t.pixelStorei(3317,y.unpackAlignment);let V=y&&(y.isCompressedTexture||y.image[0].isCompressedTexture),O=y.image[0]&&y.image[0].isDataTexture,K=[];for(let ue=0;ue<6;ue++)!V&&!O?K[ue]=x(y.image[ue],!1,!0,l):K[ue]=O?y.image[ue].image:y.image[ue];let se=K[0],oe=m(se)||a,re=s.convert(y.format),me=s.convert(y.type),ye=D(y.internalFormat,re,me);ge(34067,y,oe);let we;if(V){for(let ue=0;ue<6;ue++){we=K[ue].mipmaps;for(let xe=0;xe<we.length;xe++){let Le=we[xe];y.format!==It&&y.format!==nn?re!==null?n.compressedTexImage2D(34069+ue,xe,ye,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+ue,xe,ye,Le.width,Le.height,0,re,me,Le.data)}}_.__maxMipLevel=we.length-1}else{we=y.mipmaps;for(let ue=0;ue<6;ue++)if(O){n.texImage2D(34069+ue,0,ye,K[ue].width,K[ue].height,0,re,me,K[ue].data);for(let xe=0;xe<we.length;xe++){let Ke=we[xe].image[ue].image;n.texImage2D(34069+ue,xe+1,ye,Ke.width,Ke.height,0,re,me,Ke.data)}}else{n.texImage2D(34069+ue,0,ye,re,me,K[ue]);for(let xe=0;xe<we.length;xe++){let Le=we[xe];n.texImage2D(34069+ue,xe+1,ye,re,me,Le.image[ue])}}_.__maxMipLevel=we.length}R(y,oe)&&I(34067,y,se.width,se.height),_.__version=y.version,y.onUpdate&&y.onUpdate(y)}function Fe(_,y,Z,V){let O=s.convert(y.texture.format),K=s.convert(y.texture.type),se=D(y.texture.internalFormat,O,K);n.texImage2D(V,0,se,y.width,y.height,0,O,K,null),t.bindFramebuffer(36160,_),t.framebufferTexture2D(36160,Z,V,i.get(y.texture).__webglTexture,0),t.bindFramebuffer(36160,null)}function te(_,y,Z){if(t.bindRenderbuffer(36161,_),y.depthBuffer&&!y.stencilBuffer){let V=33189;if(Z){let O=y.depthTexture;O&&O.isDepthTexture&&(O.type===yn?V=36012:O.type===es&&(V=33190));let K=F(y);t.renderbufferStorageMultisample(36161,K,V,y.width,y.height)}else t.renderbufferStorage(36161,V,y.width,y.height);t.framebufferRenderbuffer(36160,36096,36161,_)}else if(y.depthBuffer&&y.stencilBuffer){if(Z){let V=F(y);t.renderbufferStorageMultisample(36161,V,35056,y.width,y.height)}else t.renderbufferStorage(36161,34041,y.width,y.height);t.framebufferRenderbuffer(36160,33306,36161,_)}else{let V=s.convert(y.texture.format),O=s.convert(y.texture.type),K=D(y.texture.internalFormat,V,O);if(Z){let se=F(y);t.renderbufferStorageMultisample(36161,se,K,y.width,y.height)}else t.renderbufferStorage(36161,K,y.width,y.height)}t.bindRenderbuffer(36161,null)}function w(_,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,_),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);let V=i.get(y.depthTexture).__webglTexture;if(y.depthTexture.format===ci)t.framebufferTexture2D(36160,36096,3553,V,0);else if(y.depthTexture.format===vr)t.framebufferTexture2D(36160,33306,3553,V,0);else throw new Error("Unknown depthTexture format")}function b(_){let y=i.get(_),Z=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");w(y.__webglFramebuffer,_)}else if(Z){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(36160,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]=t.createRenderbuffer(),te(y.__webglDepthbuffer[V],_,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),te(y.__webglDepthbuffer,_,!1);t.bindFramebuffer(36160,null)}function P(_){let y=i.get(_),Z=i.get(_.texture);_.addEventListener("dispose",$),Z.__webglTexture=t.createTexture(),o.memory.textures++;let V=_.isWebGLCubeRenderTarget===!0,O=_.isWebGLMultisampleRenderTarget===!0,K=m(_)||a;if(a&&_.texture.format===nn&&(_.texture.type===yn||_.texture.type===ts)&&(_.texture.format=It,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),V){y.__webglFramebuffer=[];for(let se=0;se<6;se++)y.__webglFramebuffer[se]=t.createFramebuffer()}else if(y.__webglFramebuffer=t.createFramebuffer(),O)if(a){y.__webglMultisampledFramebuffer=t.createFramebuffer(),y.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,y.__webglColorRenderbuffer);let se=s.convert(_.texture.format),oe=s.convert(_.texture.type),re=D(_.texture.internalFormat,se,oe),me=F(_);t.renderbufferStorageMultisample(36161,me,re,_.width,_.height),t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,y.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),_.depthBuffer&&(y.__webglDepthRenderbuffer=t.createRenderbuffer(),te(y.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(V){n.bindTexture(34067,Z.__webglTexture),ge(34067,_.texture,K);for(let se=0;se<6;se++)Fe(y.__webglFramebuffer[se],_,36064,34069+se);R(_.texture,K)&&I(34067,_.texture,_.width,_.height),n.bindTexture(34067,null)}else n.bindTexture(3553,Z.__webglTexture),ge(3553,_.texture,K),Fe(y.__webglFramebuffer,_,36064,3553),R(_.texture,K)&&I(3553,_.texture,_.width,_.height),n.bindTexture(3553,null);_.depthBuffer&&b(_)}function S(_){let y=_.texture,Z=m(_)||a;if(R(y,Z)){let V=_.isWebGLCubeRenderTarget?34067:3553,O=i.get(y).__webglTexture;n.bindTexture(V,O),I(V,y,_.width,_.height),n.bindTexture(V,null)}}function C(_){if(_.isWebGLMultisampleRenderTarget)if(a){let y=i.get(_);t.bindFramebuffer(36008,y.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,y.__webglFramebuffer);let Z=_.width,V=_.height,O=16384;_.depthBuffer&&(O|=256),_.stencilBuffer&&(O|=1024),t.blitFramebuffer(0,0,Z,V,0,0,Z,V,O,9728),t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function F(_){return a&&_.isWebGLMultisampleRenderTarget?Math.min(h,_.samples):0}function E(_){let y=o.render.frame;d.get(_)!==y&&(d.set(_,y),_.update())}let A=!1,B=!1;function k(_,y){_&&_.isWebGLRenderTarget&&(A===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),A=!0),_=_.texture),z(_,y)}function U(_,y){_&&_.isWebGLCubeRenderTarget&&(B===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),B=!0),_=_.texture),ie(_,y)}this.allocateTextureUnit=X,this.resetTextureUnits=Q,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=ie,this.setupRenderTarget=P,this.updateRenderTargetMipmap=S,this.updateMultisampleRenderTarget=C,this.safeSetTexture2D=k,this.safeSetTextureCube=U}function km(t,e,n){let i=n.isWebGL2;function r(s){let o;if(s===fo)return 5121;if(s===Iu)return 32819;if(s===Du)return 32820;if(s===Ou)return 33635;if(s===Cu)return 5120;if(s===Ru)return 5122;if(s===Qr)return 5123;if(s===Pu)return 5124;if(s===es)return 5125;if(s===yn)return 5126;if(s===ts)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Fu)return 6406;if(s===nn)return 6407;if(s===It)return 6408;if(s===Bu)return 6409;if(s===Nu)return 6410;if(s===ci)return 6402;if(s===vr)return 34041;if(s===zu)return 6403;if(s===Uu)return 36244;if(s===Hu)return 33319;if(s===Gu)return 33320;if(s===ku)return 36248;if(s===Vu)return 36249;if(s===Va||s===Wa||s===ja||s===qa)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Va)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ja)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xa||s===Ya||s===Za||s===Ja)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Xa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ya)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Za)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ja)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Ka||s===$a)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Ka)return o.COMPRESSED_RGB8_ETC2;if(s===$a)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===ju||s===qu||s===Xu||s===Yu||s===Zu||s===Ju||s===Ku||s===$u||s===Qu||s===eh||s===th||s===nh||s===ih||s===rh||s===oh||s===ah||s===ch||s===lh||s===uh||s===hh||s===dh||s===fh||s===ph||s===mh||s===gh||s===vh||s===yh||s===xh)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===sh)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===gr)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function Yo(t=[]){Ye.call(this),this.cameras=t}Yo.prototype=Object.assign(Object.create(Ye.prototype),{constructor:Yo,isArrayCamera:!0});function jt(){ve.call(this),this.type="Group"}jt.prototype=Object.assign(Object.create(ve.prototype),{constructor:jt,isGroup:!0});function Rr(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(Rr.prototype,{constructor:Rr,getHandSpace:function(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this},disconnect:function(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(t,e,n){let i=null,r=null,s=null,o=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(c&&t.hand){s=!0;for(let g of t.hand.values()){let v=e.getJointPose(g,n);if(c.joints[g.jointName]===void 0){let m=new jt;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[g.jointName]=m,c.add(m)}let x=c.joints[g.jointName];v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=v.radius),x.visible=v!==null}let l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=l.position.distanceTo(u.position),d=.02,f=.005;c.inputState.pinching&&h>d+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function Vc(t,e){let n=this,i=null,r=1,s=null,o="local-floor",a=null,c=[],l=new Map,u=new Ye;u.layers.enable(1),u.viewport=new Ne;let h=new Ye;h.layers.enable(2),h.viewport=new Ne;let d=[u,h],f=new Yo;f.layers.enable(1),f.layers.enable(2);let g=null,v=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=c[W];return j===void 0&&(j=new Rr,c[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=c[W];return j===void 0&&(j=new Rr,c[W]=j),j.getGripSpace()},this.getHand=function(W){let j=c[W];return j===void 0&&(j=new Rr,c[W]=j),j.getHandSpace()};function x(W){let j=l.get(W.inputSource);j&&j.dispatchEvent({type:W.type,data:W.inputSource})}function m(){l.forEach(function(W,j){W.disconnect(j)}),l.clear(),g=null,v=null,t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),H.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){i.addEventListener("select",x),i.addEventListener("selectstart",x),i.addEventListener("selectend",x),i.addEventListener("squeeze",x),i.addEventListener("squeezestart",x),i.addEventListener("squeezeend",x),i.addEventListener("end",m),i.addEventListener("inputsourceschange",p);let j=e.getContextAttributes();j.xrCompatible!==!0&&await e.makeXRCompatible();let Q={antialias:j.antialias,alpha:j.alpha,depth:j.depth,stencil:j.stencil,framebufferScaleFactor:r},X=new XRWebGLLayer(i,e,Q);i.updateRenderState({baseLayer:X}),s=await i.requestReferenceSpace(o),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function p(W){let j=i.inputSources;for(let Q=0;Q<c.length;Q++)l.set(j[Q],c[Q]);for(let Q=0;Q<W.removed.length;Q++){let X=W.removed[Q],z=l.get(X);z&&(z.dispatchEvent({type:"disconnected",data:X}),l.delete(X))}for(let Q=0;Q<W.added.length;Q++){let X=W.added[Q],z=l.get(X);z&&z.dispatchEvent({type:"connected",data:X})}}let R=new L,I=new L;function D(W,j,Q){R.setFromMatrixPosition(j.matrixWorld),I.setFromMatrixPosition(Q.matrixWorld);let X=R.distanceTo(I),z=j.projectionMatrix.elements,G=Q.projectionMatrix.elements,Y=z[14]/(z[10]-1),ie=z[14]/(z[10]+1),ae=(z[9]+1)/z[5],le=(z[9]-1)/z[5],ge=(z[8]-1)/z[0],fe=(G[8]+1)/G[0],de=Y*ge,Te=Y*fe,Fe=X/(-ge+fe),te=Fe*-ge;j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(te),W.translateZ(Fe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let w=Y+Fe,b=ie+Fe,P=de-te,S=Te+(X-te),C=ae*ie/b*w,F=le*ie/b*w;W.projectionMatrix.makePerspective(P,S,C,F,w,b)}function M(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.getCamera=function(W){f.near=h.near=u.near=W.near,f.far=h.far=u.far=W.far,(g!==f.near||v!==f.far)&&(i.updateRenderState({depthNear:f.near,depthFar:f.far}),g=f.near,v=f.far);let j=W.parent,Q=f.cameras;M(f,j);for(let z=0;z<Q.length;z++)M(Q[z],j);W.matrixWorld.copy(f.matrixWorld),W.matrix.copy(f.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale);let X=W.children;for(let z=0,G=X.length;z<G;z++)X[z].updateMatrixWorld(!0);return Q.length===2?D(f,u,h):f.projectionMatrix.copy(u.projectionMatrix),f};let N=null;function $(W,j){if(a=j.getViewerPose(s),a!==null){let X=a.views,z=i.renderState.baseLayer;t.setFramebuffer(z.framebuffer);let G=!1;X.length!==f.cameras.length&&(f.cameras.length=0,G=!0);for(let Y=0;Y<X.length;Y++){let ie=X[Y],ae=z.getViewport(ie),le=d[Y];le.matrix.fromArray(ie.transform.matrix),le.projectionMatrix.fromArray(ie.projectionMatrix),le.viewport.set(ae.x,ae.y,ae.width,ae.height),Y===0&&f.matrix.copy(le.matrix),G===!0&&f.cameras.push(le)}}let Q=i.inputSources;for(let X=0;X<c.length;X++){let z=c[X],G=Q[X];z.update(G,j,s)}N&&N(W,j)}let H=new _c;H.setAnimationLoop($),this.setAnimationLoop=function(W){N=W},this.dispose=function(){}}Object.assign(Vc.prototype,_n.prototype);function Vm(t){function e(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,R,I){p.isMeshBasicMaterial?i(m,p):p.isMeshLambertMaterial?(i(m,p),c(m,p)):p.isMeshToonMaterial?(i(m,p),u(m,p)):p.isMeshPhongMaterial?(i(m,p),l(m,p)):p.isMeshStandardMaterial?(i(m,p),p.isMeshPhysicalMaterial?d(m,p):h(m,p)):p.isMeshMatcapMaterial?(i(m,p),f(m,p)):p.isMeshDepthMaterial?(i(m,p),g(m,p)):p.isMeshDistanceMaterial?(i(m,p),v(m,p)):p.isMeshNormalMaterial?(i(m,p),x(m,p)):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?o(m,p,R,I):p.isSpriteMaterial?a(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.specularMap&&(m.specularMap.value=p.specularMap);let R=t.get(p).envMap;if(R){m.envMap.value=R,m.flipEnvMap.value=R.isCubeTexture&&R._needsFlipEnvMap?-1:1,m.reflectivity.value=p.reflectivity,m.refractionRatio.value=p.refractionRatio;let M=t.get(R).__maxMipLevel;M!==void 0&&(m.maxMipLevel.value=M)}p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let I;p.map?I=p.map:p.specularMap?I=p.specularMap:p.displacementMap?I=p.displacementMap:p.normalMap?I=p.normalMap:p.bumpMap?I=p.bumpMap:p.roughnessMap?I=p.roughnessMap:p.metalnessMap?I=p.metalnessMap:p.alphaMap?I=p.alphaMap:p.emissiveMap?I=p.emissiveMap:p.clearcoatMap?I=p.clearcoatMap:p.clearcoatNormalMap?I=p.clearcoatNormalMap:p.clearcoatRoughnessMap&&(I=p.clearcoatRoughnessMap),I!==void 0&&(I.isWebGLRenderTarget&&(I=I.texture),I.matrixAutoUpdate===!0&&I.updateMatrix(),m.uvTransform.value.copy(I.matrix));let D;p.aoMap?D=p.aoMap:p.lightMap&&(D=p.lightMap),D!==void 0&&(D.isWebGLRenderTarget&&(D=D.texture),D.matrixAutoUpdate===!0&&D.updateMatrix(),m.uv2Transform.value.copy(D.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,R,I){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=I*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap);let D;p.map?D=p.map:p.alphaMap&&(D=p.alphaMap),D!==void 0&&(D.matrixAutoUpdate===!0&&D.updateMatrix(),m.uvTransform.value.copy(D.matrix))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap);let R;p.map?R=p.map:p.alphaMap&&(R=p.alphaMap),R!==void 0&&(R.matrixAutoUpdate===!0&&R.updateMatrix(),m.uvTransform.value.copy(R.matrix))}function c(m,p){p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===et&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===et&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===et&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===et&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===et&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===et&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p){h(m,p),m.reflectivity.value=p.reflectivity,m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.sheen&&m.sheen.value.copy(p.sheen),p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===et&&m.clearcoatNormalScale.value.negate()),m.transmission.value=p.transmission,p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===et&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===et&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function g(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function v(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}function x(m,p){p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===et&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===et&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Wm(){let t=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return t.style.display="block",t}function Bi(t){t=t||{};let e=t.canvas!==void 0?t.canvas:Wm(),n=t.context!==void 0?t.context:null,i=t.alpha!==void 0?t.alpha:!1,r=t.depth!==void 0?t.depth:!0,s=t.stencil!==void 0?t.stencil:!0,o=t.antialias!==void 0?t.antialias:!1,a=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,c=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1,h=null,d=null,f=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=di,this.physicallyCorrectLights=!1,this.toneMapping=pr,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;let g=this,v=!1,x=null,m=0,p=0,R=null,I=null,D=-1,M=null,N=new Ne,$=new Ne,H=null,W=e.width,j=e.height,Q=1,X=null,z=null,G=new Ne(0,0,W,j),Y=new Ne(0,0,W,j),ie=!1,ae=new Tr,le=!1,ge=!1,fe=new Se,de=new L,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return R===null?Q:1}let te=n;function w(T,J){for(let q=0;q<T.length;q++){let ee=T[q],he=e.getContext(ee,J);if(he!==null)return he}return null}try{let T={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",Ke,!1),te===null){let J=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&J.shift(),te=w(J,T),te===null)throw w(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let b,P,S,C,F,E,A,B,k,U,_,y,Z,V,O,K,se,oe,re,me,ye;function we(){b=new bp(te),P=new yp(te,b,t),b.init(P),me=new km(te,b,P),S=new Hm(te,b,P),S.scissor($.copy(Y).multiplyScalar(Q).floor()),S.viewport(N.copy(G).multiplyScalar(Q).floor()),C=new Sp(te),F=new Lm,E=new Gm(te,b,S,F,P,me,C),A=new _p(g),B=new qh(te,P),ye=new gp(te,b,B,P),k=new wp(te,B,C,ye),U=new Lp(te,k,B,C),se=new Ap(te),O=new xp(F),_=new Am(g,A,b,P,ye,O),y=new Vm(F),Z=new Pm(F),V=new Nm(b,P),K=new mp(g,A,S,U,a),oe=new vp(te,b,C,P),re=new Mp(te,b,C,P),C.programs=_.programs,g.capabilities=P,g.extensions=b,g.properties=F,g.renderLists=Z,g.state=S,g.info=C}we();let ue=new Vc(g,te);this.xr=ue;let xe=new kc(g,U,P.maxTextureSize);this.shadowMap=xe,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){let T=b.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=b.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(W,j,!1))},this.getSize=function(T){return T===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),T=new ne),T.set(W,j)},this.setSize=function(T,J,q){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,j=J,e.width=Math.floor(T*Q),e.height=Math.floor(J*Q),q!==!1&&(e.style.width=T+"px",e.style.height=J+"px"),this.setViewport(0,0,T,J)},this.getDrawingBufferSize=function(T){return T===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),T=new ne),T.set(W*Q,j*Q).floor()},this.setDrawingBufferSize=function(T,J,q){W=T,j=J,Q=q,e.width=Math.floor(T*q),e.height=Math.floor(J*q),this.setViewport(0,0,T,J)},this.getCurrentViewport=function(T){return T===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),T=new Ne),T.copy(N)},this.getViewport=function(T){return T.copy(G)},this.setViewport=function(T,J,q,ee){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,J,q,ee),S.viewport(N.copy(G).multiplyScalar(Q).floor())},this.getScissor=function(T){return T.copy(Y)},this.setScissor=function(T,J,q,ee){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,J,q,ee),S.scissor($.copy(Y).multiplyScalar(Q).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(T){S.setScissorTest(ie=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){z=T},this.getClearColor=function(T){return T===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),T=new pe),T.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(T,J,q){let ee=0;(T===void 0||T)&&(ee|=16384),(J===void 0||J)&&(ee|=256),(q===void 0||q)&&(ee|=1024),te.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Ke,!1),Z.dispose(),V.dispose(),F.dispose(),A.dispose(),U.dispose(),ye.dispose(),ue.dispose(),Ht.stop()};function Le(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Ke(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1,we()}function Ut(T){let J=T.target;J.removeEventListener("dispose",Ut),sr(J)}function sr(T){ii(T),F.remove(T)}function ii(T){let J=F.get(T).program;J!==void 0&&_.releaseProgram(J)}function ri(T,J){T.render(function(q){g.renderBufferImmediate(q,J)})}this.renderBufferImmediate=function(T,J){ye.initAttributes();let q=F.get(T);T.hasPositions&&!q.position&&(q.position=te.createBuffer()),T.hasNormals&&!q.normal&&(q.normal=te.createBuffer()),T.hasUvs&&!q.uv&&(q.uv=te.createBuffer()),T.hasColors&&!q.color&&(q.color=te.createBuffer());let ee=J.getAttributes();T.hasPositions&&(te.bindBuffer(34962,q.position),te.bufferData(34962,T.positionArray,35048),ye.enableAttribute(ee.position),te.vertexAttribPointer(ee.position,3,5126,!1,0,0)),T.hasNormals&&(te.bindBuffer(34962,q.normal),te.bufferData(34962,T.normalArray,35048),ye.enableAttribute(ee.normal),te.vertexAttribPointer(ee.normal,3,5126,!1,0,0)),T.hasUvs&&(te.bindBuffer(34962,q.uv),te.bufferData(34962,T.uvArray,35048),ye.enableAttribute(ee.uv),te.vertexAttribPointer(ee.uv,2,5126,!1,0,0)),T.hasColors&&(te.bindBuffer(34962,q.color),te.bufferData(34962,T.colorArray,35048),ye.enableAttribute(ee.color),te.vertexAttribPointer(ee.color,3,5126,!1,0,0)),ye.disableUnusedAttributes(),te.drawArrays(4,0,T.count),T.count=0},this.renderBufferDirect=function(T,J,q,ee,he,Ie){J===null&&(J=Te);let Ce=he.isMesh&&he.matrixWorld.determinant()<0,De=si(T,J,ee,he);S.setMaterial(ee,Ce);let Re=q.index,Ze=q.attributes.position;if(Re===null){if(Ze===void 0||Ze.count===0)return}else if(Re.count===0)return;let Xe=1;ee.wireframe===!0&&(Re=k.getWireframeAttribute(q),Xe=2),(ee.morphTargets||ee.morphNormals)&&se.update(he,q,ee,De),ye.setup(he,ee,De,q,Re);let Ae,Be=oe;Re!==null&&(Ae=B.get(Re),Be=re,Be.setIndex(Ae));let tn=Re!==null?Re.count:Ze.count,Ve=q.drawRange.start*Xe,Bn=q.drawRange.count*Xe,Qe=Ie!==null?Ie.start*Xe:0,so=Ie!==null?Ie.count*Xe:Infinity,pt=Math.max(Ve,Qe),lr=Math.min(tn,Ve+Bn,Qe+so)-1,oi=Math.max(0,lr-pt+1);if(oi!==0){if(he.isMesh)ee.wireframe===!0?(S.setLineWidth(ee.wireframeLinewidth*Fe()),Be.setMode(1)):Be.setMode(4);else if(he.isLine){let ur=ee.linewidth;ur===void 0&&(ur=1),S.setLineWidth(ur*Fe()),he.isLineSegments?Be.setMode(1):he.isLineLoop?Be.setMode(2):Be.setMode(3)}else he.isPoints?Be.setMode(0):he.isSprite&&Be.setMode(4);if(he.isInstancedMesh)Be.renderInstances(pt,oi,he.count);else if(q.isInstancedBufferGeometry){let ur=Math.min(q.instanceCount,q._maxInstanceCount);Be.renderInstances(pt,oi,ur)}else Be.render(pt,oi)}},this.compile=function(T,J){d=V.get(T),d.init(),T.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(d.pushLight(ee),ee.castShadow&&d.pushShadow(ee))}),d.setupLights();let q=new WeakMap;T.traverse(function(ee){let he=ee.material;if(he)if(Array.isArray(he))for(let Ie=0;Ie<he.length;Ie++){let Ce=he[Ie];q.has(Ce)===!1&&($e(Ce,T,ee),q.set(Ce))}else q.has(he)===!1&&($e(he,T,ee),q.set(he))})};let or=null;function io(T){ue.isPresenting||or&&or(T)}let Ht=new _c;Ht.setAnimationLoop(io),typeof window!="undefined"&&Ht.setContext(window),this.setAnimationLoop=function(T){or=T,ue.setAnimationLoop(T),T===null?Ht.stop():Ht.start()},this.render=function(T,J){let q,ee;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),q=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),ee=arguments[3]),J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;ye.resetDefaultState(),D=-1,M=null,T.autoUpdate===!0&&T.updateMatrixWorld(),J.parent===null&&J.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(J=ue.getCamera(J)),T.isScene===!0&&T.onBeforeRender(g,T,J,q||R),d=V.get(T,f.length),d.init(),f.push(d),fe.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ae.setFromProjectionMatrix(fe),ge=this.localClippingEnabled,le=O.init(this.clippingPlanes,ge,J),h=Z.get(T,J),h.init(),Lt(T,J,0,g.sortObjects),h.finish(),g.sortObjects===!0&&h.sort(X,z),le===!0&&O.beginShadows();let he=d.state.shadowsArray;xe.render(he,T,J),d.setupLights(),d.setupLightsView(J),le===!0&&O.endShadows(),this.info.autoReset===!0&&this.info.reset(),q!==void 0&&this.setRenderTarget(q),K.render(h,T,J,ee);let Ie=h.opaque,Ce=h.transparent;Ie.length>0&&gn(Ie,T,J),Ce.length>0&&gn(Ce,T,J),T.isScene===!0&&T.onAfterRender(g,T,J),R!==null&&(E.updateRenderTargetMipmap(R),E.updateMultisampleRenderTarget(R)),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1),f.pop(),f.length>0?d=f[f.length-1]:d=null,h=null};function Lt(T,J,q,ee){if(T.visible===!1)return;if(T.layers.test(J.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(J);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ae.intersectsSprite(T)){ee&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);let Ce=U.update(T),De=T.material;De.visible&&h.push(T,Ce,De,q,de.z,null)}}else if(T.isImmediateRenderObject)ee&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe),h.push(T,null,T.material,q,de.z,null);else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==C.render.frame&&(T.skeleton.update(),T.skeleton.frame=C.render.frame),!T.frustumCulled||ae.intersectsObject(T))){ee&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);let Ce=U.update(T),De=T.material;if(Array.isArray(De)){let Re=Ce.groups;for(let Ze=0,Xe=Re.length;Ze<Xe;Ze++){let Ae=Re[Ze],Be=De[Ae.materialIndex];Be&&Be.visible&&h.push(T,Ce,Be,q,de.z,Ae)}}else De.visible&&h.push(T,Ce,De,q,de.z,null)}}let Ie=T.children;for(let Ce=0,De=Ie.length;Ce<De;Ce++)Lt(Ie[Ce],J,q,ee)}function gn(T,J,q){let ee=J.isScene===!0?J.overrideMaterial:null;for(let he=0,Ie=T.length;he<Ie;he++){let Ce=T[he],De=Ce.object,Re=Ce.geometry,Ze=ee===null?Ce.material:ee,Xe=Ce.group;if(q.isArrayCamera){let Ae=q.cameras;for(let Be=0,tn=Ae.length;Be<tn;Be++){let Ve=Ae[Be];De.layers.test(Ve.layers)&&(S.viewport(N.copy(Ve.viewport)),d.setupLightsView(Ve),ar(De,J,Ve,Re,Ze,Xe))}}else ar(De,J,q,Re,Ze,Xe)}}function ar(T,J,q,ee,he,Ie){if(T.onBeforeRender(g,J,q,ee,he,Ie),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),T.isImmediateRenderObject){let Ce=si(q,J,he,T);S.setMaterial(he),ye.reset(),ri(T,Ce)}else g.renderBufferDirect(q,J,ee,he,T,Ie);T.onAfterRender(g,J,q,ee,he,Ie)}function $e(T,J,q){J.isScene!==!0&&(J=Te);let ee=F.get(T),he=d.state.lights,Ie=d.state.shadowsArray,Ce=he.state.version,De=_.getParameters(T,he.state,Ie,J,q),Re=_.getProgramCacheKey(De),Ze=ee.program,Xe=!0;if(ee.environment=T.isMeshStandardMaterial?J.environment:null,ee.fog=J.fog,ee.envMap=A.get(T.envMap||ee.environment),Ze===void 0)T.addEventListener("dispose",Ut);else if(Ze.cacheKey!==Re)ii(T);else if(ee.lightsStateVersion!==Ce)Xe=!1;else{if(De.shaderID!==void 0)return;Xe=!1}Xe&&(De.uniforms=_.getUniforms(T),T.onBeforeCompile(De,g),Ze=_.acquireProgram(De,Re),ee.program=Ze,ee.uniforms=De.uniforms,ee.outputEncoding=De.outputEncoding);let Ae=ee.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ee.numClippingPlanes=O.numPlanes,ee.numIntersection=O.numIntersection,Ae.clippingPlanes=O.uniform),ee.needsLights=ro(T),ee.lightsStateVersion=Ce,ee.needsLights&&(Ae.ambientLightColor.value=he.state.ambient,Ae.lightProbe.value=he.state.probe,Ae.directionalLights.value=he.state.directional,Ae.directionalLightShadows.value=he.state.directionalShadow,Ae.spotLights.value=he.state.spot,Ae.spotLightShadows.value=he.state.spotShadow,Ae.rectAreaLights.value=he.state.rectArea,Ae.ltc_1.value=he.state.rectAreaLTC1,Ae.ltc_2.value=he.state.rectAreaLTC2,Ae.pointLights.value=he.state.point,Ae.pointLightShadows.value=he.state.pointShadow,Ae.hemisphereLights.value=he.state.hemi,Ae.directionalShadowMap.value=he.state.directionalShadowMap,Ae.directionalShadowMatrix.value=he.state.directionalShadowMatrix,Ae.spotShadowMap.value=he.state.spotShadowMap,Ae.spotShadowMatrix.value=he.state.spotShadowMatrix,Ae.pointShadowMap.value=he.state.pointShadowMap,Ae.pointShadowMatrix.value=he.state.pointShadowMatrix);let Be=ee.program.getUniforms(),tn=Rn.seqWithValue(Be.seq,Ae);ee.uniformsList=tn}function si(T,J,q,ee){J.isScene!==!0&&(J=Te),E.resetTextureUnits();let he=J.fog,Ie=q.isMeshStandardMaterial?J.environment:null,Ce=R===null?g.outputEncoding:R.texture.encoding,De=A.get(q.envMap||Ie),Re=F.get(q),Ze=d.state.lights;if(le===!0&&(ge===!0||T!==M)){let Qe=T===M&&q.id===D;O.setState(q,T,Qe)}q.version===Re.__version?(q.fog&&Re.fog!==he||Re.environment!==Ie||Re.needsLights&&Re.lightsStateVersion!==Ze.state.version||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==O.numPlanes||Re.numIntersection!==O.numIntersection)||Re.outputEncoding!==Ce||Re.envMap!==De)&&$e(q,J,ee):($e(q,J,ee),Re.__version=q.version);let Xe=!1,Ae=!1,Be=!1,tn=Re.program,Ve=tn.getUniforms(),Bn=Re.uniforms;if(S.useProgram(tn.program)&&(Xe=!0,Ae=!0,Be=!0),q.id!==D&&(D=q.id,Ae=!0),Xe||M!==T){if(Ve.setValue(te,"projectionMatrix",T.projectionMatrix),P.logarithmicDepthBuffer&&Ve.setValue(te,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,Ae=!0,Be=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){let Qe=Ve.map.cameraPosition;Qe!==void 0&&Qe.setValue(te,de.setFromMatrixPosition(T.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ve.setValue(te,"isOrthographic",T.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||q.skinning)&&Ve.setValue(te,"viewMatrix",T.matrixWorldInverse)}if(q.skinning){Ve.setOptional(te,ee,"bindMatrix"),Ve.setOptional(te,ee,"bindMatrixInverse");let Qe=ee.skeleton;if(Qe){let so=Qe.bones;if(P.floatVertexTextures){if(Qe.boneTexture===null){let pt=Math.sqrt(so.length*4);pt=Me.ceilPowerOfTwo(pt),pt=Math.max(pt,4);let lr=new Float32Array(pt*pt*4);lr.set(Qe.boneMatrices);let oi=new Di(lr,pt,pt,It,yn);Qe.boneMatrices=lr,Qe.boneTexture=oi,Qe.boneTextureSize=pt}Ve.setValue(te,"boneTexture",Qe.boneTexture,E),Ve.setValue(te,"boneTextureSize",Qe.boneTextureSize)}else Ve.setOptional(te,Qe,"boneMatrices")}}return(Ae||Re.receiveShadow!==ee.receiveShadow)&&(Re.receiveShadow=ee.receiveShadow,Ve.setValue(te,"receiveShadow",ee.receiveShadow)),Ae&&(Ve.setValue(te,"toneMappingExposure",g.toneMappingExposure),Re.needsLights&&cr(Bn,Be),he&&q.fog&&y.refreshFogUniforms(Bn,he),y.refreshMaterialUniforms(Bn,q,Q,j),Rn.upload(te,Re.uniformsList,Bn,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Rn.upload(te,Re.uniformsList,Bn,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ve.setValue(te,"center",ee.center),Ve.setValue(te,"modelViewMatrix",ee.modelViewMatrix),Ve.setValue(te,"normalMatrix",ee.normalMatrix),Ve.setValue(te,"modelMatrix",ee.matrixWorld),tn}function cr(T,J){T.ambientLightColor.needsUpdate=J,T.lightProbe.needsUpdate=J,T.directionalLights.needsUpdate=J,T.directionalLightShadows.needsUpdate=J,T.pointLights.needsUpdate=J,T.pointLightShadows.needsUpdate=J,T.spotLights.needsUpdate=J,T.spotLightShadows.needsUpdate=J,T.rectAreaLights.needsUpdate=J,T.hemisphereLights.needsUpdate=J}function ro(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.setFramebuffer=function(T){x!==T&&R===null&&te.bindFramebuffer(36160,T),x=T},this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return p},this.getRenderList=function(){return h},this.setRenderList=function(T){h=T},this.getRenderTarget=function(){return R},this.setRenderTarget=function(T,J=0,q=0){R=T,m=J,p=q,T&&F.get(T).__webglFramebuffer===void 0&&E.setupRenderTarget(T);let ee=x,he=!1;if(T){let Ie=F.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ee=Ie[J],he=!0):T.isWebGLMultisampleRenderTarget?ee=F.get(T).__webglMultisampledFramebuffer:ee=Ie,N.copy(T.viewport),$.copy(T.scissor),H=T.scissorTest}else N.copy(G).multiplyScalar(Q).floor(),$.copy(Y).multiplyScalar(Q).floor(),H=ie;if(I!==ee&&(te.bindFramebuffer(36160,ee),I=ee),S.viewport(N),S.scissor($),S.setScissorTest(H),he){let Ie=F.get(T.texture);te.framebufferTexture2D(36160,36064,34069+J,Ie.__webglTexture,q)}},this.readRenderTargetPixels=function(T,J,q,ee,he,Ie,Ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=F.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){let Re=!1;De!==I&&(te.bindFramebuffer(36160,De),Re=!0);try{let Ze=T.texture,Xe=Ze.format,Ae=Ze.type;if(Xe!==It&&me.convert(Xe)!==te.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Be=Ae===ts&&(b.has("EXT_color_buffer_half_float")||P.isWebGL2&&b.has("EXT_color_buffer_float"));if(Ae!==fo&&me.convert(Ae)!==te.getParameter(35738)&&!(Ae===yn&&(P.isWebGL2||b.has("OES_texture_float")||b.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te.checkFramebufferStatus(36160)===36053?J>=0&&J<=T.width-ee&&q>=0&&q<=T.height-he&&te.readPixels(J,q,ee,he,me.convert(Xe),me.convert(Ae),Ie):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Re&&te.bindFramebuffer(36160,I)}}},this.copyFramebufferToTexture=function(T,J,q=0){let ee=Math.pow(2,-q),he=Math.floor(J.image.width*ee),Ie=Math.floor(J.image.height*ee),Ce=me.convert(J.format);E.setTexture2D(J,0),te.copyTexImage2D(3553,q,Ce,T.x,T.y,he,Ie,0),S.unbindTexture()},this.copyTextureToTexture=function(T,J,q,ee=0){let he=J.image.width,Ie=J.image.height,Ce=me.convert(q.format),De=me.convert(q.type);E.setTexture2D(q,0),te.pixelStorei(37440,q.flipY),te.pixelStorei(37441,q.premultiplyAlpha),te.pixelStorei(3317,q.unpackAlignment),J.isDataTexture?te.texSubImage2D(3553,ee,T.x,T.y,he,Ie,Ce,De,J.image.data):J.isCompressedTexture?te.compressedTexSubImage2D(3553,ee,T.x,T.y,J.mipmaps[0].width,J.mipmaps[0].height,Ce,J.mipmaps[0].data):te.texSubImage2D(3553,ee,T.x,T.y,Ce,De,J.image),ee===0&&q.generateMipmaps&&te.generateMipmap(3553),S.unbindTexture()},this.initTexture=function(T){E.setTexture2D(T,0),S.unbindTexture()},this.resetState=function(){S.reset(),ye.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Wc(t){Bi.call(this,t)}Wc.prototype=Object.assign(Object.create(Bi.prototype),{constructor:Wc,isWebGL1Renderer:!0});var Pr=class extends ve{constructor(){super();Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.background!==null&&(n.object.background=this.background.toJSON(e)),this.environment!==null&&(n.object.environment=this.environment.toJSON(e)),this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}};function yt(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Me.generateUUID()}Object.defineProperty(yt.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(yt.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this},set:function(t,e=0){return this.array.set(t,e),this},clone:function(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Me.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new yt(e,this.stride);return n.setUsage(this.usage),n},onUpload:function(t){return this.onUploadCallback=t,this},toJSON:function(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Me.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});var jn=new L;function ln(t,e,n,i){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}Object.defineProperties(ln.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(t){this.data.needsUpdate=t}}});Object.assign(ln.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(t){for(let e=0,n=this.data.count;e<n;e++)jn.x=this.getX(e),jn.y=this.getY(e),jn.z=this.getZ(e),jn.applyMatrix4(t),this.setXYZ(e,jn.x,jn.y,jn.z);return this},setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this},clone:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ln(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function qn(t){be.call(this),this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}qn.prototype=Object.create(be.prototype);qn.prototype.constructor=qn;qn.prototype.isSpriteMaterial=!0;qn.prototype.copy=function(t){return be.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this};var Ni,Ir=new L,zi=new L,Ui=new L,Hi=new ne,Dr=new ne,jc=new Se,Es=new L,Or=new L,As=new L,qc=new ne,Zo=new ne,Xc=new ne;function Yc(t){if(ve.call(this),this.type="Sprite",Ni===void 0){Ni=new ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yt(e,5);Ni.setIndex([0,1,2,0,2,3]),Ni.setAttribute("position",new ln(n,3,0,!1)),Ni.setAttribute("uv",new ln(n,2,3,!1))}this.geometry=Ni,this.material=t!==void 0?t:new qn,this.center=new ne(.5,.5)}Yc.prototype=Object.assign(Object.create(ve.prototype),{constructor:Yc,isSprite:!0,raycast:function(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),jc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ui.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-Ui.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let s=this.center;Ls(Es.set(-.5,-.5,0),Ui,s,zi,i,r),Ls(Or.set(.5,-.5,0),Ui,s,zi,i,r),Ls(As.set(.5,.5,0),Ui,s,zi,i,r),qc.set(0,0),Zo.set(1,0),Xc.set(1,1);let o=t.ray.intersectTriangle(Es,Or,As,!1,Ir);if(o===null&&(Ls(Or.set(-.5,.5,0),Ui,s,zi,i,r),Zo.set(0,1),o=t.ray.intersectTriangle(Es,As,Or,!1,Ir),o===null))return;let a=t.ray.origin.distanceTo(Ir);a<t.near||a>t.far||e.push({distance:a,point:Ir.clone(),uv:st.getUV(Ir,Es,Or,As,qc,Zo,Xc,new ne),face:null,object:this})},copy:function(t){return ve.prototype.copy.call(this,t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}});function Ls(t,e,n,i,r,s){Hi.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Dr.x=s*Hi.x-r*Hi.y,Dr.y=r*Hi.x+s*Hi.y):Dr.copy(Hi),t.copy(e),t.x+=Dr.x,t.y+=Dr.y,t.applyMatrix4(jc)}var Cs=new L,Zc=new L;function Jo(){ve.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}Jo.prototype=Object.assign(Object.create(ve.prototype),{constructor:Jo,isLOD:!0,copy:function(t){ve.prototype.copy.call(this,t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=t.autoUpdate,this},addLevel:function(t,e=0){e=Math.abs(e);let n=this.levels,i;for(i=0;i<n.length&&!(e<n[i].distance);i++);return n.splice(i,0,{distance:e,object:t}),this.add(t),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object}return null},raycast:function(t,e){if(this.levels.length>0){Cs.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(Cs);this.getObjectForDistance(i).raycast(t,e)}},update:function(t){let e=this.levels;if(e.length>1){Cs.setFromMatrixPosition(t.matrixWorld),Zc.setFromMatrixPosition(this.matrixWorld);let n=Cs.distanceTo(Zc)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r&&n>=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}},toJSON:function(t){let e=ve.prototype.toJSON.call(this,t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let s=n[i];e.object.levels.push({object:s.object.uuid,distance:s.distance})}return e}});var Jc=new L,Kc=new Ne,$c=new Ne,jm=new L,Qc=new Se;function Fr(t,e){t&&t.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),Ge.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Se,this.bindMatrixInverse=new Se}Fr.prototype=Object.assign(Object.create(Ge.prototype),{constructor:Fr,isSkinnedMesh:!0,copy:function(t){return Ge.prototype.copy.call(this,t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this},bind:function(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){let t=new Ne,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);let r=1/t.manhattanLength();r!==Infinity?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}},updateMatrixWorld:function(t){Ge.prototype.updateMatrixWorld.call(this,t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(t,e){let n=this.skeleton,i=this.geometry;Kc.fromBufferAttribute(i.attributes.skinIndex,t),$c.fromBufferAttribute(i.attributes.skinWeight,t),Jc.fromBufferAttribute(i.attributes.position,t).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let s=$c.getComponent(r);if(s!==0){let o=Kc.getComponent(r);Qc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(jm.copy(Jc).applyMatrix4(Qc),s)}}return e.applyMatrix4(this.bindMatrixInverse)}});function Br(){ve.call(this),this.type="Bone"}Br.prototype=Object.assign(Object.create(ve.prototype),{constructor:Br,isBone:!0});var el=new Se,qm=new Se;function Nr(t=[],e=[]){this.uuid=Me.generateUUID(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}Object.assign(Nr.prototype,{init:function(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Se)}},calculateInverses:function(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Se;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}},pose:function(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){let o=t[r]?t[r].matrixWorld:qm;el.multiplyMatrices(o,e[r]),el.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)},clone:function(){return new Nr(this.bones,this.boneInverses)},getBoneByName:function(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}},dispose:function(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)},fromJSON:function(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],s=e[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Br),this.bones.push(s),this.boneInverses.push(new Se().fromArray(t.boneInverses[n]))}return this.init(),this},toJSON:function(){let t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let s=e[i];t.bones.push(s.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}});var tl=new Se,nl=new Se,Rs=[],zr=new Ge;function il(t,e,n){Ge.call(this,t,e),this.instanceMatrix=new Ee(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}il.prototype=Object.assign(Object.create(Ge.prototype),{constructor:il,isInstancedMesh:!0,copy:function(t){return Ge.prototype.copy.call(this,t),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this},getColorAt:function(t,e){e.fromArray(this.instanceColor.array,t*3)},getMatrixAt:function(t,e){e.fromArray(this.instanceMatrix.array,t*16)},raycast:function(t,e){let n=this.matrixWorld,i=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,tl),nl.multiplyMatrices(n,tl),zr.matrixWorld=nl,zr.raycast(t,Rs);for(let s=0,o=Rs.length;s<o;s++){let a=Rs[s];a.instanceId=r,a.object=this,e.push(a)}Rs.length=0}},setColorAt:function(t,e){this.instanceColor===null&&(this.instanceColor=new Ee(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,t*3)},setMatrixAt:function(t,e){e.toArray(this.instanceMatrix.array,t*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});function xt(t){be.call(this),this.type="LineBasicMaterial",this.color=new pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t)}xt.prototype=Object.create(be.prototype);xt.prototype.constructor=xt;xt.prototype.isLineBasicMaterial=!0;xt.prototype.copy=function(t){return be.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this};var rl=new L,sl=new L,ol=new Se,Ko=new _i,Ps=new Gt;function Pn(t=new ze,e=new xt){ve.call(this),this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}Pn.prototype=Object.assign(Object.create(ve.prototype),{constructor:Pn,isLine:!0,copy:function(t){return ve.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},computeLineDistances:function(){let t=this.geometry;if(t.isBufferGeometry)if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)rl.fromBufferAttribute(e,i-1),sl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=rl.distanceTo(sl);t.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this},raycast:function(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(i),Ps.radius+=r,t.ray.intersectsSphere(Ps)===!1)return;ol.copy(i).invert(),Ko.copy(t.ray).applyMatrix4(ol);let s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new L,c=new L,l=new L,u=new L,h=this.isLineSegments?2:1;if(n.isBufferGeometry){let d=n.index,g=n.attributes.position;if(d!==null){let v=d.array;for(let x=0,m=v.length-1;x<m;x+=h){let p=v[x],R=v[x+1];if(a.fromBufferAttribute(g,p),c.fromBufferAttribute(g,R),Ko.distanceSqToSegment(a,c,u,l)>o)continue;u.applyMatrix4(this.matrixWorld);let D=t.ray.origin.distanceTo(u);D<t.near||D>t.far||e.push({distance:D,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else for(let v=0,x=g.count-1;v<x;v+=h){if(a.fromBufferAttribute(g,v),c.fromBufferAttribute(g,v+1),Ko.distanceSqToSegment(a,c,u,l)>o)continue;u.applyMatrix4(this.matrixWorld);let p=t.ray.origin.distanceTo(u);p<t.near||p>t.far||e.push({distance:p,point:l.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let e=t.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});var al=new L,cl=new L;function Gi(t,e){Pn.call(this,t,e),this.type="LineSegments"}Gi.prototype=Object.assign(Object.create(Pn.prototype),{constructor:Gi,isLineSegments:!0,computeLineDistances:function(){let t=this.geometry;if(t.isBufferGeometry)if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)al.fromBufferAttribute(e,i),cl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+al.distanceTo(cl);t.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}});function Is(t,e){Pn.call(this,t,e),this.type="LineLoop"}Is.prototype=Object.assign(Object.create(Pn.prototype),{constructor:Is,isLineLoop:!0});function un(t){be.call(this),this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t)}un.prototype=Object.create(be.prototype);un.prototype.constructor=un;un.prototype.isPointsMaterial=!0;un.prototype.copy=function(t){return be.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};var ll=new Se,$o=new _i,Ds=new Gt,Os=new L;function Fs(t=new ze,e=new un){ve.call(this),this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}Fs.prototype=Object.assign(Object.create(ve.prototype),{constructor:Fs,isPoints:!0,copy:function(t){return ve.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},raycast:function(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(i),Ds.radius+=r,t.ray.intersectsSphere(Ds)===!1)return;ll.copy(i).invert(),$o.copy(t.ray).applyMatrix4(ll);let s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){let a=n.index,l=n.attributes.position;if(a!==null){let u=a.array;for(let h=0,d=u.length;h<d;h++){let f=u[h];Os.fromBufferAttribute(l,f),ul(Os,f,o,i,t,e,this)}}else for(let u=0,h=l.count;u<h;u++)Os.fromBufferAttribute(l,u),ul(Os,u,o,i,t,e,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){let t=this.geometry;if(t.isBufferGeometry){let e=t.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function ul(t,e,n,i,r,s,o){let a=$o.distanceSqToPoint(t);if(a<n){let c=new L;$o.closestPointToPoint(t,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}function hl(t,e,n,i,r,s,o,a,c){Ue.call(this,t,e,n,i,r,s,o,a,c),this.format=o!==void 0?o:nn,this.minFilter=s!==void 0?s:Je,this.magFilter=r!==void 0?r:Je,this.generateMipmaps=!1;let l=this;function u(){l.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}hl.prototype=Object.assign(Object.create(Ue.prototype),{constructor:hl,clone:function(){return new this.constructor(this.image).copy(this)},isVideoTexture:!0,update:function(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Ur(t,e,n,i,r,s,o,a,c,l,u,h){Ue.call(this,null,s,o,a,c,l,i,r,u,h),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}Ur.prototype=Object.create(Ue.prototype);Ur.prototype.constructor=Ur;Ur.prototype.isCompressedTexture=!0;function ki(t,e,n,i,r,s,o,a,c){Ue.call(this,t,e,n,i,r,s,o,a,c),this.needsUpdate=!0}ki.prototype=Object.create(Ue.prototype);ki.prototype.constructor=ki;ki.prototype.isCanvasTexture=!0;function Bs(t,e,n,i,r,s,o,a,c,l){if(l=l!==void 0?l:ci,l!==ci&&l!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===ci&&(n=Qr),n===void 0&&l===vr&&(n=gr),Ue.call(this,null,i,r,s,o,a,l,n,c),this.image={width:t,height:e},this.magFilter=o!==void 0?o:nt,this.minFilter=a!==void 0?a:nt,this.flipY=!1,this.generateMipmaps=!1}Bs.prototype=Object.create(Ue.prototype);Bs.prototype.constructor=Bs;Bs.prototype.isDepthTexture=!0;var Xg=new L,Yg=new L,Zg=new L,Jg=new st;var Ym={triangulate:function(t,e,n){n=n||2;let i=e&&e.length,r=i?e[0]*n:t.length,s=dl(t,0,r,n,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,d,f;if(i&&(s=Xm(t,e,s,n)),t.length>80*n){a=l=t[0],c=u=t[1];for(let g=n;g<r;g+=n)h=t[g],d=t[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?1/f:0}return Hr(s,o,n,a,c,f),o}};function dl(t,e,n,i,r){let s,o;if(r===Zm(t,e,n,i)>0)for(s=e;s<n;s+=i)o=fl(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=fl(s,t[s],t[s+1],o);return o&&Ns(o,o.next)&&(Gr(o),o=o.next),o}function In(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Ns(n,n.next)||qe(n.prev,n,n.next)===0)){if(Gr(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Hr(t,e,n,i,r,s,o){if(!t)return;!o&&s&&eg(t,i,r,s);let a=t,c,l;for(;t.prev!==t.next;){if(c=t.prev,l=t.next,s?Km(t,i,r,s):Jm(t)){e.push(c.i/n),e.push(t.i/n),e.push(l.i/n),Gr(t),t=l.next,a=l.next;continue}if(t=l,t===a){o?o===1?(t=$m(In(t),e,n),Hr(t,e,n,i,r,s,2)):o===2&&Qm(t,e,n,i,r,s):Hr(In(t),e,n,i,r,s,1);break}}}function Jm(t){let e=t.prev,n=t,i=t.next;if(qe(e,n,i)>=0)return!1;let r=t.next.next;for(;r!==t.prev;){if(Vi(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&qe(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function Km(t,e,n,i){let r=t.prev,s=t,o=t.next;if(qe(r,s,o)>=0)return!1;let a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=Qo(a,c,e,n,i),d=Qo(l,u,e,n,i),f=t.prevZ,g=t.nextZ;for(;f&&f.z>=h&&g&&g.z<=d;){if(f!==t.prev&&f!==t.next&&Vi(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&qe(f.prev,f,f.next)>=0||(f=f.prevZ,g!==t.prev&&g!==t.next&&Vi(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&qe(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=h;){if(f!==t.prev&&f!==t.next&&Vi(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&qe(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=d;){if(g!==t.prev&&g!==t.next&&Vi(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&qe(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function $m(t,e,n){let i=t;do{let r=i.prev,s=i.next.next;!Ns(r,s)&&pl(r,i,i.next,s)&&kr(r,s)&&kr(s,r)&&(e.push(r.i/n),e.push(i.i/n),e.push(s.i/n),Gr(i),Gr(i.next),i=t=s),i=i.next}while(i!==t);return In(i)}function Qm(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tg(o,a)){let c=ml(o,a);o=In(o,o.next),c=In(c,c.next),Hr(o,e,n,i,r,s),Hr(c,e,n,i,r,s);return}a=a.next}o=o.next}while(o!==t)}function Xm(t,e,n,i){let r=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:t.length,l=dl(t,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(rg(l));for(r.sort(ng),s=0;s<r.length;s++)ig(r[s],n),n=In(n,n.next);return n}function ng(t,e){return t.x-e.x}function ig(t,e){if(e=sg(t,e),e){let n=ml(e,t);In(e,e.next),In(n,n.next)}}function sg(t,e){let n=e,i=t.x,r=t.y,s=-Infinity,o;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){let d=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>s){if(s=d,d===i){if(r===n.y)return n;if(r===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===s)return o;let a=o,c=o.x,l=o.y,u=Infinity,h;n=o;do i>=n.x&&n.x>=c&&i!==n.x&&Vi(r<l?i:s,r,c,l,r<l?s:i,r,n.x,n.y)&&(h=Math.abs(r-n.y)/(i-n.x),kr(n,t)&&(h<u||h===u&&(n.x>o.x||n.x===o.x&&og(o,n)))&&(o=n,u=h)),n=n.next;while(n!==a);return o}function og(t,e){return qe(t.prev,t,e.prev)<0&&qe(e.next,t,t.next)<0}function eg(t,e,n,i){let r=t;do r.z===null&&(r.z=Qo(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,ag(r)}function ag(t){let e,n,i,r,s,o,a,c,l=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,l*=2}while(o>1);return t}function Qo(t,e,n,i,r){return t=32767*(t-n)*r,e=32767*(e-i)*r,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function rg(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Vi(t,e,n,i,r,s,o,a){return(r-o)*(e-a)-(t-o)*(s-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function tg(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!cg(t,e)&&(kr(t,e)&&kr(e,t)&&lg(t,e)&&(qe(t.prev,t,e.prev)||qe(t,e.prev,e))||Ns(t,e)&&qe(t.prev,t,t.next)>0&&qe(e.prev,e,e.next)>0)}function qe(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Ns(t,e){return t.x===e.x&&t.y===e.y}function pl(t,e,n,i){let r=Us(qe(t,e,n)),s=Us(qe(t,e,i)),o=Us(qe(n,i,t)),a=Us(qe(n,i,e));return!!(r!==s&&o!==a||r===0&&zs(t,n,e)||s===0&&zs(t,i,e)||o===0&&zs(n,t,i)||a===0&&zs(n,e,i))}function zs(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Us(t){return t>0?1:t<0?-1:0}function cg(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&pl(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function kr(t,e){return qe(t.prev,t,t.next)<0?qe(t,e,t.next)>=0&&qe(t,t.prev,e)>=0:qe(t,e,t.prev)<0||qe(t,t.next,e)<0}function lg(t,e){let n=t,i=!1,r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function ml(t,e){let n=new ea(t.i,t.x,t.y),i=new ea(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function fl(t,e,n,i){let r=new ea(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Gr(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function ea(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Zm(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}var Dn={area:function(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5},isClockWise:function(t){return Dn.area(t)<0},triangulateShape:function(t,e){let n=[],i=[],r=[];gl(t),vl(n,t);let s=t.length;e.forEach(gl);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,vl(n,e[a]);let o=Ym.triangulate(n,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function gl(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function vl(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var ta=class extends ze{constructor(e,n){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new We(r,3)),this.setAttribute("uv",new We(s,2)),this.computeVertexNormals();function o(a){let c=[],l=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:100,d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,f=n.bevelThickness!==void 0?n.bevelThickness:6,g=n.bevelSize!==void 0?n.bevelSize:f-2,v=n.bevelOffset!==void 0?n.bevelOffset:0,x=n.bevelSegments!==void 0?n.bevelSegments:3,m=n.extrudePath,p=n.UVGenerator!==void 0?n.UVGenerator:ug;n.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=n.amount);let R,I=!1,D,M,N,$;m&&(R=m.getSpacedPoints(u),I=!0,d=!1,D=m.computeFrenetFrames(u,!1),M=new L,N=new L,$=new L),d||(x=0,f=0,g=0,v=0);let H=a.extractPoints(l),W=H.shape,j=H.holes;if(!Dn.isClockWise(W)){W=W.reverse();for(let E=0,A=j.length;E<A;E++){let B=j[E];Dn.isClockWise(B)&&(j[E]=B.reverse())}}let X=Dn.triangulateShape(W,j),z=W;for(let E=0,A=j.length;E<A;E++){let B=j[E];W=W.concat(B)}function G(E,A,B){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),A.clone().multiplyScalar(B).add(E)}let Y=W.length,ie=X.length;function ae(E,A,B){let k,U,_,y=E.x-A.x,Z=E.y-A.y,V=B.x-E.x,O=B.y-E.y,K=y*y+Z*Z,se=y*O-Z*V;if(Math.abs(se)>Number.EPSILON){let oe=Math.sqrt(K),re=Math.sqrt(V*V+O*O),me=A.x-Z/oe,ye=A.y+y/oe,we=B.x-O/re,ue=B.y+V/re,xe=((we-me)*O-(ue-ye)*V)/(y*O-Z*V);k=me+y*xe-E.x,U=ye+Z*xe-E.y;let Le=k*k+U*U;if(Le<=2)return new ne(k,U);_=Math.sqrt(Le/2)}else{let oe=!1;y>Number.EPSILON?V>Number.EPSILON&&(oe=!0):y<-Number.EPSILON?V<-Number.EPSILON&&(oe=!0):Math.sign(Z)===Math.sign(O)&&(oe=!0),oe?(k=-Z,U=y,_=Math.sqrt(K)):(k=y,U=Z,_=Math.sqrt(K/2))}return new ne(k/_,U/_)}let le=[];for(let E=0,A=z.length,B=A-1,k=E+1;E<A;E++,B++,k++)B===A&&(B=0),k===A&&(k=0),le[E]=ae(z[E],z[B],z[k]);let ge=[],fe,de=le.concat();for(let E=0,A=j.length;E<A;E++){let B=j[E];fe=[];for(let k=0,U=B.length,_=U-1,y=k+1;k<U;k++,_++,y++)_===U&&(_=0),y===U&&(y=0),fe[k]=ae(B[k],B[_],B[y]);ge.push(fe),de=de.concat(fe)}for(let E=0;E<x;E++){let A=E/x,B=f*Math.cos(A*Math.PI/2),k=g*Math.sin(A*Math.PI/2)+v;for(let U=0,_=z.length;U<_;U++){let y=G(z[U],le[U],k);b(y.x,y.y,-B)}for(let U=0,_=j.length;U<_;U++){let y=j[U];fe=ge[U];for(let Z=0,V=y.length;Z<V;Z++){let O=G(y[Z],fe[Z],k);b(O.x,O.y,-B)}}}let Te=g+v;for(let E=0;E<Y;E++){let A=d?G(W[E],de[E],Te):W[E];I?(N.copy(D.normals[0]).multiplyScalar(A.x),M.copy(D.binormals[0]).multiplyScalar(A.y),$.copy(R[0]).add(N).add(M),b($.x,$.y,$.z)):b(A.x,A.y,0)}for(let E=1;E<=u;E++)for(let A=0;A<Y;A++){let B=d?G(W[A],de[A],Te):W[A];I?(N.copy(D.normals[E]).multiplyScalar(B.x),M.copy(D.binormals[E]).multiplyScalar(B.y),$.copy(R[E]).add(N).add(M),b($.x,$.y,$.z)):b(B.x,B.y,h/u*E)}for(let E=x-1;E>=0;E--){let A=E/x,B=f*Math.cos(A*Math.PI/2),k=g*Math.sin(A*Math.PI/2)+v;for(let U=0,_=z.length;U<_;U++){let y=G(z[U],le[U],k);b(y.x,y.y,h+B)}for(let U=0,_=j.length;U<_;U++){let y=j[U];fe=ge[U];for(let Z=0,V=y.length;Z<V;Z++){let O=G(y[Z],fe[Z],k);I?b(O.x,O.y+R[u-1].y,R[u-1].x+B):b(O.x,O.y,h+B)}}}Fe(),te();function Fe(){let E=r.length/3;if(d){let A=0,B=Y*A;for(let k=0;k<ie;k++){let U=X[k];P(U[2]+B,U[1]+B,U[0]+B)}A=u+x*2,B=Y*A;for(let k=0;k<ie;k++){let U=X[k];P(U[0]+B,U[1]+B,U[2]+B)}}else{for(let A=0;A<ie;A++){let B=X[A];P(B[2],B[1],B[0])}for(let A=0;A<ie;A++){let B=X[A];P(B[0]+Y*u,B[1]+Y*u,B[2]+Y*u)}}i.addGroup(E,r.length/3-E,0)}function te(){let E=r.length/3,A=0;w(z,A),A+=z.length;for(let B=0,k=j.length;B<k;B++){let U=j[B];w(U,A),A+=U.length}i.addGroup(E,r.length/3-E,1)}function w(E,A){let B=E.length;for(;--B>=0;){let k=B,U=B-1;U<0&&(U=E.length-1);for(let _=0,y=u+x*2;_<y;_++){let Z=Y*_,V=Y*(_+1),O=A+k+Z,K=A+U+Z,se=A+U+V,oe=A+k+V;S(O,K,se,oe)}}}function b(E,A,B){c.push(E),c.push(A),c.push(B)}function P(E,A,B){C(E),C(A),C(B);let k=r.length/3,U=p.generateTopUV(i,r,k-3,k-2,k-1);F(U[0]),F(U[1]),F(U[2])}function S(E,A,B,k){C(E),C(A),C(k),C(A),C(B),C(k);let U=r.length/3,_=p.generateSideWallUV(i,r,U-6,U-3,U-2,U-1);F(_[0]),F(_[1]),F(_[3]),F(_[1]),F(_[2]),F(_[3])}function C(E){r.push(c[E*3+0]),r.push(c[E*3+1]),r.push(c[E*3+2])}function F(E){s.push(E.x),s.push(E.y)}}}toJSON(){let e=ze.prototype.toJSON.call(this),n=this.parameters.shapes,i=this.parameters.options;return hg(n,i,e)}},ug={generateTopUV:function(t,e,n,i,r){let s=e[n*3],o=e[n*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new ne(s,o),new ne(a,c),new ne(l,u)]},generateSideWallUV:function(t,e,n,i,r,s){let o=e[n*3],a=e[n*3+1],c=e[n*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],f=e[r*3+1],g=e[r*3+2],v=e[s*3],x=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<.01?[new ne(o,1-c),new ne(l,1-h),new ne(d,1-g),new ne(v,1-m)]:[new ne(a,1-c),new ne(u,1-h),new ne(f,1-g),new ne(x,1-m)]}};function hg(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}function na(t,e,n){ze.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n};let i=[],r=[],s=[],o=[],a=1e-5,c=new L,l=new L,u=new L,h=new L,d=new L;t.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");let f=e+1;for(let g=0;g<=n;g++){let v=g/n;for(let x=0;x<=e;x++){let m=x/e;t(m,v,l),r.push(l.x,l.y,l.z),m-a>=0?(t(m-a,v,u),h.subVectors(l,u)):(t(m+a,v,u),h.subVectors(u,l)),v-a>=0?(t(m,v-a,u),d.subVectors(l,u)):(t(m,v+a,u),d.subVectors(u,l)),c.crossVectors(h,d).normalize(),s.push(c.x,c.y,c.z),o.push(m,v)}}for(let g=0;g<n;g++)for(let v=0;v<e;v++){let x=g*f+v,m=g*f+v+1,p=(g+1)*f+v+1,R=(g+1)*f+v;i.push(x,m,R),i.push(m,p,R)}this.setIndex(i),this.setAttribute("position",new We(r,3)),this.setAttribute("normal",new We(s,3)),this.setAttribute("uv",new We(o,2))}na.prototype=Object.create(ze.prototype);na.prototype.constructor=na;var yl=class extends ze{constructor(e,n=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};let i=[],r=[],s=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new We(r,3)),this.setAttribute("normal",new We(s,3)),this.setAttribute("uv",new We(o,2));function l(u){let h=r.length/3,d=u.extractPoints(n),f=d.shape,g=d.holes;Dn.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,m=g.length;x<m;x++){let p=g[x];Dn.isClockWise(p)===!0&&(g[x]=p.reverse())}let v=Dn.triangulateShape(f,g);for(let x=0,m=g.length;x<m;x++){let p=g[x];f=f.concat(p)}for(let x=0,m=f.length;x<m;x++){let p=f[x];r.push(p.x,p.y,0),s.push(0,0,1),o.push(p.x,p.y)}for(let x=0,m=v.length;x<m;x++){let p=v[x],R=p[0]+h,I=p[1]+h,D=p[2]+h;i.push(R,I,D),c+=3}}}toJSON(){let e=ze.prototype.toJSON.call(this),n=this.parameters.shapes;return dg(n,e)}};function dg(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}function Wi(t){be.call(this),this.type="ShadowMaterial",this.color=new pe(0),this.transparent=!0,this.setValues(t)}Wi.prototype=Object.create(be.prototype);Wi.prototype.constructor=Wi;Wi.prototype.isShadowMaterial=!0;Wi.prototype.copy=function(t){return be.prototype.copy.call(this,t),this.color.copy(t.color),this};function Xn(t){vt.call(this,t),this.type="RawShaderMaterial"}Xn.prototype=Object.create(vt.prototype);Xn.prototype.constructor=Xn;Xn.prototype.isRawShaderMaterial=!0;function ut(t){be.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xn,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(t)}ut.prototype=Object.create(be.prototype);ut.prototype.constructor=ut;ut.prototype.isMeshStandardMaterial=!0;ut.prototype.copy=function(t){return be.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.vertexTangents=t.vertexTangents,this};function qt(t){ut.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=Me.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(t)}qt.prototype=Object.create(ut.prototype);qt.prototype.constructor=qt;qt.prototype.isMeshPhysicalMaterial=!0;qt.prototype.copy=function(t){return ut.prototype.copy.call(this,t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new pe).copy(t.sheen):this.sheen=null,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this};function Yn(t){be.call(this),this.type="MeshPhongMaterial",this.color=new pe(16777215),this.specular=new pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xn,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Yn.prototype=Object.create(be.prototype);Yn.prototype.constructor=Yn;Yn.prototype.isMeshPhongMaterial=!0;Yn.prototype.copy=function(t){return be.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ji(t){be.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xn,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}ji.prototype=Object.create(be.prototype);ji.prototype.constructor=ji;ji.prototype.isMeshToonMaterial=!0;ji.prototype.copy=function(t){return be.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function qi(t){be.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xn,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}qi.prototype=Object.create(be.prototype);qi.prototype.constructor=qi;qi.prototype.isMeshNormalMaterial=!0;qi.prototype.copy=function(t){return be.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Xi(t){be.call(this),this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Xi.prototype=Object.create(be.prototype);Xi.prototype.constructor=Xi;Xi.prototype.isMeshLambertMaterial=!0;Xi.prototype.copy=function(t){return be.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Yi(t){be.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new pe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xn,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Yi.prototype=Object.create(be.prototype);Yi.prototype.constructor=Yi;Yi.prototype.isMeshMatcapMaterial=!0;Yi.prototype.copy=function(t){return be.prototype.copy.call(this,t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function Zi(t){xt.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}Zi.prototype=Object.create(xt.prototype);Zi.prototype.constructor=Zi;Zi.prototype.isLineDashedMaterial=!0;Zi.prototype.copy=function(t){return xt.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var fg=Object.freeze({__proto__:null,ShadowMaterial:Wi,SpriteMaterial:qn,RawShaderMaterial:Xn,ShaderMaterial:vt,PointsMaterial:un,MeshPhysicalMaterial:qt,MeshStandardMaterial:ut,MeshPhongMaterial:Yn,MeshToonMaterial:ji,MeshNormalMaterial:qi,MeshLambertMaterial:Xi,MeshDepthMaterial:Vn,MeshDistanceMaterial:Wn,MeshBasicMaterial:ot,MeshMatcapMaterial:Yi,LineDashedMaterial:Zi,LineBasicMaterial:xt,Material:be}),je={arraySlice:function(t,e,n){return je.isTypedArray(t)?new t.constructor(t.subarray(e,n!==void 0?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){function e(r,s){return t[r]-t[s]}let n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i},sortedArray:function(t,e,n){let i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){let a=n[s]*e;for(let c=0;c!==e;++c)r[o++]=t[a+c]}return r},flattenJSON:function(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),n.push.apply(n,o)),s=t[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),n.push(o)),s=t[r++];while(s!==void 0)},subclip:function(t,e,n,i,r=30){let s=t.clone();s.name=e;let o=[];for(let c=0;c<s.tracks.length;++c){let l=s.tracks[c],u=l.getValueSize(),h=[],d=[];for(let f=0;f<l.times.length;++f){let g=l.times[f]*r;if(!(g<n||g>=i)){h.push(l.times[f]);for(let v=0;v<u;++v)d.push(l.values[f*u+v])}}h.length!==0&&(l.times=je.convertArray(h,l.times.constructor),l.values=je.convertArray(d,l.values.constructor),o.push(l))}s.tracks=o;let a=Infinity;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(t,e=0,n=t,i=30){i<=0&&(i=30);let r=n.tracks.length,s=e/i;for(let o=0;o<r;++o){let a=n.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;let l=t.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===c});if(l===void 0)continue;let u=0,h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0,f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let g=a.times.length-1,v;if(s<=a.times[0]){let m=u,p=h-u;v=je.arraySlice(a.values,m,p)}else if(s>=a.times[g]){let m=g*h+u,p=m+h-u;v=je.arraySlice(a.values,m,p)}else{let m=a.createInterpolant(),p=u,R=h-u;m.evaluate(s),v=je.arraySlice(m.resultBuffer,p,R)}c==="quaternion"&&new mt().fromArray(v).normalize().conjugate().toArray(v);let x=l.times.length;for(let m=0;m<x;++m){let p=m*f+d;if(c==="quaternion")mt.multiplyQuaternionsFlat(l.values,p,v,0,l.values,p);else{let R=f-d*2;for(let I=0;I<R;++I)l.values[p+I]-=v[I]}}}return t.blendMode=Qa,t}};function ht(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n}Object.assign(ht.prototype,{evaluate:function(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];e:{t:{let s;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}s=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===a)break;if(i=r,r=e[--n-1],t>=r)break t}s=n,n=0;break n}break e}for(;n<s;){let o=n+s>>>1;t<e[o]?s=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(ht.prototype,{beforeStart_:ht.prototype.copySampleValue_,afterEnd_:ht.prototype.copySampleValue_});function ia(t,e,n,i){ht.call(this,t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}ia.prototype=Object.assign(Object.create(ht.prototype),{constructor:ia,DefaultSettings_:{endingStart:ui,endingEnd:ui},intervalChanged_:function(t,e,n){let i=this.parameterPositions,r=t-2,s=t+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case hi:r=t,o=2*e-n;break;case ns:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case hi:s=t,a=2*n-e;break;case ns:s=1,a=n+i[1]-i[0];break;default:s=t-1,a=e}let c=(n-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-n),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,f=(n-e)/(i-e),g=f*f,v=g*f,x=-h*v+2*h*g-h*f,m=(1+h)*v+(-1.5-2*h)*g+(-.5+h)*f+1,p=(-1-d)*v+(1.5+d)*g+.5*f,R=d*v-d*g;for(let I=0;I!==o;++I)r[I]=x*s[l+I]+m*s[c+I]+p*s[a+I]+R*s[u+I];return r}});function Hs(t,e,n,i){ht.call(this,t,e,n,i)}Hs.prototype=Object.assign(Object.create(ht.prototype),{constructor:Hs,interpolate_:function(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=(n-e)/(i-e),u=1-l;for(let h=0;h!==o;++h)r[h]=s[c+h]*u+s[a+h]*l;return r}});function ra(t,e,n,i){ht.call(this,t,e,n,i)}ra.prototype=Object.assign(Object.create(ht.prototype),{constructor:ra,interpolate_:function(t){return this.copySampleValue_(t-1)}});function ct(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=je.convertArray(e,this.TimeBufferType),this.values=je.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(ct,{toJSON:function(t){let e=t.constructor,n;if(e.toJSON!==void 0)n=e.toJSON(t);else{n={name:t.name,times:je.convertArray(t.times,Array),values:je.convertArray(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}});Object.assign(ct.prototype,{constructor:ct,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:Hn,InterpolantFactoryMethodDiscrete:function(t){return new ra(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new Hs(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new ia(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){let e;switch(t){case li:e=this.InterpolantFactoryMethodDiscrete;break;case Hn:e=this.InterpolantFactoryMethodLinear;break;case po:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return li;case this.InterpolantFactoryMethodLinear:return Hn;case this.InterpolantFactoryMethodSmooth:return po}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this},scale:function(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this},trim:function(t,e){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=je.arraySlice(n,r,s),this.values=je.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let t=!0,e=this.getValueSize();e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let o=0;o!==r;o++){let a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),t=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),t=!1;break}s=a}if(i!==void 0&&je.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t},optimize:function(){let t=je.arraySlice(this.times),e=je.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===po,r=t.length-1,s=1;for(let o=1;o<r;++o){let a=!1,c=t[o],l=t[o+1];if(c!==l&&(o!==1||c!==t[0]))if(i)a=!0;else{let u=o*n,h=u-n,d=u+n;for(let f=0;f!==n;++f){let g=e[u+f];if(g!==e[h+f]||g!==e[d+f]){a=!0;break}}}if(a){if(o!==s){t[s]=t[o];let u=o*n,h=s*n;for(let d=0;d!==n;++d)e[h+d]=e[u+d]}++s}}if(r>0){t[s]=t[r];for(let o=r*n,a=s*n,c=0;c!==n;++c)e[a+c]=e[o+c];++s}return s!==t.length?(this.times=je.arraySlice(t,0,s),this.values=je.arraySlice(e,0,s*n)):(this.times=t,this.values=e),this},clone:function(){let t=je.arraySlice(this.times,0),e=je.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}});function sa(t,e,n){ct.call(this,t,e,n)}sa.prototype=Object.assign(Object.create(ct.prototype),{constructor:sa,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:li,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function oa(t,e,n,i){ct.call(this,t,e,n,i)}oa.prototype=Object.assign(Object.create(ct.prototype),{constructor:oa,ValueTypeName:"color"});function Zn(t,e,n,i){ct.call(this,t,e,n,i)}Zn.prototype=Object.assign(Object.create(ct.prototype),{constructor:Zn,ValueTypeName:"number"});function aa(t,e,n,i){ht.call(this,t,e,n,i)}aa.prototype=Object.assign(Object.create(ht.prototype),{constructor:aa,interpolate_:function(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e),c=t*o;for(let l=c+o;c!==l;c+=4)mt.slerpFlat(r,0,s,c-o,s,c,a);return r}});function Ji(t,e,n,i){ct.call(this,t,e,n,i)}Ji.prototype=Object.assign(Object.create(ct.prototype),{constructor:Ji,ValueTypeName:"quaternion",DefaultInterpolation:Hn,InterpolantFactoryMethodLinear:function(t){return new aa(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0});function ca(t,e,n,i){ct.call(this,t,e,n,i)}ca.prototype=Object.assign(Object.create(ct.prototype),{constructor:ca,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:li,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Jn(t,e,n,i){ct.call(this,t,e,n,i)}Jn.prototype=Object.assign(Object.create(ct.prototype),{constructor:Jn,ValueTypeName:"vector"});function Tt(t,e=-1,n,i=mo){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Me.generateUUID(),this.duration<0&&this.resetDuration()}function pg(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zn;case"vector":case"vector2":case"vector3":case"vector4":return Jn;case"color":return oa;case"quaternion":return Ji;case"bool":case"boolean":return sa;case"string":return ca}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function mg(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=pg(t.type);if(t.times===void 0){let n=[],i=[];je.flattenJSON(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}Object.assign(Tt,{parse:function(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let s=0,o=n.length;s!==o;++s)e.push(mg(n[s]).scale(i));let r=new Tt(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r},toJSON:function(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(ct.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(t,e,n,i){let r=e.length,s=[];for(let o=0;o<r;o++){let a=[],c=[];a.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let l=je.getKeyframeOrder(a);a=je.sortedArray(a,1,l),c=je.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),s.push(new Zn(".morphTargetInfluences["+e[o].name+"]",a,c).scale(1/n))}return new Tt(t,-1,s)},findByName:function(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=t.length;o<a;o++){let c=t[o],l=c.name.match(r);if(l&&l.length>1){let u=l[1],h=i[u];h||(i[u]=h=[]),h.push(c)}}let s=[];for(let o in i)s.push(Tt.CreateFromMorphTargetSequence(o,i[o],e,n));return s},parseAnimation:function(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,h,d,f,g){if(d.length!==0){let v=[],x=[];je.flattenJSON(d,v,x,f),v.length!==0&&g.push(new u(h,v,x))}},i=[],r=t.name||"default",s=t.fps||30,o=t.blendMode,a=t.length||-1,c=t.hierarchy||[];for(let u=0;u<c.length;u++){let h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let d={},f;for(f=0;f<h.length;f++)if(h[f].morphTargets)for(let g=0;g<h[f].morphTargets.length;g++)d[h[f].morphTargets[g]]=-1;for(let g in d){let v=[],x=[];for(let m=0;m!==h[f].morphTargets.length;++m){let p=h[f];v.push(p.time),x.push(p.morphTarget===g?1:0)}i.push(new Zn(".morphTargetInfluence["+g+"]",v,x))}a=d.length*(s||1)}else{let d=".bones["+e[u].name+"]";n(Jn,d+".position",h,"pos",i),n(Ji,d+".quaternion",h,"rot",i),n(Jn,d+".scale",h,"scl",i)}}return i.length===0?null:new Tt(r,a,i,o)}});Object.assign(Tt.prototype,{resetDuration:function(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this},trim:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new Tt(this.name,this.duration,t,this.blendMode)},toJSON:function(){return Tt.toJSON(this)}});var Ki={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function gg(t,e,n){let i=this,r=!1,s=0,o=0,a,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){let u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,h=c.length;u<h;u+=2){let d=c[u],f=c[u+1];if(d.global&&(d.lastIndex=0),d.test(l))return f}return null}}var vg=new gg;function Oe(t){this.manager=t!==void 0?t:vg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Oe.prototype,{load:function(){},loadAsync:function(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}});var Bt={};function Rt(t){Oe.call(this,t)}Rt.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Rt,load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=Ki.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;if(Bt[t]!==void 0){Bt[t].push({onLoad:e,onProgress:n,onError:i});return}let o=/^data:(.*?)(;base64)?,(.*)$/,a=t.match(o),c;if(a){let l=a[1],u=!!a[2],h=a[3];h=decodeURIComponent(h),u&&(h=atob(h));try{let d,f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":let g=new Uint8Array(h.length);for(let x=0;x<h.length;x++)g[x]=h.charCodeAt(x);f==="blob"?d=new Blob([g.buffer],{type:l}):d=g.buffer;break;case"document":d=new DOMParser().parseFromString(h,l);break;case"json":d=JSON.parse(h);break;default:d=h;break}setTimeout(function(){e&&e(d),r.manager.itemEnd(t)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)},0)}}else{Bt[t]=[],Bt[t].push({onLoad:e,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",t,!0),c.addEventListener("load",function(l){let u=this.response,h=Bt[t];if(delete Bt[t],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Ki.add(t,u);for(let d=0,f=h.length;d<f;d++){let g=h[d];g.onLoad&&g.onLoad(u)}r.manager.itemEnd(t)}else{for(let d=0,f=h.length;d<f;d++){let g=h[d];g.onError&&g.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)}},!1),c.addEventListener("progress",function(l){let u=Bt[t];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onProgress&&f.onProgress(l)}},!1),c.addEventListener("error",function(l){let u=Bt[t];delete Bt[t];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),c.addEventListener("abort",function(l){let u=Bt[t];delete Bt[t];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(t),c},setResponseType:function(t){return this.responseType=t,this},setMimeType:function(t){return this.mimeType=t,this}});function xl(t){Oe.call(this,t)}xl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:xl,load:function(t,e,n,i){let r=this,s=new Rt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){let e=[];for(let n=0;n<t.length;n++){let i=Tt.parse(t[n]);e.push(i)}return e}});function _l(t){Oe.call(this,t)}_l.prototype=Object.assign(Object.create(Oe.prototype),{constructor:_l,load:function(t,e,n,i){let r=this,s=[],o=new Ur,a=new Rt(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(u){a.load(t[u],function(h){let d=r.parse(h,!0);s[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=Je),o.image=s,o.format=d.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let u=0,h=t.length;u<h;++u)l(u);else a.load(t,function(u){let h=r.parse(u,!0);if(h.isCubemap){let d=h.mipmaps.length/h.mipmapCount;for(let f=0;f<d;f++){s[f]={mipmaps:[]};for(let g=0;g<h.mipmapCount;g++)s[f].mipmaps.push(h.mipmaps[f*h.mipmapCount+g]),s[f].format=h.format,s[f].width=h.width,s[f].height=h.height}o.image=s}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=Je),o.format=h.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}});function Gs(t){Oe.call(this,t)}Gs.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Gs,load:function(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=Ki.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;let o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),Ki.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(l){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(t),r.manager.itemEnd(t)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}});function la(t){Oe.call(this,t)}la.prototype=Object.assign(Object.create(Oe.prototype),{constructor:la,load:function(t,e,n,i){let r=new Cn,s=new Gs(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(c){s.load(t[c],function(l){r.images[c]=l,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)a(c);return r}});function bl(t){Oe.call(this,t)}bl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:bl,load:function(t,e,n,i){let r=this,s=new Di,o=new Rt(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(a){let c=r.parse(a);!c||(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:lt,s.wrapT=c.wrapT!==void 0?c.wrapT:lt,s.magFilter=c.magFilter!==void 0?c.magFilter:Je,s.minFilter=c.minFilter!==void 0?c.minFilter:Je,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(s.encoding=c.encoding),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Un),c.mipmapCount===1&&(s.minFilter=Je),s.needsUpdate=!0,e&&e(s,c))},n,i),s}});function Kn(t){Oe.call(this,t)}Kn.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Kn,load:function(t,e,n,i){let r=new Ue,s=new Gs(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o;let a=t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0;r.format=a?nn:It,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}});function _e(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(_e.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)},getPoints:function(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},getSpacedPoints:function(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},getLength:function(){let t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(t===void 0&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){let n=this.getLengths(),i=0,r=n.length,s;e?s=e:s=t*n[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===s)return i/(r-1);let l=n[i],h=n[i+1]-l,d=(s-l)/h;return(i+d)/(r-1)},getTangent:function(t,e){let n=1e-4,i=t-n,r=t+n;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new ne:new L);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)},computeFrenetFrames:function(t,e){let n=new L,i=[],r=[],s=[],o=new L,a=new Se;for(let d=0;d<=t;d++){let f=d/t;i[d]=this.getTangentAt(f,new L),i[d].normalize()}r[0]=new L,s[0]=new L;let c=Number.MAX_VALUE,l=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Me.clamp(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(o,f))}s[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Me.clamp(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let f=1;f<=t;f++)r[f].applyMatrix4(a.makeRotationAxis(i[f],d*f)),s[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){let t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}});function Pt(t,e,n,i,r,s,o,a){_e.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=e||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}Pt.prototype=Object.create(_e.prototype);Pt.prototype.constructor=Pt;Pt.prototype.isEllipseCurve=!0;Pt.prototype.getPoint=function(t,e){let n=e||new ne,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=a-this.aX,d=c-this.aY;a=h*l-d*u+this.aX,c=h*u+d*l+this.aY}return n.set(a,c)};Pt.prototype.copy=function(t){return _e.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};Pt.prototype.toJSON=function(){let t=_e.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t};Pt.prototype.fromJSON=function(t){return _e.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};function Vr(t,e,n,i,r,s){Pt.call(this,t,e,n,n,i,r,s),this.type="ArcCurve"}Vr.prototype=Object.create(Pt.prototype);Vr.prototype.constructor=Vr;Vr.prototype.isArcCurve=!0;function ua(){let t=0,e=0,n=0,i=0;function r(s,o,a,c){t=s,e=a,n=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return t+e*s+n*o+i*a}}}var ks=new L,ha=new ua,da=new ua,fa=new ua;function dt(t=[],e=!1,n="centripetal",i=.5){_e.call(this),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}dt.prototype=Object.create(_e.prototype);dt.prototype.constructor=dt;dt.prototype.isCatmullRomCurve3=!0;dt.prototype.getPoint=function(t,e=new L){let n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t,o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let c,l;this.closed||o>0?c=i[(o-1)%r]:(ks.subVectors(i[0],i[1]).add(i[0]),c=ks);let u=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?l=i[(o+2)%r]:(ks.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=ks),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(l),d);g<1e-4&&(g=1),f<1e-4&&(f=g),v<1e-4&&(v=g),ha.initNonuniformCatmullRom(c.x,u.x,h.x,l.x,f,g,v),da.initNonuniformCatmullRom(c.y,u.y,h.y,l.y,f,g,v),fa.initNonuniformCatmullRom(c.z,u.z,h.z,l.z,f,g,v)}else this.curveType==="catmullrom"&&(ha.initCatmullRom(c.x,u.x,h.x,l.x,this.tension),da.initCatmullRom(c.y,u.y,h.y,l.y,this.tension),fa.initCatmullRom(c.z,u.z,h.z,l.z,this.tension));return n.set(ha.calc(a),da.calc(a),fa.calc(a)),n};dt.prototype.copy=function(t){_e.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};dt.prototype.toJSON=function(){let t=_e.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t};dt.prototype.fromJSON=function(t){_e.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};function wl(t,e,n,i,r){let s=(i-e)*.5,o=(r-n)*.5,a=t*t,c=t*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*t+n}function yg(t,e){let n=1-t;return n*n*e}function xg(t,e){return 2*(1-t)*t*e}function _g(t,e){return t*t*e}function Wr(t,e,n,i){return yg(t,e)+xg(t,n)+_g(t,i)}function bg(t,e){let n=1-t;return n*n*n*e}function wg(t,e){let n=1-t;return 3*n*n*t*e}function Mg(t,e){return 3*(1-t)*t*t*e}function Sg(t,e){return t*t*t*e}function jr(t,e,n,i,r){return bg(t,e)+wg(t,n)+Mg(t,i)+Sg(t,r)}function Xt(t=new ne,e=new ne,n=new ne,i=new ne){_e.call(this),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}Xt.prototype=Object.create(_e.prototype);Xt.prototype.constructor=Xt;Xt.prototype.isCubicBezierCurve=!0;Xt.prototype.getPoint=function(t,e=new ne){let n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(jr(t,i.x,r.x,s.x,o.x),jr(t,i.y,r.y,s.y,o.y)),n};Xt.prototype.copy=function(t){return _e.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};Xt.prototype.toJSON=function(){let t=_e.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};Xt.prototype.fromJSON=function(t){return _e.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function hn(t=new L,e=new L,n=new L,i=new L){_e.call(this),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}hn.prototype=Object.create(_e.prototype);hn.prototype.constructor=hn;hn.prototype.isCubicBezierCurve3=!0;hn.prototype.getPoint=function(t,e=new L){let n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(jr(t,i.x,r.x,s.x,o.x),jr(t,i.y,r.y,s.y,o.y),jr(t,i.z,r.z,s.z,o.z)),n};hn.prototype.copy=function(t){return _e.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};hn.prototype.toJSON=function(){let t=_e.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};hn.prototype.fromJSON=function(t){return _e.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function Et(t=new ne,e=new ne){_e.call(this),this.type="LineCurve",this.v1=t,this.v2=e}Et.prototype=Object.create(_e.prototype);Et.prototype.constructor=Et;Et.prototype.isLineCurve=!0;Et.prototype.getPoint=function(t,e=new ne){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};Et.prototype.getPointAt=function(t,e){return this.getPoint(t,e)};Et.prototype.getTangent=function(t,e){let n=e||new ne;return n.copy(this.v2).sub(this.v1).normalize(),n};Et.prototype.copy=function(t){return _e.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};Et.prototype.toJSON=function(){let t=_e.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};Et.prototype.fromJSON=function(t){return _e.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Yt(t=new L,e=new L){_e.call(this),this.type="LineCurve3",this.v1=t,this.v2=e}Yt.prototype=Object.create(_e.prototype);Yt.prototype.constructor=Yt;Yt.prototype.isLineCurve3=!0;Yt.prototype.getPoint=function(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};Yt.prototype.getPointAt=function(t,e){return this.getPoint(t,e)};Yt.prototype.copy=function(t){return _e.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};Yt.prototype.toJSON=function(){let t=_e.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};Yt.prototype.fromJSON=function(t){return _e.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Zt(t=new ne,e=new ne,n=new ne){_e.call(this),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}Zt.prototype=Object.create(_e.prototype);Zt.prototype.constructor=Zt;Zt.prototype.isQuadraticBezierCurve=!0;Zt.prototype.getPoint=function(t,e=new ne){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Wr(t,i.x,r.x,s.x),Wr(t,i.y,r.y,s.y)),n};Zt.prototype.copy=function(t){return _e.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};Zt.prototype.toJSON=function(){let t=_e.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};Zt.prototype.fromJSON=function(t){return _e.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function dn(t=new L,e=new L,n=new L){_e.call(this),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}dn.prototype=Object.create(_e.prototype);dn.prototype.constructor=dn;dn.prototype.isQuadraticBezierCurve3=!0;dn.prototype.getPoint=function(t,e=new L){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Wr(t,i.x,r.x,s.x),Wr(t,i.y,r.y,s.y),Wr(t,i.z,r.z,s.z)),n};dn.prototype.copy=function(t){return _e.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};dn.prototype.toJSON=function(){let t=_e.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};dn.prototype.fromJSON=function(t){return _e.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Jt(t=[]){_e.call(this),this.type="SplineCurve",this.points=t}Jt.prototype=Object.create(_e.prototype);Jt.prototype.constructor=Jt;Jt.prototype.isSplineCurve=!0;Jt.prototype.getPoint=function(t,e=new ne){let n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],c=i[s],l=i[s>i.length-2?i.length-1:s+1],u=i[s>i.length-3?i.length-1:s+2];return n.set(wl(o,a.x,c.x,l.x,u.x),wl(o,a.y,c.y,l.y,u.y)),n};Jt.prototype.copy=function(t){_e.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this};Jt.prototype.toJSON=function(){let t=_e.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t};Jt.prototype.fromJSON=function(t){_e.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ne().fromArray(i))}return this};var Tg=Object.freeze({__proto__:null,ArcCurve:Vr,CatmullRomCurve3:dt,CubicBezierCurve:Xt,CubicBezierCurve3:hn,EllipseCurve:Pt,LineCurve:Et,LineCurve3:Yt,QuadraticBezierCurve:Zt,QuadraticBezierCurve3:dn,SplineCurve:Jt});function $n(){_e.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}$n.prototype=Object.assign(Object.create(_e.prototype),{constructor:$n,add:function(t){this.curves.push(t)},closePath:function(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Et(e,t))},getPoint:function(t){let e=t*this.getLength(),n=this.getCurveLengths(),i=0;for(;i<n.length;){if(n[i]>=e){let r=n[i]-e,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){let t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let s=r[i],o=s&&s.isEllipseCurve?t*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?t*s.points.length:t,a=s.getPoints(o);for(let c=0;c<a.length;c++){let l=a[c];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e},copy:function(t){_e.prototype.copy.call(this,t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){let t=_e.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t},fromJSON:function(t){_e.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Tg[i.type]().fromJSON(i))}return this}});function Kt(t){$n.call(this),this.type="Path",this.currentPoint=new ne,t&&this.setFromPoints(t)}Kt.prototype=Object.assign(Object.create($n.prototype),{constructor:Kt,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this},moveTo:function(t,e){return this.currentPoint.set(t,e),this},lineTo:function(t,e){let n=new Et(this.currentPoint.clone(),new ne(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this},quadraticCurveTo:function(t,e,n,i){let r=new Zt(this.currentPoint.clone(),new ne(t,e),new ne(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(t,e,n,i,r,s){let o=new Xt(this.currentPoint.clone(),new ne(t,e),new ne(n,i),new ne(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(t){let e=[this.currentPoint.clone()].concat(t),n=new Jt(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this},arc:function(t,e,n,i,r,s){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+o,e+a,n,i,r,s),this},absarc:function(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this},ellipse:function(t,e,n,i,r,s,o,a){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,n,i,r,s,o,a),this},absellipse:function(t,e,n,i,r,s,o,a){let c=new Pt(t,e,n,i,r,s,o,a);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(t){return $n.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){let t=$n.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return $n.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}});function $i(t){Kt.call(this,t),this.uuid=Me.generateUUID(),this.type="Shape",this.holes=[]}$i.prototype=Object.assign(Object.create(Kt.prototype),{constructor:$i,getPointsHoles:function(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){Kt.prototype.copy.call(this,t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this},toJSON:function(){let t=Kt.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t},fromJSON:function(t){Kt.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Kt().fromJSON(i))}return this}});function ke(t,e=1){ve.call(this),this.type="Light",this.color=new pe(t),this.intensity=e}ke.prototype=Object.assign(Object.create(ve.prototype),{constructor:ke,isLight:!0,copy:function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){let e=ve.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}});function Vs(t,e,n){ke.call(this,t,n),this.type="HemisphereLight",this.position.copy(ve.DefaultUp),this.updateMatrix(),this.groundColor=new pe(e)}Vs.prototype=Object.assign(Object.create(ke.prototype),{constructor:Vs,isHemisphereLight:!0,copy:function(t){return ke.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}});function fn(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}Object.assign(fn.prototype,{_projScreenMatrix:new Se,_lightPositionWorld:new L,_lookTarget:new L,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(t){let e=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(t.matrixWorld),e.position.copy(s),r.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(r),e.updateMatrixWorld(),i.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)},getViewport:function(t){return this._viewports[t]},getFrameExtents:function(){return this._frameExtents},copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}});function pa(){fn.call(this,new Ye(50,1,.5,500)),this.focus=1}pa.prototype=Object.assign(Object.create(fn.prototype),{constructor:pa,isSpotLightShadow:!0,updateMatrices:function(t){let e=this.camera,n=Me.RAD2DEG*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),fn.prototype.updateMatrices.call(this,t)}});function Ws(t,e,n,i,r,s){ke.call(this,t,e),this.type="SpotLight",this.position.copy(ve.DefaultUp),this.updateMatrix(),this.target=new ve,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new pa}Ws.prototype=Object.assign(Object.create(ke.prototype),{constructor:Ws,isSpotLight:!0,copy:function(t){return ke.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function ma(){fn.call(this,new Ye(90,1,.5,500)),this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new Ne(2,1,1,1),new Ne(0,1,1,1),new Ne(3,1,1,1),new Ne(1,1,1,1),new Ne(3,0,1,1),new Ne(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}ma.prototype=Object.assign(Object.create(fn.prototype),{constructor:ma,isPointLightShadow:!0,updateMatrices:function(t,e=0){let n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(t.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function js(t,e,n,i){ke.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new ma}js.prototype=Object.assign(Object.create(ke.prototype),{constructor:js,isPointLight:!0,copy:function(t){return ke.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}});function qr(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){Ln.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}qr.prototype=Object.assign(Object.create(Ln.prototype),{constructor:qr,isOrthographicCamera:!0,copy:function(t,e){return Ln.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,s=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){let e=ve.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}});function ga(){fn.call(this,new qr(-5,5,5,-5,.5,500))}ga.prototype=Object.assign(Object.create(fn.prototype),{constructor:ga,isDirectionalLightShadow:!0,updateMatrices:function(t){fn.prototype.updateMatrices.call(this,t)}});function Qi(t,e){ke.call(this,t,e),this.type="DirectionalLight",this.position.copy(ve.DefaultUp),this.updateMatrix(),this.target=new ve,this.shadow=new ga}Qi.prototype=Object.assign(Object.create(ke.prototype),{constructor:Qi,isDirectionalLight:!0,copy:function(t){return ke.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function qs(t,e){ke.call(this,t,e),this.type="AmbientLight"}qs.prototype=Object.assign(Object.create(ke.prototype),{constructor:qs,isAmbientLight:!0});function Ml(t,e,n,i){ke.call(this,t,e),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}Ml.prototype=Object.assign(Object.create(ke.prototype),{constructor:Ml,isRectAreaLight:!0,copy:function(t){return ke.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){let e=ke.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}});var Sl=class{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let n=0;n<9;n++)this.coefficients[n].copy(e[n]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,n){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],1.092548*(i*r)),n.addScaledVector(o[5],1.092548*(r*s)),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],1.092548*(i*s)),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(e,n){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*r),n.addScaledVector(o[2],2*.511664*s),n.addScaledVector(o[3],2*.511664*i),n.addScaledVector(o[4],2*.429043*i*r),n.addScaledVector(o[5],2*.429043*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],2*.429043*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(e){for(let n=0;n<9;n++)this.coefficients[n].add(e.coefficients[n]);return this}addScaledSH(e,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],n);return this}scale(e){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(e);return this}lerp(e,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],n);return this}equals(e){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(e.coefficients[n]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,n=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,n+r*3);return this}toArray(e=[],n=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,n+r*3);return e}static getBasisAt(e,n){let i=e.x,r=e.y,s=e.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}};function $t(t,e){ke.call(this,void 0,e),this.type="LightProbe",this.sh=t!==void 0?t:new Sl}$t.prototype=Object.assign(Object.create(ke.prototype),{constructor:$t,isLightProbe:!0,copy:function(t){return ke.prototype.copy.call(this,t),this.sh.copy(t.sh),this},fromJSON:function(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this},toJSON:function(t){let e=ke.prototype.toJSON.call(this,t);return e.object.sh=this.sh.toArray(),e}});function Tl(t){Oe.call(this,t),this.textures={}}Tl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Tl,load:function(t,e,n,i){let r=this,s=new Rt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){let e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}let i=new fg[t.type];if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=new pe().setHex(t.sheen)),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==1&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.skinning!==void 0&&(i.skinning=t.skinning),t.morphTargets!==void 0&&(i.morphTargets=t.morphTargets),t.morphNormals!==void 0&&(i.morphNormals=t.morphNormals),t.dithering!==void 0&&(i.dithering=t.dithering),t.vertexTangents!==void 0&&(i.vertexTangents=t.vertexTangents),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(let r in t.uniforms){let s=t.uniforms[r];switch(i.uniforms[r]={},s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new pe().setHex(s.value);break;case"v2":i.uniforms[r].value=new ne().fromArray(s.value);break;case"v3":i.uniforms[r].value=new L().fromArray(s.value);break;case"v4":i.uniforms[r].value=new Ne().fromArray(s.value);break;case"m3":i.uniforms[r].value=new bt().fromArray(s.value);break;case"m4":i.uniforms[r].value=new Se().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.extensions!==void 0)for(let r in t.extensions)i.extensions[r]=t.extensions[r];if(t.shading!==void 0&&(i.flatShading=t.shading===1),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new ne().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ne().fromArray(t.clearcoatNormalScale)),t.transmission!==void 0&&(i.transmission=t.transmission),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),i},setTextures:function(t){return this.textures=t,this}});var Qn={decodeText:function(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch(n){return e}},extractUrlBase:function(t){let e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}};function Xs(){ze.call(this),this.type="InstancedBufferGeometry",this.instanceCount=Infinity}Xs.prototype=Object.assign(Object.create(ze.prototype),{constructor:Xs,isInstancedBufferGeometry:!0,copy:function(t){return ze.prototype.copy.call(this,t),this.instanceCount=t.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let t=ze.prototype.toJSON.call(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}});function va(t,e,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),Ee.call(this,t,e,n),this.meshPerAttribute=i||1}va.prototype=Object.assign(Object.create(Ee.prototype),{constructor:va,isInstancedBufferAttribute:!0,copy:function(t){return Ee.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},toJSON:function(){let t=Ee.prototype.toJSON.call(this);return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}});function El(t){Oe.call(this,t)}El.prototype=Object.assign(Object.create(Oe.prototype),{constructor:El,load:function(t,e,n,i){let r=this,s=new Rt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){let e={},n={};function i(d,f){if(e[f]!==void 0)return e[f];let v=d.interleavedBuffers[f],x=r(d,v.buffer),m=ms(v.type,x),p=new yt(m,v.stride);return p.uuid=v.uuid,e[f]=p,p}function r(d,f){if(n[f]!==void 0)return n[f];let v=d.arrayBuffers[f],x=new Uint32Array(v).buffer;return n[f]=x,x}let s=t.isInstancedBufferGeometry?new Xs:new ze,o=t.data.index;if(o!==void 0){let d=ms(o.type,o.array);s.setIndex(new Ee(d,1))}let a=t.data.attributes;for(let d in a){let f=a[d],g;if(f.isInterleavedBufferAttribute){let v=i(t.data,f.data);g=new ln(v,f.itemSize,f.offset,f.normalized)}else{let v=ms(f.type,f.array),x=f.isInstancedBufferAttribute?va:Ee;g=new x(v,f.itemSize,f.normalized)}f.name!==void 0&&(g.name=f.name),s.setAttribute(d,g)}let c=t.data.morphAttributes;if(c)for(let d in c){let f=c[d],g=[];for(let v=0,x=f.length;v<x;v++){let m=f[v],p;if(m.isInterleavedBufferAttribute){let R=i(t.data,m.data);p=new ln(R,m.itemSize,m.offset,m.normalized)}else{let R=ms(m.type,m.array);p=new Ee(R,m.itemSize,m.normalized)}m.name!==void 0&&(p.name=m.name),g.push(p)}s.morphAttributes[d]=g}t.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);let u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let d=0,f=u.length;d!==f;++d){let g=u[d];s.addGroup(g.start,g.count,g.materialIndex)}let h=t.data.boundingSphere;if(h!==void 0){let d=new L;h.center!==void 0&&d.fromArray(h.center),s.boundingSphere=new Gt(d,h.radius)}return t.name&&(s.name=t.name),t.userData&&(s.userData=t.userData),s}});function Ys(t){typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Oe.call(this,t),this.options={premultiplyAlpha:"none"}}Ys.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Ys,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=Ki.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(t,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,r.options)}).then(function(a){Ki.add(t,a),e&&e(a),r.manager.itemEnd(t)}).catch(function(a){i&&i(a),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}});function Al(){this.type="ShapePath",this.color=new pe,this.subPaths=[],this.currentPath=null}Object.assign(Al.prototype,{moveTo:function(t,e){return this.currentPath=new Kt,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this},lineTo:function(t,e){return this.currentPath.lineTo(t,e),this},quadraticCurveTo:function(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this},bezierCurveTo:function(t,e,n,i,r,s){return this.currentPath.bezierCurveTo(t,e,n,i,r,s),this},splineThru:function(t){return this.currentPath.splineThru(t),this},toShapes:function(t,e){function n(m){let p=[];for(let R=0,I=m.length;R<I;R++){let D=m[R],M=new $i;M.curves=D.curves,p.push(M)}return p}function i(m,p){let R=p.length,I=!1;for(let D=R-1,M=0;M<R;D=M++){let N=p[D],$=p[M],H=$.x-N.x,W=$.y-N.y;if(Math.abs(W)>Number.EPSILON){if(W<0&&(N=p[M],H=-H,$=p[D],W=-W),m.y<N.y||m.y>$.y)continue;if(m.y===N.y){if(m.x===N.x)return!0}else{let j=W*(m.x-N.x)-H*(m.y-N.y);if(j===0)return!0;if(j<0)continue;I=!I}}else{if(m.y!==N.y)continue;if($.x<=m.x&&m.x<=N.x||N.x<=m.x&&m.x<=$.x)return!0}}return I}let r=Dn.isClockWise,s=this.subPaths;if(s.length===0)return[];if(e===!0)return n(s);let o,a,c,l=[];if(s.length===1)return a=s[0],c=new $i,c.curves=a.curves,l.push(c),l;let u=!r(s[0].getPoints());u=t?!u:u;let h=[],d=[],f=[],g=0,v;d[g]=void 0,f[g]=[];for(let m=0,p=s.length;m<p;m++)a=s[m],v=a.getPoints(),o=r(v),o=t?!o:o,o?(!u&&d[g]&&g++,d[g]={s:new $i,p:v},d[g].s.curves=a.curves,u&&g++,f[g]=[]):f[g].push({h:a,p:v[0]});if(!d[0])return n(s);if(d.length>1){let m=!1,p=[];for(let R=0,I=d.length;R<I;R++)h[R]=[];for(let R=0,I=d.length;R<I;R++){let D=f[R];for(let M=0;M<D.length;M++){let N=D[M],$=!0;for(let H=0;H<d.length;H++)i(N.p,d[H].p)&&(R!==H&&p.push({froms:R,tos:H,hole:M}),$?($=!1,h[H].push(N)):m=!0);$&&h[R].push(N)}}p.length>0&&(m||(f=h))}let x;for(let m=0,p=d.length;m<p;m++){c=d[m].s,l.push(c),x=f[m];for(let R=0,I=x.length;R<I;R++)c.holes.push(x[R].h)}return l}});var Ll=class{constructor(e){Object.defineProperty(this,"isFont",{value:!0}),this.type="Font",this.data=e}generateShapes(e,n=100){let i=[],r=Eg(e,n,this.data);for(let s=0,o=r.length;s<o;s++)Array.prototype.push.apply(i,r[s].toShapes());return i}};function Eg(t,e,n){let i=Array.from?Array.from(t):String(t).split(""),r=e/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[],a=0,c=0;for(let l=0;l<i.length;l++){let u=i[l];if(u===`
`)a=0,c-=s;else{let h=Ag(u,r,a,c,n);a+=h.offsetX,o.push(h.path)}}return o}function Ag(t,e,n,i,r){let s=r.glyphs[t]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}let o=new Al,a,c,l,u,h,d,f,g;if(s.o){let v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let x=0,m=v.length;x<m;)switch(v[x++]){case"m":a=v[x++]*e+n,c=v[x++]*e+i,o.moveTo(a,c);break;case"l":a=v[x++]*e+n,c=v[x++]*e+i,o.lineTo(a,c);break;case"q":l=v[x++]*e+n,u=v[x++]*e+i,h=v[x++]*e+n,d=v[x++]*e+i,o.quadraticCurveTo(h,d,l,u);break;case"b":l=v[x++]*e+n,u=v[x++]*e+i,h=v[x++]*e+n,d=v[x++]*e+i,f=v[x++]*e+n,g=v[x++]*e+i,o.bezierCurveTo(h,d,f,g,l,u);break}}return{offsetX:s.ha*e,path:o}}function Cl(t){Oe.call(this,t)}Cl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Cl,load:function(t,e,n,i){let r=this,s=new Rt(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){let a;try{a=JSON.parse(o)}catch(l){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}let c=r.parse(a);e&&e(c)},n,i)},parse:function(t){return new Ll(t)}});var Zs,Lg={getContext:function(){return Zs===void 0&&(Zs=new(window.AudioContext||window.webkitAudioContext)),Zs},setContext:function(t){Zs=t}};function ya(t){Oe.call(this,t)}ya.prototype=Object.assign(Object.create(Oe.prototype),{constructor:ya,load:function(t,e,n,i){let r=this,s=new Rt(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{let a=o.slice(0);Lg.getContext().decodeAudioData(a,function(l){e(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)}});function Rl(t,e,n){$t.call(this,void 0,n);let i=new pe().set(t),r=new pe().set(e),s=new L(i.r,i.g,i.b),o=new L(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}Rl.prototype=Object.assign(Object.create($t.prototype),{constructor:Rl,isHemisphereLightProbe:!0,copy:function(t){return $t.prototype.copy.call(this,t),this},toJSON:function(t){return $t.prototype.toJSON.call(this,t)}});function Pl(t,e){$t.call(this,void 0,e);let n=new pe().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}Pl.prototype=Object.assign(Object.create($t.prototype),{constructor:Pl,isAmbientLightProbe:!0,copy:function(t){return $t.prototype.copy.call(this,t),this},toJSON:function(t){return $t.prototype.toJSON.call(this,t)}});var Il=new Se,Dl=new Se;function Cg(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ye,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ye,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(Cg.prototype,{update:function(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep;let i=t.projectionMatrix.clone(),r=e.eyeSep/2,s=r*e.near/e.focus,o=e.near*Math.tan(Me.DEG2RAD*e.fov*.5)/e.zoom,a,c;Dl.elements[12]=-r,Il.elements[12]=r,a=-o*e.aspect+s,c=o*e.aspect+s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-o*e.aspect-s,c=o*e.aspect-s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Dl),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Il)}});var Ol=class extends ve{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let n=this.context.createBufferSource();return n.buffer=this.buffer,n.loop=this.loop,n.loopStart=this.loopStart,n.loopEnd=this.loopEnd,n.onended=this.onEnded.bind(this),n.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=n,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};var Fl=class{constructor(e,n=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=n,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,n=this.getFrequencyData();for(let i=0;i<n.length;i++)e+=n[i];return e/n.length}};function Bl(t,e,n){this.binding=t,this.valueSize=n;let i,r,s;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(Bl.prototype,{accumulate:function(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=e}else{s+=e;let o=e/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t},apply:function(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let a=e*this._origIndex;this._mixBufferRegion(n,i,a,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let a=e,c=e+e;a!==c;++a)if(n[a]!==n[a+e]){o.setValue(n,i);break}},saveOriginalState:function(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)},_setAdditiveIdentityNumeric:function(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]},_select:function(t,e,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]},_slerp:function(t,e,n,i){mt.slerpFlat(t,e,t,e,t,n,i)},_slerpAdditive:function(t,e,n,i,r){let s=this._workIndex*r;mt.multiplyQuaternionsFlat(t,s,t,e,t,n),mt.slerpFlat(t,e,t,e,t,s,i)},_lerp:function(t,e,n,i,r){let s=1-i;for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]*s+t[n+o]*i}},_lerpAdditive:function(t,e,n,i,r){for(let s=0;s!==r;++s){let o=e+s;t[o]=t[o]+t[n+s]*i}}});var xa="\\[\\]\\.:\\/",Rg=new RegExp("["+xa+"]","g"),_a="[^"+xa+"]",Pg="[^"+xa.replace("\\.","")+"]",Ig=/((?:WC+[\/:])*)/.source.replace("WC",_a),Dg=/(WCOD+)?/.source.replace("WCOD",Pg),Og=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_a),Fg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_a),Bg=new RegExp("^"+Ig+Dg+Og+Fg+"$"),Ng=["material","materials","bones"];function Nl(t,e,n){let i=n||rt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}Object.assign(Nl.prototype,{getValue:function(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)},setValue:function(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)},bind:function(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()},unbind:function(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}});function rt(t,e,n){this.path=e,this.parsedPath=n||rt.parseTrackName(e),this.node=rt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}Object.assign(rt,{Composite:Nl,create:function(t,e,n){return t&&t.isAnimationObjectGroup?new rt.Composite(t,e,n):new rt(t,e,n)},sanitizeNodeName:function(t){return t.replace(/\s/g,"_").replace(Rg,"")},parseTrackName:function(t){let e=Bg.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ng.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n},findNode:function(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===e||o.uuid===e)return o;let a=n(o.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}});Object.assign(rt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,n){e[n]=this.node[this.propertyName]},function(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]},function(e,n){e[n]=this.resolvedProperty[this.propertyIndex]},function(e,n){this.resolvedProperty.toArray(e,n)}],SetterByBindingTypeAndVersioning:[[function(e,n){this.targetObject[this.propertyName]=e[n]},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]},function(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0},function(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty[this.propertyIndex]=e[n]},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty.fromArray(e,n)},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,n){this.bind(),this.getValue(e,n)},setValue:function(e,n){this.bind(),this.setValue(e,n)},bind:function(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=rt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[i];if(s===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(rt.prototype,{_getValue_unbound:rt.prototype.getValue,_setValue_unbound:rt.prototype.setValue});function zg(){this.uuid=Me.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}Object.assign(zg.prototype,{isAnimationObjectGroup:!0,add:function(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length,o,a=t.length,c=this.nCachedObjects_;for(let l=0,u=arguments.length;l!==u;++l){let h=arguments[l],d=h.uuid,f=e[d];if(f===void 0){f=a++,e[d]=f,t.push(h);for(let g=0,v=s;g!==v;++g)r[g].push(new rt(h,n[g],i[g]))}else if(f<c){o=t[f];let g=--c,v=t[g];e[v.uuid]=f,t[f]=v,e[d]=g,t[g]=h;for(let x=0,m=s;x!==m;++x){let p=r[x],R=p[g],I=p[f];p[f]=R,I===void 0&&(I=new rt(h,n[x],i[x])),p[g]=I}}else t[f]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){let a=arguments[s],c=a.uuid,l=e[c];if(l!==void 0&&l>=r){let u=r++,h=t[u];e[h.uuid]=l,t[l]=h,e[c]=u,t[u]=a;for(let d=0,f=i;d!==f;++d){let g=n[d],v=g[u],x=g[l];g[l]=v,g[u]=x}}}this.nCachedObjects_=r},uncache:function(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,s=t.length;for(let o=0,a=arguments.length;o!==a;++o){let c=arguments[o],l=c.uuid,u=e[l];if(u!==void 0)if(delete e[l],u<r){let h=--r,d=t[h],f=--s,g=t[f];e[d.uuid]=u,t[u]=d,e[g.uuid]=h,t[h]=g,t.pop();for(let v=0,x=i;v!==x;++v){let m=n[v],p=m[h],R=m[f];m[u]=p,m[h]=R,m.pop()}}else{let h=--s,d=t[h];h>0&&(e[d.uuid]=u),t[u]=d,t.pop();for(let f=0,g=i;f!==g;++f){let v=n[f];v[u]=v[h],v.pop()}}}this.nCachedObjects_=r},subscribe_:function(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let s=this._paths,o=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,u=new Array(c);i=r.length,n[t]=i,s.push(t),o.push(e),r.push(u);for(let h=l,d=a.length;h!==d;++h){let f=a[h];u[h]=new rt(f,t,e)}return u},unsubscribe_:function(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o],c=t[o];e[c]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});var zl=class{constructor(e,n,i=null,r=n.blendMode){this._mixer=e,this._clip=n,this._localRoot=i,this.blendMode=r;let s=n.tracks,o=s.length,a=new Array(o),c={endingStart:ui,endingEnd:ui};for(let l=0;l!==o;++l){let u=s[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=bh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=Infinity,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,n){return this.loop=e,this.repetitions=n,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,n,i){if(e.fadeOut(n),this.fadeIn(n),i){let r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,n),this.warp(a,1,n)}return this}crossFadeTo(e,n,i){return e.crossFadeFrom(this,n,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,n,i){let r=this._mixer,s=r.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=e/o,l[1]=n/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,n,i,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*i;if(c<0||i===0)return;this._startTime=null,n=i*c}n*=this._updateTimeScale(e);let o=this._updateTime(n),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Qa:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case mo:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(r,a)}}}_updateWeight(e){let n=0;if(this.enabled){n=this.weight;let i=this._weightInterpolant;if(i!==null){let r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n}_updateTimeScale(e){let n=0;if(!this.paused){n=this.timeScale;let i=this._timeScaleInterpolant;i!==null&&(n*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n))}return this._effectiveTimeScale=n,n}_updateTime(e){let n=this._clip.duration,i=this.loop,r=this.time+e,s=this._loopCount,o=i===wh;if(e===0)return s===-1?r:o&&(s&1)==1?n-r:r;if(i===_h){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=n)r=n;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=n||r<0){let a=Math.floor(r/n);r-=n*a,s+=Math.abs(a);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?n:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)==1)return n-r}return r}_setEndings(e,n,i){let r=this._interpolantSettings;i?(r.endingStart=hi,r.endingEnd=hi):(e?r.endingStart=this.zeroSlopeAtStart?hi:ui:r.endingStart=ns,n?r.endingEnd=this.zeroSlopeAtEnd?hi:ui:r.endingEnd=ns)}_scheduleFading(e,n,i){let r=this._mixer,s=r.time,o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=n,a[1]=s+e,c[1]=i,this}};function Ul(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Ul.prototype=Object.assign(Object.create(_n.prototype),{constructor:Ul,_bindAction:function(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,o=t._interpolants,a=n.uuid,c=this._bindingsByRootAndName,l=c[a];l===void 0&&(l={},c[a]=l);for(let u=0;u!==r;++u){let h=i[u],d=h.name,f=l[d];if(f!==void 0)s[u]=f;else{if(f=s[u],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,a,d));continue}let g=e&&e._propertyBindings[u].binding.parsedPath;f=new Bl(rt.create(n,d,g),h.ValueTypeName,h.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,a,d),s[u]=f}o[u].resultBuffer=f.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++==0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){let i=this._actions,r=this._actionsByClip,s=r[e];if(s===void 0)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{let o=s.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t},_removeInactiveAction:function(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,c=a[a.length-1],l=t._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),t._byClipCacheIndex=null;let u=o.actionByRoot,h=(t._localRoot||this._root).uuid;delete u[h],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount==0&&this._removeInactiveBinding(r)}},_lendAction:function(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackAction:function(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_addInactiveBinding:function(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,s=i[e];s===void 0&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)},_removeInactiveBinding:function(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=e[e.length-1],c=t._cacheIndex;a._cacheIndex=c,e[c]=a,e.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackBinding:function(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_lendControlInterpolant:function(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Hs(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,e,n){let i=e||this._root,r=i.uuid,s=typeof t=="string"?Tt.findByName(i,t):t,o=s!==null?s.uuid:t,a=this._actionsByClip[o],c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=mo),a!==void 0){let u=a.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=a.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;let l=new zl(this,s,e,n);return this._bindAction(l,c),this._addInactiveAction(l,o,r),l},existingAction:function(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Tt.findByName(n,t):t,s=r?r.uuid:t,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this},update:function(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,s);let o=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)o[c].apply(s);return this},setTime:function(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)},getRoot:function(){return this._root},uncacheClip:function(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){let c=s[o];this._deactivateAction(c);let l=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=l,e[l]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(t){let e=t.uuid,n=this._actionsByClip;for(let s in n){let o=n[s].actionByRoot,a=o[e];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let s in r){let o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});var Js=class{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new Js(this.value.clone===void 0?this.value:this.value.clone())}};function Hl(t,e,n){yt.call(this,t,e),this.meshPerAttribute=n||1}Hl.prototype=Object.assign(Object.create(yt.prototype),{constructor:Hl,isInstancedInterleavedBuffer:!0,copy:function(t){return yt.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},clone:function(t){let e=yt.prototype.clone.call(this,t);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(t){let e=yt.prototype.toJSON.call(this,t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function Gl(t,e,n,i,r){this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(Gl.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(Gl.prototype,{isGLBufferAttribute:!0,setBuffer:function(t){return this.buffer=t,this},setType:function(t,e){return this.type=t,this.elementSize=e,this},setItemSize:function(t){return this.itemSize=t,this},setCount:function(t){return this.count=t,this}});function Ks(t,e,n,i){this.ray=new _i(t,e),this.near=n||0,this.far=i||Infinity,this.camera=null,this.layers=new To,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function kl(t,e){return t.distance-e.distance}function ba(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){let r=t.children;for(let s=0,o=r.length;s<o;s++)ba(r[s],e,n,!0)}}Object.assign(Ks.prototype,{set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)},intersectObject:function(t,e,n){let i=n||[];return ba(t,this,i,e),i.sort(kl),i},intersectObjects:function(t,e,n){let i=n||[];if(Array.isArray(t)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,s=t.length;r<s;r++)ba(t[r],this,i,e);return i.sort(kl),i}});var Vl=new ne,Wl=class{constructor(e,n){Object.defineProperty(this,"isBox2",{value:!0}),this.min=e!==void 0?e:new ne(Infinity,Infinity),this.max=n!==void 0?n:new ne(-Infinity,-Infinity)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Vl.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=Infinity,this.max.x=this.max.y=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new ne),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new ne),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),n=new ne),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),n=new ne),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Vl.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},jl=new L,$s=new L,ql=class{constructor(e,n){this.start=e!==void 0?e:new L,this.end=n!==void 0?n:new L}set(e,n){return this.start.copy(e),this.end.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new L),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new L),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return n===void 0&&(console.warn("THREE.Line3: .at() target is now required"),n=new L),this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){jl.subVectors(e,this.start),$s.subVectors(this.end,this.start);let i=$s.dot($s),s=$s.dot(jl)/i;return n&&(s=Me.clamp(s,0,1)),s}closestPointToPoint(e,n,i){let r=this.closestPointToPointParameter(e,n);return i===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),i=new L),this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}};function Qs(t){ve.call(this),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}Qs.prototype=Object.create(ve.prototype);Qs.prototype.constructor=Qs;Qs.prototype.isImmediateRenderObject=!0;var On=new L,eo=new Se,wa=new Se,Xl=class extends Gi{constructor(e){let n=Yl(e),i=new ze,r=[],s=[],o=new pe(0,0,1),a=new pe(0,1,0);for(let l=0;l<n.length;l++){let u=n[l];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new We(r,3)),i.setAttribute("color",new We(s,3));let c=new xt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=n,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let n=this.bones,i=this.geometry,r=i.getAttribute("position");wa.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<n.length;s++){let a=n[s];a.parent&&a.parent.isBone&&(eo.multiplyMatrices(wa,a.matrixWorld),On.setFromMatrixPosition(eo),r.setXYZ(o,On.x,On.y,On.z),eo.multiplyMatrices(wa,a.parent.matrixWorld),On.setFromMatrixPosition(eo),r.setXYZ(o+1,On.x,On.y,On.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function Yl(t){let e=[];t&&t.isBone&&e.push(t);for(let n=0;n<t.children.length;n++)e.push.apply(e,Yl(t.children[n]));return e}var Zl=class extends Gi{constructor(e=10,n=10,i=4473924,r=8947848){i=new pe(i),r=new pe(r);let s=n/2,o=e/n,a=e/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=n;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);let v=d===s?i:r;v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3}let u=new ze;u.setAttribute("position",new We(c,3)),u.setAttribute("color",new We(l,3));let h=new xt({vertexColors:!0,toneMapped:!1});super(u,h);this.type="GridHelper"}};var Ug=new Float32Array(1),Kg=new Int32Array(Ug.buffer);var Hg=4,Jl=8,$g=Math.pow(2,Jl),Gg=[.125,.215,.35,.446,.526,.582],Qg=Jl-Hg+1+Gg.length;var ev={[di]:0,[fi]:1,[tc]:2,[nc]:3,[ic]:4,[rc]:5,[is]:6},kg=new ot({side:et,depthWrite:!1,depthTest:!1}),tv=new Ge(new Li,kg);var ei=(1+Math.sqrt(5))/2,er=1/ei,nv=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,ei,er),new L(0,ei,-er),new L(er,0,ei),new L(-er,0,ei),new L(ei,er,0),new L(-ei,er,0)];_e.create=function(t,e){return console.log("THREE.Curve.create() has been deprecated"),t.prototype=Object.create(_e.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t};Object.assign(Kt.prototype,{fromPoints:function(t){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(t)}});function Vg(t){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),dt.call(this,t),this.type="catmullrom",this.closed=!0}Vg.prototype=Object.create(dt.prototype);function Wg(t){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),dt.call(this,t),this.type="catmullrom"}Wg.prototype=Object.create(dt.prototype);function Kl(t){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),dt.call(this,t),this.type="catmullrom"}Kl.prototype=Object.create(dt.prototype);Object.assign(Kl.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});Zl.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Xl.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(Oe.prototype,{extractUrlBase:function(t){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Qn.extractUrlBase(t)}});Oe.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(Wl.prototype,{center:function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},size:function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign(gt.prototype,{center:function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},size:function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign(Gt.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});Tr.prototype.setFromMatrix=function(t){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(t)};ql.prototype.center=function(t){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(t)};Object.assign(Me,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(t){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),Me.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),Me.ceilPowerOfTwo(t)}});Object.assign(bt.prototype,{flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},multiplyVector3:function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},getInverse:function(t){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}});Object.assign(Se.prototype,{extractPosition:function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new L().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector4:function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this)},crossVector:function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(t,e,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(t,e,i,n,r,s)},getInverse:function(t){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}});kt.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)};Object.assign(mt.prototype,{multiplyVector3:function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)},inverse:function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()}});Object.assign(_i.prototype,{isIntersectionBox:function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}});Object.assign(st.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(t,e)},midpoint:function(t){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(t)},normal:function(t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(t)},plane:function(t){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(t)}});Object.assign(st,{barycoordFromPoint:function(t,e,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),st.getBarycoord(t,e,n,i,r)},normal:function(t,e,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),st.getNormal(t,e,n,i)}});Object.assign($i.prototype,{extractAllPoints:function(t){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(t)},extrude:function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ta(this,t)},makeGeometry:function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new yl(this,t)}});Object.assign(ne.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(L.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},applyProjection:function(t){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},fromAttribute:function(t,e,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Ne.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(ve.prototype,{getChildByName:function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(t,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,t)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(t){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.defineProperties(ve.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(Ge.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(Ge.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Mh},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(Jo.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(Nr.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Fr.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(_e.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(t){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=t}});Ye.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(t)};Object.defineProperties(ke.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t}}});Object.defineProperties(Ee.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===yr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(yr)}}});Object.assign(Ee.prototype,{setDynamic:function(t){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?yr:rs),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(ze.prototype,{addIndex:function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t)},addAttribute:function(t,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(t,new Ee(arguments[1],arguments[2]))):t==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(t,e)},addDrawCall:function(t,e,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(t){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(t)},applyMatrix:function(t){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.defineProperties(ze.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(Xs.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(t){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=t}}});Object.defineProperties(Ks.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(t){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=t}}});Object.defineProperties(yt.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===yr},set:function(t){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(t)}}});Object.assign(yt.prototype,{setDynamic:function(t){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?yr:rs),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(ta.prototype,{getArrays:function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")}});Object.assign(Pr.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}});Object.defineProperties(Js.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(be.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new pe}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(t){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===Da}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(t){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=t}}});Object.defineProperties(Yn.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(qt.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(t){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=t}}});Object.defineProperties(vt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t}}});Object.assign(Bi.prototype,{clearTarget:function(t,e,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.clear(e,n,i)},animate:function(t){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(Bi.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(t){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=t===!0?fi:di}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(kc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(gi.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t}}});Object.defineProperties(Ol.prototype,{load:{value:function(t){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new ya().load(t,function(i){e.setBuffer(i)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});Fl.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Ii.prototype.updateCubeMap=function(t,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(t,e)};Ii.prototype.clear=function(t,e,n,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(t,e,n,i)};mi.crossOrigin=void 0;mi.loadTexture=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let r=new Kn;r.setCrossOrigin(this.crossOrigin);let s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s};mi.loadTextureCube=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let r=new la;r.setCrossOrigin(this.crossOrigin);let s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s};mi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};mi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);var tr=function(t){ve.call(this),this.element=t||document.createElement("div"),this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})};tr.prototype=Object.assign(Object.create(ve.prototype),{constructor:tr,copy:function(t,e){return ve.prototype.copy.call(this,t,e),this.element=t.element.cloneNode(!0),this}});var pn=function(t){tr.call(this,t)};pn.prototype=Object.create(tr.prototype);pn.prototype.constructor=pn;var $l=function(){var t=this,e,n,i,r,s=new Se,o={camera:{fov:0,style:""},objects:new WeakMap},a=document.createElement("div");a.style.overflow="hidden",this.domElement=a;var c=document.createElement("div");c.style.WebkitTransformStyle="preserve-3d",c.style.transformStyle="preserve-3d",c.style.pointerEvents="none",a.appendChild(c);var l=/Trident/i.test(navigator.userAgent);this.getSize=function(){return{width:e,height:n}},this.setSize=function(m,p){e=m,n=p,i=e/2,r=n/2,a.style.width=m+"px",a.style.height=p+"px",c.style.width=m+"px",c.style.height=p+"px"};function u(m){return Math.abs(m)<1e-10?0:m}function h(m){var p=m.elements;return"matrix3d("+u(p[0])+","+u(-p[1])+","+u(p[2])+","+u(p[3])+","+u(p[4])+","+u(-p[5])+","+u(p[6])+","+u(p[7])+","+u(p[8])+","+u(-p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(-p[13])+","+u(p[14])+","+u(p[15])+")"}function d(m,p){var R=m.elements,I="matrix3d("+u(R[0])+","+u(R[1])+","+u(R[2])+","+u(R[3])+","+u(-R[4])+","+u(-R[5])+","+u(-R[6])+","+u(-R[7])+","+u(R[8])+","+u(R[9])+","+u(R[10])+","+u(R[11])+","+u(R[12])+","+u(R[13])+","+u(R[14])+","+u(R[15])+")";return l?"translate(-50%,-50%)translate("+i+"px,"+r+"px)"+p+I:"translate(-50%,-50%)"+I}function f(m,p,R,I){if(m instanceof tr){m.onBeforeRender(t,p,R);var D;m instanceof pn?(s.copy(R.matrixWorldInverse),s.transpose(),s.copyPosition(m.matrixWorld),s.scale(m.scale),s.elements[3]=0,s.elements[7]=0,s.elements[11]=0,s.elements[15]=1,D=d(s,I)):D=d(m.matrixWorld,I);var M=m.element,N=o.objects.get(m);if(N===void 0||N.style!==D){M.style.WebkitTransform=D,M.style.transform=D;var $={style:D};l&&($.distanceToCameraSquared=g(R,m)),o.objects.set(m,$)}M.style.display=m.visible?"":"none",M.parentNode!==c&&c.appendChild(M),m.onAfterRender(t,p,R)}for(var H=0,W=m.children.length;H<W;H++)f(m.children[H],p,R,I)}var g=function(){var m=new L,p=new L;return function(R,I){return m.setFromMatrixPosition(R.matrixWorld),p.setFromMatrixPosition(I.matrixWorld),m.distanceToSquared(p)}}();function v(m){var p=[];return m.traverse(function(R){R instanceof tr&&p.push(R)}),p}function x(m){for(var p=v(m).sort(function(M,N){var $=o.objects.get(M).distanceToCameraSquared,H=o.objects.get(N).distanceToCameraSquared;return $-H}),R=p.length,I=0,D=p.length;I<D;I++)p[I].element.style.zIndex=R-I}this.render=function(m,p){var R=p.projectionMatrix.elements[5]*r;if(o.camera.fov!==R&&(p.isPerspectiveCamera?(a.style.WebkitPerspective=R+"px",a.style.perspective=R+"px"):(a.style.WebkitPerspective="",a.style.perspective=""),o.camera.fov=R),m.autoUpdate===!0&&m.updateMatrixWorld(),p.parent===null&&p.updateMatrixWorld(),p.isOrthographicCamera)var I=-(p.right+p.left)/2,D=(p.top+p.bottom)/2;var M=p.isOrthographicCamera?"scale("+R+")translate("+u(I)+"px,"+u(D)+"px)"+h(p.matrixWorldInverse):"translateZ("+R+"px)"+h(p.matrixWorldInverse),N=M+"translate("+i+"px,"+r+"px)";o.camera.style!==N&&!l&&(c.style.WebkitTransform=N,c.style.transform=N,o.camera.style=N),f(m,m,p,M),l&&x(m)}};var _t=class{};_t.ANIMATION_DURATION=400,_t.DAMPING_DURATION=2e3,_t.MOUSE_BUTTON={LEFT:0,MIDDLE:1,RIGHT:2};var ft=class{static clamp(e,n,i){return e<=n?n:e>=i?i:e}};var At;(function(t){t[t.EASE_OUT=0]="EASE_OUT",t[t.EASE_IN_OUT=1]="EASE_IN_OUT"})(At||(At={}));var Qt=class{constructor(e,n,i=0,r=_t.ANIMATION_DURATION,s=!0){this._timeStampAtSetEnd=0;this._min=-Infinity;this._max=Infinity;this._hasChanged=!1;this._prevDeltaValue=0;this._prevTimeStamp=1;this._prevDeltaTime=1;this._easing=0;this._timeoutId=-1;this._originalStart=e,this._start=e,this._originalEnd=n,this._end=n,this._value=this._start,this._originalAnimationDuration=this._animationDuration=r,this._easing=i,this._triggerRender=s}static removeFromActiveOnes(e){Qt._activeInstances=Qt._activeInstances.filter(n=>n!==e)}static addToActiveOnes(e){Qt._activeInstances.includes(e)||Qt._activeInstances.push(e)}static updateActiveOnes(e){let n=!1;for(let i of Qt._activeInstances)n=n||i._triggerRender,i.update(e);return n}smoothStep(e){if(e<this._animationDuration){let n=e/this._animationDuration;return ft.clamp(n**2*(3-2*n)*(this._end-this._start)+this._start,this._min,this._max)}else return this._end=ft.clamp(this._end,this._min,this._max),this._end}exponentialOut(e){if(e<this._animationDuration){let n=e/this._animationDuration;return ft.clamp((1-2**(-10*n))*(1024/1023)*(this._end-this._start)+this._start,this._min,this._max)}else return this._end=ft.clamp(this._end,this._min,this._max),this._end}getNextValue(e){return this._easing===1?this.smoothStep(e):this.exponentialOut(e)}increaseEndBy(e,n=!1){this.setEnd(this._end+e,n)}decreaseEndBy(e,n=!1){this.setEnd(this._end-e,n)}setEnd(e,n=!1,i=this._originalAnimationDuration){this._animationDuration=i;let r=n?ft.clamp(e,this._min,this._max):e;Qt.addToActiveOnes(this),this._start=this._value,this._end=r,this._timeStampAtSetEnd=ti.timeStamp,n||(clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{this._end=ft.clamp(this._end,this._min,this._max)},this._animationDuration))}reset(e,n,i=this._originalAnimationDuration){this._animationDuration=i,Qt.addToActiveOnes(this),this._start=e!=null?e:this._originalStart,this._end=n!=null?n:this._originalEnd,this._timeStampAtSetEnd=ti.timeStamp}update(e){this._prevDeltaTime=e-this._prevTimeStamp;let n=e-this._timeStampAtSetEnd,i=this._value;this._value=this.getNextValue(n),this._prevDeltaValue=this._value-i,this._prevTimeStamp=e,this._value===i?(this._start=this._end,this._hasChanged=!1,Qt.removeFromActiveOnes(this)):this._hasChanged=!0}get animationDuration(){return this._animationDuration}get originalAnimationDuration(){return this._originalAnimationDuration}get start(){return this._start}get value(){return this._value}get end(){return this._end}get hasChangedSinceLastTick(){return this._hasChanged}get prevDeltaValue(){return this._prevDeltaValue}get prevDeltaTime(){return this._prevDeltaTime}get derivateAt0(){return this._easing===0?6.938247437862991:0}},mn=Qt;mn._activeInstances=[];var nr=class extends mn{constructor(e,n,i,r,s=At.EASE_OUT,o=_t.ANIMATION_DURATION,a=!0){super(e,n,s,o,a);this._originalMin=this._min=i,this._originalMax=this._max=r}get min(){return this._min}get max(){return this._max}get originalMin(){return this._originalMin}get originalMax(){return this._originalMax}setMin(e){this._min=e;let n=ft.clamp(this._start,this._min,this._max),i=ft.clamp(this._end,this._min,this._max);super.reset(n,i)}setMax(e){this._max=e;let n=ft.clamp(this._start,this._min,this._max),i=ft.clamp(this._end,this._min,this._max);super.reset(n,i)}reset(e,n,i,r,s=!1){this._min=i!=null?i:this._min,this._max=r!=null?r:this._max;let o=e!=null?e:this._originalStart,a=s?ft.clamp(o,this._min,this._max):o,c=n!=null?n:this._originalEnd,l=s?ft.clamp(c,this._min,this._max):c;super.reset(a,l)}isPlaying(){return this.value!==this.end}};var Nt=class{static lengthOfSquared(e){let n=0;for(let i of e)n+=i*i;return n}static lengthOf(e){return Math.sqrt(Nt.lengthOfSquared(e))}static normalize(e){let n=Nt.lengthOf(e);for(let i=0;i<e.length;++i)e[i]/=n;return e}static getWorldPositionFromUV(e,n){let i=[Math.cos(e)*Math.sin(n),Math.cos(n),Math.sin(e)*Math.sin(n)];return Nt.normalize(i)}static add(e,n){let i=[];for(let r=0;r<e.length;++r)i.push(e[r]+n[r]);return i}};var en=class{constructor(){this._shouldPropagate=!0;this._bindings=[]}static create(){return new en}add(e,n,i=0){this.registerListener(e,!1,n,i)}addAndCall(e,n,i=0){this.registerListener(e,!1,n,i),n=n||this,e.call(n)}addOnce(e,n,i=0){this.registerListener(e,!0,n,i)}registerListener(e,n,i,r=0){let s=this.indexOfListener(e,i),o=null;if(s!==-1){if(o=this._bindings[s],o.isOnce!==n)throw new Error("You cannot add"+(n?"":"Once")+"() then add"+(n?"Once":"")+"() the same listener without removing the relationship first.")}else o={listener:e,context:i,isOnce:n,priority:r},this.addBinding(o)}addBinding(e){let n=this._bindings.length;do--n;while(this._bindings[n]&&e.priority<=this._bindings[n].priority);this._bindings.splice(n+1,0,e)}indexOfListener(e,n){for(let i=this._bindings.length-1;i>=0;--i){let r=this._bindings[i];if(r.listener===e&&r.context===n)return i}return-1}has(){}halt(){this._shouldPropagate=!1}remove(e,n){let i=this.indexOfListener(e,n);return i!==-1?(this._bindings.splice(i,1),!0):!1}removeAll(){this._bindings.length=0}dispatch(...e){let n=Array.prototype.slice.call(arguments);this._shouldPropagate=!0;let i=this._bindings;for(let r=i.length-1;r>=0&&!(i[r].listener.apply(i[r].context,n)===!1||!this._shouldPropagate);--r);}dispose(){this.removeAll()}get bindings(){return this._bindings}};var Ma=class{constructor(e,n){this._isPointerDown=!1;this._mouseMoved=!0;this._triggerClickThreshold={deltaCursor:3,deltaTime:1e3};this._pointer={downTimeStamp:null,startX:null,startY:null,prevX:null,prevY:null,prevDeltaX:0,prevDeltaY:0,prevTimeStamp:0,prevDeltaTime:1,triggerClickOnPointerUp:!1};this._u=new nr(0,0,-Infinity,Infinity,At.EASE_OUT,_t.DAMPING_DURATION);this._v=new nr(Math.PI/2,Math.PI/2,.01,3.14,At.EASE_OUT,_t.DAMPING_DURATION);this._pinch={startValue:{touchDistance:null,distanceValue:null},currentValue:{touchDistance:null,distanceValue:null}};this._cameraNormalizedPosition=Nt.normalize([-.3,.3,1]);this._timeoutId=null;this._dampOnPointerUp=!1;this._enabled=!1;this._autoRotate=!0;this.SENSITIVITY=.01;this._prevSpeed=[];this.signals={click:en.create()};this.onWheel=e=>{e.preventDefault();let n=1.1,i=this._sceneManager.distance,r=Math.sign(-e.deltaY)>0?i.end/n:i.end*n;i.setEnd(r,!0)};this.onMouseDown=e=>{e.button===_t.MOUSE_BUTTON.LEFT&&this.onPointerDown(e.clientX,e.clientY)};this.onTouchStart=e=>{e.preventDefault(),e.touches.length===1?this.onPointerDown(e.touches[0].clientX,e.touches[0].clientY):e.touches.length===2?(this._isPointerDown=!1,this._pinch.startValue.touchDistance=this.getTouchDistance(e),this._pinch.startValue.distanceValue=this._sceneManager.distance.value):this.onPointerUp(e)};this.onMouseMove=e=>{this.onPointerMove(e.clientX,e.clientY)};this.onTouchMove=e=>{e.touches.length===1?this.onPointerMove(e.touches[0].clientX,e.touches[0].clientY):e.touches.length===2&&this._pinch.startValue.touchDistance?(this._pinch.currentValue.touchDistance=this.getTouchDistance(e),this._pinch.currentValue.distanceValue=this._pinch.startValue.touchDistance/this._pinch.currentValue.touchDistance*this._pinch.startValue.distanceValue,this._sceneManager.distance.setEnd(this._pinch.currentValue.distanceValue)):this.onPointerUp(e)};this.onPointerUp=e=>{if(this._isPointerDown){let n=performance.now();this._domElement.classList.remove("rotating");let i=this._prevSpeed,r=Nt.lengthOfSquared(i);if(this._dampOnPointerUp&&!isNaN(r)&&0<r&&r<Infinity){this._dampOnPointerUp=!1;let s=this._u.derivateAt0,o=this._u.originalAnimationDuration,a=[o*i[0]/s,o*i[1]/s];this._u.setEnd(this._u.value+a[0]),this._v.setEnd(this._v.value+a[1])}this._triggerClickThreshold.deltaTime<n-this._pointer.downTimeStamp&&(this._pointer.triggerClickOnPointerUp=!1),this._pointer.triggerClickOnPointerUp&&this.signals.click.dispatch({clientX:this._pointer.prevX,clientY:this._pointer.prevY})}this._isPointerDown=!1,this._pointer.triggerClickOnPointerUp=!1,this._pointer.downTimeStamp=null,this._pointer.startX=null,this._pointer.startY=null,this._pointer.prevX=null,this._pointer.prevY=null,this._pointer.prevTimeStamp=0,this._pointer.prevDeltaX=0,this._pointer.prevDeltaY=0,this._pointer.prevDeltaTime=1,this._pinch.startValue.touchDistance=this._pinch.startValue.distanceValue=this._pinch.currentValue.touchDistance=this._pinch.currentValue.distanceValue=null};this.cancelDamping=()=>{this._dampOnPointerUp=!1};this._domElement=e,this._sceneManager=n}getTouchDistance(e){let n={x:e.touches[0].clientX,y:e.touches[0].clientY},i={x:e.touches[1].clientX,y:e.touches[1].clientY},r={x:i.x-n.x,y:i.y-n.y};return Math.sqrt(r.x*r.x+r.y*r.y)}onPointerDown(e,n){this.stopRotating(),this._isPointerDown=!0,this._mouseMoved=!1,this._pointer.startX=this._pointer.prevX=e,this._pointer.startY=this._pointer.prevY=n,this._pointer.downTimeStamp=performance.now(),this._pointer.prevTimeStamp=this._pointer.downTimeStamp,this._pointer.triggerClickOnPointerUp=!0,this._domElement.classList.add("rotating"),this._u.reset(this._u.value,this._u.value),this._v.reset(this._v.value,this._v.value)}onPointerMove(e,n){if(this._isPointerDown&&(this._mouseMoved=e!==this._pointer.prevX||n!==this._pointer.prevY,this._mouseMoved)){if(this._domElement.classList.add("rotating"),this._pointer.prevX!=null&&this._pointer.prevY!=null){let r=this._pointer.prevX-e,s=n-this._pointer.prevY,o=r*this.SENSITIVITY,a=s*this.SENSITIVITY,c=this._pointer.startX-e,l=this._pointer.startY-n;(this._triggerClickThreshold.deltaCursor<Math.abs(c)||this._triggerClickThreshold.deltaCursor<Math.abs(l))&&(this._pointer.triggerClickOnPointerUp=!1),this._pointer.prevDeltaX=this._pointer.prevX-e,this._pointer.prevDeltaY=n-this._pointer.prevY,this._u.reset(this._u.end-o,this._u.end-o),this._v.reset(this._v.end-a,this._v.end-a)}this._pointer.prevX=e,this._pointer.prevY=n;let i=performance.now();this._triggerClickThreshold.deltaTime<i-this._pointer.downTimeStamp&&(this._pointer.triggerClickOnPointerUp=!1),this._pointer.prevDeltaTime=i-this._pointer.prevTimeStamp,this._pointer.prevTimeStamp=i,this._dampOnPointerUp=!0,clearTimeout(this._timeoutId),this._timeoutId=setTimeout(this.cancelDamping,100)}}setUVFromSphereSufracePoint(e){let n=Math.PI-Math.atan2(e[2],e[0]);this._u.reset(n,n);let i=Math.PI/2-Math.asin(e[1]);this._v.reset(i,i)}activate(){this._enabled||(this._enabled=!0,this.setUVFromSphereSufracePoint(this._cameraNormalizedPosition),this._domElement.addEventListener("mousedown",this.onMouseDown),this._domElement.addEventListener("touchstart",this.onTouchStart),this._domElement.addEventListener("wheel",this.onWheel),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("mouseup",this.onPointerUp),window.addEventListener("touchend",this.onPointerUp),window.addEventListener("touchcancel",this.onPointerUp))}deactivate(){this._enabled&&(this._enabled=!1,this._isPointerDown=!1,this._domElement.classList.remove("rotating"),this._domElement.removeEventListener("mousedown",this.onMouseDown),this._domElement.removeEventListener("touchstart",this.onTouchStart),this._domElement.removeEventListener("wheel",this.onWheel),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onPointerUp),window.removeEventListener("touchend",this.onPointerUp),window.removeEventListener("touchcancel",this.onPointerUp))}stopRotating(){this._autoRotate=!1,this._u.reset(this._u.value,this._u.value),this._v.reset(this._v.value,this._v.value)}update(){if(this._enabled)return this._autoRotate&&this._u.reset(this._u.end+5e-4,this._u.end+5e-4),(this._u.hasChangedSinceLastTick||this._v.hasChangedSinceLastTick)&&(this._prevSpeed[0]=this._u.prevDeltaValue/this._u.prevDeltaTime,this._prevSpeed[1]=this._v.prevDeltaValue/this._v.prevDeltaTime,this._cameraNormalizedPosition=Nt.getWorldPositionFromUV(this._u.value,this._v.value),this._sceneManager.needsRender=!0),this._cameraNormalizedPosition}};var Ql=function(){function t(w){Oe.call(this,w),this.dracoLoader=null,this.ddsLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(b){return new o(b)}),this.register(function(b){return new c(b)}),this.register(function(b){return new l(b)}),this.register(function(b){return new a(b)}),this.register(function(b){return new r(b)}),this.register(function(b){return new u(b)})}t.prototype=Object.assign(Object.create(Oe.prototype),{constructor:t,load:function(w,b,P,S){var C=this,F;this.resourcePath!==""?F=this.resourcePath:this.path!==""?F=this.path:F=Qn.extractUrlBase(w),this.manager.itemStart(w);var E=function(B){S?S(B):console.error(B),C.manager.itemError(w),C.manager.itemEnd(w)},A=new Rt(this.manager);A.setPath(this.path),A.setResponseType("arraybuffer"),A.setRequestHeader(this.requestHeader),A.setWithCredentials(this.withCredentials),A.load(w,function(B){try{C.parse(B,F,function(k){b(k),C.manager.itemEnd(w)},E)}catch(k){E(k)}},P,E)},setDRACOLoader:function(w){return this.dracoLoader=w,this},setDDSLoader:function(w){return this.ddsLoader=w,this},setKTX2Loader:function(w){return this.ktx2Loader=w,this},setMeshoptDecoder:function(w){return this.meshoptDecoder=w,this},register:function(w){return this.pluginCallbacks.indexOf(w)===-1&&this.pluginCallbacks.push(w),this},unregister:function(w){return this.pluginCallbacks.indexOf(w)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(w),1),this},parse:function(w,b,P,S){var C,F={},E={};if(typeof w=="string")C=w;else{var A=Qn.decodeText(new Uint8Array(w,0,4));if(A===h){try{F[n.KHR_BINARY_GLTF]=new g(w)}catch(V){S&&S(V);return}C=F[n.KHR_BINARY_GLTF].content}else C=Qn.decodeText(new Uint8Array(w))}var B=JSON.parse(C);if(B.asset===void 0||B.asset.version[0]<2){S&&S(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}var k=new de(B,{path:b||this.resourcePath||"",crossOrigin:this.crossOrigin,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});k.fileLoader.setRequestHeader(this.requestHeader);for(var U=0;U<this.pluginCallbacks.length;U++){var _=this.pluginCallbacks[U](k);E[_.name]=_,F[_.name]=!0}if(B.extensionsUsed)for(var U=0;U<B.extensionsUsed.length;++U){var y=B.extensionsUsed[U],Z=B.extensionsRequired||[];switch(y){case n.KHR_MATERIALS_UNLIT:F[y]=new s;break;case n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:F[y]=new p;break;case n.KHR_DRACO_MESH_COMPRESSION:F[y]=new v(B,this.dracoLoader);break;case n.MSFT_TEXTURE_DDS:F[y]=new i(this.ddsLoader);break;case n.KHR_TEXTURE_TRANSFORM:F[y]=new x;break;case n.KHR_MESH_QUANTIZATION:F[y]=new R;break;default:Z.indexOf(y)>=0&&E[y]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+y+'".')}}k.setExtensions(F),k.setPlugins(E),k.parse(P,S)}});function e(){var w={};return{get:function(b){return w[b]},add:function(b,P){w[b]=P},remove:function(b){delete w[b]},removeAll:function(){w={}}}}var n={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",MSFT_TEXTURE_DDS:"MSFT_texture_dds"};function i(w){if(!w)throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing DDSLoader");this.name=n.MSFT_TEXTURE_DDS,this.ddsLoader=w}function r(w){this.parser=w,this.name=n.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}r.prototype._markDefs=function(){for(var w=this.parser,b=this.parser.json.nodes||[],P=0,S=b.length;P<S;P++){var C=b[P];C.extensions&&C.extensions[this.name]&&C.extensions[this.name].light!==void 0&&w._addNodeRef(this.cache,C.extensions[this.name].light)}},r.prototype._loadLight=function(w){var b=this.parser,P="light:"+w,S=b.cache.get(P);if(S)return S;var C=b.json,F=C.extensions&&C.extensions[this.name]||{},E=F.lights||[],A=E[w],B,k=new pe(16777215);A.color!==void 0&&k.fromArray(A.color);var U=A.range!==void 0?A.range:0;switch(A.type){case"directional":B=new Qi(k),B.target.position.set(0,0,-1),B.add(B.target);break;case"point":B=new js(k),B.distance=U;break;case"spot":B=new Ws(k),B.distance=U,A.spot=A.spot||{},A.spot.innerConeAngle=A.spot.innerConeAngle!==void 0?A.spot.innerConeAngle:0,A.spot.outerConeAngle=A.spot.outerConeAngle!==void 0?A.spot.outerConeAngle:Math.PI/4,B.angle=A.spot.outerConeAngle,B.penumbra=1-A.spot.innerConeAngle/A.spot.outerConeAngle,B.target.position.set(0,0,-1),B.add(B.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+A.type)}return B.position.set(0,0,0),B.decay=2,A.intensity!==void 0&&(B.intensity=A.intensity),B.name=b.createUniqueName(A.name||"light_"+w),S=Promise.resolve(B),b.cache.add(P,S),S},r.prototype.createNodeAttachment=function(w){var b=this,P=this.parser,S=P.json,C=S.nodes[w],F=C.extensions&&C.extensions[this.name]||{},E=F.light;return E===void 0?null:this._loadLight(E).then(function(A){return P._getNodeRef(b.cache,E,A)})};function s(){this.name=n.KHR_MATERIALS_UNLIT}s.prototype.getMaterialType=function(){return ot},s.prototype.extendParams=function(w,b,P){var S=[];w.color=new pe(1,1,1),w.opacity=1;var C=b.pbrMetallicRoughness;if(C){if(Array.isArray(C.baseColorFactor)){var F=C.baseColorFactor;w.color.fromArray(F),w.opacity=F[3]}C.baseColorTexture!==void 0&&S.push(P.assignTexture(w,"map",C.baseColorTexture))}return Promise.all(S)};function o(w){this.parser=w,this.name=n.KHR_MATERIALS_CLEARCOAT}o.prototype.getMaterialType=function(w){var b=this.parser,P=b.json.materials[w];return!P.extensions||!P.extensions[this.name]?null:qt},o.prototype.extendMaterialParams=function(w,b){var P=this.parser,S=P.json.materials[w];if(!S.extensions||!S.extensions[this.name])return Promise.resolve();var C=[],F=S.extensions[this.name];if(F.clearcoatFactor!==void 0&&(b.clearcoat=F.clearcoatFactor),F.clearcoatTexture!==void 0&&C.push(P.assignTexture(b,"clearcoatMap",F.clearcoatTexture)),F.clearcoatRoughnessFactor!==void 0&&(b.clearcoatRoughness=F.clearcoatRoughnessFactor),F.clearcoatRoughnessTexture!==void 0&&C.push(P.assignTexture(b,"clearcoatRoughnessMap",F.clearcoatRoughnessTexture)),F.clearcoatNormalTexture!==void 0&&(C.push(P.assignTexture(b,"clearcoatNormalMap",F.clearcoatNormalTexture)),F.clearcoatNormalTexture.scale!==void 0)){var E=F.clearcoatNormalTexture.scale;b.clearcoatNormalScale=new ne(E,-E)}return Promise.all(C)};function a(w){this.parser=w,this.name=n.KHR_MATERIALS_TRANSMISSION}a.prototype.getMaterialType=function(w){var b=this.parser,P=b.json.materials[w];return!P.extensions||!P.extensions[this.name]?null:qt},a.prototype.extendMaterialParams=function(w,b){var P=this.parser,S=P.json.materials[w];if(!S.extensions||!S.extensions[this.name])return Promise.resolve();var C=[],F=S.extensions[this.name];return F.transmissionFactor!==void 0&&(b.transmission=F.transmissionFactor),F.transmissionTexture!==void 0&&C.push(P.assignTexture(b,"transmissionMap",F.transmissionTexture)),Promise.all(C)};function c(w){this.parser=w,this.name=n.KHR_TEXTURE_BASISU}c.prototype.loadTexture=function(w){var b=this.parser,P=b.json,S=P.textures[w];if(!S.extensions||!S.extensions[this.name])return null;var C=S.extensions[this.name],F=P.images[C.source],E=b.options.ktx2Loader;if(!E){if(P.extensionsRequired&&P.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return b.loadTextureImage(w,F,E)};function l(w){this.parser=w,this.name=n.EXT_TEXTURE_WEBP,this.isSupported=null}l.prototype.loadTexture=function(w){var b=this.name,P=this.parser,S=P.json,C=S.textures[w];if(!C.extensions||!C.extensions[b])return null;var F=C.extensions[b],E=S.images[F.source],A=E.uri?P.options.manager.getHandler(E.uri):P.textureLoader;return this.detectSupport().then(function(B){if(B)return P.loadTextureImage(w,E,A);if(S.extensionsRequired&&S.extensionsRequired.indexOf(b)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return P.loadTexture(w)})},l.prototype.detectSupport=function(){return this.isSupported||(this.isSupported=new Promise(function(w){var b=new Image;b.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",b.onload=b.onerror=function(){w(b.height===1)}})),this.isSupported};function u(w){this.name=n.EXT_MESHOPT_COMPRESSION,this.parser=w}u.prototype.loadBufferView=function(w){var b=this.parser.json,P=b.bufferViews[w];if(P.extensions&&P.extensions[this.name]){var S=P.extensions[this.name],C=this.parser.getDependency("buffer",S.buffer),F=this.parser.options.meshoptDecoder;if(!F||!F.supported){if(b.extensionsRequired&&b.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([C,F.ready]).then(function(E){var A=S.byteOffset||0,B=S.byteLength||0,k=S.count,U=S.byteStride,_=new ArrayBuffer(k*U),y=new Uint8Array(E[0],A,B);return F.decodeGltfBuffer(new Uint8Array(_),k,U,y,S.mode,S.filter),_})}else return null};var h="glTF",d=12,f={JSON:1313821514,BIN:5130562};function g(w){this.name=n.KHR_BINARY_GLTF,this.content=null,this.body=null;var b=new DataView(w,0,d);if(this.header={magic:Qn.decodeText(new Uint8Array(w.slice(0,4))),version:b.getUint32(4,!0),length:b.getUint32(8,!0)},this.header.magic!==h)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");for(var P=this.header.length-d,S=new DataView(w,d),C=0;C<P;){var F=S.getUint32(C,!0);C+=4;var E=S.getUint32(C,!0);if(C+=4,E===f.JSON){var A=new Uint8Array(w,d+C,F);this.content=Qn.decodeText(A)}else if(E===f.BIN){var B=d+C;this.body=w.slice(B,B+F)}C+=F}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}function v(w,b){if(!b)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=n.KHR_DRACO_MESH_COMPRESSION,this.json=w,this.dracoLoader=b,this.dracoLoader.preload()}v.prototype.decodePrimitive=function(w,b){var P=this.json,S=this.dracoLoader,C=w.extensions[this.name].bufferView,F=w.extensions[this.name].attributes,E={},A={},B={};for(var k in F){var U=W[k]||k.toLowerCase();E[U]=F[k]}for(k in w.attributes){var U=W[k]||k.toLowerCase();if(F[k]!==void 0){var _=P.accessors[w.attributes[k]],y=M[_.componentType];B[U]=y,A[U]=_.normalized===!0}}return b.getDependency("bufferView",C).then(function(Z){return new Promise(function(V){S.decodeDracoFile(Z,function(O){for(var K in O.attributes){var se=O.attributes[K],oe=A[K];oe!==void 0&&(se.normalized=oe)}V(O)},E,B)})})};function x(){this.name=n.KHR_TEXTURE_TRANSFORM}x.prototype.extendTexture=function(w,b){return w=w.clone(),b.offset!==void 0&&w.offset.fromArray(b.offset),b.rotation!==void 0&&(w.rotation=b.rotation),b.scale!==void 0&&w.repeat.fromArray(b.scale),b.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),w.needsUpdate=!0,w};function m(w){ut.call(this),this.isGLTFSpecularGlossinessMaterial=!0;var b=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),P=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),S=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),C=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),F=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.specularRoughness += geometryRoughness;","material.specularRoughness = min( material.specularRoughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),E={specular:{value:new pe().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=E,this.onBeforeCompile=function(A){for(var B in E)A.uniforms[B]=E[B];A.fragmentShader=A.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",b).replace("#include <metalnessmap_pars_fragment>",P).replace("#include <roughnessmap_fragment>",S).replace("#include <metalnessmap_fragment>",C).replace("#include <lights_physical_fragment>",F)},Object.defineProperties(this,{specular:{get:function(){return E.specular.value},set:function(A){E.specular.value=A}},specularMap:{get:function(){return E.specularMap.value},set:function(A){E.specularMap.value=A,A?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return E.glossiness.value},set:function(A){E.glossiness.value=A}},glossinessMap:{get:function(){return E.glossinessMap.value},set:function(A){E.glossinessMap.value=A,A?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(w)}m.prototype=Object.create(ut.prototype),m.prototype.constructor=m,m.prototype.copy=function(w){return ut.prototype.copy.call(this,w),this.specularMap=w.specularMap,this.specular.copy(w.specular),this.glossinessMap=w.glossinessMap,this.glossiness=w.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this};function p(){return{name:n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,specularGlossinessParams:["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"],getMaterialType:function(){return m},extendParams:function(w,b,P){var S=b.extensions[this.name];w.color=new pe(1,1,1),w.opacity=1;var C=[];if(Array.isArray(S.diffuseFactor)){var F=S.diffuseFactor;w.color.fromArray(F),w.opacity=F[3]}if(S.diffuseTexture!==void 0&&C.push(P.assignTexture(w,"map",S.diffuseTexture)),w.emissive=new pe(0,0,0),w.glossiness=S.glossinessFactor!==void 0?S.glossinessFactor:1,w.specular=new pe(1,1,1),Array.isArray(S.specularFactor)&&w.specular.fromArray(S.specularFactor),S.specularGlossinessTexture!==void 0){var E=S.specularGlossinessTexture;C.push(P.assignTexture(w,"glossinessMap",E)),C.push(P.assignTexture(w,"specularMap",E))}return Promise.all(C)},createMaterial:function(w){var b=new m(w);return b.fog=!0,b.color=w.color,b.map=w.map===void 0?null:w.map,b.lightMap=null,b.lightMapIntensity=1,b.aoMap=w.aoMap===void 0?null:w.aoMap,b.aoMapIntensity=1,b.emissive=w.emissive,b.emissiveIntensity=1,b.emissiveMap=w.emissiveMap===void 0?null:w.emissiveMap,b.bumpMap=w.bumpMap===void 0?null:w.bumpMap,b.bumpScale=1,b.normalMap=w.normalMap===void 0?null:w.normalMap,b.normalMapType=xn,w.normalScale&&(b.normalScale=w.normalScale),b.displacementMap=null,b.displacementScale=1,b.displacementBias=0,b.specularMap=w.specularMap===void 0?null:w.specularMap,b.specular=w.specular,b.glossinessMap=w.glossinessMap===void 0?null:w.glossinessMap,b.glossiness=w.glossiness,b.alphaMap=null,b.envMap=w.envMap===void 0?null:w.envMap,b.envMapIntensity=1,b.refractionRatio=.98,b}}}function R(){this.name=n.KHR_MESH_QUANTIZATION}function I(w,b,P,S){ht.call(this,w,b,P,S)}I.prototype=Object.create(ht.prototype),I.prototype.constructor=I,I.prototype.copySampleValue_=function(w){for(var b=this.resultBuffer,P=this.sampleValues,S=this.valueSize,C=w*S*3+S,F=0;F!==S;F++)b[F]=P[C+F];return b},I.prototype.beforeStart_=I.prototype.copySampleValue_,I.prototype.afterEnd_=I.prototype.copySampleValue_,I.prototype.interpolate_=function(w,b,P,S){for(var C=this.resultBuffer,F=this.sampleValues,E=this.valueSize,A=E*2,B=E*3,k=S-b,U=(P-b)/k,_=U*U,y=_*U,Z=w*B,V=Z-B,O=-2*y+3*_,K=y-_,se=1-O,oe=K-_+U,re=0;re!==E;re++){var me=F[V+re+E],ye=F[V+re+A]*k,we=F[Z+re+E],ue=F[Z+re]*k;C[re]=se*me+oe*ye+O*we+K*ue}return C};var D={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},M={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},N={9728:nt,9729:Je,9984:Kr,9985:ho,9986:$r,9987:Un},$={33071:lt,33648:mr,10497:zn},H={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},W={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},j={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Q={CUBICSPLINE:void 0,LINEAR:Hn,STEP:li},X={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function z(w,b){return typeof w!="string"||w===""?"":(/^https?:\/\//i.test(b)&&/^\//.test(w)&&(b=b.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(w)||/^data:.*,.*$/i.test(w)||/^blob:.*$/i.test(w)?w:b+w)}function G(w){return w.DefaultMaterial===void 0&&(w.DefaultMaterial=new ut({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vn})),w.DefaultMaterial}function Y(w,b,P){for(var S in P.extensions)w[S]===void 0&&(b.userData.gltfExtensions=b.userData.gltfExtensions||{},b.userData.gltfExtensions[S]=P.extensions[S])}function ie(w,b){b.extras!==void 0&&(typeof b.extras=="object"?Object.assign(w.userData,b.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+b.extras))}function ae(w,b,P){for(var S=!1,C=!1,F=0,E=b.length;F<E;F++){var A=b[F];if(A.POSITION!==void 0&&(S=!0),A.NORMAL!==void 0&&(C=!0),S&&C)break}if(!S&&!C)return Promise.resolve(w);for(var B=[],k=[],F=0,E=b.length;F<E;F++){var A=b[F];if(S){var U=A.POSITION!==void 0?P.getDependency("accessor",A.POSITION):w.attributes.position;B.push(U)}if(C){var U=A.NORMAL!==void 0?P.getDependency("accessor",A.NORMAL):w.attributes.normal;k.push(U)}}return Promise.all([Promise.all(B),Promise.all(k)]).then(function(_){var y=_[0],Z=_[1];return S&&(w.morphAttributes.position=y),C&&(w.morphAttributes.normal=Z),w.morphTargetsRelative=!0,w})}function le(w,b){if(w.updateMorphTargets(),b.weights!==void 0)for(var P=0,S=b.weights.length;P<S;P++)w.morphTargetInfluences[P]=b.weights[P];if(b.extras&&Array.isArray(b.extras.targetNames)){var C=b.extras.targetNames;if(w.morphTargetInfluences.length===C.length){w.morphTargetDictionary={};for(var P=0,S=C.length;P<S;P++)w.morphTargetDictionary[C[P]]=P}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ge(w){var b=w.extensions&&w.extensions[n.KHR_DRACO_MESH_COMPRESSION],P;return b?P="draco:"+b.bufferView+":"+b.indices+":"+fe(b.attributes):P=w.indices+":"+fe(w.attributes)+":"+w.mode,P}function fe(w){for(var b="",P=Object.keys(w).sort(),S=0,C=P.length;S<C;S++)b+=P[S]+":"+w[P[S]]+";";return b}function de(w,b){this.json=w||{},this.extensions={},this.plugins={},this.options=b||{},this.cache=new e,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.nodeNamesUsed={},typeof createImageBitmap!="undefined"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new Ys(this.options.manager):this.textureLoader=new Kn(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.fileLoader=new Rt(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}de.prototype.setExtensions=function(w){this.extensions=w},de.prototype.setPlugins=function(w){this.plugins=w},de.prototype.parse=function(w,b){var P=this,S=this.json,C=this.extensions;this.cache.removeAll(),this._invokeAll(function(F){return F._markDefs&&F._markDefs()}),Promise.all([this.getDependencies("scene"),this.getDependencies("animation"),this.getDependencies("camera")]).then(function(F){var E={scene:F[0][S.scene||0],scenes:F[0],animations:F[1],cameras:F[2],asset:S.asset,parser:P,userData:{}};Y(C,E,S),ie(E,S),w(E)}).catch(b)},de.prototype._markDefs=function(){for(var w=this.json.nodes||[],b=this.json.skins||[],P=this.json.meshes||[],S=0,C=b.length;S<C;S++)for(var F=b[S].joints,E=0,A=F.length;E<A;E++)w[F[E]].isBone=!0;for(var B=0,k=w.length;B<k;B++){var U=w[B];U.mesh!==void 0&&(this._addNodeRef(this.meshCache,U.mesh),U.skin!==void 0&&(P[U.mesh].isSkinnedMesh=!0)),U.camera!==void 0&&this._addNodeRef(this.cameraCache,U.camera)}},de.prototype._addNodeRef=function(w,b){b!==void 0&&(w.refs[b]===void 0&&(w.refs[b]=w.uses[b]=0),w.refs[b]++)},de.prototype._getNodeRef=function(w,b,P){if(w.refs[b]<=1)return P;var S=P.clone();return S.name+="_instance_"+w.uses[b]++,S},de.prototype._invokeOne=function(w){var b=Object.values(this.plugins);b.push(this);for(var P=0;P<b.length;P++){var S=w(b[P]);if(S)return S}},de.prototype._invokeAll=function(w){var b=Object.values(this.plugins);b.unshift(this);for(var P=[],S=0;S<b.length;S++){var C=w(b[S]);C&&P.push(C)}return P},de.prototype.getDependency=function(w,b){var P=w+":"+b,S=this.cache.get(P);if(!S){switch(w){case"scene":S=this.loadScene(b);break;case"node":S=this.loadNode(b);break;case"mesh":S=this._invokeOne(function(C){return C.loadMesh&&C.loadMesh(b)});break;case"accessor":S=this.loadAccessor(b);break;case"bufferView":S=this._invokeOne(function(C){return C.loadBufferView&&C.loadBufferView(b)});break;case"buffer":S=this.loadBuffer(b);break;case"material":S=this._invokeOne(function(C){return C.loadMaterial&&C.loadMaterial(b)});break;case"texture":S=this._invokeOne(function(C){return C.loadTexture&&C.loadTexture(b)});break;case"skin":S=this.loadSkin(b);break;case"animation":S=this.loadAnimation(b);break;case"camera":S=this.loadCamera(b);break;default:throw new Error("Unknown type: "+w)}this.cache.add(P,S)}return S},de.prototype.getDependencies=function(w){var b=this.cache.get(w);if(!b){var P=this,S=this.json[w+(w==="mesh"?"es":"s")]||[];b=Promise.all(S.map(function(C,F){return P.getDependency(w,F)})),this.cache.add(w,b)}return b},de.prototype.loadBuffer=function(w){var b=this.json.buffers[w],P=this.fileLoader;if(b.type&&b.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+b.type+" buffer type is not supported.");if(b.uri===void 0&&w===0)return Promise.resolve(this.extensions[n.KHR_BINARY_GLTF].body);var S=this.options;return new Promise(function(C,F){P.load(z(b.uri,S.path),C,void 0,function(){F(new Error('THREE.GLTFLoader: Failed to load buffer "'+b.uri+'".'))})})},de.prototype.loadBufferView=function(w){var b=this.json.bufferViews[w];return this.getDependency("buffer",b.buffer).then(function(P){var S=b.byteLength||0,C=b.byteOffset||0;return P.slice(C,C+S)})},de.prototype.loadAccessor=function(w){var b=this,P=this.json,S=this.json.accessors[w];if(S.bufferView===void 0&&S.sparse===void 0)return Promise.resolve(null);var C=[];return S.bufferView!==void 0?C.push(this.getDependency("bufferView",S.bufferView)):C.push(null),S.sparse!==void 0&&(C.push(this.getDependency("bufferView",S.sparse.indices.bufferView)),C.push(this.getDependency("bufferView",S.sparse.values.bufferView))),Promise.all(C).then(function(F){var E=F[0],A=H[S.type],B=M[S.componentType],k=B.BYTES_PER_ELEMENT,U=k*A,_=S.byteOffset||0,y=S.bufferView!==void 0?P.bufferViews[S.bufferView].byteStride:void 0,Z=S.normalized===!0,V,O;if(y&&y!==U){var K=Math.floor(_/y),se="InterleavedBuffer:"+S.bufferView+":"+S.componentType+":"+K+":"+S.count,oe=b.cache.get(se);oe||(V=new B(E,K*y,S.count*y/k),oe=new yt(V,y/k),b.cache.add(se,oe)),O=new ln(oe,A,_%y/k,Z)}else E===null?V=new B(S.count*A):V=new B(E,_,S.count*A),O=new Ee(V,A,Z);if(S.sparse!==void 0){var re=H.SCALAR,me=M[S.sparse.indices.componentType],ye=S.sparse.indices.byteOffset||0,we=S.sparse.values.byteOffset||0,ue=new me(F[1],ye,S.sparse.count*re),xe=new B(F[2],we,S.sparse.count*A);E!==null&&(O=new Ee(O.array.slice(),O.itemSize,O.normalized));for(var Le=0,Ke=ue.length;Le<Ke;Le++){var Ut=ue[Le];if(O.setX(Ut,xe[Le*A]),A>=2&&O.setY(Ut,xe[Le*A+1]),A>=3&&O.setZ(Ut,xe[Le*A+2]),A>=4&&O.setW(Ut,xe[Le*A+3]),A>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return O})},de.prototype.loadTexture=function(w){var b=this,P=this.json,S=this.options,C=P.textures[w],F=C.extensions||{},E;F[n.MSFT_TEXTURE_DDS]?E=P.images[F[n.MSFT_TEXTURE_DDS].source]:E=P.images[C.source];var A;return E.uri&&(A=S.manager.getHandler(E.uri)),A||(A=F[n.MSFT_TEXTURE_DDS]?b.extensions[n.MSFT_TEXTURE_DDS].ddsLoader:this.textureLoader),this.loadTextureImage(w,E,A)},de.prototype.loadTextureImage=function(w,b,P){var S=this,C=this.json,F=this.options,E=C.textures[w],A=self.URL||self.webkitURL,B=b.uri,k=!1,U=!0;return b.mimeType==="image/jpeg"&&(U=!1),b.bufferView!==void 0&&(B=S.getDependency("bufferView",b.bufferView).then(function(_){if(b.mimeType==="image/png"){var y=new DataView(_,25,1).getUint8(0,!1);U=y===6||y===4||y===3}k=!0;var Z=new Blob([_],{type:b.mimeType});return B=A.createObjectURL(Z),B})),Promise.resolve(B).then(function(_){return new Promise(function(y,Z){var V=y;P.isImageBitmapLoader===!0&&(V=function(O){y(new ki(O))}),P.load(z(_,F.path),V,void 0,Z)})}).then(function(_){k===!0&&A.revokeObjectURL(B),_.flipY=!1,E.name&&(_.name=E.name),U||(_.format=nn);var y=C.samplers||{},Z=y[E.sampler]||{};return _.magFilter=N[Z.magFilter]||Je,_.minFilter=N[Z.minFilter]||Un,_.wrapS=$[Z.wrapS]||zn,_.wrapT=$[Z.wrapT]||zn,S.associations.set(_,{type:"textures",index:w}),_})},de.prototype.assignTexture=function(w,b,P){var S=this;return this.getDependency("texture",P.index).then(function(C){if(P.texCoord!==void 0&&P.texCoord!=0&&!(b==="aoMap"&&P.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+P.texCoord+" for texture "+b+" not yet supported."),S.extensions[n.KHR_TEXTURE_TRANSFORM]){var F=P.extensions!==void 0?P.extensions[n.KHR_TEXTURE_TRANSFORM]:void 0;if(F){var E=S.associations.get(C);C=S.extensions[n.KHR_TEXTURE_TRANSFORM].extendTexture(C,F),S.associations.set(C,E)}}w[b]=C})},de.prototype.assignFinalMaterial=function(w){var b=w.geometry,P=w.material,S=b.attributes.tangent!==void 0,C=b.attributes.color!==void 0,F=b.attributes.normal===void 0,E=w.isSkinnedMesh===!0,A=Object.keys(b.morphAttributes).length>0,B=A&&b.morphAttributes.normal!==void 0;if(w.isPoints){var k="PointsMaterial:"+P.uuid,U=this.cache.get(k);U||(U=new un,be.prototype.copy.call(U,P),U.color.copy(P.color),U.map=P.map,U.sizeAttenuation=!1,this.cache.add(k,U)),P=U}else if(w.isLine){var k="LineBasicMaterial:"+P.uuid,_=this.cache.get(k);_||(_=new xt,be.prototype.copy.call(_,P),_.color.copy(P.color),this.cache.add(k,_)),P=_}if(S||C||F||E||A){var k="ClonedMaterial:"+P.uuid+":";P.isGLTFSpecularGlossinessMaterial&&(k+="specular-glossiness:"),E&&(k+="skinning:"),S&&(k+="vertex-tangents:"),C&&(k+="vertex-colors:"),F&&(k+="flat-shading:"),A&&(k+="morph-targets:"),B&&(k+="morph-normals:");var y=this.cache.get(k);y||(y=P.clone(),E&&(y.skinning=!0),C&&(y.vertexColors=!0),F&&(y.flatShading=!0),A&&(y.morphTargets=!0),B&&(y.morphNormals=!0),S&&(y.vertexTangents=!0,y.normalScale&&(y.normalScale.y*=-1),y.clearcoatNormalScale&&(y.clearcoatNormalScale.y*=-1)),this.cache.add(k,y),this.associations.set(y,this.associations.get(P))),P=y}P.aoMap&&b.attributes.uv2===void 0&&b.attributes.uv!==void 0&&b.setAttribute("uv2",b.attributes.uv),w.material=P},de.prototype.getMaterialType=function(){return ut},de.prototype.loadMaterial=function(w){var b=this,P=this.json,S=this.extensions,C=P.materials[w],F,E={},A=C.extensions||{},B=[];if(A[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){var k=S[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];F=k.getMaterialType(),B.push(k.extendParams(E,C,b))}else if(A[n.KHR_MATERIALS_UNLIT]){var U=S[n.KHR_MATERIALS_UNLIT];F=U.getMaterialType(),B.push(U.extendParams(E,C,b))}else{var _=C.pbrMetallicRoughness||{};if(E.color=new pe(1,1,1),E.opacity=1,Array.isArray(_.baseColorFactor)){var y=_.baseColorFactor;E.color.fromArray(y),E.opacity=y[3]}_.baseColorTexture!==void 0&&B.push(b.assignTexture(E,"map",_.baseColorTexture)),E.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,E.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(B.push(b.assignTexture(E,"metalnessMap",_.metallicRoughnessTexture)),B.push(b.assignTexture(E,"roughnessMap",_.metallicRoughnessTexture))),F=this._invokeOne(function(V){return V.getMaterialType&&V.getMaterialType(w)}),B.push(Promise.all(this._invokeAll(function(V){return V.extendMaterialParams&&V.extendMaterialParams(w,E)})))}C.doubleSided===!0&&(E.side=Nn);var Z=C.alphaMode||X.OPAQUE;return Z===X.BLEND?(E.transparent=!0,E.depthWrite=!1):(E.transparent=!1,Z===X.MASK&&(E.alphaTest=C.alphaCutoff!==void 0?C.alphaCutoff:.5)),C.normalTexture!==void 0&&F!==ot&&(B.push(b.assignTexture(E,"normalMap",C.normalTexture)),E.normalScale=new ne(1,-1),C.normalTexture.scale!==void 0&&E.normalScale.set(C.normalTexture.scale,-C.normalTexture.scale)),C.occlusionTexture!==void 0&&F!==ot&&(B.push(b.assignTexture(E,"aoMap",C.occlusionTexture)),C.occlusionTexture.strength!==void 0&&(E.aoMapIntensity=C.occlusionTexture.strength)),C.emissiveFactor!==void 0&&F!==ot&&(E.emissive=new pe().fromArray(C.emissiveFactor)),C.emissiveTexture!==void 0&&F!==ot&&B.push(b.assignTexture(E,"emissiveMap",C.emissiveTexture)),Promise.all(B).then(function(){var V;return F===m?V=S[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(E):V=new F(E),C.name&&(V.name=C.name),V.map&&(V.map.encoding=fi),V.emissiveMap&&(V.emissiveMap.encoding=fi),ie(V,C),b.associations.set(V,{type:"materials",index:w}),C.extensions&&Y(S,V,C),V})},de.prototype.createUniqueName=function(w){for(var b=rt.sanitizeNodeName(w||""),P=b,S=1;this.nodeNamesUsed[P];++S)P=b+"_"+S;return this.nodeNamesUsed[P]=!0,P};function Te(w,b,P){var S=b.attributes,C=new gt;if(S.POSITION!==void 0){var F=P.json.accessors[S.POSITION],E=F.min,A=F.max;if(E!==void 0&&A!==void 0)C.set(new L(E[0],E[1],E[2]),new L(A[0],A[1],A[2]));else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;var B=b.targets;if(B!==void 0){for(var k=new L,U=new L,_=0,y=B.length;_<y;_++){var Z=B[_];if(Z.POSITION!==void 0){var F=P.json.accessors[Z.POSITION],E=F.min,A=F.max;E!==void 0&&A!==void 0?(U.setX(Math.max(Math.abs(E[0]),Math.abs(A[0]))),U.setY(Math.max(Math.abs(E[1]),Math.abs(A[1]))),U.setZ(Math.max(Math.abs(E[2]),Math.abs(A[2]))),k.max(U)):console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}C.expandByVector(k)}w.boundingBox=C;var V=new Gt;C.getCenter(V.center),V.radius=C.min.distanceTo(C.max)/2,w.boundingSphere=V}function Fe(w,b,P){var S=b.attributes,C=[];function F(k,U){return P.getDependency("accessor",k).then(function(_){w.setAttribute(U,_)})}for(var E in S){var A=W[E]||E.toLowerCase();A in w.attributes||C.push(F(S[E],A))}if(b.indices!==void 0&&!w.index){var B=P.getDependency("accessor",b.indices).then(function(k){w.setIndex(k)});C.push(B)}return ie(w,b),Te(w,b,P),Promise.all(C).then(function(){return b.targets!==void 0?ae(w,b.targets,P):w})}function te(w,b){var P=w.getIndex();if(P===null){var S=[],C=w.getAttribute("position");if(C!==void 0){for(var F=0;F<C.count;F++)S.push(F);w.setIndex(S),P=w.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),w}var E=P.count-2,A=[];if(b===go)for(var F=1;F<=E;F++)A.push(P.getX(0)),A.push(P.getX(F)),A.push(P.getX(F+1));else for(var F=0;F<E;F++)F%2==0?(A.push(P.getX(F)),A.push(P.getX(F+1)),A.push(P.getX(F+2))):(A.push(P.getX(F+2)),A.push(P.getX(F+1)),A.push(P.getX(F)));A.length/3!==E&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");var B=w.clone();return B.setIndex(A),B}return de.prototype.loadGeometries=function(w){var b=this,P=this.extensions,S=this.primitiveCache;function C(y){return P[n.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(y,b).then(function(Z){return Fe(Z,y,b)})}for(var F=[],E=0,A=w.length;E<A;E++){var B=w[E],k=ge(B),U=S[k];if(U)F.push(U.promise);else{var _;B.extensions&&B.extensions[n.KHR_DRACO_MESH_COMPRESSION]?_=C(B):_=Fe(new ze,B,b),S[k]={primitive:B,promise:_},F.push(_)}}return Promise.all(F)},de.prototype.loadMesh=function(w){for(var b=this,P=this.json,S=this.extensions,C=P.meshes[w],F=C.primitives,E=[],A=0,B=F.length;A<B;A++){var k=F[A].material===void 0?G(this.cache):this.getDependency("material",F[A].material);E.push(k)}return E.push(b.loadGeometries(F)),Promise.all(E).then(function(U){for(var _=U.slice(0,U.length-1),y=U[U.length-1],Z=[],V=0,O=y.length;V<O;V++){var K=y[V],se=F[V],oe,re=_[V];if(se.mode===D.TRIANGLES||se.mode===D.TRIANGLE_STRIP||se.mode===D.TRIANGLE_FAN||se.mode===void 0)oe=C.isSkinnedMesh===!0?new Fr(K,re):new Ge(K,re),re.isMeshStandardMaterial===!0&&re.side===Nn&&K.getIndex()!==null&&K.hasAttribute("position")===!0&&K.hasAttribute("normal")===!0&&K.hasAttribute("uv")===!0&&K.hasAttribute("tangent")===!1&&(K.computeTangents(),re.vertexTangents=!0),oe.isSkinnedMesh===!0&&!oe.geometry.attributes.skinWeight.normalized&&oe.normalizeSkinWeights(),se.mode===D.TRIANGLE_STRIP?oe.geometry=te(oe.geometry,ec):se.mode===D.TRIANGLE_FAN&&(oe.geometry=te(oe.geometry,go));else if(se.mode===D.LINES)oe=new Gi(K,re);else if(se.mode===D.LINE_STRIP)oe=new Pn(K,re);else if(se.mode===D.LINE_LOOP)oe=new Is(K,re);else if(se.mode===D.POINTS)oe=new Fs(K,re);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+se.mode);Object.keys(oe.geometry.morphAttributes).length>0&&le(oe,C),oe.name=b.createUniqueName(C.name||"mesh_"+w),ie(oe,C),se.extensions&&Y(S,oe,se),b.assignFinalMaterial(oe),Z.push(oe)}if(Z.length===1)return Z[0];for(var me=new jt,V=0,O=Z.length;V<O;V++)me.add(Z[V]);return me})},de.prototype.loadCamera=function(w){var b,P=this.json.cameras[w],S=P[P.type];if(!S){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return P.type==="perspective"?b=new Ye(Me.radToDeg(S.yfov),S.aspectRatio||1,S.znear||1,S.zfar||2e6):P.type==="orthographic"&&(b=new qr(-S.xmag,S.xmag,S.ymag,-S.ymag,S.znear,S.zfar)),P.name&&(b.name=this.createUniqueName(P.name)),ie(b,P),Promise.resolve(b)},de.prototype.loadSkin=function(w){var b=this.json.skins[w],P={joints:b.joints};return b.inverseBindMatrices===void 0?Promise.resolve(P):this.getDependency("accessor",b.inverseBindMatrices).then(function(S){return P.inverseBindMatrices=S,P})},de.prototype.loadAnimation=function(w){for(var b=this.json,P=b.animations[w],S=[],C=[],F=[],E=[],A=[],B=0,k=P.channels.length;B<k;B++){var U=P.channels[B],_=P.samplers[U.sampler],y=U.target,Z=y.node!==void 0?y.node:y.id,V=P.parameters!==void 0?P.parameters[_.input]:_.input,O=P.parameters!==void 0?P.parameters[_.output]:_.output;S.push(this.getDependency("node",Z)),C.push(this.getDependency("accessor",V)),F.push(this.getDependency("accessor",O)),E.push(_),A.push(y)}return Promise.all([Promise.all(S),Promise.all(C),Promise.all(F),Promise.all(E),Promise.all(A)]).then(function(K){for(var se=K[0],oe=K[1],re=K[2],me=K[3],ye=K[4],we=[],ue=0,xe=se.length;ue<xe;ue++){var Le=se[ue],Ke=oe[ue],Ut=re[ue],sr=me[ue],ii=ye[ue];if(Le!==void 0){Le.updateMatrix(),Le.matrixAutoUpdate=!0;var ri;switch(j[ii.path]){case j.weights:ri=Zn;break;case j.rotation:ri=Ji;break;case j.position:case j.scale:default:ri=Jn;break}var or=Le.name?Le.name:Le.uuid,io=sr.interpolation!==void 0?Q[sr.interpolation]:Hn,Ht=[];j[ii.path]===j.weights?Le.traverse(function(T){T.isMesh===!0&&T.morphTargetInfluences&&Ht.push(T.name?T.name:T.uuid)}):Ht.push(or);var Lt=Ut.array;if(Ut.normalized){var gn;if(Lt.constructor===Int8Array)gn=1/127;else if(Lt.constructor===Uint8Array)gn=1/255;else if(Lt.constructor==Int16Array)gn=1/32767;else if(Lt.constructor===Uint16Array)gn=1/65535;else throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");for(var ar=new Float32Array(Lt.length),$e=0,si=Lt.length;$e<si;$e++)ar[$e]=Lt[$e]*gn;Lt=ar}for(var $e=0,si=Ht.length;$e<si;$e++){var cr=new ri(Ht[$e]+"."+j[ii.path],Ke.array,Lt,io);sr.interpolation==="CUBICSPLINE"&&(cr.createInterpolant=function(ee){return new I(this.times,this.values,this.getValueSize()/3,ee)},cr.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),we.push(cr)}}}var ro=P.name?P.name:"animation_"+w;return new Tt(ro,void 0,we)})},de.prototype.loadNode=function(w){var b=this.json,P=this.extensions,S=this,C=b.nodes[w],F=C.name?S.createUniqueName(C.name):"";return function(){var E=[];return C.mesh!==void 0&&E.push(S.getDependency("mesh",C.mesh).then(function(A){var B=S._getNodeRef(S.meshCache,C.mesh,A);return C.weights!==void 0&&B.traverse(function(k){if(!!k.isMesh)for(var U=0,_=C.weights.length;U<_;U++)k.morphTargetInfluences[U]=C.weights[U]}),B})),C.camera!==void 0&&E.push(S.getDependency("camera",C.camera).then(function(A){return S._getNodeRef(S.cameraCache,C.camera,A)})),S._invokeAll(function(A){return A.createNodeAttachment&&A.createNodeAttachment(w)}).forEach(function(A){E.push(A)}),Promise.all(E)}().then(function(E){var A;if(C.isBone===!0?A=new Br:E.length>1?A=new jt:E.length===1?A=E[0]:A=new ve,A!==E[0])for(var B=0,k=E.length;B<k;B++)A.add(E[B]);if(C.name&&(A.userData.name=C.name,A.name=F),ie(A,C),C.extensions&&Y(P,A,C),C.matrix!==void 0){var U=new Se;U.fromArray(C.matrix),A.applyMatrix4(U)}else C.translation!==void 0&&A.position.fromArray(C.translation),C.rotation!==void 0&&A.quaternion.fromArray(C.rotation),C.scale!==void 0&&A.scale.fromArray(C.scale);return S.associations.set(A,{type:"nodes",index:w}),A})},de.prototype.loadScene=function(){function w(b,P,S,C){var F=S.nodes[b];return C.getDependency("node",b).then(function(E){if(F.skin===void 0)return E;var A;return C.getDependency("skin",F.skin).then(function(B){A=B;for(var k=[],U=0,_=A.joints.length;U<_;U++)k.push(C.getDependency("node",A.joints[U]));return Promise.all(k)}).then(function(B){return E.traverse(function(k){if(!!k.isMesh){for(var U=[],_=[],y=0,Z=B.length;y<Z;y++){var V=B[y];if(V){U.push(V);var O=new Se;A.inverseBindMatrices!==void 0&&O.fromArray(A.inverseBindMatrices.array,y*16),_.push(O)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',A.joints[y])}k.bind(new Nr(U,_),k.matrixWorld)}}),E})}).then(function(E){P.add(E);var A=[];if(F.children)for(var B=F.children,k=0,U=B.length;k<U;k++){var _=B[k];A.push(w(_,E,S,C))}return Promise.all(A)})}return function(P){var S=this.json,C=this.extensions,F=this.json.scenes[P],E=this,A=new jt;F.name&&(A.name=E.createUniqueName(F.name)),ie(A,F),F.extensions&&Y(C,A,F);for(var B=F.nodes||[],k=[],U=0,_=B.length;U<_;U++)k.push(w(B[U],A,S,E));return Promise.all(k).then(function(){return A})}}(),t}();var Sa=class{static get envMap(){return this._envMap||(this._envMap=new Kn().load("assets/images/environment.jpg"),this._envMap.mapping=Jr),this._envMap}static async loadGLTF(e){return await this.loadScene(e)}static loadScene(e){return new Promise((n,i)=>{new Ql().load(e,s=>{s.scene.traverse(o=>{if(o instanceof Ge){let a=o.material;a.envMap===null&&(a.envMap=this.envMap)}}),n(s.scene)})})}};var Ta=class{constructor(e){e=e||{};let n=e.geometry||new Ts(2,2),i=new Xn({vertexShader:`#define GLSLIFY 1
attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec2 vUv;
void main() {
  gl_Position = vec4(position, 1.0);
  vUv = vec2(position.x, position.y) * 0.5 + 0.5;
}`,fragmentShader:`precision mediump float;
#define GLSLIFY 1
//
// GLSL textureless classic 3D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-10-11
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec3 mod289_1604150559(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289_1604150559(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute_1604150559(vec4 x)
{
  return mod289_1604150559(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt_1604150559(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade_1604150559(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise_1604150559(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289_1604150559(Pi0);
  Pi1 = mod289_1604150559(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute_1604150559(permute_1604150559(ix) + iy);
  vec4 ixy0 = permute_1604150559(ixy + iz0);
  vec4 ixy1 = permute_1604150559(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt_1604150559(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt_1604150559(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade_1604150559(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289_1117569599(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289_1117569599(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute_1117569599(vec4 x) {
     return mod289_1117569599(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt_1117569599(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise_1117569599(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D_1117569599 = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g_1117569599 = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g_1117569599;
  vec3 i1 = min( g_1117569599.xyz, l.zxy );
  vec3 i2 = max( g_1117569599.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D_1117569599.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289_1117569599(i);
  vec4 p = permute_1117569599( permute_1117569599( permute_1117569599(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D_1117569599.wyz - D_1117569599.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1_1117569599 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0_1117569599 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1_1117569599.xy,h.z);
  vec3 p3 = vec3(a1_1117569599.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt_1117569599(vec4(dot(p0_1117569599,p0_1117569599), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0_1117569599 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0_1117569599,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

float grain_2281831123(vec2 texCoord, vec2 resolution, float frame, float multiplier) {
    vec2 mult = texCoord * resolution;
    float offset = snoise_1117569599(vec3(mult / multiplier, frame));
    float n1 = pnoise_1604150559(vec3(mult, offset), vec3(1.0/texCoord * resolution, 1.0));
    return n1 / 2.0 + 0.5;
}

float grain_2281831123(vec2 texCoord, vec2 resolution, float frame) {
    return grain_2281831123(texCoord, resolution, frame, 2.5);
}

float grain_2281831123(vec2 texCoord, vec2 resolution) {
    return grain_2281831123(texCoord, resolution, 0.0);
}

vec3 blendSoftLight_1540259130(vec3 base, vec3 blend) {
    return mix(
        sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend), 
        2.0 * base * blend + base * base * (1.0 - 2.0 * blend), 
        step(base, vec3(0.5))
    );
}

// Using conditionals
// vec3 blendSoftLight(vec3 base, vec3 blend) {
//     return vec3(
//         ((blend.r < 0.5) ? (2.0 * base.r * blend.r + base.r * base.r * (1.0 - 2.0 * blend.r)) : (sqrt(base.r) * (2.0 * blend.r - 1.0) + 2.0 * base.r * (1.0 - blend.r))),
//         ((blend.g < 0.5) ? (2.0 * base.g * blend.g + base.g * base.g * (1.0 - 2.0 * blend.g)) : (sqrt(base.g) * (2.0 * blend.g - 1.0) + 2.0 * base.g * (1.0 - blend.g))),
//         ((blend.b < 0.5) ? (2.0 * base.b * blend.b + base.b * base.b * (1.0 - 2.0 * blend.b)) : (sqrt(base.b) * (2.0 * blend.b - 1.0) + 2.0 * base.b * (1.0 - blend.b)))
//     );
// }

uniform vec3 color1;
uniform vec3 color2;
uniform float aspect;
uniform vec2 offset;
uniform vec2 scale;
uniform float noiseAlpha;
uniform bool aspectCorrection;
uniform float grainScale;
uniform float grainTime;
uniform vec2 smooth;

varying vec2 vUv;

void main() {
  vec2 q = vec2(vUv - 0.5);
  if (aspectCorrection) {
    q.x *= aspect;
  }
  q /= scale;
  q -= offset;
  float dst = length(q);
  dst = smoothstep(smooth.x, smooth.y, dst);
  vec3 color = mix(color1, color2, dst);
  
  if (noiseAlpha > 0.0 && grainScale > 0.0) {
    float gSize = 1.0 / grainScale;
    float g = grain_2281831123(vUv, vec2(gSize * aspect, gSize), grainTime);
    vec3 noiseColor = blendSoftLight_1540259130(color, vec3(g));
    gl_FragColor.rgb = mix(color, noiseColor, noiseAlpha);
  } else {
    gl_FragColor.rgb = color;
  }
  gl_FragColor.a = 1.0;
}`,side:vn,uniforms:{aspectCorrection:{value:!1},aspect:{value:1},grainScale:{value:.005},grainTime:{value:0},noiseAlpha:{value:.25},offset:{value:new ne(0,0)},scale:{value:new ne(1,1)},smooth:{value:new ne(0,1)},color1:{value:new pe("#fff")},color2:{value:new pe("#283844")}},depthTest:!1}),r=new Ge(n,i);r.frustumCulled=!1,r.style=s,e&&r.style(e),this._mesh=r;function s(a){if(a=a||{},Array.isArray(a.colors)){let h=a.colors.map(function(d){return typeof d=="string"||typeof d=="number"?new pe(d):d});i.uniforms.color1.value.copy(h[0]),i.uniforms.color2.value.copy(h[1])}if(typeof a.aspect=="number"&&(i.uniforms.aspect.value=a.aspect),typeof a.grainScale=="number"&&(i.uniforms.grainScale.value=a.grainScale),typeof a.grainTime=="number"&&(i.uniforms.grainTime.value=a.grainTime),a.smooth){var c=o(a.smooth,ne);i.uniforms.smooth.value.copy(c)}if(a.offset){var l=o(a.offset,ne);i.uniforms.offset.value.copy(l)}if(typeof a.noiseAlpha=="number"&&(i.uniforms.noiseAlpha.value=a.noiseAlpha),typeof a.scale!="undefined"){var u=a.scale;typeof u=="number"&&(u=[u,u]),u=o(u,ne),i.uniforms.scale.value.copy(u)}typeof a.aspectCorrection!="undefined"&&(i.uniforms.aspectCorrection.value=Boolean(a.aspectCorrection))}let o=(a,c)=>Array.isArray(a)?new c().fromArray(a):a}get mesh(){return this._mesh}};var ni=class{static getCenterOfBoundingBox(e){return{x:(e.min.x+e.max.x)/2,y:(e.min.y+e.max.y)/2,z:(e.min.z+e.max.z)/2}}static getSizeOfBoundingBox(e){return{x:e.max.x-e.min.x,y:e.max.y-e.min.y,z:e.max.z-e.min.z}}static createSpriteFromButton(e,n,i){let r=new pn(e),s=n.size,o=this.buttonOffset;return r.position.set(n.position.x+i[0]*(s.x/2+o),n.position.y+i[1]*(s.y/2+o),n.position.z+i[2]*(s.z/2+o)),r}};ni.buttonOffset=1;var to=class{constructor(e,n){this._sceneManager=e,this._modelData=n,this._object3D=this._sceneManager.createNewContainer(),this._bbox=new gt().setFromObject(this._object3D);let i=this.size;this._object3D.position.x=n.location[0]*i.x,this._object3D.position.y=n.location[1]*i.y,this._object3D.position.z=n.location[2]*i.z,this._intersectable=new Ge(to._boxGeometry,to._invisibleMaterial),this._intersectable.scale.set(i.x,i.y,i.z),this._intersectable.position.copy(this._object3D.position),this._intersectable.updateMatrix(),this._intersectable.updateMatrixWorld(),this._intersectable.userData.modelData=this._modelData,this._object3D.userData.modelData=this._modelData,this._sceneManager.containerGroup.add(this._object3D)}destroy(){this._sceneManager.containerGroup.remove(this._object3D)}get position(){return this._object3D.position}get size(){return ni.getSizeOfBoundingBox(this._bbox)}get modelData(){return this._modelData}get intersectable(){return this._intersectable}},Xr=to;Xr._boxGeometry=new Li,Xr._invisibleMaterial=new ot({transparent:!0,opacity:0});var zt=class{static keys(e){let n=[];for(let i in e)n.push(i);return n}static mergeConfig(e,n){let i=Object.create(e);for(let r in n){let s=n[r];i[r]=s}return i}static compare(e,n){if(e===n)return!0;let i=typeof e;if(i!==typeof n||i!=="object")return!1;let s=zt.keys(e),o=zt.keys(n);if(s.length!==o.length)return!1;s.sort(),o.sort();for(let a=0,c=s.length;a<c;++a)if(s[a]!==o[a])return!1;for(let a=0,c=s.length;a<c;++a){let l=s[a];if(!zt.compare(e[l],n[l]))return!1}return!0}};var Ea=class{constructor(e){this._isActive=!1;this._raycaster=new Ks;this._cursorCoords=new ne;this._selectedContainer=null;this._hoveredContainer=null;this._intersectables=[];this._intersections=[];this.onMouseDown=e=>{this.onMouseModified(e)};this.onTouchStart=e=>{this.onTouchModified(e)};this.onMouseModified=e=>{this.updateCoords(e.clientX,e.clientY)};this.onTouchModified=e=>{if(e.touches.length===1){let n=e.touches[0];this.updateCoords(n.clientX,n.clientY)}};this.onBeforeRender=e=>{this._hoveredContainer=this.calculateHoveredContainer()};this.onClick=e=>{this.updateCoords(e.clientX,e.clientY),this._hoveredContainer=this.calculateHoveredContainer(),this._selectedContainer=this._hoveredContainer,this._sceneManager.selectContainer(this._selectedContainer)};this._sceneManager=e}get _domElement(){return this._sceneManager.domElement}activate(){this._isActive||(this._isActive=!0,this._domElement.addEventListener("mousedown",this.onMouseDown),this._domElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseModified),window.addEventListener("touchmove",this.onTouchModified),this._sceneManager.signals.onBeforeRender.add(this.onBeforeRender),this._sceneManager.cameraControls.signals.click.add(this.onClick))}deactivate(){this._isActive&&(this._isActive=!1,this._domElement.removeEventListener("mousedown",this.onMouseDown),this._domElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseModified),window.removeEventListener("touchmove",this.onTouchModified),this._sceneManager.signals.onBeforeRender.remove(this.onBeforeRender),this._sceneManager.cameraControls.signals.click.remove(this.onClick))}updateCoords(e,n){this._cursorCoords.x=e/this._domElement.offsetWidth*2-1,this._cursorCoords.y=-(n/this._domElement.offsetHeight)*2+1,this._sceneManager.needsRender=!0}updateIntesections(){return this._intersections.length=0,this._intersectables=this._sceneManager.containers.map(e=>e.intersectable),this._raycaster.intersectObjects(this._intersectables,!1,this._intersections),this._intersections}calculateHoveredContainer(){var e,n;return this._raycaster.setFromCamera(this._cursorCoords,this._sceneManager.camera),this._intersections=this.updateIntesections(),this._intersections.length>0&&((e=this._intersections[0].object.userData)==null?void 0:e.modelData)?(n=this._intersections[0].object.userData)==null?void 0:n.modelData:null}isPointCovered(e){let n=new L().subVectors(e,this._sceneManager.camera.position);return this._raycaster.set(this._sceneManager.camera.position,n.clone().normalize()),this._intersections=this.updateIntesections(),this._intersections.length>0&&this._intersections[0].distance<n.length()}selectContainer(e){this._selectedContainer=e}get selectedContainer(){return this._selectedContainer}};var Fn=class{static addToClassList(e,n){for(let i=0;i<e.length;++i)e[i].classList.add(n)}static removeFromClassList(e,n){for(let i=0;i<e.length;++i)e[i].classList.remove(n)}static addListenerToHTMLElements(e,n,i){for(let r=0;r<e.length;++r)e[r].addEventListener(n,i)}static removeListenerFromHTMLElements(e,n,i){for(let r=0;r<e.length;++r)e[r].removeEventListener(n,i)}static addStyleToHTMLElements(e,n,i){for(let r=0;r<e.length;++r)e[r].style[n]=i}static clearElement(e,n=!1){for(;e.lastChild;)e.removeChild(e.lastChild);n&&Fn.detach(e)}static detach(e){var n;(n=e==null?void 0:e.parentElement)==null||n.removeChild(e)}static hideElement(e){e.style.display="none"}static showElement(e,n=!1){e.style.display=n?"block":""}static isElementChildOfElement(e,n){return n.contains(e)}static disableElement(e){e.classList.add("disabledPointerActions")}static enableElement(e){e.classList.remove("disabledPointerActions")}static createButton(e){let n=document.createElement("div");return n.classList.add("btn"),n.classList.add("flexCenter"),n.textContent=e,n}static createAddButton(e){let n=this.createButton("+");return n.classList.add("floating"),n.title="Add new container here",n.onmousedown=e,n.ontouchstart=e,n}};var Aa=class{constructor(e){this._isOkButtonEnabled=!0;this._container=document.createElement("div");this._okButton=document.createElement("div");this.onKeyDown=e=>{switch(e.key){case"Enter":this._isOkButtonEnabled&&this.onOkClick();break;case"Escape":this.onCancelClick();break}};this.onCancelClick=()=>{this.close(),this.resolve(this._cancelValue)};this.onOkClick=()=>{this._isOkButtonEnabled&&(this.close(),this.resolve(this._okValue))};this._props=e,this._config=zt.mergeConfig(Aa._defaultConfig,e.config||{})}close(){window.removeEventListener("keydown",this.onKeyDown),Fn.detach(this._container)}enableOkButton(){this._isOkButtonEnabled=!0,this._okButton.classList.remove("disabled")}disableOkButton(){this._isOkButtonEnabled=!1,this._okButton.classList.add("disabled")}open(){return window.addEventListener("keydown",this.onKeyDown),this.draw(),new Promise((e,n)=>{this.resolve=e})}draw(){this._container.className="popupBackdrop flexCenter",this._config.backdrop&&(this._container.onclick=this.onCancelClick);let e=document.createElement("div");e.className="popupWindow";let n=document.createElement("div");n.className="message",n.innerHTML=this._props.message,e.appendChild(n),this._additionalElements&&e.appendChild(this._additionalElements);let i=document.createElement("div");if(i.className="buttonContainer hbox flexCenter",this._okButton.className="ok btn",this._okButton.textContent=this._config.ok,this._okButton.onclick=this.onOkClick,this._isOkButtonEnabled||this._okButton.classList.add("disabled"),i.appendChild(this._okButton),this._config.cancel){let r=document.createElement("div");r.className="cancel btn",r.textContent=this._config.cancel,r.onclick=this.onCancelClick,i.appendChild(r)}e.appendChild(i),this._container.appendChild(e),this._config.parentElement.appendChild(this._container)}},no=Aa;no._defaultConfig={backdrop:!0,ok:"Yes",cancel:"No",parentElement:document.body};var Yr=class extends no{constructor(e){super({message:e,config:{backdrop:!1}});this._okValue=!0;this._cancelValue=!1}static open(e){return new Yr(e).open()}};var ir=class{constructor(e){this._css3DScene=new Pr;this._scene=new Pr;this._containerGroup=new ve;this._possibleDirections={left:[-1,0,0],right:[1,0,0],top:[0,1,0],front:[0,0,1],back:[0,0,-1]};this._deleteBtn=document.getElementById("deleteBtn");this._containers=[];this._camera=new Ye(60,window.innerWidth/window.innerHeight,.01,1e3);this._distance=new nr(10,10,1,100,At.EASE_OUT,_t.ANIMATION_DURATION);this._target={x:new mn(0,0),y:new mn(0,0),z:new mn(0,0)};this._normalizedCameraPosition=[0,0,1];this.needsRender=!0;this.signals={onBeforeRender:en.create()};this.onContainerAdded=e=>{let n=new Xr(this,e);this._containers.push(n),this.selectContainer(e)};this.onContainerRemoved=e=>{let{container:n,index:i}=this.getContainerByModelData(e);i>-1&&(this._containers.splice(i,1),n==null||n.destroy(),this.deselectAll())};this.onWindowResize=()=>{this._canvas.width=0,this._canvas.height=0;let e=window.innerWidth,n=window.innerHeight;this._renderer.setSize(e,n),this._css3DRenderer.setSize(e,n),this._camera.aspect=e/n,this._camera.updateProjectionMatrix(),this.needsRender=!0};this.onContextLost=e=>{e.preventDefault(),alert("Unfortunately WebGL has crashed. Please reload the page to continue!")};this.update=e=>{ir._timeStamp=performance.now(),this.needsRender=mn.updateActiveOnes(ir._timeStamp)||this.needsRender,this.needsRender&&(this._normalizedCameraPosition=this._controls.update(),this._camera.position.set(this._target.x.value+this._normalizedCameraPosition[0]*this._distance.value,this._target.y.value+this._normalizedCameraPosition[1]*this._distance.value,this._target.z.value+this._normalizedCameraPosition[2]*this._distance.value),this._camera.lookAt(this._target.x.value,this._target.y.value,this._target.z.value),this.adjustCSS3DElements(),this.signals.onBeforeRender.dispatch(ir._timeStamp),this._css3DRenderer.render(this._css3DScene,this._camera),this._renderer.render(this._scene,this._camera),this.needsRender=!1)};this.animate=e=>{this.update(e),this._renderer.setAnimationLoop(this.update)};this._model=e,this._canvas=document.getElementById("myCanvas")}async init(){this.initListeners(),this.initBackground(),this.initLights(),this.initControls(),this.initRenderers(),await this.initMeshes(),this.onWindowResize(),this.animate(0)}initListeners(){this._model.signals.containerAdded.add(this.onContainerAdded),this._model.signals.containerRemoved.add(this.onContainerRemoved),this._deleteBtn.onclick=async()=>{let{selectedContainer:e}=this._selectionTool;if(e){let n=this.getContainersAboveSelected();if(await Yr.open(`You are about to delete ${n.length} container(s). Please confirm to proceed.`))for(let r of n)this._model.removeContainer(r)}}}getContainersAboveSelected(){let e=[],{selectedContainer:n}=this._selectionTool;if(n){e.push(n);for(let i of this._model.containers)i.location[0]===n.location[0]&&i.location[2]===n.location[2]&&i.location[1]>=n.location[1]&&!e.includes(i)&&e.push(i)}return e}updateDeleteBtn(){this.getContainersAboveSelected().length<this._containers.length?this._deleteBtn.classList.remove("disabled"):this._deleteBtn.classList.add("disabled")}getContainerByModelData(e){let n=null,i=this._containers.findIndex(r=>zt.compare(r.modelData,e));return i>-1&&(n=this._containers[i]),{container:n,index:i}}initBackground(){let e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;this._scene.add(new Ta({aspect:this._camera.aspect,grainScale:e?0:.001,colors:["#ffffff","#353535"]}).mesh)}initLights(){let e=new qs(16777215,.1),n=new Qi(16777215,.1);n.position.set(.5,0,.866);let i=new Vs(16777147,526368,.8);this._scene.add(e,n,i)}initControls(){this._controls=new Ma(this.domElement,this),this._controls.activate(),this._selectionTool=new Ea(this),this._selectionTool.activate()}async initMeshes(){this._scene.add(this._containerGroup),this._originalContainer=await Sa.loadGLTF("assets/models/container.glb"),this._model.addContainer({location:[0,0,0]}),this.deselectAll()}isThereAContainerBelowThisOne(e){return!!this._model.containers.find(i=>i.location[0]===e[0]&&i.location[2]===e[2]&&i.location[1]===e[1]-1)}selectContainer(e){if(this.clearCSS3DScene(),e){let{container:n}=this.getContainerByModelData(e);this.focusOnContainer(n);for(let i in this._possibleDirections){let r=n.modelData.location,s=Nt.add(r,this._possibleDirections[i]);if(!this.getContainerByModelData({location:s}).container&&(s[1]===0||this.isThereAContainerBelowThisOne(s))){let a=Fn.createAddButton(l=>{l.preventDefault(),l.stopImmediatePropagation(),this._model.addContainer({location:s})}),c=ni.createSpriteFromButton(a,n,this._possibleDirections[i]);this._css3DScene.add(c)}}this._selectionTool.selectContainer(e),this.updateDeleteBtn()}else this.deselectAll()}deselectAll(){if(this._containers.length>0){let e=new gt;for(let i of this._containers)e.expandByObject(i.intersectable);let n=ni.getCenterOfBoundingBox(e);this.setCameraTarget(n.x,n.y,n.z)}else this.setCameraTarget(0,0,0);this.updateDeleteBtn(),this.clearCSS3DScene()}clearCSS3DScene(){this._css3DScene.traverse(e=>{e instanceof pn&&Fn.detach(e.element)}),this._css3DScene.children.length=0}adjustCSS3DElements(){this._css3DScene.traverse(e=>{if(e instanceof pn){let n=this._distance.value*.0035;e.scale.set(n,n,n),this._selectionTool.isPointCovered(e.position)?e.element.classList.add("disabled"):e.element.classList.remove("disabled")}})}focusOnContainer(e){if(e){let n=e.position;this.setCameraTarget(n.x,n.y,n.z)}}setCameraTarget(e,n,i){this._target.x.setEnd(e),this._target.y.setEnd(n),this._target.z.setEnd(i)}initRenderers(){let e={alpha:!1,antialias:!0},n=this._canvas.getContext("webgl2",e)||this._canvas.getContext("experimental-webgl2",e);this._renderer=new Bi(Ca({canvas:this._canvas,context:n},e)),this._renderer.setPixelRatio(window.devicePixelRatio),this._renderer.setClearColor(15530239),this._renderer.outputEncoding=is,this._canvas.addEventListener("webglcontextlost",this.onContextLost),this._css3DRenderer=new $l,this._css3DRenderer.domElement.style.position="absolute",this._css3DRenderer.domElement.style.top="0",this._css3DRenderer.domElement.style.left="0",this._canvas.parentElement.appendChild(this._css3DRenderer.domElement),window.addEventListener("resize",this.onWindowResize)}createNewContainer(){return this._originalContainer.clone()}get scene(){return this._scene}static get timeStamp(){return ir._timeStamp}get distance(){return this._distance}get camera(){return this._camera}get domElement(){return this._canvas.parentElement}get containerGroup(){return this._containerGroup}get containers(){return this._containers}get cameraControls(){return this._controls}},ti=ir;ti._timeStamp=0;var La=class{constructor(){this._containers=[];this.signals={containerAdded:en.create(),containerRemoved:en.create()}}addContainer(e){this._containers.push(e),this.signals.containerAdded.dispatch(e)}removeContainer(e){if(e){let n=this._containers.findIndex(i=>zt.compare(i,e));n>-1&&(this._containers.splice(n,1),this.signals.containerRemoved.dispatch(e))}}get containers(){return this._containers}};var rr=class{static getInstance(){return rr.instance||new rr}constructor(){rr.instance=this,this._model=new La,this._sceneManager=new ti(this._model),this.init()}async init(){await this._sceneManager.init()}get scene(){return this._sceneManager}get model(){return this._model}},wy=rr.getInstance();})();

(self.webpackChunklite=self.webpackChunklite||[]).push([[3115],{33380:(e,t,r)=>{"use strict";r.d(t,{u6:()=>i,TA:()=>o}),r(63038);var a=r(67294),n={updateWatchedBounds:function(){},watchedBounds:new Map},i=a.createContext(n),o=function(e){var t=e.children,r=e.className,n=e.name,o=e.type,c=e.offset,l=a.useContext(i).updateWatchedBounds,u=a.useRef(null);return a.useEffect((function(){l&&l(n,u,{type:o,offset:c})}),[]),a.createElement("div",{className:r,ref:u},t)}},75845:(e,t,r)=>{"use strict";r.d(t,{sI:()=>w,Yj:()=>S,j$:()=>y,F5:()=>T,Xv:()=>R});var a=r(23450),n=r.n(a),i=r(67294),o=r(83263),c=r(17193),l=r(77355),u=r(93310),s=r(47230),d=r(87691),p=r(52069),h=r(18627),g=r(66411),f=r(14646),m=r(18122),x=r(43487),E=r(92305),v=r(50458),b={xs:277,sm:277,md:196,lg:196},w={xs:140,sm:195,md:90,lg:194},S={xs:105,sm:105,md:194,lg:194},y={sm:380},T=function(e,t){return function(r){return{display:"flex",backgroundColor:r.baseColor.background.light,justifyContent:"space-between",flexDirection:e?"column":"row",overflow:"hidden",border:"1px solid",borderColor:r.baseColor.border.lighter,borderRadius:"4px",maxHeight:"".concat(b[t],"px"),maxWidth:"100%",width:e?"100%":void 0,cursor:"pointer"}}},R=function(e){var t=e.catalog,r=(0,f.I)(),a=(0,x.v9)((function(e){return e.config.authDomain})),R=(0,h.Av)(),k=(0,g.pK)(),O=(0,m.g)({onPresentedFn:function(){R.event("list.presented",{listId:t.id,source:k})}}),I=(0,o.Q)(y),C="sm"===I||"xs"===I,W=S[I],_=w[I],P=i.useCallback((function(e){e.stopPropagation()}),[]),M=i.useCallback((function(){window.top?window.top.location.href=(0,v.yk)(t,a):window.location.href=(0,v.yk)(t,a)}),[t,a]),L=i.useCallback((function(e){"Enter"===e.key&&M()}),[M]);i.useEffect((function(){window.parent.postMessage(JSON.stringify({src:window.location.toString(),context:"iframe.resize",height:b[I]}),"*")}),[I]);var N=i.useMemo((function(){return[t.postItemsCount>0?"".concat(t.postItemsCount," ").concat(n()("story",t.postItemsCount)):null].filter((function(e){return e})).join(", ")}),[t.postItemsCount]);return i.createElement("div",{role:"button",tabIndex:0,onKeyDown:L,onClick:M,className:r(T(C,I))},i.createElement(l.x,{ref:O,padding:"24px"},i.createElement(l.x,{display:"flex",alignItems:"center"},i.createElement(c.Yt,{user:t.creator,scale:"XXXS",target:"_top"}),i.createElement(l.x,{padding:"0 8px",flexShrink:"0"},i.createElement(d.F,{color:"LIGHTER",scale:"S",clamp:1},i.createElement(u.r,{target:"_top",onClick:P,href:(0,v.AW)(t.creator,a)},t.creator.name)))),i.createElement(l.x,{marginTop:C?"16px":"24px",marginBottom:C?"16px":"24px",height:C?"20px":"48px"},i.createElement(p.Dx,{scale:C?"XS":"S",clamp:C?1:2},t.predefined?(0,E.S6)(t.predefined):t.name)),i.createElement(l.x,{display:"flex",alignItems:"center"},i.createElement(l.x,{flexShrink:"0"},i.createElement(s.z,{target:"_top",size:"SMALL",buttonStyle:"SUBTLE",href:(0,v.yk)(t,a)},"View list")),N&&i.createElement(l.x,{paddingLeft:"16px",flexShrink:"0"},i.createElement(d.F,{color:"LIGHTER",scale:"S",tag:"span"},N)))),i.createElement(o.f,{coverHeight:W,coverWidth:_,catalogItems:t.listItemsConnection.items,isEmbeded:!0,breakpoints:y}))}},23115:(e,t,r)=>{"use strict";r.d(t,{ZQ:()=>Ne,lD:()=>He,l:()=>Be});var a=r(63038),n=r.n(a),i=r(59713),o=r.n(i),c=r(67154),l=r.n(c),u=r(67294),s=r(33380),d=r(46484),p=r(34575),h=r.n(p),g=r(93913),f=r.n(g),m=r(2205),x=r.n(m),E=r(78585),v=r.n(E),b=r(29754),w=r.n(b),S=r(38381),y=r(60748),T=r(12643),R=r(319),k=r.n(R),O=r(67713),I=r(29746),C=r(14646),W=r(97489),_=function(e){return function(t){return o()({marginTop:"10px",textAlign:e,maxWidth:"".concat((0,I.G)(t,8,!0),"px"),marginLeft:"left"===e?"0":"auto",marginRight:"auto"},W.lg(t),{marginLeft:"auto",textAlign:"center"})}},P=function(e){return function(){var t=e&&100*e;return{width:"".concat(t,"%"),position:"relative",left:"calc(".concat(100-t/2,"% - 8px)"),transform:"translateX(-50%)"}}},M=u.forwardRef((function(e,t){var r=e.children,a=e.richTextStyle,n=e.textAlign,i=void 0===n?"center":n,o=e.extendLeftRatio,c=(0,C.I)(),l=(0,O.n)({name:"detail",scale:"CARD"===a||"SHORTFORM_CARD"===a?"S":"M",color:"LIGHTER"});return u.createElement("figcaption",{className:c([_(i),l].concat(k()(o?[P(o)]:[]))),ref:t},r)}));function L(e){var t=e.children,r=e.figCaption,a=e.className,n=e.figureRef;return u.createElement("figure",{className:a,ref:n},t,r)}var N=r(34135),H=r(96451),q=function(e){var t=e.rootMargin,r=e.children,a=e.target,i=u.useState(!1),o=n()(i,2),c=o[0],l=o[1],s=u.useCallback((function(e){!c&&e.isIntersecting&&l(!0)}),[c]);return(0,H.S)({onIntersect:s,target:a,disconnect:function(){return c},rootMargin:t},[c]),"function"==typeof r?u.createElement(u.Fragment,null,r(c)):c?u.createElement(u.Fragment,null,r):null},B=function(){return{width:"1px",minWidth:"100%","*width":"100%"}};function A(e){var t,r=e.src,a=e.title,i=e.height,o=e.width,c=e.allowFullScreen,s=e.frameBorder,d=e.rules,p=e.placeholderRef,h=e.iframeRef,g=(0,C.I)(),f={src:r,allowFullScreen:c,frameBorder:s,height:i,width:o},m=u.useState(!1),x=n()(m,2),E=x[0],v=x[1],b=u.useState(!1),w=n()(b,2),S=w[0],y=w[1];return S||N.V6.on("load",(function(){return y(!0)})),null!=h&&null!==(t=h.current)&&void 0!==t&&t.parentElement&&h.current.parentElement.offsetWidth<h.current.offsetWidth&&!E&&v(!0),S?u.createElement(q,{rootMargin:"200px 0px",target:p},(function(e){return e?u.createElement("iframe",l()({},f,{ref:h,title:a,className:g(E?[d,B]:d),scrolling:E?"no":"auto"})):null})):null}var j=r(92661),F=r(43210),D=r(52499),z=function(e){var t=e.paragraph,r=e.paragraphStyle,a=e.richTextStyle,i=e.spaceTop,c=e.updateWatchedBounds,l=(0,C.I)(),s=u.useRef(null),d=(t.iframe||{}).mediaResource,p=d||{},h=p.id,g=p.iframeSrc,f=p.iframeHeight,m=p.iframeWidth,x=p.title,E=(0,j.H2)(),v=g;v||(v=h?E("FetchMediaResourceEmbed",{mediaResourceId:h}):"");var b=function(e){var t=e.src,r=e.initialHeight,a=e.initialWidth,i=u.useRef(null),o=u.useState(r),c=n()(o,2),l=c[0],s=c[1],d=u.useState(a),p=n()(d,2),h=p[0],g=p[1];return u.useEffect((function(){if(""!==t){var e=(0,y.x)((function(e,r){i.current&&"MEASURE"===e.type&&e.details.height>0&&(g(i.current.offsetWidth),i.current.contentWindow===r&&s(e.details.height)),"iframe.resize"===e.context&&e.src===t&&e.height>0&&(i.current&&g(i.current.offsetWidth),s(e.height))})).destructor;return function(){e()}}}),[t,r]),[l,h,i]}({src:v,initialHeight:f||0,initialWidth:m||0}),w=n()(b,3),R=w[0],k=w[1],O=w[2],I=u.useRef(null);if(u.useEffect((function(){if(c&&d&&d.id&&k&&R){var e="";s.current&&(e=s.current.offsetTop.toString()),c("".concat(d.id,"-").concat(e),s,{type:"image"})}}),[]),!v)return null;var _=t.text?u.createElement(M,{richTextStyle:a},u.createElement(S.T2,{paragraph:t,paragraphStyle:r,richTextStyle:a})):null,P=[(0,D.qB)(i)];return P.push((function(){return{clear:"both"}})),"OUTSET_LEFT"===(t.layout||void 0)&&"STREAM"!==a&&"INLINE"!==a&&P.push((function(e){var t;return t={background:e.backgroundColor,borderWidth:e.borderWidthThick+"px",borderStyle:e.borderStyle,borderColor:e.backgroundColor,float:"left",marginLeft:"-150px",marginRight:"30px",width:"75%",padding:"0",paddingBottom:"10px"},o()(t,W.md(e),{float:"none",marginLeft:"0",marginRight:"0",width:"100%"}),o()(t,"marginBottom","16px"),t})),u.createElement(L,{className:l(P),figCaption:_,figureRef:s},u.createElement(T.G,{height:R,width:k,backgroundColor:"NONE",ref:I},u.createElement(A,{placeholderRef:I,iframeRef:O,src:v,title:x||"",height:R,width:k,allowFullScreen:!0,frameBorder:"0",rules:F.m})))},U=u.memo(z),G=r(59854),X=r.n(G),V=r(10374),Y=r(44651),Q=r(18155),J=r(46696),K=function(e){var t=n()(e,1)[0];return"number"==typeof t?"".concat(t,"px"):t},Z=function(e){var t=n()(e,1)[0];return"".concat(t[0],"% ").concat(t[1],"%")},$=function(e){return n()(e,1)[0]};function ee(e){var t=e.backgroundImage,r=e.boxShadowRules,a=e.miroId,n=e.height,i=e.width,o=e.minHeight,c=e.minWidth,l=e.imgHeight,s=e.imgWidth,d=e.focusPercent,p=e.strategy,h=void 0===p?J._S.Resample:p,g=e.freezeGifs,f=(0,C.I)(),m=t;if(!m){var x=(0,J.W6)({miroId:a,height:l,width:s,strategy:h,freezeGifs:g});m="url(".concat(x,")")}var E=(0,Q.mu)(K,n),v=(0,Q.mu)(K,i),b=o&&(0,Q.mu)(K,o),w=c&&(0,Q.mu)(K,c),S=(0,Q.mu)(Z,d),y={backgroundImage:(0,Q.mu)($,m),display:"block",backgroundOrigin:"border-box",backgroundSize:"cover",height:E,width:v,minHeight:b,minWidth:w,backgroundPosition:S,maxWidth:"100%"};return u.createElement("div",{className:f([y,r])})}ee.defaultProps={focusPercent:[50,50]};var te=r(16793),re=function(e){return{backgroundColor:e.brandColor.sage.light}},ae=function(e,t){var r=(0,J.W6)({freezeGifs:!1,miroId:e,strategy:J._S.Resample,width:t.breakpoints.sm}),a=(0,J.W6)({freezeGifs:!1,miroId:e,strategy:J._S.Resample,width:t.breakpoints.md}),n=(0,J.W6)({freezeGifs:!1,miroId:e,strategy:J._S.Resample,width:t.breakpoints.lg}),i=(0,J.W6)({freezeGifs:!1,miroId:e,strategy:J._S.Resample,width:t.breakpoints.xl});return{xl:"url('".concat(i,"')"),lg:"url('".concat(i,"')"),md:"url('".concat(n,"')"),sm:"url('".concat(a,"')"),xs:"url('".concat(r,"')")}};function ne(e){var t=e.metadata,r=(0,C.I)();return u.createElement(te.Z,null,(function(e){return u.createElement("div",{className:r(re)},u.createElement(ee,{backgroundImage:ae(t.id,e),miroId:t.id,height:"60vh",width:"100%",minHeight:{xl:500,lg:400,md:400,sm:300,xs:300},imgHeight:500,imgWidth:2e3,focusPercent:null===t.focusPercentX||void 0===t.focusPercentX||null===t.focusPercentY||void 0===t.focusPercentY?void 0:[t.focusPercentX,t.focusPercentY]}))}))}var ie=r(54188),oe=r(94124),ce=r(30555),le=r(77355),ue=r(12532),se=function(e){var t=e.highlights,r=e.isSequenceCover,a=void 0!==r&&r,n=e.marginTopOverride,i=e.paragraph,c=e.paragraphStyle,s=e.privateNotes,d=e.richTextStyle,p=e.sequenceAspectRatio,h=e.spaceTop,g=e.updateWatchedBounds,f=e.loading,m=void 0===f?oe.K.LAZY:f,x=(0,C.I)(),E=u.useRef(null),v=(0,V.CF)(i,c);return u.useEffect((function(){if(g){var e=i.name,t=i.metadata&&i.metadata.id;if(e&&t){var r="";E.current&&(r=E.current.offsetTop.toString()),g("".concat(e,"-").concat(t,"-").concat(r),E,{type:"image"})}}}),[]),u.useMemo((function(){var e=i.metadata,r=i.layout;if(!e)return null;var g,f=e.id,b=e.originalHeight,w=e.originalWidth,y=e.alt,T=(0,J.JI)(f),R="CARD"===d||"SHORTFORM_CARD"===d||"INLINE"===d,k=(0,ue.jg)({layout:r,originalWidth:w||0,originalHeight:b||0,sequenceAspectRatio:p,richTextStyle:d}),O=k.width,I=k.height,C=k.strategy;if("OUTSET_ROW_CONTINUE"===r&&w&&b&&p){var _=w/b;g=X()(p/_,2)}var P,N=i.text?u.createElement(M,{ref:v,richTextStyle:d,textAlign:a?"left":"center",extendLeftRatio:g},s&&u.createElement(Y.A7,{paragraph:i,privateNotes:s}),u.createElement(S.T2,{highlights:t,paragraph:i,paragraphStyle:c,richTextStyle:d})):null;if(a)P=u.createElement(ne,{metadata:{id:f,focusPercentX:e.focusPercentX,focusPercentY:e.focusPercentY}});else{var H={alt:y||"",miroId:f,height:I,width:O,rules:[{width:"100%",maxWidth:"100%",height:"auto"}],maxWidth:I?void 0:"100%",strategy:C,freezeGifs:"STREAM"===d||"RESAMPLE"!==C,focusPercentX:e.focusPercentX,focusPercentY:e.focusPercentY,expectedWidth:O,loading:m,webp:!0};if("OUTSET_LEFT"===r||"INSET_LEFT"===r||"INSET_CENTER"===r&&w||"OUTSET_CENTER"===r&&w){var q=w&&(T?w/2:w);P=u.createElement(ce.X1,{isLinked:!!i.href,width:H.width,height:H.height,originalHeight:e.originalHeight,originalWidth:e.originalWidth,paragraphRef:E},u.createElement("div",{className:x((function(e){return{marginLeft:"auto",marginRight:"auto",maxWidth:"OUTSET_CENTER"===r&&q&&q<e.maxWidths.outset?"".concat(e.maxWidths.outset,"px"):"".concat(q,"px")}}))},u.createElement(ie.G,l()({},H,{height:H.height||e.originalHeight||void 0,width:H.width||e.originalWidth||void 0}))))}else P=w&&"INSET_CENTER"!==r?u.createElement(ce.X1,{isLinked:!!i.href,width:H.width,height:H.height,originalHeight:e.originalHeight,originalWidth:e.originalWidth,paragraphRef:E},u.createElement(ie.G,l()({},H,{height:e.originalHeight||H.height,width:e.originalWidth||H.width}))):u.createElement(le.x,{display:"flex",justifyContent:"center",alignItems:"flex-start",sm:{display:"block"}},u.createElement(ce.X1,{isLinked:!!i.href,width:H.width,height:H.height,originalHeight:e.originalHeight,originalWidth:e.originalWidth,paragraphRef:E},u.createElement(ie.G,l()({},H,{width:void 0,maxWidth:"100%",strategy:J._S.Proxy}))));i.href&&(P=u.createElement("a",{href:i.href},P))}var B="SHORTFORM_CARD"===d?[]:[void 0===n?(0,D.qB)(h):(0,D.qB)(n)];if(B.push({clear:"both"}),a)B.push((function(e){return o()({},W.lg(e),{paddingLeft:"0px",paddingRight:"0px"})}));else if(("OUTSET_ROW"===r||"OUTSET_ROW_CONTINUE"===r)&&w&&b&&p){var A=w/b,j=X()(A/p*100,2);B.push({width:"".concat(j,"%"),marginRight:"10px",paddingTop:"5px",paddingBottom:"5px",":last-of-type":{marginRight:0}})}else"OUTSET_CENTER"===r?B.push({paddingBottom:"5px",paddingTop:"5px"}):"OUTSET_LEFT"===r&&R?B.push({marginLeft:"auto",marginRight:"auto"}):"OUTSET_LEFT"!==r||R?"INSET_LEFT"===r?B.push({float:"left",width:"50%",paddingBottom:"10px",paddingRight:"30px",marginBottom:"16px"}):"FULL_WIDTH"===r?B.push({width:"100%"}):"INSET_CENTER"===r&&B.push({marginLeft:"auto",marginRight:"auto"}):B.push((function(e){var t;return t={background:e.backgroundColor,borderWidth:e.borderWidthThick+"px",borderStyle:e.borderStyle,borderColor:e.backgroundColor,float:"left",marginLeft:"-150px",marginRight:"30px",width:"75%",padding:"0",paddingBottom:"10px"},o()(t,W.lg(e),{float:"none",marginLeft:"0",marginRight:"0",width:"100%"}),o()(t,"marginBottom","16px"),t}));return u.createElement(L,{className:"".concat(x(B)," paragraph-image"),figCaption:N,figureRef:E},P)}),[JSON.stringify(i),JSON.stringify(s)])},de=u.memo(se),pe=r(64718),he=r(78882),ge=r(75845),fe=r(83263),me=function(){var e=(0,C.I)(),t=(0,fe.Q)(ge.j$),r="sm"===t||"xs"===t,a=ge.Yj[t],n=ge.sI[t];return u.createElement("div",{className:e((0,ge.F5)(r,t))},u.createElement(le.x,{padding:"24px"},u.createElement(le.x,{display:"flex",alignItems:"center"},u.createElement(le.x,{height:"20px",width:"20px",borderRadius:"50%",backgroundColor:"BASE_NORMAL"}),u.createElement(le.x,{padding:"0 8px",flexShrink:"0"},u.createElement(le.x,{height:"4px",width:"50px",backgroundColor:"BASE_NORMAL"}))),u.createElement(le.x,{marginTop:r?"16px":"24px",marginBottom:r?"16px":"24px",height:r?"20px":"48px"},u.createElement(le.x,{height:"20px",width:"120px",backgroundColor:"BASE_NORMAL"})),u.createElement(le.x,{display:"flex",alignItems:"center"},u.createElement(le.x,{flexShrink:"0"},u.createElement(le.x,{height:"40px",width:"100px",borderRadius:"20px",backgroundColor:"BASE_NORMAL"})))),u.createElement(fe.f,{coverHeight:a,coverWidth:n,catalogItems:[],isEmbeded:!0,breakpoints:ge.j$}))},xe=function(e){var t=e.catalog;return e.loading?u.createElement(me,null):t?u.createElement(ge.Xv,{catalog:t}):null},Ee=r(27323),ve=r(52069),be=r(90586),we=r(87691),Se=function(e){return{boxShadow:"inset 0 0 0 1px ".concat(e.baseColor.border.lighter)}},ye=function(e){var t=e.paragraph,r=e.processedStructuredMarkup,a=t.mixtapeMetadata;if(!a||!a.href)return null;var n=a.href,i=r.title,o=r.description,c=r.domain;return u.createElement(Ee.P,{href:n||"",disableSourceParam:!0,target:"_blank"},u.createElement(le.x,{display:"flex",flexShrink:"0",padding:"0px"},u.createElement(le.x,{padding:"16px 20px",flexShrink:"1",flexGrow:"1",display:"flex",justifyContent:"center",flexDirection:"column",sm:{padding:"10px 12px 10px"}},u.createElement(ve.Dx,{scale:"XS",clamp:2},i),o&&u.createElement(le.x,{marginTop:"8px"},u.createElement(be.QE,{scale:"S",clamp:2},o)),c&&u.createElement(le.x,{marginTop:"12px"},u.createElement(we.F,{scale:"S",clamp:2},c))),a&&a.thumbnailImageId&&u.createElement(le.x,{width:"160px"},u.createElement(ee,{boxShadowRules:Se,miroId:a.thumbnailImageId,width:160,height:167,strategy:J._S.Resample,focusPercent:[50,50],imgHeight:167,imgWidth:160}))))},Te=function(e){return{boxShadow:"inset 0 0 0 1px ".concat(e.baseColor.border.lighter)}},Re=function(e){var t,r,a,n,i,o=e.paragraph,c=e.spaceTop,l=e.structuredMarkup,s=(0,C.I)(),d=!(null===(t=o.mixtapeMetadata)||void 0===t||null===(r=t.mediaResource)||void 0===r||!r.mediumCatalog),p=(0,pe.a)(he.d,{variables:{catalogId:null===(a=o.mixtapeMetadata)||void 0===a||null===(n=a.mediaResource)||void 0===n||null===(i=n.mediumCatalog)||void 0===i?void 0:i.id},skip:!d}),h=p.loading,g=p.data,f=p.error,m=o.mixtapeMetadata,x=o.type;if(!m||!m.href||!x)return null;var E,v=l||function(e){var t=e.text,r=e.markups;if(!t)return null;var a=r.find((function(e){return"STRONG"===e.type}));if(!a)return null;var n=r.find((function(e){return"EM"===e.type})),i=a.end,o=n?n.end:a.end;return{title:t.slice(a.start,i).trim(),description:n?t.slice(n.start,n.end).trim():null,domain:t.slice(o).trim()||null}}(o),b=[(0,D.qB)(c)],w=!!f||g&&"Catalog"!==g.catalogById.__typename;if(d&&!w)E=u.createElement(xe,{catalog:null==g?void 0:g.catalogById,loading:h});else{if(!v)return null;b.push(Te),E=u.createElement(ye,{paragraph:o,processedStructuredMarkup:v})}return u.createElement("div",{className:s(b)},E)},ke=r(37269),Oe=r(32342),Ie=r(39202);var Ce=function(e){x()(n,e);var t,r,a=(t=n,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=w()(t);if(r){var n=w()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return v()(this,e)});function n(){return h()(this,n),a.apply(this,arguments)}return f()(n,[{key:"render",value:function(){var e,t=this.props,r=t.highlights,a=t.inserts,n=t.marginTopOverride,i=t.paragraph,o=t.paragraphStyle,c=t.privateNotes,l=t.richTextStyle,d=t.sequenceAspectRatio,p=t.spaceTop,h=t.loading;switch(o){case Oe.qq.IMG:e=u.createElement(s.u6.Consumer,null,(function(e){var t=e.updateWatchedBounds;return u.createElement(de,{highlights:r,marginTopOverride:n,paragraph:i,paragraphStyle:o,privateNotes:c,richTextStyle:l,sequenceAspectRatio:d,spaceTop:p,updateWatchedBounds:t,loading:h})}));break;case Oe.qq.P:case Oe.qq.BQ:case Oe.qq.PQ:case Oe.qq.H1:case Oe.qq.H2:case Oe.qq.H3:case Oe.qq.H4:case Oe.qq.ULI:case Oe.qq.OLI:case Oe.qq.PRE:case Oe.qq.Kicker:case Oe.qq.Subtitle:case Oe.qq.Title:e=u.createElement(ke.Do,{highlights:r,marginTopOverride:n,paragraph:i,paragraphStyle:o,privateNotes:c,richTextStyle:l,spaceTop:p});break;case Oe.qq.IFRAME:e=u.createElement(s.u6.Consumer,null,(function(e){var t=e.updateWatchedBounds;return u.createElement(U,{paragraph:i,paragraphStyle:o,richTextStyle:l,spaceTop:p,updateWatchedBounds:t})}));break;case Oe.qq.MIXTAPE_EMBED:e=u.createElement(Re,{paragraph:i,spaceTop:p});break;case Oe.qq.COVER_TITLE:case Oe.qq.SECTION_CAPTION:case Oe.qq.HR:e=null;break;default:(0,Ie.v)(o),e=null}return a&&a.length?u.createElement(u.Fragment,null,a.map((function(e){return"before"===e.order&&e.component})),e,a.map((function(e){return"after"===e.order&&e.component}))):e}}]),n}(u.Component),We=r(14804),_e=r(21638);function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Le=function(e){var t=e.styleGroup,r=e.postBodyInserts,a=e.richTextStyle,n=e.loading,i=(0,C.I)(),c=Ae(t),p=t.paragraphViewModels.map((function(e){var c=e.paragraph.name,d=r&&r[c],p=u.createElement(Ce,l()({key:e.paragraph.name,inserts:d,loading:n},e));return"Title"===e.paragraphStyle||"Subtitle"===e.paragraphStyle?u.createElement(s.TA,{name:"title",type:"byline",offset:{left:-600},key:"".concat(e.paragraph.name,"-wb"),className:"SHORTFORM_CARD"===a?i((function(e){return o()({zIndex:2,position:"absolute",bottom:"".concat(t.paragraphViewModels[0].marginBottomOverride||0,"px"),margin:"48px 40px"},W.md(e),{margin:"32px 24px"})})):""},p):p}));return c?u.createElement(d.M.Consumer,null,(function(e){return u.createElement(c,{className:i([Be({paragraphStyle:t.paragraphStyle,topSpacing:t.topSpacing,paragraphLayout:t.paragraphLayout,richTextStyle:t.paragraphViewModels[0].richTextStyle,isEmbedded:e,paragraph:t.paragraphViewModels[0].paragraph})])},p)})):u.createElement(u.Fragment,null,p)},Ne=u.memo(Le),He=function(e){var t=[];return e.forEach((function(e){var r=e.paragraphStyle,a=e.paragraph.layout,n=t[t.length-1];n&&qe(n,e)?n.paragraphViewModels.push(e):t.push({paragraphStyle:r,paragraphLayout:a,topSpacing:e.sequenceSpaceTop||0,paragraphViewModels:[e]})})),t},qe=function(e,t){if(e.paragraphStyle!==t.paragraphStyle)return!1;if("PRE"===e.paragraphStyle){var r,a=!(null===(r=e.paragraphViewModels[0].paragraph)||void 0===r||!r.codeBlockMetadata);return!t.paragraph.codeBlockMetadata&&!a}var n=t.paragraph.layout;return"OUTSET_ROW"===e.paragraphLayout?"OUTSET_ROW_CONTINUE"===n:e.paragraphLayout===n},Be=function(e){var t=e.paragraphStyle,r=e.topSpacing,a=e.paragraphLayout,i=e.richTextStyle,o=e.isEmbedded,c=e.paragraph;return function(e){var l={};switch(r&&(l.marginTop=(0,Q.mu)((function(e){var t=n()(e,1)[0];return"".concat(t,"px")}),r)),t){case"BQ":var u=e.baseColor.border.darker||"";return Me(Me({},l),{},{boxShadow:"inset ".concat(3,"px 0 0 0 ").concat(u),paddingLeft:"".concat(23,"px"),marginLeft:(0,Oe.jH)(i)?"0px":"-20px"});case"PRE":var s=null==c?void 0:c.codeBlockMetadata,d=Me(Me({},l),{},{overflowX:"auto",fontFamily:_e.zf}),p={padding:"32px",borderRadius:"4px",border:"".concat(e.borderWidth,"px solid ").concat(We.V8),background:We.kh,color:We.kk},h={padding:"20px",borderRadius:0,border:"none",background:e.baseColor.background.normal,color:e.baseColor.text.normal};return Me(Me({},d),s?p:h);case"PQ":return Me(Me({},l),{},{paddingLeft:"SERIES"===i?"0px":"30px"});case"ULI":if(o)return ke.Pq}switch(a){case"OUTSET_ROW":return Me(Me({},l),{},{display:"flex",flexDirection:"row"})}return l}},Ae=function(e){var t=e.paragraphStyle,r=e.paragraphLayout;switch(t){case"OLI":return"ol";case"ULI":return"ul";case"BQ":case"PQ":return"blockquote";case"PRE":return"pre"}switch(r){case"OUTSET_ROW":return"div"}return null}},60748:(e,t,r)=>{"use strict";function a(e){e&&e.iframe&&e.height&&e.iframe.getAttribute&&"number"==typeof e.height&&o({context:"iframe.resize",height:e.height,src:e.iframe.getAttribute("src")||""})}function n(e){if(e.data&&"string"==typeof e.data){var t;try{t=JSON.parse(e.data)}catch(e){return}o(t,e.source)}}r.d(t,{x:()=>c});var i=[];function o(e,t){i.forEach((function(r){return r(e,t)}))}function c(e){return window._resizeIframe||(window._resizeIframe=a,window.addEventListener("message",n)),i.push(e),{destructor:function(){0===(i=i.filter((function(t){return e!==t}))).length&&"undefined"!=typeof window&&(window._resizeIframe=null,window.removeEventListener("message",n))}}}},12643:(e,t,r)=>{"use strict";r.d(t,{G:()=>i});var a=r(67294),n=r(77355),i=a.forwardRef((function(e,t){var r=e.height,i=void 0===r?1:r,o=e.width,c=void 0===o?1:o,l=e.backgroundColor,u=void 0===l?"BASE_NORMAL":l,s=e.children,d=(c=c||1)/(i=i||1);return a.createElement(n.x,{position:"relative",margin:"auto",backgroundColor:u,ref:t,overflow:"hidden"},a.createElement(n.x,{paddingBottom:"".concat(100/d,"%"),height:"0"},s))}))},54188:(e,t,r)=>{"use strict";r.d(t,{G:()=>m});var a=r(319),n=r.n(a),i=r(59713),o=r.n(i),c=r(63038),l=r.n(c),u=r(67294),s=r(94124),d=r(30555),p=r(46696),h=r(12532);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){var t=e.alt,r=e.rules,a=e.miroId,i=e.width,o=e.maxWidth,c=e.expectedWidth,g=e.height,m=e.strategy,x=e.freezeGifs,E=e.focusPercentX,v=e.focusPercentY,b=e.loading,w=e.webp,S=void 0!==w&&w,y=(0,d.BO)(),T=(0,u.useState)(!1),R=l()(T,2),k=R[0],O=R[1],I=S&&!k,C={miroId:a,width:i,height:g,strategy:m,freezeGifs:x,focusPercentX:E,focusPercentY:v},W=(0,p.W6)(C),_=c===h.Hj||y?"100vw":"".concat(c,"px"),P=(0,u.useMemo)((function(){var e=[320,360,375,393,414,550];c&&e.push(c),y&&e.push(h.Hj);var t=e.map((function(e){var t=2*e,r=(0,p.W6)(f(f({},C),{},{width:t,ignorePixelRatio:!0,useMiroV2:!k}));return"".concat(r," ").concat(t,"w")})),r=e.map((function(e){var t=2*e,r=(0,p.W6)(f(f({},C),{},{ignorePixelRatio:!0,width:t,webp:I,useMiroV2:!k}));return"".concat(r," ").concat(t,"w")})),a=n()(t).join(", "),i=n()(r).join(", ");return{sizes:"(min-resolution: 4dppx) and (max-width: ".concat(h.aM,"px) 50vw,\n                   (-webkit-min-device-pixel-ratio: 4) and (max-width: ").concat(h.aM,"px) 50vw, \n                   (min-resolution: 3dppx) and (max-width: ").concat(h.aM,"px) 67vw,\n                   (-webkit-min-device-pixel-ratio: 3) and (max-width: ").concat(h.aM,"px) 65vw, \n                   (min-resolution: 2.5dppx) and (max-width: ").concat(h.aM,"px) 80vw,\n                   (-webkit-min-device-pixel-ratio: 2.5) and (max-width: ").concat(h.aM,"px) 80vw,\n                   (min-resolution: 2dppx) and (max-width: ").concat(h.aM,"px) 100vw,\n                   (-webkit-min-device-pixel-ratio: 2) and (max-width: ").concat(h.aM,"px) 100vw,\n                   ").concat(_).replace(/\s+/g," "),srcSet:a,transcodedSrcSet:i}}),[y,c,h.aM,C,2]),M=P.sizes,L=P.srcSet,N=P.transcodedSrcSet,H=[],q={};return o&&(q.maxWidth=o,H=H.concat([q])),r&&(H=H.concat(r).concat((function(e){return{backgroundColor:e.backgroundColor}}))),u.createElement("picture",null,I&&u.createElement("source",{srcSet:N,sizes:M,type:"image/webp"}),u.createElement("source",{"data-testid":"og",srcSet:L,sizes:M}),u.createElement(s.E,{imgRef:function(e){return function(t){t&&!t.src&&(t.src=e)}}(W),alt:t,rules:H,width:c,height:g,loading:b,handleError:function(){return O(!0)}}))}},30555:(e,t,r)=>{"use strict";r.d(t,{BO:()=>x,X1:()=>E});var a=r(63038),n=r.n(a),i=r(59713),o=r.n(i),c=r(67294),l=r(91583),u=r(18627),s=r(14646),d=r(34135),p=r(37734),h=r(77241),g=r(21021),f=function(e,t,r,a,n,i,c){var l;if(!(n&&c&&i&&e))return{};var u=Math.min(Math.min(t,a||1/0)/c,Math.min(e,r||1/0)/i),s=c*u,d=i*u,g=(e-d)/2,f=((t-s)/2-(n.left+(c-s)/2))/u,m=(g-(n.top+(i-d)/2))/u;return l={},o()(l,(0,p.nk)("no-preference"),{transition:"transform 300ms cubic-bezier(0.2, 0, 0.2, 1)"}),o()(l,"zIndex",h.ZP.floating),o()(l,"transform","scale(".concat(u,") translate(").concat(f,"px, ").concat(m,"px)")),o()(l,"position","absolute"),o()(l,"height","".concat(i,"px")),o()(l,"width","".concat(c,"px")),o()(l,"cursor","zoom-out"),l},m=c.createContext(!1),x=function(){return c.useContext(m)},E=function(e){var t=e.children,r=e.height,a=e.width,n=e.originalHeight,i=e.originalWidth,o=e.paragraphRef;return e.isLinked||!n||!i||!r||r===n&&a===i?t:c.createElement(v,{originalHeight:n,originalWidth:i,height:r,width:a,paragraphRef:o},t)},v=function(e){var t=e.children,r=e.originalHeight,a=e.originalWidth,i=e.height,x=e.width,E=e.paragraphRef,v=c.useState(null),b=n()(v,2),w=b[0],S=b[1],y=c.useState(0),T=n()(y,2),R=T[0],k=T[1],O=c.useState(0),I=n()(O,2),C=I[0],W=I[1],_=c.useState(0),P=n()(_,2),M=P[0],L=P[1],N=(0,s.I)(),H=(0,u.Av)(),q=E&&E.current&&E.current.getBoundingClientRect(),B=c.useRef(null),A=c.useCallback((function(){H.event("client.action",{action:"zoom",eventType:"click"})}),[]),j=c.useCallback((function(){B.current&&B.current.focus(),S(!1)}),[null==B?void 0:B.current,S]),F=c.useCallback((function(){w&&Math.abs(M-window.scrollY)>40&&j()}),[w,M,j]),D=c.useCallback((function(){k(window.innerHeight),W(window.innerWidth)}),[k,W]);c.useEffect((function(){return k(window.innerHeight),W(window.innerWidth),L(window.scrollY),d.V6.on("scroll",F),d.V6.on("resize",D),function(){d.V6.off("scroll",F),d.V6.off("resize",D)}}),[k,W,L,F,D]);var z,U,G=(0,g.r)((function(){w?j():(A(),S(!0))}),[A,S,w,j]);return c.createElement(c.Fragment,null,c.createElement(m.Provider,{value:w},c.createElement("div",{onClick:G,onKeyDown:G,role:"button",tabIndex:0,ref:B,className:N(w?f(R,C,r,a,q,i,x):(z=w,U={},o()(U,(0,p.nk)("no-preference"),{transition:"transform 300ms cubic-bezier(0.2, 0, 0.2, 1)"}),o()(U,"cursor","zoom-in"),o()(U,"position","relative"),o()(U,"zIndex",null===z?"auto":h.ZP.floating),o()(U,"width","100%"),o()(U,":focus",{transform:"scale(1.01)"}),U)),onTransitionEnd:function(){w||S(null)}},t),c.createElement(l.V,{shouldTrapFocus:!1,padding:0,withPageScroll:!0,isVisible:!!w,hide:j,withCloseButton:!1},c.createElement(c.Fragment,null))))}},12532:(e,t,r)=>{"use strict";r.d(t,{Hj:()=>n,aM:()=>o,jg:()=>c});var a=r(46696),n=2400,i=1e3,o=700,c=function(e){var t=e.layout,r=e.originalWidth,c=e.originalHeight,l=e.sequenceAspectRatio,u=e.richTextStyle,s=a._S.Resample,d=c&&r?c/r:null,p=r;switch(t){case"CROPPED_HEIGHT_PREVIEW":p=o,d=.3,s=a._S.Crop;break;case"CONSTRAINED_HEIGHT_PREVIEW":p=o,d&&240/d<p&&(p=240/d);break;case"INSET_LEFT":case"INSET_CENTER_SMALL":case"INSET_RIGHT":p=350;break;case"OUTSET_LEFT":p="CARD"===u||"SHORTFORM_CARD"===u?i:500;break;case"OUTSET_ROW":case"OUTSET_ROW_CONTINUE":p=i,l&&d&&(p*=1/d/l);break;case"OUTSET_CENTER":p=i;break;case"FULL_WIDTH":case"FULL_WIDTH_CROPPED_COVER":p=n;break;default:p=o}return r&&(p=Math.min(p,r)),{width:p=Math.ceil(p),height:d?Math.ceil(d*p):void 0,strategy:s}}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/3115.fa0a6ab2.chunk.js.map
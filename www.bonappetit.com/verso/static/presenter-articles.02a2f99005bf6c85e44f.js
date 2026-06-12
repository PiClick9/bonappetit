/*! For license information please see presenter-articles.02a2f99005bf6c85e44f.js.LICENSE.txt */
(()=>{var e,t,i,n,r,o={22761(e,t,i){"use strict";i.d(t,{HL:()=>y,Jq:()=>u,L4:()=>p,M1:()=>s,N:()=>h,OS:()=>b,VV:()=>g,WN:()=>m,XC:()=>f,cn:()=>A,ey:()=>l,ve:()=>v,vw:()=>d,yt:()=>c});var n=i(38267),r=i(26865),o=i(18608),a=i(96472);const l=n.Ay.div.withConfig({displayName:"ReviewListLoaderWrapper"})`
  display: flex;
  justify-content: center;
`,s=n.Ay.div.withConfig({displayName:"CommentMessageWrapper"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${(0,r.Kq)(3)};
  border: 1px solid;
  ${({hideDivider:e})=>e&&n.AH`
      border: none;
    `}
  ${({hasSideBorder:e})=>!e&&n.AH`
      border-right: none;
      border-left: none;
    `}
  ${(0,r._o)("border-color","colors.consumption.body.standard.divider")};
  padding: ${(0,r.Kq)(3)} ${(0,r.Kq)(2)};
  text-align: center;
`,d=(0,n.Ay)(o.vm).withConfig({displayName:"CommentInfoHed"})`
  ${(0,r._o)("color","colors.consumption.lead.standard.heading")};
  ${(0,r.Gg)("typography.definitions.consumptionEditorial.description-feature")}

  &:not(:last-child) {
    padding-bottom: ${(0,r.Kq)(2)};
  }
`,c=(0,n.Ay)(o.vm).withConfig({displayName:"CommentInfoDek"})`
  ${(0,r._o)("color","colors.consumption.lead.standard.context-tertiary")};
  ${(0,r.Gg)("typography.definitions.utility.assistive-text")}

  &:not(:last-child) {
    padding-bottom: ${(0,r.Kq)(2)};
  }
`,u=n.Ay.div.withConfig({displayName:"CommentMessageBannerIconWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(0,r.Kq)(2)};

  svg {
    width: 64px;
    height: 64px;
  }
`,h=(0,n.Ay)("div").withConfig({displayName:"MessageBannerBookmarkWrapper"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  button {
    margin-top: 0;
    margin-bottom: 0;
    ${(0,r.L7)(a.LO.md)} {
      margin-right: 16px;
      margin-left: 16px;
    }
    ${(0,r._o)("background","colors.interactive.base.brand-primary")};

    &:hover,
    &:focus,
    &:active {
      ${(0,r._o)("background-color","colors.interactive.base.brand-primary")};
    }
  }

  span {
    ${(0,r._o)("color","colors.interactive.base.white")};
  }

  svg {
    width: 24px;
    height: 24px;

    path {
      ${(0,r._o)("fill","colors.interactive.base.white")};
    }
  }
`,m=n.Ay.div.withConfig({displayName:"DualCTAContainer"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,p=(0,n.Ay)(o.vm).withConfig({displayName:"SecondarySignInLabel"})`
  margin-top: ${(0,r.Kq)(3)};
  text-align: center;
  ${(0,r.Gg)("typography.definitions.utility.button-core")};
  ${(0,r._o)("color","colors.interactive.base.brand-secondary")};
`,g=(0,n.Ay)(o.sH).withConfig({displayName:"SecondarySignInLink"}).attrs({colorToken:"colors.interactive.base.brand-secondary",typeToken:"typography.definitions.utility.button-core",hasUnderline:!0})`
  margin-left: ${(0,r.Kq)(.5)};
`,b=n.Ay.div.withConfig({displayName:"QaPromptContainer"})`
  display: flex;
  align-items: center;
  gap: ${(0,r.Kq)(2)};
  padding: ${(0,r.Kq)(3)} ${(0,r.Kq)(2)};
`,y=n.Ay.div.withConfig({displayName:"QaTextContent"})`
  flex: 1;
`,f=n.Ay.div.withConfig({displayName:"QaQuestion"})`
  ${(0,r.Gg)("typography.definitions.globalEditorial.accreditation-core")};
  ${({theme:e})=>(0,r._o)(e,"color","colors.consumption.lead.standard.accreditation")};
  margin: 0 0 ${(0,r.Kq)(1)} 0;
`,A=(0,n.Ay)(o.sH).withConfig({displayName:"QaCallToAction"}).attrs(e=>({typeToken:"typography.definitions.utility.button-utility",colorToken:"colors.consumption.lead.standard.accreditation",as:"div",...e}))`
  text-decoration: underline;
`,v=n.Ay.div.withConfig({displayName:"QaBannerIconWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 64px;
    height: 64px;
  }
`},12501(e,t,i){"use strict";i.d(t,{Ay:()=>k.A,F6:()=>C.A,GO:()=>A.A,IJ:()=>h.A,LF:()=>a.A,LQ:()=>m.A,Pc:()=>u.A,Pe:()=>f.A,RJ:()=>$.A,Rv:()=>R.A,UT:()=>B.A,Vx:()=>v.A,W3:()=>S.A,YC:()=>y.A,ZJ:()=>g.A,dd:()=>p.A,h1:()=>c.A,lB:()=>d.A,lw:()=>b.A,v0:()=>l.A,vE:()=>w.A,wi:()=>o.A});var n=i(85152),r=i(86936),o=i(73521),a=i(68594),l=i(77455),s=i(80163),d=i(87958),c=i(78298),u=i(23485),h=i(33808),m=i(54051),p=i(45642),g=i(70185),b=i(77468),y=i(27215),f=i(95846),A=i(15143),v=i(21438),C=i(27859),w=i(50978),k=i(15883),E=i(46511),x=i(76081),$=i(73656),R=i(22297),S=i(92486),T=i(54551),B=i(70574);n.A,r.A,o.A,a.A,l.A,s.A,d.A,S.A,c.A,u.A,h.A,m.A,p.A,g.A,b.A,y.A,f.A,A.A,v.A,C.A,w.A,k.A,E.A,x.A,$.A,R.A,T.A,B.A},76960(e,t,i){"use strict";i.d(t,{I:()=>n});const n={primary:{normal:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-primary",border:"colors.interactive.base.brand-primary"},hover:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-secondary",border:"colors.interactive.base.brand-secondary"},focus:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-primary",border:"colors.interactive.base.brand-primary"},active:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-secondary",border:"colors.interactive.base.brand-secondary"},disabled:{text:"colors.interactive.base.white",background:"colors.interactive.base.light",border:"colors.interactive.base.light"}},"primary-pair":{normal:{text:"colors.interactive.base.brand-primary",background:"colors.interactive.base.white",border:"colors.interactive.base.brand-primary"},hover:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-primary",border:"colors.interactive.base.brand-primary"},focus:{text:"colors.interactive.base.brand-primary",background:"colors.interactive.base.white",border:"colors.interactive.base.brand-primary"},active:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-primary",border:"colors.interactive.base.brand-primary"},disabled:{text:"colors.interactive.base.light",background:"colors.interactive.base.white",border:"colors.interactive.base.light"}},secondary:{normal:{text:"colors.interactive.base.black"},hover:{text:"colors.interactive.base.brand-primary"},focus:{text:"colors.interactive.base.black"},active:{text:"colors.interactive.base.brand-primary"},disabled:{text:"colors.interactive.base.light"}},utility:{normal:{text:"colors.interactive.base.white",background:"colors.interactive.base.black",border:"colors.interactive.base.black"},hover:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-primary",border:"colors.interactive.base.brand-primary"},focus:{text:"colors.interactive.base.white",background:"colors.interactive.base.black",border:"colors.interactive.base.black"},active:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-primary",border:"colors.interactive.base.brand-primary"},disabled:{text:"colors.interactive.base.white",background:"colors.interactive.base.light",border:"colors.interactive.base.light"}},"utility-inverted":{normal:{text:"colors.interactive.base.black",background:"colors.interactive.base.white",border:"colors.interactive.base.white"},hover:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-primary",border:"colors.interactive.base.brand-primary"},focus:{text:"colors.interactive.base.black",background:"colors.interactive.base.white",border:"colors.interactive.base.white"},active:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-primary",border:"colors.interactive.base.brand-primary"},disabled:{text:"colors.interactive.base.light",background:"colors.interactive.base.dark",border:"colors.interactive.base.dark"}},"utility-pair":{normal:{text:"colors.interactive.base.black",background:"colors.interactive.base.white",border:"colors.interactive.base.black"},hover:{text:"colors.interactive.base.white",background:"colors.interactive.base.black",border:"colors.interactive.base.black"},focus:{text:"colors.interactive.base.black",background:"colors.interactive.base.white",border:"colors.interactive.base.black"},active:{text:"colors.interactive.base.white",background:"colors.interactive.base.black",border:"colors.interactive.base.black"},disabled:{text:"colors.interactive.base.light",background:"colors.interactive.base.white",border:"colors.interactive.base.light"}},"utility-pair-inverted":{normal:{text:"colors.interactive.base.white",background:null,border:"colors.interactive.base.white"},hover:{text:"colors.interactive.base.black",background:"colors.interactive.base.white",border:"colors.interactive.base.white"},focus:{text:"colors.interactive.base.white",background:"colors.interactive.base.black",border:"colors.interactive.base.white"},active:{text:"colors.interactive.base.black",background:"colors.interactive.base.white",border:"colors.interactive.base.white"},disabled:{text:"colors.interactive.base.dark",background:null,border:"colors.interactive.base.dark"}},"inverted-text":{normal:{text:"colors.interactive.base.white"},hover:{text:"colors.interactive.base.brand-primary"},focus:{text:"colors.interactive.base.white"},active:{text:"colors.interactive.base.brand-primary"},disabled:{text:"colors.interactive.base.dark"}},"utility-pair-secondary":{normal:{text:"colors.interactive.base.brand-primary",background:"colors.interactive.base.white",border:"colors.interactive.base.white"},hover:{text:"colors.interactive.base.brand-secondary",background:"colors.interactive.base.white",border:"colors.interactive.base.white"},focus:{text:"colors.interactive.base.brand-primary",background:"colors.interactive.base.white",border:"colors.interactive.base.white"},active:{text:"colors.interactive.base.brand-secondary",background:"colors.interactive.base.white",border:"colors.interactive.base.white"},disabled:{text:"colors.interactive.base.light",background:"colors.interactive.base.white",border:"colors.interactive.base.white"}}}},91470(e,t,i){"use strict";i.r(t),i.d(t,{Account:()=>n.A,AgeGate:()=>r.A,Arrow:()=>o.A,ArrowOut:()=>a.A,Article:()=>l.A,BadgeArtist:()=>s.A,BadgeDayOne:()=>d.A,BadgeStaff:()=>c.A,BlueSky:()=>p.A,Bookmark:()=>u.A,BookmarkActivated:()=>h.A,BookmarkNew:()=>m.A,CartFilled:()=>g.A,CartOutlined:()=>b.A,Check:()=>y.A,ChevronDown:()=>w.A,ChevronFill:()=>A.A,ChevronLeft:()=>v.A,ChevronRight:()=>f.A,ChevronUp:()=>C.A,Close:()=>k.A,Collapse:()=>E.A,Comment:()=>x.A,Copy:()=>$.A,CopyLink:()=>R.A,Dot:()=>S.A,DownloadCloud:()=>T.A,DownloadWeb:()=>B.A,Email:()=>O.A,EmailFilled:()=>N.A,Enlarge:()=>L.A,Expand:()=>P.A,Facebook:()=>I.A,Filmstrip:()=>M.A,Flipboard:()=>D.A,Gallery:()=>_.A,GoogleNews:()=>H.A,Grid:()=>q.A,Headphone:()=>F.A,Instagram:()=>W.A,LargeChevron:()=>K.A,LeftChevron:()=>j.A,Like:()=>V.A,LikeFilled:()=>G.A,Line:()=>U.A,LinkedIn:()=>z.A,List:()=>Z.A,LocationPin:()=>Q.A,Maximize:()=>ee.A,Menu:()=>te.A,NativeShare:()=>ie.A,Newsletter:()=>ne.A,NewsletterArrow:()=>re.A,OK:()=>Y.A,Paperclip:()=>J.A,Passkey:()=>ce.A,Pause:()=>oe.A,PhotoStack:()=>he.A,Pinterest:()=>ae.A,PitchforkUpvote:()=>le.A,PitchforkUpvoteFilled:()=>se.A,Play:()=>de.A,PlayOutlined:()=>me.A,Playlist:()=>ue.A,Print:()=>pe.A,RatingFilled:()=>ge.A,RatingHalf:()=>be.A,RatingOutlined:()=>ye.A,Replay:()=>fe.A,Rss:()=>Ae.A,Search:()=>ve.A,Share:()=>we.A,Shopping:()=>ke.A,SlimHeadphone:()=>Ce.A,Snapchat:()=>Ee.A,SocialHandle:()=>xe.A,SplitView:()=>$e.A,Spotify:()=>Re.A,Subscribe:()=>Se.A,Telegram:()=>Te.A,Threads:()=>De.A,Tiktok:()=>Oe.A,Timestamp:()=>Be.A,Triangle:()=>Ne.A,TriangleDown:()=>Le.A,TriangleUp:()=>Pe.A,Tumblr:()=>Ie.A,Twitter:()=>Me.A,VK:()=>je.A,VerificationBadge:()=>He.A,Vero:()=>_e.A,Viber:()=>qe.A,Video:()=>Fe.A,VolumeHigh:()=>We.A,VolumeMute:()=>Ke.A,WeChat:()=>Ve.A,Weibo:()=>Ge.A,Whatsapp:()=>Ue.A,Xing:()=>ze.A,YandexZen:()=>Qe.A,YouTube:()=>Xe.A,default:()=>Ye});var n=i(92237),r=i(86138),o=i(69571),a=i(64607),l=i(90628),s=i(53090),d=i(74695),c=i(93107),u=i(315),h=i(52585),m=i(44584),p=i(81463),g=i(58366),b=i(72172),y=i(9218),f=i(25751),A=i(58180),v=i(18972),C=i(68804),w=i(40589),k=i(80046),E=i(56099),x=i(56807),$=i(4585),R=i(25601),S=i(60261),T=i(66087),B=i(39392),O=i(57942),N=i(62410),P=i(58332),L=i(83476),I=i(69192),M=i(50694),D=i(50907),H=i(24596),_=i(39336),q=i(49776),F=i(53636),W=i(7994),K=i(79350),j=i(65234),V=i(35483),G=i(74771),U=i(8990),z=i(25534),Q=i(42132),X=i(3503),Y=i(22650),J=i(13150),Z=i(61852),ee=i(30110),te=i(15447),ie=i(28828),ne=i(60779),re=i(65102),oe=i(13148),ae=i(24888),le=i(60889),se=i(13901),de=i(11118),ce=i(57946),ue=i(85026),he=i(5232),me=i(25856),pe=i(40641),ge=i(35149),be=i(36928),ye=i(85323),fe=i(81055),Ae=i(29454),ve=i(36652),Ce=i(20855),we=i(69657),ke=i(64964),Ee=i(74170),xe=i(89281),$e=i(12583),Re=i(59596),Se=i(86522),Te=i(46119),Be=i(92566),Oe=i(50610),Ne=i(90040),Pe=i(15497),Le=i(82652),Ie=i(32262),Me=i(33189),De=i(29011),He=i(192),_e=i(34214),qe=i(16576),Fe=i(12037),We=i(29186),Ke=i(3711),je=i(52783),Ve=i(85858),Ge=i(93470),Ue=i(90370),ze=i(36216),Qe=i(51716),Xe=i(92459);const Ye={Account:n.A,AgeGate:r.A,Arrow:o.A,ArrowOut:a.A,Article:l.A,BadgeArtist:s.A,BadgeDayOne:d.A,BadgeStaff:c.A,Bookmark:u.A,BookmarkActivated:h.A,BookmarkNew:m.A,BlueSky:p.A,CartFilled:g.A,CartOutlined:b.A,Check:y.A,ChevronRight:f.A,ChevronFill:A.A,ChevronLeft:v.A,ChevronUp:C.A,ChevronDown:w.A,Close:k.A,Collapse:E.A,Comment:x.A,Copy:$.A,CopyLink:R.A,Dot:S.A,DownloadCloud:T.A,DownloadWeb:B.A,Email:O.A,EmailFilled:N.A,Expand:P.A,Enlarge:L.A,Facebook:I.A,Filmstrip:M.A,Flipboard:D.A,GoogleNews:H.A,Gallery:_.A,Grid:q.A,Headphone:F.A,Instagram:W.A,LargeChevron:K.A,LeftChevron:j.A,Like:V.A,LikeFilled:G.A,Line:U.A,LinkedIn:z.A,LocationPin:Q.A,OK:Y.A,List:Z.A,Lock:X.A,Maximize:ee.A,Menu:te.A,NativeShare:ie.A,Newsletter:ne.A,NewsletterArrow:re.A,Paperclip:J.A,Pause:oe.A,Pinterest:ae.A,PitchforkUpvote:le.A,PitchforkUpvoteFilled:se.A,Play:de.A,Passkey:ce.A,Playlist:ue.A,PhotoStack:he.A,PlayOutlined:me.A,Print:pe.A,RatingFilled:ge.A,RatingHalf:be.A,RatingOutlined:ye.A,Replay:fe.A,Rss:Ae.A,Search:ve.A,Share:we.A,Shopping:ke.A,SlimHeadphone:Ce.A,Snapchat:Ee.A,SocialHandle:xe.A,SplitView:$e.A,Spotify:Re.A,Subscribe:Se.A,Telegram:Te.A,Timestamp:Be.A,Tiktok:Oe.A,Threads:De.A,Triangle:Ne.A,TriangleUp:Pe.A,TriangleDown:Le.A,Tumblr:Ie.A,Twitter:Me.A,VerificationBadge:He.A,Vero:_e.A,Viber:qe.A,Video:Fe.A,VolumeHigh:We.A,VolumeMute:Ke.A,VK:je.A,WeChat:Ve.A,Weibo:Ge.A,Whatsapp:Ue.A,Xing:ze.A,YandexZen:Qe.A,YouTube:Xe.A}},15609(e,t,i){"use strict";i.d(t,{A:()=>d});var n=i(5556),r=i.n(n),o=i(96540),a=i(63486),l=i(53499);const s=function({url:e,dangerousDek:t}){return o.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(l.G.RENDER,{name:"InternalLinkEmbed"})},[]),o.createElement(a.M,{href:e,dangerouslySetInnerHTML:{__html:t}})};s.propTypes={dangerousDek:r().string.isRequired,url:r().string.isRequired},s.displayName="InternalLinkEmbed";const d=s},72550(){"use strict"},15316(e,t,i){"use strict";i.d(t,{Kq:()=>l,em:()=>n.A});i(72550),i(85480);var n=i(17130);const r="default",o={index:0},a=()=>{},l=(e,t,i,n)=>{const{strategy:{enabled:l,method:s=r,options:d=(n?{index:n}:o)}={}}=e,c=t[s]||a;return l&&c({length:i,...d})}},17130(e,t,i){"use strict";i.d(t,{A:()=>n});const n={default:({index:e})=>e,disable:()=>null,end:({length:e})=>e-1}},30271(e,t,i){"use strict";i.d(t,{$D:()=>o,I0:()=>l,iA:()=>a,vY:()=>s});var n=i(96472);const r=(e,t)=>Object.keys(e).filter(e=>Object.hasOwnProperty.call(n.Ni,e)).map((i,r)=>{const o=t(i,e[i],r);return`\n      @media (min-width: ${n.Ni[i][0]}) {\n        ${o}\n      }\n     `}),o=({isFirstItem:e,isLastItem:t,itemSpacing:i})=>"string"==typeof i?e?`margin: 0 ${i} 0 0;`:t?`margin: 0 0 0 ${i};`:`margin: 0 ${i};`:r(i,(i,n)=>o({isFirstItem:e,isLastItem:t,itemSpacing:n})).join("\n"),a=({itemWidth:e})=>"string"==typeof e?`width: ${e};`:r(e,(e,t)=>a({itemWidth:t})).join("\n"),l=(e,t)=>!t&&e.scrollLeft<=e.scrollWidth-e.offsetWidth+1&&e.scrollLeft>=e.scrollWidth-e.offsetWidth-1,s=(e,t)=>!t&&0===e.scrollLeft},96461(e,t,i){"use strict";i.d(t,{C:()=>s,c:()=>l});var n=i(5556),r=i.n(n),o=i(96540),a=i(59867);const l=o.createContext(!1),s=({children:e})=>{const[t,i]=(0,o.useState)(!1),n=(0,o.useRef)(null);return(0,o.useEffect)(()=>{{const e=()=>{i(!0),n.current&&n.current.off()};n.current=window.Kendra.WINDOW_EVENT.on(a.m.SCROLL_DEBOUNCE,e)}return()=>{n.current&&n.current.off()}},[]),o.createElement(l.Provider,{value:t},e)};s.propTypes={children:r().node},s.displayName="HasScrolledProvider"},35363(e,t,i){"use strict";i.d(t,{Y:()=>o});var n=i(96540),r=i(96461);const o=()=>(0,n.useContext)(r.c)},45741(e,t,i){"use strict";i.d(t,{AV:()=>c,PA:()=>l,c7:()=>u,h8:()=>s,nK:()=>d});var n=i(38267),r=i(5556),o=i.n(r),a=i(26865);const l=({bottomSpacing:e})=>e&&!isNaN(e)?`margin-bottom: ${(0,a.Kq)(e)};`:"",s=({topSpacing:e})=>e&&!isNaN(e)?`margin-top: ${(0,a.Kq)(e)};`:"",d=["left","center","right"],c={left:"\n  margin-left: 0;\n  margin-right: auto;\n  ",center:"\n  margin-left: auto;\n  margin-right: auto;\n  ",right:"\n  margin-right: 0;\n  margin-left: auto;\n  "},u=n.Ay.div.withConfig({displayName:"BaseWrap-sc"})`
  margin: 0;
  ${l}
  ${s}
  ${({align:e})=>e&&d.includes(e)&&`\n    align-self: ${e};\n    justify-self: ${e};\n    ${c[e]};\n `}
 ${({textAlign:e})=>e&&d.includes(e)&&`text-align: ${e}; `}
`;u.propTypes={align:o().oneOf(d),as:o().string,bottomSpacing:o().number,textAlign:o().oneOf(d),topSpacing:o().number}},1123(e,t,i){"use strict";i.d(t,{Cy:()=>u,Rn:()=>s,VO:()=>a,aU:()=>l,mO:()=>c,mS:()=>d});var n=i(26865),r=i(75163),o=i(96472);const a=()=>`\n  --grid-gap: ${(0,n.Kq)(2)};\n  --grid-margin: ${(0,n.Kq)(3)};\n\n  @media (min-width: ${o.LO.md}) {\n    --grid-gap: ${(0,n.Kq)(3)};\n    --grid-margin: ${(0,n.Kq)(6)};\n  }\n\n  @media (min-width: ${o.LO.lg}) {\n    --grid-gap: ${(0,n.Kq)(4)};\n  }\n\n  @media (min-width: ${o.LO.xl}) {\n    --grid-margin: ${(0,n.Kq)(8)};\n  }\n  `,l=(e,t=!1)=>{const i=t?-1:1;return`\n    ${e}-right: calc(${i} * var(--grid-margin));\n    ${e}-left: calc(${i} * var(--grid-margin));\n  `},s=e=>`\n      ${r.pT.Color.Surface}:  #${e};\n      ${r.pT.Color.SurfaceAd}:  #${e};\n      background-color: #${e};\n    `,d=e=>`\n      border-color: #${e};\n    `,c=e=>`\n      border-top: 1px solid #${e};\n   `,u=()=>`padding-top: ${(0,n.Kq)(7,"px")};`},95669(e,t,i){"use strict";var n=i(96540),r=i(5556),o=i.n(r),a=i(57744),l=i(32485),s=i.n(l),d=i(63560),c=i.n(d),u=i(58156),h=i.n(u),m=i(38798),p=i(72267);const g=(0,p.YK)({truncatedButtonLabel:{id:"ArticlePage.TruncatedButtonLabel",defaultMessage:"Read Full Story",description:"ArticlePage component truncated button label"},backToArticle:{id:"ArticlePage.Back to article",defaultMessage:"Back to article",description:"Gallery slider back button text"},publishedInThe:{id:"ArticlePage.From the issue of",defaultMessage:"From the issue of",description:"Article page date text"},defaultDisclaimer:{id:"ArticlePage.DefaultDisclaimer",defaultMessage:"All products are independently selected by our editors. If you buy something, we may earn an affiliate commission.",description:"Default disclaimer for Article page"}});var b=i(21729),y=i(19582),f=i(47655),A=i(31706),v=i(91513),C=i(53499);class w extends n.PureComponent{componentDidMount(){window.Kendra.TRACK_COMPONENT.broadcast(C.G.RENDER,{name:"ResourceHint"}),this.props&&this.writeResourceHintLink(this.props)}writeResourceHintLink(e){const{as:t,hint:i,href:n}=e,r=document.createElement("link");r.as=t,r.href=n,r.rel=i,document.head.appendChild(r)}render(){return n.createElement(n.Fragment,null)}}const k=w;var E=i(13465),x=i(86659),$=i(38080),R=i(66657),S=i(79784),T=i(69148),B=i(90239),O=i(2404),N=i.n(O),P=i(1165),L=i(59749),I=i(38267),M=i(96472),D=i(26865);const H=(0,I.Ay)("div").withConfig({displayName:"LiveProductDisplayContainer"})`
  margin: ${(0,D.Kq)(3,"px")} 0;
  border: 1px solid
    ${({theme:e})=>(0,D.HK)(e,"colors.discovery.body.brand.accent")};
  padding: ${(0,D.Kq)(3,"px")};

  ${({theme:e})=>(0,D._o)(e,"background-color","colors.background.white")};

  ${(0,D.L7)(M.LO.md)} {
    padding-left: ${(0,D.Kq)(1.5,"px")};
  }
  ${(0,D.Xm)(M.LO.md,M.LO.lg-1)} {
    padding-right: ${(0,D.Kq)(9,"px")};
  }
  ${(0,D.Xm)(M.LO.lg,M.LO.xl-1)} {
    padding-right: ${(0,D.Kq)(6,"px")};
  }
  ${(0,D.H4)(M.LO.xl)} {
    padding-right: ${(0,D.Kq)(9,"px")};
  }
`,_=(0,I.Ay)("div").withConfig({displayName:"LiveProductDisplayTitle"})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${(0,D.Kq)(1.5,"px")};
  ${({theme:e})=>(0,D.Gg)(e,"typography.definitions.consumptionEditorial.subhed-aux-secondary")};
  ${({theme:e})=>(0,D._o)(e,"color","colors.discovery.body.white.heading")};
`,q=(0,I.Ay)("div").withConfig({displayName:"LiveProductDisplayTimestamp"})`
  margin-bottom: ${(0,D.Kq)(.75,"px")};
  ${({theme:e})=>(0,D.Gg)(e,"typography.definitions.foundation.link-utility")};
  ${({theme:e})=>(0,D._o)(e,"color","colors.consumption.body.standard.adlabel")};
`,F=(0,I.Ay)("div").withConfig({displayName:"LiveSchemaProductConatiner"})`
  display: block;
  margin: 0;
  padding: 0;
`,W=(0,I.Ay)("div").withConfig({displayName:"LiveProductDisplayProductTitle"})`
  display: inline-block;
  margin-bottom: 0;

  &&&&,
  &&&&:link,
  &&&&:visited,
  &&&&:hover,
  &&&&:active {
    text-decoration: underline;
    ${({theme:e})=>(0,D.Gg)(e,"typography.definitions.discovery.hed-core-secondary")};
    ${({theme:e})=>(0,D._o)(e,"color","colors.consumption.body.standard.accent")};
  }

  &&&&:hover {
    text-decoration: none;
  }
`,K=(0,I.Ay)("div").withConfig({displayName:"LiveProductDisplayDescription"})`
  ${({theme:e})=>(0,D.Gg)(e,"typography.definitions.navigation.text-tertiary")};
  ${({theme:e})=>(0,D._o)(e,"color","colors.navigation.standard.item-primary")};
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  margin-top: ${(0,D.Kq)(1.5,"px")};
  margin-bottom: 0;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;var j=i(60162),V=i(25203),G=i(43428),U=i(82049);const z=({product:e=null,timestamp:t=(new Date).toISOString(),eventName:i="Deal",className:r="",showOfferUrl:o=!1,enableActionIdForFeaturedDeal:a=!1})=>{if(!e)return null;const l=h()(e,"editorNote",""),s=h()(e,"brand.name",""),d=h()(e,"name",""),c=s+" "+d,u=h()(e,"id",""),m=h()(e,"offers[0]",{}),p=h()(e,"offers",[]),g=h()(M.uM,h()(m,"currency",""),""),b=(e,t)=>h()(e,t,""),y=b(m,"price"),f=b(m,"comparisonPrice"),A=f&&y>f?n.createElement(n.Fragment,null,c," ",n.createElement("span",{style:{textDecoration:"line-through"}},g," ",y)," ",g," ",f):n.createElement(n.Fragment,null,c," ",g," ",y),v=(0,U.E)(t),C={dangerousHed:d,brand:{name:s},id:u,contentType:"Featured Deal Product",offers:p,component:"featured_deal"},w=(e,t,i)=>{(0,j.g1)({window,product:{...C,component:"featured_deal"},index:e,actionId:i,layout:"ProductEmbed",event:t,layoutTitle:c})};let k=(e=>{if(p&&p.length>0)return e?p[0].purchaseUri:p[0].shortUrl})(o),E="_blank";"#"===k&&(k+=h()(e,"id",""),E="_self");const{isCnastLink:x,enableActionIdMapping:$}=(0,V.Vy)(k,a),R=n.useRef(null);return n.useEffect(()=>{const e=R.current;e&&(0,j.Yp)("ProductEmbed",[e],"",0,!0)},[]),n.createElement(H,{ref:R,className:r,"data-item":JSON.stringify(C)},n.createElement(_,null,i),n.createElement(B.A,null,n.createElement(q,null,"Updated:"," ",v.toLocaleString("en-US",{hour:"numeric",minute:"2-digit",month:"short",day:"numeric",year:"numeric"}).replace(",",""))),n.createElement(F,null,n.createElement(W,{as:"a",href:k,target:E,rel:"noopener noreferrer",className:"link featured-deal-link",onClick:(e,t)=>((e,t)=>{const i=e?.currentTarget?.getAttribute("href"),n=(0,V.hh)();if($&&i){e.preventDefault();const{href:r}=(0,G.P)({event:e,gtmTrackOnClick:w,linkProps:i,position:t,type:"FeaturedDealLiveSchema",component:"featured_deal",queryParams:n});window.open(r,E)}else if(x&&i){e.preventDefault();const{href:r}=(0,V.ry)(i,"featured_deal",n);e.currentTarget.setAttribute("href",r),window.open(r,E),w(t,e)}else w(t,e),window.open(k,E)})(e,t)},A||"Sample Product Title"),l&&n.createElement(K,null,l)))};z.propTypes={product:o().shape({name:o().string,hed:o().string,description:o().string,editorNote:o().string,id:o().string,offers:o().arrayOf(o().shape({price:o().string,comparisonPrice:o().string,currency:o().string,shortUrl:o().string,purchaseUri:o().string,sellerName:o().string})),currency:o().string,brand:o().string,comparisonPrice:o().string}),timestamp:o().string,eventName:o().string,className:o().string,showOfferUrl:o().bool,enableActionIdForFeaturedDeal:o().bool};const Q=z;var X=i(19607),Y=i(72987),J=i(49741),Z=i(45135),ee=i(4262),te=i(73275),ie=i(75163),ne=i(60881);const re=I.Ay.div.withConfig({displayName:"InContentRecircWrapper"})`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: var(${ie.pT.Color.Surface});
  width: 100%;
  gap: ${(0,D.Kq)(1)};

  ${(0,D.L7)(M.LO.md)} {
    width: ${(0,D.Kq)(44.25)};
    height: ${(0,D.Kq)(24.5)};
  }

  ${(0,D.Xm)(M.LO.md,M.LO.lg)} {
    width: ${(0,D.Kq)(79.25)};
    height: ${(0,D.Kq)(35.75)};
  }

  ${(0,D.H4)(M.LO.lg)} {
    height: ${(0,D.Kq)(29.5)};
  }
`,oe=I.Ay.div.withConfig({displayName:"InContentRecircHeader"})`
  margin: 0;
  border-top: ${(0,D.Kq)(.125)} solid
    ${(0,D.HK)("colors.consumption.lead.standard.divider")};
  padding: ${(0,D.Kq)(1)} 0 0 0;
  text-transform: uppercase;
  color: ${(0,D.HK)("colors.discovery.body.white.heading")};
  ${({theme:e})=>(0,D.Gg)(e,"typography.definitions.foundation.meta-primary")}
`,ae=I.Ay.div.withConfig({displayName:"InContentRecircCarousel"})`
  position: relative;
  width: 100%;
  height: auto;
  overflow: visible;

  ${(0,D.Xm)(M.LO.md,M.LO.lg)} {
    height: ${(0,D.Kq)(30)};
    overflow: hidden;
  }

  ${(0,D.H4)(M.LO.lg)} {
    height: ${(0,D.Kq)(30)};
    overflow: hidden;
  }
`,le=I.Ay.div.withConfig({displayName:"InContentRecircCarouselWrapper"})`
  position: relative;
  overflow-x: auto;
  overflow-y: visible;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 100%;
  height: 100%;

  ${(0,D.L7)(M.LO.md)} {
    overflow-y: visible;
  }

  ${(0,D.H4)(M.LO.md)} {
    overflow-y: hidden;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`,se=I.Ay.div.withConfig({displayName:"InContentRecircCarouselContent"})`
  display: flex;
  align-items: flex-start;
  padding: 0 ${(0,D.Kq)(1)} 0 0;
  height: auto;
  gap: ${(0,D.Kq)(1)};
  color: ${(0,D.HK)("colors.discovery.body.white.heading")};
  ${({theme:e})=>(0,D.Gg)(e,"typography.definitions.foundation.meta-primary")}
`,de=I.Ay.div.withConfig({displayName:"InContentRecircCarouselItem"})`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  flex-shrink: 0;
  cursor: pointer;

  /* Mobile 2 items per row */
  ${(0,D.L7)(M.LO.md)} {
    max-width: calc(50% - ${(0,D.Kq)(.5)});
  }
`,ce=(0,I.Ay)(ne.s).withConfig({displayName:"InContentRecircItemLink"}).attrs({as:"a",colorToken:"colors.discovery.body.white.heading",typeToken:"typography.definitions.foundation.meta-primary",hasUnderline:!1})`

  &:hover,
  &:focus {
    opacity: 0.8;
    text-decoration: underline;
  }

  &:active,
  &:link,
  &&:not(.button):not(.text):not(.link):link,
  &:visited {
    text-decoration: none;
  }
`,ue=I.Ay.div.withConfig({displayName:"InContentRecircImageWrapper"})`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 3 / 2;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,he=I.Ay.div.withConfig({displayName:"InContentRecircItemTitleWrapper"})`
  display: flex;
  flex: 1;
  align-items: flex-start;
  cursor: pointer;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;

  ${(0,D.L7)(M.LO.md)} {
    padding: ${(0,D.Kq)(1)} 0;
  }

  ${(0,D.H4)(M.LO.md)} {
    padding: ${(0,D.Kq)(1)} 0;
    width: ${(0,D.Kq)(23.75)};
  }
`,me=I.Ay.div.withConfig({displayName:"InContentRecircItemTitle"})`
  /* stylelint-disable value-no-vendor-prefix */
  display: -webkit-box;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  /* stylelint-enable value-no-vendor-prefix */
  overflow-wrap: break-word;
`,pe=I.Ay.div.withConfig({displayName:"InContentRecircButtonWrapper"})`
  display: flex;
  flex-direction: row;
  gap: ${(0,D.Kq)(1)};
  margin-right: ${(0,D.Kq)(1)};
  margin-left: auto;

  button {
    height: ${(0,D.Kq)(1.5)};
    min-height: ${(0,D.Kq)(1.5)};
  }
`,ge=I.Ay.button.withConfig({displayName:"InContentRecircButton"})`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  width: ${(0,D.Kq)(2)};
  height: ${(0,D.Kq)(6)};

  &:hover:not(:disabled) {
    cursor: pointer;
  }

  svg {
    fill: var(${ie.pT.Color.Icon});
    transition: fill 0.2s;
    cursor: pointer;
  }

  &:hover:not(:disabled) svg {
    fill: var(${ie.pT.Color.IconActive});
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled svg {
    opacity: 0.5;
    cursor: not-allowed;
    fill: var(${ie.pT.Color.IconDisabled});
  }

  ${({direction:e})=>"back"===e&&I.AH`
      svg {
        transform: rotate(180deg);
        transform-origin: center;
      }
    `};

  ${({direction:e})=>"forward"===e&&I.AH`
      svg {
        transform-origin: center;
      }
    `};
`;var be=i(14307),ye=i(49380);const fe=()=>window.innerWidth<768,Ae=({direction:e,label:t})=>{const i={type:e,label:t,subject:"recirc_unit",placement:"incontent_recirc_mid_content",subject_version:(0,ye.Bh)(fe())};(0,be.kg)(i)},ve=(e,t)=>{const i=(0,n.useRef)([]);return(0,n.useEffect)(()=>{i.current=i.current.slice(0,e.length)},[e.length]),(0,n.useEffect)(()=>{const n=new IntersectionObserver(n=>{n.forEach(n=>{if(n.isIntersecting){const r=i.current.indexOf(n.target);-1!==r&&(({item:e,index:t,totalItems:i,label:n})=>{const r={type:"impression",subject:"recirc_unit",label:n,placement:"incontent_recirc_mid_content",index:t,total_index:i,items:[{content_id:e.id,content_title:e.title,content_type:e.contentType,content_url:e.url}],strategy:(0,be.Cu)(e.url),subject_version:(0,ye.Bh)(fe())};(0,be.kg)(r)})({item:e[r],index:r,totalItems:e.length,label:t})}})},{threshold:.5,trackVisibility:!0,delay:100});return i.current.forEach(e=>{e&&n.observe(e)}),()=>n.disconnect()},[e,t]),i},Ce=({children:e,title:t})=>{const i=(0,n.useRef)(null),[r,o]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{const e=i.current;e&&o(e.scrollHeight>e.clientHeight)},[e]),n.createElement(he,null,n.createElement(me,{ref:i,title:r?t:void 0},e))};Ce.propTypes={children:o().node,title:o().string};const we=e=>{const{hed:t,items:i=[]}=e;if(!i||0===i.length)return null;const r=(0,n.useRef)(null),[o,a]=(0,n.useState)(!1),[l,s]=(0,n.useState)(!0),d=ve(i,t);n.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(C.G.RENDER,{name:"InContentRecirc"})},[]);const c=(0,n.useCallback)(()=>{if(r.current){const{scrollLeft:e,scrollWidth:t,clientWidth:i}=r.current;a(e>0),s(e<t-i-10)}},[]),u=()=>{if(r.current){const e=r.current.querySelector('[class*="InContentRecircCarouselItem"]');if(e){return e.offsetWidth+D.iL}}return 150+D.iL};return n.useEffect(()=>{c();const e=r.current;if(e)return e.addEventListener("scroll",c),()=>e.removeEventListener("scroll",c)},[i,c]),n.createElement(re,null,n.createElement(oe,null,t),n.createElement(ae,null,n.createElement(le,{ref:r},n.createElement(se,null,i.map((e,r)=>n.createElement(de,{key:e.url||`item-${r}`,ref:e=>d.current[r]=e,onClick:()=>(({item:e,index:t,totalItems:i,label:n})=>{const r={type:"click",label:n,subject:"recirc_unit",items:[{content_id:e.id,content_title:e.title,content_type:e.contentType,content_url:e.url}],strategy:(0,be.Cu)(e.url),subject_version:(0,ye.Bh)(fe()),placement:"incontent_recirc_mid_content",index:t,total_index:i};(0,be.kg)(r)})({item:e,index:r,totalItems:i.length,label:t})},n.createElement(ce,{href:e.url||"#",title:e.title},e.segmentedSources&&n.createElement(ue,null,n.createElement(te.A,{contentType:"photo",segmentedSources:e.segmentedSources,altText:e.title||"Carousel item",isLazy:!1,sizes:`(min-width: ${M.LO.md}) 200px, 50vw`})),e.title&&n.createElement(Ce,null,e.title))))))),n.createElement(pe,null,n.createElement(ge,{onClick:()=>{if(Ae({direction:"back",label:t}),r.current){const e=u();r.current.scrollBy({left:-e,behavior:"smooth"}),setTimeout(c,300)}},direction:"back",disabled:!o,"aria-label":"Scroll left"},n.createElement(ee.A,null)),n.createElement(ge,{onClick:()=>{if(Ae({direction:"forward",label:t}),r.current){const e=u();r.current.scrollBy({left:e,behavior:"smooth"}),setTimeout(c,300)}},direction:"forward",disabled:!l,"aria-label":"Scroll right"},n.createElement(ee.A,null))))};we.propTypes={hed:o().string,items:o().arrayOf(o().shape({title:o().string,description:o().string,url:o().string,sources:o().objectOf(o().shape({url:o().string,width:o().number,height:o().number})),segmentedSources:o().shape({sm:o().arrayOf(o().shape({url:o().string,width:o().number,height:o().number})),lg:o().arrayOf(o().shape({url:o().string,width:o().number,height:o().number}))})}))};const ke=we;var Ee=i(67098),xe=i.n(Ee);var $e=i(27287);const Re=(0,Z.Ng)(e=>{const t=(e=>{const t=e.closrRecirc||{},i=(e=>{const t=(e.componentConfig?.RecircList||{}).settings||{};return t?.experimentName})(e);if(i&&t[i]?.length)return t[i];const n=e["head.pageType"];return e[n]?.recircRelated||[]})(e),i=((e.componentConfig?.InContentRecirc||{}).settings||{}).hed;return{items:t.slice(0,6).map(e=>{const t=e.image||e.tout||e.promoImage||{},i=e.dangerousHed||e.hed||e.title||"",n=(0,$e.L)((r=i,xe()(r).trim()));var r;return{id:e.contentId||e.id,contentType:e.contentType,title:n,url:e.url,segmentedSources:t.segmentedSources||e.segmentedSources,sources:t.sources||e.sources,image:{url:t.url||"",alt:t.altText||n}}}),hed:i}})(ke);Re.displayName="InContentRecirc";const Se=Re,Te=(0,E.y)(Se,"InContentRecirc");var Be=i(12501),Oe=i(11025),Ne=i(26938),Pe=i(24532);function Le(e){return e&&"p"===e[0]}var Ie=i(92920),Me=i(89871);const De=(e=[])=>Array.isArray(e)&&e.reduce((e,t,i)=>Array.isArray(t)&&t.length>1?e+De(t):"string"==typeof t&&0!==i?e+t.trim().replace(/\s+/gi," ").split(" ").length:e,0);var He=i(23330),_e=i(74804),qe=i(29670),Fe=i(26641),We=i(30543),Ke=i(30),je=i(73730),Ve=i(13099),Ge=i(29912),Ue=i(69458),ze=i(33500),Qe=i(15539),Xe=i(68426),Ye=i(16302),Je=i(77307),Ze=i(34980),et=i(77527),tt=i(56082),it=i(41108),nt=i(40653),rt=i(51e3),ot=i(1123),at=i(43152),lt=i(18608),st=i(25423),dt=i(56317);const ct=(0,L.h5)(We.A),ut=I.AH`
  ${({pageBackgroundTheme:e})=>e?I.AH`
        ${(0,ot.Rn)(e)};
      `:I.AH`
      ${({theme:e})=>(0,Ke.j)(e,"page-background")};
    `}
  .grid-layout__content {
    ${(0,D.H4)(M.LO.md)} {
      grid-column: 3 / span 8;
    }

    ${(0,D.H4)(M.LO.lg)} {
      grid-column: 2 / span 6;
    }

    ${(0,D.Xm)(M.LO.sm,M.LO.md)} {
      grid-column: 1 / -1;
    }
  }

  .grid-layout--adrail.narrow {
    .container--body-inner {
      ${(0,D.H4)(M.LO.md)} {
        grid-column: 1 / -1;
      }
    }

    ${Ye.YX} {
      &:first-child {
        margin-top: 0;

        ${Ye.fz} {
          margin-top: 0;
        }
      }
    }
  }

  .container--body {
    grid-gap: 20px;
  }

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,ht=(0,I.Ay)(ct).withConfig({displayName:"ArticlePageBase"})`
  &&& {
    ${ut}
    ${({shouldHideBaseTopPadding:e})=>e&&"padding-top : 0;"}
    ${({hideNav:e,shouldPrioritizeSeriesPagination:t,hasContentHeaderLogo:i})=>!t&&i&&(e=>e?"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transform: translateY(-150%);\n      transition: all 1000ms ease;\n    }\n    ":"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transition: all 500ms ease;\n    }\n")(e)}
  }
`,mt=I.DU`
    .channel--body {
      ${ut}
    }
    
    .body__container {
      grid-column: 1/ -1;
    
      ${(0,D.H4)(M.LO.md)} {
        grid-column: 3 / span 8;
      }
    }
  
    /* 1. required to enforce proper alignment when text may be less than a full line
       2. remove extra top spacing added by default paragraph margins */
      .article__body {
        margin-bottom: ${(0,D.Kq)(2)};
        width: 100%; /* 1 */
  
        p:first-child:not(.callout--group-item):not(.upc-brandName) {
          margin-top: 0; /* 2 */
        }
  
        .small {
          font-variant: small-caps;
          text-transform: lowercase;
          font-style: normal;
        }
  
        .underline {
          text-decoration: underline;
          font-style: inherit;
        }

        .italic {
          font-style: italic;
        }

        ${et.Jp} .underline {
          font-style: inherit;
        }

        ${et.Jp} .italic {
          font-style: italic;
        }
      }

      .article-white-background {
        background-color: white;
        padding: 1rem;
      }
  
      .article__body > .body__inner-container > {
        & {
          ${(0,D.L7)(M.LO.md)} {
            .grid-items-3${Xe.v} {
              ${nt.E}{    
                margin-bottom: ${(0,D.Kq)(2.5)};
              }

              ${nt.E}:last-child:nth-child(odd) {    
                grid-column: 1 / 3;
              } 
            }
          }
          ${({hideSideBySideViewOnMobile:e})=>e&&`\n            ${(0,D.L7)(M.LO.md)} {\n              ${Xe.v} {\n                ${nt.E} {\n                  grid-column: 1 / -1;\n                }\n              }\n            }\n          `}
        }

        ${Ze.HT}, .cne-video-embed {
          &:first-child {
            margin-top: 0;
          }
        }

        inline-embed:first-child ${Ze.HT} {
          margin-top: 0;
        }
      }

      .article__body > .body__inner-container > figure.asset-embed {
        padding: 0;
      }


      .article__body--grid-margins {
        grid-column: 1 / -1;
      }

      /**
       1. have ad span more columns from the right panel
       to have a larger right margin
       2. have it span 3 which is intended in a 12 column grid
       */
       .grid-layout__aside {
         display: none;
     
         ${(0,D.H4)(M.LO.lg)} {
           display: block;
           min-width: 300px;
     
           ${Je.o6} {
             top: 90px;
           }
         }
     
         ${Ye.YX} {
           &:first-child {
             margin-top: 0;
     
             ${Ye.fz} {
               margin-top: 0;
             }
           }
         }
       }
       ${Ge.q} {
        ${({shouldEnableFullArticleInverted:e,theme:t})=>e&&`color: ${(0,D.HK)(t,"colors.consumption.body.inverted.body")}`}
}

        ${Ge.q} {
          ${({dividerColor:e})=>e&&`\n                .body__inner-container  > hr {\n                    background: #${e};\n                    height: 1px;\n                }\n              `}
       }

  `,pt=(0,I.Ay)("div").withConfig({displayName:"PaywallInlineBarrierWithWrapperGrid"})`
  ${({adRail:e})=>!e&&`\n    > ${nt.E} {\n      grid-column: 1 / -1;\n    }`}
`,gt=(0,I.Ay)("div").withConfig({displayName:"ArticlePageLedeBackground"})`
  ${({theme:e})=>(0,Ke.j)(e,"lede-background")};
`,bt=(0,I.Ay)("div").withConfig({displayName:"ArticlePageContentBackGround"})`
  ${({theme:e})=>(0,Ke.j)(e,"lede-background")}
  padding-top: ${(0,D.Kq)(2)};

  @media (min-width: 1208px) {
    padding-top: ${(0,D.Kq)(4)};
  }

  ${({togglePaddingTop:e,hasReducedBackgroundSpacing:t})=>"large"===e&&`padding-top: ${(0,D.Kq)(4)};\n       ${(0,D.H4)(M.LO.md)} { \n        padding-top: ${t?(0,D.Kq)(4):(0,D.Kq)(6)};\n       }\n  `}

  ${({enableActionBar:e})=>e&&`\n    ${(0,D.L7)(M.LO.xxl)}{\n      padding-top: ${(0,D.Kq)(6)};\n    }\n    ${(0,D.H4)(M.LO.lg)} {\n      position: relative;\n    }\n  `}

  ${({togglePaddingTop:e})=>"xlarge"===e&&`${(0,D.H4)(M.LO.lg)} {  padding-top: ${(0,D.Kq)(8)}; }`}
  
    ${({isMobileTruncated:e})=>e&&`\n          position: relative;\n          height: 890px;\n          overflow: hidden;\n  \n          &::before {\n            display: block;\n            position: absolute;\n            bottom: 0;\n            z-index: 1;\n            background: linear-gradient(\n              0deg,\n              rgba(255, 255, 255, 1) 20%,\n              rgba(255, 255, 255, 0) 100%\n            );\n            width: 100%;\n            height: 192px;\n            content: '';\n          }\n  \n          ${(0,D.H4)(M.LO.md)} {\n            height: auto;\n            overflow: visible;\n  \n            &::before {\n              display: none;\n            }\n          }\n        `}

  ${({cartoonVariation:e})=>"card"===e&&I.AH`
      ${et.SX}::before, ${et.SX}::after {
        border: none;
      }

      ${et.SX} {
        ${(0,D._o)("background-color","colors.background.brand")};
        border: none;
        padding: ${(0,D.Kq)(3)} ${(0,D.Kq)(6)};

        ${(0,D.H4)(M.LO.lg)} {
          ${rt.Pq} a {
            width: ${(0,D.Kq)(5)};
          }
        }
      }
    `}
`,yt=(0,I.Ay)("div").withConfig({displayName:"MobileRecircMostPopular"})``,ft=(0,I.Ay)("div").withConfig({displayName:"ArticlePageChunks"})`
  ${({adRail:e})=>e&&`\n    ${st.qV} {\n      margin-right: auto;\n      margin-left: auto;\n      width: auto;\n    }`}

  .grid:last-child {
    .body__container > .body__inner-container > *:last-child {
      ${tt.iq}:last-child {
        display: none;
      }
    }
  }

  ${({horizontalRuleStyle:e})=>"thin"===e&&"\n        .body__container {\n          .callout--has-top-border {\n            border-top-width: 1px;\n          }\n\n          hr {\n            height: 1px;\n          }\n        }\n      "}

  ${({hasTopSpacing:e})=>!e&&`\n        .inset-embedded-lede {\n          @media (min-width: 0px) and (max-width: calc(${M.LO.md} - 1px)) {\n            ${it.HO} {\n              transform: translateX(-50%);  /* 1 */\n              margin-left: 50%;\n              width: 100vw;\n            }\n          }\n        }\n\n        ${(0,D.H4)(M.LO.md)} {\n          .body__container {\n            p:first-of-type {\n              margin-top: 0;\n            }\n\n            .inset-embedded-lede {\n              margin-top: 0;\n            }\n          }\n        }\n    `}

  @media print {
    ${nt.A} {
      display: block;
    }

    ${nt.A} > p {
      font-size: 17px;
    }
  }

  ${({pageBackgroundTheme:e})=>e&&".ad.ad--mid-content {\n      .ad-label {\n        color: #1A1A1A;\n      }\n    }"}
`,At=(0,I.Ay)(je.A.Utility).withConfig({displayName:"ArticlePageBodyMobileTruncatedBtn"})`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 2;
  margin-left: -100px;
  width: 200px;

  ${(0,D.H4)(M.LO.md)} {
    display: none;
  }
`,vt=(0,I.Ay)(Ve.M).withConfig({displayName:"ArticlePageDisclaimer"})`
  ${(0,D.Gg)("typography.definitions.discovery.subhed-section-collection")}
  ${({theme:e})=>(0,D._o)(e,"color","colors.consumption.body.standard.body")};
  ${(0,D.H4)(M.LO.md)} {
    .grid-layout--adrail & {
      grid-column: 1 / -1;
    }
  }

  span {
    font-style: normal;
  }
`,Ct=(0,I.Ay)("div").withConfig({displayName:"ArticlePageChunksContent"})`
  ${({isNarrowContentWell:e})=>e&&`\n        .grid > *:first-child,\n        .body__container {\n          grid-column: 1 / -1;\n\n          ${(0,D.H4)(M.LO.lg)} {\n            grid-column: 4 / span 6;\n          }\n        }\n\n        ${et.SX} {\n          .grid--item {\n            grid-column: 1 / -1;\n          }\n        }\n      `}

  ${({shouldBlurText:e})=>{e&&I.AH`
        .grid:first-of-type .body__container p.has-dropcap::first-letter {
          color: transparent;
        }
        ${Ge.q} {
          * {
            text-shadow: 0 0 20px
              rgba(
                ${(0,D.HK)("colors.consumption.body.standard.body")},
                0.5
              );
            color: transparent;
          }

          a:not(.button) {
            ${({theme:e})=>(0,D.pe)(e,"colors.consumption.body.standard.link","colors.consumption.body.standard.link-hover")};
            text-shadow: 0 0 20px
              rgba(
                ${(0,D.HK)("colors.consumption.body.standard.link")},
                0.5
              );
          }
        }
      `}}
`,wt=((0,I.Ay)("article").withConfig({displayName:"ArticlePageMainContent"})`
  ${({shouldBlurText:e})=>e&&"\n        .grid {\n          .body__container {\n            p.has-dropcap,\n            p.has-dropcap__lead-standard-heading {\n              &::first-letter {\n                color: inherit;\n              }\n            }\n          }\n        }\n      "}
`,(0,I.Ay)(Me.A).withConfig({displayName:"ArticlePageSplitAdRail"})`
  ${Je.o6},
  ${Je.o6} > ${Je.RV} {
    height: 100%;
  }

  > aside > ${Je.o6} {
    position: static;
  }
`),kt=(0,I.Ay)("div").withConfig({displayName:"ArticlePageSplitAdRailContent"})`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${Je.o6} {
    margin-bottom: 0;
  }

  > div {
    flex: 1;
  }
`,Et=(0,I.Ay)("div").withConfig({displayName:"ArticlePageSplitAdRailTop"})``,xt=(0,I.Ay)("div").withConfig({displayName:"ArticlePageSplitAdRailMiddle"})`
  margin-top: 40px;
`,$t=(0,I.Ay)("div").withConfig({displayName:"ArticlePageSplitAdRailBottom"})`
  margin-top: 40px;
`,Rt=(0,I.Ay)("div").withConfig({displayName:"ArticlePageBodyGridContainer"})`
  width: 100%;
`,St=I.Ay.div.withConfig({displayName:"ArticlePageChunksGrid"})`
  ${Ge.q} > ${dt.g} {
    padding: 20px 0;
  }
  ${Ge.q} > ${Ye.YX} {
    width: unset;

    ul,
    li {
      margin: unset;
    }
    ${(0,D.H4)(M.LO.lg)} {
      display: none;
    }
  }
  ${({adRail:e,wideContent:t})=>!e&&`\n     > ${nt.E} {\n      grid-column: 1/ -1;\n      ${(0,D.H4)(M.LO.md)} {\n        grid-column: ${t?"2 / span 10":"3 / span 8"};\n      }\n    }`}
  > ${nt.E} {
    margin-bottom: ${(0,D.Kq)(2)};
  }

  ${({pageBackgroundTheme:e})=>e&&` .ad.ad--in-content {\n        display: none;\n      }\n      ${at.j} {\n        margin-top: 2rem;\n      }  \n    `}
`,Tt=I.Ay.div.withConfig({displayName:"ArticlePageContentFooterGrid"})`
  ${nt.E} {
    grid-column: 1 / -1;
    ${(0,D.H4)(M.LO.md)} {
      grid-column: 3 / span 8;
    }
    ${({isNarrow:e})=>e&&`\n         ${(0,D.H4)(M.LO.md)} {\n            grid-column: 4 / span 6;\n          }\n         `}
  }
`,Bt=I.Ay.div.withConfig({displayName:"ArticlePageDisclaimerGrid"})`
  ${({disclaimerPosition:e})=>"bottom"===e&&"\n      .disclaimer {\n        border: none;\n      }\n    "}
  ${({adRail:e})=>!e&&`\n    > ${nt.E} {\n      grid-column: 1/ -1;\n      ${(0,D.H4)(M.LO.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,Ot=I.Ay.div.withConfig({displayName:"ContentWrapperGrid"})`
  ${({isadRail:e})=>!e&&`\n    > ${nt.E} {\n      grid-column: 1/ -1;\n      ${(0,D.H4)(M.LO.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,Nt=I.Ay.div.withConfig({displayName:"ArticlePageCommentingGrid"})`
  ${({isAdRail:e,isNarrow:t})=>!e&&`\n    > ${nt.E} {\n      grid-column: 1 / -1;\n      ${t?`\n            ${(0,D.H4)(M.LO.lg)} {\n              grid-column: 4 / span 6;\n            }\n          `:`\n            ${(0,D.H4)(M.LO.md)} {\n              grid-column: 3 / span 8;\n            }\n          `}\n    }`}
`,Pt=(0,I.Ay)(Ue.A).withConfig({displayName:"LinkStackArticlePage"})`
  margin: 48px 0;
  padding-bottom: 0;

  ${ze.bU} {
    margin: 0;
  }

  ${Qe.OE} > ul {
    margin-left: 0;
    padding-left: 0;
  }
`,Lt=(0,I.Ay)(lt.vm).withConfig({displayName:"ArticlePageIssueDate"}).attrs(e=>({as:"span",colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.consumptionEditorial.description-feature",...e}))`
  display: flex;
  justify-content: center;
  padding-bottom: ${(0,D.Kq)(4)};
  text-align: center;
`,It=I.Ay.div.withConfig({displayName:"InContentCMUWrapper"})`
  ${(0,D.L7)(M.LO.md)} {
    height: ${(0,D.Kq)(24.5)};
  }

  ${(0,D.Xm)(M.LO.md,M.LO.lg)} {
    height: ${(0,D.Kq)(35.75)};
  }

  ${(0,D.H4)(M.LO.lg)} {
    height: ${(0,D.Kq)(29.5)};
  }
`;var Mt=i(46897),Dt=i(74679),Ht=i(71886),_t=i(6442),qt=i(94828),Ft=i(73347),Wt=i(70251),Kt=i(68116),jt=i(36211);const Vt=I.Ay.div.withConfig({displayName:"MidRecircWrapper"})`
  &&& {
    ${Kt.Tr} {
      ${Kt.hU} {
        text-decoration: none;
      }
      ${Kt.IB} {
        display: none;
      }
    }

    ${jt.Y} {
      ${(0,D.H4)(M.LO.sm)} {
        margin-bottom: ${(0,D.Kq)(1)};
      }
    }
  }
  padding: ${(0,D.Kq)(2)} 0 ${(0,D.Kq)(4)} 0;
  ${(0,D.L7)(M.LO.md)} {
    padding-top: 0;
  }

  ${jt.Y} {
    ${(0,D.Gg)("typography.definitions.discovery.hed-bulletin-primary")}
    ${({theme:e})=>(0,D._o)(e,"color","colors.discovery.body.white.heading")}
  }
  ${Kt.Rp} {
    display: block;
    border-bottom: 1px solid;
    padding-top: ${(0,D.Kq)(2)};
    ${({theme:e})=>(0,D._o)(e,"border-bottom-color","colors.discovery.body.white.border")}
  }

  ${Kt.Tr} {
    padding: 0;
  }

  ${Kt.tP} {
    width: ${(0,D.Kq)(12)};

    ${(0,D.H4)(M.LO.sm)} {
      display: block;
      float: right;
      margin: 0 0 ${(0,D.Kq)(2)} ${(0,D.Kq)(2)};
    }
  }

  ${ze.QW} {
    border-top: 1px solid;
    padding-top: ${(0,D.Kq)(2)};
    ${({theme:e})=>(0,D._o)(e,"border-top-color","colors.discovery.body.white.border")}
  }
  ${ze.bU} {
    margin-top: 0;
    margin-bottom: ${(0,D.Kq)(2)};
    ${(0,D.Gg)("typography.definitions.discovery.subhed-section-tertiary")}

    ${(0,D.H4)(M.LO.lg)} {
      justify-self: start;
    }
  }
`;var Gt=i(4149);const Ut=({bylineVariation:e,brandName:t,items:i=[],hideMidRecirc:r=!0,shouldHideRubric:o=!0})=>{const[a,l]=n.useState(!1);(0,Wt.w)(()=>l((0,ye.eD)())),n.useEffect(()=>{l((0,ye.eD)())},[]);const{formatMessage:s}=(0,_t.A)(),d=(0,ye.Bh)(a),c=s(Gt.A.alsoOn,{brandName:t});return r||0===i.length?null:n.createElement(Vt,{"data-test-id":"MidRecirc"},n.createElement(Ft.Ay,{dangerousHed:c}),i.map((t,r)=>{const a={...t,clickHandler:()=>((e,t,i)=>{const n={type:"click",label:c,subject:"recirc_unit",strategy:(0,be.Cu)(e.url),placement:"mid_article_recirc",subject_version:d,items:[{content_id:e.contentId,content_title:e.dangerousHed,content_type:e.contentType.toLowerCase(),content_url:e.url}],index:t,total_index:i};(0,be.kg)(n)})(t,r,i.length)};return n.createElement(qt.A.SideBySideDense,{key:r,...a,bylineVariation:e,hideRubricItemSummary:o,isRecircListItem:!0,recircPlacement:"mid_article_recirc",recircId:r+1,totalItems:i.length,sectionTitleLabel:c,subjectVersion:d})}))};Ut.propTypes={brandName:o().string,bylineVariation:o().string,hideMidRecirc:o().bool,items:o().array,shouldHideRubric:o().bool};const zt=(0,a.M3)(Ut,{keysToPluck:["brandName"]}),Qt=(0,E.y)(zt,"MidRecirc");var Xt=i(87997),Yt=i(16631),Jt=i(22761),Zt=i(92867),ei=i(67198),ti=i(85554);const ii=({communityLogo:e,communityExperience:t,shouldUseSoftRoundedEdges:i,shouldUseFullOpacity:r,shouldUseDarkPinnedTheme:o,shouldUseAlternateColorToken:a,configuredComponentRef:l})=>{const{formatMessage:s}=(0,_t.A)(),{questionAnswerIcon:d}=t;return n.createElement(Yt.fm,{shouldUseSoftRoundedEdges:i,className:ti.i7.PINNED_COMMENT,shouldUseFullOpacity:r,shouldUseDarkPinnedTheme:o,ref:l},n.createElement(Yt.W6,{shouldUseSoftRoundedEdges:i,shouldUseFullOpacity:r,shouldUseDarkPinnedTheme:o},n.createElement(Yt.oE,{shouldUseAlternateColorToken:a,shouldUseInvertedColor:o},s(Zt.A.qaReviewLabel)),e&&n.createElement(Yt.tG,{...e})),n.createElement(Jt.OS,null,d&&n.createElement(Jt.ve,{className:"qa-banner-icon",dangerouslySetInnerHTML:{__html:d}}),n.createElement(Jt.HL,null,n.createElement(Jt.XC,null,s(Zt.A.qaBannerTitle)),n.createElement(Jt.cn,{onClick:()=>(0,ei.A)(`.${ti.i7.COMMENTING_SECTION}`)},s(Zt.A.qaBannerDek)))))};ii.propTypes={configuredComponentRef:o().func,communityLogo:o().object,communityExperience:o().object,shouldUseSoftRoundedEdges:o().bool,shouldUseFullOpacity:o().bool,shouldUseDarkPinnedTheme:o().bool,shouldUseAlternateColorToken:o().bool},ii.displayName="QaBanner";const ni=(0,E.y)((0,a.M3)(ii,{keysToPluck:["communityLogo","communityExperience"]}),"QaBanner"),ri=(0,L.sA)(Pe.A),oi=(0,a.z5)("payment"),ai=(0,a.z5)("featureFlags");function li({shouldApplyCMUFixedHeight:e,showInContentRecirc:t}){return e?t?n.createElement(It,null,n.createElement(Te,null)):n.createElement(n.Fragment,null,n.createElement(J.A,{position:"article-mid-content",secondPosition:"in-content"}),n.createElement(Be.lB,{shouldApplyCMUFixedHeight:e})):n.createElement(n.Fragment,null,n.createElement(J.A,{position:"article-mid-content",secondPosition:"in-content"}),n.createElement(Be.lB,null))}li.propTypes={shouldApplyCMUFixedHeight:o().bool,showInContentRecirc:o().bool};const si=new P.default({"featured-deal-live-schema":e=>n.createElement(Q,{...e,className:"article-page__featured-deal"}),a:_e.Nl,blockquote:({props:e})=>({type:Ne.A,props:e}),bluesky:({props:e})=>({type:Dt.A,props:e}),ceros:_e.cg,h2:_e.Zy,reddit:({meta:e,...t})=>({type:Ht.A,props:{...t,...JSON.parse(decodeURIComponent(e))}}),tiktok:_e.qW,"cm-unit":e=>({type:li,props:e}),"inline-embed":He.A,"inline-recirc":e=>n.createElement(ri,{...e,className:"article-inline-recirc-wrapper"}),"native-ad":e=>n.createElement($.Z,{group:"ads"},n.createElement(X.A,{...e})),"mid-recirc":e=>n.createElement(Qt,{items:e.midRecircs}),"inline-newsletter":e=>n.createElement("div",null,n.createElement(Ie.A,{...e,isArticlePage:!0}),n.createElement(Be.Pc,null)),"journey-extra-slim":()=>n.createElement(Be.lw,null),"journey-extra-slim-with-action-sheet":()=>n.createElement(Be.YC,null),"journey-inline-newsletter":()=>n.createElement("div",null,n.createElement(Be.Pe,{className:"article-newsletter-slim-wrapper"}),n.createElement(Be.vE,null),n.createElement(Be.GO,null),n.createElement(Be.F6,null)),"qa-banner":()=>n.createElement(ni,null)});function di(e){return Array.isArray(e)&&"string"==typeof e[0]}function ci(e){return e&&di(e)?e[1]&&"object"==typeof e[1]&&!Array.isArray(e[1])?e.slice(2):e.slice(1):[]}function ui(e,t){return`${e}-${t}`}class hi{constructor({tagCloud:e,adRail:t,config:i,GeneralContentWrapper:r=()=>null,FullBleedContentWrapper:o=()=>null,interlude:a,isMobileDevice:l,recircMostPopular:s,shouldRenderMidContent:d,shouldShowMostPopular:c,shouldUsePersistentAd:u,singleChunkRailStrategy:h,recircMostPopularVariationOnMobile:m,dividerColor:p,shouldEnableArticleBackground:g,shouldEnableFullArticleInverted:b,pageBackgroundTheme:f,showFirstRailRecirc:A,linkList:v,isLinkStackEnabled:C,responsiveCartoonVariation:w,hasCartoonFullWidth:k,hasBaseAds:E,setCartoonLinkedGalleries:x,articleIssueDateComponent:$,midRecircItems:R,minWordCountForMidRecirc:S,shouldHideInlineRecirc:B,showDisclaimer:O,visualStoryBanner:N,relatedAudio:P,featuredDeal:L,shouldShowQaBanner:I,enableCommunityExperience:M,qaBannerParagraphIndex:D,wideContent:H,shouldApplyCMUFixedHeight:_,showInContentRecirc:q}={}){this.isMobileDevice=l,this.tagCloud=e,this.isLinkStackEnabled=C,this.linkList=v,this.adRail=t,this.wideContent=H,this.config=i,this.chunkCount=0,this.shouldRenderMidContent=d,this.shouldUsePersistentAd=u,this.shouldEnableArticleBackground=g,this.shouldEnableFullArticleInverted=b,this.GeneralContentWrapper=r,this.FullBleedContentWrapper=o,this.finalAdSet=!1,this.isSingleChunk=!1,this.singleChunkRailStrategy=h,this.pageBackgroundTheme=f,this.interlude=a?.strategy?.enabled&&a.isRailEligible?n.createElement(T.A,{...a,isRightRail:!0}):null,this.interludeSet=!1,this.mostPopular=c&&n.createElement(y.A,{className:"article-recirc-most-popular-wrapper",items:s,dividerColor:p,categoriesMap:e?.tags}),this.mostPopularOnMobile=c&&n.createElement(yt,{className:"article-recirc-most-popular-wrapper",counterSuffix:"",items:s,dividerColor:p,categoriesMap:e?.tags,as:y.A[m]}),this.hasRecircMostPopularOnMobile=!!m,this.showFirstRailRecirc=A,this.responsiveCartoonVariation=w,this.hasCartoonFullWidth=k,this.setCartoonLinkedGalleries=x,this.articleIssueDateComponent=$,this.hasBaseAds=E,this.midRecircItems=R||[],this.minWordCountForMidRecirc=S,this.shouldHideInlineRecirc=B,this.showDisclaimer=O,this.visualStoryBanner=N,this.relatedAudio=P,this.featuredDeal=L,this.shouldShowQaBanner=I,this.enableCommunityExperience=M,this.qaBannerParagraphIndex=D,this.shouldApplyCMUFixedHeight=_,this.showInContentRecirc=q}determineAd(){if(this.shouldUsePersistentAd)return this.interludeSet=!0,this.persistentAd();const e=this.stickyAd(this.showFirstRailRecirc);return this.interludeSet=!0,e}showAds(e){if(1===this.chunkCount)return this.determineAd();if(!this.finalAdSet){const t=this.stickyAd(e);return this.interludeSet=!0,t}return null}injectAfterFirstParagraph(e,t){let i=-1,n=!1;return e.forEach((e,t)=>{!n&&Le(e)&&(n=!0,i=n)}),n?e.splice(i,0,t):e.unshift(t),e}getAdSlot(e){return n.createElement(n.Fragment,null,n.createElement($.Z,{group:"ads"},e,n.createElement(X.A,{position:"rail"})),n.createElement($.Z,{group:"consumer-marketing"},n.createElement(J.A,{position:"display-rail"})))}withStickyBox(e,t={}){return e&&n.createElement(Oe.A,{...t},e)}renderSplitAdRail(){const e=this.withStickyBox(this.getAdSlot(null)),t=this.withStickyBox(this.mostPopular),i=this.withStickyBox(this.getAdSlot(null));return n.createElement(wt,{anchorTop:{selector:"[data-testid='ContentHeaderLeadRailAnchor']"},anchorBottom:{selector:".content-bottom-anchor",edge:"bottom"},shouldRemoveAbsolute:!0},n.createElement(kt,{className:"split-ad-rail-content"},n.createElement(Et,null,e),this.showFirstRailRecirc&&n.createElement(xt,{className:"split-ad-rail-middle"},t),n.createElement($t,{className:"split-ad-rail-bottom"},i)))}renderAdRail(e){return this.isSingleChunk&&"split-in-three"===this.singleChunkRailStrategy?this.renderSplitAdRail():this.showAds(e)}extractNewsletterNodesIfAudioExists(e,t){const i=[];let n=e;const r=["journey-extra-slim","journey-extra-slim-with-action-sheet"];if(t&&this.relatedAudio&&this.relatedAudio.embedUrl){let t=0;for(let n=0;n<e.length;n++){const o=e[n],a=o&&o[0];if("journey-inline-newsletter"===a||"inline-newsletter"===a)break;if(!r.includes(a))break;i.push(o),t++}t>0&&(n=e.slice(t))}return{newsletterNodes:i,remainingSmallGroup:n}}closeSmallGroup(e,t,i,r){if(e.length>0){++this.chunkCount;const o=2===this.chunkCount&&this.hasRecircMostPopularOnMobile,a=this.GeneralContentWrapper,{newsletterNodes:l,remainingSmallGroup:d}=this.extractNewsletterNodesIfAudioExists(e,r);return t.concat([n.createElement(St,{adRail:this.adRail,wideContent:this.wideContent,as:a,key:ui("small-group",i),pageBackgroundTheme:this.pageBackgroundTheme},n.createElement(Fe.A,{className:s()("body__container article__body",{"article-white-background":this.shouldEnableArticleBackground&&this.pageBackgroundTheme&&!this.shouldEnableFullArticleInverted}),shouldEnableFullArticleInverted:this.shouldEnableFullArticleInverted},l.length>0&&l.map((e,t)=>n.createElement(n.Fragment,{key:`newsletter-${t}`},si.convert(e))),r&&this.relatedAudio&&this.relatedAudio.embedUrl&&n.createElement(Xt.A,{scriptUrl:this.relatedAudio.embedUrl,skin:this.config.brand.organizationSlug,target:this.relatedAudio.id,...this.relatedAudio}),o&&this.mostPopularOnMobile,r&&this.articleIssueDateComponent,si.convert(["div",{className:"body__inner-container"},...d.map(e=>{if(this.shouldApplyCMUFixedHeight&&Array.isArray(e)&&"cm-unit"===e[0]){const[t,i={},...n]=e;return[t,{...i,shouldApplyCMUFixedHeight:this.shouldApplyCMUFixedHeight,showInContentRecirc:this.showInContentRecirc},...n]}return e})]),r&&n.createElement(Be.W3,null),r&&n.createElement(Be.UT,null),"final"===i&&this.visualStoryBanner&&n.createElement(Mt.A,{container:this.visualStoryBanner,className:"articleLayout"}),"final"===i&&this.isLinkStackEnabled&&this.linkList&&n.createElement(Pt,{...this.linkList})),n.createElement(B.A,null,this.adRail&&!this.isMobileDevice&&this.renderAdRail("final"!==i)))])}return t}getChunkAdRailContent(e,t){return n.createElement(n.Fragment,null,this.getAdSlot(e),t&&this.mostPopular)}injectInlineRecirc(e){let t=0,i=0;return e.reduce((n,r,o)=>Le(r)?(t++,Le(e[o+1])&&this.shouldInsertRecirc(t,i)?(t=0,n.concat([r,["inline-recirc",{reelId:++i}]])):n.concat([r])):n.concat([r]),[])}getTotalWordCount(e){return e.filter(e=>"p"===e[0]).reduce((e,t)=>e+t.filter(e=>"string"==typeof e).reduce((e,t)=>e+t.split(" ").length,0),0)}injectMidRecirc(e){let t=0,i=!1,n=null;return e.reduce((r,o,a)=>{const l=o[0]||"";if(t<1&&"ad"===l&&t++,t>=1&&!i){const t=a+1<e.length?o[0]:null;"p"===n&&"p"===t&&(i=!0,r.push(["mid-recirc",{midRecircs:this.midRecircItems}]))}return n=l,r.concat([o])},[])}isInlineEmbedCNEAudio(e){if(e){const t=e[0],i=e[1]||{};return"inline-embed"===t&&"cneaudio"===i?.type}return!1}hasCerosEmbed(e){if(!e||!di(e))return!1;if("ceros"===e[0])return!0;return ci(e).some(e=>!!Array.isArray(e)&&this.hasCerosEmbed(e))}injectJourneyNewsletter(e,t){return t||this.isInlineEmbedCNEAudio(e[0])||this.hasCerosEmbed(e[0])?[...e]:[["journey-extra-slim"],["journey-extra-slim-with-action-sheet"],...e]}persistentAd(){return n.createElement(Me.A,{anchorTop:{selector:"[data-testid='ContentHeaderLeadRailAnchor']"},anchorBottom:{edge:"bottom"},shouldRemoveAbsolute:!0},this.getChunkAdRailContent(this.interlude,this.showFirstRailRecirc))}shouldInsertRecirc(e,t){return e>=(0===t?5:8)}stickyAd(e){const t=!this.interludeSet&&this.interlude,i=this.getChunkAdRailContent(t,e);return n.createElement(n.Fragment,null,this.withStickyBox(i,{isExpanded:!!t}))}wrapInFullSizeContainer(e,t,i){const r=this.FullBleedContentWrapper;return t.concat([n.createElement(r,{key:ui("full",i)},n.createElement(Rt,{className:"body__grid-container",as:Fe.A,shouldDisableMaxWidth:!0,shouldEnableDataJourneyHook:!1,shouldEnableFullArticleInverted:this.shouldEnableFullArticleInverted},si.convert(e)))])}injectQaBanner(e){return function({children:e,targetParagraphIndex:t,nodeToInject:i,requireNextParagraph:n=!1}){if(!t||t<1)return e;let r=0,o=!1;const a=[];return e.forEach((l,s)=>{a.push(l),Le(l)&&(r++,r===t&&!o)&&(n?Le(e[s+1])&&(o=!0,a.push(i)):(o=!0,a.push(i)))}),a}({children:e,targetParagraphIndex:this.qaBannerParagraphIndex,nodeToInject:["qa-banner"]})}visit(e){let t=ci(e),i=[],r=[];this.isSingleChunk=!t.some(e=>"ad"===e[0]),this.finalAdSet=!1;const o=t.filter(Le).length,a=!this.shouldHideInlineRecirc&&o>10;this.enableCommunityExperience&&this.shouldShowQaBanner&&this.qaBannerParagraphIndex&&(t=this.injectQaBanner(t)),a&&(t=this.injectInlineRecirc(t)),this.featuredDeal&&(t=this.injectAfterFirstParagraph(t,["featured-deal-live-schema",this.featuredDeal]));if(o>2&&this.midRecircItems&&this.midRecircItems.length>0){const e=this.getTotalWordCount(t);this.minWordCountForMidRecirc&&e>this.minWordCountForMidRecirc&&(t=this.injectMidRecirc(t))}let l=0;const s=t.reduce((e,t=[])=>{const[i,n={},r=[]]=t,{props:{childTypes:o=[],image:{contentType:a=""}={}}={}}=n;return"inline-embed"!==i||!o.includes("cartoon")&&"cartoon"!==a||!t.length&&!r.length?e:e+1},0);let d="";return t=this.injectJourneyNewsletter(t,this.showDisclaimer),t.forEach((e,t)=>{const[o,a,c]=e;if("ad"===o)d=Boolean(""===d),this.shouldRenderMidContent&&(i=this.closeSmallGroup(r,i,t,d),r=[],this.hasBaseAds&&(i=i.concat([n.createElement(B.A,{key:ui("ad",t)},n.createElement(R.A,{className:"full-bleed-ad row-mid-content-ad",key:ui("ad",t)},n.createElement(Y.A,{shouldDisplayLabel:!0,shouldHoldSpace:!0})))])));else if(!this.adRail&&function(e){const t=e[0],i=e[1]||{},n="inline-embed"===t&&"callout:feature-large"===i.type,r="inline-embed"===t&&"callout:feature-medium"===i.type,o="inline-embed"===t&&"callout:masonry"===i.type;return n||r||o||"ad"===t}(e))d=Boolean(""===d),i=this.closeSmallGroup(r,i,t,d),r=[],i=this.wrapInFullSizeContainer(e,i,t);else if("inline-embed"===o&&a?.props?.childTypes?.includes("cartoon")&&c?.length){const t=c[1];t.props.image.responsiveCartoonVariation=this.responsiveCartoonVariation,t.props.image.setCartoonLinkedGalleries=this.setCartoonLinkedGalleries,l+=1,t.props.image.analyticsData={totalNumberOfCartoons:s,cartoonPosition:l,cartoonPlacement:"inline"},r=this.hasCartoonFullWidth?r.concat([c]):r.concat([e])}else if("inline-embed"===o&&"cartoon"===a?.props?.image?.contentType&&e?.length){const t=e[1];t.props.image.responsiveCartoonVariation=this.responsiveCartoonVariation,t.props.image.setCartoonLinkedGalleries=this.setCartoonLinkedGalleries,l+=1,t.props.image.analyticsData={totalNumberOfCartoons:s,cartoonPosition:l,cartoonPlacement:"inline"},r=r.concat([e])}else r=r.concat([e])}),d=Boolean(""===d),i=this.closeSmallGroup(r,i,"final",d),this.finalAdSet=!0,i}}function mi({tagCloud:e,adRail:t,config:i={adsConfig:{maxMidContentAdsDesktop:0,maxMidContentAdsMobile:0}},FullBleedContentWrapper:r,featureFlags:o,GeneralContentWrapper:a,interlude:l,isMobileDevice:s,jsonml:d,payment:c,recircMostPopular:u,shouldUsePersistentAd:h,hasRecircMostPopularOnMobile:m,recircMostPopularVariationOnMobile:p,hideRecircMostPopular:g,dividerColor:b,shouldEnableArticleBackground:y,shouldEnableFullArticleInverted:f,pageBackgroundTheme:A,showFirstRailRecirc:v,wordsToDisplay:C,linkList:w,isLinkStackEnabled:k,responsiveCartoonVariation:E,setCartoonLinkedGalleries:x,articleIssueDateComponent:$,hasBaseAds:R=!0,hasCartoonFullWidth:S=!1,singleChunkRailStrategy:T="default",midRecircItems:B,minWordCountForMidRecirc:O,shouldHideInlineRecirc:N,showDisclaimer:P,visualStoryBanner:L,relatedAudio:I,featuredDeal:M,shouldShowQaBanner:D,enableCommunityExperience:H,qaBannerParagraphIndex:_,wideContent:q,shouldApplyCMUFixedHeight:F=!1,showInContentRecirc:W=!1}){n.useEffect(()=>{const e=document.querySelector(".split-ad-rail-content"),t=document.querySelector(".split-ad-rail-middle"),i=document.querySelector(".split-ad-rail-bottom");if(e&&t&&i){const n=new IntersectionObserver((e=>t=>{const[i]=t;i.intersectionRatio<e&&i.target.remove()})(.95),{root:e,threshold:.95});return n.observe(t),n.observe(i),()=>{n.disconnect()}}return()=>{}});const K=!(0,qe.D)("ads",c,o),j=!g&&((e,t)=>De(e)>(t||200))(d,C);return new hi({tagCloud:e,adRail:t,config:i,FullBleedContentWrapper:r,GeneralContentWrapper:a,interlude:l,isMobileDevice:s,recircMostPopular:u,shouldRenderMidContent:K,linkList:w,isLinkStackEnabled:k,shouldShowMostPopular:j,shouldUsePersistentAd:h,singleChunkRailStrategy:T,hasRecircMostPopularOnMobile:m,recircMostPopularVariationOnMobile:p,pageBackgroundTheme:A,dividerColor:b,shouldEnableArticleBackground:y,shouldEnableFullArticleInverted:f,showFirstRailRecirc:v,responsiveCartoonVariation:E,hasCartoonFullWidth:S,hasBaseAds:R,setCartoonLinkedGalleries:x,articleIssueDateComponent:$,midRecircItems:B,minWordCountForMidRecirc:O,shouldHideInlineRecirc:N,showDisclaimer:P,visualStoryBanner:L,relatedAudio:I,featuredDeal:M,shouldShowQaBanner:D,enableCommunityExperience:H,qaBannerParagraphIndex:_,wideContent:q,shouldApplyCMUFixedHeight:F,showInContentRecirc:W}).visit(d)}mi.propTypes={adRail:o().bool,config:o().object,dividerColor:o().string,enableCommunityExperience:o().bool,featureFlags:o().object,FullBleedContentWrapper:o().func,GeneralContentWrapper:o().func,hasBaseAds:o().bool,hasCartoonFullWidth:o().bool,hideRecircMostPopular:o().bool,interlude:o().shape({...T.A.propTypes,isRailEligible:o().boolean}),jsonml:o().array.isRequired,minWordCountForMidRecirc:o().number,pageBackgroundTheme:o().string,payment:o().object,qaBannerParagraphIndex:o().number,recircMostPopular:o().array,recircMostPopularVariationOnMobile:o().oneOf((0,f._)(y.A)),relatedAudio:o().object,responsiveCartoonVariation:o().oneOf((0,f._)(b.A)),shouldApplyCMUFixedHeight:o().bool,shouldHideInlineRecirc:o().bool,shouldShowQaBanner:o().bool,showInContentRecirc:o().bool,shouldUsePersistentAd:o().bool,showDisclaimer:o().bool,showFirstRailRecirc:o().bool,singleChunkRailStrategy:o().oneOf(["default","split-in-three"]),tagCloud:o().shape({tags:o().arrayOf(o().shape({tag:o().string.isRequired,url:o().string}))}),visualStoryBanner:o().object,wordsToDisplay:o().number,wideContent:o().bool};const pi=n.memo(oi(ai(mi)),function(e,t){return N()(e,t)});var gi=i(21424);const bi=({body:e,config:t,linkList:i,isLinkStackEnabled:r,hasTopSpacing:o=!0,horizontalRuleStyle:a,interlude:l,isMobileDevice:d,shouldBlurText:c=!1,shouldUsePersistentAd:u,singleChunkRailStrategy:h,variations:m={},recircMostPopularVariationOnMobile:p,hideRecircMostPopular:g,dividerColor:b,shouldEnableArticleBackground:y=!1,shouldEnableFullArticleInverted:f=!1,pageBackgroundTheme:A,recircMostPopular:v,showFirstRailRecirc:C,tagCloud:w,wordsToDisplay:k,responsiveCartoonVariation:E,hasCartoonFullWidth:T=!1,hasBaseAds:B=!0,setCartoonLinkedGalleries:O,articleIssueDateComponent:N,showDisclaimer:P,disclaimer:L,disclaimerPosition:I,midRecircItems:M,minWordCountForMidRecirc:D,shouldHideInlineRecirc:H,visualStoryBanner:_,relatedAudio:q,featuredDeal:F,shouldShowQaBanner:W,enableCommunityExperience:K,qaBannerParagraphIndex:j,wideContent:V,shouldApplyCMUFixedHeight:G=!1,showInContentRecirc:U=!1})=>{const z=m&&m.adRail,Q=s()("article__body",{"article__body--grid-margins":!z}),X=z?x.A.NarrowContentWithWideAdRail:R.A,Y=z?x.A.NarrowContentWithWideAdRail:x.A.WithMargins,J="middle"===I&&P&&!q?.results?.length;return n.createElement(gi.Ay,null,n.createElement(Ct,{isNarrowContentWell:m.isNarrowContentWell,shouldBlurText:c},((e,t,i,r)=>e?n.createElement(Bt,{adRail:t,as:i,disclaimerPosition:r},n.createElement(Be.lw,null)):null)(J,z,Y,I),"middle"===I&&P&&n.createElement(Bt,{adRail:z,as:Y,disclaimerPosition:I},n.createElement(vt,{disclaimerHtml:L,disclaimerPosition:I})),n.createElement(ft,{hasTopSpacing:o,horizontalRuleStyle:a,pageBackgroundTheme:A,"data-testid":"ArticlePageChunks",adRail:z},n.createElement(pi,{featuredDeal:F,tagCloud:w,jsonml:e,adRail:z,config:t,isMobileDevice:d,linkList:i,isLinkStackEnabled:r,interlude:l,FullBleedContentWrapper:X,GeneralContentWrapper:Y,recircMostPopular:v,shouldUsePersistentAd:u,singleChunkRailStrategy:h,recircMostPopularVariationOnMobile:p,hideRecircMostPopular:g,pageBackgroundTheme:A,dividerColor:b,shouldEnableArticleBackground:y,shouldEnableFullArticleInverted:f,showFirstRailRecirc:C,wordsToDisplay:k,responsiveCartoonVariation:E,hasCartoonFullWidth:T,hasBaseAds:B,setCartoonLinkedGalleries:O,articleIssueDateComponent:N,midRecircItems:M,minWordCountForMidRecirc:D,shouldHideInlineRecirc:H,showDisclaimer:P,visualStoryBanner:_,relatedAudio:q,shouldShowQaBanner:W,enableCommunityExperience:K,qaBannerParagraphIndex:j,wideContent:V,shouldApplyCMUFixedHeight:G,showInContentRecirc:U})),n.createElement($.Z,{group:"paywall"},n.createElement(e=>n.createElement(pt,{adRail:z,as:Y},n.createElement("div",{className:s()("body","body__inline-barrier",Q)},n.createElement("div",{className:"container container--body"},n.createElement("div",{className:"container--body-inner"},n.createElement(S.A,{...e}))))),null))))};bi.propTypes={articleIssueDateComponent:o().node,body:o().array.isRequired,config:o().object,disclaimer:o().string,disclaimerPosition:o().string,dividerColor:o().string,enableCommunityExperience:o().bool,featuredDeal:o().object,hasBaseAds:o().bool,hasCartoonFullWidth:o().bool,hasTopSpacing:o().bool,hideRecircMostPopular:o().bool,horizontalRuleStyle:o().oneOf(["thin"]),interlude:o().shape({...T.A.propTypes,isRailEligible:o().boolean}),isLinkStackEnabled:o().bool,isMobileDevice:o().bool,linkList:o().object,midRecircItems:o().array,minWordCountForMidRecirc:o().number,pageBackgroundTheme:o().string,qaBannerParagraphIndex:o().number,recircMostPopular:o().array,recircMostPopularVariationOnMobile:o().oneOf((0,f._)(y.A)),relatedAudio:o().object,responsiveCartoonVariation:o().oneOf((0,f._)(b.A)),setCartoonLinkedGalleries:o().func,shouldApplyCMUFixedHeight:o().bool,shouldBlurText:o().bool,showInContentRecirc:o().bool,shouldEnableArticleBackground:o().bool,shouldEnableFullArticleInverted:o().bool,shouldHideInlineRecirc:o().bool,shouldShowQaBanner:o().bool,shouldUsePersistentAd:o().bool,showDisclaimer:o().bool,showFirstRailRecirc:o().bool,singleChunkRailStrategy:o().oneOf(["split-in-three"]),tagCloud:o().shape({tags:o().arrayOf(o().shape({tag:o().string.isRequired,url:o().string}))}),variations:o().shape({adRail:o().bool,isNarrowContentWell:o().bool}),visualStoryBanner:o().object,wordsToDisplay:o().number,wideContent:o().bool},bi.displayName="ChunkedArticleContent";const yi=bi;yi.WithAdRail=(0,f.y)(yi,"WithAdRail",{adRail:!0}),yi.OneColumn=(0,f.y)(yi,"OneColumn",{adRail:!1}),yi.OneColumnNarrow=(0,f.y)(yi,"OneColumnNarrow",{adRail:!1,isNarrowContentWell:!0});const fi=(0,E.y)(yi,"ChunkedArticleContent");var Ai=i(76674),vi=i(69389),Ci=i(70697),wi=i(27669),ki=i(49299),Ei=i(90090),xi=i(49870),$i=i.n(xi),Ri=i(90713);const Si=(e,t)=>{const i=e.displayName||e.name,r=e=>"object"==typeof e&&"p"===e[0],a=(e,t)=>e.filter((i,n)=>((e,t)=>e.slice(0,t).filter(r).length)(e,n)<t),l=i=>{const{[t]:r,shouldTruncate:o,paywall:{gateway:l={},paragraphLimit:s}={}}=i,d=r&&(l.shouldTruncate||o)&&(l.paragraphLimit>=0||s>=0);return n.createElement(e,{...i,[t]:d?a(r,l.paragraphLimit||s):r})};return l.propTypes={[t]:o().array.isRequired,paywall:o().shape({gateway:o().shape({paragraphLimit:o().number,shouldTruncate:o().bool}),paragraphLimit:o().number}),shouldTruncate:o().bool},l.displayName=`withArticleTruncation(${i})`,l};var Ti=i(15356);const Bi=(0,a.z5)("user"),Oi=(0,a.z5)("paywall"),Ni=(0,a.z5)("payment"),Pi=$i()([Bi,Ni,Oi,Ti.qw])(Ri.A);var Li=i(80471);const Ii=(0,p.YK)({readMoreDefault:{id:"ReadMore.SeriesRecirc",defaultMessage:"Read more",description:"SeriesRecirc component Read more text"},readNext:{id:"ReadNext.SeriesRecirc",defaultMessage:"Read next",description:"SeriesRecirc component Read next text"}}),Mi=I.Ay.div.withConfig({displayName:"SeriesRecircAsset"})`
  grid-column: 1/5;

  @media (max-width: ${M.LO.md}) {
    grid-column: 1/-1;
  }
`,Di=I.Ay.div.withConfig({displayName:"SeriesRecircContainer"})`
  margin-top: ${(0,D.Kq)(4)};
  margin-bottom: ${(0,D.Kq)(5)};
  border-top: 2px solid
    ${({theme:e})=>(0,D.HK)(e,"colors.discovery.body.white.heading")};
  padding-top: ${(0,D.Kq)(2)};
`,Hi=I.Ay.figure.withConfig({displayName:"SeriesRecircContent"})`
  margin-right: 0;
  margin-left: 0;

  @media (min-width: ${M.LO.md}) {
    display: grid;
    grid-column-gap: ${(0,D.Kq)(3)};
    grid-template-columns: repeat(10, 1fr);
  }

  @media (max-width: ${M.LO.md}) {
    display: block;
  }
`,_i=(0,I.Ay)(lt.vm).withConfig({displayName:"SeriesRecircDek"}).attrs(e=>({as:"div",typeIdentity:"typography.definitions.consumptionEditorial.description-embed",...e}))`
  @media (min-width: ${M.LO.md}) {
    grid-column: 1/-1;
  }
`;_i.displayName="SeriesRecircDek";const qi=(0,I.Ay)(lt.vm).withConfig({displayName:"SeriesPromoHed"}).attrs(e=>({as:"h2",bottomSpacing:.625,topSpacing:1,typeIdentity:"typography.definitions.discovery.subhed-section-tertiary",...e}))`
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: ${M.LO.md}) {
    grid-column: 1/-1;
  }
`,Fi=(0,I.Ay)(lt.vm).withConfig({displayName:"SeriesRecircReadMoreCta"}).attrs(e=>({typeIdentity:"typography.definitions.discovery.subhed-section-primary",...e}))`
  @media (max-width: ${M.LO.md}) {
    display: none;
  }
`,Wi=(0,I.Ay)(Fi).withConfig({displayName:"SeriesRecircReadMoreCtaMobile"})`
  display: none;

  @media (max-width: ${M.LO.md}) {
    display: block;
    grid-column: 1/-1;
    margin-bottom: 1em;
  }
`,Ki=I.Ay.div.withConfig({displayName:"SeriesRecircTextContainer"})`
  @media (min-width: ${M.LO.md}) {
    grid-column: 5/-1;
  }
`,ji="Read more",Vi={[ji]:Ii.readMoreDefault,"Read next":Ii.readNext},Gi=({ContentWrapper:e=x.A.NarrowContentWithWideAdRail,readMoreCTA:t=ji,seriesData:i=null})=>{const{formatMessage:r}=(0,_t.A)();n.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(C.G.RENDER,{name:"SeriesRecirc"})},[]);const o=(({links:e})=>{let t;for(let i=0;i<e.length;i++){const{isCurrent:n}=e[i];if(n){for(let n=i+1;n<e.length;n++){const{isExternal:i,isPublished:r}=e[n]||{};if(r&&!i){t=e[n];break}}break}}return t})({links:i?.links||[]}),a=e=>{(0,Ei.W8)("seriesrecirc",{title:e})},[l,s]=(0,Li.Wx)();if(n.useEffect(()=>{s&&(0,Ei.zJ)("series-inview",{title:o?.promoHed})},[s]),!i)return null;if(!o)return null;const{dek:d="",hed:c="",image:u=null,promoHed:h="",url:m=""}=o,p=u&&(u.segmentedSources||u.sources)&&{...u};return n.createElement(e,null,o&&n.createElement(Di,{ref:l},n.createElement(Hi,null,n.createElement(Wi,null,r(Vi[t])),n.createElement(Mi,null,p&&n.createElement("a",{href:m,onClick:()=>a(h||c)},n.createElement(te.A,{...p,isLazy:!0}))),n.createElement(Ki,null,n.createElement(Fi,null,r(Vi[t])),(c||h)&&n.createElement(qi,null,n.createElement("a",{href:m,onClick:()=>a(h||c)},n.createElement("span",{dangerouslySetInnerHTML:{__html:h||c}}))),d&&n.createElement(_i,null,n.createElement("span",{dangerouslySetInnerHTML:{__html:d}}))))))};Gi.propTypes={ContentWrapper:o().elementType,readMoreCTA:o().string,seriesData:o().shape({hed:o().string,dek:o().string,image:o().object,links:o().arrayOf(o().shape({hed:o().string,dek:o().string,image:o().object,isCurrent:o().bool,isExternal:o().bool,isPublished:o().bool,promoDek:o().string,promoHed:o().string,url:o().string}))})},Gi.displayName="SeriesRecirc";const Ui=(0,a.M3)(Gi,{keysToPluck:["seriesData"]}),zi=(0,E.y)(Ui,"SeriesRecirc");var Qi=i(41338),Xi=i(68898),Yi=i(99407),Ji=i(62265),Zi=i(52590),en=i(74200),tn=i(14935),nn=i(77498);const rn="\n  display: flex;\n  align-items: center;\n",on=I.Ay.div.withConfig({displayName:"ChannelCloudContainerWrapper"})``,an=I.Ay.div.withConfig({displayName:"ChannelCloudHeaderContainer"})`
  ${rn};

  border-width: 0 0 ${(0,D.Kq)(.25)};
  border-style: solid;
  padding: ${(0,D.Kq)(1)} ${(0,D.Kq)(3)} ${(0,D.Kq)(2)}
    0;

  ${({theme:e})=>(0,D._o)(e,"border-color","colors.interactive.base.black")};
`,ln=I.Ay.img.withConfig({displayName:"ChannelCloudHeaderImage"})`
  width: 25px;
  height: 30px;
`,sn=(0,I.Ay)(lt.sH).withConfig({displayName:"ChannelCloudHeaderLink"}).attrs(e=>({colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.discovery.hed-bulletin-secondary",...e}))`
  position: relative;
  top: ${(0,D.Kq)(.3)};
  padding-left: ${({hasLogo:e})=>e?(0,D.Kq)(1.3):0};
`,dn=I.Ay.div.withConfig({displayName:"ChannelCloudContainer"})`
  display: flex;
  flex-wrap: wrap;
  padding: ${(0,D.Kq)(2.4)} ${(0,D.Kq)(6)}
    ${(0,D.Kq)(1)} 0;
`,cn=I.Ay.div.withConfig({displayName:"ChannelCloudSubChannelContainer"})`
  ${rn}
  flex-wrap: wrap;
  margin-bottom: ${(0,D.Kq)(2)};
  padding-right: ${(0,D.Kq)(2)};
`,un=(0,I.Ay)(lt.vm).withConfig({displayName:"ChannelCloudSubChannelText"}).attrs(e=>({colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.globalEditorial.context-primary",...e}))`
  padding-right: ${(0,D.Kq)(1)};

  &::after {
    content: ':';
  }
`,hn=(0,I.Ay)(lt.sH).withConfig({displayName:"ChannelCloudSubChannelLink"})`
  ${rn}
  padding-right: ${(0,D.Kq)(1)};

  svg {
    ${({theme:e})=>(0,D._o)(e,"fill","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    top: 2px;
    right: 2px;
    transform: rotate(-45deg);
    width: 12px;
    height: 12px;
    vertical-align: bottom;
  }

  &::after {
    ${({theme:e})=>(0,D._o)(e,"color","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    right: ${({hasIcon:e})=>e?(0,D.Kq)(.4):0};
    line-height: 0;
    content: ',';
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
`,mn=(0,I.Ay)(lt.vm).withConfig({displayName:"ChannelCloudSubChannelLinkText"}).attrs(e=>({colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.globalEditorial.context-primary",...e}))`
  line-height: 1.7em;

  &:hover {
    ${({theme:e})=>(0,D._o)(e,"color","colors.consumption.body.standard.link-hover")};
    text-decoration: underline;
    ${({theme:e})=>(0,D._o)(e,"text-decoration-color","colors.consumption.body.standard.link-hover")};
  }
`,pn=({channels:e,configuredComponentRef:t,headerLogo:i,headerLink:r,sectionHeader:o})=>(n.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(C.G.RENDER,{name:"ChannelCloud"})},[]),n.createElement(on,{ref:t},o&&n.createElement(an,null,i&&n.createElement(ln,{src:i,alt:"logo"}),n.createElement(sn,{href:r,hasLogo:Boolean(i),dangerouslySetInnerHTML:{__html:o}})),e&&n.createElement(dn,null,e.map(e=>n.createElement(cn,{key:e.id},n.createElement(un,{dangerouslySetInnerHTML:{__html:e.text}}),e.sub.map(e=>n.createElement(hn,{key:e.id,href:e.url,onClick:()=>(0,Ei.W8)("channelCloud",e)},n.createElement(mn,{dangerouslySetInnerHTML:{__html:e.text}}))))))));pn.propTypes={configuredComponentRef:o().func,channels:o().arrayOf(o().shape({id:o().string,text:o().string,originalText:o().string,sub:o().arrayOf(o().shape({id:o().string,text:o().string,url:o().string}))})).isRequired,headerLink:o().string,headerLogo:o().string,sectionHeader:o().string.isRequired},pn.displayName="ChannelCloud";const gn=(0,E.y)(pn,"ChannelCloud");var bn=i(40281);const yn=I.DU`
  wired-coupons:not(:defined) {
    display: block;
    background-color: #ffffff;
    min-height: 400px;
  }
`;var fn=i(22598),An=i(60363),vn=i(51054),Cn=i(3138),wn=i(29727),kn=i(60156),En=i(67275),xn=i(68089),$n=i(20312),Rn=i.n($n),Sn=i(59319),Tn=i(97504),Bn=i(99906),On=i(50531);const Nn=(0,I.Ay)(je.A.Utility).withConfig({displayName:"CloseModalButton"})`
  position: absolute;
  color: ${({theme:e})=>(0,D.HK)(e,"colors.interactive.base.dark")};

  svg {
    fill: ${({theme:e})=>(0,D.HK)(e,"colors.interactive.base.dark")};
  }

  &:hover {
    color: ${({theme:e})=>(0,D.HK)(e,"colors.interactive.base.dark")};
  }

  ${On.ny} {
    display: flex;
  }
`,Pn=(0,I.Ay)(Nn).withConfig({displayName:"CloseModalButtonDesktop"})`
  left: 0;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(0,D.HK)("colors.interactive.base.primary")};
  }

  ${(0,D.L7)(`${Bn.VS.lg}px`)} {
    display: none;
  }

  ${On.Lj} {
    padding: 0;
  }
`,Ln=(0,I.Ay)(Nn).withConfig({displayName:"CloseModalButtonRight"})`
  top: ${(0,D.Kq)(2.5)};
  right: ${(0,D.Kq)(3)};
  left: unset;
  z-index: ${(0,D.fl)("skipLink")};
  border: 1px solid ${(0,D.HK)("colors.interactive.base.light")};
  width: ${(0,D.Kq)(5)};
  height: ${(0,D.Kq)(5)};

  &:hover {
    border: 1px solid ${(0,D.HK)("colors.interactive.base.light")};
    background: ${(0,D.HK)("colors.interactive.base.light")};
  }

  svg {
    vertical-align: bottom;
  }

  ${({isWindowed:e,isBottom:t})=>e?I.AH`
        display: flex;
      `:t?I.AH`
        top: ${(0,D.Kq)(1)};
        right: ${(0,D.Kq)(1)};
        border: none;
        width: ${(0,D.Kq)(4)};
        height: ${(0,D.Kq)(4)};

        &:hover {
          border: none;
          background: unset;
        }
      `:I.AH`
      ${(0,D.H4)(M.LO.lg)} {
        display: none;
      }
    `}
`,In=I.Ay.div.withConfig({displayName:"ModalContentWrapper"})`
  padding: 0;
  height: 100%;
`,Mn=I.DU`

  .genericModalHtmlOpen {
    overflow: hidden;
  }

  .genericModalBodyOpen {
    @media (hover: none) {
      overflow-y: hidden;
    }
  }

  ${({siteHeaderHeight:e,modalTransitionTime:t})=>I.AH`
      .genericModalOverlay {
        position: fixed;
        top: ${e}px;
        left: 0;
        opacity: 0;
        z-index: ${(0,D.fl)("hyperstitialLayer")};
        width: 100%;
        height: calc(100% - ${e}px);

        ${t&&I.AH`
          transition: opacity ${t}ms ease-in-out;
        `};
      }
    `};

  .genericModalOverlayAfterOpen {
    opacity: 1;
  }

  .genericModalOverlayBeforeClose {
    opacity: 0;
  }

  ${({shouldShowOverlay:e})=>e?I.AH`
  .genericModalOverlay {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(
      ${(0,D.HK)("colors.background.dark",{rgbOnly:!0})},
      0.4
    );
    overflow: hidden;
    justify-items: center;
  }

  .genericModal {
    position: relative;
    outline: none;
    ${(0,D._o)("background-color","colors.interactive.base.white")};
  }
`:I.AH`
          .genericModal {
            width: 100%;
            height: 100%;
            overflow-y: auto;

            ${(0,D._o)("background-color","colors.interactive.base.white")};
          }
        `};

  ${({isWindowed:e})=>e&&I.AH`
  .genericModal {
    display: flex;
    border-radius: ${(0,D.Kq)(1)};
    padding: ${(0,D.Kq)(6)} 0;
    width: auto;
    max-height: 100%;

    ${(0,D._o)("background-color","colors.interactive.base.white")};

    ${(0,D.H4)(M.LO.md)} {
      padding: ${(0,D.Kq)(6)} 0;
    }

    svg {
      ${(0,D._o)("fill","colors.interactive.base.deemphasized")};
    }
  }

  ${In} {
    display: flex;
    flex: 1;
    height: unset;
  }
`};
  ${({isBottom:e})=>e&&I.AH`
  .genericModalOverlay {
    align-items: end;

    ${(0,D.H4)(M.LO.xl)} {
      align-items: center;
    }
  }

  .genericModal {
    display: flex;
    border-radius: ${(0,D.Kq)(1)};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding-top: ${(0,D.Kq)(5)};
    width: 100%;
    max-height: calc(100% - ${(0,D.Kq)(4)});

    ${(0,D.H4)(M.LO.md)} {
      height: unset;
    }

    ${(0,D.H4)(M.LO.xl)} {
      border-bottom-left-radius: ${(0,D.Kq)(1)};
      border-bottom-right-radius: ${(0,D.Kq)(1)};
      max-width: ${(0,D.Kq)(104.125)};
    }
  }

  ${In} {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: unset;
    justify-items: center;
  }
`};
`,Dn=({children:e,closeModalText:t="",configuredComponentRef:i,isModalOpen:r,modalTransitionTime:o=300,onAfterOpen:a,onClose:l,openModal:s,showHeader:d=!1,variations:c={isBottom:!1,isWindowed:!1}})=>{const{isWindowed:u,isBottom:h}=c,m=!h&&!u,p=h||u;n.useEffect(()=>{Rn().setAppElement("#app-root")},[]);const g=n.useMemo(()=>{if(!d||!r||!document)return 0;const e=window?.innerWidth,t=document.getElementsByClassName("visual-link-banner--is-scrolled"),i=document.getElementsByClassName("site-navigation");return e<Bn.Vh.xl&&t.length&&t[0]?t[0].offsetHeight:i&&i.length&&i[0]?.offsetHeight||0},[r,d]),b=()=>{l&&l(),s(!1)};return n.createElement(Rn(),{isOpen:r,className:"genericModal",overlayClassName:{base:"genericModalOverlay",afterOpen:"genericModalOverlayAfterOpen",beforeClose:"genericModalOverlayBeforeClose"},bodyOpenClassName:"genericModalBodyOpen",htmlOpenClassName:"genericModalHtmlOpen",shouldCloseOnEsc:!0,closeTimeoutMS:o,onRequestClose:b,onAfterOpen:()=>{a&&a()}},m&&n.createElement(Pn,{btnStyle:"text",iconPosition:"before",hasEnableIcon:!0,onClickHandler:b,ButtonIcon:Tn.Ay.Close,label:t}),n.createElement(Ln,{ButtonIcon:Tn.Ay.Close,onClickHandler:b,onTouchStart:b,btnStyle:"outlined",isIconButton:!0,hasEnableIcon:!0,cornerRadius:"FullyRoundedCorner",size:"small",label:t,isWindowed:u,isBottom:h}),n.createElement(In,{ref:i},e),n.createElement(Mn,{siteHeaderHeight:g,modalTransitionTime:o,isWindowed:u,isBottom:h,shouldShowOverlay:p}))};Dn.propTypes={configuredComponentRef:o().func,children:o().node.isRequired,closeModalText:o().string,isModalOpen:o().bool.isRequired,modalTransitionTime:o().number,onAfterOpen:o().func,onClose:o().func,openModal:o().func.isRequired,showHeader:o().bool,variations:o().shape({isBottom:o().bool,isWindowed:o().bool})};const Hn=(0,Z.Ng)(e=>({isModalOpen:e.isModalOpen||!1}),e=>{const{openModal:t}=(0,Sn.A)(e);return{openModal:t}})(Dn);Hn.Default=(0,f.y)(Hn,"Default",{}),Hn.Windowed=(0,f.y)(Hn,"Windowed",{isWindowed:!0}),Hn.Bottom=(0,f.y)(Hn,"Bottom",{isBottom:!0});const _n=Hn;const qn=(0,i(31581).N)((0,E.y)(_n,"GenericModal"));var Fn=i(36276),Wn=i(92729),Kn=i(54634),jn=i(60663),Vn=i(95768),Gn=i(46269),Un=i(59867),zn=i(92543),Qn=i(16695);const Xn=(0,jn.Y)(()=>window.sessionStorage),Yn=["TextAboveCenterSmallWithRule","TextAboveCenterFullBleedNoContributor","TextBelowCenterFullBleedNoContributor","InlineImage","SplitScreenImageRightFullBleed","SplitScreenImageRightInset","SplitScreenImageLeftInset","SplitScreenImageLeftFullBleed","TextAboveLeftSmallWithRule"],Jn=["TextOverlayContentHeader","TextOverlayContentHeaderWithLogo","TextOverlayCenterFullBleedGradient"],Zn=e=>Yn.includes(e),er=(e,t)=>Boolean(t&&Jn.includes(e)),tr=(e,t,i,n)=>{let r={};const{showContributorImageOnMobile:o,showEnhancedTextOverlay:a}=n;return e&&(Zn(i)&&(r={shouldAlignCenterWhenNoCaption:!0}),"TextBelowCenterFullBleedNoContributor"===i&&(r={...r,isImagePositionBottomInSmallScreen:!0})),t&&(r={...r}),Zn(i)?r={...r,showContributorImageOnMobile:o}:er(i,a)&&(r={...r,showContributorImage:!1,hideShareButtons:!0,showTextOverlayDek:!0,hasDekMarginReduced:!0,shouldLimitContentWidth:!0,showEnhancedPublishDate:!0}),r},ir=(e,t)=>e.issueDate?n.createElement(Lt,null,t.formatMessage(g.publishedInThe),` ${e.issueDate} `):null,nr=(e,t,i)=>(er(e,t)||Zn(e))&&i,rr=({className:e,disclaimerPosition:t,showDisclaimer:i,DisclaimerWrapper:r,disclaimer:o})=>"top"===t&&i&&n.createElement(R.A,{className:e},n.createElement(r,null,n.createElement(Ve.M,{disclaimerHtml:o,hasTopRule:!1,contentAlign:"center"}))),or=({disclaimerPosition:e,showDisclaimer:t,GeneralContentWrapper:i,disclaimer:r})=>"bottom"===e&&t&&n.createElement(Bt,{as:i},n.createElement(vt,{disclaimerHtml:r,hasTopRule:!1})),ar=({enableActionBar:e,actionBarButtons:t,enableBookmarking:i,actionBarProps:r,headerProps:o})=>e&&t&&n.createElement(Wn.A,{...r,image:o.lede}),lr=({hasTruncationOnMobile:e,isMobileTruncated:t,intl:i,onTruncationDismiss:r})=>e&&t&&n.createElement(At,{inputKind:"button",label:i.formatMessage(g.truncatedButtonLabel),onClickHandler:r}),sr=({componentConfig:e,channelCloudData:t})=>((e,t)=>h()(e,"ChannelCloud.settings.shouldShowChannelCloud",!1)&&t?.channels?.length>0)(e,t)&&n.createElement(x.A.ContentWithAdRailNarrow,null,n.createElement("div",null,n.createElement(gn,{...t,...h()(e,"ChannelCloud.settings")}))),dr=({shouldHideSeriesNavigation:e,shouldShowSeriesNavigationInFooter:t,pageBackgroundColor:i,borderColorTheme:r})=>!e&&!t&&n.createElement(Zi.A,{className:"article__series-navigation",pageBackgroundTheme:i,dividerColor:r}),cr=({productCarousel:e,isUpcEnabled:t,hasAffiliateLinkDisabled:i,id:r})=>Object.keys(e).length>0&&n.createElement(En.K1,{key:"articleCarouselProduct",dataJourneyHook:"row-content"},n.createElement(kn.A,{isUpcEnabled:t,...e,hasAffiliateLinkDisabled:i,copilotId:r})),ur=({isBeOpEnable:e,ContentWrapper:t})=>e&&n.createElement(t,null,n.createElement("div",{className:"BeOpWidget"})),hr=({showFullBleedBelow:e,variations:t,cneVideoEmbedProps:i})=>e&&n.createElement(n.Fragment,null,n.createElement(vi.A,{variations:t,isFullBleedVideo:e,cneVideoEmbedProps:i})),mr=({hasNewsletterOnPageTop:e,newsletter:t})=>e&&t&&n.createElement(nn.A,{...t,position:"article-page-top"}),pr=({sponsoredContentHeaderProps:e})=>e&&n.createElement(Qi.A,{...e,className:"light-theme"}),gr=({className:e,showBreadcrumbTrail:t,hierarchy:i,shouldRemoveBackgroundColor:r})=>t&&n.createElement(v.A,{className:e,hierarchy:i,shouldRemoveBackgroundColor:r}),br=({shouldHideSeriesRecirc:e,ContentWrapper:t})=>!e&&n.createElement(zi,{ContentWrapper:t}),yr=({ContentWrapper:e,documentType:t,enableCommunityExperience:i,headerProps:r,id:o,hideCommentSection:a})=>i&&!a&&n.createElement(zn.u,{ContentWrapper:e,hed:r.dangerousHed,documentType:t,id:o}),fr=({showAgeGate:e,contentWarnings:t})=>e&&n.createElement(A.A,{content:{contentWarnings:t}}),Ar=({user:e})=>(e=>!e.isAuthenticated&&e.hasUserAuthCheck)(e)&&n.createElement(k,{as:"document",hint:"prefetch",href:"/account/sign-in"}),vr=({enableEnhancedCartoonExperience:e,intl:t,sliderData:i,showGalleryCartoonPublishedDate:r})=>e&&n.createElement(qn,{closeModalText:t.formatMessage(g.backToArticle)},n.createElement(Fn.A,{id:i.id,items:i.items,showPublishedDate:r,responsiveCartoonVariation:"SliderCartoon",title:i?.source?.hed,titleLinkURL:i?.url,shouldUseModalStyle:!0,carouselPlacedIn:"modal",showHeadRecirc:!0,showNewsletter:!0})),Cr=(e,t,i)=>e.isAuthenticated?t:i,wr=(e,t)=>e||!t,kr=(e,t)=>!e&&t,Er=(e,t)=>e&&!t,xr=(e,t)=>e&&t,$r=(e,t)=>{window.cns&&(window.cns.pageContext.content.pageStructure=e,t&&(window.cns.pageContext.content.adCount=t))},Rr=e=>{e.current&&e.current.off()},Sr=e=>!!e.lede,Tr=(e,t)=>{e&&(e=>{const t=h()(e,"ContentHeader.settings");c()(e,"ContentHeader.variation","TextOverlayWithLogo"),c()(e,"ContentHeader.settings",{...t,showLogo:!0,hideContributors:!1,hidePublishDate:!0,hideRubric:!1,hideShareButtons:!0})})(t)},Br=({isBeOpEnable:e,beOpAccountID:t})=>e?n.createElement(Yi.M,{accountId:t}):null,Or=({showBookmark:e})=>e?n.createElement(tn.A,null):null,Nr=({body:e,ContentWrapper:t})=>e?n.createElement(t,null,n.createElement(Be.h1,null)):null,Pr=(e,t)=>(0,bn.j)(t?.adsConfig?.bytes)?{isMobileDevice:e,brandSlug:t?.brand?.deprecatedSlug,bytesConfig:t?.adsConfig?.bytes}:{},Lr=(e,t,i)=>e?{midRecircItems:t,minWordCountForMidRecirc:i}:{},Ir=({shouldOverrideContentHeader:e,interactiveOverride:t,pageContentEl:i,headerRenderProps:r})=>{const o=(0,Gn.h)();return e?n.createElement("div",{className:"interactive-override-container interactive-override-container--content_header",dangerouslySetInnerHTML:{__html:t.markup}}):n.createElement(gt,{ref:i},(0,Ci.C)({showExperimentPlaceholder:r.showExperimentPlaceholder,renderHeader:()=>(0,wi.w)(r.headerComponent,{oneCover:r.oneCover,headerProps:r.headerProps,type:"article",additionalHeaderProps:r.additionalHeaderProps,enableEnhancedArticleHeader:r.enableEnhancedArticleHeader,hasNativeShareButton:r.hasNativeShareButton,shouldEnableNativeShareOnDesktop:r.shouldEnableNativeShareOnDesktop,isFullBleedVideo:r.isFullBleedVideo,hasLightbox:r.hasLightbox,interactiveOverride:r.interactiveOverride,metadataVideo:r.metadataVideo,showBreadCrumb:r.showBreadcrumbTrail,featuredDeal:r.featuredDeal}),isGBReady:o}))},Mr=e=>s()("article main-content","story",{"article--inherited-dropcaps":e}),Dr=e=>s()("article-body__footer",{"content-footer--mobile-truncated":e}),Hr=({body:e,paywallProps:t})=>e?n.createElement(Pi,{...t}):null,_r=e=>s()("page--article",e),qr=e=>!e;rr.propTypes={className:o().string,disclaimerPosition:o().string,showDisclaimer:o().bool,DisclaimerWrapper:o().elementType,disclaimer:o().string},or.propTypes={disclaimerPosition:o().string,showDisclaimer:o().bool,GeneralContentWrapper:o().elementType,disclaimer:o().string},ar.propTypes={enableActionBar:o().bool,actionBarButtons:o().array,enableBookmarking:o().bool,actionBarProps:o().object,headerProps:o().object},lr.propTypes={hasTruncationOnMobile:o().bool,isMobileTruncated:o().bool,intl:o().object,onTruncationDismiss:o().func},sr.propTypes={componentConfig:o().object,channelCloudData:o().object},dr.propTypes={shouldHideSeriesNavigation:o().bool,shouldShowSeriesNavigationInFooter:o().bool,pageBackgroundColor:o().string,borderColorTheme:o().string},cr.propTypes={productCarousel:o().object,isUpcEnabled:o().bool,hasAffiliateLinkDisabled:o().bool,id:o().string},ur.propTypes={isBeOpEnable:o().bool,ContentWrapper:o().elementType},hr.propTypes={showFullBleedBelow:o().bool,variations:o().array,cneVideoEmbedProps:o().object},mr.propTypes={hasNewsletterOnPageTop:o().bool,newsletter:o().object},pr.propTypes={sponsoredContentHeaderProps:o().object},gr.propTypes={className:o().string,showBreadcrumbTrail:o().bool,hierarchy:o().array,shouldRemoveBackgroundColor:o().bool},br.propTypes={shouldHideSeriesRecirc:o().bool,ContentWrapper:o().elementType},yr.propTypes={ContentWrapper:o().elementType,documentType:o().string,enableCommunityExperience:o().bool,headerProps:o().object,id:o().string,hideCommentSection:o().bool},fr.propTypes={showAgeGate:o().bool,contentWarnings:o().array},Ar.propTypes={user:o().object},vr.propTypes={enableEnhancedCartoonExperience:o().bool,intl:o().object,sliderData:o().object,showGalleryCartoonPublishedDate:o().bool},Br.propTypes={isBeOpEnable:o().bool,beOpAccountID:o().string},Or.propTypes={showBookmark:o().bool},Nr.propTypes={body:o().array,ContentWrapper:o().elementType},Ir.propTypes={shouldOverrideContentHeader:o().bool,interactiveOverride:o().object,pageContentEl:o().object,headerRenderProps:o().object},Hr.propTypes={body:o().array,paywallProps:o().object};const Fr=e=>{const t=(e=>{const{showWriterBio:t=!1,shouldHideSeriesNavigation:i=!0,shouldHideSeriesRecirc:n=!0,shouldEnableArticleBackground:r=!1,shouldEnableFullArticleInverted:o=!1,shouldInheritDropcapColor:a=!1,showLinkStackInsideContentBody:l=!1,hasLightbox:s=!1,cartoonVariation:d="default",related:c=[],metadataVideo:u={},productCarousel:h={},showGalleryCartoonPublishedDate:m=!0,showContributorImageOnMobile:p=!0,showIssueDateInArticle:g=!1,showExperimentPlaceholder:b=!1,shouldAddToRecentlyViewed:y=!1,...f}=e;return{...f,showWriterBio:t,shouldHideSeriesNavigation:i,shouldHideSeriesRecirc:n,shouldEnableArticleBackground:r,shouldEnableFullArticleInverted:o,shouldInheritDropcapColor:a,showLinkStackInsideContentBody:l,hasLightbox:s,cartoonVariation:d,related:c,metadataVideo:u,productCarousel:h,showGalleryCartoonPublishedDate:m,showContributorImageOnMobile:p,showIssueDateInArticle:g,showExperimentPlaceholder:b,shouldAddToRecentlyViewed:y}})(e),i=((e={})=>{const{customHeading:t={},recircs:i=[],cnCoupons:n=[],shouldDisplaySubscribersOnlyBadge:r=!1,...o}=e;return{...o,customHeading:t,recircs:i,cnCoupons:n,shouldDisplaySubscribersOnlyBadge:r}})(t.article),{configuredComponentRef:r}=t,{documentType:o,id:a,body:l,channelCloudData:d,contentWarnings:c,contributorSpotLightProps:u,hasAffiliateLinks:m,hasEventBannerHidden:p,channelMap:b,hasNewsletterInBody:y,hasTruncationOnMobile:f,headerProps:A,hideContributorBio:v,hideRecircList:w,hideRecircMostPopular:k,hierarchy:$,shouldDisplaySubscribersOnlyBadge:R,shouldEnableVMG:S,interactiveOverride:T,isAffiliateLinksDisabled:B,hideCommentSection:O,hideActionBar:N,lang:P,customHeading:L,recircs:I,recircMostPopular:M,recircRelated:D,midRecircItems:H,relatedVideo:_,relatedAudio:q,interlude:F,isHeroAdVisible:W,isMobileDevice:K,licensedPartnerLink:j,magazineDisclaimer:V,paddingTop:G,tagCloud:U,navigationTheme:z,newsletter:Q,shouldUsePersistentAd:X,showAgeGate:Y,showBookmark:J,showBreadcrumbTrail:Z,showHotelRecirc:ee,signageConfig:te,isUpcEnabled:ie,isLinkStackEnabled:ne,shouldShowFooterNewsletter:re,shouldPrioritizeSeriesPagination:oe,cnCoupons:ae,hasAffiliateLinkDisabled:le,showDisclaimer:se,disclaimerText:de,disclaimerPosition:ce,newsletterModules:ue,pageStructure:he,adCount:me,lightboxImages:pe}=i,{article:ge,communityExperience:be,showWriterBio:ye,showFirstRailRecirc:fe,attributes:Ae,className:ve,componentConfig:Ce,config:we,shouldHideBaseTopPadding:ke,shouldHideSeriesNavigation:Ee,shouldHideSeriesRecirc:xe,shouldShowSeriesNavigationInFooter:$e,pageBackgroundTheme:Re,dividerColor:Se,shouldEnableArticleBackground:Te,shouldEnableFullArticleInverted:Be,shouldInheritDropcapColor:Oe,showLinkStackInsideContentBody:Ne,featureFlags:Pe,hasLightbox:Le,hasSlideShow:Ie,slideShowVariation:Me,hasChannelNavigation:De,hideSideBySideViewOnMobile:He,showContributor:_e,showContributorSpotlight:qe,cartoonVariation:Fe,hasRecircDriver:We,recircMostPopularVariationOnMobile:Ke,linkList:je,related:Ve,metadataVideo:Ge,productCarousel:Ue,user:ze,userPlatform:Qe,hasDynamicNewsletterSignup:Xe,hasNewsletterForABTest:Ye,intl:Je,xlargePaddingTop:Ze,articleVariationForXlargePaddingTop:et,beOp:tt,hasDynamicDisclaimer:it,responsiveCartoonVariation:nt,showGalleryCartoonPublishedDate:rt,actionBarLargeScreenVariation:ot,actionBarMobileScreenVariation:at,isActionBarStickyLargeScreen:lt,actionBarButtons:st,showContributorImageOnMobile:dt,showIssueDateInArticle:ct,hasLinkbannerCrossSlideAnimation:ut,showEnhancedTextOverlay:pt,minWordCountForMidRecirc:gt,shouldShowMidArticleRecirc:yt,shouldHideInlineRecirc:ft,showExperimentPlaceholder:At,headerComponent:vt,oneCover:Ct,visualStoryBanner:wt,featuredDeal:kt,qaBannerParagraphIndex:Et,puzzlesAndGames:xt,contentFooterContributorTypes:$t,shouldAddToRecentlyViewed:Rt=!1,coreDataLayer:St}=t,Bt=(e=>e??"ContentHeader")(vt),[Pt,Lt]=(0,n.useState)(0),[It,Mt]=(0,n.useState)(A.hasContentHeaderLogo),[Dt,Ht]=(0,n.useState)(!1),[_t,qt]=(0,n.useState)(Q),[Ft,Wt]=(0,n.useState)({}),Kt=(0,n.useRef)(null),jt=(0,n.useRef)(null),Vt=(0,n.useRef)(null),Gt=(0,n.useRef)(null),Ut=(0,n.useRef)(null),zt=(0,n.useRef)(Pt);(0,n.useEffect)(()=>{((e,t)=>{e.current=t})(zt,Pt)},[Pt]);const Qt=(0,n.useMemo)(()=>((e,t,i,n)=>{const r=e?(0,Xi.A)({Component:fi,slides:t,hasSlideShow:i,slideShowVariation:n}):fi;return Si(r,"body")})(Le,pe,Ie,Me),[Le,pe,Ie,Me]),Xt=(e=>e?.enableActionBar)(Pe),Yt=(e=>e?.newsletterId)(Q),Jt=(0,n.useCallback)(()=>{((e,t,i,n)=>{((e,t,i)=>e&&t?.current?.offsetHeight!==i.current)(e,t,i)&&n((e=>e?.current?.offsetHeight)(t))})(Xt,jt,zt,Lt)},[Xt]),Zt=(0,n.useCallback)(()=>{const e=window.scrollY,t=(e=>e.current?.offsetTop||0)(Kt),i=((e,t)=>e<=t+100)(e,t);Mt((e=>t=>((e,t)=>e!==t?e:t)(e,t))(i))},[]),ei=(0,n.useCallback)(()=>{Jt()},[Jt]),ti=(0,n.useCallback)(()=>{Jt()},[Jt]),ii=(0,n.useCallback)(()=>{Ht(qr),(0,Ei.zJ)("article-read-more")},[]),ni=(0,n.useCallback)((e,t)=>{Wt(e),(e=>{e&&e()})(t)},[]),ri=(0,n.useCallback)(e=>(async(e,t,i,n)=>{try{((e,t,i,n)=>{if(200!==e.status)return;const r=t.filter(e=>e.priority).sort((e,t)=>e.priority-t.priority).map(e=>e.newsletterId),o=e.newsletterSubscriptions.data.filter(e=>"SUBSCRIBED"===e.attributes.status).map(e=>e.attributes.newsletterId);if(!o.length)return;const a=r.filter(e=>!o.includes(e)),l=t.find(e=>e.newsletterId===a[0]);o.includes(i)&&n(e=>({...e,...l}))})(await(0,wn.k)(e),t,i,n)}catch(e){}return{}})(e,ue,Yt,qt),[ue,Yt]);(0,n.useEffect)(()=>{((e,t,i,n,r)=>{if(((e,t,i)=>e.isAuthenticated&&t&&i?.length)(e,t,i)){const t=((e,t,i)=>{const n=e.map(e=>e.newsletterId).toString();return{amgUUID:t.amguuid,newsletterIds:n,userPlatformProxy:i?.userPlatformProxy,provider:"sailthru",xClientID:i?.xClientID}})(i,e,n);r(t)}})(ze,Xe,ue,Qe,ri),Ht(!!f),((e,t,i,n)=>{e&&(t(!0),i.current=window.Kendra.WINDOW_EVENT.on(Un.m.SCROLL_DEBOUNCE,n))})(A.hasContentHeaderLogo,Mt,Vt,Zt);const e=((e,t)=>{const i="header"===h()(e,"behavior"),n=h()(t,"BasePage.settings.showNavWithHeaderOverride");return i&&!n})(T,Ce);return Xn.setItem("nav_invisible",e),$r(he,me),Gt.current=window.Kendra.WINDOW_EVENT.on(Un.m.SCROLL_DEBOUNCE,ti),Ut.current=window.Kendra.WINDOW_EVENT.on(Un.m.RESIZE_DEBOUNCE,ei),window.Kendra.TRACK_COMPONENT.broadcast(C.G.RENDER,{name:"ArticlePage"}),((e,t,i)=>()=>{Rr(e),Rr(t),Rr(i),Xn.removeItem("nav_invisible")})(Vt,Gt,Ut)},[]),(0,n.useEffect)(()=>{const e=Qe?.federatedGraphqlUrl,t=St?.site?.orgId;(({shouldAddToRecentlyViewed:e,isAuthenticated:t,amguuid:i,federatedGraphqlUrl:n,orgId:r,id:o})=>{if(e&&t&&i&&n&&r)try{(0,Cn.W)(n,o,r)}catch(e){}})({shouldAddToRecentlyViewed:Rt,isAuthenticated:ze.isAuthenticated,amguuid:ze.amguuid,federatedGraphqlUrl:e,orgId:t,id:a})},[Rt,ze.isAuthenticated,ze.amguuid,Qe,St,a]);const{enableCommunityExperience:oi,enableArtistQA:ai}=be,li=(e=>e?.account?.bookmark?.enableBookmarkDrawers||!1)(we),si=((e,t)=>e||t.formatMessage(g.defaultDisclaimer))(de,Je),di=((e,t)=>e?t:void 0)(Te,Re),ci=((e,t)=>e?t:void 0)(Te,Se),ui=((e,t)=>!!e||t)(Ye,y),{hasContentHeaderLogo:hi,isFullBleedVideo:mi}=A;Tr(hi,Ce);const pi=((e,t)=>e?void 0:t.contributors)(v,A),{hasNativeShareButton:gi,hasNewsletterOnPageTop:bi,hasNewsletterWithoutWrapper:yi,shouldEnableNativeShareOnDesktop:vi,shouldRemoveBackgroundColor:Ci,enableEnhancedCartoonExperience:wi,enableEnhancedArticleHeader:ki,variations:xi,showFullBleedBelow:$i,cneVideoEmbedProps:Ri,enableBookmarking:Ti}=Pe,Bi=((e,t)=>e&&!t)(Xt,N),Oi=h()(Ce,"ContentHeader.variation"),Ni=((e,t,i)=>Zn(e)||er(e,t)?{hasReducedBackgroundSpacing:i}:{})(Oi,pt,ct),Pi=((e,t,i,n,r)=>(Zn(e)||er(e,t))&&i?{articleIssueDateComponent:ir(n,r)}:{})(Oi,pt,ct,A,Je),Li={...tr(ki,Bi,Oi,{showContributorImageOnMobile:dt,showEnhancedTextOverlay:pt}),shouldDisplaySubscribersOnlyBadge:R},Ii=((e,t)=>e?"InlineCartoon":t)(wi,nt),Mi=(0,Ji.S)(Ce,{type:"article"}),Di=(e=>"OneColumnNarrow"===h()(e,"ChunkedArticleContent.variation"))(Ce),Hi=x.A.DynamicGrid({startColumn:2,endColumn:12}),_i=((e,t,i,r)=>e.map((e,o)=>{const a=(0,E.y)(fn.A,e.displayName),l=e.heading||"",{results:s,destinationPage:d,location:c,recommendedClickout:u,recommendedType:h}=e;return t&&d?n.createElement(An.A,{key:`SummaryCollectionSplitColumns${o}`,recommendedItems:{items:s,recommendedType:h,recommendedClickout:u},guideItem:[d],location:c,shouldAppendReadMoreLinkForDek:!0}):n.createElement(vn.A,{key:`ConnectedErrorBoundary${o}`},n.createElement(a,{related:e.related,heading:l,dividerColor:i,shouldEnableFullArticleInverted:r}))}))(I,We,ci,Be),qi=((e,t,i,n)=>e===t&&i?i:n)(Oi,et,Ze,G),{beOpAccountID:Fi,isBeOpEnable:Wi}=(e=>({beOpAccountID:e?.accountID||"",isBeOpEnable:e?.isEnabled||!1}))(tt),Ki=(e=>e&&n.createElement(en.A,null))(De),ji=(e=>"WithAdRail"===h()(e,"ChunkedArticleContent.variation"))(Ce),Vi=((e,t)=>({children:i})=>n.createElement(Ot,{isadRail:e,as:t},n.createElement("div",{className:"body body__container"},n.createElement("div",{className:"container container--body"},n.createElement("div",{className:"container--body-inner"},i)))))(ji,Mi),Gi=((e,t,i)=>({children:r})=>n.createElement(Nt,{as:i,isAdRail:e,isNarrow:t},r))(ji,Di,Mi),Ui=(e=>"articleheader"===(0,xn.u)(e))(T),zi=h()(A,"sponsoredContentHeaderProps"),Qi=h()(xt,"wideContent",!1),Yi=(e=>s()({[`theme-${e.theme?.text}`]:e.theme?.text&&e.theme?.text===e.theme?.art}))(A);return n.createElement(ht,{configuredComponentRef:r,additionalNavigation:Ki,attributes:Ae,shouldEnableFullArticleInverted:Be,channelMap:b,className:_r(ve),config:we,featureFlags:Pe,hideNav:It,hasContentHeaderLogo:hi,hasEventBannerHidden:p,hasFooterAdsMargins:!0,interactiveOverride:T,isHeroAdVisible:W,hasBaseAds:!0,user:ze,lang:P,customHeading:L,shouldHideBaseTopPadding:ke,shouldPrioritizeSeriesPagination:oe,pageBackgroundTheme:di,navigationTheme:z,aboveTheFoldClassName:Yi,hasLinkbannerCrossSlideAnimation:nr(Oi,pt,ut)},n.createElement(Br,{isBeOpEnable:Wi,beOpAccountID:Fi}),n.createElement(Or,{showBookmark:J}),n.createElement(rr,{className:Yi,disclaimerPosition:ce,showDisclaimer:se,DisclaimerWrapper:Hi,disclaimer:si}),n.createElement(gr,{className:Yi,showBreadcrumbTrail:Z,hierarchy:$,shouldRemoveBackgroundColor:Ci}),n.createElement("article",{className:Mr(Oe),lang:P},n.createElement(mr,{hasNewsletterOnPageTop:bi,newsletter:Q}),n.createElement(Qn.N,null,n.createElement(pr,{sponsoredContentHeaderProps:A.sponsoredContentHeaderProps}),n.createElement(Ir,{shouldOverrideContentHeader:Ui,interactiveOverride:T,pageContentEl:Kt,headerRenderProps:{headerComponent:Bt,oneCover:Ct,headerProps:A,additionalHeaderProps:Li,enableEnhancedArticleHeader:ki,hasNativeShareButton:gi,shouldEnableNativeShareOnDesktop:vi,isFullBleedVideo:mi,hasLightbox:Le,interactiveOverride:T,metadataVideo:Ge,showBreadcrumbTrail:Z,featuredDeal:kt,showExperimentPlaceholder:At}})),n.createElement(dr,{shouldHideSeriesNavigation:Ee,shouldShowSeriesNavigationInFooter:$e,pageBackgroundColor:di,borderColorTheme:ci}),n.createElement(bt,{togglePaddingTop:qi,isMobileTruncated:Dt,cartoonVariation:Fe,"data-attribute-verso-pattern":"article-body",enableActionBar:Bi,className:"article-body__content",...Ni,ref:jt},n.createElement(Vn.A,{isPhotoBookmarkingEnabled:Ti,theme:"standard"},n.createElement(ar,{enableActionBar:Bi,actionBarButtons:st,enableBookmarking:Ti,actionBarProps:{actionBarLargeScreenVariation:ot,actionBarMobileScreenVariation:at,isActionBarStickyLargeScreen:lt,actionBarButtons:st,articleLength:Pt,showActionBar:Bi,shouldEnableBookmarkDrawers:li},headerProps:A}),n.createElement(lr,{hasTruncationOnMobile:f,isMobileTruncated:Dt,intl:Je,onTruncationDismiss:ii}),n.createElement(sr,{componentConfig:Ce,channelCloudData:d}),n.createElement(Hr,{body:l,paywallProps:{featuredDeal:kt,body:l,linkList:je,isLinkStackEnabled:xr(ne,Ne),isMobileDevice:K,component:Qt,contributors:pi,hasTopSpacing:Sr(A),interlude:F,isAffiliateLinksDisabled:B,name:"chunked-article-content",shouldUsePersistentAd:X,recircMostPopularVariationOnMobile:Ke,hideRecircMostPopular:k,shouldEnableArticleBackground:Te,shouldEnableFullArticleInverted:Be,pageBackgroundTheme:di,dividerColor:ci,recircMostPopular:M,showFirstRailRecirc:fe,tagCloud:U,responsiveCartoonVariation:Ii,hasCartoonFullWidth:wi,setCartoonLinkedGalleries:ni,hasAffiliateLinks:m,...Pi,showDisclaimer:se,disclaimer:si,disclaimerPosition:ce,wideContent:Qi,shouldHideInlineRecirc:ft,visualStoryBanner:wt,relatedAudio:q,...Lr(yt,H,gt),shouldShowQaBanner:ai,enableCommunityExperience:oi,qaBannerParagraphIndex:Et}})),n.createElement(Nr,{body:l,ContentWrapper:Vi})),n.createElement(br,{shouldHideSeriesRecirc:xe,ContentWrapper:Vi})),n.createElement(ur,{isBeOpEnable:Wi,ContentWrapper:Vi}),n.createElement(hr,{showFullBleedBelow:$i,variations:xi,cneVideoEmbedProps:Ri}),n.createElement(or,{disclaimerPosition:ce,showDisclaimer:se,GeneralContentWrapper:Mi,disclaimer:si}),n.createElement(cr,{productCarousel:Ue,isUpcEnabled:ie,hasAffiliateLinkDisabled:le,id:a}),n.createElement(yr,{ContentWrapper:Gi,documentType:o,enableCommunityExperience:oi,headerProps:A,id:a,hideCommentSection:O}),n.createElement(Tt,{as:Ai.A,className:Dr(Dt),channelMap:b,consumerMarketing:{position:"article-footer"},shouldEnableFullArticleInverted:Be,ContentWrapper:Mi,contributors:pi,contributorSpotlight:u,showWriterBio:ye,hideContributorBio:v,showContributorSpotlight:qe,showContributor:_e,hideRecircList:w,hasNewsletterWithoutWrapper:yi,isLinkStackEnabled:Er(ne,Ne),isNarrow:Di,isAdRail:ji,licensedPartnerLink:j,linkList:je,magazineDisclaimer:V,newsletter:Cr(ze,_t,Q),recircs:I,recircListElements:_i,dividerColor:ci,related:Ve,recircRelated:D,relatedVideo:_,showNewsletter:wr(re,ui),showHotelRecirc:ee,signageConfig:te,tagCloud:U,shouldEnableVMG:S,cnCoupons:ae,sponsoredProps:zi,hasDynamicDisclaimer:it,shouldShowSeriesNavigationInFooter:kr(Ee,$e),pageBackgroundTheme:di,currentPage:"article",contentFooterContributorTypes:$t,...Pr(K,we)}),n.createElement(fr,{showAgeGate:Y,contentWarnings:c}),n.createElement(Ar,{user:ze}),n.createElement(vr,{enableEnhancedCartoonExperience:wi,intl:Je,sliderData:Ft,showGalleryCartoonPublishedDate:rt}),n.createElement(mt,{pageBackgroundTheme:di,dividerColor:ci,shouldEnableFullArticleInverted:Be,hideSideBySideViewOnMobile:He,isUpcEnabled:ie}),n.createElement(yn,null))};Fr.propTypes={actionBarButtons:o().arrayOf(o().oneOf(["audio","bookmark","comments"])),actionBarLargeScreenVariation:o().oneOf((0,f._)(Kn.A)),actionBarMobileScreenVariation:o().oneOf((0,f._)(Kn.A)),article:o().shape({body:o().array,channelCloudData:o().object,cnCoupons:o().array,documentType:o().string,contributorSpotLightProps:o().object,hasAffiliateLinks:o().boolean,channelMap:o().object,contentWarnings:o().array,customHeading:o().object,disclaimerText:o().string,disclaimerPosition:o().string,hasAffiliateLinkDisabled:o().bool,hasEventBannerHidden:o().bool,hasNewsletterInBody:o().bool,hasTruncationOnMobile:o().bool,headerProps:o().object.isRequired,hideContributorBio:o().bool,hideRecircList:o().bool,hideRecircMostPopular:o().bool,hierarchy:o().array,shouldDisplaySubscribersOnlyBadge:o().bool,id:o().string,interactiveOverride:o().shape({markup:o().string,behavior:o().string}),interlude:o().shape({...T.A.propTypes,isRailEligible:o().boolean}),isAffiliateLinksDisabled:o().bool,hideCommentSection:o().bool,hideActionBar:o().bool,isHeroAdVisible:o().bool.isRequired,isLicensedPartner:o().bool,isLinkStackEnabled:o().bool,isMobileDevice:o().bool,isUpcEnabled:o().bool,lang:o().string,licensedPartnerLink:o().string,lightboxImages:o().array.isRequired,magazineDisclaimer:o().shape({issueDate:o().string.isRequired,issueLink:o().string.isRequired,originalHed:o().string,hasContentDisclaimerTag:o().bool}),midRecircItems:o().array,navigationTheme:o().string,newsletter:o().object,newsletterModules:o().array,paddingTop:o().oneOf(["large"]),pageStructure:o().array,adCount:o().shape({cm:o().number,native:o().number,mid_content:o().number,interlude:o().number}),recircs:o().array,recircMostPopular:o().array,recircRelated:o().array,relatedVideo:o().shape({brand:o().string,related:o().any,useRelatedVideo:o().bool}),relatedAudio:o().object,shouldPrioritizeSeriesPagination:o().bool,shouldShowFooterNewsletter:o().bool,shouldUsePersistentAd:o().bool,shouldEnableVMG:o().bool,showAgeGate:o().bool,showBookmark:o().bool,showBreadcrumbTrail:o().bool,showDisclaimer:o().bool,showHotelRecirc:o().bool,signageConfig:o().object,tagCloud:o().shape({tags:o().arrayOf(o().shape({tag:o().string.isRequired,url:o().string}))})}).isRequired,articleVariationForXlargePaddingTop:o().string,attributes:o().object,beOp:o().shape({accountID:o().string,isEnabled:o().boolean}),cartoonVariation:o().oneOf(["default","card"]),className:o().string,configuredComponentRef:o().func,contentFooterContributorTypes:o().arrayOf(o().string),communityExperience:o().shape({enableCommunityExperience:o().bool,enableArtistQA:o().bool}),componentConfig:o().object,config:o().object,coreDataLayer:o().shape({site:o().object}),dividerColor:o().string,featureFlags:o().object,hasChannelNavigation:o().bool,hasDynamicDisclaimer:o().bool,hasDynamicNewsletterSignup:o().bool,hasLightbox:o().bool,hasLinkbannerCrossSlideAnimation:o().bool,hasNewsletterForABTest:o().bool,hasRecircDriver:o().bool,hasSlideShow:o().bool,headerComponent:o().string,hideNav:o().bool,hideSideBySideViewOnMobile:o().bool,intl:o().object,hideActionBar:o().bool,isActionBarStickyLargeScreen:o().bool,linkList:o().object,metadataVideo:o().shape({isLive:o().bool,premiereDate:o().string,series:o().string,videoLength:o().number,premiereGap:o().number}),minWordCountForMidRecirc:o().number,oneCover:ki.OZ,pageBackgroundTheme:o().string,productCarousel:o().object,qaBannerParagraphIndex:o().number,recircMostPopularVariationOnMobile:o().oneOf((0,f._)(y.A)),related:o().array,responsiveCartoonVariation:o().oneOf((0,f._)(b.A)),reviewerInfoText:o().string,shouldAddToRecentlyViewed:o().bool,shouldEnableArticleBackground:o().bool,shouldEnableFullArticleInverted:o().bool,shouldHideBaseTopPadding:o().bool,shouldHideInlineRecirc:o().bool,shouldHideSeriesNavigation:o().bool,shouldHideSeriesRecirc:o().bool,shouldInheritDropcapColor:o().bool,shouldShowMidArticleRecirc:o().bool,shouldShowSeriesNavigationInFooter:o().bool,showContributor:o().bool,showContributorImageOnMobile:o().bool,showContributorSpotlight:o().bool,showEnhancedTextOverlay:o().bool,showExperimentPlaceholder:o().string,showFirstRailRecirc:o().bool,showGalleryCartoonPublishedDate:o().bool,showIssueDateInArticle:o().bool,showLinkStackInsideContentBody:o().bool,showWriterBio:o().bool,signInHed:o().string,signInHedSpanTag:o().string,signInMessage:o().string,slideShowVariation:o().string,user:o().object,userPlatform:o().object,visualStoryBanner:o().object,xlargePaddingTop:o().string,featuredDeal:o().shape({product:o().object,timestamp:o().string,eventName:o().string,rotationCount:o().number}),puzzlesAndGames:o().shape({wideContent:o().bool})},Fr.displayName="ArticlePage";const Wr=(0,a.M3)((0,m.Ay)(Fr),{keysToPluck:["article","beOp","componentConfig","config","coreDataLayer","featureFlags","linkList","metadataVideo","productCarousel","related","showFirstRailRecirc","user","userPlatform","communityExperience","visualStoryBanner","oneCover","featuredDeal","puzzlesAndGames"]}),Kr=(0,E.y)(Wr,"ArticlePage");var jr=i(51298);const Vr=(0,I.Ay)("div").withConfig({displayName:"PuzzlesAndGamesWrapper"})`
  display: flex;
  position: absolute;
  top: 3.5rem;
  bottom: 0;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    padding-top: 55px;
  }

  .game-container {
    min-height: 400px;
  }

  .puzzles-and-games-game-loader {
    display: flex;
    justify-content: center;
    background: #ffe17d;
    padding-top: 34px;
    height: 100%;
  }

  .puzzles-and-games-progress-wrapper {
    margin: 0 16px;
    border-radius: 100px;
    background: #fffefc;
    width: 100%;
    max-width: 362px;
    height: 8px;
    overflow: hidden;
  }

  .puzzles-and-games-progress-bar {
    transition: width 0.3s ease-in-out;
    animation: shuffalo-loading 6s infinite;
    background: #000;
    width: 1%;
    height: 8px;
  }

  @keyframes shuffalo-loading {
    0% {
      width: 1%;
    }

    50% {
      width: 50%;
    }

    100% {
      width: 100%;
    }
  }

  .page {
    min-height: 100dvh;
  }
`;var Gr=i(53788),Ur=i(56892);const zr=(0,a.z5)("user"),Qr=({user:e,puzzlesAndGames:t})=>{const{game:r,gamesCDNURL:o,stateSyncConfig:a}=t,[l,s]=n.useState(null),[d,c]=n.useState(!0);n.useEffect(()=>{i.e(7800).then(i.bind(i,55929)).then(e=>{s(e),c(!1)}).catch(e=>{c(!1)})},[]);const u=(0,n.useMemo)(()=>{if(!r.gameType)return"#ffe17d";const{gameType:e}=r;switch(e){case"shuffalo":default:return"#ffe17d";case"catalogues":return"#58cf81"}},[r]),h=n.useMemo(()=>{if(!e||!e.amguuid||!e.isAuthenticated)return;const t=(0,Ur.getCookie)(Gr.A.oidcCookies.access)||(0,Ur.getCookie)(Gr.A.authCookieName);return t?{userId:e.amguuid,authToken:t}:void 0},[e]),[m,p]=n.useState({gameType:void 0,theme:{},isLoading:!0,userContext:h,stateSyncConfig:a,options:{game:r,session:void 0,settings:{}}});n.useEffect(()=>{l&&p(e=>({...e,gameType:l.GameType[r.gameType],isLoading:!1,userContext:h,options:{...e.options,game:r,session:JSON.parse(localStorage.getItem(`shuffaloGameSession-${r.id}`)||"null")}}))},[r,a,h,l]);const g=n.createElement("div",{style:{display:"none"},dangerouslySetInnerHTML:{__html:`\x3c!-- #puzzles-and-games-url: ${o}?id=${r.id} --\x3e`}});if(d||!l)return n.createElement(jr.A,{hideFooter:!0},n.createElement(Vr,null,g,n.createElement("div",{className:"puzzles-and-games-game-loader",style:{background:u}},n.createElement("div",{className:"puzzles-and-games-progress-wrapper"},n.createElement("div",{className:"puzzles-and-games-progress-bar"})))));const{GameLoader:b}=l;return n.createElement(jr.A,{hideFooter:!0},n.createElement(Vr,null,g,m.isLoading&&n.createElement("div",{className:"puzzles-and-games-game-loader",style:{background:u}},n.createElement("div",{className:"puzzles-and-games-progress-wrapper"},n.createElement("div",{className:"puzzles-and-games-progress-bar"}))),!m.isLoading&&n.createElement(b,{...m})))};Qr.propTypes={puzzlesAndGames:o().shape({game:o().object.isRequired,gamesCDNURL:o().string.isRequired,seo:o().shape({title:o().string,description:o().string}).isRequired,stateSyncConfig:o().shape({apiBaseUrl:o().string.isRequired,throttleMs:o().number.isRequired}).isRequired}),user:o().shape({isAuthenticated:o().bool,amguuid:o().string})},Qr.displayName="PuzzlesAndGames";const Xr=zr((0,a.M3)(Qr,{keysToPluck:["puzzlesAndGames"]})),Yr=(0,E.y)(Xr,"PuzzlesAndGamesPage"),Jr=e=>{const{puzzlesAndGames:t}=e;return t?.isPuzzlesAndGamesArticle?n.createElement(Yr,null):n.createElement(Kr,null)};Jr.propTypes={puzzlesAndGames:o().shape({isPuzzlesAndGamesArticle:o().bool.isRequired})};const Zr=(0,a.M3)(Jr,{keysToPluck:["puzzlesAndGames"]});(0,i(85195).A)(Zr)},54819(e,t,i){"use strict";function n(e,t){var i=t&&t.cache?t.cache:c,n=t&&t.serializer?t.serializer:s;return(t&&t.strategy?t.strategy:l)(e,{cache:i,serializer:n})}function r(e,t,i,n){var r,o=null==(r=n)||"number"==typeof r||"boolean"==typeof r?n:i(n),a=t.get(o);return void 0===a&&(a=e.call(this,n),t.set(o,a)),a}function o(e,t,i){var n=Array.prototype.slice.call(arguments,3),r=i(n),o=t.get(r);return void 0===o&&(o=e.apply(this,n),t.set(r,o)),o}function a(e,t,i,n,r){return i.bind(t,e,n,r)}function l(e,t){return a(e,this,1===e.length?r:o,t.cache.create(),t.serializer)}i.d(t,{B:()=>n,W:()=>u});var s=function(){return JSON.stringify(arguments)};function d(){this.cache=Object.create(null)}d.prototype.get=function(e){return this.cache[e]},d.prototype.set=function(e,t){this.cache[e]=t};var c={create:function(){return new d}},u={variadic:function(e,t){return a(e,this,o,t.cache.create(),t.serializer)},monadic:function(e,t){return a(e,this,r,t.cache.create(),t.serializer)}}},38221(e,t,i){var n=i(23805),r=i(10124),o=i(99374),a=Math.max,l=Math.min;e.exports=function(e,t,i){var s,d,c,u,h,m,p=0,g=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var i=s,n=d;return s=d=void 0,p=t,u=e.apply(n,i)}function A(e){var i=e-m;return void 0===m||i>=t||i<0||b&&e-p>=c}function v(){var e=r();if(A(e))return C(e);h=setTimeout(v,function(e){var i=t-(e-m);return b?l(i,c-(e-p)):i}(e))}function C(e){return h=void 0,y&&s?f(e):(s=d=void 0,u)}function w(){var e=r(),i=A(e);if(s=arguments,d=this,m=e,i){if(void 0===h)return function(e){return p=e,h=setTimeout(v,t),g?f(e):u}(m);if(b)return clearTimeout(h),h=setTimeout(v,t),f(m)}return void 0===h&&(h=setTimeout(v,t)),u}return t=o(t)||0,n(i)&&(g=!!i.leading,c=(b="maxWait"in i)?a(o(i.maxWait)||0,t):c,y="trailing"in i?!!i.trailing:y),w.cancel=function(){void 0!==h&&clearTimeout(h),p=0,s=m=d=h=void 0},w.flush=function(){return void 0===h?u:C(r())},w}},21020(e,t,i){"use strict";var n=i(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,i){var n,o={},d=null,c=null;for(n in void 0!==i&&(d=""+i),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!s.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:d,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=d,t.jsxs=d}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={id:e,loaded:!1,exports:{}};return o[e].call(i.exports,i,i.exports,l),i.loaded=!0,i.exports}l.m=o,e=[],l.O=(t,i,n,r)=>{if(!i){var o=1/0;for(c=0;c<e.length;c++){for(var[i,n,r]=e[c],a=!0,s=0;s<i.length;s++)(!1&r||o>=r)&&Object.keys(l.O).every(e=>l.O[e](i[s]))?i.splice(s--,1):(a=!1,r<o&&(o=r));if(a){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,n,r]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);l.r(r);var o={};t=t||[null,i({}),i([]),i(i)];for(var a=2&n&&e;("object"==typeof a||"function"==typeof a)&&!~t.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach(t=>o[t]=()=>e[t]);return o.default=()=>e,l.d(r,o),r},l.d=(e,t)=>{for(var i in t)l.o(t,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce((t,i)=>(l.f[i](e,t),t),[])),l.u=e=>"chunk."+(7800===e?"tny-puzzles-and-games":e)+"."+{7800:"45594a3227f3cebb181b",7833:"dc2bfd5835272c54b213"}[e]+".js",l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},r="verso:",l.l=(e,t,i,o)=>{if(n[e])n[e].push(t);else{var a,s;if(void 0!==i)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+i){a=u;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",l.nc&&a.setAttribute("nonce",l.nc),a.setAttribute("data-webpack",r+i),a.src=e),n[e]=[t];var h=(t,i)=>{a.onerror=a.onload=null,clearTimeout(m);var r=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach(e=>e(i)),t)return t(i)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),s&&document.head.appendChild(a)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),l.p="/verso/static/",(()=>{var e={8659:0};l.f.j=(t,i)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var r=new Promise((i,r)=>n=e[t]=[i,r]);i.push(n[2]=r);var o=l.p+l.u(t),a=new Error;l.l(o,i=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}},"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,[o,a,s]=i,d=0;if(o.some(t=>0!==e[t])){for(n in a)l.o(a,n)&&(l.m[n]=a[n]);if(s)var c=s(l)}for(t&&t(i);d<o.length;d++)r=o[d],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(c)},i=globalThis.webpackChunkverso=globalThis.webpackChunkverso||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),l.nc=void 0;var s=l.O(void 0,[9309,5760,1893,4046,3464,1661,1113,4223,6865,7353,8828,130,167,7794,473,2130,702,7853,4891,2482,4084],()=>l(95669));s=l.O(s)})();
"use strict";(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[7853],{86504(e,t,i){i.d(t,{p:()=>n,r:()=>a});var o=i(22509);const n=({subscriptionUrl:e,modalConfig:t,redirectURL:i,action:n})=>{(0,o.Rf)({dangerousHed:t.hed,dangerousDek:t.dek,customCtaLabel:t.customCtaLabel,customCtaUrl:e,signInText:t.signInText,signInLinkText:t.signInLinkText,shouldHideHedSpanTag:!0,redirectURL:i||window.location.href,shouldHideIllustration:!0,shouldOpenCtaInNewTab:!0,isSubscriptionModal:!0,action:n})},a=(e,t)=>!e&&!!t},75454(e,t,i){i.d(t,{AS:()=>n,An:()=>r,cj:()=>l,el:()=>s,i3:()=>a});var o=i(14307);const n=(e,t,i)=>{const n={type:"impression",label:"Comments",subject:t,features_list:[{name:"comments",total_index:e}]};i&&(n.placement=i),(0,o.Uw)(n)},a=e=>e?{placement:"pinned_comments"}:{},r=e=>e?"true":"false",l=(e,t="click")=>{const i={type:t,label:e.label,subject:e.subject,paywall_source:e.source,placement:e.placement,state:e.state,is_exceeded:e.is_exceeded};(0,o.ZL)(i)},s=e=>{try{return new URL(e,window.location.origin).searchParams.get("source")}catch(e){return null}}},92867(e,t,i){i.d(t,{A:()=>o});const o=(0,i(72267).YK)({utilityLabel:{id:"ReviewListContainer.UtilityLabel",defaultMessage:"Back to top",description:"Utility label for review list container"},SavedCommentMsgTitle:{id:"Commenting.SavedCommentMsgTitle",defaultMessage:"Comment submitted",description:"Text for the MessageBanner title",isConfigurable:!0},SavedCommentDek:{id:"Commenting.SavedCommentDek",defaultMessage:"Comments are moderated in line with our",description:"Text for the MessageBanner body",isConfigurable:!0},CommunityGuidelines:{id:"Commenting.CommunityGuidelines",defaultMessage:"Community Guidelines",description:"Text for the community guidelines link",isConfigurable:!0},SavedCommentDekTrail:{id:"Commenting.SavedCommentDekTrail",defaultMessage:"before being added.",description:"Text for the MessageBanner body",isConfigurable:!0},SavedCommentSubContent:{id:"Commenting.SavedCommentSubContent",defaultMessage:"Thank you for contributing your thoughts.",description:"Text for the MessageBanner sub content",isConfigurable:!0},likeActionErrorMessage:{id:"Commenting.LikeActionErrorMessage",defaultMessage:"Unable to like this comment. Please try again.",description:"Error message to display while like action fails"},unlikeActionErrorMessage:{id:"Commenting.UnlikeActionErrorMessage",defaultMessage:"Unable to unlike this comment. Please try again.",description:"Error message to display while unlike action fails"},signInModalHed:{id:"Commenting.signInModalHed",defaultMessage:"Sign in to join the",description:"Hed for commenting sign in modal"},signInModalHedSpanTag:{id:"Commenting.signInModalHedSpanTag",defaultMessage:"{brandName} community",description:"Hed span for commenting sign in modal"},signInModalMessage:{id:"Commenting.signInModalMessage",defaultMessage:"Once you're signed in, add your comments and like or reply to others.",description:"Message for commenting sign in modal"},replyDiscardModalHed:{id:"Commenting.replyDiscardModalHed",defaultMessage:"Discard this reply?",description:"Hed for discard reply modal"},closeCommentStreamMessage:{id:"Commenting.closeCommentStreamMessage",defaultMessage:"Comments are closed on this story but you can still browse or upvote them.",description:"Hed for discard reply modal"},emptyCommentMsgHed:{id:"Commenting.emptyCommentMsgHed",defaultMessage:"There aren’t any comments yet.",description:"Hed for empty comments"},emptyCommentMsgDek:{id:"Commenting.emptyCommentMsgDek",defaultMessage:"Add the first to start the conversation.",description:"Dek for empty comments"},signInButtonLabel:{id:"Commenting.signInButtonLabel",defaultMessage:"Sign in or create account",description:"Text for the sign in or create account button"},subscribeButtonLabel:{id:"Commenting.subscribeButtonLabel",defaultMessage:"Subscribe",description:"Text for the subscribe button in dual CTA layout"},alreadySubscriberLabel:{id:"Commenting.alreadySubscriberLabel",defaultMessage:"Already a subscriber?",description:"Text for the secondary sign in link (will not be underlined)"},signInLabel:{id:"Commenting.orSignInLabel",defaultMessage:"sign in",description:"Text for the secondary sign in link (will be underlined)"},signOutEmptyCommentMsgDek:{id:"Commenting.signOutEmptyCommentMsgDek",defaultMessage:"Be the first to start the conversation!<br/> You need an account to add or like comments.",description:"Dek for empty comments for signed out users"},signUpMessageBannerHed:{id:"Commenting.signUpMessageBannerHed",defaultMessage:"Join the {brandName} community to add comments.",description:"Text for signout heading"},saveStory:{id:"Commenting.saveStory",defaultMessage:"Save story",description:"Label for the bookmark icon in commenting section"},pinnedReviewLabel:{id:"ReviewList.pinnedReviewLabel",defaultMessage:"Featured by",description:"Featured by label"},qaReviewLabel:{id:"ReviewList.qaReviewLabel",defaultMessage:"Q&A with",description:"Q&A label"},qaBannerTitle:{id:"Commenting.qaBannerTitle",defaultMessage:"Have a question we missed asking?",description:"Title for QA banner"},qaBannerDek:{id:"Commenting.qaBannerDescription",defaultMessage:"Join the live Q&A",description:"Description for QA banner"},guidelinesLinkText:{id:"Commenting.guidelinesLinkText",defaultMessage:"guidelines.",description:"Text for the guidelines link"}})},57886(e,t,i){i.d(t,{A:()=>T});var o=i(5556),n=i.n(o),a=i(96540),r=i(6442),l=i(76399);const s=(0,i(72267).YK)({closeButtonAriaLabel:{id:"ReviewNoteModal.CloseButtonAriaLabel",defaultMessage:"Close ReviewNoteModal Modal",description:"ReviewNoteModal component close button aria label"},closeButtonLabel:{id:"ReviewNoteModal.CloseButtonLabel",defaultMessage:"close modal button label",description:"ReviewNoteModal component close button label"},continueLabel:{id:"ReviewNoteModal.continueLabel",defaultMessage:"No, still writing",description:"ReviewNoteModal component continue button text",isConfigurable:!0},dek:{id:"ReviewNoteModal.dek",defaultMessage:"Everything you've written will be lost",description:"ReviewNoteModal component dek text",isConfigurable:!0},discardLabel:{id:"ReviewNoteModal.discardLabel",defaultMessage:"Yes, discard it",description:"ReviewNoteModal discard button text",isConfigurable:!0},hed:{id:"ReviewNoteModal.Hed",defaultMessage:"Discard this comment?",description:"ReviewNoteModal component hed text",isConfigurable:!0}});var d=i(13465),c=i(53499),u=i(20312),p=i.n(u),m=i(38267),g=i(18608),h=i(26865),y=i(96472),b=i(73730),f=i(50531);const R=(0,m.Ay)(g.vm).withConfig({displayName:"ReviewNoteModalHed"}).attrs(e=>({as:"div",colorToken:"colors.interactive.base.brand-primary",topSpacing:1,typeIdentity:"typography.definitions.consumptionEditorial.display-large",...e}))`
  margin-top: ${(0,h.Kq)(0)};
  padding: ${(0,h.Kq)(2.5)} ${(0,h.Kq)(1.25)};
  text-align: center;
`,w=m.Ay.p.withConfig({displayName:"ReviewNoteModalDek"})`
  ${(0,h.Gg)("typography.definitions.consumptionEditorial.body-core")}
  margin-top: ${(0,h.Kq)(0)};
  margin-bottom: ${(0,h.Kq)(5)};
  text-align: center;
  color: ${(0,h.HK)("colors.consumption.body.standard.body")};
  @media (max-width: ${y.LO.md}) {
    margin-bottom: ${(0,h.Kq)(5)};
  }
`,A=(0,m.Ay)(b.A.Utility).withConfig({displayName:"ReviewNoteModalButtonPrimary"})`
  position: absolute;
  top: ${(0,h.Kq)(1)};
  right: ${(0,h.Kq)(1)};
  padding: 0;
  fill: ${(0,h.HK)("colors.interactive.base.black")};

  .icon-close {
    padding: 6px;
  }

  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
  }
  width: 42px;
  height: 42px;
`,C=(0,m.Ay)(b.A.Primary).withConfig({displayName:"ReviewNoteModalContinueButton"})`
  display: flex;
  justify-content: center;
  margin-bottom: ${(0,h.Kq)(1)};
  padding: ${(0,h.Kq)(2)} ${(0,h.Kq)(0)};
  width: 100%;
  ${f.Lj} {
    padding: 0 ${(0,h.Kq)(2.5)};
  }
`,v=(0,m.Ay)(b.A.Primary).withConfig({displayName:"ReviewNoteDiscardSection"})`
  display: flex;
  justify-content: center;
  padding: 17px ${(0,h.Kq)(0)};
  width: 100%;
  text-decoration: underline;
  ${f.Lj} {
    padding: 0 ${(0,h.Kq)(2.5)};
  }
`;function E({className:e,...t}){const i=`${e}__content`,o=`${e}__overlay`;return a.createElement(p(),{portalClassName:e,className:i,overlayClassName:o,...t,ref:t.configuredComponentRef})}E.propTypes={className:n().string,configuredComponentRef:n().func};const L=(0,m.Ay)(E).withConfig({displayName:"ReviewNoteModalBaseWrapper"})`
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${y.KV.interstitialLayer};

    background-color: rgba(
      ${(0,h.HK)("colors.background.black",{rgbOnly:!0})},
      0
    );

    &.ReactModal__Overlay--after-open {
      transition: background-color 500ms;
      opacity: 1;
      background-color: rgba(
        ${(0,h.HK)("colors.background.black",{rgbOnly:!0})},
        0.4
      );
    }

    &.ReactModal__Overlay--after-close {
      transition: background-color 500ms;
      background-color: rgba(
        ${(0,h.HK)("colors.background.black",{rgbOnly:!0})},
        0
      );
    }
  }

  &__content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border-radius: ${(0,h.Kq)(1)};
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);
    background-color: ${(0,h.HK)("colors.background.white")};
    padding: ${(0,h.Kq)(6)} ${(0,h.Kq)(5)}
      ${(0,h.Kq)(5)} ${(0,h.Kq)(5)};
    width: ${(0,h.Kq)(57)};
    height: 368px;
    overflow-y: auto;
    @media (max-width: ${y.LO.md}) {
      transform: translateY(-50%)
        translateX(calc(-50% - ${(0,h.Kq)(2,"px")}));

      margin: 0 ${(0,h.Kq)(2,"px")};
      padding: ${(0,h.Kq)(4)} ${(0,h.Kq)(5)}
        ${(0,h.Kq)(4)} ${(0,h.Kq)(5)};
      width: auto;
      min-width: ${(0,h.Kq)(38)};
      max-width: ${(0,h.Kq)(60)};
    }
  }
`,M=({className:e,configuredComponentRef:t,modalProps:{hed:i,dek:o,continueLabel:n,discardLabel:d}={},confirmButtonCallback:u,onClose:p,isVisible:m=!1})=>{a.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(c.G.RENDER,{name:"ReviewNoteSubmitModal"})},[]);const g=()=>{p()},{formatMessage:h}=(0,r.A)();return a.createElement(L,{configuredComponentRef:t,className:e,closeTimeoutMS:200,isOpen:m},a.createElement(A,{isIconButton:!0,ariaLabel:h(s.closeButtonAriaLabel),label:h(s.closeButtonLabel),onClickHandler:g,role:"button",ButtonIcon:l.A}),a.createElement(R,null,i||h(s.hed)),a.createElement(w,null,o||h(s.dek)),a.createElement(C,{label:n||h(s.continueLabel),onClickHandler:g}),a.createElement(v,{onClickHandler:u,label:d||h(s.discardLabel),btnStyle:"text",inputKind:"link"}))};M.propTypes={configuredComponentRef:n().func,className:n().string,confirmButtonCallback:n().func,isVisible:n().bool,modalProps:n().object,onClose:n().func},M.displayName="ReviewNoteModal";const T=(0,d.y)(M,"ReviewNoteModal")},79301(e,t,i){i.d(t,{A:()=>u});var o=i(96540),n=i(6442),a=i(5556),r=i.n(a),l=i(32485),s=i.n(l),d=i(68766);const c=e=>{const{formatMessage:t}=(0,n.A)(),{className:i}=e;return o.createElement("svg",{className:s()(i,"icon icon-loader"),width:"32",height:"32",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("title",null,t(d.A.loader)),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.2984 12.6411C20.4141 9.82282 15.7913 9.87628 12.9731 12.7605L12.0648 11.873C15.3732 8.48721 20.8 8.42444 24.1858 11.7329C27.5717 15.0413 27.6344 20.468 24.326 23.8539L23.4178 22.9664C26.2361 20.0822 26.1826 15.4594 23.2984 12.6411Z",fill:"url(#paint0_linear_503_154)"}),o.createElement("defs",null,o.createElement("linearGradient",{id:"paint0_linear_503_154",x1:"24.5143",y1:"22.6285",x2:"23.8286",y2:"23.4857",gradientUnits:"userSpaceOnUse"},o.createElement("stop",null),o.createElement("stop",{offset:"1",stopOpacity:"0"}))),o.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 0 0",to:"360 0 0",repeatCount:"indefinite"}))};c.propTypes={className:r().string};const u=c},24695(e,t,i){i.r(t),i.d(t,{Account:()=>o.A,AgeGate:()=>n.A,Arrow:()=>a.A,ArrowOut:()=>r.A,Article:()=>l.A,BadgeArtist:()=>s.A,BadgeDayOne:()=>d.A,BadgeStaff:()=>c.A,BlueSky:()=>g.A,Bookmark:()=>u.A,BookmarkActivated:()=>p.A,BookmarkNew:()=>m.A,CartFilled:()=>h.A,CartOutlined:()=>y.A,Check:()=>b.A,ChevronDown:()=>C.A,ChevronFill:()=>R.A,ChevronLeft:()=>w.A,ChevronRight:()=>f.A,ChevronUp:()=>A.A,Close:()=>v.A,Collapse:()=>E.A,Comment:()=>L.A,CopyLink:()=>M.A,Dot:()=>T.A,DownloadCloud:()=>k.A,DownloadWeb:()=>I.A,Email:()=>U.A,EmailFilled:()=>S.A,Enlarge:()=>N.A,Expand:()=>x.A,Facebook:()=>B.A,Filmstrip:()=>$.A,Flipboard:()=>_.A,Gallery:()=>H.A,GoogleNews:()=>P.A,Grid:()=>D.A,Headphone:()=>F.A,Information:()=>K.A,Instagram:()=>O.A,LargeChevron:()=>q.A,LeftChevron:()=>ze.A,Like:()=>j.A,LikeFilled:()=>Y.A,Line:()=>G.A,LinkedIn:()=>W.A,List:()=>J.A,LocationPin:()=>z.A,Maximize:()=>X.A,Menu:()=>Z.A,NativeShare:()=>Q.A,Newsletter:()=>ee.A,NewsletterArrow:()=>te.A,OK:()=>ie.A,Paperclip:()=>oe.A,Passkey:()=>ce.A,Pause:()=>ne.A,PhotoStack:()=>ae.A,Pinterest:()=>re.A,PitchforkUpvote:()=>le.A,PitchforkUpvoteFilled:()=>se.A,Play:()=>de.A,PlayOutlined:()=>pe.A,Playlist:()=>ue.A,Print:()=>me.A,RatingFilled:()=>ge.A,RatingHalf:()=>he.A,RatingOutlined:()=>ye.A,Replay:()=>be.A,Rss:()=>fe.A,Search:()=>Re.A,Share:()=>we.A,Shopping:()=>Ae.A,SlimHeadphone:()=>Ce.A,Snapchat:()=>ve.A,SocialHandle:()=>Ee.A,SplitView:()=>Me.A,Spotify:()=>Le.A,Star:()=>Te.A,Subscribe:()=>Xe.A,Telegram:()=>ke.A,Threads:()=>Ie.A,Tiktok:()=>Ue.A,Timestamp:()=>Se.A,Triangle:()=>Ne.A,TriangleDown:()=>xe.A,TriangleUp:()=>Be.A,Tumblr:()=>$e.A,Twitter:()=>_e.A,VK:()=>qe.A,VerificationBadge:()=>He.A,Vero:()=>Pe.A,Viber:()=>De.A,Video:()=>Fe.A,VolumeHigh:()=>Ke.A,VolumeMute:()=>Oe.A,WeChat:()=>Ve.A,Weibo:()=>je.A,Whatsapp:()=>Ye.A,Xing:()=>Ge.A,YandexZen:()=>We.A,YouTube:()=>Je.A,default:()=>Ze});var o=i(63104),n=i(83383),a=i(4262),r=i(25116),l=i(87793),s=i(95599),d=i(28538),c=i(44760),u=i(70931),p=i(64736),m=i(42605),g=i(72942),h=i(80809),y=i(19751),b=i(18635),f=i(69880),R=i(38537),w=i(9137),A=i(47749),C=i(19328),v=i(76399),E=i(73672),L=i(28650),M=i(19310),T=i(30408),k=i(7742),I=i(20821),U=i(43403),S=i(68579),N=i(28717),x=i(93467),B=i(23871),$=i(85803),_=i(76702),H=i(20381),P=i(25727),D=i(36355),F=i(43657),K=i(25965),O=i(25855),q=i(82281),V=i(63208),j=i(50716),Y=i(27404),G=i(35105),W=i(22921),J=i(25963),z=i(78477),X=i(32209),Z=i(26488),Q=i(67977),ee=i(55020),te=i(66491),ie=i(32313),oe=i(19775),ne=i(57561),ae=i(26407),re=i(16401),le=i(99576),se=i(12256),de=i(69433),ce=i(23971),ue=i(65469),pe=i(77067),me=i(19368),ge=i(60614),he=i(60703),ye=i(85348),be=i(39184),fe=i(42223),Re=i(73767),we=i(44244),Ae=i(61599),Ce=i(8550),ve=i(37193),Ee=i(50762),Le=i(71369),Me=i(29246),Te=i(7171),ke=i(75260),Ie=i(92550),Ue=i(97057),Se=i(49811),Ne=i(91583),xe=i(84979),Be=i(1846),$e=i(10537),_e=i(98152),He=i(70417),Pe=i(56765),De=i(78041),Fe=i(62524),Ke=i(82785),Oe=i(3052),qe=i(98276),Ve=i(6133),je=i(97575),Ye=i(69301),Ge=i(26835),We=i(34013),Je=i(55166),ze=i(66191),Xe=i(77035);const Ze={Account:o.A,AgeGate:n.A,Arrow:a.A,ArrowOut:r.A,Article:l.A,BadgeArtist:s.A,BadgeDayOne:d.A,BadgeStaff:c.A,Bookmark:u.A,BookmarkActivated:p.A,BookmarkNew:m.A,BlueSky:g.A,CartFilled:h.A,CartOutlined:y.A,Check:b.A,ChevronRight:f.A,ChevronFill:R.A,ChevronLeft:w.A,ChevronUp:A.A,ChevronDown:C.A,Close:v.A,Collapse:E.A,Comment:L.A,CopyLink:M.A,Dot:T.A,DownloadCloud:k.A,DownloadWeb:I.A,Email:U.A,EmailFilled:S.A,Enlarge:N.A,Expand:x.A,Facebook:B.A,Filmstrip:$.A,Flipboard:_.A,Gallery:H.A,GoogleNews:P.A,Grid:D.A,Headphone:F.A,Information:K.A,Instagram:O.A,LargeChevron:q.A,LeftChevron:ze.A,Like:j.A,LikeFilled:Y.A,Line:G.A,LinkedIn:W.A,List:J.A,Lock:V.A,LocationPin:z.A,Maximize:X.A,Menu:Z.A,NativeShare:Q.A,Newsletter:ee.A,NewsletterArrow:te.A,OK:ie.A,Paperclip:oe.A,Pause:ne.A,PhotoStack:ae.A,Pinterest:re.A,PitchforkUpvote:le.A,PitchforkUpvoteFilled:se.A,Play:de.A,Passkey:ce.A,Playlist:ue.A,PlayOutlined:pe.A,Print:me.A,RatingFilled:ge.A,RatingHalf:he.A,RatingOutlined:ye.A,Replay:be.A,Rss:fe.A,Search:Re.A,Share:we.A,Shopping:Ae.A,SlimHeadphone:Ce.A,Snapchat:ve.A,SocialHandle:Ee.A,Spotify:Le.A,SplitView:Me.A,Star:Te.A,Subscribe:Xe.A,Telegram:ke.A,Threads:Ie.A,Tiktok:Ue.A,Timestamp:Se.A,Triangle:Ne.A,TriangleDown:xe.A,TriangleUp:Be.A,Tumblr:$e.A,Twitter:_e.A,VerificationBadge:He.A,Vero:Pe.A,Viber:De.A,Video:Fe.A,VolumeHigh:Ke.A,VolumeMute:Oe.A,VK:qe.A,WeChat:Ve.A,Weibo:je.A,Whatsapp:Ye.A,Xing:Ge.A,YandexZen:We.A,YouTube:Je.A}},40381(e,t,i){i.d(t,{A:()=>R});var o=i(13465),n=i(57744),a=i(5556),r=i.n(a),l=i(96540),s=i(44741),d=i(53499);var c=i(57743),u=i(56892),p=i(53788);const m=async(e,t={})=>{if(!e)return null;try{const i=await(async e=>{const{file:t,brand:i,product:o,expirationDate:n,pixVaultUrl:a}=e;try{const e=`${a}/upload`,r=(0,u.getCookie)(p.A.oidcCookies.access);if(!r)throw new Error("Authentication token not found");const l=new FormData;l.append("files",t),l.append("brand",i),l.append("product",o),n&&l.append("expirationDate",n);const s=await(0,c.u)(e,{body:l,method:"POST",headers:{Authorization:`Bearer ${r}`}},18e4);if(!s.ok){const e=await s.json();throw new Error(e.message||`Server responded with status: ${s.status}`)}return await s.json()}catch(e){throw e}})({file:e,...t});return i}catch(e){throw e}};var g=i(32272);const h=["image/jpeg","image/png","image/jpg"],y=({allowedExtensions:e=h,brand:t,buttonText:i="Upload Image",configuredComponentRef:o,expirationDate:n,id:a="image-upload",imageUpload:{brandSlug:r,pixVaultUrl:c}={},maxFileSize:u=30,minFileSize:p=.1,onFileChange:y,onUploadStatusChange:b,placeholderImage:f='<svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_6632_146663)">\n<rect x="1.5" y="1.5" width="79" height="79" stroke="white"/>\n<path d="M48.3724 32.5001C48.3508 32.5005 48.3291 32.5021 48.3076 32.5047C48.1567 32.5223 48.0177 32.5941 47.9173 32.7066C47.817 32.819 47.7624 32.964 47.764 33.1137V34.9411H45.9169C45.8993 34.9404 45.8816 34.9404 45.8639 34.9411C45.7063 34.9552 45.5602 35.0285 45.456 35.1459C45.3518 35.2633 45.2974 35.4157 45.3043 35.5716C45.3111 35.7274 45.3785 35.8747 45.4926 35.9828C45.6067 36.0909 45.7586 36.1516 45.9169 36.1523H47.764V37.9702C47.7634 38.0506 47.7789 38.1302 47.8097 38.2046C47.8405 38.279 47.886 38.3468 47.9434 38.4038C48.0009 38.4608 48.0692 38.5062 48.1445 38.5371C48.2198 38.5679 48.3006 38.5838 48.3821 38.5838C48.4637 38.5838 48.5444 38.5679 48.6197 38.5371C48.695 38.5062 48.7633 38.4608 48.8208 38.4038C48.8783 38.3468 48.9237 38.279 48.9545 38.2046C48.9853 38.1302 49.0008 38.0506 49.0002 37.9702V36.1523H50.8449C50.9289 36.1576 51.0131 36.1459 51.0924 36.1179C51.1716 36.0898 51.2441 36.046 51.3055 35.9892C51.3669 35.9325 51.4158 35.8639 51.4493 35.7878C51.4827 35.7117 51.5 35.6296 51.5 35.5466C51.5 35.4637 51.4827 35.3817 51.4493 35.3056C51.4158 35.2295 51.3669 35.1608 51.3055 35.1041C51.2441 35.0473 51.1716 35.0036 51.0924 34.9756C51.0131 34.9475 50.9289 34.9359 50.8449 34.9411H49.0002V33.1137C49.0012 33.0325 48.9856 32.9519 48.9543 32.8766C48.9231 32.8014 48.8768 32.7332 48.8182 32.6759C48.7597 32.6187 48.69 32.5736 48.6135 32.5434C48.5369 32.5131 48.4549 32.4985 48.3724 32.5001ZM44.7672 32.5138C44.7448 32.5134 44.7223 32.5142 44.6999 32.5162H41.7536C41.4904 32.5162 41.2235 32.5159 40.9624 32.5162C40.6464 32.5159 40.3626 32.5162 40.046 32.5162C39.4396 32.5162 38.9299 32.5072 38.4274 32.6159C37.9249 32.7237 37.4484 32.9703 37.0276 33.3861C37.0243 33.3891 37.021 33.3921 37.0178 33.3952C36.6389 33.7759 36.288 34.2047 35.9716 34.514C35.6552 34.8231 35.3925 34.9428 35.3463 34.9428H32.9989C31.6379 34.9428 30.5 36.0247 30.5 37.3722V47.0541C30.5 48.4016 31.6316 49.4965 32.9989 49.5H40.9814H48.9614C50.3307 49.5 51.4627 48.4016 51.4627 47.0541V38.3913C51.4633 38.311 51.4478 38.2312 51.417 38.1568C51.3862 38.0823 51.3408 38.0148 51.2833 37.9577C51.2258 37.9007 51.1575 37.8554 51.0822 37.8245C51.0069 37.7936 50.9262 37.7777 50.8446 37.7777C50.7631 37.7777 50.6823 37.7936 50.607 37.8245C50.5317 37.8554 50.4634 37.9007 50.4059 37.9577C50.3485 38.0148 50.303 38.0823 50.2722 38.1568C50.2415 38.2312 50.2259 38.311 50.2265 38.3913V47.0541C50.2265 47.7458 49.6734 48.2912 48.9614 48.2912H40.9816H32.9991C32.2853 48.2894 31.7365 47.7458 31.7365 47.0541V37.3721C31.7365 36.6803 32.279 36.1538 32.9991 36.1538H35.3465C36.0047 36.1538 36.454 35.7563 36.8449 35.3742C37.2358 34.9922 37.5869 34.5613 37.9007 34.2459C38.1843 33.9657 38.3796 33.862 38.6896 33.7955C38.9996 33.729 39.4396 33.7246 40.046 33.7246C40.3636 33.7246 40.6482 33.7242 40.9624 33.7246C41.2219 33.7243 41.4898 33.7245 41.7537 33.7246C41.8267 33.7246 44.6448 33.7246 44.6999 33.7246C44.7821 33.7317 44.865 33.7223 44.9436 33.6973C45.0221 33.6722 45.0947 33.6319 45.1571 33.5786C45.2195 33.5253 45.2704 33.4602 45.3067 33.3871C45.3431 33.314 45.3641 33.2345 45.3687 33.1532C45.3732 33.072 45.3611 32.9907 45.333 32.9141C45.305 32.8376 45.2617 32.7674 45.2056 32.7077C45.1495 32.648 45.0817 32.6 45.0064 32.5666C44.9311 32.5332 44.8498 32.5156 44.7672 32.5138ZM41.0009 38.5814C39.308 38.5814 37.9272 39.9492 37.9272 41.6175C37.9272 43.2857 39.308 44.6465 41.0009 44.6465C42.6938 44.6465 44.0818 43.2857 44.0818 41.6175C44.0818 39.9492 42.6938 38.5814 41.0009 38.5814ZM41.0009 39.7996C42.0283 39.7996 42.8552 40.605 42.8552 41.6175C42.8552 42.6299 42.0283 43.4354 41.0009 43.4354C39.9735 43.4354 39.1538 42.6299 39.1538 41.6175C39.1538 40.605 39.9735 39.7996 41.0009 39.7996Z" fill="#333333"/>\n</g>\n<rect x="0.5" y="0.5" width="81" height="81" rx="4.5" stroke="#C9C9C9"/>\n<defs>\n<clipPath id="clip0_6632_146663">\n<rect x="1" y="1" width="80" height="80" rx="4" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n',product:R})=>{l.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(d.G.RENDER,{name:"ImageUpload"})},[]);const[w,A]=(0,l.useState)(f),[C,v]=(0,l.useState)({width:0,height:0}),[E,L]=(0,l.useState)(!1),M=(0,l.useRef)(null),T=(0,l.useRef)(null),k=w&&w!==f&&w.startsWith("blob:");(0,l.useEffect)(()=>{if(T.current){const e=T.current.querySelector("svg");if(e){const{width:t,height:i}=e.getBoundingClientRect();v({width:t,height:i})}}},[f]),(0,l.useEffect)(()=>()=>{k&&URL.revokeObjectURL(w)},[w,f,k]);return l.createElement(s.ef,{ref:o,iconWidth:C.width,iconHeight:C.height},l.createElement("form",{onSubmit:e=>{e.preventDefault(),M.current.click()},id:`${a}-form`},l.createElement("label",{htmlFor:a,className:"upload-container","aria-label":i},l.createElement("div",{className:"upload-content"},!E&&w!==f&&l.createElement(s.tG,null,l.createElement("img",{src:w,alt:i})),E&&l.createElement(s.p8,{isUploading:E},l.createElement(s.hl,null,l.createElement(g.A,{className:"image-upload-loader"}))),!E&&w===f&&l.createElement("div",{className:"placeholder-icon",dangerouslySetInnerHTML:{__html:w},ref:T}))),l.createElement("input",{type:"file",accept:e,onChange:async()=>{const i=M.current.files[0];if(i){const a=(e=>{const t=e.size/1048576;return!(t<p||t>u)})(i),l=(o=i,!!e.includes(o.type));if(!a||!l)return void(M.current.value="");if(y){L(!0),b&&b(!0);try{const e=t||r,o=R||"test",a=await m(i,{brand:e,product:o,expirationDate:n,pixVaultUrl:c});if(k&&URL.revokeObjectURL(w),200===a?.statusCode&&a?.data?.[0]?.encodedURI){const e=URL.createObjectURL(i);A(e)}y(a)}catch(e){}finally{L(!1),b&&b(!1)}}}var o},ref:M,hidden:!0,id:a,name:a,disabled:E})))};y.propTypes={configuredComponentRef:r().func,allowedExtensions:r().arrayOf(r().string),brand:r().string,buttonText:r().string,expirationDate:r().string,id:r().string,imageUpload:r().shape({pixVaultUrl:r().string,brandSlug:r().string,product:r().string,userAgentValue:r().string}),maxFileSize:r().number,minFileSize:r().number,onFileChange:r().func,onUploadStatusChange:r().func,placeholderImage:r().string,product:r().string};const b=y,f=(0,n.M3)(b,{keysToPluck:["imageUpload"]}),R=(0,o.y)(f,"ImageUpload")},44741(e,t,i){i.d(t,{ef:()=>a,hl:()=>s,p8:()=>l,tG:()=>r});var o=i(38267),n=i(26865);const a=o.Ay.div.withConfig({displayName:"ImageUploadWrapper"})`
  --icon-width: ${({iconWidth:e})=>e?`${e}px`:(0,n.Kq)(10)};
  --icon-height: ${({iconHeight:e})=>e?`${e}px`:(0,n.Kq)(10)};

  .upload-container {
    cursor: pointer;
  }

  .upload-content {
    position: relative;
    width: var(--icon-width);
    height: var(--icon-height);
  }
`,r=o.Ay.div.withConfig({displayName:"UploadedImageContainer"})`
  width: var(--icon-width);
  height: var(--icon-height);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,l=o.Ay.div.withConfig({displayName:"LoadingOverlay"})`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  inset: 0;
  pointer-events: none;
  ${({isUploading:e})=>e&&"\n    opacity: 1;\n    pointer-events: auto;\n    "}

  .image-upload-loader {
    width: ${(0,n.Kq)(4)};
    height: ${(0,n.Kq)(4)};
  }
`,s=o.Ay.div.withConfig({displayName:"LoadingOutline"})`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(0,n.Kq)(.125)} solid
    ${({theme:e})=>(0,n.HK)(e,"colors.interactive.base.black")};
  border-radius: ${(0,n.Kq)(.5)};
  width: var(--icon-width);
  height: var(--icon-height);
`},60179(e,t,i){i.d(t,{A:()=>Ee});var o=i(5556),n=i.n(o),a=i(96540),r=i(6442),l=i(53499),s=i(21093),d=i(7285),c=i(72267);const u=(0,c.YK)({ReviewReplyLabel:{id:"ReviewReplyNote.ReviewReplyLabel",defaultMessage:"Replying to:",description:"The label for the reply note field"},ReplyFieldPlaceHolder:{id:"ReviewReplyNote.ReplyFieldPlaceHolder",defaultMessage:"Add your reply here...",description:"The placeholder for the reply note text field"},ReplyButtonLabel:{id:"ReviewReplyNote.ReplyButtonLabel",defaultMessage:"Reply",description:"The label for the reply button"},CancelButtonLabel:{id:"ReviewReplyNote.CancelButtonLabel",defaultMessage:"Discard",description:"The label for the cancel button"},ReplyTextFieldLabel:{id:"ReviewReplyNote.ReplyTextFieldLabel",defaultMessage:"Your Reply",description:"The label for the reply text field"},AddReplySuccessToastMessage:{id:"ReviewReplyNote.AddReplySuccessToastMessage",defaultMessage:"Reply added",description:"Success message to show on reply save"},AddReplyFailedToastMessage:{id:"ReviewReplyNote.AddReplyFailedToastMessage",defaultMessage:"Unable to add your reply. Please try again.",description:"Failure message to show on reply save"},ReviewFieldAlertLimitErrorText:{id:"ReviewReplyNote.ReviewFieldAlertLimitErrorText",defaultMessage:"_CHARACTER_LIMIT_CURRENT_ of _CHARACTER_LIMIT_ character limit remaining.",description:"The error message for the review field alert limit"},ReviewFieldMaxLimitErrorText:{id:"ReviewReplyNote.ReviewFieldMaxLimitErrorText",defaultMessage:"_CHARACTER_LIMIT_ character limit met.",description:"The error message for the review field max limit"},ReviewFieldMinLimitErrorText:{id:"ReviewReplyNote.ReviewFieldMinLimitErrorText",defaultMessage:"Enter 2 characters or more to add a reply.",description:"The error message for the review field min limit"}});var p=i(60711),m=i(75454),g=i(38267),h=i(26865),y=i(73730),b=i(18608),f=i(96472),R=i(72081),w=i(44741);const A=(0,g.Ay)(b.vm).withConfig({displayName:"ReviewReplyUsername"})`
  ${({theme:e})=>(0,h._o)(e,"color","colors.consumption.body.standard.body")};
  ${({theme:e})=>(0,h.Gg)(e,"typography.definitions.globalEditorial.accreditation-core")};
  padding-left: ${(0,h.Kq)(.5)};
`,C=g.Ay.div.withConfig({displayName:"ReviewReplyNoteWrapper"})`
  border: 1px solid ${(0,h.HK)("colors.foundation.menu.dividers")};
  padding: ${(0,h.Kq)(3)};
  gap: ${(0,h.Kq)(1.5)};
  ${(0,h.L7)(f.LO.md)} {
    margin-top: ${(0,h.Kq)(1.25)};
  }
`,v=(0,g.Ay)(y.A.Primary).withConfig({displayName:"ReviewReplyCancelLink"})`
  margin-top: ${(0,h.Kq)(1.25)};
  width: 100%;
  ${(0,h.Gg)("typography.definitions.utility.button-core")}
  text-decoration: underline;
  ${({theme:e})=>(0,h._o)(e,"color","colors.interactive.base.brand-primary")};
`,E=(0,g.Ay)(R.A.MultiLine).withConfig({displayName:"ReviewReplyMultilineTextField"})`
  ${(0,h.Gg)("typography.definitions.utility.input-core")}
  ${({theme:e})=>(0,h._o)(e,"color","colors.interactive.base.light")};
`,L=g.Ay.span.withConfig({displayName:"ReviewReplyLabel"})`
  ${({theme:e})=>(0,h._o)(e,"color","colors.consumption.body.standard.body-deemphasized")};
  ${({theme:e})=>(0,h.Gg)(e,"typography.definitions.globalEditorial.accreditation-core")};
`,M=g.Ay.div.withConfig({displayName:"ReviewReplyNoteInfo"})`
  display: flex;
`,T=(0,g.Ay)(y.A.Primary).withConfig({displayName:"ReviewReplyButton"})`
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 20px;
  padding: 15px 9px;
  width: 100%;
  max-width: 100%;
  height: unset;
  text-align: center;

  &:active::before {
    top: 0;
    left: 0;
  }
`,k=g.Ay.div.withConfig({displayName:"ReviewReplyButtonWrapper"})`
  ${(0,h.H4)(f.LO.lg)} {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 32px;
  }
  ${(0,h.L7)(f.LO.md)} {
    display: flex;
    flex-direction: column;
  }
`,I=g.Ay.div.withConfig({displayName:"ReviewReplyImageUploadWrapper"})`
  ${w.ef} {
    margin-top: ${(0,h.Kq)(2)};
    margin-bottom: ${(0,h.Kq)(1)};

    ${(0,h.H4)(f.LO.lg)} {
      margin-top: ${(0,h.Kq)(3)};
      margin-bottom: ${(0,h.Kq)(2)};
    }
  }
`;var U=i(57886),S=i(40381),N=i(14307);const x=3e3,B=({commentId:e,configuredComponentRef:t,contentId:i,contentTitle:o="",documentType:n="",username:l,revisionId:s,commentingUrl:d,closeReply:c,reviewModalProps:g,showMessageBannerHandler:h,storyURL:y,source:b,isFeatured:f,shouldEnableRepliesImageUpload:R,shouldTruncateComments:w})=>{const{formatMessage:B}=(0,r.A)(),[$,_]=(0,a.useState)(!0),[H,P]=(0,a.useState)(0),[D,F]=(0,a.useState)(!1),[K,O]=(0,a.useState)(!1),[q,V]=(0,a.useState)(null),j=(0,a.useRef)(null),[Y,G]=(0,a.useState)(!1),W=e=>{const t={type:"discard",label:"YES, DISCARD IT",subject:b,...(0,m.i3)(f)};e.preventDefault(),c(),(0,N.Uw)(t,{skipDuplicateEvent:!1})};return a.createElement(C,{ref:t},a.createElement(M,null,a.createElement(L,null,B(u.ReviewReplyLabel)),a.createElement(A,null,l)),a.createElement(E,{name:"reviewReplyNoteText",formName:"reviewReplyNoteText",placeholder:B(u.ReplyFieldPlaceHolder),hasAutoFocus:!0,onInputChange:e=>{const t=e.target.value;P(t.length),e.target.value=t,_(0===t.trim().length),F(!1)},customHeightMultiplier:10,label:B(u.ReplyTextFieldLabel),hideLabel:!0,errorPosition:"belowTextField",errorText:D?B(u.ReviewFieldMinLimitErrorText):w?"":H>2900&&H<x?B(u.ReviewFieldAlertLimitErrorText).replace("_CHARACTER_LIMIT_CURRENT_",x-H).replace("_CHARACTER_LIMIT_",x):H===x?B(u.ReviewFieldMaxLimitErrorText).replace("_CHARACTER_LIMIT_",x):"",inputRef:j,max:w?1/0:x,charCountHandler:e=>{P(e)},shouldDisableTypingAtMaxChar:!w}),R&&a.createElement(I,null,a.createElement(S.A,{onFileChange:e=>{e?.data?.[0]?.filePath&&V({id:e.data[0].filePath,url:e.data[0].encodedURI})},onUploadStatusChange:e=>{O(e)},id:"review-reply-image-upload",product:"commenting"})),a.createElement(U.A,{modalProps:g,confirmButtonCallback:e=>W(e),onClose:()=>G(!1),isVisible:Y}),a.createElement(k,null,a.createElement(T,{inputKind:"submit",isDisabled:$||K,label:B(u.ReplyButtonLabel),onClickHandler:async t=>{let a;t.preventDefault();const r=j.current?.value?.trim();if(r.length<2)F(!0),_(!0);else if(r.length>0){const t={storyID:i,parentID:e,parentRevisionID:s,body:r,...q&&{images:[q]},clientMutationId:"0"};try{y||await(0,p.u2)({id:i,title:o,documentType:n,url:window.location.origin+window.location.pathname,commentingUrl:d,logger:console});await(0,p.Oe)(d,t)?(c(),h(B(u.AddReplySuccessToastMessage))):h(B(u.AddReplyFailedToastMessage))}catch(e){a=e?.message||"",h(B(u.AddReplyFailedToastMessage))}const l={type:"submit",label:"Reply",subject:"community_reply",error:a,...(0,m.i3)(f)};(0,N.Uw)(l,{skipDuplicateEvent:!1})}}}),a.createElement(v,{btnStyle:"text",label:B(u.CancelButtonLabel),onClickHandler:e=>{j.current&&j.current.value.trim().length>0?G(!0):W(e),j.current.focus()}})))};B.propTypes={configuredComponentRef:n().func,closeReply:n().func,commentId:n().string,commentingUrl:n().string,contentId:n().string,contentTitle:n().string,documentType:n().string,isFeatured:n().bool,reviewModalProps:n().object,revisionId:n().string,shouldEnableRepliesImageUpload:n().bool,shouldTruncateComments:n().bool,showMessageBannerHandler:n().func,source:n().string,storyURL:n().string,username:n().string};const $=B;var _=i(26576),H=i(89957);const P=(e={},t=!1)=>{{const i={type:t?"attempt":"like",subject:"community_reply",...e};t&&(i.label="vote"),(0,N.Uw)(i,{skipDuplicateEvent:!1})}};var D=i(74657),F=i(53788),K=i(20656),O=i(24300),q=i(85554),V=i(22509),j=i(61057),Y=i(54283),G=i(91470),W=i(24695),J=i(16631),z=i(94373),X=i(87106);const Z=(0,c.YK)({repliesMarketRestrictedTooltip:{id:"ReviewReplyCta.RepliesMarketRestrictedTooltip",defaultMessage:"Reply is disabled for this region",description:"Tooltip shown when replies are market restricted"}}),Q=({id:e,enableRepliesMarketRestriction:t,repliesMarketRestrictedTitle:i,shouldEnableReply:o,onReplyClick:n,label:l,restrictedReplyTooltipId:s,tooltipRef:d,toggleRestrictedReplyTooltipForId:c})=>{const{formatMessage:u}=(0,r.A)();if(!o&&!t)return null;const p=t&&s===e;return a.createElement(X.Jg,{ref:p?d:null},a.createElement(X.Ei,{disabled:t,onClick:i=>{t?c(e):n&&n(i)}},a.createElement(W.Comment,null),a.createElement(X.Xu,{disabled:t},l)),a.createElement(z.A,{className:"alert__tooltip",arrowPosition:6,gaIdentifier:"reply-market-restriction-tooltip",isVisible:p,isTooltip:!0,shouldUseArrow:!0},a.createElement(X.QA,null,i||u(Z.repliesMarketRestrictedTooltip))))};Q.propTypes={id:n().string.isRequired,enableRepliesMarketRestriction:n().bool,repliesMarketRestrictedTitle:n().string,shouldEnableReply:n().bool,onReplyClick:n().func,label:n().string.isRequired,restrictedReplyTooltipId:n().string,tooltipRef:n().oneOfType([n().func,n().shape({current:n().any})]),toggleRestrictedReplyTooltipForId:n().func.isRequired,closeRestrictedReplyTooltip:n().func.isRequired};const ee=Q,te=(0,g.Ay)(b.vm).withConfig({displayName:"ReplyUserName"})`
  ${({theme:e})=>(0,h._o)(e,"color","colors.interactive.base.dark")};
  ${({theme:e})=>(0,h.Gg)(e,"typography.definitions.globalEditorial.accreditation-feature")};
`,ie=(0,g.Ay)(J.sJ).withConfig({displayName:"ReplyDataInfo"})`
  &:first-child {
    margin-bottom: ${(0,h.Kq)(1)};
  }

  .icon-p4k-upvote,
  .icon-p4k-upvote-filled {
    margin-right: ${(0,h.Kq)(.5)};
    cursor: pointer;
    width: auto;
    height: auto;

    &:hover path[fill='#757575'] {
      ${({theme:e})=>(0,h._o)(e,"fill","colors.interactive.base.brand-secondary")};
    }
  }
`,oe=(0,g.Ay)(J.Wx).withConfig({displayName:"ReplierUserName"})``,ne=g.Ay.div.withConfig({displayName:"ReplyMetaData"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(0,h.Kq)(.5)};
`,ae=g.Ay.div.withConfig({displayName:"ReplyCommentsListWrapper"})`
  margin-top: ${(0,h.Kq)(1.25)};
  margin-left: ${(0,h.Kq)(6)};
  ${(0,h.H4)(f.LO.md)} {
    margin-left: ${(0,h.Kq)(8)};
  }
`,re=g.Ay.div.withConfig({displayName:"ReplyCommentItem"})`
  margin-top: ${(0,h.Kq)(4)};

  &:first-child {
    margin-top: ${(0,h.Kq)(2)};
  }
  ${J.iA} {
    grid-template-columns: repeat(4, max-content);
    column-gap: ${(0,h.Kq)(.75)};
  }

  .icon-dots {
    width: 12px;
    height: 12px;

    ${({theme:e})=>(0,h._o)(e,"fill","colors.interactive.base.dark")};

    ${(0,h.L7)(f.LO.md)} {
      padding-right: ${(0,h.Kq)(.5)};
      padding-left: ${(0,h.Kq)(.5)};
    }
  }
`,le=(0,g.Ay)(J.vX).withConfig({displayName:"ReplyLikeCount"})``,se=(0,g.Ay)(J.Pu).withConfig({displayName:"ReplyTimeStamp"})`
  ${({theme:e})=>(0,h.Gg)(e,"typography.definitions.foundation.meta-secondary")}
`,de=(0,g.Ay)(X.Xu).withConfig({displayName:"ReplyInfoLabel"})`
  ${({theme:e})=>(0,h.Gg)(e,"typography.definitions.foundation.meta-secondary")};
`,ce=(0,g.Ay)(J.iT).withConfig({displayName:"ReplyText"})``,ue=(0,g.Ay)(J.ow).withConfig({displayName:"ReplyImage"})`
  margin-top: ${(0,h.Kq)(1)};
`,pe=(0,g.Ay)(J.o).withConfig({displayName:"ReplyReactionButton"})``,me=g.Ay.div.withConfig({displayName:"ShowOrHideRepliesLabel"})`
  display: flex;
  flex-direction: row;
  cursor: pointer;

  ${({theme:e})=>(0,h.Gg)(e,"typography.definitions.foundation.link-secondary")};

  ${({theme:e})=>(0,h._o)(e,"color","colors.interactive.base.dark")};
`,ge=g.Ay.hr.withConfig({displayName:"ShowOrHideRepliesLabelRule"})`
  ${({theme:e})=>(0,h._o)(e,"color","colors.discovery.body.dark.divider")};
  align-self: center;
  margin-right: ${(0,h.Kq)(1)};
  width: ${(0,h.Kq)(4)};
`;var he=i(30630),ye=i(86504);const be=(0,c.YK)({ReviewReplyLabel:{id:"ReviewReplyComment.ReviewReplyLabel",defaultMessage:"Replying to",description:"The label for the reply comment field"},ShowMoreRepliesLabel:{id:"ReviewReplyComment.ShowMoreRepliesLabel",defaultMessage:"Show more replies",description:"The label to show more replies"},ReviewReplyCommentLabel:{id:"ReviewReplyComment.ReviewReplyCommentLabel",defaultMessage:"Reply",description:"The label to show reply icon"},HideRepliesLabel:{id:"ReviewReplyComment.HideRepliesLabel",defaultMessage:"Hide replies",description:"The label to hide replies"},LoadingRepliesLabel:{id:"ReviewReplyComment.LoadingRepliesLabel",defaultMessage:"Loading…",description:"The label to hide replies"},upvoteLabel:{id:"ReviewReplyComment.upvoteLabel",defaultMessage:"Upvote",description:"Label for upvote button"}});var fe=i(90637),Re=i(48286);const{oidcCookies:we}=F.A,Ae=({commentingUrl:e,configuredComponentRef:t,contentId:i,documentType:o,replies:n,replyPageInfo:l,repliesOrderBy:s,username:d,reviewerBadges:c,reviewModalProps:u,commentReactionHandler:g,user:h={},signInHed:y,usernameSignInDek:b,signInHedSpanTag:f,signInMessage:R,commentId:w,replyLimit:A,shouldUsePrimaryColorForBadges:C,showMessageBannerHandler:v,userReactions:E,useVoteLabels:L=!1,updateUserReactions:M,siteUserName:T,handleUsernameChange:k,shouldEnableReply:I,shouldEnableUpvotes:U,isFeatured:S,spectraUrl:x,shouldEnableRepliesImageUpload:B,enableRepliesMarketRestriction:H,repliesMarketRestrictedTitle:D,upvoteIcon:F,upvoteIconFilled:z,showUpvoteLabel:X,shouldShowLocation:Z,shouldTruncateComments:Q,truncateLines:Ae,isSubscribed:Ce=!0,subscriptionUrl:ve="/subscribe",modalConfig:Ee,isReadOnly:Le,hideActions:Me=!1})=>{const{formatMessage:Te}=(0,r.A)(),[ke,Ie]=(0,a.useState)(null),[Ue,Se]=(0,a.useState)(!1),[Ne,xe]=(0,a.useState)([]),[Be,$e]=(0,a.useState)(!1),{activeId:_e,tooltipRef:He,toggleForId:Pe,close:De}=(0,q.Ew)(),Fe=F&&(0,_.Rg)(F)||W.Like,Ke=z&&(0,_.Rg)(z)||W.LikeFilled,[Oe,qe]=(0,a.useState)(l.hasNextPage??!1),[Ve,je]=(0,a.useState)(l.hasNextPage?Te(be.ShowMoreRepliesLabel):""),[Ye,Ge]=(0,a.useState)(!1),[We,Je]=(0,a.useState)(!1),[ze,Xe]=(0,a.useState)(l.endCursor),[Ze,Qe]=(0,a.useState)(l.hasNextPage??!1),[et,tt]=(0,a.useState)([]),it="community_reply",ot=e=>{if(Le)return;const t="COMMUNITY_LIKE_CLICK_REPLY",i={type:"login",source_type:t,...(0,m.i3)(S)},o=(0,m.i3)(S),n=(0,m.An)(S);P(o,L);const a={action:O.O,commentId:e.commentId,commentRevisionId:e.revisionId,featured:n,source:t},r=(0,q.$D)({href:window.location.href,hashValue:q.M$.LIKE_REPLY,queryParams:a});if((0,ye.r)(Ce,ve))return void(0,ye.p)({subscriptionUrl:ve,modalConfig:Ee,redirectURL:r,action:q.M$.LIKE_REPLY});if(!h.isAuthenticated)return void(0,V.Rf)({dangerousDek:R,dangerousHed:y,dangerousHedSpanTag:f,redirectURL:r,shouldHideIllustration:!0,snowplowData:i,source:t});const l=E[e.commentId]?.viewerActionPresence,s={items:[{content_id:e.commentId}],...(0,m.i3)(S)};l?((e={},t=!1)=>{{const i={type:t?"discard":"unlike",subject:"community_reply",...e};t&&(i.label="discard vote"),(0,N.Uw)(i,{skipDuplicateEvent:!1})}})(s,L):P(s,L),g({item:e})};(0,a.useEffect)(()=>{Ye?je(Te(be.LoadingRepliesLabel)):Oe&&je(Te(be.ShowMoreRepliesLabel))},[Ye,Oe,Te]);const nt=t=>{const n=((e,t,i)=>e?e.map(e=>{const{id:o,author:{orgRole:n}={},body:a,createdAt:r,siteUsername:l,parent:s,actionCounts:d,viewerActionPresence:c,revision:u,story:p,images:m=[]}=e;return{role:n,replyId:o,replyText:a,replyDate:(0,Y.BD)(r,t),replyAuthorName:l?.[0]?.name,replyAuthorLocation:l?.[0]?.location,parentAuthorName:(()=>{let e=i;return"Anonymous"===i?e=i:s?.siteUsername?.[0]?.name&&(e=s?.siteUsername?.[0]?.name),e})(),reactionCount:d?.reaction?.total||0,viewerActionPresence:c,revisionId:u?.id,storyURL:p?.url,images:m,coralBadges:l?.[0]?.badges||[],reviewerCreatedAt:l?.[0]?.createdAt}}):[])(t,Te,d);return n.map(t=>{const{role:n,replyId:r,replyAuthorName:l,replyAuthorLocation:s,replyDate:d,replyText:p,parentAuthorName:g,revisionId:w,storyURL:A,images:L,coralBadges:M=[],reviewerCreatedAt:P}=t||{},F={commentId:r,revisionId:w},{badgeValue:K,dateBadges:O,userSpecificBadges:Y}=(0,_.D4)({role:n,coralBadges:M,reviewerCreatedAt:P,reviewerBadges:c});return a.createElement(re,{key:r,"data-testid":"reply-comment-item"},a.createElement(J.iA,{badgeValue:K},l&&a.createElement(oe,null,l),K&&a.createElement(he.A,{badgeText:K,shouldUsePrimaryColorForBadges:C}),Z&&s&&a.createElement(a.Fragment,null,a.createElement(G.Dot,null),a.createElement(J.d0,null,(0,fe.J)(s)))),0===O.length||Y.length>0?null:O.map((e,t)=>{const i=(0,_.BM)(e);return i?a.createElement(J.Ig,{key:`coral-badge-${t}`},a.createElement(he.A,{badgeText:i,shouldUsePrimaryColorForBadges:C})):null}),a.createElement(ie,null,a.createElement(ne,null,a.createElement(de,null,Te(be.ReviewReplyLabel)),g&&a.createElement(te,null,g)),a.createElement(ne,null,a.createElement(G.Dot,null),d&&a.createElement(se,null,d))),p&&(Q?a.createElement(Re.A,{lines:Ae,isCollapsible:!0,isLeftAlign:!0,linesInExtraLargeDesktop:Ae},a.createElement("span",{dangerouslySetInnerHTML:{__html:p}})):a.createElement(ce,{dangerouslySetInnerHTML:{__html:p}})),B&&L.map((e,t)=>a.createElement(ue,{key:t,src:(0,_.s_)(e?.url,x),"data-testid":"reply-image"})),!Me&&a.createElement(ie,null,U&&a.createElement(a.Fragment,null,a.createElement(pe,{isIconButton:!0,name:"reply-reaction",label:"Reaction",onClickHandler:()=>ot(F),ButtonIcon:E[r]?.viewerActionPresence?Ke:Fe}),a.createElement(le,null,E[r]?.reactionCount&&E[r]?.reactionCount||X&&Te(be.upvoteLabel))),a.createElement(ee,{id:r,enableRepliesMarketRestriction:H,repliesMarketRestrictedTitle:D,shouldEnableReply:I,onReplyClick:e=>((e,t)=>{if(e.preventDefault(),Le)return;const i="COMMUNITY_REPLY_TO_REPLY",o={subject:it,label:"Reply",source_type:i,type:"login",...(0,m.i3)(S)},n=(0,m.An)(S),a=(0,q.$D)({href:window.location.href,hash:q.M$.REPLY_TO_REPLY,queryParams:{featured:n,source:i}});if((0,ye.r)(Ce,ve))return void(0,ye.p)({subscriptionUrl:ve,modalConfig:Ee,redirectURL:a,action:q.M$.REPLY_TO_REPLY});if(h.isAuthenticated)if(T)Ie(t?.replyAuthorName),xe(e=>[...e,t?.replyId]),Se(!0);else{(0,j.Rf)({dangerousDek:b,successCallback:e=>{k(e),Ie(t?.replyAuthorName),xe(e=>[...e,t?.replyId]),Se(!0)},source:it,isFeatured:S});const e={type:"impression",subject:"username_modal",label:"Create Username",source_type:it,...(0,m.i3)(S)};(0,N.lV)(e)}else(0,V.Rf)({dangerousDek:R,dangerousHed:y,dangerousHedSpanTag:f,redirectURL:a,shouldHideIllustration:!0,source:i,snowplowData:o});const r={type:"attempt",subject:it,label:"reply",items:[{content_id:t?.replyId}],...(0,m.i3)(S)};(0,N.Uw)(r,{skipDuplicateEvent:!1})})(e,t),label:Te(be.ReviewReplyCommentLabel),restrictedReplyTooltipId:_e,tooltipRef:He,toggleRestrictedReplyTooltipForId:Pe,closeRestrictedReplyTooltip:De})),Ue&&Ne.includes(r)&&h.isAuthenticated&&T&&a.createElement($,{commentId:r,username:ke,contentId:i,revisionId:w,commentingUrl:e,closeReply:()=>{Se(!1)},reviewModalProps:u,showMessageBannerHandler:v,source:"community_reply",documentType:o,storyURL:A,isFeatured:S,shouldEnableRepliesImageUpload:B,shouldTruncateComments:Q}))})};return a.createElement(ae,{ref:t,"data-testid":"reply-comments-list-wrapper"},nt(n),!We&&nt(et),a.createElement(ie,null,Oe&&a.createElement(me,{onClick:async()=>{let t;if(Je(!1),et.length>=1&&!Ze)tt([...et]),$e(!0),qe(!1);else{Ge(!0);const i=ze??l.endCursor;try{const t=K.d.getCookieValue(we.id),{replies:o,page:{endCursor:n,hasNextPage:a}}=await(0,p.WE)({commentId:w,after:i,commentingUrl:e,logger:console,accessToken:t,replyLimit:A,repliesOrderBy:s});Xe(n),Qe(a),a||$e(!0),qe(a),tt([...et,...o]),M(o)}catch(e){t=e?.message||""}Ge(!1)}const i={type:"show_more",label:"Show more replies",subject:it,error:t,...(0,m.i3)(S)};(0,N.Uw)(i,{skipDuplicateEvent:!1})},"data-testid":"show-more-replies-button"},a.createElement(ge,null),Ve),Be&&a.createElement(me,{onClick:()=>{$e(!1),Je(!0),qe(!0)},"data-testid":"hide-replies-button"},a.createElement(ge,null),Te(be.HideRepliesLabel))))};Ae.propTypes={configuredComponentRef:n().func,commentId:n().string,commentingUrl:n().string.isRequired,commentReactionHandler:n().func,contentId:n().string,documentType:n().string,coralBadges:n().arrayOf(n().shape({badge:n().string.isRequired,startDate:n().string,endDate:n().string,isUserSpecific:n().bool})),enableRepliesMarketRestriction:n().bool,hideActions:n().bool,isReadOnly:n().bool,repliesMarketRestrictedTitle:n().string,handleUsernameChange:n().func,isFeatured:n().bool,replies:n().array,repliesOrderBy:n().string,replyLimit:n().number,replyPageInfo:n().object,reviewerBadges:n().arrayOf(n().shape({role:n().string,badge:n().string})),reviewModalProps:n().object,shouldEnableRepliesImageUpload:n().bool,shouldEnableReply:n().bool,shouldEnableUpvotes:n().bool,shouldTruncateComments:n().bool,shouldUseAlternateColorToken:n().bool,shouldUsePrimaryColorForBadges:n().bool,shouldShowLocation:n().bool,showMessageBannerHandler:n().func,showUpvoteLabel:n().bool,signInHed:n().string,signInHedSpanTag:n().string,signInMessage:n().string,siteUserName:n().string,spectraUrl:n().string,truncateLines:n().number,updateUserReactions:n().func,upvoteIcon:n().string,upvoteIconFilled:n().string,useVoteLabels:n().bool,user:n().shape({isAuthenticated:n().bool.isRequired,amguuid:n().string}).isRequired,username:n().string,usernameSignInDek:n().string,userReactions:n().shape({reactionCount:n().number.isRequired,viewerActionPresence:n().bool}).isRequired,isSubscribed:n().bool,subscriptionUrl:n().string,modalConfig:n().object};var Ce=i(27517);const ve=({className:e,commentingUrl:t,commentReactionHandler:i,contentTitle:o,documentType:n,handleShowMore:c,handleUsernameChange:u,hasErrored:p=!1,shouldEnableCommentsImageUpload:g,shouldEnableRepliesImageUpload:h,hasNextPage:y=!1,id:b,isLoading:f=!1,items:R,replyLimit:w,reviewerBadges:A,repliesOrderBy:C,reviewModalProps:v,shouldEnableRatings:E,shouldEnableReply:L,shouldEnableTags:M=!1,shouldEnableUpvotes:T,shouldUseAlternateColorToken:k,shouldUsePrimaryColorForBadges:I,shouldUseTagsInvertedTheme:U,shouldShowCircularRatings:S,shouldUseFullOpacity:x,ratingPlacement:B="ReviewMetaGrid",shouldShowLocation:P,showMessageBannerHandler:F,showUpvoteLabel:K,showMoreButtonLabel:O,signInHed:Y,signInHedSpanTag:z,signInMessage:X,siteUserName:Z,updateUserReactions:Q,upvoteIcon:te,upvoteIconFilled:ie,useVoteLabels:oe=!1,user:ne,usernameSignInDek:ae,userReactions:re,spectraUrl:le,enableRepliesMarketRestriction:se,repliesMarketRestrictedTooltip:de,shouldTruncateComments:ce,truncateLines:ue,isSubscribed:pe,subscriptionUrl:me,modalConfig:ge,totalReplyCount:be,showReplyCount:we=!1,shouldShowZeroCount:ve=!1,isReadOnly:Ee=!1,hideActions:Le=!1,showDivider:Me=!1})=>{a.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(l.G.RENDER,{name:"ReviewList"})},[]);const[Te,ke]=(0,a.useState)({}),[Ie,Ue]=(0,a.useState)([]),{activeId:Se,tooltipRef:Ne,toggleForId:xe,close:Be}=(0,q.Ew)(),{formatMessage:$e}=(0,r.A)(),_e=se?de:null,He="ReviewListButton",Pe=te&&(0,_.Rg)(te)||W.Like,De=ie&&(0,_.Rg)(ie)||W.LikeFilled,Fe=(0,a.useCallback)((e,t)=>{if(Ee)return;const i="COMMUNITY_REPLY_TO_COMMENT",o=(0,m.An)(t),n=new URL(window.location);n.hash=q.M$.LEAVE_REPLY,n.searchParams.set("featured",o),n.searchParams.set("source",i);const a={subject:"community_comment",label:"Reply",source_type:i,type:"login",...(0,m.i3)(t)};if((0,ye.r)(pe,me))return void(0,ye.p)({subscriptionUrl:me,modalConfig:ge,redirectURL:n.href,action:q.M$.LEAVE_REPLY});if(ne?.isAuthenticated){if(Z)Ue(t=>[...t,e]),ke(t=>({...t,[e]:!0}));else if(void 0!==Z){j.Rf({dangerousDek:ae,successCallback:t=>{u(t),Ue(t=>[...t,e]),ke(t=>({...t,[e]:!0}))},source:"community_reply",isFeatured:t});const i={type:"impression",subject:"username_modal",label:"Create Username",source_type:"community_reply",...(0,m.i3)(t)};(0,N.lV)(i)}}else V.Rf({dangerousDek:X,dangerousHed:Y,dangerousHedSpanTag:z,redirectURL:n.href,shouldHideIllustration:!0,source:i,snowplowData:a});const r={type:"attempt",subject:"community_comment",label:"reply",items:[{content_id:e}],...(0,m.i3)(t)};(0,N.Uw)(r,{skipDuplicateEvent:!1})},[Z,pe,me]),Ke=({item:e})=>{if(Ee)return;const t=re[e.commentId]?.viewerActionPresence,o=(0,m.i3)(e.isFeatured);t?((e={},t=!1)=>{{const i={type:t?"discard":"unlike",subject:"community_comment",...e};t&&(i.label="discard vote"),(0,N.Uw)(i,{skipDuplicateEvent:!1})}})(o,oe):((e={},t=!1)=>{{const i={type:t?"attempt":"like",subject:"community_comment",...e};t&&(i.label="vote"),(0,N.Uw)(i,{skipDuplicateEvent:!1})}})(o,oe),i({item:e})},Oe=O??$e(D.A.showMoreButtonLabel);(0,H.ol)(`.${He}`,void 0,e=>{e&&(e=>{const t={type:"impression",label:e,subject:"community"};(0,N.Uw)(t)})(Oe)});return a.createElement(J.Yl,{className:e,id:b,tabIndex:"-1"},!!R?.length&&a.createElement(J.RF,null,R.map(e=>{const{id:r,commentId:l,text:c,username:p,date:m,rating:y,replies:b,replyPageInfo:f,recipeId:R,revisionId:N,role:H,tags:O,storyURL:q,images:V=[],isFeatured:j,coralBadges:W=[],reviewerCreatedAt:de}=e||{},ye=re[l]||{},{viewerActionPresence:Ue=!1,reactionCount:He=0}=ye,Oe="__RATING_ONLY_COMMENT_PLACEHOLDER__"===e.text,qe=M&&!!O?.length,{badgeValue:Ve,dateBadges:je,userSpecificBadges:Ye}=(0,_.D4)({role:H,coralBadges:W,reviewerCreatedAt:de,reviewerBadges:A}),Ge=E&&y&&(S?a.createElement(d.A,{rating:y}):a.createElement(J.Xt,{as:"div"},a.createElement(s.A,{averageRatingCount:y})));return a.createElement(J.an,{key:[r,c,p,m].join("-"),shouldUseFullOpacity:x,isRatingOnlyComment:Oe,shouldUseTagsInvertedTheme:U},a.createElement(J.iA,{badgeValue:Ve},a.createElement(J.eI,{badgeValue:Ve},p&&a.createElement(J.Wx,null,p),Ve&&a.createElement(he.A,{badgeText:Ve,shouldUsePrimaryColorForBadges:I}),0===je.length||Ye.length>0?null:je.map((e,t)=>{const i=(0,_.BM)(e);return i?a.createElement(J.Ig,{key:`coral-badge-${t}`},a.createElement(he.A,{badgeText:i,shouldUsePrimaryColorForBadges:I})):null})),"ReviewMetaGrid"===B&&Ge),a.createElement(J.sJ,{applyRowGap:!0},a.createElement(J.R9,null,"ReviewListMetaInfo"===B&&a.createElement(a.Fragment,null,Ge)),a.createElement(J.R9,null,qe&&a.createElement(a.Fragment,null,"ReviewListMetaInfo"===B&&Ge&&a.createElement(G.Dot,null),O.map(e=>a.createElement(Ce.A,{key:e},e)))),a.createElement(J.R9,null,a.createElement(G.Dot,null),a.createElement(J.Pu,null,m)),a.createElement(J.R9,null,P&&e.location&&a.createElement(a.Fragment,null,a.createElement(G.Dot,null),a.createElement(J.d0,null,(0,fe.J)(e.location))))),a.createElement(J.sJ,null,c&&!Oe&&(ce?a.createElement(Re.A,{lines:ue,isCollapsible:!0,isLeftAlign:!0,linesInExtraLargeDesktop:ue},a.createElement("span",{dangerouslySetInnerHTML:{__html:c}})):a.createElement(J.iT,{dangerouslySetInnerHTML:{__html:c}}))),a.createElement(J.sJ,null,g&&V.map((e,t)=>a.createElement(J.ow,{key:t,src:(0,_.s_)(e?.url,le)}))),Me&&a.createElement(J.Es,null),a.createElement(J.sJ,null,T&&a.createElement(J.o,{isIconButton:!0,name:"comment-reaction",label:"Reaction",onClickHandler:()=>Ke({item:e}),ButtonIcon:Ue?De:Pe}),T&&a.createElement(J.vX,null,(ve||He>0)&&a.createElement(a.Fragment,null,He??0)||K&&$e(D.A.upvoteLabel)),a.createElement(ee,{id:l,enableRepliesMarketRestriction:se,repliesMarketRestrictedTitle:_e,shouldEnableReply:L,onReplyClick:()=>Fe(l,j),label:(We=be??0,we?0===We?"0":1===We?`${We} ${$e(D.A.reviewReplyCountSingular)}`:`${We} ${$e(D.A.reviewReplyCountPlural)}`:$e(D.A.reviewReplyLabel)),restrictedReplyTooltipId:Se,tooltipRef:Ne,toggleRestrictedReplyTooltipForId:xe,closeRestrictedReplyTooltip:Be})),Te[l]&&Ie.includes(l)&&ne?.isAuthenticated&&a.createElement($,{commentId:l,username:p,contentId:R,revisionId:N,commentingUrl:t,closeReply:()=>(e=>{ke(t=>({...t,[e]:!1}))})(l),reviewModalProps:v,showMessageBannerHandler:F,source:"community_comment",contentTitle:o,documentType:n,storyURL:q,isFeatured:j,shouldEnableRepliesImageUpload:h,shouldTruncateComments:ce}),b&&b.length>0&&a.createElement(Ae,{shouldUseAlternateColorToken:k,shouldUsePrimaryColorForBadges:I,useVoteLabels:oe,reviewerBadges:A,username:p,replies:b,replyPageInfo:f,reviewModalProps:v,repliesOrderBy:C,commentReactionHandler:i,user:ne,userReactions:re,updateUserReactions:Q,usernameSignInDek:ae,signInHed:Y,signInHedSpanTag:z,signInMessage:X,shouldEnableReply:L,commentId:l,replyLimit:w,siteUserName:Z,handleUsernameChange:u,contentId:R,documentType:n,isSubscribed:pe,subscriptionUrl:me,showMessageBannerHandler:F,commentingUrl:t,shouldEnableUpvotes:T,isFeatured:j,shouldEnableRepliesImageUpload:h,spectraUrl:le,upvoteIcon:te,upvoteIconFilled:ie,showUpvoteLabel:K,shouldShowLocation:P,enableRepliesMarketRestriction:se,repliesMarketRestrictedTitle:_e,shouldTruncateComments:ce,truncateLines:ue,modalConfig:ge,isReadOnly:Ee,hideActions:Le}));var We})),!p&&y&&a.createElement(J.TD,{className:He,inputKind:"button",onClickHandler:()=>{c(),(e=>{{const t={type:"click",label:e,subject:"community"};(0,N.Uw)(t,{skipDuplicateEvent:!1})}})(Oe)},label:f?$e(D.A.loading):Oe,isDisabled:f}),p?a.createElement(J.By,null,$e(D.A.reviewListError,{br:a.createElement("br",null)})):null)};ve.propTypes={className:n().string,commentingUrl:n().string.isRequired,commentReactionHandler:n().func,contentTitle:n().string,documentType:n().string,handleShowMore:n().func,handleUsernameChange:n().func,hasErrored:n().bool,hasNextPage:n().bool,hideActions:n().bool,id:n().string,isLoading:n().bool,isReadOnly:n().bool,items:n().arrayOf(n().shape({id:n().number,text:n().string,username:n().string,date:n().string,revisionId:n().string.isRequired,commentId:n().string.isRequired,viewerActionPresence:n().bool,reactionCount:n().number,isFeatured:n().bool,coralBadges:n().arrayOf(n().shape({badge:n().string.isRequired,startDate:n().string,endDate:n().string,isUserSpecific:n().bool})),reviewerCreatedAt:n().string})),ratingPlacement:n().oneOf(["ReviewMetaGrid","ReviewListMetaInfo"]),repliesOrderBy:n().string,replyLimit:n().number,reviewerBadges:n().arrayOf(n().shape({role:n().string,badge:n().string})),reviewModalProps:n().object,shouldEnableCommentsImageUpload:n().bool,shouldEnableOptionalRating:n().bool,shouldEnableRatings:n().bool,shouldEnableRepliesImageUpload:n().bool,shouldEnableReply:n().bool,shouldEnableTags:n().bool,shouldEnableUpvotes:n().bool,showDivider:n().bool,showReplyCount:n().bool,shouldShowCircularRatings:n().bool,shouldUseAlternateColorToken:n().bool,shouldUsePrimaryColorForBadges:n().bool,shouldUseFullOpacity:n().bool,shouldUseTagsInvertedTheme:n().bool,shouldShowLocation:n().bool,shouldShowZeroCount:n().bool,shouldTruncateComments:n().bool,showMessageBannerHandler:n().func,showMoreButtonLabel:n().string,showUpvoteLabel:n().bool,signInHed:n().string,signInHedSpanTag:n().string,signInMessage:n().string,siteUserName:n().string,spectraUrl:n().string,totalReplyCount:n().number,truncateLines:n().number,updateUserReactions:n().func,upvoteIcon:n().string,upvoteIconFilled:n().string,useVoteLabels:n().bool,user:n().shape({amguuid:n().string,isAuthenticated:n().bool.isRequired}).isRequired,usernameSignInDek:n().string,enableRepliesMarketRestriction:n().bool,repliesMarketRestrictedTooltip:n().string,userReactions:n().objectOf(n().shape({viewerActionPresence:n().bool.isRequired,reactionCount:n().number.isRequired}).isRequired),isSubscribed:n().bool,subscriptionUrl:n().string,modalConfig:n().object};const Ee=ve},74657(e,t,i){i.d(t,{A:()=>o});const o=(0,i(72267).YK)({loading:{id:"ReviewList.Loading",defaultMessage:"Loading…",description:"Button label while list loads"},reviewListError:{id:"ReviewList.ReviewListError",defaultMessage:"Sorry, more reviews can‘t be loaded right now. {br} Please try again later.",description:"Error message while loading list"},reviewReplyLabel:{id:"ReviewList.ReviewReplyLabel",defaultMessage:"Reply",description:"Reply Icon label"},reviewReplyCountSingular:{id:"ReviewList.ReviewReplyCountSingular",defaultMessage:"reply",description:"Reply count label for singular (1 reply)"},reviewReplyCountPlural:{id:"ReviewList.ReviewReplyCountPlural",defaultMessage:"replies",description:"Reply count label for plural (more than 1 reply)"},showMoreButtonLabel:{id:"ReviewList.showMoreButtonLabel",defaultMessage:"Read more comments",description:"Label for show more button"},pitchforkScoreLabel:{id:"ScoreComparison.PitchforkScoreLabel",defaultMessage:"Pitchfork score",description:"Label for Pitchfork score in score comparison component"},listenerScoreLabel:{id:"ScoreComparison.ListenerScoreLabel",defaultMessage:"Reader score",description:"Label for reader score in score comparison component"},upvoteLabel:{id:"ReviewList.upvoteLabel",defaultMessage:"Upvote",description:"Label for upvote button"},noListenerScoreYet:{id:"ScoreComparison.NoListenerScoreYet",defaultMessage:"* No reader score available yet.",description:"Message shown when there are no reader scores yet"},listenerScoreAvailableAfter:{id:"ScoreComparison.ListenerScoreAvailableAfter",defaultMessage:"* Reader score available once {count} listeners submit.",description:"Message shown when minimum reader score threshold is not met"},subscribeToSee:{id:"ScoreComparison.subscribeToSee",defaultMessage:"{subscribe} to see all scores",description:"Message shown when user is not subscribed, with subscribe CTA as a link"}})},26576(e,t,i){i.d(t,{BM:()=>s,D4:()=>l,Rg:()=>a,a0:()=>r,s_:()=>n});var o=i(91470);const n=(e,t)=>`${t}/eu-central-1/api/v2/optimize?format=type_jpeg&url=`+encodeURIComponent(e),a=e=>e&&o.default[e]?o.default[e]:null,r=(e,t=null)=>{let i=0;let o=null;const n=()=>{if(!window.jBus)return i++,void(i<=10&&(o=setTimeout(n,1e3)));o&&(clearTimeout(o),o=null),window.jBus.whenAnEventOccurs({id:"listener.score.unblurred",callback:i=>{e(!1),t&&t(!1)}}),window.jBus.whenAnEventOccurs({id:"listener.score.gated",callback:e=>{t&&t(!0)}})};return n(),()=>{o&&(clearTimeout(o),o=null)}},l=({role:e,coralBadges:t=[],reviewerCreatedAt:i,reviewerBadges:o=[]})=>{const{badge:n}=o?.find(t=>t.role===e)||{};if(!(("COMMENTER"===e||"MEMBER"===e)&&!!t?.length))return{badgeValue:n,dateBadges:[],userSpecificBadges:[],showCoralBadges:!1};const a=t.filter(e=>!0===e?.isUserSpecific);return{badgeValue:a.length>0?a[0].badge:n,dateBadges:0===a.length&&"COMMENTER"===e?t.filter(e=>{if(!0===e?.isUserSpecific)return!1;const{startDate:t,endDate:o}=e||{};if(!t||!o||!i)return!1;const n=new Date(i),a=new Date(t),r=new Date(o);return n>=a&&n<=r}):[],userSpecificBadges:a,showCoralBadges:!0}},s=e=>e?.badge||""},30630(e,t,i){i.d(t,{A:()=>h});var o=i(96540),n=i(5556),a=i.n(n),r=i(38267),l=i(18608),s=i(26865),d=i(24695);const c=(0,r.Ay)(l.c7).withConfig({displayName:"ReviewerBadgeWrapper"})`
  display: flex;
`,u=(0,r.Ay)(l.vm).withConfig({displayName:"ReviewBadgeText"})`
  padding-left: ${(0,s.Kq)(.5)};
  ${(0,s.Gg)("typography.definitions.foundation.meta-secondary")}
  ${({shouldUsePrimaryColorForBadges:e})=>e?(0,s._o)("color","colors.interactive.social.primary"):(0,s._o)("color","colors.background.brand")};
`,p=(0,r.Ay)(d.VerificationBadge).withConfig({displayName:"VerificationBadgeIcon"})``;var m=i(13465);const g=({badgeText:e,configuredComponentRef:t,shouldUsePrimaryColorForBadges:i=!1,showRoleBadge:n=!1})=>{const a=(0,r.DP)(),l=i?(0,s.HK)(a,"colors.interactive.social.primary"):(0,s.HK)(a,"colors.background.brand");return o.createElement(c,{ref:t,"data-testid":"reviewer-badge"},n?(()=>{switch(e){case"Staff":case"Contributor":case"Editor":return o.createElement(d.BadgeStaff,null);case"Artist":return o.createElement(d.BadgeArtist,null);case"Day One":return o.createElement(d.BadgeDayOne,null);default:return o.createElement(p,{color:l})}})():o.createElement(p,{color:l}),o.createElement(u,{shouldUsePrimaryColorForBadges:i,showRoleBadge:n},e))};g.propTypes={configuredComponentRef:a().func,badgeText:a().string,shouldUsePrimaryColorForBadges:a().bool,showRoleBadge:a().bool},g.displayName="ReviewerBadge";const h=(0,m.y)(g,"ReviewerBadge")},90637(e,t,i){i.d(t,{J:()=>n});var o=i(48346);const n=e=>{const t=o.A.find(t=>t.value===e);return t?.flag?`${t.flag} ${e}`:e}},87106(e,t,i){i.d(t,{Ei:()=>d,Jg:()=>c,QA:()=>u,Xu:()=>s});var o=i(38267),n=i(26865),a=i(96472),r=i(18608),l=i(17514);const s=(0,o.Ay)(r.vm).withConfig({displayName:"ReviewReplyLabel"})`
  ${({theme:e,disabled:t})=>t?(0,n._o)(e,"color","colors.interactive.disabled.dark"):(0,n._o)(e,"color","colors.interactive.base.dark")};
  ${({theme:e})=>(0,n.Gg)(e,"typography.definitions.foundation.link-secondary")};
  opacity: ${({disabled:e})=>e?.5:1};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  padding-right: ${(0,n.Kq)(.5)};
`,d=o.Ay.div.withConfig({displayName:"ReviewReplyWrapper"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: ${({disabled:e})=>e?.5:1};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};

  svg {
    opacity: ${({disabled:e})=>e?.5:1};
    pointer-events: ${({disabled:e})=>e?"none":"auto"};
  }
`,c=o.Ay.div.withConfig({displayName:"ReviewReplyTooltipWrapper"})`
  display: inline-block;
  position: relative;
  ${l.U7} {
    margin-right: 0;
  }
`,u=(0,o.Ay)(r.vm).withConfig({displayName:"ReviewerTooltipText"})`
  padding: ${(0,n.Kq)(1)};
  ${({theme:e})=>(0,n._o)(e,"color","colors.consumption.lead.inverted.heading")};
  ${({theme:e})=>(0,n.Gg)(e,"typography.definitions.utility.label")};
  @media (max-width: calc(${a.LO.lg} - 1px)) {
    width: ${(0,n.Kq)(25)};
  }
`}}]);
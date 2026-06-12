"use strict";(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[4307,4891],{24300(e,t,n){n.d(t,{A:()=>L,O:()=>k});var o=n(96540),i=n(5556),a=n.n(i),r=n(62193),s=n.n(r),l=n(45135),d=n(6442),c=n(60179),m=n(54283),u=n(73275),g=n(60711),p=n(22914),h=n(22509),b=n(92867),f=n(62930),w=n(22761),y=n(89957),v=n(85554),I=n(16631),C=n(75454),A=n(86504);const k="createCommentReaction",$="pinned-comment",S=({commentingUrl:e,contentTitle:t,documentType:n,defaultReplyLimit:i,entityId:a,handleUsernameChange:r,id:l,initialReviewLimit:u,likeActionErrorMessage:S,replyLimit:L,commentsOrderBy:_,repliesOrderBy:x,reviewLimit:E,reviewerBadges:T,reviewModalProps:N,reviewNoteTags:R,setCommentCount:M,setIsCommentLoading:U,shouldEnableRatings:B,shouldEnableReply:F,shouldEnableTags:O,shouldEnableUpvotes:D,shouldUseAlternateColorToken:q,shouldUsePrimaryColorForBadges:K,shouldUseTagsInvertedTheme:H,shouldUseFullOpacity:P,shouldShowCircularRatings:j,ratingPlacement:G,shouldUseDarkPinnedTheme:z,shouldUseSoftRoundedEdges:Y,showMessageBannerHandler:V,showMoreButtonLabel:W,showUpvoteLabel:Q,signInHed:X,signInHedSpanTag:J,signInMessage:Z,siteUserName:ee,unlikeActionErrorMessage:te,upvoteIcon:ne,upvoteIconFilled:oe,user:ie={},usernameSignInDek:ae,communityLogo:re,shouldEnableCommentsImageUpload:se,useVoteLabels:le=!1,shouldEnableRepliesImageUpload:de,shouldShowLocation:ce,spectraUrl:me,shouldShowQaSection:ue,enableRepliesMarketRestriction:ge,repliesMarketRestrictedTooltip:pe,shouldTruncateComments:he,truncateLines:be,isSubscribed:fe,subscriptionUrl:we,subscriptionModalProps:ye})=>{const{formatMessage:ve}=(0,d.A)(),[Ie,Ce]=(0,o.useState)(!1),[Ae,ke]=(0,o.useState)(!1),[$e,Se]=(0,o.useState)(),[Le,_e]=(0,o.useState)(),[xe,Ee]=(0,o.useState)([]),[Te,Ne]=(0,o.useState)([]),[Re,Me]=(0,o.useState)([]),[Ue,Be]=(0,o.useState)({}),{isLoading:Fe,reviews:Oe,page:De,setPage:qe,featuredReviews:Ke,qaReviews:He,qaPage:Pe,setQaPage:je,commentTagLabel:Ge}=(0,v.QO)({commentingUrl:e,commentsOrderBy:_,defaultReplyLimit:i,entityId:a,initialReviewLimit:u,shouldShowQaSection:ue,setCommentCount:M,setIsCommentLoading:U,repliesOrderBy:x});(0,o.useEffect)(()=>{const e=(0,m.AA)(Oe,ve,R).map(e=>({...e,isFeatured:!1}));Ee(e);const t=(0,m.AA)(Ke,ve,R).map(e=>({...e,isFeatured:!0}));Ne(t);const n=(0,m.AA)(He,ve,R).map(e=>({...e,isFeatured:!0}));Me(n)},[Oe,Ke,ve,R,He]);const ze=(0,o.useMemo)(()=>[...xe,...Te,...Re],[xe,Te,Re]);(0,v.AI)(ze,Be);const Ye=(0,o.useCallback)(async({item:t,skipSubscriptionModal:n=!1})=>{const o="COMMUNITY_LIKE_CLICK_NOTE",i=t.isFeatured||!1,a={type:"login",source_type:o,...(0,C.i3)(i)},r=(0,C.An)(i),s={action:k,commentId:t.commentId,commentRevisionId:t.revisionId,featured:r,source:o},l=(0,v.$D)({href:window.location.href,hashValue:v.M$.LIKE_COMMENT,queryParams:s});if(!n&&(0,A.r)(fe,we))return void(0,A.p)({subscriptionUrl:we,modalConfig:ye,redirectURL:l,action:v.M$.LIKE_COMMENT});if(!ie.isAuthenticated)return void h.Rf({dangerousHed:X,dangerousHedSpanTag:J,dangerousDek:Z,redirectURL:l,analyticsType:"comment reaction",shouldHideIllustration:!0,source:o,snowplowData:a});const{commentId:d,revisionId:c}=t;Be(e=>(0,v.P$)({reactions:e,id:d}));const{viewerActionPresence:m}=Ue[d]||{},u=m?"removeCommentReaction":k,f={commentID:d,commentRevisionID:c,clientMutationId:"0"},w=u===k,y={operationName:u,query:w?p.bp:p.nn,variables:{input:f}};try{await(0,g.nz)(e,y)}catch(e){Be(e=>(0,v.P$)({reactions:e,id:d}));const t=w?S||ve(b.A.likeActionErrorMessage):te||ve(b.A.unlikeActionErrorMessage);V(t)}},[ie,Ue,e,X,J,Z,ve,V,S,te,fe,we,ye]),Ve=(Te?.length||0)+(Re?.length||0);(0,y.ol)(`.${$}`,void 0,e=>{e&&Ve&&(0,C.AS)(Ve,"community_pinned","pinned_comments")},[Ve]),(0,o.useEffect)(()=>{if(!window.location||!ie.isAuthenticated||s()(Ue))return;const{action:e,commentId:t,commentRevisionId:n}=(0,v.TS)({searchParams:window.location.search});if(e!==k)return;const o=Ue[t];if(o&&t&&n){const{viewerActionPresence:e}=o;!e&&Ye({item:{commentId:t,revisionId:n},skipSubscriptionModal:!0}),window.history.replaceState({},"",(0,v.iz)({href:window.location.href,paramsToRemove:["action","commentId","commentRevisionId"]}))}},[ie.isAuthenticated,Ye,Ue]);if(Fe)return o.createElement(w.ey,null,o.createElement(f.jl,null));if(!(xe.length||Te.length||Re.length||$e))return null;const We={commentingUrl:e,commentReactionHandler:Ye,handleUsernameChange:r,repliesOrderBy:x,replyLimit:L,reviewerBadges:T,reviewModalProps:N,shouldEnableRatings:B,shouldEnableReply:F,shouldEnableTags:O,shouldEnableUpvotes:D,shouldUseAlternateColorToken:q,shouldUsePrimaryColorForBadges:K,shouldUseTagsInvertedTheme:H,shouldUseFullOpacity:P,shouldShowCircularRatings:j,ratingPlacement:G,showMessageBannerHandler:V,showUpvoteLabel:Q,signInHed:X,signInHedSpanTag:J,signInMessage:Z,siteUserName:ee,updateUserReactions:e=>{Be(t=>e.reduce(v.a8,{...t}))},upvoteIcon:ne,upvoteIconFilled:oe,user:ie,usernameSignInDek:ae,userReactions:Ue,contentTitle:t,documentType:n,shouldEnableCommentsImageUpload:se,shouldEnableRepliesImageUpload:de,shouldShowLocation:ce,spectraUrl:me,useVoteLabels:le,enableRepliesMarketRestriction:ge,repliesMarketRestrictedTooltip:pe,shouldTruncateComments:he,truncateLines:be,isSubscribed:fe,subscriptionUrl:we,modalConfig:ye};return o.createElement(o.Fragment,null,!!Te?.length&&o.createElement(I.fm,{className:$,shouldUseFullOpacity:P,shouldUseDarkPinnedTheme:z,shouldUseSoftRoundedEdges:Y},o.createElement(I.W6,{shouldUseFullOpacity:P,shouldUseDarkPinnedTheme:z,shouldUseSoftRoundedEdges:Y},o.createElement(I.oE,{shouldUseAlternateColorToken:q,shouldUseInvertedColor:z},Ge?.FEATURED||ve(b.A.pinnedReviewLabel)),re&&o.createElement(I.tG,{...re})),o.createElement(c.A,{...We,id:`${l}-featured`,items:Te})),ue&&!!Re?.length&&o.createElement(I.fm,{shouldUseSoftRoundedEdges:Y,className:$,shouldUseFullOpacity:P,shouldUseDarkPinnedTheme:z},o.createElement(I.W6,{shouldUseSoftRoundedEdges:Y,shouldUseFullOpacity:P,shouldUseDarkPinnedTheme:z},o.createElement(I.oE,{shouldUseAlternateColorToken:q,shouldUseInvertedColor:z},Ge?.QA||ve(b.A.qaReviewLabel)),re&&o.createElement(I.tG,{...re})),o.createElement(c.A,{...We,id:`${l}-qa`,items:Re,isLoading:Ae,hasErrored:!!Le,hasNextPage:Pe.hasNextPage,handleShowMore:async()=>{ke(!0),_e();const t=Pe.endCursor;try{const{reviews:n,page:o}=await(0,g.Jn)({entityId:a,after:t,commentingUrl:e,repliesOrderBy:x,reviewLimit:E});je(o);const i=(0,m.AA)(n,ve,R).map(e=>({...e,isFeatured:!0}));Me([...Re,...i])}catch(e){_e(!0)}ke(!1)},showMoreButtonLabel:W})),o.createElement(c.A,{...We,id:l,items:xe,isLoading:Ie,hasErrored:!!$e,hasNextPage:De.hasNextPage,handleShowMore:async()=>{Ce(!0),Se();const t=De.endCursor;try{const{reviews:n,page:o}=await(0,g.SW)({entityId:a,after:t,commentingUrl:e,commentsOrderBy:_,repliesOrderBy:x,reviewLimit:E});qe(o);const i=(0,m.AA)(n,ve,R);Ee([...xe,...i])}catch(e){Se(!0)}Ce(!1)},showMoreButtonLabel:W}))};S.propTypes={commentingUrl:a().string.isRequired,commentsOrderBy:a().string,communityLogo:a().shape(u.A.propTypes),contentTitle:a().string,documentType:a().string,defaultReplyLimit:a().number,entityId:a().string.isRequired,handleUsernameChange:a().func,id:a().string,initialReviewLimit:a().number,likeActionErrorMessage:a().string,ratingPlacement:a().oneOf(["ReviewMetaGrid","ReviewListMetaInfo"]),repliesOrderBy:a().string,replyLimit:a().number,reviewerBadges:a().arrayOf(a().shape({role:a().string,badge:a().string})),reviewLimit:a().number,reviewModalProps:a().object,reviewNoteTags:a().array,setCommentCount:a().func.isRequired,setIsCommentLoading:a().func.isRequired,shouldEnableCommentsImageUpload:a().bool,shouldShowLocation:a().bool,shouldEnableRatings:a().bool,shouldEnableRepliesImageUpload:a().bool,shouldEnableReply:a().bool,shouldEnableTags:a().bool,shouldEnableUpvotes:a().bool,shouldShowCircularRatings:a().bool,shouldUseAlternateColorToken:a().bool,shouldUsePrimaryColorForBadges:a().bool,shouldUseTagsInvertedTheme:a().bool,shouldUseDarkPinnedTheme:a().bool,shouldUseSoftRoundedEdges:a().bool,shouldUseFullOpacity:a().bool,showMessageBannerHandler:a().func,showMoreButtonLabel:a().string,shouldShowQaSection:a().bool,shouldTruncateComments:a().bool,showUpvoteLabel:a().bool,signInHed:a().string,signInHedSpanTag:a().string,signInMessage:a().string,siteUserName:a().string,spectraUrl:a().string,truncateLines:a().number,unlikeActionErrorMessage:a().string,upvoteIcon:a().string,upvoteIconFilled:a().string,useVoteLabels:a().bool,user:a().shape({amguuid:a().string,isAuthenticated:a().bool.isRequired}).isRequired,usernameSignInDek:a().string,enableRepliesMarketRestriction:a().bool,repliesMarketRestrictedTooltip:a().string,isSubscribed:a().bool,subscriptionUrl:a().string,subscriptionModalProps:a().object};const L=(0,l.Ng)(null,{setCommentCount:e=>({type:"SET_KEY",key:"comments.commentCount",value:e}),setIsCommentLoading:e=>({type:"SET_KEY",key:"comments.isCommentLoading",value:e})})(S)},92543(e,t,n){n.d(t,{u:()=>ht});var o=n(13465),i=n(57744),a=n(5556),r=n.n(a),s=n(96540),l=n(6442);const d=n(16075),{GraphQLClient:c}=n(96497),{getCookie:m}=n(56892),u=n(53788).A,{oidcCookies:g}=u,p=(e,t)=>{const n=m(g.access),o=new c(e),{query:i,variables:a}=t,r={"Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type","Content-Type":"application/json","User-Agent":"verso-client",Authorization:`Bearer ${n}`};return o.request(i,a,r)};var h=n(31989),b=n(62282),f=n(38080),w=n(16631),y=n(11025),v=n(53499),I=n(89957),C=n(86659),A=n(24300),k=n(14307);var $=n(25965),S=n(15343),L=n(83108),_=n(72267);const x=(0,_.YK)({defaultcommunityReviewText:{id:"ReviewNotesForm.defaultcommunityReviewText",defaultMessage:"Ask a question or leave a helpful tip, suggestion or opinion that is relevant and respectful for the community.",description:"Appears when the form is minimised or maximised and enableCommunityExperience is true"},nonLoggedInErrorMessage:{id:"ReviewForm.nonLoggedInErrorMessage",defaultMessage:"Sign in or create an account to add comment.",description:"Message to display non logged in users"},textFieldLabel:{id:"ReviewNotesForm.textFieldLabel",defaultMessage:"Your Review",description:"The label for the main review text field"},addNoteLabel:{id:"ReviewNotesForm.addNoteLabel",defaultMessage:"Add comment",description:"The label for Add Comment submit button"},cancelNoteLabel:{id:"ReviewNotesForm.cancelNoteLabel",defaultMessage:"Discard",description:"The label for cancel button"},reviewerInfoFieldLabel:{id:"ReviewNotesForm.ReviewerInfoFieldLabel",defaultMessage:"Commenting as:",description:"The label for the reviewer name field"},reviewerRatingLabel:{id:"ReviewNotesForm.ReviewerRatingLabel",defaultMessage:"Rate this",description:"The label for the reviewer rating field"},reviewerFieldInfoIconText:{id:"ReviewNotesForm.reviewerFieldInfoIconText",defaultMessage:"Your username appears next to your comments and replies. Change it anytime in your Account.",description:"information text for user to change their user name"},reviewerFieldWithLocationInfoIconText:{id:"ReviewNotesForm.reviewerFieldWithLocationInfoIconText",defaultMessage:"Your username and location appear next to your comments and replies. Change them anytime in your Account.",description:"information text for user to change their user name and location when both exist"},locationFieldInfoIconText:{id:"ReviewNotesForm.locationFieldInfoIconText",defaultMessage:"Your location appears next to your comments and replies. Change it anytime in your Account.",description:"information text for user to change their location"},reviewerStoryScoreIconButtonLabel:{id:"ReviewNotesForm.reviewerStoryScoreIconButtonLabel",defaultMessage:"user score message",description:"Label for reviewer score message icon"},ratingFieldInfoIconText:{id:"ReviewNotesForm.ratingFieldInfoIconText",defaultMessage:"You can add a score to an album or track only once, but you can still leave a comment or review afterward.",description:"information text for user about rating limitations"},reviewerInfoIconButtonLabel:{id:"ReviewNotesForm.reviewerInfoIconButtonLabel",defaultMessage:"user name update message",description:"Label for reviewer user name update message icon"},reviewTagsLabel:{id:"ReviewNotesForm.reviewTagsLabel",defaultMessage:"TAG YOUR COMMENT (OPTIONAL)",description:"Label for adding tags"},reviewTags:{id:"FilterComponent.reviewTags",defaultMessage:"{reviewTag}",description:"Value for the tag"},invalidReviewLength:{id:"ReviewNotesForm.invalidReviewNoteLength",defaultMessage:"Enter {min} characters or more to add a comment.",description:"Error message for invalid review comment length"},requiredField:{id:"ReviewNotesForm.requiredField",defaultMessage:"Select a star rating to add a comment",description:"Error message for required field"},invalidNumericRatingRange:{id:"ReviewNotesForm.invalidNumericRatingRange",defaultMessage:"Rating must be between 0.1 and 10",description:"Error message for numeric rating out of range"},numericRatingPlaceholder:{id:"ReviewNotesForm.numericRatingPlaceholder",defaultMessage:"Enter a number between 0.1 and 10",description:"Placeholder text for numeric rating input field"},maxCharLimitMet:{id:"ReviewNotesForm.maxCharLimitMet",defaultMessage:"_MAX_ character limit met",description:"Warning message for max review comment length"},remainingMaxCharLimit:{id:"ReviewNotesForm.remainingMaxCharLimit",defaultMessage:"_COUNT_ of _MAX_ character limit remaining",description:"Warning message for invalid review comment length"},buttonLabel:{id:"ReviewNotesForm.buttonLabel",defaultMessage:"Sign in or create account",description:"Text for the sign in or create account button"},AddNoteFailedToastMessage:{id:"ReviewNotes.AddNoteFailedToastMessage",defaultMessage:"Unable to add your comment. Please try again.",description:"Failure message to show on comment save"},countryDropdownLabel:{id:"ReviewNotesForm.countryDropdownLabel",defaultMessage:"Location",description:"Label for country dropdown"},countryDropdownPlaceholder:{id:"ReviewNotesForm.countryDropdownPlaceholder",defaultMessage:"Select location",description:"Placeholder text for country dropdown"},requiredCountryField:{id:"ReviewNotesForm.requiredCountryField",defaultMessage:"Please Select location to add a comment",description:"Error message for required country dropdown field"},reviewerStoryScoreFieldLabel:{id:"ReviewNotesForm.ReviewerStoryScoreFieldLabel",defaultMessage:"Score Added:",description:"The label for the reviewer story score field"},reviewerStoryScoreInfoText:{id:"ReviewNotesForm.reviewerStoryScoreInfoText",defaultMessage:"You've already rated this album, but you can still leave a review.",description:"information text for showing the score he already added"},subscribeText:{id:"ReviewNotesForm.subscribeText",defaultMessage:"Subscribe",description:"Text for the subscribe link"},subscriptionLockActionText:{id:"ReviewNotesForm.subscriptionLockActionText",defaultMessage:"to add comments",description:"Text that appears after the Subscribe link"}});var E=n(61057),T=n(57886),N=n(40381),R=n(48346),M=n(90637),U=n(63208),B=n(38267),F=n(18608),O=n(26865),D=n(96472),q=n(12301),K=n(97927),H=n(60434),P=n(72081),j=n(14952),G=n(18161),z=n(73730),Y=n(44741),V=n(79499);const W=(0,B.Ay)(P.A.MultiLine).withConfig({displayName:"ReviewNoteTextField"})`
  margin-bottom: 0;

  textarea:disabled {
    background-color: transparent;
  }
`,Q=B.Ay.div.withConfig({displayName:"ReviewNoteFormWrapper"})``,X=B.Ay.div.withConfig({displayName:"ReviewNoteSectionContainer"})`
  border: 1px solid;
  ${({theme:e})=>(0,O._o)(e,"border-color","colors.interactive.base.light")};
  padding: ${(0,O.Kq)(3)};

  ${({showTextFieldSoftRoundedEdges:e})=>e&&B.AH`
      border-radius: 8px;
    `};

  ${H.vT} {
    margin-top: 0;
    padding: ${(0,O.Kq)(2)} ${(0,O.Kq)(1.5)};
    ${({showTextFieldSoftRoundedEdges:e})=>e&&B.AH`
        border-radius: 8px;
      `};
    ${({theme:e,hasError:t})=>t?(0,O._o)(e,"border-color","colors.interactive.base.brand-secondary"):(0,O._o)(e,"border-color","colors.interactive.base.black")};
  }

  ${H.vB} {
    ${({hasWarning:e})=>e&&`margin-bottom: ${(0,O.Kq)(1)};`}
  }

  ${H.vT}

  [disabled] {
    ${({theme:e})=>(0,O._o)(e,"background","colors.interactive.base.white")};
    ${({theme:e})=>(0,O._o)(e,"border-color","colors.interactive.base.light")};
    ${({theme:e})=>(0,O._o)(e,"color","colors.consumption.body.standard.subhed")};
  }

  ${H.vT}::placeholder {
    ${({theme:e})=>(0,O._o)(e,"color","colors.interactive.base.light")};
  }
`,J=B.Ay.div.withConfig({displayName:"ReviewNoteUserInfoWrapper"})``,Z=B.Ay.div.withConfig({displayName:"ReviewNoteUserInfo"})`
  margin-bottom: ${(0,O.Kq)(4)};
`,ee=B.Ay.div.withConfig({displayName:"ReviewNoteRatingWrapper"})`
  margin-top: ${(0,O.Kq)(1)};
  margin-bottom: ${(0,O.Kq)(4)};

  ${H.tw} {
    ${({showTextFieldSoftRoundedEdges:e})=>e&&B.AH`
        border-radius: 8px;
      `}
  }
`,te=B.Ay.span.withConfig({displayName:"ReviewerInfoLabel"})`
  ${({theme:e})=>(0,O._o)(e,"color","colors.consumption.body.standard.body-deemphasized")};
  ${({theme:e})=>(0,O.Gg)(e,"typography.definitions.globalEditorial.accreditation-core")};
`,ne=B.Ay.span.withConfig({displayName:"ReviewerRatingLabel"})`
  ${({theme:e})=>(0,O._o)(e,"color","colors.consumption.body.standard.body")};
  ${({theme:e})=>(0,O.Gg)(e,"typography.definitions.globalEditorial.accreditation-core")};
`,oe=B.Ay.span.withConfig({displayName:"ReviewerInfo"})`
  ${({theme:e})=>(0,O._o)(e,"color","colors.consumption.body.standard.body")};
  ${({theme:e})=>(0,O.Gg)(e,"typography.definitions.globalEditorial.accreditation-core")};
  padding-left: ${(0,O.Kq)(.5)};
`,ie=B.Ay.span.withConfig({displayName:"ReviewTagsInfoLabel"})`
  ${({theme:e})=>(0,O._o)(e,"color","colors.consumption.body.standard.body")};
  ${({theme:e})=>(0,O.Gg)(e,"typography.definitions.globalEditorial.accreditation-core")};
`,ae=B.Ay.div.withConfig({displayName:"ReviewerInfoIconButtonWrapper"})`
  display: inline;

  svg {
    width: 24px;
    height: 24px;
    ${({theme:e})=>(0,O._o)(e,"fill","colors.consumption.lead.special.context-tertiary")};
  }

  .review-note-info-button {
    float: inline-end;
    margin: 0;
    margin-top: 2px;
    border: 0;
    background-color: ${({theme:e})=>(0,O.HK)(e,"colors.interactive.base.white")};
    padding: 0;
    padding-left: 12px;

    &:hover,
    &:focus {
      border: 0;
      background: none;
    }
  }
`,re=B.Ay.div.withConfig({displayName:"ReviewNotesToggleChipListWrapper"})`
  ${G.f} {
    ${(0,O.Gg)("typography.definitions.foundation.link-utility")}

    &[aria-checked='false'] {
      ${({shouldUseInteractiveBrandColor:e,shouldUseFullOpacity:t})=>{if(e){const e=t?1:.1;return B.AH`
            background-color: rgba(
              ${(0,O.HK)("colors.interactive.social.primary-hover",{rgbOnly:!0})},
              ${e}
            );
          `}return`${(0,O._o)("color","colors.interactive.base.black")}`}}
    }

    &:focus {
      box-shadow: none;
    }

    &:hover {
      box-shadow: 0 0 0 1px ${(0,O.HK)("colors.interactive.base.black")}
        inset;
    }

    ${(0,O.L7)(D.LO.md)} {
      &:focus,
      &:hover {
        box-shadow: none;
      }
    }

    &:disabled {
      box-shadow: none;
    }
  }
  ${j.OO} {
    padding-bottom: 8px;
    padding-left: 0;
  }
`,se=(0,B.Ay)(F.vm).withConfig({displayName:"ReviewerInfoText"})`
  position: absolute;
  left: calc(25% - 10px);
  float: inline-end;
  z-index: -1;
  border-radius: 8px;
  box-shadow: 0 0 20px 12px rgba(0, 0, 0, 0.1);
  background: white;
  padding: 17px 22px;
  width: 80%;
  box-sizing: border-box;

  ${({theme:e})=>(0,O._o)(e,"color","colors.interactive.base.dark")};
  ${({theme:e})=>(0,O.Gg)(e,"typography.definitions.utility.input-core")};

  ${(0,O.H4)(D.LO.sm)} {
    padding: 12px 13px;
  }
  ${(0,O.H4)(D.LO.md)} {
    padding: 17px 22px;
  }
`,le=(0,B.Ay)(F.vm).withConfig({displayName:"ReviewerStoryScoreText"})`
  ${({theme:e})=>(0,O.Gg)(e,"typography.definitions.utility.assistive-text")};
  margin-top: ${(0,O.Kq)(2)};
  margin-bottom: ${(0,O.Kq)(3)};
  color: ${(0,O.HK)("colors.interactive.base.border")};
`,de=B.Ay.span.withConfig({displayName:"ReviewerStoryScoreLabel"})`
  ${({theme:e})=>(0,O.Gg)(e,"typography.definitions.globalEditorial.accreditation-core")};
  text-transform: uppercase;
  color: ${(0,O.HK)("colors.consumption.body.standard.body-deemphasized")};
`,ce=(0,B.Ay)(F.vm).withConfig({displayName:"CommunityGuidelinesInfo"})`
  ${({theme:e})=>(0,O.Gg)(e,"typography.definitions.utility.label")};
  margin-top: ${(0,O.Kq)(2)};
  color: ${(0,O.HK)("colors.consumption.body.standard.body-deemphasized")};
`,me=B.Ay.span.withConfig({displayName:"ReviewerStoryScoreValue"})`
  ${({theme:e})=>(0,O.Gg)(e,"typography.definitions.utility.input-core")};
  margin-left: ${(0,O.Kq)(1)};
  color: ${(0,O.HK)("colors.consumption.body.standard.body")};
`,ue=B.Ay.div.withConfig({displayName:"AlertArrow"})`
  position: absolute;
  top: auto;
  bottom: 100%;
  left: calc(98% - 11px);
  border-width: 0 10px 13px;
  border-style: solid;
  border-color: rgb(254 254 254) transparent;
`,ge=B.Ay.div.withConfig({displayName:"ReviewerInfoAlertToolTip"})`
  position: relative;
  top: 8px;
  z-index: 2;
  background-color: ${(0,O.HK)("colors.background.white")};

  ${(0,O.H4)(D.LO.sm)} {
    ${se} {
      left: calc(8% - 4px);
      width: 100%;
    }
    ${ue} {
      left: calc(98% - 14px);
      border-width: 0 8px 12px;
    }
  }

  ${(0,O.H4)(D.LO.md)} {
    ${se} {
      left: calc(25% - 10px);
      width: 80%;
    }
    ${ue} {
      left: calc(98% - 12px);
      border-width: 0 10px 13px;
    }
  }

  ${(0,O.H4)(D.LO.lg)} {
    ${se} {
      left: calc(7% - 10px);
      width: 100%;
    }
    ${ue} {
      left: calc(98% - 14px);
      border-width: 0 10px 13px;
    }
  }

  ${(0,O.H4)(D.LO.xl)} {
    ${se} {
      left: calc(25% - 10px);
      width: 80%;
    }
    ${ue} {
      left: calc(98% - 11px);
      border-width: 0 10px 13px;
    }
  }

  ${(0,O.H4)(D.LO.xxl)} {
    ${se} {
      left: calc(34% - 10px);
      width: 70%;
    }
    ${ue} {
      left: calc(98% - 8px);
      border-width: 0 10px 13px;
    }
  }
`,pe=(0,B.Ay)(q.A).withConfig({displayName:"RatingFormRating"})`
  align-items: start;
  padding: ${(0,O.Kq)()} 0 ${(0,O.Kq)()};
  ${K.Ou} {
    transform: scale(1.78);
    margin: 0 ${(0,O.Kq)(1.25)};
  }
`,he=B.Ay.div.withConfig({displayName:"ReviewNotesFormActions"})`
  ${(0,O.H4)(D.LO.lg)} {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 32px;
  }
  ${(0,O.L7)(D.LO.md)} {
    display: flex;
    flex-direction: column;
  }
`,be=B.Ay.div.withConfig({displayName:"ReviewNotesDivider"})`
  margin-top: ${(0,O.Kq)(2)};
  border-bottom: 1px solid;
  ${(0,O._o)("border-color","colors.consumption.body.standard.divider")};
`,fe=(0,B.Ay)(z.A.Primary).withConfig({displayName:"ReviewFormSubmitButton"})`
  ${(0,O.Gg)("typography.definitions.utility.button-core")}
  ${({theme:e})=>(0,O._o)(e,"color","colors.interactive.base.brand-primary")};
  margin-top: 0.5rem;
  margin-bottom: 20px;
  padding: 15px 9px;
  width: 100%;
  max-width: 100%;
  text-decoration: underline;
`,we=(0,B.Ay)(z.A.Primary).withConfig({displayName:"ReviewFormSubmitButton"})`
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
`,ye=(0,B.Ay)(H.HG).withConfig({displayName:"ReviewFormTextFieldErrorText"})``,ve=(0,B.Ay)(F.sH).withConfig({displayName:"ReviewNotesFormSignin"})``,Ie=B.Ay.div.withConfig({displayName:"ReviewNotesFormMinimised"})`
  position: relative;

  input.text-field__control {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    textarea.text-field__control {
      padding: ${(0,O.Kq)(2)};
    }
  }
  @media (min-width: 768px) {
    textarea.text-field__control {
      padding: ${(0,O.Kq)(2)} ${(0,O.Kq)(3)};
    }
  }

  textarea.text-field__control {
    cursor: pointer;
    overflow: auto;
    overflow-y: hidden;

    &::placeholder {
      ${({theme:e})=>(0,O._o)(e,"color","colors.interactive.base.light")};
    }
  }

  ${ve} {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    color: transparent;
  }
`,Ce=B.Ay.div.withConfig({displayName:"ReviewNotesImageUploadWrapper"})`
  ${Y.ef} {
    ${(0,O.L7)(D.LO.lg)} {
      margin-top: ${(0,O.Kq)(2)};
      margin-bottom: ${(0,O.Kq)(.5)};
    }

    ${(0,O.H4)(D.LO.lg)} {
      margin-top: ${(0,O.Kq)(3)};
      margin-bottom: ${(0,O.Kq)(1.25)};
    }
  }
`,Ae=(0,B.Ay)(V.Ay.Searchable).withConfig({displayName:"ReviewNotesLocationDropdown"})`
  margin-top: ${(0,O.Kq)(1)};
  margin-bottom: ${(0,O.Kq)(2)};

  .dropdown__control,
  .dropdown__value-container {
    border-radius: ${(0,O.Kq)()};
  }

  .dropdown__menu {
    z-index: ${D.KV.persistentTopLayer};
  }
`,ke=B.Ay.div.withConfig({displayName:"ReviewNotesSubscriptionLock"})`
  display: flex;
  align-items: center;
  gap: ${(0,O.Kq)(1)};
  border: 1px solid;
  ${({theme:e})=>(0,O._o)(e,"border-color","colors.interactive.base.light")};
  border-radius: 999px;
  cursor: pointer;
  padding: ${(0,O.Kq)(1)} ${(0,O.Kq)(2)};
  width: 100%;

  .lock-background {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${(0,O.Kq)(1)};
    background: ${({theme:e})=>(0,O.HK)(e,"colors.background.light")};
    width: ${(0,O.Kq)(4)};
    height: ${(0,O.Kq)(4)};
  }

  &:hover {
    ${({theme:e})=>(0,O._o)(e,"border-color","colors.interactive.base.dark")};
  }
`,$e=B.Ay.span.withConfig({displayName:"ReviewNotesSubscriptionText"})`
  ${({theme:e})=>(0,O.Gg)(e,"typography.definitions.utility.input-core")};
  ${({theme:e})=>(0,O._o)(e,"color","colors.interactive.base.dark")};
`,Se=B.Ay.a.withConfig({displayName:"ReviewNotesSubscriptionLink"})`
  ${({theme:e})=>(0,O._o)(e,"color","colors.interactive.social.primary")};
  text-decoration: underline;
`;var Le=n(87098);const _e=(e,t)=>n=>{n.preventDefault(),n.stopPropagation(),e(!t)};var xe=n(75454),Ee=n(85554);const Te=({ariaLabel:e,children:t,onMinimise:n,usernameSignInDek:o,trackAddNoteEvent:i,handleUsernameChange:a,siteUserName:r})=>{const l={type:"impression",label:"Create Username",subject:"username_modal",source_type:"community_comment"};return s.createElement(Ie,{role:"button",tabIndex:"0",onClick:e=>{i(),(e=>{r?n(e,r):void 0!==r&&((0,k.lV)(l),(0,E.Rf)({dangerousDek:o,successCallback:t=>{a(t),n(e,t)},source:"community_comment"}))})(e)},onKeyPress:n,"aria-label":e},t)};Te.propTypes={ariaLabel:r().string.isRequired,children:r().node.isRequired,handleUsernameChange:r().func.isRequired,onMinimise:r().func.isRequired,siteUserName:r().string,trackAddNoteEvent:r().func,usernameSignInDek:r().string};const Ne=e=>{const{className:t,configuredComponentRef:n,addNoteFailedToastMessage:o,addNoteLabel:i,communityGuidelinesInfo:a,shouldEnableTags:r,reviewNoteTags:d=[],reviewerRatingLabel:c,shouldUseInteractiveBrandColor:m,validations:{min:u=5,max:g=3e3,remainingChar:p=100,errorMessage:h={}}={},usernameSignInDek:b,modalProps:f={},minimisedReviewNotesText:w,nonLoggedInErrorMessage:y,isMinimised:C=!0,reviewerInfoText:A,reviewerLocationInfoText:_,locationInfoText:E,signInURL:B,textFieldHeightPx:F,userId:O,handleUsernameChange:D,onSubmitHandler:q,reviewerInfoFieldLabel:K,reviewTagsLabel:H,siteUserName:j,siteUserLocation:G,showSavedRecipeNotes:Y,shouldEnableOptionalRating:V,shouldEnableCommentsImageUpload:ve,shouldEnableRatings:Ie,showMessageBannerHandler:Ne,shouldUseFullOpacity:Re,userStoryRating:Me,showTextFieldBoxShadow:Ue,showTextFieldRoundedEdges:Be,showTextFieldSoftRoundedEdges:Fe,shouldUseNumericRatingInput:Oe,shouldEnableLocationDropdown:De,isSubscribed:qe=!0,subscriptionUrl:Ke="/subscribe",subscriptionLockActionText:He,shouldShowRatingInfoAlert:Pe,shouldShowLocationInfoAlert:je,shouldEnableMultipleRatings:Ge,shouldTruncateComments:ze}=e,Ye=De&&!G,Ve=De&&G;s.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(v.G.RENDER,{name:"ReviewNotesForm"})},[]);const We=F?Math.round(F/16):12,Qe=(0,l.A)(),{minimised:Xe,setMinimised:Je,isSignedIn:Ze,signInError:et,setSignInError:tt,isSubmitting:nt,setIsSubmitting:ot,formData:it,setFormData:at,errors:rt,setErrors:st,warningMessage:lt,setWarningMessage:dt,shouldHideReviewerInfoAlert:ct,setShouldHideReviewerInfoAlert:mt,shouldHideRatingInfoAlert:ut,setShouldHideRatingInfoAlert:gt,shouldHideLocationDropdownInfoAlert:pt,setShouldHideLocationDropdownInfoAlert:ht,shouldHideReviewerStoryScoreAlert:bt,setShouldHideReviewerStoryScoreAlert:ft,tags:wt,setTags:yt,isReviewNoteModalOpen:vt,setIsReviewNoteModalOpen:It,isImageUploading:Ct,setIsImageUploading:At}=((e,t,n,o,i)=>{const[a,r]=s.useState(e),[l,d]=s.useState(!1),[c,m]=s.useState(!1),[u,g]=(0,s.useState)(!1),[p,h]=(0,s.useState)(((e,t)=>({reviewNote:"",toggleChip:[],...e&&{rating:null},...t&&{location:null}}))(o,i)),[b,f]=(0,s.useState)({}),[w,y]=(0,s.useState)(""),[v,I]=(0,s.useState)(!0),[C,A]=(0,s.useState)(!0),[k,$]=(0,s.useState)(!0),[S,L]=(0,s.useState)(!0),[_,x]=(0,s.useState)(n||[]),[E,T]=(0,s.useState)(!1),[N,R]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{d(!!t)},[t]),{minimised:a,setMinimised:r,isSignedIn:l,signInError:c,setSignInError:m,isSubmitting:u,setIsSubmitting:g,formData:p,setFormData:h,errors:b,setErrors:f,warningMessage:w,setWarningMessage:y,shouldHideReviewerInfoAlert:v,setShouldHideReviewerInfoAlert:I,shouldHideRatingInfoAlert:C,setShouldHideRatingInfoAlert:A,shouldHideLocationDropdownInfoAlert:k,setShouldHideLocationDropdownInfoAlert:$,shouldHideReviewerStoryScoreAlert:S,setShouldHideReviewerStoryScoreAlert:L,tags:_,setTags:x,isReviewNoteModalOpen:E,setIsReviewNoteModalOpen:T,isImageUploading:N,setIsImageUploading:R}})(C,O,d,Ie,Ye),kt=e=>((e,t,n,o,i,a=!1)=>({reviewNote:[{test:n=>n?a?n.length>=o:n.length>=o&&n.length<=i:e&&t,error:"invalidReviewLength"}],rating:[{test:o=>{if(null===o)return e&&t;const i=Number(o);return!isNaN(i)&&(n?i>=.1&&i<=10:i>=1&&i<=5)},error:n?"invalidNumericRatingRange":"requiredField"}]}))(V,Ie,e,u,g,ze),$t=w||Qe.formatMessage(x.defaultcommunityReviewText),St=e=>{const t=wt.map(t=>t.slug===e?{...t,active:!t.active}:t);return yt(e=>(((e,t)=>{const n=e.filter(e=>e.active);if(0===n.length)return;if(!t.some((t,n)=>!t.active&&e[n].active))return;const o=1===n.length?n[0].description:"",i=n.map(({label:e})=>({name:e.toLowerCase(),index:0,total_index:1}));(0,k.Uw)({type:"select",label:o,subject:"community_comment",features_list:i},{skipDuplicateEvent:!1})})(t,e),t)),t},Lt=e=>{st(t=>{const{[e]:n,...o}=t;return o})},_t=(e,t,n=!1)=>{const o=kt(n)[e];if(!o)return null;if(V&&Ie&&("rating"===e?null===t:!t))return Lt(e),null;for(const n of o)if(!n.test(t))return st(t=>({...t,[e]:n.error})),n.error;return Lt(e),null},xt=()=>{const e=it.reviewNote?.trim().length>=u;if(!Ie)return e;const t=null!==it.rating&&void 0!==it.rating&&((e,t)=>{const n=Number(e);return!isNaN(n)&&(t?n>=.1&&n<=10:n>=1&&n<=5)})(it.rating,Oe);return e||t},Et=e=>(t,n)=>{let o;switch(e){case"reviewNote":o=t.target.value.trim(),i=o,ze||(i.length>=g?dt(Qe.formatMessage(x.maxCharLimitMet).replace("_MAX_",g)):g-i.length<=p?dt(Qe.formatMessage(x.remainingMaxCharLimit).replace("_COUNT_",g-i.length).replace("_MAX_",g)):dt(""));break;case"toggleChip":o=St(t);break;case"rating":{const e=void 0!==n?n:t?.target?.value||t;o=null===e?null:Number(e);break}case"location":o=t?.value;break;default:o=t}var i;at({...it,[e]:o}),"reviewNote"===e&&o.length<u||_t(e,o,Oe)},Tt=()=>{{const e={type:"attempt",subject:"community_comment"};(0,k.Uw)(e,{skipDuplicateEvent:!1})}},Nt=(0,s.useRef)(null),Rt=(0,s.useRef)(null),Mt=(0,s.useRef)(null),Ut=(0,s.useRef)(null),Bt=(0,s.useRef)(null),Ft=s.useRef(null),Ot=(e,t)=>{e.preventDefault(),t&&Je(!1),Y(!1)};(0,Le.j)(Nt,()=>mt(!0)),(0,Le.j)(Rt,()=>ht(!0)),(0,Le.j)(Mt,()=>gt(!0)),(0,Le.j)(Bt,()=>ft(!0)),(0,Le.j)(Ut,e=>{Nt.current&&!Nt.current.contains(e.target)&&mt(!0),Ut.current&&Ut.current.id!==e.target?.firstChild.id&&tt(!1)});const Dt=_e(mt,ct),qt=_e(gt,ut),Kt=_e(ht,pt),Ht=()=>{Object.values(it).some(e=>(!Array.isArray(e)||0!==e.length)&&Boolean(e))?It(!0):(Je(!0),st({})),jt()},{discardLabel:Pt="Yes, discard it"}=f||{},jt=()=>{{const e={type:"discard",label:Pt.toUpperCase(),subject:(0,k.ZY)(Yt)};(0,k.Uw)(e,{skipDuplicateEvent:!1})}},Gt=()=>{Ft.current.value="",yt(d),at({reviewNote:"",toggleChip:[],...Ie&&{rating:null},...Ye&&{location:null}}),st({}),Je(!0),It(!1),dt("")},zt=()=>{if(!V)return!1;const e=it.reviewNote?.trim().length>0,t=null!==it.rating&&void 0!==it.rating;return!(e||t)},Yt=i||Qe.formatMessage(x.addNoteLabel),Vt=async()=>{ot(!0);const e=(e=>{const t=Object.entries(e).reduce((e,[t,n])=>{const o=_t(t,n,Oe);return o&&(e[t]=o),e},{});return V&&Ie&&!xt()&&(e.reviewNote?.trim()||(t.reviewNote="invalidReviewLength"),e.rating||(t.rating="requiredField")),t})(it);if(0===Object.keys(e).length){const e={...it,userId:O};null!=await q(e,Yt)?(Gt(),Y(!0)):Ne&&Ne(o||Qe.formatMessage(x.AddNoteFailedToastMessage))}ot(!1)},Wt=()=>{Gt(),jt()},Qt=(e,t)=>{const n=e[t];if(!n)return"";const o=h[n];return o?o.replace("_MIN_",u):Qe.formatMessage(x[n],{min:u||5})},Xt=()=>s.createElement(s.Fragment,null,j&&s.createElement(J,null,s.createElement(te,null,K||Qe.formatMessage(x.reviewerInfoFieldLabel)),s.createElement(oe,null,j),s.createElement(ae,{ref:Nt},s.createElement(z.A.Utility,{isIconButton:!0,ButtonIcon:$.A,className:"review-note-info-button",onClickHandler:e=>Dt(e),inputKind:"button",role:"button",label:Qe.formatMessage(x.reviewerInfoIconButtonLabel)}),!ct&&s.createElement(ge,null,s.createElement(ue,null),s.createElement(se,null,G?_??Qe.formatMessage(x.reviewerFieldWithLocationInfoIconText):A??Qe.formatMessage(x.reviewerFieldInfoIconText))))),Ve&&s.createElement(J,null,s.createElement(te,null,Qe.formatMessage(x.countryDropdownLabel),":"),s.createElement(oe,null,(0,M.J)(G)))),Jt=()=>s.createElement(s.Fragment,null,s.createElement(J,null,s.createElement(de,null,Qe.formatMessage(x.reviewerStoryScoreFieldLabel)),s.createElement(me,null,Me),s.createElement(ae,{ref:Bt},s.createElement(z.A.Utility,{isIconButton:!0,ButtonIcon:$.A,className:"review-note-info-button",onClickHandler:e=>(e=>{e.preventDefault(),ft(!bt)})(e),inputKind:"button",role:"button",label:Qe.formatMessage(x.reviewerStoryScoreIconButtonLabel)}),!bt&&s.createElement(ge,null,s.createElement(ue,null),s.createElement(se,null,Qe.formatMessage(x.ratingFieldInfoIconText))))),s.createElement(be,null),s.createElement(le,null,Qe.formatMessage(x.reviewerStoryScoreInfoText))),Zt=Qt(rt,"reviewNote"),en=lt.length>0,tn=e=>{e?.data?.[0]?.filePath&&at(t=>({...t,images:[{id:e?.data?.[0]?.filePath,url:e?.data?.[0]?.encodedURI}]}))},nn=e=>{At(e)},on=He||Qe.formatMessage(x.subscriptionLockActionText),an=s.useMemo(()=>({label:`${Qe.formatMessage(x.subscribeText)} ${on}`,subject:"community_subscribe",source:(0,xe.el)(Ke)}),[on,Ke,Qe]);(0,I.ol)(`.${Ee.i7.SUBSCRIPTION_LOCK}`,void 0,(e,t)=>{e&&!qe&&((0,xe.cj)(an,"impression"),t())},[Ke,qe,an]);const rn=()=>s.createElement(ee,{showTextFieldSoftRoundedEdges:Fe},s.createElement(J,null,s.createElement(ne,null,c??Qe.formatMessage(x.reviewerRatingLabel)),s.createElement(ae,{ref:Mt},Pe&&s.createElement(z.A.Utility,{isIconButton:!0,ButtonIcon:$.A,className:"review-note-info-button",onClickHandler:e=>qt(e),inputKind:"button",role:"button",label:Qe.formatMessage(x.reviewerInfoIconButtonLabel)}),!ut&&s.createElement(ge,null,s.createElement(ue,null),s.createElement(se,null,Qe.formatMessage(x.ratingFieldInfoIconText))))),Oe?s.createElement(P.A,{name:"rating",formName:"rating",placeholder:"0.0",isNumericInput:!0,onInputChange:Et("rating"),isDisabled:nt,hasRoundedEdges:Be,errorPosition:"hideError",hideLabel:!0}):s.createElement(pe,{averageRatingCount:it.rating,isRatingDisabled:!1,onChange:Et("rating"),shouldShowOutline:!1}),((e,t)=>Object.keys(e).length>0&&s.createElement(ye,null,Qt(e,t)))(rt,"rating"));return s.createElement(Q,{ref:n,className:t,"data-testid":"ReviewNotesForm"},Ze&&(Xe?qe?s.createElement(Te,{ariaLabel:$t,onMinimise:Ot,signInURL:B,isSignedIn:Ze,trackAddNoteEvent:Tt,handleUsernameChange:D,siteUserName:j,usernameSignInDek:b},s.createElement(W,{name:"isMinimised",formName:"isMinimised",label:Qe.formatMessage(x.textFieldLabel),placeholder:$t,hasDynamicTextArea:!0,hasBoxShadow:Ue,hasRoundedEdges:Be,tabIndex:"-1","aria-hidden":!0,customHeightMultiplier:We,hideLabel:!0,isInvalid:et,inputRef:Ut,isDisabled:et}),et&&s.createElement(ye,null,y||Qe.formatMessage(x.nonLoggedInErrorMessage))):s.createElement(ke,{className:Ee.i7.SUBSCRIPTION_LOCK},s.createElement("div",{className:"lock-background"},s.createElement(U.A,null)),s.createElement($e,null,s.createElement(Se,{href:Ke,target:"_blank",rel:"noopener noreferrer",onClick:()=>(0,xe.cj)(an,"click")},Qe.formatMessage(x.subscribeText))," ",on)):s.createElement(X,{hasError:!!Zt,hasWarning:en,showTextFieldSoftRoundedEdges:Fe},Me&&Jt(),s.createElement(P.A.MultiLine,{name:"reviewNoteText",placeholder:$t,hideLabel:!0,label:Qe.formatMessage(x.textFieldLabel),formName:"reviewNoteText",hasAutoFocus:!0,hasRoundedEdges:Be,inputRef:Ft,errorText:Zt,onInputChange:Et("reviewNote"),max:ze?1/0:g,errorPosition:"belowTextField",shouldDisableTypingAtMaxChar:!0,isDisabled:nt}),en&&s.createElement(ye,null,lt),ve&&s.createElement(Ce,null,s.createElement(N.A,{onFileChange:tn,onUploadStatusChange:nn,id:"review-note-image-upload",product:"commenting"})),r&&s.createElement(s.Fragment,null,s.createElement(ie,null,H||Qe.formatMessage(x.reviewTagsLabel)),s.createElement(re,{shouldUseInteractiveBrandColor:m,shouldUseFullOpacity:Re},s.createElement(L.A,null,wt&&0!==wt.length?wt.map(({slug:e,active:t,description:n})=>s.createElement(S.A,{key:e,isChecked:t,onChange:()=>Et("toggleChip")(e),shouldUrlRedirect:!1,isDisabled:nt},Qe.formatMessage(x.reviewTags,{reviewTag:n}))):null))),((e,t,n)=>!(!e||!t&&n))(Ie,Ge,Me)&&rn(),Ye&&s.createElement(s.Fragment,null,s.createElement(J,null,s.createElement(ie,null,Qe.formatMessage(x.countryDropdownLabel)),s.createElement(ae,{ref:Rt},je&&s.createElement(z.A.Utility,{isIconButton:!0,ButtonIcon:$.A,className:"review-note-info-button",onClickHandler:e=>Kt(e),inputKind:"button",role:"button",label:Qe.formatMessage(x.reviewerInfoIconButtonLabel)}),!pt&&s.createElement(ge,null,s.createElement(ue,null),s.createElement(se,null,E??Qe.formatMessage(x.locationFieldInfoIconText))))),s.createElement(Ae,{assistiveLabel:"",options:R.A,onInputChange:Et("location"),placeholderText:Qe.formatMessage(x.countryDropdownPlaceholder),isDisabled:nt,isClearable:!0,hideLabel:!0})),Xt(),s.createElement(Z,null,s.createElement(be,null),a&&s.createElement(ce,{dangerouslySetInnerHTML:{__html:a}})),s.createElement(T.A,{confirmButtonCallback:Wt,modalProps:f,onClose:()=>It(!1),isVisible:vt}),s.createElement(he,{"data-testid":"ReviewNotesFormActions"},s.createElement(we,{isDisabled:nt||Ct||Object.keys(rt).length>0||zt(),inputKind:"button",label:Yt,onClickHandler:Vt}),s.createElement(fe,{isDisabled:nt,btnStyle:"text",inputKind:"link",type:"button",label:Qe.formatMessage(x.cancelNoteLabel),onClickHandler:Ht})))))};Ne.propTypes={configuredComponentRef:r().func,addNoteFailedToastMessage:r().string,addNoteLabel:r().string,className:r().string,communityGuidelinesInfo:r().string,handleUsernameChange:r().func,isMinimised:r().bool,isSubscribed:r().bool,locationInfoText:r().string,minimisedReviewNotesText:r().string,modalProps:r().object,nonLoggedInErrorMessage:r().string,onSubmitHandler:r().func,reviewerInfoFieldLabel:r().string,reviewerInfoText:r().string,reviewerLocationInfoText:r().string,reviewerRatingLabel:r().string,reviewNoteTags:r().array,reviewTagsLabel:r().string,shouldEnableCommentsImageUpload:r().bool,shouldEnableLocationDropdown:r().bool,shouldEnableMultipleRatings:r().bool,shouldEnableOptionalRating:r().bool,shouldEnableRatings:r().bool,shouldEnableTags:r().bool,shouldTruncateComments:r().bool,shouldShowLocationInfoAlert:r().bool,shouldShowRatingInfoAlert:r().bool,shouldUseFullOpacity:r().bool,shouldUseInteractiveBrandColor:r().bool,shouldUseNumericRatingInput:r().bool,showMessageBannerHandler:r().func,showSavedRecipeNotes:r().func,showTextFieldBoxShadow:r().bool,showTextFieldRoundedEdges:r().bool,showTextFieldSoftRoundedEdges:r().bool,signInURL:r().string,siteUserLocation:r().string,siteUserName:r().string,subscriptionUrl:r().string,subscriptionLockActionText:r().string,textFieldHeightPx:r().number,usernameSignInDek:r().string,userId:r().string,userStoryRating:r().number,validations:r().shape({errorMessage:r().shape({requiredField:r().string,requiredCountryField:r().string,invalidReviewLength:r().string}),max:r().number,min:r().number,remainingChar:r().number})};const Re=e=>s.createElement(Ne,{...e}),Me=(0,o.y)(Re,"ReviewNotesForm");var Ue=n(60711);const Be=({commentingUrl:e,contentId:t,contentTitle:n="",documentType:o="",handleUsernameChange:i,handleLocationUpdate:a,hed:r,organizationId:l,ratingScale:d,reviewerInfoText:c,reviewerLocationInfoText:m,locationInfoText:u,reviewNoteTags:g,shouldEnableCommentsImageUpload:p,shouldEnableLocationDropdown:h,shouldEnableMultipleComments:b,shouldEnableMultipleRatings:f,shouldEnableOptionalRating:w,shouldEnableRatings:y,shouldEnableTags:v,showMessageBannerHandler:I,showSavedRecipeNotes:C,signInURL:A,siteUserName:$,siteUserLocation:S,tenantID:L,userId:_,usernameSignInDek:x,shouldUseFullOpacity:E,isSubscribed:T=!0,subscriptionUrl:N="/subscribe",subscriptionLockActionText:R,userStoryRating:M,shouldTruncateComments:U=!1})=>{const[B,F]=(0,s.useState)("");(0,s.useEffect)(()=>{const e=window.location.origin+window.location.pathname;F(e)},[]);const O=(e,t,n,o)=>{{const i={type:"submit",label:o||"add note",rating:t,subject:(0,k.ZY)(o),features_list:n};e&&(i.error=e),(0,k.Uw)(i,{skipDuplicateEvent:!1})}};return s.createElement(Me,{shouldUseFullOpacity:E,handleUsernameChange:i,onSubmitHandler:async(i,s)=>{let c,m;const u={hed:r,storyLink:B},{reviewNote:g,rating:p,userId:h,toggleChip:w,images:y,location:v}=i||{},I=w?.filter(e=>e.slug&&e.active)||[],C=I.map(e=>e.slug),A=I.map(e=>({name:e.label.toLowerCase(),index:0,total_index:1})),k={review:{storyID:t,siteID:l,body:g,meta:JSON.stringify(u),rating:p,ratingScale:d,reviewTags:C,tenantID:L,...v&&v.trim()&&{location:v},...y&&y.length>0&&{images:y}},clientMutationId:"0",enableMultipleRatings:f,enableMultipleComments:b},$=h;try{await(0,Ue._u)({id:t,title:n,documentType:o,organizationId:l,commentingUrl:e,console}),c=await(0,Ue.kD)(k,$,e,console),c&&v&&a&&a(v),O(null,p,A,s)}catch(e){m=e.message||"",O(m,p,A,s)}return c},reviewerInfoText:c,reviewerLocationInfoText:m,locationInfoText:u,reviewNoteTags:g,shouldEnableOptionalRating:w,shouldEnableRatings:y,shouldEnableTags:v,shouldEnableCommentsImageUpload:p,shouldEnableLocationDropdown:h,showMessageBannerHandler:I,showSavedRecipeNotes:C,signInURL:A,siteUserName:$,siteUserLocation:S,userId:_,usernameSignInDek:x,isSubscribed:T,subscriptionUrl:N,subscriptionLockActionText:R,userStoryRating:M,shouldEnableMultipleRatings:f,shouldTruncateComments:U})};Be.propTypes={commentingUrl:r().string,contentId:r().string,contentTitle:r().string,documentType:r().string,handleLocationUpdate:r().func,handleUsernameChange:r().func.isRequired,hed:r().string,isSubscribed:r().bool,locationInfoText:r().string,organizationId:r().string,ratingScale:r().number,reviewerInfoText:r().string,reviewerLocationInfoText:r().string,reviewNoteTags:r().array,shouldEnableCommentsImageUpload:r().bool,shouldEnableLocationDropdown:r().bool,shouldEnableMultipleComments:r().bool,shouldEnableMultipleRatings:r().bool,shouldEnableOptionalRating:r().bool,shouldEnableRatings:r().bool,shouldEnableTags:r().bool,shouldTruncateComments:r().bool,shouldUseFullOpacity:r().bool,showMessageBannerHandler:r().func,showSavedRecipeNotes:r().func.isRequired,signInURL:r().string,siteUserLocation:r().string,siteUserName:r().string,subscriptionUrl:r().string,subscriptionLockActionText:r().string,tenantID:r().string,userId:r().string,usernameSignInDek:r().string,userStoryRating:r().number};const Fe=Be;var Oe=n(45135);const De=(0,_.YK)({hed:{id:"UserNameModal.Hed",defaultMessage:"Create username",description:"UserNameModal component hed text"},dek:{id:"UserNameModal.Dek",defaultMessage:"Your username will appear next to any comments and replies you add.",description:"UserNameModal component description text"},submitButtonLabel:{id:"UserNameModal.SubmitButtonLabel",defaultMessage:"Save Username",description:"UserNameModal component submit button label"},submitButtonLabelComment:{id:"UserNameModal.SubmitButtonLabelComment",defaultMessage:"Save and add comment",description:"UserNameModal component submit button label for comment"},submitButtonLabelReply:{id:"UserNameModal.SubmitButtonLabelReply",defaultMessage:"Save and add reply",description:"UserNameModal component submit button label for reply"},closeButtonLabel:{id:"UserNameModal.CloseButtonLabel",defaultMessage:"Close User Name",description:"UserNameModal component close button label"},lengthError:{id:"UserNameModal.lengthError",defaultMessage:"Usernames must be between 2 and 23 characters.",description:"UserNameModal component length error"},specialCharError:{id:"UserNameModal.specialCharError",defaultMessage:"Usernames can only include letters, numbers and underscores (_).",description:"UserNameModal component special chars validation error"},alreadyTakenError:{id:"UserNameModal.alreadyTakenError",defaultMessage:"This username is already taken",description:"UserName already taken error"},userNameModalAssistiveText:{id:"UserNameModal.UserNameModalAssistiveText",defaultMessage:"Usernames must be between 2 and 23 characters and can only include letters, numbers and underscores (_).",description:"UserNameModal Assistive Text"},errorMessage:{id:"UserNameModal.ErrorMessage",defaultMessage:"Unable to save username. Please try again.",description:"UserNameModal default error message"},successMessage:{id:"UserNameModal.SuccessMessage",defaultMessage:"Username saved",description:"UserNameModal success message"}});var qe=n(76399),Ke=n(20312),He=n.n(Ke);const Pe=(0,B.Ay)(F.vm).withConfig({displayName:"UserNameModalHed"}).attrs(e=>({as:"div",colorToken:"colors.discover.body.white.heading",topSpacing:1,typeIdentity:"typography.definitions.consumptionEditorial.display-small",...e}))`
  padding-top: ${(0,O.Kq)(2.5)};
  padding-bottom: ${(0,O.Kq)(2.5)};
  text-align: center;
`,je=B.Ay.p.withConfig({displayName:"UserNameModalDek"})`
  ${(0,O.Gg)("typography.definitions.consumptionEditorial.body-core")}
  margin: 0;
  text-align: center;
  color: ${(0,O.HK)("colors.consumption.body.standard.body")};
`,Ge=(0,B.Ay)(z.A.Utility).withConfig({displayName:"UserNameModalCloseButton"})`
  position: absolute;
  top: ${(0,O.Kq)(1)};
  right: ${(0,O.Kq)(1)};
  padding: 0;
  fill: ${(0,O.HK)("colors.discovery.body.light.context-tertiary")};

  .icon-close {
    padding: 8px;
  }

  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
  }
`,ze=(0,B.Ay)(z.A.Primary).withConfig({displayName:"UserNameModalSubmit"})`
  margin-top: 0;
  padding: 0;
`,Ye=B.Ay.div.withConfig({displayName:"UserNameModalButtons"})`
  display: flex;
  justify-content: center;
  margin-top: ${(0,O.Kq)(4)};
  @media (max-width: ${D.LO.md}) {
    margin-top: ${(0,O.Kq)(3)};
  }
  width: 100%;

  ${ze} {
    padding: 0;
    width: 100%;
  }
`;function Ve({className:e,...t}){const n=`${e}__content`,o=`${e}__overlay`;return s.createElement(He(),{ref:t.configuredComponentRef,portalClassName:e,className:n,overlayClassName:o,...t})}Ve.propTypes={className:r().string,configuredComponentRef:r().func};const We=(0,B.Ay)(Ve).withConfig({displayName:"UserNameModalBaseWrapper"})`
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${D.KV.interstitialLayer};

    background-color: rgba(
      ${(0,O.HK)("colors.background.black",{rgbOnly:!0})},
      0
    );

    &.ReactModal__Overlay--after-open {
      transition: background-color 750ms;
      opacity: 1;
      background-color: rgba(
        ${(0,O.HK)("colors.background.black",{rgbOnly:!0})},
        0.4
      );
    }

    &.ReactModal__Overlay--after-close {
      transition: background-color 750ms;
      background-color: rgba(
        ${(0,O.HK)("colors.background.black",{rgbOnly:!0})},
        0
      );
    }
  }

  &__content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border-radius: 8px;
    background-color: ${(0,O.HK)("colors.background.white")};
    padding-top: ${(0,O.Kq)(12)};
    padding-right: ${(0,O.Kq)(6)};
    padding-bottom: ${(0,O.Kq)(7)};
    padding-left: ${(0,O.Kq)(6)};
    width: ${(0,O.Kq)(57)};
    min-height: ${(0,O.Kq)(62)};
    overflow-y: auto;
    @media (max-width: ${D.LO.md}) {
      width: 90%;
    }
  }
`,Qe=(0,B.Ay)(P.A.SingleLine).withConfig({displayName:"UserNameModalTextFieldWrapper"})`
  ${H.tw} {
    margin-top: ${(0,O.Kq)(6)};
    ${(0,O.Gg)("typography.definitions.globalEditorial.accreditation-feature")};
    ${(0,O._o)("color","colors.interactive.base.body")};
    @media (max-width: ${D.LO.md}) {
      margin-top: ${(0,O.Kq)(4)};
    }
  }
`,Xe=({className:e,configuredComponentRef:t,dangerousDek:n,dangerousHed:o,isVisible:i=!1,maxLength:a=23,minLength:r=2,organizationId:c,showMessageBannerHandler:m,submitButtonLabel:u,successCallback:g,userApiUrl:h,userId:b,source:f,isFeatured:w,usernameModalConf:y})=>{s.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(v.G.RENDER,{name:"UserNameModal"})},[]);const{formatMessage:I}=(0,l.A)(),[C,A]=(0,s.useState)(""),[$,S]=(0,s.useState)(""),L={lengthError:I(De.lengthError),specialCharError:I(De.specialCharError)};return s.createElement(We,{configuredComponentRef:t,className:e,isOpen:i},s.createElement(Ge,{isIconButton:!0,ariaLabel:I(De.closeButtonLabel),label:I(De.closeButtonLabel),role:"button",onClickHandler:()=>{(0,E.hY)(),(0,k.lV)({type:"exit",subject:"username_modal",source_type:f,...(0,xe.i3)(w)}),A(null)},ButtonIcon:qe.A}),s.createElement(Pe,null,o||I(De.hed)),s.createElement(je,{dangerouslySetInnerHTML:{__html:n||I(De.dek)}}),s.createElement(Qe,{className:"user-name-modal",hasAutoFocus:!0,shouldUseUppercase:!0,name:"username",placeholder:"YOUR_USERNAME",type:"text",onInputChange:e=>{let{value:t}=e.target;t.length>a&&(t=t.slice(0,a),e.target.value=t),S(t)},errorText:C,isInvalid:!!C,formName:"username",errorPosition:"belowTextField",hideLabel:!0,label:I(De.hed),assistiveSubtext:I(De.userNameModalAssistiveText)}),s.createElement(Ye,null,s.createElement(ze,{label:u||("community_comment"===f?y?.submitButtonLabel?y.submitButtonLabel:I(De.submitButtonLabelComment):I("community_reply"===f?De.submitButtonLabelReply:De.submitButtonLabel)),inputKind:"submit","data-testid":"UserNameModalSubmit",onClickHandler:async()=>{let e;const t=((e,t)=>{const{minLength:n,maxLength:o}=t,i=d.string().min(n).max(o).required(),a=d.string().regex(/^[a-zA-Z0-9_]+$/).required();return i.validate(e).error?"lengthError":a.validate(e).error?"specialCharError":null})($,{minLength:r,maxLength:a});if(t){return void A(L[t]??"")}let n;try{n=await(async(e,t)=>{const{name:n,location:o,organizationId:i,userId:a,url:r,action:s}=e,l={operationName:"UPDATE"===s?"updateSiteUsername":"createSiteUsername",query:"UPDATE"===s?"\n  mutation updateSiteUsername($input: UpdateSiteUsernameInput!) {\n    updateSiteUsername(input: $input) {\n      siteUsername {\n        name\n        siteID\n        location\n      }\n    }\n  }\n":"\n  mutation createUsername($input: CreateSiteUsernameInput!) {\n    createSiteUsername(input: $input) {\n      siteUsername {\n        name\n        siteID\n        location\n      }\n    }\n  }\n",variables:{input:{siteUsername:{name:n,siteID:i,authorID:a,location:o},clientMutationId:"0"}}};try{const e=await p(r,l);return e&&e["UPDATE"===s?"updateSiteUsername":"createSiteUsername"]?.siteUsername?.name}catch(e){let n;throw(null===e.response?.data&&"DUPLICATE_USERNAME"===e.response?.errors[0]?.extensions?.code||"InternalDevelopmentError: Duplicate Brand Username"===e.response?.errors[0]?.message)&&(n="already_taken"),t.warn(`Error making GQL request in createNewUsername: ${e?.response?.errors[0]?.message}`),new Error(n)}})({name:$,organizationId:c,userId:b,url:h},console),S(n),A(null),m&&m(I(De.successMessage)),(0,E.hY)(),g&&g(n)}catch(t){"already_taken"===t?.message?(A(I(De.alreadyTakenError)),e=t?.message):(m&&m(I(De.errorMessage)),(0,E.hY)(),e=De.errorMessage.defaultMessage)}const o={type:"submit",label:"SAVE USERNAME",subject:"username_modal",source_type:f,error:e,...(0,xe.i3)(w)};(0,k.lV)(o)}})))};Xe.propTypes={configuredComponentRef:r().func,className:r().string,dangerousDek:r().string,dangerousHed:r().string,isFeatured:r().bool,isVisible:r().bool,maxLength:r().number,minLength:r().number,organizationId:r().string.isRequired,showMessageBannerHandler:r().func,source:r().string,submitButtonLabel:r().string,successCallback:r().func,userApiUrl:r().string.isRequired,userId:r().string.isRequired,usernameModalConf:r().object};const Je=(0,o.y)(Xe,"UserNameModal"),Ze=(0,Oe.Ng)(e=>{const{userNameModalConfig:t}=e;return{...t}})(Je);var et=n(92867),tt=n(22761),nt=n(78372);const ot=({dek:e,hed:t,isBookmarkingEnabled:n,subContentDek:o,showCommentSavedMessage:i,showSignInButton:a,signInURL:r,commentMessageBannerIcon:d,hideDivider:c,shouldUseSeparateCTAs:m=!1,subscriptionUrl:u="/subscribe"})=>{const{formatMessage:g}=(0,l.A)(),p=(e,t)=>{const n={type:"login",label:t,subject:"community",placement:"interstitial",state:"focused",paywall_source:e};(0,k.ZL)(n)};return(0,I.ol)(`.${Ee.i7.SUBSCRIBE_BUTTON}`,void 0,(e,t)=>{a&&m&&e&&((0,xe.cj)({source:(0,xe.el)(u),subject:"community_subscribe",label:g(et.A.subscribeButtonLabel)},"impression"),t())},[u,a,m]),s.createElement(tt.M1,{hasSideBorder:i,hideDivider:c},d&&s.createElement(tt.Jq,{className:"comment-message-banner-icon",dangerouslySetInnerHTML:{__html:d}}),s.createElement(tt.vw,null,t),e&&s.createElement(tt.yt,{dangerouslySetInnerHTML:{__html:e}}),i&&s.createElement(tt.yt,{dangerouslySetInnerHTML:{__html:o}}),a&&m&&s.createElement(tt.WN,null,s.createElement(z.A.Primary,{href:u,inputKind:"link",label:g(et.A.subscribeButtonLabel),target:"_blank",rel:"nofollow noreferrer",onClickHandler:e=>{(0,xe.cj)({label:e.target.innerText,subject:"community_subscribe",source:(0,xe.el)(u)},"click")},className:Ee.i7.SUBSCRIBE_BUTTON}),s.createElement(tt.L4,null,g(et.A.alreadySubscriberLabel),s.createElement(tt.VV,{href:r,onClick:e=>{p("COMMUNITY_LOGIN",e.target.innerText)}},g(et.A.signInLabel)))),a&&!m&&s.createElement(z.A.Primary,{href:r,inputKind:"link",label:g(et.A.signInButtonLabel),target:"_self",rel:"nofollow noreferrer",onClickHandler:e=>{p("COMMUNITY_LOGIN",e.target.innerText)}}),i&&n&&s.createElement(tt.N,{"data-testid":"message-banner-bookmark-wrapper"},s.createElement(nt.c,{link:{label:g(et.A.saveStory),url:"#",network:"bookmark",behavior:"bookmark"},theme:"standard",type:"standard",isUrlBookmark:!0,isBookmarkButton:!0})))};ot.propTypes={commentMessageBannerIcon:r().string,dek:r().string,hed:r().string,hideDivider:r().bool,isBookmarkingEnabled:r().bool,shouldUseSeparateCTAs:r().bool,showCommentSavedMessage:r().bool,showSignInButton:r().bool,signInURL:r().string,subContentDek:r().string,subscriptionUrl:r().string},ot.displayName="CommentingMessageBanner";const it=ot;var at=n(7285),rt=n(26048),st=n(74657);const lt=({listenerRating:e,musicRating:t,totalRatings:n=0,minRatingThreshold:o=5,isSubscribed:i=!0,scoreSubscriptionUrl:a=""})=>{const{formatMessage:r}=(0,l.A)(),{rating:d,message:c}=(()=>{const t=Number(n)||0;return i?0===t?{rating:"-",message:r(st.A.noListenerScoreYet)}:t<o?{rating:"-",message:r(st.A.listenerScoreAvailableAfter,{count:o})}:{rating:e||0,message:null}:{rating:e||0,message:r(st.A.subscribeToSee,{subscribe:s.createElement("a",{href:"/subscribe",className:"subscribe-link"},r({id:"ScoreComparison.subscribe",defaultMessage:"Subscribe"}))})}})();return s.createElement(w.ZZ,null,s.createElement(w.w0,null,s.createElement(w.Xo,{align:"flex-end"},s.createElement(w.Nc,null,s.createElement(rt.A,{enableBlur:!0,rating:t?.score||0,isBestNewMusic:t?.isBestNewMusic,isBestNewReissue:t?.isBestNewReissue,size:"sm",shouldTrackImpression:!0,trackingSubject:"score_comparison",scoreSubscriptionUrl:a,trackingClassName:"score-box-comparison"}),s.createElement(w.Bs,null,r(st.A.pitchforkScoreLabel)))),s.createElement(w.CH,null),s.createElement(w.Xo,{align:"flex-start"},s.createElement(w.Nc,null,s.createElement(at.A,{enableBlur:!0,rating:d,size:"lg"}),s.createElement(w.Bs,null,r(st.A.listenerScoreLabel))))),c&&(i?s.createElement(w.pV,null,c):s.createElement(w.GM,null,s.createElement(U.A,null),c)))};lt.propTypes={isSubscribed:r().bool,listenerRating:r().number,minRatingThreshold:r().number,musicRating:r().object,scoreSubscriptionUrl:r().string,totalRatings:r().oneOfType([r().number,r().string])};const dt=lt;var ct=n(92945);const mt="ReviewListTitle",ut=[{active:!1,description:"Includes a tip",label:"Tip",slug:"TIP"},{active:!1,description:"Includes a question",label:"Question",slug:"QUESTION"}],gt=({brandName:e,closeCommentStreamMessage:t,commentCount:n,commentingRestrictedTo:o,commentingUrl:i,communityExperience:{commentsOrderBy:a,repliesOrderBy:r,disableCommentStream:d,enableMultipleComments:c,enableMultipleRatings:m,enableOptionalRatings:u,enableRatings:g,enableReplies:k,enableTags:$,enableCommentsImageUpload:S,enableRepliesImageUpload:L,enableUpvotes:_,enableLocationDropdown:x,hasHideCommunityFunctionalTag:E,noCommentsYetIcon:T,joinCommunityIcon:N,commentSubmittedIcon:R,commentsClosedIcon:M,enableRepliesRestriction:U,enableArtistQA:B},communityUrl:F="/info/community-guidelines",configuredComponentRef:O,ContentWrapper:q=C.A.ContentWithAdRailNarrow,documentType:K="",defaultReplyLimit:H=1,hideMessageBannerDivider:P,hed:j,id:G,imageUpload:{spectraUrl:z}={},isCommentLoading:Y=!0,initialReviewLimit:V=7,likeActionErrorMessage:W,communityLogo:Q,noCommentsMsgConf:X,organizationId:J,ratingScale:Z=5,replyLimit:ee=10,reviewerBadges:te,reviewerInfoText:ne,reviewerLocationInfoText:oe,locationInfoText:ie,reviewLimit:ae=10,reviewModalProps:re,reviewNotesFormSignInURL:se,reviewNoteTags:le=ut,reviewsSectionTitle:de,isBookmarkingEnabled:ce,savedCommentConf:me,shouldEnableLocationDropdown:ue=!1,shouldShowUserScore:ge=!1,shouldUseAlternateColorToken:pe=!1,shouldUsePrimaryColorForBadges:he=!1,shouldUseTagsInvertedTheme:be=!1,shouldUseFullOpacity:fe=!1,shouldShowCircularRatings:we=!1,ratingPlacement:ye,shouldUseDarkPinnedTheme:ve=!1,shouldUseSoftRoundedEdges:Ie=!1,showMoreButtonLabel:Ce,repliesMarketRestrictedTooltip:Ae,signInHed:ke,signInHedSpanTag:$e,signInMessage:Se,signUpMessageBannerHed:Le,subscriptionModalProps:_e,tenantID:Te,unlikeActionErrorMessage:Ne,upvoteIcon:Re,upvoteIconFilled:Me,showUpvoteLabel:Ue=!1,useVoteLabels:Be=!1,user:Oe,usernameModalConf:De,showScoreComparison:qe,musicRating:Ke,rating:He,reviewsCount:Pe,subscriptionUrl:je="/subscribe",minListenerScoreThreshold:Ge=5,shouldUseTwoDigitCommentCount:ze=!1,shouldUseSeparateCTAs:Ye=!1,reviewSectionSubtext:Ve,reviewSectionSubtextUrl:We="/info/scoring-guidelines",shouldTruncateComments:Qe=!1,truncateLines:Xe=5,subscriptionLockActionText:Je,isMultiReview:tt=!1,scoreSubscriptionUrl:nt=""})=>{s.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(v.G.RENDER,{name:"Commenting"})},[]);const[ot,at]=(0,s.useState)(),[rt,st]=(0,s.useState)(),[lt,gt]=(0,s.useState)(!1),[pt,ht]=(0,s.useState)(null),[bt,ft]=(0,s.useState)(!1),[wt,yt]=(0,s.useState)(!0),[vt,It]=(0,s.useState)(je),[Ct,At]=(0,s.useState)(je);(0,Ee.xf)(D.h2);const{header:kt,description:$t,showSignInButton:St,subContent:Lt,commentMessageBannerIcon:_t,isNoCommentsScenario:xt}=(0,Ee.eK)({noCommentsMsgConf:X,disableCommentStream:d,closeCommentStreamMessage:t,showCommentSavedMessage:bt,communityUrl:F,isCommentLoading:Y,commentCount:n,user:Oe,signUpMessageBannerHed:Le,brandName:e,savedCommentConf:me,noCommentsYetIcon:T,joinCommunityIcon:N,commentSubmittedIcon:R,commentsClosedIcon:M}),{userRating:Et}=(0,Ee.Xp)({shouldShowUserScore:ge,commentingUrl:i,user:Oe,storyID:G}),Tt=Oe.isAuthenticated&&Oe.amguuid&&J,Nt=(0,Ee.bS)(o),Rt=(0,Ee.vD)({enableRepliesRestriction:U}),Mt=k&&!Rt;(0,s.useEffect)(()=>{Tt&&async function(){try{const e=await(async(e,t,n)=>{if(!n)return;const o={operationName:"getSiteUsername",query:"\n  query getSiteUsername($authorID: String!, $siteID: String) {\n    siteUsername(authorID: $authorID, siteID: $siteID) {\n      id\n      name\n      tenantID\n      authorID\n      location\n    }\n  }\n",variables:{authorID:e,siteID:t}};let i,a;try{const e=await p(n,o);if(0===e?.siteUsername?.length)i=null,a=null;else{const t=e&&e.siteUsername[0];i=t?.name,a=t?.location}}catch(e){}return{username:i,location:a}})(Oe.amguuid,J,i);at(e?.username),st(e?.location)}catch(e){throw e}}()},[Tt,i,Oe.amguuid,J]),(0,I.ol)(`.${mt}`,void 0,e=>{e&&n&&(0,xe.AS)(n,"community")},[n]);const{formatMessage:Ut}=(0,l.A)(),{subscribeUrl:Bt="",interactionSubscribeUrl:Ft=""}=(0,ct.P)("listener.review.gated"),Ot=!!Bt;if((0,s.useEffect)(()=>{Ot&&(yt(!1),Bt&&It(Bt),Ft&&At(Ft))},[Ot,Bt,Ft]),E)return null;if(!Nt)return null;const Dt=e=>{at(e)},qt=e=>{ht(e),gt(!0),setTimeout(()=>{gt(!1)},3e3)};return s.createElement(q,null,s.createElement("div",{ref:O,className:D.h2,id:D.h2,"data-journey-hook":"page-footer","data-nosnippet":"true"},s.createElement(w.op,{hasSubtext:!!Ve},s.createElement(w.FM,{className:mt},(0,Ee.YL)(n,de,"",ze)),s.createElement(w.hh,{href:"#main-content"},Ut(et.A.utilityLabel),s.createElement(w.sh,null))),Ve&&s.createElement(w.qJ,null,Ve," ",s.createElement(w.Mc,{href:We},Ut(et.A.guidelinesLinkText))),qe&&!tt&&s.createElement(dt,{listenerRating:He,musicRating:Ke,totalRatings:Pe,minRatingThreshold:Ge,scoreSubscriptionUrl:nt}),Oe.isAuthenticated&&s.createElement(Ze,{organizationId:J,userId:Oe.amguuid,userApiUrl:i,showMessageBannerHandler:qt,usernameModalConf:De}),(kt||$t)&&s.createElement(it,{hed:kt,dek:$t,showSignInButton:St,signInURL:se,isBookmarkingEnabled:ce,subContentDek:Lt,showCommentSavedMessage:bt,commentMessageBannerIcon:_t,hideDivider:P&&xt,shouldUseSeparateCTAs:Ye,subscriptionUrl:vt}),!d&&s.createElement(Fe,{commentingUrl:i,contentId:G,handleUsernameChange:Dt,handleLocationUpdate:e=>{st(e)},hed:j,organizationId:J,ratingScale:Z,reviewerInfoText:ne,reviewerLocationInfoText:oe,locationInfoText:ie,reviewNoteTags:le,shouldEnableMultipleComments:c,shouldEnableMultipleRatings:m,shouldEnableOptionalRating:u,shouldEnableRatings:g,shouldEnableTags:$,shouldEnableCommentsImageUpload:S,shouldEnableLocationDropdown:ue,showMessageBannerHandler:qt,showSavedRecipeNotes:e=>{ft(e)},signInURL:se,siteUserName:ot,siteUserLocation:rt,tenantID:Te,userId:Oe.isAuthenticated?Oe.amguuid:null,usernameSignInDek:De?.dek,contentTitle:j,documentType:K,shouldUseFullOpacity:fe,isSubscribed:wt,subscriptionUrl:vt,subscriptionLockActionText:Je,userStoryRating:Et,shouldTruncateComments:Qe}),s.createElement(A.A,{shouldUseAlternateColorToken:pe,shouldUsePrimaryColorForBadges:he,shouldUseTagsInvertedTheme:be,shouldUseFullOpacity:fe,shouldShowCircularRatings:we,ratingPlacement:ye,shouldUseDarkPinnedTheme:ve,shouldUseSoftRoundedEdges:Ie,commentingUrl:i,defaultReplyLimit:H,entityId:G,handleUsernameChange:Dt,id:"reviews",initialReviewLimit:V,likeActionErrorMessage:W,replyLimit:ee,commentsOrderBy:a,repliesOrderBy:r,reviewerBadges:te,reviewLimit:ae,shouldEnableRatings:g,shouldEnableReply:Mt,communityLogo:Q,useVoteLabels:Be,shouldEnableTags:$,shouldEnableUpvotes:_,upvoteIcon:Re,upvoteIconFilled:Me,showUpvoteLabel:Ue,showMessageBannerHandler:qt,showMoreButtonLabel:Ce,repliesMarketRestrictedTooltip:Ae,signInHed:ke||Ut(et.A.signInModalHed),signInHedSpanTag:$e||Ut(et.A.signInModalHedSpanTag,{brandName:e}),signInMessage:Se||Ut(et.A.signInModalMessage),reviewModalProps:re||{hed:Ut(et.A.replyDiscardModalHed)},reviewNoteTags:le,siteUserName:ot,unlikeActionErrorMessage:Ne,user:Oe,usernameSignInDek:De?.dek,organizationId:J,contentTitle:j,documentType:K,shouldEnableCommentsImageUpload:S,shouldEnableRepliesImageUpload:L,shouldShowLocation:ue,spectraUrl:z,shouldShowQaSection:B,enableRepliesMarketRestriction:Rt,shouldTruncateComments:Qe,truncateLines:Xe,isSubscribed:wt,subscriptionUrl:Ct,subscriptionModalProps:_e})),s.createElement(y.A,null,s.createElement("aside",{"data-testid":"ReviewFeedbackAside"},s.createElement(f.Z,{group:"ads"},s.createElement(h.A,{position:"rail"})))),lt&&s.createElement(b.A,{contentAlign:"center",isFixed:!0,position:"top-centre",shouldShowCloseButton:!0,isDisclaimer:!0,delayDuration:3e3},s.createElement("p",null,pt)))};gt.propTypes={configuredComponentRef:r().func,brandName:r().string,closeCommentStreamMessage:r().string,commentCount:r().number,commentingRestrictedTo:r().arrayOf(r().string),commentingUrl:r().string.isRequired,communityExperience:r().shape({commentsOrderBy:r().string,repliesOrderBy:r().string,disableCommentStream:r().bool,enableMultipleComments:r().bool,enableMultipleRatings:r().bool,enableOptionalRatings:r().bool,enableRatings:r().bool,enableReplies:r().bool,enableTags:r().bool,enableCommentsImageUpload:r().bool,enableRepliesImageUpload:r().bool,enableUpvotes:r().bool,enableLocationDropdown:r().bool,hasHideCommunityFunctionalTag:r().bool,noCommentsYetIcon:r().string,joinCommunityIcon:r().string,commentSubmittedIcon:r().string,commentsClosedIcon:r().string,enableRepliesRestriction:r().bool,enableArtistQA:r().bool}),communityLogo:r().object,communityUrl:r().string,ContentWrapper:r().elementType,documentType:r().string,defaultReplyLimit:r().number,hideMessageBannerDivider:r().bool,hed:r().string.isRequired,id:r().string.isRequired,imageUpload:r().shape({spectraUrl:r().string}),initialReviewLimit:r().number,isBookmarkingEnabled:r().bool,isCommentLoading:r().bool,isMultiReview:r().bool,shouldUseSeparateCTAs:r().bool,likeActionErrorMessage:r().string,locationInfoText:r().string,minListenerScoreThreshold:r().number,musicRating:r().object,noCommentsMsgConf:r().object,organizationId:r().string.isRequired,rating:r().number,ratingPlacement:r().oneOf(["ReviewMetaGrid","ReviewListMetaInfo"]),ratingScale:r().number,replyLimit:r().number,reviewerBadges:r().arrayOf(r().shape({role:r().string,badge:r().string})),reviewerInfoText:r().string,reviewerLocationInfoText:r().string,reviewLimit:r().number,reviewModalProps:r().object,reviewNotesFormSignInURL:r().string,reviewNoteTags:r().arrayOf(r().shape({active:r().bool,description:r().string,label:r().string,slug:r().string})),reviewsCount:r().number,reviewsSectionTitle:r().string,savedCommentConf:r().object,shouldEnableLocationDropdown:r().bool,shouldShowCircularRatings:r().bool,shouldShowUserScore:r().bool,shouldUseAlternateColorToken:r().bool,shouldUsePrimaryColorForBadges:r().bool,shouldUseTagsInvertedTheme:r().bool,shouldUseDarkPinnedTheme:r().bool,shouldUseSoftRoundedEdges:r().bool,shouldUseFullOpacity:r().bool,shouldUseTwoDigitCommentCount:r().bool,showMoreButtonLabel:r().string,repliesMarketRestrictedTooltip:r().string,showScoreComparison:r().bool,shouldTruncateComments:r().bool,scoreSubscriptionUrl:r().string,subscriptionModalProps:r().object,subscriptionUrl:r().string,subscriptionLockActionText:r().string,showUpvoteLabel:r().bool,signInHed:r().string,signInHedSpanTag:r().string,signInMessage:r().string,signUpMessageBannerHed:r().string,tenantID:r().string.isRequired,truncateLines:r().number,unlikeActionErrorMessage:r().string,upvoteIcon:r().string,upvoteIconFilled:r().string,useVoteLabels:r().bool,user:r().shape({isAuthenticated:r().bool.isRequired,amguuid:r().string}).isRequired,usernameModalConf:r().object,reviewSectionSubtext:r().string,reviewSectionSubtextUrl:r().string};const pt=(0,i.M3)(gt,{keysToPluck:["communityExperience","brandName","user","communityLogo","imageUpload"],keysToSpread:["commentAttributes","comments","recaptcha"]}),ht=(0,o.y)(pt,"Commenting")},85554(e,t,n){n.d(t,{$D:()=>S,AI:()=>M,Ew:()=>C,HX:()=>I,M$:()=>v,P$:()=>E,QO:()=>p,TS:()=>_,Xp:()=>h,Xq:()=>U,YL:()=>g,a8:()=>N,bS:()=>w,eK:()=>b,i7:()=>B,iz:()=>x,vD:()=>y,xf:()=>L,zx:()=>F});var o=n(6765),i=n(96540),a=n(6442),r=n(53788),s=n(60711),l=n(56892),d=n(67198),c=n(92867),m=n(24494),u=n(26022);const g=(e,t,n="",o=!1)=>{const i=t||"Comments";if(!e&&!n)return i;return`${i}${e&&e>0?` (${a=e,o&&a<10?`0${a}`:a})`:` ${n}`}`;var a},p=({commentingUrl:e,defaultReplyLimit:t,entityId:n,initialReviewLimit:o,shouldShowQaSection:a,setCommentCount:r,setIsCommentLoading:l,commentsOrderBy:d,repliesOrderBy:c})=>{const[m,u]=(0,i.useState)(!0),[g,p]=(0,i.useState)([]),[h,b]=(0,i.useState)([]),[f,w]=(0,i.useState)([]),[y,v]=(0,i.useState)(null),[I,C]=(0,i.useState)({hasNextPage:!1,endCursor:""}),[A,k]=(0,i.useState)({hasNextPage:!1,endCursor:""});return(0,i.useEffect)(()=>{e&&async function(){try{const i=(0,s.Pb)(n,e,console),l=(0,s.SW)({entityId:n,commentingUrl:e,commentsOrderBy:d,repliesOrderBy:c,reviewLimit:o,replyLimit:t}),m=(0,s.$u)({entityId:n,commentingUrl:e,repliesOrderBy:c}),u=a?(0,s.Jn)({entityId:n,commentingUrl:e,repliesOrderBy:c}):Promise.resolve(null),[g,h,f,y]=await Promise.all([i,l,m,u]);if(g?.commentsCount&&r(g.commentsCount),g?.commentTagLabel&&v(g.commentTagLabel),f?.reviews&&b(f.reviews),a){if(y?.reviews&&y.page){const e=y.reviews;w(e),k(y.page)}}else h?.reviews&&h.page&&(p(h.reviews),C(h.page))}catch(e){}u(!1),l(!1)}()},[e,d,c,n,t,o,a,r,l,u,C,p]),{isLoading:m,reviews:g,page:I,setPage:C,featuredReviews:h,qaReviews:f,qaPage:A,setQaPage:k,commentTagLabel:y}},h=({shouldShowUserScore:e,commentingUrl:t,user:n,storyID:o})=>{const a=n.isAuthenticated&&n.amguuid,[r,l]=(0,i.useState)(null);return(0,i.useEffect)(()=>{!async function(){if(!e)return;if(!a)return;const n=await(0,s.O_)(o,t,console);n&&l(n.userStoryRating?.rating)}()},[a,o,t,e]),{userRating:r}},b=({noCommentsMsgConf:e={},disableCommentStream:t,closeCommentStreamMessage:n,showCommentSavedMessage:o,communityUrl:i,isCommentLoading:r,commentCount:s,user:l,signUpMessageBannerHed:d,brandName:m,savedCommentConf:u={},noCommentsYetIcon:g,joinCommunityIcon:p,commentSubmittedIcon:h,commentsClosedIcon:b})=>{const{formatMessage:f}=(0,a.A)(),w=!(l.isAuthenticated&&l.amguuid);if(t)return{header:n||f(c.A.closeCommentStreamMessage),description:"",showSignInButton:!1,subContent:"",commentMessageBannerIcon:b};if(o){const{title:e=f(c.A.SavedCommentMsgTitle),dek:t=f(c.A.SavedCommentDek),dekTrail:n=f(c.A.SavedCommentDekTrail),subContent:o=f(c.A.SavedCommentSubContent)}=u;return{header:e,description:`${t}<br />${`<a href="${i}" class="community-link">${f(c.A.CommunityGuidelines)}</a>`} ${n}`,subContent:o,showSignInButton:!1,commentMessageBannerIcon:h}}if(!r&&!s){const{hed:t=f(c.A.emptyCommentMsgHed),dek:n=f(c.A.emptyCommentMsgDek),signOutDek:o=f(c.A.signOutEmptyCommentMsgDek)}=e;return{header:t,description:w?o:n,showSignInButton:w,subContent:"",commentMessageBannerIcon:g,isNoCommentsScenario:!0}}return!r&&w?{header:d||f(c.A.signUpMessageBannerHed,{brandName:m}),showSignInButton:!0,description:"",subContent:"",commentMessageBannerIcon:p}:{header:"",description:"",showSignInButton:!1,subContent:""}},f=(e,t)=>{if(!t)return!1;const n=(e=>{const t=(0,o.A)(e),n=t?.fct||{};return Object.values(n).flat()})(t);if(!n?.length)return!1;return n.some(t=>e.includes(t))},w=e=>{if(!e?.length)return!0;const t=(0,l.getCookie)(r.A.accessCookie);if(!t)return!1;return f(e,t)},y=({enableRepliesRestriction:e})=>{const t=((0,l.getCookie)("CN_geo_country_code")||"").toLowerCase();return e&&m.A.includes(t)},v={LEAVE_RATING:"leave-a-rating",LEAVE_REPLY:"leave-a-reply",LIKE_COMMENT:"like-a-comment",LIKE_REPLY:"like-a-reply",REPLY_TO_REPLY:"reply-to-reply"},I={[v.LIKE_COMMENT]:"community_like",[v.LIKE_REPLY]:"community_like",[v.LEAVE_REPLY]:"community_reply",[v.REPLY_TO_REPLY]:"community_reply",[v.LEAVE_RATING]:"community_rating"},C=()=>{const[e,t]=(0,i.useState)(null),n=(0,i.useRef)(null),o=(0,i.useCallback)(e=>{t(t=>t===e?null:e)},[]),a=(0,i.useCallback)(()=>{t(null)},[]);return(0,u.A)(n,a),{activeId:e,tooltipRef:n,toggleForId:o,close:a}},A=({pathname:e,search:t,hash:n})=>`${e}${t}${n}`,k=({href:e,hashValue:t})=>{const n=new URL(e);return t&&(n.hash=t),n},$=({href:e,queryParams:t})=>{const n=new URL(e),o=new URLSearchParams(t);for(const[e,t]of o)n.searchParams.set(e,t);return n},S=({href:e,hashValue:t,queryParams:n})=>{const o=k({href:e,hashValue:t}),i=$({href:o.href,queryParams:n});return A(i)},L=e=>{const[t,n]=(0,i.useState)({height:0,isStable:!1}),[o,a]=(0,i.useState)(null),r=()=>{const e=window.document.body.scrollHeight;n(t=>({height:e,isStable:t.height===e}))};(0,i.useEffect)(()=>{if(e&&(({hash:e})=>!!e&&Object.values(v).some(t=>e.includes(t)))(window.location))return!o&&a(window.setInterval(r,750)),t.isStable&&((0,d.A)(`.${e}`),window.clearInterval(o),window.history.replaceState(null,"",(({url:e})=>e.split("#")[0])({url:S(window.location)}))),()=>{window.clearInterval(o)}},[e,t.isStable,o])},_=({searchParams:e})=>Object.fromEntries(new URLSearchParams(e)),x=({href:e,paramsToRemove:t})=>{const n=new URL(e);return t.forEach(e=>n.searchParams.delete(e)),A(n)},E=({reactions:e,id:t})=>{const n=e[t]||{},{viewerActionPresence:o=!1,reactionCount:i=0}=n;return{...e,[t]:{reactionCount:o?i-1:i+1,viewerActionPresence:!o}}},T=({reactions:e,id:t,reactionCount:n,viewerActionPresence:o})=>(e[t]||(e[t]={reactionCount:n,viewerActionPresence:o}),e),N=(e,{id:t,actionCounts:n,viewerActionPresence:o})=>(T({reactions:e,id:t,reactionCount:n?.reaction?.total||0,viewerActionPresence:o?.reaction}),e),R=(e,{commentId:t,reactionCount:n,viewerActionPresence:o,replies:i})=>(T({reactions:e,id:t,reactionCount:n,viewerActionPresence:o}),i?.length>0&&i.forEach(t=>{N(e,t)}),e),M=(e,t)=>{(0,i.useEffect)(()=>{e.length&&t(t=>e.reduce(R,{...t}))},[e,t])},U=e=>{if(null==e)return 0;const t=Number(e);return isNaN(t)?e:10===t?"10":t.toFixed(1)},B={COMMENTING_SECTION:"CommentingMainContent",PINNED_COMMENT:"pinned-comment",SUBSCRIBE_BUTTON:"SubscribeButton",SUBSCRIBE_TO_SEE_BUTTON:"SubscribeToSeeButton",SUBSCRIBE_MODAL:"SubscribeModal",SUBSCRIPTION_LOCK:"SubscriptionLock"},F=({shouldShowActivityLabel:e,commentAttributes:t={},user:n={},storyID:o,contentType:a,reviewType:r})=>{const l=n?.isAuthenticated&&n?.amguuid,[d,c]=(0,i.useState)(null),[m,u]=(0,i.useState)(!1),{commentingUrl:g,organizationId:p}=t,h="review"===a&&["albums","tracks"].includes(r)||"article"===a;return(0,i.useEffect)(()=>{if(!(e&&l&&h&&g&&p&&o))return c(null),void u(!1);!async function(){u(!0);try{const e=await(0,s.M3)({storyID:o,userID:n.amguuid,siteID:p,commentingUrl:g,contentType:a});c(e?.activityType??null)}catch(e){c(null)}finally{u(!1)}}()},[e,l,h,o,n?.amguuid,p,g,a]),{activityType:d,isLoading:m}}},92945(e,t,n){n.d(t,{P:()=>i});var o=n(96540);const i=e=>{const[t,n]=(0,o.useState)({});return(0,o.useEffect)(()=>{window.jBus&&window.jBus.whenAnEventOccurs({id:e,callback:({payload:e})=>{n({...e})}})},[e]),{...t}}},61057(e,t,n){let o;n.d(t,{Rf:()=>r,f1:()=>i,hY:()=>s});const i=e=>{o=e},a=(e,t={})=>{o&&o({type:"MERGE_KEY",key:"userNameModalConfig",value:{...t,isVisible:e}})},r=e=>{a(!0,e)},s=()=>{a(!1)}},97504(e,t,n){n.d(t,{Ay:()=>et,F0:()=>he.A,p:()=>g.A});var o=n(38299),i=n(42368),a=n(42361),r=n(58037),s=n(4498),l=n(42096),d=n(75421),c=n(54337),m=n(43706),u=n(20215),g=n(66718),p=n(59257),h=n(3540),b=n(64510),f=n(76196),w=n(39733),y=n(87986),v=n(56430),I=n(16619),C=n(32586),A=n(30616),k=n(87241),$=n(34577),S=n(70195),L=n(29165),_=n(5198),x=n(71039),E=n(49140),T=n(88852),N=n(3686),R=n(84050),M=n(67818),U=n(39792),B=n(26676),F=n(73137),O=n(15514),D=n(96774),q=n(34890),K=n(77818),H=n(28153),P=n(83558),j=n(33528),G=n(708),z=n(47424),Y=n(36737),V=n(68165),W=n(80636),Q=n(41876),X=n(12550),J=n(56148),Z=n(87468),ee=n(79301),te=n(63397),ne=n(49498),oe=n(60836),ie=n(88845),ae=n(90906),re=n(86173),se=n(21516),le=n(87574),de=n(42710),ce=n(80890),me=n(39083),ue=n(74723),ge=n(11936),pe=n(87444),he=n(23150),be=n(54280),fe=n(3330),we=n(7967),ye=n(97195),ve=n(45191),Ie=n(45530),Ce=n(64577),Ae=n(3653),ke=n(94416),$e=n(90506),Se=n(16119),Le=n(10934),_e=n(10312),xe=n(84502),Ee=n(9105),Te=n(7507),Ne=n(97475),Re=n(74561),Me=n(82728),Ue=n(10033),Be=n(28304),Fe=n(43438),Oe=n(47774),De=n(48767),qe=n(30920),Ke=n(63579),He=n(21318),Pe=n(35788),je=n(81058),Ge=n(37819),ze=n(48848),Ye=n(75937),Ve=n(74921),We=n(36108),Qe=n(75088),Xe=n(87924),Je=n(94342),Ze=n(57961);const et={Account:o.A,AgeGate:i.A,Arrow:a.A,ArrowOut:r.A,Article:s.A,BadgeArtist:l.A,BadgeDayOne:d.A,BadgeStaff:c.A,Bookmark:m.A,BookmarkActivated:u.A,BookmarkNew:g.A,BlueSky:p.A,CartFilled:h.A,CartOutlined:b.A,Check:f.A,ChevronRight:w.A,ChevronFill:C.A,ChevronLeft:y.A,ChevronUp:v.A,ChevronDown:I.A,Close:A.A,Collapse:k.A,Comment:$.A,CopyLink:S.A,DownloadCloud:L.A,DownloadWeb:_.A,Dot:x.A,Email:E.A,EmailFilled:T.A,Enlarge:N.A,Expand:R.A,Facebook:M.A,Filmstrip:U.A,Filter:B.A,Flipboard:F.A,GoogleNews:O.A,Gallery:D.A,Grid:q.A,Headphone:K.A,SlimHeadphone:H.A,Information:P.A,Instagram:j.A,LargeChevron:G.A,LeftChevron:z.A,Like:Y.A,LikeFilled:V.A,Line:W.A,LinkedIn:Q.A,LocationPin:X.A,OK:J.A,Paperclip:Z.A,List:ne.A,Lock:te.A,Maximize:oe.A,Menu:ie.A,NativeShare:ae.A,Newsletter:re.A,NewsletterArrow:se.A,Pause:le.A,PhotoStack:de.A,Pinterest:ce.A,PitchforkUpvote:me.A,PitchforkUpvoteFilled:ue.A,Play:ge.A,Passkey:pe.A,PlayCNE:he.A,PlaylistIcon:be.A,PlayOutlined:fe.A,Print:we.A,PrivacyOT:ye.A,RatingFilled:ve.A,RatingHalf:Ie.A,RatingOutlined:Ce.A,Replay:Ae.A,Loader:ee.A,Rss:ke.A,Search:$e.A,Share:Se.A,Shopping:Le.A,Snapchat:_e.A,Spotify:xe.A,SplitView:Ee.A,SocialHandle:Te.A,Subscribe:Ne.A,Telegram:Re.A,Timestamp:Me.A,Tiktok:Be.A,Threads:Ue.A,Triangle:Fe.A,TriangleDown:Oe.A,TriangleUp:De.A,Tumblr:qe.A,Twitter:Ke.A,VerificationBadge:He.A,Vero:Pe.A,Viber:je.A,Video:Ge.A,VolumeHigh:ze.A,VolumeMute:Ye.A,VK:Ve.A,WeChat:We.A,Weibo:Qe.A,Whatsapp:Xe.A,YandexZen:Je.A,YouTube:Ze.A}},16631(e,t,n){n.d(t,{Bs:()=>V,By:()=>I,CH:()=>z,El:()=>K,Es:()=>R,FM:()=>f,GM:()=>Q,Ig:()=>D,Mc:()=>b,Nc:()=>Y,Pu:()=>_,Q7:()=>H,R9:()=>U,RF:()=>g,TD:()=>u,Vs:()=>q,W6:()=>k,Wx:()=>L,Xo:()=>G,Xt:()=>T,Yl:()=>v,ZZ:()=>P,an:()=>C,d0:()=>X,eI:()=>O,fm:()=>A,hh:()=>h,iA:()=>F,iT:()=>x,o:()=>B,oE:()=>$,op:()=>w,ow:()=>E,pV:()=>W,qJ:()=>y,sJ:()=>M,sh:()=>p,tG:()=>S,vX:()=>N,w0:()=>j});var o=n(38267),i=n(18608),a=n(26865),r=n(96472),s=n(43438),l=n(73275),d=n(73730),c=n(18161),m=n(97927);const u=(0,o.Ay)(d.A.Primary).withConfig({displayName:"ReviewListButton"})`
  align-self: center;
  margin-top: ${(0,a.Kq)(4)};
  margin-bottom: ${(0,a.Kq)(4)};
`,g=o.Ay.ul.withConfig({displayName:"ReviewListItems"})`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`,p=(0,o.Ay)(s.A).withConfig({displayName:"ReviewListCarat"})`
  margin-left: ${(0,a.Kq)(1)};
  width: ${(0,a.Kq)(1)};
  height: ${(0,a.Kq)(1)};
  ${({theme:e})=>(0,a._o)(e,"fill","colors.interactive.base.black")};

  path {
    transform: rotate(180deg);
    transform-origin: center;
  }
`,h=(0,o.Ay)(i.sH).withConfig({displayName:"ReviewListUtilityLink"}).attrs(e=>({colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.utility.button-bulletin",...e}))``,b=(0,o.Ay)(i.sH).withConfig({displayName:"ReviewListGuidelinesLink"}).attrs(e=>({colorStaticLinkToken:"colors.consumption.body.standard.body-deemphasized",typeToken:"typography.definitions.utility.label",...e}))``,f=(0,o.Ay)(i.vm).withConfig({displayName:"ReviewListTitle"}).attrs(e=>({as:"h2",colorToken:"colors.consumption.body.standard.subhed",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-primary",...e}))``,w=o.Ay.div.withConfig({displayName:"ReviewListTitleWrapper"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${(0,a.Kq)(4)} 0 0;
  padding-bottom: ${({hasSubtext:e})=>e?(0,a.Kq)(1):(0,a.Kq)(4)};
`,y=o.Ay.div.withConfig({displayName:"ReviewListSubtext"})`
  display: block;
  ${(0,a.H4)(r.LO.lg)} {
    margin-top: ${(0,a.Kq)(1)};
  }
  margin-bottom: ${(0,a.Kq)(3)};

  ${({theme:e})=>(0,a._o)(e,"color","colors.consumption.body.standard.body-deemphasized")};
  ${({theme:e})=>(0,a.Gg)(e,"typography.definitions.utility.label")};
`,v=o.Ay.div.withConfig({displayName:"ReviewListWrapper"})`
  display: flex;
  flex-direction: column;
  outline: none;
  ${(0,a.L7)(r.LO.md)} {
    margin-left: calc(-1 * var(--grid-margin));
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
    /* Full bleed effect */
    width: calc(100% + (2 * var(--grid-margin)));
  }
`,I=(0,o.Ay)(i.vm).withConfig({displayName:"ReviewListError"})`
  margin: ${(0,a.Kq)(4)} 0;
  text-align: center;
`,C=o.Ay.li.withConfig({displayName:"ReviewItem"})`
  margin-top: ${(0,a.Kq)(3)};
  border-width: 1px 0 0;
  border-style: solid;
  ${({theme:e})=>(0,a._o)(e,"border-color","colors.consumption.body.standard.divider")};
  padding-top: ${(0,a.Kq)(3)};

  &:first-child {
    margin-top: ${(0,a.Kq)(4)};
    border-top: 0;
    padding-top: 0;
    ${(0,a.L7)(r.LO.md)} {
      margin-top: ${(0,a.Kq)(3)};
    }
  }

  .pinned-comment + & {
    margin-top: ${(0,a.Kq)(3)};
    border-top: 0;
    padding-top: 0;
  }

  &:last-child {
    margin-bottom: ${(0,a.Kq)(3)};
    ${(0,a.L7)(r.LO.md)} {
      margin-bottom: ${(0,a.Kq)(3)};
    }
  }

  ${c.f} {
    ${({theme:e})=>(0,a.Gg)(e,"typography.definitions.foundation.link-utility")};

    background-color: rgba(
      ${(0,a.HK)("colors.background.brand",{rgbOnly:!0})},
      ${({shouldUseFullOpacity:e})=>e?1:.2}
    );
    ${({theme:e})=>(0,a._o)(e,"color","colors.interactive.base.black")};

    &:not(:first-of-type) {
      margin-left: ${(0,a.Kq)(1)};
    }

    &[aria-checked='true'] {
      transition: none;
      text-decoration: none;
    }

    &:hover,
    &:focus {
      outline: 0;
      box-shadow: none;
      cursor: unset;
      text-decoration: none;
    }

    ${({shouldUseTagsInvertedTheme:e,theme:t})=>e&&`\n      ${(0,a._o)(t,"background-color","colors.interactive.base.black")};\n      ${(0,a._o)(t,"color","colors.interactive.base.white")};\n    `}
  }
  ${m.Ft} {
    padding: 0;
  }
`,A=o.Ay.div.withConfig({displayName:"PinnedCommentContainer"})`
  ${g} {
    padding: 0 ${(0,a.Kq)(3)};
  }
  margin-top: ${(0,a.Kq)(4)};
  border: 1px solid;
  border-color: ${({shouldUseDarkPinnedTheme:e})=>(0,a.HK)(e?"colors.background.black":"colors.background.brand")};
  width: 100%;

  ${({shouldUseSoftRoundedEdges:e})=>e&&`\n    border-radius: ${(0,a.Kq)(1)};\n  `}

  ${C} {
    margin-top: 0;
    margin-bottom: 0;
    padding: ${(0,a.Kq)(3)} 0;
  }
`,k=o.Ay.div.withConfig({displayName:"PinnedContainerHeading"})`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(
    ${({shouldUseDarkPinnedTheme:e})=>(0,a.HK)(e?"colors.background.black":"colors.background.brand",{rgbOnly:!0})},
    ${({shouldUseFullOpacity:e})=>e?1:.1}
  );
  ${({shouldUseSoftRoundedEdges:e})=>e&&`\n    border-radius: ${(0,a.Kq)(.75)} ${(0,a.Kq)(.75)} 0 0;\n  `}

  padding: 10px;
  width: 100%;
  height: ${(0,a.Kq)(4.25)};
`,$=o.Ay.div.withConfig({displayName:"PinnedTextLabel"})`
  ${(0,a.Gg)("typography.definitions.foundation.meta-secondary")}
  ${({shouldUseAlternateColorToken:e,shouldUseInvertedColor:t})=>e?(0,a._o)("color","colors.interactive.social.primary"):(0,a._o)("color",t?"colors.background.white":"colors.background.brand")};
  transform: translateY(1px);
  margin-right: 5px;
`,S=(0,o.Ay)(l.A).withConfig({displayName:"CommunityBrandLogoImage"})`
  img {
    height: 16px;
    vertical-align: middle;
  }
`,L=(0,o.Ay)(i.vm).withConfig({displayName:"ReviewerUserName"})`
  ${({theme:e})=>(0,a._o)(e,"color","colors.consumption.body.standard.body")};
  ${({theme:e})=>(0,a.Gg)(e,"typography.definitions.globalEditorial.accreditation-core")};
`,_=(0,o.Ay)(i.vm).withConfig({displayName:"ReviewListTimeStamp"})`
  ${({theme:e})=>(0,a._o)(e,"color","colors.interactive.base.dark")};
  ${({theme:e})=>(0,a.Gg)(e,"typography.definitions.foundation.meta-secondary")};
`,x=(0,o.Ay)(i.vm).withConfig({displayName:"ReviewText"})`
  word-wrap: break-word;
  white-space: pre-wrap;

  a {
    overflow-wrap: break-word;
  }
  ${({theme:e})=>(0,a._o)(e,"color","colors.consumption.body.standard.body")};
  ${({theme:e})=>(0,a.Gg)(e,"typography.definitions.consumptionEditorial.body-core")};
`,E=o.Ay.img.withConfig({displayName:"ReviewImage"})`
  cursor: pointer;
  width: ${(0,a.Kq)(20.5)};
  max-width: 100%;
  height: ${(0,a.Kq)(20.5)};
  object-fit: cover;

  ${(0,a.H4)(r.LO.md)} {
    width: ${(0,a.Kq)(15)};
    height: ${(0,a.Kq)(15)};
  }
`,T=(0,o.Ay)(i.vm).withConfig({displayName:"ReviewListRatingStars"})`
  display: flex;
  flex-direction: row;
  align-items: center;

  &&& {
    ${m.By} {
      left: 0;

      path {
        ${({theme:e})=>(0,a._o)(e,"fill","colors.consumption.body.special.accent")};
      }
    }
    ${m.Ou} {
      width: ${(0,a.Kq)(2.5)};
    }
    ${m.wb} {
      &:disabled + ${m.KX} {
        cursor: unset;
      }
    }
  }
`,N=(0,o.Ay)(i.vm).withConfig({displayName:"ReviewLikeCount"})`
  padding-right: ${(0,a.Kq)(2)};
  ${({theme:e})=>(0,a._o)(e,"color","colors.interactive.base.dark")};
  ${({theme:e})=>(0,a.Gg)(e,"typography.definitions.foundation.link-secondary")};
`,R=o.Ay.hr.withConfig({displayName:"ReviewListDivider"})`
  border: none;
  border-top: 1px solid
    ${({theme:e})=>(0,a.HK)(e,"colors.consumption.lead.standard.divider")};
  width: 100%;
`,M=o.Ay.ul.withConfig({displayName:"ReviewListMetaInfo"})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: ${(0,a.Kq)(4)}, ${(0,a.Kq)(4)};
  padding: 0;
  list-style: none;

  &:first-child {
    margin-bottom: 10px;
    ${(0,a.L7)(r.LO.md)} {
      margin-bottom: ${(0,a.Kq)(1)};
    }
  }

  &:not(:first-child) {
    margin-bottom: ${(0,a.Kq)(1.5)};
    ${(0,a.L7)(r.LO.md)} {
      margin-bottom: ${(0,a.Kq)(2)};
    }
  }

  &:last-child {
    margin-top: ${(0,a.Kq)(1.5)};
    margin-bottom: ${(0,a.Kq)(1)};
    ${(0,a.L7)(r.LO.md)} {
      margin-top: ${(0,a.Kq)(2)};
      margin-bottom: 0;
    }
  }

  .icon-dots {
    padding-right: 6px;
    padding-left: 6px;

    ${({theme:e})=>(0,a._o)(e,"fill","colors.interactive.base.dark")};

    ${(0,a.L7)(r.LO.md)} {
      padding-right: ${(0,a.Kq)(.5)};
      padding-left: ${(0,a.Kq)(.5)};
    }
  }

  .icon-like,
  .icon-like-filled,
  .icon-comment {
    margin-top: 3px;
    cursor: pointer;
    width: ${(0,a.Kq)(4)};
    height: 18px;

    path {
      ${({theme:e})=>(0,a._o)(e,"fill","colors.interactive.base.dark")};
      ${({theme:e})=>(0,a._o)(e,"stroke","colors.interactive.base.dark")};
    }

    &:hover path {
      ${({theme:e})=>(0,a._o)(e,"fill","colors.interactive.base.black")};
      ${({theme:e})=>(0,a._o)(e,"stroke","colors.interactive.base.black")};
    }
  }

  .icon-p4k-upvote,
  .icon-p4k-upvote-filled {
    margin-right: ${(0,a.Kq)(.5)};
    cursor: pointer;
    width: auto;
    height: auto;

    &:hover path[fill='#757575'] {
      ${({theme:e})=>(0,a._o)(e,"fill","colors.interactive.base.brand-secondary")};
    }
  }

  ${({applyRowGap:e})=>e&&`\n    row-gap: ${(0,a.Kq)(1)};\n  `}
`,U=o.Ay.div.withConfig({displayName:"ReviewListMetaInfoItem"})`
  display: flex;
  align-items: center;

  &:empty + &:empty + & > .icon-dots:first-child {
    display: none;
  }
`,B=(0,o.Ay)(d.A.Utility).withConfig({displayName:"ReviewListReactionButton"})`
  padding: 0;

  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
  }
`,F=o.Ay.div.withConfig({displayName:"ReviewMetaGrid"})`
  display: grid;
  grid-template-columns: ${({badgeValue:e})=>e?"repeat(1, max-content)":"repeat(2, max-content)"};
  align-items: center;
  column-gap: ${(0,a.Kq)(1.25)};
  margin-bottom: ${(0,a.Kq)(1.25)};
  justify-items: start;
`,O=o.Ay.div.withConfig({displayName:"UserBadgeWrapper"})`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  column-gap: ${({badgeValue:e})=>e?(0,a.Kq)(1.25):"0"};
`,D=o.Ay.div.withConfig({displayName:"BadgesToggleChipListWrapper"})`
  margin-left: ${(0,a.Kq)()};

  &&& {
    ${c.f} {
      align-self: center;
      margin-bottom: ${({isReply:e})=>e?(0,a.Kq)(1):"0"};
      margin-left: ${({isReply:e})=>e?"0":(0,a.Kq)(1.25)};
      ${({theme:e})=>(0,a._o)(e,"background-color","colors.background.light")};
      ${({theme:e})=>(0,a._o)(e,"color","colors.background.dark")};
      ${({theme:e})=>(0,a.Gg)(e,"typography.definitions.foundation.meta-primary")};
      padding: 8px 16px;
      height: 40px;
      box-sizing: border-box;
      text-transform: none;
    }
  }
`,q=o.Ay.div.withConfig({displayName:"CircularRatingCircle"})`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: ${({size:e})=>"sm"===e?"2px":(0,a.Kq)(.375)}
    solid ${(0,a.HK)("colors.interactive.base.black")};
  border-radius: 50%;
  background-color: transparent;
  width: ${({size:e})=>"sm"===e?(0,a.Kq)(5):(0,a.Kq)(9.25)};
  height: ${({size:e})=>"sm"===e?(0,a.Kq)(5):(0,a.Kq)(9.25)};

  &::before {
    position: absolute;
    top: ${({size:e})=>"sm"===e?"-6px":(0,a.Kq)(.375)};
    right: ${({size:e})=>"sm"===e?"-6px":(0,a.Kq)(.375)};
    bottom: ${({size:e})=>"sm"===e?"-6px":(0,a.Kq)(.375)};
    left: ${({size:e})=>"sm"===e?"-6px":(0,a.Kq)(.375)};
    border: ${({size:e})=>"sm"===e?"2px":(0,a.Kq)(.375)}
      solid ${(0,a.HK)("colors.interactive.base.black")};
    border-radius: 50%;
    content: '';
  }
`,K=(0,o.Ay)(i.vm).withConfig({displayName:"CircularRatingNumber"}).attrs(e=>({typeIdentity:"typography.definitions.discovery.hed-bulletin-primary",...e}))`
  color: ${(0,a.HK)("colors.interactive.base.black")};

  ${({size:e})=>"lg"===e&&"\n    font-size: 24px;\n  "}
`,H=o.Ay.div.withConfig({displayName:"CircularRatingWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;

  &.blurred ${K} {
    filter: blur(10px);
  }
`,P=o.Ay.div.withConfig({displayName:"ScoreComparisonWrapper"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${(0,a.Kq)(3)};
`,j=o.Ay.div.withConfig({displayName:"ScoreComparisonCard"})`
  display: flex;
  align-items: flex-end;
  border: 1px solid
    ${({theme:e})=>(0,a.HK)(e,"colors.background.black")};
  border-radius: 8px;
  width: 100%;
  height: 140px;
  gap: ${(0,a.Kq)(5.5)};

  ${(0,a.H4)(r.LO.md)} {
    gap: ${(0,a.Kq)(7)};
  }
`,G=o.Ay.div.withConfig({displayName:"ScoreColumn"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: ${({align:e})=>e||"center"};
  justify-content: flex-end;
  padding-top: ${(0,a.Kq)(1.375)};
  padding-bottom: ${(0,a.Kq)(2)};
  height: 140px;
`,z=o.Ay.div.withConfig({displayName:"ScoreDivider"})`
  margin: auto;
  background-color: #999;
  width: 1px;
  height: 113px;
`,Y=o.Ay.div.withConfig({displayName:"ScoreItemWrapper"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,V=o.Ay.div.withConfig({displayName:"ScoreLabel"})`
  margin-top: ${(0,a.Kq)(1)};
  text-align: center;
  color: #2b2b2b;
  font-size: 12px;
  ${(0,a.Gg)("typography.definitions.globalEditorial.accreditation-core")};
`,W=o.Ay.div.withConfig({displayName:"ScoreComparisonMessage"})`
  margin-top: 8px;
  border-bottom: 1px solid;
  padding-bottom: 8px;
  width: 100%;
  ${({theme:e})=>(0,a._o)(e,"border-color","colors.consumption.body.standard.divider")};
  text-align: center;
  ${(0,a.L7)(r.LO.md)} {
    text-align: left;
  }
  ${({theme:e})=>(0,a._o)(e,"color","colors.consumption.body.standard.body-deemphasized")};
  ${(0,a.Gg)("typography.definitions.utility.label")};
`,Q=o.Ay.div.withConfig({displayName:"ScoreComparisonSubscriptionMessage"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(0,a.Kq)(.5)};
  margin-top: 8px;
  border-bottom: 1px solid;
  cursor: pointer;
  padding-bottom: 8px;
  width: 100%;
  ${({theme:e})=>(0,a._o)(e,"border-color","colors.consumption.body.standard.divider")};
  text-align: center;
  text-decoration: none;
  ${(0,a.Gg)("typography.definitions.utility.label")};
  ${({theme:e})=>(0,a._o)(e,"color","colors.consumption.body.standard.body-deemphasized")};

  .subscribe-link {
    text-decoration: underline;
    color: inherit;
    font-weight: bold;

    &:hover {
      ${({theme:e})=>(0,a._o)(e,"color","colors.consumption.body.standard.link-hover")};
      text-decoration: none;
    }
  }
`,X=o.Ay.span.withConfig({displayName:"ReviewerLocation"})`
  ${({theme:e})=>(0,a._o)(e,"color","colors.interactive.base.dark")};
  ${({theme:e})=>(0,a.Gg)(e,"typography.definitions.foundation.meta-primary")};
`},21735(e,t,n){n.d(t,{A:()=>v});var o=n(96540),i=n(5556),a=n.n(i),r=n(54370),s=n(53499),l=n(70920),d=n(64663),c=n(37210),m=n(72362),u=n(37978),g=n(58120);const{useContext:p,useEffect:h,useRef:b,useState:f}=o,w=()=>{if(!document.getElementById("tiktok-embed")){const e=document.createElement("script");e.id="tiktok-embed",e.src="https://www.tiktok.com/embed.js",document.body.appendChild(e)}},y=({attributes:e,className:t,tiktokUrl:n})=>{o.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(s.G.RENDER,{name:"TiktokEmbed"})},[]);const i=b(),a=p(d.c$),[y]=(0,l.A)(),[v,I]=f(!1),C=(e=>new URL(e).pathname.split("/").filter(e=>e.length>0).pop())(n),[A]=f((0,m.ox)()),k=e=>{let t=e.target;t?.addEventListener("load",()=>{setTimeout(()=>{t=e.target,t.style.minHeight=`${t.offsetHeight+1}px`},1e3)})};return h(()=>{I(a.targeting)},[a.targeting]),h(()=>{const e=i.current,t=e.querySelector("blockquote");return t&&!t.hasAttribute("id")&&w(),A&&e.addEventListener("DOMNodeInserted",e=>k(e)),v&&w(),()=>{A&&e.removeEventListener("DOMNodeInserted",e=>k(e))}},[A,i,v,C]),o.createElement(g.l,{className:t,ref:(0,r.P)(i,y)},v?o.createElement(g.H,{...e,className:"tiktok-embed","data-video-id":C,cite:n},o.createElement("section",null)):o.createElement(c.A,{hasConsent:a.targeting,url:n,consentBannerHeader:u.A.consentBannerHeader}))};y.propTypes={attributes:a().object,className:a().string,tiktokUrl:a().string.isRequired},y.displayName="TiktokEmbed";const v=y},14307(e,t,n){n.d(t,{Cu:()=>q,D3:()=>_,Ec:()=>Q,Ef:()=>W,Eg:()=>x,Ev:()=>de,F$:()=>pe,F0:()=>te,Hh:()=>we,JE:()=>$,JL:()=>le,Mm:()=>L,P2:()=>H,QD:()=>M,QQ:()=>E,Sp:()=>ce,UP:()=>Ce,Uw:()=>ke,ZL:()=>ae,ZY:()=>Le,Zs:()=>R,aW:()=>S,ce:()=>Ae,d6:()=>fe,iJ:()=>se,ip:()=>ve,iu:()=>Se,iw:()=>X,kg:()=>be,lV:()=>$e,nd:()=>ee,pu:()=>oe,qt:()=>he,r_:()=>me,rp:()=>ne,tM:()=>Ie,up:()=>J,yP:()=>re});var o=n(5922),i=n(21396),a=n(29484),r=n(13446),s=n(34854),l=n(49974),d=n(84410),c=n(70099),m=n(3624),u=n(7883),g=n(79694),p=n(29099),h=n(6765),b=n(88055),f=n.n(b),w=n(2404),y=n.n(w),v=n(86663),I=n(14961),C=n(56892),A=n(60663);const k=(e=null)=>{const t=v.parse(e||(0,C.getCookie)("OptanonConsent"));if(!t||!t.groups)return null;const n=t.groups.split(",").filter(e=>e.endsWith(":1")).map(e=>e.split(":")[0]);return n.length?n.join(","):null};function $(e,t="production",n=[]){window.snowplowInitQueue.push(()=>{e?window.snowplowCN("disableAnonymousTracking",{stateStorageStrategy:"cookieAndLocalStorage"}):(window.snowplowCN("clearUserData",{preserveSession:!0,preserveUser:!0}),window.snowplowCN("enableAnonymousTracking",{options:{withServerAnonymisation:!0,withSessionTracking:!0},stateStorageStrategy:"localStorage"}))})}const S=(e=null)=>window.Fides?(0,s.$c)():k(e),L=()=>{const e=(0,C.getCookie)("CN_access")||(0,C.getCookie)("CN_token_access");let t={};if(e){const n=(0,h.A)(e),o=window?.dataLayer[0]?.content?.brandSlug?.replace(/-/g,""),i=n?.fct&&n?.fct["org-access"]?.filter(e=>{const t=e?.split(":")[0];return-1!==o?.indexOf(t.split(".")[0])});t={subscriptions:n?.fct&&n?.fct["org-access"]||[],brand_subscription:i||[]}}return t};function _(e){let t=e;for(;t&&"A"!==t.tagName;)t=t.parentElement;return t}const x=(0,C.getCookie)("CN_xid"),E=(0,C.getCookie)("amg_user_partner"),T=(0,A.Y)(()=>window.localStorage),N=["C0001","C0002","C0003","C0004","C0005","C0009"],R=["amazon","amzn","cna.st","skimresources"],M=["houseandgarden","glamour-uk","vogue-uk","gq-uk","conde-nast-traveller-uk","tatler","woi","ad-de","cnt-de","glamour-de","gq-de","vogue-de","ad-es","conde-nast-traveler-espana","glamour-es","gq-espana","vanity-fair-es","vogue-es","ad-it","gq-italia","la-cucina-italiana-italy","vanity-fair-it","vogue-it","wired-it"];function U(){const e=window?.document?.querySelectorAll(".external-link"),t=[];return e.forEach(e=>{const n=e.getAttribute("href");n&&R.some(e=>n.includes(e))&&t.push(e.innerText)}),t}const B=(e="",t=[])=>t.some(t=>e.includes(t)),F=[],O=[],D=e=>{const t=e?.match("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$");return null!==t},q=e=>{try{const{hash:t}=new URL(e);if(!t)return"";return new URLSearchParams(t.slice(1)).get("str")||""}catch{return""}},K=e=>e.filter(e=>N.includes(e)),H=()=>{const e=S();if(e){const t=e.split(",");return K(t)}if(window.OnetrustActiveGroups){const e=window.OnetrustActiveGroups?.split(",")?.slice(1,-1);return K(e)}return[null]};function P(e=null){const t=S()?.split(",")||window.OnetrustActiveGroups?.split(",")?.slice(1,-1);let n=null;if(Array.isArray(t)&&t.includes("C0004")){const t=(0,C.getCookie)("CN_token_id");let o=null;if(t)try{const e=JSON.parse(window.atob(t.split(".")[1]||"")),n=e?.email;o=n?(0,i.SHA256)(n).toString():null}catch(e){}const a=v.parse(window.location.search.toLowerCase());n=o||a?.hashc||a?.uid||function(e=null){let t=null,n=!1;const o=e||l.ir.readIDMSession();for(const e of o?.result||[])for(const o of e.idSets||[])for(const e of o.ids||[])if(e.type===I.id_mapper.IdType.email_sha256){if(n)return null;t=e.value,n=!0}return t}(e)||null}return n}const j=()=>{let e=[];const t=window?.dataLayer;return t&&t[0]?.experiments&&Array.isArray(t[0]?.experiments)&&(e=t[0]?.experiments),e?.map(e=>e.status===d.mK.EDGE_ASSIGNMENT||e.status===d.mK.CLIENT_ASSIGNMENT?{experiment_id:e.experiment_id||null,feature_id:e.feature_id||null,variation:e.variation||null,variation_name:e.variation_name||null}:{})},G=({type:e})=>{be({type:e,subject:"fides"},null,{skipDuplicateEvent:!1})},z=e=>{const t=e[0].content,n=e[0].site,i=e[0].syndication,a=e[0].page,l=new URLSearchParams(window.location.search),d=window.location?.pathname?.split("/"),p=new Date,h=new Date(t.publishDate),b=Math.ceil((p-h)/864e5),f=(e=>{const[,t]=e,n=(new Date).getTimezoneOffset()/60,o=new URLSearchParams(window.location.search).get("mbid"),i=D(t.amguuid)?t.amguuid:null,a=D(x)?x:null,r=new Date,s=document.getElementById("onetrust-pc-btn-handler"),l=s&&window.getComputedStyle(s,":after"),d=l?.getPropertyValue("content"),c=v.parse(window.location.search.toLowerCase())?.cndid||null;return{schema:"iglu:com.condenast/user/jsonschema/11-0-0",data:{xid:a,amg_id:i,is_logged_in:null!==i,bucket:parseInt(T.getItem("usr_bkt_eva"),10),browser:window.navigator.appName,browser_version:window.navigator.appVersion,time_zone_offset:parseInt(n,10)||0,monthly_visit_no:window.dataLayer[0]?.user?.monthlyVisits||0,monthly_content_count:window.dataLayer[0]?.user?.contentVisits||0,onetrust_active_groups:H(),mdw_id:c,local_visit_hour:r.getHours(),mbid:o,consent_banner_variant:window.Fides?"fides":d?.toString()||null,fingerprint_visitor_id:null,email_sha256:P(),...L()}}})(e),w=((e,t)=>({schema:"iglu:com.condenast/page/jsonschema/6-0-1",data:{functional_tags:e.functionalTags,has_buy_button:"true"===e.hasBuyButtons,path_level_1:t[1]||"",path_level_2:t[2]||"",path_level_3:t[3]||"",path_level_4:t[4]||"",tab_active:"visible"===window.document.visibilityState,canonical_url:document.querySelector("link[rel='canonical']")?.getAttribute("href")||null,clean_url:window.location.origin+window.location.pathname}}))(t,d),y=((e,t,n,o)=>({schema:"iglu:com.condenast/content/jsonschema/2-0-1",data:{no_of_article_revisions:parseInt(e.noOfRevisions,10)||null,editor_name:e.editorNames,author_name:e.authorNames,content_id:e.contentId,content_len:parseInt(e.contentLength,10)||null,content_title:e.contentTitle,content_source:e.contentSource,author_id:e.authorIds,date_publish:"null"!==e.publishDate?e.publishDate:null,date_last_modified:e.modifiedDate,onsite_keywords:e.tags,content_template:window.location.href.includes("sponsored")?"native":"standard",content_language:e.contentLang,gallery_name:e.galleryName,gallery_img_tot:parseInt(e.totalGalleryImages,10)||null,word_count:parseInt(e.wordCount,10)||null,content_type:e.contentType,content_template_type:e.templateType,date_display:"null"!==t?t:null,content_primary_tag:e.primaryTag||null,content_is_commerce:e.isCommerceContent||null,content_time_since_publish:o,content_flag:e.contentFlag,content_publish_hour:n.getHours(),content_publish_weekday:n.getDay().toString(),content_publish_month:n.getMonth().toString(),content_page_type_properties:e.pageTypeProperties,has_affiliate_links:e.hasAffiliateLinks,affiliate_links_count:e.affiliateLinksCount}}))(t,p,h,b),I={schema:"iglu:com.condenast/site/jsonschema/2-0-1",data:{org_id:n.orgId,org_app_id:n.orgAppId,site_app_version:n.appVersion,site_env:n.env,site_section:t.section,site_subsection:t.subsection,site_subsection_2:t.subsection2,site_data_source:t.dataSource}},A={schema:"iglu:com.condenast/syndication/jsonschema/3-0-1",data:{is_syndication_content:"true"===i.content,syndication_original_source:i.originalSource,syndication_url:a.syndicatorUrl,syndication_original_content_lang:i.originalContentLanguage}},k={schema:"iglu:com.condenast/referrer/jsonschema/2-0-1",data:{refr_domain:document.referrer||""}},S={schema:"iglu:com.condenast/session/jsonschema/2-0-2",data:{dmdid:(0,C.getCookie)("dmd-sid"),fingerprint_incognito_mode:null}},_={schema:"iglu:com.condenast/campaign/jsonschema/4-0-1",data:{mkt_id:l.get("utm_id"),mkt_mailing:l.get("utm_mailing"),mkt_social_type:l.get("utm_social-type"),mkt_test:l.get("utm_test"),mkt_brand:l.get("utm_brand"),emailsource:l.get("esrc"),itm_source:l.get("itm_source"),itm_medium:l.get("itm_medium"),itm_campaign:l.get("itm_campaign"),itm_content:l.get("itm_content")}},E={schema:"iglu:com.condenast/experiments/jsonschema/3-0-0",data:{experiments_list:j()}};let N="fides";if(!window.Fides){const e=document.getElementById("onetrust-pc-btn-handler"),t=e?window.getComputedStyle(e,"::after")?.content:null;N=t&&"none"!==t?t.replace(/^["']|["']$/g,""):null}const R=H(),M={schema:"iglu:com.condenast/consent/jsonschema/1-0-0",data:{categories:R&&R.length>0&&!R.includes(null)?R.join(","):null,banner_variant:N}},U=[w,f,y,I,A,k,S,_,E,M];(0,o.nk)(U);const B=()=>{const e=H();f&&f.data&&(f.data.onetrust_active_groups=e,f.data.email_sha256=P(),window.Fides&&(f.data.consent_banner_variant="fides")),M&&M.data&&(M.data.categories=e&&e.length>0&&!e.includes(null)?e.join(","):null,window.Fides&&(M.data.banner_variant="fides")),window.snowplowInitQueue.push(()=>{window.snowplowCN("removeGlobalContexts",[f,M]),(0,o.nk)([f,M])})};window.addEventListener("OneTrustGroupsUpdated",B);let F=!1;const O=()=>{F||(G({type:"ready"}),F=!0)};window?.Fides?.initialized?(G({type:"initialized"}),$((0,s.Nf)(),n?.env,[t?.brandSlug]),B()):window.addEventListener("FidesInitialized",()=>{G({type:"initialized"}),$((0,s.Nf)(),n?.env,[t?.brandSlug]),B()}),window.addEventListener("FidesUpdated",()=>{G({type:"updated"}),$((0,s.Nf)(),n?.env,[t?.brandSlug]),B()}),window.addEventListener("FidesUIShown",()=>{G({type:"uishown"})}),(window?.dataLayer??[]).some(e=>"FidesReady"===e?.event)&&O(),window.addEventListener("FidesReady",O),window.addEventListener("FidesModalClosed",()=>{G({type:"modalclosed"})}),window.Kendra.IDENTITY_MAPPER.on(g.h.IDM_RESULTS_EVENT,e=>{f?.data&&!f.data.email_sha256&&(f.data.email_sha256=P(e),window.snowplowInitQueue.push(()=>{window.snowplowCN("removeGlobalContexts",[f]),(0,o.nk)([f])}))},{emitLast:!0}),window.Kendra.GROWTHBOOK.on(m.U.EXPERIMENTS_ASSIGNMENTS_PROCESSED,()=>{window.snowplowInitQueue.push(()=>{window.snowplowCN("removeGlobalContexts",[E]),E.data={experiments_list:j()},(0,o.nk)([E])})}),window.Kendra.USER_CONTEXT.on(c.Y.UPDATED,()=>{f&&f.data&&(f.data.monthly_visit_no=window.dataLayer[0]?.user?.monthlyVisits||0,f.data.monthly_content_count=window.dataLayer[0]?.user?.contentVisits||0,window.snowplowInitQueue.push(()=>{window.snowplowCN("removeGlobalContexts",[f]),(0,o.nk)([f])}))}),window.Kendra.USER_CONTEXT.on(c.Y.ONE_TRUST_LOADED,()=>{if(f&&f.data){const e=document.getElementById("onetrust-pc-btn-handler"),t=e&&window.getComputedStyle(e,":after"),n=t?.getPropertyValue("content")?.replace(/"/g,"");n&&(f.data.consent_banner_variant=n,window.snowplowInitQueue.push(()=>{window.snowplowCN("removeGlobalContexts",[f]),(0,o.nk)([f])}))}}),window.cnBus.on(r.ok,({incognito:e,visitorId:t})=>{window.snowplowInitQueue.push(()=>{window.snowplowCN("removeGlobalContexts",[S,f]),S.data.fingerprint_incognito_mode=e,f.data.fingerprint_visitor_id=t,(0,o.nk)([S,f])})});const q=e=>{"true"!==e&&"false"!==e||window.snowplowInitQueue.push(()=>{window.snowplowCN("removeGlobalContexts",[f]),f.data.is_subscriber="true"===e,(0,o.nk)([f])})};(()=>{if(!window.cnBus.history)return;const e=window.cnBus.history("journey.entitlement.status.*");if(!Array.isArray(e)||!e.length)return;const t=e.at(-1),n=Array.isArray(t)?t?.[0]:void 0;q(n?.split(".").pop())})(),window.cnBus.on("journey.entitlement.status.*",(e,{topic:t})=>q(t?.split(".").pop())),window.Kendra.USER_CONTEXT.on(c.Y.EMAIL_SHA_UPDATED,({emailSHA:e})=>{f&&f.data&&(f.data.email_sha256=e,window.snowplowInitQueue.push(()=>{window.snowplowCN("removeGlobalContexts",[f]),(0,o.nk)([f])}))}),window.Kendra.BOT_SIGNALS.on(u.m.BOT_SIGNALS_RECEIVED,e=>{window.snowplowInitQueue.push(()=>{ie(e)})}),window.Kendra.BOT_SIGNALS.on(u.m.BOT_SIGNALS_ERROR,e=>{window.snowplowInitQueue.push(()=>{ie(e,e.errorInfo)})})},Y=(e,t)=>{let n,o;const[i]=window.document.getElementsByTagName("header"),[a]=window.document.getElementsByTagName("footer");let r=e?.className?e?.className.toString():null;n=i&&i.contains(e)?"top":a&&a.contains(e)?"bottom":"middle","img"===e?.tagName.toLowerCase()&&(o=e?.alt),"svg"===e?.tagName.toLowerCase()&&(r=e?.className?.animVal.toString());const s=window.location.origin;let l="";e?.href&&(l=new URL(e?.href));const d=l.origin===s,c=e&&e.getAttribute("data-offer-url");if(e){const i=B(function(e){if(!e)return"";try{return new URL(e).origin}catch{return""}}(e.href),R);return V(t,e,n,o,c,l,d,i,r)}return null},V=(e,t,n,o,i,a,r,s,l)=>({schema:"iglu:com.condenast/click_info/jsonschema/2-0-4",data:{action_id:e?.toString(),click_url:t.href?.toString(),click_id:t.id?.toString(),click_class:l,click_text:t.textContent?.toString().replace(/Arrow/g,""),click_type:t.tagName?.toString(),click_target:t.target?.toString(),img_alt:o?.toString(),data_offer_url:i&&i.toString(),img_source:t.src?.toString(),placement:n,is_external:!!a&&!r,object_type:l?.split(" ").slice(-1)[0]||null,is_affiliate:s,offer_id:t.id?.toString(),alias_url:t?.alias_url?.toString()}}),W=e=>{const t=(0,o.DE)(e),n=t?._spData??t?._spCookieValue??null,i=n?.split(".");return i?.[5]||null},Q=(e=null)=>{if(window.Fides)return(0,s.Nf)();const t=v.parse(e||(0,C.getCookie)("OptanonConsent")||"").groups||"";return/0004:1/.test(t)},X=()=>{const e=N.reduce((e,t)=>(e[t]=!1,e),{});try{const t=H();return!t||t.includes(null)?e:N.reduce((e,n)=>(e[n]=t.includes(n),e),{})}catch(t){return e}},J=(e,t,n,i,r=[])=>{const s=X(),l=n?.[0]?.site?.env;if(!s.C0004&&!s.C0009&&("staging"===l||M.includes(t)))return;window.__snowplowAlreadyInitialized=!0;const d={appId:t,contexts:{clientHints:!0,performanceNavigationTiming:!0,webVitals:!0},anonymousTracking:{withSessionTracking:!0,withServerAnonymisation:!0},stateStorageStrategy:"localStorage",discoverRootDomain:!0,cookieSameSite:"https:"===window.location.protocol?"None":"Lax",cookieSecure:"https:"===window.location.protocol,eventMethod:"post",postPath:"/com.condenast/yv8"},c=Q()?{anonymousTracking:!1,stateStorageStrategy:"cookieAndLocalStorage"}:{};(0,o.Po)(e,{...d,...c},i),window.snowplowInitQueue.push(()=>{const e={pageTitle:()=>({beforeTrack:e=>{e.add("page",window?.document?.title),e.build()}})};("staging"===l||M.includes(t))&&window.snowplowCN("addPlugin",o.Jj,"consentChecker",[{consentCallback:()=>X()}]),window.snowplowCN("addPlugin",e,"pageTitle")}),window.snowplowInitQueue.length>0&&document.body.addEventListener("click",e=>{const t=e.target.closest('a[href*="/auth/initiate"]'),n=(()=>{const e=(0,C.getCookieFromPrefix)("_sp_id."),t=e?.split(".");return t&&t[0]||null})(),o=Date.now(),i=S()?.split(",")||window.OnetrustActiveGroups?.split(",")?.slice(1,-1),s=_(e?.target),l=s&&r.length&&r.some(e=>s?.hostname.endsWith(e));t&&t.href?.includes("/auth/initiate")&&Z(t.href,n,i)?t.href=(0,a.OE)(t.href,{_sp:`${n}.${o}`}):s&&l&&Z(s.href,n,i)&&(s.href=(0,a.OE)(s.href,{_sp:`${n}.${o}`}))}),z(n),(0,o.s8)({minimumVisitLength:5,heartbeatDelay:10}),(0,o.bi)(),(0,o.oe)()},Z=(e,t,n)=>!e?.includes("_sp")&&t&&n.includes("C0004"),ee=(e,t)=>{(0,o.YH)({event:{schema:"iglu:com.condenast/page_error_event/jsonschema/4-0-0",data:{type:e.toString(),error:t}}})},te=(e,t,n,i)=>{(0,o.YH)({event:{schema:"iglu:com.condenast/non_url_click_event/jsonschema/3-0-0",data:{label:e,next_url:t,type:n,subject:i}}})},ne=e=>{(0,o.YH)({event:{schema:"iglu:com.condenast/cookies_action_event/jsonschema/3-0-0",data:{type:"click",label:e}},context:[{schema:"iglu:com.condenast/click_info/jsonschema/2-0-0",data:{click_text:e}}]})},oe=e=>{(0,o.YH)({event:{schema:"iglu:com.condenast/newsletter_event/jsonschema/5-0-0",data:e}})},ie=(e,t=null)=>{let n;n=t?[{schema:"iglu:com.condenast/error_info/jsonschema/1-0-1",data:t}]:(e=>{const t=[],n="iglu:com.condenast/bot_detection/jsonschema/1-0-0",o="cloudflare";return Array.isArray(e.botDetectionIds)&&e.botDetectionIds.length>0&&t.push({schema:n,data:{name:"bot_detection_ids",value:e.botDetectionIds.join(","),source_name:o}}),void 0!==e.botScore&&e.botScore!==p.JM&&t.push({schema:n,data:{name:"bot_score",value:String(e.botScore),source_name:o}}),e.botVerifiedCategory&&"empty"!==e.botVerifiedCategory&&t.push({schema:n,data:{name:"bot_verified_category",value:e.botVerifiedCategory,source_name:o}}),void 0!==e.botVerified&&t.push({schema:n,data:{name:"bot_verified",value:e.botVerified?"yes":"no",source_name:o}}),t})(e),(0,o.YH)({event:{schema:"iglu:com.condenast/system_event/jsonschema/1-0-0",data:{type:t?"error":"complete",subject:"bot_detection"}},context:n})},ae=(e,t)=>{const n={schema:"iglu:com.condenast/messaging_unit_event/jsonschema/3-0-3",data:e},i=[];t&&i.push({schema:"iglu:com.condenast/product/jsonschema/2-0-4",data:t}),(0,o.YH)({event:n,context:i})},re=({subject:e,subjectId:t,subjectName:n,noOfItems:o,sourceName:i,sourceId:a,isFromBookmark:r,isDefault:s,isAutoSelected:l})=>({save_location:[{subject:e,subject_id:t,subject_name:n,no_of_items:o,source_name:i,source_id:a,is_from_bookmark:r,is_default:s,is_auto_selected:l}]}),se="All Saved Products",le=(e,t=se)=>(e??"").trim()||t,de=(e,t)=>{const n=le(t);return{schema:"iglu:com.condenast/save/jsonschema/2-0-1",data:re({subject:"account_saved_products",...null!=e&&{subjectId:String(e)},subjectName:n,isFromBookmark:!0,isDefault:n===se,isAutoSelected:!1})}},ce=({saveContext:e,eventData:t,errorContext:n={}})=>{((e,t={},n={})=>{const i={schema:"iglu:com.condenast/save_event/jsonschema/2-0-1",data:e},a={schema:"iglu:com.condenast/save/jsonschema/2-0-1",data:t},r=n&&Object.keys(n).length>0?[{schema:"iglu:com.condenast/error_info/jsonschema/1-0-1",data:n}]:[];(0,o.YH)({event:i,context:[a,...r]})})(t,re(e),n)},me=(e,t=null,n=null,i=null,a=[],r=null)=>{const s=_(n?.target)||n?.target?.closest?.("SVG"),l=(Array.isArray(t)?t:[t]).map(e=>({schema:"iglu:com.condenast/product/jsonschema/2-0-4",data:e})),d={schema:"iglu:com.condenast/video/jsonschema/4-0-3",data:{video_id:""}},c=a?.length?a.reduce((e,t,n)=>(e[n+1]={...d,data:{...d.data,video_id:t}},e),{}):{},m={schema:"iglu:com.condenast/commerce_interaction_event/jsonschema/1-0-1",data:e},u=[...l,..."click"===e?.type&&r?[r]:[],...s?[Y(s,i)]:[],...Object.values(c)];(0,o.YH)({event:m,context:u})},ue=e=>(new DOMParser).parseFromString(e,"text/html").body.textContent,ge=(e,t,n)=>e?.position||parseInt(n?.indexOf(t),10)+1,pe=(e,t)=>{const n=U(),o=Array.isArray(e)?e:[{...t,target:e?.target}],i=o.map(e=>((e,t,n)=>{const o=t?.getAttribute("href")||e?.link;if(!B(o,R))return null;const i=ue(e?.label||t?.innerHTML),a=ge(e,i,n);return{product_name:i,product_component:e?.component,product_type:"product",product_system:"ecommerce",index:"number"==typeof a?parseInt(a,10):null,placement:"string"==typeof a?a:null,product_ref:"direct_link",page_layout:window?.dataLayer?.[0]?.content?.contentType??null}})(e,_(e?.target),n)).filter(e=>null!==e);if(0===i.length)return;const a=o[0]?.component,r=o.find(e=>e?.actionId)?.actionId;me({type:"impression",subject:a},i,null,r)},he=(e,t={})=>{const n=U(),o=_(e?.target),i=o?.getAttribute("href")||t?.link;if(B(i,R)){const i={type:"click",subject:t?.component},s=ue(t?.label||o?.innerHTML),l=((e,t,n,o)=>({product_name:e,product_component:o,product_type:"product",product_system:"ecommerce",index:"number"==typeof t?parseInt(t,10):null,placement:"string"==typeof t?t:null,product_ref:"direct_link",page_layout:window?.dataLayer?.[0]?.content?.contentType??null,features_list:n}))(s,ge(t,s,n),(a=t?.offerIndex,r=t?.offersLength,null!=a&&r?[{name:"image",index:null,total_index:null},{name:"rating",index:null,total_index:null},{name:"pros&cons",index:null,total_index:null},{name:"badges",index:null,total_index:null},{name:"clip",index:null,total_index:null},{name:"video",index:null,total_index:null},{name:"MBB",index:parseInt(a,10),total_index:parseInt(r,10)}]:null),t?.component);me(i,l,e,t?.actionId)}var a,r},be=(e,t=null,n={})=>{const{skipDuplicateEvent:i=!0,targetElement:a=null,actionId:r=null}=n,s=f()({eventData:e});let l={event:{schema:"iglu:com.condenast/navigation_event/jsonschema/3-0-0",data:e}};if(t&&(l={...l,context:[{schema:"iglu:com.condenast/ad/jsonschema/4-0-2",data:{request_type:"interactive",unit:t}}]}),a){const e=_(a)||a;if(e&&e.href){const t=Y(e,r);l=l.context?{...l,context:[...l.context,t]}:{...l,context:[t]}}}const d=F.some(e=>y()(e,s));i&&d||(F.push(f()({eventData:e})),(0,o.YH)(l))},fe=({type:e,subject:t,label:n,placement:o,index:i,content_title:a,content_type:r,content_id:s,content_url:l,total_index:d})=>{const c={type:e,subject:t,label:n,placement:o,index:i,total_index:d,...(a||r||s||l)&&{items:[{content_title:a,content_type:r,content_id:s,content_url:l}]}};be(c,null,{skipDuplicateEvent:!1})},we=()=>{window?.Fides?(()=>{if(window.Fides&&window.Fides.initialized&&window.Fides.shouldShowExperience()){const e=(0,s.be)();(0,o.zm)("trackConsentPending",e)}})():(()=>{if(!(0,C.getCookie)("OptanonAlertBoxClosed")){const e=k()?.split(",")||window?.OnetrustActiveGroups?.split(",")?.slice(1,-1);if(window.OneTrust&&window.OneTrust.GetDomainData){const{IsBannerLoaded:t,ShowAlertNotice:n}=window.OneTrust.GetDomainData();t&&n&&(0,o.zm)("trackConsentPending",e)}}})()},ye=e=>e?{schema:"iglu:com.condenast/video_player/jsonschema/5-0-0",data:{distribution:"oo",platform:"verso",loop:!0,tab_active:!0,volume:0,fullscreen:!1,progress_percent:parseInt(e.progressPercent,10),inview_percent:parseInt(e.inviewPercent,10),current_time:e.currentTime,width:e.width,height:e.height,playing_state:e.type}}:null,ve=e=>{var t;(0,o.YH)({event:{schema:"iglu:com.condenast/video_player_event/jsonschema/2-0-1",data:{type:e?.type,subject:"clip_player"}},context:[(t=e?.clipId,{schema:"iglu:com.condenast/video/jsonschema/4-0-3",data:{video_id:t}}),ye(e)]})},Ie=e=>{(0,o.YH)({event:{schema:"iglu:com.condenast/video_player_event/jsonschema/2-0-1",data:{type:e?.type,subject:"bytes_player"}}})},Ce=e=>{(0,o.YH)({event:{schema:"iglu:com.condenast/click_event/jsonschema/1-0-0",data:{type:"click"}},context:[Y(e)]})},Ae=(e,t=[])=>{(0,o.YH)({event:{schema:"iglu:com.condenast/search_filter_event/jsonschema/4-0-0",data:e},...t.length>0&&{context:t}})},ke=(e,t={})=>{const{skipDuplicateEvent:n=!0,errorInfo:i=null}=t,a=[];i&&a.push({schema:"iglu:com.condenast/error_info/jsonschema/1-0-1",data:{type:"error",...i}});const r=f()({eventData:e}),s=O.some(e=>y()(e,r));n&&s||(O.push(f()({eventData:e})),(0,o.YH)({event:{schema:"iglu:com.condenast/content_engagement_event/jsonschema/2-0-3",data:e},...a.length?{context:a}:{}}))},$e=e=>{(0,o.YH)({event:{schema:"iglu:com.condenast/user_account_event/jsonschema/5-0-1",data:e}})},Se=e=>{const t=e.detail;if(t&&["component-hover","component-click"].includes(t.eventType)){const{componentName:e,eventType:n}=t,o=n.replace(/^component-/,""),i=e.split("-");be({type:i?.[2]&&`${o}_${i?.[2]}`||o,subject:i?.[3]&&`ceros_${i?.[3]}`||null,subject_version:i?.[1]||null},i?.[0]||null)}},Le=e=>e?.toLowerCase().includes("review")?"community_review":"community_comment"},3138(e,t,n){n.d(t,{W:()=>a});var o=n(5736),i=n(50643);async function a(e,t,n){const a={copilotId:t,organizationId:n};try{return await(0,o.j)({federatedGraphqlUrl:e,query:i.x9,variables:a,queryLabelForError:"addRecentlyViewed"})||{}}catch(e){return{}}}},50643(e,t,n){n.d(t,{AQ:()=>c,GK:()=>s,IY:()=>f,Jx:()=>h,TL:()=>d,Yg:()=>m,bw:()=>g,d2:()=>p,fG:()=>i,h9:()=>l,oU:()=>b,x9:()=>u});var o=n(16791);n(70745);const i="\nmutation CreateBookmark($bookmarkName: String!, $organizationId: ID!, $copilotId: String!, $documentType: String!, $meta: String) {\n  createBookmark(bookmarkName: $bookmarkName, organizationId: $organizationId, copilotId: $copilotId, documentType: $documentType, meta: $meta) {\n      id\n      copilotId\n      siteCode\n      bookmarkName\n      documentType\n    }\n  }",a=`\n      fragment bookmarkField on Bookmark {\n        id\n        copilotId\n        bookmarkName\n        content {\n          ...${o.vG}\n        }\n        documentUrl\n        documentType\n        meta\n        siteCode\n        organizationId\n}`,r=`\n  ${a}\n  query AllBookmarks($limit: Int!, $offset: Int!, $organizationId: ID!, $copilotIds: [String], $filter: Filter, $sortOrder: SortOrder, $sortBy: BookmarkSortKeys) {\n    allBookmarks(limit: $limit, offset: $offset, organizationId: $organizationId, copilotIds: $copilotIds, filter: $filter, sortOrder: $sortOrder, sortBy: $sortBy) {\n      bookmarks {\n        ...bookmarkField\n      }\n      allBookmarkCount\n    }\n  }\n`,s=()=>`\n  ${(0,o.AH)()}\n  ${r}\n`,l="\n    mutation DeleteBookmark($bulkIds: [Int], $copilotId: String) {\n    deleteBookmark(bulkIds: $bulkIds, copilotId: $copilotId) {\n      message\n    }\n  }",d="\n    query AllBookmarks($limit: Int!, $offset: Int!, $organizationId: ID!, $copilotIds: [String]) {\n    allBookmarks(limit: $limit, offset: $offset, organizationId: $organizationId, copilotIds: $copilotIds) {\n      bookmarks {\n        id\n        copilotId\n        bookmarkName\n      }\n      allBookmarkCount\n    }\n  }",c="\n    query BookmarkedProducts($limit: Int!, $offset: Int!, $organizationId: ID!, $documentType: String!) {\n    allBookmarks(limit: $limit, offset: $offset, organizationId: $organizationId, documentType: $documentType) {\n      bookmarks {\n        id\n        copilotId\n        bookmarkName\n        documentType\n      }\n      allBookmarkCount\n    }\n  }",m="\n  query GetPhoto($organizationId: ID!, $copilotID: String!) {\n    getPhoto(organizationId: $organizationId, id: $copilotID) {\n      isBookmarked\n    }\n  }\n",u="mutation AddRecentlyViewed($copilotId: String!, $organizationId: ID!) {\n    addRecentlyViewed(copilotId: $copilotId, organizationId: $organizationId) {\n      message\n    }\n  }",g=`\n    ${(0,o._M)(["Photo","Product","Article","Gallery","MusicReview",...o.d7])}\n    ${a}\n    query allCollections(\n      $limit: Int!\n      $offset: Int!\n      $organizationId: ID!\n      $sortBy: CollectionSortKeys\n      $sortOrder: SortOrder\n      $bookmarksLimit: Int!\n      $bookmarksOffset: Int!\n      $bookmarksSortBy: BookmarkCollectionSortKeys\n      $bookmarksSortOrder: SortOrder,\n      $includeBookmarks: Boolean!\n    ) {\n      allCollections(\n        limit: $limit\n        offset: $offset\n        organizationId: $organizationId\n        sortBy: $sortBy\n        sortOrder: $sortOrder\n      ) {\n        allCollectionCount\n        collections {\n          id\n          collectionName\n          totalBookmarkCount\n          lastBookmark {\n            ...bookmarkField\n          }\n          bookmarks(\n            limit: $bookmarksLimit,\n            offset: $bookmarksOffset,\n            sortBy: $bookmarksSortBy,\n            sortOrder: $bookmarksSortOrder\n          ) @include(if: $includeBookmarks) {\n            bookmark {\n              ...bookmarkField\n            }\n          }\n        }\n      }\n    }\n`,p="\n  query allCollections($limit: Int!, $offset: Int!, $organizationId: ID!) {\n    allCollections(\n      limit: $limit\n      offset: $offset\n      organizationId: $organizationId\n    ) {\n      allCollectionCount\n    }\n  }\n",h="mutation UpdateCollection(\n  $updateCollectionId: Int!, \n  $collectionName: String, \n  $organizationId: ID, \n  $addCopilotDetails: [CopilotDetail], \n  $removeCopilotIds: [String], \n  $addBookmarkIds: [Int], \n  $removeBookmarkIds: [Int], \n  $meta: String \n  ) {\n    updateCollection(\n      id: $updateCollectionId, \n      collectionName: $collectionName, \n      organizationId: $organizationId, \n      addCopilotDetails: $addCopilotDetails, \n      removeCopilotIds: $removeCopilotIds, \n      addBookmarkIds: $addBookmarkIds, \n      removeBookmarkIds: $removeBookmarkIds, \n      meta: $meta\n      ) {\n        id\n        collectionName\n        totalBookmarkCount\n        }\n    }\n",b=" \n  mutation CreateCollection($collectionName: String!, $organizationId: ID!, $copilotDetails: [CopilotDetail]) {\n    createCollection(collectionName: $collectionName, organizationId: $organizationId,copilotDetails: $copilotDetails) {\n    id\n    collectionName\n    lastBookmark {\n      copilotId\n    }\n  }\n}",f="\nmutation MoveBookmarks($fromCollectionId: Int!, $toCollectionId: Int!, $copilotIds: [String], $bookmarkIds: [Int], $moveAll: Boolean) {\n  moveBookmarks(fromCollectionId: $fromCollectionId, toCollectionId: $toCollectionId, copilotIds: $copilotIds, bookmarkIds: $bookmarkIds, moveAll: $moveAll) {\n    message\n  }\n}"},55659(e,t,n){n.d(t,{$B:()=>s,I0:()=>i,Je:()=>w,Lp:()=>g,Uz:()=>d,Vr:()=>l,dV:()=>m,pD:()=>p,rO:()=>u,s6:()=>h,sZ:()=>c,vY:()=>a,wX:()=>b});var o=n(26865);n(96472);const i=e=>Math.ceil(e.scrollLeft+e.offsetWidth+1)>=e.scrollWidth,a=e=>0===e.scrollLeft,r=e=>!!window.matchMedia&&window.matchMedia(e).matches,s=()=>r("(max-width: 767px)"),l=()=>r("(min-width: 768px) and (max-width: 1024px)"),d=({isMobile:e,position:t,showControls:n})=>{let o;return o=e?"bottom":"header"===t?"top":"bottom",{showNavControlsAtTop:n&&"top"===o,showNavControlsAtBottom:n&&"bottom"===o}},c=e=>e%1<.5?Math.trunc(e):Math.ceil(e),m=({isSelected:e,theme:t,fullPageTheme:n})=>{const i="inverted"===t.palette||"inverted"===n;return e?i?(0,o._o)(t,"fill","colors.interactive.base.white"):(0,o._o)(t,"fill","colors.interactive.base.black"):i?(0,o._o)(t,"fill","colors.interactive.base.dark"):(0,o._o)(t,"fill","colors.interactive.base.light")},u="mobile",g="tablet",p="desktop",h=(e,t,n,o,i,a,r,s=null)=>{const l=e?.current;if(!l)return;const d=e.current?.children[0]?.offsetWidth||0,c=l.scrollLeft;if(null!==s){const e=(r?d:d*o)*(s-1);return void l.scrollTo({left:e,behavior:"smooth"})}const m=n%o;let u="one-by-one"===t||r?d:d*o;"back"===a&&i&&"one-by-one"!==t&&m>0&&(u=d*m);const g="back"===a?c-u:c+u;l.scrollTo({left:g,behavior:"smooth"})},b=(e,t,n)=>e?"min"!==n?1:2:t?"min"!==n?2:3:"min"!==n?3:4,f={TextCenter:"center",TextCenterPaddingTop:"center",TextLeft:"left",LogoLeftTextLeft:"left",LineAboveLineBelowTextCenter:"center",LineBelowTextCenter:"center",LineAboveLineBelowTextLeft:"left",FullBleedLineAboveOrnamentAboveTextLeft:"left",OrnamentAboveTextLeft:"left",TextLeftWithLineAboveTitle:"left",TextLeftWithLineBelowTitle:"left",TextLeftLineAboveWithHedBackground:"left",FullBleedLineAboveLineBelowTextCenter:"center",LineAboveTextLeft:"left",LineAboveTextCenter:"center",SoftDivider:"center",LineBelowHedTextCenter:"center"},w=(e,t)=>e&&f[e]?f[e]:t},60434(e,t,n){n.d(t,{HG:()=>I,LZ:()=>f,Mq:()=>v,Nf:()=>d,Q1:()=>$,cn:()=>b,i$:()=>w,tJ:()=>c,tT:()=>y,tw:()=>u,u3:()=>h,vB:()=>k,vT:()=>g});var o=n(38267),i=n(18608),a=n(26865),r=n(88456),s=n(96472),l=n(99906);const d=o.Ay.div.withConfig({displayName:"TextFieldLabelText"})`
  ${(0,a.Gg)("typography.definitions.utility.label")};
  transition: color ${s.L6.timingButtonDefault} ease-in;
`,c=o.Ay.div.withConfig({displayName:"TextFieldIcon"})`
  svg {
    ${({theme:e})=>(0,a.FM)(e,"normal","icon")}
  }

  .icon-search {
    margin-top: 8px;
    margin-left: 9px;
  }

  &:active,
  &:focus {
    svg {
      ${({theme:e})=>(0,a.FM)(e,"active","icon")}
    }
  }
  position: absolute;
  top: -5%;
  transform: translateY(calc(50% + ${(0,a.Kq)(1)}));
  transition: fill ${s.L6.timingButtonDefault} ease-in;
  width: ${(0,a.Kq)(3)};
  height: 1.7rem;

  /* leading */
  ${({LeadingIcon:e})=>e&&`left: ${(0,a.Kq)(1)};`}

  /* trailing */
  ${({TrailingIcon:e})=>e&&`right: ${(0,a.Kq)(1)};`}
`,m=o.AH`
  ${(0,a.Gg)("typography.definitions.utility.input-core")};
  margin-top: ${(0,a.Kq)(1)};
  padding: ${(0,a.Kq)(1)} ${(0,a.Kq)(1.5)};
  width: 100%;
  text-transform: none;
  transition-property: color, background, border;
  transition-duration: ${s.L6.timingButtonDefault};
  transition-timing-function: ease-in;

  ${({theme:e})=>(0,a.FM)(e,"normal","background")}
  ${({theme:e})=>(0,a.FM)(e,"normal","text")}
  ${({theme:e})=>(0,a.FM)(e,"normal","border")}

  &:focus {
    outline: 0;
    + ${c} {
      svg {
        ${({theme:e})=>(0,a.FM)(e,"valid","icon")}
      }
    }
  }

  &:active,
  &:focus {
    ${({theme:e})=>(0,a.FM)(e,"active","background")}
    ${({theme:e})=>(0,a.FM)(e,"active","text")}
    ${({theme:e})=>(0,a.FM)(e,"active","border")}
  }

  &[disabled] {
    ${({theme:e})=>(0,a.FM)(e,"disabled","background")}
    ${({theme:e})=>(0,a.FM)(e,"disabled","text")}
    ${({theme:e})=>(0,a.FM)(e,"disabled","border")}
  }
`,u=(0,o.Ay)(i.aE).withConfig({displayName:"TextFieldControlInput"})`
  ${m}
  border-radius: 0;
  height: ${(0,a.Kq)(6)};
  appearance: none;
  ${(0,a.R9)("hasLeadingIcon",!0,`padding-left: ${(0,a.Kq)(6.25)};`)}

  ${(0,a.R9)("hasTrailingIcon",!0,`padding-right: ${(0,a.Kq)(6)};`)}
`,g=(0,o.Ay)(i.MW).withConfig({displayName:"TextFieldControlTextarea"})`
  ${m}
  max-width: 100%;

  resize: none;
  ${({customHeightMultiplier:e})=>e?`  \n      height:${(0,a.Kq)(e)};\n    `:`\n     height:${(0,a.Kq)(19)};\n    `}
  ${({hasBoxShadow:e})=>e&&"\n    box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);\n  "}
   ${({hasRoundedEdges:e})=>e&&"\n    border-radius: 999px;\n  "}
`,p=o.AH`
  ${u}, ${g} {
    ${({theme:e})=>(0,a.FM)(e,"valid","background")}
    ${({theme:e})=>(0,a.FM)(e,"valid","text")}
    ${({theme:e})=>(0,a.FM)(e,"valid","border")}
  }

  ${c} {
    svg {
      ${({theme:e})=>(0,a.FM)(e,"valid","icon")}
    }
  }
`,h=o.Ay.div.withConfig({displayName:"TextFieldAssistiveText"})`
  ${(0,a.Gg)("typography.definitions.utility.assistive-text")}

  grid-column: -1 / 1;
  transition: color ${s.L6.timingButtonDefault} ease-in;
  margin-top: ${(0,a.Kq)(1)};

  ${({theme:e})=>(0,a._o)(e,"color","colors.interactive.base.dark")};
`,b=(0,o.Ay)(i.vm).withConfig({displayName:"TextFieldLabel"}).attrs(e=>({as:"label",...e}))`
  /* disabled */
  ${d}, ${h} {
    ${({isDisabled:e,theme:t})=>e&&(0,a._o)(t,"color","colors.interactive.base.dark")}
  }

  ${c} {
    svg {
      ${({theme:e})=>(0,a.FM)(e,"disabled","icon")}
    }
  }

  /* leading-icon */
  ${u}, ${g} {
    ${(0,a.R9)("hasInlineLabel",!0,o.AH`
        margin-top: 0;
        padding-top: ${(0,a.Kq)(3)};
      `)}
  }

  /* inline */
  ${d} {
    ${(0,a.R9)("hasInlineLabel",!0,o.AH`
        ${(0,a.Gg)("typography.definitions.utility.assistive-text")};
        position: absolute;
        z-index: 1;
        margin-left: 1px; /* to match the 1px left border of the input area */
        padding: ${(0,a.Kq)(1)} ${(0,a.Kq)(1)} 0;
      `)}
  }

  ${(0,a.R9)("isActivated",!0,p)}
`,f=o.Ay.div.withConfig({displayName:"TextFieldInputContainer"})`
  position: relative;
  grid-column: 1;

  input[type='search'] {
    appearance: none;
  }
`,w=o.Ay.datalist.withConfig({displayName:"TextFieldDataList"})``,y=o.Ay.option.withConfig({displayName:"TextFieldDataListOption"})``,v=(0,o.Ay)(r.A).withConfig({displayName:"TextFieldButton"})`
  height: 48px;
  ${(0,a.Xm)(0,s.LO.md)} {
    margin-top: ${(0,a.Kq)(1)};
  }

  /* mobile-hide */
  ${({hideButtonInMobile:e})=>e&&`\n    ${(0,a.Xm)(0,`${l.VS.md}px`)} {\n      position: absolute;\n      visibility: hidden;\n    }\n  `}

  ${({theme:e,isInverted:t})=>t&&`\n      border-radius: 3px;\n      ${(0,a._o)(e,"background-color","colors.interactive.base.brand-secondary")};\n      \n      ${(0,a.H4)(s.LO.md)} {\n        margin-left: ${(0,a.Kq)(1)};\n      }\n\n  `}
`,I=(0,o.Ay)(i.vm).withConfig({displayName:"TextFieldErrorText"}).attrs(e=>({as:"div",colorToken:"colors.interactive.feedback.invalid-primary",topSpacing:1,typeIdentity:"typography.definitions.utility.assistive-text",...e}))`
  grid-column: -1 / 1;
`,C=o.AH`
  ${u}, ${g} {
    ${({theme:e})=>(0,a.FM)(e,"invalid","background")}
    ${({theme:e})=>(0,a.FM)(e,"invalid","text")}
    ${({theme:e})=>(0,a.FM)(e,"invalid","border")}
  }

  ${c} {
    svg {
      ${({theme:e})=>(0,a.FM)(e,"invalid","icon")}
    }
  }

  ${({hasAttachedButton:e,isAlwaysStacked:t})=>e&&!t&&`\n    ${(0,a.H4)(s.LO.md)} {\n      grid-column: 1 / span 2;\n    }\n  `}
`,A=o.AH`
  ${(0,a.Xm)(0,s.LO.md)} {
    grid-template-columns: auto ${(0,a.Kq)(14)};
    align-items: end;
  }

  ${v} {
    margin-top: 0;
    ${(0,a.Xm)(0,s.LO.md)} {
      min-width: unset;
    }
  }
`,k=o.Ay.span.withConfig({displayName:"TextFieldWrapper"})`
  display: grid;
  margin-bottom: ${(0,a.Kq)(2)};

  ${(0,a.H4)(s.LO.md)} {
    ${({shouldUseAlternativeStyle:e})=>e&&`margin-bottom: ${(0,a.Kq)(3)};`}
  }

  /* hasAttachedButton */
  ${({hasAttachedButton:e,isAlwaysStacked:t})=>!t&&e?`\n    ${(0,a.H4)(s.LO.md)} {\n      grid-template-columns: 1fr auto;\n      align-items: end;\n    }\n  `:""}
  ${({hasAttachedButtonForMobile:e})=>e&&`\n    ${(0,a.L7)(s.LO.md)} {\n      grid-template-columns: 1fr auto;\n      align-items: end;\n    }`}

  ::placeholder {
    ${({theme:e})=>(0,a._o)(e,"color","colors.interactive.base.dark")};
  }

  ${({hasAttachedButton:e,isNeverStacked:t})=>e&&t?A:""};

  /* error */
  ${(0,a.R9)("hasErrorState",!0,C)}
  /* alternative-style */

  ${d} {
    ${({hasAttachedButton:e,isAlwaysStacked:t})=>!t&&e?`\n      ${(0,a.H4)(s.LO.md)} {\n          grid-column: span 2;\n      }\n    `:""}
  }

  ${I} {
    ${({hasAttachedButton:e,isAlwaysStacked:t})=>!t&&e?`\n      ${(0,a.H4)(s.LO.md)} {\n        grid-column: 1 / span 2;\n      }\n    `:""}
  }
`,$=(0,o.Ay)(i.sH).withConfig({displayName:"TextFieldErrorSuggestion"}).attrs(e=>({colorToken:"colors.interactive.feedback.invalid-primary",typeIdentity:"typography.definitions.utility.assistive-text",...e}))`
  text-decoration: underline;

  &:hover {
    ${({theme:e})=>(0,a._o)(e,"color","colors.interactive.feedback.invalid-primary")};
  }
`},24494(e,t,n){n.d(t,{A:()=>o});const o=["at","be","bg","hr","cy","cz","dk","ee","fi","fr","de","gr","hu","ie","it","lv","lt","lu","mt","nl","pl","pt","ro","sk","si","es","se","is","li","no","gb","uk","ch"]}}]);
"use strict";(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[4223],{62077(e,a,o){o.d(a,{K2:()=>u});var t=o(38267),n=o(96472),r=o(1123),i=o(26865),s=o(99906),l=o(22652),d=o(48286),c=o(41108),m=o(75163);t.Ay.div.withConfig({displayName:"Wrapper"})`
  ${(0,r.VO)()}

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--grid-gap);
  margin: 0 auto;
  width: 100%;
  max-width: ${n.LO.xxl};
  row-gap: var(--grid-gap);
  ${(0,r.aU)("padding")}

  ${(0,i.H4)(n.LO.md)} {
    grid-template-columns: repeat(12, 1fr);
  }
`,(0,t.Ay)(d.A).withConfig({displayName:"BundleBodyClamp"})`
  grid-column: 1/-1;

  ${(0,i.H4)(n.LO.md)} {
    grid-column: 3/11;
  }
`;const u=(0,t.Ay)(l.A).withConfig({displayName:"BundleBodyContainer"})`
  grid-column: 1/-1;

  ${(0,i.H4)(n.LO.md)} {
    grid-column: 3/11;
  }

  ${({shouldOverrideTypeToken:e})=>e?(0,i.Gg)("typography.definitions.consumptionEditorial.body-core"):(0,i.Gg)("typography.definitions.consumptionEditorial.subhed-aux-secondary")}

  @media (max-width: ${s.VS.md}px) {
    ${({shouldOverrideTypeToken:e})=>(0,i.Gg)("typography.definitions.consumptionEditorial.body-core")};
  }

  p:first-child {
    padding-top: ${(0,i.Kq)(4)};
    @media (min-width: ${n.LO.lg}) {
      padding-top: ${(0,i.Kq)(9)};
    }
  }

  p.callout--group-item {
    padding-top: 0;
  }

  p.${m.pT.Component.BodyDropcap.split(" ").join(".")} {
    margin-top: ${(0,i.Kq)(4,"px")};
  }

  ${({shouldOverrideSpacing:e})=>e&&`\n    h2,\n    h3,\n    h4,\n    h5 {\n      margin: ${(0,i.Kq)(5,"px")} 0;\n    }\n    `}

  ${c.$m} {
    display: grid;
    grid-gap: 1.25rem;
    grid-template-columns: repeat(4, 1fr);

    @media (min-width: ${n.LO.md}) {
      grid-template-columns: repeat(8, 1fr);
    }

    ${c.HO} {
      grid-column: 2 / span 2;

      @media (min-width: ${n.LO.md}) {
        grid-column: 3 / span 4;
      }
    }
  }
`},97737(e,a,o){o.d(a,{Uz:()=>Ne,XB:()=>Se});var t=o(96540),n=o(5556),r=o.n(n),i=o(32485),s=o.n(i),l=o(6442),d=o(19607),c=o(58447),m=o(51211),u=o(53499),g=o(79133),h=o(22043),p=o(91384),y=o(77498),b=o(49741),k=o(38080),C=o(26995),v=o(88820),w=o(83254),A=o(82873),f=o(16809),E=o(4665),$=o(78853),M=o(19362),B=o(15226),S=o(22361),N=o(56857),P=o(72147),H=o(96747),T=o(91706),L=o(94107),F=o(98338),R=o(82317),D=o(55614),O=o(29693),x=o(29752),I=o(51172),K=o(45675),V=o(41375),q=o(57926),_=o(60156),U=o(41433),J=o(89546),G=o(54765),W=o(50417),j=o(70231),z=o(54608),Q=o(47940),X=o(64185),Y=o(2060),Z=o(6337),ee=o(2860),ae=o(85788),oe=o(52643),te=o(40133),ne=o(12501),re=o(90239),ie=o(71724),se=o(67275),le=o(48887),de=o(86659),ce=o(66862),me=o(97e3),ue=o(25671),ge=o(99906),he=o(64214),pe=o(94776),ye=o(23479),be=o(75389),ke=o(36276),Ce=o(29164),ve=o(51054),we=o(14307),Ae=o(62327),fe=o(95768),Ee=o(96528);const $e="row-content";let Me=-1;const Be=["verso-filterable-summary-list","verso-article-filterable-feature","verso-plp-multisearch-filterable-feature","verso-plp-filterable-feature","verso-plp-manual-curated","verso-plp-search-curated","verso-pim-collection"];function Se(e,{shouldUseGridForEmbed:a,shouldUseJumpLinksSectionStyleForEmbed:o,shouldShowAdsInMultiPackageBody:n}){const r=a?de.A.NarrowContentWithWideAdRail:se.rT;if(n)return t.createElement(le.A,{FullBleedContentWrapper:r,GeneralContentWrapper:r,RailContent:()=>t.createElement(k.Z,{group:"ads"},t.createElement(d.A,{position:"rail"})),jsonml:e.body});const i=t.createElement(ae.A,{copilotId:e.copilotId,body:e.body,dangerousHed:e.dangerousHed,dangerousDek:e.dangerousDek});return o?t.createElement(se.qC,{className:"verso-section-jump-links-wrapper"},i):i}function Ne(e,a,o,n={},r={}){const{hasNoBottomMargin:i,hasReducedMargin:s,tickerMarginTopType:l,hasVersoFeaturesReducedMargin:d,hasMediumMargin:c}=r;return e>0?t.createElement(Z.A,{key:e,hasReducedMargin:s,hasNoTopMargin:!!d,hasNoBottomMargin:!!i,hasMediumMargin:c,hasConsistentSpacing:o},t.createElement(se.ab,{isInvertedTheme:a,id:n.id},t.createElement(D.A,{marginTopType:l,...n,index:e,isInvertedTheme:a}))):t.createElement(se.ab,{key:e,isInvertedTheme:a,id:n.id},t.createElement(D.A,{marginTopType:l,hasMinimalBottomMargin:s,index:e,...n,isInvertedTheme:a}))}function Pe(e){return!!e?.items?.length}function He(e,a){return Be.includes(e)&&-1===Me?(Me=a,a):Me}function Te(e,a,o,n,r={},i=!1,l={}){const{buttonVariation:u,btnStyle:g,collageComponentTemplates:D,associatedComponentRules:ae,gridVariationForEmbed:le,hasCarouselSliderPagination:de,hasControls:Me,hasDiscoveryPullQuoteUnderline:Be,hasNavigationButtonVariation:Le,hasCarouselSliderPaginationForArticle:Fe,hasPlpFilterableContainerBackgroundColor:Re,hasPlpFilterableContainerLightBackgroundColor:De,hasRelatedContainerBackgroundColor:Oe,hasVersoFeaturesIncreasedVerticalPadding:xe,hasVersoFeaturesIncreasedVerticalPaddingTop:Ie,hasNoBottomMargin:Ke,hasNoTopBottomMarginOnMobile:Ve,hasMarginBottomMultiPackageRow:qe,hasMarginTopMultiPackageRow:_e,hasMediumMargin:Ue,hasReducedMargin:Je,hasStickyLinkBanner:Ge,hasTickerSpecialTheme:We,hasTopAndBottomBorderQuote:je,hasNoBackgroundColor:ze,hasNoStickyNavigationBanner:Qe,ProductListingCarouselContainersData:Xe,lightBgLinkBannerLayout:Ye,lowestHierarchy:Ze,includeSummaryCollageEight:ea,isEmbedWrapperFullBleed:aa,shouldEnableBundleComponentAnalytics:oa,shouldHideAds:ta,shouldHideNewsletter:na,shouldCheckProductInView:ra,shouldUseConstrainedParagraph:ia,shouldUseJumpLinksSectionStyleForEmbed:sa,shouldUseThreeColumnsForContributors:la,shouldUseFourColumnsForContributors:da,shouldUseGridForEmbed:ca,shouldShowAdsInMultiPackageBody:ma,shouldUseGridWrapperForEmbed:ua,shouldShowPaginatedButtonAtEnd:ga,shouldShowSummaryGridButton:ha,hideCuratedShowsList:pa,showPriceForProduct:ya,expVariationName:ba,formatMessage:ka,nativeTrendingPosition:Ca,summaryCollageOneVariation:va,shouldRenderForyouComponent:wa}=l,Aa=R.A[va];let fa="";if(ae){const a=(0,ie.rB)(e,ae);fa=a?.behavior??fa}const Ea=!(0,ie.rB)(e,D)&&r.featureFlags.preferCollectionGrid,$a=r.featureFlags.hasNewsletterWithoutWrapper,Ma=r.config?.commenting?.enableCommentsCount,Ba=r.config?.account?.bookmark,Sa=Ba?.enableCardLevelBookmark||!1,Na=Ba?.enableBookmarkDrawers||!1,Pa=r.config?.featureFlags?.enableBookmarking||!1;oa&&(e.shouldEnableBundleComponentAnalytics=oa);const Ha=e=>(Xe&&Xe[0])===e,{newsletterId:Ta,dangerousHed:La="",frequencyBadge:Fa=""}=r.newsletter||{},Ra=(e,a)=>{if(!e)return;a();const o={type:"impression",newsletter_id:String(Ta),newsletter_title:La,cadence:Fa,subject:"verso-hp-midpage"};(0,we.pu)(o)},Da=e=>t.createElement(fe.A,{isPhotoBookmarkingEnabled:Pa},e),Oa=({container:e,hasConsistentSpacing:a,summaryCollageVariation:i})=>Pe(e)?t.createElement(fe.A,{isPhotoBookmarkingEnabled:Na,key:n},t.createElement(Z.A,{dataJourneyHook:$e,hasNoBottomMargin:!0,hasNoTopMargin:!!o.hasVersoFeaturesReducedMargin,hasMarginBottomMultiPackageRow:qe,hasMarginTopMultiPackageRow:_e,hasNoTopBottomMarginOnMobile:Ve,hasConsistentSpacing:a},t.createElement(q.A,{container:e,hasIncreasedVerticalPadding:xe,hasIncreasedVerticalPaddingTop:Ie,hasMinimalVerticalSpacing:o.hasVersoFeaturesReducedMargin,lowestHierarchy:r.bundle.isDestinationBundle?Ze:"",shouldPreferCollectionGrid:Ea,shouldUseAdInCollectionGrid:r.featureFlags.shouldUseAdInCollectionGrid,shouldEnableBookmarkDrawers:Na,shouldEnableCardLevelBookmark:Sa,shouldEnableCommentsCount:Ma,shouldUseBookmarkV2:r.featureFlags.shouldUseBookmarkV2,isDestinationBundle:r.bundle.isDestinationBundle,summaryCollageVariation:i,hasNoTopBottomMarginOnMobile:Ve,hasReducedMargin:Je,hasConsistentSpacing:a,shouldUseCustomMargin:o.shouldUseCustomMargin}))):null;switch(e.template){case"verso-features":return wa&&"Carousel"===e.layout?null:Oa({container:e,hasConsistentSpacing:i});case"verso-native-five-feature":case"verso-native-three-feature":case"verso-search-features":case"verso-article-and-curated-search":case"verso-features-with-recs-override":case"verso-multi-package-feature":case"visual-story-carousel":return Oa({container:e,hasConsistentSpacing:i});case"spotlight-article":return t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasReducedMargin:Je,hasConsistentSpacing:i},t.createElement(I.A,{...e}));case"spotlight-contributor":return t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasReducedMargin:Je,hasRightAndLeftMargin:!0,hasConsistentSpacing:i},t.createElement(I.A.ContributorSummarySpotlight,{...e}));case"spotlight-story":return t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasReducedMargin:Je,hasRightAndLeftMargin:!0,hasConsistentSpacing:i},t.createElement(I.A.StorySummarySpotlight,{...e}));case"verso-native-featured-item":return t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasReducedMargin:Je,hasConsistentSpacing:i},t.createElement(Aa,{...e,hasPaddingOnContent:!0,customNativeBackgroundColor:"colors.background.adContainer.special"}));case"verso-audio-article":return t.createElement(Z.A,{key:n,className:s()("collection-grid-row"),hasReducedMargin:Je,hasConsistentSpacing:i},t.createElement(T.A.FourColumnsWithIcon,{...e}));case"verso-features-rows":return Oa({container:e,hasConsistentSpacing:i,summaryCollageVariation:"RowsWithDekAndItemsBelow"});case"verso-promobox":case"solo-promo":return t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasMarginTopMultiPackageRow:_e,hasConsistentSpacing:i},t.createElement(se.S_,null,t.createElement(B.A,{isInvertedTheme:a,...e,isInverted:r.bundle.isInvertedTheme,hasNativeImgLazyLoading:!0})));case"verso-homepage-event-list":return e.eventItems&&t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(se.fm,null,t.createElement(v.A,{events:[e.eventItems]})));case"verso-homepage-tabbable-event-list":return e.eventItems&&t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(se.fm,null,t.createElement(v.A.SortByMonth,{events:e.eventItems,links:e.links,marquee:e.marquee,shouldUseTabs:e.shouldUseTabs,title:""})));case"verso-homepage-event":return e.eventItems&&t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(se.fm,null,t.createElement(v.A.SortByMonth,{events:[e.eventItems]})));case"verso-pullquote":return t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasNoTopBottomMarginOnMobile:Ve,hasConsistentSpacing:i},t.createElement(se.NK,{hasTopAndBottomBorderQuote:je},t.createElement(C.A,{...e,hasUnderline:Be})));case"verso-spotlight-contributor":return t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasReducedMargin:Je,hasConsistentSpacing:i},t.createElement(j.A,{...e}));case"verso-summary-spotlight":return t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(K.A,{...e}));case"verso-native":return ta?null:t.createElement(re.A,{key:n},t.createElement(Z.A,{dataJourneyHook:$e,className:"homepage__native-ad",hasReducedMargin:Je,hasMediumMargin:Ue,hasNoTopBottomMarginOnMobile:Ve,hasConsistentSpacing:i,isNativeAd:!0},t.createElement(k.Z,{group:"ads"},t.createElement(d.A,{position:"promo"}))));case"verso-cne-video":case"verso-cne-search-video":{const{dangerousDek:a,dangerousHed:o,isSpecialTheme:r,items:s,shouldUseBundleData:l,hasBottomMargin:d,hasGridWithMargins:c,hasTopMargin:m,shouldHideCNEVideoDek:u,sectionTitleVariation:g}=e;return t.createElement(Z.A,{className:"verso-bundle-cne-embed",key:n,dataJourneyHook:$e,hasMediumMargin:Ue,hasMarginTopMultiPackageRow:_e,hasNoBottomMargin:r&&Ke,hasNoTopBottomMarginOnMobile:Ve,hasConsistentSpacing:i},t.createElement(h.A,{dangerousHed:o,dangerousDek:a,isSpecialTheme:r,items:s,isBundle:!0,shouldUseBundleData:l,shouldHideCNEVideoDek:u,shouldHaveTeaser:!0,hasBottomMargin:d,hasGridWithMargins:c,hasTopMargin:m,videoEmbedPosition:Ae.sm,sectionTitleVariation:g}))}case"verso-native-cne-video":{if(!Pe(e))return null;const{dangerousHed:a,items:o}=e;return t.createElement(Z.A,{className:"verso-bundle-cne-embed",key:n,dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(h.A,{dangerousHed:a,items:o}))}case"verso-related":case"verso-related-list-curation":return t.createElement(Z.A,{dataJourneyHook:$e,key:n,className:s()({"homepage__related-row":Oe,"summary-collection-row":!0}),hasMarginBottomMultiPackageRow:qe,hasMarginTopMultiPackageRow:_e,hasNoBottomMargin:Ke,hasMediumMargin:Ue,hasConsistentSpacing:i},t.createElement(P.A,{...e,hasBackgroundColor:Oe,nativeTrendingPosition:Ca,shouldTrackSnowplowRecircEvent:!0}));case"verso-searchable-summary-collection":{const{dangerousHed:a}=e;return t.createElement(Z.A,{className:"verso-searchable-summary-collection",hasConsistentSpacing:i},t.createElement(S.A,{dangerousHed:a}))}case"verso-summary-collection-row":return t.createElement(Z.A,{className:"verso-summary-collection-row summary-collection-row",key:n,dataJourneyHook:$e,hasMarginTopMultiPackageRow:_e,hasConsistentSpacing:i},t.createElement(P.A,{isInvertedTheme:a,...e}));case"verso-summary-grid-compact":return Pe(e)?t.createElement(Z.A,{className:"verso-summary-grid-compact",key:n,dataJourneyHook:$e,hasNoBottomMargin:Ke,hasConsistentSpacing:i},t.createElement(se.fm,null,t.createElement(H.A,{...e,hasButton:ha,showPrice:ya}))):null;case"verso-news-feed":return t.createElement(Z.A,{key:n,className:"news-feed-row",dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(se.pY,null,t.createElement(m.A,{...e})));case"verso-river":case"verso-river-list":{const{bundle:{containers:s,homepagePromoUnitOrder:l=[],isPodcastBundle:d}}=r,c=l.map((e,t)=>Te(s.find(a=>e===a.template)||{template:e},a,o,t,r,i)).filter(Boolean),{dangerousHed:m="",noChannelItems:h=!1,searchUrl:p="",hasRule:y=!0}=e,b=new URLSearchParams(p);return e.searchQuery=b.get("q"),t.createElement("div",{key:n},h&&(b.get("q")||b.get("hierarchy"))&&t.createElement(Z.A,{dataJourneyHook:$e,hasMediumMargin:Ue,hasReducedMargin:Je,hasNoTopMargin:!!o.hasNoTopMargin,hasNoBottomMargin:!!o.hasNoBottomMargin,hasMarginTopMultiPackageRow:_e,hasConsistentSpacing:i},t.createElement(se.yk,{className:"no-items",hasRule:y},t.createElement("h3",null,ka(O.A.noStories)),t.createElement("div",null,t.createElement("p",null,ka(O.A.exploreInstead))))),t.createElement(Z.A,{dataJourneyHook:$e,hasMediumMargin:Ue,hasReducedMargin:Je,hasNoTopMargin:!!o.hasNoTopMargin,hasNoBottomMargin:!!o.hasNoBottomMargin,hasNoTopBottomMarginOnMobile:Ve,hasMarginTopMultiPackageRow:_e,hasConsistentSpacing:i},d?t.createElement(oe.Xi,{...e,shouldShowRiverHed:!0,summaryItemHedTag:"h3",hasLineAboveBelowInTitle:!0,hasLineAboveBelowTitleHead:!0,hasExtraTitlePadding:!0,dangerousHed:m||r.relatedArticleHed||ka(te.A.relatedArticleHed),chunkSize:3,summaryItemVariation:"SideBySideDesktopOnly",shouldHidePublishDate:!1,hasRail:!1,hasRule:h?!h:y}):t.createElement(L.A,{...e,summaryItemHedTag:"h3",promoUnits:c,recircRiver:(xa=m,xa.replace(/<[^>]*>/g,"")),hasRule:h?!h:y,shouldUseBookmarkV2:r.featureFlags.shouldUseBookmarkV2,shouldEnableBookmarkDrawers:Na,shouldEnableCardLevelBookmark:Sa,shouldEnableCommentsCount:Ma})),!ga&&function(e,a,o,n,r={}){return pe.F[r?.layout]?.isPaginated&&t.createElement(se.Jv,{key:"paginated","data-test-id":"read-more-button-between",hasConsistentSpacing:n},t.createElement(M.A,{currentPage:e.bundle.paginatedPage,totalResults:r.totalResults,limit:r.limit,buttonVariation:a,btnStyle:o,filter:r.filter,searchQuery:r.searchQuery,shouldEnableBundleComponentAnalytics:r.shouldEnableBundleComponentAnalytics}))}(r,u,g,i,e))}case"summary-carousel":{if(!Pe(e))return null;const{items:a,dangerousHed:o,dangerousDek:r}=e;return t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasNoBottomMargin:Ke,hasNoTopBottomMarginOnMobile:Ve,hasConsistentSpacing:i},t.createElement(x.A,{items:a,dangerousHed:o,dangerousDek:r,shouldEnableBundleComponentAnalytics:oa,hasNoTopBottomMarginOnMobile:Ve,href:"/video",inputKind:"link"}))}case"verso-native-one-river":return Pe(e)?t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(L.A,{isMidContentAdsDisabled:r.bundle.isMidContentAdsDisabled,...e,shouldShowRiverHed:!0,hasLineAboveBelowTitleHead:!0,hasRule:!1,hasNoTopBottomMarginOnMobile:Ve})):null;case"newsletter":case"newsletter-subscribe":return na?null:$a?t.createElement(Ce.A,{onIntersectionViewport:Ra,observerOptions:{rootMargin:"0px"},className:"multipackage-newsletter-viewport",key:n},t.createElement(y.A,{...r.newsletter,sourceCode:"verso-hp-midpage",position:`container-newsletter-${n}`})):t.createElement(Z.A,{className:"homepage__newsletter-row",key:n,dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(se.L7,null,t.createElement(Ce.A,{onIntersectionViewport:Ra,observerOptions:{rootMargin:"0px"},className:"multipackage-newsletter-viewport"},t.createElement(y.A,{...r.newsletter,sourceCode:"verso-hp-midpage"}))));case"verso-ticker":return t.createElement("div",{key:n,className:s()("ticker-view",{"ticker-view--has-special-theme":We}),"data-journey-hook":[0,2].includes(n)?null:$e},t.createElement(se.ab,null,t.createElement(b.A,{position:"cm-ticker"})),!r.featureFlags.hideTicker&&Ne(n,r.bundle.isInvertedTheme,i,e,o));case"verso-link-banner":{let a=Ge;return"VisualCarousel"===e.layout&&(a=!1),e.hasContent&&t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasMediumMargin:Ue,hasNoBottomMargin:Ke,hasStickyLinkBanner:a,hasLightBgForLinkBanner:Ye===e.layout,hasConsistentSpacing:i},t.createElement(A.A,{...e}))}case"verso-navigation-list":return e.hasContent&&t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasMediumMargin:Ue,hasNoBottomMargin:Ke,hasStickyLinkBanner:("NavigationListAnchored"===e.layout||"NavigationListTextOverlayOnImage"===e.layout)&&!Qe,hasLightBgForLinkBanner:Ye===e.layout,hasConsistentSpacing:i},t.createElement(f.r,{...e,isInvertedTheme:a,shouldTrackSnowplowEvent:!0}));case"verso-image-slide-show":return e.hasContent?t.createElement(Z.A,{dataJourneyHook:$e,key:n,hasMediumMargin:Ue,hasMarginTopMultiPackageRow:_e,hasConsistentSpacing:i},t.createElement(w.A,{...e.imageSlideShowData})):null;case"list":return t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(L.A,{...e}));case"verso-native-list":return Pe(e)?t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(L.A,{...e,summaryItemVariationList:["SideBySideCenterImageLeft","SideBySideCenterImageRight"],summaryItemClassName:"summary-item--discovery-hed-consumption-dek"})):null;case"verso-featured-item":return t.createElement(Z.A,{dataJourneyHook:$e,className:"verso-featured-item-row",key:n,hasReducedMargin:Je,hasNoTopMargin:!!o.hasVersoFeaturesReducedMargin,hasNoBottomMargin:Ke,hasNoTopBottomMarginOnMobile:Ve,hasConsistentSpacing:i},t.createElement(Aa,{...e,hasNoTopBottomMarginOnMobile:Ve}));case"verso-section-jump-links":return t.createElement(Z.A,{key:n,className:"verso-embed-row verso-section-jump-links-row",dataJourneyHook:$e,hasConsistentSpacing:i},Se(e,{shouldUseGridForEmbed:ca,shouldUseConstrainedParagraph:ia,shouldUseJumpLinksSectionStyleForEmbed:sa,shouldUseGridWrapperForEmbed:ua,gridVariationForEmbed:le}));case"verso-collection-grid":case"verso-native-two-river":return Pe(e)?t.createElement(Z.A,{key:n,className:"collection-grid-row",dataJourneyHook:$e,hasNoBottomMargin:!!o.hasNoBottomMargin,hasNoTopBottomMarginOnMobile:Ve,hasConsistentSpacing:i},t.createElement(T.A,{...e})):null;case"verso-contributors":return t.createElement(Z.A,{key:n,className:s()("collection-grid-row",fa),hasReducedMargin:Je,hasNoBottomMargin:Ke,hasNoTopBottomMarginOnMobile:Ve,hasConsistentSpacing:i},function(e,a,o){return a?t.createElement(T.A.ContributorsInThreeColumnsWithButton,{...e}):o?t.createElement(T.A.ContributorsInFourColumns,{...e}):t.createElement(T.A.Contributors,{...e})}(e,la,da));case"verso-issue-feature":return t.createElement(Z.A,{dataJourneyHook:$e,key:n,className:s()("verso-issue-feature-row",{[fa]:ea}),hasReducedMargin:Je,hasNoTopBottomMarginOnMobile:Ve,hasConsistentSpacing:i},t.createElement(U.A,{...e}));case"verso-cm-unit":return t.createElement(Z.A,{key:n,className:"cm-unit-row",dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(se.kC,null,t.createElement(b.A,{position:"homepage-mid-content"})));case"verso-cta-link":return e.hasLink?"hasMultiPackageRowWrapper"===e.layout?t.createElement(Z.A,{key:n,alignItem:"center",dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(se.t3,{...e,btnStyle:"outlined"})):t.createElement(se.t3,{...e,btnStyle:"outlined"}):null;case"verso-curated-shows":case"verso-tags-list":return Pe(e)?t.createElement(Z.A,{key:n,className:"curated-shows-row",dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(V.A,{...e,hideCuratedShowsList:pa})):null;case"verso-native-product":{if(!Pe(e))return null;const{items:a,dangerousHed:o}=e;return t.createElement(Z.A,{className:"product__list",key:n,dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(J.A,{items:a,dangerousHed:o,isSponsoredAffiliateLinksEnabled:r.bundle.isSponsoredAffiliateLinksEnabled}))}case"verso-native-product-carousel":{if(!Pe(e))return null;const{items:a,dangerousHed:o,dangerousDek:s}=e;return Da(t.createElement(Z.A,{className:"product__carousel",key:n,dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(G.A,{items:a,dangerousHed:o,dangerousDek:s,isSponsoredAffiliateLinksEnabled:r.bundle.isSponsoredAffiliateLinksEnabled,hasNoTopBottomMarginOnMobile:Ve,isFirstProductListingContainer:Ha(e)&&!r.bundle.hasDefaultAffiliateDisclaimer,affiliateDisclaimer:r.bundle.affiliateDisclaimer,showDisclaimer:r.bundle.showDisclaimer})))}case"verso-live-stream":return t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(E.A,{...e}));case"verso-topics-list":return t.createElement(Z.A,{key:n,hasReducedMargin:Je,dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement($.A,{...e}));case"verso-fifty-fifty":case"verso-search-fifty-fifty":return t.createElement(Z.A,{dataJourneyHook:$e,className:"homepage__fifty-fifty-row",key:n,hasNoTopMargin:!!o.hasVersoFeaturesReducedMargin,hasNoBottomMargin:!!o.hasNoBottomMargin,hasConsistentSpacing:i},t.createElement(F.A,{...e,hasConsistentSpacing:i,Ad:d.A}));case"verso-mid-content-ad":return ta?null:t.createElement(re.A,{key:n},t.createElement("div",{"data-journey-hook":$e,className:s()("ad-container",{"ad-container-reduced-margin":Je})},t.createElement(k.Z,{group:"ads"},t.createElement(d.A,{position:"mid-content",shouldHoldSpace:!0,shouldDisplayLabel:!0}))));case"verso-embed":return t.createElement(re.A,{key:n},t.createElement(Z.A,{className:"verso-embed-row",dataJourneyHook:$e,hasMediumMargin:Ue,isInvertedTheme:a,hasMarginTopMultiPackageRow:_e,hasConsistentSpacing:i},Se(e,{shouldUseGridForEmbed:ca,shouldUseConstrainedParagraph:ia,shouldShowAdsInMultiPackageBody:ma,shouldUseGridWrapperForEmbed:ua,gridVariationForEmbed:le,isEmbedWrapperFullBleed:aa})));case"verso-subtopic-discovery":case"verso-subtopics":return Pe(e)?t.createElement(Z.A,{key:n,className:"verso-subtopic-discovery-row",hasMarginBottomMultiPackageRow:qe,hasMarginTopMultiPackageRow:_e,dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(se.XN,null,t.createElement(N.A,{...e}))):null;case"verso-popin":return t.createElement("div",{key:n,id:e.variation,"data-journey-hook":$e});case"verso-filterable-summary-list":return Da(t.createElement(Z.A,{key:n,dataJourneyHook:$e,className:s()({"homepage__plp-filterable-row":Re&&!e?.isGrid}),hasNoTopMargin:!!o.hasNoTopMargin,hasNoBottomMargin:!!o.hasNoBottomMargin,hasIncreasedVerticalPadding:!0,hasConsistentSpacing:i},t.createElement(_.A,{...e,hasCarouselSliderPagination:de,isFirstProductListingContainer:Ha(e)&&!r.bundle.hasDefaultAffiliateDisclaimer,affiliateDisclaimer:r.bundle.affiliateDisclaimer,showDisclaimer:r.bundle.showDisclaimer,shouldEnableBookmarkDrawers:Na,shouldEnableCardLevelBookmark:Sa,shouldEnableCommentsCount:Ma,containerIndex:He(e.template,n)})));case"verso-article-filterable-feature":return t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(_.A,{...e,hasCarouselSliderPagination:Fe,isFirstProductListingContainer:Ha(e)&&!r.bundle.hasDefaultAffiliateDisclaimer,affiliateDisclaimer:r.bundle.affiliateDisclaimer,showDisclaimer:r.bundle.showDisclaimer,containerIndex:He(e.template,n)}));case"verso-plp-multisearch-filterable-feature":case"verso-plp-filterable-feature":return Da(t.createElement(Z.A,{key:n,dataJourneyHook:$e,className:s()({"homepage__plp-filterable-row":Re&&!e?.isGrid}),hasPlpFilterableContainerLightBackgroundColor:De,hasNoTopMargin:!!o.hasNoTopMargin,hasNoBottomMargin:!!o.hasNoBottomMargin,hasMediumMargin:Ue,hasIncreasedVerticalPadding:!0,hasConsistentSpacing:i},t.createElement(_.A,{...e,hasControls:Me,hasCarouselSliderPagination:de,hasNavigationButtonVariation:Le,shouldCheckProductInView:ra,expVariationName:ba,isFirstProductListingContainer:Ha(e)&&!r.bundle.hasDefaultAffiliateDisclaimer,affiliateDisclaimer:r.bundle.affiliateDisclaimer,showDisclaimer:r.bundle.showDisclaimer,containerIndex:He(e.template,n)})));case"verso-plp-curated-visual":return Da(t.createElement(Z.A,{key:n,hasNoBottomMargin:Ke,hasConsistentSpacing:i},t.createElement(ce.A,{...e,isFirstProductListingContainer:Ha(e)&&!r.bundle.hasDefaultAffiliateDisclaimer,showDisclaimer:r.bundle.showDisclaimer})));case"verso-plp-manual-curated":case"verso-plp-search-curated":return Da(t.createElement(Z.A,{key:n,hasPlpFilterableContainerLightBackgroundColor:!ze&&"ContentCarousel"===e.templateLayout,hasConsistentSpacing:i},t.createElement(me.A,{...e,hasCarouselSliderPagination:de,isFirstProductListingContainer:Ha(e)&&!r.bundle.hasDefaultAffiliateDisclaimer,affiliateDisclaimer:r.bundle.affiliateDisclaimer,showDisclaimer:r.bundle.showDisclaimer,containerIndex:He(e.template,n)})));case"verso-pim-collection":return Da(t.createElement(Z.A,{className:"verso-pim-collection-row",key:n,hasConsistentSpacing:i},t.createElement(ue.A,{container:e,pimCollectionBundleLinks:r.bundle.pimCollectionBundleLinks,isMobileView:r.bundle.isMobileView,shouldHideFilterComponent:r.bundle.pimCollectionHiddenFilter,isFirstProductListingContainer:Ha(e)&&!r.bundle.hasDefaultAffiliateDisclaimer,affiliateDisclaimer:r.bundle.affiliateDisclaimer,showDisclaimer:r.bundle.showDisclaimer,containerIndex:He(e.template,n)})));case"verso-full-bleed-banner":return t.createElement(Z.A,{key:n,hasNoBottomMargin:Ke,hasConsistentSpacing:i},t.createElement(Y.A,{...e}));case"verso-best-stories-package":case"verso-hero-curated-feature":return Pe(e)?t.createElement(Z.A,{key:n,hasMarginBottomMultiPackageRow:qe,hasMarginTopMultiPackageRow:_e,className:"verso-best-stories-package",hasConsistentSpacing:i},t.createElement(c.A,{...e,shouldEnableBookmarkDrawers:Na,shouldEnableCardLevelBookmark:Sa,shouldEnableCommentsCount:Ma})):null;case"verso-in-page-marketing-newsletter":return e.isPositionBottom?null:t.createElement(Z.A,{className:"verso-in-page-marketing-newsletter-row",key:n,hasConsistentSpacing:i},t.createElement(Ce.A,{onIntersectionViewport:Ra,observerOptions:{rootMargin:"0px"},className:"multipackage-newsletter-viewport"},t.createElement(y.A,{...e,sourceCode:"verso-hp-midpage",position:`container-newsletter-${n}`,key:n,newsletterType:"impact-newsletter"})));case"verso-celebrated-entrypoint":return e.asset?t.createElement(Z.A,{key:n,dataJourneyHook:$e,hasConsistentSpacing:i},t.createElement(p.A,{...e})):null;case"featured-contributor":return t.createElement(Z.A,{key:n,hasNoBottomMargin:!0,hasConsistentSpacing:i},t.createElement(W.A,{...e}),t.createElement(F.A,{...e,summaryItemStickTopThreshold:ge.Vh.xl,hasConsistentSpacing:i}));case"all-fictions":return t.createElement(z.A,{...e,key:n,pageSize:e.limit,pageNumber:r.bundle.paginatedPage});case"podcast-articles":return t.createElement(Q.A,{...e,key:n});case"articles-about-author":case"more-by-author":return t.createElement(X.A,{...e,key:n,pageNumber:r.bundle.paginatedPage});case"verso-flat-package":case"verso-focus-package":case"verso-puzzles-games-package":return t.createElement(Z.A,{key:n,hasConsistentSpacing:i},t.createElement(he.A,{index:n,...e}));case"verso-top-story-package":return t.createElement(t.Fragment,{key:n},t.createElement(ye.A,{index:n,...e}),t.createElement(ne.Rv,null));case"verso-for-you-package":return wa?t.createElement(Z.A,{key:n,hasConsistentSpacing:i},t.createElement(ve.A,null,t.createElement(be.A,{index:n,...e}))):null;case"trending-curated":case"trending-collection":return t.createElement(Z.A,{key:n,hasConsistentSpacing:i},t.createElement(T.A.ThreeColumns,{shouldHideDangerousDek:!0,shouldHideContributors:!0,hasItemsRule:!1,...e}));case"verso-category-feature-container":return t.createElement(Z.A,{key:n,hasConsistentSpacing:i},t.createElement(T.A.FourColumns,{shouldHideDangerousDek:!1,shouldHideDangerousHedOfSummaryItem:!0,shouldUseArrowIconInSummaryItemDek:!0,isCategoryFeatureContainer:!0,...e}));case"cartoons":return t.createElement(Z.A,{key:n,hasConsistentSpacing:i},t.createElement(ke.A,{...e,carouselPlacedIn:"bundle"}));case"verso-collage":case"verso-collage-search":return t.createElement(Z.A,{key:n,hasConsistentSpacing:i},t.createElement(Ee.j,{...e}));case"verso-issue-explorer":return t.createElement(ee.A,{key:n,...e});default:return null}var xa}const Le=({configuredComponentRef:e,associatedComponentRules:a,bundleProps:o,isInvertedTheme:n=!1,buttonVariation:r,btnStyle:i,collageComponentTemplates:d,hasDiscoveryPullQuoteUnderline:c,containers:m,gridVariationForEmbed:h="NarrowContentWithWideAdRail",hasCarouselSliderPagination:p,hasCarouselSliderPaginationForArticle:b=!1,shouldPushProductIds:k=!1,hasControls:C,shouldUseCustomMargin:v,hasNoBackgroundColor:w=!1,hasNoStickyNavigationBanner:A=!1,lightBgLinkBannerLayout:f,hasNavigationButtonVariation:E,hasNoBottomMargin:$=!1,hasNoTopBottomMarginOnMobile:B=!1,hasNoTopMargin:S=!1,hasPlpFilterableContainerBackgroundColor:N=!1,hasPlpFilterableContainerLightBackgroundColor:P=!1,hasRelatedContainerBackgroundColor:H=!0,hasTickerSpecialTheme:T=!1,hasTopAndBottomBorderQuote:L=!1,hasVersoFeaturesReducedMargin:F=!1,hasVersoFeaturesIncreasedVerticalPadding:R=!1,hasVersoFeaturesIncreasedVerticalPaddingTop:D=!1,hasMarginBottomMultiPackageRow:O=!1,hasMarginTopMultiPackageRow:x=!0,hasEvenSpacingMultiPackageRow:I=!1,hasMediumMargin:K=!1,hasReducedMargin:V=!1,hasStickyLinkBanner:q,isMidContentAdsDisabled:_=!1,isEmbedWrapperFullBleed:U=!1,hasConsistentSpacing:J,multiPackageCustomClassName:G,newsletterType:W="impact-newsletter",shouldAddHjIgnoreAttribute:j,shouldEnableBundleComponentAnalytics:z,shouldHideAds:Q=!1,shouldHideNewsletter:X=!1,shouldUseConstrainedParagraph:Y=!1,shouldUseJumpLinksSectionStyleForEmbed:ee=!1,shouldUseGridForEmbed:ae=!0,shouldUseGridWrapperForEmbed:oe=!1,shouldUseThreeColumnsForContributors:te=!1,shouldUseFourColumnsForContributors:ne=!1,lowestHierarchy:re,shouldCheckProductInView:le,shouldShowAdsInMultiPackageBody:de=!1,shouldShowPaginatedButtonAtEnd:ce=!0,shouldShowSummaryGridButton:me=!0,hideCuratedShowsList:ue=!1,showPriceForProduct:ge=!1,expVariationName:he,nativeTrendingPosition:ye,summaryCollageOneVariation:be="SingleFeature",shouldRenderForyouComponent:ke})=>{t.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(u.G.RENDER,{name:"MultiPackages"})},[]),t.useEffect(()=>{o.bundle&&o.bundle.containers&&o.bundle.containers.length&&k&&(0,g.q)(o.bundle.containers[0].items)},[o,k]);const Ce={hasVersoFeaturesReducedMargin:F,hasReducedMargin:V,hasMediumMargin:K,hasNoBottomMargin:$,hasNoTopMargin:S,shouldUseCustomMargin:v},ve=m.some(e=>(0,ie.rB)(e,d)&&8===e.items.length),we=(0,ie.Oy)(m),{formatMessage:Ae}=(0,l.A)(),fe={buttonVariation:r,btnStyle:i,collageComponentTemplates:d,hasDiscoveryPullQuoteUnderline:c,associatedComponentRules:a,gridVariationForEmbed:h,hasCarouselSliderPagination:p,hasControls:C,lightBgLinkBannerLayout:f,hasNavigationButtonVariation:E,hasCarouselSliderPaginationForArticle:b,hasNoTopBottomMarginOnMobile:B,hasPlpFilterableContainerBackgroundColor:N,hasPlpFilterableContainerLightBackgroundColor:P,hasRelatedContainerBackgroundColor:H,hasTopAndBottomBorderQuote:L,hasVersoFeaturesIncreasedVerticalPadding:R,hasVersoFeaturesIncreasedVerticalPaddingTop:D,hasNoBackgroundColor:w,hasNoStickyNavigationBanner:A,hasNoBottomMargin:$,hasMarginBottomMultiPackageRow:O,hasMarginTopMultiPackageRow:x,hasMediumMargin:K,hasReducedMargin:V,hasStickyLinkBanner:q,hasTickerSpecialTheme:T,includeSummaryCollageEight:ve,isEmbedWrapperFullBleed:U,isMidContentAdsDisabled:_,ProductListingCarouselContainersData:we,shouldCheckProductInView:le,shouldEnableBundleComponentAnalytics:z,shouldHideAds:Q,shouldHideNewsletter:X,shouldUseConstrainedParagraph:Y,shouldUseGridForEmbed:ae,shouldUseJumpLinksSectionStyleForEmbed:ee,shouldUseGridWrapperForEmbed:oe,shouldUseThreeColumnsForContributors:te,shouldUseFourColumnsForContributors:ne,lowestHierarchy:re,shouldShowAdsInMultiPackageBody:de,shouldShowPaginatedButtonAtEnd:ce,shouldShowSummaryGridButton:me,hideCuratedShowsList:ue,showPriceForProduct:ge,expVariationName:he,formatMessage:Ae,nativeTrendingPosition:ye,summaryCollageOneVariation:be,shouldRenderForyouComponent:ke},Ee=m.find(({layout:e})=>pe.F[e]?.isPaginated),$e=m.find(({template:e,isPositionBottom:a})=>"verso-in-page-marketing-newsletter"===e&&a),Me=m.some(e=>"verso-plp-filterable-feature"===e.template&&e.isGrid);return t.createElement(se.Lz,{ref:e,customClass:G,className:"multi-packages"+(G?` ${G}`:""),hasNoTopBottomMarginOnMobile:B,hasMarginBottomMultiPackageRow:O,hasMarginTopMultiPackageRow:x,hasEvenSpacingMultiPackageRow:I,showFooterAdPadding:Me,"data-hj-ignore-attributes":j?"":null,hasConsistentSpacing:J},m.map((e,a)=>Te(e,n,Ce,a,o,J,fe)),Ee&&ce&&t.createElement(se.Jv,{key:"paginated","data-test-id":"read-more-button-end",hasConsistentSpacing:J},t.createElement(M.A,{currentPage:o.bundle.paginatedPage,totalResults:Ee.totalResults,limit:Ee.limit,btnStyle:i,buttonVariation:r,filter:Ee.filter,searchQuery:Ee.searchQuery,shouldEnableBundleComponentAnalytics:Ee.shouldEnableBundleComponentAnalytics})),$e&&t.createElement(Z.A,{className:s()("verso-in-page-marketing-newsletter-row",{"newletter-container-layout":!0}),hasNoBottomMargin:!!Ce.hasNoBottomMargin,hasConsistentSpacing:J},t.createElement(y.A,{...$e,sourceCode:"verso-hp-midpage",position:"container-newsletter",newsletterType:W})))};Le.propTypes={configuredComponentRef:r().func,associatedComponentRules:r().arrayOf(r().object),btnStyle:r().oneOf(["filled","outlined","text"]),bundleProps:r().object,buttonVariation:r().string,collageComponentTemplates:r().arrayOf(r().object),containers:r().array,expVariationName:r().string,gridVariationForEmbed:r().string,hasCarouselSliderPagination:r().bool,hasCarouselSliderPaginationForArticle:r().bool,hasConsistentSpacing:r().bool,hasControls:r().bool,hasDiscoveryPullQuoteUnderline:r().bool,hasEvenSpacingMultiPackageRow:r().bool,hasMarginBottomMultiPackageRow:r().bool,hasMarginTopMultiPackageRow:r().bool,hasMediumMargin:r().bool,hasNavigationButtonVariation:r().bool,hasNoBackgroundColor:r().bool,hasNoBottomMargin:r().bool,hasNoStickyNavigationBanner:r().bool,hasNoTopBottomMarginOnMobile:r().bool,hasNoTopMargin:r().bool,hasPlpFilterableContainerBackgroundColor:r().bool,hasPlpFilterableContainerLightBackgroundColor:r().bool,hasReducedMargin:r().bool,hasRelatedContainerBackgroundColor:r().bool,hasStickyLinkBanner:r().bool,hasTickerSpecialTheme:r().bool,hasTopAndBottomBorderQuote:r().bool,hasVersoFeaturesIncreasedVerticalPadding:r().bool,hasVersoFeaturesIncreasedVerticalPaddingTop:r().bool,hasVersoFeaturesReducedMargin:r().bool,hideCuratedShowsList:r().bool,isEmbedWrapperFullBleed:r().bool,isInvertedTheme:r().bool,isMidContentAdsDisabled:r().bool,lightBgLinkBannerLayout:r().string,lowestHierarchy:r().string,multiPackageCustomClassName:r().string,nativeTrendingPosition:r().number,newsletterType:r().string,shouldAddHjIgnoreAttribute:r().bool,shouldCheckProductInView:r().bool,shouldEnableBundleComponentAnalytics:r().bool,shouldHideAds:r().bool,shouldHideNewsletter:r().bool,shouldPushProductIds:r().bool,shouldRenderForyouComponent:r().bool,shouldShowAdsInMultiPackageBody:r().bool,shouldShowPaginatedButtonAtEnd:r().bool,shouldShowSummaryGridButton:r().bool,shouldUseConstrainedParagraph:r().bool,shouldUseCustomMargin:r().bool,shouldUseFourColumnsForContributors:r().bool,shouldUseGridForEmbed:r().bool,shouldUseGridWrapperForEmbed:r().bool,shouldUseJumpLinksSectionStyleForEmbed:r().bool,shouldUseThreeColumnsForContributors:r().bool,showPriceForProduct:r().bool,summaryCollageOneVariation:r().string,tickerMarginTopType:r().oneOf(["small","none","large"])},Le.displayName="MultiPackages"},94631(e,a,o){o.d(a,{$R:()=>x,N0:()=>V,WV:()=>D,ie:()=>O});var t=o(38267),n=o(26865),r=o(16800),i=o(77346),s=o(22652),l=o(30),d=o(96472),c=o(66472),m=o(4081),u=o(57221),g=o(30543),h=o(18284),p=o(13465),y=o(13099),b=o(33500),k=o(62077),C=o(67275),v=o(4534),w=o(85095),A=o(69817),f=o(53985),E=o(94037),$=o(15622),M=o(69195),B=o(50531),S=o(89085),N=o(1123),P=o(86659),H=o(20139),T=o(73347),L=o(91513),F=o(61670),R=o(75163);const D=(0,t.Ay)("h1").withConfig({displayName:"HomepageHiddenContent"})`
  display: none;
`,O=((0,t.Ay)(i.A).withConfig({displayName:"HomepageHeader"})`
  .news-feed-row {
    /* If homepage header and news feed is first section bypass header styles */
    .navigation--section {
      margin-top: -${(0,n.Kq)(5)};
      border-top: 0;
    }
  }
`,(0,t.Ay)(i.A).withConfig({displayName:"HomepageHeader"})``,t.Ay.div.withConfig({displayName:"HomePageDisclaimerWrapper"})`
  padding: 1rem;

  .disclaimer {
    padding: 0;
  }
  ${({hasGridFourColumnsLayout:e,hasDisclaimerBackground:a,theme:o})=>e&&t.AH`
      ${a?(0,n._o)(o,"background-color","colors.background.light"):null};
      margin-top: ${(0,n.Kq)(-7)};
      padding-bottom: ${(0,n.Kq)(3)};
      ${(0,n.H4)(d.LO.md)} {
        margin-top: ${(0,n.Kq)(-5)};
      }
    `}
`,(0,t.Ay)((0,p.y)(y.M.TextCenterNoTopRule,"Disclaimer")).withConfig({displayName:"HomePageDisclaimer"})`
  grid-column: 1 / -1;
  justify-content: center;
  font-style: italic;

  p {
    ${(0,n.HK)("colors.interactive.base.black")};
    ${(0,n.Gg)("typography.definitions.globalEditorial.context-secondary")};
    padding: 0;
    line-height: 1.125rem;
  }

  ${(0,n.H4)(d.LO.md)} {
    grid-column: 3 / span 8;
  }
`,t.Ay.div.withConfig({displayName:"HomePageDisclaimerBorder"})`
  margin: ${(0,n.Kq)(4)} ${(0,n.Kq)(2)} ${(0,n.Kq)(1)};
  border-bottom: 1px solid
    ${(0,n.HK)("colors.discovery.body.white.divider")};

  @media (min-width: 0) and (max-width: ${d.LO.md}) {
    margin: ${(0,n.Kq)(4)} ${(0,n.Kq)(1)} ${(0,n.Kq)(1)};
  }
`,(0,t.Ay)(s.A).withConfig({displayName:"HomepageChannelBody"})`
  grid-column: 1/-1;
  margin-bottom: 1rem;

  ${(0,n.H4)(d.LO.md)} {
    grid-column: 3/11;
  }
`),x=(0,t.Ay)("aside").withConfig({displayName:"HomepageSummaryListAside"})`
  height: 100%;
`,I=`\n  ul {\n    position: initial;\n    z-index: 2;\n    overflow-x: auto;\n    li {\n      .product__carousel__card {\n        margin-bottom: 0;\n        width: 100%;\n        height: 100%;\n        ${f.yh} {\n          ${f.eN} {\n            overflow: hidden;\n            ${E.F} > ${$.lk} {\n              ${$.dU} > a {\n                ${B.Lj} {\n                  ${(0,n.Gg)("typography.definitions.foundation.link-primary")};\n                }\n              }\n            }\n          }\n          ${f.$N} {\n            margin-right: 0;\n            margin-left: 0;\n            ${(0,n.H4)(d.LO.md)} {\n              margin-right: 0;\n              margin-left: 0;\n            }\n          }\n        }\n      }\n    }\n  }\n`,K=t.AH`
  .homepage__half-column-row--with-border {
    ${(0,n.H4)(d.LO.lg)} {
      &:not(:last-of-type) {
        border-right: 1px solid
          ${(0,n.HK)("colors.discovery.lead.secondary.divider")};
      }
      /* catch-all to prevent a right border from showing
       if two half columns sit beside each other */
      + .homepage__half-column-row--with-border {
        border-right: none;
      }
    }
  }

  .homepage__native-ad .ad--promo .ad__slot--promo {
    display: block;
  }

  .homepage__plp-filterable-row {
    background: ${(0,n.HK)("colors.discovery.body.light.background")};
  }

  .homepage__newsletter-row {
    background: ${(0,n.HK)("colors.discovery.body.light.background")};
    ${({hasFullBleedBackground:e,theme:a})=>!e&&`\n     background: none;\n     ${({theme:e,hasConsistentSpacing:a})=>a&&"0px"!==(0,r.F)(e,"gap-md")?"margin-bottom: 0px;":`margin-top: ${(0,n.Kq)(8)};`};\n     ${C.L7} {\n       background-color: ${(0,n.HK)(a,"colors.consumption.body.special.bg-card")};\n        ${(0,n.H4)(d.LO.lg)} {\n          ${A.zK} {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            ${A.kO} {\n              grid-column: 3 / span 8;\n            }\n            ${A.on} {\n              grid-column: 4 / span 6;\n            }\n          }\n        }\n       }\n   `};

    ${A.zK} {
      ${A.on} {
        ${A.tz} {
          ${M.BI} {
            ${({hideErrorTextPadding:e})=>e&&" padding: 0;\n         "};
          }
          ${A.F9} {
            ${({isNewsletterDisclaimerCenterAligned:e})=>e&&"\n             text-align: center;\n           "};
            ${({shouldOverrideColorToken:e,theme:a})=>e&&`\n             color: ${(0,n.HK)(a,"colors.discovery.body.light.description")};\n             a {\n               color: ${(0,n.HK)(a,"colors.discovery.body.light.description")};\n             }\n           `};
          }
        }
      }
    }
  }

  .homepage__related-row {
    background-color: ${(0,n.HK)("colors.discovery.body.light.background")};
  }

  .newletter-container-layout {
    display: grid;
    ${({theme:e,backgroundColorSettingForNewsletter:a})=>a?`background-color: ${(0,n.HK)(e,`colors.discovery.body.${a}.background`)}`:`${(0,n.HK)("colors.background.light")}`};

    .newsletter-subscribe-form {
      grid-column: 1 / span 6;
      margin: 0 auto;
    }
  }

  .homepage__half-column-row {
    &:not(:last-of-type) {
      ${(0,n.H4)(d.LO.lg)} {
        ${b.bU} {
          ${(0,n.Gg)("typography.definitions.discovery.subhed-section-secondary")};
        }
        width: 50%;
        max-width: ${(0,n.Kq)(100,"px")};
      }

      > .grid {
        ${(0,n.H4)(d.LO.lg)} {
          padding-right: var(--grid-gap);
        }
      }
    }
  }

  ${c.fm} {
    background: transparent;

    .recirc-list.recirc-list--text-overlay {
      margin-top: 0;
    }
  }

  ${({theme:e})=>(0,l.j)(e,"main-background")}
  .ad__slot--hero .cns-ads-stage {
    ${({shouldHidePaddingBottom:e})=>!e&&"padding-bottom: 0;"}
  }

  ${u.qX},
  ${v.Xv} {
    a {
      ${({theme:e})=>(0,n.pe)(e,"colors.consumption.body.standard.link","colors.consumption.body.standard.link-hover")};
      transition: color ${d.L6.timingLinkDefault} ease;
    }
    text-align: center;
  }
  ${A.zK} {
    ${A.on} {
      text-align: left;
    }
    grid-column: 1 / -1;

    ${(0,n.H4)(d.LO.md)} {
      grid-column: 3 / span 8;
    }

    ${(0,n.H4)(d.LO.lg)} {
      grid-column: 4 / span 6;
    }
  }

  .newsletter-subscribe-form__hed {
    margin-top: 0;
    margin-bottom: ${(0,n.Kq)(2)};
    ${({shouldOverrideColorToken:e})=>e&&`\n color: ${(0,n.HK)("colors.discovery.body.light.heading")};`};
    ${(0,n.H4)(d.LO.md)} {
      margin-bottom: ${(0,n.Kq)(2)};
    }
  }
  ${A.G4} {
    margin-top: 0;
    margin-bottom: ${(0,n.Kq)(2)};
    ${({shouldOverrideColorToken:e,theme:a})=>e&&`\n color: ${(0,n.HK)(a,"colors.discovery.body.light.description")};\n  a {\n   color: ${(0,n.HK)(a,"colors.discovery.body.light.description")};\n }`};

    ${(0,n.H4)(d.LO.md)} {
      margin-bottom: ${(0,n.Kq)(4)};
    }
  }
  ${m.vY} {
    &::before {
      display: block;
      ${({shouldHidePadding:e})=>!e&&`height: ${(0,n.Kq)(1,"px")};`}
      content: '';
    }

    .channelfilter-wrapper {
      grid-template-columns: 1fr;
    }
    ${C.Lz} {
      > .product__list {
        margin-right: ${(0,n.Kq)(7)};
        margin-left: ${(0,n.Kq)(7)};
        @media (min-width: 0) and (max-width: ${d.LO.md}) {
          margin-right: ${(0,n.Kq)(3)};
          margin-left: ${(0,n.Kq)(3)};
        }

        .callout--group {
          margin: auto;
          > ${f.ew} {
            ${f.yh} > ${E.F} {
              ${$.lk} > ${$.dU} {
                a > ${B.Lj} {
                  ${(0,n.Gg)("typography.definitions.foundation.link-primary")};
                }
              }
            }
          }
        }
      }

      .cm-unit-row {
        margin-bottom: ${(0,n.Kq)(2)};

        ${({hasEvenSpacing:e})=>e&&t.AH`
            margin-top: ${(0,n.Kq)(6)};
            margin-bottom: 0;
            ${(0,n.H4)(d.LO.md)} {
              margin-top: ${(0,n.Kq)(7)};
              margin-bottom: 0;
            }
          `}

        .consumer-marketing-unit {
          grid-column: 1 / -1;
          border-top: 1px solid
            ${(0,n.HK)("colors.discovery.body.white.divider")};
          padding-top: ${(0,n.Kq)(2)};

          ${(0,n.H4)(d.LO.md)} {
            margin-top: ${(0,n.Kq)(2)};
          }
        }
      }

      > .product__carousel {
        max-width: 1600px;

        div {
          > button.carousel-control-button--back {
            box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.15);
          }

          > button.carousel-control-button--forward {
            box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.15);
          }
        }

        ${I}
      }

      > div > div[data-testid='SummaryRiverWrapper'] {
        section[data-testid='SummaryRiverSection'] .summary-item--bundle {
          grid-column-gap: var(--grid-gap);
          margin: 0;
        }
      }
    }

    ${({hasEvenSpacing:e})=>e&&t.AH`
        ~ ${H.S}:not(:empty) {
          margin-top: ${(0,n.Kq)(6)};
          ${(0,n.H4)(d.LO.md)} {
            margin-top: ${(0,n.Kq)(7)};
          }
        }
      `}
  }

  .summary-item--bundle {
    .summary-item__content {
      @media (min-width: ${d.LO.sm}) {
        width: auto;
      }
      @media (min-width: ${d.LO.md}) {
        padding-right: 0;
        padding-left: 0;
      }

      @media (min-width: ${d.LO.md}) {
        margin: 0;
      }
    }

    .summary-item__hed,
    .summary-item__byline {
      @media (min-width: ${d.LO.md}) {
        margin: 0;
      }
    }
  }

  .summary-collage-five {
    .summary-item--bundle {
      @media (min-width: ${d.LO.md}) {
        .summary-item__hed {
          margin-bottom: ${(0,n.Kq)(2)};
          width: unset;
        }

        .summary-item__hed--no-margin-bottom {
          margin-bottom: 0;
          width: unset;
        }
      }
    }
  }

  .summary-collection-grid--four-columns,
  .summary-collage-one,
  ${w.n} ${w.O9}:first-child {
    .summary-item__image {
      display: block;

      &.responsive-asset {
        margin-right: 0;
        margin-left: 0;
      }

      @media (min-width: ${d.LO.md}) {
        margin-right: 0;
        margin-left: 0;
      }
    }

    .responsive-clip {
      margin-right: 0;
      margin-left: 0;
    }
  }

  .ad-container.ad-container-reduced-margin {
    .ad--mid-content {
      @media (min-width: ${d.LO.md}) {
        margin-bottom: ${(0,n.Kq)(2)};
        padding: 0 0 0 0;
      }
    }
  }

  .ad-container {
    .ad--mid-content {
      margin-bottom: ${(0,n.Kq)(2)};
      padding: 0 0 0 0;
    }
  }

  .ad-container.ad-container-reduced-margin {
    .ad--mid-content-with-padding {
      @media (min-width: ${d.LO.md}) {
        padding: 0 0 ${(0,n.Kq)(2)} 0;
      }
    }
  }

  .ticker-view--has-special-theme {
    background-color: ${({theme:e})=>(0,n.HK)(e,"colors.consumption.body.special.bg-photo")};
  }

  ${({shouldShowFooterAdPadding:e})=>!e&&".cns-ads-slot-type-footer {\n  padding: 0;\n}"}

  ${f.yh} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  ${$.Sy} {
    justify-content: left;
    margin-left: 0;
  }

  .footer-toggle-chip-links {
    padding-bottom: 30px;

    .section-header__container--minimal-padding {
      padding: ${(0,n.Kq)(2)} 0 0;
    }
  }

  ${({hasBackground:e,theme:a})=>e&&a&&(0,l.j)(a,"page-background")};

  .plp-storefornt_breadcrumb {
    ${F.dx} {
      text-transform: capitalize;

      &:last-of-type {
        a {
          ${({theme:e})=>(0,n._o)(e,"color","colors.interactive.base.black")};
        }
      }
    }
  }
`,V=(0,t.Ay)(h.A).withConfig({displayName:"HomepageWrapper"})`
  ${K}
`;(0,t.Ay)(g.A).withConfig({displayName:"HomepageWrapper"})`
  ${K}
`,t.Ay.div.withConfig({displayName:"HomepageBodyWrapperGrid"})`
  ${(0,S.VG)()}
  ${(0,N.aU)("padding")}
`,(0,t.Ay)(P.A.NarrowContentWithWideAdRail).withConfig({displayName:"HomePageGridNarrowContentWithWideAdRail"})`
  ${({shouldUsePaddingTopForHomePageBody:e})=>e&&`padding-top: ${(0,n.Kq)(4)};\n`}
`,t.Ay.div.withConfig({displayName:"HomepageBundleBody"})`
  ${k.K2} {
    margin-top: ${(0,n.Kq)(5)};
    margin-bottom: ${(0,n.Kq)(5)};

    @media (min-width: ${d.LO.lg}) {
      margin-top: ${(0,n.Kq)(6)};
      margin-bottom: ${(0,n.Kq)(6)};
    }

    p:first-child {
      margin-top: 0;
      padding-top: 0;
      @media (min-width: ${d.LO.lg}) {
        padding-top: 0;
      }
    }

    p:last-child {
      margin-bottom: 0;
    }
  }
`,(0,t.Ay)(T.Ay.IconAbove).withConfig({displayName:"HomepageSectionTitle"})``,(0,t.Ay)(L.A).withConfig({displayName:"BreadcrumbTrailComponent"})`
  .${R.pT.Component.Breadcrumb.split(" ").join(".")},
    .${R.pT.Component.BreadcrumbLink.split(" ").join(".")} {
    color: ${(0,n.HK)("colors.interactive.base.deemphasized")};
    ${(0,n.Gg)("typography.definitions.utility.input-core")};
  }
`},52643(e,a,o){o.d(a,{Xi:()=>N});var t=o(38267),n=o(26865),r=o(22652),i=o(30),s=o(96472),l=o(4081),d=o(48286),c=o(30543),m=o(18730),u=o(99906),g=o(94107),h=o(94828),p=o(63637),y=o(15641),b=o(68116),k=o(14207),C=o(30854),v=o(36211),w=o(89085),A=o(1123),f=o(86659),E=o(40653),$=o(80607),M=o(88317),B=o(6613),S=o(75163);(0,t.Ay)(r.A).withConfig({displayName:"PodcastDetailChannelBody"})`
  grid-column: 1/-1;
  margin-bottom: 1rem;

  ${(0,n.H4)(s.LO.md)} {
    grid-column: 3 / span 8;
  }
`,(0,t.Ay)("div").withConfig({displayName:"PodcastDetailContentHeader"})``,(0,t.Ay)("div").withConfig({displayName:"PodcastDetailBodyWrapperGrid"})`
  ${(0,w.VG)()}
  ${(0,A.aU)("padding")}
    padding-bottom: ${(0,n.Kq)(2)};
`,(0,t.Ay)("div").withConfig({displayName:"DekWrapper"})`
  ${(0,w.VG)()}
  ${(0,A.aU)("padding")}
  padding-top:${(0,n.Kq)(5)};

  > * {
    grid-column: 1 / -1;
    margin-top: ${(0,n.Kq)(2)};
    margin-bottom: ${(0,n.Kq)(2)};
  }

  a,
  a:not(.button):link {
    color: var(${S.pT.Color.TextLink});
  }

  a:not(.button):hover {
    color: var(${S.pT.Color.TextLink});
  }
`,(0,t.Ay)(d.A).withConfig({displayName:"DekClamp"})`
  ${({breakpoint:e})=>e&&t.AH`
      ${(0,n.H4)(s.LO[e])} {
        button {
          display: none;
        }
      }
      @media (min-width: ${s.LO.lg}) {
        grid-column: 3 / span 8;
      }
      text-align: center;
      ${(0,n.L7)(`${u.VS.md}px`)} {
        width: 100%;
      }
    `}
`,(0,t.Ay)("div").withConfig({displayName:"Dek"})``,(0,t.Ay)(c.A).withConfig({displayName:"PodcastDetailPageWrapper"})`
  ${({theme:e})=>t.AH`
      ${"inverted"===e&&t.AH`
        ${$.zY} {
          padding-top: ${(0,n.Kq)(1.5)};
        }
        ${M.s6} {
          display: none;
        }
      `}
    `}
  ${({theme:e})=>(0,i.j)(e||"main-background")}
  .ad__slot--hero .cns-ads-stage {
    ${({shouldHidePaddingBottom:e})=>!e&&"padding-bottom: 0;"}
  }
  ${l.vY} {
    &::before {
      display: block;
      ${({shouldHidePadding:e})=>!e&&`height: ${(0,n.Kq)(1,"px")};`}
      content: '';
    }
  }

  .ad-container.ad-container-reduced-margin {
    .ad--mid-content {
      @media (min-width: ${s.LO.md}) {
        margin-bottom: ${(0,n.Kq)(2)};
        padding: 0 0 0 0;
      }
    }
  }

  .ad-container {
    .ad--mid-content {
      @media (min-width: ${s.LO.md}) {
        margin-bottom: ${(0,n.Kq)(2)};
        padding: 0 0 0 0;
      }
    }
  }

  .ad-container.ad-container-reduced-margin {
    .ad--mid-content-with-padding {
      @media (min-width: ${s.LO.md}) {
        padding: 0 0 ${(0,n.Kq)(2)} 0;
      }
    }
  }

  .cns-ads-slot-type-footer {
    padding: 0;
  }
  ${({hasBackground:e,theme:a})=>e&&a&&(0,i.j)(a,"page-background")}
`,(0,t.Ay)("div").withConfig({displayName:"PodcastDetailPageRecircWrapper"})`
  --grid-margin: ${(0,n.Kq)(6)};
  padding-top: calc(1 * var(--grid-margin));
  padding-right: calc(1 * var(--grid-margin));
  padding-left: calc(1 * var(--grid-margin));

  ${C.np} {
    @media (max-width: calc(${s.LO.md} - 1px)) {
      display: grid;
    }

    a {
      max-width: ${(0,n.Kq)(25)};
      @media (max-width: calc(${s.LO.md} - 1px)) {
        grid-column: 3/5;
        max-width: ${(0,n.Kq)(22.5)};
      }
    }
  }

  ${b.tP} {
    align-self: baseline;
    max-width: 100%;
    @media (max-width: calc(${s.LO.md} - 1px)) {
      display: grid;
    }
  }

  ${k.fh} {
    @media (max-width: calc(${s.LO.md} - 1px)) {
      grid-column: 3/5;
      width: ${(0,n.Kq)(19.375)};
      height: ${(0,n.Kq)(19.375)};
    }
  }

  ${b.Tr} {
    padding: 0;
    @media (max-width: calc(${s.LO.md} - 1px)) {
      text-align: center;
    }

    ${B.zM} {
      color: var(${S.pT.Color.TextRubric});
      ${({theme:e})=>(0,n.Gg)(e,"typography.definitions.globalEditorial.context-primary")};
    }
  }
  ${b.oW} {
    @media (max-width: calc(${s.LO.md} - 1px)) {
      display: none;
    }
  }
  ${b.zP} {
    @media (max-width: calc(${s.LO.md} - 1px)) {
      margin-bottom: ${(0,n.Kq)(.5)};
      padding-top: ${(0,n.Kq)(2.5)};
      max-width: 100%;
    }
  }
`,(0,t.Ay)(h.A.PodcastRecirc).withConfig({displayName:"PodcastDetailPageRecircItem"})`
  ${b.hU} {
    &::after {
      border-bottom: 0;
    }
  }
  > ${E.E} {
    grid-column: 1 / -1;
    @media (min-width: ${s.LO.lg}) {
      grid-column: 3 / span 8;
    }
  }
`;const N=(0,t.Ay)(g.A).withConfig({displayName:"PodcastDetailPageSummaryRiver"})`
  .grid {
    row-gap: 0.25rem;
  }
  ${(0,n.H4)(s.LO.lg)} {
    .grid {
      row-gap: 0.75rem;
    }
    ${y.yj}:first-child ${p.Ik}::before {
      grid-column: 1/-5;
    }
    && ${p.Ik} {
      .grid-layout__content {
        grid-column: 1/-4;
      }
    }
    ${p.Ik} {
      grid-template-columns: repeat(12, 1fr);

      .summary-item--layout-placement-side-by-side-desktop-only {
        grid-template-columns: repeat(9, 1fr);

        .summary-item__content {
          grid-column: 4/-1;
        }

        .summary-item__asset-container {
          grid-column: 1/-7;
          align-self: baseline;
        }
      }
    }
    ${b.hU} {
      ${v.Y} {
        ${({theme:e})=>(0,n.Gg)(e,"typography.definitions.discovery.hed-core-primary")};
      }
    }
    ${y.UI} {
      ${(0,A.aU)("padding")};
      margin-bottom: 0;
      padding: ${(0,n.Kq)(8)} ${(0,n.Kq)(6)}
        ${(0,n.Kq)(8)} ${(0,n.Kq)(6)};
    }
  }
`;(0,t.Ay)(f.A.NoMargins).withConfig({displayName:"PodcastDetailPageGrid"})`
  > ${E.E} {
    grid-column: 1 / -1;
    @media (min-width: ${s.LO.lg}) {
      grid-column: 3 / span 8;
    }
    @media (max-width: ${s.LO.lg}) {
      margin-top: ${(0,n.Kq)(4)};
    }
  }
`,(0,t.Ay)(m.v).withConfig({displayName:"PodcastRecircContextualHeader"}).attrs(e=>({as:"div",typeIdentity:"typography.definitions.globalEditorial.context-primary",...e}))`
  padding-bottom: ${(0,n.Kq)(2.5)};
  text-align: center;
  @media (min-width: ${s.LO.md}) {
    display: none;
  }
`}}]);
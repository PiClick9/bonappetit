"use strict";(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[7353],{21686(i,t,o){o.d(t,{$V:()=>q,Ho:()=>T,Iw:()=>E,Iy:()=>A,M1:()=>u,R5:()=>_,Tq:()=>O,W5:()=>C,Xg:()=>B,Xo:()=>W,Ye:()=>R,aj:()=>G,c3:()=>P,cb:()=>N,lN:()=>M,lU:()=>Y,lV:()=>y,sn:()=>I,tR:()=>H,tb:()=>X,tc:()=>f,uU:()=>K,uu:()=>w,yE:()=>k});var e=o(96540),a=o(20312),n=o.n(a),r=o(5556),d=o.n(r),l=o(38267),s=o(18608),p=o(26865),g=o(96472),m=o(73730),c=o(72081),h=o(50531);const f=(0,l.Ay)(s.vm).withConfig({displayName:"OpenAIModalHed"})`
  display: contents;
  ${(0,p.Gg)("typography.definitions.globalEditorial.context-primary")};
  ${({theme:i})=>(0,p._o)(i,"color","colors.interactive.base.black")};
`,y=l.Ay.span.withConfig({displayName:"OpenAIModalHedSpanTag"})`
  display: block;
  margin-top: ${(0,p.Kq)(2)};
  margin-bottom: ${(0,p.Kq)(2)};
  ${(0,p.Gg)("typography.definitions.consumptionEditorial.subhed-aux-secondary")};
  ${({theme:i})=>(0,p._o)(i,"color","colors.consumption.body.standard.body")};
`,b=l.Ay.p.withConfig({displayName:"OpenAIModalDek"})`
  margin-top: 0;
  ${(0,p.Gg)("typography.definitions.consumptionEditorial.body-core")}
  text-align: center;
  color: ${(0,p.HK)("colors.discover.body.white.description")};
`,u=(0,l.Ay)(m.A.Utility).withConfig({displayName:"OpenAIModalCloseButton"})`
  position: absolute;
  right: 0;
  padding: 0;
  fill: ${(0,p.HK)("colors.interactive.base.black")};
  padding-right: ${(0,p.Kq)(8)};

  @media (max-width: ${g.LO.md}) {
    padding-right: ${(0,p.Kq)(6)};
  }

  .icon-close {
    padding: ${(0,p.Kq)(1)};

    path {
      ${({theme:i})=>(0,p._o)(i,"stroke","colors.interactive.base.black")};
      stroke-width: 2px;
    }
  }

  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
  }
`;function $({className:i,...t}){const o=`${i}__content`,a=`${i}__overlay`;return e.createElement(n(),{portalClassName:i,className:o,overlayClassName:a,...t,ref:t.configuredComponentRef})}$.propTypes={className:d().string,configuredComponentRef:d().func};const w=l.Ay.div.withConfig({displayName:"OpenAIModalHedWrapper"})`
  display: flex;
  position: relative;
  margin-right: -64px;
  margin-left: -64px;
  box-shadow: 0 4px 6px rgba(45, 45, 45, 0.05);
  padding-bottom: ${(0,p.Kq)(2)};
  padding-left: ${(0,p.Kq)(8)};

  @media (max-width: ${g.LO.md}) {
    margin-right: -40px;
    margin-left: -40px;
    padding-bottom: ${(0,p.Kq)(1.5)};
    padding-left: ${(0,p.Kq)(2)};
  }

  @media (min-width: ${g.LO.sm}) and (max-width: ${g.LO.md}) {
    margin-right: -${(0,p.Kq)(6)};
    margin-left: -${(0,p.Kq)(6)};
    padding-bottom: ${(0,p.Kq)(1.5)};
    padding-left: ${(0,p.Kq)(6)};
  }
`,x=l.i7`
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0%);
    opacity: 1;
  }
`,v=l.i7`
  from {
    transform: translateY(0%);
    opacity: 1;
  }

  to {
    transform: translateY(100%);
    opacity: 1;
  }
`,K=(0,l.Ay)($).withConfig({displayName:"OpenAIModalBaseWrapper"})`
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2147483645;

    background-color: rgba(
      ${(0,p.HK)("colors.background.black",{rgbOnly:!0})},
      0
    );

    &.ReactModal__Overlay--after-open {
      transition: background-color 750ms;
      animation: ${x} 350ms ease-in forwards;
      opacity: 1;
      background-color: rgba(
        ${(0,p.HK)("colors.background.black",{rgbOnly:!0})},
        0.4
      );
    }

    &.ReactModal__Overlay--before-close {
      transition: background-color 750ms;
      animation: ${v} 350ms ease-out forwards;
      opacity: 1;
      background-color: rgba(
        ${(0,p.HK)("colors.background.black",{rgbOnly:!0})},
        0
      );
    }
  }

  &__content {
    display: flex;
    position: relative;
    top: 50%;
    left: 50%;
    flex-direction: column;
    transform: translateY(-50%) translateX(-50%);
    outline: none;
    background-color: ${(0,p.HK)("colors.background.white")};
    padding: ${(0,p.Kq)(1.5)} ${(0,p.Kq)(2)};
    width: 100%;
    height: 100%;

    @media (min-width: ${g.LO.md}) {
      transform: translateY(-50%)
        translateX(calc(-50% - ${(0,p.Kq)(2,"px")}));

      margin: 0 ${(0,p.Kq)(2,"px")};
      padding: ${(0,p.Kq)(2)} ${(0,p.Kq)(6)};
      width: 100%;
    }

    @media (min-width: ${g.LO.lg}) {
      padding: ${(0,p.Kq)(2)} ${(0,p.Kq)(8)};
    }

    && {
      ${w} {
        padding: none;
      }
    }
  }
`,k=(0,l.Ay)(s.vm).withConfig({displayName:"OpenAIModalDisclaimerText"})`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  width: 100%;

  ${(0,p.Gg)("typography.definitions.foundation.meta-secondary")};
  ${({theme:i})=>(0,p._o)(i,"color","colors.consumption.body.standard.body-deemphasized")};
`,q=l.Ay.section.withConfig({displayName:"OpenAIModalFormWrapper"})`
  margin-top: ${(0,p.Kq)(1)};
  border: none;
  padding-top: ${(0,p.Kq)(1)};
  padding-bottom: ${(0,p.Kq)(1)};

  @media (max-width: ${g.LO.md}) {
    margin-right: -40px;
    margin-left: -40px;
    padding-top: ${(0,p.Kq)(2)};
    padding-right: ${(0,p.Kq)(2)};
    padding-left: ${(0,p.Kq)(2)};
  }

  @media (min-width: ${g.LO.sm}) and (max-width: ${g.LO.md}) {
    margin-right: -${(0,p.Kq)(6)};
    margin-left: -${(0,p.Kq)(6)};
    padding-right: ${(0,p.Kq)(2)};
    padding-left: ${(0,p.Kq)(2)};
  }
`,A=l.Ay.div.withConfig({displayName:"OpenAIModalFormTextInputWrapper"})`
  position: relative;
  align-self: center;
  justify-content: center;
  z-index: 0;
  border-radius: 30px;
  background: linear-gradient(45deg, #0498f9, #ffa67a);
  padding: 2px;
  width: 100%;
  overflow: hidden;

  &::after {
    --gradientHeight: 10000px;
    --gradientWidth: 10000px;
    position: absolute;
    top: calc((100% - var(--gradientHeight)) / 2);
    left: calc((100% - var(--gradientWidth)) / 2);
    animation: ${({submitted:i})=>i?"animateBorder 3s infinite linear":"none"};
    z-index: 0;
    background: ${({submitted:i})=>i?"conic-gradient(from 0deg, #ffa67a, #0498f9, #ffa67a)":"unset"};
    background-clip: border-box;
    background-position: center center;
    background-size: cover;
    width: var(--gradientWidth);
    height: var(--gradientHeight);

    content: '';
  }

  @keyframes animateBorder {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`,O=(0,l.Ay)(c.A.SingleLine).withConfig({displayName:"OpenAIModalFormTextInput"})`
  margin: 0;
  border-radius: 30px;
  width: 100%;

  && {
    input {
      position: relative;
      z-index: 2;
      border: none;
      border-radius: 30px;
      background: white;
      padding-right: ${(0,p.Kq)(4.5)};
      padding-left: ${(0,p.Kq)(2.5)};
      height: 2.5rem;
      box-sizing: border-box;

      ${(0,p.Gg)("typography.definitions.utility.input-core")};

      &:active {
        ${({theme:i})=>(0,p._o)(i,"color","colors.background.black")};
      }

      &::placeholder {
        ${({theme:i})=>(0,p._o)(i,"color","colors.interactive.base.deemphasized")};
      }
    }
  }
`,C=l.Ay.form.withConfig({displayName:"OpenAIModalForm"})`
  margin: 0 auto;
  width: 85%;

  @media (min-width: ${g.LO.md}) and (max-width: ${g.LO.lg}) {
    width: 60%;
  }

  @media (min-width: ${g.LO.lg}) {
    width: 45%;
  }
`,N=l.Ay.label.withConfig({displayName:"OpenAIModalFormLabel"})`
  display: flex;
  position: relative;

  .icon-arrow {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%) rotate(-90deg) scale(1.2);
    border-radius: ${(0,p.Kq)(1.5)};
    ${({theme:i})=>(0,p._o)(i,"background","colors.interactive.base.black")};
    ${({theme:i})=>(0,p._o)(i,"fill","colors.interactive.base.white")};
    ${({theme:i})=>(0,p._o)(i,"stroke","colors.interactive.base.white")};
    stroke-width: 1px;
    cursor: pointer;
    padding: ${(0,p.Kq)(.5)};
  }
`,_=l.Ay.div.withConfig({displayName:"OpenAIModalBodyWrapper"})`
  margin: 0 auto;
  width: 100%;

  @media (min-width: ${g.LO.md}) and (max-width: ${g.LO.lg}) {
    width: 60%;
  }

  @media (min-width: ${g.LO.lg}) {
    width: 45%;
  }
`,L=(0,l.Ay)(m.A).withConfig({displayName:"OpenAIEntryPointButton"})`
  margin-left: -24px;
  border: none;
  border-radius: 25px;
  background: linear-gradient(230deg, #ffa67a, #0498f9);
  padding: 0;
  width: 92px;
  min-width: fit-content;
  height: 40px;
  white-space: nowrap;

  @media (min-width: ${g.LO.md}) and (max-width: ${g.LO.lg}) {
    margin-right: ${(0,p.Kq)(2)};
  }

  @media (min-width: ${g.LO.lg}) {
    margin-right: ${(0,p.Kq)(2)};
    margin-left: -10px;
  }

  ${h.Lj} {
    padding: ${(0,p.Kq)(1.5)} ${(0,p.Kq)(3)};
  }

  ${({theme:i})=>(0,p.Gg)(i,"typography.definitions.globalEditorial.context-primary")};

  ${({theme:i})=>`${(0,p._o)(i,"color","colors.consumption.lead.inverted.accent")};`}

  &:focus,
  &:active,
  &:hover {
    border: none;
    background: linear-gradient(230deg, #ffa67a, #0498f9);
    ${({theme:i})=>`${(0,p._o)(i,"color","colors.consumption.lead.inverted.accent")};`}
  }
`,I=(l.Ay.div.withConfig({displayName:"AIChatBotTickerWrapper"})`
  margin-bottom: ${(0,p.Kq)(4)};
  border-radius: 25px;
  padding: ${(0,p.Kq)(4)} ${(0,p.Kq)(3)};

  ${({theme:i})=>(0,p._o)(i,"background-color","colors.background.light")};
`,l.Ay.p.withConfig({displayName:"AIChatBotTickerHed"})`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding-top: ${(0,p.Kq)(1)};
  padding-bottom: ${(0,p.Kq)(2)};
  height: 3.5rem;
  overflow: hidden;
  text-align: center;

  ${(0,p.Gg)("typography.definitions.discovery.description-feature")};
  ${({theme:i})=>(0,p._o)(i,"color","colors.consumption.body.standard.body")};

  span {
    display: block;
    position: absolute;
    width: 100%;
    will-change: transform, opacity;
  }

  span.visible {
    transform: translateX(0);
    opacity: 1;
    z-index: 1;
  }

  span.exit {
    animation: shiftOutLeft 150ms ease-out forwards;
    z-index: 1;
  }

  span.enter {
    animation: enterFromRight 150ms ease-out forwards;
    z-index: 2;
  }

  @keyframes enterFromRight {
    0% {
      transform: translateX(30%);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes shiftOutLeft {
    0% {
      transform: translateX(0);
      opacity: 1;
    }

    100% {
      transform: translateX(-30%);
      opacity: 0;
    }
  }
`,(0,l.Ay)(L).withConfig({displayName:"OpenAIRecipeEntryPointButton"})`
  margin: auto;
`,l.Ay.div.withConfig({displayName:"OpenAIChatContainer"})`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: ${(0,p.Kq)(3)};
  padding-bottom: ${({reducedPadding:i})=>i?(0,p.Kq)(2):"30vh"};
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 125px); /* stylelint-disable-line */
  max-height: calc(100dvh - 125px); /* stylelint-disable-line */
  overflow-y: auto;
  scrollbar-width: none;

  @supports (height: 100dvh) {
    max-height: calc(100dvh - 125px);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`),M=(0,l.Ay)(b).withConfig({displayName:"OpenAIUserMessage"})`
  margin-right: 0;
  margin-bottom: ${(0,p.Kq)(2)};
  margin-left: auto;
  border: 1px solid;
  border-radius: 40px;
  background-color: ${(0,p.HK)("colors.background.white")};
  padding: ${(0,p.Kq)(1.5)} ${(0,p.Kq)(2)};
  width: fit-content;
  max-width: 80%;
  text-align: left;
  ${({theme:i})=>(0,p._o)(i,"border-color","colors.background.black")};
  ${(0,p.Gg)("typography.definitions.utility.input-core")};
  ${({theme:i})=>(0,p._o)(i,"color","colors.consumption.body.standard.display-texture")};
`,H=(0,l.Ay)(b).withConfig({displayName:"OpenAIBotMessage"})`
  margin-right: auto;
  margin-bottom: ${(0,p.Kq)(2)};
  margin-left: 0;
  max-width: 80%;
  text-align: left;
  ${(0,p.Gg)("typography.definitions.utility.input-core")};
  ${({theme:i})=>(0,p._o)(i,"color","colors.consumption.body.standard.body")};
  line-height: ${(0,p.Kq)(3)};

  a {
    ${(0,p.Gg)("typography.definitions.utility.input-core")};
    ${({theme:i})=>(0,p._o)(i,"color","colors.consumption.body.standard.body")};
    font-weight: 500;
  }
`,z=l.i7`
  0%, 100% { transform: translateY(0); }

  25% { transform: translateY(-1px); }

  50% { transform: translateY(0); }

  75% { transform: translateY(1px); }
`,B=l.Ay.div.withConfig({displayName:"OpenAILoaderContainer"})`
  display: flex;
  align-items: baseline;
  margin-right: auto;
  margin-bottom: ${(0,p.Kq)(2)};
  margin-left: 0;
  max-width: 80%;
  text-align: left;

  ${(0,p.Gg)("typography.definitions.utility.body")};

  ${({theme:i})=>(0,p._o)(i,"color","colors.discovery.body.dark.description")};
`,G=l.Ay.span.withConfig({displayName:"LoadingDot"})`
  display: inline-block;
  margin-left: 2px;
  border-radius: 50%;
  background-color: ${(0,p.HK)("colors.discovery.body.dark.description")};
  width: 2px;
  height: 2px;

  &:nth-child(1) {
    animation: ${z} 1.2s ease-in-out infinite;
    padding-left: 2px;
  }

  &:nth-child(2) {
    animation: ${z} 1.2s ease-in-out 0.4s infinite;
  }

  &:nth-child(3) {
    animation: ${z} 1.2s ease-in-out 0.8s infinite;
  }
`,T=l.Ay.div.withConfig({displayName:"PromptSuggestionsContainer"})`
  margin: 0 auto;
  margin-top: auto;
  width: 100%;

  @media (min-width: ${g.LO.md}) and (max-width: ${g.LO.lg}) {
    width: 60%;
  }

  @media (min-width: ${g.LO.lg}) {
    width: 45%;
  }
`,Y=(0,l.Ay)(s.vm).withConfig({displayName:"PromptSuggestionsHeader"})`
  margin-bottom: ${(0,p.Kq)(1)};
  text-align: right;
  ${(0,p.Gg)("typography.definitions.utility.body")};
  ${({theme:i})=>(0,p._o)(i,"color","colors.discovery.body.dark.description")};
`,W=l.Ay.div.withConfig({displayName:"PromptButtonsContainer"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: end;
`,X=l.Ay.button.withConfig({displayName:"PromptButton"})`
  transition: background-color 0.2s, border-color 0.2s;
  border: 1px solid #ffa67a;
  border-radius: 40px;
  cursor: pointer;
  ${({theme:i})=>(0,p._o)(i,"background-color","colors.consumption.lead.standard.background")};
  padding: 0 15px;
  width: min-content;
  height: 53px;
  text-align: left;
  font-size: 14px;

  &:hover {
    border: 3px solid #ffa67a;
    text-decoration: none;
  }
`,P=(0,l.Ay)(s.vm).withConfig({displayName:"PromptButtonText"})`
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${(0,p.Gg)("typography.definitions.utility.input-core")};
  ${({theme:i})=>(0,p._o)(i,"color","colors.consumption.interactive.base.deemphasized")};
`,R=l.Ay.div.withConfig({displayName:"PromptSuggestionsContainerWrapper"})`
  position: fixed;
  bottom: 0;
  left: 0;
  align-self: center;
  padding-right: inherit;
  padding-left: inherit;
  width: fill-available;
`,E=l.Ay.button.withConfig({displayName:"ScrollToBottomButton"})`
  display: flex;
  position: fixed;
  bottom: ${(0,p.Kq)(12)};
  left: 50%;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  z-index: ${g.KV.tooltip+10};
  border: 1px solid;
  border-radius: 50%;
  cursor: pointer;
  width: ${(0,p.Kq)(4)};
  height: ${(0,p.Kq)(4)};

  ${({theme:i})=>(0,p._o)(i,"background-color","colors.background.white")};

  ${({theme:i})=>(0,p._o)(i,"border-color","colors.consumption.body.standard.body-deemphasized")};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 0.8;
    }
  }

  &:hover {
    opacity: 1;
  }

  svg {
    transform: rotate(90deg);
    width: ${(0,p.Kq)(2)};
    height: ${(0,p.Kq)(2)};
  }
`},85480(){},70251(i,t,o){o.d(t,{w:()=>r});var e=o(38221),a=o.n(e),n=o(84279);const r=(i,t=300)=>(0,n.G)("resize",i,a(),t)}}]);
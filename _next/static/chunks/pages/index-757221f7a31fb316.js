(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7821)}])},7319:function(e,r,t){"use strict";t.d(r,{Z:function(){return v}});var a=t(5893),n=t(7294),i=t(9140),s=t.n(i),o=t(5675),l=t.n(o),c=t(1664),d=t.n(c);function p(e){let{current:r}=e,[t,i]=(0,n.useState)(!1),[o,c]=(0,n.useState)(!0),[p,h]=(0,n.useState)(0);(0,n.useEffect)(()=>{let e=()=>{let e=window.pageYOffset;h(e),c(p>e)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[p]);let _=()=>{i(!t)};return(0,a.jsx)("div",{id:"homeId",children:(0,a.jsx)("nav",{className:s().navBarWrapper,style:{top:o?0:"-6rem"},children:(0,a.jsxs)("div",{className:s().navBarMain,children:[(0,a.jsx)("div",{className:s().logoWrapper,children:(0,a.jsx)(l(),{src:"".concat("/soi/SOI-logo.png"),width:70,height:50,alt:"Picture of the author",priority:!0})}),(0,a.jsxs)("div",{className:s().optionsWrapper,children:[(0,a.jsxs)("div",{className:"".concat(s().optionsMenu," ").concat(t&&s().activeSidebar),children:[(0,a.jsx)("div",{className:s().option,children:(0,a.jsx)(d(),{href:"/#hero",scroll:!1,children:(0,a.jsx)("div",{children:"Home"})})}),(0,a.jsx)("div",{className:s().option,children:(0,a.jsx)(d(),{href:"/#eventsId",scroll:!1,children:(0,a.jsx)("div",{children:"Events"})})}),(0,a.jsx)("div",{className:s().option,children:(0,a.jsx)(d(),{href:"/#timeline",scroll:!1,children:(0,a.jsx)("div",{children:"Timeline"})})}),(0,a.jsx)("div",{className:s().option,style:{pointerEvents:"none"},children:(0,a.jsx)(d(),{href:"/team",style:{pointerEvents:"none"},children:(0,a.jsx)("div",{children:"Team"})})}),(0,a.jsx)("div",{className:s().option,children:(0,a.jsx)(d(),{href:"/#footer",scroll:!1,children:(0,a.jsx)("div",{children:"Contact"})})})]}),(0,a.jsx)("div",{className:s().hamBurgerWrapper,children:(0,a.jsxs)("div",{className:"".concat(s().hamburger," ").concat(t?s().active:s()["not-active"]),onClick:_,children:[(0,a.jsx)("span",{className:s().spans}),(0,a.jsx)("span",{className:s().spans}),(0,a.jsx)("span",{className:s().spans})]})})]})]})})})}var h=t(7889),_=t.n(h);let m=()=>{let e=e=>{let r=document.getElementById(e);r&&r.scrollIntoView({behavior:"smooth"})},r=new Date,t=r.getFullYear();return(0,a.jsx)("div",{id:"footer",children:(0,a.jsx)("div",{className:_().footer,children:(0,a.jsxs)("div",{className:_().footerDiv,children:[(0,a.jsx)("div",{className:_().footerImageWrapper,children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)(l(),{src:"".concat("/soi/Footer/oss_logo.png"),fill:!0,priority:!0,alt:"oss_logo"})})}),(0,a.jsxs)("div",{className:_().footerLinksWrapper,children:[(0,a.jsx)("div",{onClick:()=>e("hero"),"aria-current":"page",className:"".concat(_().footerlink," ").concat(_().navLink),children:"Home"}),(0,a.jsx)("div",{onClick:()=>e("eventsId"),className:"".concat(_().footerlink," ").concat(_().navLink),children:"Events"})]}),(0,a.jsxs)("div",{className:_().footerContactWrapper,children:[(0,a.jsx)("div",{children:(0,a.jsx)("a",{href:"mailto:gstech@iitdh.ac.in@",className:_().footerlink,children:"gstech@iitdh.ac.in"})}),(0,a.jsx)("div",{children:(0,a.jsx)("a",{href:"mailto:oss@iitdh.ac.in@",className:_().footerlink,children:"oss@iitdh.ac.in"})})]}),(0,a.jsxs)("div",{className:_().rightFooterWrapper,children:[(0,a.jsx)("div",{className:_().footerIconsWrapper,children:(0,a.jsx)("a",{href:"https://www.instagram.com/technical.council_iitdh/",target:"_blank",className:_().footerlink,children:(0,a.jsx)("img",{src:"https://uploads-ssl.webflow.com/60da2de038a15fdb730c5608/62f6a8eaaf7b5b57d23c61a3_Instagram%20White.svg",loading:"lazy",alt:"White Instagram Icon",className:"socialmediaicon"})})}),(0,a.jsxs)("div",{children:["\xa9 Copyright - ",t," SOI all right reserved"]})]})]})})})};function v(e){let{children:r}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p,{}),r,(0,a.jsx)(m,{})]})}},7821:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return E}});var a=t(5893),n=t(9008),i=t.n(n),s=t(7319),o=t(2111),l=t.n(o),c=t(5675),d=t.n(c),p=t(7294),h=t(9382),_=t(6546);let m="/soi";function v(){let e=(0,p.useRef)();return h.ZP.registerPlugin(_.ScrollTrigger),(0,p.useEffect)(()=>{let r=e.current,t=h.ZP.timeline({scrollTrigger:{trigger:r,start:"top bottom",end:"bottom top",scrub:1}});t.to(r,{rotation:-30})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"".concat(l().heroWrapper),id:"hero",children:[(0,a.jsx)("div",{className:l().heroBgContainer,children:(0,a.jsx)(d(),{src:"".concat(m+"/Hero/hero-bg.svg"),priority:!0,fill:!0,style:{objectFit:"cover"}})}),(0,a.jsx)("div",{className:"".concat(l().hero),children:(0,a.jsxs)("div",{className:l().heroContentWrapper,children:[(0,a.jsxs)("div",{className:l().heroMain,children:[(0,a.jsx)("h1",{children:"Summer of Innovation 2023"}),(0,a.jsxs)("div",{className:l().heroQuoteWrapper,children:[(0,a.jsx)("div",{className:l().styleBar}),(0,a.jsx)("div",{className:l().Quote,children:"This Summer Conquer your fallacies and carve your finesse."})]})]}),(0,a.jsx)("div",{className:l().heroArtWrapper,children:(0,a.jsx)(d(),{src:"".concat(m+"/Hero/hero-art.svg"),fill:!0,priority:!0})})]})})]}),(0,a.jsxs)("div",{className:l().aboutWrapper,children:[(0,a.jsx)("div",{className:l().aboutWheelWrapper,ref:e,children:(0,a.jsx)(d(),{src:"".concat(m+"/Events/Blue_Wheel_Spcok.svg"),fill:!0,priority:!0})}),(0,a.jsx)("div",{className:"page-wrapper",children:(0,a.jsxs)("div",{className:l().aboutMain,children:[(0,a.jsx)("div",{className:l().aboutStyleStar,children:(0,a.jsx)(d(),{src:"".concat(m+"/Hero/style-star.svg"),fill:!0,priority:!0})}),(0,a.jsx)("div",{className:l().aboutTitle,children:(0,a.jsx)("h1",{children:"Overview"})}),(0,a.jsx)("div",{className:l().aboutContent,children:"The third edition of Summer of Innovation is a platform for honing one’s technical skills and promoting tech culture in our institute. Lasting 3 months, the event comprises of problem statements from multiple domains and the participants are allowed to take part in any number of them. The event is a result of the contribution of about every technical organization involved with tech in our institute. This year, the event shall last from 23th of May to 11th of August, for a period of 3 months allowing the participants to learn the required technical skills from scratch and then implementing them in this period."})]})}),(0,a.jsx)("div",{className:l().aboutBgWrapper,children:(0,a.jsx)(d(),{src:"".concat(m+"/Hero/hero-bg-2.svg"),fill:!0,style:{objectFit:"cover"},priority:!0})})]})]})}var u=t(5802),x=t.n(u),g=t(4991),f=t.n(g);let j="/soi";function b(e){let{leftSideImage:r,data:t,number:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:f().eventCardWrapper,children:(0,a.jsxs)("div",{className:f().eventCardMain,children:[(0,a.jsxs)("div",{className:"".concat(f().eventInfo," ").concat(r&&f().eventInfoLeft),children:[(0,a.jsxs)("div",{className:f().eventNumber,children:[(0,a.jsx)("h1",{children:n<10?"0".concat(n):n}),(0,a.jsx)("div",{className:f().styleDiv})]}),(0,a.jsx)("div",{className:f().eventName,children:(0,a.jsx)("h1",{children:t.heading})}),(0,a.jsx)("div",{className:f().eventInfo,children:t.content}),(0,a.jsx)("div",{className:f().knowMore,children:(0,a.jsxs)("a",{href:t.knowMoreLink,target:"_blank",children:[(0,a.jsx)("div",{children:"Know More"}),(0,a.jsx)("div",{className:f().buttonImage,children:(0,a.jsx)(d(),{src:"".concat(j+"/Events/event-button.svg"),fill:!0,priority:!0,alt:"button"})})]})})]}),(0,a.jsx)("div",{className:"".concat(f().eventImageWrapper," ").concat(r&&f().eventImageWrapperLeft),children:(0,a.jsx)("div",{className:f().eventImageCard,children:(0,a.jsx)(d(),{src:j+t.image,fill:!0})})})]})})})}var N=[{heading:"Toolset Unbounded",content:"The problem Statement involves developing a GUI frontend with a user-friendly UI/UX. It includes a secure signup/login page with password/OTP protection. Implement a lossless image and text compression/decompression algorithms. Compressed images are stored in a secure database, and a file management system allows users to add/delete their images. You are free to choose various components, and exploration is encouraged.",image:"/Events/IMAGE_CODING_CLUB_01.jpg",knowMoreLink:"https://drive.google.com/file/d/1HV3reLcxYTSBijPtsfizEHURbx_C__c_/view?usp=sharing"}];function W(){let e=(0,p.useRef)();return h.ZP.registerPlugin(_.ScrollTrigger),(0,p.useEffect)(()=>{let r=e.current,t=h.ZP.timeline({scrollTrigger:{trigger:r,start:"top bottom",end:"bottom top",scrub:1}});t.to(r,{rotation:30})},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{id:"eventsId",className:x().eventsWrapper,children:[(0,a.jsx)("div",{className:x().eventSunWrapper,ref:e,children:(0,a.jsx)(d(),{src:"/soi/Events/events-sun-1.svg",fill:!0,priority:!0})}),(0,a.jsxs)("div",{className:"".concat(x().eventsMain," page-wrapper"),children:[(0,a.jsx)("div",{className:x().eventsHeading,children:(0,a.jsx)("div",{className:x().text_block,children:(0,a.jsx)("h2",{children:"Events"})})}),(0,a.jsx)("div",{className:x().eventsCardWrapper,children:N.map((e,r)=>(0,a.jsx)(b,{data:e,number:r+1,leftSideImage:!(r%2)},r))})]})]})})}var I=t(4167),C=t.n(I),B=t(4313),w=[{id:1,title:"Toolset Unbounded",location:"Coding Club, IIT Dharwad",description:"Registrations Started.",date:"27th May - 29th May"},{id:2,title:"Toolset Unbounded",location:"Coding Club, IIT Dharwad",description:"First Report Submission",date:"5th June EOD"},{id:3,title:"Toolset Unbounded",location:"Coding Club, IIT Dharwad",description:"Second Report Submission",date:"12th June EOD"},{id:4,title:"Toolset Unbounded",location:"Coding Club, IIT Dharwad",description:"Third Report Submission",date:"24th June EOD"},{id:5,title:"Toolset Unbounded",location:"Coding Club, IIT Dharwad",description:"Final Report Submission",date:"7th July EOD"},{id:6,title:"Toolset Unbounded",location:"Coding Club, IIT Dharwad",description:"Project Submission, everything that you have worked past 6 weeks on.",date:"9th July EOD"}];function y(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:C().timelineWrapper,id:"timeline",style:{backgroundImage:"url(".concat("/soi","/Timeline/inspiration-geometry.png)")},children:(0,a.jsxs)("div",{className:"".concat(C().timelineMain," page-wrapper"),children:[(0,a.jsx)("div",{className:C().timelineHeading,children:(0,a.jsx)("div",{className:C().text_block,children:(0,a.jsx)("h2",{children:"Timeline"})})}),(0,a.jsx)("div",{className:C().verticalTimelineMain,children:(0,a.jsx)(B.VerticalTimeline,{children:w.map(e=>(0,a.jsxs)(B.VerticalTimelineElement,{date:e.date,dateClassName:"date",className:"".concat(e.key/2?"timeline-right":"timeline-left"),children:[(0,a.jsx)("h2",{className:"vertical-timeline-element-title",children:e.title}),(0,a.jsx)("h5",{className:"vertical-timeline-element-subtitle",children:e.location}),(0,a.jsx)("p",{id:"description",children:e.description})]},e.id))})})]})})})}function E(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:"SOI 2023"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/soi/SOI_Favicon.png"})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(v,{}),(0,a.jsx)(W,{}),(0,a.jsx)(y,{})]})]})}t(6477)},9140:function(e){e.exports={navBarWrapper:"AppBar_navBarWrapper__r_j1W",navBarMain:"AppBar_navBarMain__EgszK",optionsWrapper:"AppBar_optionsWrapper__TYXCV",optionsMenu:"AppBar_optionsMenu__w7b_F",option:"AppBar_option__5X3Ov",logoImg:"AppBar_logoImg__h_O5y",activeOption:"AppBar_activeOption__n3J6J",hamBurgerWrapper:"AppBar_hamBurgerWrapper__quZLj",hamburger:"AppBar_hamburger__FZkR8",spans:"AppBar_spans__zvJ3j",active:"AppBar_active__m3gcs",topBar:"AppBar_topBar__UVB85","not-active":"AppBar_not-active__T_1aH",topBarRotate:"AppBar_topBarRotate__V__u_",middleBar:"AppBar_middleBar__nfZSV",middleBarScale:"AppBar_middleBarScale__rkVCo",bottomBar:"AppBar_bottomBar__lX5pK",bottomBarRotate:"AppBar_bottomBarRotate__yRkUW",activeSidebar:"AppBar_activeSidebar__UL9mV"}},4991:function(e){e.exports={eventCardWrapper:"EventCard_eventCardWrapper__QYP5E",eventCardMain:"EventCard_eventCardMain__q_HfA",eventInfo:"EventCard_eventInfo__y0gkm",eventInfoLeft:"EventCard_eventInfoLeft__ttVJS",eventImageWrapper:"EventCard_eventImageWrapper__RVtgP",eventImageWrapperLeft:"EventCard_eventImageWrapperLeft__726Q4",eventNumber:"EventCard_eventNumber__hhlff",eventName:"EventCard_eventName__Qwj8B",knowMore:"EventCard_knowMore__Tcb1s",styleDiv:"EventCard_styleDiv__qySFb",buttonImage:"EventCard_buttonImage__oe9bf",eventImageCard:"EventCard_eventImageCard__K62A0"}},5802:function(e){e.exports={eventsWrapper:"Events_eventsWrapper__fwPcA",eventsMain:"Events_eventsMain__kuire",eventsHeading:"Events_eventsHeading__DEprd",eventSunWrapper:"Events_eventSunWrapper__1SlUh",text_block:"Events_text_block__gMD8H"}},7889:function(e){e.exports={footer:"Footer_footer__nKPS_",footerDiv:"Footer_footerDiv__5QGhb",footerImageWrapper:"Footer_footerImageWrapper__MxzuF",footerLinksWrapper:"Footer_footerLinksWrapper__l3tQi",footerContactWrapper:"Footer_footerContactWrapper___l3Ki",footerIconsWrapper:"Footer_footerIconsWrapper__yDxbs",rightFooterWrapper:"Footer_rightFooterWrapper__7xgfC",navLink:"Footer_navLink__pyW7e"}},2111:function(e){e.exports={heroWrapper:"Hero_heroWrapper__cJ2Ja",hero:"Hero_hero__vHbB0",heroContentWrapper:"Hero_heroContentWrapper__95ink",heroMain:"Hero_heroMain__10g0f",heroQuoteWrapper:"Hero_heroQuoteWrapper__6Kb9g",Quote:"Hero_Quote__nUQfp",styleBar:"Hero_styleBar__s6HAJ",heroArtWrapper:"Hero_heroArtWrapper__hY1A9",aboutWrapper:"Hero_aboutWrapper__HEAE0",aboutWheelWrapper:"Hero_aboutWheelWrapper__XoqD1",aboutMain:"Hero_aboutMain__798rC",aboutStyleStar:"Hero_aboutStyleStar__6YZQE",aboutTitle:"Hero_aboutTitle__0lM6o",aboutContent:"Hero_aboutContent__04xjV",aboutBgWrapper:"Hero_aboutBgWrapper__p2GpK"}},4167:function(e){e.exports={timelineWrapper:"Timeline_timelineWrapper__31Fs7",timelineHeading:"Timeline_timelineHeading__aL1Wh",text_block:"Timeline_text_block__MceJ5",verticalTimelineMain:"Timeline_verticalTimelineMain__MpsMu"}}},function(e){e.O(0,[802,61,680,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);
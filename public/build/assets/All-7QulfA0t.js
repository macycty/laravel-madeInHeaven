import{r as l,j as e,a as Be,y as $e}from"./app-83RbplMi.js";import{C as Ae}from"./Container-8AG7Bisa.js";import{R as Z,C as I}from"./Col-6oDDArRt.js";import{A as Oe,e as Ee,M as Ie,B as Fe,F as ae,g as Le,i as k}from"./Button-7dwjqG8O.js";import{u as w,c as f,a as qe}from"./ThemeProvider-oCw0wal3.js";import{k as ne,e as He,c as P,a as Ue,r as ee,i as ze,o as We,m as Qe}from"./TransitionWrapper-2MKtWjI7.js";import{d as Ke}from"./divWithClassName-GLyHhhwZ.js";/* empty css                      */import{C as Ge}from"./CustAuthenticatedLayout-OnQTBTac.js";import"./ApplicationLogo-KYy-7BtH.js";import"./ResponsiveNavLink-dGTsZesT.js";import"./transition-_8Db7wIQ.js";/* empty css                  */var B;function te(t){if((!B&&B!==0||t)&&ne){var a=document.createElement("div");a.style.position="absolute",a.style.top="-9999px",a.style.width="50px",a.style.height="50px",a.style.overflow="scroll",document.body.appendChild(a),B=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return B}const se=l.forwardRef(({className:t,bsPrefix:a,as:i="div",...d},r)=>(a=w(a,"modal-body"),e.jsx(i,{ref:r,className:f(t,a),...d})));se.displayName="ModalBody";const Je=se,oe=l.forwardRef(({bsPrefix:t,className:a,contentClassName:i,centered:d,size:r,fullscreen:c,children:M,scrollable:v,...C},p)=>{t=w(t,"modal");const m=`${t}-dialog`,S=typeof c=="string"?`${t}-fullscreen-${c}`:`${t}-fullscreen`;return e.jsx("div",{...C,ref:p,className:f(m,a,r&&`${t}-${r}`,d&&`${m}-centered`,v&&`${m}-scrollable`,c&&S),children:e.jsx("div",{className:f(`${t}-content`,i),children:M})})});oe.displayName="ModalDialog";const re=oe,le=l.forwardRef(({className:t,bsPrefix:a,as:i="div",...d},r)=>(a=w(a,"modal-footer"),e.jsx(i,{ref:r,className:f(t,a),...d})));le.displayName="ModalFooter";const Ve=le,de=l.forwardRef(({bsPrefix:t,className:a,closeLabel:i="Close",closeButton:d=!1,...r},c)=>(t=w(t,"modal-header"),e.jsx(Oe,{ref:c,...r,className:f(a,t),closeLabel:i,closeButton:d})));de.displayName="ModalHeader";const Xe=de,Ye=Ke("h4"),ie=l.forwardRef(({className:t,bsPrefix:a,as:i=Ye,...d},r)=>(a=w(a,"modal-title"),e.jsx(i,{ref:r,className:f(t,a),...d})));ie.displayName="ModalTitle";const Ze=ie;function Pe(t){return e.jsx(ae,{...t,timeout:null})}function et(t){return e.jsx(ae,{...t,timeout:null})}const ce=l.forwardRef(({bsPrefix:t,className:a,style:i,dialogClassName:d,contentClassName:r,children:c,dialogAs:M=re,"data-bs-theme":v,"aria-labelledby":C,"aria-describedby":p,"aria-label":m,show:S=!1,animation:g=!0,backdrop:y=!0,keyboard:N=!0,onEscapeKeyDown:_,onShow:$,onHide:x,container:o,autoFocus:s=!0,enforceFocus:D=!0,restoreFocus:u=!0,restoreFocusOptions:h,onEntered:F,onExit:L,onExiting:ue,onEnter:q,onEntering:H,onExited:U,backdropClassName:z,manager:W,...me},he)=>{const[fe,ge]=l.useState({}),[pe,Q]=l.useState(!1),A=l.useRef(!1),O=l.useRef(!1),R=l.useRef(null),[b,ye]=Ee(),xe=He(he,ye),K=P(x),je=qe();t=w(t,"modal");const we=l.useMemo(()=>({onHide:K}),[K]);function G(){return W||Le({isRTL:je})}function J(n){if(!ne)return;const j=G().getScrollbarWidth()>0,Y=n.scrollHeight>We(n).documentElement.clientHeight;ge({paddingRight:j&&!Y?te():void 0,paddingLeft:!j&&Y?te():void 0})}const E=P(()=>{b&&J(b.dialog)});Ue(()=>{ee(window,"resize",E),R.current==null||R.current()});const Me=()=>{A.current=!0},ve=n=>{A.current&&b&&n.target===b.dialog&&(O.current=!0),A.current=!1},V=()=>{Q(!0),R.current=Qe(b.dialog,()=>{Q(!1)})},Ce=n=>{n.target===n.currentTarget&&V()},Se=n=>{if(y==="static"){Ce(n);return}if(O.current||n.target!==n.currentTarget){O.current=!1;return}x==null||x()},Ne=n=>{N?_==null||_(n):(n.preventDefault(),y==="static"&&V())},Re=(n,j)=>{n&&J(n),q==null||q(n,j)},be=n=>{R.current==null||R.current(),L==null||L(n)},ke=(n,j)=>{H==null||H(n,j),ze(window,"resize",E)},Te=n=>{n&&(n.style.display=""),U==null||U(n),ee(window,"resize",E)},_e=l.useCallback(n=>e.jsx("div",{...n,className:f(`${t}-backdrop`,z,!g&&"show")}),[g,z,t]),X={...i,...fe};X.display="block";const De=n=>e.jsx("div",{role:"dialog",...n,style:X,className:f(a,t,pe&&`${t}-static`,!g&&"show"),onClick:y?Se:void 0,onMouseUp:ve,"data-bs-theme":v,"aria-label":m,"aria-labelledby":C,"aria-describedby":p,children:e.jsx(M,{...me,onMouseDown:Me,className:d,contentClassName:r,children:c})});return e.jsx(Ie.Provider,{value:we,children:e.jsx(Fe,{show:S,ref:xe,backdrop:y,container:o,keyboard:!0,autoFocus:s,enforceFocus:D,restoreFocus:u,restoreFocusOptions:h,onEscapeKeyDown:Ne,onShow:$,onHide:x,onEnter:Re,onEntering:ke,onEntered:F,onExit:be,onExiting:ue,onExited:Te,manager:G(),transition:g?Pe:void 0,backdropTransition:g?et:void 0,renderBackdrop:_e,renderDialog:De})})});ce.displayName="Modal";const T=Object.assign(ce,{Body:Je,Header:Xe,Title:Ze,Footer:Ve,Dialog:re,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});function ft({auth:t,menu:a,success:i}){let d=a.map((o,s)=>({menu_id:o.menu_id,menu_name:o.menu_name,price:o.price,quantity:0,amount:0,isSelected:!1}));const[r,c]=l.useState([...d]),M=o=>{const s=[...r];s[o].quantity++,s[o].amount=s[o].price*s[o].quantity,c(s)},v=o=>{const s=[...r];s[o].quantity--,s[o].amount=s[o].price*s[o].quantity,c(s)},[C,p]=l.useState(!1),m=()=>p(!1),S=()=>{p(!0),$()},[g,y]=l.useState([]),[N,_]=l.useState([]),$=()=>{const s=[...r].filter(u=>u.quantity!=0),D=s.map((u,h)=>e.jsxs("div",{children:[u.quantity," Qty - ",u.menu_name,"  Total: £",u.amount]},h));_(s),y(D)},x=o=>{let s=0,u={orderDetail:N.map((h,F)=>(s=s+h.amount,{menu_id:h.menu_id,no_of_servings:h.quantity,amount:h.amount})),customer_id:t.user.id,total_amount:s,order_status:"Ordered",processed_by:"0"};o.preventDefault(),$e.post("/customer/orderInfo",u)};return e.jsxs(Ge,{user:t.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Orders"}),children:[e.jsx(Be,{title:"Orders"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden shadow-sm sm:rounded-lg",style:{background:"#DCCA87"},children:e.jsxs(Ae,{children:[a.map((o,s)=>e.jsxs(Z,{className:"items-center rounded-lg border-4 bg-white",style:{margin:"1rem"},children:[e.jsx(I,{xs:3,sm:3,md:2,lg:2,children:e.jsx("img",{src:o.menu_image,style:{width:"15vw"}})}),e.jsxs(I,{xs:5,sm:5,md:7,lg:8,children:[e.jsx("b",{children:e.jsx("u",{children:o.menu_name})}),e.jsx("br",{}),"Ingredients: ",o.ingredients,e.jsx("br",{}),"Price: £",o.price]}),e.jsxs(I,{xs:4,sm:4,md:3,lg:2,children:[e.jsx(k,{variant:"warning",disabled:r[s].quantity===0,onClick:()=>{v(s)},children:"–"})," ",e.jsx("b",{children:r[s].quantity})," ",e.jsx(k,{variant:"warning",onClick:()=>{M(s)},children:"+"})]})]},s)),e.jsx(Z,{className:"items-center",style:{margin:"1.5rem 1rem"},children:e.jsx(k,{variant:"dark",size:"lg",type:"submit",onClick:S,children:" Order now"})}),e.jsxs(T,{show:C,onHide:m,children:[e.jsx(T.Header,{closeButton:!0,children:e.jsx(T.Title,{children:"Confirm Order"})}),e.jsx(T.Body,{children:N.length>0?g:"Order Now"}),e.jsxs(T.Footer,{children:[e.jsx(k,{variant:"secondary",onClick:m,children:"Close"}),N.length>0&&e.jsx(k,{variant:"primary",onClick:x,children:"Save Changes"})]})]})]})})})})]})}export{ft as default};

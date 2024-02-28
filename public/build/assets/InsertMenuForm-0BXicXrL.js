import{W as x,j as e}from"./app-83RbplMi.js";import{T as t,I as r}from"./TextInput-9tITMN6I.js";import{I as i}from"./InputLabel-XvnZPUFu.js";import{P as p}from"./PrimaryButton-WwSV7u3Z.js";import{q as j}from"./transition-_8Db7wIQ.js";function y({menu:l,className:m=""}){const{data:s,setData:h,patch:c,errors:a,processing:n,recentlySuccessful:u}=x({menu_status:l.menu_status,price:l.price}),o=d=>{d.preventDefault(),c(route("Menu.create",l.id),{preserveScroll:!0})};return e.jsxs("section",{className:`space-y-6 ${m}`,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Add New Menu Information"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"View and change any information associated with this menu"})]}),e.jsxs("form",{onSubmit:o,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(i,{htmlFor:"menu_id",value:"Menu ID"}),e.jsx(t,{id:"menu_id",className:"mt-1 block w-full",value:s.menu_id,disabled:!0}),e.jsx(r,{message:a.status,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"menu_name",value:"Menu Name"}),e.jsx(t,{id:"menu_name",className:"mt-1 block w-full",value:s.price,disabled:!0}),e.jsx(r,{message:a.status,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"price",value:"price"}),e.jsx(t,{id:"price",className:"mt-1 block w-full",value:s.price,disabled:!0}),e.jsx(r,{message:a.status,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"price",value:"price"}),e.jsx(t,{id:"price",className:"mt-1 block w-full",value:s.price,disabled:!0}),e.jsx(r,{message:a.status,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(p,{disabled:n,children:"Save Changes"}),e.jsx(j,{show:u,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{y as default};
(this.webpackJsonpwlossapp=this.webpackJsonpwlossapp||[]).push([[0],{149:function(e,c,t){"use strict";t.r(c);var s=t(2),n=t.n(s),i=t(39),l=t.n(i),o=(t(44),t(3)),a=t(7),r=t.n(a),d=(t(49),t(50),t(12)),j=t(1),u=(t(15).default,t(70));function b(e){var c=e.BodySection,t=e.BMI,n=e.Div,i=e.submitEmail,l=e.setEmail,a=e.Diff,r=Object(s.useState)(!1),d=Object(o.a)(r,2),b=d[0],O=d[1],h=Object(s.useState)(!1),m=Object(o.a)(h,2),x=m[0],v=m[1];return Object(j.jsxs)("div",{className:" row",children:[Object(j.jsxs)("div",{className:"row col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 justify-content-center margin0",children:[Object(j.jsxs)("div",{className:"row col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12",children:[Object(j.jsx)("div",{className:"col-".concat(n," col-md-").concat(n," col-lg-").concat(n," col-sm-").concat(n)}),Object(j.jsxs)("div",{className:"indicator col-md-1 col-lg-1 col-sm-1 col-xs-1 BMIindicator",children:[Object(j.jsx)("span",{className:"spanBMI",children:t}),Object(j.jsx)("div",{className:"triangle"})]})]}),Object(j.jsx)("div",{className:"indicator STindicator col-1 col-md-1 col-lg-1 col-sm-1 col-xs-1",children:"Severe Thinness"}),Object(j.jsx)("div",{className:"indicator MTindicator col-1 col-md-1 col-lg-1 col-sm-1 col-xs-1",children:"Moderate Thinness"}),Object(j.jsx)("div",{className:"indicator MDTindicator col-1 col-md-1 col-lg-1 col-sm-1 col-xs-1",children:"Mild Thinness"}),Object(j.jsx)("div",{className:"indicator Nindicator col-1 col-md-1 col-lg-1 col-sm-1 col-xs-1",children:"Normal"}),Object(j.jsx)("div",{className:"indicator OWTindicator col-1 col-md-1 col-lg-1 col-sm-1 col-xs-1",children:"Overweight"}),Object(j.jsx)("div",{className:"indicator OC1indicator col-1 col-md-1 col-lg-1 col-sm-1 col-xs-1",children:"Obese Class I"}),Object(j.jsx)("div",{className:"indicator OC2indicator col-1 col-md-1 col-lg-1 col-sm-1 col-xs-1",children:"Obese Class II"}),Object(j.jsx)("div",{className:"indicator OC3indicator col-1 col-md-1 col-lg-1 col-sm-1 col-xs-1",children:"Obese Class II"})]}),Object(j.jsxs)("div",{className:"col-12 justify-content-center suggestionSection",children:[Object(j.jsxs)("div",{className:"col-12 row justify-content-center  justify-content-center margin0 ",children:[Object(j.jsxs)("div",{className:"col-9",children:[Object(j.jsxs)("div",{hidden:0===a,className:"WeightDiff",children:["TO HAVE A HEALTHY WEIGHT YOU MUST HAVE ",a>0?"".concat(a," KG LESS"):"".concat(-a," KG MORE")]}),Object(j.jsxs)("h3",{className:" CallToAction",children:[" YOUR BODY IS ",c," GET YOUR FREE EBOOK ABOUT NUTRITION HERE "]})]}),Object(j.jsxs)("div",{className:"GiftDescription col-xl-4 col-lg-4 col-md-4 col-sm-11 col-xs-11 col-11",children:[Object(j.jsx)("h3",{children:"Ebook Content"}),Object(j.jsx)("div",{children:"Carbohydrates \u2013 The Master Fuel PAGE 2"}),Object(j.jsx)("div",{children:"Protein\u2019s Role as a Team Player PAGE 12"}),Object(j.jsx)("div",{children:"Building Body Mass PAGE 14"}),Object(j.jsx)("div",{children:"Fat as Fuel PAGE 16"}),Object(j.jsx)("div",{children:"Gut Health PAGE 17"}),Object(j.jsx)("div",{children:"Vitamins and Minerals PAGE 18"}),Object(j.jsx)("div",{children:"Supplements and Your Health PAGE 21"}),Object(j.jsx)("div",{children:"Fluids and Hydration PAGE 24"})]}),Object(j.jsx)("div",{className:"GiftPicture col-xl-4 col-lg-4 col-md-4 col-sm-11 col-xs-11 col-11",children:Object(j.jsx)("div",{className:"EbookPic"})})]}),x?Object(j.jsx)("div",{className:"checkEmail",children:"CHECK YOUR EMAIL BOX (IF NOT FOUND PLEASE CHECK YOUR SPAM)"}):Object(j.jsxs)("div",{className:"EmailInputSection",children:[Object(j.jsx)("input",{onChange:function(e){l(e.target.value),O(u.isEmail(e.target.value))},className:"EmailInput inputDate",placeholder:"TYPE YOUR EMAIL"}),Object(j.jsx)("button",{disabled:!b,onClick:function(){v(!0),i()},className:"btnConfim",children:"Send"})]})]})]})}var O=t(15).default,h=function(e){var c=e.Age,t=e.setAge,n=e.setToShow,i=e.handleKeyPress,l=Object(s.useRef)(null);return Object(s.useEffect)((function(){l.current.focus()}),[]),Object(j.jsx)(r.a,{left:!0,children:Object(j.jsxs)("div",{className:"AgeSection section",children:[Object(j.jsx)("input",{ref:l,onKeyPress:function(e){return i(e,c>0)},value:c,onChange:function(e){return t(e.target.value)},min:"0",placeholder:"TYPE YOUR AGE",type:"number",className:"inputDate"}),Object(j.jsx)("button",{disabled:!c>0,onClick:function(){return n(2)},className:"btnNext",children:"Next"})]})})},m=function(e){var c=e.Weight,t=e.setToShow,n=e.setWeight,i=e.handleKeyPress,l=Object(s.useRef)(null);return Object(s.useEffect)((function(){l.current.focus()}),[]),Object(j.jsx)(r.a,{left:!0,children:Object(j.jsxs)("div",{className:"weightSection section",children:[Object(j.jsx)("button",{onClick:function(){return t(1)},className:"btnPrevious",children:"Previous"}),Object(j.jsx)("input",{ref:l,onKeyPress:function(e){return i(e,c>0)},value:c,onChange:function(e){return n(e.target.value)},min:"0",placeholder:"TYPE YOUR WEIGHT",type:"number",className:"inputDate weightInput"}),Object(j.jsx)("button",{disabled:!c>0,onClick:function(){return t(3)},className:"btnNext",children:"Next"})]})})},x=function(e){var c=e.Height,t=e.setToShow,n=e.setHeight,i=e.handleKeyPress,l=Object(s.useRef)(null);return Object(s.useEffect)((function(){l.current.focus()}),[]),Object(j.jsx)(r.a,{left:!0,children:Object(j.jsxs)("div",{className:"heightSection section",children:[Object(j.jsx)("button",{onClick:function(){return t(2)},className:"btnPrevious",children:"Previous"}),Object(j.jsx)("input",{ref:l,onKeyPress:function(e){return i(e,c>0)},value:c,onChange:function(e){return n(e.target.value)},min:"0",placeholder:"TYPE YOUR HEIGHT",type:"number",className:"inputDate heightInput"}),Object(j.jsx)("button",{disabled:!c>0,onClick:function(){return t(4)},className:"btnNext",children:"Next"})]})})},v=function(e){var c=e.Gender,t=e.setGender,s=e.calculate,n=e.setToShow,i=e.handleKeyPress;return Object(j.jsx)(r.a,{left:!0,children:Object(j.jsxs)("div",{className:"genderSection section",children:[Object(j.jsx)("button",{onClick:function(){return n(3)},className:"btnPrevious",children:"Previous"}),Object(j.jsxs)("label",{className:"genderSelect",children:[Object(j.jsx)("input",{onKeyPress:function(e){return i(e,""!==c)},checked:"F"===c,type:"checkbox",onChange:function(){return t("F")}})," ",Object(j.jsx)(d.b,{})]}),Object(j.jsxs)("label",{className:"genderSelect",children:[Object(j.jsx)("input",{onKeyPress:function(e){return i(e,""!==c)},checked:"M"===c,type:"checkbox",onChange:function(){return t("M")}})," ",Object(j.jsx)(d.a,{})," "]}),Object(j.jsx)("button",{disabled:""===c,onClick:function(){return s()},className:"btnNextScore",children:"Get my score"})]})})},f=function(e){var c=e.toShow,t=e.setToShow,n=Object(s.useState)(),i=Object(o.a)(n,2),l=i[0],a=i[1],r=Object(s.useState)(""),d=Object(o.a)(r,2),u=d[0],f=d[1],N=Object(s.useState)(),g=Object(o.a)(N,2),E=g[0],S=g[1],p=Object(s.useState)(),T=Object(o.a)(p,2),P=T[0],y=T[1],C=Object(s.useState)(""),A=Object(o.a)(C,2),I=A[0],w=A[1],G=Object(s.useState)(23),H=Object(o.a)(G,2),k=H[0],M=H[1],R=Object(s.useState)(),K=Object(o.a)(R,2),B=K[0],F=K[1],Y=Object(s.useState)(0),W=Object(o.a)(Y,2),D=W[0],U=W[1],L=Object(s.useState)(""),V=Object(o.a)(L,2),J=V[0],X=V[1],q=function(e,s){"Enter"===e.key&&s&&t(c+1)};switch(c){case 1:return Object(j.jsx)("div",{className:"sectionWrapper",children:Object(j.jsx)(h,{handleKeyPress:q,Age:l,setAge:a,setToShow:t})});case 2:return Object(j.jsx)("div",{className:"sectionWrapper",children:Object(j.jsx)(m,{handleKeyPress:q,Weight:E,setWeight:S,setToShow:t})});case 3:return Object(j.jsx)("div",{className:"sectionWrapper",children:Object(j.jsx)(x,{handleKeyPress:q,Height:P,setToShow:t,setHeight:y})});case 4:return Object(j.jsx)("div",{className:"sectionWrapper",children:Object(j.jsx)(v,{handleKeyPress:q,Gender:I,calculate:function(){console.log("calculate"),t(5);var e=E/(P*P*.01*.01);e<16?(X("THIN"),F(2),U((E-P*P*.01*.01*18.5).toFixed(1))):e<17?(X("THIN"),F(3),U((E-P*P*.01*.01*18.5).toFixed(1))):e<18.5?(X("THIN"),F(4),U((E-P*P*.01*.01*18.5).toFixed(1))):e<25?(X("NORMAL"),F(5)):e<30?(U((E-P*P*.01*.01*25).toFixed(1)),X("OVERWEIGHT"),F(6)):e<35?(U((E-P*P*.01*.01*25).toFixed(1)),X("OBESE"),F(7)):e<40?(U((E-P*P*.01*.01*25).toFixed(1)),X("OBESE"),F(8)):(U((E-P*P*.01*.01*25).toFixed(1)),X("OBESE"),F(9)),M(e.toFixed(1))},setGender:w,setToShow:t})});case 5:return Object(j.jsx)("div",{className:"",children:Object(j.jsx)(b,{Diff:D,BodySection:J,setEmail:f,submitEmail:function(){console.log("SVD"),O.post("http://wlossapi-env-1.eba-iii2n5kh.us-east-2.elasticbeanstalk.com/SaveEmail",{Age:l,Email:u,Weight:E,Height:P,BodySection:J,Gender:I}).then((function(e){console.log("Email Saved successfuly"+e)})).catch((function(e){console.log("=====EROOOOR======"),console.log(e)}))},Div:B,BMI:k})})}};var N=function(){var e=Object(s.useState)(1),c=Object(o.a)(e,2),t=c[0],n=c[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{className:"container maxWidth100 padding0",children:Object(j.jsx)(f,{toShow:t,setToShow:n})})})};l.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))},44:function(e,c,t){},49:function(e,c,t){}},[[149,1,2]]]);
//# sourceMappingURL=main.e3bb387d.chunk.js.map
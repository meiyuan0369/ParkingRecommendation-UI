import{r as e,c as a,a as t,b as r,w as s,o as n,d as l,p as o,e as i,f as c,g as d,n as u,t as p,h as v,i as m,j as f,v as b,k as g,l as h,m as _,q as y,s as k,u as x,x as P}from"./vendor.4b8bedbd.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?a.credentials="include":"anonymous"===e.crossorigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();const M={id:"app"},w=l("首页"),A=l("驾车路径规划"),I=l("用户偏好设置"),C={setup:l=>(l,o)=>{const i=e("router-link"),c=e("router-view");return n(),a("div",M,[t("nav",null,[r(i,{to:"/"},{default:s((()=>[w])),_:1}),r(i,{to:"/driving-route-planner"},{default:s((()=>[A])),_:1}),r(i,{to:"/user-preferences"},{default:s((()=>[I])),_:1})]),r(c)])}};o("data-v-327310bf");const D={id:"container"},U=t("div",{id:"map"},null,-1),N={id:"panel"},L=t("h3",null,"驾车路线",-1),S={id:"routeInfo"},T={key:0},V={key:1};i();const F={setup(e){const r=c(null),s=c(null),l=c(null),o=c(null),i=[119.198453,26.056812],m=c(!1),f=e=>{s.value=[e.position.lng,e.position.lat],console.log("当前位置:",s.value),h(i)},b=e=>{console.error("定位失败:",e.message),alert("无法获取当前位置，使用IP定位。"),AMap.plugin("AMap.CitySearch",(()=>{(new AMap.CitySearch).getLocalCity(((e,a)=>{"complete"===e&&"OK"===a.info&&a.bounds?(s.value=a.bounds.getCenter(),console.log("IP定位当前位置:",s.value),h(i)):alert("IP定位失败，请尝试手动选择位置。")}))}))},g=()=>{AMap.plugin("AMap.Geolocation",(function(){const e=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,showButton:!0,buttonPosition:"RB",buttonOffset:new AMap.Pixel(10,20),zoomToAccuracy:!0});r.value.addControl(e),e.getCurrentPosition(((e,a)=>{"complete"===e?f(a):b(a)}))}))},h=e=>{AMap.plugin("AMap.Driving",(()=>{new AMap.Driving({map:r.value,panel:"panel"}).search(s.value,e,((e,a)=>{if("complete"===e&&a.routes&&a.routes.length){const e=a.routes[0];l.value=e.distance,o.value=Math.ceil(e.time/60)}else alert("驾车路线规划失败，请检查目的地是否正确。")}))}))},_=()=>{m.value=!0,alert("请点击地图以选择您的位置。")},y=e=>{m.value&&(s.value=[e.lnglat.getLng(),e.lnglat.getLat()],console.log("用户手动选择的位置:",s.value),k(s.value),h(i),m.value=!1)},k=e=>{new AMap.Marker({map:r.value,position:e})};return d((()=>{u((()=>{r.value=new AMap.Map("map",{zoom:12,resizeEnable:!0}),AMap.plugin("AMap.Geolocation",(function(){const e=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,showButton:!0,buttonPosition:"RB",buttonOffset:new AMap.Pixel(10,20),zoomToAccuracy:!0});r.value.addControl(e),e.getCurrentPosition(((e,a)=>{"complete"===e?f(a):b(a)}))})),r.value.on("click",y)}))})),(e,r)=>(n(),a("div",D,[U,t("div",N,[L,t("div",S,[null!==l.value?(n(),a("p",T,"距离："+p((l.value/1e3).toFixed(2))+" 公里",1)):v("",!0),null!==o.value?(n(),a("p",V,"预计行驶时间："+p(o.value)+" 分钟",1)):v("",!0)]),t("button",{id:"refresh",onClick:g},"刷新定位"),t("button",{id:"manualMark",onClick:_},"手动选择位置")])]))},__scopeId:"data-v-327310bf"};const z={setup(){const e=c(""),a=c(!1),t=c(""),r=c(""),s=c({preferred_parking_types:[],max_parking_fee:null,preferred_parking_difficulty:null,max_walking_distance:null,max_driving_distance:null}),n=m((()=>{const{preferred_parking_types:e,max_parking_fee:a,preferred_parking_difficulty:t,max_walking_distance:r,max_driving_distance:n}=s.value;return e.length>0&&null!==a&&null!==t&&null!==r&&null!==n}));return{userIdString:e,preferences:s,userExists:a,successMessage:t,errorMessage:r,isFormComplete:n,fetchUserPreferences:async()=>{const n=parseInt(e.value);if(isNaN(n))r.value="请输入有效的用户ID";else{r.value="",t.value="",a.value=!1;try{const e=await _.get(`/user/${n}`);s.value=e.data,a.value=!0}catch(l){r.value=l.response?l.response.data.detail:"无法获取用户信息"}}},submitPreferences:async()=>{r.value="",t.value="";const a=parseInt(e.value);try{const e=await _.put(`/user/${a}`,s.value);t.value=e.data.msg}catch(n){r.value=n.response?n.response.data.detail:"提交偏好信息失败"}},goToNextPage:()=>{n.value&&(window.location.href="/recommendation_results")}}}},B={class:"container mt-5"},E=t("h1",{class:"text-center mb-4"},"用户偏好信息",-1),G={class:"row justify-content-center"},H={class:"col-md-6 col-lg-5"},O={class:"mb-4"},j=t("label",{for:"userId",class:"form-label"},"用户ID:",-1),R={class:"input-group"},q={class:"mb-3"},K=t("label",{for:"preferredParkingTypes",class:"form-label"},"停车场类型偏好:",-1),W=[t("option",{value:"商场"},"商场",-1),t("option",{value:"地面停车场"},"地面停车场",-1),t("option",{value:"地下停车场"},"地下停车场",-1),t("option",{value:"交通枢纽"},"交通枢纽",-1)],$={class:"mb-3"},Y=t("label",{for:"maxParkingFee",class:"form-label"},"最大停车费用 (CNY/hour):",-1),J={class:"mb-3"},Q=t("label",{for:"preferredParkingDifficulty",class:"form-label"},"停车难度偏好:",-1),X=[t("option",{value:"容易"},"容易",-1),t("option",{value:"中等"},"中等",-1),t("option",{value:"困难"},"困难",-1)],Z={class:"mb-3"},ee=t("label",{for:"maxWalkingDistance",class:"form-label"},"最大步行距离 (米):",-1),ae={class:"mb-3"},te=t("label",{for:"maxDrivingDistance",class:"form-label"},"最大驾车距离 (米):",-1),re=t("button",{type:"submit",class:"btn btn-success"},"提交偏好信息",-1),se=["disabled"],ne={key:1,class:"alert alert-danger mt-3"},le={key:2,class:"alert alert-success mt-3"};z.render=function(e,r,s,l,o,i){return n(),a("div",B,[E,t("div",G,[t("div",H,[t("div",O,[j,t("div",R,[f(t("input",{type:"text",id:"userId",class:"form-control","onUpdate:modelValue":r[0]||(r[0]=e=>l.userIdString=e),placeholder:"请输入用户ID"},null,512),[[b,l.userIdString]]),t("button",{onClick:r[1]||(r[1]=(...e)=>l.fetchUserPreferences&&l.fetchUserPreferences(...e)),class:"btn btn-primary ms-2"},"获取用户信息")])]),l.userExists?(n(),a("form",{key:0,onSubmit:r[8]||(r[8]=g(((...e)=>l.submitPreferences&&l.submitPreferences(...e)),["prevent"]))},[t("div",q,[K,f(t("select",{id:"preferredParkingTypes",class:"form-select","onUpdate:modelValue":r[2]||(r[2]=e=>l.preferences.preferred_parking_types=e),multiple:""},W,512),[[h,l.preferences.preferred_parking_types]])]),t("div",$,[Y,f(t("input",{type:"number",id:"maxParkingFee",class:"form-control","onUpdate:modelValue":r[3]||(r[3]=e=>l.preferences.max_parking_fee=e),placeholder:"请输入最大停车费"},null,512),[[b,l.preferences.max_parking_fee]])]),t("div",J,[Q,f(t("select",{id:"preferredParkingDifficulty",class:"form-select","onUpdate:modelValue":r[4]||(r[4]=e=>l.preferences.preferred_parking_difficulty=e)},X,512),[[h,l.preferences.preferred_parking_difficulty]])]),t("div",Z,[ee,f(t("input",{type:"number",id:"maxWalkingDistance",class:"form-control","onUpdate:modelValue":r[5]||(r[5]=e=>l.preferences.max_walking_distance=e),placeholder:"请输入最大步行距离"},null,512),[[b,l.preferences.max_walking_distance]])]),t("div",ae,[te,f(t("input",{type:"number",id:"maxDrivingDistance",class:"form-control","onUpdate:modelValue":r[6]||(r[6]=e=>l.preferences.max_driving_distance=e),placeholder:"请输入最大驾车距离"},null,512),[[b,l.preferences.max_driving_distance]])]),re,t("button",{onClick:r[7]||(r[7]=(...e)=>l.goToNextPage&&l.goToNextPage(...e)),disabled:!l.isFormComplete,class:"btn btn-primary ms-2"},"下一步",8,se)],32)):v("",!0),l.errorMessage?(n(),a("div",ne,p(l.errorMessage),1)):v("",!0),l.successMessage?(n(),a("div",le,p(l.successMessage),1)):v("",!0)])])])};const oe={name:"HomePage"};o("data-v-052ab802");const ie={class:"home-page"},ce=[y('<header class="header" data-v-052ab802><h1 data-v-052ab802>基于神经协同过滤的停车位推荐方法</h1><p data-v-052ab802>智能化、个性化的停车位推荐系统</p></header><section class="content-section" data-v-052ab802><div class="content-card" data-v-052ab802><h2 data-v-052ab802>方法概述</h2><p data-v-052ab802> 本方法结合神经网络与协同过滤技术，利用用户的停车历史数据及位置信息，生成个性化的停车位推荐结果。该模型能够动态适应停车位的供求变化，提升推荐精准度。 </p></div><div class="content-card" data-v-052ab802><h2 data-v-052ab802>方法优势</h2><ul data-v-052ab802><li data-v-052ab802>个性化推荐：根据用户历史停车位选择生成个性化推荐。</li><li data-v-052ab802>实时动态更新：实时监控停车位的使用情况，提供最新的推荐。</li><li data-v-052ab802>高效性：通过深度学习提升推荐的准确性与响应速度。</li></ul></div><div class="content-card" data-v-052ab802><h2 data-v-052ab802>应用场景</h2><ul data-v-052ab802><li data-v-052ab802>大城市或拥挤区域的停车位推荐。</li><li data-v-052ab802>结合导航系统的智能停车推荐。</li><li data-v-052ab802>为停车场提供智能化管理决策支持。</li></ul></div></section><section class="members-section" data-v-052ab802><h2 data-v-052ab802>项目成员</h2><div class="members-list" data-v-052ab802><div class="member-card leader-card" data-v-052ab802><strong data-v-052ab802>陈威宇</strong></div><div class="member-card" data-v-052ab802>张铭心</div><div class="member-card" data-v-052ab802>肖晗涵</div><div class="member-card" data-v-052ab802>洪巧君</div><div class="member-card" data-v-052ab802>梅明胜</div></div></section><section class="teacher-section" data-v-052ab802><h2 data-v-052ab802>指导老师</h2><div class="members-list" data-v-052ab802><div class="member-card teacher-card" data-v-052ab802><strong data-v-052ab802>廖龙龙</strong></div></div></section>',4)];i(),oe.render=function(e,t,r,s,l,o){return n(),a("div",ie,ce)},oe.__scopeId="data-v-052ab802";const de=[{path:"/",name:"Home",component:oe},{path:"/user-preferences",name:"UserPreferences",component:z},{path:"/driving-route-planner",name:"DrivingRoutePlanner",component:F}],ue=k({history:x(),routes:de}),pe=P(C);pe.use(ue),pe.mount("#app");
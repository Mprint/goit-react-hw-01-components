(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__3dzvr",description:"Profile_description__2GJPq",avatar:"Profile_avatar__aV4u5",name:"Profile_name__2Psdw",tag:"Profile_tag__20iCl",location:"Profile_location__3GRdm","list-item":"Profile_list-item__1Jzxv",stats:"Profile_stats__25zJx",label:"Profile_label__3Zjy8",quantity:"Profile_quantity__1zFQ4"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__2QFok",title:"Statistics_title__3PVIg",statList:"Statistics_statList__3BR2u",item:"Statistics_item__1vE2T",label:"Statistics_label__227YU",percentage:"Statistics_percentage__3inQt"}},function(e,a,t){e.exports={item:"FriendListItem_item__1isJt",avatar:"FriendListItem_avatar__1Coux",name:"FriendListItem_name__2FRpb",status:"FriendListItem_status__3rXJp",online:"FriendListItem_online__3H0uN",offline:"FriendListItem_offline__rrogY"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,,,,,function(e,a,t){e.exports={friendList:"FriendList_friendList__1lQQU"}},function(e,a,t){},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),c=t.n(i),s=t(1),l=t.n(s),m=function(e){var a=e.name,t=e.tag,n=e.location,i=e.avatar,c=e.stats;return r.a.createElement("div",{className:l.a.profile},r.a.createElement("div",{className:l.a.description},r.a.createElement("img",{src:i,alt:a,className:l.a.avatar}),r.a.createElement("p",{className:l.a.name},a),r.a.createElement("p",{className:l.a.tag},"@",t),r.a.createElement("p",{className:l.a.location},n)),r.a.createElement("ul",{className:l.a.stats},r.a.createElement("li",null,r.a.createElement("span",{className:l.a.label},"Followers"),r.a.createElement("span",{className:l.a.quantity}," ",c.followers)),r.a.createElement("li",null,r.a.createElement("span",{className:l.a.label},"Views"),r.a.createElement("span",{className:l.a.quantity}," ",c.views)),r.a.createElement("li",null,r.a.createElement("span",{className:l.a.label},"Likes"),r.a.createElement("span",{className:l.a.quantity}," ",c.likes))))};m.defaultProps={avatar:"https://kingsballpen.com.ng/wp-content/uploads/2019/12/img-avatar-blank.jpg",followers:0,views:0,likes:0};var o=m,u=t(2),d=t.n(u);function p(e){var a=r.a.createElement(r.a.Fragment,null,e.title.length>0&&r.a.createElement("h2",{className:d.a.title},e.title)),t=r.a.createElement(r.a.Fragment,null,e.stats.map((function(e){return r.a.createElement("li",{className:d.a.item,key:e.id},r.a.createElement("span",{className:d.a.label},e.label),r.a.createElement("span",{className:d.a.percentage},e.percentage,"%"))})));return r.a.createElement("section",{className:d.a.statistics},a,r.a.createElement("ul",{className:d.a.statList}," ",t," "))}p.defaultProps={stats:[]};var f=p,b=t(5),y=t(6),_=t(7),v=t(8),E=t(3),g=t.n(E),w=function(e){var a=e.friend,t=[g.a.status];return a.isOnline?t.push(g.a.online):t.push(g.a.offline),r.a.createElement("li",{className:g.a.item},r.a.createElement("span",{className:t.join(" ")},a.isOnline),r.a.createElement("img",{className:g.a.avatar,src:a.avatar,alt:a.name,width:"48"}),r.a.createElement("p",{className:g.a.name},a.name))},h=t(11),N=t.n(h),O=function(e){Object(v.a)(t,e);var a=Object(_.a)(t);function t(){var e;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={friends:e.props.friends},e}return Object(y.a)(t,[{key:"render",value:function(){var e=this.state.friends.map((function(e){return r.a.createElement(w,{friend:e,key:e.id})}));return r.a.createElement("ul",{className:N.a.friendList},e)}}]),t}(n.Component);O.defaultProps={friends:[]};var j=O,P=t(12),L=t.n(P),k=function(e){Object(v.a)(t,e);var a=Object(_.a)(t);function t(){var e;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={items:e.props.items},e}return Object(y.a)(t,[{key:"render",value:function(){var e=this.state.items.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("th",null,e.type),r.a.createElement("th",null,e.amount),r.a.createElement("th",null,e.currency))}));return r.a.createElement("table",{className:L.a.transactionHistory},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Currency"))),r.a.createElement("tbody",null,e))}}]),t}(n.Component),F=t(4),x=t(13),J=t(14),S=t(15);c.a.render(r.a.createElement(r.a.Fragment,null,"\u2022 \u0417\u0430\u0434\u0430\u043d\u0438\u0435 1 - \u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438",r.a.createElement(o,{name:F.name,tag:F.tag,location:F.location,avatar:F.avatar,stats:F.stats}),"\u2022 \u0417\u0430\u0434\u0430\u043d\u0438\u0435 2 - \u0421\u0435\u043a\u0446\u0438\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438",r.a.createElement(f,{title:"Upload stats",stats:x}),"\u2022 \u0417\u0430\u0434\u0430\u043d\u0438\u0435 3 - \u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0440\u0443\u0437\u0435\u0439",r.a.createElement(j,{friends:J}),"\u2022 \u0417\u0430\u0434\u0430\u043d\u0438\u0435 4 - \u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0440\u0443\u0437\u0435\u0439",r.a.createElement("br",null),r.a.createElement(k,{items:S}),","),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.d77e9b79.chunk.js.map
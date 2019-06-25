(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{529:function(e,t,a){e.exports=a(933)},534:function(e,t,a){},933:function(e,t,a){"use strict";a.r(t);var n,r=a(1),o=a.n(r),c=a(45),i=a.n(c),l=(a(534),a(961)),s=a(948),u=a(960),d=a(962),f=a(260),m=a(497),p=a(180),E=a(958),h=a(953),b=a(499),g=a(959),v=a(963),k=a(954),O=a(956),j=a(955),w=a(957),y=a(152),x=a.n(y),D=a(227),C=a(257),P=a.n(C),T=function(){var e=Object(D.a)(x.a.mark(function e(t){var a,n,r,o,c,i,l,s,u;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.files.title.split("."),n=t.files.title,r=a[1],console.log("Preparing the upload",n,r),e.next=6,P.a.post("/s3_sign",{fileName:n,fileType:r});case 6:if(o=e.sent){e.next=9;break}return e.abrupt("return",null);case 9:return console.log(o),c=o.data.data.returnData,i=c.signedRequest,l=c.url,console.log("Recieved a signed request "+i),s={headers:{"Content-Type":r},onUploadProgress:function(e){console.log(e.loaded)}},e.next=17,P.a.put(i,t.files.rawFile,s);case 17:if(u=e.sent,console.log("Response from s3",u),!u){e.next=21;break}return e.abrupt("return",l);case 21:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),_=function(e){var t=e.filename;P.a.post("/s3_delete",{fileName:t})},M=a(60),R=a(554),S=a(14),N=(n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R.a.fetchJson,a=function(e){var t=e.pagination,a=t.page,n=t.perPage,r=e.sort,o=r.field,c=r.order;return o&&(e.filter.$sort=("DESC"===c?"-":"")+o),null!=e.filter.q&&(e.filter.$term=e.filter.q,delete e.filter.q),Object.assign(R.a.flattenObject(e.filter),{$limit:n,$page:a},o?{$sort:("DESC"===c?"-":"")+("id"===o?"_id":o)}:{})},n=function(e){var t=Object.assign({},e.data);return delete t.id,delete t.createdAt,delete t.updatedAt,delete t.deletedAt,delete t.isDeleted,JSON.stringify(t)};return function(r,o,c){if(r===S.i)return Promise.all(c.ids.map(function(a){return t("".concat(e,"/").concat(o,"/").concat(a),{method:"PATCH",body:JSON.stringify(c.data)})})).then(function(e){return{data:e.map(function(e){return e.json})}});if(r===S.c)return Promise.all(c.ids.map(function(a){return t("".concat(e,"/").concat(o,"/").concat(a),{method:"DELETE"})})).then(function(e){return{data:e.map(function(e){return e.json})}});var i=function(t,r,o){var c="",i={};switch(t){case S.d:var l=a(o);c="".concat(e,"/").concat(r,"?").concat(Object(M.stringify)(l));break;case S.g:c="".concat(e,"/").concat(r,"/").concat(o.id);break;case S.f:var s=a(o);s[o.target]=o.id,c="".concat(e,"/").concat(r,"?").concat(Object(M.stringify)(s));break;case S.h:c="".concat(e,"/").concat(r,"/").concat(o.id),i.method="PUT",i.body=n(o);break;case S.a:c="".concat(e,"/").concat(r),i.method="POST",i.body=n(o);break;case S.b:c="".concat(e,"/").concat(r,"/").concat(o.id),i.method="DELETE";break;case S.e:c="".concat(e,"/").concat(r,"?").concat(o.ids.map(function(e){return Object(M.stringify)({_id:e})}).join("&"));break;default:throw new Error("Unsupported fetch action type ".concat(t))}return{url:c,options:i}}(r,o,c),l=i.url,s=i.options;return t(l,s).then(function(e){return function(e,t,a,n){console.log(t,a,n);var r=e.json;switch(t){case S.d:case S.e:case S.f:return{data:r.docs.map(function(e){return(e.id=e._id)&&delete e._id&&e}),total:r.items.total};case S.a:return n.data.id=n.data._id,delete n.data._id,{data:n.data};case S.b:return{data:n};default:return r?(r.id=r._id,delete r._id,{data:r}):{data:{}}}}(e,r,o,c)})}}("http://sebastians-mbp:9000"),function(){var e=Object(D.a)(x.a.mark(function e(t,a,r){var o,c;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t,a,r),"CREATE"!==t||"file"!==a){e.next=10;break}return e.next=4,T(r.data);case 4:if(!(o=e.sent)){e.next=9;break}return e.abrupt("return",n(t,a,{data:{filename:r.data.files.title,url:o}}));case 9:throw new Error("upload error");case 10:if("DELETE"!==t||"file"!==a){e.next=16;break}return e.next=13,n("GET_ONE","file",{id:r.id});case 13:(c=e.sent)&&c.data&&_(c.data),console.log("now dispatching normal delete request to api");case 16:if("DELETE_MANY"!==t||"file"!==a){e.next=18;break}throw new Error("not implemented");case 18:return e.abrupt("return",n(t,a,r));case 19:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}()),A=a(498),J=a(323),q=a(324),L=a(333),$=a(325),Z=a(228),W=a(334),B=a(947),U=a(946),z=a(455),F=a(46),G=a(449),H=a.n(G),I=a(451),Y=a.n(I),K=a(452),Q=a.n(K),V=a(453),X=a.n(V),ee=H()(function(e){var t=e.position,a=e.defaultZoom,n=e.handleMarkerDragEnd,r=e.onZoomChanged,c=e.radius,i=e.circleOptions,l=e.shouldRecenterMap,s=-1!==c?o.a.createElement(X.a,{center:t,radius:c,options:i}):null,u=l?{center:t}:{};return o.a.createElement(Y.a,Object.assign({onZoomChanged:r,defaultZoom:a,defaultCenter:t},u),o.a.createElement(Q.a,{draggable:!0,position:t,onDragEnd:n}),s)}),te=function(e){function t(e){var a;return Object(J.a)(this,t),(a=Object(L.a)(this,Object($.a)(t).call(this,e))).state={position:e.defaultPosition,shouldRecenterMap:!1},a.handleMarkerDragEnd=a.handleMarkerDragEnd.bind(Object(Z.a)(a)),a}return Object(W.a)(t,e),Object(q.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.defaultPosition;JSON.stringify(t)!==JSON.stringify(this.props.defaultPosition)&&this.setState({position:t,shouldRecenterMap:!0})}},{key:"handleMarkerDragEnd",value:function(e){var t=this.props.onChange,a={lat:e.latLng.lat(),lng:e.latLng.lng()};this.setState({position:a,shouldRecenterMap:!1}),t(a)}},{key:"render",value:function(){var e=this.props,t=e.zoom,a=e.radius,n=e.circleOptions,r=e.containerElement,c=e.mapElement,i=this.state,l=i.position,s=i.shouldRecenterMap;return o.a.createElement(ee,{containerElement:r,mapElement:c,handleMarkerDragEnd:this.handleMarkerDragEnd,position:l,circleOptions:n,radius:a,defaultZoom:t,shouldRecenterMap:s})}}]),t}(r.Component);te.defaultProps={zoom:10,radius:1e3,circleOptions:{fillColor:"red",fillOpacity:.2,strokeColor:"red",strokeOpacity:1,strokeWeight:1.2}};var ae={lat:27.9878,lng:86.925},ne=function(e){function t(){return Object(J.a)(this,t),Object(L.a)(this,Object($.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(U.a,null,function(t){t.formData;var a=t.dispatch;Object(A.a)(t,["formData","dispatch"]);return o.a.createElement("div",null,o.a.createElement(te,{containerElement:o.a.createElement("div",{style:{height:"100%"}}),mapElement:o.a.createElement("div",{style:{height:"400px"}}),defaultPosition:e.props.record.lat?{lat:e.props.record.lat,lng:e.props.record.lon}:ae,onChange:function(e){a(Object(F.b)(z.a,"lat",e.lat)),a(Object(F.b)(z.a,"lon",e.lng))}}),o.a.createElement(B.a,{source:"lat",label:"latitude"}),"\xa0",o.a.createElement(B.a,{source:"lon",label:"longitude"}))})}}]),t}(r.Component),re=o.a.createElement(l.a,null,o.a.createElement(s.a,{source:"key"}),o.a.createElement(s.a,{source:"content_en"}),o.a.createElement(s.a,{source:"content_no"})),oe=function(e){return o.a.createElement(u.a,e,re)},ce=function(e){return o.a.createElement(d.a,e,re)},ie=function(e){return o.a.createElement(f.b,e,o.a.createElement(m.a,{rowClick:"edit"},o.a.createElement(p.a,{source:"name"})))},le=o.a.createElement(l.a,null,o.a.createElement(s.a,{source:"name"}),o.a.createElement(ne,null),o.a.createElement(E.a,{label:"audio 1",source:"audio1",reference:"file"},o.a.createElement(h.a,{optionText:"filename"})),o.a.createElement(E.a,{label:"audio 2",source:"audio2",reference:"file"},o.a.createElement(h.a,{optionText:"filename"})),o.a.createElement(E.a,{label:"audio 3",source:"audio3",reference:"file"},o.a.createElement(h.a,{optionText:"filename"}))),se=function(e){return o.a.createElement(u.a,e,le)},ue=function(e){return o.a.createElement(d.a,e,le)},de=function(e){return o.a.createElement(f.b,Object.assign({},e,{bulkActionButtons:!1}),o.a.createElement(m.a,{rowClick:"edit"},o.a.createElement(p.a,{source:"filename"})))},fe=function(e){return o.a.createElement(b.a,e,o.a.createElement(g.a,{undoable:!1,record:e.data}))},me=function(e){return o.a.createElement(u.a,e,o.a.createElement(l.a,{toolbar:o.a.createElement(fe,null)},o.a.createElement(p.a,{source:"filename"}),o.a.createElement(p.a,{source:"url"})))},pe=function(e){return o.a.createElement(d.a,e,o.a.createElement(l.a,null,o.a.createElement(v.a,{source:"files",multiple:!1},o.a.createElement(k.a,{source:"filename",title:"title"}))))},Ee=function(){return o.a.createElement(O.a,{dataProvider:N},o.a.createElement(j.a,{name:"translation",list:w.a,edit:oe,create:ce}),o.a.createElement(j.a,{name:"place",list:ie,edit:se,create:ue}),o.a.createElement(j.a,{name:"file",list:de,edit:me,create:pe}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[529,1,2]]]);
//# sourceMappingURL=main.18da581b.chunk.js.map
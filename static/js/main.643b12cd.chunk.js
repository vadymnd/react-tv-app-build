(this.webpackJsonptv_app=this.webpackJsonptv_app||[]).push([[0],{124:function(e,t,A){},125:function(e,t,A){"use strict";A.r(t);var a=A(1),c=A.n(a),n=A(18),i=A.n(n),s=(A(61),A(10)),l=A(50),o=A.n(l),m=A(41),r=A.n(m),u=A(54);A(62);Object(m.registerLocale)("ru",u.a);var p=function(e){var t=e.setScreen,A=e.isMainScreen,n=e.setApiUrl,i=e.setStringDate,l=Object(a.useState)(new Date),m=Object(s.a)(l,2),u=m[0],p=m[1],b=function(e){p(e),function(e){var t=e.toLocaleDateString().split("."),A=t[0],a=t[1],c=t[2];n("https://api.tvmaze.com/schedule?country=US&date=".concat(c,"-").concat(a,"-").concat(A)),i("".concat(A," ").concat(["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][a-1]," ").concat(c))}(e),setTimeout((function(){t(!A)}),100)};return c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"main__container"},c.a.createElement("img",{src:o.a,className:"main__container__img",alt:""}),c.a.createElement("span",{className:"main__container__text"},"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0441\u0435\u0440\u0438\u0430\u043b\u043e\u0432, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u043c\u0435\u0441\u044f\u0446 \u0438 \u0434\u0435\u043d\u044c.")),c.a.createElement(r.a,{selected:u,onChange:function(e){b(e)},locale:"ru",dateFormatCalendar:"LLLL",inline:!0}))},b=A(55),d=A(53),h=A.n(d),N=A(44),E=A.n(N),I=function(e){var t=e.data;return Object.keys(t).map((function(e){return c.a.createElement("li",{className:"episodes__list__item",key:t[e].id},c.a.createElement(h.a,{height:200,offset:100},c.a.createElement(b.a,{className:"episodes__list__item__img",small:t[e].show.image?t[e].show.image.medium:E.a,large:t[e].show.image?t[e].show.image.original:E.a,alt:"",hideDownload:"true",hideZoom:"true",showRotate:"false"})),c.a.createElement("a",{href:t[e].url,className:"episodes__list__item__text"},c.a.createElement("p",{className:"episodes__list__item__text__title"},t[e].show.name),c.a.createElement("p",{className:"episodes__list__item__text__year"},function(e){return"Ended"===t[e].show.status?t[e].show.premiered.split("-")[0]:t[e].show.premiered.split("-")[0]+" \u2013 ..."}(e)),c.a.createElement("p",{className:"episodes__list__item__text__season"},"\u0421\u0435\u0437\u043e\u043d: ",JSON.stringify(t[e].season)," \u042d\u043f\u0438\u0437\u043e\u0434: ",function(e){return null==t[e].number?"Special":t[e].number}(e))))}))},v=function(e,t){var A=Object(a.useState)(!1),c=Object(s.a)(A,2),n=c[0],i=c[1];console.log(n);Object(a.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return i(e)}))}),[])},Z=function(e){var t=e.apiUrl,A=e.stringDate,n=Object(a.useState)({}),i=Object(s.a)(n,2),l=i[0],o=i[1];return v(t,o),c.a.createElement("div",{className:"episodes"},c.a.createElement("div",{className:"episodes__date"},A),c.a.createElement("ul",{className:"episodes__list"},c.a.createElement(I,{data:l})))};A(124);var M=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),A=t[0],n=t[1],i=Object(a.useState)("20 \u0424\u0435\u0432\u0440\u0430\u043b\u044f 2020"),l=Object(s.a)(i,2),o=l[0],m=l[1],r=Object(a.useState)("https://api.tvmaze.com/schedule?country=US&date=2020-02-20"),u=Object(s.a)(r,2),b=u[0],d=u[1];return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"header"},"Super Film",A?null:c.a.createElement("button",{className:"header__back-btn",onClick:function(){return n(!A)}})),A?c.a.createElement(p,{isMainScreen:A,setScreen:n,setApiUrl:d,setStringDate:m}):c.a.createElement(Z,{apiUrl:b,stringDate:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},44:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFF2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTEyLTEzVDAwOjQ5OjI2KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0xMi0xM1QwMDo1ODozMSswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0xMi0xM1QwMDo1ODozMSswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjEiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEb3QgR2FpbiAxNSUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDk1MDk1ZjktNGM3Yi0xODQyLThmOWEtZDYzMTVlNjY0NWY3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA5NTA5NWY5LTRjN2ItMTg0Mi04ZjlhLWQ2MzE1ZTY2NDVmNyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjA5NTA5NWY5LTRjN2ItMTg0Mi04ZjlhLWQ2MzE1ZTY2NDVmNyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDk1MDk1ZjktNGM3Yi0xODQyLThmOWEtZDYzMTVlNjY0NWY3IiBzdEV2dDp3aGVuPSIyMDE5LTEyLTEzVDAwOjQ5OjI2KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OP/zyAAAAOtJREFUeNrt3UEKgDAMBMD9/yd9Sr2JULAgklod9ujBOqckNJiW62ztSLq0LinI+J2np6PvCwAAAJ4EmBEAAADUACwZAAAAAAAAAEAJQIoyDWB0lDkAeU8pDAAAAAAAAAAA8FmA35fCAAAAAAAAAAAAZoJ6AQAAAAAAAAAAADNBvQAAAAAAAAAAAAAAQ9H3LMwEAAAAAAAAAADAzhAAvQAAAAAAAAAAAAAAAG6IAAAAAAAAAAAAqAQBAAAAAAAAAAAAANALAAAAAAAAAAAAAHBTFAAAAAAAAABgZwjAcj9dBQAAAAAAAADcBdgB8/Oa0vWL8IIAAAAASUVORK5CYII="},50:function(e,t,A){e.exports=A.p+"static/media/tv.3b0dace7.png"},56:function(e,t,A){e.exports=A(125)},61:function(e,t,A){}},[[56,1,2]]]);
//# sourceMappingURL=main.643b12cd.chunk.js.map
// import View from 'views/view';
// import View from 'views/daftar-naskah.js';
!function(e,t,a,n){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.calendar=function(t){var o,r=e(this),i=r.selector||"",l=(new Date).getTime(),d=[],s=arguments[0],u="string"==typeof s,p=[].slice.call(arguments,1);return r.each(function(){var r,c,f=e.isPlainObject(t)?e.extend(!0,{},e.fn.calendar.settings,t):e.extend({},e.fn.calendar.settings),h=f.className,g=f.namespace,m=f.selector,v=f.formatter,y=f.parser,D=f.metadata,b=f.error,C="."+g,M="module-"+g,w=e(this),x=w.find(m.input),k=w.find(m.popup),T=w.find(m.activator),F=this,H=w.data(M),O=!1,I=!1;c={initialize:function(){c.debug("Initializing calendar for",F),r=c.get.isTouch(),c.setup.popup(),c.setup.inline(),c.setup.input(),c.setup.date(),c.create.calendar(),c.bind.events(),c.instantiate()},instantiate:function(){c.verbose("Storing instance of calendar"),H=c,w.data(M,H)},destroy:function(){c.verbose("Destroying previous calendar for",F),w.removeData(M),c.unbind.events()},setup:{popup:function(){if(!f.inline&&(T.length||(T=w.children().first(),T.length))){if(e.fn.popup===n)return void c.error(b.popup);k.length||(k=e("<div/>").addClass(h.popup).prependTo(T.parent())),k.addClass(h.calendar);var t=f.onVisible,a=f.onHidden;x.length||(k.attr("tabindex","0"),t=function(){return c.focus(),f.onVisible.apply(k,arguments)},a=function(){return c.blur(),f.onHidden.apply(k,arguments)});var o=function(){return c.set.focusDate(c.get.date()),c.set.mode(f.startMode),f.onShow.apply(k,arguments)},r=f.on||(x.length?"focus":"click"),i=e.extend({},f.popupOptions,{popup:k,on:r,hoverable:"hover"===r,onShow:o,onVisible:t,onHide:f.onHide,onHidden:a});c.popup(i)}},inline:function(){T.length&&!f.inline||(k=e("<div/>").addClass(h.calendar).appendTo(w),x.length||k.attr("tabindex","0"))},input:function(){f.touchReadonly&&x.length&&r&&x.prop("readonly",!0)},date:function(){if(x.length){var e=x.val(),t=y.date(e,f);c.set.date(t,f.formatInput,!1)}}},create:{calendar:function(){var t,a,n,o,r,i,l,d=c.get.mode(),s=new Date,u=c.get.date(),p=c.get.focusDate(),g=p||u||f.initialDate||s;g=c.helper.dateInRange(g),p||(p=g,c.set.focusDate(p,!1,!1));var m="year"===d,y="month"===d,b="day"===d,C="hour"===d,M="minute"===d,w="time"===f.type,x=Math.max(f.multiMonth,1),T=b?c.get.monthOffset():0,F=g.getMinutes(),H=g.getHours(),O=g.getDate(),I=g.getMonth()+T,N=g.getFullYear(),Y=b?7:C?4:3,E=7===Y?"seven":4===Y?"four":"three",R=b||C?6:4,j=b?x:1,A=k;for(A.empty(),j>1&&(l=e("<div/>").addClass(h.grid).appendTo(A)),o=0;o<j;o++){if(j>1){var S=e("<div/>").addClass(h.column).appendTo(l);A=S}var V=I+o,P=(new Date(N,V,1).getDay()-f.firstDayOfWeek%7+7)%7;if(!f.constantHeight&&b){var q=new Date(N,V+1,0).getDate()+P;R=Math.ceil(q/7)}var K=m?10:y?1:0,J=b?1:0,W=C||M?1:0,z=C||M?O:1,L=new Date(N-K,V-J,z-W,H),B=new Date(N+K,V+J,z+W,H),U=m?new Date(10*Math.ceil(N/10)-9,0,0):y?new Date(N,0,0):b?new Date(N,V,0):new Date(N,V,O,(-1)),Q=m?new Date(10*Math.ceil(N/10)+1,0,1):y?new Date(N+1,0,1):b?new Date(N,V+1,1):new Date(N,V,O+1),Z=e("<table/>").addClass(h.table).addClass(E+" column").addClass(d).appendTo(A);if(!w){var G=e("<thead/>").appendTo(Z);r=e("<tr/>").appendTo(G),i=e("<th/>").attr("colspan",""+Y).appendTo(r);var X=m||y?new Date(N,0,1):b?new Date(N,V,1):new Date(N,V,O,H,F),$=e("<span/>").addClass(h.link).appendTo(i);$.text(v.header(X,d,f));var _=y?f.disableYear?"day":"year":b?f.disableMonth?"year":"month":"day";if($.data(D.mode,_),0===o){var ee=e("<span/>").addClass(h.prev).appendTo(i);ee.data(D.focusDate,L),ee.toggleClass(h.disabledCell,!c.helper.isDateInRange(U,d)),e("<i/>").addClass(h.prevIcon).appendTo(ee)}if(o===j-1){var te=e("<span/>").addClass(h.next).appendTo(i);te.data(D.focusDate,B),te.toggleClass(h.disabledCell,!c.helper.isDateInRange(Q,d)),e("<i/>").addClass(h.nextIcon).appendTo(te)}if(b)for(r=e("<tr/>").appendTo(G),t=0;t<Y;t++)i=e("<th/>").appendTo(r),i.text(v.dayColumnHeader((t+f.firstDayOfWeek)%7,f))}var ae=e("<tbody/>").appendTo(Z);for(t=m?10*Math.ceil(N/10)-9:b?1-P:0,a=0;a<R;a++)for(r=e("<tr/>").appendTo(ae),n=0;n<Y;n++,t++){var ne=m?new Date(t,V,1,H,F):y?new Date(N,t,1,H,F):b?new Date(N,V,t,H,F):C?new Date(N,V,O,t):new Date(N,V,O,H,5*t),oe=m?t:y?f.text.monthsShort[t]:b?ne.getDate():v.time(ne,f,!0);i=e("<td/>").addClass(h.cell).appendTo(r),i.text(oe),i.data(D.date,ne);var re=b&&ne.getMonth()!==(V+12)%12,ie=re||!c.helper.isDateInRange(ne,d)||f.isDisabled(ne,d),le=c.helper.dateEqual(ne,u,d),de=c.helper.dateEqual(ne,s,d);i.toggleClass(h.adjacentCell,re),i.toggleClass(h.disabledCell,ie),i.toggleClass(h.activeCell,le&&!re),C||M||i.toggleClass(h.todayCell,!re&&de);var se={mode:d,adjacent:re,disabled:ie,active:le,today:de};v.cell(i,ne,se),c.helper.dateEqual(ne,p,d)&&c.set.focusDate(ne,!1,!1)}if(f.today){var ue=e("<tr/>").appendTo(ae),pe=e("<td/>").attr("colspan",""+Y).addClass(h.today).appendTo(ue);pe.text(v.today(f)),pe.data(D.date,s)}c.update.focus(!1,Z)}}},update:{focus:function(t,a){a=a||k;var n=c.get.mode(),o=c.get.date(),i=c.get.focusDate(),l=c.get.startDate(),d=c.get.endDate(),s=(t?i:null)||o||(r?null:i);a.find("td").each(function(){var t=e(this),a=t.data(D.date);if(a){var o=t.hasClass(h.disabledCell),u=t.hasClass(h.activeCell),p=t.hasClass(h.adjacentCell),f=c.helper.dateEqual(a,i,n),g=!!s&&(!!l&&c.helper.isDateInRange(a,n,l,s)||!!d&&c.helper.isDateInRange(a,n,s,d));t.toggleClass(h.focusCell,f&&(!r||O)&&!p),t.toggleClass(h.rangeCell,g&&!u&&!o)}})}},refresh:function(){c.create.calendar()},bind:{events:function(){k.on("mousedown"+C,c.event.mousedown),k.on("touchstart"+C,c.event.mousedown),k.on("mouseup"+C,c.event.mouseup),k.on("touchend"+C,c.event.mouseup),k.on("mouseover"+C,c.event.mouseover),x.length?(x.on("input"+C,c.event.inputChange),x.on("focus"+C,c.event.inputFocus),x.on("blur"+C,c.event.inputBlur),x.on("click"+C,c.event.inputClick),x.on("keydown"+C,c.event.keydown)):k.on("keydown"+C,c.event.keydown)}},unbind:{events:function(){k.off(C),x.length&&x.off(C)}},event:{mouseover:function(t){var a=e(t.target),n=a.data(D.date),o=1===t.buttons;n&&c.set.focusDate(n,!1,!0,o)},mousedown:function(t){x.length&&t.preventDefault(),O=t.type.indexOf("touch")>=0;var a=e(t.target),n=a.data(D.date);n&&c.set.focusDate(n,!1,!0,!0)},mouseup:function(t){c.focus(),t.preventDefault(),t.stopPropagation(),O=!1;var a=e(t.target),n=a.parent();(n.data(D.date)||n.data(D.focusDate)||n.data(D.mode))&&(a=n);var o=a.data(D.date),r=a.data(D.focusDate),i=a.data(D.mode);if(o){var l=a.hasClass(h.today);c.selectDate(o,l)}else r?c.set.focusDate(r):i&&c.set.mode(i)},keydown:function(e){if(27!==e.keyCode&&9!==e.keyCode||c.popup("hide"),c.popup("is visible"))if(37===e.keyCode||38===e.keyCode||39===e.keyCode||40===e.keyCode){var t=c.get.mode(),a="day"===t?7:"hour"===t?4:3,n=37===e.keyCode?-1:38===e.keyCode?-a:39==e.keyCode?1:a;n*="minute"===t?5:1;var o=c.get.focusDate()||c.get.date()||new Date,r=o.getFullYear()+("year"===t?n:0),i=o.getMonth()+("month"===t?n:0),l=o.getDate()+("day"===t?n:0),d=o.getHours()+("hour"===t?n:0),s=o.getMinutes()+("minute"===t?n:0),u=new Date(r,i,l,d,s);"time"===f.type&&(u=c.helper.mergeDateTime(o,u)),c.helper.isDateInRange(u,t)&&c.set.focusDate(u)}else if(13===e.keyCode){var t=c.get.mode(),p=c.get.focusDate();p&&!f.isDisabled(p,t)&&c.selectDate(p),e.preventDefault(),e.stopPropagation()}38!==e.keyCode&&40!==e.keyCode||(e.preventDefault(),c.popup("show"))},inputChange:function(){var e=x.val(),t=y.date(e,f);c.set.date(t,!1)},inputFocus:function(){k.addClass(h.active)},inputBlur:function(){if(k.removeClass(h.active),f.formatInput){var e=c.get.date(),t=v.datetime(e,f);x.val(t)}},inputClick:function(){c.popup("show")}},get:{date:function(){return w.data(D.date)||null},focusDate:function(){return w.data(D.focusDate)||null},startDate:function(){var e=c.get.calendarModule(f.startCalendar);return(e?e.get.date():w.data(D.startDate))||null},endDate:function(){var e=c.get.calendarModule(f.endCalendar);return(e?e.get.date():w.data(D.endDate))||null},monthOffset:function(){return w.data(D.monthOffset)||0},mode:function(){var t=w.data(D.mode)||f.startMode,a=c.get.validModes();return e.inArray(t,a)>=0?t:"time"===f.type?"hour":"month"===f.type?"month":"year"===f.type?"year":"day"},validModes:function(){var e=[];return"time"!==f.type&&(f.disableYear&&"year"!==f.type||e.push("year"),(!f.disableMonth&&"year"!==f.type||"month"===f.type)&&e.push("month"),f.type.indexOf("date")>=0&&e.push("day")),f.type.indexOf("time")>=0&&(e.push("hour"),f.disableMinute||e.push("minute")),e},isTouch:function(){try{return a.createEvent("TouchEvent"),!0}catch(e){return!1}},calendarModule:function(t){return t?(t instanceof e||(t=w.parent().children(t).first()),t.data(M)):null}},set:{date:function(e,t,a){t=t!==!1,a=a!==!1,e=c.helper.sanitiseDate(e),e=c.helper.dateInRange(e);var o=c.get.mode(),r=v.datetime(e,f);if(a&&f.onChange.call(F,e,r,o)===!1)return!1;if(c.set.focusDate(e),f.isDisabled(e,o))return!1;var i=c.get.endDate();i&&e&&e>i&&c.set.endDate(n),c.set.dataKeyValue(D.date,e),t&&x.length&&x.val(r)},startDate:function(e,t){e=c.helper.sanitiseDate(e);var a=c.get.calendarModule(f.startCalendar);a&&a.set.date(e),c.set.dataKeyValue(D.startDate,e,t)},endDate:function(e,t){e=c.helper.sanitiseDate(e);var a=c.get.calendarModule(f.endCalendar);a&&a.set.date(e),c.set.dataKeyValue(D.endDate,e,t)},focusDate:function(e,t,a,n){e=c.helper.sanitiseDate(e),e=c.helper.dateInRange(e);var o="day"===c.get.mode(),r=c.get.focusDate();if(o&&e&&r){var i=e.getFullYear()-r.getFullYear(),l=12*i+e.getMonth()-r.getMonth();if(l){var d=c.get.monthOffset()-l;c.set.monthOffset(d,!1)}}var s=c.set.dataKeyValue(D.focusDate,e,t);a=a!==!1&&s&&t===!1||I!=n,I=n,a&&c.update.focus(n)},monthOffset:function(e,t){var a=Math.max(f.multiMonth,1);e=Math.max(1-a,Math.min(0,e)),c.set.dataKeyValue(D.monthOffset,e,t)},mode:function(e,t){c.set.dataKeyValue(D.mode,e,t)},dataKeyValue:function(e,t,a){var n=w.data(e),o=n===t||n<=t&&n>=t;return t?w.data(e,t):w.removeData(e),a=a!==!1&&!o,a&&c.create.calendar(),!o}},selectDate:function(e,t){var a=c.get.mode(),n=t||"minute"===a||f.disableMinute&&"hour"===a||"date"===f.type&&"day"===a||"month"===f.type&&"month"===a||"year"===f.type&&"year"===a;if(n){var o=c.set.date(e)===!1;if(!o&&f.closable){c.popup("hide");var r=c.get.calendarModule(f.endCalendar);r&&(r.popup("show"),r.focus())}}else{var i="year"===a?f.disableMonth?"day":"month":"month"===a?"day":"day"===a?"hour":"minute";c.set.mode(i),"hour"===a||"day"===a&&c.get.date()?c.set.date(e):c.set.focusDate(e)}},changeDate:function(e){c.set.date(e)},clear:function(){c.set.date(n)},popup:function(){return T.popup.apply(T,arguments)},focus:function(){x.length?x.focus():k.focus()},blur:function(){x.length?x.blur():k.blur()},helper:{sanitiseDate:function(e){return e?(e instanceof Date||(e=y.date(""+e,f)),isNaN(e.getTime())?n:e):n},dateDiff:function(e,t,a){a=a||"day";var n="time"===f.type,o="year"===a,r=o||"month"===a,i="minute"===a,l=i||"hour"===a;return e=new Date(n?2e3:e.getFullYear(),n?0:o?0:e.getMonth(),n?1:r?1:e.getDate(),l?e.getHours():0,i?5*Math.floor(e.getMinutes()/5):0),t=new Date(n?2e3:t.getFullYear(),n?0:o?0:t.getMonth(),n?1:r?1:t.getDate(),l?t.getHours():0,i?5*Math.floor(t.getMinutes()/5):0),t.getTime()-e.getTime()},dateEqual:function(e,t,a){return!!e&&!!t&&0===c.helper.dateDiff(e,t,a)},isDateInRange:function(e,t,a,n){if(!a&&!n){var o=c.get.startDate();a=o&&f.minDate?new Date(Math.max(o,f.minDate)):o||f.minDate,n=f.maxDate}return a=a&&new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),5*Math.ceil(a.getMinutes()/5)),!(!e||a&&c.helper.dateDiff(e,a,t)>0||n&&c.helper.dateDiff(n,e,t)>0)},dateInRange:function(e,t,a){if(!t&&!a){var n=c.get.startDate();t=n&&f.minDate?new Date(Math.max(n,f.minDate)):n||f.minDate,a=f.maxDate}t=t&&new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),5*Math.ceil(t.getMinutes()/5));var o="time"===f.type;return e?t&&c.helper.dateDiff(e,t,"minute")>0?o?c.helper.mergeDateTime(e,t):t:a&&c.helper.dateDiff(a,e,"minute")>0?o?c.helper.mergeDateTime(e,a):a:e:e},mergeDateTime:function(e,t){return e&&t?new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes()):t}},setting:function(t,a){if(c.debug("Changing setting",t,a),e.isPlainObject(t))e.extend(!0,f,t);else{if(a===n)return f[t];e.isPlainObject(f[t])?e.extend(!0,f[t],a):f[t]=a}},internal:function(t,a){return c.debug("Changing internal",t,a),a===n?c[t]:void(e.isPlainObject(t)?e.extend(!0,c,t):c[t]=a)},debug:function(){!f.silent&&f.debug&&(f.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,f.name+":"),c.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),c.verbose.apply(console,arguments)))},error:function(){f.silent||(c.error=Function.prototype.bind.call(console.error,console,f.name+":"),c.error.apply(console,arguments))},performance:{log:function(e){var t,a,n;f.performance&&(t=(new Date).getTime(),n=l||t,a=t-n,l=t,d.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:F,"Execution Time":a})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,500)},display:function(){var t=f.name+":",a=0;l=!1,clearTimeout(c.performance.timer),e.each(d,function(e,t){a+=t["Execution Time"]}),t+=" "+a+"ms",i&&(t+=" '"+i+"'"),(console.group!==n||console.table!==n)&&d.length>0&&(console.groupCollapsed(t),console.table?console.table(d):e.each(d,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),d=[]}},invoke:function(t,a,r){var i,l,d,s=H;return a=a||p,r=F||r,"string"==typeof t&&s!==n&&(t=t.split(/[\. ]/),i=t.length-1,e.each(t,function(a,o){var r=a!=i?o+t[a+1].charAt(0).toUpperCase()+t[a+1].slice(1):t;if(e.isPlainObject(s[r])&&a!=i)s=s[r];else{if(s[r]!==n)return l=s[r],!1;if(!e.isPlainObject(s[o])||a==i)return s[o]!==n?(l=s[o],!1):(c.error(b.method,t),!1);s=s[o]}})),e.isFunction(l)?d=l.apply(r,a):l!==n&&(d=l),e.isArray(o)?o.push(d):o!==n?o=[o,d]:d!==n&&(o=d),l}},u?(H===n&&c.initialize(),c.invoke(s)):(H!==n&&H.invoke("destroy"),c.initialize())}),o!==n?o:this},e.fn.calendar.settings={name:"Calendar",namespace:"calendar",silent:!1,debug:!1,verbose:!1,performance:!1,type:"datetime",firstDayOfWeek:0,constantHeight:!0,today:!1,closable:!0,monthFirst:!0,touchReadonly:!0,inline:!1,on:null,initialDate:null,startMode:!1,minDate:null,maxDate:null,ampm:!0,disableYear:!1,disableMonth:!1,disableMinute:!1,formatInput:!0,startCalendar:null,endCalendar:null,multiMonth:1,popupOptions:{position:"bottom left",lastResort:"bottom left",prefer:"opposite",hideOnScroll:!1},text:{days:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",now:"Now",am:"AM",pm:"PM"},formatter:{header:function(e,t,a){return"year"===t?a.formatter.yearHeader(e,a):"month"===t?a.formatter.monthHeader(e,a):"day"===t?a.formatter.dayHeader(e,a):"hour"===t?a.formatter.hourHeader(e,a):a.formatter.minuteHeader(e,a)},yearHeader:function(e,t){var a=10*Math.ceil(e.getFullYear()/10);return a-9+" - "+(a+2)},monthHeader:function(e,t){return e.getFullYear()},dayHeader:function(e,t){var a=t.text.months[e.getMonth()],n=e.getFullYear();return a+" "+n},hourHeader:function(e,t){return t.formatter.date(e,t)},minuteHeader:function(e,t){return t.formatter.date(e,t)},dayColumnHeader:function(e,t){return t.text.days[e]},datetime:function(e,t){if(!e)return"";var a="time"===t.type?"":t.formatter.date(e,t),n=t.type.indexOf("time")<0?"":t.formatter.time(e,t,!1),o="datetime"===t.type?" ":"";return a+o+n},date:function(e,t){if(!e)return"";var a=e.getDate(),n=t.text.months[e.getMonth()],o=e.getFullYear();return"year"===t.type?o:"month"===t.type?n+" "+o:(t.monthFirst?n+" "+a:a+" "+n)+", "+o},time:function(e,t,a){if(!e)return"";var n=e.getHours(),o=e.getMinutes(),r="";return t.ampm&&(r=" "+(n<12?t.text.am:t.text.pm),n=0===n?12:n>12?n-12:n),n+":"+(o<10?"0":"")+o+r},today:function(e){return"date"===e.type?e.text.today:e.text.now},cell:function(e,t,a){}},parser:{date:function(t,a){if(!t)return null;if(t=(""+t).trim().toLowerCase(),0===t.length)return null;var o,r,i,l=-1,d=-1,s=-1,u=-1,p=-1,c=n,f="time"===a.type,h=a.type.indexOf("time")<0,g=t.split(a.regExp.dateWords),m=t.split(a.regExp.dateNumbers);if(!h)for(c=e.inArray(a.text.am.toLowerCase(),g)>=0||!(e.inArray(a.text.pm.toLowerCase(),g)>=0)&&n,o=0;o<m.length;o++){var v=m[o];if(v.indexOf(":")>=0){if(d<0||l<0){var y=v.split(":");for(i=0;i<Math.min(2,y.length);i++)r=parseInt(y[i]),isNaN(r)&&(r=0),0===i?d=r%24:l=r%60}m.splice(o,1)}}if(!f){for(o=0;o<g.length;o++){var D=g[o];if(!(D.length<=0)){for(D=D.substring(0,Math.min(D.length,3)),r=0;r<a.text.months.length;r++){var b=a.text.months[r];if(b=b.substring(0,Math.min(D.length,Math.min(b.length,3))).toLowerCase(),b===D){u=r+1;break}}if(u>=0)break}}for(o=0;o<m.length;o++)if(r=parseInt(m[o]),!isNaN(r)&&r>59){p=r,m.splice(o,1);break}if(u<0)for(o=0;o<m.length;o++)if(i=o>1||a.monthFirst?o:1===o?0:1,r=parseInt(m[i]),!isNaN(r)&&1<=r&&r<=12){u=r,m.splice(i,1);break}for(o=0;o<m.length;o++)if(r=parseInt(m[o]),!isNaN(r)&&1<=r&&r<=31){s=r,m.splice(o,1);break}if(p<0)for(o=m.length-1;o>=0;o--)if(r=parseInt(m[o]),!isNaN(r)){r<99&&(r+=2e3),p=r,m.splice(o,1);break}}if(!h){if(d<0)for(o=0;o<m.length;o++)if(r=parseInt(m[o]),!isNaN(r)&&0<=r&&r<=23){d=r,m.splice(o,1);break}if(l<0)for(o=0;o<m.length;o++)if(r=parseInt(m[o]),!isNaN(r)&&0<=r&&r<=59){l=r,m.splice(o,1);break}}if(l<0&&d<0&&s<0&&u<0&&p<0)return null;l<0&&(l=0),d<0&&(d=0),s<0&&(s=1),u<0&&(u=1),p<0&&(p=(new Date).getFullYear()),c!==n&&(c?12===d&&(d=0):d<12&&(d+=12));var C=new Date(p,u-1,s,d,l);return C.getMonth()===u-1&&C.getFullYear()===p||(C=new Date(p,u,0,d,l)),isNaN(C.getTime())?null:C}},onChange:function(e,t,a){return!0},onShow:function(){},onVisible:function(){},onHide:function(){},onHidden:function(){},isDisabled:function(e,t){return!1},selector:{popup:".ui.popup",input:"input",activator:"input"},regExp:{dateWords:/[^A-Za-z\u00C0-\u024F]+/g,dateNumbers:/[^\d:]+/g},error:{popup:"UI Popup, a required component is not included in this page",method:"The method you called is not defined."},className:{calendar:"calendar",active:"active",popup:"ui popup",grid:"ui equal width grid",column:"column",table:"ui celled center aligned unstackable table",prev:"prev link",next:"next link",prevIcon:"chevron left icon",nextIcon:"chevron right icon",link:"link",cell:"link",disabledCell:"disabled",adjacentCell:"adjacent",activeCell:"active",rangeCell:"range",focusCell:"focus",todayCell:"today",today:"today link"},metadata:{date:"date",focusDate:"focusDate",startDate:"startDate",endDate:"endDate",mode:"mode",monthOffset:"monthOffset"}}}(jQuery,window,document);


var naskah = {
	data: false,
	getData: function() {
		var data = {
			"naskah": [
				{
					"id": 1,
					"title": "Naskah Akademik RUU Tentang Pajak Pertambahan Nilai Barang Dan Jasa",
					"description": "Naskah akdemik ini merupakan naskah akademik untuk RUU tentang pajak pertambahan nilai barang dan jasa. Semakin banyaknya barang dan jasa yang ada di Indonesia namun banyak diantara mereka yang tidak membayar pajak ",
					"moreDescription": "pertambahan nilai barang dan jasa. Semakin banyaknya barang dan jasa yang ada di Indonesia namun banyak diantara mereka yang tidak membayar pajak ini merupakan naskah akademik untuk RUU tentang pajak pertambahan nilai barang.",
					"status": "teregister",
					"writeText": false,
					"more": false,
					"tanggapan": [
						{
							"nama": "David Purba",
							"date": "Senin, 1 Mei 2017, 16:41",
							"tanggapan": "dalam menyelesaikan masalah perpajakan untuk pertambahan nilai barand dan jasa, di perlukan kerja sama seluruh lapisan elemen masyarakat. Pemerintah dalam hal ini berperan penting untuk mensosialisasikan nilai pajak dalam setiap barang dan jasa"
						},
						{
							"nama": "Kementrian Keuangan",
							"date": "Rabu, 9 Maret 2017, 19:11",
							"tanggapan": "dalam menyelesaikan masalah perpajakan untuk pertambahan nilai barand dan jasa, di perlukan kerja sama seluruh lapisan elemen masyarakat. Pemerintah dalam hal ini berperan penting untuk mensosialisasikan nilai pajak dalam setiap barang dan jasa"
						}
					],
					"pendukung": ["word", "excel", "pdf"]
				},
				{
					"id": 2,
					"title": "Naskah Akademik RUU Tentang Kepalangmerahan",
					"description": "Naskah akdemik ini merupakan naskah akademik untuk RUU tentang pajak pertambahan nilai barang dan jasa. Semakin banyaknya barang dan jasa yang ada di Indonesia namun banyak diantara mereka yang tidak membayar pajak ",
					"moreDescription": "pertambahan nilai barang dan jasa. Semakin banyaknya barang dan jasa yang ada di Indonesia namun banyak diantara mereka yang tidak membayar pajak ini merupakan naskah akademik untuk RUU tentang pajak pertambahan nilai barang.",
					"status": "perbaikan",
					"writeText": false,
					"more": false,
					"tanggapan": [
						{
							"nama": "David Purba",
							"date": "Senin, 1 Mei 2017, 16:41",
							"tanggapan": "dalam menyelesaikan masalah perpajakan untuk pertambahan nilai barand dan jasa, di perlukan kerja sama seluruh lapisan elemen masyarakat. Pemerintah dalam hal ini berperan penting untuk mensosialisasikan nilai pajak dalam setiap barang dan jasa"
						},
						{
							"nama": "Kementrian Keuangan",
							"date": "Rabu, 9 Maret 2017, 19:11",
							"tanggapan": "dalam menyelesaikan masalah perpajakan untuk pertambahan nilai barand dan jasa, di perlukan kerja sama seluruh lapisan elemen masyarakat. Pemerintah dalam hal ini berperan penting untuk mensosialisasikan nilai pajak dalam setiap barang dan jasa"
						}
					],
					"pendukung": ["word", "excel", "pdf"]
				},
				{
					"id": 3,
					"title": "Naskah Akademik RUU Tentang Pajak Pertambahan Nilai Barang Dan Jasa",
					"description": "Naskah akdemik ini merupakan naskah akademik untuk RUU tentang pajak pertambahan nilai barang dan jasa. Semakin banyaknya barang dan jasa yang ada di Indonesia namun banyak diantara mereka yang tidak membayar pajak ",
					"moreDescription": "pertambahan nilai barang dan jasa. Semakin banyaknya barang dan jasa yang ada di Indonesia namun banyak diantara mereka yang tidak membayar pajak ini merupakan naskah akademik untuk RUU tentang pajak pertambahan nilai barang.",
					"status": "penyelarasan",
					"writeText": false,
					"more": false,
					"tanggapan": [
						{
							"nama": "David Purba",
							"date": "Senin, 1 Mei 2017, 16:41",
							"tanggapan": "dalam menyelesaikan masalah perpajakan untuk pertambahan nilai barand dan jasa, di perlukan kerja sama seluruh lapisan elemen masyarakat. Pemerintah dalam hal ini berperan penting untuk mensosialisasikan nilai pajak dalam setiap barang dan jasa"
						},
						{
							"nama": "Kementrian Keuangan",
							"date": "Rabu, 9 Maret 2017, 19:11",
							"tanggapan": "dalam menyelesaikan masalah perpajakan untuk pertambahan nilai barand dan jasa, di perlukan kerja sama seluruh lapisan elemen masyarakat. Pemerintah dalam hal ini berperan penting untuk mensosialisasikan nilai pajak dalam setiap barang dan jasa"
						}
					],
					"pendukung": ["word", "excel", "pdf"]
				}
			]
		}
		localStorage.setItem('naskah', JSON.stringify(data));
		// var data;
		// $.getJSON( "data/naskah.json", function( data ) {
		//   if(!localStorage.getItem('naskah')) {
		// 		localStorage.setItem('naskah', JSON.stringify(data));
		// 	}
		// });
	},
};

naskah.getData();

var loginModule = {
	users: false,
	error: true,
	init: function() {
		this.checkLogin();
		this.getData();
		this.cacheDom();
		this.render();
		this.bindEvents();
	},
	cacheDom: function() {
		this.$login = $('#login');
		this.$username = this.$login.find('input[type="text"]');
		this.$password = this.$login.find('input[type="password"]');
		this.$button = this.$login.find('button');
		this.$nameLabel = $('#username-label');
		this.$logout = $('#logout');
		this.$userControl = $('#user-control');
		this.$userExist = $('#user-exist');
		this.$userUnexist = $('#user-unexist');

		this.$nameProfile = $('#name-profile');
		this.$usernameProfile = $('#username-profile');

	},
	bindEvents: function() {
		this.$button.on('click', this.loginAction.bind(this));
		this.$logout.on('click', this.logout.bind(this));
		this.$login.on('keypress', 'input', function(e) {
			if(e.keyCode===13) {
				this.loginAction();
			}
		}.bind(this));
	},
	getData: function() {
		var data = {
			"users": [
				{
					"id": 1,
					"username": "pariwisata",
					"name": "Kementriawan Pariwisata",
					"dept": "user",
					"password": "secret"
				},
				{
					"id": 2,
					"username": "staff",
					"name": "Administrator BPHN",
					"dept": "staff",
					"password": "secret"
				},
				{
					"id": 3,
					"username": "kemenkeu",
					"name": "Kementrian Keuangan",
					"dept": "user",
					"password": "secret"
				},
				{
					"id": 4,
					"username": "perikanan",
					"name": "Kementrian Perikanan",
					"dept": "user",
					"password": "secret"
				},
				{
					"id": 5,
					"username": "industri",
					"name": "Kementrian Industri",
					"dept": "user",
					"password": "secret"
				},
				{
					"id": 6,
					"username": "kapusren",
					"name": "Kapusren BPHN",
					"dept": "staff",
					"password": "secret"
				},
				{
					"id": 7,
					"username": "kepala",
					"name": "Kepala BPHN",
					"dept": "staff",
					"password": "secret"
				}
			]
		}
		// $.getJSON( "/data/user.json", function( data ) {
		  this.users = data;
		// });

		// $.ajax({
		// 	dataType: "json",
		//   data: data,
		//   context: this,
		// 	url: '/data/user.json'
		// }).done(function(data){
		// 	this.users = data;
		// });
	},
	loginAction: function(e) {
		this.users.users.forEach(function(item) {
			if(item.username === this.$username.val() & item.password === this.$password.val() ) {
				this.error = false;
				localStorage.setItem('user', JSON.stringify(item));
			}
		}.bind(this));
		var messageError = {
			title: 'Terjadi keasalahan login',
			message: 'Mohon periksa kembali username dan password'
		};
		var messageSuccess = {
			title: 'Selamat datang kembali',
			message: 'Selamat menggunakan aplikasi'
		};
		if(this.error) {
			notificationModule.render('error', messageError);
		} else {
			notificationModule.render('success', messageSuccess);
			setTimeout(this.checkLogin, 500);
		}
		this.storageUser = JSON.parse(localStorage.getItem('user'));
	},
	checkLogin: function() {

		var page = window.location.href.split('/');
		// console.log(!(page[page.length-1] === 'index.html' || page[page.length-1] === 'login.html'))
		// console.log(page[page.length-1]);
		if(!localStorage.getItem('user')) {
			if( !(page[page.length-1] === 'index.html' || page[page.length-1] === 'login.html') ) {
				window.location = "login.html"
			}
		} else {
			if(page[page.length-1] === 'login.html') {
				window.location = "dashboard.html";
			}
		}
	},
	render: function() {
		this.$userExist.hide();
		this.$userUnexist.hide();
		this.storageUser = JSON.parse(localStorage.getItem('user'));
		var dataUser = localStorage.getItem('user');
		if(dataUser) {
			this.$nameLabel.text(this.storageUser.name);
			this.$nameProfile.text(this.storageUser.name);
			this.$usernameProfile.val(this.storageUser.username);
			this.$userExist.show();
		} else {
			this.$userUnexist.show();
		}
	},
	logout: function() {
		localStorage.removeItem('user');
		window.location = 'index.html';
	}

};



loginModule.init();
loginModule.render();


var notificationModule = {
	init: function() {
		this.cacheDom();
	},
	cacheDom: function() {
		this.$notification = $('#notification');
		this.$notificationTitle = $('#title-message');
		this.$notificationContent = $('#content-message');
	},
	render: function(type, message) {
		this.$notification.removeClass('success error');
		this.$notification.css('top', '-500px');
		this.$notificationTitle.text(message.title);
		this.$notificationContent.text(message.message);
		if(type === 'error') {
			this.$notification.addClass('error');
			this.$notification.css('top', '20px');
		} else if (type === 'success') {
			this.$notification.addClass('success');
			this.$notification.css('top', '20px');
		} else {

		}
	}
};

notificationModule.init();

var pratinjauModule = {
	init: function() {
		this.cacheDom();
		this.bindEvents();
	},
	cacheDom: function() {
		this.$pratinjauWrapper = $('#pratinjau-wrapper');
		this.$pratinjauSendWrapper = $('#pratinjau-send-wrapper');

		this.$pratinjau = $('#pratinjau');
		this.$pratinjauSend = $('#pratinjau-send');
		this.$pratinjauClose = $('#pratinjau-close');

	},
	bindEvents: function() {
		this.$pratinjau.on('click', this.open.bind(this));
		this.$pratinjauSend.on('click', this.send.bind(this));
		this.$pratinjauClose.on('click', this.closePra.bind(this));
	},
	open: function() {
		this.$pratinjauWrapper.css('display', 'flex');
	},
	send: function() {
		// close
		this.closePra();
		// open teregister
		this.$pratinjauSendWrapper.css('display', 'flex');
	},
	closePra: function() {
		this.$pratinjauWrapper.css('display', 'none');
	},
};
pratinjauModule.init();

var perbaikanModule = {
	init: function() {
		this.cacheDom();
		this.bindEvents();
	},
	cacheDom: function() {
		this.$perbaikanSendWrapper = $('#perbaikan-send-wrapper');

		this.$perbaikanSend = $('#perbaikan-send');

	},
	bindEvents: function() {
		this.$perbaikanSend.on('click', this.open.bind(this));
	},
	open: function() {
		this.$perbaikanSendWrapper.css('display', 'flex');
	},
	closePra: function() {
		this.$perbaikanWrapper.css('display', 'none');
	},
};
perbaikanModule.init();

var prolegnasModule = {
	ruu: true,
	ruuKt: false,
	init: function() {
		this.cacheDom();
		this.bindEvents();
		this.render();
	},
	cacheDom: function() {
		this.$ruu = $('#prolegnas-ruu');
		this.$ruuKt = $('#prolegnas-ruu-kt');
		this.$ruuBox = $('#daftar-ruu-wrapper');
		this.$ruuKtBox = $('#daftar-ruu-kt-wrapper');
	},
	bindEvents: function() {
		this.$ruu.on('click', this.checkRuu.bind(this));
		this.$ruuKt.on('click', this.checkRuuKt.bind(this));
	},
	checkRuu: function(e) {
		this.ruu = true;
		this.ruuKt = false;
		this.render();
	},
	checkRuuKt: function(e) {
		this.ruu = false;
		this.ruuKt = true;
		this.render();
	},
	render: function() {
		this.$ruuBox.hide();
		this.$ruuKtBox.hide();
		if(this.ruu) {
			this.$ruuBox.show();
		} else {
			this.$ruuKtBox.show();
		}
	}
};

prolegnasModule.init();


var mkInternationalModule = {
	mki: true,
	mkiInt: false,
	init: function() {
		this.cacheDom();
		this.bindEvents();
		this.render();
	},
	cacheDom: function() {
		this.$mki = $('#mkInternational-mk');
		this.$mkiInt = $('#mkInternational-int');
		this.$mkiBox = $('#mkInternational-mk-wrapper');
		this.$mkiIntBox = $('#mkInternational-int-wrapper');
	},
	bindEvents: function() {
		this.$mki.on('click', this.checkmki.bind(this));
		this.$mkiInt.on('click', this.checkmkiInt.bind(this));
	},
	checkmki: function(e) {
		this.mki = true;
		this.mkiInt = false;
		this.render();
	},
	checkmkiInt: function(e) {
		this.mki = false;
		this.mkiInt = true;
		this.render();
	},
	render: function() {
		this.$mkiBox.hide();
		this.$mkiIntBox.hide();
		if(this.mki) {
			this.$mkiBox.show();
		} else {
			this.$mkiIntBox.show();
		}
	}
};

mkInternationalModule.init();

var maxCharacter = {
	maxChar: 500,
	init: function() {
		this.cacheDom();
		this.bindEvents();
		this.run();
	},
	bindEvents: function() {
		this.$maxChar.keypress(this.run.bind(this));
		this.$maxChar.bind("cut copy paste",function(e) {
      e.preventDefault();
   });
	},
	cacheDom: function() {
		this.$maxChar = $('#max-char');
	},
	run: function(e) {
    var tval = this.$maxChar.val(),tlength;
    
    if(tval) {
      tlength = tval.length;
    }
    var remain = parseInt(this.maxChar - tlength);
    $('#count-char').text(tlength + '/' + this.maxChar);
    if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
      this.$maxChar.val((tval).substring(0, tlength - 1));
    }
	}

};



var listNaskah = new Vue({
	el: '#list-naskah',
	data: {
		naskah: JSON.parse(localStorage.getItem('naskah')),
  	no: 1
	}
});

var listNaskahFront = new Vue({
  el: '#list-naskah-front',
  data: {
  	naskah: JSON.parse(localStorage.getItem('naskah')),
  },
  methods: {
  	writeTextFocus: function() {
  		console.log(this.naskah.title);
  	}
  },
  computed: {
  	checkLogin: function() {
  		var login = false;
  		if(localStorage.getItem('user')) {
  			login = true;
  		}
  		return login;
  	}
  }
});


var notificationHeader = new Vue({
	el: '#notification-header',
	data: {
		login: false,
		openNotif: false,
		list: [
			{
				title: "RUU Pajak",
				from: "David Purba",
				since: "3 Hari yang lalu"
			},
			{
				title: "RUU Pajak",
				from: "Kementrian Keuangan",
				since: "3 Hari yang lalu"
			},
			{
				title: "RUU Pajak",
				from: "Kementrian Luar Negeri",
				since: "3 Hari yang lalu"
			}
		]
	},
	methods: function() {
		// console.log('i clicked');
		// this.open = true;
	},
	computed: {
  	checkLogin: function() {
  		var login = false;
  		if(localStorage.getItem('user')) {
  			login = true;
  		}
  		return login;
  	}
  }
});

var mobileMenu = {
	open: false,
	init: function() {
		this.cacheDom();
		this.bindEvents();
	},
	cacheDom: function() {
		this.$trigger = $('#menu-trigger');
		this.$sidebar = $('aside');
	},
	bindEvents: function() {
		this.$trigger.on('click', this.run.bind(this));
	},
	run: function() {
		var size = $('body').width();
		if(size<500) {
			this.open = (this.open) ? false : true; 
		}
		this.toogle();
	},
	toogle: function () {
		if(this.open) {
			this.$sidebar.css('left', '0');
		} else {
			this.$sidebar.css('left', '-100%');
		}
	}
};
mobileMenu.init();
maxCharacter.init();
$('#date').calendar({
	startMode: 'year',
	type: 'date'
});


$('.ui.dropdown').dropdown('hide');
$('.ui.radio.checkbox').checkbox();
$('.ui.checkbox2').checkbox();

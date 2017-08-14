(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/arisjirat/boilerplate-gulp-4/src/src/scripts/main.js":[function(require,module,exports){
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

},{}]},{},["/Users/arisjirat/boilerplate-gulp-4/src/src/scripts/main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gaW1wb3J0IFZpZXcgZnJvbSAndmlld3Mvdmlldyc7XG4vLyBpbXBvcnQgVmlldyBmcm9tICd2aWV3cy9kYWZ0YXItbmFza2FoLmpzJztcbiFmdW5jdGlvbihlLHQsYSxuKXtcInVzZSBzdHJpY3RcIjt0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiB0JiZ0Lk1hdGg9PU1hdGg/dDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5NYXRoPT1NYXRoP3NlbGY6RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLGUuZm4uY2FsZW5kYXI9ZnVuY3Rpb24odCl7dmFyIG8scj1lKHRoaXMpLGk9ci5zZWxlY3Rvcnx8XCJcIixsPShuZXcgRGF0ZSkuZ2V0VGltZSgpLGQ9W10scz1hcmd1bWVudHNbMF0sdT1cInN0cmluZ1wiPT10eXBlb2YgcyxwPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO3JldHVybiByLmVhY2goZnVuY3Rpb24oKXt2YXIgcixjLGY9ZS5pc1BsYWluT2JqZWN0KHQpP2UuZXh0ZW5kKCEwLHt9LGUuZm4uY2FsZW5kYXIuc2V0dGluZ3MsdCk6ZS5leHRlbmQoe30sZS5mbi5jYWxlbmRhci5zZXR0aW5ncyksaD1mLmNsYXNzTmFtZSxnPWYubmFtZXNwYWNlLG09Zi5zZWxlY3Rvcix2PWYuZm9ybWF0dGVyLHk9Zi5wYXJzZXIsRD1mLm1ldGFkYXRhLGI9Zi5lcnJvcixDPVwiLlwiK2csTT1cIm1vZHVsZS1cIitnLHc9ZSh0aGlzKSx4PXcuZmluZChtLmlucHV0KSxrPXcuZmluZChtLnBvcHVwKSxUPXcuZmluZChtLmFjdGl2YXRvciksRj10aGlzLEg9dy5kYXRhKE0pLE89ITEsST0hMTtjPXtpbml0aWFsaXplOmZ1bmN0aW9uKCl7Yy5kZWJ1ZyhcIkluaXRpYWxpemluZyBjYWxlbmRhciBmb3JcIixGKSxyPWMuZ2V0LmlzVG91Y2goKSxjLnNldHVwLnBvcHVwKCksYy5zZXR1cC5pbmxpbmUoKSxjLnNldHVwLmlucHV0KCksYy5zZXR1cC5kYXRlKCksYy5jcmVhdGUuY2FsZW5kYXIoKSxjLmJpbmQuZXZlbnRzKCksYy5pbnN0YW50aWF0ZSgpfSxpbnN0YW50aWF0ZTpmdW5jdGlvbigpe2MudmVyYm9zZShcIlN0b3JpbmcgaW5zdGFuY2Ugb2YgY2FsZW5kYXJcIiksSD1jLHcuZGF0YShNLEgpfSxkZXN0cm95OmZ1bmN0aW9uKCl7Yy52ZXJib3NlKFwiRGVzdHJveWluZyBwcmV2aW91cyBjYWxlbmRhciBmb3JcIixGKSx3LnJlbW92ZURhdGEoTSksYy51bmJpbmQuZXZlbnRzKCl9LHNldHVwOntwb3B1cDpmdW5jdGlvbigpe2lmKCFmLmlubGluZSYmKFQubGVuZ3RofHwoVD13LmNoaWxkcmVuKCkuZmlyc3QoKSxULmxlbmd0aCkpKXtpZihlLmZuLnBvcHVwPT09bilyZXR1cm4gdm9pZCBjLmVycm9yKGIucG9wdXApO2subGVuZ3RofHwoaz1lKFwiPGRpdi8+XCIpLmFkZENsYXNzKGgucG9wdXApLnByZXBlbmRUbyhULnBhcmVudCgpKSksay5hZGRDbGFzcyhoLmNhbGVuZGFyKTt2YXIgdD1mLm9uVmlzaWJsZSxhPWYub25IaWRkZW47eC5sZW5ndGh8fChrLmF0dHIoXCJ0YWJpbmRleFwiLFwiMFwiKSx0PWZ1bmN0aW9uKCl7cmV0dXJuIGMuZm9jdXMoKSxmLm9uVmlzaWJsZS5hcHBseShrLGFyZ3VtZW50cyl9LGE9ZnVuY3Rpb24oKXtyZXR1cm4gYy5ibHVyKCksZi5vbkhpZGRlbi5hcHBseShrLGFyZ3VtZW50cyl9KTt2YXIgbz1mdW5jdGlvbigpe3JldHVybiBjLnNldC5mb2N1c0RhdGUoYy5nZXQuZGF0ZSgpKSxjLnNldC5tb2RlKGYuc3RhcnRNb2RlKSxmLm9uU2hvdy5hcHBseShrLGFyZ3VtZW50cyl9LHI9Zi5vbnx8KHgubGVuZ3RoP1wiZm9jdXNcIjpcImNsaWNrXCIpLGk9ZS5leHRlbmQoe30sZi5wb3B1cE9wdGlvbnMse3BvcHVwOmssb246cixob3ZlcmFibGU6XCJob3ZlclwiPT09cixvblNob3c6byxvblZpc2libGU6dCxvbkhpZGU6Zi5vbkhpZGUsb25IaWRkZW46YX0pO2MucG9wdXAoaSl9fSxpbmxpbmU6ZnVuY3Rpb24oKXtULmxlbmd0aCYmIWYuaW5saW5lfHwoaz1lKFwiPGRpdi8+XCIpLmFkZENsYXNzKGguY2FsZW5kYXIpLmFwcGVuZFRvKHcpLHgubGVuZ3RofHxrLmF0dHIoXCJ0YWJpbmRleFwiLFwiMFwiKSl9LGlucHV0OmZ1bmN0aW9uKCl7Zi50b3VjaFJlYWRvbmx5JiZ4Lmxlbmd0aCYmciYmeC5wcm9wKFwicmVhZG9ubHlcIiwhMCl9LGRhdGU6ZnVuY3Rpb24oKXtpZih4Lmxlbmd0aCl7dmFyIGU9eC52YWwoKSx0PXkuZGF0ZShlLGYpO2Muc2V0LmRhdGUodCxmLmZvcm1hdElucHV0LCExKX19fSxjcmVhdGU6e2NhbGVuZGFyOmZ1bmN0aW9uKCl7dmFyIHQsYSxuLG8scixpLGwsZD1jLmdldC5tb2RlKCkscz1uZXcgRGF0ZSx1PWMuZ2V0LmRhdGUoKSxwPWMuZ2V0LmZvY3VzRGF0ZSgpLGc9cHx8dXx8Zi5pbml0aWFsRGF0ZXx8cztnPWMuaGVscGVyLmRhdGVJblJhbmdlKGcpLHB8fChwPWcsYy5zZXQuZm9jdXNEYXRlKHAsITEsITEpKTt2YXIgbT1cInllYXJcIj09PWQseT1cIm1vbnRoXCI9PT1kLGI9XCJkYXlcIj09PWQsQz1cImhvdXJcIj09PWQsTT1cIm1pbnV0ZVwiPT09ZCx3PVwidGltZVwiPT09Zi50eXBlLHg9TWF0aC5tYXgoZi5tdWx0aU1vbnRoLDEpLFQ9Yj9jLmdldC5tb250aE9mZnNldCgpOjAsRj1nLmdldE1pbnV0ZXMoKSxIPWcuZ2V0SG91cnMoKSxPPWcuZ2V0RGF0ZSgpLEk9Zy5nZXRNb250aCgpK1QsTj1nLmdldEZ1bGxZZWFyKCksWT1iPzc6Qz80OjMsRT03PT09WT9cInNldmVuXCI6ND09PVk/XCJmb3VyXCI6XCJ0aHJlZVwiLFI9Ynx8Qz82OjQsaj1iP3g6MSxBPWs7Zm9yKEEuZW1wdHkoKSxqPjEmJihsPWUoXCI8ZGl2Lz5cIikuYWRkQ2xhc3MoaC5ncmlkKS5hcHBlbmRUbyhBKSksbz0wO288ajtvKyspe2lmKGo+MSl7dmFyIFM9ZShcIjxkaXYvPlwiKS5hZGRDbGFzcyhoLmNvbHVtbikuYXBwZW5kVG8obCk7QT1TfXZhciBWPUkrbyxQPShuZXcgRGF0ZShOLFYsMSkuZ2V0RGF5KCktZi5maXJzdERheU9mV2VlayU3KzcpJTc7aWYoIWYuY29uc3RhbnRIZWlnaHQmJmIpe3ZhciBxPW5ldyBEYXRlKE4sVisxLDApLmdldERhdGUoKStQO1I9TWF0aC5jZWlsKHEvNyl9dmFyIEs9bT8xMDp5PzE6MCxKPWI/MTowLFc9Q3x8TT8xOjAsej1DfHxNP086MSxMPW5ldyBEYXRlKE4tSyxWLUosei1XLEgpLEI9bmV3IERhdGUoTitLLFYrSix6K1csSCksVT1tP25ldyBEYXRlKDEwKk1hdGguY2VpbChOLzEwKS05LDAsMCk6eT9uZXcgRGF0ZShOLDAsMCk6Yj9uZXcgRGF0ZShOLFYsMCk6bmV3IERhdGUoTixWLE8sKC0xKSksUT1tP25ldyBEYXRlKDEwKk1hdGguY2VpbChOLzEwKSsxLDAsMSk6eT9uZXcgRGF0ZShOKzEsMCwxKTpiP25ldyBEYXRlKE4sVisxLDEpOm5ldyBEYXRlKE4sVixPKzEpLFo9ZShcIjx0YWJsZS8+XCIpLmFkZENsYXNzKGgudGFibGUpLmFkZENsYXNzKEUrXCIgY29sdW1uXCIpLmFkZENsYXNzKGQpLmFwcGVuZFRvKEEpO2lmKCF3KXt2YXIgRz1lKFwiPHRoZWFkLz5cIikuYXBwZW5kVG8oWik7cj1lKFwiPHRyLz5cIikuYXBwZW5kVG8oRyksaT1lKFwiPHRoLz5cIikuYXR0cihcImNvbHNwYW5cIixcIlwiK1kpLmFwcGVuZFRvKHIpO3ZhciBYPW18fHk/bmV3IERhdGUoTiwwLDEpOmI/bmV3IERhdGUoTixWLDEpOm5ldyBEYXRlKE4sVixPLEgsRiksJD1lKFwiPHNwYW4vPlwiKS5hZGRDbGFzcyhoLmxpbmspLmFwcGVuZFRvKGkpOyQudGV4dCh2LmhlYWRlcihYLGQsZikpO3ZhciBfPXk/Zi5kaXNhYmxlWWVhcj9cImRheVwiOlwieWVhclwiOmI/Zi5kaXNhYmxlTW9udGg/XCJ5ZWFyXCI6XCJtb250aFwiOlwiZGF5XCI7aWYoJC5kYXRhKEQubW9kZSxfKSwwPT09byl7dmFyIGVlPWUoXCI8c3Bhbi8+XCIpLmFkZENsYXNzKGgucHJldikuYXBwZW5kVG8oaSk7ZWUuZGF0YShELmZvY3VzRGF0ZSxMKSxlZS50b2dnbGVDbGFzcyhoLmRpc2FibGVkQ2VsbCwhYy5oZWxwZXIuaXNEYXRlSW5SYW5nZShVLGQpKSxlKFwiPGkvPlwiKS5hZGRDbGFzcyhoLnByZXZJY29uKS5hcHBlbmRUbyhlZSl9aWYobz09PWotMSl7dmFyIHRlPWUoXCI8c3Bhbi8+XCIpLmFkZENsYXNzKGgubmV4dCkuYXBwZW5kVG8oaSk7dGUuZGF0YShELmZvY3VzRGF0ZSxCKSx0ZS50b2dnbGVDbGFzcyhoLmRpc2FibGVkQ2VsbCwhYy5oZWxwZXIuaXNEYXRlSW5SYW5nZShRLGQpKSxlKFwiPGkvPlwiKS5hZGRDbGFzcyhoLm5leHRJY29uKS5hcHBlbmRUbyh0ZSl9aWYoYilmb3Iocj1lKFwiPHRyLz5cIikuYXBwZW5kVG8oRyksdD0wO3Q8WTt0KyspaT1lKFwiPHRoLz5cIikuYXBwZW5kVG8ociksaS50ZXh0KHYuZGF5Q29sdW1uSGVhZGVyKCh0K2YuZmlyc3REYXlPZldlZWspJTcsZikpfXZhciBhZT1lKFwiPHRib2R5Lz5cIikuYXBwZW5kVG8oWik7Zm9yKHQ9bT8xMCpNYXRoLmNlaWwoTi8xMCktOTpiPzEtUDowLGE9MDthPFI7YSsrKWZvcihyPWUoXCI8dHIvPlwiKS5hcHBlbmRUbyhhZSksbj0wO248WTtuKyssdCsrKXt2YXIgbmU9bT9uZXcgRGF0ZSh0LFYsMSxILEYpOnk/bmV3IERhdGUoTix0LDEsSCxGKTpiP25ldyBEYXRlKE4sVix0LEgsRik6Qz9uZXcgRGF0ZShOLFYsTyx0KTpuZXcgRGF0ZShOLFYsTyxILDUqdCksb2U9bT90Onk/Zi50ZXh0Lm1vbnRoc1Nob3J0W3RdOmI/bmUuZ2V0RGF0ZSgpOnYudGltZShuZSxmLCEwKTtpPWUoXCI8dGQvPlwiKS5hZGRDbGFzcyhoLmNlbGwpLmFwcGVuZFRvKHIpLGkudGV4dChvZSksaS5kYXRhKEQuZGF0ZSxuZSk7dmFyIHJlPWImJm5lLmdldE1vbnRoKCkhPT0oVisxMiklMTIsaWU9cmV8fCFjLmhlbHBlci5pc0RhdGVJblJhbmdlKG5lLGQpfHxmLmlzRGlzYWJsZWQobmUsZCksbGU9Yy5oZWxwZXIuZGF0ZUVxdWFsKG5lLHUsZCksZGU9Yy5oZWxwZXIuZGF0ZUVxdWFsKG5lLHMsZCk7aS50b2dnbGVDbGFzcyhoLmFkamFjZW50Q2VsbCxyZSksaS50b2dnbGVDbGFzcyhoLmRpc2FibGVkQ2VsbCxpZSksaS50b2dnbGVDbGFzcyhoLmFjdGl2ZUNlbGwsbGUmJiFyZSksQ3x8TXx8aS50b2dnbGVDbGFzcyhoLnRvZGF5Q2VsbCwhcmUmJmRlKTt2YXIgc2U9e21vZGU6ZCxhZGphY2VudDpyZSxkaXNhYmxlZDppZSxhY3RpdmU6bGUsdG9kYXk6ZGV9O3YuY2VsbChpLG5lLHNlKSxjLmhlbHBlci5kYXRlRXF1YWwobmUscCxkKSYmYy5zZXQuZm9jdXNEYXRlKG5lLCExLCExKX1pZihmLnRvZGF5KXt2YXIgdWU9ZShcIjx0ci8+XCIpLmFwcGVuZFRvKGFlKSxwZT1lKFwiPHRkLz5cIikuYXR0cihcImNvbHNwYW5cIixcIlwiK1kpLmFkZENsYXNzKGgudG9kYXkpLmFwcGVuZFRvKHVlKTtwZS50ZXh0KHYudG9kYXkoZikpLHBlLmRhdGEoRC5kYXRlLHMpfWMudXBkYXRlLmZvY3VzKCExLFopfX19LHVwZGF0ZTp7Zm9jdXM6ZnVuY3Rpb24odCxhKXthPWF8fGs7dmFyIG49Yy5nZXQubW9kZSgpLG89Yy5nZXQuZGF0ZSgpLGk9Yy5nZXQuZm9jdXNEYXRlKCksbD1jLmdldC5zdGFydERhdGUoKSxkPWMuZ2V0LmVuZERhdGUoKSxzPSh0P2k6bnVsbCl8fG98fChyP251bGw6aSk7YS5maW5kKFwidGRcIikuZWFjaChmdW5jdGlvbigpe3ZhciB0PWUodGhpcyksYT10LmRhdGEoRC5kYXRlKTtpZihhKXt2YXIgbz10Lmhhc0NsYXNzKGguZGlzYWJsZWRDZWxsKSx1PXQuaGFzQ2xhc3MoaC5hY3RpdmVDZWxsKSxwPXQuaGFzQ2xhc3MoaC5hZGphY2VudENlbGwpLGY9Yy5oZWxwZXIuZGF0ZUVxdWFsKGEsaSxuKSxnPSEhcyYmKCEhbCYmYy5oZWxwZXIuaXNEYXRlSW5SYW5nZShhLG4sbCxzKXx8ISFkJiZjLmhlbHBlci5pc0RhdGVJblJhbmdlKGEsbixzLGQpKTt0LnRvZ2dsZUNsYXNzKGguZm9jdXNDZWxsLGYmJighcnx8TykmJiFwKSx0LnRvZ2dsZUNsYXNzKGgucmFuZ2VDZWxsLGcmJiF1JiYhbyl9fSl9fSxyZWZyZXNoOmZ1bmN0aW9uKCl7Yy5jcmVhdGUuY2FsZW5kYXIoKX0sYmluZDp7ZXZlbnRzOmZ1bmN0aW9uKCl7ay5vbihcIm1vdXNlZG93blwiK0MsYy5ldmVudC5tb3VzZWRvd24pLGsub24oXCJ0b3VjaHN0YXJ0XCIrQyxjLmV2ZW50Lm1vdXNlZG93biksay5vbihcIm1vdXNldXBcIitDLGMuZXZlbnQubW91c2V1cCksay5vbihcInRvdWNoZW5kXCIrQyxjLmV2ZW50Lm1vdXNldXApLGsub24oXCJtb3VzZW92ZXJcIitDLGMuZXZlbnQubW91c2VvdmVyKSx4Lmxlbmd0aD8oeC5vbihcImlucHV0XCIrQyxjLmV2ZW50LmlucHV0Q2hhbmdlKSx4Lm9uKFwiZm9jdXNcIitDLGMuZXZlbnQuaW5wdXRGb2N1cykseC5vbihcImJsdXJcIitDLGMuZXZlbnQuaW5wdXRCbHVyKSx4Lm9uKFwiY2xpY2tcIitDLGMuZXZlbnQuaW5wdXRDbGljaykseC5vbihcImtleWRvd25cIitDLGMuZXZlbnQua2V5ZG93bikpOmsub24oXCJrZXlkb3duXCIrQyxjLmV2ZW50LmtleWRvd24pfX0sdW5iaW5kOntldmVudHM6ZnVuY3Rpb24oKXtrLm9mZihDKSx4Lmxlbmd0aCYmeC5vZmYoQyl9fSxldmVudDp7bW91c2VvdmVyOmZ1bmN0aW9uKHQpe3ZhciBhPWUodC50YXJnZXQpLG49YS5kYXRhKEQuZGF0ZSksbz0xPT09dC5idXR0b25zO24mJmMuc2V0LmZvY3VzRGF0ZShuLCExLCEwLG8pfSxtb3VzZWRvd246ZnVuY3Rpb24odCl7eC5sZW5ndGgmJnQucHJldmVudERlZmF1bHQoKSxPPXQudHlwZS5pbmRleE9mKFwidG91Y2hcIik+PTA7dmFyIGE9ZSh0LnRhcmdldCksbj1hLmRhdGEoRC5kYXRlKTtuJiZjLnNldC5mb2N1c0RhdGUobiwhMSwhMCwhMCl9LG1vdXNldXA6ZnVuY3Rpb24odCl7Yy5mb2N1cygpLHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpLE89ITE7dmFyIGE9ZSh0LnRhcmdldCksbj1hLnBhcmVudCgpOyhuLmRhdGEoRC5kYXRlKXx8bi5kYXRhKEQuZm9jdXNEYXRlKXx8bi5kYXRhKEQubW9kZSkpJiYoYT1uKTt2YXIgbz1hLmRhdGEoRC5kYXRlKSxyPWEuZGF0YShELmZvY3VzRGF0ZSksaT1hLmRhdGEoRC5tb2RlKTtpZihvKXt2YXIgbD1hLmhhc0NsYXNzKGgudG9kYXkpO2Muc2VsZWN0RGF0ZShvLGwpfWVsc2Ugcj9jLnNldC5mb2N1c0RhdGUocik6aSYmYy5zZXQubW9kZShpKX0sa2V5ZG93bjpmdW5jdGlvbihlKXtpZigyNyE9PWUua2V5Q29kZSYmOSE9PWUua2V5Q29kZXx8Yy5wb3B1cChcImhpZGVcIiksYy5wb3B1cChcImlzIHZpc2libGVcIikpaWYoMzc9PT1lLmtleUNvZGV8fDM4PT09ZS5rZXlDb2RlfHwzOT09PWUua2V5Q29kZXx8NDA9PT1lLmtleUNvZGUpe3ZhciB0PWMuZ2V0Lm1vZGUoKSxhPVwiZGF5XCI9PT10Pzc6XCJob3VyXCI9PT10PzQ6MyxuPTM3PT09ZS5rZXlDb2RlPy0xOjM4PT09ZS5rZXlDb2RlPy1hOjM5PT1lLmtleUNvZGU/MTphO24qPVwibWludXRlXCI9PT10PzU6MTt2YXIgbz1jLmdldC5mb2N1c0RhdGUoKXx8Yy5nZXQuZGF0ZSgpfHxuZXcgRGF0ZSxyPW8uZ2V0RnVsbFllYXIoKSsoXCJ5ZWFyXCI9PT10P246MCksaT1vLmdldE1vbnRoKCkrKFwibW9udGhcIj09PXQ/bjowKSxsPW8uZ2V0RGF0ZSgpKyhcImRheVwiPT09dD9uOjApLGQ9by5nZXRIb3VycygpKyhcImhvdXJcIj09PXQ/bjowKSxzPW8uZ2V0TWludXRlcygpKyhcIm1pbnV0ZVwiPT09dD9uOjApLHU9bmV3IERhdGUocixpLGwsZCxzKTtcInRpbWVcIj09PWYudHlwZSYmKHU9Yy5oZWxwZXIubWVyZ2VEYXRlVGltZShvLHUpKSxjLmhlbHBlci5pc0RhdGVJblJhbmdlKHUsdCkmJmMuc2V0LmZvY3VzRGF0ZSh1KX1lbHNlIGlmKDEzPT09ZS5rZXlDb2RlKXt2YXIgdD1jLmdldC5tb2RlKCkscD1jLmdldC5mb2N1c0RhdGUoKTtwJiYhZi5pc0Rpc2FibGVkKHAsdCkmJmMuc2VsZWN0RGF0ZShwKSxlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKX0zOCE9PWUua2V5Q29kZSYmNDAhPT1lLmtleUNvZGV8fChlLnByZXZlbnREZWZhdWx0KCksYy5wb3B1cChcInNob3dcIikpfSxpbnB1dENoYW5nZTpmdW5jdGlvbigpe3ZhciBlPXgudmFsKCksdD15LmRhdGUoZSxmKTtjLnNldC5kYXRlKHQsITEpfSxpbnB1dEZvY3VzOmZ1bmN0aW9uKCl7ay5hZGRDbGFzcyhoLmFjdGl2ZSl9LGlucHV0Qmx1cjpmdW5jdGlvbigpe2lmKGsucmVtb3ZlQ2xhc3MoaC5hY3RpdmUpLGYuZm9ybWF0SW5wdXQpe3ZhciBlPWMuZ2V0LmRhdGUoKSx0PXYuZGF0ZXRpbWUoZSxmKTt4LnZhbCh0KX19LGlucHV0Q2xpY2s6ZnVuY3Rpb24oKXtjLnBvcHVwKFwic2hvd1wiKX19LGdldDp7ZGF0ZTpmdW5jdGlvbigpe3JldHVybiB3LmRhdGEoRC5kYXRlKXx8bnVsbH0sZm9jdXNEYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHcuZGF0YShELmZvY3VzRGF0ZSl8fG51bGx9LHN0YXJ0RGF0ZTpmdW5jdGlvbigpe3ZhciBlPWMuZ2V0LmNhbGVuZGFyTW9kdWxlKGYuc3RhcnRDYWxlbmRhcik7cmV0dXJuKGU/ZS5nZXQuZGF0ZSgpOncuZGF0YShELnN0YXJ0RGF0ZSkpfHxudWxsfSxlbmREYXRlOmZ1bmN0aW9uKCl7dmFyIGU9Yy5nZXQuY2FsZW5kYXJNb2R1bGUoZi5lbmRDYWxlbmRhcik7cmV0dXJuKGU/ZS5nZXQuZGF0ZSgpOncuZGF0YShELmVuZERhdGUpKXx8bnVsbH0sbW9udGhPZmZzZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdy5kYXRhKEQubW9udGhPZmZzZXQpfHwwfSxtb2RlOmZ1bmN0aW9uKCl7dmFyIHQ9dy5kYXRhKEQubW9kZSl8fGYuc3RhcnRNb2RlLGE9Yy5nZXQudmFsaWRNb2RlcygpO3JldHVybiBlLmluQXJyYXkodCxhKT49MD90OlwidGltZVwiPT09Zi50eXBlP1wiaG91clwiOlwibW9udGhcIj09PWYudHlwZT9cIm1vbnRoXCI6XCJ5ZWFyXCI9PT1mLnR5cGU/XCJ5ZWFyXCI6XCJkYXlcIn0sdmFsaWRNb2RlczpmdW5jdGlvbigpe3ZhciBlPVtdO3JldHVyblwidGltZVwiIT09Zi50eXBlJiYoZi5kaXNhYmxlWWVhciYmXCJ5ZWFyXCIhPT1mLnR5cGV8fGUucHVzaChcInllYXJcIiksKCFmLmRpc2FibGVNb250aCYmXCJ5ZWFyXCIhPT1mLnR5cGV8fFwibW9udGhcIj09PWYudHlwZSkmJmUucHVzaChcIm1vbnRoXCIpLGYudHlwZS5pbmRleE9mKFwiZGF0ZVwiKT49MCYmZS5wdXNoKFwiZGF5XCIpKSxmLnR5cGUuaW5kZXhPZihcInRpbWVcIik+PTAmJihlLnB1c2goXCJob3VyXCIpLGYuZGlzYWJsZU1pbnV0ZXx8ZS5wdXNoKFwibWludXRlXCIpKSxlfSxpc1RvdWNoOmZ1bmN0aW9uKCl7dHJ5e3JldHVybiBhLmNyZWF0ZUV2ZW50KFwiVG91Y2hFdmVudFwiKSwhMH1jYXRjaChlKXtyZXR1cm4hMX19LGNhbGVuZGFyTW9kdWxlOmZ1bmN0aW9uKHQpe3JldHVybiB0Pyh0IGluc3RhbmNlb2YgZXx8KHQ9dy5wYXJlbnQoKS5jaGlsZHJlbih0KS5maXJzdCgpKSx0LmRhdGEoTSkpOm51bGx9fSxzZXQ6e2RhdGU6ZnVuY3Rpb24oZSx0LGEpe3Q9dCE9PSExLGE9YSE9PSExLGU9Yy5oZWxwZXIuc2FuaXRpc2VEYXRlKGUpLGU9Yy5oZWxwZXIuZGF0ZUluUmFuZ2UoZSk7dmFyIG89Yy5nZXQubW9kZSgpLHI9di5kYXRldGltZShlLGYpO2lmKGEmJmYub25DaGFuZ2UuY2FsbChGLGUscixvKT09PSExKXJldHVybiExO2lmKGMuc2V0LmZvY3VzRGF0ZShlKSxmLmlzRGlzYWJsZWQoZSxvKSlyZXR1cm4hMTt2YXIgaT1jLmdldC5lbmREYXRlKCk7aSYmZSYmZT5pJiZjLnNldC5lbmREYXRlKG4pLGMuc2V0LmRhdGFLZXlWYWx1ZShELmRhdGUsZSksdCYmeC5sZW5ndGgmJngudmFsKHIpfSxzdGFydERhdGU6ZnVuY3Rpb24oZSx0KXtlPWMuaGVscGVyLnNhbml0aXNlRGF0ZShlKTt2YXIgYT1jLmdldC5jYWxlbmRhck1vZHVsZShmLnN0YXJ0Q2FsZW5kYXIpO2EmJmEuc2V0LmRhdGUoZSksYy5zZXQuZGF0YUtleVZhbHVlKEQuc3RhcnREYXRlLGUsdCl9LGVuZERhdGU6ZnVuY3Rpb24oZSx0KXtlPWMuaGVscGVyLnNhbml0aXNlRGF0ZShlKTt2YXIgYT1jLmdldC5jYWxlbmRhck1vZHVsZShmLmVuZENhbGVuZGFyKTthJiZhLnNldC5kYXRlKGUpLGMuc2V0LmRhdGFLZXlWYWx1ZShELmVuZERhdGUsZSx0KX0sZm9jdXNEYXRlOmZ1bmN0aW9uKGUsdCxhLG4pe2U9Yy5oZWxwZXIuc2FuaXRpc2VEYXRlKGUpLGU9Yy5oZWxwZXIuZGF0ZUluUmFuZ2UoZSk7dmFyIG89XCJkYXlcIj09PWMuZ2V0Lm1vZGUoKSxyPWMuZ2V0LmZvY3VzRGF0ZSgpO2lmKG8mJmUmJnIpe3ZhciBpPWUuZ2V0RnVsbFllYXIoKS1yLmdldEZ1bGxZZWFyKCksbD0xMippK2UuZ2V0TW9udGgoKS1yLmdldE1vbnRoKCk7aWYobCl7dmFyIGQ9Yy5nZXQubW9udGhPZmZzZXQoKS1sO2Muc2V0Lm1vbnRoT2Zmc2V0KGQsITEpfX12YXIgcz1jLnNldC5kYXRhS2V5VmFsdWUoRC5mb2N1c0RhdGUsZSx0KTthPWEhPT0hMSYmcyYmdD09PSExfHxJIT1uLEk9bixhJiZjLnVwZGF0ZS5mb2N1cyhuKX0sbW9udGhPZmZzZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgYT1NYXRoLm1heChmLm11bHRpTW9udGgsMSk7ZT1NYXRoLm1heCgxLWEsTWF0aC5taW4oMCxlKSksYy5zZXQuZGF0YUtleVZhbHVlKEQubW9udGhPZmZzZXQsZSx0KX0sbW9kZTpmdW5jdGlvbihlLHQpe2Muc2V0LmRhdGFLZXlWYWx1ZShELm1vZGUsZSx0KX0sZGF0YUtleVZhbHVlOmZ1bmN0aW9uKGUsdCxhKXt2YXIgbj13LmRhdGEoZSksbz1uPT09dHx8bjw9dCYmbj49dDtyZXR1cm4gdD93LmRhdGEoZSx0KTp3LnJlbW92ZURhdGEoZSksYT1hIT09ITEmJiFvLGEmJmMuY3JlYXRlLmNhbGVuZGFyKCksIW99fSxzZWxlY3REYXRlOmZ1bmN0aW9uKGUsdCl7dmFyIGE9Yy5nZXQubW9kZSgpLG49dHx8XCJtaW51dGVcIj09PWF8fGYuZGlzYWJsZU1pbnV0ZSYmXCJob3VyXCI9PT1hfHxcImRhdGVcIj09PWYudHlwZSYmXCJkYXlcIj09PWF8fFwibW9udGhcIj09PWYudHlwZSYmXCJtb250aFwiPT09YXx8XCJ5ZWFyXCI9PT1mLnR5cGUmJlwieWVhclwiPT09YTtpZihuKXt2YXIgbz1jLnNldC5kYXRlKGUpPT09ITE7aWYoIW8mJmYuY2xvc2FibGUpe2MucG9wdXAoXCJoaWRlXCIpO3ZhciByPWMuZ2V0LmNhbGVuZGFyTW9kdWxlKGYuZW5kQ2FsZW5kYXIpO3ImJihyLnBvcHVwKFwic2hvd1wiKSxyLmZvY3VzKCkpfX1lbHNle3ZhciBpPVwieWVhclwiPT09YT9mLmRpc2FibGVNb250aD9cImRheVwiOlwibW9udGhcIjpcIm1vbnRoXCI9PT1hP1wiZGF5XCI6XCJkYXlcIj09PWE/XCJob3VyXCI6XCJtaW51dGVcIjtjLnNldC5tb2RlKGkpLFwiaG91clwiPT09YXx8XCJkYXlcIj09PWEmJmMuZ2V0LmRhdGUoKT9jLnNldC5kYXRlKGUpOmMuc2V0LmZvY3VzRGF0ZShlKX19LGNoYW5nZURhdGU6ZnVuY3Rpb24oZSl7Yy5zZXQuZGF0ZShlKX0sY2xlYXI6ZnVuY3Rpb24oKXtjLnNldC5kYXRlKG4pfSxwb3B1cDpmdW5jdGlvbigpe3JldHVybiBULnBvcHVwLmFwcGx5KFQsYXJndW1lbnRzKX0sZm9jdXM6ZnVuY3Rpb24oKXt4Lmxlbmd0aD94LmZvY3VzKCk6ay5mb2N1cygpfSxibHVyOmZ1bmN0aW9uKCl7eC5sZW5ndGg/eC5ibHVyKCk6ay5ibHVyKCl9LGhlbHBlcjp7c2FuaXRpc2VEYXRlOmZ1bmN0aW9uKGUpe3JldHVybiBlPyhlIGluc3RhbmNlb2YgRGF0ZXx8KGU9eS5kYXRlKFwiXCIrZSxmKSksaXNOYU4oZS5nZXRUaW1lKCkpP246ZSk6bn0sZGF0ZURpZmY6ZnVuY3Rpb24oZSx0LGEpe2E9YXx8XCJkYXlcIjt2YXIgbj1cInRpbWVcIj09PWYudHlwZSxvPVwieWVhclwiPT09YSxyPW98fFwibW9udGhcIj09PWEsaT1cIm1pbnV0ZVwiPT09YSxsPWl8fFwiaG91clwiPT09YTtyZXR1cm4gZT1uZXcgRGF0ZShuPzJlMzplLmdldEZ1bGxZZWFyKCksbj8wOm8/MDplLmdldE1vbnRoKCksbj8xOnI/MTplLmdldERhdGUoKSxsP2UuZ2V0SG91cnMoKTowLGk/NSpNYXRoLmZsb29yKGUuZ2V0TWludXRlcygpLzUpOjApLHQ9bmV3IERhdGUobj8yZTM6dC5nZXRGdWxsWWVhcigpLG4/MDpvPzA6dC5nZXRNb250aCgpLG4/MTpyPzE6dC5nZXREYXRlKCksbD90LmdldEhvdXJzKCk6MCxpPzUqTWF0aC5mbG9vcih0LmdldE1pbnV0ZXMoKS81KTowKSx0LmdldFRpbWUoKS1lLmdldFRpbWUoKX0sZGF0ZUVxdWFsOmZ1bmN0aW9uKGUsdCxhKXtyZXR1cm4hIWUmJiEhdCYmMD09PWMuaGVscGVyLmRhdGVEaWZmKGUsdCxhKX0saXNEYXRlSW5SYW5nZTpmdW5jdGlvbihlLHQsYSxuKXtpZighYSYmIW4pe3ZhciBvPWMuZ2V0LnN0YXJ0RGF0ZSgpO2E9byYmZi5taW5EYXRlP25ldyBEYXRlKE1hdGgubWF4KG8sZi5taW5EYXRlKSk6b3x8Zi5taW5EYXRlLG49Zi5tYXhEYXRlfXJldHVybiBhPWEmJm5ldyBEYXRlKGEuZ2V0RnVsbFllYXIoKSxhLmdldE1vbnRoKCksYS5nZXREYXRlKCksYS5nZXRIb3VycygpLDUqTWF0aC5jZWlsKGEuZ2V0TWludXRlcygpLzUpKSwhKCFlfHxhJiZjLmhlbHBlci5kYXRlRGlmZihlLGEsdCk+MHx8biYmYy5oZWxwZXIuZGF0ZURpZmYobixlLHQpPjApfSxkYXRlSW5SYW5nZTpmdW5jdGlvbihlLHQsYSl7aWYoIXQmJiFhKXt2YXIgbj1jLmdldC5zdGFydERhdGUoKTt0PW4mJmYubWluRGF0ZT9uZXcgRGF0ZShNYXRoLm1heChuLGYubWluRGF0ZSkpOm58fGYubWluRGF0ZSxhPWYubWF4RGF0ZX10PXQmJm5ldyBEYXRlKHQuZ2V0RnVsbFllYXIoKSx0LmdldE1vbnRoKCksdC5nZXREYXRlKCksdC5nZXRIb3VycygpLDUqTWF0aC5jZWlsKHQuZ2V0TWludXRlcygpLzUpKTt2YXIgbz1cInRpbWVcIj09PWYudHlwZTtyZXR1cm4gZT90JiZjLmhlbHBlci5kYXRlRGlmZihlLHQsXCJtaW51dGVcIik+MD9vP2MuaGVscGVyLm1lcmdlRGF0ZVRpbWUoZSx0KTp0OmEmJmMuaGVscGVyLmRhdGVEaWZmKGEsZSxcIm1pbnV0ZVwiKT4wP28/Yy5oZWxwZXIubWVyZ2VEYXRlVGltZShlLGEpOmE6ZTplfSxtZXJnZURhdGVUaW1lOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUmJnQ/bmV3IERhdGUoZS5nZXRGdWxsWWVhcigpLGUuZ2V0TW9udGgoKSxlLmdldERhdGUoKSx0LmdldEhvdXJzKCksdC5nZXRNaW51dGVzKCkpOnR9fSxzZXR0aW5nOmZ1bmN0aW9uKHQsYSl7aWYoYy5kZWJ1ZyhcIkNoYW5naW5nIHNldHRpbmdcIix0LGEpLGUuaXNQbGFpbk9iamVjdCh0KSllLmV4dGVuZCghMCxmLHQpO2Vsc2V7aWYoYT09PW4pcmV0dXJuIGZbdF07ZS5pc1BsYWluT2JqZWN0KGZbdF0pP2UuZXh0ZW5kKCEwLGZbdF0sYSk6Zlt0XT1hfX0saW50ZXJuYWw6ZnVuY3Rpb24odCxhKXtyZXR1cm4gYy5kZWJ1ZyhcIkNoYW5naW5nIGludGVybmFsXCIsdCxhKSxhPT09bj9jW3RdOnZvaWQoZS5pc1BsYWluT2JqZWN0KHQpP2UuZXh0ZW5kKCEwLGMsdCk6Y1t0XT1hKX0sZGVidWc6ZnVuY3Rpb24oKXshZi5zaWxlbnQmJmYuZGVidWcmJihmLnBlcmZvcm1hbmNlP2MucGVyZm9ybWFuY2UubG9nKGFyZ3VtZW50cyk6KGMuZGVidWc9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChjb25zb2xlLmluZm8sY29uc29sZSxmLm5hbWUrXCI6XCIpLGMuZGVidWcuYXBwbHkoY29uc29sZSxhcmd1bWVudHMpKSl9LHZlcmJvc2U6ZnVuY3Rpb24oKXshZi5zaWxlbnQmJmYudmVyYm9zZSYmZi5kZWJ1ZyYmKGYucGVyZm9ybWFuY2U/Yy5wZXJmb3JtYW5jZS5sb2coYXJndW1lbnRzKTooYy52ZXJib3NlPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoY29uc29sZS5pbmZvLGNvbnNvbGUsZi5uYW1lK1wiOlwiKSxjLnZlcmJvc2UuYXBwbHkoY29uc29sZSxhcmd1bWVudHMpKSl9LGVycm9yOmZ1bmN0aW9uKCl7Zi5zaWxlbnR8fChjLmVycm9yPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoY29uc29sZS5lcnJvcixjb25zb2xlLGYubmFtZStcIjpcIiksYy5lcnJvci5hcHBseShjb25zb2xlLGFyZ3VtZW50cykpfSxwZXJmb3JtYW5jZTp7bG9nOmZ1bmN0aW9uKGUpe3ZhciB0LGEsbjtmLnBlcmZvcm1hbmNlJiYodD0obmV3IERhdGUpLmdldFRpbWUoKSxuPWx8fHQsYT10LW4sbD10LGQucHVzaCh7TmFtZTplWzBdLEFyZ3VtZW50czpbXS5zbGljZS5jYWxsKGUsMSl8fFwiXCIsRWxlbWVudDpGLFwiRXhlY3V0aW9uIFRpbWVcIjphfSkpLGNsZWFyVGltZW91dChjLnBlcmZvcm1hbmNlLnRpbWVyKSxjLnBlcmZvcm1hbmNlLnRpbWVyPXNldFRpbWVvdXQoYy5wZXJmb3JtYW5jZS5kaXNwbGF5LDUwMCl9LGRpc3BsYXk6ZnVuY3Rpb24oKXt2YXIgdD1mLm5hbWUrXCI6XCIsYT0wO2w9ITEsY2xlYXJUaW1lb3V0KGMucGVyZm9ybWFuY2UudGltZXIpLGUuZWFjaChkLGZ1bmN0aW9uKGUsdCl7YSs9dFtcIkV4ZWN1dGlvbiBUaW1lXCJdfSksdCs9XCIgXCIrYStcIm1zXCIsaSYmKHQrPVwiICdcIitpK1wiJ1wiKSwoY29uc29sZS5ncm91cCE9PW58fGNvbnNvbGUudGFibGUhPT1uKSYmZC5sZW5ndGg+MCYmKGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQodCksY29uc29sZS50YWJsZT9jb25zb2xlLnRhYmxlKGQpOmUuZWFjaChkLGZ1bmN0aW9uKGUsdCl7Y29uc29sZS5sb2codC5OYW1lK1wiOiBcIit0W1wiRXhlY3V0aW9uIFRpbWVcIl0rXCJtc1wiKX0pLGNvbnNvbGUuZ3JvdXBFbmQoKSksZD1bXX19LGludm9rZTpmdW5jdGlvbih0LGEscil7dmFyIGksbCxkLHM9SDtyZXR1cm4gYT1hfHxwLHI9Rnx8cixcInN0cmluZ1wiPT10eXBlb2YgdCYmcyE9PW4mJih0PXQuc3BsaXQoL1tcXC4gXS8pLGk9dC5sZW5ndGgtMSxlLmVhY2godCxmdW5jdGlvbihhLG8pe3ZhciByPWEhPWk/byt0W2ErMV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrdFthKzFdLnNsaWNlKDEpOnQ7aWYoZS5pc1BsYWluT2JqZWN0KHNbcl0pJiZhIT1pKXM9c1tyXTtlbHNle2lmKHNbcl0hPT1uKXJldHVybiBsPXNbcl0sITE7aWYoIWUuaXNQbGFpbk9iamVjdChzW29dKXx8YT09aSlyZXR1cm4gc1tvXSE9PW4/KGw9c1tvXSwhMSk6KGMuZXJyb3IoYi5tZXRob2QsdCksITEpO3M9c1tvXX19KSksZS5pc0Z1bmN0aW9uKGwpP2Q9bC5hcHBseShyLGEpOmwhPT1uJiYoZD1sKSxlLmlzQXJyYXkobyk/by5wdXNoKGQpOm8hPT1uP289W28sZF06ZCE9PW4mJihvPWQpLGx9fSx1PyhIPT09biYmYy5pbml0aWFsaXplKCksYy5pbnZva2UocykpOihIIT09biYmSC5pbnZva2UoXCJkZXN0cm95XCIpLGMuaW5pdGlhbGl6ZSgpKX0pLG8hPT1uP286dGhpc30sZS5mbi5jYWxlbmRhci5zZXR0aW5ncz17bmFtZTpcIkNhbGVuZGFyXCIsbmFtZXNwYWNlOlwiY2FsZW5kYXJcIixzaWxlbnQ6ITEsZGVidWc6ITEsdmVyYm9zZTohMSxwZXJmb3JtYW5jZTohMSx0eXBlOlwiZGF0ZXRpbWVcIixmaXJzdERheU9mV2VlazowLGNvbnN0YW50SGVpZ2h0OiEwLHRvZGF5OiExLGNsb3NhYmxlOiEwLG1vbnRoRmlyc3Q6ITAsdG91Y2hSZWFkb25seTohMCxpbmxpbmU6ITEsb246bnVsbCxpbml0aWFsRGF0ZTpudWxsLHN0YXJ0TW9kZTohMSxtaW5EYXRlOm51bGwsbWF4RGF0ZTpudWxsLGFtcG06ITAsZGlzYWJsZVllYXI6ITEsZGlzYWJsZU1vbnRoOiExLGRpc2FibGVNaW51dGU6ITEsZm9ybWF0SW5wdXQ6ITAsc3RhcnRDYWxlbmRhcjpudWxsLGVuZENhbGVuZGFyOm51bGwsbXVsdGlNb250aDoxLHBvcHVwT3B0aW9uczp7cG9zaXRpb246XCJib3R0b20gbGVmdFwiLGxhc3RSZXNvcnQ6XCJib3R0b20gbGVmdFwiLHByZWZlcjpcIm9wcG9zaXRlXCIsaGlkZU9uU2Nyb2xsOiExfSx0ZXh0OntkYXlzOltcIlNcIixcIk1cIixcIlRcIixcIldcIixcIlRcIixcIkZcIixcIlNcIl0sbW9udGhzOltcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSxtb250aHNTaG9ydDpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdLHRvZGF5OlwiVG9kYXlcIixub3c6XCJOb3dcIixhbTpcIkFNXCIscG06XCJQTVwifSxmb3JtYXR0ZXI6e2hlYWRlcjpmdW5jdGlvbihlLHQsYSl7cmV0dXJuXCJ5ZWFyXCI9PT10P2EuZm9ybWF0dGVyLnllYXJIZWFkZXIoZSxhKTpcIm1vbnRoXCI9PT10P2EuZm9ybWF0dGVyLm1vbnRoSGVhZGVyKGUsYSk6XCJkYXlcIj09PXQ/YS5mb3JtYXR0ZXIuZGF5SGVhZGVyKGUsYSk6XCJob3VyXCI9PT10P2EuZm9ybWF0dGVyLmhvdXJIZWFkZXIoZSxhKTphLmZvcm1hdHRlci5taW51dGVIZWFkZXIoZSxhKX0seWVhckhlYWRlcjpmdW5jdGlvbihlLHQpe3ZhciBhPTEwKk1hdGguY2VpbChlLmdldEZ1bGxZZWFyKCkvMTApO3JldHVybiBhLTkrXCIgLSBcIisoYSsyKX0sbW9udGhIZWFkZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5nZXRGdWxsWWVhcigpfSxkYXlIZWFkZXI6ZnVuY3Rpb24oZSx0KXt2YXIgYT10LnRleHQubW9udGhzW2UuZ2V0TW9udGgoKV0sbj1lLmdldEZ1bGxZZWFyKCk7cmV0dXJuIGErXCIgXCIrbn0saG91ckhlYWRlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0LmZvcm1hdHRlci5kYXRlKGUsdCl9LG1pbnV0ZUhlYWRlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0LmZvcm1hdHRlci5kYXRlKGUsdCl9LGRheUNvbHVtbkhlYWRlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0LnRleHQuZGF5c1tlXX0sZGF0ZXRpbWU6ZnVuY3Rpb24oZSx0KXtpZighZSlyZXR1cm5cIlwiO3ZhciBhPVwidGltZVwiPT09dC50eXBlP1wiXCI6dC5mb3JtYXR0ZXIuZGF0ZShlLHQpLG49dC50eXBlLmluZGV4T2YoXCJ0aW1lXCIpPDA/XCJcIjp0LmZvcm1hdHRlci50aW1lKGUsdCwhMSksbz1cImRhdGV0aW1lXCI9PT10LnR5cGU/XCIgXCI6XCJcIjtyZXR1cm4gYStvK259LGRhdGU6ZnVuY3Rpb24oZSx0KXtpZighZSlyZXR1cm5cIlwiO3ZhciBhPWUuZ2V0RGF0ZSgpLG49dC50ZXh0Lm1vbnRoc1tlLmdldE1vbnRoKCldLG89ZS5nZXRGdWxsWWVhcigpO3JldHVyblwieWVhclwiPT09dC50eXBlP286XCJtb250aFwiPT09dC50eXBlP24rXCIgXCIrbzoodC5tb250aEZpcnN0P24rXCIgXCIrYTphK1wiIFwiK24pK1wiLCBcIitvfSx0aW1lOmZ1bmN0aW9uKGUsdCxhKXtpZighZSlyZXR1cm5cIlwiO3ZhciBuPWUuZ2V0SG91cnMoKSxvPWUuZ2V0TWludXRlcygpLHI9XCJcIjtyZXR1cm4gdC5hbXBtJiYocj1cIiBcIisobjwxMj90LnRleHQuYW06dC50ZXh0LnBtKSxuPTA9PT1uPzEyOm4+MTI/bi0xMjpuKSxuK1wiOlwiKyhvPDEwP1wiMFwiOlwiXCIpK28rcn0sdG9kYXk6ZnVuY3Rpb24oZSl7cmV0dXJuXCJkYXRlXCI9PT1lLnR5cGU/ZS50ZXh0LnRvZGF5OmUudGV4dC5ub3d9LGNlbGw6ZnVuY3Rpb24oZSx0LGEpe319LHBhcnNlcjp7ZGF0ZTpmdW5jdGlvbih0LGEpe2lmKCF0KXJldHVybiBudWxsO2lmKHQ9KFwiXCIrdCkudHJpbSgpLnRvTG93ZXJDYXNlKCksMD09PXQubGVuZ3RoKXJldHVybiBudWxsO3ZhciBvLHIsaSxsPS0xLGQ9LTEscz0tMSx1PS0xLHA9LTEsYz1uLGY9XCJ0aW1lXCI9PT1hLnR5cGUsaD1hLnR5cGUuaW5kZXhPZihcInRpbWVcIik8MCxnPXQuc3BsaXQoYS5yZWdFeHAuZGF0ZVdvcmRzKSxtPXQuc3BsaXQoYS5yZWdFeHAuZGF0ZU51bWJlcnMpO2lmKCFoKWZvcihjPWUuaW5BcnJheShhLnRleHQuYW0udG9Mb3dlckNhc2UoKSxnKT49MHx8IShlLmluQXJyYXkoYS50ZXh0LnBtLnRvTG93ZXJDYXNlKCksZyk+PTApJiZuLG89MDtvPG0ubGVuZ3RoO28rKyl7dmFyIHY9bVtvXTtpZih2LmluZGV4T2YoXCI6XCIpPj0wKXtpZihkPDB8fGw8MCl7dmFyIHk9di5zcGxpdChcIjpcIik7Zm9yKGk9MDtpPE1hdGgubWluKDIseS5sZW5ndGgpO2krKylyPXBhcnNlSW50KHlbaV0pLGlzTmFOKHIpJiYocj0wKSwwPT09aT9kPXIlMjQ6bD1yJTYwfW0uc3BsaWNlKG8sMSl9fWlmKCFmKXtmb3Iobz0wO288Zy5sZW5ndGg7bysrKXt2YXIgRD1nW29dO2lmKCEoRC5sZW5ndGg8PTApKXtmb3IoRD1ELnN1YnN0cmluZygwLE1hdGgubWluKEQubGVuZ3RoLDMpKSxyPTA7cjxhLnRleHQubW9udGhzLmxlbmd0aDtyKyspe3ZhciBiPWEudGV4dC5tb250aHNbcl07aWYoYj1iLnN1YnN0cmluZygwLE1hdGgubWluKEQubGVuZ3RoLE1hdGgubWluKGIubGVuZ3RoLDMpKSkudG9Mb3dlckNhc2UoKSxiPT09RCl7dT1yKzE7YnJlYWt9fWlmKHU+PTApYnJlYWt9fWZvcihvPTA7bzxtLmxlbmd0aDtvKyspaWYocj1wYXJzZUludChtW29dKSwhaXNOYU4ocikmJnI+NTkpe3A9cixtLnNwbGljZShvLDEpO2JyZWFrfWlmKHU8MClmb3Iobz0wO288bS5sZW5ndGg7bysrKWlmKGk9bz4xfHxhLm1vbnRoRmlyc3Q/bzoxPT09bz8wOjEscj1wYXJzZUludChtW2ldKSwhaXNOYU4ocikmJjE8PXImJnI8PTEyKXt1PXIsbS5zcGxpY2UoaSwxKTticmVha31mb3Iobz0wO288bS5sZW5ndGg7bysrKWlmKHI9cGFyc2VJbnQobVtvXSksIWlzTmFOKHIpJiYxPD1yJiZyPD0zMSl7cz1yLG0uc3BsaWNlKG8sMSk7YnJlYWt9aWYocDwwKWZvcihvPW0ubGVuZ3RoLTE7bz49MDtvLS0paWYocj1wYXJzZUludChtW29dKSwhaXNOYU4ocikpe3I8OTkmJihyKz0yZTMpLHA9cixtLnNwbGljZShvLDEpO2JyZWFrfX1pZighaCl7aWYoZDwwKWZvcihvPTA7bzxtLmxlbmd0aDtvKyspaWYocj1wYXJzZUludChtW29dKSwhaXNOYU4ocikmJjA8PXImJnI8PTIzKXtkPXIsbS5zcGxpY2UobywxKTticmVha31pZihsPDApZm9yKG89MDtvPG0ubGVuZ3RoO28rKylpZihyPXBhcnNlSW50KG1bb10pLCFpc05hTihyKSYmMDw9ciYmcjw9NTkpe2w9cixtLnNwbGljZShvLDEpO2JyZWFrfX1pZihsPDAmJmQ8MCYmczwwJiZ1PDAmJnA8MClyZXR1cm4gbnVsbDtsPDAmJihsPTApLGQ8MCYmKGQ9MCksczwwJiYocz0xKSx1PDAmJih1PTEpLHA8MCYmKHA9KG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpKSxjIT09biYmKGM/MTI9PT1kJiYoZD0wKTpkPDEyJiYoZCs9MTIpKTt2YXIgQz1uZXcgRGF0ZShwLHUtMSxzLGQsbCk7cmV0dXJuIEMuZ2V0TW9udGgoKT09PXUtMSYmQy5nZXRGdWxsWWVhcigpPT09cHx8KEM9bmV3IERhdGUocCx1LDAsZCxsKSksaXNOYU4oQy5nZXRUaW1lKCkpP251bGw6Q319LG9uQ2hhbmdlOmZ1bmN0aW9uKGUsdCxhKXtyZXR1cm4hMH0sb25TaG93OmZ1bmN0aW9uKCl7fSxvblZpc2libGU6ZnVuY3Rpb24oKXt9LG9uSGlkZTpmdW5jdGlvbigpe30sb25IaWRkZW46ZnVuY3Rpb24oKXt9LGlzRGlzYWJsZWQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMX0sc2VsZWN0b3I6e3BvcHVwOlwiLnVpLnBvcHVwXCIsaW5wdXQ6XCJpbnB1dFwiLGFjdGl2YXRvcjpcImlucHV0XCJ9LHJlZ0V4cDp7ZGF0ZVdvcmRzOi9bXkEtWmEtelxcdTAwQzAtXFx1MDI0Rl0rL2csZGF0ZU51bWJlcnM6L1teXFxkOl0rL2d9LGVycm9yOntwb3B1cDpcIlVJIFBvcHVwLCBhIHJlcXVpcmVkIGNvbXBvbmVudCBpcyBub3QgaW5jbHVkZWQgaW4gdGhpcyBwYWdlXCIsbWV0aG9kOlwiVGhlIG1ldGhvZCB5b3UgY2FsbGVkIGlzIG5vdCBkZWZpbmVkLlwifSxjbGFzc05hbWU6e2NhbGVuZGFyOlwiY2FsZW5kYXJcIixhY3RpdmU6XCJhY3RpdmVcIixwb3B1cDpcInVpIHBvcHVwXCIsZ3JpZDpcInVpIGVxdWFsIHdpZHRoIGdyaWRcIixjb2x1bW46XCJjb2x1bW5cIix0YWJsZTpcInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZVwiLHByZXY6XCJwcmV2IGxpbmtcIixuZXh0OlwibmV4dCBsaW5rXCIscHJldkljb246XCJjaGV2cm9uIGxlZnQgaWNvblwiLG5leHRJY29uOlwiY2hldnJvbiByaWdodCBpY29uXCIsbGluazpcImxpbmtcIixjZWxsOlwibGlua1wiLGRpc2FibGVkQ2VsbDpcImRpc2FibGVkXCIsYWRqYWNlbnRDZWxsOlwiYWRqYWNlbnRcIixhY3RpdmVDZWxsOlwiYWN0aXZlXCIscmFuZ2VDZWxsOlwicmFuZ2VcIixmb2N1c0NlbGw6XCJmb2N1c1wiLHRvZGF5Q2VsbDpcInRvZGF5XCIsdG9kYXk6XCJ0b2RheSBsaW5rXCJ9LG1ldGFkYXRhOntkYXRlOlwiZGF0ZVwiLGZvY3VzRGF0ZTpcImZvY3VzRGF0ZVwiLHN0YXJ0RGF0ZTpcInN0YXJ0RGF0ZVwiLGVuZERhdGU6XCJlbmREYXRlXCIsbW9kZTpcIm1vZGVcIixtb250aE9mZnNldDpcIm1vbnRoT2Zmc2V0XCJ9fX0oalF1ZXJ5LHdpbmRvdyxkb2N1bWVudCk7XG5cblxudmFyIG5hc2thaCA9IHtcblx0ZGF0YTogZmFsc2UsXG5cdGdldERhdGE6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBkYXRhID0ge1xuXHRcdFx0XCJuYXNrYWhcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAxLFxuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJOYXNrYWggQWthZGVtaWsgUlVVIFRlbnRhbmcgUGFqYWsgUGVydGFtYmFoYW4gTmlsYWkgQmFyYW5nIERhbiBKYXNhXCIsXG5cdFx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIk5hc2thaCBha2RlbWlrIGluaSBtZXJ1cGFrYW4gbmFza2FoIGFrYWRlbWlrIHVudHVrIFJVVSB0ZW50YW5nIHBhamFrIHBlcnRhbWJhaGFuIG5pbGFpIGJhcmFuZyBkYW4gamFzYS4gU2VtYWtpbiBiYW55YWtueWEgYmFyYW5nIGRhbiBqYXNhIHlhbmcgYWRhIGRpIEluZG9uZXNpYSBuYW11biBiYW55YWsgZGlhbnRhcmEgbWVyZWthIHlhbmcgdGlkYWsgbWVtYmF5YXIgcGFqYWsgXCIsXG5cdFx0XHRcdFx0XCJtb3JlRGVzY3JpcHRpb25cIjogXCJwZXJ0YW1iYWhhbiBuaWxhaSBiYXJhbmcgZGFuIGphc2EuIFNlbWFraW4gYmFueWFrbnlhIGJhcmFuZyBkYW4gamFzYSB5YW5nIGFkYSBkaSBJbmRvbmVzaWEgbmFtdW4gYmFueWFrIGRpYW50YXJhIG1lcmVrYSB5YW5nIHRpZGFrIG1lbWJheWFyIHBhamFrIGluaSBtZXJ1cGFrYW4gbmFza2FoIGFrYWRlbWlrIHVudHVrIFJVVSB0ZW50YW5nIHBhamFrIHBlcnRhbWJhaGFuIG5pbGFpIGJhcmFuZy5cIixcblx0XHRcdFx0XHRcInN0YXR1c1wiOiBcInRlcmVnaXN0ZXJcIixcblx0XHRcdFx0XHRcIndyaXRlVGV4dFwiOiBmYWxzZSxcblx0XHRcdFx0XHRcIm1vcmVcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJ0YW5nZ2FwYW5cIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWFcIjogXCJEYXZpZCBQdXJiYVwiLFxuXHRcdFx0XHRcdFx0XHRcImRhdGVcIjogXCJTZW5pbiwgMSBNZWkgMjAxNywgMTY6NDFcIixcblx0XHRcdFx0XHRcdFx0XCJ0YW5nZ2FwYW5cIjogXCJkYWxhbSBtZW55ZWxlc2Fpa2FuIG1hc2FsYWggcGVycGFqYWthbiB1bnR1ayBwZXJ0YW1iYWhhbiBuaWxhaSBiYXJhbmQgZGFuIGphc2EsIGRpIHBlcmx1a2FuIGtlcmphIHNhbWEgc2VsdXJ1aCBsYXBpc2FuIGVsZW1lbiBtYXN5YXJha2F0LiBQZW1lcmludGFoIGRhbGFtIGhhbCBpbmkgYmVycGVyYW4gcGVudGluZyB1bnR1ayBtZW5zb3NpYWxpc2FzaWthbiBuaWxhaSBwYWphayBkYWxhbSBzZXRpYXAgYmFyYW5nIGRhbiBqYXNhXCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtYVwiOiBcIktlbWVudHJpYW4gS2V1YW5nYW5cIixcblx0XHRcdFx0XHRcdFx0XCJkYXRlXCI6IFwiUmFidSwgOSBNYXJldCAyMDE3LCAxOToxMVwiLFxuXHRcdFx0XHRcdFx0XHRcInRhbmdnYXBhblwiOiBcImRhbGFtIG1lbnllbGVzYWlrYW4gbWFzYWxhaCBwZXJwYWpha2FuIHVudHVrIHBlcnRhbWJhaGFuIG5pbGFpIGJhcmFuZCBkYW4gamFzYSwgZGkgcGVybHVrYW4ga2VyamEgc2FtYSBzZWx1cnVoIGxhcGlzYW4gZWxlbWVuIG1hc3lhcmFrYXQuIFBlbWVyaW50YWggZGFsYW0gaGFsIGluaSBiZXJwZXJhbiBwZW50aW5nIHVudHVrIG1lbnNvc2lhbGlzYXNpa2FuIG5pbGFpIHBhamFrIGRhbGFtIHNldGlhcCBiYXJhbmcgZGFuIGphc2FcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJwZW5kdWt1bmdcIjogW1wid29yZFwiLCBcImV4Y2VsXCIsIFwicGRmXCJdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDIsXG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIk5hc2thaCBBa2FkZW1payBSVVUgVGVudGFuZyBLZXBhbGFuZ21lcmFoYW5cIixcblx0XHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiTmFza2FoIGFrZGVtaWsgaW5pIG1lcnVwYWthbiBuYXNrYWggYWthZGVtaWsgdW50dWsgUlVVIHRlbnRhbmcgcGFqYWsgcGVydGFtYmFoYW4gbmlsYWkgYmFyYW5nIGRhbiBqYXNhLiBTZW1ha2luIGJhbnlha255YSBiYXJhbmcgZGFuIGphc2EgeWFuZyBhZGEgZGkgSW5kb25lc2lhIG5hbXVuIGJhbnlhayBkaWFudGFyYSBtZXJla2EgeWFuZyB0aWRhayBtZW1iYXlhciBwYWphayBcIixcblx0XHRcdFx0XHRcIm1vcmVEZXNjcmlwdGlvblwiOiBcInBlcnRhbWJhaGFuIG5pbGFpIGJhcmFuZyBkYW4gamFzYS4gU2VtYWtpbiBiYW55YWtueWEgYmFyYW5nIGRhbiBqYXNhIHlhbmcgYWRhIGRpIEluZG9uZXNpYSBuYW11biBiYW55YWsgZGlhbnRhcmEgbWVyZWthIHlhbmcgdGlkYWsgbWVtYmF5YXIgcGFqYWsgaW5pIG1lcnVwYWthbiBuYXNrYWggYWthZGVtaWsgdW50dWsgUlVVIHRlbnRhbmcgcGFqYWsgcGVydGFtYmFoYW4gbmlsYWkgYmFyYW5nLlwiLFxuXHRcdFx0XHRcdFwic3RhdHVzXCI6IFwicGVyYmFpa2FuXCIsXG5cdFx0XHRcdFx0XCJ3cml0ZVRleHRcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJtb3JlXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwidGFuZ2dhcGFuXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1hXCI6IFwiRGF2aWQgUHVyYmFcIixcblx0XHRcdFx0XHRcdFx0XCJkYXRlXCI6IFwiU2VuaW4sIDEgTWVpIDIwMTcsIDE2OjQxXCIsXG5cdFx0XHRcdFx0XHRcdFwidGFuZ2dhcGFuXCI6IFwiZGFsYW0gbWVueWVsZXNhaWthbiBtYXNhbGFoIHBlcnBhamFrYW4gdW50dWsgcGVydGFtYmFoYW4gbmlsYWkgYmFyYW5kIGRhbiBqYXNhLCBkaSBwZXJsdWthbiBrZXJqYSBzYW1hIHNlbHVydWggbGFwaXNhbiBlbGVtZW4gbWFzeWFyYWthdC4gUGVtZXJpbnRhaCBkYWxhbSBoYWwgaW5pIGJlcnBlcmFuIHBlbnRpbmcgdW50dWsgbWVuc29zaWFsaXNhc2lrYW4gbmlsYWkgcGFqYWsgZGFsYW0gc2V0aWFwIGJhcmFuZyBkYW4gamFzYVwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWFcIjogXCJLZW1lbnRyaWFuIEtldWFuZ2FuXCIsXG5cdFx0XHRcdFx0XHRcdFwiZGF0ZVwiOiBcIlJhYnUsIDkgTWFyZXQgMjAxNywgMTk6MTFcIixcblx0XHRcdFx0XHRcdFx0XCJ0YW5nZ2FwYW5cIjogXCJkYWxhbSBtZW55ZWxlc2Fpa2FuIG1hc2FsYWggcGVycGFqYWthbiB1bnR1ayBwZXJ0YW1iYWhhbiBuaWxhaSBiYXJhbmQgZGFuIGphc2EsIGRpIHBlcmx1a2FuIGtlcmphIHNhbWEgc2VsdXJ1aCBsYXBpc2FuIGVsZW1lbiBtYXN5YXJha2F0LiBQZW1lcmludGFoIGRhbGFtIGhhbCBpbmkgYmVycGVyYW4gcGVudGluZyB1bnR1ayBtZW5zb3NpYWxpc2FzaWthbiBuaWxhaSBwYWphayBkYWxhbSBzZXRpYXAgYmFyYW5nIGRhbiBqYXNhXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwicGVuZHVrdW5nXCI6IFtcIndvcmRcIiwgXCJleGNlbFwiLCBcInBkZlwiXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAzLFxuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJOYXNrYWggQWthZGVtaWsgUlVVIFRlbnRhbmcgUGFqYWsgUGVydGFtYmFoYW4gTmlsYWkgQmFyYW5nIERhbiBKYXNhXCIsXG5cdFx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIk5hc2thaCBha2RlbWlrIGluaSBtZXJ1cGFrYW4gbmFza2FoIGFrYWRlbWlrIHVudHVrIFJVVSB0ZW50YW5nIHBhamFrIHBlcnRhbWJhaGFuIG5pbGFpIGJhcmFuZyBkYW4gamFzYS4gU2VtYWtpbiBiYW55YWtueWEgYmFyYW5nIGRhbiBqYXNhIHlhbmcgYWRhIGRpIEluZG9uZXNpYSBuYW11biBiYW55YWsgZGlhbnRhcmEgbWVyZWthIHlhbmcgdGlkYWsgbWVtYmF5YXIgcGFqYWsgXCIsXG5cdFx0XHRcdFx0XCJtb3JlRGVzY3JpcHRpb25cIjogXCJwZXJ0YW1iYWhhbiBuaWxhaSBiYXJhbmcgZGFuIGphc2EuIFNlbWFraW4gYmFueWFrbnlhIGJhcmFuZyBkYW4gamFzYSB5YW5nIGFkYSBkaSBJbmRvbmVzaWEgbmFtdW4gYmFueWFrIGRpYW50YXJhIG1lcmVrYSB5YW5nIHRpZGFrIG1lbWJheWFyIHBhamFrIGluaSBtZXJ1cGFrYW4gbmFza2FoIGFrYWRlbWlrIHVudHVrIFJVVSB0ZW50YW5nIHBhamFrIHBlcnRhbWJhaGFuIG5pbGFpIGJhcmFuZy5cIixcblx0XHRcdFx0XHRcInN0YXR1c1wiOiBcInBlbnllbGFyYXNhblwiLFxuXHRcdFx0XHRcdFwid3JpdGVUZXh0XCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwibW9yZVwiOiBmYWxzZSxcblx0XHRcdFx0XHRcInRhbmdnYXBhblwiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtYVwiOiBcIkRhdmlkIFB1cmJhXCIsXG5cdFx0XHRcdFx0XHRcdFwiZGF0ZVwiOiBcIlNlbmluLCAxIE1laSAyMDE3LCAxNjo0MVwiLFxuXHRcdFx0XHRcdFx0XHRcInRhbmdnYXBhblwiOiBcImRhbGFtIG1lbnllbGVzYWlrYW4gbWFzYWxhaCBwZXJwYWpha2FuIHVudHVrIHBlcnRhbWJhaGFuIG5pbGFpIGJhcmFuZCBkYW4gamFzYSwgZGkgcGVybHVrYW4ga2VyamEgc2FtYSBzZWx1cnVoIGxhcGlzYW4gZWxlbWVuIG1hc3lhcmFrYXQuIFBlbWVyaW50YWggZGFsYW0gaGFsIGluaSBiZXJwZXJhbiBwZW50aW5nIHVudHVrIG1lbnNvc2lhbGlzYXNpa2FuIG5pbGFpIHBhamFrIGRhbGFtIHNldGlhcCBiYXJhbmcgZGFuIGphc2FcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1hXCI6IFwiS2VtZW50cmlhbiBLZXVhbmdhblwiLFxuXHRcdFx0XHRcdFx0XHRcImRhdGVcIjogXCJSYWJ1LCA5IE1hcmV0IDIwMTcsIDE5OjExXCIsXG5cdFx0XHRcdFx0XHRcdFwidGFuZ2dhcGFuXCI6IFwiZGFsYW0gbWVueWVsZXNhaWthbiBtYXNhbGFoIHBlcnBhamFrYW4gdW50dWsgcGVydGFtYmFoYW4gbmlsYWkgYmFyYW5kIGRhbiBqYXNhLCBkaSBwZXJsdWthbiBrZXJqYSBzYW1hIHNlbHVydWggbGFwaXNhbiBlbGVtZW4gbWFzeWFyYWthdC4gUGVtZXJpbnRhaCBkYWxhbSBoYWwgaW5pIGJlcnBlcmFuIHBlbnRpbmcgdW50dWsgbWVuc29zaWFsaXNhc2lrYW4gbmlsYWkgcGFqYWsgZGFsYW0gc2V0aWFwIGJhcmFuZyBkYW4gamFzYVwiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcInBlbmR1a3VuZ1wiOiBbXCJ3b3JkXCIsIFwiZXhjZWxcIiwgXCJwZGZcIl1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH1cblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFza2FoJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHRcdC8vIHZhciBkYXRhO1xuXHRcdC8vICQuZ2V0SlNPTiggXCJkYXRhL25hc2thaC5qc29uXCIsIGZ1bmN0aW9uKCBkYXRhICkge1xuXHRcdC8vICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYXNrYWgnKSkge1xuXHRcdC8vIFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFza2FoJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHRcdC8vIFx0fVxuXHRcdC8vIH0pO1xuXHR9LFxufTtcblxubmFza2FoLmdldERhdGEoKTtcblxudmFyIGxvZ2luTW9kdWxlID0ge1xuXHR1c2VyczogZmFsc2UsXG5cdGVycm9yOiB0cnVlLFxuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmNoZWNrTG9naW4oKTtcblx0XHR0aGlzLmdldERhdGEoKTtcblx0XHR0aGlzLmNhY2hlRG9tKCk7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0XHR0aGlzLmJpbmRFdmVudHMoKTtcblx0fSxcblx0Y2FjaGVEb206IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJGxvZ2luID0gJCgnI2xvZ2luJyk7XG5cdFx0dGhpcy4kdXNlcm5hbWUgPSB0aGlzLiRsb2dpbi5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpO1xuXHRcdHRoaXMuJHBhc3N3b3JkID0gdGhpcy4kbG9naW4uZmluZCgnaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XG5cdFx0dGhpcy4kYnV0dG9uID0gdGhpcy4kbG9naW4uZmluZCgnYnV0dG9uJyk7XG5cdFx0dGhpcy4kbmFtZUxhYmVsID0gJCgnI3VzZXJuYW1lLWxhYmVsJyk7XG5cdFx0dGhpcy4kbG9nb3V0ID0gJCgnI2xvZ291dCcpO1xuXHRcdHRoaXMuJHVzZXJDb250cm9sID0gJCgnI3VzZXItY29udHJvbCcpO1xuXHRcdHRoaXMuJHVzZXJFeGlzdCA9ICQoJyN1c2VyLWV4aXN0Jyk7XG5cdFx0dGhpcy4kdXNlclVuZXhpc3QgPSAkKCcjdXNlci11bmV4aXN0Jyk7XG5cblx0XHR0aGlzLiRuYW1lUHJvZmlsZSA9ICQoJyNuYW1lLXByb2ZpbGUnKTtcblx0XHR0aGlzLiR1c2VybmFtZVByb2ZpbGUgPSAkKCcjdXNlcm5hbWUtcHJvZmlsZScpO1xuXG5cdH0sXG5cdGJpbmRFdmVudHM6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJGJ1dHRvbi5vbignY2xpY2snLCB0aGlzLmxvZ2luQWN0aW9uLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuJGxvZ291dC5vbignY2xpY2snLCB0aGlzLmxvZ291dC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLiRsb2dpbi5vbigna2V5cHJlc3MnLCAnaW5wdXQnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRpZihlLmtleUNvZGU9PT0xMykge1xuXHRcdFx0XHR0aGlzLmxvZ2luQWN0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fS5iaW5kKHRoaXMpKTtcblx0fSxcblx0Z2V0RGF0YTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcInVzZXJzXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogMSxcblx0XHRcdFx0XHRcInVzZXJuYW1lXCI6IFwicGFyaXdpc2F0YVwiLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIktlbWVudHJpYXdhbiBQYXJpd2lzYXRhXCIsXG5cdFx0XHRcdFx0XCJkZXB0XCI6IFwidXNlclwiLFxuXHRcdFx0XHRcdFwicGFzc3dvcmRcIjogXCJzZWNyZXRcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiAyLFxuXHRcdFx0XHRcdFwidXNlcm5hbWVcIjogXCJzdGFmZlwiLFxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkFkbWluaXN0cmF0b3IgQlBITlwiLFxuXHRcdFx0XHRcdFwiZGVwdFwiOiBcInN0YWZmXCIsXG5cdFx0XHRcdFx0XCJwYXNzd29yZFwiOiBcInNlY3JldFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDMsXG5cdFx0XHRcdFx0XCJ1c2VybmFtZVwiOiBcImtlbWVua2V1XCIsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiS2VtZW50cmlhbiBLZXVhbmdhblwiLFxuXHRcdFx0XHRcdFwiZGVwdFwiOiBcInVzZXJcIixcblx0XHRcdFx0XHRcInBhc3N3b3JkXCI6IFwic2VjcmV0XCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogNCxcblx0XHRcdFx0XHRcInVzZXJuYW1lXCI6IFwicGVyaWthbmFuXCIsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiS2VtZW50cmlhbiBQZXJpa2FuYW5cIixcblx0XHRcdFx0XHRcImRlcHRcIjogXCJ1c2VyXCIsXG5cdFx0XHRcdFx0XCJwYXNzd29yZFwiOiBcInNlY3JldFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IDUsXG5cdFx0XHRcdFx0XCJ1c2VybmFtZVwiOiBcImluZHVzdHJpXCIsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiS2VtZW50cmlhbiBJbmR1c3RyaVwiLFxuXHRcdFx0XHRcdFwiZGVwdFwiOiBcInVzZXJcIixcblx0XHRcdFx0XHRcInBhc3N3b3JkXCI6IFwic2VjcmV0XCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogNixcblx0XHRcdFx0XHRcInVzZXJuYW1lXCI6IFwia2FwdXNyZW5cIixcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJLYXB1c3JlbiBCUEhOXCIsXG5cdFx0XHRcdFx0XCJkZXB0XCI6IFwic3RhZmZcIixcblx0XHRcdFx0XHRcInBhc3N3b3JkXCI6IFwic2VjcmV0XCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogNyxcblx0XHRcdFx0XHRcInVzZXJuYW1lXCI6IFwia2VwYWxhXCIsXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiS2VwYWxhIEJQSE5cIixcblx0XHRcdFx0XHRcImRlcHRcIjogXCJzdGFmZlwiLFxuXHRcdFx0XHRcdFwicGFzc3dvcmRcIjogXCJzZWNyZXRcIlxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fVxuXHRcdC8vICQuZ2V0SlNPTiggXCIvZGF0YS91c2VyLmpzb25cIiwgZnVuY3Rpb24oIGRhdGEgKSB7XG5cdFx0ICB0aGlzLnVzZXJzID0gZGF0YTtcblx0XHQvLyB9KTtcblxuXHRcdC8vICQuYWpheCh7XG5cdFx0Ly8gXHRkYXRhVHlwZTogXCJqc29uXCIsXG5cdFx0Ly8gICBkYXRhOiBkYXRhLFxuXHRcdC8vICAgY29udGV4dDogdGhpcyxcblx0XHQvLyBcdHVybDogJy9kYXRhL3VzZXIuanNvbidcblx0XHQvLyB9KS5kb25lKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdC8vIFx0dGhpcy51c2VycyA9IGRhdGE7XG5cdFx0Ly8gfSk7XG5cdH0sXG5cdGxvZ2luQWN0aW9uOiBmdW5jdGlvbihlKSB7XG5cdFx0dGhpcy51c2Vycy51c2Vycy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRcdGlmKGl0ZW0udXNlcm5hbWUgPT09IHRoaXMuJHVzZXJuYW1lLnZhbCgpICYgaXRlbS5wYXNzd29yZCA9PT0gdGhpcy4kcGFzc3dvcmQudmFsKCkgKSB7XG5cdFx0XHRcdHRoaXMuZXJyb3IgPSBmYWxzZTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XG5cdFx0XHR9XG5cdFx0fS5iaW5kKHRoaXMpKTtcblx0XHR2YXIgbWVzc2FnZUVycm9yID0ge1xuXHRcdFx0dGl0bGU6ICdUZXJqYWRpIGtlYXNhbGFoYW4gbG9naW4nLFxuXHRcdFx0bWVzc2FnZTogJ01vaG9uIHBlcmlrc2Ega2VtYmFsaSB1c2VybmFtZSBkYW4gcGFzc3dvcmQnXG5cdFx0fTtcblx0XHR2YXIgbWVzc2FnZVN1Y2Nlc3MgPSB7XG5cdFx0XHR0aXRsZTogJ1NlbGFtYXQgZGF0YW5nIGtlbWJhbGknLFxuXHRcdFx0bWVzc2FnZTogJ1NlbGFtYXQgbWVuZ2d1bmFrYW4gYXBsaWthc2knXG5cdFx0fTtcblx0XHRpZih0aGlzLmVycm9yKSB7XG5cdFx0XHRub3RpZmljYXRpb25Nb2R1bGUucmVuZGVyKCdlcnJvcicsIG1lc3NhZ2VFcnJvcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5vdGlmaWNhdGlvbk1vZHVsZS5yZW5kZXIoJ3N1Y2Nlc3MnLCBtZXNzYWdlU3VjY2Vzcyk7XG5cdFx0XHRzZXRUaW1lb3V0KHRoaXMuY2hlY2tMb2dpbiwgNTAwKTtcblx0XHR9XG5cdFx0dGhpcy5zdG9yYWdlVXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG5cdH0sXG5cdGNoZWNrTG9naW46IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHBhZ2UgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnLycpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCEocGFnZVtwYWdlLmxlbmd0aC0xXSA9PT0gJ2luZGV4Lmh0bWwnIHx8IHBhZ2VbcGFnZS5sZW5ndGgtMV0gPT09ICdsb2dpbi5odG1sJykpXG5cdFx0Ly8gY29uc29sZS5sb2cocGFnZVtwYWdlLmxlbmd0aC0xXSk7XG5cdFx0aWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcblx0XHRcdGlmKCAhKHBhZ2VbcGFnZS5sZW5ndGgtMV0gPT09ICdpbmRleC5odG1sJyB8fCBwYWdlW3BhZ2UubGVuZ3RoLTFdID09PSAnbG9naW4uaHRtbCcpICkge1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24gPSBcImxvZ2luLmh0bWxcIlxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZihwYWdlW3BhZ2UubGVuZ3RoLTFdID09PSAnbG9naW4uaHRtbCcpIHtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uID0gXCJkYXNoYm9hcmQuaHRtbFwiO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLiR1c2VyRXhpc3QuaGlkZSgpO1xuXHRcdHRoaXMuJHVzZXJVbmV4aXN0LmhpZGUoKTtcblx0XHR0aGlzLnN0b3JhZ2VVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcblx0XHR2YXIgZGF0YVVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xuXHRcdGlmKGRhdGFVc2VyKSB7XG5cdFx0XHR0aGlzLiRuYW1lTGFiZWwudGV4dCh0aGlzLnN0b3JhZ2VVc2VyLm5hbWUpO1xuXHRcdFx0dGhpcy4kbmFtZVByb2ZpbGUudGV4dCh0aGlzLnN0b3JhZ2VVc2VyLm5hbWUpO1xuXHRcdFx0dGhpcy4kdXNlcm5hbWVQcm9maWxlLnZhbCh0aGlzLnN0b3JhZ2VVc2VyLnVzZXJuYW1lKTtcblx0XHRcdHRoaXMuJHVzZXJFeGlzdC5zaG93KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJHVzZXJVbmV4aXN0LnNob3coKTtcblx0XHR9XG5cdH0sXG5cdGxvZ291dDogZnVuY3Rpb24oKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcblx0XHR3aW5kb3cubG9jYXRpb24gPSAnaW5kZXguaHRtbCc7XG5cdH1cblxufTtcblxuXG5cbmxvZ2luTW9kdWxlLmluaXQoKTtcbmxvZ2luTW9kdWxlLnJlbmRlcigpO1xuXG5cbnZhciBub3RpZmljYXRpb25Nb2R1bGUgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuY2FjaGVEb20oKTtcblx0fSxcblx0Y2FjaGVEb206IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJG5vdGlmaWNhdGlvbiA9ICQoJyNub3RpZmljYXRpb24nKTtcblx0XHR0aGlzLiRub3RpZmljYXRpb25UaXRsZSA9ICQoJyN0aXRsZS1tZXNzYWdlJyk7XG5cdFx0dGhpcy4kbm90aWZpY2F0aW9uQ29udGVudCA9ICQoJyNjb250ZW50LW1lc3NhZ2UnKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbih0eXBlLCBtZXNzYWdlKSB7XG5cdFx0dGhpcy4kbm90aWZpY2F0aW9uLnJlbW92ZUNsYXNzKCdzdWNjZXNzIGVycm9yJyk7XG5cdFx0dGhpcy4kbm90aWZpY2F0aW9uLmNzcygndG9wJywgJy01MDBweCcpO1xuXHRcdHRoaXMuJG5vdGlmaWNhdGlvblRpdGxlLnRleHQobWVzc2FnZS50aXRsZSk7XG5cdFx0dGhpcy4kbm90aWZpY2F0aW9uQ29udGVudC50ZXh0KG1lc3NhZ2UubWVzc2FnZSk7XG5cdFx0aWYodHlwZSA9PT0gJ2Vycm9yJykge1xuXHRcdFx0dGhpcy4kbm90aWZpY2F0aW9uLmFkZENsYXNzKCdlcnJvcicpO1xuXHRcdFx0dGhpcy4kbm90aWZpY2F0aW9uLmNzcygndG9wJywgJzIwcHgnKTtcblx0XHR9IGVsc2UgaWYgKHR5cGUgPT09ICdzdWNjZXNzJykge1xuXHRcdFx0dGhpcy4kbm90aWZpY2F0aW9uLmFkZENsYXNzKCdzdWNjZXNzJyk7XG5cdFx0XHR0aGlzLiRub3RpZmljYXRpb24uY3NzKCd0b3AnLCAnMjBweCcpO1xuXHRcdH0gZWxzZSB7XG5cblx0XHR9XG5cdH1cbn07XG5cbm5vdGlmaWNhdGlvbk1vZHVsZS5pbml0KCk7XG5cbnZhciBwcmF0aW5qYXVNb2R1bGUgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuY2FjaGVEb20oKTtcblx0XHR0aGlzLmJpbmRFdmVudHMoKTtcblx0fSxcblx0Y2FjaGVEb206IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJHByYXRpbmphdVdyYXBwZXIgPSAkKCcjcHJhdGluamF1LXdyYXBwZXInKTtcblx0XHR0aGlzLiRwcmF0aW5qYXVTZW5kV3JhcHBlciA9ICQoJyNwcmF0aW5qYXUtc2VuZC13cmFwcGVyJyk7XG5cblx0XHR0aGlzLiRwcmF0aW5qYXUgPSAkKCcjcHJhdGluamF1Jyk7XG5cdFx0dGhpcy4kcHJhdGluamF1U2VuZCA9ICQoJyNwcmF0aW5qYXUtc2VuZCcpO1xuXHRcdHRoaXMuJHByYXRpbmphdUNsb3NlID0gJCgnI3ByYXRpbmphdS1jbG9zZScpO1xuXG5cdH0sXG5cdGJpbmRFdmVudHM6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJHByYXRpbmphdS5vbignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XG5cdFx0dGhpcy4kcHJhdGluamF1U2VuZC5vbignY2xpY2snLCB0aGlzLnNlbmQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy4kcHJhdGluamF1Q2xvc2Uub24oJ2NsaWNrJywgdGhpcy5jbG9zZVByYS5iaW5kKHRoaXMpKTtcblx0fSxcblx0b3BlbjogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy4kcHJhdGluamF1V3JhcHBlci5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuXHR9LFxuXHRzZW5kOiBmdW5jdGlvbigpIHtcblx0XHQvLyBjbG9zZVxuXHRcdHRoaXMuY2xvc2VQcmEoKTtcblx0XHQvLyBvcGVuIHRlcmVnaXN0ZXJcblx0XHR0aGlzLiRwcmF0aW5qYXVTZW5kV3JhcHBlci5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuXHR9LFxuXHRjbG9zZVByYTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy4kcHJhdGluamF1V3JhcHBlci5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHR9LFxufTtcbnByYXRpbmphdU1vZHVsZS5pbml0KCk7XG5cbnZhciBwZXJiYWlrYW5Nb2R1bGUgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuY2FjaGVEb20oKTtcblx0XHR0aGlzLmJpbmRFdmVudHMoKTtcblx0fSxcblx0Y2FjaGVEb206IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJHBlcmJhaWthblNlbmRXcmFwcGVyID0gJCgnI3BlcmJhaWthbi1zZW5kLXdyYXBwZXInKTtcblxuXHRcdHRoaXMuJHBlcmJhaWthblNlbmQgPSAkKCcjcGVyYmFpa2FuLXNlbmQnKTtcblxuXHR9LFxuXHRiaW5kRXZlbnRzOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLiRwZXJiYWlrYW5TZW5kLm9uKCdjbGljaycsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcblx0fSxcblx0b3BlbjogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy4kcGVyYmFpa2FuU2VuZFdyYXBwZXIuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcblx0fSxcblx0Y2xvc2VQcmE6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJHBlcmJhaWthbldyYXBwZXIuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0fSxcbn07XG5wZXJiYWlrYW5Nb2R1bGUuaW5pdCgpO1xuXG52YXIgcHJvbGVnbmFzTW9kdWxlID0ge1xuXHRydXU6IHRydWUsXG5cdHJ1dUt0OiBmYWxzZSxcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5jYWNoZURvbSgpO1xuXHRcdHRoaXMuYmluZEV2ZW50cygpO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH0sXG5cdGNhY2hlRG9tOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLiRydXUgPSAkKCcjcHJvbGVnbmFzLXJ1dScpO1xuXHRcdHRoaXMuJHJ1dUt0ID0gJCgnI3Byb2xlZ25hcy1ydXUta3QnKTtcblx0XHR0aGlzLiRydXVCb3ggPSAkKCcjZGFmdGFyLXJ1dS13cmFwcGVyJyk7XG5cdFx0dGhpcy4kcnV1S3RCb3ggPSAkKCcjZGFmdGFyLXJ1dS1rdC13cmFwcGVyJyk7XG5cdH0sXG5cdGJpbmRFdmVudHM6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJHJ1dS5vbignY2xpY2snLCB0aGlzLmNoZWNrUnV1LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuJHJ1dUt0Lm9uKCdjbGljaycsIHRoaXMuY2hlY2tSdXVLdC5iaW5kKHRoaXMpKTtcblx0fSxcblx0Y2hlY2tSdXU6IGZ1bmN0aW9uKGUpIHtcblx0XHR0aGlzLnJ1dSA9IHRydWU7XG5cdFx0dGhpcy5ydXVLdCA9IGZhbHNlO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH0sXG5cdGNoZWNrUnV1S3Q6IGZ1bmN0aW9uKGUpIHtcblx0XHR0aGlzLnJ1dSA9IGZhbHNlO1xuXHRcdHRoaXMucnV1S3QgPSB0cnVlO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy4kcnV1Qm94LmhpZGUoKTtcblx0XHR0aGlzLiRydXVLdEJveC5oaWRlKCk7XG5cdFx0aWYodGhpcy5ydXUpIHtcblx0XHRcdHRoaXMuJHJ1dUJveC5zaG93KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJHJ1dUt0Qm94LnNob3coKTtcblx0XHR9XG5cdH1cbn07XG5cbnByb2xlZ25hc01vZHVsZS5pbml0KCk7XG5cblxudmFyIG1rSW50ZXJuYXRpb25hbE1vZHVsZSA9IHtcblx0bWtpOiB0cnVlLFxuXHRta2lJbnQ6IGZhbHNlLFxuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmNhY2hlRG9tKCk7XG5cdFx0dGhpcy5iaW5kRXZlbnRzKCk7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fSxcblx0Y2FjaGVEb206IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJG1raSA9ICQoJyNta0ludGVybmF0aW9uYWwtbWsnKTtcblx0XHR0aGlzLiRta2lJbnQgPSAkKCcjbWtJbnRlcm5hdGlvbmFsLWludCcpO1xuXHRcdHRoaXMuJG1raUJveCA9ICQoJyNta0ludGVybmF0aW9uYWwtbWstd3JhcHBlcicpO1xuXHRcdHRoaXMuJG1raUludEJveCA9ICQoJyNta0ludGVybmF0aW9uYWwtaW50LXdyYXBwZXInKTtcblx0fSxcblx0YmluZEV2ZW50czogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy4kbWtpLm9uKCdjbGljaycsIHRoaXMuY2hlY2tta2kuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy4kbWtpSW50Lm9uKCdjbGljaycsIHRoaXMuY2hlY2tta2lJbnQuYmluZCh0aGlzKSk7XG5cdH0sXG5cdGNoZWNrbWtpOiBmdW5jdGlvbihlKSB7XG5cdFx0dGhpcy5ta2kgPSB0cnVlO1xuXHRcdHRoaXMubWtpSW50ID0gZmFsc2U7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fSxcblx0Y2hlY2tta2lJbnQ6IGZ1bmN0aW9uKGUpIHtcblx0XHR0aGlzLm1raSA9IGZhbHNlO1xuXHRcdHRoaXMubWtpSW50ID0gdHJ1ZTtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJG1raUJveC5oaWRlKCk7XG5cdFx0dGhpcy4kbWtpSW50Qm94LmhpZGUoKTtcblx0XHRpZih0aGlzLm1raSkge1xuXHRcdFx0dGhpcy4kbWtpQm94LnNob3coKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy4kbWtpSW50Qm94LnNob3coKTtcblx0XHR9XG5cdH1cbn07XG5cbm1rSW50ZXJuYXRpb25hbE1vZHVsZS5pbml0KCk7XG5cbnZhciBtYXhDaGFyYWN0ZXIgPSB7XG5cdG1heENoYXI6IDUwMCxcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5jYWNoZURvbSgpO1xuXHRcdHRoaXMuYmluZEV2ZW50cygpO1xuXHRcdHRoaXMucnVuKCk7XG5cdH0sXG5cdGJpbmRFdmVudHM6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJG1heENoYXIua2V5cHJlc3ModGhpcy5ydW4uYmluZCh0aGlzKSk7XG5cdFx0dGhpcy4kbWF4Q2hhci5iaW5kKFwiY3V0IGNvcHkgcGFzdGVcIixmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICB9KTtcblx0fSxcblx0Y2FjaGVEb206IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJG1heENoYXIgPSAkKCcjbWF4LWNoYXInKTtcblx0fSxcblx0cnVuOiBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHR2YWwgPSB0aGlzLiRtYXhDaGFyLnZhbCgpLHRsZW5ndGg7XG4gICAgXG4gICAgaWYodHZhbCkge1xuICAgICAgdGxlbmd0aCA9IHR2YWwubGVuZ3RoO1xuICAgIH1cbiAgICB2YXIgcmVtYWluID0gcGFyc2VJbnQodGhpcy5tYXhDaGFyIC0gdGxlbmd0aCk7XG4gICAgJCgnI2NvdW50LWNoYXInKS50ZXh0KHRsZW5ndGggKyAnLycgKyB0aGlzLm1heENoYXIpO1xuICAgIGlmIChyZW1haW4gPD0gMCAmJiBlLndoaWNoICE9PSAwICYmIGUuY2hhckNvZGUgIT09IDApIHtcbiAgICAgIHRoaXMuJG1heENoYXIudmFsKCh0dmFsKS5zdWJzdHJpbmcoMCwgdGxlbmd0aCAtIDEpKTtcbiAgICB9XG5cdH1cblxufTtcblxuXG5cbnZhciBsaXN0TmFza2FoID0gbmV3IFZ1ZSh7XG5cdGVsOiAnI2xpc3QtbmFza2FoJyxcblx0ZGF0YToge1xuXHRcdG5hc2thaDogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFza2FoJykpLFxuICBcdG5vOiAxXG5cdH1cbn0pO1xuXG52YXIgbGlzdE5hc2thaEZyb250ID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI2xpc3QtbmFza2FoLWZyb250JyxcbiAgZGF0YToge1xuICBcdG5hc2thaDogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFza2FoJykpLFxuICB9LFxuICBtZXRob2RzOiB7XG4gIFx0d3JpdGVUZXh0Rm9jdXM6IGZ1bmN0aW9uKCkge1xuICBcdFx0Y29uc29sZS5sb2codGhpcy5uYXNrYWgudGl0bGUpO1xuICBcdH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgXHRjaGVja0xvZ2luOiBmdW5jdGlvbigpIHtcbiAgXHRcdHZhciBsb2dpbiA9IGZhbHNlO1xuICBcdFx0aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xuICBcdFx0XHRsb2dpbiA9IHRydWU7XG4gIFx0XHR9XG4gIFx0XHRyZXR1cm4gbG9naW47XG4gIFx0fVxuICB9XG59KTtcblxuXG52YXIgbm90aWZpY2F0aW9uSGVhZGVyID0gbmV3IFZ1ZSh7XG5cdGVsOiAnI25vdGlmaWNhdGlvbi1oZWFkZXInLFxuXHRkYXRhOiB7XG5cdFx0bG9naW46IGZhbHNlLFxuXHRcdG9wZW5Ob3RpZjogZmFsc2UsXG5cdFx0bGlzdDogW1xuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJSVVUgUGFqYWtcIixcblx0XHRcdFx0ZnJvbTogXCJEYXZpZCBQdXJiYVwiLFxuXHRcdFx0XHRzaW5jZTogXCIzIEhhcmkgeWFuZyBsYWx1XCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRpdGxlOiBcIlJVVSBQYWpha1wiLFxuXHRcdFx0XHRmcm9tOiBcIktlbWVudHJpYW4gS2V1YW5nYW5cIixcblx0XHRcdFx0c2luY2U6IFwiMyBIYXJpIHlhbmcgbGFsdVwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJSVVUgUGFqYWtcIixcblx0XHRcdFx0ZnJvbTogXCJLZW1lbnRyaWFuIEx1YXIgTmVnZXJpXCIsXG5cdFx0XHRcdHNpbmNlOiBcIjMgSGFyaSB5YW5nIGxhbHVcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0bWV0aG9kczogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2kgY2xpY2tlZCcpO1xuXHRcdC8vIHRoaXMub3BlbiA9IHRydWU7XG5cdH0sXG5cdGNvbXB1dGVkOiB7XG4gIFx0Y2hlY2tMb2dpbjogZnVuY3Rpb24oKSB7XG4gIFx0XHR2YXIgbG9naW4gPSBmYWxzZTtcbiAgXHRcdGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcbiAgXHRcdFx0bG9naW4gPSB0cnVlO1xuICBcdFx0fVxuICBcdFx0cmV0dXJuIGxvZ2luO1xuICBcdH1cbiAgfVxufSk7XG5cbnZhciBtb2JpbGVNZW51ID0ge1xuXHRvcGVuOiBmYWxzZSxcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5jYWNoZURvbSgpO1xuXHRcdHRoaXMuYmluZEV2ZW50cygpO1xuXHR9LFxuXHRjYWNoZURvbTogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy4kdHJpZ2dlciA9ICQoJyNtZW51LXRyaWdnZXInKTtcblx0XHR0aGlzLiRzaWRlYmFyID0gJCgnYXNpZGUnKTtcblx0fSxcblx0YmluZEV2ZW50czogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy4kdHJpZ2dlci5vbignY2xpY2snLCB0aGlzLnJ1bi5iaW5kKHRoaXMpKTtcblx0fSxcblx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgc2l6ZSA9ICQoJ2JvZHknKS53aWR0aCgpO1xuXHRcdGlmKHNpemU8NTAwKSB7XG5cdFx0XHR0aGlzLm9wZW4gPSAodGhpcy5vcGVuKSA/IGZhbHNlIDogdHJ1ZTsgXG5cdFx0fVxuXHRcdHRoaXMudG9vZ2xlKCk7XG5cdH0sXG5cdHRvb2dsZTogZnVuY3Rpb24gKCkge1xuXHRcdGlmKHRoaXMub3Blbikge1xuXHRcdFx0dGhpcy4kc2lkZWJhci5jc3MoJ2xlZnQnLCAnMCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiRzaWRlYmFyLmNzcygnbGVmdCcsICctMTAwJScpO1xuXHRcdH1cblx0fVxufTtcbm1vYmlsZU1lbnUuaW5pdCgpO1xubWF4Q2hhcmFjdGVyLmluaXQoKTtcbiQoJyNkYXRlJykuY2FsZW5kYXIoe1xuXHRzdGFydE1vZGU6ICd5ZWFyJyxcblx0dHlwZTogJ2RhdGUnXG59KTtcblxuXG4kKCcudWkuZHJvcGRvd24nKS5kcm9wZG93bignaGlkZScpO1xuJCgnLnVpLnJhZGlvLmNoZWNrYm94JykuY2hlY2tib3goKTtcbiQoJy51aS5jaGVja2JveDInKS5jaGVja2JveCgpO1xuIl19

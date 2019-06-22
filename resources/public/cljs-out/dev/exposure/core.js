// Compiled by ClojureScript 1.10.339 {}
goog.provide('exposure.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
cljs.core.println.call(null,"This text is printed from src/exposure/core.cljs. Go ahead and edit it and see reloading in action.");
exposure.core.multiply = (function exposure$core$multiply(a,b){
return (a * b);
});
if((typeof exposure !== 'undefined') && (typeof exposure.core !== 'undefined') && (typeof exposure.core.app_state !== 'undefined')){
} else {
exposure.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
exposure.core.get_app_element = (function exposure$core$get_app_element(){
return goog.dom.getElement("app");
});
exposure.core.fstops = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(11),(9),(5),(10),(8)],["f/.95","f/11","f/1","f/4.0","f/8","f/2.0","f/1.4","f/45","f/22","f/5.6","f/32","f/16"]);
exposure.core.develop = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(5),(8)],["N+4","N-3","N+3","N (normal)","N-2","N+1","N+2","N-1","N-4"]);
exposure.core.smr = reagent.core.atom.call(null,(4));
exposure.core.hmr = reagent.core.atom.call(null,(8));
exposure.core.exposure = (function exposure$core$exposure(){
return new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"Zone System Calculator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Zone System Calculator"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Spot meter readings"], null),"Shadow meter reading: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Open",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,exposure.core.smr,cljs.core.dec);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Close",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,exposure.core.smr,cljs.core.inc);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),exposure.core.fstops.call(null,cljs.core.deref.call(null,exposure.core.smr))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),"Highlight meter reading: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Open",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,exposure.core.hmr,cljs.core.dec);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Close",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,exposure.core.hmr,cljs.core.inc);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),exposure.core.fstops.call(null,cljs.core.deref.call(null,exposure.core.hmr))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Solution"], null),"Dynamic range of scene is ",(cljs.core.deref.call(null,exposure.core.hmr) - cljs.core.deref.call(null,exposure.core.smr))," stops",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),"Expose at ",exposure.core.fstops.call(null,(cljs.core.deref.call(null,exposure.core.smr) + (2)))," to place shadows in Zone 3",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),"Develop at ",exposure.core.develop.call(null,(cljs.core.deref.call(null,exposure.core.hmr) - cljs.core.deref.call(null,exposure.core.smr)))," so highlights fall in Zone 7",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/ob325"], null),"github.com/ob325"], null)], null);
});
exposure.core.mount = (function exposure$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exposure.core.exposure], null),el);
});
exposure.core.mount_app_element = (function exposure$core$mount_app_element(){
var temp__5457__auto__ = exposure.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return exposure.core.mount.call(null,el);
} else {
return null;
}
});
exposure.core.mount_app_element.call(null);
exposure.core.on_reload = (function exposure$core$on_reload(){
return exposure.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map

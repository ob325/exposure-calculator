// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__9631__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9631 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9632__i = 0, G__9632__a = new Array(arguments.length -  0);
while (G__9632__i < G__9632__a.length) {G__9632__a[G__9632__i] = arguments[G__9632__i + 0]; ++G__9632__i;}
  args = new cljs.core.IndexedSeq(G__9632__a,0,null);
} 
return G__9631__delegate.call(this,args);};
G__9631.cljs$lang$maxFixedArity = 0;
G__9631.cljs$lang$applyTo = (function (arglist__9633){
var args = cljs.core.seq(arglist__9633);
return G__9631__delegate(args);
});
G__9631.cljs$core$IFn$_invoke$arity$variadic = G__9631__delegate;
return G__9631;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9634__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9635__i = 0, G__9635__a = new Array(arguments.length -  0);
while (G__9635__i < G__9635__a.length) {G__9635__a[G__9635__i] = arguments[G__9635__i + 0]; ++G__9635__i;}
  args = new cljs.core.IndexedSeq(G__9635__a,0,null);
} 
return G__9634__delegate.call(this,args);};
G__9634.cljs$lang$maxFixedArity = 0;
G__9634.cljs$lang$applyTo = (function (arglist__9636){
var args = cljs.core.seq(arglist__9636);
return G__9634__delegate(args);
});
G__9634.cljs$core$IFn$_invoke$arity$variadic = G__9634__delegate;
return G__9634;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map

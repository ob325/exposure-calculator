// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18995){
var map__18996 = p__18995;
var map__18996__$1 = ((((!((map__18996 == null)))?(((((map__18996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18996):map__18996);
var m = map__18996__$1;
var n = cljs.core.get.call(null,map__18996__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18996__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18998_19020 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18999_19021 = null;
var count__19000_19022 = (0);
var i__19001_19023 = (0);
while(true){
if((i__19001_19023 < count__19000_19022)){
var f_19024 = cljs.core._nth.call(null,chunk__18999_19021,i__19001_19023);
cljs.core.println.call(null,"  ",f_19024);


var G__19025 = seq__18998_19020;
var G__19026 = chunk__18999_19021;
var G__19027 = count__19000_19022;
var G__19028 = (i__19001_19023 + (1));
seq__18998_19020 = G__19025;
chunk__18999_19021 = G__19026;
count__19000_19022 = G__19027;
i__19001_19023 = G__19028;
continue;
} else {
var temp__5457__auto___19029 = cljs.core.seq.call(null,seq__18998_19020);
if(temp__5457__auto___19029){
var seq__18998_19030__$1 = temp__5457__auto___19029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18998_19030__$1)){
var c__4351__auto___19031 = cljs.core.chunk_first.call(null,seq__18998_19030__$1);
var G__19032 = cljs.core.chunk_rest.call(null,seq__18998_19030__$1);
var G__19033 = c__4351__auto___19031;
var G__19034 = cljs.core.count.call(null,c__4351__auto___19031);
var G__19035 = (0);
seq__18998_19020 = G__19032;
chunk__18999_19021 = G__19033;
count__19000_19022 = G__19034;
i__19001_19023 = G__19035;
continue;
} else {
var f_19036 = cljs.core.first.call(null,seq__18998_19030__$1);
cljs.core.println.call(null,"  ",f_19036);


var G__19037 = cljs.core.next.call(null,seq__18998_19030__$1);
var G__19038 = null;
var G__19039 = (0);
var G__19040 = (0);
seq__18998_19020 = G__19037;
chunk__18999_19021 = G__19038;
count__19000_19022 = G__19039;
i__19001_19023 = G__19040;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19041 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19041);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19041)))?cljs.core.second.call(null,arglists_19041):arglists_19041));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19002_19042 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19003_19043 = null;
var count__19004_19044 = (0);
var i__19005_19045 = (0);
while(true){
if((i__19005_19045 < count__19004_19044)){
var vec__19006_19046 = cljs.core._nth.call(null,chunk__19003_19043,i__19005_19045);
var name_19047 = cljs.core.nth.call(null,vec__19006_19046,(0),null);
var map__19009_19048 = cljs.core.nth.call(null,vec__19006_19046,(1),null);
var map__19009_19049__$1 = ((((!((map__19009_19048 == null)))?(((((map__19009_19048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19009_19048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19009_19048):map__19009_19048);
var doc_19050 = cljs.core.get.call(null,map__19009_19049__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19051 = cljs.core.get.call(null,map__19009_19049__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19047);

cljs.core.println.call(null," ",arglists_19051);

if(cljs.core.truth_(doc_19050)){
cljs.core.println.call(null," ",doc_19050);
} else {
}


var G__19052 = seq__19002_19042;
var G__19053 = chunk__19003_19043;
var G__19054 = count__19004_19044;
var G__19055 = (i__19005_19045 + (1));
seq__19002_19042 = G__19052;
chunk__19003_19043 = G__19053;
count__19004_19044 = G__19054;
i__19005_19045 = G__19055;
continue;
} else {
var temp__5457__auto___19056 = cljs.core.seq.call(null,seq__19002_19042);
if(temp__5457__auto___19056){
var seq__19002_19057__$1 = temp__5457__auto___19056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19002_19057__$1)){
var c__4351__auto___19058 = cljs.core.chunk_first.call(null,seq__19002_19057__$1);
var G__19059 = cljs.core.chunk_rest.call(null,seq__19002_19057__$1);
var G__19060 = c__4351__auto___19058;
var G__19061 = cljs.core.count.call(null,c__4351__auto___19058);
var G__19062 = (0);
seq__19002_19042 = G__19059;
chunk__19003_19043 = G__19060;
count__19004_19044 = G__19061;
i__19005_19045 = G__19062;
continue;
} else {
var vec__19011_19063 = cljs.core.first.call(null,seq__19002_19057__$1);
var name_19064 = cljs.core.nth.call(null,vec__19011_19063,(0),null);
var map__19014_19065 = cljs.core.nth.call(null,vec__19011_19063,(1),null);
var map__19014_19066__$1 = ((((!((map__19014_19065 == null)))?(((((map__19014_19065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19014_19065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19014_19065):map__19014_19065);
var doc_19067 = cljs.core.get.call(null,map__19014_19066__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19068 = cljs.core.get.call(null,map__19014_19066__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19064);

cljs.core.println.call(null," ",arglists_19068);

if(cljs.core.truth_(doc_19067)){
cljs.core.println.call(null," ",doc_19067);
} else {
}


var G__19069 = cljs.core.next.call(null,seq__19002_19057__$1);
var G__19070 = null;
var G__19071 = (0);
var G__19072 = (0);
seq__19002_19042 = G__19069;
chunk__19003_19043 = G__19070;
count__19004_19044 = G__19071;
i__19005_19045 = G__19072;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__19016 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19017 = null;
var count__19018 = (0);
var i__19019 = (0);
while(true){
if((i__19019 < count__19018)){
var role = cljs.core._nth.call(null,chunk__19017,i__19019);
var temp__5457__auto___19073__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___19073__$1)){
var spec_19074 = temp__5457__auto___19073__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19074));
} else {
}


var G__19075 = seq__19016;
var G__19076 = chunk__19017;
var G__19077 = count__19018;
var G__19078 = (i__19019 + (1));
seq__19016 = G__19075;
chunk__19017 = G__19076;
count__19018 = G__19077;
i__19019 = G__19078;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__19016);
if(temp__5457__auto____$1){
var seq__19016__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19016__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__19016__$1);
var G__19079 = cljs.core.chunk_rest.call(null,seq__19016__$1);
var G__19080 = c__4351__auto__;
var G__19081 = cljs.core.count.call(null,c__4351__auto__);
var G__19082 = (0);
seq__19016 = G__19079;
chunk__19017 = G__19080;
count__19018 = G__19081;
i__19019 = G__19082;
continue;
} else {
var role = cljs.core.first.call(null,seq__19016__$1);
var temp__5457__auto___19083__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___19083__$2)){
var spec_19084 = temp__5457__auto___19083__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19084));
} else {
}


var G__19085 = cljs.core.next.call(null,seq__19016__$1);
var G__19086 = null;
var G__19087 = (0);
var G__19088 = (0);
seq__19016 = G__19085;
chunk__19017 = G__19086;
count__19018 = G__19087;
i__19019 = G__19088;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map

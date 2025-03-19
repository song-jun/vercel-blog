import{b as k}from"./chunk-6XGRHI2A-DUob-WSm.js";import{Z as f,l as m,L as q,N as ot,I as E,D,h as A,a as ae,J as w,b as L,c as y,y as T,d as Ne,Q as _,O as ue,t as rt,e as de,f as P,X as C,F as j,g as it,n as G,v as at,k as ut,r as dt}from"./chunk-BKDDFIKN-B3IkBjs5.js";import{m as d,l as H,n as st,o as ct}from"./mermaid.esm.min-qx24aiau.js";function N(e,n,t,o){var r;do r=ae(o);while(e.hasNode(r));return t.dummy=n,e.setNode(r,t),r}d(N,"addDummyNode");function Ie(e){var n=new k().setGraph(e.graph());return f(e.nodes(),function(t){n.setNode(t,e.node(t))}),f(e.edges(),function(t){var o=n.edge(t.v,t.w)||{weight:0,minlen:1},r=e.edge(t);n.setEdge(t.v,t.w,{weight:o.weight+r.weight,minlen:Math.max(o.minlen,r.minlen)})}),n}d(Ie,"simplify");function se(e){var n=new k({multigraph:e.isMultigraph()}).setGraph(e.graph());return f(e.nodes(),function(t){e.children(t).length||n.setNode(t,e.node(t))}),f(e.edges(),function(t){n.setEdge(t,e.edge(t))}),n}d(se,"asNonCompoundGraph");function Z(e,n){var t=e.x,o=e.y,r=n.x-t,i=n.y-o,a=e.width/2,u=e.height/2;if(!r&&!i)throw new Error("Not possible to find intersection inside of the rectangle");var s,c;return Math.abs(i)*a>Math.abs(r)*u?(i<0&&(u=-u),s=u*r/i,c=u):(r<0&&(a=-a),s=a,c=a*i/r),{x:t+s,y:o+c}}d(Z,"intersectRect");function O(e){var n=w(L(ce(e)+1),function(){return[]});return f(e.nodes(),function(t){var o=e.node(t),r=o.rank;y(r)||(n[r][o.order]=t)}),n}d(O,"buildLayerMatrix");function Le(e){var n=T(w(e.nodes(),function(t){return e.node(t).rank}));f(e.nodes(),function(t){var o=e.node(t);m(o,"rank")&&(o.rank-=n)})}d(Le,"normalizeRanks");function Ce(e){var n=T(w(e.nodes(),function(i){return e.node(i).rank})),t=[];f(e.nodes(),function(i){var a=e.node(i).rank-n;t[a]||(t[a]=[]),t[a].push(i)});var o=0,r=e.graph().nodeRankFactor;f(t,function(i,a){y(i)&&a%r!==0?--o:o&&f(i,function(u){e.node(u).rank+=o})})}d(Ce,"removeEmptyRanks");function Q(e,n,t,o){var r={width:0,height:0};return arguments.length>=4&&(r.rank=t,r.order=o),N(e,"border",r,n)}d(Q,"addBorderNode");function ce(e){return E(w(e.nodes(),function(n){var t=e.node(n).rank;if(!y(t))return t}))}d(ce,"maxRank");function Re(e,n){var t={lhs:[],rhs:[]};return f(e,function(o){n(o)?t.lhs.push(o):t.rhs.push(o)}),t}d(Re,"partition");function Se(e,n){var t=Ne();try{return n()}finally{console.log(e+" time: "+(Ne()-t)+"ms")}}d(Se,"time");function Te(e,n){return n()}d(Te,"notime");function Me(e){function n(t){var o=e.children(t),r=e.node(t);if(o.length&&f(o,n),m(r,"minRank")){r.borderLeft=[],r.borderRight=[];for(var i=r.minRank,a=r.maxRank+1;i<a;++i)K(e,"borderLeft","_bl",t,r,i),K(e,"borderRight","_br",t,r,i)}}d(n,"dfs"),f(e.children(),n)}d(Me,"addBorderSegments");function K(e,n,t,o,r,i){var a={width:0,height:0,rank:i,borderType:n},u=r[n][i-1],s=N(e,"border",a,t);r[n][i]=s,e.setParent(s,o),u&&e.setEdge(u,s,{weight:1})}d(K,"addBorderNode");function _e(e){var n=e.graph().rankdir.toLowerCase();(n==="lr"||n==="rl")&&fe(e)}d(_e,"adjust");function Pe(e){var n=e.graph().rankdir.toLowerCase();(n==="bt"||n==="rl")&&Ge(e),(n==="lr"||n==="rl")&&(Oe(e),fe(e))}d(Pe,"undo");function fe(e){f(e.nodes(),function(n){U(e.node(n))}),f(e.edges(),function(n){U(e.edge(n))})}d(fe,"swapWidthHeight");function U(e){var n=e.width;e.width=e.height,e.height=n}d(U,"swapWidthHeightOne");function Ge(e){f(e.nodes(),function(n){F(e.node(n))}),f(e.edges(),function(n){var t=e.edge(n);f(t.points,F),m(t,"y")&&F(t)})}d(Ge,"reverseY");function F(e){e.y=-e.y}d(F,"reverseYOne");function Oe(e){f(e.nodes(),function(n){B(e.node(n))}),f(e.edges(),function(n){var t=e.edge(n);f(t.points,B),m(t,"x")&&B(t)})}d(Oe,"swapXY");function B(e){var n=e.x;e.x=e.y,e.y=n}d(B,"swapXYOne");var I,ft=(I=class{constructor(){var n={};n._next=n._prev=n,this._sentinel=n}dequeue(){var n=this._sentinel,t=n._prev;if(t!==n)return ee(t),t}enqueue(n){var t=this._sentinel;n._prev&&n._next&&ee(n),n._next=t._next,t._next._prev=n,t._next=n,n._prev=t}toString(){for(var n=[],t=this._sentinel,o=t._prev;o!==t;)n.push(JSON.stringify(o,Fe)),o=o._prev;return"["+n.join(", ")+"]"}},d(I,"List"),I);function ee(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}d(ee,"unlink");function Fe(e,n){if(e!=="_next"&&e!=="_prev")return n}d(Fe,"filterOutLinks");var gt=st(1);function Be(e,n){if(e.nodeCount()<=1)return[];var t=Ve(e,n||gt),o=Ye(t.graph,t.buckets,t.zeroIdx);return _(w(o,function(r){return e.outEdges(r.v,r.w)}))}d(Be,"greedyFAS");function Ye(e,n,t){for(var o=[],r=n[n.length-1],i=n[0],a;e.nodeCount();){for(;a=i.dequeue();)Y(e,n,t,a);for(;a=r.dequeue();)Y(e,n,t,a);if(e.nodeCount()){for(var u=n.length-2;u>0;--u)if(a=n[u].dequeue(),a){o=o.concat(Y(e,n,t,a,!0));break}}}return o}d(Ye,"doGreedyFAS");function Y(e,n,t,o,r){var i=r?[]:void 0;return f(e.inEdges(o.v),function(a){var u=e.edge(a),s=e.node(a.v);r&&i.push({v:a.v,w:a.w}),s.out-=u,z(n,t,s)}),f(e.outEdges(o.v),function(a){var u=e.edge(a),s=a.w,c=e.node(s);c.in-=u,z(n,t,c)}),e.removeNode(o.v),i}d(Y,"removeNode");function Ve(e,n){var t=new k,o=0,r=0;f(e.nodes(),function(u){t.setNode(u,{v:u,in:0,out:0})}),f(e.edges(),function(u){var s=t.edge(u.v,u.w)||0,c=n(u),g=s+c;t.setEdge(u.v,u.w,g),r=Math.max(r,t.node(u.v).out+=c),o=Math.max(o,t.node(u.w).in+=c)});var i=L(r+o+3).map(function(){return new ft}),a=o+1;return f(t.nodes(),function(u){z(i,a,t.node(u))}),{graph:t,buckets:i,zeroIdx:a}}d(Ve,"buildState");function z(e,n,t){t.out?t.in?e[t.out-t.in+n].enqueue(t):e[e.length-1].enqueue(t):e[0].enqueue(t)}d(z,"assignBucket");function $e(e){var n=e.graph().acyclicer==="greedy"?Be(e,t(e)):qe(e);f(n,function(o){var r=e.edge(o);e.removeEdge(o),r.forwardName=o.name,r.reversed=!0,e.setEdge(o.w,o.v,r,ae("rev"))});function t(o){return function(r){return o.edge(r).weight}}d(t,"weightFn")}d($e,"run");function qe(e){var n=[],t={},o={};function r(i){m(o,i)||(o[i]=!0,t[i]=!0,f(e.outEdges(i),function(a){m(t,a.w)?n.push(a):r(a.w)}),delete t[i])}return d(r,"dfs"),f(e.nodes(),r),n}d(qe,"dfsFAS");function De(e){f(e.edges(),function(n){var t=e.edge(n);if(t.reversed){e.removeEdge(n);var o=t.forwardName;delete t.reversed,delete t.forwardName,e.setEdge(n.w,n.v,t,o)}})}d(De,"undo");function ze(e){e.graph().dummyChains=[],f(e.edges(),function(n){Ae(e,n)})}d(ze,"run");function Ae(e,n){var t=n.v,o=e.node(t).rank,r=n.w,i=e.node(r).rank,a=n.name,u=e.edge(n),s=u.labelRank;if(i!==o+1){e.removeEdge(n);var c,g,h;for(h=0,++o;o<i;++h,++o)u.points=[],g={width:0,height:0,edgeLabel:u,edgeObj:n,rank:o},c=N(e,"edge",g,"_d"),o===s&&(g.width=u.width,g.height=u.height,g.dummy="edge-label",g.labelpos=u.labelpos),e.setEdge(t,c,{weight:u.weight},a),h===0&&e.graph().dummyChains.push(c),t=c;e.setEdge(t,r,{weight:u.weight},a)}}d(Ae,"normalizeEdge");function je(e){f(e.graph().dummyChains,function(n){var t=e.node(n),o=t.edgeLabel,r;for(e.setEdge(t.edgeObj,o);t.dummy;)r=e.successors(n)[0],e.removeNode(n),o.points.push({x:t.x,y:t.y}),t.dummy==="edge-label"&&(o.x=t.x,o.y=t.y,o.width=t.width,o.height=t.height),n=r,t=e.node(n)})}d(je,"undo");function W(e){var n={};function t(o){var r=e.node(o);if(m(n,o))return r.rank;n[o]=!0;var i=T(w(e.outEdges(o),function(a){return t(a.w)-e.edge(a).minlen}));return(i===Number.POSITIVE_INFINITY||i===void 0||i===null)&&(i=0),r.rank=i}d(t,"dfs"),f(e.sources(),t)}d(W,"longestPath");function R(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}d(R,"slack");function ge(e){var n=new k({directed:!1}),t=e.nodes()[0],o=e.nodeCount();n.setNode(t,{});for(var r,i;We(n,e)<o;)r=Xe(n,e),i=n.hasNode(r.v)?R(e,r):-R(e,r),Je(n,e,i);return n}d(ge,"feasibleTree");function We(e,n){function t(o){f(n.nodeEdges(o),function(r){var i=r.v,a=o===i?r.w:i;!e.hasNode(a)&&!R(n,r)&&(e.setNode(a,{}),e.setEdge(o,a,{}),t(a))})}return d(t,"dfs"),f(e.nodes(),t),e.nodeCount()}d(We,"tightTree");function Xe(e,n){return ue(n.edges(),function(t){if(e.hasNode(t.v)!==e.hasNode(t.w))return R(n,t)})}d(Xe,"findMinSlackEdge");function Je(e,n,t){f(e.nodes(),function(o){n.node(o).rank+=t})}d(Je,"shiftRanks");He.CycleException=M;function He(e){var n={},t={},o=[];function r(i){if(m(t,i))throw new M;m(n,i)||(t[i]=!0,n[i]=!0,f(e.predecessors(i),r),delete t[i],o.push(i))}if(d(r,"visit"),f(e.sinks(),r),rt(n)!==e.nodeCount())throw new M;return o}d(He,"topsort");function M(){}d(M,"CycleException");M.prototype=new Error;function he(e,n,t){ct(n)||(n=[n]);var o=(e.isDirected()?e.successors:e.neighbors).bind(e),r=[],i={};return f(n,function(a){if(!e.hasNode(a))throw new Error("Graph does not have node: "+a);ve(e,a,t==="post",i,o,r)}),r}d(he,"dfs");function ve(e,n,t,o,r,i){m(o,n)||(o[n]=!0,t||i.push(n),f(r(n),function(a){ve(e,a,t,o,r,i)}),t&&i.push(n))}d(ve,"doDfs");function Ze(e,n){return he(e,n,"post")}d(Ze,"postorder");function Qe(e,n){return he(e,n,"pre")}d(Qe,"preorder");x.initLowLimValues=J;x.initCutValues=X;x.calcCutValue=le;x.leaveEdge=me;x.enterEdge=we;x.exchangeEdges=be;function x(e){e=Ie(e),W(e);var n=ge(e);J(n),X(n,e);for(var t,o;t=me(n);)o=we(n,e,t),be(n,e,t,o)}d(x,"networkSimplex");function X(e,n){var t=Ze(e,e.nodes());t=t.slice(0,t.length-1),f(t,function(o){Ke(e,n,o)})}d(X,"initCutValues");function Ke(e,n,t){var o=e.node(t),r=o.parent;e.edge(t,r).cutvalue=le(e,n,t)}d(Ke,"assignCutValue");function le(e,n,t){var o=e.node(t),r=o.parent,i=!0,a=n.edge(t,r),u=0;return a||(i=!1,a=n.edge(r,t)),u=a.weight,f(n.nodeEdges(t),function(s){var c=s.v===t,g=c?s.w:s.v;if(g!==r){var h=c===i,v=n.edge(s).weight;if(u+=h?v:-v,en(e,t,g)){var l=e.edge(t,g).cutvalue;u+=h?-l:l}}}),u}d(le,"calcCutValue");function J(e,n){arguments.length<2&&(n=e.nodes()[0]),pe(e,{},1,n)}d(J,"initLowLimValues");function pe(e,n,t,o,r){var i=t,a=e.node(o);return n[o]=!0,f(e.neighbors(o),function(u){m(n,u)||(t=pe(e,n,t,u,o))}),a.low=i,a.lim=t++,r?a.parent=r:delete a.parent,t}d(pe,"dfsAssignLowLim");function me(e){return de(e.edges(),function(n){return e.edge(n).cutvalue<0})}d(me,"leaveEdge");function we(e,n,t){var o=t.v,r=t.w;n.hasEdge(o,r)||(o=t.w,r=t.v);var i=e.node(o),a=e.node(r),u=i,s=!1;i.lim>a.lim&&(u=a,s=!0);var c=P(n.edges(),function(g){return s===ne(e,e.node(g.v),u)&&s!==ne(e,e.node(g.w),u)});return ue(c,function(g){return R(n,g)})}d(we,"enterEdge");function be(e,n,t,o){var r=t.v,i=t.w;e.removeEdge(r,i),e.setEdge(o.v,o.w,{}),J(e),X(e,n),Ue(e,n)}d(be,"exchangeEdges");function Ue(e,n){var t=de(e.nodes(),function(r){return!n.node(r).parent}),o=Qe(e,t);o=o.slice(1),f(o,function(r){var i=e.node(r).parent,a=n.edge(r,i),u=!1;a||(a=n.edge(i,r),u=!0),n.node(r).rank=n.node(i).rank+(u?a.minlen:-a.minlen)})}d(Ue,"updateRanks");function en(e,n,t){return e.hasEdge(n,t)}d(en,"isTreeEdge");function ne(e,n,t){return t.low<=n.lim&&n.lim<=t.lim}d(ne,"isDescendant");function nn(e){switch(e.graph().ranker){case"network-simplex":te(e);break;case"tight-tree":tn(e);break;case"longest-path":ht(e);break;default:te(e)}}d(nn,"rank");var ht=W;function tn(e){W(e),ge(e)}d(tn,"tightTreeRanker");function te(e){x(e)}d(te,"networkSimplexRanker");function on(e){var n=N(e,"root",{},"_root"),t=rn(e),o=E(C(t))-1,r=2*o+1;e.graph().nestingRoot=n,f(e.edges(),function(a){e.edge(a).minlen*=r});var i=an(e)+1;f(e.children(),function(a){ye(e,n,r,i,o,t,a)}),e.graph().nodeRankFactor=r}d(on,"run");function ye(e,n,t,o,r,i,a){var u=e.children(a);if(!u.length){a!==n&&e.setEdge(n,a,{weight:0,minlen:t});return}var s=Q(e,"_bt"),c=Q(e,"_bb"),g=e.node(a);e.setParent(s,a),g.borderTop=s,e.setParent(c,a),g.borderBottom=c,f(u,function(h){ye(e,n,t,o,r,i,h);var v=e.node(h),l=v.borderTop?v.borderTop:h,p=v.borderBottom?v.borderBottom:h,b=v.borderTop?o:2*o,S=l!==p?1:r-i[a]+1;e.setEdge(s,l,{weight:b,minlen:S,nestingEdge:!0}),e.setEdge(p,c,{weight:b,minlen:S,nestingEdge:!0})}),e.parent(a)||e.setEdge(n,s,{weight:0,minlen:r+i[a]})}d(ye,"dfs");function rn(e){var n={};function t(o,r){var i=e.children(o);i&&i.length&&f(i,function(a){t(a,r+1)}),n[o]=r}return d(t,"dfs"),f(e.children(),function(o){t(o,1)}),n}d(rn,"treeDepths");function an(e){return j(e.edges(),function(n,t){return n+e.edge(t).weight},0)}d(an,"sumWeights");function un(e){var n=e.graph();e.removeNode(n.nestingRoot),delete n.nestingRoot,f(e.edges(),function(t){var o=e.edge(t);o.nestingEdge&&e.removeEdge(t)})}d(un,"cleanup");function dn(e,n,t){var o={},r;f(t,function(i){for(var a=e.parent(i),u,s;a;){if(u=e.parent(a),u?(s=o[u],o[u]=a):(s=r,r=a),s&&s!==a){n.setEdge(s,a);return}a=u}})}d(dn,"addSubgraphConstraints");function sn(e,n,t){var o=cn(e),r=new k({compound:!0}).setGraph({root:o}).setDefaultNodeLabel(function(i){return e.node(i)});return f(e.nodes(),function(i){var a=e.node(i),u=e.parent(i);(a.rank===n||a.minRank<=n&&n<=a.maxRank)&&(r.setNode(i),r.setParent(i,u||o),f(e[t](i),function(s){var c=s.v===i?s.w:s.v,g=r.edge(c,i),h=y(g)?0:g.weight;r.setEdge(c,i,{weight:e.edge(s).weight+h})}),m(a,"minRank")&&r.setNode(i,{borderLeft:a.borderLeft[n],borderRight:a.borderRight[n]}))}),r}d(sn,"buildLayerGraph");function cn(e){for(var n;e.hasNode(n=ae("_root")););return n}d(cn,"createRootNode");function fn(e,n){for(var t=0,o=1;o<n.length;++o)t+=gn(e,n[o-1],n[o]);return t}d(fn,"crossCount");function gn(e,n,t){for(var o=it(t,w(t,function(c,g){return g})),r=_(w(n,function(c){return G(w(e.outEdges(c),function(g){return{pos:o[g.w],weight:e.edge(g).weight}}),"pos")})),i=1;i<t.length;)i<<=1;var a=2*i-1;i-=1;var u=w(new Array(a),function(){return 0}),s=0;return f(r.forEach(function(c){var g=c.pos+i;u[g]+=c.weight;for(var h=0;g>0;)g%2&&(h+=u[g+1]),g=g-1>>1,u[g]+=c.weight;s+=c.weight*h})),s}d(gn,"twoLayerCrossCount");function hn(e){var n={},t=P(e.nodes(),function(u){return!e.children(u).length}),o=E(w(t,function(u){return e.node(u).rank})),r=w(L(o+1),function(){return[]});function i(u){if(!m(n,u)){n[u]=!0;var s=e.node(u);r[s.rank].push(u),f(e.successors(u),i)}}d(i,"dfs");var a=G(t,function(u){return e.node(u).rank});return f(a,i),r}d(hn,"initOrder");function vn(e,n){return w(n,function(t){var o=e.inEdges(t);if(o.length){var r=j(o,function(i,a){var u=e.edge(a),s=e.node(a.v);return{sum:i.sum+u.weight*s.order,weight:i.weight+u.weight}},{sum:0,weight:0});return{v:t,barycenter:r.sum/r.weight,weight:r.weight}}else return{v:t}})}d(vn,"barycenter");function ln(e,n){var t={};f(e,function(r,i){var a=t[r.v]={indegree:0,in:[],out:[],vs:[r.v],i};y(r.barycenter)||(a.barycenter=r.barycenter,a.weight=r.weight)}),f(n.edges(),function(r){var i=t[r.v],a=t[r.w];!y(i)&&!y(a)&&(a.indegree++,i.out.push(t[r.w]))});var o=P(t,function(r){return!r.indegree});return pn(o)}d(ln,"resolveConflicts");function pn(e){var n=[];function t(i){return function(a){a.merged||(y(a.barycenter)||y(i.barycenter)||a.barycenter>=i.barycenter)&&mn(i,a)}}d(t,"handleIn");function o(i){return function(a){a.in.push(i),--a.indegree===0&&e.push(a)}}for(d(o,"handleOut");e.length;){var r=e.pop();n.push(r),f(r.in.reverse(),t(r)),f(r.out,o(r))}return w(P(n,function(i){return!i.merged}),function(i){return q(i,["vs","i","barycenter","weight"])})}d(pn,"doResolveConflicts");function mn(e,n){var t=0,o=0;e.weight&&(t+=e.barycenter*e.weight,o+=e.weight),n.weight&&(t+=n.barycenter*n.weight,o+=n.weight),e.vs=n.vs.concat(e.vs),e.barycenter=t/o,e.weight=o,e.i=Math.min(n.i,e.i),n.merged=!0}d(mn,"mergeEntries");function wn(e,n){var t=Re(e,function(g){return m(g,"barycenter")}),o=t.lhs,r=G(t.rhs,function(g){return-g.i}),i=[],a=0,u=0,s=0;o.sort(bn(!!n)),s=oe(i,r,s),f(o,function(g){s+=g.vs.length,i.push(g.vs),a+=g.barycenter*g.weight,u+=g.weight,s=oe(i,r,s)});var c={vs:_(i)};return u&&(c.barycenter=a/u,c.weight=u),c}d(wn,"sort");function oe(e,n,t){for(var o;n.length&&(o=D(n)).i<=t;)n.pop(),e.push(o.vs),t++;return t}d(oe,"consumeUnsortable");function bn(e){return function(n,t){return n.barycenter<t.barycenter?-1:n.barycenter>t.barycenter?1:e?t.i-n.i:n.i-t.i}}d(bn,"compareWithBias");function ke(e,n,t,o){var r=e.children(n),i=e.node(n),a=i?i.borderLeft:void 0,u=i?i.borderRight:void 0,s={};a&&(r=P(r,function(p){return p!==a&&p!==u}));var c=vn(e,r);f(c,function(p){if(e.children(p.v).length){var b=ke(e,p.v,t,o);s[p.v]=b,m(b,"barycenter")&&kn(p,b)}});var g=ln(c,t);yn(g,s);var h=wn(g,o);if(a&&(h.vs=_([a,h.vs,u]),e.predecessors(a).length)){var v=e.node(e.predecessors(a)[0]),l=e.node(e.predecessors(u)[0]);m(h,"barycenter")||(h.barycenter=0,h.weight=0),h.barycenter=(h.barycenter*h.weight+v.order+l.order)/(h.weight+2),h.weight+=2}return h}d(ke,"sortSubgraph");function yn(e,n){f(e,function(t){t.vs=_(t.vs.map(function(o){return n[o]?n[o].vs:o}))})}d(yn,"expandSubgraphs");function kn(e,n){y(e.barycenter)?(e.barycenter=n.barycenter,e.weight=n.weight):(e.barycenter=(e.barycenter*e.weight+n.barycenter*n.weight)/(e.weight+n.weight),e.weight+=n.weight)}d(kn,"mergeBarycenters");function xn(e){var n=ce(e),t=re(e,L(1,n+1),"inEdges"),o=re(e,L(n-1,-1,-1),"outEdges"),r=hn(e);ie(e,r);for(var i=Number.POSITIVE_INFINITY,a,u=0,s=0;s<4;++u,++s){En(u%2?t:o,u%4>=2),r=O(e);var c=fn(e,r);c<i&&(s=0,a=at(r),i=c)}ie(e,a)}d(xn,"order");function re(e,n,t){return w(n,function(o){return sn(e,o,t)})}d(re,"buildLayerGraphs");function En(e,n){var t=new k;f(e,function(o){var r=o.graph().root,i=ke(o,r,t,n);f(i.vs,function(a,u){o.node(a).order=u}),dn(o,t,i.vs)})}d(En,"sweepLayerGraphs");function ie(e,n){f(n,function(t){f(t,function(o,r){e.node(o).order=r})})}d(ie,"assignOrder");function Nn(e){var n=Ln(e);f(e.graph().dummyChains,function(t){for(var o=e.node(t),r=o.edgeObj,i=In(e,n,r.v,r.w),a=i.path,u=i.lca,s=0,c=a[s],g=!0;t!==r.w;){if(o=e.node(t),g){for(;(c=a[s])!==u&&e.node(c).maxRank<o.rank;)s++;c===u&&(g=!1)}if(!g){for(;s<a.length-1&&e.node(c=a[s+1]).minRank<=o.rank;)s++;c=a[s]}e.setParent(t,c),t=e.successors(t)[0]}})}d(Nn,"parentDummyChains");function In(e,n,t,o){var r=[],i=[],a=Math.min(n[t].low,n[o].low),u=Math.max(n[t].lim,n[o].lim),s,c;s=t;do s=e.parent(s),r.push(s);while(s&&(n[s].low>a||u>n[s].lim));for(c=s,s=o;(s=e.parent(s))!==c;)i.push(s);return{path:r.concat(i.reverse()),lca:c}}d(In,"findPath");function Ln(e){var n={},t=0;function o(r){var i=t;f(e.children(r),o),n[r]={low:i,lim:t++}}return d(o,"dfs"),f(e.children(),o),n}d(Ln,"postorder");function Cn(e,n){var t={};function o(r,i){var a=0,u=0,s=r.length,c=D(i);return f(i,function(g,h){var v=Sn(e,g),l=v?e.node(v).order:s;(v||g===c)&&(f(i.slice(u,h+1),function(p){f(e.predecessors(p),function(b){var S=e.node(b),Ee=S.order;(Ee<a||l<Ee)&&!(S.dummy&&e.node(p).dummy)&&xe(t,b,p)})}),u=h+1,a=l)}),i}return d(o,"visitLayer"),j(n,o),t}d(Cn,"findType1Conflicts");function Rn(e,n){var t={};function o(i,a,u,s,c){var g;f(L(a,u),function(h){g=i[h],e.node(g).dummy&&f(e.predecessors(g),function(v){var l=e.node(v);l.dummy&&(l.order<s||l.order>c)&&xe(t,v,g)})})}d(o,"scan");function r(i,a){var u=-1,s,c=0;return f(a,function(g,h){if(e.node(g).dummy==="border"){var v=e.predecessors(g);v.length&&(s=e.node(v[0]).order,o(a,c,h,u,s),c=h,u=s)}o(a,c,a.length,s,i.length)}),a}return d(r,"visitLayer"),j(n,r),t}d(Rn,"findType2Conflicts");function Sn(e,n){if(e.node(n).dummy)return de(e.predecessors(n),function(t){return e.node(t).dummy})}d(Sn,"findOtherInnerSegmentNode");function xe(e,n,t){if(n>t){var o=n;n=t,t=o}var r=e[n];r||(e[n]=r={}),r[t]=!0}d(xe,"addConflict");function Tn(e,n,t){if(n>t){var o=n;n=t,t=o}return m(e[n],t)}d(Tn,"hasConflict");function Mn(e,n,t,o){var r={},i={},a={};return f(n,function(u){f(u,function(s,c){r[s]=s,i[s]=s,a[s]=c})}),f(n,function(u){var s=-1;f(u,function(c){var g=o(c);if(g.length){g=G(g,function(b){return a[b]});for(var h=(g.length-1)/2,v=Math.floor(h),l=Math.ceil(h);v<=l;++v){var p=g[v];i[c]===c&&s<a[p]&&!Tn(t,c,p)&&(i[p]=c,i[c]=r[c]=r[p],s=a[p])}}})}),{root:r,align:i}}d(Mn,"verticalAlignment");function _n(e,n,t,o,r){var i={},a=Pn(e,n,t,r),u=r?"borderLeft":"borderRight";function s(h,v){for(var l=a.nodes(),p=l.pop(),b={};p;)b[p]?h(p):(b[p]=!0,l.push(p),l=l.concat(v(p))),p=l.pop()}d(s,"iterate");function c(h){i[h]=a.inEdges(h).reduce(function(v,l){return Math.max(v,i[l.v]+a.edge(l))},0)}d(c,"pass1");function g(h){var v=a.outEdges(h).reduce(function(p,b){return Math.min(p,i[b.w]-a.edge(b))},Number.POSITIVE_INFINITY),l=e.node(h);v!==Number.POSITIVE_INFINITY&&l.borderType!==u&&(i[h]=Math.max(i[h],v))}return d(g,"pass2"),s(c,a.predecessors.bind(a)),s(g,a.successors.bind(a)),f(o,function(h){i[h]=i[t[h]]}),i}d(_n,"horizontalCompaction");function Pn(e,n,t,o){var r=new k,i=e.graph(),a=Yn(i.nodesep,i.edgesep,o);return f(n,function(u){var s;f(u,function(c){var g=t[c];if(r.setNode(g),s){var h=t[s],v=r.edge(h,g);r.setEdge(h,g,Math.max(a(e,c,s),v||0))}s=c})}),r}d(Pn,"buildBlockGraph");function Gn(e,n){return ue(C(n),function(t){var o=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY;return ut(t,function(i,a){var u=Vn(e,a)/2;o=Math.max(i+u,o),r=Math.min(i-u,r)}),o-r})}d(Gn,"findSmallestWidthAlignment");function On(e,n){var t=C(n),o=T(t),r=E(t);f(["u","d"],function(i){f(["l","r"],function(a){var u=i+a,s=e[u],c;if(s!==n){var g=C(s);c=a==="l"?o-T(g):r-E(g),c&&(e[u]=A(s,function(h){return h+c}))}})})}d(On,"alignCoordinates");function Fn(e,n){return A(e.ul,function(t,o){if(n)return e[n.toLowerCase()][o];var r=G(w(e,o));return(r[1]+r[2])/2})}d(Fn,"balance");function Bn(e){var n=O(e),t=H(Cn(e,n),Rn(e,n)),o={},r;f(["u","d"],function(a){r=a==="u"?n:C(n).reverse(),f(["l","r"],function(u){u==="r"&&(r=w(r,function(h){return C(h).reverse()}));var s=(a==="u"?e.predecessors:e.successors).bind(e),c=Mn(e,r,t,s),g=_n(e,r,c.root,c.align,u==="r");u==="r"&&(g=A(g,function(h){return-h})),o[a+u]=g})});var i=Gn(e,o);return On(o,i),Fn(o,e.graph().align)}d(Bn,"positionX");function Yn(e,n,t){return function(o,r,i){var a=o.node(r),u=o.node(i),s=0,c;if(s+=a.width/2,m(a,"labelpos"))switch(a.labelpos.toLowerCase()){case"l":c=-a.width/2;break;case"r":c=a.width/2;break}if(c&&(s+=t?c:-c),c=0,s+=(a.dummy?n:e)/2,s+=(u.dummy?n:e)/2,s+=u.width/2,m(u,"labelpos"))switch(u.labelpos.toLowerCase()){case"l":c=u.width/2;break;case"r":c=-u.width/2;break}return c&&(s+=t?c:-c),c=0,s}}d(Yn,"sep");function Vn(e,n){return e.node(n).width}d(Vn,"width");function $n(e){e=se(e),qn(e),dt(Bn(e),function(n,t){e.node(t).x=n})}d($n,"position");function qn(e){var n=O(e),t=e.graph().ranksep,o=0;f(n,function(r){var i=E(w(r,function(a){return e.node(a).height}));f(r,function(a){e.node(a).y=o+i/2}),o+=i+t})}d(qn,"positionY");function vt(e,n){var t=n&&n.debugTiming?Se:Te;t("layout",function(){var o=t("  buildLayoutGraph",function(){return An(e)});t("  runLayout",function(){Dn(o,t)}),t("  updateInputGraph",function(){zn(e,o)})})}d(vt,"layout");function Dn(e,n){n("    makeSpaceForEdgeLabels",function(){jn(e)}),n("    removeSelfEdges",function(){et(e)}),n("    acyclic",function(){$e(e)}),n("    nestingGraph.run",function(){on(e)}),n("    rank",function(){nn(se(e))}),n("    injectEdgeLabelProxies",function(){Wn(e)}),n("    removeEmptyRanks",function(){Ce(e)}),n("    nestingGraph.cleanup",function(){un(e)}),n("    normalizeRanks",function(){Le(e)}),n("    assignRankMinMax",function(){Xn(e)}),n("    removeEdgeLabelProxies",function(){Jn(e)}),n("    normalize.run",function(){ze(e)}),n("    parentDummyChains",function(){Nn(e)}),n("    addBorderSegments",function(){Me(e)}),n("    order",function(){xn(e)}),n("    insertSelfEdges",function(){nt(e)}),n("    adjustCoordinateSystem",function(){_e(e)}),n("    position",function(){$n(e)}),n("    positionSelfEdges",function(){tt(e)}),n("    removeBorderNodes",function(){Un(e)}),n("    normalize.undo",function(){je(e)}),n("    fixupEdgeLabelCoords",function(){Qn(e)}),n("    undoCoordinateSystem",function(){Pe(e)}),n("    translateGraph",function(){Hn(e)}),n("    assignNodeIntersects",function(){Zn(e)}),n("    reversePoints",function(){Kn(e)}),n("    acyclic.undo",function(){De(e)})}d(Dn,"runLayout");function zn(e,n){f(e.nodes(),function(t){var o=e.node(t),r=n.node(t);o&&(o.x=r.x,o.y=r.y,n.children(t).length&&(o.width=r.width,o.height=r.height))}),f(e.edges(),function(t){var o=e.edge(t),r=n.edge(t);o.points=r.points,m(r,"x")&&(o.x=r.x,o.y=r.y)}),e.graph().width=n.graph().width,e.graph().height=n.graph().height}d(zn,"updateInputGraph");var lt=["nodesep","edgesep","ranksep","marginx","marginy"],pt={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},mt=["acyclicer","ranker","rankdir","align"],wt=["width","height"],bt={width:0,height:0},yt=["minlen","weight","width","height","labeloffset"],kt={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},xt=["labelpos"];function An(e){var n=new k({multigraph:!0,compound:!0}),t=$(e.graph());return n.setGraph(H({},pt,V(t,lt),q(t,mt))),f(e.nodes(),function(o){var r=$(e.node(o));n.setNode(o,ot(V(r,wt),bt)),n.setParent(o,e.parent(o))}),f(e.edges(),function(o){var r=$(e.edge(o));n.setEdge(o,H({},kt,V(r,yt),q(r,xt)))}),n}d(An,"buildLayoutGraph");function jn(e){var n=e.graph();n.ranksep/=2,f(e.edges(),function(t){var o=e.edge(t);o.minlen*=2,o.labelpos.toLowerCase()!=="c"&&(n.rankdir==="TB"||n.rankdir==="BT"?o.width+=o.labeloffset:o.height+=o.labeloffset)})}d(jn,"makeSpaceForEdgeLabels");function Wn(e){f(e.edges(),function(n){var t=e.edge(n);if(t.width&&t.height){var o=e.node(n.v),r=e.node(n.w),i={rank:(r.rank-o.rank)/2+o.rank,e:n};N(e,"edge-proxy",i,"_ep")}})}d(Wn,"injectEdgeLabelProxies");function Xn(e){var n=0;f(e.nodes(),function(t){var o=e.node(t);o.borderTop&&(o.minRank=e.node(o.borderTop).rank,o.maxRank=e.node(o.borderBottom).rank,n=E(n,o.maxRank))}),e.graph().maxRank=n}d(Xn,"assignRankMinMax");function Jn(e){f(e.nodes(),function(n){var t=e.node(n);t.dummy==="edge-proxy"&&(e.edge(t.e).labelRank=t.rank,e.removeNode(n))})}d(Jn,"removeEdgeLabelProxies");function Hn(e){var n=Number.POSITIVE_INFINITY,t=0,o=Number.POSITIVE_INFINITY,r=0,i=e.graph(),a=i.marginx||0,u=i.marginy||0;function s(c){var g=c.x,h=c.y,v=c.width,l=c.height;n=Math.min(n,g-v/2),t=Math.max(t,g+v/2),o=Math.min(o,h-l/2),r=Math.max(r,h+l/2)}d(s,"getExtremes"),f(e.nodes(),function(c){s(e.node(c))}),f(e.edges(),function(c){var g=e.edge(c);m(g,"x")&&s(g)}),n-=a,o-=u,f(e.nodes(),function(c){var g=e.node(c);g.x-=n,g.y-=o}),f(e.edges(),function(c){var g=e.edge(c);f(g.points,function(h){h.x-=n,h.y-=o}),m(g,"x")&&(g.x-=n),m(g,"y")&&(g.y-=o)}),i.width=t-n+a,i.height=r-o+u}d(Hn,"translateGraph");function Zn(e){f(e.edges(),function(n){var t=e.edge(n),o=e.node(n.v),r=e.node(n.w),i,a;t.points?(i=t.points[0],a=t.points[t.points.length-1]):(t.points=[],i=r,a=o),t.points.unshift(Z(o,i)),t.points.push(Z(r,a))})}d(Zn,"assignNodeIntersects");function Qn(e){f(e.edges(),function(n){var t=e.edge(n);if(m(t,"x"))switch((t.labelpos==="l"||t.labelpos==="r")&&(t.width-=t.labeloffset),t.labelpos){case"l":t.x-=t.width/2+t.labeloffset;break;case"r":t.x+=t.width/2+t.labeloffset;break}})}d(Qn,"fixupEdgeLabelCoords");function Kn(e){f(e.edges(),function(n){var t=e.edge(n);t.reversed&&t.points.reverse()})}d(Kn,"reversePointsForReversedEdges");function Un(e){f(e.nodes(),function(n){if(e.children(n).length){var t=e.node(n),o=e.node(t.borderTop),r=e.node(t.borderBottom),i=e.node(D(t.borderLeft)),a=e.node(D(t.borderRight));t.width=Math.abs(a.x-i.x),t.height=Math.abs(r.y-o.y),t.x=i.x+t.width/2,t.y=o.y+t.height/2}}),f(e.nodes(),function(n){e.node(n).dummy==="border"&&e.removeNode(n)})}d(Un,"removeBorderNodes");function et(e){f(e.edges(),function(n){if(n.v===n.w){var t=e.node(n.v);t.selfEdges||(t.selfEdges=[]),t.selfEdges.push({e:n,label:e.edge(n)}),e.removeEdge(n)}})}d(et,"removeSelfEdges");function nt(e){var n=O(e);f(n,function(t){var o=0;f(t,function(r,i){var a=e.node(r);a.order=i+o,f(a.selfEdges,function(u){N(e,"selfedge",{width:u.label.width,height:u.label.height,rank:a.rank,order:i+ ++o,e:u.e,label:u.label},"_se")}),delete a.selfEdges})})}d(nt,"insertSelfEdges");function tt(e){f(e.nodes(),function(n){var t=e.node(n);if(t.dummy==="selfedge"){var o=e.node(t.e.v),r=o.x+o.width/2,i=o.y,a=t.x-r,u=o.height/2;e.setEdge(t.e,t.label),e.removeNode(n),t.label.points=[{x:r+2*a/3,y:i-u},{x:r+5*a/6,y:i-u},{x:r+a,y:i},{x:r+5*a/6,y:i+u},{x:r+2*a/3,y:i+u}],t.label.x=t.x,t.label.y=t.y}})}d(tt,"positionSelfEdges");function V(e,n){return A(q(e,n),Number)}d(V,"selectNumberAttrs");function $(e){var n={};return f(e,function(t,o){n[o.toLowerCase()]=t}),n}d($,"canonicalize");export{vt as s};

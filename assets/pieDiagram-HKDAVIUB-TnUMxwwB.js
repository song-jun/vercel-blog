import{c as N}from"./chunk-4KE642ED-rBQKhd6H.js";import{p as V}from"./gitGraph-YCYPL57B-QPBUOVDP-Q93SOJGX.js";import{m as r,M as X,F as G,B as I,w as K,A as U,L as Y,J as y,Q as j,ar as q,aS as H,aU as Z,aV as L,aW as _,k as ee,v as te,aX as ae,at as ie}from"./mermaid.esm.min-B_e7sMot.js";import"./chunk-BKDDFIKN-CTl674XF.js";import"./app-B-ayoO34.js";var re=ie.pie,D={sections:new Map,showData:!1},u=D.sections,v=D.showData,le=structuredClone(re),se=r(()=>structuredClone(le),"getConfig"),oe=r(()=>{u=new Map,v=D.showData,te()},"clear"),ne=r(({label:e,value:a})=>{u.has(e)||(u.set(e,a),y.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),pe=r(()=>u,"getSections"),de=r(e=>{v=e},"setShowData"),ce=r(()=>v,"getShowData"),O={getConfig:se,clear:oe,setDiagramTitle:Y,getDiagramTitle:U,setAccTitle:K,getAccTitle:I,setAccDescription:G,getAccDescription:X,addSection:ne,getSections:pe,setShowData:de,getShowData:ce},fe=r((e,a)=>{N(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ge={parse:r(async e=>{let a=await V("pie",e);y.debug(a),fe(a,O)},"parse")},me=r(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),ue=me,he=r(e=>{let a=[...e.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,h)=>h.value-l.value);return ae().value(l=>l.value)(a)},"createPieArcs"),Se=r((e,a,l,h)=>{y.debug(`rendering pie chart
`+e);let d=h.db,T=j(),C=q(d.getConfig(),T.pie),k=40,s=18,c=4,n=450,S=n,x=H(a),o=x.append("g");o.attr("transform","translate("+S/2+","+n/2+")");let{themeVariables:i}=T,[b]=Z(i.pieOuterStrokeWidth);b??(b=2);let A=C.textPosition,f=Math.min(S,n)/2-k,R=L().innerRadius(0).outerRadius(f),W=L().innerRadius(f*A).outerRadius(f*A);o.append("circle").attr("cx",0).attr("cy",0).attr("r",f+b/2).attr("class","pieOuterCircle");let M=d.getSections(),w=he(M),B=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],p=_(B);o.selectAll("mySlices").data(w).enter().append("path").attr("d",R).attr("fill",t=>p(t.data.label)).attr("class","pieCircle");let z=0;M.forEach(t=>{z+=t}),o.selectAll("mySlices").data(w).enter().append("text").text(t=>(t.data.value/z*100).toFixed(0)+"%").attr("transform",t=>"translate("+W.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),o.append("text").text(d.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");let $=o.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(t,g)=>{let m=s+c,Q=m*p.domain().length/2,E=12*s,J=g*m-Q;return"translate("+E+","+J+")"});$.append("rect").attr("width",s).attr("height",s).style("fill",p).style("stroke",p),$.data(w).append("text").attr("x",s+c).attr("y",s-c).text(t=>{let{label:g,value:m}=t.data;return d.getShowData()?`${g} [${m}]`:g});let P=Math.max(...$.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),F=S+k+s+c+P;x.attr("viewBox",`0 0 ${F} ${n}`),ee(x,n,F,C.useMaxWidth)},"draw"),xe={draw:Se},Te={parser:ge,db:O,renderer:xe,styles:ue};export{Te as diagram};

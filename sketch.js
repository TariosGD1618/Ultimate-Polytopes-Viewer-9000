//by TariosGD1618
intersectionD = NaN
dimentionCount=4
simpleM=-1
faces=1
var faceData=[[]]
var edgesData=[[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
var col = 0
var col2 = 0
circumR=1
var vertexData = [[sqrt(2/3)*sqrt(15/16),-sqrt(2/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[-(2/3)*sqrt(15/16),-sqrt(2/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[0,sqrt(8/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[0,0,1*sqrt(15/16),1/4],[0,0,0,-1]]
var zoom = 1
edgeLength = 2/sqrt(1.6)
f = 1
fct = 2
L = 10
var s = 1
var L2=L
var edges = 1
var verticies = 1
var rotArr=[[0],[0,0],[0,0,0]]
function doWeird(A,_b,_c) {
  var A2 = []
  for(var _X = 0; _X<A.length; _X++) {
    for(var _Y = 0; _Y<A.length; _Y++) {
      var dist = sq(A[_X][0]-A[_Y][0])+sq(A[_X][1]-A[_Y][1])+sq(A[_X][2]-A[_Y][2])+sq(A[_X][3]-A[_Y][3])
      if(sq(dist-_b*_b)<0.001&&_X>_Y) {
        var d1 = (A[_X][0]-A[_Y][0])
        var d2 = (A[_X][1]-A[_Y][1])
        var d3 = (A[_X][2]-A[_Y][2])
        var d4 = (A[_X][3]-A[_Y][3])
        var _d = 1-1/_c
        A2.push([d1/_c+A[_Y][0],d2/_c+A[_Y][1],d3/_c+A[_Y][2],d4/_c+A[_Y][3]])
        A2.push([d1*_d+A[_Y][0],d2*_d+A[_Y][1],d3*_d+A[_Y][2],d4*_d+A[_Y][3]])
      }
    }
  }
  A2=deDup(A2)
  A2=A.concat(A2)
  return A2
}
function doWeird2(A,_b,_c) {
  var A2 = []
  for(var _X = 0; _X<A.length; _X++) {
    for(var _Y = 0; _Y<A.length; _Y++) {
      var dist = sq(A[_X][0]-A[_Y][0])+sq(A[_X][1]-A[_Y][1])+sq(A[_X][2]-A[_Y][2])+sq(A[_X][3]-A[_Y][3])
      if(sq(dist-_b*_b)<0.001&&_X>_Y) {
        var d1 = (A[_X][0]-A[_Y][0])
        var d2 = (A[_X][1]-A[_Y][1])
        var d3 = (A[_X][2]-A[_Y][2])
        var d4 = (A[_X][3]-A[_Y][3])
        var _d = 1-1/_c
        var dist1=sq(d1/_c+A[_Y][0])+sq(d2/_c+A[_Y][1])+sq(d3/_c+A[_Y][2])+sq(d4/_c+A[_Y][3])
        var dist2=sq(d1*_d+A[_Y][0])+sq(d2*_d+A[_Y][1])+sq(d3*_d+A[_Y][2])+sq(d4*_d+A[_Y][3])
        if(dist1>dist2) {
          A2.push([d1*_d+A[_Y][0],d2*_d+A[_Y][1],d3*_d+A[_Y][2],d4*_d+A[_Y][3]])
        }else {
          A2.push([d1/_c+A[_Y][0],d2/_c+A[_Y][1],d3/_c+A[_Y][2],d4/_c+A[_Y][3]])
        }
      }
    }
  }
  A2=deDup(A2)
  A2=A.concat(A2)
  return A2
}
function deDup(arr) {
  arr=arr.sort(comp)
  arr2=[]
  for(var i = 0; i<arr.length; i++) {
    for(;isSame(arr[i],arr[i-1])&&i<arr.length;i++){}
    if(arr[i]==undefined) {}else {
      arr2[arr2.length]=arr[i]
    }
  }
  return arr2
}
function comp(a,b) {
  var ARR = []
  for(var i = 0; i<a.length; i++) {
    ARR[i]=a[i]-b[i]
  }
  var ___
  for(var i =0; i<ARR.length; i++) {
    if(abs(ARR[i])>0.01) {
      return ARR[i]
    }
  }
  return 0
}
function windowResized() {//do stuff when window resized
  UseT.position(width-UseT.style('width').slice(0,UseT.style('width').length-2)*1-10,60)
  yoMama.position(0,height-140)
  lspeed.position(0,windowHeight/2+20)
  vspeed.position(0,windowHeight/2+40)
  fspeed.position(0,windowHeight/2+60)
  resizeCanvas(windowWidth,windowHeight)
  Ortho2.position(width-Ortho2.style('width').slice(0,Ortho2.style('width').length-2)*1-10,80)
  ldiv.position(0,height-120)
  vdiv.position(0,height-100)
  fdiv.position(0,height-80)
  inpy.position(width-96,height-23)
  inpy2.position(width-48,height-23)
  centerv.position(width/2-c,0)
  centerc.position(width/2,0)
  centerf.position(width/2-c,20)
  centere.position(width/2,20)
  div7.position(0,height-20)
  mrSlider.position(width-mrSlider.width-5,0)
  rainbowEdges.position(0,height-60)
  rainbowVerticies.position(0,height-40)
  verCol.position(width/2-50,height-30)
  edgeCol.position(width/2,height-30)
  Ortho.position(width-Ortho.style('width').slice(0,Ortho.style('width').length-2)*1-10,40)
  opt.position(0,height/2-10)
}
function changeDimension() {
  inpy.hide()
  inpy2.hide()
  inp3.hide()
  inp4.hide()
  inp5.hide()
  inp.show()
  if(inp2.value()*1!==-1) {
    dimentionCount=inp2.value()*1
  }
  if(dimentionCount==4) {
    var A = yoMama.selected()
    yoMama.html('<option value="R">regulars</option><option value="QR">quairegulars</option>')
    yoMama.selected(A)
    inp.html('<option value="0">pen</option><option value="1">tes</option><option value="2">hex</option><option value="3">ico</option><option value="4">hi</option><option value="5">ex</option><option value="6">fix</option><option value="7">sishi</option><option value="8">gohi</option><option value="9">gahi</option><option value="10">gishi</option><option value="11">gashi</option><option value="12">gaghi</option><option value="13">gofix</option><option value="14">gax</option><option value="15">gogishi</option>')
    switch(A) {
      case 'R':
        inp.html('<option value="0">pen</option><option value="1">tes</option><option value="2">hex</option><option value="3">ico</option><option value="4">hi</option><option value="5">ex</option><option value="6">fix</option><option value="7">sishi</option><option value="8">gohi</option><option value="9">gahi</option><option value="10">gishi</option><option value="11">gashi</option><option value="12">gaghi</option><option value="13">gofix</option><option value="14">gax</option><option value="15">gogishi</option>')
      break
      case 'QR':
        inp.html('<option value="16">tho</option><option value="17">sidtixhi</option><option value="18">gidtixhi</option><option value="19">dittady</option>')
      break
    }
    if(polytopeID ==0) {
      inp.selected(0)
    }else if(polytopeID==1) {
      inp.selected(1)
    }else if(polytopeID==2) {
      inp.selected(2)
    }else if(polytopeID==3) {
      inp.selected(4)
    }else if(polytopeID==4) {
      inp.selected(5)
    }else if(polytopeID==10||polytopeID==9) {
      inp.html('<option value="0">pen</option><option value="1">tes</option><option value="2">hex</option><option value="3">ico</option><option value="4">hi</option><option value="5">ex</option><option value="6">fix</option><option value="7">sishi</option><option value="8">gohi</option><option value="9">gahi</option><option value="10">gishi</option><option value="11">gashi</option><option value="12">gaghi</option><option value="13">gofix</option><option value="14">gax</option><option value="15">gogishi</option>')
      inp.selected(3)
    }
    inp2.style('width','40px')
    inp.position(40,0)
  }else if(dimentionCount==3){
    var A_ = yoMama.selected()
    if(A_==undefined) {
      A_='R'
    }
    yoMama.html('<option value="R">regulars</option><option value="QR">quairegulars</option><option value="QRD">quairegular duals</option><option value="U">uniforms</option><option value="UD">uniform duals</option><option value="NTO">noble two-orbits</option><option value="RC">regular compounds</option><option value="N">nobles</option>')
    inp.html('<option value="0">tet</option><option value="1">cube</option><option value="2">oct</option><option value="3">doe</option><option value="4">ike</option><option value="5">sissid</option><option value="6">gad</option><option value="7">gissid</option><option value="8">gike</option>')
    yoMama.selected(A_)
    switch(A_) {
      case 'R':
        inp.html('<option value="0">tet</option><option value="1">cube</option><option value="2">oct</option><option value="3">doe</option><option value="4">ike</option>  <option value="5">sissid</option><option value="6">gad</option><option value="7">gissid</option><option value="8">gike</option>')
      break
      case 'QR':
        inp.html('<option value="9">co</option><option value="11">id</option><option value="13">did</option><option value="15">gid</option><option value="17">thah</option><option value="18">oho</option><option value="19">cho</option><option value="20">seihid</option><option value="21">sidhid</option><option value="22">gidhei</option><option value="23">sidhei</option><option value="24">gidhid</option><option value="25">geihid</option><option value="26">ditdid</option><option value="28">sidtid</option>  <option value="30">gidtid</option>')
      break
      case 'QRD':
        inp.html('<option value="10">rad</option><option value="12">rhote</option><option value="14">mort</option><option value="16">gort</option><option value="27">matai</option><option value="29">stai</option><option value="31">gatai</option>')
      break
      case 'U':
        inp.html('<option value="32">tic</option><option value="34">toe</option><option value="36">sirco</option><option value="38">girco</option><option value="40">tut</option><option value="42">snic</option><option value="44">tid</option><option value="46">ti</option><option value="48">srid</option><option value="50">grid</option><option value="52">snid</option><option value="54">gocco</option><option value="56">querco</option><option value="58">groh</option><option value="60">quith</option><option value="62">socco</option><option value="64">sroh</option><option value="66">cotco</option><option value="68">siddy</option><option value="70">sird</option><option value="72">saddid</option><option value="74">ri</option><option value="76">giid</option><option value="78">quitco</option><option value="80">tigid</option><option value="82">quit sissid</option><option value="84">quit gissid</option><option value="86">tiggy</option><option value="88">giddy</option><option value="90">gird</option><option value="92">ided</option><option value="94">sidditdid</option><option value="96">gidditdid</option><option value="98">gaddid</option><option value="100">siid</option><option value="130">prism</option>')
      break
      case 'UD':
        inp.html('<option value="33">tikko</option><option value="35">tekah</option><option value="37">sladid</option><option value="39">siddykid</option><option value="41">tikit</option><option value="43">pedid</option><option value="45">tiki</option><option value="47">pakid</option><option value="49">sladit</option><option value="51">siddykit</option><option value="53">sapedit</option><option value="55">gocco dual</option><option value="57">querco dual</option><option value="59">groh dual</option><option value="61">quith dual</option><option value="63">socco dual</option><option value="65">sroh dual</option><option value="67">cotco dual</option><option value="69">siddy dual</option><option value="71">sird dual</option><option value="73">saddid dual</option><option value="75">ri dual</option><option value="77">giid dual</option><option value="79">quitco dual</option><option value="81">tigid dual</option><option value="83">quit sissid dual</option><option value="85">quit gissid dual</option><option value="87">tiggy dual</option><option value="89">giddy dual</option><option value="91">gird dual</option><option value="93">ided dual</option><option value="95">sidditdid dual</option><option value="97">gidditdid dual</option><option value="99">gaddid dual</option><option value="101">siid dual</option><option value="131">tegum</option>')
      break
      case 'NTO':
        inp.html('<option value="134">ditti</option>')
      break
      case 'RC':
        inp.html('<option value="135">so</option><option value="136">ki</option><option value="137">e</option><option value="138">rhom</option><option value="139">se</option>')
      break
      case 'N':
        inp.html('<option value="140">Noble faceting of tic</option><option value="141">Noble faceting of sirco</option><option value="142">Noble faceting of snic</option><option value="143">Noble faceting of nonuniform snic</option><option value="144">echnidahedron</option><option value="145">Verf of paphacki</option><option value="146">Crennell 4 icosahedron stellation</option><option value="147">Verf of paphicki</option>')
      break
    }
    if(polytopeID==0) {
      inp.selected(0)
    }else if(polytopeID==1) {
      inp.selected(1)
    }else if(polytopeID==2) {
      inp.selected(2)
    }else if(polytopeID==4) {
      inp.selected(3)
    }else if(polytopeID==5) {
      inp.selected(4)
    }else if(polytopeID==16) {
      inp.selected(13)
    }else if(polytopeID==3) {
      inp.selected(9)
    }
    inp2.style('width','40px')
    inp.position(40,0)
  }else if(inp2.value()==5) {
    var A_ = yoMama.selected()
    yoMama.html('<option value="R">regulars</option><option value="QR">quairegulars</option>')
    yoMama.selected(A_)
    dimentionCount=inp3.value()*1
    if(A_=='R') {
      if(inp.html()=='<option value="0">simplex</option><option value="1">hypercube</option><option value="2">orthoplex</option>') {}else {
        inp.html('<option value="0">simplex</option><option value="1">hypercube</option><option value="2">orthoplex</option>')
      }
    }else {
      if(inp.html()!=='<option value="3">demicross</option>') {
        inp.html('<option value="3">demicross</option>')
      }
    }
    inp3.show()
    inp2.style('width','50px')
    inp.position(50,0)
    inpy.show()
    inpy2.show()
  }else if(inp2.value()==2) {
    inp.hide()
    inp4.show()
    inp4.position(40,-2)
    inp5.show()
    inp5.position(85,-2)
  }if(inp2.value()==-1) {
    poltopeID=-1
    inp.html('')
    inp.hide()
    inp2.style('width','100px')
    inpy.show()
    inpy2.show()
  }
  fct = 2
  changePolytope()
}
function Ttxt(arr) {
  var str='['
  for(var i =0;i<arr.length-1;i++) {
    str+='['+arr[i]+'],'
  }
  return str+'['+arr[arr.length-1]+']]'
}
function resetCamera() {
  intData=[]
  rotArr=[]
  for(var i = 1; i<dimentionCount; i++) {
    rotArr[i-1]=[]
    for(var j = 0; j<i; j++) {
      rotArr[i-1][j]=0
    }
  }
  if(inp2.value()==-1) {}else {
    faceData=[[]]
  }
  var dodecahedron = conv([[11,11,11],[10+phi_1,0,10+phi],[0,10+phi,10+phi_1],[10+phi,10+phi_1,0]])
  var icosohedron = conv([[0,11,10+phi,0],[11,10+phi,0,0],[10+phi,0,11,0]])
  zoom=1
  intersectionD=NaN
  s=1
  s2=undefined
  if(dimentionCount==4&&inp2.value()==4) {
    edgesData=[]
    switch(polytopeID) {
      case 0:
        vertexData = [[sqrt(2/3)*sqrt(15/16),-sqrt(2/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[-sqrt(2/3)*sqrt(15/16),-sqrt(2/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[0,sqrt(8/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[0,0,1*sqrt(15/16),1/4],[0,0,0,-1]]
        edgeLength = 2/sqrt(1.6)
        circumR = 1
        fct = 2
        L = 10
        s=1
        L2=L
        faceData=[[0,1,2],[0,2,3],[0,3,1],[0,3,4],[1,2,3],[1,3,4],[2,3,4],[4,1,2],[0,1,4],[0,2,4]]
        JL=vertexData.length
      break
      case 1:
        vertexData = conv([[10.5,10.5,10.5,10.5]])
        edgeLength = 1
        circumR = 1
        fct = 2
        L=32
        s=1
        L2=L
        faceData=[[8,10,14,12],[8,9,13,12],[12,13,15,14],[8,9,11,10],[10,11,15,14],[9,11,15,13],[0,4,12,8],[4,6,14,12],[0,2,10,8],[0,2,6,4],[2,6,14,10],[4,5,13,12],[0,1,9,8],[0,1,5,4],[1,5,13,9],[4,5,7,6],[6,7,15,14],[5,7,15,13],[0,1,3,2],[2,3,11,10],[1,3,11,9],[2,3,7,6],[1,3,7,5],[3,7,15,11]]
        JL=vertexData.length
      break
      case 2:
        vertexData = conv([[11,0,0,0],[0,11,0,0],[0,0,11,0],[0,0,0,11]])
        edgeLength = sqrt(2)
        circumR = 1
        fct = 0.75
        zoom = 1/6
        L=24
        rotArr[2][0] = PI/4
        rotArr[2][1] = PI/5
        rotArr[2][2] = PI/6
        s=1
        L2=L
        faceData=[[7,5,3],[1,5,3],[1,7,3],[1,7,5],[0,5,3],[0,7,3],[0,7,5],[6,5,3],[6,1,3],[6,1,5],[0,6,3],[0,6,5],[4,7,3],[0,4,3],[0,4,7],[4,1,3],[4,1,7],[6,4,3],[0,6,4],[6,4,1],[2,7,5],[2,1,5],[2,1,7],[0,2,5],[0,2,7],[6,2,5],[0,6,2],[6,2,1],[6,4,2],[4,2,1],[0,4,2],[4,2,7]]
        JL=vertexData.length
      break
      case 3:
        vertexData = frag(ico,4)
        edgeLength = 1
        circumR=1
        fct = 1.1
        zoom = 1/3
        L=96
        rotArr[2][0] = atan(1)
        s=1
        L2=L
        faceData = frag(icof,3)
        JL=vertexData.length
      break 
      case 4:
        vertexData = frag(heca,4)
        edgeLength=(3-sqrt(5))*phi2/2
        circumR=phi2*sqrt(2)
        fct = 1.05
        zoom = 1/4
        L=1200
        s=0.25
        L2=L
        faceData = frag(hecaF,5)
        JL=vertexData.length
      break
      case 5:
        vertexData = frag(ex,4)
        edgeLength=1
        circumR=phi
        fct = 0.95
        zoom = 1/20
        L=720
        s=0.25
        rotArr[2][0] = atan(1/sqrt(5))
        rotArr[2][1] = atan(1/sqrt(6))
        rotArr[2][2] = atan(1/sqrt(7))
        L2=L
        faceData=frag(exf,3)
        JL=vertexData.length
      break
      case 6:
        vertexData = frag(ex,4)
        edgeLength=1
        intersectionD=phi
        circumR=phi
        fct = 1.1
        zoom = 1/4
        L=1920
        s=0.25
        L2=720
        faceData=frag(exf,3)
        JL=vertexData.length
      break
      case 7:
        vertexData=sishi
        edgeLength=1
        circumR=1
        fct = 1.1
        zoom = 1/4
        L=1200
        s=0.25
        L2=L
        JL=vertexData.length
        faceData=sishif
      break
      case 8:
        vertexData = gohi
        edgeLength=1
        intersectionD=phi2
        circumR=phi
        fct = 1.1
        zoom = 1/4
        L=1440
        s=0.25
        L2=720
        JL=vertexData.length
        faceData=gohif
      break
      case 9:
        vertexData = gohi
        edgeLength=1
        intersectionD=phi2
        intersectionD2=2.8284271247461903*phi/2
        circumR=phi
        fct = 1.1
        zoom = 1/4
        L=1440
        s=0.25
        L2=720
        JL=vertexData.length
        faceData=gohif
      break
      case 10:
        vertexData = gishi
        edgeLength=1
        circumR=phi_1
        fct = 1.1
        zoom = 1/4
        L=720
        s=0.25
        L2=L
        JL=vertexData.length
        faceData=gishif
      break
      case 11:
        vertexData = gishi
        edgeLength=1
        intersectionD=phi_1
        circumR=phi_1
        fct = 1.1
        zoom = 1/4
        L=1920+720
        s=0.25
        L2=720
        JL=vertexData.length
        faceData=gishif
      break
      case 12:
        vertexData = gaghi
        edgeLength=1
        circumR=1
        fct = 1.1
        zoom = 1/4
        L=1920
        s=0.25
        L2=1200
        JL=vertexData.length
        faceData=gaghif
      break
      case 13:
        vertexData = gofix
        edgeLength=1
        circumR=phi_1
        fct = 1.1
        zoom = 1/4
        L=720
        s=0.25
        L2=L
        JL=vertexData.length
        faceData=gofixf
      break
      case 14:
        vertexData = gax
        edgeLength=(sqrt(5)+3)*phi2*phi
        circumR=(sqrt(5)+3)*phi2
        fct = 1.1
        zoom = 1/4
        L=1440
        s=1/4
        L2=720
        faceData = frag(gaxf,3)
        JL=vertexData.length
      break
      case 15:
        vertexData = frag(gogishi,4)
        circumR=phi_2
        edgeLength=1
        fct = 1.5
        zoom = 1/4
        L=1200
        s=0.1
        L2=L
        faceData=frag(gogishif,5)
        JL=vertexData.length
      break
      case 16:
        vertexData = conv([[11,0,0,0],[0,11,0,0],[0,0,11,0],[0,0,0,11]])
        edgeLength = sqrt(2)
        intersectionD=2
        circumR = 1
        fct = 0.75
        zoom = 1/6
        L=28
        rotArr[2][0] = PI/4
        rotArr[2][1] = PI/5
        rotArr[2][2] = PI/6
        s=1
        L2=24
        faceData=[[0,2,4],[0,2,5],[0,3,4],[0,3,5],[1,2,4],[1,2,5],[1,3,4],[1,3,5],[0,2,6],[0,2,7],[0,3,6],[0,3,7],[1,2,6],[1,2,7],[1,3,6],[1,3,7],[0,4,6],[0,4,7],[0,5,6],[0,5,7],[1,4,6],[1,4,7],[1,5,6],[1,5,7],[2,4,6],[2,4,7],[2,5,6],[2,5,7],[3,4,6],[3,4,7],[3,5,6],[3,5,7]]
        JL=vertexData.length
      break
      case 17:
      vertexData = frag(ex,4)
      edgeLength=phi
      intersectionD=2.802517076888151
      circumR=phi
      fct = 1.1
      zoom = 1/4
      L=1200*2
      s=0.25
      L2=1200
        JL=vertexData.length
      break
      case 18:
      vertexData = frag(ex,4)
      edgeLength=phi
      intersectionD=3.0776835371752536
      circumR=phi
      fct = 1.1
      zoom = 1/4
      L=1200*2
      s=0.25
      L2=1200
        JL=vertexData.length
      break
      case 19:
      vertexData = frag(ex,4)
      edgeLength=phi
      intersectionD=2.2882456112707406
      circumR=phi
      fct = 1.1
      zoom = 1/4
      L=1200*2
      s=0.25
      L2=1200
        JL=vertexData.length
      break
    }
  }else if(dimentionCount==3&&inp2.value()==3) {
    inp4.hide()
    inp5.hide()
    edgesData=[]
    switch(polytopeID) {
      case 0:
        vertexData = [[sqrt(2/3),-sqrt(2/9),1/3,0],[-sqrt(2/3),-sqrt(2/9),1/3,0],[0,sqrt(8/9),1/3,0],[0,0,-1,0]]
        edgeLength = 2/sqrt(1.6)/sqrt(15/16)
        circumR = 1
        L = 6
        s=1
        L2=L
        faceData=[[0,1,2],[0,2,3],[0,3,1],[1,2,3]]
        JL=vertexData.length
      break
      case 1:
        vertexData = conv([[11,11,11,0]])
        edgeLength = 2
        circumR = sqrt(3)
        L=12
        s=1
        L2=L
        faceData=[[1,0,2,3],[5,4,6,7],[3,2,6,7],[1,0,4,5],[2,0,4,6],[3,1,5,7]]
        JL=vertexData.length
      break
      case 2:
        vertexData = conv([[11,0,0,0],[0,11,0,0],[0,0,11,0]])
        edgeLength= sqrt(2)
        circumR = 1
        L=12
        s=1
        rotArr[1][0] = PI/4
        rotArr[1][1] = PI/5
        L2=L
        faceData=[[0,2,4],[0,3,4],[0,2,5],[0,3,5],[1,2,4],[1,3,4],[1,2,5],[1,3,5]]
        JL=vertexData.length
      break
      case 3:
        vertexData = dodecahedron
        edgeLength= sqrt(5)-1
        circumR=sqrt(3)
        L=30
        s=1
        rotArr[1][1]=atan(phi_1)
        L2=L
        faceData=[[1,16,0,12,13],[12,0,8,10,4],[15,3,9,11,7],[19,6,14,15,7],[14,2,8,10,6],[13,1,9,11,5],[18,4,10,6,19],[16,1,9,3,17],[16,0,8,2,17],[18,5,11,7,19],[18,4,12,13,5],[17,2,14,15,3]]
        JL=vertexData.length
      break
      case 4:
        vertexData = icosohedron
        edgeLength=2
        circumR=sqrt(phi+2)
        L=30
        s=1
        rotArr[1][0] = atan(phi_2)
        L2=L
        faceData=[[0,2,8],[1,3,11],[0,2,10],[1,3,9],[2,5,8],[1,6,11],[1,4,6],[2,5,7],[2,7,10],[1,4,9],[0,6,10],[3,5,9],[0,4,6],[3,5,7],[0,4,8],[3,7,11],[6,10,11],[5,8,9],[4,8,9],[7,10,11]]
        JL=vertexData.length
      break
      case 5:
        vertexData = icosohedron
        edgeLength=2*phi
        circumR=sqrt(phi+2)
        L=30
        s=1
        L2=L
        rotArr[1][0] = 0
        rotArr[1][1]=atan(phi_1)
        faceData=[[4,2,6,8,10],[5,1,7,9,11],[11,2,6,7,0],[8,3,4,5,1],[5,0,7,8,10],[4,3,6,9,11],[9,2,4,5,0],[10,3,6,7,1],[0,1,8,6,9],[2,3,10,5,11],[0,1,10,4,11],[2,3,8,7,9]]
        JL=vertexData.length
      break
      case 6:
        vertexData = icosohedron
        edgeLength=2
        intersectionD = 2*phi
        circumR=sqrt(phi+2)
        L=60
        s=1
        L2=30
        rotArr[1][0] = 0
        faceData=[[4,8,2,10,6],[5,9,1,11,7],[11,7,2,0,6],[8,5,3,1,4],[5,8,0,10,7],[4,9,3,11,6],[9,5,2,0,4],[10,7,3,1,6],[0,6,1,9,8],[2,5,3,11,10],[0,4,1,11,10],[2,7,3,9,8]]
        rotArr[1][1]=atan(phi_1)
        JL=vertexData.length
      break
      case 7:
        vertexData = dodecahedron
        circumR=sqrt(phi+2)
        edgeLength=sqrt(5)+1
        L=30
        s=1
        rotArr[1][1]=atan(phi_1)
        L2=30
        faceData=[[2,13,6,16,18],[1,14,5,17,19],[0,15,4,17,19],[3,12,7,16,18],[19,1,10,11,0],[16,7,8,9,6],[4,9,6,13,15],[1,10,3,12,14],[17,5,8,9,4],[18,3,10,11,2],[0,11,2,13,15],[5,8,7,12,14]]
        JL=vertexData.length
      break
      case 8:
        vertexData = doWeird(icosohedron,2*phi,phi)
        circumR=sqrt(phi+2)
        edgeLength=2*phi
        L=180
        s=1
        rotArr[1][0] = atan(phi_2)
        L2=30
        faceData=[[4,5,10],[6,7,9],[0,1,7],[2,3,4],[0,9,11],[3,8,10],[2,6,9],[1,5,10],[3,6,8],[0,5,11],[2,4,11],[1,7,8],[6,7,8],[4,5,11],[2,3,6],[0,1,5],[2,9,11],[1,8,10],[3,4,10],[0,7,9]]
        JL=12
        intData=[[12,28],[12,29],[12,30],[13,26],[13,27],[13,31],[14,23],[14,25],[14,31],[15,22],[15,24],[15,31],[16,21],[16,25],[16,30],[17,20],[17,24],[17,30],[18,19],[18,27],[18,29],[19,26],[19,28],[20,22],[20,29],[21,23],[21,28],[22,27],[23,26],[24,25]]
        intData.push([12,22],[12,23],[12,24],[12,25],[12,26],[12,27],[13,20],[13,21],[13,24],[13,25],[13,28],[13,29],[14,17],[14,19],[14,22],[14,27],[14,28],[14,30],[15,16],[15,18],[15,23],[15,26],[15,29],[15,30],[16,19],[16,20],[16,26],[16,29],[16,31],[17,18],[17,21],[17,27],[17,28],[17,31],[18,21],[18,23],[18,30],[18,31],[19,20],[19,22],[19,30],[19,31],[20,25],[20,28],[20,31],[21,24],[21,29],[21,31],[22,25],[22,26],[22,30],[23,24],[23,27],[23,30],[24,27],[24,29],[25,26],[25,28],[26,29],[27,28])
        intData.push([0,14],[0,18],[0,20],[0,24],[0,26],[1,15],[1,19],[1,21],[1,25],[1,27],[2,16],[2,18],[2,22],[2,24],[2,28],[3,17],[3,19],[3,23],[3,25],[3,29],[4,12],[4,14],[4,15],[4,20],[4,21],[5,13],[5,16],[5,17],[5,22],[5,23],[6,20],[6,21],[6,26],[6,27],[6,30],[7,22],[7,23],[7,28],[7,29],[7,31],[8,12],[8,13],[8,14],[8,16],[8,18],[9,12],[9,13],[9,15],[9,17],[9,19],[10,24],[10,26],[10,28],[10,30],[10,31],[11,25],[11,27],[11,29],[11,30],[11,31])
      break
      case 9:
        var AA = [10+sqrt(0.5)]
        vertexData = conv([[AA,AA,0,0],[AA,0,AA,0],[0,AA,AA,0]])
        circumR=1
        edgeLength=1
        L=24
        s=1
        L2=L
        faceData=[[10,6,8,4],[11,7,9,5],[11,3,10,1],[9,2,8,0],[7,3,6,2],[5,1,4,0],[1,4,10],[2,7,9],[3,6,10],[0,5,9],[0,4,8],[3,7,11],[2,6,8],[1,5,11]]
        JL=vertexData.length
      break
      case 10:
        vertexData = conv([[0,0,2*sqrt(3)/3+10,0],[2*sqrt(3)/3+10,0,0,0],[0,2*sqrt(3)/3+10,0,0],[10+sqrt(3)/3,10+sqrt(3)/3,10+sqrt(3)/3,0]])
        circumR=2*sqrt(3)/3
        edgeLength=1
        L=24
        s=1
        L2=L
        faceData=[[6,0,8,2],[6,2,7,4],[6,4,10,0],[9,1,7,2],[9,2,8,5],[9,5,13,1],[11,1,13,3],[11,3,10,4],[11,4,7,1],[12,0,10,3],[12,3,13,5],[12,5,8,0]]
        JL=vertexData.length
      break
      case 11:
        var _1 = (sqrt(5)+3)/4+10
        var _2 = phi/2+10
        var _3 = 10.5
        vertexData = conv([[phi+10,0,0,0],[0,phi+10,0,0],[0,0,phi+10,0],[_1,_2,_3,0],[_3,_1,_2,0],[_2,_3,_1,0]])
        circumR=phi
        edgeLength=1
        L=60
        s=1
        L2=L
        faceData=[[4,26,28],[5,23,25],[12,20,28],[7,15,23],[1,12,13],[0,6,7],[1,10,11],[0,8,9],[10,18,26],[9,17,25],[6,14,22],[13,21,29],[5,27,29],[4,22,24],[11,19,27],[8,16,24],[3,16,20],[2,15,19],[2,14,18],[3,17,21],[28,26,10,1,12],[7,0,9,25,23],[16,24,4,28,20],[15,23,5,27,19],[14,22,4,26,18],[17,25,5,29,21],[12,20,3,21,13],[6,14,2,15,7],[6,0,8,24,22],[11,1,13,29,27],[10,18,2,19,11],[8,16,3,17,9]]
        JL=vertexData.length
      break
      case 12:
        var a0 = sqrt(5)/4
        var a1 = (5+sqrt(5))/8
        var a2 = (5+3*sqrt(5))/8
        vertexData = conv([[10+a1,0,10+a2,0],[10+a2,10+a1,0,0],[0,10+a2,10+a1,0],[0,10+a0,10+a2,0],[10+a2,0,10+a0,0],[a0+10,a2+10,0,0],[10+a1,10+a1,10+a1,0]])
        circumR=sqrt(3)*a1
        edgeLength=1.063313510440049
        L=60
        s=1
        L2=L
        faceData=[[0,12,2,14],[0,14,10,26],[0,26,5,16],[1,13,9,25],[1,25,4,17],[1,17,5,27],[2,28,6,18],[2,18,7,30],[2,30,10,14],[3,19,6,29],[3,29,9,13],[3,13,1,15],[4,20,8,24],[4,24,0,16],[4,16,5,17],[7,18,6,19],[7,19,3,31],[7,31,11,23],[8,22,6,28],[8,28,2,12],[8,12,0,24],[9,29,6,22],[9,22,8,20],[9,20,4,25],[10,30,7,23],[10,23,11,21],[10,21,5,26],[11,31,3,15],[11,15,1,27],[11,27,5,21]]
        JL=vertexData.length
      break
      case 13:
        vertexData = doWeird(frag(did,4),1,phi)
        circumR=1
        edgeLength=1
        L=90
        s=1
        L2=60
        faceData=frag(didf,5)
        JL=30
        intData=[[30,52],[31,53],[32,50],[33,51],[34,70],[35,71],[36,72],[37,73],[38,78],[39,40],[41,81],[42,55],[43,54],[44,57],[45,56],[46,82],[47,83],[48,84],[49,85],[58,60],[59,61],[62,75],[63,74],[64,77],[65,76],[66,88],[67,89],[68,86],[69,87],[79,80]]
      break
      case 14:
        var a0 = 3*(sqrt(5)-1)/8
        var a1 = 3*(1+sqrt(5))/8
        vertexData = doWeird2(conv([[10.75,0,10+a1,0],[10+a1,10.75,0,0],[0,10+a1,10.75,0],[10+a0,0,10.75,0],[10.75,10+a0,0,0],[0,10.75,10+a0,0]]),sqrt(3)*3/4,phi)
        circumR=sqrt(3)*a1
        edgeLength=sqrt(3)*3/4
        intersectionD=0.88167787843871
        L=120
        s=1
        L2=60
        faceData=[[0,14,7,22],[0,22,11,17],[0,17,1,16],[0,16,9,20],[0,20,6,14],[3,13,5,23],[3,23,10,19],[3,19,2,18],[3,18,8,21],[3,21,4,13],[1,15,6,21],[1,21,8,16],[2,19,11,22],[2,22,5,12],[4,21,6,20],[4,20,2,12],[5,13,9,16],[5,16,8,12],[6,15,11,19],[6,19,10,14],[7,15,1,23],[7,23,5,22],[8,18,7,14],[8,14,10,12],[9,15,7,18],[9,18,2,20],[10,23,1,17],[10,17,4,12],[11,15,9,13],[11,13,4,17]]
        JL=24
      break
      case 15:
        vertexData = doWeird(frag(gid,4),1,phi2*phi)
        circumR=phi_1
        edgeLength=1
        L=60*2
        s=1
        L2=60
        faceData=gidf
        JL=30
        intData=[[30,71],[31,70],[32,73],[33,72],[34,84],[35,85],[36,57],[37,56],[38,55],[39,54],[40,68],[41,69],[42,66],[43,67],[44,45],[46,87],[47,86],[48,89],[49,88],[50,78],[51,79],[52,76],[53,77],[58,59],[60,61],[62,83],[63,82],[64,81],[65,80],[74,75]]
        intData.push([30,48],[31,49],[32,46],[33,47],[34,35],[36,62],[37,63],[38,64],[39,65],[40,51],[41,50],[42,53],[43,52],[44,74],[45,75],[54,80],[55,81],[56,82],[57,83],[58,60],[59,61],[66,77],[67,76],[68,79],[69,78],[70,88],[71,89],[72,86],[73,87],[84,85])
      break
      case 16:
        var a0 = (3*sqrt(5)-5)/8
        var a1 = (5-sqrt(5))/8
        var a2 = sqrt(5)/4
        vertexData = doWeird(conv([[0,10+a1,10+a0,0],[10+a1,10+a0,0,0],[10+a0,0,10+a1,0],[10+a2,0,10+a0,0],[0,10+a0,10+a2,0],[a0+10,a2+10,0,0],[10+a1,10+a1,10+a1,0]]),sqrt(10*(5-sqrt(5)))/8,phi)
        circumR=sqrt(3)*a1
        edgeLength=sqrt(10*(5-sqrt(5)))/8
        L=180
        s=1
        L2=60
        faceData=[[0,12,2,14],[0,12,9,29],[0,14,11,25],[0,18,5,25],[0,18,7,29],[1,13,3,15],[1,15,10,24],[2,12,9,31],[2,14,11,27],[2,16,4,27],[2,16,6,31],[3,13,8,30],[3,15,10,26],[3,17,4,26],[3,17,6,30],[4,16,6,17],[4,22,10,26],[4,22,11,27],[5,18,7,19],[5,23,10,24],[5,24,1,19],[6,20,9,31],[7,21,8,28],[7,21,9,29],[7,28,1,19],[8,13,1,28],[8,20,9,21],[10,22,11,23],[6,20,8,30],[5,23,11,25]]
        JL=32
        intData=[[0,35],[0,42],[0,58],[0,70],[0,77],[1,36],[1,41],[1,59],[1,69],[1,78],[2,35],[2,44],[2,54],[2,72],[2,77],[3,36],[3,43],[3,55],[3,71],[3,78],[4,43],[4,44],[4,54],[4,55],[4,61],[5,41],[5,42],[5,58],[5,59],[5,66],[6,47],[6,54],[6,55],[6,71],[6,72],[7,52],[7,58],[7,59],[7,69],[7,70],[8,36],[8,47],[8,52],[8,69],[8,71],[9,35],[9,47],[9,52],[9,70],[9,72],[10,41],[10,43],[10,61],[10,66],[10,78],[11,42],[11,44],[11,61],[11,66],[11,77]]
        intData.push([32,61],[32,66],[33,55],[33,71],[34,54],[34,72],[35,57],[35,67],[35,73],[36,56],[36,68],[36,74],[37,59],[37,69],[38,58],[38,70],[39,44],[39,77],[40,43],[40,78],[41,46],[41,63],[41,79],[42,45],[42,62],[42,80],[43,65],[43,75],[44,64],[44,76],[45,77],[46,78],[47,50],[47,51],[47,81],[48,52],[48,70],[49,52],[49,69],[50,72],[51,71],[52,81],[53,58],[53,59],[54,60],[54,76],[55,60],[55,75],[56,78],[57,77],[58,80],[59,79],[61,64],[61,65],[62,66],[63,66],[67,72],[68,71],[69,74],[70,73])
      break
      case 17:
        vertexData = conv([[11,0,0,0],[0,11,0,0],[0,0,11,0]])
        circumR=1
        edgeLength=sqrt(2)
        intersectionD=2
        L=15
        s=1
        L2=12
        faceData=[[0,2,4],[3,4,1],[2,1,5],[5,3,0],[0,3,1,2],[4,0,5,1],[2,4,3,5]]
        JL=vertexData.length
      break
      case 18:
        var AA = [10+sqrt(0.5)]
        vertexData = conv([[AA,AA,0,0],[AA,0,AA,0],[0,AA,AA,0]])
        circumR=1
        edgeLength=1
        intersectionD=2
        L=24+6
        s=1
        L2=24
        faceData=[[1,4,10],[2,7,9],[3,6,10],[0,5,9],[0,4,8],[3,7,11],[2,6,8],[1,5,11],[5,1,10,6,2,9],[11,5,0,8,6,3],[11,1,4,8,2,7],[3,10,4,0,9,7]]
        JL=vertexData.length
      break
      case 19:
        var AA = [10+sqrt(0.5)]
        vertexData = conv([[AA,AA,0,0],[AA,0,AA,0],[0,AA,AA,0]])
        circumR=1
        edgeLength=1
        intersectionD=2
        L=24+6
        s=1
        L2=24
        faceData=[[10,6,8,4],[11,7,9,5],[11,3,10,1],[9,2,8,0],[7,3,6,2],[5,1,4,0],[5,1,10,6,2,9],[11,5,0,8,6,3],[11,1,4,8,2,7],[3,10,4,0,9,7]]
        JL=vertexData.length
      break
      case 20:
        vertexData = frag(seihid,4)
        circumR=phi
        edgeLength=1
        intersectionD=phi*2
        L=60+15
        s=1
        L2=60
        faceData=[[4,12,18],[4,2,0],[0,3,6],[6,13,22],[2,17,9],[20,17,28],[3,10,20],[18,29,22],[26,14,12],[9,26,11],[27,10,15],[21,24,28],[13,27,16],[23,25,29],[25,16,19],[7,24,15],[19,1,7],[11,21,5],[8,1,5],[14,8,23],[0,6,13,16,19,1,5,11,9,2],[2,4,18,29,25,19,7,24,28,17],[24,21,11,26,12,18,22,13,27,15],[6,3,20,28,21,5,8,23,29,22],[3,0,4,12,14,8,1,7,15,10],[20,17,9,26,14,23,25,16,27,10]]
        JL=vertexData.length
      break
      case 21:
        vertexData = frag(seihid,4)
        circumR=phi
        edgeLength=1
        intersectionD=phi*2
        L=60
        s=1
        L2=60+15
        faceData=[[18,22,6,0,4],[9,11,21,28,17],[2,4,12,26,9],[0,2,17,20,3],[13,6,3,10,27],[12,14,23,29,18],[15,24,28,20,10],[16,27,15,7,19],[29,25,16,13,22],[25,23,8,1,19],[1,7,24,21,5],[26,14,8,5,11],[2,0,6,13,16,19,1,5,11,9],[4,18,29,25,19,7,24,28,17,2],[4,12,14,8,1,7,15,10,3,0],[14,23,25,16,27,10,20,17,9,26],[21,11,26,12,18,22,13,27,15,24],[20,3,6,22,29,23,8,5,21,28]]
        JL=vertexData.length
      break
      case 22:
        vertexData = doWeird(frag(did,4),1,phi)
        circumR=1
        edgeLength=1
        L=250
        s=1
        L2=60
        faceData=[[19,23,0,16,22],[17,20,26,1,29],[21,6,13,7,24],[3,11,0,6,9],[17,23,5,15,14],[24,19,27,3,18],[20,8,25,12,21],[16,26,18,15,28],[13,28,25,27,29],[1,2,5,12,4],[2,11,8,10,7],[4,22,10,14,9 ],[13,7,10,14,15,28 ],[0,11,8,20,26,16],[29,13,6,9,14,17],[18,24,7,2,5,15],[21,6,0,23,17,20 ],[12,4,22,19,27,25],[9,3,27,29,1,4 ],[10,8,25,28,16,22],[21,24,19,23,5,12],[1,2,11,3,18,26]]
        JL=30
        intData=[[30,52],[31,53],[32,50],[33,51],[34,70],[35,71],[36,72],[37,73],[38,78],[39,40],[41,81],[42,55],[43,54],[44,57],[45,56],[46,82],[47,83],[48,84],[49,85],[58,60],[59,61],[62,75],[63,74],[64,77],[65,76],[66,88],[67,89],[68,86],[69,87],[79,80],[0,20],[1,3],[2,18],[4,27],[5,24],[6,17],[7,15],[8,16],[9,29],[10,28],[11,26],[12,19],[13,14],[21,23],[22,25],[30,89],[31,88],[32,87],[33,86],[34,85],[35,84],[36,83],[37,82],[38,81],[39,80],[40,79],[41,78],[42,77],[43,76],[44,75],[45,74],[46,73],[47,72],[48,71],[49,70],[50,69],[51,68],[52,67],[53,66],[54,65],[55,64],[56,63],[57,62],[58,61],[59,60],[30,57],[30,72],[31,56],[31,73],[32,55],[32,70],[33,54],[33,71],[34,60],[34,82],[35,61],[35,83],[36,58],[36,84],[37,59],[37,85],[38,74],[38,75],[39,51],[39,53],[40,50],[40,52],[41,76],[41,77],[42,43],[42,78],[43,78],[44,45],[44,81],[45,81],[46,63],[46,88],[47,62],[47,89],[48,65],[48,86],[49,64],[49,87],[50,52],[51,53],[54,71],[55,70],[56,73],[57,72],[58,84],[59,85],[60,82],[61,83],[62,89],[63,88],[64,87],[65,86],[66,68],[66,80],[67,69],[67,79],[68,80],[69,79],[74,75],[76,77]]
      break
      case 23:
        vertexData = doWeird(frag(did,4),1,phi)
        circumR=1
        edgeLength=1
        intersectionD=1.7480640977952844
        intersectionD2=2
        L=60+45
        s=1
        L2=60
        faceData=[[7,13,29,1,2],[6,9,4,12,21],[11,2,5,23,0],[17,29,27,19,23],[24,7,10,22,19],[4,1,26,16,22],[5,15,28,25,12],[26,18,24,21,20],[13,6,0,16,28],[8,11,3,27,25],[17,14,10,8,20],[14,15,18,3,9],[13,7,10,14,15,28],[0,11,8,20,26,16],[29,13,6,9,14,17],[18,24,7,2,5,15],[21,6,0,23,17,20],[12,4,22,19,27,25],[9,3,27,29,1,4],[10,8,25,28,16,22],[21,24,19,23,5,12],[1,2,11,3,18,26]]
        JL=30
      break
      case 24:
        vertexData = doWeird(frag(gid,4),1,phi2*phi)
        circumR=phi_1
        edgeLength=1
        intersectionD=phi_1*2
        L=60+45
        s=1
        L2=60
        faceData=[[5,1,12,2,4],[10,2,8,7,11],[0,3,6,11,9],[27,13,25,29,28],[16,19,0,22,23],[1,20,29,26,17],[21,13,24,6,7],[4,14,22,9,10],[8,12,20,25,21],[23,14,5,17,15],[15,16,18,28,26],[18,19,3,24,27],[0,19,18,28,29,20,12,2,10,9],[29,26,15,23,22,9,11,7,21,25],[8,7,6,3,19,16,15,17,1,12],[3,0,22,14,5,1,20,25,13,24],[27,24,6,11,10,4,5,17,26,28],[8,2,4,14,23,16,18,27,13,21]]
        JL=30
        intData=[[0,20],[1,3],[2,18],[4,27],[5,24],[6,17],[7,15],[8,16],[9,29],[10,28],[11,26],[12,19],[13,14],[21,23],[22,25]]
        intData.push([30,48],[31,49],[32,46],[33,47],[34,35],[36,62],[37,63],[38,64],[39,65],[40,51],[41,50],[42,53],[43,52],[44,74],[45,75],[54,80],[55,81],[56,82],[57,83],[58,60],[59,61],[66,77],[67,76],[68,79],[69,78],[70,88],[71,89],[72,86],[73,87],[84,85])
      break
      case 25:
        vertexData = doWeird(frag(gid,4),1,phi2*phi)
        var BB = doWeird(frag(gid,4),1,phi)
        for(var i = 30; i<BB.length; i++) {
          vertexData[vertexData.length]=BB[i]
        }
        circumR=phi_1
        edgeLength=1
        intersectionD=0.5401815134754514
        L=165
        s=1
        L2=60
        faceData=[[13,25,21],[7,8,21],[6,24,3],[17,15,26],[9,11,10],[7,6,11],[29,26,28],[28,18,27],[24,27,13],[1,20,12],[29,25,20],[4,5,14],[0,3,19],[18,19,16],[8,12,2],[2,10,4],[0,22,9],[23,16,15],[1,5,17],[22,23,14],[0,19,18,28,29,20,12,2,10,9],[29,26,15,23,22,9,11,7,21,25],[8,7,6,3,19,16,15,17,1,12],[3,0,22,14,5,1,20,25,13,24],[27,24,6,11,10,4,5,17,26,28],[8,2,4,14,23,16,18,27,13,21]]
        JL=30
        intData=[[30,71],[31,70],[32,73],[33,72],[34,84],[35,85],[36,57],[37,56],[38,55],[39,54],[40,68],[41,69],[42,66],[43,67],[44,45],[46,87],[47,86],[48,89],[49,88],[50,78],[51,79],[52,76],[53,77],[58,59],[60,61],[62,83],[63,82],[64,81],[65,80],[74,75]]
        intData.push([0,20],[1,3],[2,18],[4,27],[5,24],[6,17],[7,15],[8,16],[9,29],[10,28],[11,26],[12,19],[13,14],[21,23],[22,25])
        intData.push([90,103],[90,104],[90,105],[90,106],[91,98],[91,100],[91,109],[91,111],[92,97],[92,99],[92,110],[92,112],[93,96],[93,102],[93,107],[93,113],[94,95],[94,101],[94,108],[94,114],[95,101],[95,108],[95,115],[96,102],[96,107],[96,116],[97,99],[97,110],[97,117],[98,100],[98,109],[98,118],[99,112],[99,117],[100,111],[100,118],[101,114],[101,115],[102,113],[102,116],[103,104],[103,105],[103,119],[104,106],[104,119],[105,106],[105,119],[106,119],[107,113],[107,116],[108,114],[108,115],[109,111],[109,118],[110,112],[110,117],[111,118],[112,117],[113,116],[114,115])
      break
      case 26:
        vertexData = doWeird(ditdid,1,phi)
        circumR=2/sqrt(3)
        edgeLength=1
        L=90*2
        s=1
        L2=60
        faceData=frag(ditdidf,5)
        JL=20
        intData=[[0,10],[0,14],[0,16],[1,8],[1,12],[1,18],[2,7],[2,12],[2,16],[3,9],[3,13],[3,17],[4,10],[4,13],[4,15],[5,8],[5,11],[5,17],[6,7],[6,11],[6,15],[7,8],[9,10],[9,19],[11,13],[12,14],[14,19],[15,16],[17,18],[18,19]]
        intData.push([20,78],[21,79],[22,71],[23,70],[24,69],[25,68],[26,61],[27,60],[28,77],[29,76],[30,75],[31,74],[32,57],[33,56],[34,55],[35,54],[36,53],[37,52],[38,73],[39,72],[40,41],[42,67],[43,66],[44,65],[45,64],[46,63],[47,62],[48,50],[49,51],[58,59])
      break
      case 27:
        var a0 = phi_2
        vertexData = doWeird2(conv([[10+phi,0,10+phi2,0],[10+phi2,10+phi,0,0],[0,10+phi2,10+phi,0],[10+a0,0,10+phi_1,0],[10+phi_1,10+a0,0,0],[0,10+phi_1,10+a0,0]]),sqrt(8),2*phi_1)
        circumR=sqrt(phi2+phi2*phi2)
        edgeLength=sqrt(8)
        intersectionD=2/phi2
        intersectionD2=0.8740320488976451
        L=60+90
        s=1/4
        L2=60
        faceData=[[0,14,6,19,11,22],[0,22,7,23,1,17],[0,17,11,13,9,16],[0,16,1,21,6,20],[0,20,9,18,7,14],[3,13,4,17,10,23],[3,23,5,22,2,19],[3,19,10,14,8,18],[3,18,2,20,4,21],[3,21,8,16,5,13],[12,2,22,11,17,4],[12,4,20,6,14,10],[12,10,17,1,16,8],[12,8,14,7,22,5],[12,5,16,9,20,2],[15,1,23,10,19,6],[15,6,21,4,13,11],[15,11,19,2,18,9],[15,9,13,5,23,7],[15,7,18,8,21,1]]
        JL=24
      break
      case 28:
        vertexData = doWeird(ditdid,1,phi)
        circumR=2/sqrt(3)
        edgeLength=1
        L=90
        s=1
        L2=60
        faceData=[[16,4,6],[16,14,18,5,6],[4,3,18,12,16],[8,18,9,4,6],[3,4,11],[18,5,3],[9,18,14],[11,8,12,0,4],[0,9,4],[11,7,12,19,3],[7,16,10,3,5],[12,16,7],[0,19,12],[10,3,19],[16,10,14],[15,11,7],[7,1,5],[1,7,15,10,19],[6,13,9,14,2],[6,2,8],[14,10,13,5,1],[2,1,17,13,15],[14,2,1],[17,19,0,15,11],[17,9,0,2,8],[15,13,10],[2,15,0],[13,9,17],[8,12,18],[6,5,13],[19,17,1],[17,11,8]]
        JL=20
        intData=[[20,21],[22,28],[23,29],[24,30],[25,31],[26,38],[27,39],[32,42],[33,43],[34,44],[35,45],[36,46],[37,47],[40,58],[41,59],[48,49],[50,51],[52,62],[53,63],[54,64],[55,65],[56,66],[57,67],[60,72],[61,73],[68,74],[69,75],[70,76],[71,77],[78,79]]
      break
      case 29:
        var a0 = (5-sqrt(5))/10
        var a1 = (3-sqrt(5))/2
        var a2 = sqrt(5)/5
        var a4 = (5+sqrt(5))/10
        vertexData = conv([[0,10+a0,10+a4,0],[10+a4,0,10+a0,0],[10+a0,10+a4,0,0],[10+a1,0,10+phi_1,0],[10+phi_1,10+a1,0,0],[0,10+phi_1,10+a1,0],[10+a2,10+a2,10+a2,0]])
        circumR=sqrt(sq(a0)+sq(a4))
        edgeLength=(3*sqrt(10)-5*sqrt(2))/5
        intersectionD=0.7639320225002102
        L=120
        s=1
        L2=60
        faceData=[[12,0,14,30,22,26],[12,26,17,5,16,24],[12,24,20,28,14,2],[12,2,22,9,17,4],[12,4,16,8,20,0],[15,1,13,27,23,31],[15,31,19,6,18,29],[15,29,21,25,13,3],[15,3,23,11,19,7],[15,7,18,10,21,1],[13,1,21,8,16,5],[13,5,17,9,23,3],[13,25,16,4,17,27],[14,0,20,10,18,6],[14,6,19,11,22,2],[14,28,18,7,19,30],[20,8,21,29,18,28],[20,24,16,25,21,10],[22,11,23,27,17,26],[22,30,19,31,23,9]]
        JL=vertexData.length
      break
      case 30:
        vertexData = doWeird(ditdid,1,phi)
        circumR=2/sqrt(3)
        edgeLength=1
        L=210
        s=1
        L2=60
        faceData=[[16,4,6],[3,4,11],[18,5,3],[9,18,14],[0,9,4],[12,16,7],[0,19,12],[10,3,19],[16,10,14],[15,11,7],[7,1,5],[6,2,8],[14,2,1],[15,13,10],[2,15,0],[13,9,17],[8,12,18],[6,5,13],[19,17,1],[17,11,8],[0,15,10,16,4],[17,1,5,18,8],[19,0,9,14,10],[7,11,8,6,5],[10,3,4,9,13],[5,13,17,11,3],[18,12,19,1,14],[6,4,11,15,13],[16,6,2,15,7],[3,18,9,17,19],[7,1,2,8,12],[2,0,12,16,14]]
        JL=20
        intData=[[20,21],[22,28],[23,29],[24,30],[25,31],[26,38],[27,39],[32,42],[33,43],[34,44],[35,45],[36,46],[37,47],[40,58],[41,59],[48,49],[50,51],[52,62],[53,63],[54,64],[55,65],[56,66],[57,67],[60,72],[61,73],[68,74],[69,75],[70,76],[71,77],[78,79]]
        intData.push([20,78],[21,79],[22,71],[23,70],[24,69],[25,68],[26,61],[27,60],[28,77],[29,76],[30,75],[31,74],[32,57],[33,56],[34,55],[35,54],[36,53],[37,52],[38,73],[39,72],[40,41],[42,67],[43,66],[44,65],[45,64],[46,63],[47,62],[48,50],[49,51],[58,59])
        intData.push([0,10],[0,14],[0,16],[1,8],[1,12],[1,18],[2,7],[2,12],[2,16],[3,9],[3,13],[3,17],[4,10],[4,13],[4,15],[5,8],[5,11],[5,17],[6,7],[6,11],[6,15],[7,8],[9,10],[9,19],[11,13],[12,14],[14,19],[15,16],[17,18],[18,19])
        intData.push([20,30],[20,31],[21,28],[21,29],[22,24],[22,44],[23,25],[23,45],[24,46],[25,47],[26,34],[26,49],[27,35],[27,48],[28,38],[29,39],[30,42],[31,43],[32,36],[32,51],[33,37],[33,50],[34,62],[35,63],[36,64],[37,65],[38,39],[40,52],[40,54],[41,53],[41,55],[42,43],[44,58],[45,59],[46,58],[47,59],[48,67],[49,66],[50,73],[51,72],[52,74],[53,75],[54,76],[55,77],[56,57],[56,68],[57,69],[60,61],[60,70],[61,71],[62,66],[63,67],[64,72],[65,73],[68,79],[69,79],[70,78],[71,78],[74,76],[75,77])
      break
      case 31:
        var a0 = (5-sqrt(5))/10
        var a1 = sqrt(5)/5
        var a2 = (5+sqrt(5))/10
        vertexData = doWeird2(conv([[10+a2,0,10+a0,0],[0,10+a0,10+a2,0],[10+a0,10+a2,0,0],[0,10+phi2,10-phi,0],[10+phi2,10+phi,0,0],[10-phi,0,10+phi2,0],[10-a1,10-a1,10-a1,0]]),(5*sqrt(2)+3*sqrt(10))/5,1/(1-phi/2/phi2))
        for(var i = 24; i<32; i++) {
          var a = vertexData[i][0]
          vertexData[i][0]=vertexData[i][1]
          vertexData[i][1]=a
        }
        vertexData[9][0]*=-1
        vertexData[10][0]*=-1
        vertexData[9][1]*=-1
        vertexData[10][1]*=-1
        vertexData[17][0]*=-1
        vertexData[18][0]*=-1
        vertexData[16][1]*=-1
        vertexData[19][1]*=-1
        circumR=sqrt(sq(phi2)+phi2)
        edgeLength=sqrt(2)+(3*sqrt(10))/5
        intersectionD=0.3908790151697109
        L=120
        s=1/4
        L2=60
        faceData=[[12,0,14,30,22,26],[12,26,17,5,16,24],[12,24,20,28,14,2],[12,2,22,9,17,4],[12,4,16,8,20,0],[15,1,13,27,23,31],[15,31,19,6,18,29],[15,29,21,25,13,3],[15,3,23,11,19,7],[15,7,18,10,21,1],[13,1,21,8,16,5],[13,5,17,9,23,3],[13,25,16,4,17,27],[14,0,20,10,18,6],[14,6,19,11,22,2],[14,28,18,7,19,30],[20,8,21,29,18,28],[20,24,16,25,21,10],[22,11,23,27,17,26],[22,30,19,31,23,9]]
        JL=32
      break
      case 32:
        var _1 = 10+(1+sqrt(2))/2
        vertexData = conv([[_1,10.5,_1,0],[_1,_1,10.5,0],[10.5,_1,_1,0]])
        circumR=sqrt(7+4*sqrt(2))/2
        edgeLength=1
        L=12+24
        L2=L
        faceData=[[0,2,10,11,3,1,9,8],[0,16,20,4,6,22,18,2],[12,13,5,7,15,14,6,4],[12,20,16,8,9,17,21,13],[19,23,7,5,21,17,1,3],[19,11,10,18,22,14,15,23],[0,8,16],[1,17,9],[2,18,10],[3,11,19],[4,20,12],[5,13,21],[6,14,22],[7,23,15]]
        JL=vertexData.length
      break
      case 33:
        var _1 = 11+sqrt(2)
        vertexData = conv([[0,0,_1,0],[_1,0,0,0],[0,_1,0,0],[11,11,11,0]])
        circumR=1+sqrt(2)
        L=12+24
        L2=L
        faceData=[[13,1,5],[9,5,1],[11,4,1],[10,3,0],[6,2,4],[11,3,4],[12,5,0],[12,3,5],[7,2,1],[9,2,5],[8,2,0],[10,4,3],[13,3,1],[12,0,3],[13,5,3],[6,0,2],[7,4,2],[8,0,5],[6,4,0],[7,1,4],[10,0,4],[9,1,2],[8,5,2],[11,1,3]]
        JL=vertexData.length
        edgesData=[[0,6],[0,8],[0,10],[0,12],[1,7],[1,9],[1,11],[1,13],[2,6],[2,7],[2,8],[2,9],[3,10],[3,11],[3,12],[3,13],[4,6],[4,7],[4,10],[4,11],[5,8],[5,9],[5,12],[5,13]]
        edgesData.push([0,2],[0,3],[0,4],[0,5],[1,2],[1,3],[1,4],[1,5],[2,4],[2,5],[3,4],[3,5])
      break
      case 34:
        var a0 = 10+sqrt(2)/2
        var a1 = 10+sqrt(2)
        vertexData = conv([[a0,0,a1,0],[a1,a0,0,0],[0,a1,a0,0],[0,a0,a1,0],[a1,0,a0,0],[a0,a1,0,0]])
        circumR=sqrt(sq(a0-10)+sq(a1-10))
        edgeLength=1
        L=12+24
        L2=L
        faceData=[[0,14,10,21,5,16],[1,13,9,20,4,17],[2,12,8,22,6,18],[3,15,11,23,7,19],[4,20,8,12,0,16],[5,21,11,15,1,17],[7,23,10,14,2,18],[6,22,9,13,3,19],[0,12,2,14],[1,15,3,13],[4,16,5,17],[6,19,7,18],[8,20,9,22],[10,23,11,21]]
        JL=vertexData.length
      break
      case 35:
        var _0 = 10+3*sqrt(2)/4
        var _1 = 10+9*sqrt(2)/8
        vertexData = conv([[0,0,_1,0],[_1,0,0,0],[0,_1,0,0],[_0,_0,_0,0]])
        circumR=1+sqrt(2)
        L=12+24
        L2=L
        faceData=[[0,6,10],[0,10,12],[0,12,8],[0,8,6],[1,7,9],[1,9,13],[1,13,11],[1,11,7],[2,6,8],[2,8,9],[2,9,7],[2,7,6],[3,10,11],[3,11,13],[3,13,12],[3,12,10],[4,6,7],[4,7,11],[4,11,10],[4,10,6],[5,8,12],[5,12,13],[5,13,9],[5,9,8]]
        JL=vertexData.length
        edgesData=[[0,6],[0,8],[0,10],[0,12],[1,7],[1,9],[1,11],[1,13],[2,6],[2,7],[2,8],[2,9],[3,10],[3,11],[3,12],[3,13],[4,6],[4,7],[4,10],[4,11],[5,8],[5,9],[5,12],[5,13]]
        edgesData.push([6,7],[6,8],[6,10],[7,9],[7,11],[8,9],[8,12],[9,13],[10,11],[10,12],[11,13],[12,13])
      break
      case 36:
        var a0 = 10+(1+sqrt(2))/2
        vertexData = conv([[10.5,10.5,a0,0],[a0,10.5,10.5,0],[10.5,a0,10.5,0]])
        circumR=sqrt(sq(0.5)*2+sq(a0-10))
        edgeLength=1
        L=24+24
        L2=L
        faceData=[[0,4,6,2],[1,3,7,5],[8,10,11,9],[12,13,15,14],[16,17,21,20],[18,22,23,19],[0,2,10,8],[0,16,20,4],[7,3,19,23],[7,15,13,5],[11,3,1,9],[11,10,18,19],[12,14,6,4],[12,20,21,13],[17,1,5,21],[17,16,8,9],[22,14,15,23],[22,18,2,6],[0,8,16],[1,17,9],[2,18,10],[3,11,19],[4,20,12],[5,13,21],[6,14,22],[7,23,15]]
        JL=vertexData.length
      break
      case 37:
        var a0 = 10+(4+sqrt(2))/7
        var a1 = 10+sqrt(2)
        vertexData = conv([[0,0,a1,0],[a1,0,0,0],[0,a1,0,0],[11,0,11,0],[11,11,0,0],[0,11,11,0],[a0,a0,a0,0]])
        circumR=sqrt(2)
        L=24+24
        L2=L
        faceData=[[0,6,18,14],[0,14,22,8],[0,8,24,16],[0,16,20,6],[1,9,23,15],[1,15,19,7],[1,7,21,17],[1,17,25,9],[2,7,19,10],[2,10,18,6],[2,6,20,11],[2,11,21,7],[3,8,22,12],[3,12,23,9],[3,9,25,13],[3,13,24,8],[4,10,19,15],[4,15,23,12],[4,12,22,14],[4,14,18,10],[5,11,20,16],[5,16,24,13],[5,13,25,17],[5,17,21,11]]
        edgesData=[[0,6],[0,8],[0,14],[0,16],[1,7],[1,9],[1,15],[1,17],[2,6],[2,7],[2,10],[2,11],[3,8],[3,9],[3,12],[3,13],[4,10],[4,12],[4,14],[4,15],[5,11],[5,13],[5,16],[5,17]]
        edgesData.push([6,18],[6,20],[7,19],[7,21],[8,22],[8,24],[9,23],[9,25],[10,18],[10,19],[11,20],[11,21],[12,22],[12,23],[13,24],[13,25],[14,18],[14,22],[15,19],[15,23],[16,20],[16,24],[17,21],[17,25])
        JL=vertexData.length
      break
      case 38:
        var a0 = (1+sqrt(2))/2+10
        var a1 = (1+2*sqrt(2))/2+10
        vertexData = conv([[a0,10.5,a1,0],[a1,a0,10.5,0],[10.5,a1,a0,0],[10.5,a0,a1,0],[a1,10.5,a0,0],[a0,a1,10.5,0]])
        circumR=sqrt(sq(0.5)+sq(a0-10)+sq(a1-10))
        edgeLength=1
        L=24*3
        L2=L
        faceData=[[0,24,28,4,6,30,26,2],[1,3,27,31,7,5,29,25],[8,32,34,10,11,35,33,9],[12,13,37,39,15,14,38,36],[16,40,41,17,21,45,44,20],[18,22,46,47,23,19,43,42],[0,32,8,40,16,24],[1,25,17,41,9,33],[2,26,18,42,10,34],[3,35,11,43,19,27],[4,28,20,44,12,36],[5,37,13,45,21,29],[6,38,14,46,22,30],[7,31,23,47,15,39],[0,2,34,32],[1,33,35,3],[4,36,38,6],[5,7,39,37],[8,9,41,40],[10,42,43,11],[12,44,45,13],[14,15,47,46],[16,20,28,24],[17,25,29,21],[18,26,30,22],[19,23,31,27]]
        JL=vertexData.length
      break
      case 39:
        var a0 = 10+sqrt(2)
        var a1 = 10+(3+6*sqrt(2))/7
        var a2 = 10+(6+9*sqrt(2))/7
        vertexData = conv([[0,0,a2,0],[a2,0,0,0],[0,a2,0,0],[a1,0,a1,0],[a1,a1,0,0],[0,a1,a1,0],[a0,a0,a0,0]])
        circumR=a2-10
        L=24*3
        L2=L
        faceData=[[0,6,18],[0,18,14],[0,14,22],[0,22,8],[0,8,24],[0,24,16],[0,16,20],[0,20,6],[1,7,21],[1,21,17],[1,17,25],[1,25,9],[1,9,23],[1,23,15],[1,15,19],[1,19,7],[2,6,20],[2,20,11],[2,11,21],[2,21,7],[2,7,19],[2,19,10],[2,10,18],[2,18,6],[3,8,22],[3,22,12],[3,12,23],[3,23,9],[3,9,25],[3,25,13],[3,13,24],[3,24,8],[4,10,19],[4,19,15],[4,15,23],[4,23,12],[4,12,22],[4,22,14],[4,14,18],[4,18,10],[5,11,20],[5,20,16],[5,16,24],[5,24,13],[5,13,25],[5,25,17],[5,17,21],[5,21,11]]
        edgesData=[[0,6],[0,8],[0,14],[0,16],[1,7],[1,9],[1,15],[1,17],[2,6],[2,7],[2,10],[2,11],[3,8],[3,9],[3,12],[3,13],[4,10],[4,12],[4,14],[4,15],[5,11],[5,13],[5,16],[5,17]] 
        edgesData.push([6,18],[6,20],[7,19],[7,21],[8,22],[8,24],[9,23],[9,25],[10,18],[10,19],[11,20],[11,21],[12,22],[12,23],[13,24],[13,25],[14,18],[14,22],[15,19],[15,23],[16,20],[16,24],[17,21],[17,25])
        edgesData.push([0,18],[0,20],[0,22],[0,24],[1,19],[1,21],[1,23],[1,25],[2,18],[2,19],[2,20],[2,21],[3,22],[3,23],[3,24],[3,25],[4,18],[4,19],[4,22],[4,23],[5,20],[5,21],[5,24],[5,25])
        JL=vertexData.length
      break
      case 40:
        var a0 = sqrt(2)/4
        var a1 = 3*sqrt(2)/4
        vertexData = [[a0,-a0,a1,0],[a0,a0,-a1,0],[-a0,a0,a1,0],[-a0,-a0,-a1,0],[a1,-a0,a0,0],[a1,a0,-a0,0],[-a1,a0,a0,0],[-a1,-a0,-a0,0],[a0,-a1,a0,0],[a0,a1,-a0,0],[-a0,a1,a0,0],[-a0,-a1,-a0,0]]
        circumR=sqrt(sq(a0)*2+sq(a1))
        edgeLength=1
        L=18
        L2=L
        faceData=[[0,4,5,9,10,2],[1,5,4,8,11,3],[2,6,7,11,8,0],[3,7,6,10,9,1],[0,8,4],[1,9,5],[2,10,6],[3,11,7]]
        JL=vertexData.length
      break
      case 41:
        var a0 = 9*sqrt(2)/20
        var a1 = 3*sqrt(2)/4
        vertexData = [[a1,a1,a1,0],[a1,-a1,-a1,0],[-a1,-a1,a1,0],[-a1,a1,-a1,0],[a0,-a0,a0,0],[a0,a0,-a0,0],[-a0,a0,a0,0],[-a0,-a0,-a0,0]]
        circumR=a1*sqrt(3)
        L=18
        L2=L
        faceData=[[4,0,2],[4,2,1],[4,1,0],[5,0,1],[5,1,3],[5,3,0],[6,0,3],[6,3,2],[6,2,0],[7,1,2],[7,2,3],[7,3,1]]
        edgesData=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]]
        edgesData.push([0,4],[0,5],[0,6],[1,4],[1,5],[1,7],[2,4],[2,6],[2,7],[3,5],[3,6],[3,7])
        JL=vertexData.length
      break
      case 42:
        var a0 = sqrt(3*(4-cbrt(17+3*sqrt(33))-cbrt(17-3*sqrt(33))))/6
        var a1 = sqrt(3*(2+cbrt(17+3*sqrt(33))+cbrt(17-3*sqrt(33))))/6
        var a2 = sqrt(3*(4+cbrt(199+3*sqrt(33))+cbrt(199-3*sqrt(33))))/6
        vertexData = [[a1,-a0,a2,0],[a1,a0,-a2,0],[-a1,a0,a2,0],[-a1,-a0,-a2,0],[a2,-a1,a0,0],[a2,a1,-a0,0],[-a2,a1,a0,0],[-a2,-a1,-a0,0],[a0,-a2,a1,0],[a0,a2,-a1,0],[-a0,a2,a1,0],[-a0,-a2,-a1,0],[a0,a1,a2,0],[a0,-a1,-a2,0],[-a0,-a1,a2,0],[-a0,a1,-a2,0],[a2,a0,a1,0],[a2,-a0,-a1,0],[-a2,-a0,a1,0],[-a2,a0,-a1,0],[a1,a2,a0,0],[a1,-a2,-a0,0],[-a1,-a2,a0,0],[-a1,a2,-a0,0]]
        circumR=sqrt(sq(a0)+sq(a1)+sq(a2))
        edgeLength=1
        L=12+24*2
        L2=L
        faceData=[[2,14,0,12],[3,15,1,13],[4,17,5,16],[7,18,6,19],[8,22,11,21],[9,23,10,20],[0,14,8],[1,15,9],[2,12,10],[3,13,11],[4,16,0],[5,17,1],[6,18,2],[7,19,3],[8,21,4],[9,20,5],[10,23,6],[11,22,7],[12,0,16],[13,1,17],[14,2,18],[15,3,19],[16,5,20],[17,4,21],[18,7,22],[19,6,23],[20,10,12],[21,11,13],[22,8,14],[23,9,15],[8,4,0],[9,5,1],[10,6,2],[11,7,3],[12,16,20],[13,17,21],[14,18,22],[15,19,23]]
        JL=vertexData.length
      break
      case 43:
        a0 = sqrt(6*(cbrt(6*(9+sqrt(33)))+cbrt(6*(9-sqrt(33)))-6))/12
        a1 = sqrt(6*(6+cbrt(6*(9+sqrt(33)))+cbrt(6*(9-sqrt(33)))))/12
        a2 = sqrt(6*(18+cbrt(6*(9+sqrt(33)))+cbrt(6*(9-sqrt(33)))))/12
        a3 = sqrt(6*(14+cbrt(2*(1777+33*sqrt(33)))+cbrt(2*(1777-33*sqrt(33)))))/12
        vertexData = conv([[0,0,10+a3,0],[10+a3,0,0,0],[0,10+a3,0,0],[a1,-a0,a2,0],[a1,a0,-a2,0],[-a1,a0,a2,0],[-a1,-a0,-a2,0],[a2,-a1,a0,0],[a2,a1,-a0,0],[-a2,a1,a0,0],[-a2,-a1,-a0,0],[a0,-a2,a1,0],[a0,a2,-a1,0],[-a0,a2,a1,0],[-a0,-a2,-a1,0],[a0,a1,a2,0],[a0,-a1,-a2,0],[-a0,-a1,a2,0],[-a0,a1,-a2,0],[a2,a0,a1,0],[a2,-a0,-a1,0],[-a2,-a0,a1,0],[-a2,a0,-a1,0],[a1,a2,a0,0],[a1,-a2,-a0,0],[-a1,-a2,a0,0],[-a1,a2,-a0,0],[10+a1,10+a1,10+a1,0]])
        circumR=a3
        L=12+24*2
        L2=L
        faceData=[[0,6,22,30,18],[0,18,16,34,8],[0,8,24,36,20],[0,20,14,32,6],[1,7,23,33,19],[1,19,17,37,9],[1,9,25,35,21],[1,21,15,31,7],[2,10,27,33,23],[2,23,7,31,11],[2,11,26,30,22],[2,22,6,32,10],[3,12,29,35,25],[3,25,9,37,13],[3,13,28,36,24],[3,24,8,34,12],[4,15,21,35,29],[4,29,12,34,16],[4,16,18,30,26],[4,26,11,31,15],[5,14,20,36,28],[5,28,13,37,17],[5,17,19,33,27],[5,27,10,32,14]]
        edgesData=[[0,6],[0,8],[0,18],[0,20],[1,7],[1,9],[1,19],[1,21],[2,10],[2,11],[2,22],[2,23],[3,12],[3,13],[3,24],[3,25],[4,15],[4,16],[4,26],[4,29],[5,14],[5,17],[5,27],[5,28]]
        edgesData.push([6,22],[6,32],[7,23],[7,31],[8,24],[8,34],[9,25],[9,37],[10,27],[10,32],[11,26],[11,31],[12,29],[12,34],[13,28],[13,37],[14,20],[14,32],[15,21],[15,31],[16,18],[16,34],[17,19],[17,37],[18,30],[19,33],[20,36],[21,35],[22,30],[23,33],[24,36],[25,35],[26,30],[27,33],[28,36],[29,35])
        JL=vertexData.length
      break
      case 44:
        var a0 = 10+(3+sqrt(5))/4
        var a1 = 10+phi
        var a2 = 10+(2+sqrt(5))/2
        var a3 = 10+phi2
        var a4 = 10+(5+3*sqrt(5))/4
        vertexData = conv([[0,10.5,a4,0],[a4,0,10.5,0],[10.5,a4,0,0],[10.5,a0,a3,0],[a3,10.5,a0,0],[a0,a3,10.5,0],[a0,a1,a2,0],[a2,a0,a1,0],[a1,a2,a0,0]])
        circumR=sqrt(sq(a0-10)+sq(a1-10)+sq(a2-10))
        edgeLength=1
        L=90
        L2=L
        faceData=[[0,2,14,38,46,22,20,44,36,12],[1,3,19,43,51,27,25,49,41,17],[2,0,16,40,48,24,26,50,42,18],[3,1,13,37,45,21,23,47,39,15],[4,5,21,45,53,29,28,52,44,20],[5,4,22,46,54,30,31,55,47,23],[6,7,27,51,59,35,34,58,50,26],[7,6,24,48,56,32,33,57,49,25],[8,10,32,56,40,16,12,36,52,28],[9,11,35,59,43,19,15,39,55,31],[10,8,29,53,37,13,17,41,57,33],[11,9,30,54,38,14,18,42,58,34],[0,12,16],[1,17,13],[2,18,14],[3,15,19],[4,20,22],[5,23,21],[6,26,24],[7,25,27],[8,28,29],[9,31,30],[10,33,32],[11,34,35],[36,44,52],[37,53,45],[38,54,46],[39,47,55],[40,56,48],[41,49,57],[42,50,58],[43,59,51]]
        JL=vertexData.length
      break
      case 45:
        var a0 = 5*(7+sqrt(5))/44+10
        var a1 = 5*(3+2*sqrt(5))/22+10
        var a2 = (5+sqrt(5))/4+10
        var a3 = 5*(13+5*sqrt(5))/44+10
        var a4 = (5+3*sqrt(5))/4+10
        vertexData = conv([[a2,0,a4,0],[a4,a2,0,0],[0,a4,a2,0],[0,a0,a3,0],[a3,0,a0,0],[a0,a3,0,0],[a1,a1,a1,0]])
        circumR=(a1-10)*sqrt(3)
        L=90
        L2=L
        faceData=[[12,0,8],[12,8,2],[12,2,0],[13,1,3],[13,3,9],[13,9,1],[14,0,2],[14,2,10],[14,10,0],[15,1,11],[15,11,3],[15,3,1],[16,0,5],[16,5,4],[16,4,0],[17,1,4],[17,4,5],[17,5,1],[18,2,6],[18,6,7],[18,7,2],[19,3,7],[19,7,6],[19,6,3],[20,4,9],[20,9,8],[20,8,4],[21,5,10],[21,10,11],[21,11,5],[22,6,8],[22,8,9],[22,9,6],[23,7,11],[23,11,10],[23,10,7],[24,0,4],[24,4,8],[24,8,0],[25,1,9],[25,9,4],[25,4,1],[26,0,10],[26,10,5],[26,5,0],[27,1,5],[27,5,11],[27,11,1],[28,2,8],[28,8,6],[28,6,2],[29,3,6],[29,6,9],[29,9,3],[30,2,7],[30,7,10],[30,10,2],[31,3,11],[31,11,7],[31,7,3]]
        edgesData=[[0,12],[0,14],[0,16],[0,24],[0,26],[1,13],[1,15],[1,17],[1,25],[1,27],[2,12],[2,14],[2,18],[2,28],[2,30],[3,13],[3,15],[3,19],[3,29],[3,31],[4,16],[4,17],[4,20],[4,24],[4,25],[5,16],[5,17],[5,21],[5,26],[5,27],[6,18],[6,19],[6,22],[6,28],[6,29],[7,18],[7,19],[7,23],[7,30],[7,31],[8,12],[8,20],[8,22],[8,24],[8,28],[9,13],[9,20],[9,22],[9,25],[9,29],[10,14],[10,21],[10,23],[10,26],[10,30],[11,15],[11,21],[11,23],[11,27],[11,31]]
        edgesData.push([0,2],[0,4],[0,5],[0,8],[0,10],[1,3],[1,4],[1,5],[1,9],[1,11],[2,6],[2,7],[2,8],[2,10],[3,6],[3,7],[3,9],[3,11],[4,5],[4,8],[4,9],[5,10],[5,11],[6,7],[6,8],[6,9],[7,10],[7,11],[8,9],[10,11])
        JL=vertexData.length
      break
      case 46:
        var a0 = 10+phi/2
        var a1 = 10+phi
        var a2 = 10+(5+sqrt(5))/4
        var a3 = 10+(2+sqrt(5))/2
        var a4 = 10+3*(1+sqrt(5))/4
        vertexData = conv([[10.5,0,a4,0],[a4,10.5,0,0],[0,a4,10.5,0],[11,a0,a3,0],[a3,11,a0,0],[a0,a3,11,0],[10.5,a1,a2,0],[a2,10.5,a1,0],[a1,a2,10.5,0]])
        circumR=sqrt(sq(a0-10)+1+sq(a3-10))
        edgeLength=1
        L=90
        L2=L
        faceData=[[0,2,18,42,38,14],[1,3,17,41,37,13],[2,0,12,36,40,16],[3,1,15,39,43,19],[4,5,23,47,45,21],[5,4,20,44,46,22],[6,7,26,50,48,24],[7,6,25,49,51,27],[8,9,33,57,56,32],[9,8,28,52,53,29],[10,11,31,55,54,30],[11,10,34,58,59,35],[12,44,20,52,28,36],[13,37,29,53,21,45],[14,38,30,54,22,46],[15,47,23,55,31,39],[16,40,32,56,24,48],[17,49,25,57,33,41],[18,50,26,58,34,42],[19,43,35,59,27,51],[0,14,46,44,12],[1,13,45,47,15],[2,16,48,50,18],[3,19,51,49,17],[4,21,53,52,20],[5,22,54,55,23],[6,24,56,57,25],[7,27,59,58,26],[8,32,40,36,28],[9,29,37,41,33],[10,30,38,42,34],[11,35,43,39,31]]
        JL=vertexData.length
      break
      case 47:
        var a0 = 10+3*(sqrt(5)-1)/4
        var a1 = 10+9*(9+sqrt(5))/76
        var a2 = 10+9*(7+5*sqrt(5))/76
        var a3 = 10+3*(1+sqrt(5))/4
        vertexData = conv([[0,a0,a3],[a3,0,a0],[a0,a3,0],[a1,0,a2],[a2,a1,0],[0,a2,a1],[11.5,11.5,11.5]])
        circumR=1.5*sqrt(3)
        L=90
        L2=L
        faceData=[[12,0,2],[12,2,26],[12,26,4],[12,4,24],[12,24,0],[13,3,1],[13,1,25],[13,25,5],[13,5,27],[13,27,3],[14,2,0],[14,0,28],[14,28,6],[14,6,30],[14,30,2],[15,1,3],[15,3,31],[15,31,7],[15,7,29],[15,29,1],[16,4,5],[16,5,25],[16,25,8],[16,8,24],[16,24,4],[17,5,4],[17,4,26],[17,26,9],[17,9,27],[17,27,5],[18,7,6],[18,6,28],[18,28,10],[18,10,29],[18,29,7],[19,6,7],[19,7,31,],[19,31,11],[19,11,30],[19,30,6],[20,8,10],[20,10,28],[20,28,0],[20,0,24],[20,24,8],[21,10,8],[21,8,25],[21,25,1],[21,1,29],[21,29,10],[22,11,9],[22,9,26],[22,26,2],[22,2,30],[22,30,11],[23,9,11],[23,11,31],[23,31,3],[23,3,27],[23,27,9]]
        edgesData=[[0,2],[0,24],[0,28],[1,3],[1,25],[1,29],[2,26],[2,30],[3,27],[3,31],[4,5],[4,24],[4,26],[5,25],[5,27],[6,7],[6,28],[6,30],[7,29],[7,31],[8,10],[8,24],[8,25],[9,11],[9,26],[9,27],[10,28],[10,29],[11,30],[11,31]]
        edgesData.push([0,12],[0,14],[0,20],[1,13],[1,15],[1,21],[2,12],[2,14],[2,22],[3,13],[3,15],[3,23],[4,12],[4,16],[4,17],[5,13],[5,16],[5,17],[6,14],[6,18],[6,19],[7,15],[7,18],[7,19],[8,16],[8,20],[8,21],[9,17],[9,22],[9,23],[10,18],[10,20],[10,21],[11,19],[11,22],[11,23],[12,24],[12,26],[13,25],[13,27],[14,28],[14,30],[15,29],[15,31],[16,24],[16,25],[17,26],[17,27],[18,28],[18,29],[19,30],[19,31],[20,24],[20,28],[21,25],[21,29],[22,26],[22,30],[23,27],[23,31])
        JL=vertexData.length
      break
      case 48:
        var a0 = 10+phi/2
        var a1 = 10+(3+sqrt(5))/4
        var a2 = 10+phi
        var a3 = 10+(5+sqrt(5))/4
        var a4 = 10+(2+sqrt(5))/2
        vertexData = conv([[10.5,10.5,a4],[a4,10.5,10.5],[10.5,a4,10.5],[0,a1,a3],[a3,0,a1],[a1,a3,0],[a1,a0,a2],[a2,a1,a0],[a0,a2,a1]])
        circumR=sqrt(sq(0.5)*2+sq(a4-10))
        edgeLength=1
        L=120
        L2=L
        faceData=[[24,52,16,20,56],[25,57,21,17,53],[26,58,22,18,54],[27,55,19,23,59],[28,36,0,2,38],[29,39,3,1,37],[30,42,6,4,40],[31,41,5,7,43],[32,44,8,9,45],[33,47,11,10,46],[34,49,13,12,48],[35,50,14,15,51],[0,36,52,24],[1,25,53,37],[2,26,54,38],[3,39,55,27],[4,24,56,40],[5,41,57,25],[6,42,58,26],[7,27,59,43],[8,44,36,28],[9,29,37,45],[10,28,38,46],[11,47,39,29],[12,30,40,48],[13,49,41,31],[14,50,42,30],[15,31,43,51],[16,52,44,32],[17,32,45,53],[18,33,46,54],[19,55,47,33],[20,34,48,56],[21,57,49,34],[22,58,50,35],[23,35,51,59],[0,4,6,2],[1,3,7,5],[8,10,11,9],[12,13,15,14],[16,17,21,20],[18,22,23,19],[24,4,0],[25,1,5],[26,2,6],[27,7,3],[28,10,8],[29,9,11],[30,12,14],[31,15,13],[32,17,16],[33,18,19],[34,20,21],[35,23,22],[36,44,52],[37,53,45],[38,54,46],[39,47,55],[40,56,48],[41,49,57],[42,50,58],[43,59,51]]
        JL=vertexData.length
      break
      case 49:
        var a0 = 10+(5-sqrt(5))/4
        var a1 = 10+(15+sqrt(5))/22
        var a2 = 10+sqrt(5)/2
        var a3 = 10+(5+sqrt(5))/6
        var a4 = 10+(5+4*sqrt(5))/11
        var a5 = 10+(5+sqrt(5))/4
        var a6 = 10+(5+3*sqrt(5))/6
        var a7 = 10+(25+9*sqrt(5))/22
        var a8 = 10+sqrt(5)
        vertexData = conv([[0,0,a8],[a8,0,0],[0,a8,0],[0,a1,a7],[a7,0,a1],[a1,a7,0],[a3,0,a6],[a6,a3,0],[0,a6,a3],[a0,a2,a5],[a5,a0,a2],[a2,a5,a0],[a4,a4,a4]])
        circumR=sqrt(5)
        L=120
        L2=L
        faceData=[[18,0,8,32],[18,32,56,40],[18,40,10,38],[18,38,54,30],[18,30,6,0],[19,1,7,31],[19,31,55,39],[19,39,11,41],[19,41,57,33],[19,33,9,1],[20,0,6,34],[20,34,58,42],[20,42,12,44],[20,44,60,36],[20,36,8,0],[21,1,9,37],[21,37,61,45],[21,45,13,43],[21,43,59,35],[21,35,7,1],[22,2,11,39],[22,39,55,47],[22,47,14,46],[22,46,54,38],[22,38,10,2],[23,2,10,40],[23,40,56,48],[23,48,15,49],[23,49,57,41],[23,41,11,2],[24,3,12,42],[24,42,58,50],[24,50,16,51],[24,51,59,43],[24,43,13,3],[25,3,13,45],[25,45,61,53],[25,53,17,52],[25,52,60,44],[25,44,12,3],[26,4,16,50],[26,50,58,34],[26,34,6,30],[26,30,54,46],[26,46,14,4],[27,4,14,47],[27,47,55,31],[27,31,7,35],[27,35,59,51],[27,51,16,4],[28,5,15,48],[28,48,56,32],[28,32,8,36],[28,36,60,52],[28,52,17,5],[29,5,17,53],[29,53,61,37],[29,37,9,33],[29,33,57,49],[29,49,15,5]]
        edgesData=[[0,6],[0,8],[1,7],[1,9],[2,10],[2,11],[3,12],[3,13],[4,14],[4,16],[5,15],[5,17],[6,30],[6,34],[7,31],[7,35],[8,32],[8,36],[9,33],[9,37],[10,38],[10,40],[11,39],[11,41],[12,42],[12,44],[13,43],[13,45],[14,46],[14,47],[15,48],[15,49],[16,50],[16,51],[17,52],[17,53],[30,54],[31,55],[32,56],[33,57],[34,58],[35,59],[36,60],[37,61],[38,54],[39,55],[40,56],[41,57],[42,58],[43,59],[44,60],[45,61],[46,54],[47,55],[48,56],[49,57],[50,58],[51,59],[52,60],[53,61]]
        edgesData.push([0,18],[0,20],[1,19],[1,21],[2,22],[2,23],[3,24],[3,25],[4,26],[4,27],[5,28],[5,29],[18,30],[18,32],[18,38],[18,40],[19,31],[19,33],[19,39],[19,41],[20,34],[20,36],[20,42],[20,44],[21,35],[21,37],[21,43],[21,45],[22,38],[22,39],[22,46],[22,47],[23,40],[23,41],[23,48],[23,49],[24,42],[24,43],[24,50],[24,51],[25,44],[25,45],[25,52],[25,53],[26,30],[26,34],[26,46],[26,50],[27,31],[27,35],[27,47],[27,51],[28,32],[28,36],[28,48],[28,52],[29,33],[29,37],[29,49],[29,53])
        JL=vertexData.length
      break
      case 50:
        var a0 = 10+(3+sqrt(5)) / 4
        var a1 = 10+phi
        var a2 = 10+(5+sqrt(5))/4
        var a3 = 10+phi2-0.5
        var a4 = 10+3*phi/2
        var a5 = 10+phi2
        var a6 = 10+(5+3*sqrt(5))/4
        var a7 = 10+phi2+0.5
        var a8 = 10+(7+3*sqrt(5))/4
        var a9 = 10+(3+2*sqrt(5))/2
        vertexData = conv([[10.5,10.5,a9],[a9,10.5,10.5],[10.5,a9,10.5],[11,a0,a8],[a8,11,a0],[a0,a8,11],[10.5,a3,a7],[a7,10.5,a3],[a3,a7,10.5],[a2,a1,a6],[a6,a2,a1],[a1,a6,a2],[a0,a4,a5],[a5,a0,a4],[a4,a5,a0]])
        circumR=sqrt(sq(0.5)*2+sq(a9-10))
        edgeLength=1
        L=180
        L2=L
        faceData=[[0,2,26,74,106,58,56,104,72,24],[1,25,73,105,57,59,107,75,27,3],[4,28,76,108,60,62,110,78,30,6],[5,7,31,79,111,63,61,109,77,29],[8,9,33,81,113,65,64,112,80,32],[10,34,82,114,66,67,115,83,35,11],[12,36,84,116,68,69,117,85,37,13],[14,15,39,87,119,71,70,118,86,38],[16,20,44,92,100,52,48,96,88,40],[17,41,89,97,49,53,101,93,45,21],[18,42,90,98,50,54,102,94,46,22],[19,23,47,95,103,55,51,99,91,43],[0,24,48,52,28,4],[1,5,29,53,49,25],[2,6,30,54,50,26],[3,27,51,55,31,7],[8,32,56,58,34,10],[9,11,35,59,57,33],[12,14,38,62,60,36],[13,37,61,63,39,15],[16,40,64,65,41,17],[18,19,43,67,66,42],[20,21,45,69,68,44],[22,46,70,71,47,23],[72,104,80,112,88,96],[73,97,89,113,81,105],[74,98,90,114,82,106],[75,107,83,115,91,99],[76,100,92,116,84,108],[77,109,85,117,93,101],[78,110,86,118,94,102],[79,103,95,119,87,111],[0,4,6,2],[1,3,7,5],[8,10,11,9],[12,13,15,14],[16,17,21,20],[18,22,23,19],[24,72,96,48],[25,49,97,73],[26,50,98,74],[27,75,99,51],[28,52,100,76],[29,77,101,53],[30,78,102,54],[31,55,103,79],[32,80,104,56],[33,57,105,81],[34,58,106,82],[35,83,107,59],[36,60,108,84],[37,85,109,61],[38,86,110,62],[39,63,111,87],[40,88,112,64],[41,65,113,89],[42,66,114,90],[43,91,115,67],[44,68,116,92],[45,93,117,69],[46,94,118,70],[47,71,119,95]]
        JL=vertexData.length
        s=0.5
      break
      case 51:
        var a0 = 10+3*(15+sqrt(5))/44
        var a1 = 10+(5-sqrt(5))/2
        var a2 = 10+3*(5+4*sqrt(5))/22
        var a3 = 10+3*(5+sqrt(5))/10
        var a4 = 10+sqrt(5)
        var a5 = 10+(75+27*sqrt(5))/44
        var a6 = 10+(15+9*sqrt(5))/10
        var a7 = 11+phi2
        var a8 = 10+3*(5+4*sqrt(5))/11
        vertexData = conv([[0,0,a8],[a8,0,0],[0,a8,0],[0,a1,a7],[a7,0,a1],[a1,a7,0],[a3,0,a6],[a6,a3,0],[0,a6,a3],[a0,a2,a5],[a5,a0,a2],[a2,a5,a0],[a4,a4,a4]])
        circumR=a8-10
        L=180
        L2=L
        faceData=[[0,6,18],[0,6,20],[0,8,18],[0,8,20],[1,7,19],[1,7,21],[1,9,19],[1,9,21],[2,10,22],[2,10,23],[2,11,22],[2,11,23],[3,12,24],[3,12,25],[3,13,24],[3,13,25],[4,14,26],[4,14,27],[4,16,26],[4,16,27],[5,15,28],[5,15,29],[5,17,28],[5,17,29],[6,18,30],[6,20,34],[6,26,30],[6,26,34],[7,19,31],[7,21,35],[7,27,31],[7,27,35],[8,18,32],[8,20,36],[8,28,32],[8,28,36],[9,19,33],[9,21,37],[9,29,33],[9,29,37],[10,18,38],[10,18,40],[10,22,38],[10,23,40],[11,19,39],[11,19,41],[11,22,39],[11,23,41],[12,20,42],[12,20,44],[12,24,42],[12,25,44],[13,21,43],[13,21,45],[13,24,43],[13,25,45],[14,22,46],[14,22,47],[14,26,46],[14,27,47],[15,23,48],[15,23,49],[15,28,48],[15,29,49],[16,24,50],[16,24,51],[16,26,50],[16,27,51],[17,25,52],[17,25,53],[17,28,52],[17,29,53],[18,30,54],[18,32,56],[18,38,54],[18,40,56],[19,31,55],[19,39,55],[19,41,57],[19,57,33],[20,34,58],[20,36,60],[20,42,58],[20,60,44],[21,35,59],[21,37,61],[21,45,61],[21,59,43],[22,38,54],[22,39,55],[22,46,54],[22,47,55],[23,40,56],[23,41,57],[23,48,56],[23,49,57],[24,42,58],[24,43,59],[24,50,58],[24,51,59],[25,44,60],[25,45,61],[25,52,60],[25,53,61],[26,30,54],[26,34,58],[26,46,54],[26,50,58],[27,31,55],[27,35,59],[27,47,55],[27,51,59],[28,32,56],[28,36,60],[28,48,56],[28,52,60],[29,33,57],[29,37,61],[29,49,57],[29,53,61]]
        edgesData=[[0,6],[0,8],[0,18],[0,20],[1,7],[1,9],[1,19],[1,21],[2,10],[2,11],[2,22],[2,23],[3,12],[3,13],[3,24],[3,25],[4,14],[4,16],[4,26],[4,27],[5,15],[5,17],[5,28],[5,29],[6,18],[6,20],[6,26],[6,30],[6,34],[7,19],[7,21],[7,27],[7,31],[7,35],[8,18],[8,20],[8,28],[8,32],[8,36],[9,19],[9,21],[9,29],[9,33],[9,37],[10,18],[10,22],[10,23],[10,38],[10,40],[11,19],[11,22],[11,23],[11,39],[11,41],[12,20],[12,24],[12,25],[12,42],[12,44],[13,21],[13,24],[13,25],[13,43],[13,45],[14,22],[14,26],[14,27],[14,46],[14,47],[15,23],[15,28],[15,29],[15,48],[15,49],[16,24],[16,26],[16,27],[16,50],[16,51],[17,25],[17,28],[17,29],[17,52],[17,53],[18,30],[18,32],[18,38],[18,40],[18,54],[18,56],[19,31],[19,33],[19,39],[19,41],[19,55],[19,57],[20,34],[20,36],[20,42],[20,44],[20,58],[20,60],[21,35],[21,37],[21,43],[21,45],[21,59],[21,61],[22,38],[22,39],[22,46],[22,47],[22,54],[22,55],[23,40],[23,41],[23,48],[23,49],[23,56],[23,57],[24,42],[24,43],[24,50],[24,51],[24,58],[24,59],[25,44],[25,45],[25,52],[25,53],[25,60],[25,61],[26,30],[26,34],[26,46],[26,50],[26,54],[26,58],[27,31],[27,35],[27,47],[27,51],[27,55],[27,59],[28,32],[28,36],[28,48],[28,52],[28,56],[28,60],[29,33],[29,37],[29,49],[29,53],[29,57],[29,61],[30,54],[31,55],[32,56],[33,57],[34,58],[35,59],[36,60],[37,61],[38,54],[39,55],[40,56],[41,57],[42,58],[43,59],[44,60],[45,61],[46,54],[47,55],[48,56],[49,57],[50,58],[51,59],[52,60],[53,61]]
        JL=vertexData.length
      break
      case 52:
        vertexData = [[2.0970538352520873,0.37482165811456214,-0.33092102472984414],[2.0970538352520873,-0.37482165811456214,0.33092102472984414],[-2.0970538352520873,0.37482165811456214,0.33092102472984414],[-2.0970538352520873,-0.37482165811456214,-0.33092102472984414],[0.37482165811456214,0.33092102472984414,-2.0970538352520873],[0.37482165811456214,-0.33092102472984414,2.0970538352520873],[-0.37482165811456214,0.33092102472984414,2.0970538352520873],[-0.37482165811456214,-0.33092102472984414,-2.0970538352520873],[0.33092102472984414,2.0970538352520873,-0.37482165811456214],[0.33092102472984414,-2.0970538352520873,0.37482165811456214],[-0.33092102472984414,2.0970538352520873,0.37482165811456214],[-0.33092102472984414,-2.0970538352520873,-0.37482165811456214],[-1.1031568350717535,0.8475500467890607,1.6469179406903742],[1.1031568350717535,-0.8475500467890607,1.6469179406903742],[1.1031568350717535,0.8475500467890607,-1.6469179406903742],[-1.1031568350717535,-0.8475500467890607,-1.6469179406903742],[-0.8475500467890607,1.6469179406903742,1.1031568350717535],[0.8475500467890607,-1.6469179406903742,1.1031568350717535],[0.8475500467890607,1.6469179406903742,-1.1031568350717535],[-0.8475500467890607,-1.6469179406903742,-1.1031568350717535],[-1.6469179406903742,1.1031568350717535,0.8475500467890607],[1.6469179406903742,-1.1031568350717535,0.8475500467890607],[1.6469179406903742,1.1031568350717535,-0.8475500467890607],[-1.6469179406903742,-1.1031568350717535,-0.8475500467890607],[-0.5677153694669211,-0.6430296059140724,1.9778389654202184],[0.5677153694669211,0.6430296059140724,1.9778389654202184],[0.5677153694669211,-0.6430296059140724,-1.9778389654202184],[-0.5677153694669211,0.6430296059140724,-1.9778389654202184],[0.6430296059140724,1.9778389654202184,0.5677153694669211],[-0.6430296059140724,-1.9778389654202184,0.5677153694669211],[-0.6430296059140724,1.9778389654202184,-0.5677153694669211],[0.6430296059140724,-1.9778389654202184,-0.5677153694669211],[-1.9778389654202184,0.5677153694669211,-0.6430296059140724],[1.9778389654202184,-0.5677153694669211,-0.6430296059140724],[1.9778389654202184,0.5677153694669211,0.6430296059140724],[-1.9778389654202184,-0.5677153694669211,0.6430296059140724],[-1.746186440985826,-0.19289371135235897,-1.249503788463027],[1.746186440985826,0.19289371135235897,-1.249503788463027],[1.746186440985826,-0.19289371135235897,1.249503788463027],[-1.746186440985826,0.19289371135235897,1.249503788463027],[-0.19289371135235897,1.249503788463027,1.746186440985826],[0.19289371135235897,-1.249503788463027,1.746186440985826],[0.19289371135235897,1.249503788463027,-1.746186440985826],[-0.19289371135235897,-1.249503788463027,-1.746186440985826],[-1.249503788463027,1.746186440985826,0.19289371135235897],[1.249503788463027,-1.746186440985826,0.19289371135235897],[1.249503788463027,1.746186440985826,-0.19289371135235897],[-1.249503788463027,-1.746186440985826,-0.19289371135235897],[-1.415265416255982,0.7283351769571913,-1.4540242293380152],[0.7283351769571913,-1.4540242293380152,-1.415265416255982],[-1.4540242293380152,1.415265416255982,-0.7283351769571913],[1.4540242293380152,-1.415265416255982,-0.7283351769571913],[1.4540242293380152,1.415265416255982,0.7283351769571913],[-1.4540242293380152,-1.415265416255982,0.7283351769571913],[-0.7283351769571913,1.4540242293380152,-1.415265416255982],[-0.7283351769571913,-1.4540242293380152,1.415265416255982],[0.7283351769571913,1.4540242293380152,1.415265416255982],[1.415265416255982,-0.7283351769571913,-1.4540242293380152],[1.415265416255982,0.7283351769571913,1.4540242293380152],[-1.415265416255982,-0.7283351769571913,1.4540242293380152]]
        circumR=2.1558373751156403
        edgeLength=1
        L=120+30
        L2=L
        faceData=[[23,19,15],[16,12,20],[17,21,13],[22,14,18],[6,5,24],[25,6,5],[32,2,3],[2,35,3],[10,30,8],[28,10,8],[1,34,0],[33,1,0],[29,11,9],[9,31,11],[27,7,4],[26,7,4],[38,13,21],[20,12,39],[35,2,39],[20,2,39],[32,3,36],[36,3,23],[15,36,23],[37,14,22],[46,8,28],[38,1,21],[38,1,34],[24,41,5],[13,41,5],[41,17,13],[17,45,21],[0,37,33],[0,37,22],[10,30,44],[16,44,10],[20,44,16],[18,46,22],[8,18,46],[18,42,14],[4,42,27],[14,42,4],[25,6,40],[31,9,45],[17,9,45],[47,23,19],[47,29,11],[11,19,47],[43,19,15],[7,15,43],[43,26,7],[40,16,12],[12,6,40],[44,50,32,2,20],[50,44,30],[32,48,36],[28,56,40,16,10],[25,40,56],[58,25,5,13,38],[58,38,34],[34,52,46,22,0],[58,52,34],[56,58,25],[58,56,52],[52,28,56],[28,46,52],[50,48,32],[48,27,7,15,36],[50,54,48],[30,54,50],[54,42,18,8,30],[27,54,42],[48,27,54],[59,35,39],[35,53,47,23,3],[59,53,35],[6,12,39,59,24],[24,55,59],[55,53,59],[55,24,41],[29,55,53],[47,29,53],[29,9,17,41,55],[45,51,33,1,21],[31,51,45],[19,11,31,49,43],[26,49,43],[49,51,31],[51,57,49],[33,57,51],[37,57,33],[57,26,49],[4,14,37,57,26]]
        JL=vertexData.length
        s=1
      break
      case 53:
        vertexData = [[-0.7534445497193619,-1.7634156520891127,-0.897365200635886],[1.1877239586602149,-0.5129877422889805,1.6759275429244318],[1.1800188666666591,1.0576630510113172,-1.4040947616464972],[-1.6142982756075108,1.2187403433667763,0.6255324193579502],[2.1033918379510785,0.22452840526534878,0.08892427180893615],[1.9586165943643754,0.7098955842144683,0.37742158210714327],[0.12725726700259304,-1.9456470189208148,0.8251309111932204],[0.6177757670876655,-1.9596630022546495,0.5105406683512161],[-0.5139145378599675,0.35896628994045543,2.022279111623696],[-0.21789993705451552,0.8517957007798871,1.926016992762918],[-0.19457190037759234,2.057016774922496,-0.4619540216492065],[-0.550461133712665,1.8482932462529669,-0.8737175578952296],[0.5915364498051374,-0.7658443969661858,-1.8831210112561538],[0.14027802510934484,-0.44491759375415596,-2.0651750931304576],[-2.034861319272954,-0.5837512975453357,0.03393506722907417],[-2.0271471130425005,-0.3506726919344815,-0.5002809211451532],[1.0877362137457094,1.4956675744694832,-1.0307211993714307],[1.376323477844865,-0.928835544034728,1.3136118038894502],[1.0830121934756132,-1.6733351052930712,0.7138711151348883],[1.0312820147844572,-1.3892686053832701,1.2202327249035327],[-0.3803333491950963,-2.0099629589163164,0.5458692170487086],[-0.3685495779572506,-2.0846386020463665,-0.03210704428426587],[-0.8335671427725749,-1.9161815994031057,-0.34057547099856267],[-1.6304925488179975,1.349349568968348,0.05768486648054398],[-0.4793055894440793,1.274413183011908,1.6213312264124475],[0.5666667259404236,1.756860564428329,-1.0367774755054677],[0.3803333491950958,2.0099629589163155,-0.5458692170487074],[2.047362897299393,0.2225620336154276,-0.4912729005367239],[1.8497438877829502,0.7060746266667857,-0.7499892839460645],[1.5721693338072107,0.6513164302598565,-1.2596222641556944],[0.7459858791701299,0.9057515231160774,-1.7622987832086376],[-1.0830121934756136,1.673335105293071,-0.7138711151348885],[-1.229399162767629,1.7170466430013078,-0.1513482051137977],[-0.2109061541044166,-0.13248148681938543,2.102509216307496],[0.37089118540153304,-0.10316166548361053,2.081916221708519],[0.6648046215880157,-0.5812134257672236,1.9242670094532406],[-1.1979312403861253,1.4632531618047437,0.9520654823184899],[-1.0218652604742116,1.180175982718085,1.4302285810660966],[-1.8309293892722875,0.7050505916690778,0.7957254485895622],[-2.047362897299392,-0.2225620336154282,0.49127290053672334],[-2.051439570127117,0.35117268109628796,0.38839566554648014],[1.7837254706981942,0.6587411287301512,0.9311075799008397],[0.2109061541044166,0.1324814868193857,-2.1025092163074963],[0.7287775875999499,0.3561293535365565,-1.9556668597203883],[-0.21285926037201763,-1.7877912591535947,-1.1140337085630918],[0.4793055894440792,-1.2744131830119076,-1.6213312264124478],[-0.07780351252727097,-1.4331436707710328,-1.5564779430542264],[-1.1282424982512822,-1.3857781792088442,-1.1354582590369773],[-1.5618562484243976,-1.1823748684381368,-0.8032262972478728],[-1.7837254706981955,-0.6587411287301514,-0.9311075799008401],[1.387002553716358,0.02941115727991166,1.5993550746031107],[1.7635519307685603,0.12512756067506398,1.1648199156474606],[0.13181263255474124,-1.421483775864102,1.7001212924761744],[-0.4657156112977129,-0.6381862735166466,1.9642823128398565],[-0.8564647926920396,-1.771075529420104,0.7825198290236794],[0.800855350751812,0.8051882073443435,1.9075391902140633],[1.4262027932340333,1.0663030339957775,1.1452166550962346],[1.6216406717533907,1.507492898060251,-0.16170899260662913],[0.7256622780838655,1.9874838110364543,-0.07681219877795967],[-0.5391068137849095,2.09533805256815,0.497318201021581],[0.47645444264595926,2.0133363904130173,0.44949471406078456],[1.2638959534416472,1.5018500136512045,0.7934679011886195],[0.7534445497193613,1.7634156520891118,0.8973652006358855],[0.4343185053082671,1.5745646337013282,1.3471048233492295],[-0.14365573240897875,1.6463702962233038,1.3234068282680902],[-0.7979381469940953,-1.4814526094777105,1.2849788458532185],[-1.6216406717533918,-1.5074928980602504,0.16170899260663021],[-1.1800188666666587,-1.057663051011318,1.4040947616464985],[-1.0090478554723676,-0.6236946031359856,1.7536833300891652],[-1.4598711794022838,0.2851309158272806,1.6479925984866601],[-1.8230077973335765,-0.40980274169492154,0.9956314773083847],[-1.5989054242565885,-0.9475883152317187,1.0139800707933766],[1.476843039709502,-1.4808197210434597,0.3296746042347503],[0.5391068137849095,-2.09533805256815,-0.497318201021581],[1.3830486718761261,-1.585576490926197,-0.2360112656014957],[2.036291693304555,-0.6660225242884286,0.5816641996857592],[1.926195998399789,-0.7680015989772013,-0.427223916189234],[1.6142982756075115,-1.2187403433667765,-0.6255324193579496],[1.9561729609996075,-0.2882216737881647,-0.7568971979468053],[1.350108508200497,-1.1640752325387749,-1.1422406155978657],[0.869687992659839,-1.479353911984054,-1.2400534477867227],[1.4598711794022863,-0.2851309158272808,-1.6479925984866604],[-0.13181263255474004,1.4214837758641026,-1.7001212924761748],[-0.2603166489531506,0.47116988927740094,-2.047635693321223],[-0.8008553507518116,-0.8051882073443435,-1.9075391902140633],[-1.5593679569000691,-0.3682786185126913,-1.3839509344578131],[-0.7753791580363951,0.2132052019734322,-1.9585475378405308],[-1.1877239586602153,0.5129877422889805,-1.6759275429244327],[-1.0615649675279932,1.053692709990892,-1.4984622943125099],[-1.3460405251013285,1.2644114394271044,-1.0353822344804708],[-1.5911865275848478,0.21373990055771422,-1.3802240557927599],[-2.0362916933045567,0.6660225242884283,-0.581664199685759]]
        circumR=sqrt(sq(2.0362916933045567)+sq(0.6660225242884283)+sq(0.581664199685759))
        edgesData=[[11,10],[13,12],[15,14],[16,2],[17,1],[18,7],[19,17],[19,18],[20,6],[21,20],[22,0],[22,21],[23,3],[24,9],[25,16],[26,10],[26,25],[27,4],[28,27],[29,2],[29,28],[30,2],[31,11],[32,23],[32,31],[33,8],[34,33],[35,1],[35,34],[36,3],[37,24],[37,36],[38,3],[39,14],[40,38],[40,39],[41,5],[42,13],[43,30],[43,42],[44,0],[45,12],[46,44],[46,45],[47,0],[48,47],[49,15],[49,48],[5,4],[50,1],[51,41],[51,50],[52,19],[52,35],[52,6],[53,33],[53,52],[54,20],[55,34],[55,50],[55,9],[56,41],[56,55],[57,16],[57,28],[57,5],[58,26],[58,57],[59,10],[59,32],[59,36],[60,58],[60,59],[61,56],[61,57],[62,60],[62,61],[63,55],[63,62],[64,24],[64,59],[64,63],[65,52],[65,54],[66,14],[66,22],[66,48],[66,54],[67,65],[68,53],[68,67],[69,37],[69,38],[69,68],[69,8],[7,6],[70,39],[70,69],[71,66],[71,67],[71,70],[72,18],[73,21],[73,44],[73,7],[74,72],[74,73],[75,17],[75,4],[75,51],[75,72],[76,75],[77,74],[77,76],[78,27],[78,76],[79,77],[80,45],[80,73],[80,79],[81,12],[81,29],[81,43],[81,78],[81,79],[82,11],[82,25],[82,30],[83,42],[83,82],[84,13],[84,46],[84,47],[85,49],[85,84],[86,83],[86,84],[87,86],[88,82],[88,87],[89,31],[89,88],[9,8],[90,85],[90,87],[91,15],[91,23],[91,40],[91,89],[91,90]]
        L=120+30
        L2=L
        faceData=[[10,11,31,32,59],[10,11,82,25,26],[6,7,18,19,52],[6,7,73,21,20],[14,15,91,40,39],[4,5,57,28,27],[4,5,41,51,75],[14,15,49,48,66],[8,9,24,37,69],[12,13,42,43,81],[8,9,55,34,33],[12,13,84,46,45],[1,17,75,51,50],[2,16,57,28,29],[3,23,91,40,38],[0,22,66,48,47],[1,35,34,55,50],[2,29,81,43,30],[3,36,37,69,38],[0,44,46,84,47],[1,17,19,52,35],[2,16,25,82,30],[3,23,32,59,36],[0,22,21,73,44],[4,27,78,76,75],[5,41,56,61,57],[15,49,85,90,91],[14,39,70,71,66],[9,24,64,63,55],[12,45,80,79,81],[8,33,53,68,69],[13,42,83,86,84],[6,20,54,65,52],[11,31,89,88,82],[10,26,58,60,59],[7,18,72,74,73],[20,21,22,66,54],[23,32,31,89,91],[16,25,26,58,57],[17,19,18,72,75],[41,51,50,55,56],[27,28,29,81,78],[38,40,39,70,69],[47,48,49,85,84],[33,34,35,52,53],[30,43,42,83,82],[24,37,36,59,64],[44,46,45,80,73],[54,65,67,71,66],[84,85,90,87,86],[52,53,68,67,65],[82,83,86,87,88],[59,60,62,63,64],[73,74,77,79,80],[67,68,69,70,71],[76,77,79,81,78],[55,56,61,62,63],[87,88,89,91,90],[57,58,60,62,61],[72,74,77,76,75]]
        JL=vertexData.length
        s=0.5
      break
      case 54:
        var a0 = 10+(sqrt(2)-1)/2
        vertexData = doWeird(conv([[9.5,9.5,a0],[a0,9.5,9.5],[9.5,a0,9.5]]),1,sqrt(2))
        var bb = doWeird(conv([[9.5,9.5,a0],[a0,9.5,9.5],[9.5,a0,9.5]]),1,sqrt(2)+1)
        for(var i = 24; i<bb.length; i++) {
          vertexData[vertexData.length]=bb[i]
        }
        circumR=sqrt(sq(a0-10)+0.5)
        edgeLength=1
        L=24*4
        L2=24*2
        intData=[[25,65],[26,66],[29,69],[30,70],[36,42],[37,43],[38,39],[40,41],[52,58],[53,59],[54,55],[56,57]]
        intData.push([24,32],[27,33],[28,34],[31,35],[44,46],[45,47],[48,50],[49,51],[60,64],[61,67],[62,68],[63,71])
        intData.push([72,90],[73,91],[74,88],[75,89],[76,94],[77,95],[78,92],[79,93],[80,82],[81,83],[84,86],[85,87],[96,114],[97,115],[98,112],[99,113],[100,118],[101,119],[102,116],[103,117],[104,106],[105,107],[108,110],[109,111])
        faceData=[[0,2,18,19,3,1,17,16],[0,8,9,1,5,13,12,4],[11,10,2,6,14,15,7,3],[11,19,23,15,13,21,17,9],[20,12,14,22,18,10,8,16],[20,21,5,7,23,22,6,4],[0,4,6,2],[1,3,7,5],[8,10,11,9],[12,13,15,14],[16,17,21,20],[18,22,23,19],[0,16,8],[1,9,17],[2,10,18],[3,19,11],[4,12,20],[5,21,13],[6,22,14],[7,15,23]]
        JL=24
        s=1
      break
      case 55:
        var a0 = 10+(4-sqrt(2))/7
        var a1 = 12-sqrt(2)
        var a2 = 10-sqrt(2)
        vertexData=conv([[0,0,a1],[a1,0,0],[0,a1,0],[0,0,a2],[a2,0,0],[0,a2,0],[a0,a0,a0]])
        var drdist = dist(vertexData[0][0],vertexData[0][1],vertexData[0][2],vertexData[8][0],vertexData[8][1],vertexData[8][2])
        var drdist2 = dist(vertexData[0][0],vertexData[0][1],vertexData[0][2],vertexData[12][0],vertexData[12][1],vertexData[12][2])
        var bb = doWeird(vertexData,drdist2,2)
        var cc = doWeird2(vertexData,drdist,sqrt(2))
        vertexData = doWeird2(vertexData,drdist2,2)
        for(var i = 20; i<bb.length; i++) {
          vertexData[vertexData.length]=bb[i]
        }
        for(var i = 20; i<cc.length; i++) {
          vertexData[vertexData.length]=cc[i]
        }
        circumR=sqrt(2)
        //edgeLength=1
        intersectionD=dist(vertexData[0][0],vertexData[0][1],vertexData[0][2],vertexData[79][0],vertexData[79][1],vertexData[79][2])
        //intData=[[0,1]]
        L=102
        L2=24*2
        faceData=[[12,0,8,4],[12,4,6,2],[12,2,10,0],[13,1,10,2],[13,2,7,4],[13,4,8,1],[14,0,11,2],[14,2,6,5],[14,5,8,0],[15,1,8,5],[15,5,7,2],[15,2,11,1],[16,0,10,3],[16,3,6,4],[16,4,9,0],[17,1,9,4],[17,4,7,3],[17,3,10,1],[18,0,9,5],[18,5,6,3],[18,3,11,0],[19,1,11,3],[19,3,7,5],[19,5,9,1]]
        edgesData=[[0,12],[0,14],[0,16],[0,18],[1,13],[1,15],[1,17],[1,19],[2,12],[2,13],[2,14],[2,15],[3,16],[3,17],[3,18],[3,19],[4,12],[4,13],[4,16],[4,17],[5,14],[5,15],[5,18],[5,19]]
        edgesData.push([0,8],[0,9],[0,10],[0,11],[1,8],[1,9],[1,10],[1,11],[2,6],[2,7],[2,10],[2,11],[3,6],[3,7],[3,10],[3,11],[4,6],[4,7],[4,8],[4,9],[5,6],[5,7],[5,8],[5,9])
        intData=[[0,2],[0,3],[0,4],[0,5],[0,68],[0,71],[0,76],[0,79],[1,2],[1,3],[1,4],[1,5],[1,68],[1,71],[1,76],[1,79],[2,4],[2,5],[2,72],[2,73],[2,74],[2,75],[3,4],[3,5],[3,72],[3,73],[3,74],[3,75],[4,69],[4,70],[4,77],[4,78],[5,10],[5,69],[5,70],[5,77],[5,78]]
        intData.push([0,21],[0,23],[0,25],[0,31],[0,33],[0,39],[0,41],[0,43],[0,45],[0,47],[0,49],[0,55],[0,57],[0,63],[0,65],[0,67],[1,20],[1,22],[1,24],[1,30],[1,32],[1,38],[1,40],[1,42],[1,44],[1,46],[1,48],[1,54],[1,56],[1,62],[1,64],[1,66],[2,32],[2,33],[2,34],[2,35],[2,36],[2,37],[2,38],[2,39],[2,56],[2,57],[2,58],[2,59],[2,60],[2,61],[2,62],[2,63],[3,24],[3,25],[3,26],[3,27],[3,28],[3,29],[3,30],[3,31],[3,48],[3,49],[3,50],[3,51],[3,52],[3,53],[3,54],[3,55],[4,22],[4,23],[4,28],[4,29],[4,36],[4,37],[4,42],[4,43],[4,46],[4,47],[4,52],[4,53],[4,60],[4,61],[4,66],[4,67],[5,20],[5,21],[5,26],[5,27],[5,34],[5,35],[5,40],[5,41],[5,44],[5,45],[5,50],[5,51],[5,58],[5,59],[5,64],[5,65])
        JL=8+6+6
        s=1
      break
      case 56:
        var a0 = 10+(sqrt(2)-1)/2
        vertexData = doWeird(conv([[9.5,9.5,a0],[a0,9.5,9.5],[9.5,a0,9.5]]),1,sqrt(2))
        var bb = doWeird(conv([[9.5,9.5,a0],[a0,9.5,9.5],[9.5,a0,9.5]]),1,sqrt(2)+1)
        for(var i = 24; i<bb.length; i++) {
          vertexData[vertexData.length]=bb[i]
        }
        circumR=sqrt(sq(a0-10)+0.5)
        edgeLength=1
        intData=[[24,64],[25,55],[25,58],[26,54],[26,59],[27,67],[28,68],[29,52],[29,57],[30,53],[30,56],[31,71],[32,35],[33,34],[36,41],[36,69],[37,40],[37,70],[38,43],[38,66],[39,42],[39,65],[40,70],[41,69],[42,65],[43,66],[44,50],[45,51],[46,47],[48,49],[52,57],[53,56],[54,59],[55,58],[60,63],[61,62]]
        intData.push([25,65],[26,66],[29,69],[30,70],[36,42],[37,43],[38,39],[40,41],[52,58],[53,59],[54,55],[56,57])
        intData.push([24,32],[27,33],[28,34],[31,35],[44,46],[45,47],[48,50],[49,51],[60,64],[61,67],[62,68],[63,71])
        intData.push([72,90],[73,91],[74,88],[75,89],[76,94],[77,95],[78,92],[79,93],[80,82],[81,83],[84,86],[85,87],[96,114],[97,115],[98,112],[99,113],[100,118],[101,119],[102,116],[103,117],[104,106],[105,107],[108,110],[109,111])
        intData.push([0,56],[1,57],[2,54],[3,55],[4,40],[5,41],[6,38],[7,39],[8,30],[9,29],[10,26],[11,25],[12,70],[13,69],[14,66],[15,65],[16,53],[17,52],[18,59],[19,58],[20,37],[21,36],[22,43],[23,42])
        intData.push([24,88],[24,89],[27,90],[27,92],[28,91],[28,93],[31,94],[31,95],[32,74],[32,75],[33,72],[33,78],[34,73],[34,79],[35,76],[35,77],[44,82],[44,106],[45,83],[45,107],[46,80],[46,104],[47,81],[47,105],[48,86],[48,110],[49,87],[49,111],[50,84],[50,108],[51,85],[51,109],[60,114],[60,115],[61,112],[61,118],[62,113],[62,119],[63,116],[63,117],[64,96],[64,97],[67,98],[67,100],[68,99],[68,101],[71,102],[71,103])
        intData.push([72,92],[73,93],[74,89],[75,88],[76,95],[77,94],[78,90],[79,91],[80,106],[81,107],[82,104],[83,105],[84,110],[85,111],[86,108],[87,109],[96,115],[97,114],[98,118],[99,119],[100,112],[101,113],[102,117],[103,116])
        intData.push([72,112],[73,113],[74,114],[75,115],[76,116],[77,117],[78,118],[79,119],[80,86],[81,87],[82,83],[84,85],[88,94],[89,95],[90,91],[92,93],[96,102],[97,103],[98,99],[100,101],[104,110],[105,111],[106,107],[108,109])
        L=252
        L2=24*2
        faceData=[[0,4,6,2],[1,3,7,5],[8,10,11,9],[12,13,15,14],[16,17,21,20],[18,22,23,19],[0,2,10,8],[0,16,20,4],[7,3,19,23],[7,15,13,5],[11,3,1,9],[11,10,18,19],[12,14,6,4],[12,20,21,13],[17,1,5,21],[17,16,8,9],[22,14,15,23],[22,18,2,6],[0,8,16],[1,17,9],[2,18,10],[3,11,19],[4,20,12],[5,13,21],[6,14,22],[7,23,15]]
        JL=24
        s=1
      break
      case 57:
        var a0 = 10-(4-sqrt(2))/7
        var a1 = 10+sqrt(2)
        vertexData=conv([[0,0,a1],[a1,0,0],[0,a1,0],[9,0,9],[9,9,0],[0,9,9],[a0,a0,a0]])
        var drdist = dist(vertexData[0][0],vertexData[0][1],vertexData[0][2],vertexData[6][0],vertexData[6][1],vertexData[6][2])
        var drdist2 = dist(vertexData[6][0],vertexData[6][1],vertexData[6][2],vertexData[18][0],vertexData[18][1],vertexData[18][2])
        vertexData=doWeird(vertexData,drdist,sqrt(2))
        vertexData=doWeird(vertexData,drdist,1+sqrt(2)/2)
        circumR=sqrt(2)
        edgeLength=dist(vertexData[6][0],vertexData[6][1],vertexData[6][2],vertexData[18][0],vertexData[18][1],vertexData[18][2])
        intersectionD=dist(vertexData[58][0],vertexData[58][1],vertexData[58][2],vertexData[51][0],vertexData[51][1],vertexData[51][2])
        L=156
        L2=24*2
        faceData=[[0,6,18,14],[0,14,22,8],[0,8,24,16],[0,16,20,6],[1,9,23,15],[1,15,19,7],[1,7,21,17],[1,17,25,9],[2,7,19,10],[2,10,18,6],[2,6,20,11],[2,11,21,7],[3,8,22,12],[3,12,23,9],[3,9,25,13],[3,13,24,8],[4,10,19,15],[4,15,23,12],[4,12,22,14],[4,14,18,10],[5,11,20,16],[5,16,24,13],[5,13,25,17],[5,17,21,11]]
        edgesData=[[0,6],[0,8],[0,14],[0,16],[1,7],[1,9],[1,15],[1,17],[2,6],[2,7],[2,10],[2,11],[3,8],[3,9],[3,12],[3,13],[4,10],[4,12],[4,14],[4,15],[5,11],[5,13],[5,16],[5,17]]
        edgesData.push([6,18],[6,20],[7,19],[7,21],[8,22],[8,24],[9,23],[9,25],[10,18],[10,19],[11,20],[11,21],[12,22],[12,23],[13,24],[13,25],[14,18],[14,22],[15,19],[15,23],[16,20],[16,24],[17,21],[17,25])
        intData=[[18,50],[18,55],[18,58],[19,50],[19,55],[19,59],[20,50],[20,58],[20,62],[21,50],[21,59],[21,62],[22,55],[22,58],[22,67],[23,55],[23,59],[23,67],[24,58],[24,62],[24,67],[25,59],[25,62],[25,67]]
        intData.push([26,58],[26,59],[27,55],[27,62],[28,55],[28,62],[29,58],[29,59],[30,58],[30,59],[31,55],[31,62],[32,55],[32,62],[33,58],[33,59],[34,50],[34,67],[35,50],[35,67],[36,50],[36,67],[37,50],[37,67],[38,50],[38,67],[39,50],[39,67],[40,50],[40,67],[41,50],[41,67],[42,58],[42,59],[43,55],[43,62],[44,55],[44,62],[45,58],[45,59],[46,58],[46,59],[47,55],[47,62],[48,55],[48,62],[49,58],[49,59])
        intData.push([50,55],[50,56],[50,57],[50,58],[50,59],[50,60],[50,61],[50,62],[51,58],[51,59],[52,55],[52,62],[53,55],[53,62],[54,58],[54,59],[55,58],[55,59],[55,64],[55,65],[55,67],[56,67],[57,67],[58,62],[58,63],[58,66],[58,67],[59,62],[59,63],[59,66],[59,67],[60,67],[61,67],[62,64],[62,65],[62,67])
        JL=8+18
        s=1
      break
      case 58:
        var a0 = 10+(sqrt(2)-1)/2
        vertexData = doWeird(conv([[9.5,9.5,a0],[a0,9.5,9.5],[9.5,a0,9.5]]),1,sqrt(2))
        var bb = doWeird(conv([[9.5,9.5,a0],[a0,9.5,9.5],[9.5,a0,9.5]]),1,sqrt(2)+1)
        for(var i = 24; i<bb.length; i++) {
          vertexData[vertexData.length]=bb[i]
        }
        circumR=sqrt(sq(a0-10)+0.5)
        edgeLength=1
        intersectionD=dist(vertexData[72][0],vertexData[72][1],vertexData[72][2],vertexData[84][0],vertexData[84][1],vertexData[84][2])
        intData=[[72,92],[73,93],[74,89],[75,88],[76,95],[77,94],[78,90],[79,91],[80,106],[81,107],[82,104],[83,105],[84,110],[85,111],[86,108],[87,109],[96,115],[97,114],[98,118],[99,119],[100,112],[101,113],[102,117],[103,116]]
        intData.push([0,56],[1,57],[2,54],[3,55],[4,40],[5,41],[6,38],[7,39],[8,30],[9,29],[10,26],[11,25],[12,70],[13,69],[14,66],[15,65],[16,53],[17,52],[18,59],[19,58],[20,37],[21,36],[22,43],[23,42])
        intData.push([24,64],[27,67],[28,68],[31,71],[32,35],[33,34],[44,50],[45,51],[46,47],[48,49],[60,63],[61,62])
        L=96
        L2=24*2
        faceData=[[0,2,18,19,3,1,17,16],[0,8,9,1,5,13,12,4],[14,15,7,3,11,10,2,6],[14,22,18,10,8,16,20,12],[21,5,7,23,22,6,4,20],[21,17,9,11,19,23,15,13],[0,2,10,8],[0,16,20,4],[7,3,19,23],[7,15,13,5],[11,3,1,9],[11,10,18,19],[12,14,6,4],[12,20,21,13],[17,1,5,21],[17,16,8,9],[22,14,15,23],[22,18,2,6]]
        JL=24
        s=1
      break
      case 59:
        var a0 = 10+2-sqrt(2)
        vertexData=conv([[0,0,a0],[a0,0,0],[0,a0,0],[11,0,11],[11,11,0],[0,11,11]])
        circumR=sqrt(2)
        edgeLength=dist(vertexData[0][0],vertexData[0][1],vertexData[0][2],vertexData[14][0],vertexData[14][1],vertexData[14][2])
        L=24*2
        L2=L
        faceData=[[0,10,2,14],[0,11,5,6],[0,12,4,8],[0,13,3,16],[1,10,4,7],[1,11,2,17],[1,12,3,15],[1,13,5,9],[2,14,4,6],[2,15,1,10],[2,16,0,11],[2,17,5,7],[3,14,0,12],[3,15,4,9],[3,16,5,8],[3,17,1,13],[4,6,0,10],[4,7,2,15],[4,8,3,14],[4,9,1,12],[5,6,2,16],[5,7,1,11],[5,8,0,13],[5,9,3,17]]
        edgesData=[[0,10],[0,11],[0,12],[0,13],[1,10],[1,11],[1,12],[1,13],[2,14],[2,15],[2,16],[2,17],[3,14],[3,15],[3,16],[3,17],[4,6],[4,7],[4,8],[4,9],[5,6],[5,7],[5,8],[5,9]]
        edgesData.push([0,6],[0,8],[0,14],[0,16],[1,7],[1,9],[1,15],[1,17],[2,6],[2,7],[2,10],[2,11],[3,8],[3,9],[3,12],[3,13],[4,10],[4,12],[4,14],[4,15],[5,11],[5,13],[5,16],[5,17])
        JL=vertexData.length
        s=1
      break
      case 60:
        var a0 = (sqrt(2)-1)/2
        vertexData = doWeird(conv([[10-a0,10.5,10-a0],[10-a0,10-a0,10.5],[10.5,10-a0,10-a0]]),1,sqrt(2))
        var bb = doWeird(conv([[10-a0,10.5,10-a0],[10-a0,10-a0,10.5],[10.5,10-a0,10-a0]]),1,sqrt(2)+1)
        for(var i = 24; i<bb.length; i++) {
          vertexData[vertexData.length]=bb[i]
        }
        circumR=sqrt(sq(a0)*2+0.25)
        edgeLength=1
        intersectionD=dist(vertexData[56][0],vertexData[56][1],vertexData[56][2],vertexData[78][0],vertexData[78][1],vertexData[78][2])
        intData=[[24,51],[25,48],[26,47],[27,44],[28,55],[31,54],[32,53],[35,52],[36,41],[37,40],[38,43],[39,42]]
        intData.push([56,61],[56,69],[57,60],[57,68],[58,63],[58,70],[59,62],[59,71],[60,68],[61,69],[62,71],[63,70],[64,73],[64,76],[65,72],[65,77],[66,74],[66,79],[67,75],[67,78],[72,77],[73,76],[74,79],[75,78])
        intData.push([56,78],[57,79],[58,75],[59,74],[60,77],[61,76],[62,72],[63,73],[64,67],[65,66],[68,71],[69,70])
        L=84
        L2=24+12
        faceData=[[0,2,10,11,3,1,9,8],[0,16,20,4,6,22,18,2],[12,13,5,7,15,14,6,4],[12,20,16,8,9,17,21,13],[19,23,7,5,21,17,1,3],[19,11,10,18,22,14,15,23],[0,8,16],[1,17,9],[2,18,10],[3,11,19],[4,20,12],[5,13,21],[6,14,22],[7,23,15]]
        JL=24
        s=1
      break
      case 61:
        var a0 = 11-sqrt(2)
        vertexData=conv([[0,0,a0],[a0,0,0],[0,a0,0],[11,11,11]])
        var bb = doWeird2(vertexData,2,2*sqrt(2)+3)
        var cc = doWeird2(vertexData,2,9.24)
        var dd = doWeird(vertexData,0.5857864376269026,sqrt(2)+1)
        vertexData=doWeird2(vertexData,2,2+sqrt(2))
        for(var i = 8+6; i<bb.length; i++) {
          vertexData[vertexData.length]=bb[i]
        }
        for(var i = 8+6; i<cc.length; i++) {
          vertexData[vertexData.length]=cc[i]
        }
        for(var i = 8+6; i<dd.length; i++) {
          vertexData[vertexData.length]=dd[i]
        }
        circumR=sqrt(2)
        edgeLength=dist(vertexData[105][0],vertexData[105][1],vertexData[105][2],vertexData[117][0],vertexData[117][1],vertexData[117][2])
        L=216
        L2=24+12
        faceData=[[6,0,2],[6,2,4],[6,4,0],[7,1,4],[7,4,2],[7,2,1],[8,0,5],[8,5,2],[8,2,0],[9,1,2],[9,2,5],[9,5,1],[10,0,4],[10,4,3],[10,3,0],[11,1,3],[11,3,4],[11,4,1],[12,0,3],[12,3,5],[12,5,0],[13,1,5],[13,5,3],[13,3,1]]
        edgesData=[[0,6],[0,8],[0,10],[0,12],[1,7],[1,9],[1,11],[1,13],[2,6],[2,7],[2,8],[2,9],[3,10],[3,11],[3,12],[3,13],[4,6],[4,7],[4,10],[4,11],[5,8],[5,9],[5,12],[5,13]]
        edgesData.push([0,2],[0,3],[0,4],[0,5],[1,2],[1,3],[1,4],[1,5],[2,4],[2,5],[3,4],[3,5])
        intData=[[0,24],[0,27],[0,29],[0,32],[1,23],[1,26],[1,28],[1,31],[2,30],[2,31],[2,32],[2,33],[3,22],[3,23],[3,24],[3,25],[4,25],[4,28],[4,29],[4,33],[5,22],[5,26],[5,27],[5,30]]
        intData.push([0,43],[0,45],[0,47],[0,49],[1,42],[1,44],[1,46],[1,48],[2,46],[2,47],[2,48],[2,49],[3,42],[3,43],[3,44],[3,45],[4,44],[4,45],[4,48],[4,49],[5,42],[5,43],[5,46],[5,47])
        intData.push([0,63],[0,65],[0,67],[0,73],[0,75],[0,81],[0,83],[0,85],[1,62],[1,64],[1,66],[1,72],[1,74],[1,80],[1,82],[1,84],[2,74],[2,75],[2,76],[2,77],[2,78],[2,79],[2,80],[2,81],[3,66],[3,67],[3,68],[3,69],[3,70],[3,71],[3,72],[3,73],[4,64],[4,65],[4,70],[4,71],[4,78],[4,79],[4,84],[4,85],[5,62],[5,63],[5,68],[5,69],[5,76],[5,77],[5,82],[5,83])
        intData.push([42,45],[42,47],[42,48],[43,44],[43,46],[43,49],[44,46],[44,49],[45,47],[45,48],[46,49],[47,48],[94,106],[94,107],[95,103],[95,109],[96,102],[96,108],[97,104],[97,105],[98,111],[98,112],[99,110],[99,113],[100,110],[100,113],[101,111],[101,112],[102,116],[103,115],[104,117],[105,117],[106,114],[107,114],[108,116],[109,115])
        intData.push([42,96],[42,97],[42,103],[42,106],[42,110],[42,111],[43,95],[43,97],[43,102],[43,107],[43,110],[43,112],[44,94],[44,96],[44,104],[44,109],[44,111],[44,113],[45,94],[45,95],[45,105],[45,108],[45,112],[45,113],[46,98],[46,99],[46,103],[46,106],[46,116],[46,117],[47,98],[47,100],[47,102],[47,107],[47,115],[47,117],[48,99],[48,101],[48,104],[48,109],[48,114],[48,116],[49,100],[49,101],[49,105],[49,108],[49,114],[49,115])
        JL=8+6
        s=1/4
        s2=1/8
      break
      case 62:
        var a0 = (1+sqrt(2))/2
        vertexData = conv([[10.5,10.5,10+a0],[10+a0,10.5,10.5],[10.5,10+a0,10.5]])
        circumR=sqrt(sq(a0)+0.5)
        edgeLength=1
        L=60
        L2=48
        faceData=[[0,2,18,19,3,1,17,16],[0,8,9,1,5,13,12,4],[11,10,2,6,14,15,7,3],[11,19,23,15,13,21,17,9],[20,12,14,22,18,10,8,16],[20,21,5,7,23,22,6,4],[0,4,6,2],[1,3,7,5],[8,10,11,9],[12,13,15,14],[16,17,21,20],[18,22,23,19],[0,16,8],[1,9,17],[2,10,18],[3,19,11],[4,12,20],[5,21,13],[6,22,14],[7,15,23]]
        intData=[[0,1],[2,3],[4,5],[6,7],[8,12],[9,13],[10,14],[11,15],[16,18],[17,19],[20,22],[21,23]]
        JL=vertexData.length
        s=1
      break
      case 63:
        var a0 = 10+(4+sqrt(2))/7
        var a1 = 10+sqrt(2)
        var a2 = 12+sqrt(2)
        vertexData=doWeird2(conv([[0,0,a2],[a2,0,0],[0,a2,0],[0,0,a1],[a1,0,0],[0,a1,0],[a0,a0,a0]]),2*sqrt(2+sqrt(2)),sqrt(2))
        faceData=[[12,0,8,4],[12,4,6,2],[12,2,10,0],[13,1,10,2],[13,2,7,4],[13,4,8,1],[14,0,11,2],[14,2,6,5],[14,5,8,0],[15,1,8,5],[15,5,7,2],[15,2,11,1],[16,0,10,3],[16,3,6,4],[16,4,9,0],[17,1,9,4],[17,4,7,3],[17,3,10,1],[18,0,9,5],[18,5,6,3],[18,3,11,0],[19,1,11,3],[19,3,7,5],[19,5,9,1]]
        edgesData=[[0,8],[0,9],[0,10],[0,11],[1,8],[1,9],[1,10],[1,11],[2,6],[2,7],[2,10],[2,11],[3,6],[3,7],[3,10],[3,11],[4,6],[4,7],[4,8],[4,9],[5,6],[5,7],[5,8],[5,9]]
        edgesData.push([0,12],[0,14],[0,16],[0,18],[1,13],[1,15],[1,17],[1,19],[2,12],[2,13],[2,14],[2,15],[3,16],[3,17],[3,18],[3,19],[4,12],[4,13],[4,16],[4,17],[5,14],[5,15],[5,18],[5,19])
        intData=[[12,27],[12,30],[12,31],[13,26],[13,29],[13,31],[14,25],[14,28],[14,30],[15,24],[15,28],[15,29],[16,22],[16,23],[16,27],[17,21],[17,23],[17,26],[18,20],[18,22],[18,25],[19,20],[19,21],[19,24]]
        L=72
        L2=48
        circumR=2+sqrt(2)
        JL=20
        s=2/3
      break
      case 64:
        var a0 = (1+sqrt(2))/2
        vertexData = conv([[10.5,10.5,10+a0],[10+a0,10.5,10.5],[10.5,10+a0,10.5]])
        circumR=sqrt(sq(a0)+0.5)
        edgeLength=1
        L=60
        L2=48
        faceData=[[0,2,18,19,3,1,17,16],[0,8,9,1,5,13,12,4],[11,10,2,6,14,15,7,3],[11,19,23,15,13,21,17,9],[20,12,14,22,18,10,8,16],[20,21,5,7,23,22,6,4],[0,2,10,8],[0,16,20,4],[7,3,19,23],[7,15,13,5],[11,3,1,9],[11,10,18,19],[12,14,6,4],[12,20,21,13],[17,1,5,21],[17,16,8,9],[22,14,15,23],[22,18,2,6]]
        intData=[[0,1],[2,3],[4,5],[6,7],[8,12],[9,13],[10,14],[11,15],[16,18],[17,19],[20,22],[21,23]]
        JL=vertexData.length
        s=1
      break
      case 65:
        var a0 = 10+2+sqrt(2)
        vertexData=conv([[0,0,a0],[a0,0,0],[0,a0,0],[11,0,11],[11,11,0],[0,11,11]])
        faceData=[[0,10,2,14],[0,11,5,6],[0,12,4,8],[0,13,3,16],[1,10,4,7],[1,11,2,17],[1,12,3,15],[1,13,5,9],[2,14,4,6],[2,15,1,10],[2,16,0,11],[2,17,5,7],[3,14,0,12],[3,15,4,9],[3,16,5,8],[3,17,1,13],[4,6,0,10],[4,7,2,15],[4,8,3,14],[4,9,1,12],[5,6,2,16],[5,7,1,11],[5,8,0,13],[5,9,3,17]]
        edgesData=[[0,10],[0,11],[0,12],[0,13],[1,10],[1,11],[1,12],[1,13],[2,14],[2,15],[2,16],[2,17],[3,14],[3,15],[3,16],[3,17],[4,6],[4,7],[4,8],[4,9],[5,6],[5,7],[5,8],[5,9]]
        edgesData.push([0,6],[0,8],[0,14],[0,16],[1,7],[1,9],[1,15],[1,17],[2,6],[2,7],[2,10],[2,11],[3,8],[3,9],[3,12],[3,13],[4,10],[4,12],[4,14],[4,15],[5,11],[5,13],[5,16],[5,17])
        L=48
        L2=L
        circumR=2+sqrt(2)
        JL=vertexData.length
        s=2/3
      break
      case 66:
        var a0 = 10+(sqrt(2)-1)/2
        var a1 = 10+(1+sqrt(2))/2
        vertexData = conv([[10.5,a0,a1],[a1,10.5,a0],[a0,a1,10.5],[a0,10.5,a1],[a1,a0,10.5],[10.5,a1,a0]])
        var bb = doWeird(vertexData,1,sqrt(2)+1)
        vertexData=doWeird(vertexData,1,sqrt(2))
        for(var i = 48; i<bb.length; i++) {
          vertexData[vertexData.length]=bb[i]
        }
        circumR=sqrt(7)/2
        edgeLength=1
        L=1e20
        L2=24*3
        faceData=[[0,4,26,24,6,2,28,30],[1,31,29,3,7,25,27,5],[8,10,33,32,11,9,34,35],[12,39,38,13,15,36,37,14],[16,17,44,40,21,20,41,45],[18,47,43,22,23,42,46,19],[0,32,33,1,5,37,36,4],[2,6,38,39,7,3,35,34],[8,40,44,12,14,46,42,10],[9,11,43,47,15,13,45,41],[16,24,26,18,19,27,25,17],[20,21,29,31,23,22,30,28],[0,30,22,43,11,32],[1,33,10,42,23,31],[2,34,9,41,20,28],[3,29,21,40,8,35],[4,36,15,47,18,26],[5,27,19,46,14,37],[6,24,16,45,13,38],[7,39,12,44,17,25]]
        intData=[[48,72],[51,73],[52,74],[55,75],[92,94],[93,95],[96,98],[97,99],[116,136],[117,139],[118,140],[119,143]]
        intData.push([49,137],[50,138],[53,141],[54,142],[76,90],[77,91],[82,83],[84,85],[100,114],[101,115],[106,107],[108,109])
        intData.push([144,186],[145,187],[146,184],[147,185],[148,190],[149,191],[150,188],[151,189],[168,174],[169,175],[176,182],[177,183],[192,234],[193,235],[194,232],[195,233],[196,238],[197,239],[198,236],[199,237],[200,206],[201,207],[208,214],[209,215])
        intersectionD=dist(vertexData[144][0],vertexData[144][1],vertexData[144][2],vertexData[186][0],vertexData[186][1],vertexData[186][2])
        JL=48
        s=1
      break
      case 67:
        var a0 = 3*(sqrt(2)-1)
        var a1 = 3*(1+sqrt(2))
        vertexData = conv([[0,0,10+a1],[10+a1,0,0],[0,10+a1,0],[0,0,10+a0],[10+a0,0,0],[0,10+a0,0],[11,11,11]])
        var bb = doWeird2(vertexData,8.363081100704115,8.25)
        var cc = doWeird2(vertexData,8.363081100704115,13.4)
        vertexData=doWeird2(vertexData,2*(sqrt(6)+sqrt(3)),4.62)
        for(var i = 8+6+6; i<bb.length; i++) {
          vertexData[vertexData.length]=bb[i]
        }
        for(var i = 8+6+6; i<cc.length; i++) {
          vertexData[vertexData.length]=cc[i]
        }
        intersectionD=dist(vertexData[6][0],vertexData[6][1],vertexData[6][2],vertexData[61][0],vertexData[61][1],vertexData[61][2])
        circumR=a1
        edgeLength=1
        L=60*8
        L2=24*3
        faceData=[[0,8,13],[0,13,10],[0,10,17],[0,17,9],[0,9,19],[0,19,11],[0,11,15],[0,15,8],[1,8,14],[1,14,11],[1,11,18],[1,18,9],[1,9,16],[1,16,10],[1,10,12],[1,12,8],[2,6,18],[2,18,11],[2,11,19],[2,19,7],[2,7,17],[2,17,10],[2,10,16],[2,16,6],[3,6,12],[3,12,10],[3,10,13],[3,13,7],[3,7,15],[3,15,11],[3,11,14],[3,14,6],[4,6,14],[4,14,8],[4,8,15],[4,15,7],[4,7,19],[4,19,9],[4,9,18],[4,18,6],[5,6,16],[5,16,9],[5,9,17],[5,17,7],[5,7,13],[5,13,8],[5,8,12],[5,12,6]]
        intData=[[6,21],[6,27],[6,23],[6,25],[7,20],[7,22],[7,24],[7,26],[8,24],[8,25],[8,26],[8,27],[9,20],[9,21],[9,22],[9,23],[10,22],[10,23],[10,26],[10,27],[11,20],[11,21],[11,24],[11,25]]
        intData.push([6,30],[6,33],[6,35],[6,38],[7,29],[7,32],[7,34],[7,37],[8,36],[8,37],[8,38],[8,39],[9,28],[9,29],[9,30],[9,31],[10,31],[10,34],[10,35],[10,39],[11,28],[11,32],[11,33],[11,36])
        intData.push([6,43],[6,45],[6,49],[6,51],[6,53],[6,55],[6,59],[6,61],[7,42],[7,44],[7,48],[7,50],[7,52],[7,54],[7,58],[7,60],[8,56],[8,57],[8,58],[8,59],[8,60],[8,61],[8,62],[8,63],[9,40],[9,41],[9,42],[9,43],[9,44],[9,45],[9,46],[9,47],[10,46],[10,47],[10,50],[10,51],[10,54],[10,55],[10,62],[10,63],[11,40],[11,41],[11,48],[11,49],[11,52],[11,53],[11,56],[11,57])
        edgesData=[[0,8],[0,9],[0,10],[0,11],[1,8],[1,9],[1,10],[1,11],[2,6],[2,7],[2,10],[2,11],[3,6],[3,7],[3,10],[3,11],[4,6],[4,7],[4,8],[4,9],[5,6],[5,7],[5,8],[5,9]]
        edgesData.push([0,13],[0,15],[0,17],[0,19],[1,12],[1,14],[1,16],[1,18],[2,16],[2,17],[2,18],[2,19],[3,12],[3,13],[3,14],[3,15],[4,14],[4,15],[4,18],[4,19],[5,12],[5,13],[5,16],[5,17])
        edgesData.push([6,12],[6,14],[6,16],[6,18],[7,13],[7,15],[7,17],[7,19],[8,12],[8,13],[8,14],[8,15],[9,16],[9,17],[9,18],[9,19],[10,12],[10,13],[10,16],[10,17],[11,14],[11,15],[11,18],[11,19])
        JL=8+6+6//vertexData.length
        s=1/3
      break
      case 68:
        var a0 = 10+(sqrt(5)-1)/4
        var a1 = 10+sqrt(5)/2
        var a2 = 10+(3+sqrt(5))/4
        var a3 = 10+phi
        vertexData = conv([[10.5,a0,a3],[a3,10.5,a0],[a0,a3,10.5],[0,a1,a2],[a2,0,a1],[a1,a2,0],[11,10.5,a2],[a2,11,10.5],[10.5,a2,11]])
        circumR=sqrt(2*(17+3*sqrt(5)))/4
        edgeLength=1
        L=120
        L2=L
        faceData=[[0,4,30,14,51,59,55,47,10,28],[0,38,46,47,39,1,25,21,20,24],[2,26,22,23,27,3,37,45,44,36],[2,28,8,45,53,57,49,12,30,6],[5,1,29,11,46,54,58,50,15,31],[5,43,51,50,42,4,24,16,17,25],[7,27,19,18,26,6,40,48,49,41],[7,31,13,48,56,52,44,9,29,3],[33,11,9,32,16,56,40,42,58,18],[33,19,59,43,41,57,17,32,8,10],[34,13,15,35,22,54,38,36,52,20],[34,21,53,37,39,55,23,35,14,12],[0,4,42,58,54,38],[0,28,8,32,16,24],[3,7,41,57,53,37],[3,29,11,33,19,27],[17,32,9,29,1,25],[17,57,49,48,56,16],[18,33,10,28,2,26],[18,58,50,51,59,19],[34,12,30,4,24,20],[34,21,25,5,31,13],[35,15,31,7,27,23],[35,22,26,6,30,14],[40,6,2,36,52,56],[40,48,13,15,50,42],[43,5,1,39,55,59],[43,51,14,12,49,41],[44,36,38,46,11,9],[44,45,53,21,20,52],[47,39,37,45,8,10],[47,46,54,22,23,55]]
        JL=60
        s=1
      break
      case 69:
        var a0 = 10+(5-sqrt(5))/4
        var a1 = 10+sqrt(5)/2
        var a2 = 10+(5+sqrt(5))/4
        var a3 = 10+3*(1+sqrt(5))/4
        var a4 = 10+3*(3+sqrt(5))/4
        vertexData = conv([[a3,0,a4],[a4,a3,0],[0,a4,a3],[0,a0,a2],[a2,0,a0],[a0,a2,0],[a1,a1,a1]])
        circumR=3/2*sqrt(5+2*sqrt(5))
        edgeLength=1
        L=120
        L2=L
        faceData=[[0,18,6,14],[0,22,9,12],[0,25,1,24],[0,27,11,16],[0,23,7,26],[1,19,7,13],[1,23,10,15],[1,26,0,27],[1,24,8,17],[1,22,6,25],[2,16,5,12],[2,21,11,14],[2,31,3,30],[2,29,9,18],[2,20,4,28],[3,17,4,15],[3,20,8,13],[3,28,2,29],[3,30,10,19],[3,21,5,31],[4,14,2,16],[4,28,6,24],[4,29,3,20],[4,15,11,25],[4,21,10,17],[5,12,8,26],[5,20,9,16],[5,13,3,17],[5,31,7,27],[5,30,2,21],[6,14,10,28],[6,23,11,18],[6,15,1,19],[6,25,4,29],[6,24,0,22],[7,12,0,18],[7,26,5,30],[7,27,1,23],[7,13,9,31],[7,22,8,19],[8,13,1,22],[8,17,5,20],[8,26,10,24],[8,30,7,12],[8,19,3,28],[9,12,2,20],[9,18,7,22],[9,31,11,29],[9,27,5,13],[9,16,0,25],[10,15,3,21],[10,19,6,23],[10,28,8,30],[10,24,4,14],[10,17,1,26],[11,14,0,23],[11,16,4,21],[11,25,9,27],[11,29,6,15],[11,18,2,31]]
        JL=32
        edgesData=[[0,12],[0,14],[0,16],[0,24],[0,26],[1,13],[1,15],[1,17],[1,25],[1,27],[2,12],[2,14],[2,18],[2,28],[2,30],[3,13],[3,15],[3,19],[3,29],[3,31],[4,16],[4,17],[4,20],[4,24],[4,25],[5,16],[5,17],[5,21],[5,26],[5,27],[6,18],[6,19],[6,22],[6,28],[6,29],[7,18],[7,19],[7,23],[7,30],[7,31],[8,12],[8,20],[8,22],[8,24],[8,28],[9,13],[9,20],[9,22],[9,25],[9,29],[10,14],[10,21],[10,23],[10,26],[10,30],[11,15],[11,21],[11,23],[11,27],[11,31]]
        edgesData.push([0,18],[0,22],[0,23],[0,25],[0,27],[1,19],[1,22],[1,23],[1,24],[1,26],[2,16],[2,20],[2,21],[2,29],[2,31],[3,17],[3,20],[3,21],[3,28],[3,30],[4,14],[4,15],[4,21],[4,28],[4,29],[5,12],[5,13],[5,20],[5,30],[5,31],[6,14],[6,15],[6,23],[6,24],[6,25],[7,12],[7,13],[7,22],[7,26],[7,27],[8,13],[8,17],[8,19],[8,26],[8,30],[9,12],[9,16],[9,18],[9,27],[9,31],[10,15],[10,17],[10,19],[10,24],[10,28],[11,14],[11,16],[11,18],[11,25],[11,29])
        s=1/2
      break
      case 70:
        var a0 = 10+(1+sqrt(5))/4
        var a1 = 10+(3+sqrt(5))/4
        var a2 = 10+phi
        var a3 = 10+(5+sqrt(5))/4
        var a4 = 10+(2+sqrt(5))/2
        vertexData = conv([[10.5,10.5,a4],[a4,10.5,10.5],[10.5,a4,10.5],[0,a1,a3],[a3,0,a1],[a1,a3,0],[a1,a0,a2],[a2,a1,a0],[a0,a2,a1]])
        circumR=sqrt(11+4*sqrt(5))/2
        edgeLength=1
        L=120
        L2=L
        faceData=[[0,24,56,48,12,14,50,58,26,2],[0,36,44,32,17,21,34,48,40,4],[7,3,39,47,33,18,22,35,51,43],[7,5,25,53,45,9,11,47,55,27],[10,8,44,52,24,4,6,26,54,46],[10,11,29,37,53,17,16,52,36,28],[13,31,43,59,23,22,58,42,30,12],[13,49,57,25,1,3,27,59,51,15],[19,33,46,38,2,6,42,50,35,23],[19,55,39,29,9,8,28,38,54,18],[20,16,32,45,37,1,5,41,49,34],[20,21,57,41,31,15,14,30,40,56],[24,0,36,52],[24,56,40,4],[25,5,41,57],[25,53,37,1],[26,6,42,58],[26,54,38,2],[27,3,39,55],[27,59,43,7],[28,8,44,36],[28,38,46,10],[29,11,47,39],[29,37,45,9],[30,14,50,42],[30,40,48,12],[31,13,49,41],[31,43,51,15],[32,16,52,44],[32,45,53,17],[33,19,55,47],[33,46,54,18],[34,21,57,49],[34,48,56,20],[35,22,58,50],[35,51,59,23],[0,4,6,2],[1,3,7,5],[8,10,11,9],[12,13,15,14],[16,17,21,20],[18,22,23,19]]
        JL=60
        s=1
      break
      case 71:
        var a0 = 10+(5-sqrt(5))/4
        var a1 = 10+sqrt(5)/2
        var a2 = 10+phi
        var a3 = 10+(5+sqrt(5))/4
        var a4 = 10+sqrt(5)
        var a5 = 10+phi2
        vertexData = conv([[a2,0,a5],[a5,a2,0],[0,a5,a2],[0,0,a4],[a4,0,0],[0,a4,0],[a0,a1,a3],[a3,a0,a1],[a1,a3,a0]])
        circumR=sqrt(phi2+sq(phi2))
        L=120
        L2=L
        faceData=[[0,14,5,26],[0,36,10,28],[0,24,2,20],[0,22,8,12],[0,34,4,18],[1,14,4,29],[1,37,5,21],[1,25,11,13],[1,23,3,19],[1,35,9,27],[2,15,6,32],[2,38,8,30],[2,18,0,22],[2,20,10,12],[2,40,7,24],[3,15,7,31],[3,39,6,23],[3,19,9,13],[3,21,1,25],[3,41,11,33],[4,16,9,34],[4,19,1,35],[4,29,5,27],[4,28,0,14],[4,18,8,26],[5,17,10,37],[5,20,0,36],[5,26,4,28],[5,27,1,14],[5,21,11,29],[6,16,8,39],[6,22,2,38],[6,32,7,30],[6,33,3,15],[6,23,9,31],[7,17,11,40],[7,25,3,41],[7,31,6,33],[7,30,2,15],[7,24,10,32],[8,12,2,18],[8,30,6,22],[8,39,9,38],[8,35,4,16],[8,26,0,34],[9,13,1,23],[9,27,4,19],[9,34,8,35],[9,38,6,16],[9,31,3,39],[10,12,0,24],[10,28,5,20],[10,37,11,36],[10,41,7,17],[10,32,2,40],[11,13,3,21],[11,33,7,25],[11,40,10,41],[11,36,5,17],[11,29,1,37]]
        edgesData=[[0,12],[0,18],[0,20],[0,26],[0,28],[1,13],[1,19],[1,21],[1,27],[1,29],[2,12],[2,22],[2,24],[2,30],[2,32],[3,13],[3,23],[3,25],[3,31],[3,33],[4,14],[4,26],[4,27],[4,34],[4,35],[5,14],[5,28],[5,29],[5,36],[5,37],[6,15],[6,30],[6,31],[6,38],[6,39],[7,15],[7,32],[7,33],[7,40],[7,41],[8,16],[8,18],[8,22],[8,34],[8,38],[9,16],[9,19],[9,23],[9,35],[9,39],[10,17],[10,20],[10,24],[10,36],[10,40],[11,17],[11,21],[11,25],[11,37],[11,41]]
        edgesData.push([0,14],[0,22],[0,24],[0,34],[0,36],[1,14],[1,23],[1,25],[1,35],[1,37],[2,15],[2,18],[2,20],[2,38],[2,40],[3,15],[3,19],[3,21],[3,39],[3,41],[4,16],[4,18],[4,19],[4,28],[4,29],[5,17],[5,20],[5,21],[5,26],[5,27],[6,16],[6,22],[6,23],[6,32],[6,33],[7,17],[7,24],[7,25],[7,30],[7,31],[8,12],[8,26],[8,30],[8,35],[8,39],[9,13],[9,27],[9,31],[9,34],[9,38],[10,12],[10,28],[10,32],[10,37],[10,41],[11,13],[11,29],[11,33],[11,36],[11,40])
        JL=42
        s=1
      break
      case 72:
        var a0 = 10+(1+sqrt(5))/4
        var a1 = 10+(3+sqrt(5))/4
        var a2 = 10+phi
        var a3 = 10+(5+sqrt(5))/4
        var a4 = 10+(2+sqrt(5))/2
        vertexData = conv([[10.5,10.5,a4],[a4,10.5,10.5],[10.5,a4,10.5],[0,a1,a3],[a3,0,a1],[a1,a3,0],[a1,a0,a2],[a2,a1,a0],[a0,a2,a1]])
        circumR=sqrt(11+4*sqrt(5))/2
        edgeLength=1
        L=120
        L2=L
        faceData=[[0,24,56,48,12,14,50,58,26,2],[0,36,44,32,17,21,34,48,40,4],[7,3,39,47,33,18,22,35,51,43],[7,5,25,53,45,9,11,47,55,27],[10,8,44,52,24,4,6,26,54,46],[10,11,29,37,53,17,16,52,36,28],[13,31,43,59,23,22,58,42,30,12],[13,49,57,25,1,3,27,59,51,15],[19,33,46,38,2,6,42,50,35,23],[19,55,39,29,9,8,28,38,54,18],[20,16,32,45,37,1,5,41,49,34],[20,21,57,41,31,15,14,30,40,56],[24,52,16,20,56],[25,57,21,17,53],[26,58,22,18,54],[27,55,19,23,59],[28,36,0,2,38],[29,39,3,1,37],[30,42,6,4,40],[31,41,5,7,43],[32,44,8,9,45],[33,47,11,10,46],[34,49,13,12,48],[35,50,14,15,51],[24,0,4],[25,5,1],[26,6,2],[27,3,7],[28,8,10],[29,11,9],[30,14,12],[31,13,15],[32,16,17],[33,19,18],[34,21,20],[35,22,23],[36,52,44],[37,45,53],[38,46,54],[39,55,47],[40,48,56],[41,57,49],[42,58,50],[43,51,59]]
        JL=60
        s=1
      break
      case 73:
        var a0 = 10+(15+sqrt(5))/22
        var a1 = 10+(5+sqrt(5))/6
        var a2 = 10+(5+4*sqrt(5))/11
        var a3 = 10+phi
        var a4 = 10+(5+3*sqrt(5))/6
        var a5 = 10+(25+9*sqrt(5))/22
        var a6 = 10+phi2
        vertexData = conv([[a3,0,a6],[a6,a3,0],[0,a6,a3],[0,a0,a5],[a5,0,a0],[a0,a5,0],[a1,0,a4],[a4,a1,0],[0,a4,a1],[a2,a2,a2]])
        circumR=sqrt(phi2+sq(phi2))
        edgeLength=2*sqrt(2*(5+2*sqrt(5)))/3
        L=120
        L2=L
        faceData=[[24,2,14,10],[24,10,38,5],[24,5,16,4],[24,4,36,8],[24,8,12,2],[25,3,13,9],[25,9,37,4],[25,4,17,5],[25,5,39,11],[25,11,15,3],[26,0,12,8],[26,8,40,6],[26,6,18,7],[26,7,42,10],[26,10,14,0],[27,1,15,11],[27,11,43,7],[27,7,19,6],[27,6,41,9],[27,9,13,1],[28,0,16,5],[28,5,17,1],[28,1,37,9],[28,9,20,8],[28,8,36,0],[29,0,38,10],[29,10,21,11],[29,11,39,1],[29,1,17,4],[29,4,16,0],[30,2,40,8],[30,8,22,9],[30,9,41,3],[30,3,19,7],[30,7,18,2],[31,2,18,6],[31,6,19,3],[31,3,43,11],[31,11,23,10],[31,10,42,2],[32,0,36,4],[32,4,20,9],[32,9,22,6],[32,6,40,2],[32,2,12,0],[33,1,13,3],[33,3,41,6],[33,6,22,8],[33,8,20,4],[33,4,37,1],[34,0,14,2],[34,2,42,7],[34,7,23,11],[34,11,21,5],[34,5,38,0],[35,1,39,5],[35,5,21,10],[35,10,23,7],[35,7,43,3],[35,3,15,1]]
        edgesData=[[0,12],[0,14],[0,16],[0,36],[0,38],[1,13],[1,15],[1,17],[1,37],[1,39],[2,12],[2,14],[2,18],[2,40],[2,42],[3,13],[3,15],[3,19],[3,41],[3,43],[4,16],[4,17],[4,20],[4,36],[4,37],[5,16],[5,17],[5,21],[5,38],[5,39],[6,18],[6,19],[6,22],[6,40],[6,41],[7,18],[7,19],[7,23],[7,42],[7,43],[8,12],[8,20],[8,22],[8,36],[8,40],[9,13],[9,20],[9,22],[9,37],[9,41],[10,14],[10,21],[10,23],[10,38],[10,42],[11,15],[11,21],[11,23],[11,39],[11,43]]
        edgesData.push([0,26],[0,28],[0,29],[0,32],[0,34],[1,27],[1,28],[1,29],[1,33],[1,35],[2,24],[2,30],[2,31],[2,32],[2,34],[3,25],[3,30],[3,31],[3,33],[3,35],[4,24],[4,25],[4,29],[4,32],[4,33],[5,24],[5,25],[5,28],[5,34],[5,35],[6,26],[6,27],[6,31],[6,32],[6,33],[7,26],[7,27],[7,30],[7,34],[7,35],[8,24],[8,26],[8,28],[8,30],[8,33],[9,25],[9,27],[9,28],[9,30],[9,32],[10,24],[10,26],[10,29],[10,31],[10,35],[11,25],[11,27],[11,29],[11,31],[11,34])
        JL=44
        s=1
      break
      case 74:
        var a0 = 10+(3-sqrt(5))/4
        var a1 = 10+(sqrt(5)-1)/4
        var a2 = 10+(1+sqrt(5))/4
        var a3 = 10+sqrt(5)/2
        var a4 = 10+(3+sqrt(5))/4
        vertexData = conv([[a0,0,a4],[a4,a0,0],[0,a4,a0],[10.5,10.5,a3],[a3,10.5,10.5],[10.5,a3,10.5],[a1,a2,11],[11,a1,a2],[a2,11,a1]])
        circumR=sqrt(7)/2
        edgeLength=1
        L=120
        L2=L
        faceData=[[0,42,10,55,5,44],[0,46,4,53,8,40],[2,36,8,57,6,50],[2,48,7,59,10,38],[15,13,53,20,22,55],[15,19,49,33,29,45],[17,13,47,31,35,51],[17,19,59,26,24,57],[30,46,12,16,50,34],[30,42,26,27,43,31],[32,48,18,14,44,28],[32,36,20,21,37,33],[39,23,22,38,34,35],[39,11,58,7,49,3],[41,25,24,40,28,29],[41,9,52,4,47,1],[54,11,43,1,45,5],[54,23,21,52,12,14],[56,9,37,3,51,6],[56,25,27,58,18,16],[0,42,30,46],[0,44,28,40],[1,41,29,45],[1,47,31,43],[3,39,35,51],[3,49,33,37],[5,44,14,54],[5,55,15,45],[6,50,16,56],[6,57,17,51],[7,49,19,59],[7,58,18,48],[8,36,20,53],[8,57,24,40],[9,41,25,56],[9,52,21,37],[11,39,23,54],[11,58,27,43],[12,16,18,14],[12,46,4,52],[13,15,19,17],[13,53,4,47],[22,23,21,20],[22,38,10,55],[26,24,25,27],[26,59,10,42],[32,28,29,33],[32,48,2,36],[34,35,31,30],[34,38,2,50]]
        JL=60
        s=1
      break
      case 75:
        var a0 = 10+3*(5-sqrt(5))/20
        var a1 = 10+phi_1
        var a2 = 10+3*sqrt(5)/10
        var a3 = 10+3*(5+sqrt(5))/20
        var a4 = 10+3*sqrt(5)/5
        var a5 = 10+phi
        vertexData = conv([[0,a1,a5],[a5,0,a1],[a1,a5,0],[0,0,a4],[a4,0,0],[0,a4,0],[a0,a2,a3],[a3,a0,a2],[a2,a3,a0],[11,11,11]])
        circumR=sqrt(7)/2
        edgeLength=(5*sqrt(6)-sqrt(30))/10
        L=120
        L2=L
        faceData=[[0,16,8,22],[0,28,44,18],[0,32,6,12],[1,16,10,19],[1,33,49,23],[1,29,5,13],[2,17,11,20],[2,30,46,24],[2,26,4,12],[3,17,9,25],[3,27,43,21],[3,31,7,13],[4,12,0,28],[4,35,43,26],[4,37,9,14],[5,13,3,27],[5,36,44,29],[5,34,8,14],[6,12,2,30],[6,41,49,32],[6,39,10,15],[7,13,1,33],[7,38,46,31],[7,40,11,15],[8,14,4,35],[8,22,46,34],[8,23,1,16],[9,14,5,36],[9,25,49,37],[9,24,2,17],[10,15,7,38],[10,19,43,39],[10,18,0,16],[11,15,6,41],[11,20,44,40],[11,21,3,17],[42,20,2,26],[42,38,10,18],[42,27,5,34],[43,21,45,19],[43,26,42,27],[43,39,47,35],[44,18,42,20],[44,29,45,28],[44,40,48,36],[45,19,1,29],[45,41,11,21],[45,28,4,37],[46,24,48,22],[46,31,47,30],[46,34,42,38],[47,25,3,31],[47,35,8,23],[47,30,6,39],[48,22,0,32],[48,36,9,24],[48,33,7,40],[49,23,47,25],[49,32,48,33],[49,37,45,41]]
        JL=50
        s=1
        edgesData=[[0,12],[0,18],[0,22],[1,13],[1,19],[1,23],[2,12],[2,20],[2,24],[3,13],[3,21],[3,25],[4,14],[4,26],[4,28],[5,14],[5,27],[5,29],[6,15],[6,30],[6,32],[7,15],[7,31],[7,33],[8,16],[8,34],[8,35],[9,17],[9,36],[9,37],[10,16],[10,38],[10,39],[11,17],[11,40],[11,41],[18,42],[19,43],[20,44],[21,45],[22,46],[23,47],[24,48],[25,49],[26,42],[27,43],[28,44],[29,45],[30,46],[31,47],[32,48],[33,49],[34,42],[35,43],[36,44],[37,45],[38,46],[39,47],[40,48],[41,49]]
        edgesData.push([0,16],[0,28],[0,32],[1,16],[1,29],[1,33],[2,17],[2,26],[2,30],[3,17],[3,27],[3,31],[4,12],[4,35],[4,37],[5,13],[5,34],[5,36],[6,12],[6,39],[6,41],[7,13],[7,38],[7,40],[8,14],[8,22],[8,23],[9,14],[9,24],[9,25],[10,15],[10,18],[10,19],[11,15],[11,20],[11,21],[18,44],[19,45],[20,42],[21,43],[22,48],[23,49],[24,46],[25,47],[26,43],[27,42],[28,45],[29,44],[30,47],[31,46],[32,49],[33,48],[34,46],[35,47],[36,48],[37,49],[38,42],[39,43],[40,44],[41,45])
      break
      case 76:
        var a0 = 10+(3-sqrt(5))/4
        var a1 = 10+phi_1
        var a2 = 10+phi/2
        var a3 = 10+sqrt(5)/2
        vertexData = conv([[0,a0,a3],[a3,0,a0],[a0,a3,0],[a0,10.5,11],[11,a0,10.5],[10.5,11,a0],[10.5,a1,a2],[a2,10.5,a1],[a1,a2,10.5]])
        circumR=sqrt(2*(17-3*sqrt(5)))/4
        edgeLength=1
        L=120
        L2=L
        faceData=[[0,42,11,55,5,44],[0,48,7,59,9,38],[1,39,9,58,6,49],[1,45,4,54,11,43],[2,36,8,57,7,50],[2,46,5,53,10,40],[3,41,10,52,4,47],[3,51,6,56,8,37],[15,13,29,44,46,31],[15,23,22,14,58,59],[18,16,32,49,51,34],[18,26,27,19,55,54],[20,21,13,57,56,12],[20,28,32,24,42,38],[25,24,16,52,53,17],[25,33,29,21,39,43],[30,22,36,40,26,34],[30,47,45,28,12,14],[35,27,41,37,23,31],[35,50,48,33,17,19],[0,44,29,33,48],[1,49,32,28,45],[2,50,35,31,46],[3,47,30,34,51],[4,52,16,18,54],[5,55,19,17,53],[6,58,14,12,56],[7,57,13,15,59],[8,36,22,23,37],[9,39,21,20,38],[10,41,27,26,40],[11,42,24,25,43],[0,38,42],[1,43,39],[2,40,36],[3,37,41],[4,45,47],[5,46,44],[6,51,49],[7,48,50],[8,56,57],[9,59,58],[10,53,52],[11,54,55],[12,28,20],[13,21,29],[14,22,30],[15,31,23],[16,24,32],[17,33,25],[18,34,26],[19,27,35]]
        JL=60
        s=1
      break
      case 77:
        var a0 = 10+3 * (11 * sqrt(5) - 15) / 76
        var a1 = 10+3 * (10 - sqrt(5)) / 38
        var a2 = 10+(5 - sqrt(5)) / 4
        var a3 = 10+3 * (7 * sqrt(5) - 5) / 44
        var a4 = 10+3 * (5 + 9 * sqrt(5)) / 76
        var a5 = 10+sqrt(5)/2
        var a6 = 10+3*(15+sqrt(5))/44
        var a7 = 10+(5+sqrt(5))/4
        vertexData = conv([[0,a2,a7],[a7,0,a2],[a2,a7,0],[a3,0,a6],[a6,a3,0],[0,a6,a3],[a5,a5,a5],[0,a0,a4],[a4,0,a0],[a0,a4,0],[a1,a1,a1]])
        circumR=sqrt(15)/2
        L=120
        L2=L
        faceData=[[12,6,50,11],[12,11,41,27],[12,27,37,25],[12,25,40,10],[12,10,48,6],[13,7,49,10],[13,10,40,24],[13,24,36,26],[13,26,41,11],[13,11,51,7],[14,4,44,8],[14,8,42,29],[14,29,39,31],[14,31,43,9],[14,9,46,4],[15,5,47,9],[15,9,43,30],[15,30,38,28],[15,28,42,8],[15,8,45,5],[16,2,46,9],[16,9,47,3],[16,3,33,29],[16,29,42,28],[16,28,32,2],[17,0,34,30],[17,30,43,31],[17,31,35,1],[17,1,45,8],[17,8,44,0],[18,2,32,24],[18,24,40,25],[18,25,33,3],[18,3,51,11],[18,11,50,2],[19,0,48,10],[19,10,49,1],[19,1,35,27],[19,27,41,26],[19,26,34,0],[20,1,49,7],[20,7,38,30],[20,30,34,26],[20,26,36,5],[20,5,45,1],[21,0,44,4],[21,4,37,27],[21,27,35,31],[21,31,39,6],[21,6,48,0],[22,3,47,5],[22,5,36,24],[22,24,32,28],[22,28,38,7],[22,7,51,3],[23,2,50,6],[23,6,39,29],[23,29,33,25],[23,25,37,4],[23,4,46,2]]
        JL=52
        s=1
        edgesData=[[0,34],[0,44],[0,48],[1,35],[1,45],[1,49],[2,32],[2,46],[2,50],[3,33],[3,47],[3,51],[4,37],[4,44],[4,46],[5,36],[5,45],[5,47],[6,39],[6,48],[6,50],[7,38],[7,49],[7,51],[8,42],[8,44],[8,45],[9,43],[9,46],[9,47],[10,40],[10,48],[10,49],[11,41],[11,50],[11,51],[24,32],[24,36],[24,40],[25,33],[25,37],[25,40],[26,34],[26,36],[26,41],[27,35],[27,37],[27,41],[28,32],[28,38],[28,42],[29,33],[29,39],[29,42],[30,34],[30,38],[30,43],[31,35],[31,39],[31,43]]
        edgesData.push([0,17],[0,19],[0,21],[1,17],[1,19],[1,20],[2,16],[2,18],[2,23],[3,16],[3,18],[3,22],[4,14],[4,21],[4,23],[5,15],[5,20],[5,22],[6,12],[6,21],[6,23],[7,13],[7,20],[7,22],[8,14],[8,15],[8,17],[9,14],[9,15],[9,16],[10,12],[10,13],[10,19],[11,12],[11,13],[11,18],[12,25],[12,27],[13,24],[13,26],[14,29],[14,31],[15,28],[15,30],[16,28],[16,29],[17,30],[17,31],[18,24],[18,25],[19,26],[19,27],[20,26],[20,30],[21,27],[21,31],[22,24],[22,28],[23,25],[23,29])
      break
      case 78:
        var a0 = 10-(sqrt(2)-1)/2
        var a1 = 10-(2*sqrt(2)-1)/2
        vertexData = conv([[a0,10.5,a1],[a1,a0,10.5],[10.5,a1,a0],[10.5,a0,a1],[a1,10.5,a0],[a0,a1,10.5]])
        circumR=sqrt(13-6*sqrt(2))/2
        edgeLength=1
        L=24*3
        L2=L
        faceData=[[0,24,28,4,6,30,26,2],[1,3,27,31,7,5,29,25],[8,32,34,10,11,35,33,9],[12,13,37,39,15,14,38,36],[16,40,41,17,21,45,44,20],[18,22,46,47,23,19,43,42],[0,32,8,40,16,24],[1,25,17,41,9,33],[2,26,18,42,10,34],[3,35,11,43,19,27],[4,28,20,44,12,36],[5,37,13,45,21,29],[6,38,14,46,22,30],[7,31,23,47,15,39],[0,2,34,32],[1,33,35,3],[4,36,38,6],[5,7,39,37],[8,9,41,40],[10,42,43,11],[12,44,45,13],[14,15,47,46],[16,20,28,24],[17,25,29,21],[18,26,30,22],[19,23,31,27]]
        s=1
        JL=48
      break
      case 79:
        var a0 = 10+3*(2*sqrt(2)-1)/7
        var a1 = 10+3*(3*sqrt(2)-2)/7
        var a2 = 10+sqrt(2)
        vertexData = conv([[0,0,a1],[a1,0,0],[0,a1,0],[a0,0,a0],[a0,a0,0],[0,a0,a0],[a2,a2,a2]])
        circumR=sqrt(6)
        edgeLength=dist(vertexData[6][0],vertexData[6][1],vertexData[6][2],vertexData[18][0],vertexData[18][1],vertexData[18][2])
        L=24*3
        L2=L
        faceData=[[0,6,18],[0,18,14],[0,14,22],[0,22,8],[0,8,24],[0,24,16],[0,16,20],[0,20,6],[1,7,21],[1,21,17],[1,17,25],[1,25,9],[1,9,23],[1,23,15],[1,15,19],[1,19,7],[2,6,20],[2,20,11],[2,11,21],[2,21,7],[2,7,19],[2,19,10],[2,10,18],[2,18,6],[3,8,22],[3,22,12],[3,12,23],[3,23,9],[3,9,25],[3,25,13],[3,13,24],[3,24,8],[4,10,19],[4,19,15],[4,15,23],[4,23,12],[4,12,22],[4,22,14],[4,14,18],[4,18,10],[5,11,20],[5,20,16],[5,16,24],[5,24,13],[5,13,25],[5,25,17],[5,17,21],[5,21,11]]
        JL=26
        s=1
        edgesData=[[0,6],[0,8],[0,14],[0,16],[1,7],[1,9],[1,15],[1,17],[2,6],[2,7],[2,10],[2,11],[3,8],[3,9],[3,12],[3,13],[4,10],[4,12],[4,14],[4,15],[5,11],[5,13],[5,16],[5,17]]
        edgesData.push([0,18],[0,20],[0,22],[0,24],[1,19],[1,21],[1,23],[1,25],[2,18],[2,19],[2,20],[2,21],[3,22],[3,23],[3,24],[3,25],[4,18],[4,19],[4,22],[4,23],[5,20],[5,21],[5,24],[5,25])
        edgesData.push([6,18],[6,20],[7,19],[7,21],[8,22],[8,24],[9,23],[9,25],[10,18],[10,19],[11,20],[11,21],[12,22],[12,23],[13,24],[13,25],[14,18],[14,22],[15,19],[15,23],[16,20],[16,24],[17,21],[17,25])
      break
      case 80:
        var a0 = 10+phi_1/2
        var a1 = 10+phi/2
        var a2 = 10+phi2/2
        var a3 = 10+phi
        var a4 = 10+(5+sqrt(5))/4
        vertexData = conv([[10.5,0,a4],[a4,10.5,0],[0,a4,10.5],[a1,10.5,a3],[a3,a1,10.5],[10.5,a3,a1],[a2,a0,a2],[a2,a2,a0],[a0,a2,a2]])
        circumR=sqrt(2*(17+5*sqrt(5)))/4
        edgeLength=1
        L=90
        L2=L
        faceData=[[0,2,42,26,51,35,31,47,22,38],[1,3,41,25,48,32,28,44,21,37],[2,0,36,20,45,29,33,49,24,40],[3,1,39,23,46,30,34,50,27,43],[4,5,47,31,59,19,17,57,29,45],[5,4,44,28,56,16,18,58,30,46],[6,7,50,34,54,14,12,52,32,48],[7,6,49,33,53,13,15,55,35,51],[8,9,57,17,43,27,26,42,16,56],[9,8,52,12,38,22,23,39,13,53],[10,11,55,15,37,21,20,36,14,54],[11,10,58,18,40,24,25,41,19,59],[0,38,12,14,36],[1,37,15,13,39],[2,40,18,16,42],[3,43,17,19,41],[4,45,20,21,44],[5,46,23,22,47],[6,48,25,24,49],[7,51,26,27,50],[8,56,28,32,52],[9,53,33,29,57],[10,54,34,30,58],[11,59,31,35,55]]
        s=1
        JL=60
      break
      case 81:
        var a0 = 10+5*(3-sqrt(5))/4
        var a1 = 10+5*(sqrt(5)-1)/4
        var a2 = 10+(5+sqrt(5))/4
        var a3 = 10+(5+3*sqrt(5))/4
        vertexData = conv([[a2,0,a3],[a3,a2,0],[0,a3,a2],[a0,0,a1],[a1,a0,0],[0,a1,a0]])
        circumR=sqrt(5*(5+2*sqrt(5)))/2
        L=90
        L2=L
        faceData=[[12,2,5],[12,5,8],[12,8,10],[12,10,4],[12,4,2],[13,3,4],[13,4,11],[13,11,9],[13,9,5],[13,5,3],[14,0,6],[14,6,10],[14,10,8],[14,8,7],[14,7,0],[15,1,7],[15,7,9],[15,9,11],[15,11,6],[15,6,1],[16,0,1],[16,1,8],[16,8,5],[16,5,9],[16,9,0],[17,1,0],[17,0,11],[17,11,4],[17,4,10],[17,10,1],[18,3,2],[18,2,9],[18,9,7],[18,7,8],[18,8,3],[19,2,3],[19,3,10],[19,10,6],[19,6,11],[19,11,2],[20,0,9],[20,9,2],[20,2,4],[20,4,6],[20,6,0],[21,1,6],[21,6,4],[21,4,3],[21,3,8],[21,8,1],[22,0,7],[22,7,5],[22,5,2],[22,2,11],[22,11,0],[23,1,10],[23,10,3],[23,3,5],[23,5,7],[23,7,1]]
        JL=24
        s=1
        edgesData=[[0,14],[0,16],[0,17],[0,20],[0,22],[1,15],[1,16],[1,17],[1,21],[1,23],[2,12],[2,18],[2,19],[2,20],[2,22],[3,13],[3,18],[3,19],[3,21],[3,23],[4,12],[4,13],[4,17],[4,20],[4,21],[5,12],[5,13],[5,16],[5,22],[5,23],[6,14],[6,15],[6,19],[6,20],[6,21],[7,14],[7,15],[7,18],[7,22],[7,23],[8,12],[8,14],[8,16],[8,18],[8,21],[9,13],[9,15],[9,16],[9,18],[9,20],[10,12],[10,14],[10,17],[10,19],[10,23],[11,13],[11,15],[11,17],[11,19],[11,22],[12,13],[12,18],[12,19],[12,21],[12,23],[13,18],[13,19],[13,20],[13,22],[14,15],[14,16],[14,17],[14,21],[14,23],[15,16],[15,17],[15,20],[15,22],[16,18],[16,22],[16,23],[17,19],[17,20],[17,21],[18,22],[18,23],[19,20],[19,21],[20,22],[21,23]]
        edgesData.push([0,1],[0,6],[0,7],[0,9],[0,11],[1,6],[1,7],[1,8],[1,10],[2,3],[2,4],[2,5],[2,9],[2,11],[3,4],[3,5],[3,8],[3,10],[4,6],[4,10],[4,11],[5,7],[5,8],[5,9],[6,10],[6,11],[7,8],[7,9],[8,10],[9,11])
      break      
      case 82:
        var a0 = 10+(3-sqrt(5))/4
        var a1 = 10-phi_1/2
        var a2 = 10-phi_1
        var a3 = 10+(5-sqrt(5))/4
        var a4 = 10-phi/2
        vertexData = conv([[0,10.5,a3],[10.5,a3,0],[a3,0,10.5],[10.5,a1,a2],[a1,a2,10.5],[a2,10.5,a1],[a4,a0,a0],[a0,a0,a4],[a0,a4,a0]])
        circumR=sqrt(2*(17-5*sqrt(5)))/4
        edgeLength=1
        L=90
        L2=L
        faceData=[[0,2,42,26,51,35,33,49,24,40],[1,3,39,23,46,30,28,44,21,37],[2,0,36,20,45,29,31,47,22,38],[3,1,41,25,48,32,34,50,27,43],[4,6,49,33,59,19,15,55,29,45],[6,4,44,28,54,14,18,58,32,48],[5,7,50,34,56,16,12,52,30,46],[7,5,47,31,53,13,17,57,35,51],[8,9,55,15,43,27,26,42,14,54],[9,8,52,12,40,24,25,41,13,53],[10,11,57,17,37,21,20,36,16,56],[11,10,58,18,38,22,23,39,19,59],[0,40,12,16,36],[1,37,17,13,41],[2,38,18,14,42],[3,43,15,19,39],[4,45,20,21,44],[6,48,25,24,49],[5,46,23,22,47],[7,51,26,27,50],[8,54,28,30,52],[9,53,31,29,55],[10,56,34,32,58],[11,59,33,35,57]]
        s=1
        JL=60
      break
      case 83:
        var a0 = 10-(3*sqrt(5)-5)/4
        var a1 = 10+(5-sqrt(5))/4
        var a2 = 10-5*(1+sqrt(5))/4
        var a3 = 10+5*(3+sqrt(5))/4
        vertexData = conv([[0,a1,a0],[a1,a0,0],[a0,0,a1],[0,a3,a2],[a3,a2,0],[a2,0,a3]])
        circumR=5*sqrt(5+2*sqrt(5))/2
        edgeLength=dist(vertexData[2][0],vertexData[2][1],vertexData[2][2],vertexData[6][0],vertexData[6][1],vertexData[6][2])
        L=90
        L2=L
        faceData=[[12,2,6],[12,6,8],[12,8,10],[12,10,4],[12,4,2],[13,3,4],[13,4,11],[13,11,9],[13,9,6],[13,6,3],[14,0,5],[14,5,10],[14,10,8],[14,8,7],[14,7,0],[15,1,7],[15,7,9],[15,9,11],[15,11,5],[15,5,1],[16,0,1],[16,1,8],[16,8,6],[16,6,9],[16,9,0],[18,1,0],[18,0,11],[18,11,4],[18,4,10],[18,10,1],[17,3,2],[17,2,9],[17,9,7],[17,7,8],[17,8,3],[19,2,3],[19,3,10],[19,10,5],[19,5,11],[19,11,2],[20,0,9],[20,9,2],[20,2,4],[20,4,5],[20,5,0],[21,1,5],[21,5,4],[21,4,3],[21,3,8],[21,8,1],[22,0,7],[22,7,6],[22,6,2],[22,2,11],[22,11,0],[23,1,10],[23,10,3],[23,3,6],[23,6,7],[23,7,1]]
        JL=24
        s=1/2
        edgesData=[[0,14],[0,16],[0,18],[0,20],[0,22],[1,15],[1,16],[1,18],[1,21],[1,23],[2,12],[2,17],[2,19],[2,20],[2,22],[3,13],[3,17],[3,19],[3,21],[3,23],[4,12],[4,13],[4,18],[4,20],[4,21],[5,14],[5,15],[5,19],[5,20],[5,21],[6,12],[6,13],[6,16],[6,22],[6,23],[7,14],[7,15],[7,17],[7,22],[7,23],[8,12],[8,14],[8,16],[8,17],[8,21],[9,13],[9,15],[9,16],[9,17],[9,20],[10,12],[10,14],[10,18],[10,19],[10,23],[11,13],[11,15],[11,18],[11,19],[11,22]]
        edgesData.push([0,1],[0,5],[0,7],[0,9],[0,11],[1,5],[1,7],[1,8],[1,10],[2,3],[2,4],[2,6],[2,9],[2,11],[3,4],[3,6],[3,8],[3,10],[4,5],[4,10],[4,11],[5,10],[5,11],[6,7],[6,8],[6,9],[7,8],[7,9],[8,10],[9,11])
      break
      case 84:
        var a0 = 10-(sqrt(5)-2)/2
        var a1 = 10+(3-sqrt(5))/4
        var a2 = 10+(3-sqrt(5))/2
        var a3 = 10-(3*sqrt(5)-5)/4
        var a4 = 10-phi_1
        vertexData = conv([[10.5,0,a3],[0,a3,10.5],[a3,10.5,0],[a1,10.5,a2],[10.5,a2,a1],[a2,a1,10.5],[a4,a1,a0],[a1,a0,a4],[a0,a4,a1]])
        circumR=sqrt(2*(37-15*sqrt(5)))/4
        edgeLength=1
        L=90
        L2=L
        faceData=[[0,2,16,40,48,24,20,44,36,12],[1,3,19,43,51,27,23,47,39,15],[2,0,14,38,46,22,26,50,42,18],[3,1,13,37,45,21,25,49,41,17],[4,5,21,45,53,29,28,52,44,20],[5,4,24,48,56,32,33,57,49,25],[6,7,27,51,59,35,34,58,50,26],[7,6,22,46,54,30,31,55,47,23],[8,9,30,54,38,14,12,36,52,28],[10,11,35,59,43,19,17,41,57,33],[9,8,29,53,37,13,15,39,55,31],[11,10,32,56,40,16,18,42,58,34],[0,12,14],[1,15,13],[2,18,16],[3,17,19],[4,20,24],[5,25,21],[6,26,22],[7,23,27],[8,28,29],[10,33,32],[9,31,30],[11,34,35],[36,44,52],[37,53,45],[40,56,48],[41,49,57],[38,54,46],[39,47,55],[42,50,58],[43,59,51]]
        s=1
        JL=60
      break
      case 85:
        vertexData = [[0,-0.42705098312484235,0.6909830056250527],[-0.42705098312484224,0.6909830056250524,0],[0,0.4270509831248423,-0.6909830056250524],[-0.6909830056250525,0,-0.4270509831248423],[0,-0.4270509831248422,-0.6909830056250525],[0,0.4270509831248423,0.6909830056250524],[0.6909830056250525,0,0.4270509831248423],[0.42705098312484235,-0.6909830056250524,0],[0.6909830056250527,0,-0.42705098312484235],[-0.42705098312484235,-0.6909830056250525,0],[-0.6909830056250525,0,0.4270509831248423],[0.42705098312484235,0.6909830056250525,0],[-0.20677955823875582,0,0.5413559116477511],[0.3345763534089954,-0.3345763534089955,0.3345763534089954],[0.20677955823875577,0,-0.5413559116477511],[0,-0.5413559116477511,-0.2067795582387557],[0,-0.5413559116477511,0.20677955823875577],[-0.5413559116477513,-0.20677955823875593,0],[0,0.5413559116477511,-0.20677955823875585],[0.5413559116477511,0.20677955823875585,0],[-0.3345763534089952,0.33457635340899533,-0.3345763534089953],[-0.3345763534089952,0.33457635340899533,0.33457635340899533],[-0.3345763534089953,-0.3345763534089954,0.3345763534089953],[0.20677955823875582,0,0.5413559116477511],[0.3345763534089953,0.3345763534089954,0.3345763534089953],[0.5413559116477513,-0.20677955823875566,0],[-0.5413559116477513,0.20677955823875566,0],[-0.20677955823875566,0,-0.5413559116477513],[-0.3345763534089954,-0.33457635340899533,-0.33457635340899533],[0.3345763534089952,-0.33457635340899533,-0.3345763534089953],[0.3345763534089952,0.3345763534089954,-0.3345763534089954],[0,0.5413559116477511,0.2067795582387557]]
        circumR=sqrt(0.6598300562505259)
        edgesData=[[1,0],[10,2],[10,4],[10,6],[10,7],[11,0],[11,10],[11,3],[11,4],[11,7],[12,11],[12,3],[12,7],[13,10],[13,11],[13,4],[14,1],[14,6],[14,9],[15,10],[15,2],[15,6],[16,3],[16,5],[16,8],[17,2],[17,5],[17,7],[18,10],[18,4],[18,6],[19,0],[19,1],[19,4],[20,5],[20,8],[20,9],[21,2],[21,6],[21,9],[22,1],[22,4],[22,6],[23,1],[23,8],[23,9],[24,10],[24,2],[24,7],[25,2],[25,5],[25,9],[26,0],[26,11],[26,4],[27,10],[27,11],[27,7],[28,0],[28,1],[28,8],[29,0],[29,11],[29,3],[3,0],[30,3],[30,5],[30,7],[31,0],[31,3],[31,8],[4,0],[4,1],[5,2],[5,3],[6,1],[6,2],[6,4],[7,2],[7,3],[7,5],[8,0],[8,1],[8,3],[8,5],[9,1],[9,2],[9,5],[9,6],[9,8]]
        L=90
        L2=L
        faceData=[[10,11,13],[0,1,19],[6,10,18],[0,11,26],[1,6,22],[6,9,21],[5,7,17],[6,10,15],[5,9,25],[7,10,24],[1,9,23],[0,3,31],[5,9,20],[0,1,28],[3,5,16],[3,11,12],[2,10,24],[3,5,30],[10,11,27],[2,5,17],[2,6,21],[1,8,23],[2,5,25],[1,6,14],[5,8,20],[7,11,12],[0,8,31],[5,7,30],[0,11,29],[5,8,16],[3,7,12],[0,4,26],[7,10,27],[0,3,29],[4,10,13],[2,9,21],[1,4,22],[2,10,15],[1,9,14],[4,10,18],[4,6,22],[8,9,23],[0,4,19],[6,9,14],[0,8,28],[3,8,16],[2,7,17],[8,9,20],[3,7,30],[2,9,25],[4,11,26],[3,8,31],[1,4,19],[3,11,29],[1,8,28],[4,11,13],[2,6,15],[7,11,27],[4,6,18],[2,7,24]]
        s=1
        JL=32
      break
      case 86:
        vertexData = [[0.5,0,0.9270509831248422],[0,0.9270509831248422,0.5],[0.9270509831248422,0.5,0],[-0.5,0,0.9270509831248422],[0,-0.9270509831248422,0.5],[-0.9270509831248422,0.5,0],[0.5,0,-0.9270509831248422],[0,0.9270509831248422,-0.5],[0.9270509831248422,-0.5,0],[-0.5,0,-0.9270509831248422],[0,-0.9270509831248422,-0.5],[-0.9270509831248422,-0.5,0],[1,0.3090169943749474,0.11803398874989485],[0.3090169943749474,0.11803398874989485,1],[0.11803398874989485,1,0.3090169943749474],[-1,0.3090169943749474,0.11803398874989485],[-0.3090169943749474,0.11803398874989485,1],[-0.11803398874989485,1,0.3090169943749474],[1,-0.3090169943749474,0.11803398874989485],[0.3090169943749474,-0.11803398874989485,1],[0.11803398874989485,-1,0.3090169943749474],[-1,-0.3090169943749474,0.11803398874989485],[-0.3090169943749474,-0.11803398874989485,1],[-0.11803398874989485,-1,0.3090169943749474],[1,0.3090169943749474,-0.11803398874989485],[0.3090169943749474,0.11803398874989485,-1],[0.11803398874989485,1,-0.3090169943749474],[-1,0.3090169943749474,-0.11803398874989485],[-0.3090169943749474,0.11803398874989485,-1],[-0.11803398874989485,1,-0.3090169943749474],[1,-0.3090169943749474,-0.11803398874989485],[0.3090169943749474,-0.11803398874989485,-1],[0.11803398874989485,-1,-0.3090169943749474],[-1,-0.3090169943749474,-0.11803398874989485],[-0.3090169943749474,-0.11803398874989485,-1],[-0.11803398874989485,-1,-0.3090169943749474],[0.6909830056250525,0.5,phi_1],[0.5,phi_1,0.6909830056250525],[phi_1,0.6909830056250525,0.5],[-0.6909830056250525,0.5,phi_1],[-0.5,phi_1,0.6909830056250525],[-phi_1,0.6909830056250525,0.5],[0.6909830056250525,-0.5,phi_1],[0.5,-phi_1,0.6909830056250525],[phi_1,-0.6909830056250525,0.5],[-0.6909830056250525,-0.5,phi_1],[-0.5,-phi_1,0.6909830056250525],[-phi_1,-0.6909830056250525,0.5],[0.6909830056250525,0.5,-phi_1],[0.5,phi_1,-0.6909830056250525],[phi_1,0.6909830056250525,-0.5],[-0.6909830056250525,0.5,-phi_1],[-0.5,phi_1,-0.6909830056250525],[-phi_1,0.6909830056250525,-0.5],[0.6909830056250525,-0.5,-phi_1],[0.5,-phi_1,-0.6909830056250525],[phi_1,-0.6909830056250525,-0.5],[-0.6909830056250525,-0.5,-phi_1],[-0.5,-phi_1,-0.6909830056250525],[-phi_1,-0.6909830056250525,-0.5]]
        circumR=sqrt(10-9/phi)/2
        edgeLength=1
        L=90
        L2=L
        faceData=[[32,44,56,20,8],[59,47,35,11,23],[15,3,21,39,45],[1,13,40,37,16],[50,38,26,2,14],[18,0,12,42,36],[4,22,43,46,19],[27,9,33,51,57],[17,53,41,29,5],[25,7,28,49,52],[34,10,31,58,55],[30,6,24,54,48],[46,43,30,6,9,33],[41,53,34,10,4,22],[0,3,15,52,49,12],[13,40,27,57,32,44],[4,19,38,50,31,10],[48,30,43,22,41,29],[26,38,19,46,33,51],[1,13,44,56,25,7],[8,20,45,39,14,2],[16,1,7,28,59,47],[29,5,11,35,54,48],[37,16,47,35,54,24],[45,15,52,25,56,20],[50,14,39,21,58,31],[32,8,2,26,51,57],[37,40,27,9,6,24],[42,36,17,5,11,23],[21,3,0,18,55,58],[59,23,42,12,49,28],[18,36,17,53,34,55]]
        s=1
        JL=60
      break
      case 87:
        vertexData = [[0.4950402498354017,-0.8009919500329199,0],[-0.4950402498354016,-0.8009919500329197,0],[-0.8009919500329197,0,0.49504024983540174],[0,0.49504024983540174,0.8009919500329198],[0.4950402498354016,0.8009919500329197,0],[0.8009919500329197,0,0.49504024983540174],[0,-0.49504024983540174,0.8009919500329198],[-0.8009919500329196,0,-0.4950402498354018],[-0.49504024983540185,0.8009919500329199,0],[0,0.49504024983540174,-0.8009919500329197],[0,-0.49504024983540174,-0.8009919500329197],[0.8009919500329196,0,-0.4950402498354018],[0,-2.427050983124842,-0.9270509831248415],[-2.427050983124843,-0.9270509831248426,0],[0,2.4270509831248424,0.9270509831248422],[-1.5,-1.5,1.5],[2.427050983124842,-0.9270509831248421,0],[1.5,1.5,1.5],[-1.5,1.5,1.5],[2.427050983124843,0.9270509831248425,0],[0.9270509831248425,0,2.427050983124843],[-2.4270509831248415,0.9270509831248421,0],[-0.9270509831248427,0,-2.4270509831248432],[1.5,-1.5,1.5],[-1.5,-1.5,-1.5],[-1.5,1.5,-1.5],[0.9270509831248427,0,-2.4270509831248432],[0,2.427050983124842,-0.9270509831248415],[-0.927050983124843,0,2.4270509831248432],[0,-2.427050983124843,0.9270509831248424],[1.5,-1.5,-1.5],[1.5,1.5,-1.5]]
        circumR=3*sqrt(3)/2
        edgesData=[[12,11],[12,6],[12,7],[13,10],[13,6],[13,8],[14,2],[14,5],[14,9],[15,0],[15,3],[15,7],[16,10],[16,13],[16,4],[16,6],[17,11],[17,12],[17,13],[17,6],[17,8],[18,12],[18,16],[18,4],[18,6],[18,7],[19,0],[19,15],[19,3],[19,9],[20,0],[20,2],[20,4],[21,1],[21,19],[21,3],[21,9],[22,1],[22,11],[22,17],[22,8],[23,1],[23,11],[23,21],[23,22],[23,3],[24,0],[24,14],[24,19],[24,2],[24,20],[24,9],[25,10],[25,16],[25,2],[25,20],[25,4],[26,0],[26,15],[26,18],[26,20],[26,4],[26,7],[27,11],[27,12],[27,15],[27,23],[27,3],[27,7],[28,1],[28,22],[28,5],[28,8],[29,10],[29,14],[29,2],[29,25],[29,5],[30,1],[30,14],[30,21],[30,28],[30,5],[30,9],[31,10],[31,13],[31,28],[31,29],[31,5],[31,8]]
        L=90
        L2=L
        faceData=[[5,14,29],[3,19,21],[4,20,26],[2,14,29],[6,13,16],[8,22,28],[11,12,27],[9,19,21],[0,20,26],[7,12,27],[10,13,16],[1,22,28],[5,14,30],[3,15,19],[4,20,25],[2,14,24],[3,21,23],[8,28,31],[5,29,31],[6,16,18],[0,20,24],[2,25,29],[6,13,17],[1,28,30],[11,23,27],[9,19,24],[4,18,26],[7,15,27],[9,21,30],[8,17,22],[11,12,17],[10,16,25],[0,15,26],[7,12,18],[10,13,31],[1,22,23],[5,28,31],[3,23,27],[4,16,18],[2,20,25],[3,15,27],[8,13,17],[5,28,30],[6,12,17],[0,15,19],[2,20,24],[6,12,18],[1,21,23],[11,17,22],[9,14,30],[4,16,25],[7,18,26],[9,14,24],[8,13,31],[11,22,23],[10,29,31],[0,19,24],[7,15,26],[10,25,29],[1,21,30]]
        s=1
        JL=32
      break
      case 88:
        var a0 = (3-sqrt(5))/4
        var a1 = sqrt(5)/2
        var a2 = phi/2
        vertexData = [[-a0,0.5,1],[-a0,-0.5,1],[0.5,-1,a0],[-0.5,1,a0],[-0.5,-1,a0],[0.5,-1,-a0],[-1,a0,0.5],[1,-a0,0.5],[-1,-a0,0.5],[1,-a0,-0.5],[a1,0,a0],[a1,0,-a0],[phi_1,-a2,0.5],[phi_1,-a2,-0.5],[a2,-0.5,phi_1],[a2,-0.5,-phi_1],[0,a0,a1],[-phi_1,-a2,0.5],[0,a0,-a1],[-0.5,1,-a0],[-phi_1,a2,-0.5],[0,-a0,a1],[0,-a0,-a1],[-0.5,-1,-a0],[-phi_1,-a2,-0.5],[a0,a1,0],[1,a0,0.5,0],[a2,0.5,phi_1],[-a0,a1,0],[a0,-a1,0],[a2,0.5,-phi_1],[-a0,-a1,0],[1,a0,-0.5,0],[-a2,0.5,phi_1],[-a2,-0.5,phi_1],[-a1,0,a0],[-1,a0,-0.5],[-a2,0.5,-phi_1],[-a1,0,-a0],[-1,-a0,-0.5],[-a2,-0.5,-phi_1],[a0,0.5,1],[0.5,phi_1,a2],[-0.5,phi_1,a2],[a0,-0.5,1],[0.5,-phi_1,a2],[a0,0.5,-1],[0.5,phi_1,-a2],[0.5,-phi_1,-a2],[-a0,0.5,-1],[-0.5,-phi_1,a2],[a0,-0.5,-1],[-0.5,phi_1,-a2],[-a0,-0.5,-1],[-0.5,-phi_1,-a2],[0.5,1,a0],[phi_1,a2,0.5],[0.5,1,-a0],[phi_1,a2,-0.5],[-phi_1,a2,0.5]]
        circumR=sqrt(2*(17-3*sqrt(5)))/4
        edgeLength=1
        L=120
        L2=L
        faceData=[[15,2,7,9,5,14,11,13,12,10],[14,21,42,7,44,41,26,45,16,27],[11,27,57,32,26,55,30,10,56,58],[45,50,31,12,1,4,2,44,17,29],[22,15,30,18,48,32,46,51,9,47],[53,23,5,51,24,29,48,54,31,13],[39,8,4,40,35,17,24,38,34,23],[6,0,1,8,43,21,34,33,16,50],[0,3,55,41,59,25,42,43,28,56],[46,57,19,49,58,28,52,47,25,20],[18,37,40,22,52,39,53,49,36,54],[3,6,36,19,33,38,20,59,35,37],[56,58,49,36,6,0],[14,27,57,46,51,5],[41,26,32,46,20,59],[43,42,7,2,4,8],[3,6,50,45,26,55],[32,57,19,36,54,48],[5,9,47,52,39,23],[34,33,19,49,53,23],[37,40,4,1,0,3],[44,41,55,30,15,2],[44,17,24,51,9,7],[33,16,45,29,24,38],[13,31,50,16,27,11],[10,56,28,52,22,15],[35,17,29,48,18,37],[31,12,10,30,18,54],[1,8,39,53,13,12],[25,42,21,34,38,20],[14,21,43,28,58,11],[22,40,35,59,25,47]]
        s=1
        JL=60
      break
      case 89:
        var a0 = 3/4*(sqrt(5)-1)
        var a1 = 3/4*(3-sqrt(5))
        var a2 = (5-sqrt(5))/4
        var a3 = (5+sqrt(5))/4
        var a4 = sqrt(5)/2
        vertexData = [[a0,-a1,0],[a1,0,a0],[a0,a1,0],[0,-a0,a1],[a1,0,-a0],[0,-a0,-a1],[-a0,-a1,0],[-a1,0,a0],[0,a0,a1],[0,a0,-a1],[-a1,0,-a0],[-a0,a1,0],[-a2,a3,0],[a3,0,-a2],[a2,a3,0],[0,-a2,a3],[0,a2,a3],[0,a2,-a3],[0,-a2,-a3],[-a3,0,-a2],[-a3,0,a2],[a3,0,a2],[a2,-a3,0],[-a4,-a4,a4],[a4,-a4,a4],[a4,a4,-a4],[-a4,-a4,-a4],[a4,-a4,-a4],[-a2,-a3,0],[-a4,a4,a4],[a4,a4,a4],[-a4,a4,-a4]]
        circumR=sqrt(15)/2
        edgesData=[[12,10],[12,11],[12,2],[12,7],[12,8],[12,9],[13,0],[13,1],[13,2],[13,4],[13,5],[13,9],[14,1],[14,11],[14,2],[14,4],[14,8],[14,9],[15,0],[15,1],[15,3],[15,6],[15,7],[15,8],[16,1],[16,11],[16,2],[16,3],[16,7],[16,8],[17,10],[17,11],[17,2],[17,4],[17,5],[17,9],[18,0],[18,10],[18,4],[18,5],[18,6],[18,9],[19,10],[19,11],[19,5],[19,6],[19,7],[19,9],[20,10],[20,11],[20,3],[20,6],[20,7],[20,8],[21,0],[21,1],[21,2],[21,3],[21,4],[21,8],[22,0],[22,1],[22,3],[22,4],[22,5],[22,6],[23,1],[23,11],[23,3],[23,5],[23,6],[23,7],[24,0],[24,1],[24,2],[24,3],[24,5],[24,7],[25,0],[25,10],[25,2],[25,4],[25,8],[25,9],[26,10],[26,11],[26,3],[26,4],[26,5],[26,6],[27,0],[27,10],[27,2],[27,3],[27,4],[27,5],[28,0],[28,10],[28,3],[28,5],[28,6],[28,7],[29,1],[29,11],[29,6],[29,7],[29,8],[29,9],[30,0],[30,1],[30,2],[30,7],[30,8],[30,9],[31,10],[31,11],[31,4],[31,6],[31,8],[31,9]]
        L=120
        L2=L
        faceData=[[7,12,8,20],[3,20,7,28],[0,15,3,21],[8,16,11,20],[3,15,6,20],[0,13,5,18],[7,12,11,16],[0,15,1,22],[6,15,7,28],[0,18,4,22],[0,25,2,27],[0,24,2,30],[0,27,3,28],[0,24,5,28],[0,13,1,30],[0,21,4,25],[1,23,7,24],[3,22,6,26],[4,26,10,27],[9,17,11,19],[9,14,11,29],[1,29,7,30],[4,25,10,31],[5,18,6,19],[5,22,6,23],[8,29,9,31],[1,14,2,16],[1,13,2,24],[8,25,9,30],[3,23,5,26],[2,21,4,27],[3,24,5,27],[2,14,4,17],[7,19,11,23],[6,19,7,29],[6,26,11,31],[10,12,11,17],[10,20,11,26],[6,23,11,29],[6,18,10,28],[6,20,10,31],[1,14,8,21],[1,15,8,29],[7,15,8,30],[1,21,3,22],[1,16,3,23],[4,13,9,14],[4,18,9,31],[4,17,5,26],[9,12,10,19],[3,16,7,24],[4,13,5,22],[9,18,10,25],[5,19,10,28],[5,17,10,27],[2,16,8,21],[2,12,8,25],[2,13,9,17],[2,12,9,30],[8,14,11,31]]
        s=1
        JL=vertexData.length
      break
      case 90:
        var a0 = (sqrt(5)-2)/2
        var a1 = (3-sqrt(5))/4
        var a2 = phi_1/2
        var a4 = (5-sqrt(5))/4
        vertexData = [[a1,0,a4],[0,a4,a1],[a4,a1,0],[-a1,0,a4],[0,a4,-a1],[-a4,a1,0],[a1,0,-a4],[0,-a4,a1],[a4,-a1,0],[-a1,0,-a4],[0,-a4,-a1],[-a4,-a1,0],[0.5,a0,0.5],[a0,0.5,0.5],[0.5,0.5,a0],[-0.5,a0,0.5],[-a0,0.5,0.5],[-0.5,0.5,a0],[0.5,-a0,0.5],[a0,-0.5,0.5],[0.5,-0.5,a0],[-0.5,-a0,0.5],[-a0,-0.5,0.5],[-0.5,-0.5,a0],[0.5,a0,-0.5],[a0,0.5,-0.5],[0.5,0.5,-a0],[-0.5,a0,-0.5],[-a0,0.5,-0.5],[-0.5,0.5,-a0],[0.5,-a0,-0.5],[a0,-0.5,-0.5],[0.5,-0.5,-a0],[-0.5,-a0,-0.5],[-a0,-0.5,-0.5],[-0.5,-0.5,-a0],[a1,phi_1,a2],[phi_1,a2,a1],[-a2,a1,phi_1],[-a1,phi_1,a2],[-phi_1,a2,a1],[a2,-a1,phi_1],[a1,-phi_1,a2],[phi_1,-a2,a1],[-a2,-a1,phi_1],[-a1,-phi_1,a2],[-phi_1,-a2,a1],[a2,a1,-phi_1],[a1,phi_1,-a2],[phi_1,a2,-a1],[-a2,a1,-phi_1],[-a1,phi_1,-a2],[-phi_1,a2,-a1],[a2,-a1,-phi_1],[a1,-phi_1,-a2],[phi_1,-a2,-a1],[-a2,-a1,-phi_1],[-a1,-phi_1,-a2],[-phi_1,-a2,-a1],[a2,a1,phi_1]]
        circumR=sqrt(11-4*sqrt(5))/2
        edgeLength=1
        L=120
        L2=L
        faceData=[[22,16,28,34],[19,13,25,31],[3,37,53,35],[58,6,14,38],[13,43,57,5],[52,34,8,36],[23,20,14,17],[35,32,26,29],[0,40,56,32],[59,17,9,55],[28,58,42,2],[19,37,51,11],[45,33,4,59],[56,7,12,48],[45,5,25,55],[8,48,40,22],[3,43,47,29],[52,6,20,44],[16,46,54,2],[10,44,36,24],[1,47,57,21],[21,18,30,33],[15,12,24,27],[46,0,26,50],[23,41,49,9],[39,41,10,27],[54,18,1,50],[38,4,30,42],[15,7,53,51],[48,12,15,51,37,3,29,26,0,40],[8,22,16,2,42,38,14,20,44,36],[57,21,18,54,46,0,32,35,3,43],[5,13,19,11,39,41,23,17,59,45],[6,14,17,9,49,39,27,24,36,52],[9,23,20,6,58,42,30,33,45,55],[31,19,37,53,7,12,24,10,41,49],[16,28,58,38,4,33,21,1,50,46],[30,18,1,47,43,13,25,55,59,4],[47,29,35,53,51,11,31,25,5,57],[27,15,7,56,40,22,34,52,44,10],[31,49,39,11],[32,26,50,54,2,28,34,8,48,56]]
        s=1
        JL=60
      break
      case 91:
        var a0 = (3-sqrt(5))/2
        var a2 = (5-sqrt(5))/4
        var a3 = sqrt(5)/2
        var a4 = (5+sqrt(5))/4
        var a5 = sqrt(5)
        vertexData = [[-a5,0,0],[a5,0,0],[a3,-a4,a2],[-a3,a4,-a2],[-a2,-a3,a4],[a2,a3,-a4],[0,0,a5],[0,0,-a5],[-a3,-a4,a2],[a3,a4,-a2],[a2,-a3,-a4],[-a2,a3,a4],[-a4,a2,a3],[a4,-a2,-a3],[-a2,-a3,-a4],[a2,a3,a4],[a3,a4,a2],[-a3,-a4,-a2],[a2,-a3,a4],[a4,-a2,a3],[-a4,a2,-a3],[0,-a5,0],[0,a5,0],[-a3,a4,a2],[a3,-a4,-a2],[-a4,-a2,a3],[a4,a2,-a3],[a4,a2,a3],[-a4,-a2,-a3],[0,phi_1,a0],[a0,0,phi_1],[0,-phi_1,a0],[-a0,0,phi_1],[0,phi_1,-a0],[0,-phi_1,-a0],[phi_1,-a0,0],[-phi_1,a0,0],[phi_1,a0,0],[-a0,0,-phi_1],[-phi_1,-a0,0],[-a2,a3,-a4],[a0,0,-phi_1]]
        circumR=sqrt(5)
        edgesData=[[29,11],[29,13],[29,15],[29,16],[29,2],[29,22],[29,23],[29,28],[29,7],[29,8],[30,0],[30,10],[30,15],[30,17],[30,18],[30,19],[30,27],[30,3],[30,5],[30,6],[31,16],[31,18],[31,2],[31,20],[31,21],[31,23],[31,26],[31,4],[31,7],[31,8],[32,1],[32,11],[32,12],[32,14],[32,24],[32,25],[32,4],[32,6],[32,9],[33,17],[33,19],[33,22],[33,24],[33,25],[33,3],[33,5],[33,6],[33,9],[34,10],[34,12],[34,14],[34,17],[34,21],[34,24],[34,27],[34,3],[34,6],[34,9],[35,1],[35,11],[35,13],[35,19],[35,2],[35,22],[35,24],[35,25],[35,28],[36,0],[36,10],[36,12],[36,18],[36,20],[36,21],[36,23],[36,26],[36,27],[36,3],[37,1],[37,12],[37,14],[37,16],[37,20],[37,21],[37,26],[37,27],[37,4],[37,9],[38,1],[38,11],[38,14],[38,16],[38,2],[38,20],[38,28],[38,4],[38,7],[39,0],[39,13],[39,15],[39,17],[39,19],[39,22],[39,25],[39,28],[39,5],[39,8],[40,32],[40,33],[40,35],[40,38],[41,0],[41,10],[41,13],[41,15],[41,18],[41,23],[41,26],[41,5],[41,7],[41,8]]
        L=120
        L2=L
        faceData=[[8,29,23,31],[20,36,26,37],[10,30,18,41],[2,29,16,31],[12,36,27,37],[4,32,14,38],[3,33,17,34],[13,35,28,39],[5,30,15,41],[9,33,24,34],[19,35,25,39],[11,32,40,38],[13,29,22,35],[1,32,4,37],[3,30,6,33],[22,29,28,39],[0,30,18,36],[6,32,9,33],[21,31,26,37],[1,32,11,35],[6,30,17,34],[20,31,21,36],[0,30,15,39],[6,32,24,34],[19,33,22,35],[1,37,14,38],[7,29,23,41],[22,33,25,39],[0,36,10,41],[7,29,16,38],[21,34,27,37],[1,35,40,38],[7,31,8,41],[12,34,21,36],[0,39,5,41],[2,31,7,38],[5,30,19,33],[2,29,11,35],[3,30,27,36],[25,32,40,33],[8,29,15,39],[24,32,25,35],[10,30,27,34],[4,31,16,37],[17,30,19,39],[12,32,14,34],[18,31,23,36],[16,37,20,38],[13,29,15,41],[24,33,40,35],[23,36,26,41],[11,29,28,38],[5,33,17,39],[2,35,28,38],[18,31,26,41],[9,34,14,37],[8,39,13,41],[4,31,20,38],[3,34,10,36],[9,32,12,37]]
        s=1
        JL=vertexData.length
      break
      case 92:
        var a0 = 10+(3 - sqrt(5)) / 4
        var a1 = 10+phi_1/2
        var a2 = 10+phi/2
        var a3 = 10+sqrt(5)/2
        var a4 = 10+phi2/2
        vertexData = conv([[a0,0,a4],[a4,a0,0],[0,a4,a0],[10.5,10.5,a3],[a3,10.5,10.5],[10.5,a3,10.5],[a1,a2,11],[11,a1,a2],[a2,11,a1]])
        circumR=sqrt(7)/2
        edgeLength=1
        L=120
        L2=L
        faceData=[[0,42,10,55,5,44],[0,46,4,53,8,40],[2,36,8,57,6,50],[2,48,7,59,10,38],[15,13,53,20,22,55],[15,19,49,33,29,45],[17,13,47,31,35,51],[17,19,59,26,24,57],[30,46,12,16,50,34],[30,42,26,27,43,31],[32,48,18,14,44,28],[32,36,20,21,37,33],[39,23,22,38,34,35],[39,11,58,7,49,3],[41,25,24,40,28,29],[41,9,52,4,47,1],[54,11,43,1,45,5],[54,23,21,52,12,14],[56,9,37,3,51,6],[56,25,27,58,18,16],[0,40,24,26,42],[1,43,27,25,41],[2,38,22,20,36],[3,37,21,23,39],[4,46,30,31,47],[5,45,29,28,44],[6,51,35,34,50],[7,48,32,33,49],[8,53,13,17,57],[9,56,16,12,52],[10,59,19,15,55],[11,54,14,18,58],[0,44,14,12,46],[1,47,13,15,45],[2,50,16,18,48],[3,49,19,17,51],[4,52,21,20,53],[5,55,22,23,54],[6,57,24,25,56],[7,58,27,26,59],[8,36,32,28,40],[9,41,29,33,37],[10,42,30,34,38],[11,39,35,31,43]]
        s=1
        JL=vertexData.length
      break
      case 93:
        var a0 = 10+phi_1
        var a1 = 10+3*(7-sqrt(5))/22
        var a2 = 10+3*(3*sqrt(5)-1)/22
        var a3 = 10+3*(1+3*sqrt(5))/22
        var a4 = 10+3*(7+sqrt(5))/22
        var a5 = 10+phi
        vertexData = conv([[0,a0,a5],[a5,0,a0],[a0,a5,0],[a2,0,a4],[a4,a2,0],[0,a4,a2],[a1,0,a3],[a3,a1,0],[0,a3,a1],[11,11,11]])
        circumR=sqrt(3)
        edgesData=[[0,16],[0,18],[0,22],[1,16],[1,18],[1,23],[2,17],[2,19],[2,20],[3,17],[3,19],[3,21],[4,13],[4,20],[4,22],[5,12],[5,21],[5,23],[6,15],[6,20],[6,22],[7,14],[7,21],[7,23],[8,12],[8,13],[8,18],[9,12],[9,13],[9,19],[10,14],[10,15],[10,16],[11,14],[11,15],[11,17],[12,40],[12,42],[13,41],[13,43],[14,36],[14,38],[15,37],[15,39],[16,38],[16,39],[17,36],[17,37],[18,42],[18,43],[19,40],[19,41],[20,37],[20,41],[21,36],[21,40],[22,39],[22,43],[23,38],[23,42]]
        edgesData.push([0,24],[0,26],[0,32],[1,25],[1,27],[1,33],[2,24],[2,26],[2,34],[3,25],[3,27],[3,35],[4,24],[4,28],[4,29],[5,25],[5,28],[5,29],[6,26],[6,30],[6,31],[7,27],[7,30],[7,31],[8,28],[8,32],[8,33],[9,29],[9,34],[9,35],[10,30],[10,32],[10,33],[11,31],[11,34],[11,35],[24,36],[24,38],[25,37],[25,39],[26,40],[26,42],[27,41],[27,43],[28,36],[28,37],[29,38],[29,39],[30,40],[30,41],[31,42],[31,43],[32,36],[32,40],[33,37],[33,41],[34,38],[34,42],[35,39],[35,43])
        L=120
        L2=L
        faceData=[[12,5,28,8],[12,8,32,40],[12,40,26,42],[12,42,34,9],[12,9,29,5],[13,4,29,9],[13,9,35,43],[13,43,27,41],[13,41,33,8],[13,8,28,4],[14,7,31,11],[14,11,34,38],[14,38,24,36],[14,36,32,10],[14,10,30,7],[15,6,30,10],[15,10,33,37],[15,37,25,39],[15,39,35,11],[15,11,31,6],[16,1,33,10],[16,10,32,0],[16,0,24,38],[16,38,29,39],[16,39,25,1],[17,2,34,11],[17,11,35,3],[17,3,25,37],[17,37,28,36],[17,36,24,2],[18,0,32,8],[18,8,33,1],[18,1,27,43],[18,43,31,42],[18,42,26,0],[19,2,26,40],[19,40,30,41],[19,41,27,3],[19,3,35,9],[19,9,34,2],[20,2,24,4],[20,4,28,37],[20,37,33,41],[20,41,30,6],[20,6,26,2],[21,3,27,7],[21,7,30,40],[21,40,32,36],[21,36,28,5],[21,5,25,3],[22,0,26,6],[22,6,31,43],[22,43,35,39],[22,39,29,4],[22,4,24,0],[23,1,25,5],[23,5,29,38],[23,38,34,42],[23,42,31,7],[23,7,27,1]]
        s=1
        JL=vertexData.length
      break
      case 94:
        var a0 = 10+phi_1/2
        var a1 = 10+sqrt(5)/2
        var a2 = 10+phi2/2
        var a3 = 10+phi
        var a4 = 10
        vertexData = conv([[10.5,a0,a3],[a3,10.5,a0],[a0,a3,10.5],[0,a1,a2],[a2,0,a1],[a1,a2,0],[11,10.5,a2],[a2,11,10.5],[10.5,a2,11]])
        circumR=sqrt(2*(17+3*sqrt(5)))/4
        edgeLength=1
        L=120
        L2=L
        faceData=[[0,4,30,14,51,59,55,47,10,28],[0,38,46,47,39,1,25,21,20,24],[2,26,22,23,27,3,37,45,44,36],[2,28,8,45,53,57,49,12,30,6],[5,1,29,11,46,54,58,50,15,31],[5,43,51,50,42,4,24,16,17,25],[7,27,19,18,26,6,40,48,49,41],[7,31,13,48,56,52,44,9,29,3],[33,11,9,32,16,56,40,42,58,18],[33,19,59,43,41,57,17,32,8,10],[34,13,15,35,22,54,38,36,52,20],[34,21,53,37,39,55,23,35,14,12],[24,20,52,56,16],[25,17,57,53,21],[26,18,58,54,22],[27,23,55,59,19],[28,2,36,38,0],[29,1,39,37,3],[30,4,42,40,6],[31,7,41,43,5],[32,9,44,45,8],[33,10,47,46,11],[34,12,49,48,13],[35,15,50,51,14],[24,4,0],[25,1,5],[26,2,6],[27,7,3],[28,10,8],[29,9,11],[30,12,14],[31,15,13],[32,17,16],[33,18,19],[34,20,21],[35,23,22],[36,44,52],[37,53,45],[38,54,46],[39,47,55],[40,56,48],[41,49,57],[42,50,58],[43,59,51]]
        s=1
        JL=vertexData.length
      break
      case 95:
        var a0 = 10+3*(9*sqrt(5)-5)/76
        var a1 = 10+3*(15-sqrt(5))/44
        var a2 = 10+3*(10+sqrt(5))/38
        var a3 = 10+3*(5+7*sqrt(5))/44
        var a4 = 10+3*(15+11*sqrt(5))/76
        var a5 = 10+3*phi/2
        var a6 = 10+3*phi2/2
        vertexData = conv([[a5,0,a6],[a6,a5,0],[0,a6,a5],[0,a0,a4],[a4,0,a0],[a0,a4,0],[a1,0,a3],[a3,a1,0],[0,a3,a1],[a2,a2,a2]])
        circumR=3*sqrt(5+2*sqrt(5))/2
        edgeLength=dist(vertexData[0][0],vertexData[0][1],vertexData[0][2],vertexData[26][0],vertexData[26][1],vertexData[26][2])
        edgesData=[[0,17],[0,20],[0,21],[0,40],[0,42],[1,16],[1,20],[1,21],[1,41],[1,43],[2,19],[2,22],[2,23],[2,36],[2,38],[3,18],[3,22],[3,23],[3,37],[3,39],[4,12],[4,13],[4,22],[4,38],[4,39],[5,14],[5,15],[5,23],[5,36],[5,37],[6,12],[6,13],[6,20],[6,42],[6,43],[7,14],[7,15],[7,21],[7,40],[7,41],[8,14],[8,16],[8,18],[8,37],[8,41],[9,15],[9,17],[9,19],[9,36],[9,40],[10,12],[10,16],[10,18],[10,39],[10,43],[11,13],[11,17],[11,19],[11,38],[11,42]]
        edgesData.push([0,26],[0,28],[0,29],[0,32],[0,34],[1,27],[1,28],[1,29],[1,33],[1,35],[2,24],[2,30],[2,31],[2,32],[2,34],[3,25],[3,30],[3,31],[3,33],[3,35],[4,24],[4,25],[4,29],[4,32],[4,33],[5,24],[5,25],[5,28],[5,34],[5,35],[6,26],[6,27],[6,31],[6,32],[6,33],[7,26],[7,27],[7,30],[7,34],[7,35],[8,24],[8,26],[8,28],[8,30],[8,33],[9,25],[9,27],[9,28],[9,30],[9,32],[10,24],[10,26],[10,29],[10,31],[10,35],[11,25],[11,27],[11,29],[11,31],[11,34])
        L=120
        L2=L
        faceData=[[24,2,38,4],[24,4,12,10],[24,10,16,8],[24,8,14,5],[24,5,36,2],[25,4,39,3],[25,3,37,5],[25,5,15,9],[25,9,17,11],[25,11,13,4],[26,0,40,7],[26,7,14,8],[26,8,18,10],[26,10,12,6],[26,6,42,0],[27,1,43,6],[27,6,13,11],[27,11,19,9],[27,9,15,7],[27,7,41,1],[28,0,17,9],[28,9,36,5],[28,5,37,8],[28,8,16,1],[28,1,20,0],[29,0,21,1],[29,1,16,10],[29,10,39,4],[29,4,38,11],[29,11,17,0],[30,2,22,3],[30,3,18,8],[30,8,41,7],[30,7,40,9],[30,9,19,2],[31,2,19,11],[31,11,42,6],[31,6,43,10],[31,10,18,3],[31,3,23,2],[32,0,20,6],[32,6,12,4],[32,4,22,2],[32,2,36,9],[32,9,40,0],[33,1,41,8],[33,8,37,3],[33,3,22,4],[33,4,13,6],[33,6,20,1],[34,0,42,11],[34,11,38,2],[34,2,23,5],[34,5,14,7],[34,7,21,0],[35,1,21,7],[35,7,15,5],[35,5,23,3],[35,3,39,10],[35,10,43,1]]
        s=1
        JL=vertexData.length
      break
      case 96:
        var a0 = 10+phi/2
        var a1 = 10+sqrt(5)/2
        var a2 = 10-phi_2/2
        var a3 = 10+phi_1
        vertexData = conv([[9.5,a0,a3],[a3,9.5,a0],[a0,a3,9.5],[0,a1,a2],[a2,0,a1],[a1,a2,0],[9,9.5,a2],[a2,9,9.5],[9.5,a2,9]])
        circumR=sqrt(2*(17-3*sqrt(5)))/4
        edgeLength=1
        L=120
        L2=L
        faceData=[[0,4,30,14,51,59,55,47,10,28],[0,38,46,47,39,1,25,21,20,24],[2,26,22,23,27,3,37,45,44,36],[2,28,8,45,53,57,49,12,30,6],[5,1,29,11,46,54,58,50,15,31],[5,43,51,50,42,4,24,16,17,25],[7,27,19,18,26,6,40,48,49,41],[7,31,13,48,56,52,44,9,29,3],[33,11,9,32,16,56,40,42,58,18],[33,19,59,43,41,57,17,32,8,10],[34,13,15,35,22,54,38,36,52,20],[34,21,53,37,39,55,23,35,14,12],[24,20,52,56,16],[25,17,57,53,21],[26,18,58,54,22],[27,23,55,59,19],[28,2,36,38,0],[29,1,39,37,3],[30,4,42,40,6],[31,7,41,43,5],[32,9,44,45,8],[33,10,47,46,11],[34,12,49,48,13],[35,15,50,51,14],[24,4,0],[25,1,5],[26,2,6],[27,7,3],[28,10,8],[29,9,11],[30,12,14],[31,15,13],[32,17,16],[33,18,19],[34,20,21],[35,23,22],[36,44,52],[37,53,45],[38,54,46],[39,47,55],[40,56,48],[41,49,57],[42,50,58],[43,59,51]]
        s=1
        JL=vertexData.length
      break
      case 97:
        var a0 = 10+3*(11*sqrt(5)-15)/76
        var a1 = 10-3*(3-sqrt(5))/4
        var a2 = 10-3*(10-sqrt(5))/38
        var a3 = 10+3*(7*sqrt(5)-5)/44
        var a4 = 10+3*(sqrt(5)-1)/4
        var a5 = 10+3*(5+9*sqrt(5))/76
        var a6 = 10-3*(15+sqrt(5))/44
        vertexData = conv([[0,a4,a1],[a4,a1,0],[a1,0,a4],[a5,0,a0],[0,a0,a5],[a0,a5,0],[0,a6,a3],[a6,a3,0],[a3,0,a6],[a2,a2,a2]])
        circumR=3*sqrt(5*(25-2*sqrt(5)))/22
        edgeLength=dist(vertexData[0][0],vertexData[0][1],vertexData[0][2],vertexData[26][0],vertexData[26][1],vertexData[26][2])
        edgesData=[[0,17],[0,20],[0,22],[0,38],[0,42],[1,16],[1,20],[1,22],[1,39],[1,43],[2,19],[2,21],[2,23],[2,36],[2,40],[3,18],[3,21],[3,23],[3,37],[3,41],[4,12],[4,13],[4,21],[4,40],[4,41],[6,14],[6,15],[6,23],[6,36],[6,37],[5,12],[5,13],[5,20],[5,42],[5,43],[7,14],[7,15],[7,22],[7,38],[7,39],[8,14],[8,16],[8,18],[8,37],[8,39],[9,15],[9,17],[9,19],[9,36],[9,38],[10,12],[10,16],[10,18],[10,41],[10,43],[11,13],[11,17],[11,19],[11,40],[11,42]]
        edgesData.push([0,26],[0,28],[0,30],[0,32],[0,34],[1,27],[1,28],[1,30],[1,33],[1,35],[2,24],[2,29],[2,31],[2,32],[2,34],[3,25],[3,29],[3,31],[3,33],[3,35],[4,24],[4,25],[4,30],[4,32],[4,33],[6,24],[6,25],[6,28],[6,34],[6,35],[5,26],[5,27],[5,31],[5,32],[5,33],[7,26],[7,27],[7,29],[7,34],[7,35],[8,24],[8,26],[8,28],[8,29],[8,33],[9,25],[9,27],[9,28],[9,29],[9,32],[10,24],[10,26],[10,30],[10,31],[10,35],[11,25],[11,27],[11,30],[11,31],[11,34])
        L=120
        L2=L
        faceData=[[24,2,40,4],[24,4,12,10],[24,10,16,8],[24,8,14,6],[24,6,36,2],[25,4,41,3],[25,3,37,6],[25,6,15,9],[25,9,17,11],[25,11,13,4],[26,0,38,7],[26,7,14,8],[26,8,18,10],[26,10,12,5],[26,5,42,0],[27,1,43,5],[27,5,13,11],[27,11,19,9],[27,9,15,7],[27,7,39,1],[28,0,17,9],[28,9,36,6],[28,6,37,8],[28,8,16,1],[28,1,20,0],[30,0,22,1],[30,1,16,10],[30,10,41,4],[30,4,40,11],[30,11,17,0],[29,2,21,3],[29,3,18,8],[29,8,39,7],[29,7,38,9],[29,9,19,2],[31,2,19,11],[31,11,42,5],[31,5,43,10],[31,10,18,3],[31,3,23,2],[32,0,20,5],[32,5,12,4],[32,4,21,2],[32,2,36,9],[32,9,38,0],[33,1,39,8],[33,8,37,3],[33,3,21,4],[33,4,13,5],[33,5,20,1],[34,0,42,11],[34,11,40,2],[34,2,23,6],[34,6,14,7],[34,7,22,0],[35,1,22,7],[35,7,15,6],[35,6,23,3],[35,3,41,10],[35,10,43,1]]
        s=1
        JL=vertexData.length
      break
      case 98:
        var a0 = (sqrt(5)-2)/2
        var a1 = phi_2/2
        var a2 = phi_1/2
        var a4 = (5-sqrt(5))/4
        vertexData = [[a1,0,a4],[0,a4,a1],[a4,a1,0],[-a1,0,a4],[0,a4,-a1],[-a4,a1,0],[a1,0,-a4],[0,-a4,a1],[a4,-a1,0],[-a1,0,-a4],[0,-a4,-a1],[-a4,-a1,0],[0.5,a0,0.5],[a0,0.5,0.5],[0.5,0.5,a0],[-0.5,a0,0.5],[-a0,0.5,0.5],[-0.5,0.5,a0],[0.5,-a0,0.5],[a0,-0.5,0.5],[0.5,-0.5,a0],[-0.5,-a0,0.5],[-a0,-0.5,0.5],[-0.5,-0.5,a0],[0.5,a0,-0.5],[a0,0.5,-0.5],[0.5,0.5,-a0],[-0.5,a0,-0.5],[-a0,0.5,-0.5],[-0.5,0.5,-a0],[0.5,-a0,-0.5],[a0,-0.5,-0.5],[0.5,-0.5,-a0],[-0.5,-a0,-0.5],[-a0,-0.5,-0.5],[-0.5,-0.5,-a0],[a1,phi_1,a2],[phi_1,a2,a1],[-a2,a1,phi_1],[-a1,phi_1,a2],[-phi_1,a2,a1],[a2,-a1,phi_1],[a1,-phi_1,a2],[phi_1,-a2,a1],[-a2,-a1,phi_1],[-a1,-phi_1,a2],[-phi_1,-a2,a1],[a2,a1,-phi_1],[a1,phi_1,-a2],[phi_1,a2,-a1],[-a2,a1,-phi_1],[-a1,phi_1,-a2],[-phi_1,a2,-a1],[a2,-a1,-phi_1],[a1,-phi_1,-a2],[phi_1,-a2,-a1],[-a2,-a1,-phi_1],[-a1,-phi_1,-a2],[-phi_1,-a2,-a1],[a2,a1,phi_1]]
        circumR=sqrt(11-4*sqrt(5))/2
        edgeLength=1
        L=120
        L2=L
        faceData=[[44,10,41,23,20],[43,3,37,19,13],[40,0,46,16,22],[59,4,38,14,17],[24,12,48,8,36],[56,7,53,35,32],[52,6,58,28,34],[21,33,45,5,57],[51,15,27,39,11],[47,1,50,26,29],[31,49,9,55,25],[54,18,30,42,2],[9,17,23],[3,29,35],[18,21,1],[15,7,12],[22,34,8],[20,6,14],[28,16,2],[13,25,5],[38,58,42],[11,19,31],[55,45,59],[0,32,26],[41,49,39],[36,52,44],[37,53,51],[50,46,54],[43,47,57],[10,24,27],[40,56,48],[4,30,33],[59,17,23,41,39,11,19,13,5,45],[48,12,15,51,37,3,29,26,0,40],[8,22,16,2,42,38,14,20,44,36],[57,21,18,54,46,0,32,35,3,43],[6,14,17,9,49,39,27,24,36,52],[9,23,20,6,58,42,30,33,45,55],[31,19,37,53,7,12,24,10,41,49],[16,28,58,38,4,33,21,1,50,46],[30,18,1,47,43,13,25,55,59,4],[47,29,35,53,51,11,31,25,5,57],[27,15,7,56,40,22,34,52,44,10],[50,54,2,28,34,8,48,56,32,26]]
        s=1
        JL=vertexData.length
      break
      case 99:
        var a0 = (25-9*sqrt(5))/22
        var a1 = (3*sqrt(5)-5)/6
        var a2 = (4*sqrt(5)-5)/11
        var a4 = (5-sqrt(5))/6
        var a5 = (15 - sqrt(5)) / 22
        vertexData = [[0,-a4,a1],[a1,0,a4],[-a1,0,a4],[0,a4,a1],[a4,a1,0],[0,-a4,-a1],[-a1,0,-a4],[-a4,-a1,0],[-a4,a1,0],[0,a4,-a1],[a1,0,-a4],[a4,-a1,0],[-a5,0,-a0],[-a5,0,a0],[0,a0,a5],[0,-a0,a5],[a0,-a5,0],[a5,0,-a0],[a0,a5,0],[-a0,a5,0],[-a2,-a2,a2],[-a0,-a5,-0],[a2,-a2,a2],[a5,0,a0],[a2,a2,a2],[-a2,a2,a2],[a2,a2,-a2],[-a2,-a2,-a2],[a2,-a2,-a2],[0,-a0,-a5],[-a2,a2,-a2],[0,a0,-a5],[-phi_2,0,phi_1],[0,phi_1,phi_2],[phi_2,0,phi_1],[0,-phi_1,phi_2],[0,phi_1,-phi_2],[0,-phi_1,-phi_2],[phi_1,-phi_2,0],[-phi_1,phi_2,0],[phi_1,phi_2,0],[-phi_2,0,-phi_1],[-phi_1,-phi_2,0],[phi_2,0,-phi_1]]
        circumR=sqrt(5-2*sqrt(5))
        edgesData=[[32,0],[32,1],[32,12],[32,19],[32,21],[32,22],[32,24],[32,3],[32,7],[32,8],[33,1],[33,13],[33,15],[33,2],[33,23],[33,26],[33,30],[33,4],[33,8],[33,9],[34,0],[34,11],[34,16],[34,17],[34,18],[34,2],[34,20],[34,25],[34,3],[34,4],[35,1],[35,11],[35,13],[35,14],[35,2],[35,23],[35,27],[35,28],[35,5],[35,7],[36,10],[36,12],[36,17],[36,24],[36,25],[36,29],[36,3],[36,4],[36,6],[36,8],[37,0],[37,10],[37,11],[37,12],[37,17],[37,20],[37,22],[37,31],[37,6],[37,7],[38,0],[38,1],[38,10],[38,15],[38,21],[38,24],[38,26],[38,29],[38,4],[38,5],[39,14],[39,18],[39,2],[39,20],[39,27],[39,3],[39,31],[39,6],[39,7],[39,9],[40,1],[40,10],[40,11],[40,14],[40,19],[40,22],[40,28],[40,3],[40,31],[40,9],[41,10],[41,13],[41,19],[41,21],[41,26],[41,28],[41,5],[41,7],[41,8],[41,9],[42,0],[42,15],[42,16],[42,2],[42,25],[42,29],[42,30],[42,5],[42,6],[42,8],[43,11],[43,16],[43,18],[43,23],[43,27],[43,30],[43,4],[43,5],[43,6],[43,9]]
        L=120
        L2=L
        faceData=[[2,33,23,35],[9,39,14,40],[11,34,18,43],[1,33,13,35],[3,39,31,40],[7,32,19,41],[6,36,17,37],[5,38,15,42],[4,34,16,43],[10,36,12,37],[0,38,29,42],[8,32,21,41],[4,33,15,38],[1,32,19,40],[3,34,17,36],[8,33,15,42],[2,34,18,39],[3,32,12,36],[11,35,14,40],[1,32,21,38],[0,34,17,37],[7,35,14,39],[2,34,16,42],[0,32,12,37],[4,36,29,38],[10,40,19,41],[9,33,23,43],[8,36,29,42],[6,39,18,43],[9,33,13,41],[11,37,31,40],[10,38,21,41],[5,35,23,43],[7,37,31,39],[6,42,16,43],[5,35,13,41],[4,34,25,36],[1,33,26,38],[3,34,20,39],[8,32,24,36],[2,33,30,42],[0,32,24,38],[11,34,20,37],[1,35,28,40],[0,34,25,42],[7,32,22,37],[2,35,27,39],[9,40,28,41],[4,33,30,43],[10,36,24,38],[9,39,27,43],[8,33,26,41],[6,36,25,42],[5,38,26,41],[11,35,27,43],[10,37,22,40],[5,42,30,43],[7,35,28,41],[6,37,20,39],[3,32,22,40]]
        s=1
        JL=vertexData.length
      break
      case 100:
        var a0 = phi_1/2
        var a1 = sqrt(5)/2
        var a2 = phi2/2
        vertexData = [[a0,0.5,phi],[0.5,1,a2],[0,a2,a1],[-0.5,1,a2],[-a0,0.5,phi],[-a0,-0.5,phi],[-0.5,-1,a2],[0,-a2,a1],[0.5,-1,a2],[a0,-0.5,phi],[-a1,0,a2],[-a2,0.5,1],[-phi,a0,0.5],[-phi,-a0,0.5],[-a2,-0.5,1],[-1,a2,0.5],[-0.5,phi,a0],[-0.5,phi,-a0],[-1,a2,-0.5],[-a2,a1,0],[0.5,phi,a0],[1,a2,0.5],[a2,a1,0],[1,a2,-0.5],[0.5,phi,-a0],[a1,0,a2],[a2,0.5,1],[phi,a0,0.5],[phi,-a0,0.5],[a2,-0.5,1],[-1,-a2,0.5],[-a2,-a1,0],[-1,-a2,-0.5],[-0.5,-phi,-a0],[-0.5,-phi,a0],[-phi,a0,-0.5],[-phi,-a0,-0.5],[-a2,-0.5,-1],[-a1,0,-a2],[-a2,0.5,-1],[0.5,-phi,a0],[1,-a2,0.5],[a2,-a1,0],[1,-a2,-0.5],[0.5,-phi,-a0],[0,-a2,-a1],[-0.5,-1,-a2],[-a0,-0.5,-phi],[a0,-0.5,-phi],[0.5,-1,-a2],[-0.5,1,-a2],[0,a2,-a1],[0.5,1,-a2],[a0,0.5,-phi],[-a0,0.5,-phi],[phi,-a0,-0.5],[a2,-0.5,-1],[a1,0,-a2],[a2,0.5,-1],[phi,a0,-0.5]]
        circumR=sqrt(2*(17+3*sqrt(5)))/4
        edgeLength=1
        L=120
        L2=L
        faceData=[[2,0,3,1,4],[10,4,5],[5,8,6,9,7],[12,10,13,11,14],[9,6,14,11,3,0],[17,15,18,16,19],[4,2,16,19,12,10],[3,15,11],[24,17,15,3,1,21],[23,21,24,22,20],[20,2,16],[28,25,27,29,26],[8,5,4,1,26,29],[27,25,0,2,20,22],[26,1,21],[9,25,0],[32,30,33,31,34],[13,10,5,7,34,31],[14,6,30],[35,38,36,39,37],[18,15,11,13,36,39],[36,13,31],[35,12,14,30,32,37],[19,35,12],[44,41,43,40,42],[30,6,8,41,44,33],[40,34,7],[41,8,29],[40,7,9,25,28,42],[47,45,48,46,49],[32,46,49,43,40,34],[37,46,32],[45,44,33],[38,47,45,33,31,36],[53,51,54,52,50],[52,23,20,16,18,50],[51,24,17],[50,18,39],[54,38,47],[17,19,35,38,54,51],[48,53,50,39,37,46],[56,59,57,55,58],[42,55,28],[43,56,49],[56,59,27,29,41,43],[57,55,42,44,45,48],[53,57,48],[27,22,59],[59,22,24,51,53,57],[55,28,26,21,23,58],[56,58,52,54,47,49],[58,52,23]]
        //dist(vertexData[14][0],vertexData[14][1],vertexData[14][2],vertexData[30][0],vertexData[30][1],vertexData[30][2])
        s=1
        JL=vertexData.length
      break
      case 101:
        var a0 = 3*(9*sqrt(5)-5)/76
        var a1 = (5-sqrt(5))/4
        var a2 = 3*(15-sqrt(5))/44
        var a3 = 3*(10+sqrt(5))/38
        var a4 = sqrt(5)/2
        var a5 = 3*(5+7*sqrt(5))/44
        var a6 = 3*(15+11*sqrt(5))/76
        var a7 = (5+sqrt(5))/4
        vertexData = [[0,a2,a5],[-a0,0,a6],[0,-a2,a5],[-a5,0,a2],[-a1,0,a7],[-a2,a5,0],[-a4,a4,a4],[-a3,a3,a3],[0,a7,a1],[a2,a5,0],[0,a6,a0],[a5,0,a2],[a1,0,a7],[a4,a4,a4],[a3,a3,a3],[a0,0,a6],[-a2,-a5,0],[-a4,-a4,a4],[-a3,-a3,a3],[-a5,0,-a2],[-a7,a1,0],[-a6,-a0,0],[-a7,-a1,0],[-a6,a0,0],[a2,-a5,0],[0,-a7,a1],[0,-a6,a0],[a3,-a3,a3],[a4,-a4,a4],[0,-a2,-a5],[0,-a7,-a1],[-a3,-a3,-a3],[0,-a6,-a0],[-a4,-a4,-a4],[0,a2,-a5],[0,a7,-a1],[0,a6,-a0],[-a3,a3,-a3],[-a0,0,-a6],[-a4,a4,-a4],[-a1,0,-a7],[a5,0,-a2],[a6,-a0,0],[a3,-a3,-a3],[a7,-a1,0],[a4,-a4,-a4],[a0,0,-a6],[a6,a0,0],[a4,a4,-a4],[a7,a1,0],[a1,0,-a7],[a3,a3,-a3]]
        circumR=sqrt(15)/2
        edgesData=[[10,6],[12,0],[12,1],[12,11],[12,2],[13,0],[13,10],[13,11],[13,9],[14,12],[14,8],[15,13],[15,4],[17,1],[17,16],[17,2],[17,3],[18,4],[20,19],[20,3],[20,5],[20,7],[21,17],[21,20],[22,16],[22,18],[22,19],[22,3],[23,22],[23,6],[25,16],[25,18],[25,2],[25,24],[26,17],[27,12],[27,25],[28,11],[28,15],[28,2],[28,24],[28,26],[30,16],[30,24],[30,26],[30,29],[31,22],[31,30],[32,25],[33,16],[33,19],[33,21],[33,29],[33,32],[35,10],[35,34],[35,5],[35,9],[36,8],[37,20],[37,35],[38,33],[39,19],[39,23],[39,34],[39,36],[39,38],[39,5],[4,0],[4,2],[4,3],[40,19],[40,29],[40,31],[40,34],[40,37],[42,28],[43,30],[44,11],[44,24],[44,27],[44,41],[44,43],[45,24],[45,29],[45,32],[45,41],[45,42],[46,40],[46,45],[47,13],[47,44],[48,34],[48,36],[48,41],[48,46],[48,47],[48,9],[49,11],[49,14],[49,41],[49,42],[49,9],[50,29],[50,34],[50,38],[50,41],[50,43],[51,35],[51,49],[51,50],[6,0],[6,1],[6,3],[6,5],[7,4],[8,0],[8,5],[8,7],[9,8]]
        L=120
        L2=L
        faceData=[[0,4,15,13],[0,8,14,12],[0,6,10,13],[0,4,7,8],[0,6,1,12],[1,12,2,17],[2,4,18,25],[2,17,26,28],[2,12,27,25],[2,4,15,28],[1,6,3,17],[3,4,7,20],[3,6,23,22],[3,17,21,20],[3,4,18,22],[5,8,7,20],[5,6,10,35],[5,8,36,39],[5,20,37,35],[5,6,23,39],[9,13,10,35],[8,9,49,14],[9,13,47,48],[9,35,51,49],[8,9,48,36],[11,13,15,28],[11,12,14,49],[11,13,47,44],[11,28,42,49],[11,12,27,44],[16,22,18,25],[16,17,21,33],[16,22,31,30],[16,25,32,33],[16,17,26,30],[19,22,23,39],[19,20,21,33],[19,22,31,40],[19,33,38,39],[19,20,37,40],[24,28,26,30],[24,25,27,44],[24,28,42,45],[24,30,43,44],[24,25,32,45],[29,33,32,45],[29,30,31,40],[29,33,38,50],[29,40,46,45],[29,30,43,50],[34,35,37,40],[34,39,36,48],[34,35,51,50],[34,40,46,48],[34,39,38,50],[41,45,42,49],[41,44,43,50],[41,45,46,48],[41,49,51,50],[41,44,47,48]]
        s=1
        JL=vertexData.length
      break
      case 130:
        var wid = inp.style('width').slice(0,inp.style('width').length-2)*1
        var wid2 = inp2.style('width').slice(0,inp2.style('width').length-2)*1
        inp4.show()
        inp4.position(wid+wid2,-2)
        inp5.show()
        inp5.position(wid+wid2+48,-2)
        edgesData=[]
        A = inp4.value()*1
        B = inp5.value()*1%A
        s=5/A
        s2=s
        if(B>A/2) {
          B=A-B
          inp5.value(B)
        }else if(inp5.value()*1>A) {
          inp5.value(B%A)
        }else if(B<0) {
          B=abs(B)
          inp5.value(B)
        }
        gcm = 1
        for(var i = 1; i<A; i++) {
          if(floor(B/i)==B/i&&floor(A/i)==A/i) {
            gcm=i
          }
        }
        A/=gcm
        B/=gcm
        L=A*gcm
        L2=A*gcm  
        edgeLength=sqrt(sq(1-cos(PI*2/A*B))+sq(sin(PI*2/A*B)))
        vertexData=[]
        var ang = 0
        if(A*gcm*B%2==0) {
          ang+=PI/A*B
        }
        for(var i = 0; i<A*gcm; i++) {
          vertexData.push([sin(PI*2/A/gcm*i+ang),-cos(PI*2/A/gcm*i+ang),edgeLength/2,0],[sin(PI*2/A/gcm*i+ang),-cos(PI*2/A/gcm*i+ang),-edgeLength/2,0])
        }
        faceData=[[],[]]
        for(var i = 0; i<gcm; i++) {
          for(var j = 0; j<A*B*gcm; j+=B*gcm) {
            faceData[0][faceData[0].length]=(j%(A*gcm)+i)*2
            faceData[1][faceData[1].length]=(j%(A*gcm)+i)*2+1
          }
          if(i<gcm-1) {
            faceData[0][faceData[0].length]=undefined
            faceData[1][faceData[1].length]=undefined
          }
        }
        var NnNn = 0
        for(var i = 0; i<faceData[0].length; i++) {
          if(faceData[0][i]==undefined) {
            NnNn=i+1
          }
          if(faceData[0][i]!==undefined&&faceData[0][i+1]!==undefined) {
            faceData.push([faceData[0][i],faceData[1][i],faceData[1][i+1],faceData[0][i+1]])
          }else if(faceData[0][i]!==undefined) {
            faceData.push([faceData[0][i],faceData[1][i],faceData[1][NnNn],faceData[0][NnNn]])
          }
        }
        if(A==2) {
          faceData=[]
        }
        s=1
        JL=vertexData.length
        circumR=sqrt(1+edgeLength**2)
      break
      case 131:
        var wid = inp.style('width').slice(0,inp.style('width').length-2)*1
        var wid2 = inp2.style('width').slice(0,inp2.style('width').length-2)*1
        inp4.show()
        inp4.position(wid+wid2,-2)
        inp5.show()
        inp5.position(wid+wid2+48,-2)
        edgesData=[]
        A = inp4.value()*1
        B = inp5.value()*1%A
        s=5/A
        s2=s
        if(B>A/2) {
          B=A-B
          inp5.value(B)
        }else if(inp5.value()*1>A) {
          inp5.value(B%A)
        }else if(B<0) {
          B=abs(B)
          inp5.value(B)
        }
        gcm = 1
        for(var i = 1; i<A; i++) {
          if(floor(B/i)==B/i&&floor(A/i)==A/i) {
            gcm=i
          }
        }
        A/=gcm
        B/=gcm
        L=A*gcm
        L2=A*gcm
        vertexData=[]
        var ang = 0
        if(A*gcm*B%2==0) {
          ang+=PI/A*B
        }
        for(var i = 0; i<A*gcm; i++) {
          vertexData.push([sin(PI*2/A/gcm*i+ang),-cos(PI*2/A/gcm*i+ang),0,0])
        }
        var valu = A/B
        vertexData.push([0,0,1/tan(PI/valu)],[0,0,-1/tan(PI/valu)])
        if(1/tan(PI/valu)>1) {
          circumR=1/tan(PI/valu)
        }
        faceData=[]
        edgesData=[]
        for(var i = 0; i<gcm; i++) {
          for(var j = 0; j<A*B*gcm; j+=B*gcm) {
            edgesData.push([(j%(A*gcm)+i),((j+B*gcm)%(A*gcm)+i)])
          }
        }
        for(var i = 0; i<edgesData.length; i++) {
          faceData.push([edgesData[i][0],edgesData[i][1],vertexData.length-1],[edgesData[i][0],edgesData[i][1],vertexData.length-2])
        }
        for(var i = 0; i<vertexData.length; i++) {
          edgesData.push([i,vertexData.length-1],[i,vertexData.length-2])
        }
        if(A==2) {
          faceData=[]
        }
        s=1
        JL=vertexData.length
        circumR=sqrt(1+edgeLength**2)
      break
      case 134:
        vertexData = dodecahedron
        edgeLength= (sqrt(5)-1)*phi2
        circumR=sqrt(3)
        L=60
        s=1
        rotArr[1][1]=atan(phi_1)
        L2=L
        faceData=[[0,12,14,2,18,19],[5,13,15,7,16,17],[0,8,9,1,14,15],[6,10,11,7,12,13],[0,8,5,13,6,19],[1,14,2,11,7,16],[0,11,5,17,3,12],[2,8,7,15,4,18],[0,15,3,10,6,16],[1,9,4,12,7,19],[0,11,9,4,18,16],[3,10,8,7,19,17],[4,12,14,6,16,17],[1,13,15,3,18,19],[2,8,9,3,12,13],[4,10,11,5,14,15],[3,9,6,14,5,18],[1,10,4,17,2,13],[2,17,19,6,9,11],[1,10,8,5,18,16]]
        JL=vertexData.length
        edgesData=[[0,8],[0,12],[0,16],[1,9],[1,13],[1,16],[2,8],[2,14],[2,17],[3,9],[3,15],[3,17],[4,10],[4,12],[4,18],[5,11],[5,13],[5,18],[6,10],[6,14],[6,19],[7,11],[7,15],[7,19],[8,10],[9,11],[12,13],[14,15],[16,17],[18,19]]
        edgesData.push([0,11],[0,15],[0,19],[1,10],[1,14],[1,19],[2,11],[2,13],[2,18],[3,10],[3,12],[3,18],[4,9],[4,15],[4,17],[5,8],[5,14],[5,17],[6,9],[6,13],[6,16],[7,8],[7,12],[7,16],[8,9],[10,11],[12,14],[13,15],[16,18],[17,19])
      break
      case 135:
        vertexData=conv([[11,11,11]])
        edgeLength=2*sqrt(2)
        circumR=sqrt(3)
        L=12
        s=1
        L2=L
        faceData=[[0,5,6],[0,5,3],[0,3,6],[6,5,3],[1,2,4],[1,4,7],[1,2,7],[4,7,2]]
        JL=vertexData.length
      break
      case 136:
        vertexData=[[0.4292702547728914,0.3821897762668929,-0.2113244502755862,0],[-0.19704266088471925,0.26253383465003394,-0.516962450720956,0],[0.5141132989650508,-0.31289725532933965,-0.11306114909480411,0],[-0.1121996166925596,-0.4325531969461986,-0.41869914954017395,0],[0.1121996166925596,0.4325531969461986,0.41869914954017395,0],[-0.5141132989650508,0.31289725532933965,0.11306114909480411,0],[0.19704266088471925,-0.26253383465003394,0.516962450720956,0],[-0.4292702547728914,-0.3821897762668929,0.2113244502755862,0],[0.48047985005364796,0.31159739557884736,0.21690130649883663,0],[-0.5329157350734122,0.11799001508689638,-0.27763136647532777,0],[-0.48047985005364796,-0.31159739557884736,-0.21690130649883663,0],[0.5329157350734122,-0.11799001508689638,0.27763136647532777,0],[0.02934075097816906,0.5467740682462281,-0.2741846797789876,0],[-0.1666196801900925,0.5779003740157485,0.11519131862171438,0],[0.1666196801900925,-0.5779003740157485,-0.11519131862171438,0],[-0.02934075097816906,-0.5467740682462281,0.2741846797789876,0],[0.45005686935902156,-0.003769143786867101,-0.4152524628438344,0],[-0.06297419988957165,0.07772058266195898,0.6041471353726287,0],[0.06297419988957165,-0.07772058266195898,-0.6041471353726287,0],[-0.45005686935902156,0.003769143786867101,0.4152524628438344,0]]
        circumR=sqrt(0.375)
        L=30
        s=1
        L2=L
        faceData=[[14,0,17],[0,14,9],[0,17,9],[17,9,14],[4,7,1],[1,2,4],[2,1,7],[2,7,4],[19,3,12],[12,11,19],[3,19,11],[3,12,11],[16,10,13],[13,6,10],[6,10,16],[6,13,16],[18,8,5],[5,15,18],[15,18,8],[15,8,5]]
        edgesData=[[10,6],[11,3],[12,11],[12,3],[13,10],[13,6],[14,0],[14,9],[15,5],[15,8],[16,10],[16,13],[16,6],[17,0],[17,14],[17,9],[18,15],[18,5],[18,8],[19,11],[19,12],[19,3],[2,1],[4,1],[4,2],[7,1],[7,2],[7,4],[8,5],[9,0]]
        JL=vertexData.length
      break
      case 137:
        vertexData=dodecahedron
        edgeLength=2*sqrt(2)
        circumR=sqrt(3)
        L=60
        s=1
        L2=L
        faceData=[[0,18,14,,12,2,19],[2,12,9,,8,13,3],[9,2,19,,17,6,11],[12,9,19,,4,7,1],[1,4,2,,13,10,17],[2,4,7,,8,18,15],[2,1,7,,14,16,11],[0,18,9,,4,11,16],[0,9,14,,8,1,15],[14,9,18,,6,3,5],[0,5,6,,8,13,19],[0,5,3,,12,17,11],[0,6,3,,10,15,16],[10,13,7,,6,12,11],[6,17,12,,14,16,4],[1,8,18,,16,10,5],[1,15,18,,13,19,3],[3,8,19,,17,10,7],[4,11,14,,10,5,15],[7,17,13,,15,16,5]]
        JL=vertexData.length
      break
      case 138:
        vertexData=dodecahedron
        edgeLength=2
        circumR=sqrt(3)
        L=60
        s=1
        L2=L
        faceData=[[0,4,6,2],[0,1,5,4],[0,1,3,2],[7,3,2,6],[7,6,4,5],[7,5,1,3],[0,13,18,10],[0,13,9,17],[0,10,14,17],[7,14,17,9],[7,14,10,18],[7,9,13,18],[2,15,19,10],[2,16,12,10],[2,16,9,15],[5,19,15,9],[5,19,10,12],[5,9,16,12],[1,11,15,17],[1,12,8,17],[1,11,18,12],[6,18,12,8],[6,15,17,8],[6,15,11,18],[3,14,19,11],[3,16,8,14],[3,11,13,16],[4,8,14,19],[4,13,16,8],[4,19,11,13]]
        JL=vertexData.length
      break
      case 139:
        var a0 = 10+sqrt(2)/2
        var a1 = 10+sqrt(2)/4
        var a2 = 10+(sqrt(2)+sqrt(10))/8
        var a3 = 10+(sqrt(10)-sqrt(2))/8
        vertexData=conv([[a0,0,0],[0,a0,0],[0,0,a0],[a1,a2,a3],[a3,a1,a2],[a2,a3,a1]])
        edgeLength=1
        circumR=sqrt(2)/2
        L=60
        s=1
        L2=L
        faceData=[[0,2,4,,24,18,7],[1,3,5,,27,17,12],[1,2,4,,28,14,11],[0,3,5,,23,8,21],[0,4,3,,22,20,9],[1,5,2,,10,15,29],[1,3,4,,26,13,16],[0,2,5,,25,6,19],[6,19,26,,18,7,27],[6,26,16,,22,10,20],[6,25,16,,14,8,23],[13,19,26,,28,11,21],[25,16,13,,17,24,12],[13,25,19,,9,15,29],[7,27,17,,11,21,23],[18,24,12,,14,8,28],[18,12,27,,20,29,10],[7,24,17,,15,9,22],[11,14,23,,10,22,15],[20,9,29,,8,21,28]]
        JL=vertexData.length
      break
      case 140:
        vertexData=conv([[11.207106781186548,10.5,11.207106781186548],[11.207106781186548,11.207106781186548,10.5],[10.5,11.207106781186548,11.207106781186548]])
        edgeLength=dist(vertexData[0][0],vertexData[0][1],vertexData[0][2],vertexData[15][0],vertexData[15][1],vertexData[15][2])
        edgesData=[[0,12],[0,17],[1,13],[1,16],[2,14],[2,19],[3,15],[3,18],[4,8],[4,21],[5,9],[5,20],[6,10],[6,23],[7,11],[7,22],[8,18],[9,19],[10,16],[11,17],[12,22],[13,23],[14,20]]
        edgesData.push([0,5],[0,15],[0,23],[1,4],[1,14],[1,22],[2,7],[2,13],[2,21],[3,6],[3,12],[3,20],[4,11],[4,19],[5,10],[5,18],[6,9],[6,17],[7,8],[7,16],[8,14],[8,23],[9,15],[9,22],[10,12],[10,21],[11,13],[11,20],[12,19],[13,18],[14,17],[15,16],[15,21],[16,19],[17,18],[20,23],[21,22])
        circumR=sqrt(3.1642135623730967)
        L=60
        s=1
        L2=L
        faceData=[[16,15,0,12,10],[8,23,13,11,7],[15,0,23,6,3],[16,7,8,4,1],[0,23,8,18,17],[7,16,15,21,22],[0,12,3,20,5],[11,4,19,2,7],[0,5,9,6,17],[14,1,22,7,2],[2,14,8,18,13],[5,10,21,15,9],[19,2,21,10,16],[13,18,5,20,23],[16,1,22,9,19],[6,17,14,20,23],[11,4,8,14,20],[3,12,19,9,15],[11,20,3,18,17],[12,19,4,21,22],[22,9,6,10,12],[1,14,17,11,13],[10,5,18,3,6],[21,2,13,1,4]]
        JL=vertexData.length
      break
      case 141:
      var a0 = 10+(1+sqrt(2))/2
        vertexData=conv([[10.5,a0,10.5],[10.5,10.5,a0],[a0,10.5,10.5]])
        edgesData=[[0,5],[0,12],[0,17],[1,4],[1,13],[1,16],[2,7],[2,14],[2,19],[3,6],[3,15],[3,18],[4,8],[4,21],[5,9],[5,20],[6,10],[6,23],[7,11],[7,22],[8,14],[8,18],[9,15],[9,19],[10,12],[10,16],[11,13],[11,17],[12,22],[13,23],[14,20],[15,21],[16,19],[17,18],[20,23],[21,22]]
        edgesData.push([0,15],[0,23],[1,14],[1,22],[2,13],[2,21],[3,12],[3,20],[4,11],[4,19],[5,10],[5,18],[6,9],[6,17],[7,8],[7,16],[8,23],[9,22],[10,21],[11,20],[12,19],[13,18],[14,17],[15,16])
        circumR=sqrt(3.1642135623730967)
        L=60
        s=1/2
        L2=L
        faceData=[[0,5,10,6,23],[1,13,2,7,16],[0,12,22,9,15],[14,17,11,7,8],[0,17,11,20,23],[19,16,7,22,12],[0,5,18,3,15],[2,7,8,4,21],[0,17,6,3,12],[22,7,11,4,1],[9,19,2,21,22],[14,20,5,18,17],[1,4,19,2,14],[6,3,20,5,9],[2,13,11,20,14],[10,12,19,9,5],[18,17,6,23,13],[22,21,10,16,1],[15,9,6,10,16],[23,13,1,14,8],[16,19,4,21,15],[20,23,8,18,3],[11,13,18,8,4],[10,12,3,15,21]]
        JL=vertexData.length
      break
      case 142:
        var a0 = sqrt(3*(4-cbrt(17+3*sqrt(33))-cbrt(17-3*sqrt(33))))/6
        var a1 = sqrt(3*(2+cbrt(17+3*sqrt(33))+cbrt(17-3*sqrt(33))))/6
        var a2 = sqrt(3*(4+cbrt(199+3*sqrt(33))+cbrt(199-3*sqrt(33))))/6
        vertexData = [[a1,-a0,a2],[a1,a0,-a2],[-a1,a0,a2],[-a1,-a0,-a2],[a2,-a1,a0],[a2,a1,-a0],[-a2,a1,a0],[-a2,-a1,-a0],[a0,-a2,a1],[a0,a2,-a1],[-a0,a2,a1],[-a0,-a2,-a1],[a0,a1,a2],[a0,-a1,-a2],[-a0,-a1,a2],[-a0,a1,-a2],[a2,a0,a1],[a2,-a0,-a1],[-a2,-a0,a1],[-a2,a0,-a1],[a1,a2,a0],[a1,-a2,-a0],[-a1,-a2,a0],[-a1,a2,-a0]]
        edgesData=[[0,2],[1,3],[4,5],[6,7],[8,11],[9,10],[12,14],[13,15],[16,17],[18,19],[20,23],[21,22]]
        edgesData.push([0,20],[0,21],[1,20],[1,21],[2,22],[2,23],[3,22],[3,23],[4,13],[4,14],[5,12],[5,15],[6,12],[6,15],[7,13],[7,14],[8,16],[8,18],[9,17],[9,19],[10,16],[10,18],[11,17],[11,19])
        edgesData.push([0,4],[0,8],[1,5],[1,9],[2,6],[2,10],[3,7],[3,11],[4,8],[5,9],[6,10],[7,11],[12,16],[12,20],[13,17],[13,21],[14,18],[14,22],[15,19],[15,23],[16,20],[17,21],[18,22],[19,23])
        circumR=1.3437133737446016
        L=60
        s=1/2
        L2=L
        faceData=[[0,4,14,22,21],[0,8,16,17,21],[22,18,8,0,2],[0,4,5,12,20],[20,16,10,2,0],[1,3,11,17,21],[1,5,15,23,20],[1,9,17,16,20],[1,3,23,19,9],[1,21,13,4,5],[2,10,18,19,23],[2,6,7,14,22],[2,6,12,20,23],[7,3,22,21,13],[3,11,19,18,22],[23,15,6,7,3],[4,8,11,17,13],[4,8,16,12,14],[5,9,17,13,15],[5,12,16,10,9],[6,10,18,14,12],[15,19,9,10,6],[7,11,8,18,14],[7,11,19,15,13]]
        JL=vertexData.length
      break
      case 143:
        var a0 = 1
        var a1 = sqrt(2)+1
        var a2 = 2*sqrt(2)+3
        vertexData = [[a1,-a0,a2],[a1,a0,-a2],[-a1,a0,a2],[-a1,-a0,-a2],[a2,-a1,a0],[a2,a1,-a0],[-a2,a1,a0],[-a2,-a1,-a0],[a0,-a2,a1],[a0,a2,-a1],[-a0,a2,a1],[-a0,-a2,-a1],[a0,a1,a2],[a0,-a1,-a2],[-a0,-a1,a2],[-a0,a1,-a2],[a2,a0,a1],[a2,-a0,-a1],[-a2,-a0,a1],[-a2,a0,-a1],[a1,a2,a0],[a1,-a2,-a0],[-a1,-a2,a0],[-a1,a2,-a0]]
        edgeLength=dist(vertexData[0][0],vertexData[0][1],vertexData[0][2],vertexData[15][0],vertexData[15][1],vertexData[15][2])
        edgesData=[[0,1],[0,13],[0,19],[1,12],[1,18],[2,3],[2,15],[2,17],[3,14],[3,16],[4,7],[4,18],[4,23],[5,6],[5,19],[5,22],[6,16],[6,21],[7,17],[7,20],[8,10],[8,15],[8,20],[9,11],[9,14],[9,21],[10,13],[10,22],[11,12],[11,23],[12,15],[13,14],[16,18],[17,19],[20,21],[22,23]] 
        edgesData.push([0,16],[1,17],[2,18],[3,19],[4,21],[5,20],[6,23],[7,22],[8,14],[9,15],[10,12],[11,13])
        edgesData.push([0,15],[1,14],[2,13],[3,12],[4,19],[5,18],[6,17],[7,16],[8,23],[9,22],[10,21],[11,20])
        circumR=sqrt(sq(a0)+sq(a1)+sq(a2))
        L=60
        s=1/2
        L2=L
        faceData=[[1,17,2,15,0],[3,19,0,13,2],[15,2,13,14,8],[1,0,16,3,14],[19,0,16,18,5],[17,2,18,16,7],[13,0,15,12,10],[3,2,18,1,12],[12,1,14,13,11],[18,1,17,19,4],[17,19,3,16,6],[14,3,12,15,9],[4,18,5,6,23],[23,4,21,20,11],[6,16,7,4,21],[5,19,4,7,22],[7,17,6,5,20],[22,5,20,21,10],[21,6,23,22,9],[8,23,22,7,20],[8,14,9,21,10],[23,8,10,12,11],[11,20,8,15,9],[22,9,11,13,10]]
        JL=vertexData.length
      break
      case 144:
        vertexData=[[13.708203932499348,-13.708203932499385,3.2360679774998347],[-5.236067977499781,16.94427190999917,-8.472135954999585],[-13.708203932499364,-13.70820393249939,3.2360679774997383],[5.236067977499826,16.944271909999138,-8.472135954999583],[13.708203932499366,-13.708203932499355,-3.236067977499786],[-5.236067977499837,16.94427190999916,8.472135954999535],[18.944271909999156,-5.236067977499798,0],[-18.94427190999916,-5.23606797749981,-2.1444060197827303e-14],[-13.708203932499366,-13.708203932499355,-3.236067977499786],[5.236067977499826,16.944271909999138,8.472135954999583],[13.708203932499385,-3.2360679774998347,13.708203932499348],[-16.94427190999916,8.47213595499954,-5.236067977499826],[13.708203932499341,-3.236067977499796,-13.708203932499373],[-16.944271909999177,8.472135954999562,5.236067977499785],[-13.708203932499385,-3.2360679774998347,13.708203932499348],[16.944271909999163,8.472135954999546,-5.236067977499816],[-13.708203932499385,-3.2360679774998347,-13.708203932499348],[16.944271909999177,8.472135954999562,5.236067977499785],[5.2360679774998,0,18.94427190999916],[5.236067977499758,-1.0722030098913655e-14,-18.944271909999173],[13.708203932499393,3.2360679774997387,13.708203932499366],[-16.944271909999177,-8.472135954999558,-5.236067977499778],[13.708203932499393,3.2360679774997387,-13.708203932499366],[-16.944271909999177,-8.472135954999562,5.236067977499785],[-13.708203932499385,3.2360679774998347,13.708203932499348],[16.944271909999163,-8.472135954999546,-5.236067977499816],[-13.708203932499385,3.2360679774998347,-13.708203932499348],[16.944271909999163,-8.472135954999546,5.236067977499816],[-5.236067977499758,-1.0722030098913655e-14,18.944271909999173],[-5.2360679774998,0,-18.94427190999916],[-3.236067977499717,13.708203932499385,13.708203932499375],[8.47213595499956,-5.236067977499815,-16.944271909999152],[-3.236067977499796,-13.708203932499373,13.708203932499341],[8.47213595499956,5.236067977499815,-16.944271909999152],[3.2360679774998125,13.708203932499343,13.70820393249939],[-8.472135954999562,-5.236067977499785,-16.944271909999177],[5.506345130134894e-16,18.94427190999916,5.2360679774998],[-2.1444060197827312e-14,-18.944271909999166,5.236067977499802],[3.2360679774997387,-13.708203932499366,13.708203932499393],[-8.47213595499956,5.236067977499815,-16.944271909999152],[8.472135954999562,-5.236067977499785,16.944271909999177],[-3.2360679774998125,13.708203932499343,-13.70820393249939],[-3.2360679774997387,-13.708203932499366,-13.708203932499393],[8.472135954999562,5.236067977499785,16.944271909999177],[3.236067977499717,13.708203932499385,-13.708203932499375],[-8.472135954999588,-5.236067977499792,16.94427190999914],[2.1444060197827312e-14,18.944271909999166,-5.236067977499802],[2.1444060197827312e-14,-18.944271909999166,-5.236067977499802],[3.2360679774998125,-13.708203932499343,-13.70820393249939],[-8.472135954999588,5.236067977499792,16.94427190999914],[13.708203932499348,13.708203932499385,-3.2360679774998347],[-5.236067977499826,-16.944271909999138,8.472135954999583],[-13.708203932499366,13.708203932499355,-3.236067977499786],[5.236067977499781,-16.94427190999917,8.472135954999585],[13.708203932499348,13.708203932499385,3.2360679774998347],[-5.236067977499837,-16.94427190999916,-8.472135954999535],[-13.708203932499364,13.70820393249939,3.2360679774997383],[5.236067977499781,-16.94427190999917,-8.472135954999585],[18.94427190999916,5.23606797749981,-2.1444060197827303e-14],[-18.94427190999916,5.23606797749981,-2.1444060197827303e-14]]
        edgesData=[[1,0],[11,0],[11,10],[11,6],[13,12],[13,4],[13,6],[14,12],[15,14],[15,2],[15,7],[16,10],[17,16],[17,7],[17,8],[19,18],[21,20],[23,22],[24,22],[25,24],[26,20],[27,26],[29,28],[3,2],[31,24],[31,28],[31,30],[32,3],[33,14],[33,28],[33,32],[35,18],[35,20],[35,34],[37,1],[37,3],[37,36],[38,1],[39,10],[39,18],[39,38],[40,26],[40,29],[41,32],[41,40],[42,30],[42,9],[43,16],[43,29],[43,42],[44,38],[45,19],[45,22],[45,44],[47,46],[47,5],[47,9],[48,34],[48,5],[49,12],[49,19],[49,48],[5,4],[50,23],[50,8],[51,44],[51,46],[51,50],[52,27],[52,4],[53,41],[53,46],[53,52],[54,2],[54,21],[55,34],[55,36],[55,54],[56,0],[56,25],[57,30],[57,36],[57,56],[58,21],[58,23],[59,25],[59,27],[59,58],[7,6],[9,8]]
        circumR=sqrt(386.3018460649821)
        L=90
        s=0.5
        L2=L
        faceData=[[0,1,38,44,45,22,24,25,56],[4,5,48,34,35,20,26,27,52],[2,54,55,34,48,49,12,14,15],[8,50,51,44,38,39,10,16,17],[2,3,32,41,40,26,20,21,54],[8,9,42,30,31,24,22,23,50],[0,56,57,30,42,43,16,10,11],[4,52,53,41,32,33,14,12,13],[23,50,51,46,53,52,27,59,58],[21,54,55,36,57,56,25,59,58],[0,1,37,3,2,15,7,6,11],[4,5,47,9,8,17,7,6,13],[6,11,10,39,18,19,49,12,13],[7,15,14,33,28,29,43,16,17],[18,19,45,22,23,58,21,20,35],[24,25,59,27,26,40,29,28,31],[3,32,33,28,31,30,57,36,37],[1,38,39,18,35,34,55,36,37],[9,42,43,29,40,41,53,46,47],[5,48,49,19,45,44,51,46,47]]
        JL=vertexData.length
      break
      case 146:
        vertexData=[[0.5,0.5,2.118033988749895,0],[0.5,0.5,-2.118033988749895,0],[0.5,-0.5,2.118033988749895,0],[-0.5,0.5,2.118033988749895,0],[0.5,-0.5,-2.118033988749895,0],[-0.5,-0.5,2.118033988749895,0],[-0.5,0.5,-2.118033988749895,0],[-0.5,-0.5,-2.118033988749895,0],[0.5,2.118033988749895,0.5,0],[-0.5,2.118033988749895,0.5,0],[0.5,-2.118033988749895,0.5,0],[0.5,2.118033988749895,-0.5,0],[0.5,-2.118033988749895,-0.5,0],[-0.5,2.118033988749895,-0.5,0],[-0.5,-2.118033988749895,0.5,0],[-0.5,-2.118033988749895,-0.5,0],[2.118033988749895,0.5,0.5,0],[2.118033988749895,0.5,-0.5,0],[2.118033988749895,-0.5,-0.5,0],[-2.118033988749895,0.5,-0.5,0],[2.118033988749895,-0.5,0.5,0],[-2.118033988749895,-0.5,0.5,0],[-2.118033988749895,-0.5,-0.5,0],[-2.118033988749895,0.5,0.5,0],[1.3090169943749475,0.8090169943749475,1.618033988749895,0],[1.3090169943749475,-0.8090169943749475,1.618033988749895,0],[1.3090169943749475,0.8090169943749475,-1.618033988749895,0],[-1.3090169943749475,0.8090169943749475,1.618033988749895,0],[-1.3090169943749475,-0.8090169943749475,1.618033988749895,0],[1.3090169943749475,-0.8090169943749475,-1.618033988749895,0],[-1.3090169943749475,0.8090169943749475,-1.618033988749895,0],[-1.3090169943749475,-0.8090169943749475,-1.618033988749895,0],[0.8090169943749475,1.618033988749895,1.3090169943749475,0],[0.8090169943749475,1.618033988749895,-1.3090169943749475,0],[0.8090169943749475,-1.618033988749895,1.3090169943749475,0],[-0.8090169943749475,1.618033988749895,1.3090169943749475,0],[-0.8090169943749475,1.618033988749895,-1.3090169943749475,0],[-0.8090169943749475,-1.618033988749895,1.3090169943749475,0],[0.8090169943749475,-1.618033988749895,-1.3090169943749475,0],[-0.8090169943749475,-1.618033988749895,-1.3090169943749475,0],[1.618033988749895,1.3090169943749475,0.8090169943749475,0],[1.618033988749895,1.3090169943749475,-0.8090169943749475,0],[1.618033988749895,-1.3090169943749475,0.8090169943749475,0],[-1.618033988749895,1.3090169943749475,0.8090169943749475,0],[-1.618033988749895,-1.3090169943749475,0.8090169943749475,0],[-1.618033988749895,1.3090169943749475,-0.8090169943749475,0],[1.618033988749895,-1.3090169943749475,-0.8090169943749475,0],[-1.618033988749895,-1.3090169943749475,-0.8090169943749475,0],[1.8090169943749475,0,1.3090169943749475,0],[1.8090169943749475,0,-1.3090169943749475,0],[-1.8090169943749475,0,1.3090169943749475,0],[-1.8090169943749475,0,-1.3090169943749475,0],[0,1.3090169943749475,1.8090169943749475,0],[0,1.3090169943749475,-1.8090169943749475,0],[0,-1.3090169943749475,1.8090169943749475,0],[0,-1.3090169943749475,-1.8090169943749475,0],[1.3090169943749475,1.8090169943749475,0,0],[-1.3090169943749475,1.8090169943749475,0,0],[1.3090169943749475,-1.8090169943749475,0,0],[-1.3090169943749475,-1.8090169943749475,0,0]]
        edgesData=[[11,9],[13,8],[14,12],[15,10],[18,16],[20,17],[21,19],[23,22],[24,14],[24,16],[25,20],[25,9],[26,15],[26,17],[27,10],[27,23],[28,21],[28,8],[29,13],[29,18],[3,2],[30,12],[30,19],[31,11],[31,22],[32,0],[32,19],[33,1],[33,23],[34,2],[34,22],[35,17],[35,3],[36,16],[36,6],[37,18],[37,5],[38,21],[38,4],[39,20],[39,7],[40,4],[40,8],[41,11],[41,2],[42,1],[42,10],[43,7],[43,9],[44,14],[44,6],[45,13],[45,5],[46,0],[46,12],[47,15],[47,3],[48,40],[48,42],[49,41],[49,46],[5,0],[50,43],[50,44],[50,48],[51,45],[51,47],[51,49],[52,24],[52,27],[53,26],[53,30],[53,52],[54,25],[54,28],[55,29],[55,31],[55,54],[56,32],[56,33],[57,35],[57,36],[58,34],[58,38],[58,56],[59,37],[59,39],[59,57],[6,4],[7,1]] 
        circumR=sqrt(sq(sqrt(5)/2+1)+0.5)
        L=90
        s=0.5
        L2=L
        faceData=[[2,3,35,17,20,25,9,11,41],[38,4,6,44,14,12,30,19,21],[33,56,32,19,30,53,52,27,23],[20,25,54,55,29,18,37,59,39],[22,23,27,10,15,47,3,2,34],[29,18,16,36,6,4,40,8,13],[0,5,37,18,16,24,14,12,46],[11,9,43,7,1,33,23,22,31],[32,19,21,28,8,13,45,5,0],[15,10,42,1,7,39,20,17,26],[25,9,43,50,48,40,8,28,54],[12,46,49,51,47,15,26,53,30],[58,34,2,41,49,46,0,32,56],[7,39,59,57,36,6,44,50,43],[14,44,50,48,42,10,27,52,24],[49,41,11,31,55,29,13,45,51],[36,16,24,52,53,26,17,35,57],[21,28,54,55,31,22,34,58,38],[42,48,40,4,38,58,56,33,1],[57,35,3,47,51,45,5,37,59]]
        JL=vertexData.length
      break
      case 145:
        vertexData=dodecahedron
        edgesData=[[0,11],[0,15],[0,19],[1,10],[1,14],[1,19],[2,11],[2,13],[2,18],[3,10],[3,12],[3,18],[4,9],[4,15],[4,17],[5,8],[5,14],[5,17],[6,9],[6,13],[6,16],[7,8],[7,12],[7,16],[8,9],[10,11],[12,14],[13,15],[16,18],[17,19]]
        edgesData.push([0,3],[0,5],[0,6],[0,9],[0,14],[0,18],[1,2],[1,4],[1,7],[1,8],[1,15],[1,18],[2,4],[2,7],[2,9],[2,12],[2,19],[3,5],[3,6],[3,8],[3,13],[3,19],[4,7],[4,11],[4,14],[4,16],[5,6],[5,10],[5,15],[5,16],[6,11],[6,12],[6,17],[7,10],[7,13],[7,17],[8,13],[8,15],[8,18],[8,19],[9,12],[9,14],[9,18],[9,19],[10,13],[10,15],[10,16],[10,17],[11,12],[11,14],[11,16],[11,17],[12,17],[12,19],[13,17],[13,19],[14,16],[14,18],[15,16],[15,18])
        circumR=sqrt(3)
        L=90
        s=0.5
        L2=L
        faceData=[[0,3,18],[0,3,19],[0,5,14],[0,5,15],[0,6,9],[0,6,11],[0,9,19],[0,11,14],[0,15,18],[1,2,18],[1,2,19],[1,4,14],[1,4,15],[1,7,8],[1,7,10],[1,8,19],[1,10,15],[1,14,18],[2,4,9],[2,4,11],[2,7,12],[2,7,13],[2,9,18],[2,11,12],[2,13,19],[3,5,8],[3,5,10],[3,6,12],[3,6,13],[3,8,18],[3,10,13],[3,12,19],[4,7,16],[4,7,17],[4,9,14],[4,11,17],[4,15,16],[5,6,16],[5,6,17],[5,8,15],[5,10,17],[5,14,16],[6,9,12],[6,11,16],[6,13,17],[7,8,13],[7,10,16],[7,12,17],[8,9,18],[8,9,19],[8,13,15],[9,12,14],[10,11,16],[10,11,17],[10,13,15],[11,12,14],[12,17,19],[13,17,19],[14,16,18],[15,16,18]]
        JL=vertexData.length
      break
      case 147:
        vertexData=dodecahedron
        edgesData=[[0,8],[0,12],[0,16],[1,9],[1,13],[1,16],[2,8],[2,14],[2,17],[3,9],[3,15],[3,17],[4,10],[4,12],[4,18],[5,11],[5,13],[5,18],[6,10],[6,14],[6,19],[7,11],[7,15],[7,19],[8,10],[9,11],[12,13],[14,15],[16,17],[18,19]]
        edgesData.push([0,3],[0,5],[0,6],[0,9],[0,14],[0,18],[1,2],[1,4],[1,7],[1,8],[1,15],[1,18],[2,4],[2,7],[2,9],[2,12],[2,19],[3,5],[3,6],[3,8],[3,13],[3,19],[4,7],[4,11],[4,14],[4,16],[5,6],[5,10],[5,15],[5,16],[6,11],[6,12],[6,17],[7,10],[7,13],[7,17],[8,13],[8,15],[8,18],[8,19],[9,12],[9,14],[9,18],[9,19],[10,13],[10,15],[10,16],[10,17],[11,12],[11,14],[11,16],[11,17],[12,17],[12,19],[13,17],[13,19],[14,16],[14,18],[15,16],[15,18])
        circumR=sqrt(3)
        L=90
        s=0.5
        L2=L
        faceData=[[0,3,8],[0,3,9],[0,9,12],[3,8,15],[4,7,10],[4,7,11],[7,10,15],[4,11,12],[8,10,15],[9,11,12],[0,8,18],[8,18,19],[2,8,19],[2,7,19],[2,7,17],[7,11,17],[11,16,17],[5,11,16],[0,5,16],[0,5,18],[0,6,12],[6,12,19],[12,13,19],[7,13,19],[1,7,13],[1,7,15],[1,15,16],[14,15,16],[0,14,16],[0,6,14],[1,2,9],[2,9,14],[9,11,14],[6,11,14],[5,6,11],[5,6,10],[5,10,13],[8,10,13],[1,8,13],[1,2,8],[1,9,18],[9,18,19],[3,9,19],[3,6,19],[3,6,17],[6,10,17],[10,16,17],[4,10,16],[1,4,16],[1,4,18],[2,4,14],[4,14,18],[14,15,18],[5,15,18],[3,5,15],[3,5,13],[3,13,17],[12,13,17],[2,12,17],[2,4,12]]
        JL=vertexData.length
      break
    }
  }else if(inp2.value()==-1){
    fct = 2
    s=1
    circumR=1
    JL=vertexData.length
  }else if(inp2.value()==2) {
    edgesData=[]
    rotArr=[0]
    A = inp4.value()*1
    B = inp5.value()*1%A
    s=5/A
    s2=s
    if(B>A/2) {
      B=A-B
      inp5.value(B)
    }else if(inp5.value()*1>A) {
      inp5.value(B%A)
    }else if(B<0) {
      B=abs(B)
      inp5.value(B)
    }
    gcm = 1
    for(var i = 1; i<A; i++) {
      if(floor(B/i)==B/i&&floor(A/i)==A/i) {
        gcm=i
      }
    }
    A/=gcm
    B/=gcm
    L=A*gcm
    L2=A*gcm
    vertexData=[]
    var ang = 0
    if(A*gcm*B%2==0) {
      ang+=PI/A*B
    }
    for(var i = 0; i<A*gcm; i++) {
      vertexData[i]=[sin(PI*2/A/gcm*i+ang),-cos(PI*2/A/gcm*i+ang),0,0]
    }
    faceData=[[]]
    for(var i = 0; i<gcm; i++) {
      for(var j = 0; j<A*B*gcm; j+=B*gcm) {
        faceData[0][faceData[0].length]=j%(A*gcm)+i
      }
      if(i<gcm-1) {
        faceData[0][faceData[0].length]=undefined
      }
    }
    if(A==2) {
      faceData=[]
    }
    edgeLength=sqrt(sq(1-cos(PI*2/A*B))+sq(sin(PI*2/A*B)))
    JL=vertexData.length
  }else {
    edgesData=[]
    switch(polytopeID) {
      case 0:
      edgeLength=2/sqrt(1.6)
      arr=[[sqrt(2/3)*sqrt(15/16),-sqrt(2/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[-sqrt(2/3)*sqrt(15/16),-sqrt(2/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[0,sqrt(8/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[0,0,1*sqrt(15/16),1/4],[0,0,0,-1]]
      for(var i = 4; i<dimentionCount; i++) {
        var D = i+1
        for(var j = 0; j<arr.length; j++) {
          for(var k = 0; k<arr[j].length; k++) {
            arr[j][k]*=sqrt(1-1/sq(D))
          }
          arr[j][arr[j].length]=1/D
        }
        edgeLength*=sqrt(1-1/sq(D))
        var AS = arr.length
        arr[AS]=[]
        for(var l = 0; l<D; l++) {
          arr[AS][l]=0
        }
        arr[AS][D-1]=-1
      }
      circumR=1
      L=0.5*sq(dimentionCount)+0.5*dimentionCount
      L2=L
      vertexData=arr
      break
      case 1:
      var ed = 4
      for(var i = 2; i<dimentionCount; i++) {
        ed*=2
        ed+=pow(2,i)
      }
      var array = []
      for(var i = 0; i<2**dimentionCount; i++) {
        array[i]=[]
        var str = (i+pow(2,dimentionCount)).toString(2)
        for(var j = 0; j<dimentionCount; j++) {
          array[i][j]=str.charAt(j+1)*2-1
        }
      }
      vertexData=array
      circumR=sqrt(dimentionCount)
      edgeLength=2
      L=ed
      L2=L
      break
      case 2:
      case 3:
      var array=[]
      for(var i = 0; i<dimentionCount; i++) {
        array[i*2]=[]
        array[i*2+1]=[]
        for(var j = 0; j<dimentionCount; j++) {
          array[i*2][j]=0
          array[i*2+1][j]=0
        }
        array[i*2][i]=1
        array[i*2+1][i]=-1
      }
      vertexData=array
      edgeLength=sqrt(2)
      circumR=1
      L=2*sq(dimentionCount)-2*dimentionCount
      L2=L
      for(var i = 1; i<dimentionCount; i++) {
        for(var j = 0; j<i; j++) {
          rotArr[i-1][j]=PI/(4+j)
        }
      }
      break
    }
    JL=vertexData.length
    if(polytopeID==3) {
      L+=dimentionCount
      intersectionD=2
    }
  }
  mrSlider.value(fct)
  if(orthoOn>0) {
    zoom = 1
  }
if(s2==undefined) {
    s2=s
  }
}
_=1
function comp2(a,b) {
  return a-b
}
function centercell() {
  if(dimentionCount==4) {//do nothing if dimention not set to 4
    resetCamera()//resets rotation
  }
}
function centervertex() {
  resetCamera()
  if(dimentionCount==4) {
    mrSlider.value(1)
    switch(polytopeID) {
      case 0:
        mrSlider.value(2)
        rotArr[2][0] = PI
        s=1
      break
      case 1:
      zoom = 0.5
      rotArr[2][0] = PI/4
      rotArr[2][1] = atan(sqrt(0.5))
      rotArr[2][2] = PI/6
      s=1
      break
      case 2:
        mrSlider.value(2)
        L=24
        zoom=1
        rotArr[2][0] = 0
        rotArr[2][1] = 0
        rotArr[2][2] = 0
        s=1
      break
      case 3:
      L=96
      rotArr[2][0] = 0
      rotArr[2][1] = 0
      rotArr[2][2] = 0
      s=1
      break
      case 4:
      zoom = 1/4
      L=1200
      rotArr[2][0] = atan(-1.131224095251652/phi2)
      rotArr[2][1] = atan(-0.6570593885126689/2.8519764935790763)
      rotArr[2][2] = atan(-2.2677537283706792/2.9266870280165325)
      s=1
      break
      case 5:
      case 6:
      case 8:
      case 9:
      case 11:
      case 12:
      case 13:
      case 14:
      case 10:
      case 11:
      case 7:
        mrSlider.value(1.1)
        zoom = 1/8
        s=0.25
        rotArr[2][0] = 0
        rotArr[2][1] = 0
        rotArr[2][2] = 0
      break
    }
  }else if(polytopeID==3) {
    switch(polytopeID) {
      case 0:
      rotArr[1][0]=PI
      case 1:
      rotArr[1][1] = PI/4
      rotArr[1][0] = atan(sqrt(0.5))
      break
      case 2:
      rotArr[1][1] = 0
      rotArr[1][0] = 0
      break
      case 3:
      case 7:
      rotArr[1][0] = atan(phi_2)
      rotArr[1][1] = 0
      break
      case 4:
      case 5:
      case 6:
      case 7:
      rotArr[2][0] = atan(1/sqrt(5))/2
      rotArr[2][1] = atan(1/sqrt(6))/2
      rotArr[2][2] = atan(1/sqrt(7))/2
      break
    }
  }
  if(orthoOn>0) {
    zoom = 1
  }
}
function centerE() {
  resetCamera()
  if(dimentionCount==4) {
    switch(polytopeID) {
      case 0:
      rotArr[2][2] = PI/sqrt(2)
      break
      case 1:
      rotArr[2][2] = 0
      break
      case 2:
      rotArr[2][1] = 0
      rotArr[2][2] = 0
      fct=1.25
      zoom=1/2
      break
      case 3:
      rotArr[2][0] = atan(1)
      rotArr[2][1] = atan(1/sqrt(2))
      rotArr[2][2] = 0
      break
      case 4:
      case 15:
      rotArr[2][0] = atan(1/sqrt(7))
      rotArr[2][1] = 0
      rotArr[2][2] = 0
      fct=1
      zoom=1/25
      break
      case 5:
      case 6:
      case 8:
      case 9:
      case 11:
      case 12:
      case 13:
      case 14:
      case 10:
      case 11:
      case 7:
      rotArr[2][0] = atan(phi)
      rotArr[2][1] = 0
      rotArr[2][2] = 0
      fct=1
      zoom=0.1
      break
    }
  }else if(polytopeID==3){
    switch(polytopeID) {
      case 0:
      rotArr[1][1]=PI/sqrt(2)
      break
      case 1:
      rotArr[1][1] = PI/4
      break
      case 2:
      rotArr[1][1] = PI/4
      rotArr[1][0] = 0
      break
      case 3:
      case 7:
      rotArr[1][0]=0
      rotArr[1][1]=0
      break
      case 4:
      case 5:
      case 6:
      case 8:
      rotArr[1][0]=0
      rotArr[1][1]=0
      break
    }
  }
  if(orthoOn>0) {
    zoom = 1
  }
  mrSlider.value(fct)
}
function cbrt(x) {
  var a = x/abs(x)
  return pow(abs(x),1/3)*a
}
function centerF() {
  resetCamera()
  if(dimentionCount==4) {
    switch(polytopeID) {
      case 0:
      rotArr[2][2] =PI*sqrt(3)
      break
      case 1:
      rotArr[2][0] = PI/4
      break
      case 2:
      rotArr[2][2] = 0
      break
      case 3:
      rotArr[2][0] = atan(1)
      rotArr[2][1] = atan(1.5)
      rotArr[2][2] = 0
      break
      case 4:
      case 15:
      rotArr[2][0] = atan(phi)
      rotArr[2][1] = 0
      rotArr[2][2] = 0
      fct=1
      zoom=1/15
      break
      case 5:
      case 6:
      case 8:
      case 9:
      case 11:
      case 12:
      case 13:
      case 14:
      case 10:
      case 11:
      case 7:
      rotArr[2][0] = atan(1/sqrt(7))
      rotArr[2][1] = 0
      rotArr[2][2] = 0
      zoom=1/30
      break
    }
  }
  if(orthoOn>0) {
    zoom = 1
  }
  mrSlider.value(fct)
}
function interpretOFF(off) {
  dimentionCount=0
  var jjjj = off.data
  var str = ''
  for(var i = 37; i<jjjj.length-2; i++) {
    str+=jjjj.charAt(i)
  }
  str=trim(atob(str))
  str+=' '
  str=splitTokens(str,'\n')
  var str2 = []
  for(var i = 0; i<str.length; i++) {
    str2[i]=''
    for(var j = 0; j<str[i].length; j++) {
      var T = str[i].charAt(j)
      if(T=='#') {
        break
      }else {
        str2[i]+=T
      }
    }
  }
  str=join(str2,' ')
  str=trim(str)
  var arr = []
  var j = 0
  if(str.substring(1,4)=='OFF') {
    dimentionCount=str.charAt(0)*1
    str=str.substring(4,str.length)
  }else if(str.substring(0,3)=='OFF') {
    str=str.substring(3,str.length)
    dimentionCount=3
  }else if(str.substring(2,5)=='OFF') {
    dimentionCount=str.substring(0,2)*1
    str=str.substring(5,str.length)
  }
  if(dimentionCount==0) {
    dimentionCount=4
    console.log('joe')
    return 0
  }
  arr=splitTokens(str)
  var arr2 = []
  for(var i = 0; i<arr.length; i++) {
    if(arr[i]*1==arr[i]*1) {
      arr2[arr2.length]=arr[i]*1
    }
  }
  arr=arr2
  var verTotal=arr[0]
  L=arr[2]
  vertexData=[]
  for(var i = dimentionCount; i<(verTotal+1)*dimentionCount; i++) {
    if(i%dimentionCount==0) {
      vertexData[i/dimentionCount-1]=[]
      if(dimentionCount==3) {
        vertexData[i/dimentionCount-1][3]=0
      }
    }
    vertexData[floor(i/dimentionCount-1)][i%dimentionCount]=arr[i]
  }
  faceData=[]
  var bob=(verTotal+1)*dimentionCount
  var dbob=0
  var arrA = []
  for(var r = 0; r<arr[1]+1; r++) {
    if(r>0) {
      faceData[r-1]=[]
    }
    for(var i = bob+1; i<dbob+bob; i++) {
      var a = arr[i]
      var b = arr[(i-bob)%(dbob-1)+bob+1]
      if(r>0) {
        faceData[r-1][faceData[r-1].length]=a
      }
      if(a>b) {
        arrA[arrA.length]=[a,b]
      }else {
        arrA[arrA.length]=[b,a]
      }
    }
    bob+=dbob
    dbob=arr[bob]+1
  }
  arrA=arrA.sort()
  edgesData=[]
  for(var i = 0; i<arrA.length; i++) {
    for(;isSame(arrA[i],arrA[i-1])&&i<arrA.length;i++){}
    if(arrA[i]==undefined) {}else {
      edgesData[edgesData.length]=arrA[i]
    }
  }
  L2=L
  resetCamera()
}
function isSame(arr1,arr2) {
  if(arr2==undefined||arr1==undefined) {
    return false
  }
  var a_ = true
  for(var i = 0; i<arr1.length; i++) {
    if(abs(arr1[i]-arr2[i])>0.01) {
      a_=false
    }
  }
  return a_
}
function dual() {
  if(inp2.value()==5) {
    switch(inp.value()*1) {
      case 1:
        inp.value(2)
      break
      case 2:
        inp.value(1)
      break
    }
  }else if(inp2.value()==3) {
    var P = polytopeID
    var A = yoMama.selected()
    switch(A) {
      case 'QR':
        yoMama.selected('QRD')
        changeDimension()
      break
      case 'QRD':
        yoMama.selected('QR')
        changeDimension()
      break
      case 'U':
        yoMama.selected('UD')
        changeDimension()
      break
      case 'UD':
        yoMama.selected('U')
        changeDimension()
      break
    }
    switch(P) {
      case 1:
        inp.value(2)
      break
      case 2:
        inp.value(1)
      break
      case 3:
        inp.value(4)
      break
      case 4:
        inp.value(3)
      break
      case 5:
        inp.value(6)
      break
      case 6:
        inp.value(5)
      break
      case 7:
        inp.value(8)
      break
      case 8:
        inp.value(7)
      break
      case 9:
        inp.value(10)
      break
      case 10:
        inp.value(9)
      break
      case 12:
        inp.value(11)
      break
      case 11:
        inp.value(12)
      break
      case 16:
        inp.value(15)
      break
      case 15:
        inp.value(16)
      break
      case 14:
        inp.value(13)
      break
      case 13:
        inp.value(14)
      break
      case 27:
        inp.value(26)
      break
      case 26:
        inp.value(27)
      break
      case 29:
        inp.value(28)
      break
      case 28:
        inp.value(29)
      break
      case 31:
        inp.value(30)
      break
      case 30:
        inp.value(31)
      break
      case 32:
        inp.value(33)
      break
      case 33:
        inp.value(32)
      break
      case 34:
        inp.value(35)
      break
      case 35:
        inp.value(34)
      break
      case 36:
        inp.value(37)
      break
      case 37:
        inp.value(36)
      break
      case 38:
        inp.value(39)
      break
      case 39:
        inp.value(38)
      break
      case 40:
        inp.value(41)
      break
      case 41:
        inp.value(40)
      break
      case 42:
        inp.value(43)
      break
      case 43:
        inp.value(42)
      break
      case 44:
        inp.value(45)
      break
      case 45:
        inp.value(44)
      break
      case 46:
        inp.value(47)
      break
      case 47:
        inp.value(46)
      break
      case 48:
        inp.value(49)
      break
      case 49:
        inp.value(48)
      break
      case 50:
        inp.value(51)
      break
      case 51:
        inp.value(50)
      break
      case 52:
        inp.value(53)
      break
      case 53:
        inp.value(52)
      break
      case 54:
        inp.value(55)
      break
      case 55:
        inp.value(54)
      break
      case 56:
        inp.value(57)
      break
      case 57:
        inp.value(56)
      break
      case 58:
        inp.value(59)
      break
      case 59:
        inp.value(58)
      break
      case 60:
        inp.value(61)
      break
      case 61:
        inp.value(60)
      break
      case 62:
        inp.value(63)
      break
      case 63:
        inp.value(62)
      break
      case 64:
        inp.value(65)
      break
      case 65:
        inp.value(64)
      break
      case 66:
        inp.value(67)
      break
      case 67:
        inp.value(66)
      break
      case 68:
        inp.value(69)
      break
      case 69:
        inp.value(68)
      break
      case 70:
        inp.value(71)
      break
      case 71:
        inp.value(70)
      break
      case 72:
        inp.value(73)
      break
      case 73:
        inp.value(72)
      break
      case 74:
        inp.value(75)
      break
      case 75:
        inp.value(74)
      break
      case 76:
        inp.value(77)
      break
      case 77:
        inp.value(76)
      break
      case 78:
        inp.value(79)
      break
      case 79:
        inp.value(78)
      break
      case 80:
        inp.value(81)
      break
      case 81:
        inp.value(80)
      break
      case 82:
        inp.value(83)
      break
      case 83:
        inp.value(82)
      break
      case 84:
        inp.value(85)
      break
      case 85:
        inp.value(84)
      break
      case 86:
        inp.value(87)
      break
      case 87:
        inp.value(86)
      break
      case 88:
        inp.value(89)
      break
      case 89:
        inp.value(88)
      break
      case 90:
        inp.value(91)
      break
      case 91:
        inp.value(90)
      break
      case 92:
        inp.value(93)
      break
      case 93:
        inp.value(92)
      break
      case 94:
        inp.value(95)
      break
      case 95:
        inp.value(94)
      break
      case 96:
        inp.value(97)
      break
      case 97:
        inp.value(96)
      break
      case 98:
        inp.value(99)
      break
      case 99:
        inp.value(98)
      break
      case 100:
        inp.value(101)
      break
      case 101:
        inp.value(100)
      break
      case 130:
        inp.value(131)
      break
      case 131:
        inp.value(130)
      break
      case 132:
        inp.value(133)
      break
      case 133:
        inp.value(132)
      break
      case 138:
        inp.value(132)
      break
      case 139:
        inp.value(138)
      break
      case 140:
        inp.value(141)
      break
      case 141:
        inp.value(140)
      break
      case 144:
        inp.value(145)
      break
      case 145:
        inp.value(144)
      break
      case 146:
        inp.value(147)
      break
      case 147:
        inp.value(146)
      break
    }
  }else {
    switch(polytopeID) {
      case 1:
        inp.value(2)
      break
      case 2:
        inp.value(1)
      break
      case 4:
        inp.value(5)
      break
      case 5:
        inp.value(4)
      break
      case 6:
        inp.value(7)
      break
      case 7:
        inp.value(6)
      break
      case 9:
        inp.value(10)
      break
      case 10:
        inp.value(9)
      break
      case 12:
        inp.value(26)
      break
      case 17:
        inp.value(12)
      break
      case 14:
        inp.value(15)
      break
      case 15:
        inp.value(14)
      break
    }
  }
  if(polytopeID!==136) {
    changePolytope()
  }else {
    mrror()
  }
}
function verf() {
  if(inp2.value()==5) {
    inp3.value(inp3.value()-1)
    switch(inp.value()*1) {
      case 0:
      case 1:
        inp.value(0)
      break
    }
    if(inp3.value()==4) {
      inp2.value(4)
    }
    changeDimension()
    if(inp.value()==4&&inp2.value()==4) {
      inp.value(16)
      changePolytope()
    }
  }else if(inp2.value()==3) {
    inp2.value(2)
    inp5.value(1)
    switch(polytopeID) {
      case 0:
      case 1:
      case 3:
      case 7:
      case 32:
      case 38:
      case 40:
      case 44:
      case 50:
      case 60:
      case 66:
      case 68:
      case 80:
      case 82:
      case 84:
      case 86:
      case 130:
      case 135:
      case 136:
      case 144:
      case 146:
        inp4.value(3)
      break
      case 2:
      case 9:
      case 11:
      case 15:
      case 13:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
      case 24:
      case 25:
      case 36:
      case 48:
      case 54:
      case 56:
      case 58:
      case 62:
      case 64:
      case 68:
      case 70:
      case 72:
      case 74:
      case 76:
      case 88:
      case 90:
      case 92:
      case 94:
      case 96:
      case 98:
      case 100:
      case 132:
        inp4.value(4)
      break
      case 4:
      case 5:
      case 42:
      case 52:
      case 140:
      case 142:
      case 143:
        inp4.value(5)
      break
      case 6:
      case 8:
      case 141:
        inp4.value(5)
        inp5.value(2)
      break
      case 26:
      case 28:
      case 30:
      case 134:
        inp4.value(6)
        inp5.value(1)
      break
      case 137:
      case 138:
        inp4.value(6)
        inp5.value(2)
      break
      case 10:
        if(random(7)<4) {
          inp4.value(3)
        }else {
          inp4.value(4)
        }
      break
      case 12:
      case 31:
        if(random(8)<5) {
          inp4.value(3)
        }else {
          inp4.value(5)
        }
      break
      case 16:
      case 29:
        if(random(8)<5) {
          inp4.value(3)
        }else {
          inp4.value(5)
          inp5.value(2)
        }
      break
      case 14:
      case 27:
      inp4.value(5)
        if(random(2)<1) {
          inp5.value(2)
        }
      break
      case 33:
        if(random(7)<4) {
          inp4.value(3)
        }else {
          inp4.value(8)
        }
      break
      case 35:
        if(random(7)<4) {
          inp4.value(3)
        }else {
          inp4.value(6)
        }
      break
      case 37:
        if(random(26)<8) {
          inp4.value(3)
        }else {
          inp4.value(4)
        }
      break
      case 39:
        if(random(26)<8) {
          inp4.value(6)
        }else if(random(18)<6) {
          inp4.value(8)
        }else {
          inp4.value(4)
        }
      break
      case 41:
        if(random(1)<2) {
          inp4.value(3)
        }else {
          inp4.value(6)
        }
      break
      case 43:
        if(random(38)<6) {
          inp4.value(4)
        }else {
          inp4.value(3)
        }
      break
      case 45:
        if(random(32)<12) {
          inp4.value(10)
        }else {
          inp4.value(3)
        }
      break
      case 47:
        if(random(32)<12) {
          inp4.value(5)
        }else {
          inp4.value(6)
        }
      break
      case 49:
        if(random(32+30)<30) {
          inp4.value(4)
        }else if(random(32)<20) {
          inp4.value(3)
        }else {
          inp4.value(5)
        }
      break
      case 51:
        if(random(32+30)<30) {
          inp4.value(4)
        }else if(random(32)<20) {
          inp4.value(6)
        }else {
          inp4.value(10)
        }
      break
      case 53:
        if(random(32+30)<30) {
          inp4.value(4)
        }else if(random(32)<20) {
          inp4.value(6)
        }else {
          inp4.value(10)
        }
      break
      case 55:
        if(random(20)<6) {
          inp4.value(4)
        }else if(random(14)<8) {
          inp4.value(3)
        }else {
          inp4.value(8)
          inp5.value(3)
        }
      break
      case 57:
        if(random(26)<8) {
          inp4.value(3)
        }else {
          inp4.value(4)
        }
      break
      case 59:
        if(random(18)<12) {
          inp4.value(4)
        }else {
          inp4.value(8)
          inp5.value(3)
        }
      break
      case 61:
        if(random(8+6)<8) {
          inp4.value(3)
        }else {
          inp4.value(8)
          inp5.value(3)
        }
      break
      case 63:
        if(random(8+6+6)<6) {
          inp4.value(8)
        }else if(random(8+6)<6) {
          inp4.value(4)
        }else {
          inp4.value(3)
        }
      break
      case 65:
        if(random(12+6)<6) {
          inp4.value(8)
        }else {
          inp4.value(4)
        }
      break
      case 67:
        if(random(20)<12) {
          inp4.value(8)
          if(random(2)<1) {
            inp5.value(3)
          }
        }else {
          inp4.value(6)
        }
      break
      case 69:
        if(random(32)<12) {
          inp4.value(10)
        }else {
          inp4.value(6)
        }
      break
      case 71:
        if(random(42)<30) {
          inp4.value(4)
        }else {
          inp4.value(10)
        }
      break
      case 73:
        if(random(44)<20) {
          inp4.value(3)
        }else if(random(24)<12) {
          inp4.value(10)
        }else {
          inp4.value(5)
        }
      break
      case 75:
        if(random(50)<30) {
          inp4.value(4)
        }else {
          inp4.value(6)
        }
      break
      case 77:
        if(random(52)<20) {
          inp4.value(3)
        }else if(random(32)<20) {
          inp4.value(6)
        }else {
          inp4.value(5)
        }
      break
      case 79:
        if(random(26)<8) {
          inp4.value(6)
        }else if(random(18)<6) {
          inp4.value(8)
          inp5.value(3)
        }else {
          inp4.value(4)
        }
      break
      case 81:
        if(random(2)<1) {
          inp4.value(10)
        }else {
          inp4.value(5)
          inp5.value(2)
        }
      break
      case 83:
        if(random(2)<1) {
          inp4.value(10)
          inp5.value(3)
        }else {
          inp4.value(5)
        }
      break
      case 85:
        if(random(32)<12) {
          inp4.value(10)
          inp5.value(3)
        }else {
          inp4.value(3)
        }
      break
      case 87:
        if(random(32)<12) {
          inp4.value(5)
          inp5.value(2)
        }else {
          inp4.value(6)
        }
      break
      case 89:
        if(random(32)<12) {
          inp4.value(10)
          inp5.value(3)
        }else {
          inp4.value(6)
        }
      break
      case 91:
        if(random(42)<12) {
          inp4.value(10)
          inp5.value(3)
        }else {
          inp4.value(4)
        }
      break
      case 93:
        if(random(44)<12) {
          inp4.value(5)
          inp5.value(2)
        }else if(random(32)<12) {
          inp4.value(5)
        }else {
          inp4.value(6)
        }
      break
      case 95:
        if(random(44)<12) {
          inp4.value(10)
        }else if(random(32)<12) {
          inp4.value(5)
        }else {
          inp4.value(3)
        }
      break
      case 97:
        if(random(44)<12) {
          inp4.value(10)
          inp5.value(3)
        }else if(random(32)<12) {
          inp4.value(5)
        }else {
          inp4.value(3)
        }
      break
      case 99:
        if(random(44)<12) {
          inp4.value(10)
          inp5.value(3)
        }else if(random(32)<12) {
          inp4.value(5)
          inp5.value(2)
        }else {
          inp4.value(3)
        }
      break
      case 101:
        if(random(52)<20) {
          inp4.value(6)
        }else if(random(32)<12) {
          inp4.value(5)
          inp5.value(2)
        }else {
          inp4.value(3)
        }
      break
      case 131:
        if(random(A*gcm+2)>2) {
          inp4.value(4)
        }
      break
      case 133:
        if(random(A*gcm*2+2)>2) {
          inp4.value(3)
        }
      break
      case 145:
        inp4.value(9)
        inp5.value(4)
      break
      case 147:
        inp4.value(9)
        inp5.value(2)
      break
    }
    changeDimension()
    switch(polytopeID) {
      case 9:
        rectan(1,sqrt(2),true)
      break
      case 11:
        rectan(1,phi,true)
      break
      case 15:
        rectan(1,phi_1,true)
      break
      case 13:
        rectan(phi,phi_1,true)
      break
      case 17:
        bwtie(1,sqrt(2),true)
      break
      case 18:
        bwtie(1,sqrt(3),true)
      break
      case 20:
        bwtie(1,sqrt((5+sqrt(5))/2),true)
      break
      case 25:
        bwtie(1,sqrt((5-sqrt(5))/2),true)
      break
      case 23:
        bwtie(phi_1,sqrt(3),true)
      break
      case 19:
        bwtie(sqrt(2),sqrt(3),true)
      break
      case 21:
        bwtie(phi,sqrt((5+sqrt(5))/2),true)
      break
      case 24:
        bwtie(phi_1,sqrt((5-sqrt(5))/2),true)
      break
      case 22:
        bwtie(phi,sqrt(3),true)
      break
      case 26:
        tripod(phi_1,phi,true)
      break
      case 28:
        ditrigon(1,phi_1,true)
      break
      case 30:
        tripod(1,phi,true)
      break
      case 32:
        icot(sqrt(2+sqrt(2)),1,true)
      break
      case 34:
        icot(sqrt(3),sqrt(2),true)
      break
      case 36:
        traz(1,sqrt(2),sqrt(2),true)
      break
      case 38:
        scaltri(sqrt(2),sqrt(3),sqrt(2+sqrt(2)),true)
      break
      case 40:
        icot(sqrt(3),1,true)
      break
      case 42:
        div4.html('irregular pentagon (1 edge length sqrt(2) side, rest edge length 1)')
      break
      case 44:
        icot(sqrt((5+sqrt(5))/2),1,true)
      break
      case 46:
        icot(sqrt(3),phi,true)
      break
      case 48:
        traz(1,phi,sqrt(2),true)
      break
      case 50:
        scaltri(sqrt(2),sqrt(3),sqrt(2.5+sqrt(5)/2),true)
      break
      case 52:
        div4.html('irregular pentagon (1 edge length phi side, rest edge length 1)')
      break
      case 54:
        traz(1,sqrt(2),sqrt(2-sqrt(2)),true)
      break
      case 56:
        traz(1,-sqrt(2),sqrt(2),true)
      break
      case 58:
        traz(1,sqrt(2),-sqrt(2-sqrt(2)),true)
      break
      case 60:
        icot(sqrt(2-sqrt(2)),1,true)
      break
      case 62:
        traz(1,-sqrt(2),sqrt(2+sqrt(2)),true)
      break
      case 64:
        traz(1,sqrt(2),-sqrt(2),true)
      break
      case 66:
        scaltri(sqrt(3),sqrt(2+sqrt(2)),sqrt(2-sqrt(2)),true)
      break
      case 68:
        traz(1,(sqrt(5)-1)/2,-sqrt(3),true)
      break
      case 70:
        traz(1,phi,-sqrt(2),true)
      break
      case 72:
        traz(1,-phi,sqrt((5+sqrt(5))/2),true)
      break
      case 74:
        traz(phi_1,phi,-sqrt(2),true)
      break
      case 76:
        traz(1,phi,sqrt(3),true)
      break
      case 78:
        scaltri(sqrt(2),sqrt(3),sqrt(2-sqrt(2)),true)
      break
      case 80:
        icot(sqrt((5+sqrt(5))/2),phi_1,true)
      break
      case 82:
        icot(sqrt((5-sqrt(5))/2),phi,true)
      break
      case 84:
        icot(sqrt((5-sqrt(5))/2),1,true)
      break
      case 86:
        icot(sqrt(3),phi_1,true)
      break
      case 88:
        traz(1,phi,-sqrt((5-sqrt(5))/2),true)
      break
      case 90:
        traz(1,phi_1,-sqrt((5-sqrt(5))/2),true)
      break
      case 92:
        traz(-phi_1,phi,sqrt(3),true)
      break
      case 94:
        traz(-phi_1,1,sqrt((5+sqrt(5))/2),true)
      break
      case 96:
        traz(1,phi,sqrt((5-sqrt(5))/2),true)
      break
      case 98:
        traz(1,phi_1,sqrt((5-sqrt(5))/2),true)
      break
      case 100:
        traz(1,phi_1,sqrt(3),true)
      break
      case 130:
        icot(sqrt(2+2*cos(2*PI/A*B)),sqrt(2),true)
      break
      case 132:
        traz(1,sqrt(2+2*cos(2*PI/A*B)),1,true)
      break
      case 134:
        nct(1,1+phi,true)
        s=1
      break
      case 137:
      case 138:
        vertexData=[[(3*sqrt(5)-1)/8,-sqrt(3)*phi/4,0],[-1/2,-sqrt(3)/2,0],[(-1-3*sqrt(5))/8,(sqrt(3)-sqrt(15))/8,0],[-1/2,sqrt(3)/2,0],[1/4,sqrt(15)/4,0],[1,0,0]]
      break
      case 144:
        icot(5.7888543819998,4,true)
      break
      case 146:
        icot(5.7888543819998,6+2*sqrt(5),true)
      break
      case 145:
        vertexData=[[-3-sqrt(5),-6.75973469215556,0],[1+sqrt(5),7.91443523053481,0],[0,-phi2-2,0],[-1-sqrt(5),7.91443523053481,0],[3+sqrt(5),-6.75973469215556,0],[-4,(phi+3)/2,0],[8.4721359549996,-sqrt(3/4),0],[-8.4721359549996,-sqrt(3/4),0],[4,(phi+3)/2,0]]
        faceData=[[0,1,2,3,4,5,6,7,8]]
        edgesData=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0]]
        for(var i = 0; i<vertexData.length; i++) {
          for(var j = 0; j<2; j++) {
            vertexData[i][j]/=phi2+2
          }
        }
        div4.html('irregular great nonagram')
        div3.html('dual to irregular great nonagram')
      break
      case 140:
        vertexData=[[2.519035170799437,-2.710764105139476,0],[0.611220424720422,1.001351008382214,0],[-0.611220424720422,1.001351008382214,0],[-2.519035170799437,-2.710764105139475,0],[0,-1.173155680028652,0]]
        faceData=[[0,1,2,3,4]]
        edgesData=[[0,1],[1,2],[2,3],[3,4],[4,0]]
        div4.html('irregular pentagon')
        div3.html('dual to irregular pentagon')
      break
      case 141:
        vertexData=[[0,7.1529207901013,0],[-0.8584387437193,1.3543327936703,0],[7.0758021163802,-1.0475209970652,0],[-7.0758021163802,-1.0475209970652,0],[0.8584387437193,1.3543327936703,0]]
        for(var i = 0; i<vertexData.length; i++) {
          for(var j = 0; j<2; j++) {
            vertexData[i][j]/=7.1529207901013
          }
        }
        faceData=[[0,1,2,3,4]]
        edgesData=[[0,1],[1,2],[2,3],[3,4],[4,0]]
        div4.html('irregular pentagram')
        div3.html('dual to irregular pentagram')
        s=1/2
        s2=1/2
      break
      case 142:
        vertexData=[[-0.1491726481383,1.091552968917734,0],[-1.432838831871845,0,0],[0.928191377985572,-2.007678918345082,0],[0.928191377985572,-0.593465355971987,0],[2.1185756179116,0,0]]
        faceData=[[0,1,2,3,4]]
        edgesData=[[0,1],[1,2],[2,3],[3,4],[4,0]]
        div4.html('irregular pentagon')
        div3.html('dual to irregular pentagon')
      break
      case 143:
        vertexData=[[6.595900090165,-14.5215497497666,0],[0,2.9189785561943,0],[-1.9307228355051,-2.182339171457,0],[0.8967552941335,-0.6930731234461,0],[0.3769970839518,-2.894530879126,0]]
        faceData=[[0,1,2,3,4]]
        edgesData=[[0,1],[1,2],[2,3],[3,4],[4,0]]
        div4.html('irregular pentagon')
        div3.html('dual to irregular pentagon')
        //s=1/2
      break
      case 147:
        vertexData=[[0.583592135001261,-0.336937076239927,0],[0.068883707497266,0.168468538119963,0],[-0.068883707497266,0.168468538119963,0],[-0.583592135001261,-0.336937076239927,0],[0.111456180001682,-0.143889309659471,0],[10*phi-16 
,-0.024579228460493,0],[0,0.673874152479852,0],[16-10*phi,-0.024579228460493,0],[-0.111456180001682,-0.143889309659471,0]]
        faceData=[[0,1,2,3,4,5,6,7,8]]
        edgesData=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0]]
        for(var i = 0; i<vertexData.length; i++) {
          for(var j = 0; j<2; j++) {
            vertexData[i][j]/=0.673874152479852
          }
        }
        div4.html('irregular nonagram')
        div3.html('dual to irregular nonagram')
        s=1/2
        s2=s
      break
    }
  }else {
    var poly = polytopeID
    inp2.value(3)
    changeDimension()
    switch(poly) {
      case 0:
      case 1:
      case 4:
      case 15:
        inp.value(0)
      break
      case 2:
        inp.value(2)
      break
      case 3:
        inp.value(1)
      break
      case 5:
      case 7:
      case 10:
        inp.value(4)
      break
      case 6:
      case 11:
        inp.value(6)
      break
      case 8:
      case 13:
        inp.value(5)
      break
      case 9:
      case 14:
        inp.value(8)
      break
      case 12:
        inp.value(7)
      break
      case 17:
        inp.value(28)
      break
      case 18:
        inp.value(30)
      break
      case 19:
        inp.value(26)
      break
      case 16:
        inp.value(17)
      break;
    }
    changePolytope()
  }
}
function scaltri(l1,l2,l3,t) {
  var c = (sq(l2)-sq(l1)-sq(l3))/(-2*l3)
  var b = l3-c
  var a = sqrt(sq(l1)-sq(c))
  var C = -(b-c)/2
  if(t) {
    vertexData=[[C+b,a/3,0,0],[C-c,a/3,0,0],[C,-a/3*2,0,0]]
    edgesData=[[0,1],[1,2],[2,0]]
    faceData=[[0,1,2]]
  }
  div3.html('dual to scalene triangle')
  div4.html('scalene triangle (lengths '+a+', '+b+', '+c+')')
}
function rectan(a,b,t) {
  if(t) {
    vertexData=conv([[10+a/2,10+b/2,0,0]])
    edgesData=[[0,1],[1,3],[3,2],[2,0]]
    faceData=[[0,1,3,2]]
  }
  div3.html('dual to rhombus')
  div4.html('rectangle (edge lengths: '+a+', '+b+')')
}
function traz(b1,b2,l,t) {
  var a = sqrt(4*sq(l)-sq(b1-b2))/2
  if(t) {
    vertexData=conv([[10+b1/2,-a/2,0,0],[10+b2/2,a/2,0,0]])
    edgesData=[[0,1],[1,3],[3,2],[2,0]]
    faceData=[[0,1,3,2]]
    if(l<0) {
      edgesData=[[0,2],[2,1],[1,3],[3,0]]
      faceData=[[0,2,1,3]]
    }
  }
  if(b2>0&&l>0) {
    div3.html('dual to kite')
    div4.html('icosoles trapezoid (base lengths: '+b1+', '+b2+'; leg length '+l+')')
  }else if(l>0) {
    div3.html('dual to dart')
    div4.html('crossed icosoles trapezoid (base lengths: '+b1+', '+-b2+'; leg length '+l+')')
  }else {
    div3.html('dual to butterfly')
    div4.html('butterfly (width: '+max(b1,b2)+', diagonal '+sqrt(sq(b1/2+b2/2)+sq(a))+'; leg length '+-l+')')
  }
}
function kite(a,b,c,t) {
  var C = (b-c)/2
  if(t) {
    vertexData=conv([[10+a/2,-C,0,0],[0,b-C,0,0],[0,-C-c,0,0]])
    edgesData=[[0,2],[2,1],[1,3],[3,0]]
    faceData=[[0,2,1,3]]
  }
  div3.html('dual to icosoles trapezoid')
  div4.html('kite (width '+a+', top height '+b+'; bottom height '+c+')')
}
function icot(a,b,t) {
  circumR=1
  if(t) {
    vertexData=conv([[10+a/2,sqrt(sq(a)-sq(b)/4)/3,0],[0,sqrt(sq(a)-sq(b)/4)*-2/3,0]])
    edgesData=[[0,1],[1,2],[2,0]]
    faceData=[[2,1,0]]
  }
  div3.html('dual to isosceles triangle')
  div4.html('isosceles triangle (base length '+b+', leg length '+a+')')
}
function dia(a,b,t) {
  if(t) {
    vertexData=conv([[10+a/2,0,0,0],[0,10+b/2,0,0]])
    edgesData=[[0,1],[2,1],[1,3],[3,0]]
    faceData=[[0,2,1,3]]
  }
  div3.html('dual to rectangle')
  div4.html('rhombus (height: '+b+', width: '+a+')')
}
function bwtie(a,b,t) {
  if(t) {
    vertexData=conv([[10+a/2,10+sqrt(sq(b)-sq(a))/2,0,0]])
    edgesData=[[0,3],[3,1],[1,2],[2,0]]
    faceData=[[0,3,1,2]]
  }
  div3.html('dual to infinite quadralateral')
  div4.html('bowtie (edge lengths: '+a+', '+b+')')
}
function ditrigon(a,b,t) {
  if(t) {
    vertexData=conv([[10+b/2,(2*a+b)/(sqrt(12)),0,0],[(a+b)/2+10,(b-a)/(sqrt(12)),0,0],[a/2+10,(-a-2*b)/(sqrt(12)),0,0]])
    edgesData=[[0,1],[1,3],[3,5],[5,4],[4,2],[2,0]]
    faceData=[[0,1,3,5,4,2]]
  }
  div3.html('dual to triambus')
  div4.html('ditrigon (edge lengths: '+a+', '+b+')')
}
function triambus(a,b,t) {
  if(t) {
    vertexData=conv([[10+b/2,(2*a+b)/(sqrt(12)),0,0],[(a+b)/2+10,(b-a)/(sqrt(12)),0,0],[a/2+10,(-a-2*b)/(sqrt(12)),0,0]])
    edgesData=[[0,1],[1,3],[3,5],[5,4],[4,2],[2,0]]
    __=[]
    for(var i = 0; i<edgesData.length; i++) {
      var B = edgesData[i]
      __[i]=[vertexData[B[0]][0]+vertexData[B[1]][0],vertexData[B[0]][1]+vertexData[B[1]][1],0,0]
    }
    vertexData=__
    edgesData=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]]
    faceData=[[0,1,2,3,4,5]]
  }
  div3.html('dual to ditrigon')
  div4.html('triambus (dual edge lengths: '+a+', '+b+')')
}
function tripod(a,b) {
  b-=a
  vertexData=conv([[10+b/2,(2*a+b)/(sqrt(12)),0,0],[(a+b)/2+10,(b-a)/(sqrt(12)),0,0],[a/2+10,(-a-2*b)/(sqrt(12)),0,0]])
  edgesData=[[0,2],[2,3],[3,1],[1,4],[4,5],[5,0]]
  faceData=[[0,2,3,1,4,5]]
  div3.html('dual to triambus')
  div4.html('tripod (edge lengths: '+a+', '+(a+b)+')')
}
function nct(a,b,t) {
  b-=a
  if(t) {
    vertexData=conv([[10+b/2,(2*a+b)/(sqrt(12)),0,0],[(a+b)/2+10,(b-a)/(sqrt(12)),0,0],[a/2+10,(-a-2*b)/(sqrt(12)),0,0]])
    edgesData=[[0,2],[2,3],[3,1],[1,4],[4,5],[5,0]]
    __=[]
    for(var i = 0; i<edgesData.length; i++) {
      var B = edgesData[i]
      __[i]=[vertexData[B[0]][0]+vertexData[B[1]][0],vertexData[B[0]][1]+vertexData[B[1]][1],0,0]
    }
    vertexData=__
    edgesData=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]]
    faceData=[[0,1,2,3,4,5]]
  }
  div3.html('dual to tripod')
  div4.html('triambus (dual edge lengths: '+a+', '+(a+b)+')')
  s=0.25
  L*=pow(4,4)
}
function div3clicked() {
  if(inp2.value()==5) {
    dual()
  }
}
function div4clicked() {
  if(inp2.value()==3) {
    dual()
  }
}
function div5clicked() {
  if(inp2.value()==4) {
    dual()
  }else if(inp2.value()==5) {
    verf()
  }
}
function div6clicked() {
  if(inp2.value()==3) {
    verf()
  }
}
function div8clicked() {
  if(inp2.value()==4) {
    verf()
  }
}
function divclicked() {
  if(inp2.value()==4) {
    STC()
  }else if(inp2.value()==3) {
    STF()    
  }else if(inp2.value()==5) {
    STFCT()
  }
}
function div1clicked() {
  if(inp2.value()==4) {
    STF()
  }
}
function STF() {
  circumR=1
  var doggo = true
  var val = inp2.value()
  var face = random(faceData)
  if(faceData[0][1]==undefined) {
    face = [0,1,2,3,4]
  }
  var fac2 = []
  var spltpnts = []
  var densi = 1
  for(var i = 0; i<face.length; i++) {
    if(face[i]!==undefined) {
      fac2[fac2.length]=face[i]
    }else {
      spltpnts[spltpnts.length]=fac2.length
    }
  }
  face = fac2
  var angArr=[]
  var dArr=[]
  for(var i = 0; i<face.length; i++) {
    var v1 = vertexData[face[(i-1+face.length)%face.length]].slice()
    var v2 = vertexData[face[i]].slice()
    var v3 = vertexData[face[(i+1)%face.length]].slice()
    for(var j = 0; j<v2.length; j++) {
      v1[j]-=v2[j]
      v3[j]-=v2[j]
      v2[j]-=v2[j]
    }
    var s1 = 0
    var s3 = 0
    for(var j = 0; j<v1.length; j++) {
      s1+=sq(v1[j])
      s3+=sq(v3[j])
    }
    dArr[i]=sqrt(s1)
    var res = 0
    for(var j = 0; j<v1.length; j++) {
      v1[j]/=sqrt(s1)
      v3[j]/=sqrt(s3)
      res+=v1[j]*v3[j]
    }
    var crss = v1[0]*v3[1]-v1[1]*v3[0]
    if(crss>0) {
      angArr[i]=acos(res)
    }else {
      angArr[i]=2*PI-acos(res)
    }
  }
  var tot = 0
  for(var i = 0; i<angArr.length; i++) {
    tot+=(PI-angArr[i])/2/PI
  }
  tot=abs(tot)
  densi=ceil(tot)
  inp2.value(2)
  inp4.value(face.length)
  if(face.length/densi>2) {
    inp5.value(densi)
  }
  var a = true
  if(val==3) {
    changeDimension()
    switch(polytopeID) {
      case 27:
        nct(phi_1,phi)
      break
      case 29:
        triambus(1,phi_1)
      break
      case 31:
        nct(1,phi)
      break
      case 37:
        kite(sqrt(2),0.819495500447568,0.448196971788703)
      break
      case 43:
        div3.html('dual: irregular pentagon')
      break
      case 49:
        kite(phi_2+1,0.412982543064056,1.028620569605364)
      break
      case 53:
        div3.html('dual: irregular pentagon')
      break
      case 55:
        var hgth = 2/7*sqrt(31+8*sqrt(2))
        var v1 = 1.4736257582079
        kite(2*(sqrt(2)-1),hgth-v1,v1)
      break
      case 57:
        var hgth = 2/7*sqrt(31+8*sqrt(2))
        var v1 = -0.6570940082697
        kite(sqrt(2),v1,hgth-v1)
      break
      case 59:
        traz((sqrt(2)-1)*2,sqrt(2),-sqrt(2*(2-sqrt(2))))
      break
      case 65:
        traz(sqrt(2),2*sqrt(2)+2,-sqrt(2*(2+sqrt(2))))
      break
      case 69:
        traz(sqrt(5),7.854101966249685,-sqrt(6*(5+sqrt(5)))/2)
      break
      case 71:
        traz(1.0104862091886,2.3659451072949,-1.2154880882994)
      break
      case 73:
        kite(sqrt(5)+1,2.408659879620652,-0.967056766951233)
      break
      case 75:
        traz(1.31640786499874,2,-(5*sqrt(6)+sqrt(30))/10)
      break
      case 77:
        kite(sqrt(5),0.749922451819567,-2.3264375042337)
      break
      case 89:
        var b1 = 2.37248552003061075//±1.5e-15
        var b2 = (sqrt(sq(b1)+36*sqrt(5)-60)-b1)/2
        traz(b1,b2,-sqrt(3*(5-2*sqrt(5))))
      break
      case 91:
        var b1 = 1+phi2
        var b2 = sqrt(5)-1
        traz(b1,b2,-sqrt(5-sqrt(5)))
      break
      case 93:
        kite(2,sqrt(203+84*sqrt(5))/11,-sqrt(203-84*sqrt(5))/11)
      break
      case 95:
        kite(3*phi2,sqrt(8577/2888+(3645*sqrt(5))/2888),-3*sqrt(346+18*sqrt(5))/44)
      break
      case 97:
        kite(3*phi_2,sqrt(8577/2888-(3645*sqrt(5))/2888),3*sqrt(346-18*sqrt(5))/44)
      break
      case 99:
        kite(sqrt(5)-1,sqrt(53/2-(23*sqrt(5))/2)/3,sqrt(157/2-(31*sqrt(5))/2)/11)
      break
      case 101:
        kite(sqrt(5),sqrt(1345-570*sqrt(5))/22,sqrt(745-30*sqrt(5))/38)
      break
      case 134:
        tripod(1,1+phi)
        doggo=false
      break
      case 137:
      case 139:
        a=false
        inp5.value(2)
      break
    }
  }else {
    changeDimension()
    switch(polytopeID) {
      case 0:
      case 2:
      case 3:
      case 5:
      case 6:
      case 13:
      case 14:
      case 18:
      case 17:
      case 16:
        inp4.value(3)
      break
      case 1:
        inp4.value(4)
      break
      case 4:
      case 8:
      case 9:
      case 12:
        inp4.value(5)
      break
      case 7:
      case 10:
      case 11:
      case 15:
        inp4.value(5)
        inp5.value(2)
      break
    }
  }
  if(faceData[0][1]!==undefined&&a) {
    var tAng=0
    vertexData=[[-dArr[0]/2,0,0],[dArr[0]/2,0,0]]
    for(var i = 0; i<angArr.length-2; i++) {
      tAng+=PI-angArr[i]
      var x = cos(tAng)*dArr[(i+1)%dArr.length]
      var y = sin(tAng)*dArr[(i+1)%dArr.length]
      vertexData[vertexData.length]=[vertexData[vertexData.length-1][0]+x,vertexData[vertexData.length-1][1]+y,0]
    }
    var tx =0
    var ty=0
    for(var i = 0; i<vertexData.length; i++) {
      tx+=vertexData[i][0]/vertexData.length
      ty+=vertexData[i][1]/vertexData.length
    }
    for(var i = 0; i<vertexData.length; i++) {
      vertexData[i][0]-=tx
      vertexData[i][1]-=ty
    }
    var cr = 0
    for(var i = 0; i<vertexData.length; i++) {
      cr+=sqrt(sq(vertexData[i][0])+sq(vertexData[i][1]))/vertexData.length
    }
    for(var i = 0; i<vertexData.length; i++) {
      vertexData[i][0]/=cr
      vertexData[i][1]/=-cr
    }
    faceData=[[]]
    var oN = 0
    var oN2 = 0
    for(var i = 0; i<vertexData.length; i++) {
      faceData[0][faceData[0].length]=i
      edgesData[i]=[i,(i+1)%vertexData.length]
      if(spltpnts[oN]==i+1) {
        edgesData[i]=[i,oN2]
        oN2=spltpnts[oN]
        oN++
        faceData[0][faceData[0].length]=undefined
      }
    }
    if(spltpnts[0]!==undefined) {
      edgesData[edgesData.length-1]=oN2
    }
    function toDegOfArr(Arr) {
      var arr2 = []
      for(var i = 0; i<Arr.length; i++) {
        arr2[i]=Arr[i]*180/PI
      }
      return(arr2)
    }
    if(face.length==3) {
      if(sq(dArr[0]-dArr[1])<0.0001&&sq(dArr[0]-dArr[2])<0.0001) {
      }else if(sq(dArr[0]-dArr[1])<0.0001) {
        icot(dArr[0],dArr[2],false)
      }else if (sq(dArr[1]-dArr[2])<0.0001) {
        icot(dArr[1],dArr[0],false)
      }else if(sq(dArr[0]-dArr[2])<0.0001) {
        icot(dArr[0],dArr[1],false)
      }else {
        scaltri(dArr[0],dArr[1],dArr[2],false)
      }
    }else if(face.length==4) {
      if(sq(dArr[0]-dArr[1])<1e-4&&sq(dArr[0]-dArr[2])<1e-4&&sq(dArr[0]-dArr[3])<1e-4) {
        if(sq(angArr[0]-angArr[1])<1e-4&&sq(angArr[0]-angArr[2])<1e-4&&sq(angArr[0]-angArr[3])<1e-4) {}else {
          dia(sin(angArr[0]/2)*dArr[0],cos(angArr[0]/2)*dArr[0],false)
        }
      }else if(sq(dArr[0]-PI/2)<1e-4&&sq(PI/2-dArr[2])<1e-4&&sq(PI/2-dArr[3])<1e-4) {
        rectan(dArr[0],dArr[1],false)
      }
    }else if(spltpnts[0]==undefined) {
      var tx_t = div4.html()
      var a = true
      var i = 1
      while(a&&i<vertexData.length) {
        if(sq(dArr[0]-dArr[i])>0.0001) {
          a=false
        }
        i++
      }
      i=1
      var b = false
      while(b==false&&i<vertexData.length) {
        if(sq(angArr[0]-angArr[i])>0.0001) {
          b==true
        }
        i++
      }
      if(b&&a&&doggo) {
        tx_t='equlateral '+tx_t+' (angles: '+toDegOfArr(angArr)+')'
      }else if(a==false&&doggo) {
        tx_t='irregular '+tx_t+' (angles: '+toDegOfArr(angArr)+', edge lengths: ' +dArr+')'
      }
      div4.html(tx_t)
    }
  }else {
    changeDimension()
  }
  switch(polytopeID) {
    case 137:
    case 139:
      vertexData=[[(3*sqrt(5)-1)/8,-sqrt(3)*phi/4,0],[-1/2,-sqrt(3)/2,0],[(-1-3*sqrt(5))/8,(sqrt(3)-sqrt(15))/8,0],[-1/2,sqrt(3)/2,0],[1/4,sqrt(15)/4,0],[1,0,0]]
    break
  }
}
function STC() {
  inp2.value(3)
  var don = polytopeID
  changeDimension()
  switch(don) {
    case 0:
    case 2:
    case 5:
    case 14:
      inp.value(0)
    break
    case 1:
      inp.value(1)
    break
    case 3:
      inp.value(2)
    break
    case 4:
    case 9:
      inp.value(3)
    break
    case 6:
      inp.value(4)
    break
    case 7:
    case 11:
      inp.value(5)
    break
    case 6:
    case 8:
      inp.value(6)
    break
    case 10:
    case 15:
      inp.value(7)
    break
    case 13:
      inp.value(8)
    break
    case 16:
      if(random(3)<2) {
        inp.value(0)
      }else {
        inp.value(2)
      }
    break
    case 17:
      if(random(6)<5) {
        inp.value(0)
      }else {
        inp.value(8)
      }
    break
    case 18:
      if(random(6)<5) {
        inp.value(0)
      }else {
        inp.value(4)
      }
    break
    case 19:
      if(random(2)<1) {
        inp.value(4)
      }else {
        inp.value(8)
      }
    break
  }
  changePolytope()
}
function STFCT() {
  inp3.value(inp3.value()-1)
  switch(inp.value()*1) {
    case 2:
      inp.value(0)
    break
    case 3:
      if(random(pow(2,dimentionCount-1))+dimentionCount<dimentionCount) {
        inp.value(2)
      }else {
        inp.value(0)
      }
    break
  }
  if(inp3.value()==4) {
    inp2.value(4)
  }
  changeDimension()
}
function mrror() {
  for(var i = 0; i<vertexData.length; i++) {
    vertexData[i][0]*=-1
  }
}
function setup() {
  yoMama=createSelect()
  yoMama.changed(changeDimension)
  lspeed=createSlider(0,sqrt(30),1,0)
  lspeed.position(0,windowHeight/2+20)
  vspeed=createSlider(0,sqrt(30),1,0)
  vspeed.position(0,windowHeight/2+40)
  fspeed=createSlider(0,sqrt(30),sqrt(0.5),0)
  fspeed.position(0,windowHeight/2+60)
  inp3=createInput('5','number')
  inp3.style('width','40px')
  inp3.position(137,-2)
  inp4=createInput('3','number')
  inp4.style('width','40px')
  inp4.position(40,-2)
  inp5=createInput('1','number')
  inp5.style('width','40px')
  inp5.position(85,-2)
  inp3.changed(changeDimension)
  joe = createFileInput(interpretOFF,false)
  joe.position(0,20)
  joe.style('color', '#ffffff')
  joe.hide()
  createCanvas(windowWidth, windowHeight, WEBGL)
  colorMode(HSB)
  inpy=createInput('5','number')
  inpy.style('width','40px')
  inpy2=createInput('4','number')
  inpy2.style('width','40px')
  inpy.position(width-96,height-23)
  inpy2.position(width-48,height-23)
  b = ''
  centerv=createButton('center vertex')
  centerv.mousePressed(centervertex)
  centerv.position(width/2,0)
  c = ''
  for(var U = 0; U<centerv.style('width').length-2;U++) {
    c+=centerv.style('width').charAt(U)
  }
  centerv.position(width/2-c,0)
  centerc=createButton('center cell')
  centerc.mousePressed(centercell)
  centerc.position(width/2,0)
  centerc.style('width',centerv.style('width'))
  centere=createButton('center edge')
  centere.mousePressed(centerE)
  centere.position(width/2,20)
  centere.style('width',centerv.style('width'))
  centerf=createButton('center face')
  centerf.mousePressed(centerF)
  centerf.position(width/2,0)
  mirror=createButton('mirror polytope')
  mirror.mousePressed(mrror)
  mirror.position(0,180)
  c = ''
  for(var U = 0; U<centerv.style('width').length-2;U++) {
    c+=centere.style('width').charAt(U)
  }
  centerf.position(width/2-c,20)
  centerf.style('width',c+'px')
  inp2 = createSelect()//dimention selecter
  inp2.position(0,0)
  inp2.changed(changeDimension)
  inp2.option('2D',2)
  inp2.option('3D',3)
  inp2.option('4D',4)
  inp2.option('5D+',5)
  inp2.option('load from file',-1)
  inp2.selected(3)
  inp2.style('width','40px')
  inp = createSelect()//polytope selector
  var A = inp2.style('width')
  A = A.charAt(0)+A.charAt(1)
  inp.position(A,0)
  inp.changed(changePolytope)
  div=createDiv('5 tetrahedron {3,3} cells')
  div.position(0,20)//cell (4d) or face (3d) info
  div.style('color','#ff0000')
  div.mouseClicked(divclicked)
  div1=createDiv('10 triangle {3} faces')
  div1.position(0,40)//face (4d) or edge (3d) info
  div1.style('color','#ffff00')
  div1.mouseClicked(div1clicked)
  div2=createDiv('10 edges')
  div2.position(0,60)//edge (4d) or vertex (3d) info
  div2.style('color','#00ff00')
  div3=createDiv('5 verticies')
  div3.position(0,80)//vertex (4d) or Schläfli symbol (3d) info
  div3.style('color','#00ffff')
  div3.mouseClicked(div3clicked)
  div4=createDiv('Schläfli symbol {3,3,3}')
  div4.position(0,100)//Schläfli symbol (4d) or dual (3d) info
  div4.style('color','#0000ff')
  div4.mouseClicked(div4clicked)
  div5=createDiv('Self-Dual')
  div5.position(0,120)//dual (4d) or names (3d) info
  div5.style('color','#ff00ff')
  div5.mouseClicked(div5clicked)
  div6=createDiv()//names info (4d) or verf (3d)
  div6.position(0,140)
  div6.style('color','#ff8000')
  div6.mouseClicked(div6clicked)
  div8=createDiv('')//verf (4d)
  div8.position(0,160)
  div8.style('color','#80ff00')
  div8.mouseClicked(div8clicked)
  mrSlider=createSlider(0,10,2,0.05)
  mrSlider.position(width-mrSlider.width-5,0)
  changeDimension()
  div7=createDiv('')//fps counter
  div7.position(0,height-20)
  div7.style('color','#ffffff')
  joeDiv=createDiv('2')
  joeDiv.position(width-13,20)
  joeDiv.style('color','#ffffff')
  rainbowVerticies = createCheckbox('rainbow verticies', true)
  rainbowVerticies.position(0,height-40)
  rainbowVerticies.style('color','#ffffff')
  rainbowEdges = createCheckbox('rainbow edges', true)
  rainbowEdges.position(0,height-60)
  rainbowEdges.style('color','#ffffff')
  edgeCol=createColorPicker('#ff0000')
  edgeCol.position(width/2,height-30)
  rainbowEdges.changed(eS)
  verCol=createColorPicker('#00ffff')
  verCol.position(width/2-50,height-30)
  rainbowVerticies.changed(vS)
  Ortho = createCheckbox('orthographic mode', true)
  Ortho.position(width-150,40)
  Ortho.style('color','#ffffff')
  Ortho.checked(false)
  Ortho.changed(toggOrtho)
  Ortho2 = createCheckbox('orthographic mode (3D➡2D)', true)
  Ortho2.position(width-220,80)
  Ortho2.style('color','#ffffff')
  Ortho2.checked(false)
  Ortho2.changed(toggOrtho2)
  opt = createCheckbox('simpler graphics', true)
  opt.position(0,height/2-10)
  opt.style('color','#ffffff')
  opt.checked(false)
  opt.changed(simpgraph)
  inp4.changed(changePolytope)
  inp5.changed(changePolytope)
  ldiv=createDiv('l')
  ldiv.style('color','#ff0000')
  vdiv=createDiv('v')
  vdiv.style('color','#00ff00')
  fdiv=createDiv('f')
  fdiv.style('color','#0000ff')
  ldiv.position(0,height-120)
  vdiv.position(0,height-100)
  fdiv.position(0,height-80)
  showSI=createCheckbox('show self-intersections')
  showSI.style('color','#ffffff')
  showSI.changed(tog)
  showSI.position(0,210)
  yoMama.position(0,height-140)
  UseT=createCheckbox('use traditional filling')
  UseT.style('color','#ffffff')
  UseT.position(width-160,60)
  UseT.changed(cUseTT)
}
function toggOrtho2() {
  if(Ortho2.checked()) {
    ortho()
  }else {
    perspective()
  }
}
UseTT=-1
function cUseTT() {
  UseTT*=-1
}
var SHOWSI = -1
function tog() {
  SHOWSI*=-1
}
function simpgraph() {
  simpleM*=-1
}
var eRan = 1
var vRan = 1
var orthoOn = -1
function toggOrtho() {
  orthoOn*=-1
  zoom=1
  if(orthoOn>0&&dimentionCount==4&&(polytopeID==4||polytopeID==15)) {
    s=0.2
  }
}
function eS() {
  eRan*=-1
}
function vS() {
  vRan*=-1
}
function changePolytope() {
  frameArr=[]
  polytopeID=inp.value()*1
  intersectionD = NaN
  intersectionD2 = NaN
  intersectionD3 = NaN
  resetCamera()
  if(dimentionCount==4&&inp2.value()==4) {
    div2.html(L2+' edges')
    div3.html(vertexData.length+' verticies')
    switch(polytopeID) {
      case 0:
        div.html('5 tet {3,3} cells')
        div1.html('10 triangle {3} faces')
        div4.html('Schläfli symbol {3,3,3}')
        div5.html('Self-Dual')
        div6.html('names: pentachoron, 5-cell, pentatope, pentahedroid, hyperpyramid, tetrahedral pyramid')
        div8.html('vertex figure: tet {3,3}')
      break
      case 1:
        div.html('8 cube {4,3} cells')
        div1.html('24 square {4} faces')
        div4.html('Schläfli symbol {4,3,3}')
        div5.html('Dual to hex {3,3,4}')
        div6.html('names: tesseract, 8-cell, octachoron, octahedroid, cubic prism, tetracube, 4-cube')
        div8.html('vertex figure: tet {3,3}')
      break
      case 2:
        div.html('16 tet {3,3} cells')
        div1.html('32 triangle {3} faces')
        div4.html('Schläfli symbol {3,3,4}')
        div5.html('Dual to tes {4,3,3}')
        div6.html('names: hexadecachoron, 16-cell, hexdecahedroid, 4-orthoplex')
        div8.html('vertex figure: oct {3,4}')
      break
      case 3:
        div.html('24 oct {3,4} cells')
        div1.html('96 triangle {3} faces')
        div4.html('Schläfli symbol {3,4,3}')
        div5.html('Self-Dual')
        div6.html('names: icosiotetrachoron, 24-cell, octaplex, icosatetrahedroid, octacube, hyper-diamond, polyoctahedron')
        div8.html('vertex figure: cube {4,3}')
      break
      case 4:
        div.html('120 doe {5,3} cells')
        div1.html('720 pentagon {5} faces')
        div4.html('Schläfli symbol {5,3,3}')
        div5.html('Dual to ex {3,3,5}')
        div6.html('names: dodecaplex, 120-cell, hyperdodecahedron, polydodecahedron, hecatonicosachoron, dodecacontachoron, hecatonicosahedroid')
        div8.html('vertex figure: tet {3,3}')
      break
      case 5:
        div.html('600 tet {3,3} cells')
        div1.html('1200 triangle {3} faces')
        div4.html('Schläfli symbol {3,3,5}')
        div5.html('Dual to hi {5,3,3}')
        div6.html('names: tetraplex, 600-cell, hexacosichoron, hexacosihedroid, polytetrahedron')
        div8.html('vertex figure: ike {3,5}')
      break
      case 6:
        div.html('120 ike {5,3} cells')
        div1.html('1200 triangle {3} faces')
        div4.html('Schläfli symbol {3,5,5/2}')
        div5.html('Dual to sishi {5/2,5,3}')
        div6.html('names: icosahedral 120-cell, polyicosahedron, faceted 600-cell, icosaplex, faceted hexacosichoron')
        div8.html('vertex figure: gad {5,5/2}')
      break
      case 7:
        div.html('120 sissid {5/2,5} cells')
        div1.html('720 pentagram {5/2} faces')
        div4.html('Schläfli symbol {5/2,5,3}')
        div5.html('Dual to fix {3,5,5/2}')
        div6.html('names: small stellated 120-cell, stellated polydodecahedron, small stellated hecatonicosachoron')
        div8.html('vertex figure: ike {5,3}')
      break
      case 8:
        div.html('120 gad {5,5/2} cells')
        div1.html('720 pentagon {5} faces')
        div4.html('Schläfli symbol {5,5/2,5}')
        div5.html('Self-Dual')
        div6.html('names: great 120-cell, great polydodecahedron, great hecatonicosachoron')
        div8.html('vertex figure: sissid {5/2,5}')
      break
      case 9:
        div.html('120 doe {5,3} cells')
        div1.html('720 pentagon {5} faces')
        div4.html('Schläfli symbol {5,3,5/2}')
        div5.html('Dual to gishi {5/2,3,5}')
        div6.html('names: grand 120-cell, grand hecatonicosachoron, grand polydodecahedron')
        div8.html('vertex figure: gike {3,5/2}')
      break
      case 10:
        div.html('120 gissid {5/2,3} cells')
        div1.html('720 pentagram {5/2} faces')
        div4.html('Schläfli symbol {5/2,3,5}')
        div5.html('Dual to gahi {5,3,5/2}')
        div6.html('names: great stellated 120-cell, great stellated polydodecahedron, Great stellated hecatonicosachoron')
        div8.html('vertex figure: ike {3,5}')
      break
      case 11:
        div.html('120 sissid {5/2,5} cells')
        div1.html('720 pentagram {5/2} faces')
        div4.html('Schläfli symbol {5/2,5,5/2}')
        div5.html('Self-Dual')
        div6.html('names: grand stellated 120-cell, grand stellated polydodecahedron, grand stellated hecatonicosachoron')
        div8.html('vertex figure: gad {5,5/2}')
      break
      case 12:
        div.html('120 gad {5,5/2} cells')
        div1.html('720 pentagon {5} faces')
        div4.html('Schläfli symbol {5,5/2,3}')
        div5.html('Dual to gofix {3,5/2,5}')
        div6.html('names: great grand 120-cell, great grand polydodecahedron, great grand hecatonicosachoron')
        div8.html('vertex figure: gissid {5/2,3}')
      break
      case 13:
        div.html('120 gike {3,5/2} cells')
        div1.html('1200 triangle {3} faces')
        div4.html('Schläfli symbol {3,5/2,5}')
        div5.html('Dual to gaghi {5,5/2,2}')
        div6.html('names: great icosahedral 120-cell, great polyicosahedron, great faceted 600-cell, great icosahedral 120-cell, great faceted hexacosichoron')
        div8.html('vertex figure: sissid {5/2,5}')
      break
      case 14:
        div.html('600 tet {3,3} cells')
        div1.html('1200 triangle {3} faces')
        div4.html('Schläfli symbol {3,3,5/2}')
        div5.html('Dual to gogishi {5/2,3,3}')
        div6.html('names: grand 600-cell, grand polytetrahedron, grand hexacosichoron')
        div8.html('vertex figure: gike {3,5/2}')
      break
      case 15:
        div.html('120 gissid {5/2,3} cells')
        div1.html('720 pentagram {5/2} faces')
        div4.html('Schläfli symbol {5/2,3,3}')
        div5.html('Dual to gax {3,3,5/2}')
        div6.html('names: great grand stellated 120-cell, great grand stellated polydodecahedron, great grand stellated hecatonicosachoron')
        div8.html('vertex figure: tet {3,3}')
      break
      case 16:
        div.html('8 terahedron {3,3}, 4 octahedron {3,4} cells')
        div1.html('32 triangle {3} faces')
        div4.html('Coexter Diagram (x3o3o3o3/2*a)/2')
        div5.html('Dual to tesseractihemioctacron')
        div6.html('tesseractihemioctachoron')
        div8.html('vertex figure: thah')
      break
      case 17:
        div.html('600 terahedron {3,3}, 120 great icosahedron {3,5/2} cells')
        div1.html('2400 triangle {3} faces')
        div4.html('Coexter Diagram x3o3o3o5/2*b')
        div5.html('Dual to small triambic icosahedral hecatonicosachoron')
        div6.html('small ditrigonary hexacosihecatonicosachoron')
        div8.html('vertex figure: sidtid')
      break
      case 18:
        div.html('600 terahedron {3,3}, 120 icosahedron {3,5/2} cells')
        div1.html('2400 triangle {3} faces')
        div4.html('Coexter Diagram x3o3o3/2o5*b')
        div5.html('Dual to great triambic icosahedral hecatonicosachoron')
        div6.html('great ditrigonary hexacosihecatonicosachoron')
        div8.html('vertex figure: gidtid')
      break
      case 19:
        div.html('120 icosahedron {3,3}, 120 great icosahedron {3,5/2} cells')
        div1.html('2400 triangle {3} faces')
        div4.html('Coexter Diagram x3o5o3o5/3*b')
        div5.html('Dual to medial triambic icosahedral hecatonicosachoron')
        div6.html('ditrigonary dishecatonicosachoron')
        div8.html('vertex figure: ditdid')
      break
    }
  }else if(dimentionCount==3){
    div1.html(L2+' edges')
    div2.html(JL+' verticies')
    switch(polytopeID) {
      case 0:
        div.html('4 triangle {3} faces')
        div3.html('Schläfli symbol {3,3}')
        div4.html('Self-Dual')
        div5.html('names: tetrahedron, triangular pyramid, 3-simplex, disphenoid')
        div6.html('vertex figure: triangle {3}')
        div8.html('')
      break
      case 1:
        div.html('6 square {4} faces')
        div3.html('Schläfli symbol {4,3}')
        div4.html('Dual to oct {3,4}')
        div5.html('names: cube, 3-cube, hexahedron, square prism')
        div6.html('vertex figure: triangle {3}')
        div8.html('')
      break
      case 2:
        div.html('8 triangle {3} faces')
        div3.html('Schläfli symbol {3,4}')
        div4.html('Dual to cube {4,3}')
        div5.html('names: octahedron, square bipyramid, triangular antiprism, 3-orthoplex')
        div6.html('vertex figure: square {4}')
        div8.html('')
      break
      case 3:
        div.html('12 pentagon {5} faces')
        div3.html('Schläfli symbol {5,3}')
        div4.html('Dual to ike {3,5}')
        div5.html('Dodecahedron')
        div6.html('vertex figure: triangle {3}')
        div8.html('')
      break
      case 4:
        div.html('20 triangle {3} faces')
        div3.html('Schläfli symbol {3,5}')
        div4.html('Dual to doe {5,3}')
        div5.html('names: icosahedron, gyroelongated pentagonal bipyramid, biaugmented pentagonal antiprism')
        div6.html('vertex figure: pentagon {5}')
        div8.html('')
      break
      case 5:
        div.html('12 pentagram {5/2} faces')
        div3.html('Schläfli symbol {5/2,5}')
        div4.html('Dual to gad {5,5/2}')
        div5.html('Small stellated dodecahedron')
        div6.html('vertex figure: pentagon {5}')
        div8.html('')
      break
      case 6:
        div.html('12 pentagon {5} faces')
        div3.html('Schläfli symbol {5,5/2}')
        div4.html('Dual to sissid {5/2,5}')
        div5.html('Great dodecahedron')
        div6.html('vertex figure: pentagram {5/2}')
        div8.html('')
      break
      case 7:
        div.html('12 pentagram {5/2} faces')
        div3.html('Schläfli symbol {5/2,3}')
        div4.html('Dual to gike {3,5/2}')
        div5.html('Great stellated dodecahedron')
        div6.html('vertex figure: trangle {3}')
        div8.html('')
      break
      case 8:
        div.html('20 triangle {3} faces')
        div3.html('Schläfli symbol {3,5/2}')
        div4.html('Dual to gissid {5/2,3}')
        div5.html('Great icosahedron')
        div6.html('vertex figure: pentagram {5/2}')
        div8.html('')
      break
      case 9:
        div.html('8 triangle {3}, 6 square {4} faces')
        div3.html('Schläfli symbol r{3,4}/r{4,3}')
        div4.html('Dual to rad')
        div5.html('Cuboctahedron')
        div6.html('vertex figure: rectangle (side lengths 1, sqrt(2))')
        div8.html('')
      break
      case 10:
        div.html('12 rhombus faces')
        div3.html('Coxeter diagram: o4m3o')
        div4.html('Dual to co')
        div5.html('Rhombic dodecahedron')
        div6.html('vertex figure: 6 squares, 8 triangles')
        div8.html('')
      break
      case 11:
        div.html('20 triangle {3}, 12 pentagon {5} faces')
        div3.html('Schläfli symbol r{5,3}/r{3,5}')
        div4.html('Dual to rhote')
        div5.html('Icosidodecahedron')
        div6.html('vertex figure: rectangle (side lengths 1, (1+sqrt(5))/2)')
        div8.html('')
      break
      case 12:
        div.html('30 rhombus faces')
        div3.html('Coxeter diagram: o5m3o')
        div4.html('Dual to id')
        div5.html('Rhombic triacontahedron')
        div6.html('vertex figure: 12 pentagons, 20 triangles')
        div8.html('')
      break
      case 15:
        div.html('20 triangle {3}, 12 pentagram {5/2} faces')
        div3.html('Schläfli symbol r{5/2,3}/r{3,5/2}')
        div4.html('Dual to gort')
        div5.html('Great icosidodecahedron')
        div6.html('vertex figure: rectangle (side lengths 1, (sqrt(5)-1)/2)')
        div8.html('')
      break
      case 13:
        div.html('12 pentagon {5}, 12 pentagram {5/2} faces')
        div3.html('Schläfli symbol r{5/2,5}/r{5,5/2}')
        div4.html('Dual to mort')
        div5.html('Dodecadodecahedron')
        div6.html('vertex figure: rectangle (side lengths 0.5+sqrt(1.25), sqrt(1.25)-0.5)')
        div8.html('')
      break
      case 17:
        div.html('4 triangle {3}, 3 square {4} faces')
        div3.html('Coxeter diagram: (x3/2o3x)/2')
        div4.html('Dual to tetrahemihexacron')
        div5.html('names: tetrahemihexahedron, tetrahemicube, 3-demicross')
        div6.html('vertex figure: bowtie (side lengths 1, sqrt(2))')
        div8.html('')
      break
      case 18:
        div.html('8 triangle {3}, 4 hexagon {6} faces')
        div3.html('Coxeter diagram: x3/2o3x3*a')
        div4.html('Dual to octahemioctacron')
        div5.html('Octahemioctahedron')
        div6.html('vertex figure: bowtie (side lengths 1, sqrt(3))')
        div8.html('')
      break
      case 20:
        div.html('20 triangle {3}, 6 decagon {10} faces')
        div3.html('Coxeter diagram: (x3/2o3x5*a)/2')
        div4.html('Dual to small icosihemidodecacron')
        div5.html('Small icosihemidodecahedron')
        div6.html('vertex figure: bowtie (side lengths 1, sqrt((5+sqrt(5))/2))')
        div8.html('')
      break
      case 25:
        div.html('20 triangle {3}, 6 decagram {10/3} faces')
        div3.html('Coxeter diagram: (o3/2x5/3x3*a)/2')
        div4.html('Dual to great icosihemidodecacron')
        div5.html('Great icosihemidodecahedron')
        div6.html('vertex figure: bowtie (side lengths 1, sqrt((5-sqrt(5))/2))')
        div8.html('')
      break
      case 23:
        div.html('12 pentagram {5/2}, 10 hexagon {6} faces')
        div3.html('Coxeter diagram: (x5/3o5/2x3*a)/2')
        div4.html('Dual to small dodecahemicosacron')
        div5.html('Small dodecahemicosahedron')
        div6.html('vertex figure: bowtie (side lengths 1/phi, sqrt(3))')
        div8.html('')
      break
      case 19:
        div.html('6 square {4}, 4 hexagon {6} faces')
        div3.html('Coxeter diagram: (o4/3x3x4*a)/2')
        div4.html('Dual to hexahemioctacron')
        div5.html('Cubohemioctahedron')
        div6.html('vertex figure: bowtie (side lengths sqrt(2), sqrt(3))')
        div8.html('')
      break
      case 21:
        div.html('12 pentagon {5}, 6 decagon {10} faces')
        div3.html('Coxeter diagram: (x5/4o5x5*a)/2')
        div4.html('Dual to great dodecahemidodecahedron')
        div5.html('Small dodecahemidodecahedron')
        div6.html('vertex figure: bowtie (side lengths phi, sqrt((5+sqrt(5))/2))')
        div8.html('')
      break
      case 24:
        div.html('12 pentagram {5/2}, 6 decagram {10/3} faces')
        div3.html('Coxeter diagram: (x5/3x5/3o5/2*a)/2')
        div4.html('Dual to great dodecahemidodecacron')
        div5.html('Great dodecahemidodecahedron')
        div6.html('vertex figure: bowtie (side lengths 1/phi, sqrt((5-sqrt(5))/2))')
        div8.html('')
      break
      case 22:
        div.html('12 pentagon {5}, 10 hexagon {6} faces')
        div3.html('Coxeter diagram: (o5/4x3x5*a)/2')
        div4.html('Dual to great dodecahemicosacron')
        div5.html('Great dodecahemicosahedron')
        div6.html('vertex figure: bowtie (side lengths phi, sqrt(3))')
        div8.html('')
      break
      case 26:
        div.html('12 pentagon {5}, 12 pentagram {5/2} faces')
        div3.html('Coxeter diagram: (o5/4x3x5*a)/2')
        div4.html('Dual to matai')
        div5.html('Ditrigonary dodecadodecahedron')
        div6.html('vertex figure: tripod (side lengths phi, 1/phi)')
        div8.html('')
      break
      case 28:
        div.html('20 triangle {3}, 12 pentagram {5/2} faces')
        div3.html('Coxeter diagram: x5/2o3o3*a')
        div4.html('Dual to stai')
        div5.html('Small ditrigonary icosidodecahedron')
        div6.html('vertex figure: ditrigon (side lengths 1, 1/phi)')
        div8.html('')
      break
      case 30:
        div.html('20 triangle {3}, 12 pentagon {5/2} faces')
        div3.html('Coxeter diagram: x5/2o3o3*a')
        div4.html('Dual to gatai')
        div5.html('Great ditrigonary icosidodecahedron')
        div6.html('vertex figure: tripod (side lengths 1, phi)')
        div8.html('')
      break
      case 16:
        div.html('30 rhombus faces')
        div3.html('Coxeter diagram: o5/2m3o')
        div4.html('Dual to gid')
        div5.html('Great rhombic triacontahedron')
        div6.html('vertex figure: 12 pentagrams, 20 triangles')
        div8.html('')
      break
      case 14:
        div.html('30 rhombus faces')
        div3.html('Coxeter diagram: o5/2m5o')
        div4.html('Dual to did')
        div5.html('Medial rhombic triacontahedron')
        div6.html('vertex figure: 12 pentagrams, 12 pentagons')
        div8.html('')
      break
      case 27:
        div.html('20 triambus faces')
        div3.html('Coxeter diagram: m5/3o3o5*a')
        div4.html('Dual to ditdid')
        div5.html('Medial triambic icosahedron')
        div6.html('vertex figure: 12 pentagrams, 12 pentagons')
        div8.html('')
      break
      case 29:
        div.html('20 triambus faces')
        div3.html('Coxeter diagram: m5/2o3o3*a')
        div4.html('Dual to sitdid')
        div5.html('Small triambic icosahedron')
        div6.html('vertex figure: 12 pentagrams, 20 triangles')
        div8.html('')
      break
      case 31:
        div.html('20 triambus faces')
        div3.html('Coxeter diagram: m3/2o3o5*a')
        div4.html('Dual to gitdid')
        div5.html('Great triambic icosahedron')
        div6.html('vertex figure: 12 pentagons, 20 triangles')
        div8.html('')
      break
      case 32:
        div.html('8 octagon, 6 triangle faces')
        div3.html('Coxeter diagram: x4x3o')
        div4.html('Dual to tikko')
        div5.html('names: truncated cube, truncated hexahedron')
        div6.html('vertex figure: icosoles triangle (base length 1, leg length sqrt(2+sqrt(2)))')
        div8.html('')
      break
      case 33:
        div.html('24 icoceles triangle (base length sqrt(2+sqrt(2)), leg length 1) faces')
        div3.html('Coxeter diagram: m4m3o')
        div4.html('Dual to tic')
        div5.html('names: triakis octahedron, trigonal trisoctahedron, kisoctahedron')
        div6.html('vertex figure: 8 octagons, 6 triangles')
        div8.html('')
      break
      case 34:
        div.html('8 hexagon, 6 triangle faces')
        div3.html('Coxeter diagram: o4x3x')
        div4.html('Dual to tekah')
        div5.html('Truncated octahedron')
        div6.html('vertex figure: icosoles triangle (base length sqrt(2), leg length sqrt(3))')
        div8.html('')
      break
      case 35:
        div.html('24 icoceles triangle (base length sqrt(3), leg length sqrt(2)) faces')
        div3.html('Coxeter diagram: o4m3m')
        div4.html('Dual to toe')
        div5.html('names: tetrakis hexahedron, tetrahexahedron, hextetrahedron, tetrakis cube, kiscube, disdyakis hexahedron, hexakis tetrahedron')
        div6.html('vertex figure: 8 hexagons, 6 triangles')
        div8.html('')
      break
      case 36:
        div.html('8 triangle, 18 square faces')
        div3.html('Coxeter diagram: x4o3x')
        div4.html('Dual to sladid')
        div5.html('names: small rhombicuboctahedron, rhombicuboctahedron')
        div6.html('vertex figure: icosoles trapezoid (base lengths: sqrt(2), 1; leg length sqrt(2))')
        div8.html('')
      break
      case 37:
        div.html('24 kite (width sqrt(2), top height 0.819495500447568; bottom height 0.448196971788703) faces')
        div3.html('Coxeter diagram: m4o3m')
        div4.html('Dual to sirco')
        div5.html('names: deltoidal icositetrahedron, strombic icositetrahedron, small lanceal disdodecahedron')
        div6.html('vertex figure: 8 triangles, 18 squares')
        div8.html('')
      break
      case 38:
        div.html('12 square, 8 hexagon, 6 octagon faces')
        div3.html('Coxeter diagram: x4x3x')
        div4.html('Dual to siddykid')
        div5.html('names: great rhombicuboctahedron, truncated cuboctahedron')
        div6.html('vertex figure: scalene triangle (edge lengths sqrt(2), sqrt(3), sqrt(2+sqrt(2))')
        div8.html('')
      break
      case 39:
        div.html('48 scalene triangle (edge lengths 1, top height 3*(2+sqrt(2))/14; bottom height (10+sqrt(2))/7) faces')
        div3.html('Coxeter diagram: m4m3m')
        div4.html('Dual to girco')
        div5.html('names: disdyakis dodecahedron, small disdyakis dodecahedron')
        div6.html('vertex figure: 12 squares, 8 hexagons, 6 octagons')
        div8.html('')
      break
      case 40:
        div.html('4 triangle, 4 hexagon faces')
        div3.html('Coxeter diagram: x3x3o')
        div4.html('Dual to tikit')
        div5.html('Truncated tetrahedron')
        div6.html('vertex figure: icosoles triangle (base length 1, leg length sqrt(3))')
        div8.html('')
      break
      case 41:
        div.html('48 icosoles triangle (base length 5/3, leg length 1) faces')
        div3.html('Coxeter diagram: m3m3o')
        div4.html('Dual to tut')
        div5.html('Triakis tetrahedron')
        div6.html('vertex figure: 4 triangles, 4 hexagons')
        div8.html('')
      break
      case 42:
        div.html('32 triangle, 6 square faces')
        div3.html('Coxeter diagram: s4s3s')
        div4.html('Dual to pedid')
        div5.html('names: snub cube, snub cuboctahedron')
        div6.html('vertex figure: irregular pentagon (1 edge length sqrt(2) side, rest edge length 1)')
        div8.html('')
      break
      case 43:
        div.html('48 irregular pentagon (2 edge length 1.41964 sides, rest edge length 1) faces')
        div3.html('Coxeter diagram: p4p3p')
        div4.html('Dual to snic')
        div5.html('names: pentagonal icositetrahedron, petaloid disdodecahedron')
        div6.html('vertex figure: 32 triangles, 6 squares')
        div8.html('')
      break
      case 44:
        div.html('20 triangle, 12 decagon faces')
        div3.html('Coxeter diagram: x5x3o')
        div4.html('Dual to tiki')
        div5.html('Truncated dodecahedron')
        div6.html('vertex figure: isosceles triangle (base length 1, leg length 1.902113032590307)')
        div8.html('')
      break
      case 45:
        div.html('60 isosceles triangle (base length 1.723606797749979, leg length 1)')
        div3.html('Coxeter diagram: m5m3o')
        div4.html('Dual to tid')
        div5.html('Triakis icosahedron')
        div6.html('vertex figure: 20 triangles, 12 decagon')
        div8.html('')
      break
      case 46:
        div.html('20 hexagon, 12 pentagon faces')
        div3.html('Coxeter diagram: o5x3x')
        div4.html('Dual to pakid')
        div5.html('Truncated icosahedron')
        div6.html('vertex figure: isosceles triangle (base length phi, leg length sqrt(3))')
        div8.html('')
      break
      case 47:
        div.html('60 isosceles triangle (base length 1.127322003750035, leg length 1)')
        div3.html('Coxeter diagram: o5m3m')
        div4.html('Dual to ti')
        div5.html('Pentakis dodecahedron')
        div6.html('vertex figure: 20 hexagons, 12 pentagons')
        div8.html('')
      break
      case 45:
        div.html('60 isosceles triangle (base length 1.723606797749979, leg length 1)')
        div3.html('Coxeter diagram: m5m3o')
        div4.html('Dual to tid')
        div5.html('Triakis icosahedron')
        div6.html('vertex figure: 20 triangles, 12 decagon')
        div8.html('')
      break
      case 48:
        div.html('20 triangle, 30 square, 12 pentagon faces')
        div3.html('Coxeter diagram: x5o3x')
        div4.html('Dual to sladit')
        div5.html('names: small rhombicosidodecahedron, rhombicosidodecahedron')
        div6.html('vertex figure: icosoles trapezoid (base lengths: 1, phi; leg length sqrt(2)')
        div8.html('')
      break
      case 49:
        div.html('60 kite (width 1+1/phi^2, top height 0.412982543064056; bottom height 1.028620569605364) faces')
        div3.html('Coxeter diagram: m5o3m')
        div4.html('Dual to srid')
        div5.html('names: deltoidal hexecontahedron, strombic hexecontahedron, small lanceal ditriacontahedron')
        div6.html('vertex figure: 20 triangles, 30 squares, 12 pentagons')
        div8.html('')
      break
      case 50:
        div.html('20 hexagon, 30 square, 12 decagon faces')
        div3.html('Coxeter diagram: x5x3x')
        div4.html('Dual to siddykit')
        div5.html('names: great rhombicosidodecahedron, truncated icosidodecahedron')
        div6.html('vertex figure: scalene triangle (lengths 1.2354728658493561, 1.2139220723547202, 0.6881909602355869)')
        div8.html('')
      break
      case 51:
        div.html('120 scalene triangle (lengths 0.8502412578938806, 1.320820393249937, 0.5263932022500211) faces')
        div3.html('Coxeter diagram: m5m3m')
        div4.html('Dual to grid')
        div5.html('names: disdyakis triacontahedron, small disdyakis triacontahedron')
        div6.html('vertex figure: 20 hexagons, 30 squares, 12 decagons')
        div8.html('')
      break
      case 52:
        div.html('12 pentagon, 80 triangle faces')
        div3.html('Coxeter diagram: s5s3s')
        div4.html('Dual to sapedit')
        div5.html('names: snub dodecahedron, snub icosidodecahedron')
        div6.html('vertex figure: irregular pentagon (1 edge length phi side, rest edge length 1)')
        div8.html('')
      break
      case 53:
        div.html('60 irregular pentagon (2 edge length 1.74985 sides, rest edge length 1) faces')
        div3.html('Coxeter diagram: p5p3p')
        div4.html('Dual to snid')
        div5.html('names: pentagonal hexecontahedron, small petaloid ditriacontahedron')
        div6.html('vertex figure: 12 pentagons, 80 triangles')
        div8.html('')
      break
      case 54:
        div.html('8 triangle, 6 square, 8 octagram faces')
        div3.html('Coxeter diagram: x4/3x3o4*a')
        div4.html('Dual to great hexacronic icositetrahedron')
        div5.html('Great cubicuboctahedron')
        div6.html('vertex figure: icosoles trapezoid (base lengths: 1, sqrt(2); leg length 0.7653668647301795)')
        div8.html('')
      break
      case 55:
        div.html('24 dart (width 2*sqrt(2-1), top height 0.3849167582902855; bottom height 1.4736257582079) faces')
        div3.html('Coxeter diagram: m4/3m3o4*a')
        div4.html('Dual to gocco')
        div5.html('Great hexacronic icositetrahedron')
        div6.html('vertex figure: 8 triangles, 6 squares, 8 octagrams')
        div8.html('')
      break
      case 56:
        div.html('8 triangle, 18 square faces')
        div3.html('Coxeter diagram: x4/3o3x')
        div4.html('Dual to great deltoidal icositetrahedron')
        div5.html('names: quasirhombicuboctahedron, nonconvex great rhombicuboctahedron')
        div6.html('vertex figure: crossed icosoles trapezoid (base lengths: 1, sqrt(2); leg length sqrt(2))')
        div8.html('')
      break
      case 57:
        div.html('24 dart (width sqrt(2), top height -0.6570940082697; bottom height 2.5156365247678854) faces')
        div3.html('Coxeter diagram: m4/3o3m')
        div4.html('Dual to querco')
        div5.html('Great deltoidal icositetrahedron')
        div6.html('vertex figure: 8 triangles, 18 squares')
        div8.html('')
      break
      case 58:
        div.html('6 octagram, 12 square faces')
        div3.html('')
        div4.html('Dual to great rhombihexacron')
        div5.html('names: great rhombihexahedron, great rhombicube')
        div6.html('vertex figure: butterfly (width: sqrt(2), diagonal sqrt(2); leg length sqrt(2-sqrt(2)))')
        div8.html('')
      break
      case 59:
        div.html('24 butterfly (width: sqrt(2), diagonal 2sqrt(2-sqrt(2)); leg length sqrt(2(2-sqrt(2)))) faces')
        div3.html('')
        div4.html('Dual to groh')
        div5.html('Great rhombihexacron')
        div6.html('vertex figure: 6 octagrams, 12 squares')
        div8.html('')
      break
      case 60:
        div.html('6 octagram, 8 triangle faces')
        div3.html('Coxeter diagram: x4/3x3o')
        div4.html('Dual to great triakis octahedron')
        div5.html('names: quasitruncated hexahedron, quasitruncated cube, stellated truncated hexahedron, stellatruncated cube')
        div6.html('vertex figure: isosceles triangle (base length 1, leg length 0.7653668647301795)')
        div8.html('')
      break
      case 61:
        div.html('24 isosceles triangle (base length 1-sqrt(2), leg length 2) faces')
        div3.html('Coxeter diagram: m4/3m3o')
        div4.html('Dual to quith')
        div5.html('Great triakis octahedron')
        div6.html('vertex figure: 6 octagrams, 8 triangles')
        div8.html('')
      break
      case 62:
        div.html('8 triangle, 6 square, 8 octagon faces')
        div3.html('Coxeter diagram: x4/3o3x4*a')
        div4.html('Dual to small hexacronic icositetrahedron')
        div5.html('Small cubicuboctahedron')
        div6.html('vertex figure: crossed icosoles trapezoid (base lengths: 1, sqrt(2); leg length sqrt(2+sqrt(2)))')
        div8.html('')
      break
      case 63:
        div.html('24 dart (width 2+2sqrt(2), top height 2.7979326519318; bottom height -1.5302401796955) faces')
        div3.html('Coxeter diagram: m4/3o3m4*a')
        div4.html('Dual to socco')
        div5.html('Small hexacronic icositetrahedron')
        div6.html('vertex figure: 8 triangles, 6 squares, 8 octagons')
        div8.html('')
      break
      case 64:
        div.html('12 square, 8 octagon faces')
        div3.html('')
        div4.html('Dual to small rhombihexacron')
        div5.html('Small rhombihexahedron')
        div6.html('vertex figure: butterfly (width: sqrt(2), diagonal 1.8477590650225737; leg length sqrt(2))')
        div8.html('')
      break
      case 65:
        div.html('24 butterfly (width: 2+2sqrt(2), diagonal 2sqrt(2+sqrt(2)); leg length sqrt(2(2+sqrt(2)))) faces')
        div3.html('')
        div4.html('Dual to sroh')
        div5.html('Small rhombihexacron')
        div6.html('vertex figure: 12 squares, 8 octagons')
        div8.html('')
      break
      case 66:
        div.html('8 hexagon, 8 octagon, 8 octagram faces')
        div3.html('Coxeter diagram: x4/3x3x4*a')
        div4.html('Dual to tetradyakis hexahedron')
        div5.html('names: cuboctatruncated cuboctahedron, cubitruncated cuboctahedron')
        div6.html('vertex figure: scalene triangle (lengths sqrt(3), sqrt(2+sqrt(2)), sqrt(2-sqrt(2))')
        div8.html('')
      break
      case 67:
        div.html('48 scalene triangle (lengths 5.531658196681838, 6.272310825528027, -4.83743295509943) faces')
        div3.html('Coxeter diagram: m4/3m3m4*a')
        div4.html('Dual to cotco')
        div5.html('Tetradyakis hexahedron')
        div6.html('vertex figure: 8 hexagons, 8 octagons, 8 octagrams')
        div8.html('')
      break
      case 68:
        div.html('20 hexagon, 12 decagon faces')
        div3.html('')
        div4.html('Dual to small dodecicosacron')
        div5.html('Small dodecicosahedron')
        div6.html('vertex figure: butterfly (width: 1, diagonal 1.902113032590307; leg length sqrt(3))')
        div8.html('')
      break
      case 69:
        div.html('60 butterfly (width: 7.854101966249685, diagonal 5.330704256005837; leg length 3.294556414185328) faces')
        div3.html('')
        div4.html('Dual to siddy')
        div5.html('Small dodecicosacron')
        div6.html('vertex figure: 20 hexagons, 12 decagons')
        div8.html('')
      break
      case 70:
        div.html('30 square, 12 decagon faces')
        div3.html('Coexter diagram: x5/2x5x -12{10/2}')
        div4.html('Dual to small rhombidodecacron')
        div5.html('Small rhombidodecahedron')
        div6.html('vertex figure: butterfly (width: 1.618033988749895, diagonal 1.9021130325903073; leg length sqrt(2))')
        div8.html('')
      break
      case 71:
        div.html('60 butterfly (width: 2.3659451072949, diagonal 1.9667654144346929; leg length 1.2154880882994) faces')
        div3.html('Coexter diagram: m5/2m5m')
        div4.html('Dual to sird')
        div5.html('Small rhombidodecacron')
        div6.html('vertex figure: 30 squares, 12 decagons')
        div8.html('')
      break
      case 72:
        div.html('20 triangle, 12 petagon, 12 decagon faces')
        div3.html('Coexter diagram: x3/2o5x5*a')
        div4.html('Dual to small dodecacronic hexecontahedron')
        div5.html('names: small dodecicosidodecahedron, small dodekicosidodecahedron')
        div6.html('vertex figure: crossed icosoles trapezoid (base lengths: 1, (1+sqrt(5))/2; leg length 1.902113032590307)')
        div8.html('')
      break
      case 73:
        div.html('60 kite (width 1+sqrt(5), top height 2.408659879620652; bottom height -0.967056766951233)')
        div3.html('Coexter diagram: m3/2o5m5*a')
        div4.html('Dual to saddid')
        div5.html('Small dodecacronic hexecontahedron')
        div6.html('vertex figure: 20 triangles, 12 petagons, 12 decagons')
        div8.html('')
      break
      case 74:
        div.html('30 square, 20 hexagon faces')
        div3.html('')
        div4.html('Dual to rhombicosacron')
        div5.html('Rhombicosahedron')
        div6.html('vertex figure: butterfly (width: (1+sqrt(5))/2, diagonal sqrt(3); leg length sqrt(2))')
        div8.html('')
      break
      case 75:
        div.html('60 butterfly (width: 2, diagonal 2.4030098868913035; leg length (5*sqrt(6)+sqrt(30))/10) faces')
        div3.html('')
        div4.html('Dual to ri')
        div5.html('Rhombicosacron')
        div6.html('vertex figure: 30 squares, 20 hexagons')
        div8.html('')
      break
      case 76:
        div.html('20 triangle, 12 petagon, 20 hexagon faces')
        div3.html('Coexter diagram: o3/2m3m5*a')
        div4.html('Dual to great icosacronic hexecontahedron')
        div5.html('Great icosicosidodecahedron')
        div6.html('vertex figure: icosoles trapezoid (base lengths: 1, (1+sqrt(5))/2; leg length sqrt(3))')
        div8.html('')
      break
      case 77:
        div.html('60 kite (width sqrt(5), top height 0.749922451819567; bottom height -2.3264375042337) faces')
        div3.html('')
        div4.html('Dual to giid')
        div5.html('Great icosacronic hexecontahedron')
        div6.html('vertex figure: 20 triangles, 12 pentagons, 20 hexagons')
        div8.html('')
      break
      case 78:
        div.html('12 square, 6 octagram, 8 hexagon faces')
        div3.html('Coexter diagram: x4/3x3x')
        div4.html('Dual to great disdyakis dodecahedron')
        div5.html('names: quasitruncated cuboctahedron, great truncated cuboctahedron')
        div6.html('vertex figure: scalene triangle (lengths sqrt(2), sqrt(3), sqrt(2-sqrt(2))')
        div8.html('')
      break
      case 79:
        div.html('48 scalene triangle (lengths 0.7702611200513194, 1.9005212337831607, -0.22860089862607577) faces')
        div3.html('Coexter diagram: m4/3m3m')
        div4.html('Dual to quitco')
        div5.html('Great disdyakis dodecahedron')
        div6.html('vertex figure: 12 squares, 6 octagrams, 8 hexagons')
        div8.html('')
      break
      case 80:
        div.html('12 decagon, 12 pentagram faces')
        div3.html('Coexter diagram: o5/2x5x')
        div4.html('Dual to small stellapentakis dodecahedron')
        div5.html('names: truncated great dodecahedron, great truncated dodecahedron')
        div6.html('vertex figure: isosceles triangle (base length (sqrt(5)-1)/2, leg length sqrt((5+sqrt(5))/2)')
        div8.html('')
      break
      case 81:
        div.html('60 isosceles triangle (base length 5.854101966249696, leg length 3.09016994374948) faces')
        div3.html('Coexter diagram: o5/2m5m')
        div4.html('Dual to tigid')
        div5.html('Small stellapentakis dodecahedron')
        div6.html('vertex figure: 12 decagons, 12 pentagrams')
        div8.html('')
      break
      case 82:
        div.html('12 decagram, 12 pentagon faces')
        div3.html('Coexter diagram: x5/3x5o')
        div4.html('Dual to great pentakis dodecahedron')
        div5.html('names: quasitruncated small stellated dodecahedron, small stellated truncated dodecahedron')
        div6.html('vertex figure: isosceles triangle (base length (1+sqrt(5))/2, leg length sqrt((5-sqrt(5))/2)')
        div8.html('')
      break
      case 83:
        div.html('60 isosceles triangle (base length 0.8541019662496823, leg length 8.090169943749448) faces')
        div3.html('Coexter diagram: m5/3m5o')
        div4.html('Dual to quit sissid')
        div5.html('Great pentakis dodecahedron')
        div6.html('vertex figure: 12 decagrams, 12 pentagons')
        div8.html('')
      break
      case 84:
        div.html('12 decagram, 20 triangle faces')
        div3.html('Coexter diagram: x5/3x3o')
        div4.html('Dual to great triakis icosahedron')
        div5.html('names: quasitruncated great stellated dodecahedron, great stellated truncated dodecahedron')
        div6.html('vertex figure: isosceles triangle (base length 1, leg length sqrt((5-sqrt(5))/2)')
        div8.html('')
      break
      case 85:
        div.html('60 isosceles triangle (base length (5-sqrt(5))/2, leg length 5*((7-sqrt(5))/22) faces')
        div3.html('Coexter diagram: m5/3m3o')
        div4.html('Dual to quit gissid')
        div5.html('Great triakis icosahedron')
        div6.html('vertex figure: 20 triangles, 12 decagrams')
        div8.html('')
      break
      case 86:
        div.html('12 pentagram, 20 hexagon faces')
        div3.html('Coexter diagram: o5/2x3x')
        div4.html('Dual to great stellapentakis dodecahedron')
        div5.html('names: truncated great icosahedron, great truncated icosahedron')
        div6.html('vertex figure: isosceles triangle (base length (sqrt(5)-1)/2, leg length sqrt(3)')
        div8.html('')
      break
      case 87:
        div.html('60 isosceles triangle (base length 9*(1+2*sqrt(5))/19, leg length 3*((1+sqrt(5))/2) faces')
        div3.html('Coexter diagram: o5/2m3m')
        div4.html('Dual to tiggy')
        div5.html('Great stellapentakis dodecahedron')
        div6.html('vertex figure: 20 hexagons, 12 pentagrams')
        div8.html('')
      break
      case 88:
        div.html('12 decagram, 20 hexagon faces')
        div3.html('')
        div4.html('Dual to great dodecicosacron')
        div5.html('Great dodecicosahedron')
        div6.html('vertex figure: butterfly (width: (1+sqrt(5))/2, diagonal sqrt(3); leg length sqrt((5-sqrt(5))/2))')
        div8.html('')
      break
      case 89:
        div.html('60 butterfly (width: 2.3724855200306108, diagonal 2.1983388520507723; leg length 1.2584085723648186) faces')
        div3.html('')
        div4.html('Dual to giddy')
        div5.html('Great dodecicosacron')
        div6.html('vertex figure: 20 hexagons, 12 decagrams')
        div8.html('')
      break
      case 90:
        div.html('12 decagram, 30 square faces')
        div3.html('')
        div4.html('Dual to great rhombidodecacron')
        div5.html('Great rhombidodecahedron')
        div6.html('vertex figure: butterfly (width: 1, diagonal sqrt(2); leg length sqrt((5-sqrt(5))/2))')
        div8.html('')
      break
      case 91:
        div.html('60 butterfly (width: (5+sqrt(5))/2, diagonal 5+sqrt(5); leg length 5-sqrt(5)) faces')
        div3.html('')
        div4.html('Dual to gird')
        div5.html('Great rhombidodecacron')
        div6.html('vertex figure: 30 squares, 12 decagrams')
        div8.html('')
      break
      case 92:
        div.html('12 pentagram, 12 pentagon, 20 hexagon faces')
        div3.html('Coexter diagram: o5/3x3x5*a')
        div4.html('Dual to medial icosacronic hexecontahedron')
        div5.html('Icosidodecadodecahedron')
        div6.html('vertex figure: crossed icosoles trapezoid (base lengths: (sqrt(5)-1)/2, (1+sqrt(5))/2; leg length sqrt(3))')
        div8.html('')
      break
      case 93:
        div.html('60 dart (width 2, top height sqrt(203+84*sqrt(5))/11; bottom height -sqrt(203-84*sqrt(5))/11') 
        div3.html('Coexter diagram: o5/3m3m5*a')
        div4.html('Dual to Ided')
        div5.html('Medial icosacronic hexecontahedron')
        div6.html('vertex figure: 12 pentagrams, 12 pentagons, 20 hexagons')
        div8.html('')
      break
      case 94:
        div.html('12 pentagram, 12 decagon, 20 triangle faces')
        div3.html('Coexter diagram: x5/3o3x5*a')
        div4.html('Dual to small ditrigonal dodecacronic hexecontahedron')
        div5.html('Small ditrigonal dodecicosidodecahedron')
        div6.html('vertex figure: crossed icosoles trapezoid (base lengths: (sqrt(5)-1)/2, 1; leg length sqrt((5+sqrt(5))/2))')
        div8.html('')
      break
      case 95:
        div.html('60 dart (width 3*phi^2, top height sqrt(8577/2888+(3645*sqrt(5))/2888); bottom height -3*sqrt(346+18*sqrt(5))/44') 
        div3.html('Coexter diagram: m5/3o3m5*a')
        div4.html('Dual to sidditdid')
        div5.html('Small ditrigonal dodecacronic hexecontahedron')
        div6.html('vertex figure: 12 pentagrams, 12 decagons, 20 triangles')
        div8.html('')
      break
      case 96:
        div.html('12 pentagon, 12 decagram, 20 triangle faces')
        div3.html('Coexter diagram: x5/3x3o5*a')
        div4.html('Dual to great ditrigonal dodecacronic hexecontahedron')
        div5.html('Great ditrigonal dodecicosidodecahedron')
        div6.html('vertex figure: icosoles trapezoid (base lengths: 1, (1+sqrt(5))/2; leg length sqrt((5-sqrt(5))/2))')
        div8.html('')
      break
      case 97:
        div.html('60 kite (width 3/phi^2, top height sqrt(8577/2888-(3645*sqrt(5))/2888); bottom height 3*sqrt(346-18*sqrt(5))/44') 
        div3.html('Coexter diagram: m5/3m3o5*a')
        div4.html('Dual to gidditdid')
        div5.html('Great ditrigonal dodecacronic hexecontahedron')
        div6.html('vertex figure: 12 pentagons, 12 decagrams, 20 triangles')
        div8.html('')
      break
      case 98:
        div.html('12 pentagram, 12 decagram, 20 triangle faces')
        div3.html('Coexter diagram:  x5/3x5/2o3*a')
        div4.html('Dual to great dodecacronic hexecontahedron')
        div5.html('Great dodecicosidodecahedron')
        div6.html('vertex figure: icosoles trapezoid (base lengths: 1, (sqrt(5)-1)/2; leg length sqrt((5-sqrt(5))/2))')
        div8.html('')
      break
      case 99:
        div.html('60 kite (width sqrt(5)-1, top height sqrt(53/2-(23*sqrt(5))/2)/3; bottom height sqrt(157/2-(31*sqrt(5))/2)/11')
        div3.html('Coexter diagram: m5/3m5/2o3*a')
        div4.html('Dual to gaddid')
        div5.html('Great dodecacronic hexecontahedron')
        div6.html('vertex figure: 12 pentagrams, 12 decagrams, 20 triangles')
        div8.html('')
      break
      case 100:
        div.html('12 pentagram, 20 hexagon, 20 triangle faces')
        div3.html('Coexter diagram: x5/2o3x3*a')
        div4.html('Dual to small icosacronic hexecontahedron')
        div5.html('Small icosicosidodecahedron')
        div6.html('vertex figure: icosoles trapezoid (base lengths: 1, (sqrt(5)-1)/2; leg length sqrt(3)')
        div8.html('')
      break
      case 101:
        div.html('60 kite (width sqrt(5), top height sqrt(1345-570*sqrt(5))/22; sqrt(1345-570*sqrt(5))/22')
        div3.html('Coexter diagram: m5/2o3m3*a')
        div4.html('Dual to siid')
        div5.html('Small icosacronic hexecontahedron')
        div6.html('vertex figure: 12 pentagrams, 20 hexagons, 20 triangles')
        div8.html('')
      break
      case 130:
        div.html(A*gcm+' square, 2 '+GetName()+' faces')
        if(gcm==1) {
          if(B==1) {
            div3.html('Coexter diagram: x x'+A+'o')
          }else {
            div3.html('Coexter diagram: x x'+A+'/'+B+'o')
          }
        }else {
          div3.html('')
        }
        div5.html(GetName('gonal','grammic')+' prism')
        div4.html('Dual to '+GetName('gonal','grammic')+' tegum')
        if(gcm>1) {
          div5.html(GetName('gonal','grammic')+' prisms')
          div4.html('Dual to '+GetName('gonal','grammic')+' tegums')
        }
        div6.html('vertex figure: icosoles triangle (base length sqrt(2), leg length '+sqrt(2+2*cos(2*PI/A*B))+')')
        div8.html('')
      break
      case 131:
        div.html(A*gcm*2+' icocoles triangle faces')
        if(gcm==1) {
          if(B==1) {
            div3.html('Coexter diagram: oxo'+A+'ooo&#xt')
          }else {
            div3.html('Coexter diagram: oxo'+A+'/'+B+'ooo&#xt')
          }
        }else {
          div3.html('')
        }
        div5.html(GetName('gonal','grammic')+' tegum')
        div4.html('Dual to '+GetName('gonal','grammic')+' prism')
        if(gcm>1) {
          div5.html(GetName('gonal','grammic')+' tegums')
          div4.html('Dual to '+GetName('gonal','grammic')+' prisms')
        }
        div6.html('vertex figure: '+'A*gcm*2'+' squares, 2 '+GetName()+'s')
        div8.html('')
      break
      case 134:
        div.html('20 tripod (edge lengths: 1, (3+sqrt(5))/2) faces')
        div3.html('')
        div4.html('Self-Dual')
        div5.html('names: ditrigonal icosahedron, excavated dodecahedron, Hugel\'s polyhedron')
        div6.html('vertex figure: triambus (dual edge lengths: 1, 2.618033988749895)')
        div8.html('')
      break
      case 135:
        div.html('8 triangle {3} faces')
        div3.html('Coexter symbol {4,3}[2{3,3}]{3,4}')
        div4.html('Self-Dual')
        div5.html('names: stella octangula, stellated octahedron, compound of two tetrahedra')
        div6.html('vertex figure: triangle {3}')
        div8.html('')
      break
      case 136:
        div.html('20 triangle {3} faces')
        div3.html('Coexter symbol {5,3}[5{3,3}]{3,5}')
        div4.html('Dual to its enantiomorph pair')
        div5.html('names: chiricosahedron, compound of five tetrahedra')
        div6.html('vertex figure: triangle {3}')
        div8.html('')
      break
      case 137:
        div.html('20 uniform hexagram {6/2} faces')
        div3.html('Coexter symbol 2{5,3}[10{3,3}]2{3,5}')
        div4.html('Self-Dual')
        div5.html('names: icosicosahedron, compound of ten tetrahedra')
        div6.html('vertex figure: uniform hexagram {6/2}')
        div8.html('')
      break
      case 138:
        div.html('30 square {4} faces')
        div3.html('Coexter symbol 2{5,3}[5{4,3}]')
        div4.html('dual to se')
        div5.html('names: rhombihedron, compound of five cubes')
        div6.html('vertex figure: uniform hexagram {6/2}')
        div8.html('')
      break
      case 139:
        div.html('20 uniform hexagram {6/2} faces')
        div3.html('Coexter symbol [5{3,4}]2{3,5}')
        div4.html('dual to rhom')
        div5.html('names: small icosicosahedron, compound of five octahedra')
        div6.html('vertex figure: square {4}')
        div8.html('')
      break
      case 140:
        div.html('20 irregular pentagram faces')
        div3.html('')
        div4.html('dual to noble faceting of sirco')
        div5.html('Noble faceting of truncated cube')
        div6.html('vertex figure: irregular pentagon')
        div8.html('')
      break
      case 141:
        div.html('20 irregular pentagon faces')
        div3.html('')
        div4.html('dual to noble faceting of tic')
        div5.html('Noble faceting of small rhombicuboctahedron')
        div6.html('vertex figure: irregular pentagram')
        div8.html('')
      break
      case 142:
        div.html('24 irregular pentagon faces')
        div3.html('')
        div4.html('Self-Dual')
        div5.html('Noble faceting of snub cube')
        div6.html('vertex figure: irregular pentagon')
        div8.html('')
      break
      case 143:
        div.html('24 irregular pentagon faces')
        div3.html('')
        div4.html('Self-Dual')
        div5.html('Noble faceting of nonuniform snub cube')
        div6.html('vertex figure: irregular pentagon')
        div8.html('')
      break
      case 144:
        div.html('20 irregular great enneagram faces')
        div3.html('')
        div4.html('dual to verf of paphacki')
        div5.html('names: echidnahedron, final stellation of the icosahedron')
        div6.html('vertex figure: isosceles triangle (base length 4, leg length 5.7888543819998)')
        div8.html('')
      break
      case 146:
        div.html('20 irregular enneagram faces')
        div3.html('')
        div4.html('dual to verf of paphicki')
        div5.html('Crennell number 4 stellation of the icosahedron')
        div6.html('vertex figure: isosceles triangle (base length 6+2*sqrt(5), leg length 5.7888543819998)')
        div8.html('')
      break
      case 145:
        div.html('20 isosceles triangle (base length 1+sqrt(5), leg length 2*sqrt(2)) faces')
        div3.html('')
        div4.html('dual to echidnahedron')
        div5.html('Verf of paphacki')
        div6.html('vertex figure: irregular great nonagram')
        div8.html('')
      break
      case 147:
        div.html('20 isosceles triangle (base length sqrt(5)-1, leg length 2*sqrt(2))')
        div3.html('')
        div4.html('dual to crennell 4 icosahedron stellation')
        div5.html('Verf of paphicki')
        div6.html('vertex figure: irregular nonagram')
        div8.html('')
      break
    }
  }else if(dimentionCount==2&&inp2.value()==2) {
    div8.html('')
    div.html(A*gcm+' edges')
    div1.html(A*gcm+' verticies')
    if(B*gcm==1) {
      div2.html('Schläfli symbol {'+A+'}')
    }else {
      div2.html('Schläfli symbol {'+A*gcm+'/'+B*gcm+'}')
    }
    div3.html('Self-dual')
    div4.html(GetName())
    div5.html('')
    div6.html('')
  }else {
    var shclaf='3'
    for(var i = 0; i<dimentionCount-3; i++) {
      shclaf+=',3'
    }
    switch(polytopeID) {
      case 0:
        div.html(dimentionCount+1+' '+(dimentionCount-1)+'-simplex facets')
        div1.html(0.5*sq(dimentionCount)+0.5*dimentionCount+' edges')
        div2.html(dimentionCount+1+' verticies')
        div3.html('Self-Dual')
        div4.html('Schläfli symbol {'+shclaf+',3}')
        div5.html('vertex figure: '+(dimentionCount-1)+'-simplex {'+shclaf+'}')
        div6.html('')
        div8.html('')
      break
      case 1:
        var ed = 4
        for(var i = 2; i<dimentionCount; i++) {
          ed*=2
          ed+=pow(2,i)
        }
        div.html(dimentionCount*2+' '+(dimentionCount-1)+'-hypercube facets')
        div1.html(ed+' edges')
        div2.html(pow(2,dimentionCount)+' verticies')
        div3.html('Dual to '+dimentionCount+'-orthoplex')
        div4.html('Schläfli symbol {4,'+shclaf+'}')
        div5.html('vertex figure: '+(dimentionCount-1)+'-simplex {'+shclaf+'}')
        div8.html('')
        div6.html('')
      break
      case 2:
        div.html(pow(2,dimentionCount)+' '+(dimentionCount-1)+'-simplex facets')
        div1.html(2*sq(dimentionCount)-2*dimentionCount+' edges')
        div2.html(dimentionCount*2+' verticies')
        div3.html('Dual to '+dimentionCount+'-hypercube')
        div4.html('Schläfli symbol {'+shclaf+',4}')
        div8.html('')
        div6.html('')
        div5.html('vertex figure: '+(dimentionCount-1)+'-orthoplex {'+shclaf.substring(2,shclaf.length)+',4'+'}')
      break
      case 3:
        div.html(pow(2,dimentionCount-1)+' '+(dimentionCount-1)+'-simplex, '+dimentionCount+' '+(dimentionCount-1)+'-orthoplex'+' facets')
        div1.html(2*sq(dimentionCount)-2*dimentionCount+' edges')
        div2.html(dimentionCount*2+' verticies')
        div3.html('Dual to dual to '+dimentionCount+'-demicross')
        div4.html('Coexter Diagram: Coexter Diagram for '+dimentionCount+'-demicross')
        div8.html('')
        div6.html('')
        div5.html('vertex figure: '+(dimentionCount-1)+'-demicross')
      break
    }
  }
  if(inp2.value()==-1) {
    div5.html('')
    div.html('')
    div1.html('')
    div2.html('')
    div3.html('')
    div4.html('')
    div6.html('')
    joe.show()
  }else {
    joe.hide()
    shuffle(faceData,true)
  }
}
function keyPressed() {
  if(keyCode==86) {
    verticies*=-1
  }if(keyCode==76) {
    edges*=-1
  }if(keyCode==70) {
    faces*=-1
  }
}
var X = 0
var Y = 0
var frameArr=[]
function draw() {
  background(0)
  directionalLight(0,0,100,0,1,-1)
  directionalLight(0,0,100,0,1,-1)
  specularMaterial(0,0,100)
  shininess(20)
  if(frameArr.length>=60) {
    frameArr.shift()
  }
  frameArr[frameArr.length]=frameRate()
  var frmrt = 0
  for(var i = 0; i<frameArr.length; i++) {
    frmrt+=frameArr[i]/frameArr.length
  }
  var dArr=rotArr
  if(mouseIsPressed) {
    X=(pmouseX-mouseX)/100
    Y=(pmouseY-mouseY)/100
  }
  if(dimentionCount>2) {
    rotArr[1][1]+=Y
    rotArr[1][0]+=X
  }
  fct = mrSlider.value()
  joeDiv.html(fct)
  var W =joeDiv.style('width')
  var r = ''
  for(var i = 0; i<W.length-2;i++) {
    r+=W.charAt(i)
  }
  joeDiv.position(width-5-r,20)
  div7.html(frmrt+'fps')
  var mx = (height/2)/tan(PI/6)
  col=1-((millis()/1e3*(lspeed.value()**2))%1)
  col2=(millis()/1e3*(vspeed.value()**2))%1
  col3=(millis()/1e3*(fspeed.value()**2))%1
  ldiv.html(lspeed.value()**2+' cycles of edge color/second')
  fdiv.html(fspeed.value()**2+' cycles of face color/second')
  vdiv.html(vspeed.value()**2+' cycles of vertex color/second')
  if(keyIsPressed) {
    if((keyIsDown(87))&&dimentionCount>3) {
      rotArr[2][0]-=1/frameRate()*PI
    }if((keyIsDown(83))&&dimentionCount>3) {
      rotArr[2][0]+=1/frameRate()*PI
    }if((keyIsDown(65))&&dimentionCount>3) {
      rotArr[2][1]-=1/frameRate()*PI
    }if((keyIsDown(68))&&dimentionCount>3) {
      rotArr[2][1]+=1/frameRate()*PI
    }if((keyIsDown(69))&&dimentionCount>3) {
      rotArr[2][2]-=1/frameRate()*PI
    }if((keyIsDown(81))&&dimentionCount>3) {
      rotArr[2][2]+=1/frameRate()*PI
    }if(keyIsDown(84)) {
      rotArr[0][0]+=1/frameRate()*PI
    }if(keyIsDown(85)) {
      rotArr[0][0]-=1/frameRate()*PI
    }if(keyIsDown(187)) {
      zoom*=1.1
    }if(keyIsDown(89)&&dimentionCount>2) {
      rotArr[1][1]+=1/frameRate()*PI
    }if(keyIsDown(72)&&dimentionCount>2) {
      rotArr[1][1]-=1/frameRate()*PI
    }if(keyIsDown(71)&&dimentionCount>2) {
      rotArr[1][0]+=1/frameRate()*PI
    }if(keyIsDown(74)&&dimentionCount>2) {
      rotArr[1][0]-=1/frameRate()*PI
    }if(keyIsDown(189)) {
      zoom/=1.1
    }if(keyIsDown(82)) {
      var D=inpy.value()*1
      var D2=inpy2.value()*1
      if(D>D2&&dimentionCount>=D&&D>4&&D2>0) {
        rotArr[D-2][D2-1]=1/frameRate()*PI
      }
    }if(keyIsDown(71)) {
      var D=inpy.value()*1
      var D2=inpy2.value()*1
      if(D>D2&&dimentionCount>=D&&D>4&&D2>0) {
        rotArr[D-2][D2-1]-=1/frameRate()*PI
      }
    }
  }
  for(var h = 0; h<vertexData.length; h++) {
    for(var i = rotArr.length-1; i>=0; i--) {
      for(var j = 0; j<rotArr[i].length; j++) {
        var s = sin(rotArr[i][j])
        var c = cos(rotArr[i][j])
        var x = vertexData[h][j]
        var y = vertexData[h][i+1]
        vertexData[h][j]=x*c-y*s
        vertexData[h][i+1]=y*c+x*s
      }
    }
  }
  rotArr=[]
  for(var i = 1; i<dimentionCount; i++) {
    rotArr[i-1]=[]
    for(var j = 0; j<i; j++) {
      rotArr[i-1][j]=0
    }
  }
  var vertexDataProjected = []
  for(var i = 0; i<vertexData.length; i++) {
    vertexDataProjected[i]=[]
    for(var j = 0; j<vertexData[i].length; j++) {
      vertexDataProjected[i][j]=vertexData[i][j]/circumR
    }
    vertexDataProjected[i][max(dimentionCount,3)]=1
  }
  for(var i = 0; i<dimentionCount-3; i++) {
    vertexDataProjected = project(vertexDataProjected)
  }
  if(edges>0) {
  if(inp2.value()>-1) {
  var l = 0
  var AAAA=(intData.length==0)
  if(edgesData.length==0) {
    for(var k = 0; k<vertexData.length;k++) {
      for(var k2 = 0; k2<vertexData.length;k2++) {
        var BBBBB=areConnected(vertexData[k],vertexData[k2],edgeLength)
        if((BBBBB==2||BBBBB==1)&&k2>k) {
          if((BBBBB==2||BBBBB==='1')&&k<JL&&k2<JL) {
            if(BBBBB==2) {
              edgesData[edgesData.length]=[k,k2]
            }else if(AAAA) {
              intData[intData.length]=[k,k2]
            }
            l++
          }else if(BBBBB*1!==2) {
            if(((k<JL||k2<JL)&&dimentionCount==3&&(polytopeID==12||polytopeID==17))) {}else {
              if(AAAA) {
                intData[intData.length]=[k,k2]
              }
              l++
            }
          }
        }
      }
      if(L==l) {
        break
      }
    }
  }
  }
  for(var i = 0; i<edgesData.length; i++) {
    renderLine(vertexDataProjected[edgesData[i][0]],vertexDataProjected[edgesData[i][1]],2)
  }
  for(var i = 0; i<intData.length&&SHOWSI>0; i++) {
    renderLine(vertexDataProjected[intData[i][0]],vertexDataProjected[intData[i][1]],1)
  }
  }
  if(verticies>0) {
    for(var j = 0; j<JL; j++) {
      renderVertex(vertexDataProjected[j])
    }
  }
  var frct = zoom*height/tan(PI/6)/4
  if(faces>0) {
    for(var i = 0; i<faceData.length; i++) {
      if(faceData[i][0]!==undefined) {
        var V1 = []
        V1[0]=vertexDataProjected[faceData[i][1]][0]-vertexDataProjected[faceData[i][0]][0]
        V1[1]=vertexDataProjected[faceData[i][1]][1]-vertexDataProjected[faceData[i][0]][1]
        V1[2]=vertexDataProjected[faceData[i][1]][2]-vertexDataProjected[faceData[i][0]][2]
        var V2 = []
        V2[0]=vertexDataProjected[faceData[i][2]][0]-vertexDataProjected[faceData[i][0]][0]
        V2[1]=vertexDataProjected[faceData[i][2]][1]-vertexDataProjected[faceData[i][0]][1]
        V2[2]=vertexDataProjected[faceData[i][2]][2]-vertexDataProjected[faceData[i][0]][2]
        var Xx=V1[1]*V2[2]-V1[2]*V2[1]
        var Yy=V1[0]*V2[2]-V1[2]*V2[0]
        var Zz=V1[0]*V2[1]-V1[1]*V2[0]
        fill(360*col3%360,100,100)
        noStroke()
      }
      if(UseTT<0||faceData[i].length<5) {
        beginShape(TESS)
        if(Yy<Zz) {
          normal(Xx,Yy,Zz)
        }else {
          normal(-Xx,-Yy,-Zz)
        }
      var AAAAA = 0
      var bobby=0
      var arrAA=[]
      for(var j = 0; j<faceData[i].length; j++) {
        var J = faceData[i][j]
        if(J!==undefined) {
          vertex(vertexDataProjected[J][0]*frct,vertexDataProjected[J][1]*frct,vertexDataProjected[J][2]*frct)
        }else {
          var __ = faceData[i][AAAAA]
          vertex(vertexDataProjected[__][0]*frct,vertexDataProjected[__][1]*frct,vertexDataProjected[__][2]*frct)
          arrAA[bobby+1]=faceData[i][j+1]
          AAAAA=j+1
          bobby++
        }
      }
      for(var I = bobby; I>0; I--) {
        var I2=faceData[0][faceData[0].length-1]
        vertex(vertexDataProjected[arrAA[I]][0]*frct,vertexDataProjected[arrAA[I]][1]*frct,vertexDataProjected[arrAA[I]][2]*frct)
      }
      endShape()
    }else {
      fill(360*col3%360,100,100)
      noStroke()
      //stroke(255)
      var faceDarr=[[]]
      var J = 0
      for(var j = 0; j<faceData[i].length; j++) {
        if(faceData[i][j]==undefined) {
          J++
          j++
          faceDarr[J]=[]
        }
        faceDarr[J][faceDarr[J].length]=faceData[i][j]
      }
      for(var I = 0; I<faceDarr.length; I++) {
        beginShape(TESS)
        var dat = []
        if(Yy<Zz) {
          normal(Xx,Yy,Zz)
        }else {
          normal(-Xx,-Yy,-Zz)
        }
        for(var J = 0; J<faceDarr[I].length; J++) {
          dat.push([vertexDataProjected[faceDarr[I][J]][0]*frct,vertexDataProjected[faceDarr[I][J]][1]*frct,vertexDataProjected[faceDarr[I][J]][2]*frct])
        }
        var cen = [0,0,0]
        for(var _i = 0; _i<dat.length; _i++) {
          cen[0]+=dat[_i][0]/dat.length
          cen[1]+=dat[_i][1]/dat.length
          cen[2]+=dat[_i][2]/dat.length
        }
        var dat2=dat.slice()
        var datO = dat.slice()
        var bob = dat.length
        for(var i_ = 0; i_<dat.length; i_++) {
          var minD = 1e100
          var valu = 0
          for(var j_ = 0; j_<dat.length; j_++) {
            var d1 = dist(dat[i_][0],dat[i_][1],dat[i_][2],cen[0],cen[1],cen[2])
            var d2 = dist(dat[j_][0],dat[j_][1],dat[j_][2],cen[0],cen[1],cen[2])
            var a1 = [(dat[i_][0]-cen[0])/d1,(dat[i_][1]-cen[1])/d1,(dat[i_][2]-cen[2])/d1]
            var a2 = [(dat[j_][0]-cen[0])/d2,(dat[j_][1]-cen[1])/d2,(dat[j_][2]-cen[2])/d2]
            if(dist(a1[0],a1[1],a1[2],a2[0],a2[1],a2[2])<minD&&i_!==j_) {
              minD=dist(a1[0],a1[1],a1[2],a2[0],a2[1],a2[2])
              valu=j_
            }
          }
          var valu_1 = (valu+dat.length-1)%dat.length
          var valu1 = (valu+1)%dat.length
          if(i_!==valu_1&&i_!==valu1) {
            var _1 = dat[valu_1]
            var _2 = dat[valu]
            var _3 = dat[valu1]
            var __i = dat[i_]
            var det = (_2[1]-_3[1])*(_1[0]-_3[0])+(_3[0]-_2[0])*(_1[1]-_3[1])
            var l1 = ((_2[1]-_3[1])*(__i[0]-_3[0])+(_3[0]-_2[0])*(__i[1]-_3[1]))/det
            var l2 = ((_3[1]-_1[1])*(__i[0]-_3[0])+(_1[0]-_3[0])*(__i[1]-_3[1]))/det
            var l3 = 1-l1-l2
            if(l1>0&&l2>0&&l3>0) {
              datO[i_]=[NaN,NaN,NaN]
              bob--
            }
          }
        }
        dat=datO
        var n = 0
        for(var II = 0; II<dat.length; II++) {
          if(dat[n][0]!==dat[n][0]) {
            n++
          }
        }
        var array = []
        for(var l = 0; l<bob; l++) {
          array[array.length]=n
          var minm = 1e100
          var num = n
          for(var L = 0; L<dat.length; L++) {
            var d1 = dist(dat[n][0],dat[n][1],dat[n][2],cen[0],cen[1],cen[2])
            var d2 = dist(dat[L][0],dat[L][1],dat[L][2],cen[0],cen[1],cen[2])
            var a1 = [(dat[n][0]-cen[0])/d1,(dat[n][1]-cen[1])/d1,(dat[n][2]-cen[2])/d1]
            var a2 = [(dat[L][0]-cen[0])/d2,(dat[L][1]-cen[1])/d2,(dat[L][2]-cen[2])/d2]
            if(dist(a1[0],a1[1],a1[2],a2[0],a2[1],a2[2])<minm&&L!==n) {
              minm=dist(a1[0],a1[1],a1[2],a2[0],a2[1],a2[2])
              num=L
            }
          }
          dat[n]=[NaN,NaN,NaN]
          n=num
        }
        function intersect(a,b,c,d) {
          var x10 = a[0]
          var y10 = a[1]
          var z10 = a[2]
          var x20 = b[0]
          var y20 = b[1]
          var z20 = b[2]
          var A = (y10-y20)/(x10-x20)
          var B = -A*x10+y10
          var A1 = (z10-z20)/(y10-y20)
          var B1 = -A1*y10+z10
          var x11 = c[0]
          var y11 = c[1]
          var z11 = c[2]
          var x21 = d[0]
          var y21 = d[1]
          var z21 = d[2]
          var C = (y11-y21)/(x11-x21)
          var D = -C*x11+y11
          var C1 = (z11-z21)/(y11-y21)
          var D1 = -C1*y11+z11
          var X_ = (D-B)/(A-C)
          if(A==C&&A1==C1) {
            return [NaN,NaN,NaN]
          }
          var arRR = [X_,X_*A+B,(A1*D1-B1*C1)/(A1-C1)]
          if(z21==z20&&z20==z10&&z10==z11) {
            arRR[2]=z21
          }
          var minX = min(x10,x20)
          var maxX = max(x10,x20)
          var minY = min(c[1],d[1])
          var maxY = max(c[1],d[1])
          var maxDs = max(dist(a[0],a[1],a[2],cen[0],cen[1],cen[2]),dist(c[0],c[1],c[2],cen[0],cen[1],cen[2]))
          var minDs = min(dist(a[0],a[1],a[2],arRR[0],arRR[1],arRR[2]),dist(c[0],c[1],c[2],arRR[0],arRR[1],arRR[2]))
          if(arRR[0]<minX||arRR[0]>maxX||arRR[1]<minY||arRR[1]>maxY||(b[0]==d[0]&&b[1]==d[1]&&b[2]==d[2])||maxDs<minDs) {
            return [NaN,NaN,NaN]
          }
          return arRR
        }
        var isNsimple = false
        var dat3 = []
        for(var O = 0; O<array.length; O++) {
          var vInd = array[O]
          var a1 = dat2[(vInd+1)%dat2.length]
          var a2 = dat2[(vInd+dat2.length-1)%dat2.length]
          var vIndnext = array[(O+1)%array.length]
          var b1 = dat2[(vIndnext+1)%dat2.length]
          var b2 = dat2[(vIndnext+dat2.length-1)%dat2.length]
          dat3.push([dat2[vInd][0],dat2[vInd][1],dat2[vInd][2]])
          var i12 = intersect(dat2[vInd],a1,dat2[vIndnext],b2)
          var i21 = intersect(dat2[vInd],a2,dat2[vIndnext],b1)
          var diff = vInd-vIndnext
          if(diff>dat2.length/2) {
            diff-=dat2.length
          }else if(diff<-dat2.length/2) {
            diff+=dat2.length
          }
          if(i12[0]==i12[0]&&(abs(diff)>1)) {
            dat3.push([i12[0],i12[1],i12[2]])
            isNsimple=true
          }
          if(i21[0]==i21[0]&&(abs(diff)>1)) {
            dat3.push([i21[0],i21[1],i21[2]])
            isNsimple=true
          }
        }
        if(isNsimple) {
          for(var __ = 0; __<dat3.length; __++) {
            vertex(dat3[__][0],dat3[__][1],dat3[__][2])
          }
        }else {
          for(var __ = 0; __<dat2.length; __++) {
            vertex(dat2[__][0],dat2[__][1],dat2[__][2])
          }
        }
        endShape()
      }
    }
    col3+=1/faceData.length
    }
  }
}
function project(aa) {
  var vertexDProjected=[]
  for(var i = 0; i<aa.length; i++) {
    var fact = 1/(fct-aa[i][aa[i].length-2]*f)
    if(fact>1000000||fact!==fact) {
      fact=1000000
    }
    if(orthoOn>0) {
      fact = 1
    }if(dimentionCount<4) {
      fact = 0.5
    }
    if(dimentionCount<4) {
      vertexDProjected[i]=[aa[i][0]*fact*f,aa[i][1]*fact*f,aa[i][2]*fact*f,fact]
    }else {
      vertexDProjected[i]=[]
      for(var j = 0; j<aa[i].length-2; j++) {
        vertexDProjected[i][j]=aa[i][j]*fact
      }
      var bobby = aa[i][aa[i].length-1]*fact
      vertexDProjected[i][vertexDProjected[i].length]=aa[i][aa[i].length-1]*fact
    }
    if(orthoOn>0) {
      vertexDProjected[i][3]=1
    }if(dimentionCount==3) {
      vertexDProjected[i][3] = 0.5
    }
  }
  return vertexDProjected
}
function renderVertex(arr) {
  var frct = zoom*height/tan(PI/6)/4
  noStroke()
  push()
  translate(arr[0]*frct,arr[1]*frct,arr[2]*frct)
  if(vRan>0) {
    fill(360*col2%360,100,100)
  }else {
    fill(verCol.value())
  }
  sphere(arr[3]*frct/10*s)
  var A_ = JL
  if(inp.value()==8&&dimentionCount==3) {
    A_=12
  }else if(inp.value()==14) {
    A_=120
  }
  col2+=(1/A_)%1
  pop()
}
function renderLine(a1,a2,Q) {
  fill(0,0,100)
  stroke(0,0,100)
  if(Q==2) {
    if(eRan>0) {
      stroke(360*col%360,100,100)
      fill(360*col%360,100,100)
    }else {
      stroke(edgeCol.value())
      fill(edgeCol.value())
    }
    col+=1/L2
  }
  var frct = zoom*height/tan(PI/6)/4
  noStroke()
  if(simpleM>0) {
    beginShape()
    var ft1 = 1/(a1[2]*frct-height/2*sqrt(3))
    var ft2 = 1/(a2[2]*frct-height/2*sqrt(3))
    var a = atan((a1[1]*ft1-a2[1]*ft2)/(a1[0]*ft1-a2[0]*ft2))+PI/2
    if(a!==a) {
      a=0
    }
    var ci = cos(a)
    var si = sin(a)
    var x = ci*frct/32*s2
    var y = si*frct/32*s2
    var f1 = a1[3]
    var f2 = a2[3]
    if(f1>1000) {
      f1=f2
    }else if(f2>1000) {
      f2=f1
    }
    var V1 = []
    V1[0]=(a1[0]*frct-x*f1)-(a1[0]*frct+x*f1)
    V1[1]=(a1[1]*frct-y*f1)-(a1[1]*frct+y*f1)
    var V2 = []
    V2[0]=a2[0]*frct-x*f2-(a1[0]*frct+x*f1)
    V2[1]=a2[1]*frct-y*f2-(a1[1]*frct+y*f1)
    V2[2]=a2[2]*frct-(a1[2]*frct)
    var Xx=V1[1]*V2[2]
    var Yy=V1[0]*V2[2]
    var Zz=V1[0]*V2[1]-V1[1]*V2[0]
    if(Yy<Zz) {
      normal(Xx,Yy,Zz)
    }else {
      normal(-Xx,-Yy,-Zz)
    }
    vertex(a1[0]*frct+x*f1,a1[1]*frct+y*f1,a1[2]*frct)
    vertex(a1[0]*frct-x*f1,a1[1]*frct-y*f1,a1[2]*frct)
    vertex(a2[0]*frct-x*f2,a2[1]*frct-y*f2,a2[2]*frct)
    vertex(a2[0]*frct+x*f2,a2[1]*frct+y*f2,a2[2]*frct)
    endShape(CLOSE)
  }else {
    //stroke(255)
    beginShape(TRIANGLE_STRIP)
    incr = 2*PI/ceil(500/L)
    if(incr>PI/4) {
      incr = PI/4
    }
    var radI = dist(a1[0],a1[1],a1[2],a2[0],a2[1],a2[2])
    var aRr = [(a2[0]-a1[0])/radI,(a2[1]-a1[1])/radI,(a2[2]-a1[2])/radI]
    var A =aRr[0]
    var C=aRr[2]
    var C2=sq(C)
    var A2=sq(A)
    var C4=sq(C2)
    var fctrt = frct/32
    var sz = sqrt(sq(aRr[0])+sq(aRr[1]))
    for(var i = 0; i<2*PI+0.0001; i+=incr) {
      var ci = cos(i)
      var si = sin(i)
      var nci = cos(i+incr)
      var nsi = sin(i+incr)
      var z = ci*sz
      var z2=sq(z)
      var rt = sqrt(A2*z2+C2*z2-z2+A2*C2+C4+1-A2-2*C2)
      if(A2*z2+C2*z2-z2+A2*C2+C4+1-A2-2*C2<0) {
        rt=0
      }
      if(i<PI) {
        var x = (-A*C*z+rt)/(-C2+1)
      }else {
        var x = (-A*C*z-rt)/(-C2+1)
      }
      if(sq(C)==1) {
        x=ci*C
      }
      var y = (-x*A-C*z)/aRr[1]
      if(A2+C2==1) {
        if(i<PI) {
          y=-sqrt(1-sq(x)-sq(z))
        }else {
          y=sqrt(1-sq(x)-sq(z))
        }
      }
      x*=fctrt*s2
      y*=fctrt*s2
      z*=fctrt*s2
      //Xx+Yy+Zz=0
      var nz = nci*sz
      var nz2=sq(nz)
      var nrt = sqrt(A2*nz2+C2*nz2-nz2+A2*C2+C4+1-A2-2*C2)
      if(A2*nz2+C2*nz2-nz2+A2*C2+C4+1-A2-2*C2<0) {
        nrt=0
      }
      if((i+incr)%(2*PI)<PI) {
        var nx = (-A*C*nz+nrt)/(-C2+1)
      }else {
        var nx = (-A*C*nz-nrt)/(-C2+1)
      }
      if(sq(C)==1) {
        nx=0
      }
      var ny = (-nx*A-C*nz)/aRr[1]
      if(aRr[1]==0) {
        if((i+incr)%(2*PI)<PI) {
          ny=-sqrt(1-sq(nx)-sq(nz))
        }else {
          ny=sqrt(1-sq(nx)-sq(nz))
        }
      }
      nx*=fctrt*s
      ny*=fctrt*s
      nz*=fctrt*s
      var f1 = a1[3]
      var f2 = a2[3]
      var V1 = []
      V1[0]=a2[0]*frct+x*f1-(a1[0]*frct+x*f2)
      V1[1]=a2[1]*frct+y*f1-(a1[1]*frct+y*f2)
      V1[2]=a2[2]*frct+z*f1-(a1[2]*frct+z*f2)
      var V2 = []
      V2[0]=(a1[0]*frct+nx*f2)-(a1[0]*frct+x*f2)
      V2[1]=(a1[1]*frct+ny*f2)-(a1[1]*frct+y*f2)
      V2[2]=(a1[2]*frct+nz*f2)-(a1[2]*frct+z*f2)
      var Xx=V1[1]*V2[2]-V1[2]*V2[1]
      var Yy=V1[0]*V2[2]-V1[2]*V2[0]
      var Zz=V1[0]*V2[1]-V1[1]*V2[0]
      if(nx==nx) {
        if(a2[1]>a1[1]) {
          normal(-Xx,-Yy,-Zz)
        }else {
          normal(Xx,Yy,Zz)
        }
      }
      if(x==x) {
        vertex(a2[0]*frct+x*f2,a2[1]*frct+y*f2,a2[2]*frct+z*f2)
        vertex(a1[0]*frct+x*f1,a1[1]*frct+y*f1,a1[2]*frct+z*f1)
      }
    }
    endShape(CLOSE)
  }
}
function mouseWheel(e) {
  zoom*=pow(1.1,-e.delta/100)
}
function areConnected(arr1,arr2,d) {
  var Dist = 0
  for(var i = 0; i<arr1.length; i++) {
    Dist+=sq(arr1[i]-arr2[i])
  }
  if(sq(Dist-d*d)<0.000001) {
    return 2
  }if(sq(Dist-intersectionD2*intersectionD2)<0.000001||sq(Dist-intersectionD3*intersectionD3)<0.000001) {
    return '1'
  }if(sq(Dist-intersectionD*intersectionD)<0.000001) {
    return 1
  }
  return false
}
function GetName(a_a,b_b) {
  if(a_a==undefined) {
    a_a='gon'
  }
  if(b_b==undefined) {
    b_b='gram'
  }
  if(A<5) {
    if(A==2) {
      if(gcm==1) {
        if(a_a=='gonal') {
          return 'dyadic'
        }
        return 'dyad'
      }else {
        if(a_a=='gonal') {
          return 'compound of '+gcm+' dyadic'
        }
        return 'compound of '+gcm+' dyads'
      }
    }if(A==3) {
      if(gcm==1) {
        if(a_a=='gonal') {
          return 'triangular'
        }
        return 'triangle'
      }else {
        return 'compound of '+gcm+' triangles'
      }
    }if(A==4) {
      if(gcm==1) {
        return 'square'
      }else {
        if(a_a=='gonal') {
          return 'compound of '+gcm+' square'
        }
        return 'compound of '+gcm+' squares'
      }
    }
  }else {
    var str = ''
    var a = ''
    if(A%100>10&&A%100<10) {
      switch(A%100) {
        case 11:
          a='hendeca'
        break
        case 12:
          a='dodeca'
        break
        case 13:
          a='trideca'
        break
        case 14:
          a='tetradeca'
        break
        case 15:
          a='pentadeca'
        break
        case 16:
          a='hexadeca'
        break
        case 17:
          a='heptadeca'
        break
        case 18:
          a='octadeca'
        break
        case 19:
          a='enneadeca'
        break
      }
    }else {
      switch(floor((A%1000)/100)) {
        case 1:
          str+='hecto'
        break
        case 2:
          str+='diacos'
        break
        case 3:
          str+='triacos'
        break
        case 4:
          str+='tetracos'
        break
        case 5:
          str+='pentacos'
        break
        case 6:
          str+='hexacos'
        break
        case 7:
          str+='heptacos'
        break
        case 8:
          str+='octacos'
        break
        case 9:
          str+='enneacos'
        break
      }
      if(A%100==0) {
        if(floor((A%1000)/100)==1) {}else {
          str+='a'
        }
      }else {
        if(floor((A%1000)/100)==1) {
          str+='n'
        }else if(A>=100) {
          str+='i'
        }
      }
      switch(floor((A%100)/10)) {
        case 1:
          str+='deca'
        break
        case 2:
        if(A%10==0) {
          str+='icosa'
        }else {
          str+='icosi'
        }
        break
        case 3:
          str+='triaconta'
        break
        case 4:
          str+='tetraconta'
        break
        case 5:
          str+='pentaconta'
        break
        case 6:
          str+='hexaconta'
        break
        case 7:
          str+='heptaconta'
        break
        case 8:
          str+='octaconta'
        break
        case 9:
          str+='enneaconta'
        break
      }
      switch(A%10) {
        case 1:
          str+='hena'
        break
        case 2:
          str+='di'
        break
        case 3:
          str+='tri'
        break
        case 4:
          str+='tetra'
        break
        case 5:
          str+='penta'
        break
        case 6:
          str+='hexa'
        break
        case 7:
          str+='hepta'
        break
        case 8:
          str+='octa'
        break
        case 9:
          str+='ennea'
        break
      }
    }
    str+=a
    var Bn = B
    if(B>A/2) {
      Bn=A-B
    }
    if(Bn==1) {
      str+=a_a
    }else {
      str=Bn+'-'+str+b_b
    }
    if(gcm>1) {
      str='compound of '+gcm+' '+str
      if(a_a!=='gonal') {
        str+='s'
      }
    }
  }
  return str
}

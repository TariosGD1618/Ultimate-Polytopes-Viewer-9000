//by TariosGD1618
intersectionD = NaN
dimentionCount=4
simpleM=-1
faces=-1
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
  lspeed.position(0,windowHeight/2+20)
  vspeed.position(0,windowHeight/2+40)
  fspeed.position(0,windowHeight/2+60)
  resizeCanvas(windowWidth, windowHeight)
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
  Ortho.position(width-140,40)
  opt.position(0,height/2-10)
}
function changeDimension() {
  inpy.hide()
  inpy2.hide()
  inp3.hide()
  inp4.hide()
  inp5.hide()
  inp.show()
  dimentionCount=inp2.value()*1
  if(dimentionCount==4) {
    inp.html('<option value="0">pen</option><option value="1">tes</option><option value="2">hex</option><option value="3">ico</option><option value="4">hi</option><option value="5">ex</option><option value="6">fix</option><option value="7">sishi</option><option value="8">gohi</option><option value="9">gahi</option><option value="10">gishi</option><option value="11">gashi</option><option value="12">gaghi</option><option value="13">gofix</option><option value="14">gax</option><option value="15">gogishi</option><option value="16">tho</option><option value="17">sidtixhi</option><option value="18">gidtixhi</option><option value="19">dittady</option>')
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
    }
    inp2.style('width','40px')
    inp.position(40,0)
  }else if(dimentionCount==3){
    inp.html('<option value="0">tet</option><option value="1">cube</option><option value="2">oct</option><option value="3">doe</option><option value="4">ike</option>  <option value="5">sissid</option><option value="6">gad</option><option value="7">gissid</option><option value="8">gike</option><option value="9">co</option><option value="10">id</option><option value="11">gid</option><option value="12">did</option><option value="13">thah</option><option value="14">oho</option><option value="15">seihid</option><option value="16">geihid</option><option value="17">sidhei</option><option value="18">cho<option value="19">sidhid</option><option value="20">gidhid</option><option value="21">gidhei</option><option value="22">ditdid</option><option value="23">sidtid</option><option value="24">gidtid</option><option value="25">rad</option><option value="26">rhote</option><option value="27">gort</option><option value="28">mort</option><option value="29">matai</option><option value="30">stai</option><option value="31">gatai</option><option value="32">tic</option><option value="33">tikko</option><option value="34">toe</option><option value="35">tekah</option><option value="36">sirco</option><option value="37">sladid</option><option value="38">girco</option><option value="39">siddykid</option><option value="40">tut</option><option value="41">tikit</option><option value="42">snic</option><option value="43">pedid</option><option value="44">tid</option><option value="45">tiki</option><option value="46">ti</option><option value="47">pakid</option><option value="48">srid</option><option value="49">sladit</option><option value="50">grid</option><option value="51">siddykit</option><option value="52">snid</option><option value="53">sapedit</option>  <option value="54">gocco</option><option value="55">gocco dual</option>')
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
    }
    inp2.style('width','40px')
    inp.position(40,0)
  }else if(inp2.value()==5) {
    dimentionCount=inp3.value()*1
    if(inp.html()=='<option value="0">simplex</option><option value="1">hypercube</option><option value="2">orthoplex</option><option value="3">demicross</option>') {}else {
      inp.html('<option value="0">simplex</option><option value="1">hypercube</option><option value="2">orthoplex</option><option value="3">demicross</option>')
    }
    inp3.show()
    inp2.style('width','50px')
    inp.position(50,0)
    inpy.show()
    inpy2.show()
  }else if(inp2.value()==2) {
    inp.hide()
    inp4.show()
    inp5.show()
  }if(inp2.value()==-1) {
    poltopeID=-1
    dimentionCount=4
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
  var dodecahedron = conv([[11,11,11,0],[10+phi_1,0,10+phi,0],[0,10+phi,10+phi_1,0],[10+phi,10+phi_1,0,0]])
  var icosohedron = conv([[0,11,10+phi,0],[11,10+phi,0,0],[10+phi,0,11,0]])
  zoom=1
  intersectionD=NaN
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
      vertexData = frag(ex,4)
      edgeLength=phi
      circumR=phi
      fct = 1.1
      zoom = 1/4
      L=1200
      s=0.25
      L2=L
        JL=vertexData.length
      break
      case 8:
      vertexData = frag(ex,4)
      edgeLength=1
      intersectionD=phi2
      circumR=phi
      fct = 1.1
      zoom = 1/4
      L=1440
      s=0.25
      L2=720
        JL=vertexData.length
      break
      case 9:
      vertexData = frag(ex,4)
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
      break
      case 10:
      vertexData = frag(ex,4)
      edgeLength=phi2
      intersectionD=phi
      circumR=phi
      fct = 1.1
      zoom = 1/4
      L=720
      s=0.25
      L2=L
        JL=vertexData.length
      break
      case 11:
      vertexData = frag(ex,4)
      edgeLength=phi2
      intersectionD=phi
      intersectionD2=phi
      circumR=phi
      fct = 1.1
      zoom = 1/4
      L=1920+720
      s=0.25
      L2=720
        JL=vertexData.length
      break
      case 12:
      vertexData = frag(ex,4)
      edgeLength=phi
      intersectionD=phi2
      circumR=phi
      fct = 1.1
      zoom = 1/4
      L=1920
      s=0.25
      L2=1200
        JL=vertexData.length
      break
      case 13:
      vertexData = frag(ex,4)
      edgeLength=phi2
      circumR=phi
      fct = 0.95
      zoom = 1/4
      L=720
      s=0.25
      L2=L
        JL=vertexData.length
      break
      case 14:
        vertexData = frag(gax,4)
        edgeLength=(sqrt(5)+3)*phi2*phi
        circumR=(sqrt(5)+3)*phi2
        fct = 1.1
        zoom = 1/4
        L=1440
        s=1
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
        intersectionD = 2.8284271247461903
        L=240
        s=1
        rotArr[1][0] = atan(phi_2)
        L2=30
        faceData=[[4,5,10],[6,7,9],[0,1,7],[2,3,4],[0,9,11],[3,8,10],[2,6,9],[1,5,10],[3,6,8],[0,5,11],[2,4,11],[1,7,8],[6,7,8],[4,5,11],[2,3,6],[0,1,5],[2,9,11],[1,8,10],[3,4,10],[0,7,9]]
        JL=12
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
      case 11:
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
      case 12:
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
      case 13:
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
      case 14:
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
      case 15:
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
      case 16:
        vertexData = doWeird(frag(gid,4),1,phi2*phi)
        circumR=phi_1
        edgeLength=1
        intersectionD=phi_1*2
        L=60+45
        s=1
        L2=60
        faceData=[[13,25,21],[7,8,21],[6,24,3],[17,15,26],[9,11,10],[7,6,11],[29,26,28],[28,18,27],[24,27,13],[1,20,12],[29,25,20],[4,5,14],[0,3,19],[18,19,16],[8,12,2],[2,10,4],[0,22,9],[23,16,15],[1,5,17],[22,23,14],[0,19,18,28,29,20,12,2,10,9],[29,26,15,23,22,9,11,7,21,25],[8,7,6,3,19,16,15,17,1,12],[3,0,22,14,5,1,20,25,13,24],[27,24,6,11,10,4,5,17,26,28],[8,2,4,14,23,16,18,27,13,21]]
        JL=30
        intData=[[30,71],[31,70],[32,73],[33,72],[34,84],[35,85],[36,57],[37,56],[38,55],[39,54],[40,68],[41,69],[42,66],[43,67],[44,45],[46,87],[47,86],[48,89],[49,88],[50,78],[51,79],[52,76],[53,77],[58,59],[60,61],[62,83],[63,82],[64,81],[65,80],[74,75]]
        intData.push([0,20],[1,3],[2,18],[4,27],[5,24],[6,17],[7,15],[8,16],[9,29],[10,28],[11,26],[12,19],[13,14],[21,23],[22,25])
      break
      case 17:
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
      case 18:
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
      case 19:
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
      case 20:
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
      case 21:
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
      case 22:
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
      case 23:
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
      case 24:
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
      case 25:
        vertexData = conv([[0,0,2*sqrt(3)/3+10,0],[2*sqrt(3)/3+10,0,0,0],[0,2*sqrt(3)/3+10,0,0],[10+sqrt(3)/3,10+sqrt(3)/3,10+sqrt(3)/3,0]])
        circumR=sqrt(3)/3
        edgeLength=1
        L=24
        s=1
        L2=L
        faceData=[[6,0,8,2],[6,2,7,4],[6,4,10,0],[9,1,7,2],[9,2,8,5],[9,5,13,1],[11,1,13,3],[11,3,10,4],[11,4,7,1],[12,0,10,3],[12,3,13,5],[12,5,8,0]]
        JL=vertexData.length
      break
      case 26:
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
      case 27:
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
      case 28:
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
      case 29:
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
      case 30:
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
        //edgeLength=dist(vertexData[8][0],vertexData[8][1],vertexData[8][2],vertexData[18][0],vertexData[18][1],vertexData[18][2])
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
        //intersectionD=dist(vertexData[72][0],vertexData[72][1],vertexData[72][2],vertexData[90][0],vertexData[90][1],vertexData[90][2])
        //intData=[[72,90]]
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
        intData=[[0,2],[0,3],[0,4],[0,5],[0,68],[0,71],[0,76],[0,79],[1,2],[1,3],[1,4],[1,5],[1,68],[1,71],[1,76],[2,4],[2,5],[2,72],[2,73],[2,74],[2,75],[3,4],[3,5],[3,72],[3,73],[3,74],[3,75],[4,69],[4,70],[4,77],[4,78],[5,10],[5,69],[5,70],[5,77],[5,78]] 
        intData.push([0,21],[0,23],[0,25],[0,31],[0,33],[0,39],[0,41],[0,43],[0,45],[0,47],[0,49],[0,55],[0,57],[0,63],[0,65],[0,67],[1,20],[1,22],[1,24],[1,30],[1,32],[1,38],[1,40],[1,42],[1,44],[1,46],[1,48],[1,54],[1,56],[1,62],[1,64],[1,66],[2,32],[2,33],[2,34],[2,35],[2,36],[2,37],[2,38],[2,39],[2,56],[2,57],[2,58],[2,59],[2,60],[2,61],[2,62],[2,63],[3,24],[3,25],[3,26],[3,27],[3,28],[3,29],[3,30],[3,31],[3,48],[3,49],[3,50],[3,51],[3,52],[3,53],[3,54],[3,55],[4,22],[4,23],[4,28],[4,29],[4,36],[4,37],[4,42],[4,43],[4,46],[4,47],[4,52],[4,53],[4,60],[4,61],[4,66],[4,67],[5,20],[5,21],[5,26],[5,27],[5,34],[5,35],[5,40],[5,41],[5,44],[5,45],[5,50],[5,51],[5,58],[5,59],[5,64],[5,65])
        JL=8+6+6
        s=1
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
    if(B>A/2) {
      B=A-B
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
  }
  if(polytopeID==3) {
    L+=dimentionCount
    intersectionD=2
  }
  mrSlider.value(fct)
  if(orthoOn>0) {
    zoom = 1
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
    switch(polytopeID) {
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
        inp.value(25)
      break
      case 25:
        inp.value(9)
      break
      case 26:
        inp.value(10)
      break
      case 10:
        inp.value(26)
      break
      case 27:
        inp.value(11)
      break
      case 11:
        inp.value(27)
      break
      case 28:
        inp.value(12)
      break
      case 12:
        inp.value(28)
      break
      case 29:
        inp.value(22)
      break
      case 22:
        inp.value(29)
      break
      case 30:
        inp.value(23)
      break
      case 23:
        inp.value(30)
      break
      case 31:
        inp.value(24)
      break
      case 24:
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
        inp.value(13)
      break
      case 13:
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
  changePolytope()
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
        inp4.value(3)
      break
      case 2:
      case 36:
      case 48:
      case 54:
        inp4.value(4)
      break
      case 4:
      case 5:
      case 42:
      case 52:
        inp4.value(5)
      break
      case 6:
      case 8:
        inp4.value(5)
        inp5.value(2)
      break
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
        inp4.value(4)
        inp5.value(1)
      break
      case 22:
      case 23:
      case 24:
        inp4.value(6)
        inp5.value(1)
      break
      case 25:
        if(random(7)<4) {
          inp4.value(3)
        }else {
          inp4.value(4)
        }
      break
      case 26:
      case 31:
        if(random(8)<5) {
          inp4.value(3)
        }else {
          inp4.value(5)
        }
      break
      case 27:
      case 30:
        if(random(8)<5) {
          inp4.value(3)
        }else {
          inp4.value(5)
          inp5.value(2)
        }
      break
      case 28:
      case 29:
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
    }
    changeDimension()
    switch(polytopeID) {
      case 9:
        rectan(1,sqrt(2))
      break
      case 10:
        rectan(1,phi)
      break
      case 11:
        rectan(1,phi_1)
      break
      case 12:
        rectan(phi,phi_1)
      break
      case 13:
        bwtie(1,sqrt(2))
      break
      case 14:
        bwtie(1,sqrt(3))
      break
      case 15:
        bwtie(1,sqrt((5+sqrt(5))/2))
      break
      case 16:
        bwtie(1,sqrt((5-sqrt(5))/2))
      break
      case 17:
        bwtie(phi_1,sqrt(3))
      break
      case 18:
        bwtie(sqrt(2),sqrt(3))
      break
      case 19:
        bwtie(phi,sqrt((5+sqrt(5))/2))
      break
      case 20:
        bwtie(phi_1,sqrt((5-sqrt(5))/2))
      break
      case 21:
        bwtie(phi,sqrt(3))
      break
      case 22:
        tripod(phi_1,phi)
      break
      case 23:
        ditrigon(1,phi_1)
      break
      case 24:
        tripod(1,phi)
      break
      case 32:
        icot(sqrt(2+sqrt(2)),1)
      break
      case 34:
        icot(sqrt(3),sqrt(2))
      break
      case 36:
        traz(1,sqrt(2),sqrt(2))
      break
      case 38:
        scaltri(sqrt(2),sqrt(3),sqrt(2+sqrt(2)))
      break
      case 40:
        icot(sqrt(3),1)
      break
      case 42:
        vertexData=[[0.9574383389376218,0.8141515451469358],[1.1740044067540072,-0.5427663430265025],[-0.0000000000000003835045973595256,-1.3142112317900922],[-1.1740044067540074,-0.5427663430265024],[-0.9574383389376219,0.8141515451469356]]
        edgesData=[[0,1],[1,2],[2,3],[3,4],[4,0]]
        div3.html('dual: irregular pentagon')
        div4.html('irregular pentagon (1 edge length sqrt(2) side, rest edge length 1)')
      break
      case 44:
        icot(sqrt((5+sqrt(5))/2),1)
      break
      case 46:
        icot(sqrt(3),phi)
      break
      case 48:
        traz(1,phi,sqrt(2))
      break
      case 50:
        scaltri(sqrt(2),sqrt(3),sqrt(2.5+sqrt(5)/2))
      break
      case 52:
        vertexData=[[-phi/2,0.6343238020544],[phi/2,0.6343238020544],[0.9768012684627,-0.3514999333917],[0,-0.5656477373253],[-0.9768012684627,-0.3514999333917]]
        edgesData=[[0,1],[1,2],[2,3],[3,4],[4,0]]
        div3.html('dual: irregular pentagon')
        div4.html('irregular pentagon (1 edge length phi side, rest edge length 1)')
      break
      case 54:
        traz(1,sqrt(2),sqrt(2-sqrt(2)))
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
        inp.value(23)
      break
      case 18:
        inp.value(24)
      break
      case 19:
        inp.value(22)
      break
      case 16:
        inp.value(13)
      break;
    }
    changePolytope()
  }
}
function scaltri(l1,l2,l3) {
  var c = (sq(l2)-sq(l1)-sq(l3))/(-2*l3)
  var b = l3-c
  var a = sqrt(sq(l1)-sq(c))
  var C = -(b-c)/2
  vertexData=[[C+b,a/3,0,0],[C-c,a/3,0,0],[C,-a/3*2,0,0]]
  edgesData=[[0,1],[1,2],[2,0]]
  faceData=[[0,1,2]]
  div3.html('dual to scalene triangle')
  div4.html('scalene triangle (lengths '+a+', '+b+', '+c+')')
}
function rectan(a,b) {
  vertexData=conv([[10+a/2,10+b/2,0,0]])
  edgesData=[[0,1],[1,3],[3,2],[2,0]]
  faceData=[[0,1,3,2]]
  div3.html('dual to rhombus')
  div4.html('rectangle (edge lengths: '+a+', '+b+')')
}
function traz(b1,b2,l) {
  var a = sqrt(4*sq(l)-sq(b1-b2))/2
  vertexData=conv([[10+b1/2,-a/2,0,0],[10+b2/2,a/2,0,0]])
  edgesData=[[0,1],[1,3],[3,2],[2,0]]
  faceData=[[0,1,3,2]]
  if(b1>0) {
    div3.html('dual to kite')
    div4.html('icosoles trapezoid (base lengths: '+b1+', '+b2+'; leg length '+l+')')
  }else {
    div3.html('dual to dart')
    div4.html('crossed icosoles trapezoid (base lengths: '+-b1+', '+b2+'; leg length '+l+')')
  }
}
function kite(a,b,c) {
  var C = (b-c)/2
  vertexData=conv([[10+a/2,-C,0,0],[0,b-C,0,0],[0,-C-c,0,0]])
  edgesData=[[0,2],[2,1],[1,3],[3,0]]
  faceData=[[0,2,1,3]]
  div3.html('dual to icosoles trapezoid')
  div4.html('kite (width '+a+', top height '+b+'; bottom height '+c+')')
}
function icot(a,b) {
  vertexData=conv([[10+a/2,sqrt(sq(a)-sq(b)/4)/3,0,0],[0,sqrt(sq(a)-sq(b)/4)*-2/3]])
  edgesData=[[0,1],[1,2],[2,0]]
  faceData=[[2,1,0]]
  div3.html('dual to isosceles triangle')
  div4.html('isosceles triangle (base length '+b+', leg length '+a+')')
}
function dia(a,b) {
  vertexData=conv([[10+a/2,10+b/2,0,0]])
  edgesData=[[0,1],[1,3],[3,2],[2,0]]
  var __ = []
  for(var i = 0; i<edgesData.length; i++) {
    var B = edgesData[i]
    var aa = 1/2*b/a
    __[i]=[vertexData[B[0]][0]*aa+vertexData[B[1]][0]*aa,vertexData[B[0]][1]*aa+vertexData[B[1]][1]*aa,0,0]
  }
  vertexData=__
  edgesData=[[0,1],[1,2],[2,3],[3,0]]
  faceData=[[0,1,2,3]]
  div3.html('dual to rectangle')
  div4.html('rhombus (dual edge lengths: '+a+', '+b+')')
}
function bwtie(a,b) {
  vertexData=conv([[10+a/2,10+sqrt(sq(b)-sq(a))/2,0,0]])
  edgesData=[[0,3],[3,1],[1,2],[2,0]]
  faceData=[[0,3,1,2]]
  div3.html('dual to infinite quadralateral')
  div4.html('bowtie (edge lengths: '+a+', '+b+')')
}
function ditrigon(a,b) {
  vertexData=conv([[10+b/2,(2*a+b)/(sqrt(12)),0,0],[(a+b)/2+10,(b-a)/(sqrt(12)),0,0],[a/2+10,(-a-2*b)/(sqrt(12)),0,0]])
  edgesData=[[0,1],[1,3],[3,5],[5,4],[4,2],[2,0]]
  faceData=[[0,1,3,5,4,2]]
  div3.html('dual to triambus')
  div4.html('ditrigon (edge lengths: '+a+', '+b+')')
}
function triambus(a,b) {
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
function nct(a,b) {
  b-=a
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
  var val = inp2.value()
  inp2.value(2)
  inp4.value(random(faceData).length)
  if(val==3) {
    inp5.value(1)
    switch(polytopeID) {
      case 5:
      case 7:
        inp5.value(2)
      break
      case 11:
      case 23:
        if(random(8)<3) {
          inp4.value(5)
          inp5.value(2)
        }else {
          inp4.value(3)
        }
      break
      case 12:
      case 22:
        if(random(2)<1) {
          inp5.value(2)
        }
      break
      case 16:
        if(random(13)<10) {
          inp4.value(3)
        }else {
          inp4.value(10)
          inp5.value(3)
        }
      break
      case 17:
        if(random(11)<5) {
          inp4.value(6)
        }else {
          inp4.value(5)
          inp5.value(2)
        }
      break
      case 20:
        inp5.value(2)
        if(random(3)<2) {
          inp4.value(5)
        }else {
          inp5.value(3)
          inp4.value(10)
        }
      break
      case 54:
        if(random(20)<6) {
          inp4.value(4)
        }else if(random(14)<8) {
          inp4.value(3)
        }else {
          inp4.value(8)
          inp5.value(3)
        }
      break
    }
    changeDimension()
    switch(polytopeID) {
      case 25:
        dia(1,sqrt(2))
      break
      case 26:
        dia(1,phi)
      break
      case 27:
        dia(1,phi_1)
      break
      case 28:
        dia(phi,phi_1)
      break
      case 29:
        nct(phi_1,phi)
      break
      case 30:
        triambus(1,phi_1)
      break
      case 31:
        nct(1,phi)
      break
      case 33:
        icot(1,sqrt(2+sqrt(2)))
      break
      case 35:
        icot(sqrt(2),sqrt(3))
      break
      case 37:
        kite(sqrt(2),0.819495500447568,0.448196971788703)
      break
      case 39:
        scaltri(1,3*(2+3*sqrt(2))/14,(10+sqrt(2))/7)
      break
      case 41:
        icot(1,5/3)
      break
      case 43:
        vertexData=[[0,-1.2282725568242,0,0],[0.9196433066674,-0.1467764088413,0,0],[0.5,0.7609126872534,0,0],[-0.5,0.7609126872534,0,0],[-0.9196433066674,-0.1467764088413,0,0]]
        edgesData=[[0,1],[1,2],[2,3],[3,4],[4,0]]
        div3.html('dual: irregular pentagon')
        div4.html('irregular pentagon (2 edge length 1.41964 sides, rest edge length 1)')
      break
      case 45:
        icot(1,(15+sqrt(5))/10)
      break
      case 47:
        icot(1,(9-sqrt(5))/6)
      break
      case 49:
        kite(phi_2+1,0.412982543064056,1.028620569605364)
      break
      case 51:
        scaltri(1,3*(3+sqrt(5))/10,(7+sqrt(5))/5)
      break
      case 53:
        vertexData=[[-0.5,0.8201634813082],[0.5,0.8201634813082],[0.9715755871647,-0.0616621622236],[0,-1.5170026381692,0,0],[-0.9715755871647,-0.0616621622236]]
        edgesData=[[0,1],[1,2],[2,3],[3,4],[4,0]]
        div3.html('dual: irregular pentagon')
        div4.html('irregular pentagon (2 edge length 1.74985 sides, rest edge length 1)')
      break
      case 55:
        var hgth = 2/7*sqrt(31+8*sqrt(2))
        var v1 = 1.4736257582079
        kite(2*(sqrt(2)-1),hgth-v1,v1)
      break
    }
  }else {
    changeDimension()
    inp5.value(1)
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
  lspeed=createSlider(-5,log(60)/log(10),0,0)
  lspeed.position(0,windowHeight/2+20)
  vspeed=createSlider(-5,log(60)/log(10),0,0)
  vspeed.position(0,windowHeight/2+40)
  fspeed=createSlider(-5,log(60)/log(10),-log(2)/log(10),0)
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
  inp2.selected(4)
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
  console.log(centerv.style('width'),centerc.style('width'))
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
  Ortho = createCheckbox('ortographic mode', true)
  Ortho.position(width-140,40)
  Ortho.style('color','#ffffff')
  Ortho.checked(false)
  Ortho.changed(toggOrtho)
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
        div5.html('names: octahedron, square bipyramid, triangular antiprism, 3-orthaplex')
        div6.html('vertex figure: square {4}')
        div8.html('')
      break
      case 3:
        div.html('12 pentagon {5} faces')
        div3.html('Schläfli symbol {5,3}')
        div4.html('Dual to ike {3,5}')
        div5.html('dodecahedron')
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
        div5.html('small stellated dodecahedron')
        div6.html('vertex figure: pentagon {5}')
        div8.html('')
      break
      case 6:
        div.html('12 pentagon {5} faces')
        div3.html('Schläfli symbol {5,5/2}')
        div4.html('Dual to sissid {5/2,5}')
        div5.html('great dodecahedron')
        div6.html('vertex figure: pentagram {5/2}')
        div8.html('')
      break
      case 7:
        div.html('12 pentagram {5/2} faces')
        div3.html('Schläfli symbol {5/2,3}')
        div4.html('Dual to gike {3,5/2}')
        div5.html('great stellated dodecahedron')
        div6.html('vertex figure: trangle {3}')
        div8.html('')
      break
      case 8:
        div.html('20 triangle {3} faces')
        div3.html('Schläfli symbol {3,5/2}')
        div4.html('Dual to gissid {5/2,3}')
        div5.html('great icosahedron')
        div6.html('vertex figure: pentagram {5/2}')
        div8.html('')
      break
      case 9:
        div.html('8 triangle {3}, 6 square {4} faces')
        div3.html('Schläfli symbol r{3,4}/r{4,3}')
        div4.html('Dual to rad')
        div5.html('cuboctahedron')
        div6.html('vertex figure: rectangle (side lengths 1, sqrt(2)')
        div8.html('')
      break
      case 10:
        div.html('20 triangle {3}, 12 pentagon {5} faces')
        div3.html('Schläfli symbol r{5,3}/r{3,5}')
        div4.html('Dual to rhote')
        div5.html('icosidodecahedron')
        div6.html('vertex figure: rectangle (side lengths 1, phi')
        div8.html('')
      break
      case 11:
        div.html('20 triangle {3}, 12 pentagram {5/2} faces')
        div3.html('Schläfli symbol r{5/2,3}/r{3,5/2}')
        div4.html('Dual to gort')
        div5.html('great icosidodecahedron')
        div6.html('vertex figure: rectangle (side lengths 1, 1/phi')
        div8.html('')
      break
      case 12:
        div.html('12 pentagon {5}, 12 pentagram {5/2} faces')
        div3.html('Schläfli symbol r{5/2,5}/r{5,5/2}')
        div4.html('Dual to mort')
        div5.html('dodecadodecahedron')
        div6.html('vertex figure: rectangle (side lengths 0.5+sqrt(1.25), sqrt(1.25)-0.5')
        div8.html('')
      break
      case 13:
        div.html('4 triangle {3}, 3 square {4} faces')
        div3.html('Coxeter diagram: (x3/2o3x)/2')
        div4.html('Dual to tetrahemihexacron')
        div5.html('names: tetrahemihexahedron, tetrahemicube, 3-demicube')
        div6.html('vertex figure: bowtie (side lengths 1, sqrt(2))')
        div8.html('')
      break
      case 14:
        div.html('8 triangle {3}, 4 hexagon {6} faces')
        div3.html('Coxeter diagram: x3/2o3x3*a')
        div4.html('Dual to tetrahemihexacron')
        div5.html('octahemioctacron')
        div6.html('vertex figure: bowtie (side lengths 1, sqrt(3))')
        div8.html('')
      break
      case 15:
        div.html('20 triangle {3}, 6 decagon {10} faces')
        div3.html('Coxeter diagram: (x3/2o3x5*a)/2')
        div4.html('Dual to small icosihemidodecacron')
        div5.html('small icosihemidodecahedron')
        div6.html('vertex figure: bowtie (side lengths 1, sqrt((5+sqrt(5))/2))')
        div8.html('')
      break
      case 16:
        div.html('20 triangle {3}, 6 decagram {10/3} faces')
        div3.html('Coxeter diagram: (o3/2x5/3x3*a)/2')
        div4.html('Dual to great icosihemidodecacron')
        div5.html('great icosihemidodecahedron')
        div6.html('vertex figure: bowtie (side lengths 1, sqrt((5-sqrt(5))/2))')
        div8.html('')
      break
      case 17:
        div.html('12 pentagram {5/2}, 10 hexagon {6} faces')
        div3.html('Coxeter diagram: (x5/3o5/2x3*a)/2')
        div4.html('Dual to small dodecahemicosacron')
        div5.html('small dodecahemicosahedron')
        div6.html('vertex figure: bowtie (side lengths 1/phi, sqrt(3))')
        div8.html('')
      break
      case 18:
        div.html('6 square {4}, 4 hexagon {6} faces')
        div3.html('Coxeter diagram: (o4/3x3x4*a)/2')
        div4.html('Dual to hexahemioctacron')
        div5.html('cubohemioctahedron')
        div6.html('vertex figure: bowtie (side lengths sqrt(2), sqrt(3))')
        div8.html('')
      break
      case 19:
        div.html('12 pentagon {5}, 6 decagon {10} faces')
        div3.html('Coxeter diagram: (x5/4o5x5*a)/2')
        div4.html('Dual to great dodecahemidodecahedron')
        div5.html('small dodecahemidodecahedron')
        div6.html('vertex figure: bowtie (side lengths phi, sqrt((5+sqrt(5))/2))')
        div8.html('')
      break
      case 20:
        div.html('12 pentagram {5/2}, 6 decagram {10/3} faces')
        div3.html('Coxeter diagram: (x5/3x5/3o5/2*a)/2')
        div4.html('Dual to great dodecahemidodecacron')
        div5.html('great dodecahemidodecahedron')
        div6.html('vertex figure: bowtie (side lengths 1/phi, sqrt((5-sqrt(5))/2))')
        div8.html('')
      break
      case 21:
        div.html('12 pentagon {5}, 10 hexagon {6} faces')
        div3.html('Coxeter diagram: (o5/4x3x5*a)/2')
        div4.html('Dual to great dodecahemicosacron')
        div5.html('great dodecahemicosahedron')
        div6.html('vertex figure: bowtie (side lengths phi, sqrt(3))')
        div8.html('')
      break
      case 22:
        div.html('12 pentagon {5}, 12 pentagram {5/2} faces')
        div3.html('Coxeter diagram: (o5/4x3x5*a)/2')
        div4.html('Dual to matai')
        div5.html('ditrigonary dodecadodecahedron')
        div6.html('vertex figure: tripod (side lengths phi, 1/phi)')
        div8.html('')
      break
      case 23:
        div.html('20 triangle {3}, 12 pentagram {5/2} faces')
        div3.html('Coxeter diagram: x5/2o3o3*a')
        div4.html('Dual to stai')
        div5.html('small ditrigonary icosidodecahedron')
        div6.html('vertex figure: ditrigon (side lengths 1, 1/phi)')
        div8.html('')
      break
      case 24:
        div.html('20 triangle {3}, 12 pentagon {5/2} faces')
        div3.html('Coxeter diagram: x5/2o3o3*a')
        div4.html('Dual to gatai')
        div5.html('great ditrigonary icosidodecahedron')
        div6.html('vertex figure: tripod (side lengths 1, phi)')
        div8.html('')
      break
      case 25:
        div.html('12 rhombus faces')
        div3.html('Coxeter diagram: o4m3o')
        div4.html('Dual to co')
        div5.html('rhombic dodecahedron')
        div6.html('vertex figure: 6 squares, 8 triangles')
        div8.html('')
      break
      case 26:
        div.html('30 rhombus faces')
        div3.html('Coxeter diagram: o5m3o')
        div4.html('Dual to id')
        div5.html('rhombic triacontahedron')
        div6.html('vertex figure: 12 pentagons, 20 triangles')
        div8.html('')
      break
      case 27:
        div.html('30 rhombus faces')
        div3.html('Coxeter diagram: o5/2m3o')
        div4.html('Dual to gid')
        div5.html('great rhombic triacontahedron')
        div6.html('vertex figure: 12 pentagrams, 20 triangles')
        div8.html('')
      break
      case 28:
        div.html('30 rhombus faces')
        div3.html('Coxeter diagram: o5/2m5o')
        div4.html('Dual to did')
        div5.html('medial rhombic triacontahedron')
        div6.html('vertex figure: 12 pentagrams, 12 pentagons')
        div8.html('')
      break
      case 29:
        div.html('20 triambus faces')
        div3.html('Coxeter diagram: m5/3o3o5*a')
        div4.html('Dual to ditdid')
        div5.html('medial triambic icosahedron')
        div6.html('vertex figure: 12 pentagrams, 12 pentagons')
        div8.html('')
      break
      case 30:
        div.html('20 triambus faces')
        div3.html('Coxeter diagram: m5/2o3o3*a')
        div4.html('Dual to sitdid')
        div5.html('small triambic icosahedron')
        div6.html('vertex figure: 12 pentagrams, 20 triangles')
        div8.html('')
      break
      case 31:
        div.html('20 triambus faces')
        div3.html('Coxeter diagram: m3/2o3o5*a')
        div4.html('Dual to gitdid')
        div5.html('great triambic icosahedron')
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
        div5.html('truncated octahedron')
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
        div5.html('truncated tetrahedron')
        div6.html('vertex figure: icosoles triangle (base length 1, leg length sqrt(3))')
        div8.html('')
      break
      case 41:
        div.html('48 icosoles triangle (base length 5/3, leg length 1) faces')
        div3.html('Coxeter diagram: m3m3o')
        div4.html('Dual to tut')
        div5.html('triakis tetrahedron')
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
        div5.html('truncated dodecahedron')
        div6.html('vertex figure: isosceles triangle (base length 1, leg length 1.902113032590307)')
        div8.html('')
      break
      case 45:
        div.html('60 isosceles triangle (base length 1.723606797749979, leg length 1)')
        div3.html('Coxeter diagram: m5m3o')
        div4.html('Dual to tid')
        div5.html('triakis icosahedron')
        div6.html('vertex figure: 20 triangles, 12 decagon')
        div8.html('')
      break
      case 46:
        div.html('20 hexagon, 12 pentagon faces')
        div3.html('Coxeter diagram: o5x3x')
        div4.html('Dual to pakid')
        div5.html('truncated icosahedron')
        div6.html('vertex figure: isosceles triangle (base length phi, leg length sqrt(3))')
        div8.html('')
      break
      case 47:
        div.html('60 isosceles triangle isosceles triangle (base length 1.127322003750035, leg length 1)')
        div3.html('Coxeter diagram: o5m3m')
        div4.html('Dual to ti')
        div5.html('pentakis dodecahedron')
        div6.html('vertex figure: 20 hexagons, 12 pentagons')
        div8.html('')
      break
      case 45:
        div.html('60 isosceles triangle (base length 1.723606797749979, leg length 1)')
        div3.html('Coxeter diagram: m5m3o')
        div4.html('Dual to tid')
        div5.html('triakis icosahedron')
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
        div5.html('great cubicuboctahedron')
        div6.html('vertex figure: icosoles trapezoid (base lengths: 1, sqrt(2); leg length 0.7653668647301795)')
        div8.html('')
      break
      case 55:
        div.html('24 kite (width 2*sqrt(2-1), top height 0.3849167582902855; bottom height 1.4736257582079) faces')
        div3.html('Coxeter diagram: m4/3m3o4*a')
        div4.html('Dual to gocco')
        div5.html('great hexacronic icositetrahedron')
        div6.html('vertex figure: 8 triangles, 6 squares, 8 octagrams')
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
    if(A<5) {
      if(A==2) {
        if(gcm==1) {
          div4.html('Dyad')
        }else {
          div4.html('compound of '+gcm+' Dyads')
        }
      }if(A==3) {
        if(gcm==1) {
          div4.html('Triangle')
        }else {
          div4.html('compound of '+gcm+' Triangles')
        }
      }if(A==4) {
        if(gcm==1) {
          div4.html('Square')
        }else {
          div4.html('compound of '+gcm+' Squares')
        }
      }
    }else {
      var str = ''
      var a = ''
      if(A%100==12||A%100==11||A%100==19) {
        switch(A%100) {
          case 11:
            a='hendeca'
          break
          case 12:
            a='dodeca'
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
            str+='eneacos'
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
            str+='nona'
          break
        }
      }
      str+=a
      if(B==1) {
        str+='gon'
      }else {
        str+='gram'
      }
      if(gcm>1) {
        str='compound of '+gcm+' '+str
        str+='s'
      }
      div4.html(str)
    }
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
  Y/=1.05
  X/=1.05
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
  col=1-((millis()/1e3*(10**lspeed.value()))%1)
  col2=(millis()/1e3*(10**vspeed.value()))%1
  col3=(millis()/1e3*(10**fspeed.value()))%1
  ldiv.html(10**lspeed.value()+' cycles of edge color/second')
  fdiv.html(10**fspeed.value()+' cycles of face color/second')
  vdiv.html(10**vspeed.value()+' cycles of vertex color/second')
  if(keyIsPressed) {
    if((key=='Q'||key=='%')&&dimentionCount>2) {
      rotArr[0][0]+=1/frameRate()*PI
    }if((key=='E'||key=='^')&&dimentionCount>2) {
      rotArr[0][0]-=1/frameRate()*PI
    }if((key=='W'||key=='@')&&dimentionCount>2) {
      rotArr[1][1]-=1/frameRate()*PI
    }if((key=='S'||key=='!')&&dimentionCount>2) {
      rotArr[1][1]+=1/frameRate()*PI
    }if((key=='A'||key=='$')&&dimentionCount>2) {
      rotArr[1][0]-=1/frameRate()*PI
    }if((key=='D'||key=='#')&&dimentionCount>2) {
      rotArr[1][0]+=1/frameRate()*PI
    }if((keyIsDown(87)||key=='!')&&dimentionCount>3) {
      rotArr[2][0]-=1/frameRate()*PI
    }if((keyIsDown(83)||key=='@')&&dimentionCount>3) {
      rotArr[2][0]+=1/frameRate()*PI
    }if((keyIsDown(65)||key=='#')&&dimentionCount>3) {
      rotArr[2][1]-=1/frameRate()*PI
    }if((keyIsDown(68)||key=='$')&&dimentionCount>3) {
      rotArr[2][1]+=1/frameRate()*PI
    }if((keyIsDown(69)||key=='%')&&dimentionCount>3) {
      rotArr[2][2]-=1/frameRate()*PI
    }if((keyIsDown(81)||key=='^')&&dimentionCount>3) {
      rotArr[2][2]+=1/frameRate()*PI
    }if(keyIsDown(187)) {
      rotArr[0][0]+=1/frameRate()*PI
    }if(keyIsDown(189)) {
      rotArr[0][0]-=1/frameRate()*PI
    }if(keyIsDown(38)) {
      zoom*=1.1
    }if(keyIsDown(40)) {
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
  for(var i = 0; i<intData.length; i++) {
    renderLine(vertexDataProjected[intData[i][0]],vertexDataProjected[intData[i][1]],1)
  }
  }
  if(verticies>0) {
    for(var j = 0; j<JL; j++) {
      renderVertex(vertexDataProjected[j])
    }
  }
  if(faces>0) {
    var frct = zoom*height/tan(PI/6)/4
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
        beginShape(TESS)
        noStroke()
        if(Yy<Zz) {
          normal(Xx,Yy,Zz)
        }else {
          normal(-Xx,-Yy,-Zz)
        }
      }
      var AAAAA = 0
      var bobby=0
      for(var j = 0; j<faceData[i].length; j++) {
        var J = faceData[i][j]
        if(J!==undefined) {
          vertex(vertexDataProjected[J][0]*frct,vertexDataProjected[J][1]*frct,vertexDataProjected[J][2]*frct)
        }else {
          var __ = faceData[i][AAAAA]
          vertex(vertexDataProjected[__][0]*frct,vertexDataProjected[__][1]*frct,vertexDataProjected[__][2]*frct)
          AAAAA=j+1
          bobby++
        }
      }
      for(var I = bobby; I>0; I--) {
        var I2=faceData[0][faceData[0].length-1]
        vertex(vertexDataProjected[I][0]*frct,vertexDataProjected[I][1]*frct,vertexDataProjected[I][2]*frct)
      }
      col3+=1/faceData.length
      endShape()
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
    var x = ci/sqrt(sqrt(L))*frct/16
    var y = si/sqrt(sqrt(L))*frct/16
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
    var fctrt = frct/16/sqrt(sqrt(L))
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
      x*=fctrt
      y*=fctrt
      z*=fctrt
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
      nx*=fctrt
      ny*=fctrt
      nz*=fctrt
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
function conv(arr) {
  var arr1 = []
  for(var i = 0; i<arr.length; i++) {
    if(arr[i][3]==undefined) {
      arr[i][3]=0
    }
    if(arr[i][0]<5) {
      arr1[arr1.length]=arr[i]
    }else {
      arr1[arr1.length]=[arr[i][0]-10,arr[i][1],arr[i][2],arr[i][3]]
      arr1[arr1.length]=[10-arr[i][0],arr[i][1],arr[i][2],arr[i][3]]
    }
  }
  arr = arr1
  arr1 = []
  for(var i = 0; i<arr.length; i++) {
    if(arr[i][1]<5) {
      arr1[arr1.length]=arr[i]
    }else {
      arr1[arr1.length]=[arr[i][0],arr[i][1]-10,arr[i][2],arr[i][3]]
      arr1[arr1.length]=[arr[i][0],10-arr[i][1],arr[i][2],arr[i][3]]
    }
  }
  arr = arr1
  arr1 = []
  for(var i = 0; i<arr.length; i++) {
    if(arr[i][2]<5) {
      arr1[arr1.length]=arr[i]
    }else {
      arr1[arr1.length]=[arr[i][0],arr[i][1],arr[i][2]-10,arr[i][3]]
      arr1[arr1.length]=[arr[i][0],arr[i][1],10-arr[i][2],arr[i][3]]
    }
  }
  arr = arr1
  arr1 = []
  for(var i = 0; i<arr.length; i++) {
    if(arr[i][3]<5) {
      arr1[arr1.length]=arr[i]
    }else {
      arr1[arr1.length]=[arr[i][0],arr[i][1],arr[i][2],arr[i][3]-10]
      arr1[arr1.length]=[arr[i][0],arr[i][1],arr[i][2],10-arr[i][3]]
    }
  }
  return arr1
}

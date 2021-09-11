//by TariosGD1618
sq = function(x) {return x*x}
polytopeID = 0
sqrt=Math.sqrt
phi = 0.5+sqrt(1.25)
phi_1=phi-1
phi_2=phi_1/phi
phi2 = phi+1
PI=Math.PI
intersectionD = NaN
var file=[[sqrt(2/3)*sqrt(15/16),-sqrt(2/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[-sqrt(2/3)*sqrt(15/16),-sqrt(2/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[0,sqrt(8/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[0,0,1*sqrt(15/16),1/4],[0,0,0,-1]]
var edgesFile=[[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
var xy = 0
var yz = 0
var xz = 0
var wx = 0
var wy = 0
var wz = 0
var col = 0
var col2 = 0
var vertexData = [[sqrt(2/3)*sqrt(15/16),-sqrt(2/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[-sqrt(2/3)*sqrt(15/16),-sqrt(2/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[0,sqrt(8/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[0,0,1*sqrt(15/16),1/4],[0,0,0,-1]]
var zoom = 1
edgeLength = 2/sqrt(1.6)
f = 1
fct = 2
L = 10
wx = PI
var s = 1
var L2=L
var edges = 1
var verticies = 1
function doWeird(A,b) {
  var A2 = []
  for(var X = 0; X<A.length; X++) {
    for(var Y = 0; Y<A.length; Y++) {
      var dist = sq(A[X][0]-A[Y][0])+sq(A[X][1]-A[Y][1])+sq(A[X][2]-A[Y][2])+sq(A[X][3]-A[Y][3])
      if(sq(dist-b*b)<0.001&&X>Y) {
        A2.push([(A[X][0]+A[Y][0])/2+(A[X][1]+A[Y][1])/2+(A[X][2]+A[Y][2])/2+(A[X][3]+A[Y][3])/2])
      }
    }
  }
  A2=A2.concat(A)
  return A2
}
function windowResized() {//do stuff when window resized
  resizeCanvas(windowWidth, windowHeight)
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
}
function changeDimension() {
  if(inp2.value()==4) {
    inp.html('<option value="0">pentachoron</option><option value="1">tesseract</option><option value="2">hexadecachoron</option><option value="3">icositetrachoron</option><option value="4">dodecaplex</option><option value="5">tetraplex</option>     <option value="6">icosahedral 120-cell</option><option value="7">small stellated 120-cell</option><option value="8">great 120-cell</option><option value="9">grand 120-cell</option><option value="10">great stellated 120-cell</option><option value="11">grand stellated 120-cell</option><option value="12">great grand 120-cell</option><option value="13">great icosahedral 120-cell</option><option value="14">grand 600-cell</option><option value="15">great grand stellated 120-cell</option><option value="-1">load from file</option>')
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
  }else {
    inp.html('<option value="0">tetrahedron</option><option value="1">cube</option><option value="2">octahedron</option><option value="3">dodecahedron</option><option value="4">icosohedron</option>  <option value="5">small stellated dodecahedron</option><option value="6">great dodecahedron</option><option value="7">great stellated dodecahedron</option><option value="8">great icosahedron</option><option value="-1">load from file</option>')
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
    }
  }
  fct = 2
  changePolytope()
}
function resetCamera() {
  var dodecahedron = conv([[11,11,11,0],[0,10+phi,10+phi_1,0],[10+phi_1,0,10+phi,0],[10+phi,10+phi_1,0,0]])
  var icosohedron = conv([[0,11,10+phi,0],[11,10+phi,0,0],[10+phi,0,11,0]])
  var dodecaplex = [[12,12,0,0],[0,12,12,0],[0,0,12,12],[0,12,0,12],[12,0,12,0],[12,0,0,12],[10+sqrt(5),11,11,11],[11,10+sqrt(5),11,11],[11,11,10+sqrt(5),11],[11,11,11,10+sqrt(5)],[10+phi_2,10+phi,10+phi,10+phi],[10+phi,10+phi_2,10+phi,10+phi],[10+phi,10+phi,10+phi_2,10+phi],[10+phi,10+phi,10+phi,10+phi_2],  [10+phi2,10+phi_1,10+phi_1,10+phi_1],[10+phi_1,10+phi2,10+phi_1,10+phi_1],[10+phi_1,10+phi_1,10+phi2,10+phi_1],[10+phi_1,10+phi_1,10+phi_1,10+phi2]]
  var at = [0,10+phi_2,11,10+phi2]
  dodecaplex.push([at[0],at[1],at[2],at[3]],[at[2],at[0],at[1],at[3]],[at[1],at[2],at[0],at[3]],[at[1],at[0],at[3],at[2]],[at[0],at[3],at[1],at[2]],[at[0],at[2],at[3],at[1]],[at[3],at[0],at[2],at[1]],[at[2],at[3],at[0],at[1]],[at[2],at[1],at[3],at[0]],[at[1],at[3],at[2],at[0]],[at[3],at[2],at[1],at[0]],[at[3],at[1],at[0],at[2]])
  var ta = [0,10+phi_1,10+phi,10+sqrt(5)]
  dodecaplex.push([ta[0],ta[1],ta[2],ta[3]],[ta[2],ta[0],ta[1],ta[3]],[ta[1],ta[2],ta[0],ta[3]],[ta[1],ta[0],ta[3],ta[2]],[ta[0],ta[3],ta[1],ta[2]],[ta[0],ta[2],ta[3],ta[1]],[ta[3],ta[0],ta[2],ta[1]],[ta[2],ta[3],ta[0],ta[1]],[ta[2],ta[1],ta[3],ta[0]],[ta[1],ta[3],ta[2],ta[0]],[ta[3],ta[2],ta[1],ta[0]],[ta[3],ta[1],ta[0],ta[2]])
  var Ta = [10+phi_1,11,10+phi,12]
  dodecaplex.push([Ta[0],Ta[1],Ta[2],Ta[3]],[Ta[2],Ta[0],Ta[1],Ta[3]],[Ta[1],Ta[2],Ta[0],Ta[3]],[Ta[1],Ta[0],Ta[3],Ta[2]],[Ta[0],Ta[3],Ta[1],Ta[2]],[Ta[0],Ta[2],Ta[3],Ta[1]],[Ta[3],Ta[0],Ta[2],Ta[1]],[Ta[2],Ta[3],Ta[0],Ta[1]],[Ta[2],Ta[1],Ta[3],Ta[0]],[Ta[1],Ta[3],Ta[2],Ta[0]],[Ta[3],Ta[2],Ta[1],Ta[0]],[Ta[3],Ta[1],Ta[0],Ta[2]])
  dodecaplex=conv(dodecaplex)
  var tetraplex = [[11,0,0,0],[0,11,0,0],[0,0,11,0],[0,0,0,11],[10.5,10.5,10.5,10.5]]
  var At = [10+phi/2,10.5,10+phi_1/2,0]
  tetraplex.push([At[0],At[1],At[2],At[3]],[At[2],At[0],At[1],At[3]],[At[1],At[2],At[0],At[3]],[At[1],At[0],At[3],At[2]],[At[0],At[3],At[1],At[2]],[At[0],At[2],At[3],At[1]],[At[3],At[0],At[2],At[1]],[At[2],At[3],At[0],At[1]],[At[2],At[1],At[3],At[0]],[At[1],At[3],At[2],At[0]],[At[3],At[2],At[1],At[0]],[At[3],At[1],At[0],At[2]])
  tetraplex = conv(tetraplex)
  camera(0,0,(height/2)/tan(PI/6),0,0,0,0,1,0)
  zoom=1
  if(inp2.value()==4) {
    if(polytopeID==0) {
      vertexData = [[sqrt(2/3)*sqrt(15/16),-sqrt(2/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[-sqrt(2/3)*sqrt(15/16),-sqrt(2/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[0,sqrt(8/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[0,0,1*sqrt(15/16),1/4],[0,0,0,-1]]
  var tesseract = conv([[10.5,10.5,10.5,10.5]])
      edgeLength = 2/sqrt(1.6)
      circumR = 1
      fct = 2
      L = 10
      wx = 0
      wy = 0
      wz = 0
      s=1
      L2=L
    }else if(polytopeID==1){
      vertexData = conv([[10.5,10.5,10.5,10.5]])
      edgeLength = 1
      circumR = 1
      fct = 2
      L=32
      wx = 0
      wy = 0
      wz = 0
      s=1
      L2=L
    }else if(polytopeID==2) {
      vertexData = conv([[11,0,0,0],[0,11,0,0],[0,0,11,0],[0,0,0,11]])
      edgeLength = sqrt(2)
      circumR = 1
      fct = 0.75
      zoom = 1/6
      L=24
      wx = PI/4
      wy = PI/5
      wz = PI/6
      s=1
      L2=L
    }else if(polytopeID==3) {
      vertexData = conv([[11,11,0,0],[0,11,11,0],[0,0,11,11],[0,11,0,11],[11,0,11,0],[11,0,0,11]])
      edgeLength = sqrt(2)
      f=1/sqrt(2)
      fct = 1.1
      zoom = 1/3
      L=96
      wx = 0
      wy = 0
      wz = 0
      s=1
      L2=L
    }else if(polytopeID==4) {
      vertexData = dodecaplex
      edgeLength=3-sqrt(5)
      f=1/sqrt(8)
      fct = 1.05
      zoom = 1/4
      L=1200
      wx = 0
      wy = 0
      wz = 0
      s=1
      L2=L
      if(orthoOn>0) {
        s = 0.2
      }
    }else if(polytopeID==5) {
      vertexData = tetraplex
      edgeLength=phi_1
      f=1
      fct = 0.95
      zoom = 1/20
      L=720
      s=0.25
      wx = atan(1/sqrt(5))
      wy = atan(1/sqrt(6))
      wz = atan(1/sqrt(7))
      L2=L
    }else if(polytopeID==6) {
      vertexData = tetraplex
      edgeLength=phi_1
      intersectionD=1
      f=1
      fct = 0.95
      zoom = 1/8
      L=1920
      s=0.25
      L2=720
      wx = 0
      wy = 0
      wz = 0
    }else if(polytopeID==7) {
      vertexData = tetraplex
      edgeLength=1
      f=1
      fct = 0.95
      zoom = 1/8
      L=1200
      s=0.25
      L2=L
      wx = 0
      wy = 0
      wz = 0
    }else if(polytopeID==8) {
      vertexData = tetraplex
      edgeLength=phi_1
      intersectionD=phi
      f=1
      fct = 0.95
      zoom = 1/8
      L=1440
      s=0.25
      wx = 0
      wy = 0
      wz = 0
      L2=720
    }else if(polytopeID==9) {
      vertexData = tetraplex
      edgeLength=phi_1
      intersectionD=phi
      intersectionD2=phi_2
      f=1
      fct = 0.95
      zoom = 1/20
      L=1440
      s=0.25
      wx = atan(1/sqrt(5))
      wy = atan(1/sqrt(6))
      wz = atan(1/sqrt(7))
      L2=720
    }else if(polytopeID==10) {
      vertexData = tetraplex
      edgeLength=phi
      intersectionD=phi_1
      f=1
      fct = 0.95
      zoom = 1/20
      L=720
      s=0.25
      wx = atan(1/sqrt(5))
      wy = atan(1/sqrt(6))
      wz = atan(1/sqrt(7))
      L2=L
    }else if(polytopeID==11) {
      vertexData = tetraplex
      edgeLength=phi
      intersectionD=phi_1
      intersectionD2=1
      f=1
      fct = 0.95
      zoom = 1/20
      L=1920+720
      s=0.25
      wx = atan(1/sqrt(5))
      wy = atan(1/sqrt(6))
      wz = atan(1/sqrt(7))
      L2=720
    }else if(polytopeID==12) {
      vertexData = tetraplex
      edgeLength=1
      intersectionD=phi
      f=1
      fct = 0.95
      zoom = 1/20
      L=1920
      s=0.25
      wx = atan(1/sqrt(5))
      wy = atan(1/sqrt(6))
      wz = atan(1/sqrt(7))
      L2=1200
    }else if(polytopeID==13) {
      vertexData = tetraplex
      edgeLength=phi
      f=1
      fct = 0.95
      zoom = 1/20
      L=720
      s=0.25
      wx = atan(1/sqrt(5))
      wy = atan(1/sqrt(6))
      wz = atan(1/sqrt(7))
      L2=L
    }else if(polytopeID==14) {
      vertexData = doWeird(tetraplex,phi)
      edgeLength=phi
      intersectionD=1
      intersectionD2=2.572553981697934/2
      f=1
      fct = 0.95
      zoom = 1/20
      L=1920
      s=0.25
      wx = atan(1/sqrt(5))
      wy = atan(1/sqrt(6))
      wz = atan(1/sqrt(7))
      L2=720
    }else if(polytopeID==15) {
      vertexData = dodecaplex
      f=1/sqrt(8)
      edgeLength=4/(3-sqrt(5))
      fct = 1.05
      zoom = 1/4
      L=1200
      wx = 0
      wy = 0
      wz = 0
      s=1
      L2=L
      if(orthoOn>0) {
        s = 0.2
      }
    }
  }else {
    if(polytopeID==0) {
      vertexData = [[sqrt(2/3),-sqrt(2/9),1/3,0],[-sqrt(2/3),-sqrt(2/9),1/3,0],[0,sqrt(8/9),1/3,0],[0,0,-1,0]]
      edgeLength = 2/sqrt(1.6)/sqrt(15/16)
      circumR = 1
      L = 6
      s=1
      L2=L
    }else if(polytopeID==1){
      vertexData = conv([[11,11,11,0]])
      edgeLength = 2
      circumR = sqrt(1/2)
      L=12
      s=1
      L2=L
    }else if(polytopeID==2) {
      vertexData = conv([[11,0,0,0],[0,11,0,0],[0,0,11,0]])
      edgeLength= sqrt(2)
      circumR = 1
      L=12
      s=1
      xz = PI/5
      yz = PI/4
      L2=L
    }else if(polytopeID==3) {
      vertexData = dodecahedron
      edgeLength= sqrt(5)-1
      f=1/sqrt(3)
      L=30
      s=1
      yz=atan(phi_1)
      L2=L
    }else if(polytopeID==4) {
      vertexData = icosohedron
      edgeLength=2
      f=1/sqrt(phi+2)
      L=30
      s=1
      xz = atan(phi_2)
      L2=L
    }else if(polytopeID==5) {
      vertexData = icosohedron
      edgeLength=2*phi
      f=1/sqrt(phi+2)
      L=30
      s=1
      L2=L
      xz = 0
      yz=atan(phi_1)
    }else if(polytopeID==6) {
      vertexData = icosohedron
      edgeLength=2
      intersectionD = 2*phi
      f=1/sqrt(phi+2)
      L=60
      s=1
      L2=30
      xz = 0
      yz=atan(phi_1)
    }else if(polytopeID==7) {
      vertexData = dodecahedron
      f=1/sqrt(phi+2)
      edgeLength=sqrt(5)+1
      L=30
      s=1
      yz=atan(phi_1)
      L2=30
    }else if(polytopeID==8) {
      vertexData = conv([[0,11,10+phi,0],[11,10+phi,0,0],[10+phi,0,11,0],[11,0,0,0],[0,11,0,0],[0,0,11,0],[10.5,10.30901699437494745,10.8090169943749475,0],[10.8090169943749475,10.5,10.30901699437494745,0],[10.30901699437494745,10.8090169943749475, 10.5,0]])
      f=1/sqrt(phi+2)
      edgeLength=2*phi
      intersectionD = 2.572553981697934
      L=89
      s=1
      xz = atan(phi_2)
      L2=30
    }
  }
  if(polytopeID==-1){
    vertexData = file
    fct = 2
    L=edgesFile.length
    s=1
    L2=L
    circumR=1
  }
  mrSlider.value(fct)
  if(orthoOn>0) {
    zoom = 1
  }
}
function centercell() {
  if(inp2.value()==4) {//do nothing if dimention not set to 4
    resetCamera()//resets rotation
  }
}
function centervertex() {
  resetCamera()
  if(inp2.value()==4) {
    if(polytopeID==0) {
      fct = 2
      wx = PI
      s=1
    }else if(polytopeID==1){
      fct = 4
      zoom = 2
      wx = PI/4
      wy = PI/5
      wz = PI/6
      s=1
    }else if(polytopeID==2) {
      fct = 2
      L=24
      wx = 0
      wy = 0
      wz = 0
      s=1
    }else if(polytopeID==3) {
      fct = 2
      L=96
      wx = atan(1)
      wy = 0
      wz = 0
      s=1
    }else if(polytopeID==4||polytopeID==15) {
      fct = 1.1
      zoom = 1/4
      L=1200
      wx = atan(1/sqrt(5))
      wy = atan(1/sqrt(6))
      wz = atan(1/sqrt(7))
      s=1
    }else if(polytopeID==5||polytopeID==6||polytopeID==8||polytopeID==9||polytopeID==11||polytopeID==12||polytopeID==13||polytopeID==14||polytopeID==10||polytopeID==11||polytopeID==7) {
      fct = 0.95
      zoom = 1/8
      L=720
      s=0.25
      wx = 0
      wy = 0
      wz = 0
    }
  }else {
    if(polytopeID==0) {
      xz=PI
    }else if(polytopeID==1) {
      yz = PI/4
      xz = PI/5
    }else if(polytopeID==2) {
      yz = 0
      xz = 0
    }else if(polytopeID==3||polytopeID==7) {
      xz = atan(phi_2)
      yz = 0
    }else if(polytopeID==4||polytopeID==5||polytopeID==6||polytopeID==8) {
      xz = 0
      yz=atan(phi_1)
    }
  }
  if(orthoOn>0) {
    zoom = 1
  }
}
function centerE() {
  resetCamera()
  if(inp2.value()==4) {
    if(polytopeID==0) {
      wx = 0
      wy =0
      wz = PI/sqrt(2)
    }else if(polytopeID==1) {
      wx = PI/4
      wy = PI/5
      wz = 0
    }else if(polytopeID==2) {
      wx = PI/4
      wy = 0
      wz = 0
      fct=1.25
      zoom=1/2
    }else if(polytopeID==3) {
      wx = atan(1)
      wy = atan(1.5)
      wz = 0
    }else if(polytopeID==4||polytopeID==15) {
      wx = atan(1/sqrt(7))
      wy = 0
      wz = 0
      fct=1
      zoom=1/25
    }else if(polytopeID==5||polytopeID==6||polytopeID==8||polytopeID==9||polytopeID==11||polytopeID==12||polytopeID==13||polytopeID==14||polytopeID==10||polytopeID==11||polytopeID==7) {
      wx = atan(phi)
      wy = 0
      wz = 0
      fct=1
      zoom=0.1
    }
  }else {
    if(polytopeID==0) {
      yz=PI/sqrt(2)
    }else if(polytopeID==1) {
      yz = PI/4
    }else if(polytopeID==2) {
      yz = PI/4
      xz = 0
    }else if(polytopeID==3||polytopeID==7) {
      xz=0
      yz=0
    }else if(polytopeID==4||polytopeID==5||polytopeID==6||polytopeID==8) {
      xz=0
      yz=0
    }
  }
  if(orthoOn>0) {
    zoom = 1
  }
}
function centerF() {
  resetCamera()
  if(inp2.value()==4) {
    if(polytopeID==0) {
      wx = 0
      wy =0
      wz =PI*sqrt(3)
    }else if(polytopeID==1) {
      wx = PI/4
      wy = 0
      wz = 0
    }else if(polytopeID==2) {
      wx = PI/4
      wy = PI/5
      wz = 0
    }else if(polytopeID==3) {
      wx = atan(1)
      wy = atan(1/sqrt(2))
      wz = 0
    }else if(polytopeID==4||polytopeID==15) {
      wx = atan(phi)
      wy = 0
      wz = 0
      fct=1
      zoom=1/15
    }else if(polytopeID==5||polytopeID==6||polytopeID==8||polytopeID==9||polytopeID==11||polytopeID==12||polytopeID==13||polytopeID==14||polytopeID==10||polytopeID==11||polytopeID==7) {
      wx = atan(1/sqrt(7))
      wy = 0
      wz = 0
      zoom=1/30
    }
  }
  if(orthoOn>0) {
    zoom = 1
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  cam = createCamera()
  colorMode(HSB)
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
  c = ''
  for(var U = 0; U<centerv.style('width').length-2;U++) {
    c+=centere.style('width').charAt(U)
  }
  centerf.position(width/2-c,20)
  centerf.style('width',c+'px')
  inp2 = createSelect()//dimention selecter
  inp2.position(0,0)
  inp2.changed(changeDimension)
  inp2.option('3D',3)
  inp2.option('4D',4)
  inp2.selected(4)
  inp = createSelect()//polytope selector
  var A = inp2.style('width')
  A = A.charAt(0)+A.charAt(1)
  inp.position(A,0)
  inp.changed(changePolytope)
  div=createDiv('5 tetrahedron {3,3} cells')
  div.position(0,20)//cell (4d) or face (3d) info
  div.style('color','#ff0000')
  div1=createDiv('10 triangle {3} faces')
  div1.position(0,40)//face (4d) or edge (3d) info
  div1.style('color','#ffff00')
  div2=createDiv('10 edges')
  div2.position(0,60)//edge (4d) or vertex (3d) info
  div2.style('color','#00ff00')
  div3=createDiv('5 verticies')
  div3.position(0,80)//vertex (4d) or Schläfli symbol (3d) info
  div3.style('color','#00ffff')
  div4=createDiv('Schläfli symbol {3,3,3}')
  div4.position(0,100)//Schläfli symbol (4d) or dual (3d) info
  div4.style('color','#0000ff')
  div5=createDiv('Self-Dual')
  div5.position(0,120)//dual (4d) or alternate names (3d) info
  div5.style('color','#ff00ff')
  div6=createDiv('other names: 5-cell, pentatope, pentahedroid, pen, hyperpyramid, tetrahedral pyramid')//alternate names info
  div6.position(0,140)
  div6.style('color','#ffffff')
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
}
var eRan = 1
var vRan = 1
var orthoOn = -1
function toggOrtho() {
  orthoOn*=-1
  zoom=1
  if(orthoOn>0&&inp2.value()==4&&(polytopeID==4||polytopeID==15)) {
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
  polytopeID=inp.value()
  resetCamera()
  intersectionD = NaN
  intersectionD2 = NaN
  if(inp2.value()==4) {
    if(polytopeID==0) {
      div.html('5 tetrahedron {3,3} cells')
      div1.html('10 triangle {3} faces')
      div2.html('10 edges')
      div3.html('5 verticies')
      div4.html('Schläfli symbol {3,3,3}')
      div5.html('Self-Dual')
      div6.html('other names: 5-cell, pentatope, pentahedroid, hyperpyramid, tetrahedral pyramid')
    }else if(polytopeID==1){
      div.html('8 cube {4,3} cells')
      div1.html('24 square {4} faces')
      div2.html('32 edges')
      div3.html('16 verticies')
      div4.html('Schläfli symbol {4,3,3}')
      div5.html('Dual to hexadecachoron {3,3,4}')
      div6.html('other names: 8-cell, octachoron, octahedroid, cubic prism, tetracube, 4-cube')
    }else if(polytopeID==2) {
      div.html('16 tetrahedron {3,3} cells')
      div1.html('32 triangle {3} faces')
      div2.html('24 edges')
      div3.html('8 verticies')
      div4.html('Schläfli symbol {3,3,4}')
      div5.html('Dual to Tesseract {4,3,3}')
      div6.html('other names: 16-cell, hexdecahedroid, 4-orthoplex')
    }else if(polytopeID==3) {
      div.html('24 octahedron {3,4} cells')
      div1.html('96 triangle {3} faces')
      div2.html('96 edges')
      div3.html('24 verticies')
      div4.html('Schläfli symbol {3,4,3}')
      div5.html('Self-Dual')
      div6.html('other names: 24-cell, octaplex, icosatetrahedroid, octacube, hyper-diamond, polyoctahedron')
    }else if(polytopeID==4) {
      div.html('120 dodecahedron {5,3} cells')
      div1.html('720 pentagon {5} faces')
      div2.html('1200 edges')
      div3.html('600 verticies')
      div4.html('Schläfli symbol {5,3,3}')
      div5.html('Dual to tetraplex {3,3,5}')
      div6.html('other names: 120-cell, hyperdodecahedron, polydodecahedron, hecatonicosachoron, dodecacontachoron, hecatonicosahedroid')
    }else if(polytopeID==5) {
      div.html('600 tetrahedron {3,3} cells')
      div1.html('1200 triangle {3} faces')
      div2.html('720 edges')
      div3.html('120 verticies')
      div4.html('Schläfli symbol {3,3,5}')
      div5.html('Dual to dodecaplex {5,3,3}')
      div6.html('other names: 600-cell, hexacosichoron, hexacosihedroid, polytetrahedron')
    }else if(polytopeID==6) {
      div.html('600 Icosahedron {5,3} cells')
      div1.html('1200 triangle {3} faces')
      div2.html('720 edges')
      div3.html('120 verticies')
      div4.html('Schläfli symbol {3,3,5/2}')
      div5.html('Dual to small stellated 120-cell {5/2,5,3}')
      div6.html('other names: polyicosahedron, faceted 600-cell, icosaplex, faceted hexacosichoron')
    }else if(polytopeID==7) {
      div.html('120 small stellated dodecahedron {5/2,5} cells')
      div1.html('720 pentagram {5/2} faces')
      div2.html('1200 edges')
      div3.html('120 verticies')
      div4.html('Schläfli symbol {5/2,5,3}')
      div5.html('Dual to icosahedral 120-cell {3,5,5/2}')
      div6.html('other names: stellated polydodecahedron, small stellated hecatonicosachoron')
    }else if(polytopeID==8) {
      div.html('120 great dodecahedron {5,5/2} cells')
      div1.html('720 pentagon {5} faces')
      div2.html('720 edges')
      div3.html('120 verticies')
      div4.html('Schläfli symbol {5,5/2,5}')
      div5.html('Self-Dual')
      div6.html('other names: great polydodecahedron, great hecatonicosachoron')
    }else if(polytopeID==9) {
      div.html('120 dodecahedron {5,3} cells')
      div1.html('720 pentagon {5} faces')
      div2.html('720 edges')
      div3.html('120 verticies')
      div4.html('Schläfli symbol {5,3,5/2}')
      div5.html('Dual to great stellated 120-cell {5/2,3,5}')
      div6.html('other names: grand hecatonicosachoron, grand polydodecahedron')
    }else if(polytopeID==10) {
      div.html('120 great stellated dodecahedron {5/2,3} cells')
      div1.html('720 pentagram {5/2} faces')
      div2.html('720 edges')
      div3.html('120 verticies')
      div4.html('Schläfli symbol {5/2,3,5}')
      div5.html('Dual to grand 120-cell {5,3,5/2}')
      div6.html('other names: great stellated polydodecahedron, Great stellated hecatonicosachoron')
    }else if(polytopeID==11) {
      div.html('120 small stellated dodecahedron {5/2,5} cells')
      div1.html('720 pentagram {5/2} faces')
      div2.html('720 edges')
      div3.html('120 verticies')
      div4.html('Schläfli symbol {5/2,5,5/2}')
      div5.html('Self-Dual')
      div6.html('other names: grand stellated polydodecahedron, grand stellated hecatonicosachoron')
    }else if(polytopeID==12) {
      div.html('120 great dodecahedron {5,5/2} cells')
      div1.html('720 pentagon {5} faces')
      div2.html('1200 edges')
      div3.html('120 verticies')
      div4.html('Schläfli symbol {5,5/2,3}')
      div5.html('Dual to great icosahedral 120-cell {3,5/2,5}')
      div6.html('other names: great grand polydodecahedron, great grand hecatonicosachoron')
    }else if(polytopeID==13) {
      div.html('120 great icosahedron {3,5/2} cells')
      div1.html('1200 triangle {3} faces')
      div2.html('720 edges')
      div3.html('120 verticies')
      div4.html('Schläfli symbol {3,5/2,5}')
      div5.html('Dual to great grand 120-cell {5,5/2,2}')
      div6.html('other names: great polyicosahedron, great faceted 600-cell, great icosahedral 120-cell, great faceted hexacosichoron')
    }else if(polytopeID==14) {
      div.html('600 tetrahedron {3,3} cells')
      div1.html('1200 triangle {3} faces')
      div2.html('720 edges')
      div3.html('120 verticies')
      div4.html('Schläfli symbol {3,3,5/2}')
      div5.html('Dual to great grand stellated 120-cell {5/2,3,3}')
      div6.html('other names: grand polytetrahedron, grand hexacosichoron')
    }else if(polytopeID==15) {
      div.html('120 great stellated dodecahedron {5/2,3} cells')
      div1.html('720 pentagram {5/2} faces')
      div2.html('1200 edges')
      div3.html('600 verticies')
      div4.html('Schläfli symbol {5/2,3,3}')
      div5.html('Dual to grand 600-cell {3,3,5/2}')
      div6.html('other names: great grand stellated polydodecahedron, great grand stellated hecatonicosachoron')
    }
  }else {
    if(polytopeID==0) {
      div.html('4 triangle {3} faces')
      div1.html('6 edges')
      div2.html('4 verticies')
      div3.html('Schläfli symbol {3,3}')
      div4.html('Self-Dual')
      div5.html('other names: triangular pyramid, 3-simplex')
      div6.html('')
    }else if(polytopeID==1){
      div.html('6 square {4} faces')
      div1.html('12 edges')
      div2.html('8 verticies')
      div3.html('Schläfli symbol {4,3}')
      div4.html('Dual to octohedron {3,4}')
      div5.html('other names: 3-cube, hexahedron, square prism')
      div6.html('')
    }else if(polytopeID==2) {
      div.html('8 triangle {3} faces')
      div1.html('12 edges')
      div2.html('6 verticies')
      div3.html('Schläfli symbol {3,4}')
      div4.html('Dual to cube {4,3}')
      div5.html('other names: square bipyramid, triangular antiprism, 3-orthaplex')
      div6.html('')
    }else if(polytopeID==3) {
      div.html('12 pentagon {5} faces')
      div1.html('30 edges')
      div2.html('20 verticies')
      div3.html('Schläfli symbol {5,3}')
      div4.html('Dual to icosahedron {3,5}')
      div5.html('')
      div6.html('')
    }else if(polytopeID==4) {
      div.html('20 triangle {3} faces')
      div1.html('30 edges')
      div2.html('12 verticies')
      div3.html('Schläfli symbol {3,5}')
      div4.html('Dual to dodecahedron {5,3}')
      div5.html('other names: gyroelongated pentagonal bipyramid, biaugmented pentagonal antiprism')
      div6.html('')
    }else if(polytopeID==5) {
      div5.html('')
      div.html('12 pentagram {5/2} faces')
      div1.html('30 edges')
      div2.html('12 verticies')
      div3.html('Schläfli symbol {5/2,5}')
      div4.html('Dual to great dodecahedron {5,5/2}')
    }else if(polytopeID==6) {
      div5.html('')
      div.html('12 pentagon {5} faces')
      div1.html('30 edges')
      div2.html('12 verticies')
      div3.html('Schläfli symbol {5,5/2}')
      div4.html('Dual to small stellated dodecahedron {5/2,5}')
      div6.html('')
    }else if(polytopeID==7) {
      div5.html('')
      div.html('12 pentagram {5/2} faces')
      div1.html('30 edges')
      div2.html('20 verticies')
      div3.html('Schläfli symbol {5/2,3}')
      div4.html('Dual to great icosahedron {3,5/2}')
      div6.html('')
    }else if(polytopeID==8) {
      div5.html('')
      div.html('20 triangle {3} faces')
      div1.html('30 edges')
      div2.html('12 verticies')
      div3.html('Schläfli symbol {3,5/2}')
      div4.html('Dual to great stellated dodecahedron {5/2,3}')
      div6.html('')
    }
  }
  if(polytopeID==-1) {
    div5.html('')
    div.html('')
    div1.html('')
    div2.html('')
    div3.html('')
    div4.html('')
    div6.html('')
  }
}
function keyPressed() {
  if(keyCode==86) {
    verticies*=-1
  }if(keyCode==76) {
    edges*=-1
  }
}
function draw() {
  fct = mrSlider.value()
  joeDiv.html(fct)
  var W =joeDiv.style('width')
  var r = ''
  for(var i = 0; i<W.length-2;i++) {
    r+=W.charAt(i)
  }
  joeDiv.position(width-5-r,20)
  if(frameCount%10==1) {
    div7.html(frameRate()+'fps')
  }
  orbitControl(5,5,5)
  cam.centerX=0
  cam.centerY=0
  cam.centerZ=0
  var mx = (height/2)/tan(PI/6)
  var thing = sqrt(sq(cam.eyeZ)+sq(cam.eyeY)+sq(cam.eyeX))
  cam.eyeZ/=thing/mx
  cam.eyeY/=thing/mx
  cam.eyeX/=thing/mx
  col=1-((millis()/1e5*60)%1)
  col2=(millis()/1e5*60)%1
  if(keyIsPressed) {
    if(key=='Q'||key=='%') {
      xy+=1/frameRate()*PI
    }if(key=='E'||key=='^') {
      xy-=1/frameRate()*PI
    }if(key=='W'||key=='@') {
      yz-=1/frameRate()*PI
    }if(key=='S'||key=='!') {
      yz+=1/frameRate()*PI
    }if(key=='A'||key=='$') {
      xz-=1/frameRate()*PI
    }if(key=='D'||key=='#') {
      xz+=1/frameRate()*PI
    }if(keyCode=='87'||key=='!') {
      wx-=1/frameRate()*PI
    }if(key=='s'||key=='S'||key=='@') {
      wx+=1/frameRate()*PI
    }if(key=='a'||key=='A'||key=='#') {
      wy-=1/frameRate()*PI
    }if(key=='d'||key=='D'||key=='$') {
      wy+=1/frameRate()*PI
    }if(key=='e'||key=='E'||key=='%') {
      wz-=1/frameRate()*PI
    }if(key=='q'||key=='Q'||key=='^') {
      wz+=1/frameRate()*PI
    }if(keyCode==187) {
      zoom*=1.1
    }if(keyCode==189) {
      zoom/=1.1
    }
  }
  if(inp2.value()==3) {
    wx=0
    wy=0
    wz=0
  }
  background(0)
  if(wx!==0||wy!==0||wz!==0||xy!==0||yz!==0||xz!==0) {
    var cwx = cos(wx)
    var swx = sin(wx)
    var cwy = cos(wy)
    var swy = sin(wy)
    var cwz = cos(wz)
    var swz = sin(wz)
    var cxy = cos(xy)
    var sxy = sin(xy)
    var cyz = cos(yz)
    var syz = sin(yz)
    var cxz = cos(xz)
    var sxz = sin(xz)
    for(var h = 0; h<vertexData.length; h++) {
      var x = vertexData[h][0]
      var y = vertexData[h][3]
      vertexData[h][0]=x*cwx-y*swx
      vertexData[h][3]=y*cwx+x*swx
      var x = vertexData[h][1]
      var y = vertexData[h][3]
      vertexData[h][1]=x*cwy-y*swy
      vertexData[h][3]=y*cwy+x*swy
      var x = vertexData[h][2]
      var y = vertexData[h][3]
      vertexData[h][2]=x*cwz-y*swz
      vertexData[h][3]=y*cwz+x*swz
      var x = vertexData[h][0]
      var y = vertexData[h][1]
      vertexData[h][0]=x*cxy-y*sxy
      vertexData[h][1]=y*cxy+x*sxy
      var x = vertexData[h][1]
      var y = vertexData[h][2]
      vertexData[h][1]=x*cyz-y*syz
      vertexData[h][2]=y*cyz+x*syz
      var x = vertexData[h][0]
      var y = vertexData[h][2]
      vertexData[h][0]=x*cxz-y*sxz
      vertexData[h][2]=y*cxz+x*sxz
    }
  }
  var vertexDataProjected = []
  for(var i = 0; i<vertexData.length; i++) {
    var fact = 400/(fct-vertexData[i][3]*f)
    if(orthoOn>0) {
      fact = 400
    }
    vertexDataProjected[i]=[vertexData[i][0]*fact*f,vertexData[i][1]*fact*f,vertexData[i][2]*fact*f,1/(fct-vertexData[i][3]*f)*f]
    if(orthoOn>0) {
      vertexDataProjected[i][3]=1
    }
  }
  if(a>-1) {
  var l = 0
  if(edges>0) {
    for(var k = 0; k<vertexData.length;k++) {
      for(var k2 = 0; k2<vertexData.length;k2++) {
        if((areConnected(vertexData[k],vertexData[k2],edgeLength)==2||areConnected(vertexData[k],vertexData[k2],edgeLength)==1)&&k2>k) {
          renderLine(vertexDataProjected[k],vertexDataProjected[k2],areConnected(vertexData[k],vertexData[k2],edgeLength))
          l++
          if(L==l) {
            break
          }
        }
      }
    }
  }
  }else {
    for(var i = 0; i<edgesFile.length; i++) {
      renderLine(vertexDataProjected[edgesFile[i][0]],vertexDataProjected[edgesFile[i][1]],areConnected(vertexData[edgesFile[i][0]],vertexData[edgesFile[i][1]],edgeLength))
    }
  }
  if(verticies>0) {
    for(var j = 0; j<vertexData.length; j++) {
      if(((inp.value()>8||inp.value()<8||j<12)&&inp2.value()==3)||((inp.value()>14||inp.value()<14||j>720)&&inp2.value()==4)) {
        renderVertex(vertexDataProjected[j])
      }
    }
  }
  xy = 0
  yz = 0
  xz = 0
  wx = 0
  wy = 0
  wz = 0
}
function renderVertex(arr) {
  noStroke()
  push()
  translate(arr[0]*zoom,arr[1]*zoom,arr[2]*zoom)
  if(vRan>0) {
    fill(360*col2%360,100,100)
  }else {
    fill(verCol.value())
  }
  if(inp2.value()==4) {
    sphere(arr[3]*50*s*zoom/circumR)
  }else {
    sphere(25*s*zoom/circumR)
  }
  var A_ = vertexData.length
  if(inp.value()==8&&inp2.value()==3) {
    A_=12
  }else if(inp.value()==14) {
    A_=120
  }
  col2+=(1/A_)%1
  pop()
}
function renderLine(arr1,arr2,Q) {
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
  beginShape(TRIANGLE_STRIP)
  if(arr1[3]==arr2[3]) {
    strokeWeight(arr1[3]*50/sqrt(sqrt(L))*zoom)
    line(arr1[0]*zoom,arr1[1]*zoom,arr1[2]*zoom,arr2[0]*zoom,arr2[1]*zoom,arr2[2]*zoom)
  }else {
    noStroke()
    for(var i = 0; i<PI*2; i+=PI/40*sqrt(L)) {
      for(var j = 0; j<PI*2; j+=PI/40*sqrt(L)){
        var x = cos(i)*arr1[3]*20/sqrt(sqrt(L))*zoom
        var y = sin(i)*arr1[3]*20*sin(j)/sqrt(sqrt(L))*zoom
        var z = cos(j)*arr1[3]*20/sqrt(sqrt(L))*zoom
        vertex(arr1[0]*zoom+x,arr1[1]*zoom+y,arr1[2]*zoom+z)
        var x = cos(i)*arr2[3]*20/sqrt(sqrt(L))*zoom
        var y = sin(i)*arr2[3]*20*sin(j)/sqrt(sqrt(L))*zoom
        var z = cos(j)*arr2[3]*20/sqrt(sqrt(L))*zoom
        vertex(arr2[0]*zoom+x,arr2[1]*zoom+y,arr2[2]*zoom+z)
      }
    }
  }
  endShape(CLOSE)
}
function areConnected(arr1,arr2,d) {
  var dist = sq(arr1[0]-arr2[0])+sq(arr1[1]-arr2[1])+sq(arr1[2]-arr2[2])+sq(arr1[3]-arr2[3])
  //console.log(sqrt(dist))
  if(sq(dist-d*d)<0.01) {
    return 2
  }if(sq(dist-intersectionD*intersectionD)<0.01||sq(dist-intersectionD2*intersectionD2)<0.01) {
    return 1
  }
  return false
}
function conv(arr) {
  var arr1 = []
  for(var i = 0; i<arr.length; i++) {
    if(arr[i][0]<10) {
      arr1[arr1.length]=arr[i]
    }else {
      arr1[arr1.length]=[arr[i][0]-10,arr[i][1],arr[i][2],arr[i][3]]
      arr1[arr1.length]=[10-arr[i][0],arr[i][1],arr[i][2],arr[i][3]]
    }
  }
  arr = arr1
  arr1 = []
  for(var i = 0; i<arr.length; i++) {
    if(arr[i][1]<10) {
      arr1[arr1.length]=arr[i]
    }else {
      arr1[arr1.length]=[arr[i][0],arr[i][1]-10,arr[i][2],arr[i][3]]
      arr1[arr1.length]=[arr[i][0],10-arr[i][1],arr[i][2],arr[i][3]]
    }
  }
  arr = arr1
  arr1 = []
  for(var i = 0; i<arr.length; i++) {
    if(arr[i][2]<10) {
      arr1[arr1.length]=arr[i]
    }else {
      arr1[arr1.length]=[arr[i][0],arr[i][1],arr[i][2]-10,arr[i][3]]
      arr1[arr1.length]=[arr[i][0],arr[i][1],10-arr[i][2],arr[i][3]]
    }
  }
  arr = arr1
  arr1 = []
  for(var i = 0; i<arr.length; i++) {
    if(arr[i][3]<10) {
      arr1[arr1.length]=arr[i]
    }else {
      arr1[arr1.length]=[arr[i][0],arr[i][1],arr[i][2],arr[i][3]-10]
      arr1[arr1.length]=[arr[i][0],arr[i][1],arr[i][2],10-arr[i][3]]
    }
  }
  return arr1
}

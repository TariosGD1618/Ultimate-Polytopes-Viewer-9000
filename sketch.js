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
dimentionCount=4
simpleM=-1
faces=-1
var faceData=[[]]
var edgesFile=[[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
var col = 0
var col2 = 0
circumR=1
var vertexData = [[sqrt(2/3)*sqrt(15/16),-sqrt(2/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[-sqrt(2/3)*sqrt(15/16),-sqrt(2/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[0,sqrt(8/9)*sqrt(15/16),-1/3*sqrt(15/16),1/4],[0,0,1*sqrt(15/16),1/4],[0,0,0,-1]]
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
function doWeird(A,_b) {
  var A2 = []
  for(var _X = 0; _X<A.length; _X++) {
    for(var _Y = 0; _Y<A.length; _Y++) {
      var dist = sq(A[_X][0]-A[_Y][0])+sq(A[_X][1]-A[_Y][1])+sq(A[_X][2]-A[_Y][2])+sq(A[_X][3]-A[_Y][3])
      if(sq(dist-_b*_b)<0.001&&_X>_Y) {
        var d1 = (A[_X][0]-A[_Y][0])
        var d2 = (A[_X][1]-A[_Y][1])
        var d3 = (A[_X][2]-A[_Y][2])
        var d4 = (A[_X][3]-A[_Y][3])
        A2.push([d1/phi+A[_Y][0],d2/phi+A[_Y][1],d3/phi+A[_Y][2],d4/phi+A[_Y][3]])
        A2.push([d1/phi2+A[_Y][0],d2/phi2+A[_Y][1],d3/phi2+A[_Y][2],d4/phi2+A[_Y][3]])
      }
    }
  }
  A2=deDup(A2)
  A2=A.concat(A2)
  return A2
}
function deDup(arr) {
  arr=arr.sort()
  arr2=[]
  for(var i = 0; i<arr.length; i++) {
    for(;isSame(arr[i],arr[i-1])&&i<arr.length;i++){}
    if(arr[i]==undefined) {}else {
      arr2[arr2.length]=arr[i]
    }
  }
  return arr2
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
    inp.html('<option value="0">pen</option><option value="1">tes</option><option value="2">hex</option><option value="3">ico</option><option value="4">hi</option><option value="5">ex</option><option value="6">fix</option><option value="7">sishi</option><option value="8">gohi</option><option value="9">gahi</option><option value="10">gishi</option><option value="11">gashi</option><option value="12">gaghi</option><option value="13">gofix</option><option value="14">gax</option><option value="15">gogishi</option>')
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
    inp.html('<option value="0">tet</option><option value="1">cube</option><option value="2">oct</option><option value="3">doe</option><option value="4">ike</option>  <option value="5">sissid</option><option value="6">gad</option><option value="7">gissid</option><option value="8">gike</option>')
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
    inp2.style('width','40px')
    inp.position(40,0)
  }else if(inp2.value()==5) {
    dimentionCount=inp3.value()*1
    if(inp.html()=='<option value="0">simplex</option><option value="1">hypercube</option><option value="2">orthoplex</option>') {}else {
      inp.html('<option value="0">simplex</option><option value="1">hypercube</option><option value="2">orthoplex</option>')
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
function resetCamera() {
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
  if(dimentionCount==4&&inp2.value()==4) {
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
      break 
      case 4:
        vertexData = frag(heca,4)
        edgeLength=(3-sqrt(5))*phi2/2
        circumR=phi2*sqrt(2)
        fct = 1.05
        zoom = 1/4
        L=1200
        s=1
        L2=L
        faceData = frag(hecaF,5)
        if(orthoOn>0) {
          s = 0.2
        }
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
      break
      case 6:
        vertexData = frag(ex,4)
        edgeLength=1
        intersectionD=phi
        circumR=phi
        fct = 1.1
        zoom = 1/8
        L=1920
        s=0.25
        L2=720
        faceData=frag(exf,3)
      break
      case 7:
      vertexData = frag(ex,4)
      edgeLength=phi
      circumR=phi
      fct = 1.1
      zoom = 1/8
      L=1200
      s=0.25
      L2=L
      break
      case 8:
      vertexData = frag(ex,4)
      edgeLength=1
      intersectionD=phi2
      circumR=phi
      fct = 1.1
      zoom = 1/8
      L=1440
      s=0.25
      L2=720
      break
      case 9:
      vertexData = frag(ex,4)
      edgeLength=1
      intersectionD=phi2
      intersectionD2=2.8284271247461903*phi/2
      circumR=phi
      fct = 0.95
      zoom = 1/20
      L=1440
      s=0.25
      rotArr[2][0] = atan(1/sqrt(5))
      rotArr[2][1] = atan(1/sqrt(6))
      rotArr[2][2] = atan(1/sqrt(7))
      L2=720
      break
      case 10:
      vertexData = frag(ex,4)
      edgeLength=phi2
      intersectionD=phi
      circumR=phi
      fct = 0.95
      zoom = 1/20
      L=720
      s=0.25
      rotArr[2][0] = atan(1/sqrt(5))
      rotArr[2][1] = atan(1/sqrt(6))
      rotArr[2][2] = atan(1/sqrt(7))
      L2=L
      break
      case 11:
      vertexData = frag(ex,4)
      edgeLength=phi2
      intersectionD=phi
      intersectionD2=phi
      circumR=phi
      fct = 0.95
      zoom = 1/20
      L=1920+720
      s=0.25
      rotArr[2][0] = atan(1/sqrt(5))
      rotArr[2][1] = atan(1/sqrt(6))
      rotArr[2][2] = atan(1/sqrt(7))
      L2=720
      break
      case 12:
      vertexData = frag(ex,4)
      edgeLength=phi
      intersectionD=phi2
      circumR=phi
      fct = 0.95
      zoom = 1/20
      L=1920
      s=0.25
      rotArr[2][0] = atan(1/sqrt(5))
      rotArr[2][1] = atan(1/sqrt(6))
      rotArr[2][2] = atan(1/sqrt(7))
      L2=1200
      break
      case 13:
      vertexData = frag(ex,4)
      edgeLength=phi2
      circumR=phi
      fct = 0.95
      zoom = 1/20
      L=720
      s=0.25
      rotArr[2][0] = atan(1/sqrt(5))
      rotArr[2][1] = atan(1/sqrt(6))
      rotArr[2][2] = atan(1/sqrt(7))
      L2=L
      break
      case 14:
        vertexData = frag(gax,4)
        edgeLength=(sqrt(5)+3)*phi2*phi
        intersectionD=2.8284271247461903/2*(sqrt(5)+3)*phi2
        circumR=(sqrt(5)+3)*phi2
        fct = 1.1
        zoom = 1/20
        L=1440
        s=1
        L2=720
        faceData = frag(gaxf,3)
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
      break
    }
  }else if(dimentionCount==3&&inp2.value()==3) {
    switch(polytopeID) {
      case 0:
        vertexData = [[sqrt(2/3),-sqrt(2/9),1/3,0],[-sqrt(2/3),-sqrt(2/9),1/3,0],[0,sqrt(8/9),1/3,0],[0,0,-1,0]]
        edgeLength = 2/sqrt(1.6)/sqrt(15/16)
        circumR = 1
        L = 6
        s=1
        L2=L
        faceData=[[0,1,2],[0,2,3],[0,3,1],[1,2,3]]
      break
      case 1:
        vertexData = conv([[11,11,11,0]])
        edgeLength = 2
        circumR = sqrt(3)
        L=12
        s=1
        L2=L
        faceData=[[1,0,2,3],[5,4,6,7],[3,2,6,7],[1,0,4,5],[2,0,4,6],[3,1,5,7]]
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
      break
      case 8:
        vertexData = doWeird(icosohedron,2*phi)
        circumR=sqrt(phi+2)
        edgeLength=2*phi
        intersectionD = 2.8284271247461903
        L=240
        s=1
        rotArr[1][0] = atan(phi_2)
        L2=30
        faceData=[[4,5,10],[6,7,9],[0,1,7],[2,3,4],[0,9,11],[3,8,10],[2,6,9],[1,5,10],[3,6,8],[0,5,11],[2,4,11],[1,7,8],[6,7,8],[4,5,11],[2,3,6],[0,1,5],[2,9,11],[1,8,10],[3,4,10],[0,7,9]]
      break
    }
  }else if(inp2.value()==-1){
    fct = 2
    s=1
    circumR=1
  }else if(inp2.value()==2) {
    rotArr=[0]
    A = inp4.value()*1
    B = inp5.value()*1%A
    if(B>A/2) {
      B=A-B
      inp5.value(B)
    }
    var gcm = 1
    for(var i = 1; i<A; i++) {
      if(floor(B/i)==B/i&&floor(A/i)==A/i) {
        gcm=i
      }
    }
    A/=gcm
    B/=gcm
    L=A
    L2=A
    vertexData=[]
    for(var i = 0; i<A; i++) {
      vertexData[i]=[cos(PI*2/A*i),sin(PI*2/A*i),0,0]
    }
    faceData=[[]]
    for(var j = 0; j<A*B/gcm; j+=B) {
      faceData[0][j/B]=j%A
    }
    edgeLength=sqrt(sq(1-cos(PI*2/A*B))+sq(sin(PI*2/A*B)))
  }else {
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
  }
  mrSlider.value(fct)
  if(orthoOn>0) {
    zoom = 1
  }
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
  edgesFile=[]
  for(var i = 0; i<arrA.length; i++) {
    for(;isSame(arrA[i],arrA[i-1])&&i<arrA.length;i++){}
    if(arrA[i]==undefined) {}else {
      edgesFile[edgesFile.length]=arrA[i]
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
    if(arr1[i]!==arr2[i]) {
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
  }else if(inp2.value()==3) {
    inp2.value(2)
    inp5.value(1)
    switch(polytopeID) {
      case 0:
      case 1:
      case 3:
      case 7:
        inp4.value(3)
      break
      case 2:
        inp4.value(4)
      break
      case 4:
      case 5:
        inp4.value(5)
      break
      case 6:
      case 8:
        inp4.value(5)
        inp5.value(2)
      break
    }
    changeDimension()
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
    }
    changePolytope()
  }
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
  if(val==3) {
    inp5.value(1)
    switch(polytopeID) {
      case 0:
      case 2:
      case 4:
      case 8:
        inp4.value(3)
      break
      case 1:
        inp4.value(4)
      break
      case 3:
      case 6:
        inp4.value(5)
      break
      case 5:
      case 7:
        inp4.value(5)
        inp5.value(2)
      break
    }
  }else {
    inp5.value(1)
    switch(polytopeID) {
      case 0:
      case 2:
      case 3:
      case 5:
      case 6:
      case 13:
      case 14:
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
  changeDimension()
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
  }
  changePolytope()
}
function STFCT() {
  inp3.value(inp3.value()-1)
  switch(inp.value()*1) {
    case 2:
      inp.value(0)
    break
  }
  if(inp3.value()==4) {
    inp2.value(4)
  }
  changeDimension()
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
  inpy=createInput('5','number')
  inpy.style('width','40px')
  inpy2=createInput('4','number')
  inpy2.style('width','40px')
  inpy.position(width-96,height-23)
  inpy2.position(width-48,height-23)
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
    }
  }else if(dimentionCount==3){
    div1.html(L2+' edges')
    div2.html(vertexData.length+' verticies')
    switch(polytopeID) {
      case 0:
        div.html('4 triangle {3} faces')
        div3.html('Schläfli symbol {3,3}')
        div4.html('Self-Dual')
        div5.html('names: tetrahedron, triangular pyramid, 3-simplex')
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
    }
  }else if(dimentionCount==2&&inp2.value()==2) {
    div8.html('')
    div.html(A+' edges')
    div1.html(A+' verticies')
    if(B==1) {
      div2.html('Schläfli symbol {'+A+'}')
    }else {
      div2.html('Schläfli symbol {'+A+'/'+B+'}')
    }
    div3.html('Self-dual')
    if(A<5) {
      if(A==2) {
        div4.html('Dyad')
      }if(A==3) {
        div4.html('Triangle')
      }if(A==4) {
        div4.html('Square')
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
    if(key=='Q'||key=='%') {
      rotArr[0][0]+=1/frameRate()*PI
    }if(key=='E'||key=='^') {
      rotArr[0][0]-=1/frameRate()*PI
    }if(key=='W'||key=='@') {
      rotArr[1][1]-=1/frameRate()*PI
    }if(key=='S'||key=='!') {
      rotArr[1][1]+=1/frameRate()*PI
    }if(key=='A'||key=='$') {
      rotArr[1][0]-=1/frameRate()*PI
    }if(key=='D'||key=='#') {
      rotArr[1][0]+=1/frameRate()*PI
    }if(keyIsDown(87)||key=='!') {
      rotArr[2][0]-=1/frameRate()*PI
    }if(keyIsDown(83)||key=='@') {
      rotArr[2][0]+=1/frameRate()*PI
    }if(keyIsDown(65)||key=='#') {
      rotArr[2][1]-=1/frameRate()*PI
    }if(keyIsDown(68)||key=='$') {
      rotArr[2][1]+=1/frameRate()*PI
    }if(keyIsDown(69)||key=='%') {
      rotArr[2][2]-=1/frameRate()*PI
    }if(keyIsDown(81)||key=='^') {
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
  background(0)
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
    for(var k = 0; k<vertexData.length;k++) {
      for(var k2 = 0; k2<vertexData.length;k2++) {
        if((areConnected(vertexData[k],vertexData[k2],edgeLength)==2||areConnected(vertexData[k],vertexData[k2],edgeLength)==1)&&k2>k) {
          renderLine(vertexDataProjected[k],vertexDataProjected[k2],areConnected(vertexData[k],vertexData[k2],edgeLength))
          l++
        }
      }
      if(L==l) {
        break
      }
    }
  }else {
    for(var i = 0; i<edgesFile.length; i++) {
      renderLine(vertexDataProjected[edgesFile[i][0]],vertexDataProjected[edgesFile[i][1]],2)
    }
  }
  }
  if(verticies>0) {
    for(var j = 0; j<vertexData.length; j++) {
      if(((inp.value()>8||inp.value()<8||j<12)&&dimentionCount==3)||((inp.value()>14||inp.value()<14||j<120)&&dimentionCount==4)||dimentionCount>4||dimentionCount==2) {
        renderVertex(vertexDataProjected[j])
      }
    }
  }
  if(faces>0) {
    var frct = zoom*height/tan(PI/6)/4
    for(var i = 0; i<faceData.length; i++) {
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
      for(var j = 0; j<faceData[i].length; j++) {
        var J = faceData[i][j]
        vertex(vertexDataProjected[J][0]*frct,vertexDataProjected[J][1]*frct,vertexDataProjected[J][2]*frct)
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
  if(simpleM>0) {
    sphere(arr[3]*s*frct/40/circumR)
  }else {
    sphere(arr[3]*frct/10*s/circumR)
  }
  var A_ = vertexData.length
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
  if(simpleM>0) {
    strokeWeight(1)
    line(a1[0]*frct,a1[1]*frct,a1[2]*frct,a2[0]*frct,a2[1]*frct,a2[2]*frct)
  }else {
    beginShape()
    noStroke()
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
  }if(sq(Dist-intersectionD*intersectionD)<0.000001||sq(Dist-intersectionD2*intersectionD2)<0.000001) {
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

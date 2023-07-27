import './App.css';
import React,{useState} from 'react';
import imge from'./images/tic.jpg';
import imge1 from'./images/cross1.webp';
import imge2 from'./images/ring.png';
import imge3 from'./images/cross.webp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
var turn=0
var filled=[-1,0,0,0,0,0,0,0,0,0];
const played=[[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];
function App() {
  const [getstate,setstate]=useState("Winner Yet To Be Decided");
  function Fun(inp,e)
  {
      if(turn%2==0)
      {
        var gettile=inp;
        if(filled[gettile]==0){
           document.getElementById(gettile).src=imge2;
           filled[gettile]=1
           for(var i=0;i<played.length;i++)
          for(var j=0;j<played.length;j++)
          {
            if(played[i][j]==gettile && played[i][j]!='o')
               played[i][j]='o';
          }
           turn++;
        }
        for(var k=0;k<played.length;k++)
        {
          var[a,b,c]=played[k];
          if(a==='o'&& b==='o'&&c==='o'){
            setstate("Player 'O' Wins The Round");
            for(var k=1;k<filled.length;k++)
               if(filled[k]==0)
                   filled[k]=1
          }
        }
      }
      else if(turn%2!=0)
      {
        var gettile=inp;
        if(filled[gettile]==0){
        document.getElementById(gettile).src=imge3;
        filled[gettile]=1;
        for(var i=0;i<played.length;i++)
          for(var j=0;j<played.length;j++)
          {
            if(played[i][j]==gettile)
               played[i][j]='x';
          }
        turn++;
        }
        for(var k=0;k<played.length;k++)
        {
          var[a,b,c]=played[k];
          if(a==='x'&& b==='x'&&c==='x'){
            setstate("Player 'X' Wins The Round");
            for(var k=1;k<filled.length;k++)
               if(filled[k]==0)
                   filled[k]=1
          }
        }
      }
     }
      
  return (
    <div className="container-fluid" style={{position:"absolute"}}>
      <img src={imge} alt="no show" className="image"></img>
        <div className="blackfilm">
          <div>
            <p className="para1">Welcome Players</p>
          </div>
        </div>
        <div className="makeblack">
          <div className="fullcontain">
          <div  style={{display:"flex"}}>
          <div className="makewhite" onClick={(e)=>{Fun(1,e)}} id="11">
            <img id="1" alt="" height="100%" width="100%"></img>
          </div>
          <div className="makewhite" onClick={(e)=>{Fun(2,e)}} id="12">
          <img id="2" alt="" height="100%" width="100%"></img>
          </div>
          <div className="makewhite" onClick={(e)=>{Fun(3,e)}} ic="13">
          <img id="3" alt="" height="100%" width="100%"></img>
          </div>
          </div>
          <div  style={{display:"flex"}}>
          <div className="makewhite" onClick={(e)=>{Fun(4,e)}}>
          <img id="4" alt="" height="100%" width="100%"></img>
          </div>
          <div className="makewhite" onClick={(e)=>{Fun(5,e)}}>
          <img id="5" alt="" height="100%" width="100%"></img>
          </div>
          <div className="makewhite" onClick={(e)=>{Fun(6,e)}}>
          <img id="6" alt="" height="100%" width="100%"></img>
          </div>
          </div>
          <div  style={{display:"flex"}}>
          <div className="makewhite" onClick={(e)=>{Fun(7,e)}}>
          <img id="7" alt="" height="100%" width="100%"></img>
          </div>
          <div className="makewhite" onClick={(e)=>{Fun(8,e)}}>
          <img id="8" alt="" height="100%" width="100%"></img>
          </div>
          <div className="makewhite" onClick={(e)=>{Fun(9,e)}}>
          <img id="9" alt="" height="100%" width="100%"></img>
          </div>
          </div>
          </div>
          <div className="declare">
            <h1 className="print1" id="print">{getstate}</h1>
          </div>
        </div>
        </div>
  );
}
export default App;

function count()
{

const s=document.getElementById('text').value
const c=Array.from(s);
var n=s.length;
var i,j;
  var count=0;
          for(i=1;i<n;i++)
        {  
              
              if( c[i]==' ' && (c[i-1]!=' '  &&  c[i-1]!='?' && c[i-1] !=',' && c[i-1]!='.'))
                  {
                         count++;
                  }
                  
         }
         if(c[i-1]!=' ' && c[i-1]!='?'&& c[i-1] !=',' && c[i-1]!='.' && c[i-1]!='!')
            count++;

            alert(count)
            document.getElementById('text').value=""

 





}

function myReplace(str, before, after) {
  var originalStr=str;
  var resultArr=str.split(" ");
  var lowercaseStr=originalStr.toLowerCase();
  var searchWord=before.toLowerCase();
 var arr=lowercaseStr.split(" ");
  console.log(arr);
  console.log(lowercaseStr);
  console.log(after);
  for(var i=0;i<arr.length;i++)
    {
        console.log(arr[i]===searchWord);
        console.log(arr[i]);
        console.log(searchWord);

      if(arr[i]===searchWord)
        {
          if(isUpperCase(before))
            {
          resultArr[i]=toLowerfirstword(after);

            }
          else
            {
              resultArr[i]=after;
            }
        }
    }
  return resultArr.join(" ");
}

function toLowerfirstword(str)
{
  var strArr=str.toLowerCase().split("");
  strArr[0]=strArr[0].toUpperCase();

  return strArr.join("");
}

function isUpperCase(str)
{
  var result= false;
   if(str.charCodeAt(0)>=65&&str.charCodeAt(0)<=90)
     {
       result=true;
     }

  return result;
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall");

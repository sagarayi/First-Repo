// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
var op1=0;
var op2=null;
var sym=null;
var done=0,switched=0,sign=0;
function calculator(input)
{
  if(done==1)
  {
    cls();
    display();
  }
  switch(parseInt(input))
  {
    case -2:cls();
            break;
    case -1:bs();
            break;
    case 0:;
    case 1:;
    case 2:;
    case 3:;
    case 4:;
    case 5:;
    case 6:;
    case 7:;
    case 8:;
    case 9:digit(input);
            break;
    case 11:;
    case 12:;
    case 13:;
    case 14:setSym(input);
            break;
    case 15:arith();
            //cls();
            break;
    }
    
  }
  function cls()
  {
    op1=0;
    op2=null;
    sym=null;
    done=0;
    switched=0;
    display();
  }
  function bs()
  {
   var res;
    if(switched==0)
    {
        res=document.getElementById("exp1").innerHTML;
        res=parseInt(res/10);
        op1=res;
        display();
    }
    else
    {
      res=document.getElementById("exp3").innerHTML; 
      res=parseInt(res/10);
      op2=res;
      if(op2==0)
      {
        op2=null;
        sym=null;
        switched=0;
      }
      display();
    } 
  }
  function digit(i)
  {
    var res;
    if(switched==0)
    {
        res=document.getElementById("exp1").innerHTML;
        res=res*10+parseInt(i);
        op1=res;
        display();
    }
    else
    {
      res=document.getElementById("exp3").innerHTML; 
      res=res*10+parseInt(i);
      op2=res;
      display();
    }

  }
  function setSym(i)
  {
    switch(parseInt(i))
    {
      case 11:sym="X";
              break;
      case 12:sym=" + ";
              break;
      case 13:sym=" - ";
              break;
      case 14:sym=" / ";
              break;
    }
    sign=parseInt(i);
    switched=1;
    display();
  }
  function arith()
  {var res;
    switch(sign)
    {
      case 11:res=op1*op2;
              break;
      case 12:res=op1+op2;
              break;
      case 13:res=op1-op2;
              break;
      case 14:res=op1/op2;
              break;
    }
    op1=res;
    op2=null;
    sym=null;
    done=1;
    display();
  }
  function display()
  {
    document.getElementById("exp1").innerHTML=op1;
    document.getElementById("exp2").innerHTML=sym;
    document.getElementById("exp3").innerHTML=op2;
  }

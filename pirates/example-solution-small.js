module.exports = exports = b=>{with(Math){x=y=a=0,c=PI/180;for(i of b)v=+i.slice(5),i>"W"?(x+=v*cos(r=a*c),y+=v*sin(r)):a+=v;return['TURN '+atan2(y,x)/c,'WALK '+hypot(x,y)]}}
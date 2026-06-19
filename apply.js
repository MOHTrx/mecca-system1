
const fetch = require("node-fetch");

const TG_TOKEN="8001069272:AAG7V7VWOpaujoXDBQBdk3Wi6h9-t0gMlOA";
const TG_CHATID="965684819";

exports.handler=async(event)=>{

if(event.httpMethod!=="POST"){
return {statusCode:405,body:"Method not allowed"};
}

const d=JSON.parse(event.body);

await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
chat_id:TG_CHATID,
text:`طلب جديد\n${d.name}\n${d.phone}\n${d.gov}`
})
});

return {statusCode:200,body:JSON.stringify({ok:true})};
};

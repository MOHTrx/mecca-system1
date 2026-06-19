
async function submit(){
  const data={
    name:document.getElementById("name").value,
    phone:document.getElementById("phone").value,
    age:document.getElementById("age").value,
    gov:document.getElementById("gov").value,
    edu:document.getElementById("edu").value,
    exp:document.getElementById("exp").value
  };

  if(!data.name||!data.phone||!data.age||!data.gov){
    alert("أكمل البيانات");
    return;
  }

  const res=await fetch("/.netlify/functions/apply",{
    method:"POST",
    body:JSON.stringify(data)
  });

  const r=await res.json();
  if(r.ok) alert("تم الإرسال");
  else alert("خطأ");
}

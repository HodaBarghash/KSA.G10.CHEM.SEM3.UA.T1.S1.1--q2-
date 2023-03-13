function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Odgj41doVo":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbztyHVFv3qmOsfNC786p32I-dJEcc4VJRYAeJJ84n6kfII6g_i8ZWX4JwkGn8cTmlREbA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}


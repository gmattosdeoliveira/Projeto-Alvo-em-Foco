function validarUsuários(usuemail, usunome, usucpf, ususenha) {
  let cademail = document.getElementById(email).value;
  let cadnome = document.getElementById(nome).value;
  let cadcpf = document.getElementById(cpf).value;
  let cadsenha = document.getElementById(password).value;
  
  if (usuemail == "")
      alert("Nome do usuário não pode estar em branco. Favor preenchê-lo!");
  else if (sussenha == "")
      alert("Senha não pode estar em branco. Favor preenchê-la!");
  else cadastrarUsuário(cademail, cadnome, cadcpf, cadsenha);
}

function cadastrarUsuário(cademail, cadnome, cadcpf, cadenha) {
  let novoUsuário = {code:cademail, user:cadnome, usercod:cadcpf, password:cadsenha};

  if (typeof(Storage) !== "undefined") {
      let usuários = localStorage.getItem("usuários");
      if (usuários == null) usuários = []; // Nenhum produto ainda foi cadastrado
      else usuários = JSON.parse(usuários);
      usuários.push(novoUsuário); // Adiciona um novo produto
      localStorage.setItem("usuários",JSON.stringify(usuários))
      alert("Foi cadastrado com sucesso");

      location.reload();
  } 
  else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}


//mascara cpf
function mascara_cpf() {
    let cpf = document.getElementById('cpf')
    if(cpf.value.length == 3 || cpf.value.length == 7) {
      cpf.value += "."
    } 
    else if (cpf.value.length == 11) {
      cpf.value += "-"
    }
}


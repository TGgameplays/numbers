// geração do valor aleatório
var y = math.floor(math.random() * 10 + 1);
// contagem de tentativas

// até acerto    
  
// função para o número enviado pelo usuário
var x = document.getElementById("guessfield").Value;
if(x == y)
{
alert("PARABENS!!!"playername+", voce acertou em")
  + guess + "twntativa(s)! ";
  guess= 1;
}








<div>


<label for="guessField">Insira sua resposta</label>
  <br>
  
  <input type = "text" id = "guessField" class = "guessField">
   
  </br>  
  <button type = "submit" onclick="submit()">enviar</button>
  <button onclick="playAgain()">jogar Novamente</button>
</div>
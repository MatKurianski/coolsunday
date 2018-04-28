import React from 'React';

export default <!DOCTYPE html>
<html lang="en">
<head>
  <title>COMIDINHAS - EACH USP</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
</head>
<style>
	
	@import url('https://fonts.googleapis.com/css?family=Do+Hyeon');
	

	.navbar-dark {
		background-color: #fdb523;
		font-family: 'Do Hyeon', sans-serif;
		color: green;
		font-size: 25px;
	}


	body {
		background-image: url("bg.jpg");
	}

	.card{
		background-color: #E0E0E0;
		max-height: 230px;

	}

	.row{
  		margin-top: 30px;
	}

	.card-text {
		margin-bottom: 50px;
		min-height: 100px;
		min-width: 100px;
		max-height: 200px;
	}

	.card-title {
		background-color: #fdb523;
	}

	.card-title-text {
		font-family: 'Do Hyeon', sans-serif;
	}

	.shadow {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  }


  
}


.img-fluid {  /* 50% 50% centers image in div */
  width: 100px;
  height: 100px;
}

</style>


<nav class="navbar navbar-expand-lg navbar-dark">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <button class="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    
  </button><a class="navbar-brand mr-auto" href="#"><img src="test.png" width="110px"></a>
  
  <div class="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
 
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Produtos<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="sobre\sobre.html">Quem somos?</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Para onde vamos?</a>
      </li>
    </ul>
  </div>
</nav>
	<h2 style="color: white; font-family: 'Do Hyeon', sans-serif" align=right>
		<span style="display:block; height: 30px;"> &emsp; Novo produto: <button type="button" class="btn btn-primary btn-sm" style="font-size: 12px">+</button></span>
	</h2>



<div class="container">

	<div class="row">
		<div class="col-md-3 col-sm-6 p-3">
			<div class="card text-center" > 
				<div class="card-block box shadow" >
					<div class="card-title"> 
						<h4 class="card-title-text">Bombom</h4>
					</div>
					<img src="http://www.makmassas.com.br/image/cache/data/loja/produtos/Bombons/nozes/bombom-nozes-1024x1024.jpg" class="img-fluid thumb1" width="110px">
					
					<div class="card-text">
						Preço: R$2,00.
						<br>
						<a style="margin-top: 10px;" href="#" class="btn btn-primary">Ver mais</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

		/*<div class="col-md-3 col-sm-6 p-3">
			<div class="card text-center" > 
				<div class="card-block box shadow" >
					<div class="card-title"> 
						<h4 class="card-title-text">Cones Winstom</h4>
					</div>
					<img src="https://i3.wp.com/negociodecozinha.com.br/wp-content/uploads/2018/04/receita-de-cone-trufado-para-vender-700x500.jpg" class="img-fluid" width="110px">
					
					<div class="card-text">
						Preço: R$ 5,00
						<br>
						<a style="margin-top: 10px;" href="#" class="btn btn-primary">Ver mais</a>
					</div>
				</div>
			</div>
		</div>

		<div class="col-md-3 col-sm-6 p-3">
			<div class="card text-center" > 
				<div class="card-block box shadow" >
					<div class="card-title"> 
						<h4 class="card-title-text">Dadinho</h4>
					</div>
					<img src="https://docemalu.vteximg.com.br/arquivos/ids/167239-1000-1000/5091-1.jpg?v=636008481138900000" class="img-fluid" width="110px">
					
					<div class="card-text">
						Preço: R$ 1,00
						<br>
						<a style="margin-top: 10px;" href="#" class="btn btn-primary">Ver mais</a>
					</div>
				</div>
			</div>
		</div>

		<div class="col-md-3 col-sm-6 p-3">
			<div class="card text-center" > 
				<div class="card-block box shadow" >
					<div class="card-title"> 
						<h4 class="card-title-text">Sonho de Valsa</h4>
					</div>
					<img src="https://www.lacta.com.br/application/uploads/products/sku/375928cd92bba63f03823b78e56b7f0f9cc0bcf5_3.png" class="img-fluid" width="110px">
					
					<div class="card-text">
						Preço: R$ 2,00
						<br>
						<a style="margin-top: 10px;" href="#" class="btn btn-primary">Ver mais</a>
					</div>
				</div>
			</div>
		</div>


		<div class="col-md-3 col-sm-6 p-3">
			<div class="card text-center" > 
				<div class="card-block box shadow" >
					<div class="card-title"> 
						<h4 class="card-title-text">Sorvete</h4>
					</div>
					<img src="https://img.itdg.com.br/tdg/images/recipes/000/004/730/286382/286382_original.jpg?mode=crop&width=370&height=278" class="img-fluid" width="110px">
					
					<div class="card-text">
						Preço: R$ 1,50
						<br>
						<a style="margin-top: 10px;" href="#" class="btn btn-primary">Ver mais</a>
					</div>
				</div>
			</div>
		</div>

		<div class="col-md-3 col-sm-6 p-3">
			<div class="card text-center" > 
				<div class="card-block box shadow" >
					<div class="card-title"> 
						<h4 class="card-title-text">Gelinho</h4>
					</div>
					<img src="http://www.tudogostoso.com.br/images/recipes/000/143/130/82978/82978_original.jpg?mode=crop&width=600&height=450" class="img-fluid" width="110px">
					
					<div class="card-text">
						Preço: R$ 0,80
						<br>
						<a style="margin-top: 10px;" href="#" class="btn btn-primary">Ver mais</a>
					</div>
				</div>
			</div>
		</div>

		<div class="col-md-3 col-sm-6 p-3">
			<div class="card text-center" > 
				<div class="card-block box shadow" >
					<div class="card-title"> 
						<h4 class="card-title-text">7 Belo</h4>
					</div>
					<img src="https://www.otvfoco.com.br/wp-content/uploads/2013/08/Belo.jpg" class="img-fluid" width="110px">
					
					<div class="card-text">
						Preço: R$ 69,00
						<br>
						<a style="margin-top: 10px;" href="#" class="btn btn-primary">Ver mais</a>
					</div>
				</div>
			</div>
		</div>

		<div class="col-md-3 col-sm-6 p-3">
			<div class="card text-center" > 
				<div class="card-block box shadow" >
					<div class="card-title"> 
						<h4 class="card-title-text">Pururuca com Ketchup</h4>
					</div>
					<img src="http://www.crispel.com.br/uProdutos/CdcPZJKTAP/CdcPZJKTAP_800_.jpg" class="img-fluid" width="110px">
					
					<div class="card-text">
						Preço: R$ 1,00
						<br>
						<a style="margin-top: 10px;" href="#" class="btn btn-primary">Ver mais</a>
					</div>
				</div>
			</div>
		</div>*/
		



</body>
</html>;
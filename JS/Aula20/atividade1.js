// uma loja tem um estoque de 10 produtos. Os preços estão em um array de 10 posicoes
// com o método forEach mostre no console:
//  o preço original, o preço com desconto de 10% para pagamentos a vista e o preço com adicional da maquineta (para parcelamentos) de 15% a mais.

let precosProdutos = [ 150, 280, 50, 100, 200, 300, 400, 500, 600, 700]

precosProdutos.forEach((preco) => {
    let precoVista = preco * 0.9
    let precoParcelado = preco * 1.15
        console.log(`O preço original é ${preco}. O preço a vista com 10% de desconto é ${precoVista}. Já o preço parcelado com o juros da marquineta é ${precoParcelado}`)
})
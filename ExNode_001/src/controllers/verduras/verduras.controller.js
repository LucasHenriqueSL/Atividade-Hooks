module.exports = {
    pegar (req, res) {
        const verduras = [
            {id:1, nome: "alface", preco: "2.32", qntd: "unidade"},
            {id:2, nome: "cebolinha", preco: "1.20", qntd: "400g"},
            {id:3, nome: "couve", preco: "4.50", qntd: "1kg"},
            {id:4, nome: "Salsa", preco: "0.75", qntd: "1kg"},
            {id:5, nome: "Escarola", preco: "40.90", qntd: "unidade"},
            {id:6, nome: "hortelã", preco: "5.21", qntd: "900g"},
            {id:7, nome: "repolho", preco: "2.36", qntd: "unidade"},
            {id:8, nome: "alho-poró", preco: "2.00", qntd: "300g"},
            {id:9, nome: "coentro", preco: "1.00", qntd: "200g"},
            {id:10, nome: "rúcula", preco: "4.21", qntd: "unidade"},
            {id:11, nome: "almeirão", preco: "7.53", qntd: "unidade"},
            {id:12, nome: "catalonha", preco: "3.00", qntd: "800g"},
            {id:13, nome: "nabo", preco: "4.97", qntd: "unidade"},
            {id:14, nome: "louro", preco: "6.59", qntd: "100g"},
            {id:15, nome: "erva-doce", preco: "2.90", qntd: "100g"},
            {id:16, nome: "agrião", preco: "0.45", qntd: "350g"},
            {id:17, nome: "brócolis", preco: "0.70", qntd: "unidade"},
            {id:18, nome: "chicória", preco: "80.90", qntd: "890g"},
            {id:19, nome: "mostarda", preco: "10.00", qntd: "800g"},
            {id:20, nome: "espinafre", preco: "0.10", qntd: "unidade"}
        ]

        res.status(201).json(verduras);
    }
}
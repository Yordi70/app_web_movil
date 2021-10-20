const ctrl = {};

ctrl.index = (req, res) => {
    res.render('index.hbs');
};

ctrl.sumar = (req, res) => {
    let resultado = [];
    var numero1 = req.body.numero1;
    var numero2 = req.body.numero2;
    resultado.push({
        "resultado": (parseInt(numero1) + parseInt(numero2))
    });
    return res.status(200).json(resultado);
};

module.exports = ctrl;
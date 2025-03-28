//Métodos: Index, show, update, store, destroy
/*
Index: Listagem de sessoes
Store: Criar uma nova sessão (Fazer um novo login por ex)
Show: Quando quiser listar apenas uma sessão
Update: Quando queremos alterar alguma sessão
Destroy: Quando queremos deletar alguma sessão

*/

import User from "../models/User.js";

class SessionController {
  async store(req, res) {
    const email = req.body.email;

    let user = await User.create({ email: email });

    return res.json(user);
  }
}

export default new SessionController();

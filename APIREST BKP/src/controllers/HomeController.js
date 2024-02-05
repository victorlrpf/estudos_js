import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Victor',
      sobrenome: 'Ferreira',
      email: 'vferreir4@gmail.com',
      idade: 21,
      peso: 250,
      altura: 1.8,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

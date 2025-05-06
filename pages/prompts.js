import { useState } from "react";

export default function Prompts() {
  const [formData, setFormData] = useState({
    titulo: "",
    direitos: "",
    fatos: "",
    fundamentacao: "",
    liminar: "",
    tutela: "",
    tema: "",
  });

  const [lista, setLista] = useState([
    {
      titulo: "Fixação de Alimentos",
      direitos: "Direito à alimentação; Proteção à criança; Responsabilidade dos pais",
      fatos: "O autor é pai da criança menor e vem pagando pensão de forma informal. Solicita fixação judicial dos alimentos para garantir o sustento do menor.",
      fundamentacao: "Com base no art. 1.694 e seguintes do Código Civil, é dever dos pais assegurar os alimentos necessários aos filhos menores.",
      liminar: "Sim",
      tutela: "Sim",
      tema: "Direito de Família"
    },
    {
      titulo: "Regulamentação de Guarda",
      direitos: "Direito à convivência familiar; Melhor interesse do menor",
      fatos: "O requerente deseja regularizar a guarda do menor, que vive sob seus cuidados desde o nascimento. A mãe/pai concorda com a guarda definitiva.",
      fundamentacao: "Nos termos do art. 227 da Constituição Federal e do ECA, a guarda deve ser decidida no melhor interesse da criança.",
      liminar: "Não",
      tutela: "Sim",
      tema: "Direito de Família"
    },
    {
      titulo: "Execução Judicial",
      direitos: "Cumprimento de sentença; Responsabilidade patrimonial",
      fatos: "A parte contrária descumpriu obrigação pactuada judicialmente. Requer o cumprimento da sentença com penhora de bens.",
      fundamentacao: "Conforme art. 513 do CPC, é possível exigir o cumprimento de obrigação reconhecida judicialmente.",
      liminar: "Não",
      tutela: "Não",
      tema: "Direito Processual"
    },
    {
      titulo: "Embargos de Declaração",
      direitos: "Contraditório e ampla defesa; Preclusão mitigada",
      fatos: "O autor apresenta embargos de declaração contra sentença que contém omissão relevante quanto à análise do pedido subsidiário.",
      fundamentacao: "O art. 1.022 do CPC permite a interposição de embargos para suprir omissões, contradições ou obscuridades.",
      liminar: "Não",
      tutela: "Não",
      tema: "Direito Processual"
    },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLista([...lista, formData]);
    setFormData({
      titulo: "",
      direitos: "",
      fatos: "",
      fundamentacao: "",
      liminar: "",
      tutela: "",
      tema: "",
    });
    alert("Prompt cadastrado com sucesso!");
  };

  return (
    <div className="p-8">
      <a href="/" className="text-blue-600 underline mb-4 block">⬅ Voltar</a>
      <h1 className="text-3xl font-bold text-center mb-8">PROMPTS</h1>

      <table className="w-full border mb-8 text-sm">
        <thead>
          <tr className="border-b bg-gray-100 text-left">
            <th className="px-2 py-1">#</th>
            <th className="px-2 py-1">Temas</th>
            <th className="px-2 py-1">Caso</th>
            <th className="px-2 py-1">Título</th>
            <th className="px-2 py-1">Direitos</th>
            <th className="px-2 py-1">Fundamentos</th>
            <th className="px-2 py-1">Liminar</th>
            <th className="px-2 py-1">Tutela</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="px-2 py-1">{index + 1}</td>
              <td className="px-2 py-1">{item.tema}</td>
              <td className="px-2 py-1">{item.fatos}</td>
              <td className="px-2 py-1">{item.titulo}</td>
              <td className="px-2 py-1">{item.direitos}</td>
              <td className="px-2 py-1">{item.fundamentacao}</td>
              <td className="px-2 py-1">{item.liminar}</td>
              <td className="px-2 py-1">{item.tutela}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-4">Cadastrar Novo Modelo</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="titulo" placeholder="Título" value={formData.titulo} onChange={handleChange} className="border p-2 rounded" />
        <textarea name="direitos" placeholder="Gere 5 direitos (separando-os por ;)" value={formData.direitos} onChange={handleChange} className="border p-2 rounded" />

        <textarea name="fatos" placeholder="Argumente o fato descrito…" value={formData.fatos} onChange={handleChange} className="border p-2 rounded col-span-2" />
        <textarea name="fundamentacao" placeholder="Fundamente em 1 parágrafo o direito em questão:" value={formData.fundamentacao} onChange={handleChange} className="border p-2 rounded col-span-2" />

        <select name="liminar" value={formData.liminar} onChange={handleChange} className="border p-2 rounded">
          <option value="">Possui pedido de Liminar?</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>

        <select name="tutela" value={formData.tutela} onChange={handleChange} className="border p-2 rounded">
          <option value="">Possui pedido de Tutela?</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>

        <div className="col-span-2">
          <input
            list="temas"
            name="tema"
            value={formData.tema}
            onChange={handleChange}
            placeholder="Selecione ou digite o tema"
            className="border p-2 rounded w-full"
          />
          <datalist id="temas">
            <option value="Direito Civil" />
            <option value="Direito de Família" />
            <option value="Sucessões" />
            <option value="Direito do Consumidor" />
            <option value="Direito Constitucional" />
            <option value="Direito Imobiliário" />
            <option value="Direito Tributário" />
            <option value="Direito Previdenciário" />
            <option value="Direito Penal" />
            <option value="Direito Administrativo" />
            <option value="Direito Empresarial" />
          </datalist>
        </div>

        <button type="submit" className="bg-gray-700 text-white py-2 px-4 rounded col-span-2">Enviar</button>
      </form>
    </div>
  );
}

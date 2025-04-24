import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function embedAndInsert(artigo) {
  const embeddingResponse = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: artigo.texto,
  });

  const [{ embedding }] = embeddingResponse.data;

  const { error } = await supabase.from("artigos_legais").insert({
    codigo: "CPC",
    lei: "Lei nº 13.105/2015",
    livro: "Livro I",
    titulo: "Das Normas Fundamentais",
    capitulo: "Capítulo I",
    artigo: artigo.artigo,
    texto: artigo.texto,
    url: artigo.url,
    embedding,
  });

  if (error) throw new Error(error.message);

  return embedding;
}


import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getOutfitRecommendation = async (city: string, temp?: number) => {
  const prompt = `Como Estilo Día Fashion Intelligence (Contexto: Enero 2026), recomienda un outfit detallado para ${city} ${temp ? `con una temperatura de ${temp}°C` : ''}. 
  Usa tendencias de 2026 como 'Capas de Crochet', 'Funnel Neck', o 'Azul Atlántico'. 
  Devuelve la respuesta en formato JSON con las claves: "title", "description", "items" (array de strings) y "colorPalette" (string).`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            items: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            colorPalette: { type: Type.STRING }
          },
          required: ["title", "description", "items", "colorPalette"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error fetching recommendation:", error);
    return null;
  }
};

export const chatWithStyleBot = async (history: { role: 'user' | 'model', parts: { text: string }[] }[], message: string) => {
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "Eres 'StyleBot Estilo Día', un asistente de moda premium para 2026. Respondes dudas sobre etiquetas de vestimenta, buscas tiendas físicas imaginarias de 2026 y explicas combinaciones de azul cobalto y blanco según el tono de piel. Tu tono es profesional, elegante y editorial. Habla siempre en español.",
    }
  });

  try {
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("StyleBot Error:", error);
    return "Lo siento, mi conexión con el oráculo de moda se ha interrumpido momentáneamente.";
  }
};

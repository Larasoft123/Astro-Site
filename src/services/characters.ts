import { API_URL } from "astro:env/server"; 
import { type Character } from "../types/types.ts";

export async function getSingleCharacter(id: number) {
    try {
      const res = await fetch(`${API_URL}/${id}`);
      const data = await res.json();
      return data as Character;
    } catch (error) {
      console.error(error);
    }
  }
  

export async function getCharacters() {
  
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      return data.results as Array<Character>;
    }
    catch (error) {
      console.error("no se puedo obtener los datos");
      console.error(error);
    }
  }
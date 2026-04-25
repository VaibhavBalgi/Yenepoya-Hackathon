// src/utils/decoder.js
export function decodeTransaction(text) {
  const lower = text.toLowerCase();

  if (lower.includes("swiggy"))
    return { name: "Swiggy", category: "Food" };

  if (lower.includes("amazon"))
    return { name: "Amazon", category: "Shopping" };

  if (lower.includes("uber"))
    return { name: "Uber", category: "Travel" };

  return { name: "Unknown", category: "Other" };
}
export const apiUrl = "/api"

export function getConfig(data, key) {
  for(let i = 0; i < data.docs.length; i++) {
    if(data.docs[i].key == key) {
      return data.docs[i].type == "text" ? data.docs[i].value : Number.parseFloat(data.docs[i].value);
    }
  }
  return null;
}

export function t(translations, key, locale) {
  for(let i = 0; i < translations.length; i++) {
    if(translations[i].key == key) {
      let content = translations[i]["content_" + locale];
      return content ? content : "["+ key + "]";
    }
  }
  return "["+ key + "]";
}
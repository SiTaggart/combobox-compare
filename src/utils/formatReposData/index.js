const formatReposData = (language, data) => {
  return {
    "optionsLabel": `${language} Repos`,
    "optionItems": data.items.map(item => {
      return { 'id': item.id, 'optionLabel': item.full_name }
    })
  }
}

export default formatReposData

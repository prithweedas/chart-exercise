export const populateDistrictDropDown = (elSelector, datas) => {
  const districtInput = document.querySelector(`${elSelector}`)
  const allOption = document.createElement('option')
  allOption.setAttribute('value', 'All')
  allOption.textContent = 'All'

  const options = [allOption]
  options.push(
    ...datas.map(data => {
      const option = document.createElement('option')
      option.setAttribute('value', data.district)
      option.textContent = data.district
      return option
    })
  )

  options.forEach(option => {
    districtInput.appendChild(option)
  })
}

export const populateYearDropDown = (elSelector, datas) => {
  const yearInput = document.querySelector(`${elSelector}`)
  const allOption = document.createElement('option')
  allOption.setAttribute('value', 'All')
  allOption.textContent = 'All'

  const options = [allOption]
  options.push(
    ...Object.keys(datas[0].rain).map(year => {
      const option = document.createElement('option')
      option.setAttribute('value', year)
      option.textContent = year
      return option
    })
  )

  options.forEach(option => {
    yearInput.appendChild(option)
  })
}

export const filterDataByDistrict = district => datas =>
  district === 'All' ? datas : datas.filter(data => data.district === district)

export const filterDataByYear = year => {
  return datas =>
    year === 'All'
      ? datas
      : datas.map(data => {
          return {
            district: data.district,
            rain: {
              [year]: data.rain[year]
            }
          }
        })
}

export const filterPipeLine = (...filters) => datas =>
  filters.reduce((acc, currentFilter) => {
    acc = currentFilter(acc || datas)
    return acc
  }, null)

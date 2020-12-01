const useToUpperCaseFirstLetter = () => {
  const upperCaseFirstLetter = (string: string): string => {
    if (string !== null && string.length > 0) {
      const splittedName = string.split('')
      const upperCaseLetter = splittedName[0].toUpperCase()
      splittedName[0] = upperCaseLetter
      return splittedName.join('')
    }
    return ''
  }

  return upperCaseFirstLetter
}

export default useToUpperCaseFirstLetter

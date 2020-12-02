const useToUpperCaseFirstLetter = () => {
  const upperCaseFirstLetter = (string: string): string => {
    if (string !== null && string.length > 0) {
      return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
    }
    return ''
  }

  return upperCaseFirstLetter
}

export default useToUpperCaseFirstLetter


export const copyToClipboard = (data :string): Promise<boolean> => {
   return navigator.clipboard.writeText(data)
      .then(() => {
       return true
      })
      .catch((error) => {
        return false
      });
  }
  
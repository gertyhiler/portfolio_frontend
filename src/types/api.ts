
export type apiResponse = {
  id: number
  attributes: {
    headline: string
    description: string
    link: string
    screenshot: {
      data: {
        attributes: {
          formats: {
            large: {
              url: string
            }
          }
        }
      }
    }
    teches: {
      data: TechType[]
    }
  }
}

export type TechType = {
  attributes: {
    name: string
    logo: {
      data: {
        id: number
        attributes: {
          name: string
          url: string
        }
      }
    }
  }
}
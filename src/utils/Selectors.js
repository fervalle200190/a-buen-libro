export const tagSelectors = [
     {
          label: "Titulo",
          fn: (value) => ({ name: value }),
     },
     {
          label: "Genero",
          fn: (value) => ({ genre: [value] }),
     },
     {
          label: "Rango de edad",
          fn: (value) => ({ ageRange: [value] }),
     },
     {
          label: "Autor",
          fn: (value) => ({ authorsNames: [value] }),
     },
     {
          label: "Año",
          fn: (value) => ({ startYear: value }),
     },
]

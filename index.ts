console.log('Hello TypeScript!')

// Implicit Types
let greeting = 'Hello World!'


// Explicit Types
let firstName: string = 'Code'
let age: number = 16

// Tuple
type StringAndNumber = [string, number]

let x: StringAndNumber = ['Hello', 10]

// Enums
enum Continents {
	North_America, // 0
	South_America, // 1
	Africa, // 2
	Europe, // 3
	Asia, // 4
	Antarctica, // 5
	Australia // 6
}

var region = Continents.Africa
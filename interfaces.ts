// Interface : Kinda like blueprints for objects
interface User {
	name: String
	id: number
	age?: number
}

const user: User = {
	id: 0,
	name: 'The Code Ninja',
	age: 16
}

// Composing Types -> Unions
type WindowStates = 'open' | 'closed' | 'minimized'
type LockStates = 'locked' | 'unlocked'
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9

let windowState: WindowStates = 'minimized'
let oddNumber: OddNumbersUnderTen = 5

const getLength = (param: string | string[]) => {
	return param.length
}

getLength(windowState)
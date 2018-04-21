export class User {
	winner: boolean;
	edit: boolean;
	constructor(public firstName: string, public lastName: string, public email: string, public phone: string, public date: string) { }
}
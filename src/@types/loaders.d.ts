interface ILoader {
	load(path: string, cb: ( collada: any )=> any): any;
}

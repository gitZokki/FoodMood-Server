import { IRating } from './rating';

interface IFood {
	title: string;
	categoryId: number;
	rating: IRating;
	entityId?: number;
	comment?: string;
	description?: string;
	price?: number;
	brand?: string;
	percentage?: number;
	contentVolume?: number;
	lastEdit?: string;
}

export class Food implements IFood {
	constructor(
		public title: string,
		public categoryId: number,
		public rating: IRating,
		public entityId?: number,
		public comment?: string,
		public description?: string,
		public price?: number,
		public brand?: string,
		public percentage?: number,
		public contentVolume?: number,
		public lastEdit?: string) {
	}

	public static getFromJson(json: Food | IFood): IFood {
		return new Food(
			json.title,
			json.categoryId,
			json.rating || {},
			json.entityId,
			json.comment,
			json.description,
			json.price,
			json.brand,
			json.percentage,
			json.contentVolume
		);
	}

	public static getDBFood(json: Food | IFood): IFood {
		const food = this.getFromJson(json);
		delete food.entityId;
		delete food.lastEdit;
		food.rating = JSON.stringify(food.rating) as never;

		return food;
	}
}
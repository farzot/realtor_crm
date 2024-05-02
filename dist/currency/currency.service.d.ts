import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
export declare class CurrencyService {
    create(createCurrencyDto: CreateCurrencyDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCurrencyDto: UpdateCurrencyDto): string;
    remove(id: number): string;
}

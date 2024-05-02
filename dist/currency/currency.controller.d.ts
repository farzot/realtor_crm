import { CurrencyService } from './currency.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
export declare class CurrencyController {
    private readonly currencyService;
    constructor(currencyService: CurrencyService);
    create(createCurrencyDto: CreateCurrencyDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCurrencyDto: UpdateCurrencyDto): string;
    remove(id: string): string;
}

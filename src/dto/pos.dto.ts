export class PosDto {
    currency: string;
    posType: string;
    qrToken: string;
    simpleCode: string;
    isActive: boolean;
    storeId: string;

    constructor(
        currency: string,
        posType: string,
        qrToken: string,
        simpleCode: string,
        isActive: boolean,
        storeId: string
    ) {
        this.currency = currency
        this.posType = posType
        this.qrToken = qrToken
        this.simpleCode = simpleCode
        this.isActive = isActive
        this.storeId = storeId
    }
}

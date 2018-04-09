import { RestObject, SObject, sField, SalesforceFieldType, SFLocation, SFieldProperties } from "ts-force";

/**
 * Immutable Property Interface for Account
 */
export interface AccountFields {
    readonly id?: string;
    readonly isDeleted?: boolean;
    readonly masterRecord?: AccountFields;
    readonly masterRecordId?: string;
    readonly name?: string;
    readonly type?: string;
    readonly parent?: AccountFields;
    readonly parentId?: string;
    readonly billingStreet?: string;
    readonly billingCity?: string;
    readonly billingState?: string;
    readonly billingPostalCode?: string;
    readonly billingCountry?: string;
    readonly billingLatitude?: number;
    readonly billingLongitude?: number;
    readonly billingGeocodeAccuracy?: string;
    readonly billingAddress?: string;
    readonly shippingStreet?: string;
    readonly shippingCity?: string;
    readonly shippingState?: string;
    readonly shippingPostalCode?: string;
    readonly shippingCountry?: string;
    readonly shippingLatitude?: number;
    readonly shippingLongitude?: number;
    readonly shippingGeocodeAccuracy?: string;
    readonly shippingAddress?: string;
    readonly phone?: string;
    readonly fax?: string;
    readonly accountNumber?: string;
    readonly website?: string;
    readonly photoUrl?: string;
    readonly sic?: string;
    readonly industry?: string;
    readonly annualRevenue?: number;
    readonly numberOfEmployees?: number;
    readonly ownership?: string;
    readonly tickerSymbol?: string;
    readonly description?: string;
    readonly rating?: string;
    readonly site?: string;
    readonly ownerId?: string;
    readonly createdDate?: Date;
    readonly createdById?: string;
    readonly lastModifiedDate?: Date;
    readonly lastModifiedById?: string;
    readonly systemModstamp?: Date;
    readonly lastActivityDate?: Date;
    readonly lastViewedDate?: Date;
    readonly lastReferencedDate?: Date;
    readonly isCustomerPortal?: boolean;
    readonly jigsaw?: string;
    readonly jigsawCompanyId?: string;
    readonly cleanStatus?: string;
    readonly accountSource?: string;
    readonly dunsNumber?: string;
    readonly tradestyle?: string;
    readonly naicsCode?: string;
    readonly naicsDesc?: string;
    readonly yearStarted?: string;
    readonly sicDesc?: string;
    readonly dandbCompanyId?: string;
    readonly customerPriority?: string;
    readonly sLA?: string;
    readonly active?: string;
    readonly numberofLocations?: number;
    readonly upsellOpportunity?: string;
    readonly sLASerialNumber?: string;
    readonly sLAExpirationDate?: Date;
}

/**
 * Generated class for Account
 */
export class Account extends RestObject implements AccountFields {
    @sField({ apiName: 'Id', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ID, salesforceLabel: 'Account ID' })
    public id: string;
    @sField({ apiName: 'IsDeleted', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Deleted' })
    public isDeleted: boolean;
    @sField({ apiName: 'MasterRecord', readOnly: true, required: false, reference: () => { return Account }, childRelationship: false, salesforceType: undefined, salesforceLabel: '' })
    public masterRecord: Account;
    @sField({ apiName: 'MasterRecordId', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Master Record ID' })
    public masterRecordId: string;
    @sField({ apiName: 'Name', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Account Name' })
    public name: string;
    @sField({ apiName: 'Type', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Account Type' })
    public type: string;
    @sField({ apiName: 'Parent', readOnly: true, required: false, reference: () => { return Account }, childRelationship: false, salesforceType: undefined, salesforceLabel: '' })
    public parent: Account;
    @sField({ apiName: 'ParentId', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Parent Account ID' })
    public parentId: string;
    @sField({ apiName: 'BillingStreet', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Billing Street' })
    public billingStreet: string;
    @sField({ apiName: 'BillingCity', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Billing City' })
    public billingCity: string;
    @sField({ apiName: 'BillingState', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Billing State/Province' })
    public billingState: string;
    @sField({ apiName: 'BillingPostalCode', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Billing Zip/Postal Code' })
    public billingPostalCode: string;
    @sField({ apiName: 'BillingCountry', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Billing Country' })
    public billingCountry: string;
    @sField({ apiName: 'BillingLatitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Billing Latitude' })
    public billingLatitude: number;
    @sField({ apiName: 'BillingLongitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Billing Longitude' })
    public billingLongitude: number;
    @sField({ apiName: 'BillingGeocodeAccuracy', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Billing Geocode Accuracy' })
    public billingGeocodeAccuracy: string;
    @sField({ apiName: 'BillingAddress', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ADDRESS, salesforceLabel: 'Billing Address' })
    public billingAddress: string;
    @sField({ apiName: 'ShippingStreet', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Shipping Street' })
    public shippingStreet: string;
    @sField({ apiName: 'ShippingCity', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Shipping City' })
    public shippingCity: string;
    @sField({ apiName: 'ShippingState', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Shipping State/Province' })
    public shippingState: string;
    @sField({ apiName: 'ShippingPostalCode', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Shipping Zip/Postal Code' })
    public shippingPostalCode: string;
    @sField({ apiName: 'ShippingCountry', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Shipping Country' })
    public shippingCountry: string;
    @sField({ apiName: 'ShippingLatitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Shipping Latitude' })
    public shippingLatitude: number;
    @sField({ apiName: 'ShippingLongitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Shipping Longitude' })
    public shippingLongitude: number;
    @sField({ apiName: 'ShippingGeocodeAccuracy', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Shipping Geocode Accuracy' })
    public shippingGeocodeAccuracy: string;
    @sField({ apiName: 'ShippingAddress', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ADDRESS, salesforceLabel: 'Shipping Address' })
    public shippingAddress: string;
    @sField({ apiName: 'Phone', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Account Phone' })
    public phone: string;
    @sField({ apiName: 'Fax', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Account Fax' })
    public fax: string;
    @sField({ apiName: 'AccountNumber', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Account Number' })
    public accountNumber: string;
    @sField({ apiName: 'Website', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.URL, salesforceLabel: 'Website' })
    public website: string;
    @sField({ apiName: 'PhotoUrl', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.URL, salesforceLabel: 'Photo URL' })
    public photoUrl: string;
    @sField({ apiName: 'Sic', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'SIC Code' })
    public sic: string;
    @sField({ apiName: 'Industry', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Industry' })
    public industry: string;
    @sField({ apiName: 'AnnualRevenue', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.CURRENCY, salesforceLabel: 'Annual Revenue' })
    public annualRevenue: number;
    @sField({ apiName: 'NumberOfEmployees', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.INT, salesforceLabel: 'Employees' })
    public numberOfEmployees: number;
    @sField({ apiName: 'Ownership', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Ownership' })
    public ownership: string;
    @sField({ apiName: 'TickerSymbol', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Ticker Symbol' })
    public tickerSymbol: string;
    @sField({ apiName: 'Description', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Account Description' })
    public description: string;
    @sField({ apiName: 'Rating', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Account Rating' })
    public rating: string;
    @sField({ apiName: 'Site', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Account Site' })
    public site: string;
    @sField({ apiName: 'OwnerId', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Owner ID' })
    public ownerId: string;
    @sField({ apiName: 'CreatedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Created Date' })
    public createdDate: Date;
    @sField({ apiName: 'CreatedById', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Created By ID' })
    public createdById: string;
    @sField({ apiName: 'LastModifiedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Modified Date' })
    public lastModifiedDate: Date;
    @sField({ apiName: 'LastModifiedById', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Last Modified By ID' })
    public lastModifiedById: string;
    @sField({ apiName: 'SystemModstamp', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'System Modstamp' })
    public systemModstamp: Date;
    @sField({ apiName: 'LastActivityDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATE, salesforceLabel: 'Last Activity' })
    public lastActivityDate: Date;
    @sField({ apiName: 'LastViewedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Viewed Date' })
    public lastViewedDate: Date;
    @sField({ apiName: 'LastReferencedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Referenced Date' })
    public lastReferencedDate: Date;
    @sField({ apiName: 'IsCustomerPortal', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Customer Portal Account' })
    public isCustomerPortal: boolean;
    @sField({ apiName: 'Jigsaw', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Data.com Key' })
    public jigsaw: string;
    @sField({ apiName: 'JigsawCompanyId', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Jigsaw Company ID' })
    public jigsawCompanyId: string;
    @sField({ apiName: 'CleanStatus', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Clean Status' })
    public cleanStatus: string;
    @sField({ apiName: 'AccountSource', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Account Source' })
    public accountSource: string;
    @sField({ apiName: 'DunsNumber', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'D-U-N-S Number' })
    public dunsNumber: string;
    @sField({ apiName: 'Tradestyle', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Tradestyle' })
    public tradestyle: string;
    @sField({ apiName: 'NaicsCode', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'NAICS Code' })
    public naicsCode: string;
    @sField({ apiName: 'NaicsDesc', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'NAICS Description' })
    public naicsDesc: string;
    @sField({ apiName: 'YearStarted', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Year Started' })
    public yearStarted: string;
    @sField({ apiName: 'SicDesc', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'SIC Description' })
    public sicDesc: string;
    @sField({ apiName: 'DandbCompanyId', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'D&B Company ID' })
    public dandbCompanyId: string;
    @sField({ apiName: 'CustomerPriority__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Customer Priority' })
    public customerPriority: string;
    @sField({ apiName: 'SLA__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'SLA' })
    public sLA: string;
    @sField({ apiName: 'Active__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Active' })
    public active: string;
    @sField({ apiName: 'NumberofLocations__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Number of Locations' })
    public numberofLocations: number;
    @sField({ apiName: 'UpsellOpportunity__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Upsell Opportunity' })
    public upsellOpportunity: string;
    @sField({ apiName: 'SLASerialNumber__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'SLA Serial Number' })
    public sLASerialNumber: string;
    @sField({ apiName: 'SLAExpirationDate__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATE, salesforceLabel: 'SLA Expiration Date' })
    public sLAExpirationDate: Date;

    constructor(fields?: AccountFields) {
        super('Account');
        this.id = void 0;
        this.isDeleted = void 0;
        this.masterRecord = void 0;
        this.masterRecordId = void 0;
        this.name = void 0;
        this.type = void 0;
        this.parent = void 0;
        this.parentId = void 0;
        this.billingStreet = void 0;
        this.billingCity = void 0;
        this.billingState = void 0;
        this.billingPostalCode = void 0;
        this.billingCountry = void 0;
        this.billingLatitude = void 0;
        this.billingLongitude = void 0;
        this.billingGeocodeAccuracy = void 0;
        this.billingAddress = void 0;
        this.shippingStreet = void 0;
        this.shippingCity = void 0;
        this.shippingState = void 0;
        this.shippingPostalCode = void 0;
        this.shippingCountry = void 0;
        this.shippingLatitude = void 0;
        this.shippingLongitude = void 0;
        this.shippingGeocodeAccuracy = void 0;
        this.shippingAddress = void 0;
        this.phone = void 0;
        this.fax = void 0;
        this.accountNumber = void 0;
        this.website = void 0;
        this.photoUrl = void 0;
        this.sic = void 0;
        this.industry = void 0;
        this.annualRevenue = void 0;
        this.numberOfEmployees = void 0;
        this.ownership = void 0;
        this.tickerSymbol = void 0;
        this.description = void 0;
        this.rating = void 0;
        this.site = void 0;
        this.ownerId = void 0;
        this.createdDate = void 0;
        this.createdById = void 0;
        this.lastModifiedDate = void 0;
        this.lastModifiedById = void 0;
        this.systemModstamp = void 0;
        this.lastActivityDate = void 0;
        this.lastViewedDate = void 0;
        this.lastReferencedDate = void 0;
        this.isCustomerPortal = void 0;
        this.jigsaw = void 0;
        this.jigsawCompanyId = void 0;
        this.cleanStatus = void 0;
        this.accountSource = void 0;
        this.dunsNumber = void 0;
        this.tradestyle = void 0;
        this.naicsCode = void 0;
        this.naicsDesc = void 0;
        this.yearStarted = void 0;
        this.sicDesc = void 0;
        this.dandbCompanyId = void 0;
        this.customerPriority = void 0;
        this.sLA = void 0;
        this.active = void 0;
        this.numberofLocations = void 0;
        this.upsellOpportunity = void 0;
        this.sLASerialNumber = void 0;
        this.sLAExpirationDate = void 0;
        Object.assign(this, fields)
    }

    public static API_NAME: 'Account' = 'Account';
    private static _fields: { [P in keyof AccountFields]: SFieldProperties; };

    public static get FIELDS() {
        return this._fields = this._fields ? this._fields : Account.getPropertiesMeta<AccountFields, Account>(Account)
    }

    public static async retrieve(qry: string): Promise<Account[]> {
        return await RestObject.query<Account>(Account, qry);
    }

    public static fromSFObject(sob: SObject): Account {
        return new Account().mapFromQuery(sob);
    }

    public toImmutable(): AccountFields {
        return this.clone();
    }
}

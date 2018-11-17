import { Rest, RestObject, SObject, sField, SalesforceFieldType, SFLocation, SFieldProperties, FieldResolver, SOQLQueryParams, buildQuery, FieldProps } from "ts-force";
import { Contact } from "./";

export type AccountFields = FieldProps<Account>;

/**
 * Generated class for Account
 */
export class Account extends RestObject {
    @sField({ apiName: 'Contacts', createable: false, updateable: false, required: false, reference: () => { return Contact }, childRelationship: true, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Contacts', externalId: false })
    public contacts: Contact[];
    @sField({ apiName: 'Id', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ID, salesforceLabel: 'Account ID', externalId: false })
    public readonly id: string;
    @sField({ apiName: 'IsDeleted', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Deleted', externalId: false })
    public readonly isDeleted: boolean;
    @sField({ apiName: 'MasterRecord', createable: false, updateable: false, required: false, reference: () => { return Account }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Master Record ID', externalId: false })
    public masterRecord: Account;
    @sField({ apiName: 'MasterRecordId', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Master Record ID', externalId: false })
    public readonly masterRecordId: string;
    @sField({ apiName: 'Name', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Account Name', externalId: false })
    public name: string;
    @sField({ apiName: 'Type', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Account Type', externalId: false })
    public type: string;
    @sField({ apiName: 'Parent', createable: false, updateable: false, required: false, reference: () => { return Account }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Parent Account ID', externalId: false })
    public parent: Account;
    @sField({ apiName: 'ParentId', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Parent Account ID', externalId: false })
    public parentId: string;
    @sField({ apiName: 'BillingStreet', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Billing Street', externalId: false })
    public billingStreet: string;
    @sField({ apiName: 'BillingCity', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Billing City', externalId: false })
    public billingCity: string;
    @sField({ apiName: 'BillingState', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Billing State/Province', externalId: false })
    public billingState: string;
    @sField({ apiName: 'BillingPostalCode', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Billing Zip/Postal Code', externalId: false })
    public billingPostalCode: string;
    @sField({ apiName: 'BillingCountry', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Billing Country', externalId: false })
    public billingCountry: string;
    @sField({ apiName: 'BillingLatitude', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Billing Latitude', externalId: false })
    public billingLatitude: number;
    @sField({ apiName: 'BillingLongitude', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Billing Longitude', externalId: false })
    public billingLongitude: number;
    @sField({ apiName: 'BillingGeocodeAccuracy', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Billing Geocode Accuracy', externalId: false })
    public billingGeocodeAccuracy: string;
    @sField({ apiName: 'BillingAddress', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ADDRESS, salesforceLabel: 'Billing Address', externalId: false })
    public readonly billingAddress: string;
    @sField({ apiName: 'ShippingStreet', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Shipping Street', externalId: false })
    public shippingStreet: string;
    @sField({ apiName: 'ShippingCity', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Shipping City', externalId: false })
    public shippingCity: string;
    @sField({ apiName: 'ShippingState', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Shipping State/Province', externalId: false })
    public shippingState: string;
    @sField({ apiName: 'ShippingPostalCode', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Shipping Zip/Postal Code', externalId: false })
    public shippingPostalCode: string;
    @sField({ apiName: 'ShippingCountry', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Shipping Country', externalId: false })
    public shippingCountry: string;
    @sField({ apiName: 'ShippingLatitude', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Shipping Latitude', externalId: false })
    public shippingLatitude: number;
    @sField({ apiName: 'ShippingLongitude', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Shipping Longitude', externalId: false })
    public shippingLongitude: number;
    @sField({ apiName: 'ShippingGeocodeAccuracy', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Shipping Geocode Accuracy', externalId: false })
    public shippingGeocodeAccuracy: string;
    @sField({ apiName: 'ShippingAddress', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ADDRESS, salesforceLabel: 'Shipping Address', externalId: false })
    public readonly shippingAddress: string;
    @sField({ apiName: 'Phone', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Account Phone', externalId: false })
    public phone: string;
    @sField({ apiName: 'Fax', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Account Fax', externalId: false })
    public fax: string;
    @sField({ apiName: 'AccountNumber', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Account Number', externalId: false })
    public accountNumber: string;
    @sField({ apiName: 'Website', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.URL, salesforceLabel: 'Website', externalId: false })
    public website: string;
    @sField({ apiName: 'PhotoUrl', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.URL, salesforceLabel: 'Photo URL', externalId: false })
    public readonly photoUrl: string;
    @sField({ apiName: 'Sic', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'SIC Code', externalId: false })
    public sic: string;
    @sField({ apiName: 'Industry', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Industry', externalId: false })
    public industry: string;
    @sField({ apiName: 'AnnualRevenue', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.CURRENCY, salesforceLabel: 'Annual Revenue', externalId: false })
    public annualRevenue: number;
    @sField({ apiName: 'NumberOfEmployees', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.INT, salesforceLabel: 'Employees', externalId: false })
    public numberOfEmployees: number;
    @sField({ apiName: 'Ownership', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Ownership', externalId: false })
    public ownership: string;
    @sField({ apiName: 'TickerSymbol', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Ticker Symbol', externalId: false })
    public tickerSymbol: string;
    @sField({ apiName: 'Description', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Account Description', externalId: false })
    public description: string;
    @sField({ apiName: 'Rating', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Account Rating', externalId: false })
    public rating: string;
    @sField({ apiName: 'Site', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Account Site', externalId: false })
    public site: string;
    @sField({ apiName: 'OwnerId', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Owner ID', externalId: false })
    public ownerId: string;
    @sField({ apiName: 'CreatedDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Created Date', externalId: false })
    public readonly createdDate: Date;
    @sField({ apiName: 'CreatedById', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Created By ID', externalId: false })
    public readonly createdById: string;
    @sField({ apiName: 'LastModifiedDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Modified Date', externalId: false })
    public readonly lastModifiedDate: Date;
    @sField({ apiName: 'LastModifiedById', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Last Modified By ID', externalId: false })
    public readonly lastModifiedById: string;
    @sField({ apiName: 'SystemModstamp', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'System Modstamp', externalId: false })
    public readonly systemModstamp: Date;
    @sField({ apiName: 'LastActivityDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATE, salesforceLabel: 'Last Activity', externalId: false })
    public readonly lastActivityDate: Date;
    @sField({ apiName: 'LastViewedDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Viewed Date', externalId: false })
    public readonly lastViewedDate: Date;
    @sField({ apiName: 'LastReferencedDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Referenced Date', externalId: false })
    public readonly lastReferencedDate: Date;
    @sField({ apiName: 'IsCustomerPortal', createable: false, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Customer Portal Account', externalId: false })
    public isCustomerPortal: boolean;
    @sField({ apiName: 'Jigsaw', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Data.com Key', externalId: false })
    public jigsaw: string;
    @sField({ apiName: 'JigsawCompanyId', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Jigsaw Company ID', externalId: false })
    public readonly jigsawCompanyId: string;
    @sField({ apiName: 'CleanStatus', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Clean Status', externalId: false })
    public cleanStatus: string;
    @sField({ apiName: 'AccountSource', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Account Source', externalId: false })
    public accountSource: string;
    @sField({ apiName: 'DunsNumber', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'D-U-N-S Number', externalId: false })
    public dunsNumber: string;
    @sField({ apiName: 'Tradestyle', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Tradestyle', externalId: false })
    public tradestyle: string;
    @sField({ apiName: 'NaicsCode', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'NAICS Code', externalId: false })
    public naicsCode: string;
    @sField({ apiName: 'NaicsDesc', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'NAICS Description', externalId: false })
    public naicsDesc: string;
    @sField({ apiName: 'YearStarted', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Year Started', externalId: false })
    public yearStarted: string;
    @sField({ apiName: 'SicDesc', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'SIC Description', externalId: false })
    public sicDesc: string;
    @sField({ apiName: 'DandbCompanyId', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'D&B Company ID', externalId: false })
    public dandbCompanyId: string;
    @sField({ apiName: 'CustomerPriority__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Customer Priority', externalId: false })
    public customerPriority: string;
    @sField({ apiName: 'SLA__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'SLA', externalId: false })
    public sLA: string;
    @sField({ apiName: 'Active__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Active', externalId: false })
    public active: string;
    @sField({ apiName: 'NumberofLocations__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Number of Locations', externalId: false })
    public numberofLocations: number;
    @sField({ apiName: 'UpsellOpportunity__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Upsell Opportunity', externalId: false })
    public upsellOpportunity: string;
    @sField({ apiName: 'SLASerialNumber__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'SLA Serial Number', externalId: false })
    public sLASerialNumber: string;
    @sField({ apiName: 'SLAExpirationDate__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATE, salesforceLabel: 'SLA Expiration Date', externalId: false })
    public sLAExpirationDate: Date;

    constructor(fields?: AccountFields, client?: Rest) {
        super('Account', client);
        this.contacts = void 0;
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
        Object.assign(this, fields);
        return new Proxy(this, this.safeUpdateProxyHandler);
    }

    public static API_NAME: 'Account' = 'Account';
    public readonly _TYPE_: 'Account' = 'Account';
    private static _fields: { [P in keyof AccountFields]: SFieldProperties; };

    public static get FIELDS() {
        return this._fields = this._fields ? this._fields : Account.getPropertiesMeta<AccountFields, Account>(Account)
    }

    public static async retrieve(qryParam: ((fields: FieldResolver<Account>) => SOQLQueryParams) | string): Promise<Account[]> {

        let qry = typeof qryParam === 'function' ? buildQuery(Account, qryParam) : qryParam;
        return await RestObject.query<Account>(Account, qry);

    }

    public static fromSFObject(sob: SObject): Account {
        return new Account().mapFromQuery(sob);
    }
}

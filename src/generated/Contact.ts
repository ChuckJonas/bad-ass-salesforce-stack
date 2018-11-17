import { Rest, RestObject, SObject, sField, SalesforceFieldType, SFLocation, SFieldProperties, FieldResolver, SOQLQueryParams, buildQuery, FieldProps } from "ts-force";
import { Account } from "./";

export type ContactFields = FieldProps<Contact>;

/**
 * Generated class for Contact
 */
export class Contact extends RestObject {
    @sField({ apiName: 'Id', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ID, salesforceLabel: 'Contact ID', externalId: false })
    public readonly id: string;
    @sField({ apiName: 'IsDeleted', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Deleted', externalId: false })
    public readonly isDeleted: boolean;
    @sField({ apiName: 'MasterRecord', createable: false, updateable: false, required: false, reference: () => { return Contact }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Master Record ID', externalId: false })
    public masterRecord: Contact;
    @sField({ apiName: 'MasterRecordId', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Master Record ID', externalId: false })
    public readonly masterRecordId: string;
    @sField({ apiName: 'Account', createable: false, updateable: false, required: false, reference: () => { return Account }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Account ID', externalId: false })
    public account: Account;
    @sField({ apiName: 'AccountId', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Account ID', externalId: false })
    public accountId: string;
    @sField({ apiName: 'LastName', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Last Name', externalId: false })
    public lastName: string;
    @sField({ apiName: 'FirstName', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'First Name', externalId: false })
    public firstName: string;
    @sField({ apiName: 'Salutation', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Salutation', externalId: false })
    public salutation: string;
    @sField({ apiName: 'Name', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Full Name', externalId: false })
    public readonly name: string;
    @sField({ apiName: 'OtherStreet', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Other Street', externalId: false })
    public otherStreet: string;
    @sField({ apiName: 'OtherCity', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Other City', externalId: false })
    public otherCity: string;
    @sField({ apiName: 'OtherState', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Other State/Province', externalId: false })
    public otherState: string;
    @sField({ apiName: 'OtherPostalCode', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Other Zip/Postal Code', externalId: false })
    public otherPostalCode: string;
    @sField({ apiName: 'OtherCountry', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Other Country', externalId: false })
    public otherCountry: string;
    @sField({ apiName: 'OtherLatitude', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Other Latitude', externalId: false })
    public otherLatitude: number;
    @sField({ apiName: 'OtherLongitude', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Other Longitude', externalId: false })
    public otherLongitude: number;
    @sField({ apiName: 'OtherGeocodeAccuracy', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Other Geocode Accuracy', externalId: false })
    public otherGeocodeAccuracy: string;
    @sField({ apiName: 'OtherAddress', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ADDRESS, salesforceLabel: 'Other Address', externalId: false })
    public readonly otherAddress: string;
    @sField({ apiName: 'MailingStreet', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Mailing Street', externalId: false })
    public mailingStreet: string;
    @sField({ apiName: 'MailingCity', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Mailing City', externalId: false })
    public mailingCity: string;
    @sField({ apiName: 'MailingState', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Mailing State/Province', externalId: false })
    public mailingState: string;
    @sField({ apiName: 'MailingPostalCode', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Mailing Zip/Postal Code', externalId: false })
    public mailingPostalCode: string;
    @sField({ apiName: 'MailingCountry', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Mailing Country', externalId: false })
    public mailingCountry: string;
    @sField({ apiName: 'MailingLatitude', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Mailing Latitude', externalId: false })
    public mailingLatitude: number;
    @sField({ apiName: 'MailingLongitude', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Mailing Longitude', externalId: false })
    public mailingLongitude: number;
    @sField({ apiName: 'MailingGeocodeAccuracy', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Mailing Geocode Accuracy', externalId: false })
    public mailingGeocodeAccuracy: string;
    @sField({ apiName: 'MailingAddress', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ADDRESS, salesforceLabel: 'Mailing Address', externalId: false })
    public readonly mailingAddress: string;
    @sField({ apiName: 'Phone', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Business Phone', externalId: false })
    public phone: string;
    @sField({ apiName: 'Fax', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Business Fax', externalId: false })
    public fax: string;
    @sField({ apiName: 'MobilePhone', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Mobile Phone', externalId: false })
    public mobilePhone: string;
    @sField({ apiName: 'HomePhone', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Home Phone', externalId: false })
    public homePhone: string;
    @sField({ apiName: 'OtherPhone', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Other Phone', externalId: false })
    public otherPhone: string;
    @sField({ apiName: 'AssistantPhone', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Asst. Phone', externalId: false })
    public assistantPhone: string;
    @sField({ apiName: 'ReportsTo', createable: false, updateable: false, required: false, reference: () => { return Contact }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Reports To ID', externalId: false })
    public reportsTo: Contact;
    @sField({ apiName: 'ReportsToId', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Reports To ID', externalId: false })
    public reportsToId: string;
    @sField({ apiName: 'Email', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.EMAIL, salesforceLabel: 'Email', externalId: false })
    public email: string;
    @sField({ apiName: 'Title', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Title', externalId: false })
    public title: string;
    @sField({ apiName: 'Department', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Department', externalId: false })
    public department: string;
    @sField({ apiName: 'AssistantName', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Assistant\'s Name', externalId: false })
    public assistantName: string;
    @sField({ apiName: 'LeadSource', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Lead Source', externalId: false })
    public leadSource: string;
    @sField({ apiName: 'Birthdate', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATE, salesforceLabel: 'Birthdate', externalId: false })
    public birthdate: Date;
    @sField({ apiName: 'Description', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Contact Description', externalId: false })
    public description: string;
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
    @sField({ apiName: 'LastCURequestDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Stay-in-Touch Request Date', externalId: false })
    public readonly lastCURequestDate: Date;
    @sField({ apiName: 'LastCUUpdateDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Stay-in-Touch Save Date', externalId: false })
    public readonly lastCUUpdateDate: Date;
    @sField({ apiName: 'LastViewedDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Viewed Date', externalId: false })
    public readonly lastViewedDate: Date;
    @sField({ apiName: 'LastReferencedDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Referenced Date', externalId: false })
    public readonly lastReferencedDate: Date;
    @sField({ apiName: 'EmailBouncedReason', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Email Bounced Reason', externalId: false })
    public emailBouncedReason: string;
    @sField({ apiName: 'EmailBouncedDate', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Email Bounced Date', externalId: false })
    public emailBouncedDate: Date;
    @sField({ apiName: 'IsEmailBounced', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Is Email Bounced', externalId: false })
    public readonly isEmailBounced: boolean;
    @sField({ apiName: 'PhotoUrl', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.URL, salesforceLabel: 'Photo URL', externalId: false })
    public readonly photoUrl: string;
    @sField({ apiName: 'Jigsaw', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Data.com Key', externalId: false })
    public jigsaw: string;
    @sField({ apiName: 'JigsawContactId', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Jigsaw Contact ID', externalId: false })
    public readonly jigsawContactId: string;
    @sField({ apiName: 'CleanStatus', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Clean Status', externalId: false })
    public cleanStatus: string;
    @sField({ apiName: 'Level__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Level', externalId: false })
    public level: string;
    @sField({ apiName: 'Languages__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Languages', externalId: false })
    public languages: string;

    constructor(fields?: ContactFields, client?: Rest) {
        super('Contact', client);
        this.id = void 0;
        this.isDeleted = void 0;
        this.masterRecord = void 0;
        this.masterRecordId = void 0;
        this.account = void 0;
        this.accountId = void 0;
        this.lastName = void 0;
        this.firstName = void 0;
        this.salutation = void 0;
        this.name = void 0;
        this.otherStreet = void 0;
        this.otherCity = void 0;
        this.otherState = void 0;
        this.otherPostalCode = void 0;
        this.otherCountry = void 0;
        this.otherLatitude = void 0;
        this.otherLongitude = void 0;
        this.otherGeocodeAccuracy = void 0;
        this.otherAddress = void 0;
        this.mailingStreet = void 0;
        this.mailingCity = void 0;
        this.mailingState = void 0;
        this.mailingPostalCode = void 0;
        this.mailingCountry = void 0;
        this.mailingLatitude = void 0;
        this.mailingLongitude = void 0;
        this.mailingGeocodeAccuracy = void 0;
        this.mailingAddress = void 0;
        this.phone = void 0;
        this.fax = void 0;
        this.mobilePhone = void 0;
        this.homePhone = void 0;
        this.otherPhone = void 0;
        this.assistantPhone = void 0;
        this.reportsTo = void 0;
        this.reportsToId = void 0;
        this.email = void 0;
        this.title = void 0;
        this.department = void 0;
        this.assistantName = void 0;
        this.leadSource = void 0;
        this.birthdate = void 0;
        this.description = void 0;
        this.ownerId = void 0;
        this.createdDate = void 0;
        this.createdById = void 0;
        this.lastModifiedDate = void 0;
        this.lastModifiedById = void 0;
        this.systemModstamp = void 0;
        this.lastActivityDate = void 0;
        this.lastCURequestDate = void 0;
        this.lastCUUpdateDate = void 0;
        this.lastViewedDate = void 0;
        this.lastReferencedDate = void 0;
        this.emailBouncedReason = void 0;
        this.emailBouncedDate = void 0;
        this.isEmailBounced = void 0;
        this.photoUrl = void 0;
        this.jigsaw = void 0;
        this.jigsawContactId = void 0;
        this.cleanStatus = void 0;
        this.level = void 0;
        this.languages = void 0;
        Object.assign(this, fields);
        return new Proxy(this, this.safeUpdateProxyHandler);
    }

    public static API_NAME: 'Contact' = 'Contact';
    public readonly _TYPE_: 'Contact' = 'Contact';
    private static _fields: { [P in keyof ContactFields]: SFieldProperties; };

    public static get FIELDS() {
        return this._fields = this._fields ? this._fields : Contact.getPropertiesMeta<ContactFields, Contact>(Contact)
    }

    public static async retrieve(qryParam: ((fields: FieldResolver<Contact>) => SOQLQueryParams) | string): Promise<Contact[]> {

        let qry = typeof qryParam === 'function' ? buildQuery(Contact, qryParam) : qryParam;
        return await RestObject.query<Contact>(Contact, qry);

    }

    public static fromSFObject(sob: SObject): Contact {
        return new Contact().mapFromQuery(sob);
    }
}

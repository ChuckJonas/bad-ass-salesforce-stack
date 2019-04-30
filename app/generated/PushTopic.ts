import { Rest, RestObject, SObject, sField, SalesforceFieldType, SFLocation, SFieldProperties, FieldResolver, SOQLQueryParams, buildQuery, FieldProps } from "ts-force";
import "./";

export type PushTopicFields = Partial<FieldProps<PushTopic>>;

/**
 * Generated class for PushTopic
 */
export class PushTopic extends RestObject {
    @sField({ apiName: 'Id', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ID, salesforceLabel: 'Push Topic ID', externalId: false })
    public readonly id: string;
    @sField({ apiName: 'Name', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Topic Name', externalId: false })
    public name: string;
    @sField({ apiName: 'Query', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'SOQL Query', externalId: false })
    public query: string;
    @sField({ apiName: 'ApiVersion', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'API Version', externalId: false })
    public apiVersion: number;
    @sField({ apiName: 'IsActive', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Is Active', externalId: false })
    public isActive: boolean;
    @sField({ apiName: 'NotifyForFields', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Notify For Fields', externalId: false })
    public notifyForFields: string;
    @sField({ apiName: 'NotifyForOperations', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Notify For Operations', externalId: false })
    public readonly notifyForOperations: string;
    @sField({ apiName: 'Description', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Description', externalId: false })
    public description: string;
    @sField({ apiName: 'NotifyForOperationCreate', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Create', externalId: false })
    public notifyForOperationCreate: boolean;
    @sField({ apiName: 'NotifyForOperationUpdate', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Update', externalId: false })
    public notifyForOperationUpdate: boolean;
    @sField({ apiName: 'NotifyForOperationDelete', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Delete', externalId: false })
    public notifyForOperationDelete: boolean;
    @sField({ apiName: 'NotifyForOperationUndelete', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Undelete', externalId: false })
    public notifyForOperationUndelete: boolean;
    @sField({ apiName: 'IsDeleted', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Deleted', externalId: false })
    public readonly isDeleted: boolean;
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

    constructor(fields?: PushTopicFields, client?: Rest) {
        super('PushTopic', client);
        this.id = void 0;
        this.name = void 0;
        this.query = void 0;
        this.apiVersion = void 0;
        this.isActive = void 0;
        this.notifyForFields = void 0;
        this.notifyForOperations = void 0;
        this.description = void 0;
        this.notifyForOperationCreate = void 0;
        this.notifyForOperationUpdate = void 0;
        this.notifyForOperationDelete = void 0;
        this.notifyForOperationUndelete = void 0;
        this.isDeleted = void 0;
        this.createdDate = void 0;
        this.createdById = void 0;
        this.lastModifiedDate = void 0;
        this.lastModifiedById = void 0;
        this.systemModstamp = void 0;
        this.initObject(fields);
        return new Proxy(this, this.safeUpdateProxyHandler);
    }

    public static API_NAME: 'PushTopic' = 'PushTopic';
    public readonly _TYPE_: 'PushTopic' = 'PushTopic';
    private static _fields: { [P in keyof FieldProps<PushTopic>]: SFieldProperties; };

    public static get FIELDS() {
        return this._fields = this._fields ? this._fields : PushTopic.getPropertiesMeta<FieldProps<PushTopic>, PushTopic>(PushTopic)
    }

    public static async retrieve(qryParam: ((fields: FieldResolver<PushTopic>) => SOQLQueryParams) | string): Promise<PushTopic[]> {

        let qry = typeof qryParam === 'function' ? buildQuery(PushTopic, qryParam) : qryParam;
        return await RestObject.query<PushTopic>(PushTopic, qry);

    }

    public static fromSFObject(sob: SObject): PushTopic {
        return new PushTopic().mapFromQuery(sob);
    }
}

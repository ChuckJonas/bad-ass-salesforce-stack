import { RestObject, SObject, sField, SalesforceFieldType, SFLocation, SFieldProperties } from "ts-force";

/**
 * Immutable Property Interface for Todo
 */
export interface TodoFields {
    readonly id?: string;
    readonly ownerId?: string;
    readonly isDeleted?: boolean;
    readonly name?: string;
    readonly createdDate?: Date;
    readonly createdById?: string;
    readonly lastModifiedDate?: Date;
    readonly lastModifiedById?: string;
    readonly systemModstamp?: Date;
    readonly done?: boolean;
    readonly task?: string;
}

/**
 * Generated class for Todo__c
 */
export class Todo extends RestObject implements TodoFields {
    @sField({ apiName: 'Id', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ID, salesforceLabel: 'Record ID' })
    public id: string;
    @sField({ apiName: 'OwnerId', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Owner ID' })
    public ownerId: string;
    @sField({ apiName: 'IsDeleted', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Deleted' })
    public isDeleted: boolean;
    @sField({ apiName: 'Name', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Todo Name' })
    public name: string;
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
    /**
     * checked if this todo is complete
     */
    @sField({ apiName: 'Done__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Done' })
    public done: boolean;
    /**
     * Description of what needs to be done
     */
    @sField({ apiName: 'Task__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Task' })
    public task: string;

    constructor(fields?: TodoFields) {
        super('Todo__c');
        this.id = void 0;
        this.ownerId = void 0;
        this.isDeleted = void 0;
        this.name = void 0;
        this.createdDate = void 0;
        this.createdById = void 0;
        this.lastModifiedDate = void 0;
        this.lastModifiedById = void 0;
        this.systemModstamp = void 0;
        this.done = void 0;
        this.task = void 0;
        Object.assign(this, fields)
    }

    public static API_NAME: 'Todo__c' = 'Todo__c';
    private static _fields: { [P in keyof TodoFields]: SFieldProperties; };

    public static get FIELDS() {
        return this._fields = this._fields ? this._fields : Todo.getPropertiesMeta<TodoFields, Todo>(Todo)
    }

    public static async retrieve(qry: string): Promise<Todo[]> {
        return await RestObject.query<Todo>(Todo, qry);
    }

    public static fromSFObject(sob: SObject): Todo {
        return new Todo().mapFromQuery(sob);
    }

    public toImmutable(): TodoFields {
        return this.clone();
    }
}

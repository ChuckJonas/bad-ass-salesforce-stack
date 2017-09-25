import { RestObject, SObject, sField } from "ts-force";
/**
 * Immutable Property Interface for Todo
 */
export interface TodoFields {
    readonly id?: string;
    readonly ownerIdId?: string;
    readonly isDeleted?: boolean;
    readonly name?: string;
    readonly createdDate?: Date;
    readonly createdByIdId?: string;
    readonly lastModifiedDate?: Date;
    readonly lastModifiedByIdId?: string;
    readonly systemModstamp?: Date;
    readonly task?: string;
    readonly done?: boolean;
}
/**
 * Generated class for Todo__c
 */
export class Todo extends RestObject  implements TodoFields {
    @sField({ apiName: 'Id', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'id' })
    id: string;
    @sField({ apiName: 'OwnerId', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    ownerIdId: string;
    @sField({ apiName: 'IsDeleted', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    isDeleted: boolean;
    @sField({ apiName: 'Name', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    name: string;
    @sField({ apiName: 'CreatedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    createdDate: Date;
    @sField({ apiName: 'CreatedById', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    createdByIdId: string;
    @sField({ apiName: 'LastModifiedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    lastModifiedDate: Date;
    @sField({ apiName: 'LastModifiedById', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    lastModifiedByIdId: string;
    @sField({ apiName: 'SystemModstamp', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    systemModstamp: Date;
    /**
     * Description of what needs to be done
     */
    @sField({ apiName: 'Task__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'string' })
    task: string;
    /**
     * checked if this todo is complete
     */
    @sField({ apiName: 'Done__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    done: boolean;
    constructor(fields?: TodoFields) {
        super('Todo__c');
        this.id = void 0;
        this.ownerIdId = void 0;
        this.isDeleted = void 0;
        this.name = void 0;
        this.createdDate = void 0;
        this.createdByIdId = void 0;
        this.lastModifiedDate = void 0;
        this.lastModifiedByIdId = void 0;
        this.systemModstamp = void 0;
        this.task = void 0;
        this.done = void 0;
        Object.assign(this, fields);
    }
    static async retrieve(qry: string): Promise<Todo[]> {
        return await RestObject.query<Todo>(Todo, qry);
    }
    toImmutable(): TodoFields {
        return this.clone();
    }
}

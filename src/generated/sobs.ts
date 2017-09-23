import { RestObject, SObject, sField } from "ts-force";
/**
 * Immutable Property Interface for Account
 */
export interface AccountFields {
    readonly contacts?: Contact[];
    readonly tasks?: Task[];
    readonly id?: string;
    readonly isDeleted?: boolean;
    readonly masterRecord?: Account;
    readonly masterRecordIdId?: string;
    readonly name?: string;
    readonly type?: string;
    readonly parent?: Account;
    readonly parentIdId?: string;
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
    readonly industry?: string;
    readonly description?: string;
    readonly ownerIdId?: string;
    readonly createdDate?: Date;
    readonly createdByIdId?: string;
    readonly lastModifiedDate?: Date;
    readonly lastModifiedByIdId?: string;
    readonly systemModstamp?: Date;
    readonly lastActivityDate?: Date;
    readonly lastViewedDate?: Date;
    readonly lastReferencedDate?: Date;
    readonly jigsaw?: string;
    readonly jigsawCompanyId?: string;
    readonly accountSource?: string;
    readonly sicDesc?: string;
    readonly activeSince?: Date;
    readonly signinkey?: string;
    readonly region?: string;
    readonly eliteStatus?: string;
    readonly answers?: number;
    readonly photos?: number;
    readonly username?: string;
    readonly locationSpecialtyLink?: string;
    readonly activeMemberships?: string;
    readonly lastDCAActivity?: Date;
    readonly candidateDateifapp?: Date;
    readonly inquiries?: number;
    readonly phoneRequests?: number;
    readonly websoteCocls?: number;
    readonly articles?: number;
    readonly totalViews?: number;
    readonly doctorSpecialty?: string;
    readonly mailMerge?: number;
    readonly mailMerge1Notes?: string;
    readonly knowntrademarks?: string;
    readonly mailMerge2?: string;
    readonly mailMerge2Notes?: string;
    readonly marketingBudget?: number;
    readonly m2MStart?: Date;
    readonly sponsorshipTotal?: number;
    readonly uploadedNotes?: string;
    readonly sponsor?: boolean;
    readonly waitlists?: number;
    readonly x1stBillingDate?: Date;
    readonly d2C?: string;
    readonly lastName?: string;
    readonly vIP?: boolean;
    readonly vIPDescription?: string;
    readonly spotlightPh?: string;
    readonly howdidtheyhearaboutus?: string;
    readonly toptreatmentsoffered?: string;
    readonly reviews?: number;
    readonly d2D?: string;
    readonly profileLink?: string;
    readonly stateFull?: string;
    readonly daysSinceDCAActivity?: number;
    readonly decisionMakerMainInfluencer?: Contact;
    readonly decisionMakerMainInfluencerId?: string;
    readonly currentMarketingChannels?: string;
    readonly boardCertifications?: string;
    readonly enhancedDrProfileOnly?: boolean;
    readonly affiliate?: boolean;
    readonly rS100ineligible?: boolean;
    readonly specialOffers?: number;
    readonly marketingGoals?: string;
    readonly budgetingCycle?: string;
    readonly badge?: string;
    readonly rSInsightsPanelMember?: boolean;
    readonly scoredContacts?: number;
    readonly advisorPhoto?: string;
    readonly webTrafficInfoRequest?: boolean;
    readonly churnedAccount?: boolean;
    readonly mAD28?: boolean;
    readonly pASTDUEROLLUP?: number;
    readonly answers90?: number;
    readonly realSelf100?: string;
    readonly answersYTD?: number;
    readonly probationEndDate?: Date;
    readonly totalSpotlights?: number;
    readonly convertedDate?: Date;
    readonly standardRateTotal?: number;
    readonly preferredRateTotal?: number;
    readonly preferredwoPRO?: number;
    readonly pastDue?: boolean;
    readonly standard30woPRO?: number;
    readonly inquiry?: number;
    readonly reviews90?: number;
    readonly photos90?: number;
    readonly webClicks90?: number;
    readonly profileViews90?: number;
    readonly mgrAccount?: boolean;
    readonly cClink?: string;
    readonly industryDesignations?: string;
    readonly billingContact?: Contact;
    readonly billingContactId?: string;
    readonly invoiceFrequency?: string;
    readonly advisorTitle?: string;
    readonly x5reviewsormore?: boolean;
    readonly billtoName?: string;
    readonly invoiceMonth?: string;
    readonly paymentMethod?: string;
    readonly invoices?: string;
    readonly billingContactEmail?: string;
    readonly starRating?: number;
    readonly answers7?: number;
    readonly answers30?: number;
    readonly photos7?: number;
    readonly photos30?: number;
    readonly reviews7?: number;
    readonly reviews30?: number;
    readonly videos?: number;
    readonly videos7?: number;
    readonly videos30?: number;
    readonly videos90?: number;
    readonly videosYTD?: number;
    readonly phoneInquiries7?: number;
    readonly phoneInquiries30?: number;
    readonly phoneInquiries90?: number;
    readonly phoneInquiriesYTD?: number;
    readonly inquiries7?: number;
    readonly inquiries30?: number;
    readonly inquiriesYTD?: number;
    readonly photosYTD?: number;
    readonly reviewsYTD?: number;
    readonly profileViews7?: number;
    readonly profileViews30?: number;
    readonly profileViewsYTD?: number;
    readonly webClicks7?: number;
    readonly webClicks30?: number;
    readonly webClicksYTD?: number;
    readonly answersLastYear?: number;
    readonly photosLastYear?: number;
    readonly reviewsLastYear?: number;
    readonly videosLastYear?: number;
    readonly profileViewsLastYear?: number;
    readonly inquiriesLastYear?: number;
    readonly phoneInquiriesLastYear?: number;
    readonly webClicksLastYear?: number;
    readonly totalContacts?: number;
    readonly contacts7?: number;
    readonly contacts30?: number;
    readonly contacts90?: number;
    readonly contactsYTD?: number;
    readonly contactsLastYear?: number;
    readonly facebook?: string;
    readonly twitter?: string;
    readonly doctorPhoto?: string;
    readonly advisorPhone?: string;
    readonly upgradeRestrictions?: string;
    readonly addedtoWelcomeList?: boolean;
    readonly advisorOwner?: string;
    readonly advisorEmail?: string;
    readonly directPhone?: string;
    readonly industryBrands?: string;
    readonly currentMonthlySpotlightViews?: number;
    readonly totalBundles?: number;
    readonly accountOwnerProfile?: string;
    readonly conversionRenewalDate?: Date;
    readonly specialPrograms?: string;
    readonly realSelf500?: string;
    readonly nextRenewalDate?: Date;
    readonly nextRenewingSponsorships?: string;
    readonly treatmentFocus?: string;
    readonly pO?: string;
    readonly doctorsonthisPractice?: number;
    readonly relatedOpptyWFsneedtofire?: boolean;
    readonly sponsorshipTotalDisplay?: number;
    readonly userID?: number;
    readonly candidateMember?: boolean;
    readonly realSelfGoals?: string;
    readonly cosmetic?: string;
    readonly mainRSContact?: Contact;
    readonly mainRSContactId?: string;
    readonly qAD90?: boolean;
    readonly oldModel?: number;
    readonly newModelSL?: number;
    readonly renewalVariance?: number;
    readonly hasMedSpa?: boolean;
    readonly licenseNPI?: string;
    readonly sponsorSinceFirstSpotlight?: Date;
    readonly procedureTypesOffered?: string;
    readonly churnDate?: Date;
    readonly sponsorSinceEarliestNewActivation?: Date;
    readonly sponsorSinceLatestFullDeactivation?: Date;
    readonly sponsorSinceLastPartialDeactivation?: Date;
    readonly currencyId?: string;
    readonly sponsorshipTotalUSD?: number;
    readonly sponsorSince?: Date;
    readonly x90DayCutoffDate?: Date;
    readonly divisionId?: string;
    readonly numberofRegions?: number;
    readonly financialDecisionMaker?: Contact;
    readonly financialDecisionMakerId?: string;
    readonly engagementOpptys?: number;
    readonly advisorExtension?: string;
    readonly currencySymbol?: string;
    readonly dateofSale?: Date;
    readonly primaryMetroRegionId?: string;
    readonly drUserId?: string;
    readonly aBValue?: number;
    readonly sponsorDowngradeFireTrigger?: boolean;
    readonly sponsorOwnerTrackingEmail?: string;
    readonly sponsorOwnerTrackingFirstName?: string;
    readonly sponsorOwnerTrackingPhone?: string;
    readonly sponsorOwnerTrackingId?: string;
    readonly sponsorOwnerTrackingTitle?: string;
    readonly sponsorOwnerTrackingLastName?: string;
    readonly spotlightTotalUSD?: number;
    readonly spotlightTotal?: number;
    readonly realSelfFellowshipFellow?: string;
    readonly realSelfFellowshipSpecialMention?: string;
    readonly advisorUserID?: string;
    readonly sponsorOwnerTrackingExtension?: string;
    readonly medicalDirectorName?: string;
    readonly medicalDirectorSpecialty?: string;
    readonly sponsorshipDeactivatingTotal?: number;
    readonly tierOverridden?: boolean;
    readonly tier?: string;
}
/**
 * Generated class for Account
 */
export class Account extends RestObject  implements AccountFields {
    @sField({ apiName: 'Contacts', readOnly: true, required: false, reference: () => { return Contact; }, childRelationship: true, salesforceType: 'undefined' })
    contacts: Contact[];
    @sField({ apiName: 'Tasks', readOnly: true, required: false, reference: () => { return Task; }, childRelationship: true, salesforceType: 'undefined' })
    tasks: Task[];
    @sField({ apiName: 'Id', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'id' })
    id: string;
    @sField({ apiName: 'IsDeleted', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    isDeleted: boolean;
    @sField({ apiName: 'MasterRecord', readOnly: true, required: false, reference: () => { return Account; }, childRelationship: false, salesforceType: 'undefined' })
    masterRecord: Account;
    @sField({ apiName: 'MasterRecordId', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    masterRecordIdId: string;
    @sField({ apiName: 'Name', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'string' })
    name: string;
    @sField({ apiName: 'Type', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    type: string;
    @sField({ apiName: 'Parent', readOnly: true, required: false, reference: () => { return Account; }, childRelationship: false, salesforceType: 'undefined' })
    parent: Account;
    @sField({ apiName: 'ParentId', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    parentIdId: string;
    @sField({ apiName: 'BillingStreet', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    billingStreet: string;
    @sField({ apiName: 'BillingCity', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    billingCity: string;
    @sField({ apiName: 'BillingState', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    billingState: string;
    @sField({ apiName: 'BillingPostalCode', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    billingPostalCode: string;
    @sField({ apiName: 'BillingCountry', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    billingCountry: string;
    @sField({ apiName: 'BillingLatitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    billingLatitude: number;
    @sField({ apiName: 'BillingLongitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    billingLongitude: number;
    @sField({ apiName: 'BillingGeocodeAccuracy', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    billingGeocodeAccuracy: string;
    @sField({ apiName: 'BillingAddress', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'address' })
    billingAddress: string;
    @sField({ apiName: 'ShippingStreet', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    shippingStreet: string;
    @sField({ apiName: 'ShippingCity', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    shippingCity: string;
    @sField({ apiName: 'ShippingState', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    shippingState: string;
    @sField({ apiName: 'ShippingPostalCode', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    shippingPostalCode: string;
    @sField({ apiName: 'ShippingCountry', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    shippingCountry: string;
    @sField({ apiName: 'ShippingLatitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    shippingLatitude: number;
    @sField({ apiName: 'ShippingLongitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    shippingLongitude: number;
    @sField({ apiName: 'ShippingGeocodeAccuracy', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    shippingGeocodeAccuracy: string;
    @sField({ apiName: 'ShippingAddress', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'address' })
    shippingAddress: string;
    @sField({ apiName: 'Phone', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'phone' })
    phone: string;
    @sField({ apiName: 'Fax', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'phone' })
    fax: string;
    @sField({ apiName: 'AccountNumber', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    accountNumber: string;
    @sField({ apiName: 'Website', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'url' })
    website: string;
    @sField({ apiName: 'PhotoUrl', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'url' })
    photoUrl: string;
    @sField({ apiName: 'Industry', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    industry: string;
    @sField({ apiName: 'Description', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    description: string;
    @sField({ apiName: 'OwnerId', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    ownerIdId: string;
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
    @sField({ apiName: 'LastActivityDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    lastActivityDate: Date;
    @sField({ apiName: 'LastViewedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    lastViewedDate: Date;
    @sField({ apiName: 'LastReferencedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    lastReferencedDate: Date;
    @sField({ apiName: 'Jigsaw', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    jigsaw: string;
    @sField({ apiName: 'JigsawCompanyId', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    jigsawCompanyId: string;
    @sField({ apiName: 'AccountSource', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    accountSource: string;
    @sField({ apiName: 'SicDesc', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    sicDesc: string;
    @sField({ apiName: 'Active_Since__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    activeSince: Date;
    @sField({ apiName: 'Sign_in_key__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'url' })
    signinkey: string;
    @sField({ apiName: 'Region__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    region: string;
    @sField({ apiName: 'Elite_Status__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    eliteStatus: string;
    @sField({ apiName: 'Answers__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    answers: number;
    @sField({ apiName: 'Photos__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    photos: number;
    @sField({ apiName: 'Username__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    username: string;
    @sField({ apiName: 'Location_Specialty_Link__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    locationSpecialtyLink: string;
    @sField({ apiName: 'Active_Memberships__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    activeMemberships: string;
    @sField({ apiName: 'Last_DCA_Activity__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    lastDCAActivity: Date;
    /**
     * If applicable, enter date expected for the doctor to complete their board certification.
     */
    @sField({ apiName: 'Candidate_Date_if_app__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    candidateDateifapp: Date;
    @sField({ apiName: 'Inquiries__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    inquiries: number;
    @sField({ apiName: 'Phone_Requests__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    phoneRequests: number;
    @sField({ apiName: 'Websote_C_ocls__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    websoteCocls: number;
    @sField({ apiName: 'Articles__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    articles: number;
    @sField({ apiName: 'Total_Views__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    totalViews: number;
    @sField({ apiName: 'Doctor_Specialty__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'multipicklist' })
    doctorSpecialty: string;
    @sField({ apiName: 'MailMerge__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    mailMerge: number;
    @sField({ apiName: 'MailMerge_1_Notes__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    mailMerge1Notes: string;
    @sField({ apiName: 'Known_trademarks__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    knowntrademarks: string;
    @sField({ apiName: 'MailMerge_2__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mailMerge2: string;
    @sField({ apiName: 'MailMerge_2_Notes__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mailMerge2Notes: string;
    @sField({ apiName: 'Marketing_Budget__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'currency' })
    marketingBudget: number;
    @sField({ apiName: 'M2M_Start__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    m2MStart: Date;
    /**
     * Monthly Totals from all Active and Pending Sponsorships
     */
    @sField({ apiName: 'Sponsorship_Total__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'currency' })
    sponsorshipTotal: number;
    @sField({ apiName: 'Uploaded_Notes__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    uploadedNotes: string;
    @sField({ apiName: 'Sponsor__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    sponsor: boolean;
    @sField({ apiName: 'Waitlists__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    waitlists: number;
    @sField({ apiName: 'X1st_Billing_Date__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    x1stBillingDate: Date;
    @sField({ apiName: 'D2C__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'percent' })
    d2C: string;
    @sField({ apiName: 'Last_Name__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    lastName: string;
    @sField({ apiName: 'VIP__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    vIP: boolean;
    @sField({ apiName: 'VIP_Description__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    vIPDescription: string;
    @sField({ apiName: 'Spotlight_Ph__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'phone' })
    spotlightPh: string;
    @sField({ apiName: 'How_did_they_hear_about_us__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    howdidtheyhearaboutus: string;
    @sField({ apiName: 'Top_treatments_offered__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    toptreatmentsoffered: string;
    @sField({ apiName: 'Reviews__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    reviews: number;
    @sField({ apiName: 'D2D__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'percent' })
    d2D: string;
    @sField({ apiName: 'Profile_Link__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'url' })
    profileLink: string;
    @sField({ apiName: 'State_Full__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    stateFull: string;
    @sField({ apiName: 'Days_Since_DCA_Activity__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    daysSinceDCAActivity: number;
    @sField({ apiName: 'Decision_Maker_Main_Influencer__r', readOnly: true, required: false, reference: () => { return Contact; }, childRelationship: false, salesforceType: 'undefined' })
    decisionMakerMainInfluencer: Contact;
    @sField({ apiName: 'Decision_Maker_Main_Influencer__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    decisionMakerMainInfluencerId: string;
    @sField({ apiName: 'Current_Marketing_Channels__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    currentMarketingChannels: string;
    @sField({ apiName: 'Board_Certification_s__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'multipicklist' })
    boardCertifications: string;
    @sField({ apiName: 'Enhanced_Dr_Profile_Only__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    enhancedDrProfileOnly: boolean;
    @sField({ apiName: 'Affiliate__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    affiliate: boolean;
    @sField({ apiName: 'RS100_ineligible__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    rS100ineligible: boolean;
    @sField({ apiName: 'Special_Offers__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    specialOffers: number;
    @sField({ apiName: 'Marketing_Goals__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    marketingGoals: string;
    @sField({ apiName: 'Budgeting_Cycle__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    budgetingCycle: string;
    @sField({ apiName: 'Badge__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'url' })
    badge: string;
    @sField({ apiName: 'RS_Insights_Panel_Member__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    rSInsightsPanelMember: boolean;
    /**
     * If this is more than 1, the accounts Marketo Score will appear higher than it actually is due to multiple contacts being scored.
     */
    @sField({ apiName: 'Scored_Contacts__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    scoredContacts: number;
    @sField({ apiName: 'Advisor_Photo__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    advisorPhoto: string;
    @sField({ apiName: 'Web_Traffic_Info_Request__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    webTrafficInfoRequest: boolean;
    @sField({ apiName: 'Churned_Account__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    churnedAccount: boolean;
    @sField({ apiName: 'MAD_28__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    mAD28: boolean;
    @sField({ apiName: 'PAST_DUE_ROLLUP__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    pASTDUEROLLUP: number;
    @sField({ apiName: 'Answers_90__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    answers90: number;
    @sField({ apiName: 'RealSelf_100__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'multipicklist' })
    realSelf100: string;
    @sField({ apiName: 'Answers_YTD__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    answersYTD: number;
    @sField({ apiName: 'Probation_End_Date__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    probationEndDate: Date;
    @sField({ apiName: 'Total_Spotlights__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    totalSpotlights: number;
    @sField({ apiName: 'Converted_Date__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    convertedDate: Date;
    /**
     * Current standard rate total of all sponsorships including PRO
     */
    @sField({ apiName: 'Standard_Rate_Total__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'currency' })
    standardRateTotal: number;
    /**
     * Current Preferred Rate total of all sponsorships including PRO
     */
    @sField({ apiName: 'Preferred_Rate_Total__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'currency' })
    preferredRateTotal: number;
    /**
     * Total Preferred regular rate with PRO free
     */
    @sField({ apiName: 'Preferred_w_o_PRO__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'currency' })
    preferredwoPRO: number;
    @sField({ apiName: 'Past_Due__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    pastDue: boolean;
    @sField({ apiName: 'Standard_30_w_o_PRO__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'currency' })
    standard30woPRO: number;
    @sField({ apiName: 'Inquiry__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    inquiry: number;
    @sField({ apiName: 'Reviews_90__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    reviews90: number;
    @sField({ apiName: 'Photos_90__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    photos90: number;
    @sField({ apiName: 'Web_Clicks_90__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    webClicks90: number;
    @sField({ apiName: 'Profile_Views_90__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    profileViews90: number;
    @sField({ apiName: 'Mgr_Account__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    mgrAccount: boolean;
    /**
     * update cc link
     */
    @sField({ apiName: 'CC_link__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    cClink: string;
    /**
     * When uploading, be sure you are not overwriting other info that is needed
     */
    @sField({ apiName: 'Industry_Designations__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'multipicklist' })
    industryDesignations: string;
    @sField({ apiName: 'Billing_Contact__r', readOnly: true, required: false, reference: () => { return Contact; }, childRelationship: false, salesforceType: 'undefined' })
    billingContact: Contact;
    @sField({ apiName: 'Billing_Contact__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    billingContactId: string;
    @sField({ apiName: 'Invoice_Frequency__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    invoiceFrequency: string;
    @sField({ apiName: 'Advisor_Title__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    advisorTitle: string;
    @sField({ apiName: 'X5_reviews_or_more__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    x5reviewsormore: boolean;
    @sField({ apiName: 'Bill_to_Name__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    billtoName: string;
    /**
     * This is the month to send the invoice for pre-payment.  The period of pre-payment starts after the month the invoice is sent.  All post payments are for the period prior to the invoice month
     */
    @sField({ apiName: 'Invoice_Month__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'multipicklist' })
    invoiceMonth: string;
    @sField({ apiName: 'Payment_Method__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    paymentMethod: string;
    @sField({ apiName: 'Invoices__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    invoices: string;
    /**
     * Input email to send invoice to
     */
    @sField({ apiName: 'Billing_Contact_Email__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'email' })
    billingContactEmail: string;
    @sField({ apiName: 'Star_Rating__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    starRating: number;
    @sField({ apiName: 'Answers_7__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    answers7: number;
    @sField({ apiName: 'Answers_30__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    answers30: number;
    @sField({ apiName: 'Photos_7__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    photos7: number;
    @sField({ apiName: 'Photos_30__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    photos30: number;
    @sField({ apiName: 'Reviews_7__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    reviews7: number;
    @sField({ apiName: 'Reviews_30__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    reviews30: number;
    @sField({ apiName: 'Videos__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    videos: number;
    @sField({ apiName: 'Videos_7__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    videos7: number;
    @sField({ apiName: 'Videos_30__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    videos30: number;
    @sField({ apiName: 'Videos_90__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    videos90: number;
    @sField({ apiName: 'Videos_YTD__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    videosYTD: number;
    @sField({ apiName: 'Phone_Inquiries_7__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    phoneInquiries7: number;
    @sField({ apiName: 'Phone_Inquiries_30__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    phoneInquiries30: number;
    @sField({ apiName: 'Phone_Inquiries_90__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    phoneInquiries90: number;
    @sField({ apiName: 'Phone_Inquiries_YTD__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    phoneInquiriesYTD: number;
    @sField({ apiName: 'Inquiries_7__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    inquiries7: number;
    @sField({ apiName: 'Inquiries_30__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    inquiries30: number;
    @sField({ apiName: 'Inquiries_YTD__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    inquiriesYTD: number;
    @sField({ apiName: 'Photos_YTD__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    photosYTD: number;
    @sField({ apiName: 'Reviews_YTD__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    reviewsYTD: number;
    @sField({ apiName: 'Profile_Views_7__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    profileViews7: number;
    @sField({ apiName: 'Profile_Views_30__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    profileViews30: number;
    @sField({ apiName: 'Profile_Views_YTD__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    profileViewsYTD: number;
    @sField({ apiName: 'Web_Clicks_7__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    webClicks7: number;
    @sField({ apiName: 'Web_Clicks_30__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    webClicks30: number;
    @sField({ apiName: 'Web_Clicks_YTD__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    webClicksYTD: number;
    @sField({ apiName: 'Answers_Last_Year__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    answersLastYear: number;
    @sField({ apiName: 'Photos_Last_Year__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    photosLastYear: number;
    @sField({ apiName: 'Reviews_Last_Year__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    reviewsLastYear: number;
    @sField({ apiName: 'Videos_Last_Year__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    videosLastYear: number;
    @sField({ apiName: 'Profile_Views_Last_Year__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    profileViewsLastYear: number;
    @sField({ apiName: 'Inquiries_Last_Year__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    inquiriesLastYear: number;
    @sField({ apiName: 'Phone_Inquiries_Last_Year__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    phoneInquiriesLastYear: number;
    @sField({ apiName: 'Web_Clicks_Last_Year__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    webClicksLastYear: number;
    @sField({ apiName: 'Total_Contacts__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    totalContacts: number;
    @sField({ apiName: 'Contacts_7__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    contacts7: number;
    @sField({ apiName: 'Contacts_30__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    contacts30: number;
    @sField({ apiName: 'Contacts_90__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    contacts90: number;
    @sField({ apiName: 'Contacts_YTD__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    contactsYTD: number;
    @sField({ apiName: 'Contacts_Last_Year__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    contactsLastYear: number;
    @sField({ apiName: 'Facebook__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    facebook: string;
    @sField({ apiName: 'Twitter__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    twitter: string;
    @sField({ apiName: 'Doctor_Photo__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'url' })
    doctorPhoto: string;
    @sField({ apiName: 'Advisor_Phone__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    advisorPhone: string;
    @sField({ apiName: 'Upgrade_Restrictions__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    upgradeRestrictions: string;
    @sField({ apiName: 'Added_to_Welcome_List__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    addedtoWelcomeList: boolean;
    @sField({ apiName: 'Advisor_Owner__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    advisorOwner: string;
    @sField({ apiName: 'Advisor_Email__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    advisorEmail: string;
    @sField({ apiName: 'Direct_Phone__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    directPhone: string;
    @sField({ apiName: 'Industry_Brands__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'multipicklist' })
    industryBrands: string;
    /**
     * The total number of guarenteed monthly spotlight views (bundles * 100)  for the account currently for all sponsorships with the type of "Active" or "Pending"
     */
    @sField({ apiName: 'Current_Monthly_Spotlight_Views__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    currentMonthlySpotlightViews: number;
    /**
     * The total number of bundles that the account has
     */
    @sField({ apiName: 'Total_Bundles__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    totalBundles: number;
    @sField({ apiName: 'Account_Owner_Profile__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    accountOwnerProfile: string;
    /**
     * oldest M2M date on old contracts
     */
    @sField({ apiName: 'Conversion_Renewal_Date__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    conversionRenewalDate: Date;
    @sField({ apiName: 'Special_Programs__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'multipicklist' })
    specialPrograms: string;
    @sField({ apiName: 'RealSelf_500__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'multipicklist' })
    realSelf500: string;
    @sField({ apiName: 'Next_Renewal_Date__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    nextRenewalDate: Date;
    @sField({ apiName: 'Next_Renewing_Sponsorships__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    nextRenewingSponsorships: string;
    @sField({ apiName: 'Treatment_Focus__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'multipicklist' })
    treatmentFocus: string;
    @sField({ apiName: 'PO__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    pO: string;
    @sField({ apiName: 'Doctors_on_this_Practice__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    doctorsonthisPractice: number;
    /**
     * Used to trigger Processbuilder "Monitor Account for Opportunity Stage Update"
     */
    @sField({ apiName: 'RelatedOpptyWFsneedtofire__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    relatedOpptyWFsneedtofire: boolean;
    @sField({ apiName: 'Sponsorship_Total_Display__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'currency' })
    sponsorshipTotalDisplay: number;
    @sField({ apiName: 'User_ID__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    userID: number;
    /**
     * To be checked off for doctors who have not yet completed their ABPS certification but are Candidate Members with ASAPS and or ASPS.
     */
    @sField({ apiName: 'Candidate_Member__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    candidateMember: boolean;
    @sField({ apiName: 'RealSelf_Goals__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    realSelfGoals: string;
    @sField({ apiName: 'Cosmetic__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'percent' })
    cosmetic: string;
    @sField({ apiName: 'Main_RS_Contact__r', readOnly: true, required: false, reference: () => { return Contact; }, childRelationship: false, salesforceType: 'undefined' })
    mainRSContact: Contact;
    @sField({ apiName: 'Main_RS_Contact__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    mainRSContactId: string;
    @sField({ apiName: 'QAD_90__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    qAD90: boolean;
    @sField({ apiName: 'Old_Model__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    oldModel: number;
    @sField({ apiName: 'New_Model_SL__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    newModelSL: number;
    @sField({ apiName: 'Renewal_Variance__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    renewalVariance: number;
    @sField({ apiName: 'Has_MedSpa__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    hasMedSpa: boolean;
    @sField({ apiName: 'License_NPI__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    licenseNPI: string;
    @sField({ apiName: 'Sponsor_Since_First_Spotlight__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    sponsorSinceFirstSpotlight: Date;
    @sField({ apiName: 'Procedure_Types_Offered__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    procedureTypesOffered: string;
    @sField({ apiName: 'Churn_Date__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    churnDate: Date;
    @sField({ apiName: 'Sponsor_Since_Earliest_New_Activation__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    sponsorSinceEarliestNewActivation: Date;
    @sField({ apiName: 'Sponsor_Since_Latest_Full_Deactivation__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    sponsorSinceLatestFullDeactivation: Date;
    @sField({ apiName: 'Sponsor_Since_Last_Partial_Deactivation__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    sponsorSinceLastPartialDeactivation: Date;
    /**
     * The local currency to quote and bill this account in
     */
    @sField({ apiName: 'Currency__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    currencyId: string;
    /**
     * The total value of Sponsorships in USD
     */
    @sField({ apiName: 'Sponsorship_Total_USD__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'currency' })
    sponsorshipTotalUSD: number;
    @sField({ apiName: 'Sponsor_Since__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    sponsorSince: Date;
    @sField({ apiName: 'X90_Day_Cutoff_Date__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    x90DayCutoffDate: Date;
    /**
     * The division that this account belongs to.  Determined by the primary doctor location
     */
    @sField({ apiName: 'Division__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    divisionId: string;
    /**
     * The number of regions associated with this dr
     */
    @sField({ apiName: 'Number_of_Regions__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    numberofRegions: number;
    @sField({ apiName: 'Financial_Decision_Maker__r', readOnly: true, required: false, reference: () => { return Contact; }, childRelationship: false, salesforceType: 'undefined' })
    financialDecisionMaker: Contact;
    @sField({ apiName: 'Financial_Decision_Maker__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    financialDecisionMakerId: string;
    @sField({ apiName: 'Engagement_Opptys__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    engagementOpptys: number;
    /**
     * The Phone Extension for the Advisor.  Used by Marketo
     */
    @sField({ apiName: 'Advisor_Extension__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    advisorExtension: string;
    /**
     * Currency Symbol for the activation form
     */
    @sField({ apiName: 'Currency_Symbol__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    currencySymbol: string;
    @sField({ apiName: 'Date_of_Sale__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    dateofSale: Date;
    /**
     * The primary region for this account
     */
    @sField({ apiName: 'Primary_Metro_Region__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    primaryMetroRegionId: string;
    /**
     * The Realself User Id
     */
    @sField({ apiName: 'Dr_User_Id__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    drUserId: string;
    /**
     * A/B Testing value.  Used by marketo.  Carried from Lead.  Copied over to child Accounts
     */
    @sField({ apiName: 'AB_Value__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    aBValue: number;
    /**
     * When accounts downgrade (sponsor unchecked) a workflow field fire a time based action after X days to update this field which will then execute a trigger to reassign the owner.
     */
    @sField({ apiName: 'Sponsor_Downgrade_Fire_Trigger__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    sponsorDowngradeFireTrigger: boolean;
    @sField({ apiName: 'Sponsor_Owner_Tracking_Email__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    sponsorOwnerTrackingEmail: string;
    @sField({ apiName: 'Sponsor_Owner_Tracking_First_Name__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    sponsorOwnerTrackingFirstName: string;
    @sField({ apiName: 'Sponsor_Owner_Tracking_Phone__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    sponsorOwnerTrackingPhone: string;
    /**
     * Tracks the previous owner for whenever an account gains or loses sponsorship.
     */
    @sField({ apiName: 'Sponsor_Owner_Tracking__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    sponsorOwnerTrackingId: string;
    @sField({ apiName: 'Sponsor_Owner_Tracking_Title__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    sponsorOwnerTrackingTitle: string;
    @sField({ apiName: 'Sponsor_Owner_Tracking_Last_Name__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    sponsorOwnerTrackingLastName: string;
    /**
     * The total value of all sponsorships where Type = "spotlight".  Set by rollup helper
     */
    @sField({ apiName: 'Spotlight_Total_USD__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'currency' })
    spotlightTotalUSD: number;
    /**
     * The total value of all sponsorships where Type = "spotlight". Set by rollup helper
     */
    @sField({ apiName: 'Spotlight_Total__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    spotlightTotal: number;
    @sField({ apiName: 'RealSelf_Fellowship_Fellow__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'multipicklist' })
    realSelfFellowshipFellow: string;
    @sField({ apiName: 'RealSelf_Fellowship_Special_Mention__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'multipicklist' })
    realSelfFellowshipSpecialMention: string;
    @sField({ apiName: 'Advisor_User_ID__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    advisorUserID: string;
    /**
     * The extension for the Previous Advisor/Advocate
     */
    @sField({ apiName: 'Sponsor_Owner_Tracking_Extension__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    sponsorOwnerTrackingExtension: string;
    @sField({ apiName: 'Medical_Director_Name__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    medicalDirectorName: string;
    @sField({ apiName: 'Medical_Director_Specialty__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    medicalDirectorSpecialty: string;
    /**
     * The sum of sponsorships which are set to deactivate
     */
    @sField({ apiName: 'Sponsorship_Deactivating_Total__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'currency' })
    sponsorshipDeactivatingTotal: number;
    /**
     * Boolean on whether or not the tier was overridden by an agent.
     */
    @sField({ apiName: 'Tier_Overridden__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    tierOverridden: boolean;
    /**
     * Account tier.
     */
    @sField({ apiName: 'Tier__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    tier: string;
    constructor(fields?: AccountFields) {
        super('Account');
        this.contacts = void 0;
        this.tasks = void 0;
        this.id = void 0;
        this.isDeleted = void 0;
        this.masterRecord = void 0;
        this.masterRecordIdId = void 0;
        this.name = void 0;
        this.type = void 0;
        this.parent = void 0;
        this.parentIdId = void 0;
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
        this.industry = void 0;
        this.description = void 0;
        this.ownerIdId = void 0;
        this.createdDate = void 0;
        this.createdByIdId = void 0;
        this.lastModifiedDate = void 0;
        this.lastModifiedByIdId = void 0;
        this.systemModstamp = void 0;
        this.lastActivityDate = void 0;
        this.lastViewedDate = void 0;
        this.lastReferencedDate = void 0;
        this.jigsaw = void 0;
        this.jigsawCompanyId = void 0;
        this.accountSource = void 0;
        this.sicDesc = void 0;
        this.activeSince = void 0;
        this.signinkey = void 0;
        this.region = void 0;
        this.eliteStatus = void 0;
        this.answers = void 0;
        this.photos = void 0;
        this.username = void 0;
        this.locationSpecialtyLink = void 0;
        this.activeMemberships = void 0;
        this.lastDCAActivity = void 0;
        this.candidateDateifapp = void 0;
        this.inquiries = void 0;
        this.phoneRequests = void 0;
        this.websoteCocls = void 0;
        this.articles = void 0;
        this.totalViews = void 0;
        this.doctorSpecialty = void 0;
        this.mailMerge = void 0;
        this.mailMerge1Notes = void 0;
        this.knowntrademarks = void 0;
        this.mailMerge2 = void 0;
        this.mailMerge2Notes = void 0;
        this.marketingBudget = void 0;
        this.m2MStart = void 0;
        this.sponsorshipTotal = void 0;
        this.uploadedNotes = void 0;
        this.sponsor = void 0;
        this.waitlists = void 0;
        this.x1stBillingDate = void 0;
        this.d2C = void 0;
        this.lastName = void 0;
        this.vIP = void 0;
        this.vIPDescription = void 0;
        this.spotlightPh = void 0;
        this.howdidtheyhearaboutus = void 0;
        this.toptreatmentsoffered = void 0;
        this.reviews = void 0;
        this.d2D = void 0;
        this.profileLink = void 0;
        this.stateFull = void 0;
        this.daysSinceDCAActivity = void 0;
        this.decisionMakerMainInfluencer = void 0;
        this.decisionMakerMainInfluencerId = void 0;
        this.currentMarketingChannels = void 0;
        this.boardCertifications = void 0;
        this.enhancedDrProfileOnly = void 0;
        this.affiliate = void 0;
        this.rS100ineligible = void 0;
        this.specialOffers = void 0;
        this.marketingGoals = void 0;
        this.budgetingCycle = void 0;
        this.badge = void 0;
        this.rSInsightsPanelMember = void 0;
        this.scoredContacts = void 0;
        this.advisorPhoto = void 0;
        this.webTrafficInfoRequest = void 0;
        this.churnedAccount = void 0;
        this.mAD28 = void 0;
        this.pASTDUEROLLUP = void 0;
        this.answers90 = void 0;
        this.realSelf100 = void 0;
        this.answersYTD = void 0;
        this.probationEndDate = void 0;
        this.totalSpotlights = void 0;
        this.convertedDate = void 0;
        this.standardRateTotal = void 0;
        this.preferredRateTotal = void 0;
        this.preferredwoPRO = void 0;
        this.pastDue = void 0;
        this.standard30woPRO = void 0;
        this.inquiry = void 0;
        this.reviews90 = void 0;
        this.photos90 = void 0;
        this.webClicks90 = void 0;
        this.profileViews90 = void 0;
        this.mgrAccount = void 0;
        this.cClink = void 0;
        this.industryDesignations = void 0;
        this.billingContact = void 0;
        this.billingContactId = void 0;
        this.invoiceFrequency = void 0;
        this.advisorTitle = void 0;
        this.x5reviewsormore = void 0;
        this.billtoName = void 0;
        this.invoiceMonth = void 0;
        this.paymentMethod = void 0;
        this.invoices = void 0;
        this.billingContactEmail = void 0;
        this.starRating = void 0;
        this.answers7 = void 0;
        this.answers30 = void 0;
        this.photos7 = void 0;
        this.photos30 = void 0;
        this.reviews7 = void 0;
        this.reviews30 = void 0;
        this.videos = void 0;
        this.videos7 = void 0;
        this.videos30 = void 0;
        this.videos90 = void 0;
        this.videosYTD = void 0;
        this.phoneInquiries7 = void 0;
        this.phoneInquiries30 = void 0;
        this.phoneInquiries90 = void 0;
        this.phoneInquiriesYTD = void 0;
        this.inquiries7 = void 0;
        this.inquiries30 = void 0;
        this.inquiriesYTD = void 0;
        this.photosYTD = void 0;
        this.reviewsYTD = void 0;
        this.profileViews7 = void 0;
        this.profileViews30 = void 0;
        this.profileViewsYTD = void 0;
        this.webClicks7 = void 0;
        this.webClicks30 = void 0;
        this.webClicksYTD = void 0;
        this.answersLastYear = void 0;
        this.photosLastYear = void 0;
        this.reviewsLastYear = void 0;
        this.videosLastYear = void 0;
        this.profileViewsLastYear = void 0;
        this.inquiriesLastYear = void 0;
        this.phoneInquiriesLastYear = void 0;
        this.webClicksLastYear = void 0;
        this.totalContacts = void 0;
        this.contacts7 = void 0;
        this.contacts30 = void 0;
        this.contacts90 = void 0;
        this.contactsYTD = void 0;
        this.contactsLastYear = void 0;
        this.facebook = void 0;
        this.twitter = void 0;
        this.doctorPhoto = void 0;
        this.advisorPhone = void 0;
        this.upgradeRestrictions = void 0;
        this.addedtoWelcomeList = void 0;
        this.advisorOwner = void 0;
        this.advisorEmail = void 0;
        this.directPhone = void 0;
        this.industryBrands = void 0;
        this.currentMonthlySpotlightViews = void 0;
        this.totalBundles = void 0;
        this.accountOwnerProfile = void 0;
        this.conversionRenewalDate = void 0;
        this.specialPrograms = void 0;
        this.realSelf500 = void 0;
        this.nextRenewalDate = void 0;
        this.nextRenewingSponsorships = void 0;
        this.treatmentFocus = void 0;
        this.pO = void 0;
        this.doctorsonthisPractice = void 0;
        this.relatedOpptyWFsneedtofire = void 0;
        this.sponsorshipTotalDisplay = void 0;
        this.userID = void 0;
        this.candidateMember = void 0;
        this.realSelfGoals = void 0;
        this.cosmetic = void 0;
        this.mainRSContact = void 0;
        this.mainRSContactId = void 0;
        this.qAD90 = void 0;
        this.oldModel = void 0;
        this.newModelSL = void 0;
        this.renewalVariance = void 0;
        this.hasMedSpa = void 0;
        this.licenseNPI = void 0;
        this.sponsorSinceFirstSpotlight = void 0;
        this.procedureTypesOffered = void 0;
        this.churnDate = void 0;
        this.sponsorSinceEarliestNewActivation = void 0;
        this.sponsorSinceLatestFullDeactivation = void 0;
        this.sponsorSinceLastPartialDeactivation = void 0;
        this.currencyId = void 0;
        this.sponsorshipTotalUSD = void 0;
        this.sponsorSince = void 0;
        this.x90DayCutoffDate = void 0;
        this.divisionId = void 0;
        this.numberofRegions = void 0;
        this.financialDecisionMaker = void 0;
        this.financialDecisionMakerId = void 0;
        this.engagementOpptys = void 0;
        this.advisorExtension = void 0;
        this.currencySymbol = void 0;
        this.dateofSale = void 0;
        this.primaryMetroRegionId = void 0;
        this.drUserId = void 0;
        this.aBValue = void 0;
        this.sponsorDowngradeFireTrigger = void 0;
        this.sponsorOwnerTrackingEmail = void 0;
        this.sponsorOwnerTrackingFirstName = void 0;
        this.sponsorOwnerTrackingPhone = void 0;
        this.sponsorOwnerTrackingId = void 0;
        this.sponsorOwnerTrackingTitle = void 0;
        this.sponsorOwnerTrackingLastName = void 0;
        this.spotlightTotalUSD = void 0;
        this.spotlightTotal = void 0;
        this.realSelfFellowshipFellow = void 0;
        this.realSelfFellowshipSpecialMention = void 0;
        this.advisorUserID = void 0;
        this.sponsorOwnerTrackingExtension = void 0;
        this.medicalDirectorName = void 0;
        this.medicalDirectorSpecialty = void 0;
        this.sponsorshipDeactivatingTotal = void 0;
        this.tierOverridden = void 0;
        this.tier = void 0;
        Object.assign(this, fields);
    }
    static async retrieve(qry: string): Promise<Account[]> {
        return await RestObject.query<Account>(Account, qry);
    }
    toImmutable(): AccountFields {
        return this.clone();
    }
}
/**
 * Immutable Property Interface for Contact
 */
export interface ContactFields {
    readonly accounts1?: Account[];
    readonly accounts?: Account[];
    readonly accounts3?: Account[];
    readonly accounts2?: Account[];
    readonly tasks?: Task[];
    readonly id?: string;
    readonly isDeleted?: boolean;
    readonly masterRecord?: Contact;
    readonly masterRecordIdId?: string;
    readonly account?: Account;
    readonly accountIdId?: string;
    readonly lastName?: string;
    readonly firstName?: string;
    readonly salutation?: string;
    readonly name?: string;
    readonly otherStreet?: string;
    readonly otherCity?: string;
    readonly otherState?: string;
    readonly otherPostalCode?: string;
    readonly otherCountry?: string;
    readonly otherLatitude?: number;
    readonly otherLongitude?: number;
    readonly otherGeocodeAccuracy?: string;
    readonly otherAddress?: string;
    readonly mailingStreet?: string;
    readonly mailingCity?: string;
    readonly mailingState?: string;
    readonly mailingPostalCode?: string;
    readonly mailingCountry?: string;
    readonly mailingLatitude?: number;
    readonly mailingLongitude?: number;
    readonly mailingGeocodeAccuracy?: string;
    readonly mailingAddress?: string;
    readonly phone?: string;
    readonly fax?: string;
    readonly mobilePhone?: string;
    readonly homePhone?: string;
    readonly otherPhone?: string;
    readonly assistantPhone?: string;
    readonly reportsTo?: Contact;
    readonly reportsToIdId?: string;
    readonly email?: string;
    readonly title?: string;
    readonly department?: string;
    readonly assistantName?: string;
    readonly leadSource?: string;
    readonly birthdate?: Date;
    readonly description?: string;
    readonly ownerIdId?: string;
    readonly hasOptedOutOfEmail?: boolean;
    readonly createdDate?: Date;
    readonly createdByIdId?: string;
    readonly lastModifiedDate?: Date;
    readonly lastModifiedByIdId?: string;
    readonly systemModstamp?: Date;
    readonly lastActivityDate?: Date;
    readonly lastCURequestDate?: Date;
    readonly lastCUUpdateDate?: Date;
    readonly lastViewedDate?: Date;
    readonly lastReferencedDate?: Date;
    readonly emailBouncedReason?: string;
    readonly emailBouncedDate?: Date;
    readonly isEmailBounced?: boolean;
    readonly photoUrl?: string;
    readonly jigsaw?: string;
    readonly jigsawContactId?: string;
    readonly contactType?: string;
    readonly emailOptions?: string;
    readonly emailType?: string;
    readonly leadOwnerEmail?: string;
    readonly contactOwnerEmailId?: string;
    readonly mkto2AcquisitionDate?: Date;
    readonly mkto2AcquisitionProgramId?: number;
    readonly mkto2AcquisitionProgram?: string;
    readonly mkto2InferredCity?: string;
    readonly mkto2InferredCompany?: string;
    readonly mkto2InferredCountry?: string;
    readonly mkto2InferredMetropolitanArea?: string;
    readonly mkto2InferredPhoneAreaCode?: string;
    readonly mkto2InferredPostalCode?: string;
    readonly mkto2InferredStateRegion?: string;
    readonly mkto2LeadScore?: number;
    readonly mkto2OriginalReferrer?: string;
    readonly mkto2OriginalSearchEngine?: string;
    readonly mkto2OriginalSearchPhrase?: string;
    readonly mkto2OriginalSourceInfo?: string;
    readonly mkto2OriginalSourceType?: string;
    readonly rh2CurrencyTest?: number;
    readonly mktosiHideDate?: Date;
    readonly mktosiLastInterestingMomentDate?: Date;
    readonly mktosiLastInterestingMomentDesc?: string;
    readonly mktosiLastInterestingMomentSource?: string;
    readonly mktosiLastInterestingMomentType?: string;
    readonly mktosiLastInterestingMoment?: string;
    readonly mktosiPriority?: number;
    readonly mktosiRelativeScoreValue?: number;
    readonly mktosiRelativeScore?: string;
    readonly mktosiSalesInsight?: string;
    readonly mktosiUrgencyValue?: number;
    readonly mktosiUrgency?: string;
    readonly mktosiViewinMarketo?: string;
    readonly rh2DescribeId?: string;
    readonly rh2FormulaTest?: number;
    readonly rh2IntegerTest?: number;
    readonly emailHardBounced?: boolean;
    readonly marketoScore?: boolean;
    readonly accountNumber?: string;
    readonly specialPrograms?: string;
    readonly tOSAccepted?: boolean;
    readonly marketable?: boolean;
    readonly syncwithMarketo?: boolean;
    readonly sMSOptin?: boolean;
    readonly lastSurvey?: string;
    readonly surveyActivityStream?: string;
    readonly lastSurveyDate?: string;
    readonly businessHours?: string;
    readonly businessHoursStart?: string;
    readonly businessHoursEnd?: string;
    readonly practiceTimeZone?: string;
    readonly primaryBillingContact?: boolean;
    readonly advisorOut?: boolean;
    readonly advisorOutStartDate?: string;
    readonly advisorOutEndDate?: string;
    readonly rSConnectPrimaryContactFirstName?: string;
    readonly rSConnectPrimaryContactLastName?: string;
    readonly rSConnectPrimaryContactEmail?: string;
    readonly deactivationCaseNumber?: string;
    readonly mktosiAddtoMarketoCampaign?: string;
    readonly mktosiMktoLeadScore?: number;
    readonly mkto71LeadScore?: number;
    readonly mkto71AcquisitionDate?: Date;
    readonly mkto71AcquisitionProgram?: string;
    readonly aBValue?: number;
    readonly leadEffort?: string;
    readonly lastProviderSatSurvey?: Date;
    readonly expressedMarketingConsent?: boolean;
    readonly expressedMarketingConsentDate?: Date;
    readonly expressedConsentDescription?: string;
    readonly procedureTypesOffered?: string;
    readonly medicalDirector?: boolean;
    readonly medicalDirectorName?: string;
    readonly medicalDirectorSpecialty?: string;
    readonly businessOwner?: boolean;
    readonly decisionMaker?: boolean;
    readonly impliedMarketingConsent?: boolean;
    readonly impliedMarketingConsentDate?: Date;
}
/**
 * Generated class for Contact
 */
export class Contact extends RestObject  implements ContactFields {
    @sField({ apiName: 'Accounts1__r', readOnly: true, required: false, reference: () => { return Account; }, childRelationship: true, salesforceType: 'undefined' })
    accounts1: Account[];
    @sField({ apiName: 'Accounts__r', readOnly: true, required: false, reference: () => { return Account; }, childRelationship: true, salesforceType: 'undefined' })
    accounts: Account[];
    @sField({ apiName: 'Accounts3__r', readOnly: true, required: false, reference: () => { return Account; }, childRelationship: true, salesforceType: 'undefined' })
    accounts3: Account[];
    @sField({ apiName: 'Accounts2__r', readOnly: true, required: false, reference: () => { return Account; }, childRelationship: true, salesforceType: 'undefined' })
    accounts2: Account[];
    @sField({ apiName: 'Tasks', readOnly: true, required: false, reference: () => { return Task; }, childRelationship: true, salesforceType: 'undefined' })
    tasks: Task[];
    @sField({ apiName: 'Id', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'id' })
    id: string;
    @sField({ apiName: 'IsDeleted', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    isDeleted: boolean;
    @sField({ apiName: 'MasterRecord', readOnly: true, required: false, reference: () => { return Contact; }, childRelationship: false, salesforceType: 'undefined' })
    masterRecord: Contact;
    @sField({ apiName: 'MasterRecordId', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    masterRecordIdId: string;
    @sField({ apiName: 'Account', readOnly: true, required: false, reference: () => { return Account; }, childRelationship: false, salesforceType: 'undefined' })
    account: Account;
    @sField({ apiName: 'AccountId', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    accountIdId: string;
    @sField({ apiName: 'LastName', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'string' })
    lastName: string;
    @sField({ apiName: 'FirstName', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    firstName: string;
    @sField({ apiName: 'Salutation', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    salutation: string;
    @sField({ apiName: 'Name', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    name: string;
    @sField({ apiName: 'OtherStreet', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    otherStreet: string;
    @sField({ apiName: 'OtherCity', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    otherCity: string;
    @sField({ apiName: 'OtherState', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    otherState: string;
    @sField({ apiName: 'OtherPostalCode', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    otherPostalCode: string;
    @sField({ apiName: 'OtherCountry', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    otherCountry: string;
    @sField({ apiName: 'OtherLatitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    otherLatitude: number;
    @sField({ apiName: 'OtherLongitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    otherLongitude: number;
    @sField({ apiName: 'OtherGeocodeAccuracy', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    otherGeocodeAccuracy: string;
    @sField({ apiName: 'OtherAddress', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'address' })
    otherAddress: string;
    @sField({ apiName: 'MailingStreet', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    mailingStreet: string;
    @sField({ apiName: 'MailingCity', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mailingCity: string;
    @sField({ apiName: 'MailingState', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mailingState: string;
    @sField({ apiName: 'MailingPostalCode', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mailingPostalCode: string;
    @sField({ apiName: 'MailingCountry', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mailingCountry: string;
    @sField({ apiName: 'MailingLatitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    mailingLatitude: number;
    @sField({ apiName: 'MailingLongitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    mailingLongitude: number;
    @sField({ apiName: 'MailingGeocodeAccuracy', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    mailingGeocodeAccuracy: string;
    @sField({ apiName: 'MailingAddress', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'address' })
    mailingAddress: string;
    @sField({ apiName: 'Phone', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'phone' })
    phone: string;
    @sField({ apiName: 'Fax', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'phone' })
    fax: string;
    @sField({ apiName: 'MobilePhone', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'phone' })
    mobilePhone: string;
    @sField({ apiName: 'HomePhone', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'phone' })
    homePhone: string;
    @sField({ apiName: 'OtherPhone', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'phone' })
    otherPhone: string;
    @sField({ apiName: 'AssistantPhone', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'phone' })
    assistantPhone: string;
    @sField({ apiName: 'ReportsTo', readOnly: true, required: false, reference: () => { return Contact; }, childRelationship: false, salesforceType: 'undefined' })
    reportsTo: Contact;
    @sField({ apiName: 'ReportsToId', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    reportsToIdId: string;
    @sField({ apiName: 'Email', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'email' })
    email: string;
    @sField({ apiName: 'Title', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    title: string;
    @sField({ apiName: 'Department', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    department: string;
    @sField({ apiName: 'AssistantName', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    assistantName: string;
    @sField({ apiName: 'LeadSource', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    leadSource: string;
    @sField({ apiName: 'Birthdate', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    birthdate: Date;
    @sField({ apiName: 'Description', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    description: string;
    @sField({ apiName: 'OwnerId', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    ownerIdId: string;
    @sField({ apiName: 'HasOptedOutOfEmail', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    hasOptedOutOfEmail: boolean;
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
    @sField({ apiName: 'LastActivityDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    lastActivityDate: Date;
    @sField({ apiName: 'LastCURequestDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    lastCURequestDate: Date;
    @sField({ apiName: 'LastCUUpdateDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    lastCUUpdateDate: Date;
    @sField({ apiName: 'LastViewedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    lastViewedDate: Date;
    @sField({ apiName: 'LastReferencedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    lastReferencedDate: Date;
    @sField({ apiName: 'EmailBouncedReason', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    emailBouncedReason: string;
    @sField({ apiName: 'EmailBouncedDate', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    emailBouncedDate: Date;
    @sField({ apiName: 'IsEmailBounced', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    isEmailBounced: boolean;
    @sField({ apiName: 'PhotoUrl', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'url' })
    photoUrl: string;
    @sField({ apiName: 'Jigsaw', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    jigsaw: string;
    @sField({ apiName: 'JigsawContactId', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    jigsawContactId: string;
    @sField({ apiName: 'Contact_Type__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    contactType: string;
    @sField({ apiName: 'Email_Options__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    emailOptions: string;
    @sField({ apiName: 'Email_Type__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    emailType: string;
    @sField({ apiName: 'Lead_Owner_Email__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'email' })
    leadOwnerEmail: string;
    @sField({ apiName: 'Contact_Owner_Email__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    contactOwnerEmailId: string;
    @sField({ apiName: 'mkto2__Acquisition_Date__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    mkto2AcquisitionDate: Date;
    @sField({ apiName: 'mkto2__Acquisition_Program_Id__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    mkto2AcquisitionProgramId: number;
    @sField({ apiName: 'mkto2__Acquisition_Program__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mkto2AcquisitionProgram: string;
    @sField({ apiName: 'mkto2__Inferred_City__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mkto2InferredCity: string;
    @sField({ apiName: 'mkto2__Inferred_Company__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mkto2InferredCompany: string;
    @sField({ apiName: 'mkto2__Inferred_Country__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mkto2InferredCountry: string;
    @sField({ apiName: 'mkto2__Inferred_Metropolitan_Area__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mkto2InferredMetropolitanArea: string;
    @sField({ apiName: 'mkto2__Inferred_Phone_Area_Code__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mkto2InferredPhoneAreaCode: string;
    @sField({ apiName: 'mkto2__Inferred_Postal_Code__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mkto2InferredPostalCode: string;
    @sField({ apiName: 'mkto2__Inferred_State_Region__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mkto2InferredStateRegion: string;
    @sField({ apiName: 'mkto2__Lead_Score__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    mkto2LeadScore: number;
    @sField({ apiName: 'mkto2__Original_Referrer__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mkto2OriginalReferrer: string;
    @sField({ apiName: 'mkto2__Original_Search_Engine__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mkto2OriginalSearchEngine: string;
    @sField({ apiName: 'mkto2__Original_Search_Phrase__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mkto2OriginalSearchPhrase: string;
    @sField({ apiName: 'mkto2__Original_Source_Info__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    mkto2OriginalSourceInfo: string;
    @sField({ apiName: 'mkto2__Original_Source_Type__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mkto2OriginalSourceType: string;
    @sField({ apiName: 'rh2__Currency_Test__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'currency' })
    rh2CurrencyTest: number;
    @sField({ apiName: 'mkto_si__HideDate__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    mktosiHideDate: Date;
    @sField({ apiName: 'mkto_si__Last_Interesting_Moment_Date__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    mktosiLastInterestingMomentDate: Date;
    @sField({ apiName: 'mkto_si__Last_Interesting_Moment_Desc__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    mktosiLastInterestingMomentDesc: string;
    @sField({ apiName: 'mkto_si__Last_Interesting_Moment_Source__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mktosiLastInterestingMomentSource: string;
    @sField({ apiName: 'mkto_si__Last_Interesting_Moment_Type__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mktosiLastInterestingMomentType: string;
    @sField({ apiName: 'mkto_si__Last_Interesting_Moment__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mktosiLastInterestingMoment: string;
    @sField({ apiName: 'mkto_si__Priority__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    mktosiPriority: number;
    @sField({ apiName: 'mkto_si__Relative_Score_Value__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    mktosiRelativeScoreValue: number;
    @sField({ apiName: 'mkto_si__Relative_Score__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mktosiRelativeScore: string;
    @sField({ apiName: 'mkto_si__Sales_Insight__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mktosiSalesInsight: string;
    @sField({ apiName: 'mkto_si__Urgency_Value__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    mktosiUrgencyValue: number;
    @sField({ apiName: 'mkto_si__Urgency__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mktosiUrgency: string;
    @sField({ apiName: 'mkto_si__View_in_Marketo__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mktosiViewinMarketo: string;
    @sField({ apiName: 'rh2__Describe__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    rh2DescribeId: string;
    @sField({ apiName: 'rh2__Formula_Test__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'currency' })
    rh2FormulaTest: number;
    @sField({ apiName: 'rh2__Integer_Test__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    rh2IntegerTest: number;
    @sField({ apiName: 'Email_Hard_Bounced__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    emailHardBounced: boolean;
    /**
     * If this is greater than 1, the Marketo Score will appear higher since more than one contact is being scored.  Pick one contact to be scored for each account.
     */
    @sField({ apiName: 'Marketo_Score__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    marketoScore: boolean;
    @sField({ apiName: 'Account_Number__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    accountNumber: string;
    @sField({ apiName: 'Special_Programs__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'multipicklist' })
    specialPrograms: string;
    @sField({ apiName: 'TOS_Accepted__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    tOSAccepted: boolean;
    @sField({ apiName: 'Marketable__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    marketable: boolean;
    @sField({ apiName: 'Sync_with_Marketo__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    syncwithMarketo: boolean;
    @sField({ apiName: 'SMS_Opt_in__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    sMSOptin: boolean;
    /**
     * Name of last survey they took
     */
    @sField({ apiName: 'Last_Survey__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    lastSurvey: string;
    @sField({ apiName: 'Survey_Activity_Stream__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    surveyActivityStream: string;
    @sField({ apiName: 'Last_Survey_Date__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    lastSurveyDate: string;
    @sField({ apiName: 'Business_Hours__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    businessHours: string;
    @sField({ apiName: 'Business_Hours_Start__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    businessHoursStart: string;
    @sField({ apiName: 'Business_Hours_End__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    businessHoursEnd: string;
    @sField({ apiName: 'Practice_Time_Zone__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    practiceTimeZone: string;
    @sField({ apiName: 'Primary_Billing_Contact__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    primaryBillingContact: boolean;
    @sField({ apiName: 'Advisor_Out__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    advisorOut: boolean;
    @sField({ apiName: 'Advisor_Out_Start_Date__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    advisorOutStartDate: string;
    @sField({ apiName: 'Advisor_Out_End_Date__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    advisorOutEndDate: string;
    @sField({ apiName: 'RS_Connect_Primary_Contact_First_Name__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    rSConnectPrimaryContactFirstName: string;
    @sField({ apiName: 'RS_Connect_Primary_Contact_Last_Name__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    rSConnectPrimaryContactLastName: string;
    @sField({ apiName: 'RS_Connect_Primary_Contact_Email__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    rSConnectPrimaryContactEmail: string;
    /**
     * When case type is set to 'Full Deactivation Request', the case number will get set to this field.
     */
    @sField({ apiName: 'Deactivation_Case_Number__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    deactivationCaseNumber: string;
    @sField({ apiName: 'mkto_si__Add_to_Marketo_Campaign__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mktosiAddtoMarketoCampaign: string;
    @sField({ apiName: 'mkto_si__Mkto_Lead_Score__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    mktosiMktoLeadScore: number;
    @sField({ apiName: 'mkto71_Lead_Score__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    mkto71LeadScore: number;
    @sField({ apiName: 'mkto71_Acquisition_Date__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    mkto71AcquisitionDate: Date;
    @sField({ apiName: 'mkto71_Acquisition_Program__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    mkto71AcquisitionProgram: string;
    /**
     * A/B Testing value.  Used by marketo.  Carried from Lead or Account
     */
    @sField({ apiName: 'AB_Value__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'double' })
    aBValue: number;
    @sField({ apiName: 'Lead_Effort__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    leadEffort: string;
    @sField({ apiName: 'Last_Provider_Sat_Survey__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    lastProviderSatSurvey: Date;
    /**
     * Set to true when a person expresses consent for marketing or promotional messages. Must be declared by the individual with a specific date/time and a description with the reason why (such as a Marketing program)
     */
    @sField({ apiName: 'Expressed_Marketing_Consent__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    expressedMarketingConsent: boolean;
    /**
     * A date/time that this person opted in to receive marketing communications.
     */
    @sField({ apiName: 'Expressed_Marketing_Consent_Date__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    expressedMarketingConsentDate: Date;
    /**
     * The specific marketing program or event (like a conversation with sales) where the person consented.
     */
    @sField({ apiName: 'Expressed_Consent_Description__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    expressedConsentDescription: string;
    @sField({ apiName: 'Procedure_Types_Offered__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    procedureTypesOffered: string;
    @sField({ apiName: 'Medical_Director__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    medicalDirector: boolean;
    @sField({ apiName: 'Medical_Director_Name__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    medicalDirectorName: string;
    @sField({ apiName: 'Medical_Director_Specialty__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    medicalDirectorSpecialty: string;
    @sField({ apiName: 'Business_Owner__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    businessOwner: boolean;
    @sField({ apiName: 'Decision_Maker__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    decisionMaker: boolean;
    /**
     * Denotes whether a contact has implied marketing consent because of their activities
     */
    @sField({ apiName: 'Implied_Marketing_Consent__c', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    impliedMarketingConsent: boolean;
    @sField({ apiName: 'Implied_Marketing_Consent_Date__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    impliedMarketingConsentDate: Date;
    constructor(fields?: ContactFields) {
        super('Contact');
        this.accounts1 = void 0;
        this.accounts = void 0;
        this.accounts3 = void 0;
        this.accounts2 = void 0;
        this.tasks = void 0;
        this.id = void 0;
        this.isDeleted = void 0;
        this.masterRecord = void 0;
        this.masterRecordIdId = void 0;
        this.account = void 0;
        this.accountIdId = void 0;
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
        this.reportsToIdId = void 0;
        this.email = void 0;
        this.title = void 0;
        this.department = void 0;
        this.assistantName = void 0;
        this.leadSource = void 0;
        this.birthdate = void 0;
        this.description = void 0;
        this.ownerIdId = void 0;
        this.hasOptedOutOfEmail = void 0;
        this.createdDate = void 0;
        this.createdByIdId = void 0;
        this.lastModifiedDate = void 0;
        this.lastModifiedByIdId = void 0;
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
        this.contactType = void 0;
        this.emailOptions = void 0;
        this.emailType = void 0;
        this.leadOwnerEmail = void 0;
        this.contactOwnerEmailId = void 0;
        this.mkto2AcquisitionDate = void 0;
        this.mkto2AcquisitionProgramId = void 0;
        this.mkto2AcquisitionProgram = void 0;
        this.mkto2InferredCity = void 0;
        this.mkto2InferredCompany = void 0;
        this.mkto2InferredCountry = void 0;
        this.mkto2InferredMetropolitanArea = void 0;
        this.mkto2InferredPhoneAreaCode = void 0;
        this.mkto2InferredPostalCode = void 0;
        this.mkto2InferredStateRegion = void 0;
        this.mkto2LeadScore = void 0;
        this.mkto2OriginalReferrer = void 0;
        this.mkto2OriginalSearchEngine = void 0;
        this.mkto2OriginalSearchPhrase = void 0;
        this.mkto2OriginalSourceInfo = void 0;
        this.mkto2OriginalSourceType = void 0;
        this.rh2CurrencyTest = void 0;
        this.mktosiHideDate = void 0;
        this.mktosiLastInterestingMomentDate = void 0;
        this.mktosiLastInterestingMomentDesc = void 0;
        this.mktosiLastInterestingMomentSource = void 0;
        this.mktosiLastInterestingMomentType = void 0;
        this.mktosiLastInterestingMoment = void 0;
        this.mktosiPriority = void 0;
        this.mktosiRelativeScoreValue = void 0;
        this.mktosiRelativeScore = void 0;
        this.mktosiSalesInsight = void 0;
        this.mktosiUrgencyValue = void 0;
        this.mktosiUrgency = void 0;
        this.mktosiViewinMarketo = void 0;
        this.rh2DescribeId = void 0;
        this.rh2FormulaTest = void 0;
        this.rh2IntegerTest = void 0;
        this.emailHardBounced = void 0;
        this.marketoScore = void 0;
        this.accountNumber = void 0;
        this.specialPrograms = void 0;
        this.tOSAccepted = void 0;
        this.marketable = void 0;
        this.syncwithMarketo = void 0;
        this.sMSOptin = void 0;
        this.lastSurvey = void 0;
        this.surveyActivityStream = void 0;
        this.lastSurveyDate = void 0;
        this.businessHours = void 0;
        this.businessHoursStart = void 0;
        this.businessHoursEnd = void 0;
        this.practiceTimeZone = void 0;
        this.primaryBillingContact = void 0;
        this.advisorOut = void 0;
        this.advisorOutStartDate = void 0;
        this.advisorOutEndDate = void 0;
        this.rSConnectPrimaryContactFirstName = void 0;
        this.rSConnectPrimaryContactLastName = void 0;
        this.rSConnectPrimaryContactEmail = void 0;
        this.deactivationCaseNumber = void 0;
        this.mktosiAddtoMarketoCampaign = void 0;
        this.mktosiMktoLeadScore = void 0;
        this.mkto71LeadScore = void 0;
        this.mkto71AcquisitionDate = void 0;
        this.mkto71AcquisitionProgram = void 0;
        this.aBValue = void 0;
        this.leadEffort = void 0;
        this.lastProviderSatSurvey = void 0;
        this.expressedMarketingConsent = void 0;
        this.expressedMarketingConsentDate = void 0;
        this.expressedConsentDescription = void 0;
        this.procedureTypesOffered = void 0;
        this.medicalDirector = void 0;
        this.medicalDirectorName = void 0;
        this.medicalDirectorSpecialty = void 0;
        this.businessOwner = void 0;
        this.decisionMaker = void 0;
        this.impliedMarketingConsent = void 0;
        this.impliedMarketingConsentDate = void 0;
        Object.assign(this, fields);
    }
    static async retrieve(qry: string): Promise<Contact[]> {
        return await RestObject.query<Contact>(Contact, qry);
    }
    toImmutable(): ContactFields {
        return this.clone();
    }
}
/**
 * Immutable Property Interface for Task
 */
export interface TaskFields {
    readonly id?: string;
    readonly who?: Name;
    readonly whoIdId?: string;
    readonly whatIdId?: string;
    readonly whoCount?: string;
    readonly whatCount?: string;
    readonly subject?: string;
    readonly activityDate?: Date;
    readonly status?: string;
    readonly priority?: string;
    readonly isHighPriority?: boolean;
    readonly ownerIdId?: string;
    readonly description?: string;
    readonly isDeleted?: boolean;
    readonly account?: Account;
    readonly accountIdId?: string;
    readonly isClosed?: boolean;
    readonly createdDate?: Date;
    readonly createdByIdId?: string;
    readonly lastModifiedDate?: Date;
    readonly lastModifiedByIdId?: string;
    readonly systemModstamp?: Date;
    readonly isArchived?: boolean;
    readonly callDurationInSeconds?: string;
    readonly callType?: string;
    readonly callDisposition?: string;
    readonly callObject?: string;
    readonly reminderDateTime?: Date;
    readonly isReminderSet?: boolean;
    readonly recurrenceActivityIdId?: string;
    readonly isRecurrence?: boolean;
    readonly recurrenceStartDateOnly?: Date;
    readonly recurrenceEndDateOnly?: Date;
    readonly recurrenceTimeZoneSidKey?: string;
    readonly recurrenceType?: string;
    readonly recurrenceInterval?: string;
    readonly recurrenceDayOfWeekMask?: string;
    readonly recurrenceDayOfMonth?: string;
    readonly recurrenceInstance?: string;
    readonly recurrenceMonthOfYear?: string;
    readonly recurrenceRegeneratedType?: string;
    readonly taskSubtype?: string;
    readonly ringCentralCallRecording?: string;
    readonly ringCentralRCLoggingType?: string;
    readonly ringCentralRecordingInformation?: string;
}
/**
 * Generated class for Task
 */
export class Task extends RestObject  implements TaskFields {
    @sField({ apiName: 'Id', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'id' })
    id: string;
    @sField({ apiName: 'Who', readOnly: true, required: false, reference: () => { return Name; }, childRelationship: false, salesforceType: 'undefined' })
    who: Name;
    @sField({ apiName: 'WhoId', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    whoIdId: string;
    @sField({ apiName: 'WhatId', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    whatIdId: string;
    @sField({ apiName: 'WhoCount', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'int' })
    whoCount: string;
    @sField({ apiName: 'WhatCount', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'int' })
    whatCount: string;
    @sField({ apiName: 'Subject', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'combobox' })
    subject: string;
    @sField({ apiName: 'ActivityDate', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    activityDate: Date;
    @sField({ apiName: 'Status', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    status: string;
    @sField({ apiName: 'Priority', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    priority: string;
    @sField({ apiName: 'IsHighPriority', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    isHighPriority: boolean;
    @sField({ apiName: 'OwnerId', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    ownerIdId: string;
    @sField({ apiName: 'Description', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'textarea' })
    description: string;
    @sField({ apiName: 'IsDeleted', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    isDeleted: boolean;
    @sField({ apiName: 'Account', readOnly: true, required: false, reference: () => { return Account; }, childRelationship: false, salesforceType: 'undefined' })
    account: Account;
    @sField({ apiName: 'AccountId', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    accountIdId: string;
    @sField({ apiName: 'IsClosed', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    isClosed: boolean;
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
    @sField({ apiName: 'IsArchived', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    isArchived: boolean;
    @sField({ apiName: 'CallDurationInSeconds', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'int' })
    callDurationInSeconds: string;
    @sField({ apiName: 'CallType', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    callType: string;
    @sField({ apiName: 'CallDisposition', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    callDisposition: string;
    @sField({ apiName: 'CallObject', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    callObject: string;
    @sField({ apiName: 'ReminderDateTime', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'datetime' })
    reminderDateTime: Date;
    @sField({ apiName: 'IsReminderSet', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    isReminderSet: boolean;
    @sField({ apiName: 'RecurrenceActivityId', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'reference' })
    recurrenceActivityIdId: string;
    @sField({ apiName: 'IsRecurrence', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: 'boolean' })
    isRecurrence: boolean;
    @sField({ apiName: 'RecurrenceStartDateOnly', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    recurrenceStartDateOnly: Date;
    @sField({ apiName: 'RecurrenceEndDateOnly', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'date' })
    recurrenceEndDateOnly: Date;
    @sField({ apiName: 'RecurrenceTimeZoneSidKey', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    recurrenceTimeZoneSidKey: string;
    @sField({ apiName: 'RecurrenceType', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    recurrenceType: string;
    @sField({ apiName: 'RecurrenceInterval', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'int' })
    recurrenceInterval: string;
    @sField({ apiName: 'RecurrenceDayOfWeekMask', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'int' })
    recurrenceDayOfWeekMask: string;
    @sField({ apiName: 'RecurrenceDayOfMonth', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'int' })
    recurrenceDayOfMonth: string;
    @sField({ apiName: 'RecurrenceInstance', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    recurrenceInstance: string;
    @sField({ apiName: 'RecurrenceMonthOfYear', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    recurrenceMonthOfYear: string;
    @sField({ apiName: 'RecurrenceRegeneratedType', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    recurrenceRegeneratedType: string;
    @sField({ apiName: 'TaskSubtype', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'picklist' })
    taskSubtype: string;
    @sField({ apiName: 'RingCentral__Call_Recording__c', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    ringCentralCallRecording: string;
    @sField({ apiName: 'RingCentral__RC_Logging_Type__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    ringCentralRCLoggingType: string;
    @sField({ apiName: 'RingCentral__Recording_Information__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: 'string' })
    ringCentralRecordingInformation: string;
    constructor(fields?: TaskFields) {
        super('Task');
        this.id = void 0;
        this.who = void 0;
        this.whoIdId = void 0;
        this.whatIdId = void 0;
        this.whoCount = void 0;
        this.whatCount = void 0;
        this.subject = void 0;
        this.activityDate = void 0;
        this.status = void 0;
        this.priority = void 0;
        this.isHighPriority = void 0;
        this.ownerIdId = void 0;
        this.description = void 0;
        this.isDeleted = void 0;
        this.account = void 0;
        this.accountIdId = void 0;
        this.isClosed = void 0;
        this.createdDate = void 0;
        this.createdByIdId = void 0;
        this.lastModifiedDate = void 0;
        this.lastModifiedByIdId = void 0;
        this.systemModstamp = void 0;
        this.isArchived = void 0;
        this.callDurationInSeconds = void 0;
        this.callType = void 0;
        this.callDisposition = void 0;
        this.callObject = void 0;
        this.reminderDateTime = void 0;
        this.isReminderSet = void 0;
        this.recurrenceActivityIdId = void 0;
        this.isRecurrence = void 0;
        this.recurrenceStartDateOnly = void 0;
        this.recurrenceEndDateOnly = void 0;
        this.recurrenceTimeZoneSidKey = void 0;
        this.recurrenceType = void 0;
        this.recurrenceInterval = void 0;
        this.recurrenceDayOfWeekMask = void 0;
        this.recurrenceDayOfMonth = void 0;
        this.recurrenceInstance = void 0;
        this.recurrenceMonthOfYear = void 0;
        this.recurrenceRegeneratedType = void 0;
        this.taskSubtype = void 0;
        this.ringCentralCallRecording = void 0;
        this.ringCentralRCLoggingType = void 0;
        this.ringCentralRecordingInformation = void 0;
        Object.assign(this, fields);
    }
    static async retrieve(qry: string): Promise<Task[]> {
        return await RestObject.query<Task>(Task, qry);
    }
    toImmutable(): TaskFields {
        return this.clone();
    }
}

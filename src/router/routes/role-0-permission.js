// import { ROLE_0, ROUTE_NAME } from '@HELPER/const';

// const {
// 	// 代收管理
// 	RN_COLLECTION_MANAGEMENT,
// 	RN_SUB_MERCHANTS,
// 	RN_TRANSACTION_FLOW,
// 	// 优惠券管理
// 	RN_COUPON_MANAGEMENT,
// 	RN_DIGITAL_PRODUCTS_MANAGEMENT,
// 	RN_DIGITAL_PRODUCTS_FORM,
// 	RN_DIGITAL_PRODUCTS_SUIT_STORE,
// 	RN_DIGITAL_PRODUCTS_NOT_SUIT_STORE,
// 	RN_COUPON_ISSUE_MANAGEMENT,
// 	RN_COUPON_ISSUE_FORM,
// 	RN_COUPON_ISSUE_RECORD,
// 	RN_COUPON_TRANSACTION,
// 	RN_COUPON_WRITE_OFF_RECORD,
// 	RN_COUPON_SETTLEMENT_MANAGEMENT,
// 	RN_COUPON_RECYCLING,
// 	RN_COUPON_RECYCLING_RECORD,
// 	// 活动管理
// 	RN_EVENT_MANAGEMENT,
// 	RN_TRIGGER_TYPE,
// 	RN_SIGN_UP,
// 	RN_EVENT_LIST,
// 	RN_ACTIVITY_TEMPLATE,
// 	RN_CREATE_ACTIVITY_FORM,
// 	RN_SIGN_UP_FORM,
// 	RN_TRIGGER_TYPE_RECORD,
// 	RN_SIGN_UP_RECORD,
// 	// 广告位管理
// 	RN_ADVERTISING_MANAGEMENT,
// 	RN_ADVERTISING_LIST,
// 	RN_ADVERTISING_DETAIL,
// 	// 精选商品管理
// 	RN_CONTENT_MANAGEMENT,
// 	RN_BOUTIQUE_LIST,
// 	RN_BOUTIQUE_ADD,
// 	// 活动页管理
// 	RN_ACTIVITYPAGE_LIST,
// 	RN_ACTIVITYPAGE_ADD,
// 	// 商品模板管理
// 	RN_PRODUCT_TEMPLATE_MANAGEMENT,
// 	RN_PRODUCT_TEMPLATE_LIST,
// 	RN_PRODUCT_TEMPLATE_ADD,
// 	// 消息推送管理
// 	RN_MESSAGE_MANAGEMENT,
// 	RN_MESSAGE_LIST,
// 	RN_CREATE_MESSAGE_PUSH,
// 	// 配送管理
// 	RN_DELIVERY_MANAGEMENT,
// 	RN_RIDER_LIST,
// 	RN_SETTLEMENT_APPLY,
// 	// 配送管理
// 	RN_PATROL_MENAGEMENT,
// 	RN_PATROL_RECORD,
// 	RN_ATTENDANCE_RECORD,
// 	RN_PATROL_RULES_MENAGEMENT,
// 	RN_WORKFORCE_MENAGEMENT,
// 	RN_WORKFORCE_MENAGEMENT_ADD,
// 	RN_PATROL_RULES_ADD,
// 	// 结算账户管理
// 	RN_SETTLEMENT_MENAGEMENT,
// 	RN_SETTLEMENT_ACCOUNT_MENAGEMENT,
// 	// 报表管理
// 	RN_DATA_MANAGEMENT,
// 	RN_DATA_LIST,
// } = ROUTE_NAME;

// // 报表管理
// const dataManagement = r => require.ensure([], () => r(require('@VIEWS/role-0/data-management')), 'dataManagement');
// // 报表管理 / 报表列表
// const dataList = r => require.ensure([], () => r(require('@VIEWS/role-0/data-management/list/data-list')), 'dataList');

// // 代收管理
// const collectionManagement = r => require.ensure([], () => r(require('@VIEWS/role-0/collection-management')), 'collectionManagement');
// // 代收管理子商户列表
// const subMerchants = r => require.ensure([], () => r(require('@VIEWS/role-0/collection-management/list/sub-merchants')), 'subMerchants');
// // 代收交易流水
// const transactionFlow = r => require.ensure([], () => r(require('@VIEWS/role-0/collection-management/list/transaction-flow')), 'transactionFlow');

// // 优惠券管理
// const couponManagement = r => require.ensure([], () => r(require('@VIEWS/role-0/coupon-management')), 'couponManagement');
// // 优惠券管理 - 数字产品管理
// const digitalProductsManagement = r =>
// 	require.ensure([], () => r(require('@VIEWS/role-0/coupon-management/list/digital-products-management')), 'digitalProductsManagement');
// // 优惠券管理 - 数字产品表单
// const digitalProductsForm = r => require.ensure([], () => r(require('@VIEWS/role-0/coupon-management/form/digital-product-form')), 'digitalProductsForm');
// // 优惠券管理 - 适用店铺设置
// const digitalProductsSuitStore = r => require.ensure([], () => r(require('@VIEWS/role-0/coupon-management/form/suit-store')), 'digitalProductsSuitStore');
// // 优惠券管理 - 黑名单店铺设置
// const digitalProductsNotSuitStore = r =>
// 	require.ensure([], () => r(require('@VIEWS/role-0/coupon-management/form/not-suit-store')), 'digitalProductsNotSuitStore');
// // 优惠券管理 - 优惠券发行管理
// const couponIssueManagement = r =>
// 	require.ensure([], () => r(require('@VIEWS/role-0/coupon-management/list/coupon-issue-management')), 'couponIssueManagement');
// // 优惠券管理 - 优惠券发行申请
// const couponIssueForm = r => require.ensure([], () => r(require('@VIEWS/role-0/coupon-management/form/coupon-issue-form')), 'couponIssueForm');
// // 优惠券管理 - 优惠券发放记录
// const couponIssueRecord = r => require.ensure([], () => r(require('@VIEWS/role-0/coupon-management/list/coupon-issue-record')), 'couponIssueRecord');
// // 优惠券管理 - 优惠券交易流水
// const couponTransaction = r => require.ensure([], () => r(require('@VIEWS/role-0/coupon-management/list/coupon-transaction')), 'couponTransaction');
// // 优惠券管理 - 优惠券核销记录
// const couponWriteOffRecord = r => require.ensure([], () => r(require('@VIEWS/role-0/coupon-management/list/coupon-write-off-record')), 'couponWirteOffRecord');
// // 优惠券管理 - 优惠券结算管理
// const couponSettlementManagement = r =>
// 	require.ensure([], () => r(require('@VIEWS/role-0/coupon-management/list/coupon-settlement-management')), 'couponSettlementManagement');
// // 优惠券管理 - 优惠回收
// const couponRecycling = r => require.ensure([], () => r(require('@VIEWS/role-0/coupon-management/list/coupon-recycling')), 'couponRecycling');
// // 优惠券管理 - 优惠券回收记录
// const couponRecyclingRecord = r =>
// 	require.ensure([], () => r(require('@VIEWS/role-0/coupon-management/list/coupon-recycling-record')), 'couponRecyclingRecord');

// // 活动管理
// const eventManagement = r => require.ensure([], () => r(require('@VIEWS/role-0/event-management')), 'eventManagement');
// // 活动管理 - 活动列表（总）
// const eventList = r => require.ensure([], () => r(require('@VIEWS/role-0/event-management/list/event-list')), 'eventList');
// // 活动管理 - 活动模板
// const activityTemplate = r => require.ensure([], () => r(require('@VIEWS/role-0/event-management/list/activity-template')), 'activityTemplate');
// // 活动管理 - 触发型活动列表
// const triggerType = r => require.ensure([], () => r(require('@VIEWS/role-0/event-management/list/trigger-type')), 'triggerType');
// // 活动管理 - 报名型活动列表
// const signUp = r => require.ensure([], () => r(require('@VIEWS/role-0/event-management/list/sign-up')), 'signUp');
// // 活动管理 - 创建活动
// const createActivityForm = r => require.ensure([], () => r(require('@VIEWS/role-0/event-management/form/create-activity-form')), 'createActivityForm');
// // 活动管理 - 创建活动
// const createSignUpForm = r => require.ensure([], () => r(require('@VIEWS/role-0/event-management/form/create-sign-up-form')), 'createSignUpForm');
// // 活动管理 - 触发型活动记录
// const triggerTypeRecord = r => require.ensure([], () => r(require('@VIEWS/role-0/event-management/list/trigger-type-record')), 'triggerTypeRecord');
// // 活动管理 - 报名型活动记录
// const signUpRecord = r => require.ensure([], () => r(require('@VIEWS/role-0/event-management/list/sign-up-record')), 'signUpRecord');

// // 广告位管理
// const advertisingManagement = r => require.ensure([], () => r(require('@VIEWS/role-0/advertising-management')), 'advertisingManagement');
// // 广告位管理 - 列表
// const advertisingList = r => require.ensure([], () => r(require('@VIEWS/role-0/advertising-management/list/advertising-list')), 'advertisingList');
// // 广告位管理 - 查看广告
// const advertisingDetail = r => require.ensure([], () => r(require('@VIEWS/role-0/advertising-management/list/advertising-detail')), 'advertisingDetail');

// // 精选商品管理
// const boutiqueManagement = r => require.ensure([], () => r(require('@VIEWS/role-0/content-management')), 'boutiqueManagement');
// // 精选商品管理 - 卡片列表
// const boutiqueList = r => require.ensure([], () => r(require('@VIEWS/role-0/content-management/list/boutique-list')), 'boutiqueList');
// // 精选商品管理 - 新增卡片
// const boutiqueAdd = r => require.ensure([], () => r(require('@VIEWS/role-0/content-management/form/boutique-add')), 'boutiqueAdd');

// // 模板商品管理
// const productTemplateManagement = r => require.ensure([], () => r(require('@VIEWS/role-0/product-template-management')), 'productTemplateManagement');
// // 模板商品管理-列表
// const productTemplateList = r => require.ensure([], () => r(require('@VIEWS/role-0/product-template-management/list/product-template')), 'productTemplateList');
// // 模板商品管理-新增
// const productTemplateAdd = r =>
// 	require.ensure([], () => r(require('@VIEWS/role-0/product-template-management/form/product-template-add')), 'productTemplateAdd');

// // 消息推送管理
// const messageManagement = r => require.ensure([], () => r(require('@VIEWS/role-0/message-management')), 'messageManagement');
// // 消息推送管理列表
// const messageManagementList = r => require.ensure([], () => r(require('@VIEWS/role-0/message-management/list/message-list')), 'messageManagementList');
// // 广告位管理 - 列表
// const createMessagePush = r => require.ensure([], () => r(require('@VIEWS/role-0/message-management/list/create-message-push')), 'createMessagePush');
// // 配送管理
// const deliveryManagement = r => require.ensure([], () => r(require('@VIEWS/role-0/delivery-management')), 'deliveryManagement');
// // 骑手列表
// const riderList = r => require.ensure([], () => r(require('@VIEWS/role-0/delivery-management/list/rider-list')), 'deliveryManagement');
// // 骑手入驻申请
// const settlementApply = r => require.ensure([], () => r(require('@VIEWS/role-0/delivery-management/list/settlement-apply')), 'settlementApply');
// // 巡场管理
// const patrolManagement = r => require.ensure([], () => r(require('@VIEWS/role-0/patrol-management')), 'patrolManagement');
// // 巡场记录
// const patrolRecord = r => require.ensure([], () => r(require('@VIEWS/role-0/patrol-management/list/patrol-record')), 'patrolRecord');
// // 考勤记录
// const attendanceRecord = r => require.ensure([], () => r(require('@VIEWS/role-0/patrol-management/list/attendance-record')), 'attendanceRecord');
// // 巡场规则管理
// const patrolRulesManagement = r =>
// 	require.ensure([], () => r(require('@VIEWS/role-0/patrol-management/list/patrol-rules-management')), 'patrolRulesManagement');
// // 排班管理
// const workforceManagement = r => require.ensure([], () => r(require('@VIEWS/role-0/patrol-management/list/workforce-management')), 'workforceManagement');
// // 新增管理
// const workforceManagementAdd = r =>
// 	require.ensure([], () => r(require('@VIEWS/role-0/patrol-management/form/workforce-management-add')), 'workforceManagementAdd');
// // 新增巡场
// const patrolRulesAdd = r => require.ensure([], () => r(require('@VIEWS/role-0/patrol-management/form/patrol-rules-add')), 'patrolRulesAdd');
// // 新增巡场
// const activityPage = r => require.ensure([], () => r(require('@VIEWS/role-0/content-management/list/activity-page-management')), 'activityPage');
// const activityPageAdd = r => require.ensure([], () => r(require('@VIEWS/role-0/content-management/form/activity-page-add')), 'activityPageAdd');
// // 结算账户管理
// const settlementManagement = r => require.ensure([], () => r(require('@VIEWS/role-0/Settlement-management/index.vue')), 'settlementManagement');
// const settlementAccountManagement = r =>
// 	require.ensure([], () => r(require('@VIEWS/role-0/Settlement-management/list/Settlement-account-management')), 'settlementAccountManagement');

export default [];

// export default [
// 	// 报表管理
// 	{
// 		path: `/${RN_DATA_MANAGEMENT}`, // 报表管理
// 		name: RN_DATA_MANAGEMENT,
// 		component: dataManagement,
// 		redirect: {
// 			name: RN_DATA_LIST,
// 		},
// 		children: [
// 			{
// 				path: `/${RN_DATA_MANAGEMENT}/${RN_DATA_LIST}`, // 报表管理 - 报表列表
// 				name: RN_DATA_LIST,
// 				component: dataList,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 		],
// 	},

// 	// 代收管理
// 	{
// 		path: `/${RN_COLLECTION_MANAGEMENT}`, //
// 		name: RN_COLLECTION_MANAGEMENT,
// 		component: collectionManagement,
// 		redirect: {
// 			name: RN_SUB_MERCHANTS,
// 		},
// 		meta: {
// 			requireAuth: true,
// 			role: [ROLE_0],
// 		},
// 		children: [
// 			{
// 				path: `/${RN_COLLECTION_MANAGEMENT}/${RN_SUB_MERCHANTS}`, // 代收管理-子商户管理
// 				name: RN_SUB_MERCHANTS,
// 				component: subMerchants,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_COLLECTION_MANAGEMENT}/${RN_TRANSACTION_FLOW}`, // 代收管理-交易流水
// 				name: RN_TRANSACTION_FLOW,
// 				component: transactionFlow,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 		],
// 	},

// 	// 优惠券管理 coupon management
// 	{
// 		path: `/${RN_COUPON_MANAGEMENT}`, // 优惠券管理
// 		name: RN_COUPON_MANAGEMENT,
// 		component: couponManagement,
// 		redirect: {
// 			name: RN_DIGITAL_PRODUCTS_MANAGEMENT,
// 		},
// 		children: [
// 			{
// 				path: `/${RN_COUPON_MANAGEMENT}/${RN_DIGITAL_PRODUCTS_MANAGEMENT}`, // 优惠券管理 - 数字产品管理
// 				name: RN_DIGITAL_PRODUCTS_MANAGEMENT,
// 				component: digitalProductsManagement,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_COUPON_MANAGEMENT}/${RN_DIGITAL_PRODUCTS_FORM}`, // 优惠券管理 - 数字产品表单
// 				name: RN_DIGITAL_PRODUCTS_FORM,
// 				component: digitalProductsForm,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_COUPON_MANAGEMENT}/${RN_DIGITAL_PRODUCTS_SUIT_STORE}`, // 优惠券管理 - 适用店铺设置
// 				name: RN_DIGITAL_PRODUCTS_SUIT_STORE,
// 				component: digitalProductsSuitStore,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_COUPON_MANAGEMENT}/${RN_DIGITAL_PRODUCTS_NOT_SUIT_STORE}`, // 优惠券管理 - 黑名单店铺设置
// 				name: RN_DIGITAL_PRODUCTS_NOT_SUIT_STORE,
// 				component: digitalProductsNotSuitStore,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_COUPON_MANAGEMENT}/${RN_COUPON_ISSUE_MANAGEMENT}`, // 优惠券管理 - 优惠券发行管理
// 				name: RN_COUPON_ISSUE_MANAGEMENT,
// 				component: couponIssueManagement,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_COUPON_MANAGEMENT}/${RN_COUPON_ISSUE_FORM}`, // 优惠券管理 - 优惠券发行申请
// 				name: RN_COUPON_ISSUE_FORM,
// 				component: couponIssueForm,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_COUPON_MANAGEMENT}/${RN_COUPON_ISSUE_RECORD}`, // 优惠券管理 - 优惠券发放记录
// 				name: RN_COUPON_ISSUE_RECORD,
// 				component: couponIssueRecord,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_COUPON_MANAGEMENT}/${RN_COUPON_WRITE_OFF_RECORD}`, // 优惠券管理 - 优惠券核销记录
// 				name: RN_COUPON_WRITE_OFF_RECORD,
// 				component: couponWriteOffRecord,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_COUPON_MANAGEMENT}/${RN_COUPON_TRANSACTION}`, // 优惠券管理 - 优惠券交易流水
// 				name: RN_COUPON_TRANSACTION,
// 				component: couponTransaction,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_COUPON_MANAGEMENT}/${RN_COUPON_SETTLEMENT_MANAGEMENT}`, // 优惠券管理 - 优惠券结算管理
// 				name: RN_COUPON_SETTLEMENT_MANAGEMENT,
// 				component: couponSettlementManagement,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_COUPON_MANAGEMENT}/${RN_COUPON_RECYCLING}`, // 优惠券管理 - 优惠券回收
// 				name: RN_COUPON_RECYCLING,
// 				component: couponRecycling,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_COUPON_MANAGEMENT}/${RN_COUPON_RECYCLING_RECORD}`, // 优惠券管理 - 优惠券回收记录
// 				name: RN_COUPON_RECYCLING_RECORD,
// 				component: couponRecyclingRecord,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 		],
// 	},

// 	// 活动管理 event management
// 	{
// 		path: `/${RN_EVENT_MANAGEMENT}`, // 活动管理
// 		name: RN_EVENT_MANAGEMENT,
// 		component: eventManagement,
// 		redirect: {
// 			name: RN_ACTIVITY_TEMPLATE,
// 		},
// 		children: [
// 			{
// 				path: `/${RN_EVENT_MANAGEMENT}/${RN_EVENT_LIST}`, // 活动管理 - 活动列表（总）
// 				name: RN_EVENT_LIST,
// 				component: eventList,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_EVENT_MANAGEMENT}/${RN_ACTIVITY_TEMPLATE}`, // 活动管理 - 触发型活动列表
// 				name: RN_ACTIVITY_TEMPLATE,
// 				component: activityTemplate,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_EVENT_MANAGEMENT}/${RN_TRIGGER_TYPE}`, // 活动管理 - 触发型活动列表
// 				name: RN_TRIGGER_TYPE,
// 				component: triggerType,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_EVENT_MANAGEMENT}/${RN_SIGN_UP}`, // 活动管理 - 报名型活动列表
// 				name: RN_SIGN_UP,
// 				component: signUp,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_EVENT_MANAGEMENT}/${RN_CREATE_ACTIVITY_FORM}`, // 活动管理 - 报名型活动列表
// 				name: RN_CREATE_ACTIVITY_FORM,
// 				component: createActivityForm,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_EVENT_MANAGEMENT}/${RN_SIGN_UP_FORM}`, // 活动管理 - 报名型活动列表
// 				name: RN_SIGN_UP_FORM,
// 				component: createSignUpForm,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_EVENT_MANAGEMENT}/${RN_TRIGGER_TYPE_RECORD}`, // 活动管理 - 触发型活动记录
// 				name: RN_TRIGGER_TYPE_RECORD,
// 				component: triggerTypeRecord,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_EVENT_MANAGEMENT}/${RN_SIGN_UP_RECORD}`, // 活动管理 - 报名型活动记录
// 				name: RN_SIGN_UP_RECORD,
// 				component: signUpRecord,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 		],
// 	},

// 	// 广告位管理
// 	{
// 		path: `/${RN_ADVERTISING_MANAGEMENT}`, //
// 		name: RN_ADVERTISING_MANAGEMENT,
// 		component: advertisingManagement,
// 		redirect: {
// 			name: RN_ADVERTISING_LIST,
// 		},
// 		meta: {
// 			requireAuth: true,
// 			role: [ROLE_0],
// 		},
// 		children: [
// 			{
// 				path: `/${RN_ADVERTISING_MANAGEMENT}/${RN_ADVERTISING_LIST}`, // 广告位管理
// 				name: RN_ADVERTISING_LIST,
// 				component: advertisingList,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_ADVERTISING_MANAGEMENT}/${RN_ADVERTISING_DETAIL}`, // 广告位管理-设置/查看广告
// 				name: RN_ADVERTISING_DETAIL,
// 				component: advertisingDetail,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 		],
// 	},

// 	// 精选商品管理
// 	{
// 		path: `/${RN_CONTENT_MANAGEMENT}`, //
// 		name: RN_CONTENT_MANAGEMENT,
// 		component: boutiqueManagement,
// 		redirect: {
// 			name: RN_BOUTIQUE_LIST,
// 		},
// 		meta: {
// 			requireAuth: true,
// 			role: [ROLE_0],
// 		},
// 		children: [
// 			{
// 				path: `/${RN_CONTENT_MANAGEMENT}/${RN_BOUTIQUE_LIST}`, // 精选商品管理-卡片列表
// 				name: RN_BOUTIQUE_LIST,
// 				component: boutiqueList,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_CONTENT_MANAGEMENT}/${RN_BOUTIQUE_ADD}`, // 精选商品管理-新增卡片
// 				name: RN_BOUTIQUE_ADD,
// 				component: boutiqueAdd,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_CONTENT_MANAGEMENT}/${RN_ACTIVITYPAGE_LIST}`, // 活动页管理
// 				name: RN_ACTIVITYPAGE_LIST,
// 				component: activityPage,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_CONTENT_MANAGEMENT}/${RN_ACTIVITYPAGE_ADD}`, // 活动页管理
// 				name: RN_ACTIVITYPAGE_ADD,
// 				component: activityPageAdd,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			// {
// 			// 	path: `/${RN_CONTENT_MANAGEMENT}/${RN_PRODUCT_TEMPLATE}`, // 商品模板管理
// 			// 	name: RN_PRODUCT_TEMPLATE,
// 			// 	component: productTemplateList,
// 			// 	meta: {
// 			// 		requireAuth: true,
// 			// 		role: [ROLE_0],
// 			// 	},
// 			// },
// 			// {
// 			// 	path: `/${RN_CONTENT_MANAGEMENT}/${RN_PRODUCT_TEMPLATE_ADD}`, // 商品模板管理
// 			// 	name: RN_PRODUCT_TEMPLATE_ADD,
// 			// 	component: productTemplateAdd,
// 			// 	meta: {
// 			// 		requireAuth: true,
// 			// 		role: [ROLE_0],
// 			// 	},
// 			// },
// 		],
// 	},

// 	// 商品模板库管理
// 	{
// 		path: `/${RN_PRODUCT_TEMPLATE_MANAGEMENT}`,
// 		name: RN_PRODUCT_TEMPLATE_MANAGEMENT,
// 		component: productTemplateManagement,
// 		redirect: {
// 			name: RN_PRODUCT_TEMPLATE_LIST,
// 		},
// 		meta: {
// 			requireAuth: true,
// 			role: [ROLE_0],
// 		},
// 		children: [
// 			{
// 				path: `/${RN_PRODUCT_TEMPLATE_MANAGEMENT}/${RN_PRODUCT_TEMPLATE_LIST}`,
// 				name: RN_PRODUCT_TEMPLATE_LIST,
// 				component: productTemplateList,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_PRODUCT_TEMPLATE_MANAGEMENT}/${RN_PRODUCT_TEMPLATE_ADD}`,
// 				name: RN_PRODUCT_TEMPLATE_ADD,
// 				component: productTemplateAdd,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 		],
// 	},

// 	// 消息推送管理
// 	{
// 		path: `/${RN_MESSAGE_MANAGEMENT}`, //
// 		name: RN_MESSAGE_MANAGEMENT,
// 		component: messageManagement,
// 		redirect: {
// 			name: RN_MESSAGE_LIST,
// 		},
// 		meta: {
// 			requireAuth: true,
// 			role: [ROLE_0],
// 		},
// 		children: [
// 			{
// 				path: `/${RN_MESSAGE_MANAGEMENT}/${RN_MESSAGE_LIST}`, // 消息列表
// 				name: RN_MESSAGE_LIST,
// 				component: messageManagementList,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_MESSAGE_MANAGEMENT}/${RN_CREATE_MESSAGE_PUSH}`, // 新增消息推送
// 				name: RN_CREATE_MESSAGE_PUSH,
// 				component: createMessagePush,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 		],
// 	},

// 	// 配送管理
// 	{
// 		path: `/${RN_DELIVERY_MANAGEMENT}`, //
// 		name: RN_DELIVERY_MANAGEMENT,
// 		component: deliveryManagement,
// 		redirect: {
// 			name: RN_RIDER_LIST,
// 		},
// 		meta: {
// 			requireAuth: true,
// 			role: [ROLE_0],
// 		},
// 		children: [
// 			{
// 				path: `/${RN_DELIVERY_MANAGEMENT}/${RN_RIDER_LIST}`, // 骑手列表
// 				name: RN_RIDER_LIST,
// 				component: riderList,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_DELIVERY_MANAGEMENT}/${RN_SETTLEMENT_APPLY}`, // 骑手入驻申请列表
// 				name: RN_SETTLEMENT_APPLY,
// 				component: settlementApply,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 		],
// 	},
// 	// 巡场管理
// 	{
// 		path: `/${RN_PATROL_MENAGEMENT}`, //
// 		name: RN_PATROL_MENAGEMENT,
// 		component: patrolManagement,
// 		redirect: {
// 			name: RN_PATROL_RECORD,
// 		},
// 		meta: {
// 			requireAuth: true,
// 			role: [ROLE_0],
// 		},
// 		children: [
// 			{
// 				path: `/${RN_PATROL_MENAGEMENT}/${RN_PATROL_RECORD}`, // 巡场记录
// 				name: RN_PATROL_RECORD,
// 				component: patrolRecord,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_PATROL_MENAGEMENT}/${RN_ATTENDANCE_RECORD}`, // 考勤记录
// 				name: RN_ATTENDANCE_RECORD,
// 				component: attendanceRecord,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_PATROL_MENAGEMENT}/${RN_PATROL_RULES_MENAGEMENT}`, // 巡场规则管理
// 				name: RN_PATROL_RULES_MENAGEMENT,
// 				component: patrolRulesManagement,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_PATROL_MENAGEMENT}/${RN_WORKFORCE_MENAGEMENT}`, // 排班管理
// 				name: RN_WORKFORCE_MENAGEMENT,
// 				component: workforceManagement,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_PATROL_MENAGEMENT}/${RN_WORKFORCE_MENAGEMENT_ADD}`, // 新增排班
// 				name: RN_WORKFORCE_MENAGEMENT_ADD,
// 				component: workforceManagementAdd,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 			{
// 				path: `/${RN_PATROL_MENAGEMENT}/${RN_PATROL_RULES_ADD}`, // 新增巡场
// 				name: RN_PATROL_RULES_ADD,
// 				component: patrolRulesAdd,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 		],
// 	},
// 	{
// 		path: `/${RN_SETTLEMENT_MENAGEMENT}`, //
// 		name: RN_SETTLEMENT_MENAGEMENT,
// 		component: settlementManagement,
// 		redirect: {
// 			name: RN_SETTLEMENT_ACCOUNT_MENAGEMENT,
// 		},
// 		meta: {
// 			requireAuth: true,
// 			role: [ROLE_0],
// 		},
// 		children: [
// 			{
// 				path: `/${RN_SETTLEMENT_MENAGEMENT}/${RN_SETTLEMENT_ACCOUNT_MENAGEMENT}`, // 巡场记录
// 				name: RN_SETTLEMENT_ACCOUNT_MENAGEMENT,
// 				component: settlementAccountManagement,
// 				meta: {
// 					requireAuth: true,
// 					role: [ROLE_0],
// 				},
// 			},
// 		],
// 	},
// ];

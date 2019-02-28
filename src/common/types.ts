type Status = "ok" | "error";

type OrderStatus =
  | "pending"
  | "completed"
  | "cancelled"
  | "processing"
  | "delaying-shipment"
  | "on-hold"
  | "terminated";

type EventType =
  | "PAGE_VIEW"
  | "PRODUCT_DETAIL_VIEW"
  | "PRODUCT_ADD_TO_CART"
  | "PRODUCT_REMOVE_FROM_CART"
  | "NEWSLETTER_SUBSCRIBE"
  | "CHECKOUT_LOGIN"
  | "CHECKOUT_REGISTER"
  | "CHECKOUT_FORGOT_PASSWORD"
  | "CHECKOUT_SHIPPING_INFO"
  | "CHECKOUT_PAYMENT_INFO"
  | "PURCHASE"
  | "REGISTRATION_BEGIN"
  | "REGISTRATION_END"
  | "CHECKOUT_STEP"
  | "CHECKOUT_CREDITCARD_STATUS"
  | "CHECKOUT_RECEIPT_STATUS"
  | "CHECKOUT_CREATE_ORDER_FAIL"
  | "CHECKOUT_CREATE_SUBSCRIPTION_FAIL"
  | "CHECKOUT_ADD_ITEMS_TO_ORDER_FAIL"
  | "CHECKOUT_MARK_ORDER_COMPLETE_FAIL"
  | "CHECKOUT_CLEAR_CART_FAIL"
  | "CHECKOUT_MARK_SUBSCRIPTION_COMPLETE_FAIL"
  | "CHECKOUT_MAILING_LIST_STATUS"
  | "CHECKOUT_SHIPMENT_STATUS"
  | "CHECKOUT_AFFILIATE_STATUS"
  | "CHECKOUT_GA_PURCHASE_STATUS"
  | "CHECKOUT_APPLY_COUPON_FAIL"
  | "CHECKOUT_COUPON_APPLIED"
  | "CHECKOUT_COUPON_REJECTED"
  | "ACCOUNT_LOGIN_STATUS";

export interface ApiSession {
  userId: number;
  email: string;
}

export interface Session {
  id: string;
  jti?: string;
  iat?: number;
  exp?: number;
}

export interface Customer {
  id?: number;
  email: string;
  password?: string | null;
  first_name: string;
  last_name: string;
  created?: Date;
  deleted?: Date | null;
  created_by?: number | null;
  last_referring_url: string | null;
  last_referring_url_date: Date | null;
  last_affiliate: string | null;
  last_affiliate_date: Date | null;
  last_utm_source: string | null;
  last_utm_source_date: Date | null;
  last_utm_medium: string | null;
  last_utm_medium_date: Date | null;
  last_utm_term: string | null;
  last_utm_term_date: Date | null;
  last_utm_content: string | null;
  last_utm_content_date: Date | null;
  last_utm_campaign: string | null;
  last_utm_campaign_date: Date | null;
}

export interface CustomerSession {
  id: string;
  jti?: string;
  iat?: number;
  exp?: number;
  customer: Customer;
}

export interface Event {
  name: string;
  session_id: string | null;
  customer_id: number | null;
  order_id: number | null;
  subscription_id: number | null;
  product_id: number | null;
  product_variant_id: number | null;
  status: Status;
  error_message: string | null;
  context: object | null;
  save: Boolean;
}

export interface CustomerActivity {
  session_id: string;
  activity_type: EventType;
  customer_id: number | null;
  order_id: number | null;
  subscription_id: number | null;
  product_id: number | null;
  product_variant_id: number | null;
  status: Status;
  error_message: string | null;
  path: string | null;
  referring_url: string | null;
  affiliate: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_term: string | null;
  utm_content: string | null;
  utm_campaign: string | null;
  context: object | null;
}

export interface CartCoupon {
  id?: number;
  session_id: string;
  cart_type: "shopping" | "subscription";
  code: string;
  created?: Date;
  created_by?: number | null;
  deleted?: Date | null;
}

export interface CartItem {
  id?: number;
  session_id: string;
  cart_type: "subscription" | "shopping";
  created?: Date;
  created_by?: number | null;
  sku: string;
  quantity: number;
  shipping: number;
  total: number;
  subscription_plan_id: number;
}

export interface CartItemExpanded extends CartItem {
  variant: ProductVariant;
  product: Product;
  subscription_plan: ProductSubscriptionPlan | null;
}

export interface CartCoupon {
  id?: number;
  session_id: string;
  cart_type: "shopping" | "subscription";
  code: string;
  created?: Date;
  created_by?: number | null;
  deleted?: Date | null;
}

export interface Charge {
  id?: number;
  external_charge_id?: string;
  customer_id: number;
  order_id: number;
  subscription_id: number | null;
  charge_date: Date;
  charge_amount: number;
  refund_date: Date | null;
  refund_amount: number;
  created?: Date;
  deleted?: Date | null;
  created_by?: number | null;
  subtotal_amount: number;
  shipping_amount: number;
  discount_amount: number;
  tax_amount: number;
  tracking_referring_url?: string;
  tracking_referring_domain?: string;
  tracking_affiliate_code?: string;
  tracking_utm_source?: string;
  tracking_utm_medium?: string;
  tracking_utm_term?: string;
  tracking_utm_content?: string;
  tracking_utm_campaign?: string;
}

export interface Coupon {
  id?: number;
  code: string;
  description: string | null;
  type: "percent" | "fixed" | "product-fixed";
  amount: number;
  allow_free_shipping_p: Boolean;
  exclude_sale_items_p: Boolean;
  expiration: Date;
  minimum_spend: number;
  maximum_spend: number;
  includes_products: Array<number>;
  includes_subscription_plans: Array<number>;
  excludes_products: Array<number>;
  adds_variants: Array<number>;
  individual_use_p: Boolean;
  usage_limit: number;
  usage_limit_per_customer: number;
  created?: Date;
  deleted?: Date | null;
  created_by?: number | null;
}

export interface CustomerPaymentAccount {
  id?: number;
  customer_id: number;
  account_id: string;
  card_id?: string;
  created?: Date;
  deleted?: Date | null;
  created_by?: number | null;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
  mimetype: string;
}

export interface Image {
  id: string; // image ids are uuids
  url: string;
  name: string;
  size: number;
  width: number | null;
  height: number | null;
  mimetype: string;
  thumbnail: Thumbnail | null;
}

export interface Order {
  id?: number;
  customer_id: number;
  payment_account_id: number;
  status: OrderStatus;
  email: string;
  phone: string | null;
  billing_first_name: string | null;
  billing_last_name: string | null;
  billing_company: string | null;
  billing_address_1: string | null;
  billing_address_2: string | null;
  billing_address_city: string | null;
  billing_address_state: string | null;
  billing_address_postal: string | null;
  billing_address_country: string | null;
  shipping_first_name: string | null;
  shipping_last_name: string | null;
  shipping_company: string | null;
  shipping_address_1: string | null;
  shipping_address_2: string | null;
  shipping_address_city: string | null;
  shipping_address_state: string | null;
  shipping_address_postal: string | null;
  shipping_address_country: string | null;
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  created?: Date;
  deleted?: Date | null;
  created_by?: number | null;
  tracking_referring_url: string | null;
  tracking_referring_domain: string | null;
  tracking_affiliate_code: string | null;
  tracking_utm_source: string | null;
  tracking_utm_medium: string | null;
  tracking_utm_term: string | null;
  tracking_utm_content: string | null;
  tracking_utm_campaign: string | null;
  payment_token: string | null;
  payment_description: string | null;
  charge_error_message: string | null;
}

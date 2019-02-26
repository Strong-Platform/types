type Status = "ok" | "error";

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
  id: number;
  email: string;
  password?: string | null;
  first_name: string;
  last_name: string;
  created: Date;
  deleted: Date | null;
  created_by: number;
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
  context: Object | null;
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
  context: Object | null;
}

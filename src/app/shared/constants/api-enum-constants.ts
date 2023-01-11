export enum APIMethod {
    GET,
    POST,
    PUT,
    DELETE,
  }

  export enum ApiResponseCodes {
    SUCCESS="0000",
    CRM_CREATION="5000",
    TECHNICAL_ERROR="1001",
    CRM_DEDUPE_FAILURE="5001",
    TRADE_SEARCH_FAILURE="5002",
    RIM_CREATION_FAILURE="5003",
    ACCOUNT_CREATION_FAILURE="5004",
    NORBLOC_RULES_FAILURE="5005",
    NORBLOC_CALL_FAILURE="5006",
    ADIB_POST_5007="5007",
    ADIB_POST_5008="5008",
    ADIB_POST_5009="5009",
    ADIB_POST_5010="5010",
    ADIB_POST_5011="5011",
    ADIB_POST_5012="5012",
    RESPONSE_5013="5013",
    RESPONSE_5014="5014",
    RESPONSE_5015="5015",
    RESPONSE_5016="5016",


    //_500 = "500",
    //_412 = "412"
  }

  export enum APIResponseMessage
  {
    ERRROR="error",
    SUCCESS="Success",
    CRMEX="CRMEX"
  }

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { APIMethod } from "../../shared/constants/api-enum-constants";
import { EnvironmentVariableService } from "./environment-variable.service";
// import { SessionStorageService } from "src/app/shared/storage-services/session-storage.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class NetworkService {
    constructor(private httpClient: HttpClient, private envService: EnvironmentVariableService
        // , private sessionStorageService :SessionStorageService
        ) { }
    //Declaration Secation
    public call<Res>(url: string, method: APIMethod, queryParams?: Map<string, string | number>): Observable<Res>;
    public call<Req, Res>(url: string, method: APIMethod, queryParams: Map<string, string | number>, bodyData: Req): Observable<Res>;
    public call<Req, Res>(url: string, method: APIMethod, queryParams: Map<string, string | number>, bodyData: Req, shouldWrapRequest: boolean): Observable<Res>;

    //Implementation Section
    public call<Req, Res>(url: string, method: APIMethod, queryParams?: Map<string, string | number>, bodyData?: Req, shouldWrapRequest: boolean = true): Observable<Res> | undefined {
        switch (method) {
            case APIMethod.GET: {
            //   alert(this.envService.env.BASE_API_URL)
                return this.get<Res>((!!this.envService?.env?.BASE_API_URL?this.envService.env.BASE_API_URL:environment.baseUrl) + url);
            }
                break;
            case APIMethod.POST: {
                return this.post<Req | undefined, Res>((!!this.envService?.env?.BASE_API_URL?this.envService.env.BASE_API_URL:environment.baseUrl) + url, bodyData, shouldWrapRequest);
            }
                break;
            case APIMethod.PUT: {
                return this.put<Req | undefined, Res>((!!this.envService?.env?.BASE_API_URL?this.envService.env.BASE_API_URL:environment.baseUrl) + url, bodyData);
            }
                break;
            case APIMethod.DELETE: {
                return this.delete<Res>((!!this.envService?.env?.BASE_API_URL?this.envService.env.BASE_API_URL:environment.baseUrl) + url);
            }
                break;
        }
    }

    private get<Resp>(url: string): Observable<Resp> {
        return this.httpClient.get<Resp>(url);
    }

    private post<Req, Resp>(url: string, bodyData: Req, shouldWrapRequest: boolean = true): Observable<Resp> {
        if (shouldWrapRequest) {
          const body = bodyData;
            // const body: BaseRequest<Req> = {
            //     data: bodyData
            // }
            return this.httpClient.post<Resp>(url, body);
        } else {
            return this.httpClient.post<Resp>(url, bodyData);
        }
    }

    private put<Req, Resp>(url: string, bodyData: Req): Observable<Resp> {
        // const body = bodyData;
        // const body: BaseRequest<Req> = {
        //     data: bodyData
        // }
        return this.httpClient.put<Resp>(url, bodyData);
    }

    private delete<Resp>(url: string): Observable<Resp> {
        return this.httpClient.delete<Resp>(url);
    }

    // public uploadDocument<Res>(url: string, files: any, docType : string, appRefNum : string, issuerAuth : string): Observable<Res> {
    //     var formData = new FormData();

    //     files.forEach((file : any) => {
    //         file.forEach((_file : any) => {
    //         formData.append('file', _file, _file.name);
    //         })
    //     })

    //     formData.append('type', 'WEB');
    //     formData.append('base64string ', "");
    //     formData.append('docType', docType);
    //     formData.append('issuerAuth', issuerAuth);
    //     formData.append('app_ref_no', appRefNum);
    //     formData.append('mode', 'STORE');
    //     formData.append('pageRef', '1');
        
    //     let urlStr = this.envService.env.BASE_API_URL + url;
    //     return this.httpClient.post<Res>(urlStr, formData, {
    //         headers: {
    //             'skipContentType': 'skip'
    //         }
    //     });
    // }

    // public uploadDocumentMobile<Res>(url: string, files: any, docType : string, appRefNum : string, issuerAuth : string): Observable<Res> {
    //     var formData = new FormData();
        
    //     let file = new Blob(['Lorem ipsum'], { type: 'plain/text' });

    //     let pageRef = "";
    //     if(docType == DocumentTypeConstant.EMIRATES_ID || docType == DocumentTypeConstant.TRADE_LICENSE || docType == DocumentTypeConstant.VISA || docType == DocumentTypeConstant.ADDRESS_PROOF || docType == DocumentTypeConstant.MOAAOA || docType == DocumentTypeConstant.POWER_OF_ATTORNEY || docType == DocumentTypeConstant.PASSPORT || docType == DocumentTypeConstant.SECOND_PASSPORT || docType == DocumentTypeConstant.SIGNATURE)
    //         pageRef = "1";
    //     else{
    //         pageRef = "2";
    //     }

    //     if(docType == DocumentTypeConstant.EMIRATES_ID_BACK)
    //         docType = DocumentTypeConstant.EMIRATES_ID;

    //     formData.append('type', 'MOBILE');
    //     formData.append('base64string ', files);
    //     formData.append('docType', docType);
    //     formData.append('issuerAuth', "DET");
    //     formData.append('app_ref_no', appRefNum);
    //     formData.append('mode', 'STORE');
    //     formData.append('pageRef', pageRef);
    //     formData.append('file', file);

    //     let urlStr = this.envService.env.BASE_API_URL + url;
    //     return this.httpClient.post<Res>(urlStr, formData, {
    //         headers: {
    //             'skipContentType': 'skip'
    //         }
    //     });
    // }
    // public uploadEmiratesId<Res>(url: string, files: any, docType : string, appRefNum : string): Observable<Res> {
    //     var formData = new FormData();

    //     let pageRef = "";
    //     if(docType == DocumentTypeConstant.EMIRATES_ID)
    //         pageRef = "1";
    //     else
    //         pageRef = "2";

    //     formData.append('file', files[0], files[0].name);

    //     formData.append('type', 'WEB');
    //     formData.append('base64string ', "");
    //     formData.append('docType', DocumentTypeConstant.EMIRATES_ID);
    //     formData.append('app_ref_no', appRefNum);
    //     formData.append('mode', 'STORE');
    //     formData.append('pageRef', pageRef);

    //     let urlStr = this.envService.env.BASE_API_URL + url;
    //     return this.httpClient.post<Res>(urlStr, formData, {
    //         headers: {
    //             'skipContentType': 'skip'
    //         }
    //     });
    // }

    // public uploadPassport<Res>(url: string, files: any, docType : string, appRefNum : string): Observable<Res> {
    //     var formData = new FormData();

    //     let pageRef = "1";
    //     // if(docType == DocumentTypeConstant.PASSPORT)
    //     //     pageRef = "1";
    //     // else
    //     //     pageRef = "2";

    //     formData.append('file', files[0], files[0].name);

    //     formData.append('type', 'WEB');
    //     formData.append('base64string ', "");
    //     formData.append('docType', docType);
    //     formData.append('app_ref_no', appRefNum);
    //     formData.append('mode', 'STORE');
    //     formData.append('pageRef', pageRef);

    //     let urlStr = this.envService.env.BASE_API_URL + url;
    //     return this.httpClient.post<Res>(urlStr, formData, {
    //         headers: {
    //             'skipContentType': 'skip'
    //         }
    //     });
    // }

    // public uploadAddressProof<Res>(url: string, files: any, docType : string, appRefNum : string): Observable<Res> {
    //     var formData = new FormData();

    //     // let pageRef = "";
    //     // if(docType == DocumentTypeConstant.ADDRESS_PROOF)
    //     //     pageRef = "1";
    //     // else
    //     //     pageRef = "2";

    //     formData.append('file', files[0], files[0].name);

    //     formData.append('type', 'WEB');
    //     formData.append('base64string ', "");
    //     formData.append('docType', docType);
    //     formData.append('app_ref_no', appRefNum);
    //     formData.append('mode', 'STORE');
    //     formData.append('pageRef', '1');

    //     let urlStr = this.envService.env.BASE_API_URL + url;
    //     return this.httpClient.post<Res>(urlStr, formData, {
    //         headers: {
    //             'skipContentType': 'skip'
    //         }
    //     });
    // }

    // public uploadDocumentForOCR<Res>(url: string, files: any, appRefNum : string): Observable<Res> {
    //     var formData = new FormData();

    //     files.forEach((file : any) => {
    //         formData.append('file', file[0], file[0].name);
    //     })

    //     formData.append('docType', 'TL');
    //     formData.append('app_ref_no', appRefNum);

    //     let urlStr = this.envService.env.BASE_API_URL + url;
    //     return this.httpClient.post<Res>(urlStr, formData, {
    //         headers: {
    //             'skipContentType': 'skip'
    //         }
    //     });
    // }

    // public uploadTiffForConversion<Res>(url: string, file: any): Observable<Res> {
    //     var formData = new FormData();

    //         formData.append('file', file, file.name);

    //     let urlStr = this.envService.env.BASE_API_URL + url;
    //     return this.httpClient.post<Res>(urlStr, formData, {
    //         headers: {
    //             "contentType" : "text/plain"
    //         }
    //     });
    // }

    
    // public uploadPDFForSinglePageConversion<Res>(url: string, file: any): Observable<Res> {
    //     var formData = new FormData();

    //         formData.append('file', file[0], file[0].name);

    //     let urlStr = this.envService.env.BASE_API_URL + url;
    //     return this.httpClient.post<Res>(urlStr, formData, {
    //         headers: {
    //             'skipContentType': 'skip'
    //         }
    //     });
    // }


    // public uploadDocumentForOCRTradeLic<Res>(url: string): Observable<Res> {
    //     var formData = new FormData();

    //     // files.forEach((file : any) => {
    //     //     formData.append('file', file[0], file[0].name);
    //     // })

    //     formData.append('docType', 'TL');
    //     // formData.append('app_ref_no', appRefNum);

    //     let urlStr = this.envService.env.BASE_API_URL + url;
    //     return this.httpClient.post<Res>(urlStr, formData, {
    //         headers: {
    //             'skipContentType': 'skip'
    //         }
    //     });
    // }
}


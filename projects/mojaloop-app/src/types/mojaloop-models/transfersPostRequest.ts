/**
 * Open API for FSP Interoperability (FSPIOP) (Implementation Friendly Version)
 * Based on [API Definition version 1.0](https://github.com/mojaloop/mojaloop-specification/blob/develop/API%20Definition%20v1.0.pdf).  **Note:** The API supports a maximum size of 65536 bytes (64 Kilobytes) in the HTTP header.
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ExtensionList } from './extensionList'
import { Money } from './money'

/**
 * The object sent in the POST /transfers request.
 */
export interface TransfersPostRequest {
    /**
     * The common ID between the FSPs and the optional Switch for the transfer object, decided by the Payer FSP. The ID should be reused for resends of the same transfer. A new ID should be generated for each new transfer.
     */
  transferId: string
  /**
   * Id of the quote that was sent prior to initiating the transfer
   */
  quoteId: string
    /**
     * Payee FSP in the proposed financial transaction.
     */
  payeeFsp: string
    /**
     * Payer FSP in the proposed financial transaction.
     */
  payerFsp: string
  amount: Money
    /**
     * The ILP Packet containing the amount delivered to the Payee and the ILP Address of the Payee and any other end-to-end data.
     */
  ilpPacket: string
    /**
     * The condition that must be fulfilled to commit the transfer.
     */
  condition: string
    /**
     * Expiration can be set to get a quick failure expiration of the transfer. The transfer should be rolled back if no fulfilment is delivered before this time.
     */
  expiration: string
  extensionList?: ExtensionList
}

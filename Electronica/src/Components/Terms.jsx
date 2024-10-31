import React from 'react';
import '../Terms.css'; // Assume this is your CSS file for styling

const Terms = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome, please read the terms and conditions described below that apply to the website Radio Shack.co.cr.
      </p>

      <h2>General Policies</h2>
      <h3>Objective</h3>
      <p>
        Establish the terms and conditions to be published on Radioshack.co.cr to maintain transparency standards with the customer.
      </p>

      <h3>Scope</h3>
      <p>
        This document applies to the operations of Unión Comercial de Costa Rica Unicomer S.A in Costa Rica, part of the Unicomer Group, and its e-commerce platforms Radio Shack.co.cr and Gollo.com.
      </p>

      <h3>Privacy</h3>
      <p>
        All information provided by the customer at the time of registration or purchase will be treated with absolute confidentiality and privacy.
      </p>

      <p>
        The following customer information is safeguarded on the website Radioshack.co.cr:
      </p>
      <ul>
        <li>Personal Information: name, ID number, physical address, phone number, and email address.</li>
      </ul>
      <p>
        All information provided through this medium must be real and up-to-date, and it is your sole responsibility to maintain its confidentiality and the security of your account.
      </p>

      <h3>Currency</h3>
      <p>
        Prices on Radioshack.co.cr will be displayed in colones.
      </p>

      <h3>Price and Promotions</h3>
      <p>
        Prices are exclusively for purchases made on Radioshack.co.cr, are subject to change without prior notice, and include all sales taxes according to current regulations in Costa Rica. Shipping costs are not included in the price and may vary depending on the canton selected for delivery. Promotions presented will be exclusively for purchases made through these two means.
      </p>
      <p>
        By entering the website Radioshack.co.cr, the customer consents to authorize Unión Comercial de Costa Rica, Unicomer S.A, to send promotional messages by any physical and electronic means to the phone numbers and email addresses provided through these channels, and if necessary, will update them through any communication channel. The company is exempted from responsibility for sending such messages. If the customer does not wish to receive this information, they may notify via email to be removed from the preferred customer list.
      </p>

      <h3>Product Availability</h3>
      <p>
        In case images are present on the Radio Shack site but the item is out of stock, Unicomer reserves the right to inform the customer within 48 hours about the cancellation of the order or the offer of a substitute product. If the customer does not accept, the order will be canceled, and the money refunded.
      </p>
      <p>
        The existence of items on the page and lack of availability for delivery will never be interpreted by the user or Unicomer as misleading advertising since technical situations may cause inventory inconsistencies for delivery and the images advertised on the page.
      </p>
      <p>
        The color and images of the products may vary depending on the mobile device or computer used to consult the App or website and the accessories of each of them.
      </p>

      <h3>Orders</h3>
      <p>
        On the website Radioshack.co.cr, any type of order can be received from anywhere in the world, but deliveries can only be made in Costa Rica. Anyone can make a purchase, provided they are registered and over eighteen (18) years old.
      </p>
      <p>
        Within the website, the customer can purchase all products and services available, and the purchase receipt will be sent to the customer via email.
      </p>
      <p>
        If the customer wishes to make a purchase via the WhatsApp link, tracking and payment will be conducted exclusively through this medium.
      </p>
      <p>
        Purchases made will be delivered to the customer at the requested destination, provided it is within the coverage area.
      </p>
      <p>
        The credit or debit card owner will be the only authorized person to receive the product and sign the receipt. However, if they cannot be present at the delivery, they may authorize a third party and include them as the recipient of the merchandise, always under the complete responsibility of the Customer. For a third party to pick up or receive an order, they must present:
      </p>
      <ul>
        <li>A copy or photo of the ID of the customer who made the purchase.</li>
      </ul>
      <p>
        In case of any suspicion of fraud, Unicomer reserves the right to deliver the item.
      </p>
      <p>
        If delivery cannot be made due to the recipient's absence, Unicomer staff will attempt to contact the customer by phone. After three failed attempts, the customer must subsequently contact Unicomer customer service to coordinate a second delivery.
      </p>
      <p>
        Unicomer reserves the right to withhold the delivery of merchandise when weather conditions or road infrastructure do not allow free transit of transport units. In this situation, the Contact Center will call each customer to coordinate delivery or issue the corresponding refunds.
      </p>

      <h3>Order Cancellation</h3>
      <p>
        Any person may cancel their purchase before the product is delivered by sending an email to radioshack_cr@unicomer.com or calling the customer service number: 800-00-45665, stating their intention to cancel the purchase order and requesting a refund.
      </p>
      <p>
        Once the refund process for the credit or debit card is authorized, the bank will be requested to return the money to the cardholder's original card used for the purchase. The refund time will not exceed 30 calendar days, but this period may be extended due to the requirement for approval from the issuing bank of the card used for the purchase, as well as from the collecting bank, and the timing of these banking institutions is beyond Unicomer's control.
      </p>
      <p>
        If the purchase was made through a zero-rate installment payment with Credomatic, the refund will be made to the main account, and the customer must call Credomatic to apply the reversal to the plan.
      </p>
      <p>
        If the purchased item is unavailable due to lack of stock in the market, the customer will be notified explaining why their order cannot be delivered, and the customer may decide whether to change their purchase or cancel it for a full refund.
      </p>

      <h3>Order Cancellation due to Lack of Contact with the Customer</h3>
      <p>
        Once the purchase order is entered on www.radioshack.cr, it will be processed for order preparation and delivery according to the purchase order request. If the customer cannot be located after three attempts via visit, phone call, SMS, and email provided by the customer for contact, and no response is obtained through these means, the order will be canceled within 3 business days due to lack of contact with the customer, without any liability for Unicomer.
      </p>

      <h3>Order Status</h3>
      <p>
        There are 6 order statuses as follows:
      </p>
      <ul>
        <li>Confirmation: When the order has been verified by Unicomer staff.</li>
        <li>Preparation: The order is being prepared for dispatch or delivery to the customer.</li>
        <li>Delivery Process: The order is on its way to be delivered to the customer's address.</li>
        <li>Ready for Pickup: Applies to orders where the customer has requested to pick up at one of our stores and is ready for collection.</li>
        <li>Delivered: When the order has been sent to the address provided by the customer or has been picked up by the customer or an authorized third party at one of our stores.</li>
        <li>Cancelled: Occurs when:
          <ul>
            <li>The customer requests to cancel the order.</li>
            <li>The customer does not pick up the product in-store or cannot be located.</li>
            <li>The order is considered a possible fraud, according to alerts or signs that Unicomer receives confidentially.</li>
            <li>The customer does not qualify to make the purchase on credit.</li>
          </ul>
        </li>
      </ul>
      <p>
        Each change in order status will be notified to the customer via email.
      </p>

      <h3>Abandoned Cart Reminder</h3>
      <p>
        The customer expressly authorizes to receive a notification to their email about their intention to purchase products that remain in the "Shopping Cart" and the purchase process is not completed. The purpose of this notification is to remind them of their interest in completing the purchase at radioshack.cr.
      </p>
      <p>
        These notifications may be accompanied by promotional benefits, which will be redeemable only for the items that were in the "Shopping Cart" and the purchase was not finalized.
      </p>

      <h3>Protective Films for Mobile Phones</h3>
      <p>
        By purchasing or acquiring a protective film for the mobile phone screen, the customer accepts the opening of the original packaging at our Distribution Center for proper installation.
      </p>

      <h3>Legal Jurisdiction</h3>
      <p>
        These terms and conditions shall be governed and interpreted in accordance with the laws of Costa Rica. For any disputes arising from this document, the parties submit to the jurisdiction of the Courts of the Republic of Costa Rica.
      </p>
    </div>
  );
};

export default Terms;

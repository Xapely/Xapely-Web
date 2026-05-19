# Billing Email Templates

This folder contains two separate inline-CSS HTML email templates: one for invoices and one for receipts.

## Files

- `invoice-email.html` - invoice email template
- `receipt-email.html` - receipt email template

## Shared placeholders

Both templates use the same basic placeholder set:

- `{{EMAIL_SUBJECT}}` - email subject text
- `{{EMAIL_INTRO}}` - short intro line below the heading
- `{{CLIENT_NAME}}` - recipient name
- `{{EMAIL_BODY}}` - main message body
- `{{DOCUMENT_REFERENCE}}` - invoice or receipt number
- `{{AMOUNT}}` - total amount
- `{{DOCUMENT_DATE}}` - due date, issue date, or payment date
- `{{DOCUMENT_STATUS}}` - status text like `Paid`, `Pending`, or `Due`
- `{{PRIMARY_LINK}}` - link to view or download the PDF
- `{{DOCUMENT_NOTE}}` - extra note about the invoice or receipt
- `{{SUPPORT_EMAIL}}` - support contact email
- `{{FOOTER_TEXT}}` - optional footer note

## Styling

The templates use Xapely's brand colors and only inline CSS:

- Primary blue: `#2A7AF6`
- Dark text: `#111827`
- Secondary text: `#374151`
- Muted text: `#6b7280`
- Light footer gray: `#f9fafb`
- Highlight panel: `#f8fbff`

## Suggested usage

### Invoice
- Badge text: `Invoice`
- Heading: `Your invoice is ready`
- Button text: `View Invoice`
- Amount label: `Amount Due`
- Status: `Due` or `Pending`

### Receipt
- Badge text: `Receipt`
- Heading: `Your payment receipt`
- Button text: `Download Receipt`
- Amount label: `Paid Amount`
- Status: `Paid`

## Notes

- Keep everything inline for email client compatibility.
- Use the invoice file when sending unpaid bills and the receipt file when sending payment confirmations.

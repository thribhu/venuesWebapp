export class ContactRequest {
    name   = '';
    website   = '';
    capacity = 0;
    aminities = [];
    address: Address;
  }

  export class Address {
    line1   = '';
    line2   = '';
    email   = '';
    mobile   = '';
    city   = '';
    state   = '';
    zip   = '';
    country   = '';
  }

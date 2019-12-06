export const settings = {
  add: {
    addButtonContent: `New Customer`,
  },
  mode: 'external',
  edit: {
    editButtonContent: '<i class="nb-edit">Edit</i>',
  },
  delete: {
    deleteButtonContent: '<i class="nb-trash">Delete</i>',
    confirmDelete: true
  },
  columns: {
    customerId: {
      title: "Customer Id",
      type: "string"
    },
    customerName: {
      title: "Customer Name",
      type: "string"
    },
    customerAddress: {
      title: "Customer Address",
      type: "string"
    },
    customerEmail: {
      title: "Customer Email",
      type: "string"
    },
    customerPhoneNumber: {
      title: "Customer Phone Number",
      type: "number"
    },
    otherDetails: {
      title: "Other Details",
      type: "string"
    }
  }
};

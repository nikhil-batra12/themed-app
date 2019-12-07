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
    id: {
      title: "Customer Id",
      type: "string"
    },
    name: {
      title: "Customer Name",
      type: "string"
    },
    address: {
      title: "Customer Address",
      type: "string"
    },
    email: {
      title: "Customer Email",
      type: "string"
    },
    phoneNumber: {
      title: "Customer Phone Number",
      type: "number"
    },
    otherDetails: {
      title: "Other Details",
      type: "string"
    }
  }
};

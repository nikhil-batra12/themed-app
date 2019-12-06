export const settings = {
  add: {
    addButtonContent: `New Order`,
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
    orderId: {
      title: "Order Id",
      type: "string"
    },
    orderDate: {
      title: "Order Date",
      type: "string"
    },
    orderCompletionDate: {
      title: "Order Completion Date",
      type: "string"
    },
    amount: {
      title: "Amount(Rs.)",
      type: "number"
    },
    advance: {
      title: "Advance(Rs.)",
      type: "number"
    },
    balance: {
      title: "Balance(Rs.)",
      type: "number"
    },
    orderProductDetails: {
      title: "Order Product Details",
      type: "string"
    },
    customerId: {
      title: "Customer Id",
      type: "string"
    },
    coupon: {
      title: "Coupon",
      type: "string"
    }
  }
};

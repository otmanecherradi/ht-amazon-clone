import { defineStore } from 'pinia';

import { client } from '../feathers';

const service = client.service('products');

export const useProductStore = defineStore({
  id: 'productStore',
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),
  getters: {},
  actions: {
    async loadProducts() {
      try {
        this.loading = true;
        const res = await service.find();
        this.updateProducts(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    },

    updateProducts(payload) {
      this.products = payload;
    },
    clearProducts() {
      this.$reset();
    },
  },
});

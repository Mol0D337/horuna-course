import Vue from 'vue';

export const handleError = (error) => {
  const context = new Vue();
  const description = error.response.data.error;

  context.$bvToast.toast(description, {
    autoHideDelay: 4000,
    variant: 'handle',
    appendToast: false,
    toaster: 'b-toaster-top-right',
  });
};

export const handle = (message, time = 4000) => {
  const context = new Vue();

  context.$bvToast.toast(message, {
    autoHideDelay: time,
    variant: 'handle',
    appendToast: false,
    toaster: 'b-toaster-top-right',
  });
};


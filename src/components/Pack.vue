<template>
  <div class="wrapper" id="buy">
    <div class="title">CHOOSE YOUR PACK</div>
    <div class="pack__wrap">
      <div class="pack pack--silver">
        <div class="pack__header pack--silver_header">silver</div>
        <div class="pack__body pack--silver_body">
          <div>→ 8 sections</div>
          <div>→ 56 exercises</div>
          <div>→ Special physical exercises</div>
          <div>→ Special menu</div>
          <div>→ Stretching</div>
          <div>→ Psychology</div>
          <div class="pack__footer">
            <div class="pack__num">$125</div>
            <button class="button" @click="buy('SILVER', 125)">buy</button>
          </div>
        </div>
      </div>
      <div class="pack pack--gold">
        <div class="pack__header pack--gold_header">gold</div>
        <div class="pack__body pack--gold_body">
          <div>→ 8 sections</div>
          <div>→ 56 exercises</div>
          <div>→ Special physical exercises</div>
          <div>→ Special menu</div>
          <div>→ Stretching</div>
          <div>→ Psychology</div>
          <div class="yellow">→ 1 to 1 online meeting with Stas Horuna</div>
          <div class="pack__footer">
            <div class="pack__num">$250</div>
            <button class="button" @click="buy('GOLD', 250)">buy</button>
          </div>
        </div>
      </div>
      <div class="pack pack--bronze">
        <div class="pack__header pack--bronze_header">bronze</div>
        <div class="pack__body pack--bronze_body">
          <div>→ 8 sections</div>
          <div>→ 56 exercises</div>
          <div class="pack__footer">
            <div class="pack__num">$75</div>
            <button class="button" @click="buy('BRONZE', 75)">buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Wayforpay } from '@/plugins/pay-widget';
import CryptoJS from "crypto-js";
import { PaymentCheck } from "@/api";

export default {
  name: "Pack",
  methods: {
    buy(pack, amount) {
      const orderReference = `H${pack.slice(0, 1)}:xxxyxxyxyxx`.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16).toUpperCase();
      });

      const orderDate = Date.now();

      const merchantSignature = CryptoJS.HmacMD5(`horuna_com;horuna.com;${orderReference};${orderDate};${amount};USD;KARATE COURSE - ${pack} PACK;1;${amount}`, '0e6a69dabc5c9d2a541b2e8ea36b31bd2302c183').toString();

      const merchantSignatureStatus = CryptoJS.HmacMD5(`horuna_com;${orderReference}`, '0e6a69dabc5c9d2a541b2e8ea36b31bd2302c183').toString();

      const wayforpay = new Wayforpay();
      const pay = function () {
        wayforpay.run({
            merchantAccount: 'horuna_com',
            merchantAuthType: 'SimpleSignature',
            merchantDomainName: 'horuna.com',
            orderReference,
            orderDate,
            amount,
            currency: 'USD',
            orderTimeout: '49000',
            productName: `KARATE COURSE - ${pack} PACK`,
            productPrice: amount,
            productCount: '1',
            defaultPaymentSystem: 'card',
            merchantSignature,
            language: "EN",
            returnUrl: "http://localhost:8080/public-offer-contract",
            serviceUrl: "https://api.onlysense.app/payment/check",
          },
          async function (response) {
            console.log(response, 'approve');
            const resp = await PaymentCheck({
              orderReference: orderReference,
              merchantSignature: merchantSignatureStatus,
              course: `HORUNA ${pack}`,
            });
            console.log(resp.data);
          },
          function (response) {
            console.log(response, 'reject');
          },
          function (response) {
            console.log(response, 'pending');
          }
        );
      };
      pay();
    },
  }
}
</script>


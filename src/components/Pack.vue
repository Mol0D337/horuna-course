<template>
  <div class="wrapper" id="buy">
    <h2 class="title">CHOOSE YOUR PACK</h2>
    <div class="pack__wrap">
      <div class="pack pack--silver">
        <h3 class="pack__header pack--silver_header">silver</h3>
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
        <h3 class="pack__header pack--gold_header">gold</h3>
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
        <h3 class="pack__header pack--bronze_header">bronze</h3>
        <div class="pack__body pack--bronze_body">
          <div>→ 8 sections</div>
          <div>→ 56 exercises</div>
          <div class="pack__footer">
            <div class="pack__num">$75</div>
            <button class="button" @click="buy('BRONZE', 1)">buy</button>
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

      const merchantSignature = CryptoJS.HmacMD5(`horuna_com;horuna.com;${orderReference};${orderDate};${amount};UAH;KARATE COURSE - ${pack} PACK;1;${amount}`, '0e6a69dabc5c9d2a541b2e8ea36b31bd2302c183').toString();

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
            currency: 'UAH',
            orderTimeout: '49000',
            productName: `KARATE COURSE - ${pack} PACK`,
            productPrice: amount,
            productCount: '1',
            defaultPaymentSystem: 'card',
            merchantSignature,
            language: "EN",
          },
          async function (response) {
            const resp = await PaymentCheck({
              orderReference: orderReference,
              merchantSignature: merchantSignatureStatus,
              course: `HORUNA ${pack}`,
            });
            if (resp) {
              window.open('/payment', '_self');
            }
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

